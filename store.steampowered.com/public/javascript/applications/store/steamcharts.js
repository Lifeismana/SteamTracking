/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      94381: (R, je, r) => {
        "use strict";
        r.d(je, { S: () => b });
        var e = r(7850),
          U = r(68031),
          V = r(31857);
        function ne(z) {
          return (0, e.jsx)(V.I, {
            ...z,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var ee = r(21895),
          te = r(64238),
          le = r.n(te),
          K = r(80549);
        function b(z) {
          const {
              checked: Q,
              onChange: C,
              disabled: B,
              children: O,
              ref: G,
              variant: J,
              color: be,
              align: Z = "center",
              icon: ce,
              ...xe
            } = z,
            ue = Q === "indeterminate",
            L = ce ?? (ue ? w : ne),
            $ = () => {
              B || (C && C(ue ? !0 : !Q));
            },
            q = (se) => {
              B ||
                (se.key === " " &&
                  ($(), se.preventDefault(), se.stopPropagation()));
            },
            Ie = (0, K.f)("Checkbox", J);
          return (0, e.jsxs)(U.s, {
            align: Z,
            ref: G,
            role: "checkbox",
            "aria-checked": ue ? "mixed" : Q,
            "data-state": v(Q),
            className: le()(ee.Root, ee[`Variant-${Ie}`], B && ee.Disabled),
            onClick: $,
            tabIndex: 0,
            onKeyDown: q,
            cursor: "default",
            "aria-disabled": B,
            "data-accent-color": be,
            ...xe,
            children: [
              (0, e.jsx)("div", {
                className: ee.Checkbox,
                children: Q && (0, e.jsx)(L, { className: ee.Icon }),
              }),
              O,
            ],
          });
        }
        function v(z) {
          return z === "indeterminate" ? z : z ? "checked" : "unchecked";
        }
        function w(z) {
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
      31857: (R, je, r) => {
        "use strict";
        r.d(je, { I: () => te });
        var e = r(7850),
          U = r(69289),
          V = r(8928),
          ne = r(16619),
          ee = r.n(ne);
        function te(w) {
          return (0, e.jsx)("svg", { ...b(w) });
        }
        const le = [
          ...V.L,
          {
            prop: "size",
            responsive: !0,
            className: (w) => ne[`IconSize-${w}`],
          },
          {
            prop: "color",
            className: ne.Color,
            cssProperty: (w) => ["--icon-color", K(w)],
          },
          {
            prop: "hitSlop",
            className: ne.HitSlop,
            cssProperty: (w) => [
              "--hit-slop-custom",
              typeof w == "string" ? w : "",
            ],
          },
          V.h.find(({ prop: w }) => w === "cursor"),
        ];
        function K(w) {
          return !w || w[0] === "#" ? w : (0, U.w7)(w);
        }
        function b(w) {
          const { viewBox: z, ...Q } = w,
            B = { className: Q.size ? void 0 : ne.IconSizeDefault, ...Q };
          return z && (B.viewBox = v(z)), (0, U.mz)(B, le);
        }
        function v(w) {
          if (w)
            return typeof w == "number"
              ? `0 0 ${w} ${w}`
              : typeof w == "string"
                ? w
                : `0 0 ${w.width} ${w.height}`;
        }
      },
      50109: (R, je, r) => {
        "use strict";
        r.d(je, { E: () => Q, O: () => z });
        var e = r(14947),
          U = r(65946),
          V = r(99412),
          ne = r(41635),
          ee = r(27066),
          te = r(3166),
          le = r(38585),
          K = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          v = (C, B, O, G) => {
            for (
              var J = G > 1 ? void 0 : G ? b(B, O) : B, be = C.length - 1, Z;
              be >= 0;
              be--
            )
              (Z = C[be]) && (J = (G ? Z(B, O, J) : Z(J)) || J);
            return G && J && K(B, O, J), J;
          };
        const w = class qt {
          m_eCurLang = (0, V.sfN)(te.TS.LANGUAGE);
          m_rgHasData = (0, ne.$Y)([], V.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new le.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(B) {
            return this.m_eCurLang != B
              ? ((this.m_eCurLang = B), this.GetCallback().Dispatch(B), !0)
              : !1;
          }
          SetHasLanguage(B) {
            B.forEach((O, G) => {
              this.m_rgHasData[G] != O && (this.m_rgHasData[G] = O);
            });
          }
          BHasLanguageData(B) {
            return this.m_rgHasData[B];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(B) {
            B != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = B);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              qt.s_globalSingletonStore ||
                (qt.s_globalSingletonStore = new qt()),
              qt.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        v([e.sH], w.prototype, "m_eCurLang", 2),
          v([e.sH], w.prototype, "m_rgHasData", 2),
          v([e.sH], w.prototype, "m_bHasLocalizationContext", 2),
          v([ee.o], w.prototype, "GetCurEditLanguage", 1),
          v([ee.o], w.prototype, "SetCurEditLanguage", 1),
          v([e.XI.bound], w.prototype, "SetHasLanguage", 1),
          v([ee.o], w.prototype, "BHasLanguageData", 1);
        let z = w;
        function Q() {
          return (0, U.q3)(() => z.Get().GetCurEditLanguage());
        }
      },
      21042: (R, je, r) => {
        "use strict";
        r.d(je, { Sm: () => le, U: () => ee, r3: () => b });
        var e = r(99412),
          U = r(72609),
          V = r(73259),
          ne = r(76559);
        function ee(v, w, z, Q) {
          const C = new V.lh();
          return (
            (C.type = w),
            (C.clanSteamID = new ne.b(v, U.TS.EUNIVERSE, e.P3F, 0)),
            (C.GID = "fakeevent_" + te++),
            (C.visibility_state = V.zv.k_EEventStateUnlisted),
            (C.visibilityStartTime = Q - 1),
            (C.jsondata.bSaleEnabled = !0),
            (C.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (C.jsondata.sale_vanity_id = z),
            (C.jsondata.sale_header_offset = 0),
            (C.jsondata.sale_header_disable_top_margin = !1),
            C
          );
        }
        let te = 1234;
        function le(v, w) {
          return {
            unique_id: te++,
            capsules: [],
            events: [],
            links: [],
            section_type: v,
            localized_label: [],
            default_label: w,
          };
        }
        const K = "socialcontent_";
        function b() {
          return {
            platforms: [
              { label: V.Zf.Steam, checked: !0 },
              { label: V.Zf.Facebook, checked: !0 },
              { label: V.Zf.Twitter, checked: !0 },
              { label: V.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: K + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: V.jR.SummaryLargeImage,
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
      },
      55436: (R, je, r) => {
        "use strict";
        r.d(je, { r: () => Q, z: () => w });
        var e = r(7850),
          U = r(90626),
          V = r(16412),
          ne = r(25792),
          ee = r(96538),
          te = r(18210),
          le = r(85599),
          K = r(17618),
          b = r.n(K),
          v = r(53424);
        const w = (C) => {
            const { clanSteamID: B, fnImageSelectCallBack: O } = C,
              [G, J] = (0, U.useState)(""),
              be = (0, v.mr)(C.clanSteamID.GetAccountID()),
              Z = () => C.closeModal && C.closeModal(),
              ce = v.pU.GetFilteredClanImages(B, G),
              xe = (ue) => {
                O(ue), Z();
              };
            return (0, e.jsx)(ne.tH, {
              children: (0, e.jsx)(ee.x_, {
                onEscKeypress: Z,
                children: (0, e.jsxs)(V.UC, {
                  children: [
                    (0, e.jsx)(V.Y9, {
                      children: (0, te.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(V.nB, {
                      children: (0, e.jsxs)(V.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, te.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(V.pd, {
                            placeholder: (0, te.we)("#ClanImageChooser_Search"),
                            value: G,
                            onChange: (ue) => J(ue.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: K.ImagesOuterContainer,
                            children: be
                              ? (0, e.jsx)(le.t, {
                                  size: "medium",
                                  string: (0, te.we)("#Loading"),
                                })
                              : ce.length > 0
                                ? ce.map((ue) =>
                                    (0, e.jsx)(
                                      z,
                                      {
                                        clanImage: ue,
                                        searchStringHilight: G,
                                        fnImageClick: xe,
                                      },
                                      "ci" + ue.image_hash,
                                    ),
                                  )
                                : G.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, te.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, te.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(V.wi, {
                      children: (0, e.jsx)(V.$n, {
                        onClick: Z,
                        children: (0, te.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          z = (C) => {
            const { clanImage: B, searchStringHilight: O, fnImageClick: G } = C;
            let J = B.file_name ? B.file_name : "",
              be = Q(O, J, String(B.imageid), K.Hilight);
            return (0, e.jsxs)("div", {
              className: K.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: K.Image,
                  style: { backgroundImage: `url( '${B.thumb_url}' )` },
                  onDoubleClick: () => G(B),
                }),
                (0, e.jsx)("div", {
                  className: K.ImageFilename,
                  title: J,
                  children: be,
                }),
              ],
            });
          };
        function Q(C, B, O, G) {
          let J = [];
          if (C.length > 0) {
            let be = B.toLocaleLowerCase();
            for (let Z = 0; Z < B.length; ) {
              let ce = be.indexOf(C, Z);
              if (ce < 0) {
                J.push(
                  (0, e.jsx)(
                    "span",
                    { children: B.substring(Z) },
                    O + "_" + String(Z),
                  ),
                );
                break;
              } else
                Z < ce &&
                  J.push(
                    (0, e.jsx)(
                      "span",
                      { children: B.substring(Z, ce) },
                      O + "_" + String(Z),
                    ),
                  ),
                  J.push(
                    (0, e.jsx)(
                      "span",
                      { className: G, children: B.substr(ce, C.length) },
                      O + "_" + String(Z),
                    ),
                  ),
                  (Z = ce + C.length);
            }
          } else J.push((0, e.jsx)("span", { children: B }, O + "_null"));
          return J;
        }
      },
      24806: (R, je, r) => {
        "use strict";
        r.d(je, { Ng: () => G });
        var e = r(7850),
          U = r(75844),
          V = r(90626),
          ne = r(99412),
          ee = r(32093),
          te = r(50109),
          le = r(95695),
          K = r.n(le),
          b = r(36707),
          v = r(18210),
          w = r(92264),
          z = r(30096),
          Q = r(71421),
          C = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          O = (Z, ce, xe, ue) => {
            for (
              var L = ue > 1 ? void 0 : ue ? B(ce, xe) : ce,
                $ = Z.length - 1,
                q;
              $ >= 0;
              $--
            )
              (q = Z[$]) && (L = (ue ? q(ce, xe, L) : q(L)) || L);
            return ue && L && C(ce, xe, L), L;
          };
        let G = class extends V.Component {
          GenerateLanguageOptions() {
            let Z = [];
            const {
              fnFilterLanguage: ce,
              fnLangHasData: xe,
              fnLastUpdateRTime: ue,
              fnIsLangSupported: L,
            } = this.props;
            this.props.bAllowUnsetOption &&
              Z.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ne.xPp,
                    children: (0, v.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let $ = new Array();
            const q = this.props.realms || [ee.TU.k_ESteamRealmGlobal];
            for (const se of v.A0.GetLanguageListForRealms(q)) {
              if (ce && !ce(se)) continue;
              const Ce = (0, ne.LgB)(se),
                c = (0, v.we)("#Language_" + Ce),
                Be = !!(L && L(se));
              $.push({ eLang: se, sLocName: c, bSupported: Be });
            }
            $.sort((se, Ce) =>
              se.bSupported != Ce.bSupported
                ? se.bSupported
                  ? -1
                  : 1
                : se.sLocName.localeCompare(Ce.sLocName),
            );
            let Ie = !1;
            for (const se of $) {
              se.bSupported != Ie &&
                (Z.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: K().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, v.we)(
                        se.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    se.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Ie = se.bSupported));
              const Ce = xe && xe(se.eLang),
                c = ue && ue(se.eLang);
              let Be = se.sLocName;
              c &&
                c !== 0 &&
                ((Be += " "),
                (Be += (0, v.we)(
                  "#Language_Last_Update",
                  (0, v.$z)(c) +
                    " @ " +
                    (0, w.KC)(c, { bForce24HourClock: !1 }),
                ))),
                Z.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: se.eLang,
                      className: (0, b.A)(
                        { [K().LanguageWithContent]: Ce },
                        se.bSupported
                          ? K().SupportedLanguage
                          : K().UnsupportedLanguage,
                      ),
                      children: Be,
                    },
                    "langpicker" + se.eLang + (Ce ? "_hasdata" : ""),
                  ),
                );
            }
            return Z;
          }
          OnLanguageChange(Z) {
            const { fnOnLanguageChanged: ce, selectedLang: xe } = this.props;
            let ue = Number.parseInt(Z.currentTarget.value);
            ue != xe && ce && ce(ue);
          }
          render() {
            const {
              selectedLang: Z,
              bDisabled: ce,
              strTooltip: xe,
            } = this.props;
            let ue = this.GenerateLanguageOptions();
            return (0, e.jsx)(Q.he, {
              toolTipContent: xe,
              children: (0, e.jsx)("select", {
                value: Z,
                onChange: this.OnLanguageChange,
                disabled: ce,
                children: ue,
              }),
            });
          }
        };
        O([z.oI], G.prototype, "OnLanguageChange", 1), (G = O([U.PA], G));
        function J(Z) {
          const [ce, xe] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(G, {
            selectedLang: xe,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !ce,
            strTooltip: ce
              ? void 0
              : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function be(Z) {
          const { fnLangHasData: ce } = Z;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const xe = useObserver(() => {
            const ue = [];
            for (let L = k_ELanguage_English; L < k_ELanguage_MAX; ++L)
              ue[L] = !!(ce && ce(L));
            return ue;
          });
          return (
            React.useEffect(
              () => CEditorLocStore.Get().SetHasLanguage(xe),
              [xe],
            ),
            jsx(Fragment, {})
          );
        }
      },
      25679: (R, je, r) => {
        "use strict";
        r.d(je, { _: () => as });
        var e = r(7850),
          U = r(99412),
          V = r(19298),
          ne = r(20169),
          ee = r(28604),
          te = r(36631),
          le = r(64387);
        function K(s) {
          const { strURL: t } = s;
          return t
            ? (0, e.jsx)("div", {
                className: le.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var b = r(65946),
          v = r(90626),
          w = r(73259),
          z = r(25792),
          Q = r(52393),
          C = r.n(Q),
          B = r(95695),
          O = r.n(B),
          G = r(36707),
          J = r(3166),
          be = r(82054),
          Z = r(68266);
        function ce(s) {
          const { event: t, bIsPreview: a } = s;
          let o = t.jsondata.sale_background_video_webm,
            i = t.jsondata.sale_background_video_mp4;
          return i || o
            ? (0, e.jsx)(z.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, G.A)(
                    C().SaleBackground,
                    C()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    C().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    o && (0, e.jsx)("source", { src: o, type: "video/webm" }),
                    i &&
                      !J.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: i, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function xe(s) {
          const { event: t, language: a, children: o, bIsPreview: i } = s,
            l = v.useRef(null),
            u = (0, Z.m0)(t, "sale_header", a),
            [x] = (0, b.q3)(() => [t.jsondata.sale_sub_menu]);
          v.useEffect(() => {
            if (!u) return;
            const E = new Image();
            (E.onload = () => {
              const D = (100 * E.width) / 950 + "%";
              l.current && l.current.style.setProperty("--background-scale", D);
            }),
              (E.src = u);
          }, [u]);
          const f = t.jsondata.sale_sections?.some(
              (E) => E.section_type === "contenthubmaincarousel",
            ),
            I =
              t.jsondata.item_source_type === w.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                f),
            j = u ? `url(${u})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              x
                ? (0, e.jsx)(be.j, {
                    event: t,
                    language: a,
                    bIsPreview: i,
                    subMenu: x,
                    styleVariation: be.g.k_SubMenu,
                  })
                : (0, e.jsx)(K, { strURL: u }),
              (0, e.jsx)("div", {
                className: (0, G.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: I,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, G.A)(
                    C()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    C().SaleBackground,
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
                          className: (0, G.A)(
                            O().SalePageBackground,
                            O().BackgroundImage,
                            O().Blur,
                          ),
                          src: u,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, G.A)(
                            O().SalePageBackground,
                            O().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: j,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(ce, { event: t, bIsPreview: i }),
                    (0, e.jsx)(e.Fragment, { children: o }),
                  ],
                }),
              }),
            ],
          });
        }
        var ue = r(26589),
          L = r(39905),
          $ = r(50909),
          q = r.n($);
        function Ie(s) {
          const { eventModel: t } = s,
            { data: a } = (0, ue.hM)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, J.yK)() == "community"
          )
            return;
          const o = t.GetAllTags(),
            i = [];
          if (
            (o.includes("hide_store") &&
              i.push(
                L.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            o.includes("mod_hide_store") &&
              a.support_user &&
              i.push(L.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              o.includes("contenthub") &&
              i.push(
                L.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && i.length == 0))
          )
            return (0, e.jsx)("div", {
              className: q().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: q().WarningText,
                      children: L.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  i.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: q().WarningText,
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
        var se = r(76789),
          Ce = r.n(se),
          c = r(18210);
        function Be(s) {
          const { eventModel: t, language: a } = s,
            [o, i] = (0, b.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return i && i?.length > 0
            ? o
              ? (0, e.jsx)("a", {
                  className: Ce().SalePageLogoCtn,
                  href: J.TS.STORE_BASE_URL + o,
                  children: (0, e.jsx)(Ye, { ...s }),
                })
              : (0, e.jsx)("div", {
                  className: (0, G.A)(Ce().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Ye, { ...s }),
                })
            : null;
        }
        function Ye(s) {
          const { eventModel: t, language: a } = s,
            o = (0, Z.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: o, alt: "logo" });
        }
        var Ge = r(72865),
          rt = r(71347),
          ut = r.n(rt),
          gt = r(53107);
        function ft(s) {
          const { rgPresenters: t } = s;
          if (!t || t.length == 0) return null;
          const a = (0, U.sfN)(J.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, G.A)(
                  ut().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: L.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(ot, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, G.A)(
                  ut().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: L.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((o, i) =>
                      (0, e.jsxs)(
                        v.Fragment,
                        {
                          children: [
                            (0, e.jsx)(ot, { presentor: o, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        o.url,
                      ),
                    ),
                  (0, e.jsx)(ot, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function ot(s) {
          const { presentor: t, lang: a } = s,
            o = (0, Ge.aL)(t.url);
          return (0, e.jsx)(gt.uU, {
            href: o,
            bUseLinkFilter: !0,
            className: ut().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var ze = r(60480),
          vt = r(92757),
          S = r(18994),
          oe = r(86515),
          xt = r(39153),
          Ve = r(61478);
        function Et(s) {
          const { event: t, broadcastEmbedContext: a } = s,
            o = !!t?.jsondata?.broadcast_display_wide_player,
            i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Ve.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: o,
                bWideBroadcastPermitChat: i,
              }),
          });
        }
        var Oe = r(85671);
        function Fe(s) {
          const {
            event: t,
            fnOnChangeDayIndex: a,
            addtionalAdminButtons: o,
          } = s;
          return (0, e.jsx)(Oe.g, {
            eventModel: t,
            fnOnUpdateSaleDayIndex: a,
            addtionalAdminButtons: o,
            bSupportsSticky: !0,
          });
        }
        var Re = r(179),
          Ke = r(50109),
          Ze = r(30096),
          ea = r(98609),
          it = r(57673);
        const Rt = new Map();
        function ta(s, t) {
          const a = s.findIndex((o) => o.section_type === "tabs");
          if (a >= 0 && t !== void 0) {
            const o = s[a],
              i = o.tabs?.findIndex((l) => l.unique_id === t);
            if (i !== void 0 && i >= 0 && o.tabs)
              return {
                selectedTabBackgroundDef: o.tabs[i].tab_background_img_groups,
                nTabSaleSectionIndex: a,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function Ia(s, t, a) {
          const o = new Map(),
            i = new Map(),
            l = new Map();
          let u,
            x,
            f = 0;
          const { selectedTabBackgroundDef: I, nTabSaleSectionIndex: j } = ta(
            t,
            a,
          );
          if (s?.enabled) {
            const E = s.groups?.length;
            if (
              (s.groups?.forEach((P, D) => {
                if (f >= t.length || t[f].section_type == "tabs") return;
                const H = new Array();
                for (
                  let N = 0;
                  N < (P?.num_sections || 0) &&
                  f < t.length &&
                  t[f].section_type != "tabs";
                  ++N, ++f
                ) {
                  const Y = t[f].unique_id;
                  H.push(Y),
                    i.set(Y, P.background_id),
                    N === 0 && l.set(Y, P.background_id);
                }
                if (
                  (o.set(P.background_id, {
                    nBackgroundGroupID: P.background_id,
                    sectionUniqueIDs: H,
                    nSaleSectionLastIndex: f - 1,
                    nUniqueIDNextSaleSection:
                      f < t.length && (j === void 0 || f < j)
                        ? t[f].unique_id
                        : void 0,
                  }),
                  D + 1 == E && s.last_group_until_cover_section_until_end)
                )
                  for (
                    let N = f;
                    N < t.length &&
                    (!I || !I.enabled || N < j) &&
                    !(t[N].section_type == "tabs" && I?.enabled);
                    ++N
                  ) {
                    const Y = t[N].unique_id;
                    i.set(Y, P.background_id);
                  }
              }),
              f < t.length && (j === void 0 || f < j) && (u = t[f].unique_id),
              I?.enabled && j !== void 0)
            ) {
              let P = j;
              const D = I.groups.length;
              for (
                I.groups.forEach((H, W) => {
                  if (P >= t.length) return;
                  const N = new Array();
                  for (
                    let F = 0;
                    F < H.num_sections && P < t.length;
                    ++F, ++P
                  ) {
                    const ae = t[P],
                      fe = ae.unique_id;
                    (0, it.bF)(a, ae)
                      ? (N.push(fe),
                        i.set(fe, H.background_id),
                        F === 0 && l.set(fe, H.background_id))
                      : --F;
                  }
                  let T = P;
                  for (; T < t.length && !(0, it.bF)(a, t[T]); ) T += 1;
                  if (
                    (o.set(H.background_id, {
                      nBackgroundGroupID: H.background_id,
                      sectionUniqueIDs: N,
                      nSaleSectionLastIndex: P - 1,
                      nUniqueIDNextSaleSection:
                        T < t.length ? t[T].unique_id : void 0,
                    }),
                    W + 1 == D && I.last_group_until_cover_section_until_end)
                  )
                    for (let F = P; F < t.length; ++F) {
                      const ae = t[F];
                      if (ae.section_type == "tabs" && I?.enabled) break;
                      (0, it.bF)(a, ae) && i.set(ae.unique_id, H.background_id);
                    }
                });
                P < t.length && !(0, it.bF)(a, t[P]);
              )
                P++;
              P < t.length && (x = t[P].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: o,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: i,
            mapFirstSectionToGroup: l,
            selectedTabBackgroundDef: I,
            nTabSaleSectionIndex: j,
            nFirstTabSectionIDWithoutGroup: x,
          };
        }
        var Ae = r(29630),
          yt = r(68434),
          Ee = r(15181),
          de = r(41635),
          qe = r(81416);
        function aa(s, t, a, o) {
          let l = s.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !l &&
              o >= 0 &&
              (l = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((f) => f.unique_id == o)
                ?.tab_background_img_groups?.groups?.find(
                  (f) => f.background_id == t.groupID,
                )),
            (0, e.jsx)(
              ba,
              {
                eventModel: s,
                displayDef: l,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  l &&
                  l.randomize_section_order &&
                  a !== qe.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(_a, {
                        clanEventGID: s.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function _a(s) {
          const { clanEventGID: t, elSaleSections: a } = s,
            [o, i] = (0, yt.M)(`sale_section_seed_${t}`, (0, Ee.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && o !== void 0) {
            const l = (0, Ee.A)(o);
            return (0, e.jsx)(e.Fragment, { children: de.fW(a, 0, l) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function ba(s) {
          const {
              displayDef: t,
              children: a,
              eventModel: o,
              derivedGroupInfo: i,
            } = s,
            l = (0, Ke.E)(),
            u = v.useCallback(
              (D, H) => {
                Rt.set(i.nBackgroundGroupID, H);
              },
              [i],
            ),
            x = (0, Ze.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let f;
          if (t.localized_background_art) {
            const D = (0, U.LgB)(l),
              H =
                D in t.localized_background_art
                  ? D
                  : c.A0.GetLanguageFallback(ea.TS.LANGUAGE),
              W = t.localized_background_art[H];
            W && (f = Ae.zU.GenerateURLFromHashAndExt(o.clanSteamID, W));
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
            E = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            P = {
              backgroundImage: I ? `url(${f}), ${I}` : `url(${f})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: E ? t.position_setting : void 0,
              backgroundColor: j ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: x,
            style: P,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var Ut = r(9807),
          Bt = r(4720),
          Lt = r(64641),
          et = r.n(Lt),
          At = r(85599);
        function tt(s) {
          return typeof s == "string" || typeof s == "number"
            ? s
            : JSON.stringify(s);
        }
        class qa {
          Keyify = (t) => tt(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, a) {
            const o = this.m_mapVisible.get(this.Keyify(t)) || 0,
              i = this.m_mapVisible.get(this.Keyify(a)) || 0;
            return o - i;
          }
          BMarkAppVisibile(t, a) {
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return (
              o.add(i),
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
            const o = this.EnsureOwnerSetExists(t),
              i = this.Keyify(a);
            return o.has(i) ? (this.DecrementAppVisibility(i), !0) : !1;
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
        var It = r(71742),
          na = r(53113),
          sa = r(90405);
        function Tt(s, t) {
          return s
            ? t
              ? !!s.valve_admin
              : !!(s.valve_admin || s.support_user)
            : !1;
        }
        function Le(s, t) {
          const a = !!(s && s.BIsClanAccount()),
            { data: o } = (0, ue.hM)(a ? s.GetAccountID() : 0);
          return a && Tt(o, t);
        }
        function ra(s) {
          const { clanSteamID: t, id: a } = s;
          return Le(t, s.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, G.A)(
                  s.className,
                  s.requireAdmin
                    ? B.ValveOnlyAdminBackground
                    : B.ValveOnlyBackground,
                ),
                children: s.children,
              })
            : null;
        }
        var re = r(16412),
          _e = r(96538),
          Pe = r(88003),
          ja = r(12932),
          mt = r(46777),
          oa = r(77495),
          ia = r(16346),
          la = r(61257),
          Ca = r(56718),
          ht = r(71421),
          ca = r(27828),
          Pt = r.n(ca);
        function Ea(s) {
          return `rgba(${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}, ${s.rgb.a})`;
        }
        function ya(s) {
          const t = parseInt(s.slice(1), 16),
            a = (t >> 16) & 255,
            o = (t >> 8) & 255,
            i = t & 255;
          return `rgba(${a}, ${o}, ${i}, 1)`;
        }
        function da(s) {
          const { color: t, onChange: a, strTitle: o, disableAlpha: i } = s,
            [l, u] = (0, v.useState)(() => t || "rgba(255, 255, 255, 1)"),
            x = (0, v.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(L.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const j = (await new window.EyeDropper().open()).sRGBHex,
                  E = ya(j);
                u(E), a(E);
              } catch (f) {
                console.warn(L.Z.Localize("#Sale_EyeDropperFailed"), f);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: Pt().ColorPickerDialog,
            children: [
              !!o && (0, e.jsx)(re.JU, { children: o }),
              (0, e.jsx)(la.xk, {
                onChange: (f) => {
                  const I = Ea(f);
                  u(I), a(I);
                },
                color: l,
                disableAlpha: i,
                className: Pt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: Pt().EyeDropperCtn,
                children: (0, e.jsx)(ht.Gq, {
                  toolTipContent: L.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(re.$n, {
                    className: Pt().EyeDropperBtn,
                    onClick: x,
                    children: (0, e.jsx)(Ca.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function Aa(s) {
          const {
              color: t,
              onChange: a,
              onRequestClose: o,
              disableAlpha: i,
              strTitle: l,
            } = s,
            u = (0, v.useRef)(null);
          return (
            (0, v.useEffect)(() => {
              const x = u.current?.ownerDocument ?? document,
                f = (j) => {
                  u.current && !u.current.contains(j.target) && o();
                },
                I = (j) => {
                  j.key === "Escape" && o();
                };
              return (
                x.addEventListener("pointerdown", f, !0),
                x.addEventListener("keydown", I, !0),
                () => {
                  x.removeEventListener("pointerdown", f, !0),
                    x.removeEventListener("keydown", I, !0);
                }
              );
            }, [o]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(da, {
                color: t,
                disableAlpha: i,
                strTitle: l ?? L.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function Se() {
          return {
            openColorPicker: (0, v.useCallback)((t, a) => {
              let o = null;
              const i = () => o?.Hide();
              o = (0, ia.lX)(
                (0, e.jsx)(Aa, {
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
        var _t = r(13447),
          at = r.n(_t),
          ua = r(32190),
          Dt = r.n(ua),
          Qe = r(76559),
          Nt = r(75909),
          He = r(53424),
          zt = r(72604),
          Da = r(41735),
          bt = r.n(Da),
          lt = r(14947),
          ct = r(9046),
          Sa = Object.defineProperty,
          wa = Object.getOwnPropertyDescriptor,
          Ma = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? wa(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Sa(t, a, i), i;
          };
        const kt = class dn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, lt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, o, i) {
            let l =
                J.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: o, lang: "" + i };
            return (
              (await bt().get(l, { params: u, cancelToken: t && t.token })).data
                .success == zt.R
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
              (this.m_curLocImageGroup.localized_images = (0, de.$Y)(
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
              let o = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[a]
                ? this.m_curLocImageGroup.localized_images[a]
                : Ae.zU.GenerateURLFromHashAndExt(
                    t,
                    Ae.zU.GetHashAndExt(o) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              o = Qe.b.InitFromClanID(a.clanAccountID),
              i = Ae.zU.GetHashAndExt(a) ?? "",
              l = [];
            for (let x = U.Bhc; x < U.bP9; ++x)
              l.push(dn.BDoesClanImageFileExistsOnCDNOrOrigin(t, o, i, x));
            const u = await Promise.all(l);
            (0, lt.h5)(() => {
              for (let x = U.Bhc; x < U.bP9; ++x)
                u[x] &&
                  (this.m_curLocImageGroup.localized_images[x] =
                    Ae.zU.GenerateURLFromHashAndExtAndLang(
                      o,
                      i,
                      ct.wI.full,
                      x,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, o) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = o
                ? Ae.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    o,
                    ct.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, a) {
            if (!this.m_curLocImageGroup) return;
            let o = this.m_curLocImageGroup.primaryImage;
            if (o?.image_hash == t) {
              const i = Qe.b.InitFromClanID(o.clanAccountID),
                l = Ae.zU.GetHashAndExt(o);
              l &&
                (this.m_curLocImageGroup.localized_images[a] =
                  Ae.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    l,
                    ct.wI.full,
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
              .map((o) => Ae.zU.GetHashAndExtFromURL(o));
          }
        };
        Ma([lt.sH], kt.prototype, "m_curLocImageGroup", 2);
        let Ft = kt;
        const Ue = new Ft();
        var jt = r(38410),
          Ct = r(34592),
          ga = r(75844),
          Ht = r(32093),
          nt = r(72849),
          Ba = r(64),
          La = r(72739),
          St = r(82734);
        function Ta(s, t) {
          const a = v.useRef(void 0),
            o = v.useCallback(
              (u) => {
                u.currentTarget.files.length > 0 &&
                  (s(u.currentTarget.files), (u.currentTarget.value = ""));
              },
              [s],
            ),
            i = v.useCallback(() => a.current.click(), []);
          return [
            La.createPortal(
              (0, e.jsx)("form", {
                onSubmit: Wt,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: a,
                  onChange: o,
                }),
              }),
              window.document.body,
            ),
            i,
          ];
        }
        function Pa(s) {
          const [t, a] = v.useState(!1),
            o = v.useCallback((f) => {
              ((f.dataTransfer.files && f.dataTransfer.files[0]) ||
                (f.dataTransfer.types && f.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            i = v.useCallback((f) => {
              St.NO(f) && a(!1);
            }, []),
            l = v.useCallback(() => a(!1), []),
            u = t ? Wt : void 0,
            x = v.useCallback(
              (f) => {
                f.dataTransfer.files?.length &&
                  (s(f.dataTransfer.files, f),
                  f.preventDefault(),
                  f.stopPropagation()),
                  a(!1);
              },
              [s],
            );
          return [
            {
              onDragEnter: o,
              onDragLeave: i,
              onDragEnd: l,
              onDragOver: u,
              onDrop: x,
            },
            t,
          ];
        }
        async function Na(s, t = 1e3) {
          return await new Promise((a, o) => {
            const i = new Image();
            (i.src = s),
              (i.onload = () => a("success")),
              (i.onerror = () => a("error")),
              t > 0 && window.setTimeout(() => a("timeout"), t);
          });
        }
        function Wt(s) {
          s.preventDefault();
        }
        function Yt(s) {
          switch (s.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = s.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var ka = r(71647),
          dt = r.n(ka);
        function Ga(s) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: o,
              elOverrideDragAndDropText: i,
            } = s,
            [l, u] = Pa(t),
            [x, f] = Ta(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...l,
            className: (0, G.A)(
              u ? dt().DragAndDropContainerDragging : dt().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: i || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: dt().ImageUploadBar,
                children: [
                  x,
                  (0, e.jsxs)("label", {
                    onClick: f,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: dt().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              o,
              s.children,
            ],
          });
        }
        var wt = r(36118),
          Oa = r(21254),
          Ra = r(27344),
          Ne = r.n(Ra),
          Ua = r(9472);
        function ma(s) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: o,
              forceResolution: i,
              elAdditonalButtons: l,
              rgRealmList: u,
            } = s,
            [x, f] = (0, b.q3)(() => [
              t.GetUploadImages(),
              Ke.O.Get().GetCurEditLanguage(),
            ]),
            I = v.useCallback(
              async (P) => {
                let D = Array.from(P),
                  H = !0;
                for (let W = 0; W < D.length; W++) {
                  const N = D[W],
                    { language: T } = (0, jt.jj)(N?.name, f);
                  try {
                    const Y = (0, jt.PD)(T, f, u);
                    (H = await t.AddImageForLanguage(N, Y)),
                      H ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            W +
                            " file=" +
                            N.name,
                        ),
                        (0, Pe.pg)(
                          (0, e.jsx)(_e.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              N.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (Y) {
                    let F = (0, Ct.H)(Y);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + F.strErrorMsg,
                      F,
                    ),
                      (0, Pe.pg)(
                        (0, e.jsx)(_e.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            F.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return H;
              },
              [f, t, u],
            ),
            j = v.useMemo(
              () =>
                l instanceof Array
                  ? l
                  : [
                      (0, e.jsx)(
                        v.Fragment,
                        { children: l },
                        "elAdditonalButtons",
                      ),
                    ],
              [l],
            );
          (0, b.q3)(() =>
            x.map((P) => ({ a: P.GetCurrentImageOption(), b: P.language })),
          );
          const E = async () => {
            const P = await t.UploadAllImages(i);
            a?.(P);
          };
          return (0, e.jsxs)(Ga, {
            onDropFiles: I,
            elAdditonalButtons: j,
            elOverrideDragAndDropText: o,
            children: [
              (0, e.jsx)(v.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Ne().UploadPreviewCtn,
                  children: x.map((P) =>
                    (0, e.jsx)(
                      ha,
                      {
                        asset: P,
                        forceResolution: i,
                        fnOnRemove: () => t.DeleteUploadImage(P),
                        languageRealms: u,
                      },
                      "arttabupload_" + P.filename + "_" + P.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Vt, { imageUploader: t, fnOnUploadImageRequested: E }),
            ],
          });
        }
        function Vt(s) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = s,
            [o] = (0, b.q3)(() => [t.GetUploadImages()]),
            i = o.some((u) => u.status == "pending"),
            l = o.some(
              (u) =>
                u.status == "waiting" ||
                u.status == "uploading" ||
                u.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Ne().UploadPreviewButtonsCtn,
            children: [
              !!o.length &&
                (0, e.jsx)(re.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !i,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!o.length &&
                (0, e.jsx)(re.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: l,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function en(s, t, a, o, i) {
          let l = new Array();
          return (
            s.GetUploadImages().forEach((u) => {
              l.push(
                jsx(
                  ha,
                  {
                    asset: u,
                    forceResolution: a,
                    forceFileType: o,
                    fnOnRemove: () => s.DeleteUploadImage(u),
                    languageRealms: i,
                  },
                  t + u.file + "_" + u.uploadTime,
                ),
              );
            }),
            l
          );
        }
        const ha = (0, ga.PA)(za);
        function za(s) {
          const t = (D) => {
              if (D instanceof Ba.M7) {
                D.ResetImage();
                const H = window,
                  W = (0, e.jsx)(Oa.q, {
                    ownerWin: H,
                    uploadFile: D,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || nt.bg.dU,
                  });
                (0, Pe.HT)(W, H, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  D.fileType,
                  JSON.stringify(D.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: o, languageRealms: i } = s,
            l = a.ImageOptions?.map((D) => {
              let H = D?.fnGetLabelText(),
                W;
              D.bEnforceDimensions && (H += ` - ${D.width}x${D.height}`),
                D.bDeprecated &&
                  ((H += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (W = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let N;
              return (
                (a.BIsOriginalMinimumDimensions(D) &&
                  a.FileTypeMatchesImageTypes(D)) ||
                  (N = Ne().ImageDimensionTooSmall),
                { label: H, data: D, strOptionClass: N, tooltip: W }
              );
            }).filter((D) => !D.data.bHiddenFromDropdown),
            u = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            x = a.BSupportsLanguages()
              ? Wa(
                  c.A0.GetLanguageListForRealms(
                    i ?? [Ht.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            f = a.IsValidAssetType(s.forceResolution, s.forceFileType),
            I = a.status == "pending";
          let j = u[a.status];
          a.status == "pending" &&
            (f.needsCrop
              ? (j = (0, c.we)("#ImageUpload_NeedsCrop"))
              : f.error && (j = (0, c.we)("#ImageUpload_Invalid")));
          let E;
          const P = a.GetCurrentImageOption();
          return (
            P && (E = l?.find((D) => D.data.sKey == P.sKey)?.data),
            E || (E = l?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Ne().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Ne().UploadPreviewDelete,
                  onClick: () => o(a),
                  children: (0, e.jsx)(wt.sED, {}),
                }),
                (0, e.jsx)(Fa, { asset: a }),
                x &&
                  (0, e.jsx)(re.m, {
                    strDropDownClassName: O().DropDownScroll,
                    rgOptions: x,
                    selectedOption: a.language,
                    onChange: (D) => (a.language = D.data),
                    disabled: !I,
                  }),
                l &&
                  l?.length > 1 &&
                  (0, e.jsx)(re.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: l,
                    selectedOption: E,
                    onChange: (D) => a.SetCurrentImageOption(D.data),
                    disabled: !I,
                  }),
                I &&
                  f.warnings?.map((D, H) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ne().UploadPreviewWarning, children: D },
                      `warning${H}`,
                    ),
                  ),
                I &&
                  f.messages?.map((D, H) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ne().UploadPreviewMessage, children: D },
                      `message${H}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, G.A)({
                    [O().FlexColumnContainer]: !0,
                    [Ne().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    j,
                    (0, Ua.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: et().FlexCenter,
                        children: (0, e.jsx)(At.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Ne().UploadPreviewError,
                  children: a.message,
                }),
                I &&
                  f.error &&
                  (0, e.jsx)("div", {
                    className: Ne().UploadPreviewError,
                    children: f.error,
                  }),
                I &&
                  f.needsCrop &&
                  (0, e.jsx)(re.jn, {
                    onClick: () => t(a),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function Fa(s) {
          const { asset: t } = s;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Ne().PreviewImgCtn,
                onClick: (a) =>
                  (0, Pe.pg)((0, e.jsx)(Ha, { asset: t }), (0, St.uX)(a)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Ne().PreviewImgInfo,
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
                className: Ne().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Ne().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Ha(s) {
          const { asset: t, closeModal: a } = s;
          return (0, e.jsx)(_e.o0, {
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
        function Wa(s) {
          const t = [],
            a = new Array();
          for (const o of s) {
            if (o == U.X51) continue;
            const i = (0, c.we)("#Language_" + (0, U.LgB)(o));
            a.push({ label: i, data: o });
          }
          return (
            a.sort((o, i) => o.label.localeCompare(i.label)),
            a.forEach((o) => t.push({ label: o.label, data: o.data })),
            a
          );
        }
        var st = ((s) => (
          (s[(s.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (s[(s.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (s[(s.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (s[(s.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          s
        ))(st || {});
        function Kt(s, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(s)}`
            : `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetHashAndExt(s)}`;
        }
        function tn(s, t, a) {
          let o = "";
          const i = Kt(t);
          if (a == 4)
            (o = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (o += i),
              (o += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (o += i),
              (o += " autoplay=true controls=false][/video]");
          else if (a == 2) o = "[img]" + i + "[/img]";
          else {
            const l = Kt(t, !0);
            o = "[url=" + i + "][img]" + l + "[/img][/url]";
          }
          s.InsertText(o);
        }
        var Ya = r(55436),
          Zt = r(53732),
          ke = r.n(Zt),
          De = r(49460);
        function Va(s) {
          const { fnSetImageSearch: t } = s,
            a = (0, v.useRef)(null);
          return (0, e.jsx)("div", {
            className: De.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: De.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (o) => t(o.currentTarget.value),
              onKeyDown: (o) => {
                o.key == "Escape" &&
                  (t(""), a.current && (a.current.value = ""));
              },
            }),
          });
        }
        const Ka = v.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: o,
            imageInsertCallBack: i,
            fnOnExpandImage: l,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: x,
          } = t;
          return (0, e.jsx)(pa, {
            clanAccountID: o,
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
                    fnOnOpenLocalizedImageGroup: x,
                    OnImageClick: l,
                  },
                  j.imageid,
                ),
              ),
          });
        });
        function pa(s) {
          const { clanAccountID: t, fileNameSearch: a, children: o } = s,
            i = (0, He.n9)(t),
            l = a.trim().toLowerCase() || "",
            u = He.pU.GetFilteredClanImagesList(i, l);
          if (u.length == 0) {
            const x = Qe.b.InitFromClanID(t);
            let f = He.pU.GetLoadState(x);
            return f && f.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: ke().ResultNotification,
                    children:
                      l.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : f && f.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: ke().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", f.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: ke().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(u, l);
        }
        function m(s) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: o,
            selectedItem: i,
          } = s;
          return jsx(pa, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (l) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: l.map((u) =>
                  jsx(
                    h,
                    { clanImage: u, selected: u == i, onImageSelected: o },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function n(s) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: o,
              OnImageClick: i,
              showImageActions: l,
              fnOnOpenLocalizedImageGroup: u,
            } = s,
            [x, f] = v.useState(!1),
            I = () => o(t, st.k_eInsertFullImage),
            j = () => o(t, st.k_eInsertVideo),
            E = () => o(t, st.k_eInsertThumbnail),
            P = (he) => {
              t.url &&
                (he.dataTransfer.setData("text", t.url),
                He.pU.GetClanImageDragListener().forEach((Me) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Me($e, !0);
                }));
            },
            D = (he) => {
              t.url &&
                He.pU.GetClanImageDragListener().forEach((Me) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Me($e, !1);
                });
            },
            H = (he) => {
              (0, Pe.pg)(
                (0, e.jsx)(_e.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: N,
                  onCancel: T,
                  closeModal: T,
                  children: (0, e.jsxs)(v.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, St.uX)(he) ?? window,
              );
            },
            W = (he) => {
              console.log("ClanImageWrapper on delete error: " + he),
                (0, Pe.pg)(
                  (0, e.jsx)(_e.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: he }),
                  }),
                  window,
                );
            },
            N = () => {
              f(!0);
              let he = Qe.b.InitFromClanID(t.clanAccountID);
              He.pU
                .DeleteClanImage(he, t)
                .then((Me) => {
                  Me.success != zt.R && W((0, Ct.H)(Me).strErrorMsg), f(!1);
                })
                .catch((Me) => {
                  W((0, Ct.H)(Me).strErrorMsg), f(!1);
                }),
                T();
            },
            T = () => {},
            Y = () => {
              i && i(t);
            },
            F = t.file_name ? t.file_name : "",
            ae = (0, Ya.r)(a, F, String(t.imageid), ke().Hilight),
            fe = Ae.zU.BIsClanImageVideo(t),
            me = l && !x && !fe,
            ye = l && !x && !fe,
            Je = l && !x && fe,
            pe = l && !x && !fe;
          return (0, e.jsx)(sa.K, {
            placeholderHeight: "100vh",
            className: ke().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: ke().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: ke().ImageWrapper,
                  style: {
                    backgroundImage: fe ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: P,
                  onDragEnd: D,
                  onDoubleClick: I,
                  onClick: Y,
                  children: (0, e.jsx)(g, {
                    clanImage: t,
                    className: ke().VideoBackground,
                  }),
                }),
                me &&
                  (0, e.jsx)("span", {
                    className: ke().Full,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                x &&
                  (0, e.jsx)(At.t, {
                    size: "medium",
                    className: ke().FloatingThrobber,
                  }),
                ye &&
                  (0, e.jsx)("span", {
                    className: ke().Thumb,
                    onClick: E,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                pe &&
                  u &&
                  (0, e.jsx)(d, {
                    bDeleting: x,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                Je &&
                  (0, e.jsx)("span", {
                    className: ke().Full,
                    onClick: j,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !x &&
                  (0, e.jsx)("span", {
                    className: ke().Delete,
                    onClick: H,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: ke().ImageWrapperFilename,
                  title: F,
                  children: ae,
                }),
              ],
            }),
          });
        }
        function d(s) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: o,
            } = s,
            { data: i } = (0, ue.hM)(t.clanAccountID);
          return o || !i?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, G.A)(ke().Localized, O().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function g(s) {
          const { clanImage: t, className: a } = s;
          return Ae.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: a,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == nt.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function h(s) {
          const { clanImage: t, onImageSelected: a, selected: o } = s;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              o && styles.Selected,
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
        function p(s) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: o } = s,
            i = v.useCallback(
              (x, f) => {
                o?.(x, f), a?.();
              },
              [o, a],
            ),
            [l, u] = v.useState("");
          return (0, e.jsxs)(_e.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: a,
            onCancel: a,
            children: [
              (0, e.jsx)(Va, { fnSetImageSearch: u }),
              (0, e.jsx)(Ka, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: l,
                imageInsertCallBack: i,
                showImageActions: !1,
              }),
            ],
          });
        }
        function _(s) {
          const { clanSteamID: t, OnClanImageSelected: a } = s;
          return (0, e.jsxs)("div", {
            className: dt().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: dt().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  (0, Pe.pg)(
                    (0, e.jsx)(p, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, St.uX)(o) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function A(s) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: o,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: l,
              rgRealmList: u,
            } = s,
            [x] = (0, b.q3)(() => [Ke.O.Get().GetCurEditLanguage()]),
            f = (0, Nt.zO)(t, a, o),
            I = s.uploaderOverride || f,
            [j, E] = v.useState(!1),
            P = v.useCallback(
              async (W, N) => {
                if (!j) {
                  E(!0);
                  try {
                    const { language: T } = (0, jt.jj)(W.file_name ?? "", x),
                      Y = (0, jt.PD)(T, x, u);
                    await I.AddExistingClanImage(W, Y);
                  } catch (T) {
                    let Y = (0, Ct.H)(T);
                    console.error("AddExistingClanImage: " + Y.strErrorMsg, Y),
                      (0, Pe.pg)(
                        (0, e.jsx)(_e.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            Y.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  E(!1);
                }
              },
              [j, I, x, u],
            ),
            D = v.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          _,
                          { clanSteamID: t, OnClanImageSelected: P },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [P, i, t],
            ),
            H = (W) => {
              for (const N of W) {
                const T = N.uploadResult;
                if (T?.origimagehash) {
                  const Y = (0, jt.PD)(T.language, x, u);
                  Ue.AddLocalizeImageUploaded(T.origimagehash, Y);
                } else {
                  const Y = He.pU.GetClanImageByImageHash(
                      t,
                      T?.image_hash ?? "",
                    ),
                    F = N.image.GetCurrentImageOption();
                  if (Y && F) {
                    const ae = (0, jt.PD)(N.image.language, x, u);
                    l(F.artworkType, Y, ae);
                  }
                }
              }
            };
          return (0, e.jsx)(ma, {
            ...s,
            imageUploader: I,
            rgRealmList: u,
            elAdditonalButtons: j
              ? [
                  (0, e.jsx)(
                    At.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : D,
            fnUploadComplete: H,
          });
        }
        var y = r(25279),
          X = r(84676),
          k = r(25359),
          M = r.n(k),
          ve = r(24806);
        function ge(s) {
          const {
              clanImage: t,
              closeModal: a,
              lang: o,
              fnOnArtworkLangChange: i,
              realms: l,
              fnLangHasData: u,
            } = s,
            [x, f] = (0, v.useState)(o),
            I = Qe.b.InitFromClanID(t.clanAccountID),
            j = (0, b.q3)(() =>
              Ae.zU.GenerateURLFromHashAndExt(I, Ae.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(_e.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => i?.(t, o, x),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, G.A)(O().FlexColumnContainer, M().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: M().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: M().ArtworkPreview,
                    src: j,
                  }),
                }),
                (0, e.jsx)(ve.Ng, {
                  selectedLang: x,
                  fnLangHasData: u,
                  fnOnLanguageChanged: f,
                  realms: l,
                }),
              ],
            }),
          });
        }
        var ie = r(56330);
        function we(s) {
          if (!s) return s;
          const t = s.lastIndexOf(".");
          return t === -1 ? s : s.substring(0, t);
        }
        var Xe = r(58483),
          fa = r(82385),
          Za = r(94520),
          un = r(95174),
          gn = r(9709),
          Qa = r(64868),
          mn = r(44894);
        const hn =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var pn = r(11243);
        function fn(s) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: o,
            fnOnRemoveImage: i,
          } = s;
          (0, He.mr)(t.GetAccountID());
          const l = v.useMemo(() => {
              let I = new Array();
              const j = c.A0.GetLanguageListForRealms([
                Ht.TU.k_ESteamRealmGlobal,
                Ht.TU.k_ESteamRealmChina,
              ]);
              for (const E of j) {
                const P = a(E);
                if (P) {
                  const D = (0, U.LgB)(E),
                    H = (0, c.we)("#Language_" + D);
                  I.push({ lang: E, strLang: D, locLang: H, imgHash: P });
                }
              }
              return (
                (I = I.sort((E, P) =>
                  E.locLang > P.locLang ? 1 : E.locLang < P.locLang ? -1 : 0,
                )),
                I
              );
            }, [a]),
            [u, x, f] = (0, Qa.uD)();
          return (0, e.jsxs)("div", {
            className: M().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: M().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: M().LanguageListContainer,
                children: l.map((I) =>
                  (0, e.jsx)(
                    vn,
                    { langData: I, ...s },
                    "lang_select_" + t.GetAccountID() + " " + I.strLang,
                  ),
                ),
              }),
              !!i &&
                (0, e.jsxs)(re.$n, {
                  onClick: x,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(pn.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(_e.EN, {
                active: u,
                children: (0, e.jsx)(_e.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: f,
                  onOK: () => {
                    for (let I = 0; I < U.bP9; I++) o && i && o(I) && i(I);
                  },
                }),
              }),
            ],
          });
        }
        function vn(s) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: o,
              fnOnLanguagePreviewChange: i,
              fnOnArtworkLangChange: l,
              fnOnRemoveImage: u,
            } = s,
            [x, f] = (0, b.q3)(() => {
              const I = He.pU.GetClanImageByImageHash(t, a.imgHash);
              let j = "";
              I &&
                (j = Ae.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  Ae.zU.GetHashAndExt(I),
                  ct.wI.full,
                  a.lang,
                ));
              let E = M().LanguageSelectorSelected;
              return (
                o != a.lang &&
                  (E = a.imgHash
                    ? M().LanguageSelector
                    : M().LanguageSelectorNoData),
                [j, E]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: M().LanguageContainer,
            onClick: (I) => {
              let j = (0, U.sfN)(I.currentTarget.id);
              i(j);
            },
            children: [
              (0, e.jsx)("div", { className: f, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: M().LanguageOptions,
                children: [
                  !!x &&
                    (0, e.jsx)("a", {
                      href: x,
                      target: "_blank",
                      children: (0, e.jsx)(ht.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: wt.YNO(),
                      }),
                    }),
                  !!l && (0, e.jsx)(xn, { ...s }),
                  !!u && (0, e.jsx)(In, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function xn(s) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: o,
              fnGetImageHash: i,
              fnLangHasData: l,
              realms: u,
            } = s,
            [x, f, I] = (0, Qa.uD)(),
            j = (0, b.q3)(() => {
              const E = i(a.lang);
              return (
                (0, It.wT)(
                  !E || !E.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + E,
                ),
                He.pU.GetClanImageByImageHash(t, E)
              );
            });
          if (!j) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ht.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: hn,
                  onClick: () => f(),
                }),
              }),
              (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(_e.EN, {
                  active: x,
                  children: (0, e.jsx)(ge, {
                    clanImage: j,
                    lang: a.lang,
                    fnOnArtworkLangChange: o,
                    fnLangHasData: l,
                    realms: u,
                    closeModal: I,
                  }),
                }),
              }),
            ],
          });
        }
        function In(s) {
          const { fnOnRemoveImage: t, langData: a } = s,
            [o, i, l] = (0, Qa.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ht.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: mn.A,
                  onClick: i,
                }),
              }),
              (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(_e.EN, {
                  active: o,
                  children: (0, e.jsx)(_e.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, U.LgB)(a.lang)),
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
        var Xa = r(13465),
          _n = r(21659),
          bn = r(15496),
          We = r.n(bn),
          jn = r(88812);
        function Cn(s) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: o,
              fnImageFailureCallback: i,
              fnFilterImageURLsForKnownFailures: l,
              langOverride: u,
            } = s,
            x = (0, _n.c5)(),
            f = v.useCallback(
              (T) => {
                T.preventDefault(), o && o(t);
              },
              [t, o],
            ),
            I = u || (0, U.sfN)(J.TS.LANGUAGE),
            [j, E, P] = (0, b.q3)(() => [
              t.GetSummaryWithFallback(I),
              t.GetNameWithFallback(I),
              t.BShowLibrarySpotlightText(),
            ]);
          let D = "spotlight",
            H = ct.wI.spotlight_main;
          (t.appid == 2434320 || J.TS.EUNIVERSE == U.Rv) &&
            ((D = x
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (H = ct.wI.full));
          let W =
            (0, jn.WC)(a !== void 0 ? void 0 : t, D, I, H) ??
            (a !== void 0 ? [a] : []);
          l && W && (W = l(W));
          const N = j.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(v.Fragment, {
            children: (0, e.jsx)("div", {
              className: We().MajorEvent_Ctn,
              ref: s.containerRef,
              children: (0, e.jsxs)(V.Z, {
                className: (0, G.A)(
                  We().AppDetailsSpotlightContainer,
                  We().MajorEventContainer,
                ),
                onActivate: f,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: We().MajorEventBackground,
                    children: (0, e.jsx)(Xa.c, {
                      className: We().MajorEventImageBackgroundBlur,
                      rgSources: W,
                      onIncrementalError: (T, Y, F) => i && i(Y),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: We().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(Xa.c, {
                        className: We().MajorEventImage,
                        rgSources: W,
                        onIncrementalError: (T, Y, F) => i && i(Y),
                      }),
                      (0, e.jsx)("div", {
                        className: We().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: We().MajoreEventImageContentContainer,
                        children:
                          P &&
                          (0, e.jsxs)("div", {
                            className: We().MajorEventContent,
                            children: [
                              (0, e.jsx)(Xa.c, {
                                className: We().MajorEventSpotlightBackground,
                                rgSources: W,
                                onIncrementalError: (T, Y, F) => i && i(Y),
                              }),
                              (0, e.jsxs)("div", {
                                className: We().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: We().MajorEventTitle,
                                    children: E,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: We().MajorEventSummary,
                                    children: N,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: We().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var En = r(79949),
          Te = r.n(En);
        function yn(s) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: o,
              clanSteamID: i,
              eventModel: l,
              partnerEventStore: u,
              fnOnRemoveImage: x,
              fnOnArtworkLangChange: f,
              realms: I,
              fnLangHasData: j,
              fnGetImageHashAndExt: E,
            } = s,
            P = E(a, t),
            D = P
              ? Ae.zU.GenerateURLFromHashAndExtAndLang(i, P, ct.wI.full, t)
              : "",
            [H] = (0, b.q3)(() => [Bn(a, E)]);
          return H == 0
            ? (0, e.jsxs)("div", {
                className: M().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(an, {
                      imgURL:
                        J.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: l,
                    }),
                  a === "background" &&
                    (0, e.jsx)(nn, {
                      imgURL:
                        J.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(a) &&
                    (0, e.jsx)(An, {
                      langOverride: t,
                      artworkType: a,
                      eventModel: l,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: M().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(an, {
                      imgURL: D,
                      eventModel: l,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(nn, {
                      imgURL: D,
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(va, { imgURL: D, event: l, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(va, { imgURL: D, event: l, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(va, { imgURL: D, event: l, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(Sn, {
                      imgURL: D,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(wn, { imgURL: D }),
                  a === "sale_overlay" && (0, e.jsx)(Mn, { imgURL: D }),
                  ct.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: gn.PreviewImg,
                      src:
                        Ue.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(Qt, { imgURL: D }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(Qt, { imgURL: D }),
                  a === "sale_logo" && (0, e.jsx)(Qt, { imgURL: D }),
                  a === "bestofyear_banner" && (0, e.jsx)(Qt, { imgURL: D }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(Qt, { imgURL: D }),
                  (0, e.jsx)(fn, {
                    langOverride: t,
                    clanSteamID: i,
                    fnOnLanguagePreviewChange: o,
                    fnOnRemoveImage: x,
                    fnOnArtworkLangChange: f,
                    realms: I,
                    fnLangHasData: j,
                    fnGetImageHash: (W) => we(E(a, W) ?? ""),
                  }),
                ],
              });
        }
        function cs(s) {
          const { artworkType: t } = s,
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
        function An(s) {
          const { artworkType: t, langOverride: a, eventModel: o } = s,
            i = y.Fj[t],
            l = v.useMemo(
              () =>
                Dn(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${i.width} X ${i.height}`,
                ),
              [i.height, i.width, t],
            );
          return (0, e.jsx)(va, { lang: a, imgURL: l, event: o });
        }
        function Dn(s, t) {
          const i = document.createElement("canvas");
          (i.width = 780), (i.height = 200);
          const l = i.getContext("2d"),
            u = 20;
          for (let I = 0; I < 200; I += u)
            for (let j = 0; j < 780; j += u)
              (l.fillStyle =
                (j / u + I / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                l.fillRect(j, I, u, u);
          const x = l.createLinearGradient(0, 0, 780, 0);
          x.addColorStop(0, "rgba(32,32,32,0.8)"),
            x.addColorStop(1, "rgba(60,60,60,0.8)"),
            (l.fillStyle = x),
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
            l.fillText(s, 780 / 2, 200 / 2 - 20),
            t &&
              ((l.font = "18px Arial"), l.fillText(t, 780 / 2, 200 / 2 + 25)),
            i.toDataURL("image/png")
          );
        }
        function an(s) {
          const { imgURL: t, eventModel: a, langOverride: o } = s,
            i = (0, Ke.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(un.u, {
              event: a,
              imageURLOverride: t,
              langOverride: o ?? i,
            }),
          });
        }
        function nn(s) {
          const { lang: t, eventModel: a, partnerEventStore: o } = s,
            i = (0, Xe.LJ)(),
            [l, u, x, f, I] = (0, b.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let j = u
            ? (0, e.jsx)(Za.fh, {
                text: u || "",
                showErrorInfo: !1,
                event: a,
                languageOverride: Ke.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Te().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Te().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, G.A)(
                  Te().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Te().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Te().MainImageCtn,
                      children: (0, e.jsx)("img", { src: s.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Te().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Te().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Te().TextTitle,
                            children:
                              l ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Te().TextSubTitle,
                            children:
                              x ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Te().TextBody,
                            children: j,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              f != U.Fwr &&
                (0, e.jsxs)(v.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Te().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Te().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, G.A)(
                        Te().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Te().DetailExample2,
                        children: (0, e.jsx)(
                          fa.He,
                          {
                            event: a,
                            emoticonStore: i,
                            partnerEventStore: o,
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
        const va = (s) => {
            const [t] = (0, X.t7)(s.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              o = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Te().SpotlightExample,
              children: (0, e.jsx)(Cn, {
                event: s.event,
                strDisplayName: a ?? "",
                gameIconUrl: o,
                spotlightURLOverride: s.imgURL,
                langOverride: s.lang,
              }),
            });
          },
          Sn = (s) => {
            const t = [
              (0, e.jsx)("img", { src: s.imgURL }, "img"),
              (0, e.jsx)("div", { className: M().BroadcastPreview }, "video"),
            ];
            return (
              s.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Te().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          wn = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Mn = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Qt = (s) =>
            (0, e.jsx)("div", {
              className: Te().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            });
        function Bn(s, t) {
          let a = 0;
          for (let o = U.Bhc; o < U.bP9; ++o)
            (t(s, o)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Ln = Object.defineProperty,
          Tn = Object.getOwnPropertyDescriptor,
          sn = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Tn(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Ln(t, a, i), i;
          };
        const Pn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Nn = ((s) => (
          (s[(s.k_None = 0)] = "k_None"),
          (s[(s.k_Suggested = 1)] = "k_Suggested"),
          (s[(s.k_Required = 2)] = "k_Required"),
          (s[(s.k_Requested = 3)] = "k_Requested"),
          s
        ))(Nn || {});
        function kn(s) {
          const {
              artworkType: t,
              headerHint: a,
              appid: o,
              fnToggleMinimize: i,
              realms: l,
              eventModel: u,
              fnLangHasData: x,
              fnGetImageHashAndExt: f,
              fnSetImageURL: I,
              partnerEventStore: j,
            } = s,
            [E] = (0, X.t7)(o, { include_assets: !0 }),
            [P, D] = (0, b.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            H = P == U.ajI;
          let W = null;
          a === 2
            ? (W = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (W = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (W = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let N = null;
          t === "capsule"
            ? H
              ? (N = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (N = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!D &&
                      (0, e.jsxs)("div", {
                        className: M().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${J.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (N = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (N = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (N = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (N = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (N = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: O().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? E &&
                          (N = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !E.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: ie.ErrorStylesBackground,
                                  children: (0, c.we)(
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
                          ? (N = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Pn,
                                      target: J.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (N = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: O().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (N = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: O().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (N = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (N = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: O().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (N = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: O().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const T = y.Fj[s.artworkType].width,
            Y = y.Fj[s.artworkType].height;
          return (0, e.jsxs)("div", {
            id: s.id,
            className: M().ArtworkSelectorContainer,
            children: [
              !!s.title &&
                (0, e.jsxs)("div", {
                  className: M().Title,
                  onDoubleClick: i,
                  children: [
                    s.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    W,
                    i &&
                      (0, e.jsx)(re.$n, {
                        onClick: i,
                        children: (0, e.jsx)(ht.he, {
                          toolTipContent: (0, c.we)(
                            s.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: s.bIsMinimized
                            ? (0, e.jsx)(wt.hz4, {})
                            : (0, e.jsx)(wt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, G.A)(M().SelectImageBlock, M().Tips),
                  children: [
                    N,
                    !!(T && Y) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, y.qj)(T),
                            (0, y.qj)(Y),
                          ),
                        ],
                      }),
                    !!s.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: ie.WarningStylesWithIcon,
                          children: s.strWarning,
                        }),
                      }),
                    s.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    s.elAdditionalControls,
                    !!s.fnRemoveAllArtwork &&
                      (0, e.jsx)(re.$n, {
                        onClick: (F) => {
                          (0, Pe.pg)(
                            (0, e.jsx)(Gn, {
                              fnRemoveAllArtwork: s.fnRemoveAllArtwork,
                            }),
                            (0, St.uX)(F) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsx)(On, {
                  clanSteamID: s.clanSteamID,
                  title: s.title ?? "",
                  eventModel: u,
                  artworkType: s.artworkType,
                  realms: l,
                  appid: o,
                  fnGetImageHashAndExt: f,
                  fnSetImageURL: I,
                  fnLangHasData: x,
                  partnerEventStore: j,
                }),
            ],
          });
        }
        function Gn(s) {
          const { fnRemoveAllArtwork: t, closeModal: a } = s;
          return (0, e.jsx)(_e.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), a?.();
            },
            onCancel: a,
          });
        }
        function On(s) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: o,
              fnLangHasData: i,
              fnGetImageHashAndExt: l,
              fnSetImageURL: u,
              eventModel: x,
              appid: f,
              partnerEventStore: I,
            } = s,
            j = t === "localized_image_group",
            [E, P] = v.useState((0, Ke.E)()),
            [D, H] = v.useState(new Array()),
            W = v.useCallback(
              (T, Y, F) => {
                let ae = [];
                D.find((me) => me.clanImage.imageid == T.imageid)
                  ? (ae = D.map((me) =>
                      me.clanImage.imageid == T.imageid
                        ? { clanImage: T, lang: Y }
                        : me,
                    ))
                  : F && (ae = D.concat({ clanImage: T, lang: Y })),
                  H(ae);
              },
              [D],
            ),
            N = v.useCallback(
              (T, Y, F) => {
                (0, lt.h5)(() => {
                  we(l(t, Y) ?? "") == T.image_hash && u(t, null, Y),
                    u(t, T, F),
                    W(T, F, !1);
                });
              },
              [l, t, u, W],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(re.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${J.TS.PARTNER_BASE_URL}admin/game/editbyappid/${f}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(xa, {
                    list: D,
                    fnOnArtworkLanguageChange: N,
                    realms: a,
                    fnLangHasData: i,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, G.A)(
                        M().SelectImageBlock,
                        M().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(yn, {
                        eventModel: x,
                        clanSteamID: o,
                        fnOnLanguagePreviewChange: (T) => {
                          T != E && P(T);
                        },
                        langOverride: E,
                        fnOnArtworkLangChange: j ? null : N,
                        artworkType: t,
                        fnOnRemoveImage: j ? null : (T) => u(t, null, T),
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
        let xa = class extends v.Component {
          ShowLangChangeDialog(s, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: o,
              fnLangHasData: i,
            } = this.props;
            (0, Pe.pg)(
              (0, e.jsx)(ge, {
                clanImage: s,
                lang: t,
                fnOnArtworkLangChange: a,
                fnLangHasData: i,
                realms: o,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let s = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((a) => {
                const { clanImage: o, lang: i } = a;
                let l = (0, c.we)("#Language_" + (0, U.LgB)(i));
                s.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: O().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            o.file_name ?? "",
                            l,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(o, i),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + a.clanImage.imageid + "_" + i,
                  ),
                );
              }),
              s
            );
          }
          render() {
            const { list: s } = this.props;
            if (!s || s.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: M().UploadSuccess,
              children: t,
            });
          }
        };
        sn([Ze.oI], xa.prototype, "ShowLangChangeDialog", 1),
          (xa = sn([ga.PA], xa));
        var Rn = r(6658);
        function Un(s) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: o,
              realms: i,
              loc_images: l,
              artworkType: u,
              fnLangHasData: x,
              closeModal: f,
              fnSetImageURL: I,
              partnerEventStore: j,
            } = s,
            [E, P] = (0, v.useState)(!1),
            D = (0, Nt.zO)(t, u),
            H = t.GetAccountID(),
            [W] = (0, b.q3)(() => [
              D.GetFilesToUpload().length - D.GetCompletedFiles(),
            ]);
          (0, v.useEffect)(() => {
            P(!1),
              Ue.ClearImageGroup(),
              l?.forEach((F, ae) => {
                const fe = Qe.b.InitFromClanID(H);
                if (Ue.GetAllLocalizedGroupImages().length == 0) {
                  const me = F && Ae.zU.GetHashFromHashAndExt(F),
                    ye = me && He.pU.GetClanImageByImageHash(fe, me);
                  ye && Ue.SetPrimaryImageForImageGroup(ye, u);
                }
                Ue.SetLocalizedImageGroupAtLang(ae, fe, F ?? null);
              }),
              P(!0);
          }, [l, H, u]);
          const N = (0, v.useCallback)(
              (F, ae, fe = U.Bhc) => {
                const me = Qe.b.InitFromClanID(H),
                  ye = Ae.zU.GetHashAndExt(ae ?? null);
                if (Ue.GetAllLocalizedGroupImages().length == 0) {
                  const Je = ye && Ae.zU.GetHashFromHashAndExt(ye),
                    pe = Je && He.pU.GetClanImageByImageHash(me, Je);
                  pe && Ue.SetPrimaryImageForImageGroup(pe, F);
                }
                Ue.SetLocalizedImageGroupAtLang(fe, me, ye);
              },
              [H],
            ),
            T = (0, v.useCallback)((F, ae) => {
              const me =
                Ue.GetLocalizedImageGroupForEdit()?.localized_images[ae];
              return me && me.split("/").pop();
            }, []),
            Y = () => {
              const F = Ue.GetLocalizedImageGroupForEdit();
              for (let ae = U.Bhc; ae < U.bP9; ++ae) {
                const fe = F?.localized_images[ae];
                if (fe) {
                  const me = fe.split("/").pop() || "";
                  I(
                    u,
                    {
                      image_hash: we(me),
                      clanAccountID: H,
                      file_type: (0, Rn.yh)(me) ?? nt.bg.w3,
                      imageid: 0,
                    },
                    ae,
                  );
                } else I(u, null, ae);
              }
              Ue.ClearImageGroup(), s.onOK ? s.onOK() : f?.();
            };
          return (0, e.jsxs)(_e.o0, {
            onCancel: f,
            closeModal: f,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, G.A)(ie.NotTooWideModal, ie.ImageManageDialog),
            strTitle: s.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: s.strLocalizedDescription,
            bOKDisabled: W > 0,
            onOK: Y,
            strOKButtonText:
              W > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              E
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(A, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: N,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: i ?? [],
                        uploaderOverride: D,
                      }),
                      (0, e.jsx)(kn, {
                        clanSteamID: t,
                        eventModel: o,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: i,
                        fnRemoveAllArtwork: () => Ue.ClearImageGroup(),
                        fnSetImageURL: N,
                        fnGetImageHashAndExt: T,
                        fnLangHasData: x,
                        partnerEventStore: j,
                      }),
                    ],
                  })
                : (0, e.jsx)(At.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              s.children,
            ],
          });
        }
        function zn(s) {
          const { setting: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                l.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "no-repeat",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Fn = r(94381);
        function Hn(s) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: o,
              eventModel: i,
            } = s,
            { openColorPicker: l } = Se(),
            [u, x] = (0, v.useState)(() => a),
            [f, I, j, E, P, D, H, W] = (0, b.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              i.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [N] = (0, v.useState)(() => Wn(u.localized_background_art ?? {}));
          return (0, e.jsxs)(Un, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: i.appid,
            eventModel: i,
            clanSteamID: i.clanSteamID,
            closeModal: t,
            partnerEventStore: oa.O3,
            artworkType: "localized_background_art",
            realms: H,
            loc_images: N,
            fnLangHasData: (T) => !!N[T],
            fnGetImageHash: (T, Y) => N[Y],
            fnSetImageURL: async (T, Y, F) => {
              x((ae) => {
                const fe = { ...ae.localized_background_art },
                  me = Ae.zU.GetHashAndExt(Y);
                return (
                  me ? (fe[(0, U.LgB)(F)] = me) : delete fe[(0, U.LgB)(F)],
                  { ...ae, localized_background_art: fe }
                );
              });
            },
            onOK: () => {
              x((T) => (o(T), t && setTimeout(t, 1), { ...T }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: at().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: at().ImageOptions,
                    children: [
                      (0, e.jsx)(zn, {
                        setting: f,
                        fnUpdateSetting: (T) => {
                          x(
                            T !== "no-repeat"
                              ? {
                                  ...u,
                                  repeat_setting: T,
                                  scaling_setting: "auto",
                                }
                              : { ...u, repeat_setting: T },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(Yn, {
                        scaling_setting: I ?? "contain",
                        disable: f !== "no-repeat",
                        fnUpdateSetting: (T) => x({ ...u, scaling_setting: T }),
                      }),
                      I != "cover" &&
                        (0, e.jsx)(Kn, {
                          position_settings: D,
                          fnUpdateSetting: (T) =>
                            x({ ...u, position_setting: T }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: at().ColorOptions,
                    children: [
                      (0, e.jsx)(re.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Dt().ColorCtn,
                        children: [
                          (0, e.jsx)(re.$n, {
                            style: { backgroundColor: j },
                            onClick: (T) =>
                              l(T, {
                                color: j ?? "",
                                onChange: (Y) =>
                                  x({ ...u, background_color1: Y }),
                              }),
                            children: (0, c.we)(
                              j === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(re.$n, {
                            onClick: () =>
                              x({ ...u, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: at().SwapColorsCtn,
                        children: (0, e.jsx)(re.$n, {
                          onClick: () =>
                            x({
                              ...u,
                              background_color1: E,
                              background_color2: j,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      P !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Dt().ColorCtn,
                          children: [
                            (0, e.jsx)(re.$n, {
                              style: { backgroundColor: E },
                              onClick: (T) =>
                                l(T, {
                                  color: E ?? "",
                                  onChange: (Y) =>
                                    x({ ...u, background_color2: Y }),
                                }),
                              children: (0, c.we)(
                                E === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(re.$n, {
                              onClick: () =>
                                x({ ...u, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Vn, {
                        gradient: P ?? "top-to-bottom",
                        fnUpdateSetting: (T) =>
                          x({ ...u, gradient_setting: T }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(ra, {
                clanSteamID: i.clanSteamID,
                children: (0, e.jsx)(Fn.S, {
                  checked: !!W,
                  onChange: (T) => {
                    u.randomize_section_order = T;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function Wn(s) {
          const t = de.$Y([], U.bP9, null);
          for (const a in s) {
            const o = (0, U.sfN)(a);
            o != U.xPp && (t[o] = s[a]);
          }
          return t;
        }
        function Yn(s) {
          const {
              scaling_setting: t,
              fnUpdateSetting: a,
              label: o,
              disable: i,
            } = s,
            l = v.useMemo(() => {
              const u = [];
              return (
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                u.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                u
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: B.DropDownScroll,
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
        function Vn(s) {
          const { gradient: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "top-to-bottom",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Kn(s) {
          const { position_settings: t, fnUpdateSetting: a, label: o } = s,
            i = v.useMemo(() => {
              const l = [];
              return (
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                l.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                l
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(re.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(re.m, {
                strDropDownClassName: B.DropDownScroll,
                rgOptions: i,
                selectedOption: t || "unset",
                onChange: (l) => a(l.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function Zn(s) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: o,
              bShowAsValveOnly: i,
            } = s,
            [l, u] = (0, v.useState)(t.BIsBackgroundImageEnabled()),
            [x, f, I] = (0, Ze.uD)(),
            j = (0, b.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, G.A)(at().Ctn, i && B.ValveOnlyBackground),
            children: (0, e.jsxs)(z.tH, {
              children: [
                (0, e.jsx)(re.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: l,
                  onChange: (E) => {
                    u(E), t.SetBackgroundImageEnabled(E);
                  },
                }),
                l
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(re.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: o,
                        }),
                        (0, e.jsx)(re.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: j,
                          onChange: (E) =>
                            t.SetSalePageLastCoverSectionUntilEnd(E),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(re.$n, {
                          onClick: f,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(_e.EN, {
                          active: x,
                          children: (0, e.jsx)(_e.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
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
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${ea.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Ja = v.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: o,
              backgroundImageEditModel: i,
              groupIndex: l,
              imgGroup: u,
              eventModel: x,
              nTabIndex: f,
            } = t,
            I = (0, Ke.E)(),
            [j, E, P, D] = (0, b.q3)(() => [
              u && o.mapGroupToSections.get(u.background_id),
              (u &&
                o.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              f != null
                ? i?.GetTabLastCoverSectionUntilEnd(f)
                : i?.GetSalePageLastCoverSectionUntilEnd(),
              f != null ? i?.GetTabGroupCount(f) : i?.GetSalePageGroupCount(),
            ]),
            H = P && l + 1 === D,
            [W, N, T] = (0, Ze.uD)(),
            [Y, F, ae] = (0, Ze.uD)();
          let fe;
          j?.nUniqueIDNextSaleSection &&
            (fe = (0, mt.h_)(
              te.HY,
              i.GetSaleSectionByID(j?.nUniqueIDNextSaleSection),
              I,
              x,
              j.nSaleSectionLastIndex + 1,
            ));
          let me;
          if (j && E?.length > 1) {
            const ye = E[E.length - 1];
            me = (0, mt.h_)(
              te.HY,
              i?.GetSaleSectionByID(ye),
              I,
              x,
              j.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(ja.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              f != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              l + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(re.$n, {
                  onClick: N,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(_e.EN, {
                  active: W,
                  children: (0, e.jsx)(Hn, {
                    imgGroup: u,
                    closeModal: T,
                    eventModel: x,
                    fnUpdateImageGroup: (ye) =>
                      f != null
                        ? i.SetTabBackgroundGroup(f, l, ye)
                        : i.SetSalePageBackgroundGroup(l, ye),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: at().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    E.map((ye) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, mt.h_)(
                            te.W3,
                            i.GetSaleSectionByID(ye),
                            I,
                            x,
                            i.GetSaleSectionIndexByID(ye, !0),
                          ),
                        },
                        "li_" + ye,
                      ),
                    ),
                    !!H &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!me &&
                  (0, e.jsx)(re.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Reduce", me),
                  }),
                !!fe &&
                  (0, e.jsx)(re.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Extend", fe),
                  }),
                l > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(re.$n, {
                        onClick: F,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(_e.EN, {
                        active: Y,
                        children: (0, e.jsx)(_e.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            f != null
                              ? i.RemoveTabBackgroundGroup(f, l)
                              : i.RemoveSalePageBackgroundGroup(l),
                          closeModal: ae,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Qn(s) {
          const { backgroundImageEditModel: t, nTabID: a } = s;
          return (0, e.jsx)("div", {
            className: at().CtnEditor,
            children: (0, e.jsx)(re.$n, {
              onClick: (o) =>
                a !== void 0 && a >= 0
                  ? t?.AddTabBackgroundGroup(a)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                a !== void 0 && a >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function Xn(s) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l = o.mapFirstSectionToGroup.get(a);
          return a == o.nFirstSaleSectionIDWithoutGroup ||
            a == o.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Qn, { backgroundImageEditModel: i, nTabID: t })
            : l
              ? (0, e.jsx)(Jn, { ...s, groupID: l })
              : null;
        }
        function Jn(s) {
          const {
              groupID: t,
              nTabID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l =
              a && a >= 0
                ? o.selectedTabBackgroundDef.groups
                : i.GetSalePageGroupDefinition().groups,
            u = l.findIndex((W) => W.background_id === t),
            x = l[u],
            [f, I] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!f) return;
            const W = (0, Pe.pg)(
              (0, e.jsx)(_e.o0, {
                bAlertDialog: !0,
                closeModal: () => I(!1),
                children: (0, e.jsx)(Ja, {
                  backgroundImageEditModel: i,
                  groupIndex: u,
                  imgGroup: x,
                  imgGroupDerivedMapping: o,
                  eventModel: i.GetEventModel(),
                  nTabIndex: a,
                }),
              }),
              window,
            );
            return () => {
              W.then((N) => N.Close());
            };
          }, [f, i, x, u, a, o]);
          const j = (0, b.q3)(() => Rt.get(t)),
            [E, P] = (0, v.useState)(null),
            D = v.useCallback((W, N) => {
              P(N);
            }, []),
            H = (0, Ze.w6)(D);
          return (0, e.jsxs)("div", {
            className: at().CtnEditor,
            ref: H,
            children: [
              !!(j && E && E > j) &&
                (0, e.jsx)(re.$n, {
                  onClick: (W) => I(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Ja, {
                backgroundImageEditModel: i,
                groupIndex: u,
                imgGroup: x,
                imgGroupDerivedMapping: o,
                eventModel: i.GetEventModel(),
                nTabIndex: a,
              }),
            ],
          });
        }
        var $n = r(81557),
          rn = r.n($n);
        function qn(s) {
          const { imgGroupDerivedMapping: t } = s,
            [a, o] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!a) return;
            const j = (0, Pe.pg)(
              (0, e.jsx)(_e.o0, {
                bAlertDialog: !0,
                closeModal: () => o(!1),
                children: (0, e.jsx)(on, { ...s }),
              }),
              window,
            );
            return () => {
              j.then((E) => E.Close());
            };
          }, [a, s]);
          const i = (0, b.q3)(() => {
              const j = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (j) {
                const E = t.mapGroupToSections.get(j);
                if (E) return Rt.get(E?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [l, u] = (0, v.useState)(null),
            x = v.useCallback((j, E) => {
              u(E);
            }, []),
            f = (0, Ze.w6)(x),
            I = !!(i >= 0 && l && l > i);
          return (0, e.jsxs)("div", {
            className: (0, G.A)(at().CtnEditor, rn().TabCtn),
            ref: f,
            children: [
              I &&
                (0, e.jsx)(re.$n, {
                  onClick: (j) => o(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(on, { ...s }),
            ],
          });
        }
        function on(s) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: a,
              nTabID: o,
            } = s,
            [i, l] = (0, v.useState)(null),
            [u, x, f, I] = (0, b.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(o),
              t?.BIsTabEnabled(o),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(z.tH, {
            children: [
              (0, e.jsx)(re.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: x,
                onChange: (j) => {
                  if (
                    ((0, It.wT)(t, "edit model mising"),
                    (0, It.wT)(o !== void 0, "tab setting missing"),
                    o !== void 0 && t)
                  ) {
                    const E = t.SetTabEnabled(o, j);
                    (0, It.wT)(
                      !!E,
                      `Failed to create model TabID ${o}backgroundModel`,
                    ),
                      l(E);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${o}.`,
                    );
                },
              }),
              !!x &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(re.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (j) => t.SetTabLastCoverSectionUntilEnd(o, j),
                    }),
                    (0, e.jsx)(Ja, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (f || i)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: I,
                      nTabIndex: o,
                      classNameHeader: rn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var Xt = r(85692);
        function es(s) {
          const { nSectionID: t, children: a } = s,
            [o, i] = v.useState(!1),
            [l, u] = v.useState(!1);
          v.useEffect(() => {
            Xt.TU.Get().SetMouseOverSection(t, o);
          }, [t, o]);
          const x = (0, b.q3)(() => Xt.TU.Get().GetMouseOverSectionID()),
            f = t && t == x,
            I = () => Xt.TU.Get().JumpToSection(t),
            j = v.useRef(null);
          return (
            (0, Xt.lM)((E) =>
              t != E ? !1 : (j.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: j,
              className: (0, G.A)({
                [C().SaleSectionLivePreview]: !0,
                [C().Hover]: !!f,
                [C().JumpedTo]: !!l,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: [
                o &&
                  (0, e.jsx)(ht.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: C().JumpToButton,
                      onClick: I,
                      children: (0, e.jsx)(wt.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
        var ts = r(33691);
        function as(s) {
          const {
              promotionName: t,
              eventModel: a,
              bIsPreview: o,
              language: i,
              backgroundImageEditModel: l,
              addtionalAdminButtons: u,
              bDynamicallyCreatedSale: x,
            } = s,
            [f, I] = v.useState(a?.GetDayIndexFromEventStart()),
            [j, E] = v.useState(null),
            P = (0, b.q3)(() => a.jsondata.sale_header_disable_top_margin),
            [D, H] = v.useState(void 0),
            W = ns(a, f, D),
            [N, T] = (0, v.useState)(!1);
          v.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !j &&
              o &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, J.yK)() == "community"
            ) {
              const ye = document.getElementsByTagName("HEAD")[0],
                Je = document.createElement("style");
              (Je.innerText = (0, na.L$)(a.jsondata.sale_custom_css)),
                E(Je),
                ye.appendChild(Je);
            }
            const me = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, It.wT)(
                me.length <= 1,
                "Must have at most one react_landing_background",
              ),
              me.length >= 1 && (me[0].style.backgroundImage = ""),
              () => {
                j && (j.remove(), E(null));
              }
            );
          }, [a, j, o]);
          const Y = a?.jsondata,
            F = v.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(J.UF.CLANACCOUNTID),
                nAppIDVOD: Number(Y?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: o,
                language: i,
                accountIDs: o ? Y?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  Y?.broadcast_chat_announcement_giveaway,
              }),
              [o, a, Y, i, t],
            ),
            ae = (0, b.q3)(() => l?.BIsBackgroundImageEnabled() ?? !1),
            fe = Le(a?.clanSteamID);
          if (!a || f === void 0)
            return (0, e.jsx)("div", {
              className: et().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(At.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const me =
                a.jsondata.localized_sale_logo &&
                a.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              ye = a.BUsesContentHubForItemSource(),
              Je = a
                .GetSaleSections()
                .some((Mt) => Mt.section_type === "contenthubtitle"),
              pe = ye && Je;
            let he,
              Me = !0;
            me
              ? (he = 0)
              : a.BUsesContentHubForItemSource()
                ? (he = 20)
                : a.GetEventType() == U.ajI
                  ? ((he = 0), (Me = !1))
                  : (he = a.jsondata.sale_header_offset || 0);
            const $e = Me && a.jsondata.sale_header_offset === 530,
              pt = !oe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              Jt = o
                ? !N && l?.BIsBackgroundImageEnabled()
                  ? qe.S.EPreviewMode_EditBackground
                  : qe.S.EPreviewMode_Enabled
                : qe.S.EPreviewMode_Disabled,
              $t = ae || a.GetEventType() != U.ajI,
              Ot = ye ? ne.Yo.NoTransform : ne.Yo.NoTransformSparseContent,
              $a = (0, G.A)(
                C().SaleOuterContainer,
                P && C().SaleOuterTopMargin,
                $e && C().SaleNewSizing,
                C()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                me && C().SalePageLogoSet,
                pe && C().ContentHub,
              );
            return (0, e.jsx)(z.tH, {
              children: (0, e.jsx)(ee.EU, {
                eventModel: a,
                language: i,
                children: (0, e.jsx)(te.Cs, {
                  location: o ? te.HY : te.bs,
                  children: (0, e.jsxs)(xe, {
                    event: a,
                    language: i,
                    bIsPreview: !!o,
                    children: [
                      pt && (0, e.jsx)(ee.Sn, {}),
                      (0, e.jsx)(Ie, { eventModel: a }),
                      !!l &&
                        ($t || fe) &&
                        (0, e.jsx)(Zn, {
                          backgroundImageEditModel: l,
                          bBackgroundImgGroupEditMode: N,
                          fnSetBackgroundImgGroupEditMode: T,
                          bShowAsValveOnly: !$t,
                        }),
                      (0, e.jsxs)(V.Z, {
                        style: pe ? void 0 : { marginTop: `${he || 0}px` },
                        className: $a,
                        scrollIntoViewType: Ot,
                        children: [
                          (0, e.jsx)(Be, { eventModel: a, language: i }),
                          (0, e.jsx)(ft, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Et, {
                            event: a,
                            broadcastEmbedContext: F,
                          }),
                          (0, e.jsx)(rs, {
                            ePreviewMode: Jt,
                            event: a,
                            backgroundImageEditModel: l,
                            language: i,
                            promotionName: t,
                            nSaleDayIndex: f,
                            broadcastEmbedContext: F,
                            selectedTab: W,
                            tagSelection: D,
                            setTagSelection: H,
                          }),
                          !x &&
                            (0, e.jsx)(Fe, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (Mt) => {
                                Mt != f &&
                                  ((a.m_overrideCurrentDay = Mt), I(Mt));
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
        function ns(s, t, a) {
          const [o] = (0, Re.QD)(S.jD, void 0);
          return v.useMemo(() => {
            const l = s
              .GetSaleSectionFirstMatchByType("tabs")
              ?.tabs?.filter((u) => !u.hide);
            if (l && l.length > 0) {
              let u = o > 0 ? l.find((I) => I.unique_id == o) : void 0;
              u || (u = l[0]);
              const x = u === l[0],
                f =
                  s.jsondata.sale_opt_in_page_name ||
                  s.jsondata.prune_list_optin_name;
              return new Bt.y(u, t, x, u.tab_tag_filter ? a : void 0, f);
            }
          }, [s, t, o, a]);
        }
        function ln() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function ss(s) {
          const {
              event: t,
              language: a,
              nSaleDayIndex: o,
              ePreviewMode: i,
              selectedTab: l,
              backgroundImageEditModel: u,
            } = s,
            [x, f] = v.useState((0, S.rp)()),
            I = v.useMemo(() => new qa(), []),
            j = v.useCallback(() => f((0, S.rp)()), []);
          v.useEffect(
            () => (
              window.addEventListener("resize", j),
              () => window.removeEventListener("resize", j)
            ),
            [j],
          ),
            v.useEffect(() => {
              let pe = "";
              const he = () => {
                  const $e = ln();
                  if ($e && $e != pe) {
                    const Gt = document.getElementById($e);
                    Gt && ((pe = $e), Gt.scrollIntoView({ block: "start" }));
                  }
                },
                Me = setTimeout(() => he(), 150);
              return (
                window.addEventListener("hashchange", he),
                () => {
                  clearTimeout(Me),
                    window.removeEventListener("hashchange", he);
                }
              );
            }, []);
          const E = (0, vt.W6)(),
            P = (pe, he) => {
              (0, Re.ip)(E, { ...(he || {}), [S.jD]: pe.toString() });
            },
            [D, H] = (0, Re.QD)("controller"),
            [W, N] = (0, b.q3)(() => {
              const pe =
                  ze.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                he = t.GetSaleSectionIncludingFooterSections(pe);
              return [
                Ia(
                  t.jsondata.sale_background_img_groups,
                  he,
                  l && l.GetActiveTabUniqueID(),
                ),
                he,
              ];
            });
          let T = !1;
          const Y = new Bt.y(void 0, o),
            F = [{ elements: [], activeTab: Y }];
          let ae = null;
          const fe = (0, J.Qn)(),
            me = (0, Xt.ty)(),
            ye = v.useMemo(() => {
              const pe = ln();
              if (!pe) return;
              const he = N.findIndex((Me) => Me.section_anchor === pe);
              return he > -1 ? he : void 0;
            }, [N]);
          N.forEach((pe, he) => {
            const Me = F[F.length - 1].activeTab;
            if (Me && !Me.ShouldShowSection(pe)) return;
            const $e = oe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Gt = x && !$e && !t.jsondata.content_hub_restricted_width;
            let pt = (0, qe.I)(pe, i, t, a, fe);
            if (pt === void 0) return;
            if (!pt)
              if ((0, Ut.su)(pe) && !J.iA.logged_in)
                T ||
                  ((pt = (0, e.jsx)(Ut.CC, {
                    section: pe,
                    event: t,
                    language: a,
                  })),
                  (T = !0));
              else {
                const $a = pe.diable_tab_id_filtering
                  ? new Bt.y(void 0, Me && Me.GetSaleDay())
                  : Me;
                pe.section_type == "tabs" &&
                  pe.tabs?.some(
                    (Mt) => Mt.unique_id == l?.GetActiveTabUniqueID(),
                  ) &&
                  F.push({ activeTab: l, elements: [] }),
                  (pt = (0, e.jsx)(ts.H, {
                    ...s,
                    section: pe,
                    activeTab: $a,
                    appVisibilityTracker: I,
                    selectedTab: l,
                    setTabUniqueIDQueryParam: P,
                    expanded: Gt,
                    controllerCategory: D,
                    setControllerCategory: H,
                  }));
              }
            me &&
              (pt = (0, e.jsx)(es, { nSectionID: pe.unique_id, children: pt }));
            const Jt = F && F.length && F[F.length - 1];
            let $t = (0, e.jsx)(
              ls,
              {
                section: pe,
                nActiveTabID:
                  Jt && Jt.activeTab && Jt.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: he,
                ePreviewMode: i,
                salePageBackgroundDerivedConfig: W,
                backgroundImageEditModel: u,
                bExpanded: Gt,
                children: (0, e.jsx)(sa._, {
                  enabled: !ye || he > ye,
                  children: pt,
                }),
              },
              "SaleSectionIndex_" + pe.unique_id + "_" + he,
            );
            const Ot = W.mapSectionToGroup.get(pe.unique_id);
            ae &&
              ae.groupID != Ot &&
              (F[F.length - 1].elements.push(
                aa(t, ae, i, l && l?.GetActiveTabUniqueID()),
              ),
              (ae = null)),
              Ot
                ? (ae ||
                    (ae = {
                      groupID: Ot,
                      elSaleSections: [],
                      derivedGroupInfo: W.mapGroupToSections.get(Ot),
                    }),
                  ae.elSaleSections.push($t))
                : F[F.length - 1].elements.push($t);
          }),
            ae &&
              (F[F.length - 1].elements.push(
                aa(t, ae, i, l && l?.GetActiveTabUniqueID()),
              ),
              (ae = null));
          const Je = F.map((pe, he) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, G.A)(
                  C().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: pe.elements,
              },
              "TabSection_" + he,
            ),
          );
          return (0, e.jsx)(V.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Je,
          });
        }
        const rs = (0, vt.y)(ss);
        function os(s) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: a,
            children: o,
          } = s;
          return t && a != null
            ? (0, e.jsx)(is, {
                visibility_by_door_index_state: t,
                door_index_visibility: a,
                children: o,
              })
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function is(s) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: a,
              children: o,
            } = s,
            i = (0, xt.OM)(a);
          return (t == "hide_when_open_door_index" && i) ||
            (t == "show_when_open_door_index" && !i)
            ? null
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function cn({ children: s, onChange: t }) {
          const a = v.useRef(null);
          return (
            (0, v.useEffect)(() => {
              t(!!v.Children.toArray(s).filter(Boolean).length);
            }, [s, t]),
            s
          );
        }
        function ls(s) {
          const {
              section: t,
              saleSectionIndex: a,
              nActiveTabID: o,
              ePreviewMode: i,
              salePageBackgroundDerivedConfig: l,
              backgroundImageEditModel: u,
              bExpanded: x,
              children: f,
            } = s,
            I = t.section_anchor ? t.section_anchor : S.mj + (t.unique_id || a),
            j = t.section_type != "tabs",
            [E, P] = (0, v.useState)(!0);
          return E
            ? (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(os, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: j
                    ? (0, e.jsx)(V.Z, {
                        navKey: I,
                        id: I,
                        className: (0, G.A)({
                          [C().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: x,
                          [t.single_item_style || ""]: !0,
                          [C().SaleSectionBackgroundImageGroupEdit]:
                            i == qe.S.EPreviewMode_EditBackground,
                          [C().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          i === qe.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  f,
                                  (0, e.jsx)(Xn, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: o,
                                    salePageBackgroundDerivedConfig: l,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(cn, { onChange: P, children: f }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          i === qe.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: I,
                                className: (0, G.A)({
                                  [C().SaleSectionCtn]: !0,
                                  [C().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [C().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  f,
                                  (0, e.jsx)(qn, {
                                    backgroundImageEditModel: u,
                                    nTabID: o,
                                    imgGroupDerivedMapping: l,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(cn, { onChange: P, children: f }),
                      }),
                }),
              })
            : null;
        }
      },
      4370: (R, je, r) => {
        "use strict";
        r.d(je, { A: () => te, X: () => le });
        var e = r(7850),
          U = r(17083),
          V = r(24660);
        function ne(K) {
          return !!(K.metaKey || K.altKey || K.ctrlKey || K.shiftKey);
        }
        function ee(K) {
          const { navigate: b, onClick: v, ...w } = K,
            { target: z } = w,
            Q = (C) => {
              try {
                v && v(C);
              } catch (B) {
                throw (C.preventDefault(), B);
              }
              !C.defaultPrevented &&
                C.button === 0 &&
                (!z || z === "_self") &&
                !ne(C) &&
                (C.preventDefault(), b());
            };
          return (0, e.jsx)(V.Ii, { ...w, onClick: Q });
        }
        function te(K) {
          return (0, e.jsx)(U.k2, { component: ee, ...K });
        }
        function le(K) {
          return (0, e.jsx)(U.N_, { component: ee, ...K });
        }
      },
      12932: (R, je, r) => {
        "use strict";
        r.d(je, { qx: () => B });
        var e = r(7850),
          U = r(16412),
          V = r(18210),
          ne = r(36118),
          ee = r(90626),
          te = r(36707),
          le = r(95695),
          K = r.n(le),
          b = r(25792),
          v = r(64734),
          w = r.n(v),
          z = r(65946),
          Q = r(11243);
        function C(G) {
          const {
              title: J,
              tooltip: be,
              getMinimized: Z,
              toggleMinimized: ce,
              className: xe,
              children: ue,
              elAdditionalButtons: L,
            } = G,
            $ = (0, z.q3)(() => Z());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, te.A)(
                  xe,
                  v.SectionTitleHeader,
                  v.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, te.A)(
                      le.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [J, !!be && (0, e.jsx)(Q.o, { tooltip: be })],
                  }),
                  (0, e.jsxs)("div", {
                    className: v.SectionTitleButtons,
                    children: [
                      L,
                      (0, e.jsx)(O, { bIsMinimized: $, fnToggleMinimize: ce }),
                    ],
                  }),
                ],
              }),
              !$ && (0, e.jsx)(b.tH, { children: ue }),
            ],
          });
        }
        function B(G) {
          const [J, be] = ee.useState(!!G.bStartMinimized);
          return (0, e.jsx)(C, {
            ...G,
            getMinimized: () => J,
            toggleMinimized: () => be(!J),
            children: G.children,
          });
        }
        function O(G) {
          const { bIsMinimized: J, fnToggleMinimize: be } = G,
            Z = J ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, V.we)(Z),
            onClick: be,
            children: G.bIsMinimized
              ? (0, e.jsx)(ne.hz4, {})
              : (0, e.jsx)(ne.Xjb, {}),
          });
        }
      },
      27638: (R, je, r) => {
        "use strict";
        r.d(je, { Y: () => V });
        var e = r(90626);
        function U(ne) {
          const { title: ee, bodyClassName: te, children: le } = ne;
          return (
            React.useEffect(() => {
              const K = document.title;
              return (
                (document.title = ee),
                () => {
                  document.title = K;
                }
              );
            }, [ee]),
            V(te),
            le
          );
        }
        function V(ne) {
          e.useEffect(() => {
            if (!ne) return;
            const ee = [];
            for (const te of ne.split(/ /))
              document.body.classList.contains(te) || ee.push(te);
            return (
              document.body.classList.add(...ee),
              () => document.body.classList.remove(...ee)
            );
          }, [ne]);
        }
      },
      6479: (R, je, r) => {
        "use strict";
        r.r(je), r.d(je, { SteamChartsRoutes: () => De, default: () => Ka });
        var e = r(7850),
          U = r(58732),
          V = r(80902),
          ne = r(99412),
          ee = r(72604),
          te = r(35038),
          le = r(80613),
          K = r.n(le),
          b = r(75245),
          v = r(78192);
        class w extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              w.prototype.country_code || b.Sg(w.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    country_code: {
                      n: 1,
                      br: b.qM.readString,
                      bw: b.gp.writeString,
                    },
                    context: { n: 2, c: v.TS },
                    data_request: { n: 3, c: v.gn },
                    start_date: {
                      n: 4,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = b.w0(w.M())), w.sm_mbf;
          }
          toObject(n = !1) {
            return w.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(w.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(w.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new w();
            return w.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(w.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return w.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(w.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Request";
          }
        }
        class z extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              z.prototype.start_date || b.Sg(z.M()),
              le.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    start_date: {
                      n: 1,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    ranks: { n: 2, c: Q, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = b.w0(z.M())), z.sm_mbf;
          }
          toObject(n = !1) {
            return z.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(z.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(z.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new z();
            return z.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(z.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(z.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response";
          }
        }
        class Q extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Q.prototype.rank || b.Sg(Q.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    rank: { n: 1, br: b.qM.readInt32, bw: b.gp.writeInt32 },
                    appid: { n: 2, br: b.qM.readInt32, bw: b.gp.writeInt32 },
                    item: { n: 3, c: v.vB },
                    last_week_rank: {
                      n: 4,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: b.qM.readBool,
                      bw: b.gp.writeBool,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = b.w0(Q.M())), Q.sm_mbf;
          }
          toObject(n = !1) {
            return Q.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(Q.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(Q.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(Q.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(Q.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class C extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              C.prototype.language || b.Sg(C.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    language: {
                      n: 1,
                      br: b.qM.readString,
                      bw: b.gp.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = b.w0(C.M())), C.sm_mbf;
          }
          toObject(n = !1) {
            return C.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(C.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(C.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new C();
            return C.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(C.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return C.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(C.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Request";
          }
        }
        class B extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              B.prototype.countries || b.Sg(B.M()),
              le.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { countries: { n: 1, c: O, r: !0, q: !0 } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = b.w0(B.M())), B.sm_mbf;
          }
          toObject(n = !1) {
            return B.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(B.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(B.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new B();
            return B.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(B.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return B.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(B.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response";
          }
        }
        class O extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              O.prototype.country_code || b.Sg(O.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    country_code: {
                      n: 1,
                      br: b.qM.readString,
                      bw: b.gp.writeString,
                    },
                    name: { n: 2, br: b.qM.readString, bw: b.gp.writeString },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = b.w0(O.M())), O.sm_mbf;
          }
          toObject(n = !1) {
            return O.toObject(n, this);
          }
          static toObject(n, d) {
            return b.BT(O.M(), n, d);
          }
          static fromObject(n) {
            return b.Uq(O.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new O();
            return O.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return b.zj(O.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return O.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            b.i0(O.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var G;
        ((m) => {
          function n(g, h, p) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, te.I8)(w, h, p),
              z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function d(g, h, p) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, te.I8)(C, h, p),
              B,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = d;
        })(G || (G = {}));
        var J = r(84192),
          be = r(71742),
          Z = r(3166);
        const ce = 20;
        class xe {
          m_WebAPI;
          m_Storage;
          m_promiseInitialize;
          m_rtCurrentWeek;
          constructor(n, d) {
            (this.m_WebAPI = n), (this.m_Storage = d);
          }
          async Initialize(n) {
            return (
              this.m_promiseInitialize ||
                (this.m_promiseInitialize = new Promise((d, g) => {
                  let h;
                  (Z.TS.EUNIVERSE == ne.Rv || Z.TS.EUNIVERSE == ne.CII) &&
                    (h = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(h, n).then((p) => {
                          (this.m_rtCurrentWeek = p), d();
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
              const n = "TopSellersCountryList_" + Z.TS.LANGUAGE;
              if (
                ((this.m_rgCountryList = await this.m_Storage.GetObject(n)),
                !this.m_rgCountryList ||
                  this.m_rgCountryList.dtTimeStored +
                    xe.k_nCountryListMaxCacheTime <
                    Date.now())
              ) {
                const d = te.w.Init(C);
                d.Body().set_language(Z.TS.LANGUAGE);
                const g = await G.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  d,
                );
                if (g.GetEResult() == ee.R) {
                  let h = g
                    .Body()
                    .countries()
                    .map((p) => p.toObject());
                  h.sort((p, _) => (p.name < _.name ? -1 : 1)),
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
              (0, be.wT)(
                this.m_rgCountryList,
                "Country list should already be loaded",
              ),
              this.m_rgCountryList.rgCountryCodes.find(
                (d) => d.country_code == n,
              )
                ? n
                : ""
            );
          }
          GetCurrentWeek() {
            return this.m_rtCurrentWeek;
          }
          async LoadCurrentWeekStart(n, d) {
            const g = this.ValidateCountryCode(d);
            let h = te.w.Init(w);
            (0, J.rV)(h),
              (0, J.Bn)(h, ft),
              g && h.Body().set_country_code(g),
              n && h.Body().set_start_date(n),
              h.Body().set_page_count(ce);
            let p = await G.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              h,
            );
            if (p.GetEResult() != ee.R) throw "error loading top sellers";
            return p.Body().start_date();
          }
        }
        const ue = "TopSellers";
        function L(m, n) {
          const { data: d } = (0, V.I)({
            queryKey: [ue, "Initialization"],
            queryFn: () =>
              m
                .Initialize(n)
                .then(() => ({
                  rtCurrentWeek: m.GetCurrentWeek(),
                  bCountryListInitialized: !0,
                })),
            staleTime: 1 / 0,
          });
          return d || { rtCurrentWeek: void 0, bCountryListInitialized: !1 };
        }
        var $ = r(6469),
          q = r(79809);
        function Ie(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class se {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, d) {
            let g = te.w.Init(q.GM);
            const h = new Date(n, d, 15);
            g.Body().set_rtime_month(Math.floor(h.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const p = Ie(n);
            g.Body().set_top_results_limit(p);
            let _ = await q.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (_.GetEResult() != ee.R) {
              if (_.GetEResult() == ee.S7) return { bSQLError: !0 };
              if (_.GetEResult() == ee.p) return {};
              throw "error loading top releases";
            }
            return _.Body().toObject();
          }
        }
        const Ce = "useMonthlyTopRelease";
        function c(m, n, d) {
          const { data: g } = (0, V.I)({
            queryKey: [Ce, n, d],
            queryFn: () => m.LoadTopMonthlyReleases(n, d),
          });
          return g;
        }
        var Be = r(72609);
        class Ye {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let d = te.w.Init(q.FN);
            const g = new Date(n, 1, 15);
            d.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              d.Body().set_include_dlc(!0);
            const h =
              (Be.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let p = await q.ZG.GetYearTopAppReleases(h, d);
            if (p.GetEResult() != ee.R) {
              if (p.GetEResult() == ee.S7) return { bSQLError: !0 };
              if (p.GetEResult() == ee.p) return {};
              throw "error loading top releases";
            }
            const _ = p.Body().toObject();
            return Be.iA.is_support && _.top_app_list.length == 0, _;
          }
        }
        function Ge() {
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
            d = [
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
          for (const h of d)
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
        const rt = "useYearlyTopRelease";
        function ut(m, n) {
          const { data: d } = (0, V.I)({
            queryKey: [rt, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return d;
        }
        class gt {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, d) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new xe(this.m_WebAPI, d)),
              (this.m_TopMonthlyReleasesStore = new se(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new Ye(this.m_WebAPI)),
              (this.m_DynamicUserStore = await $.Fm.Get().HintLoad());
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
        const ft = {
          include_basic_info: !0,
          include_assets: !0,
          include_trailers: !0,
          include_release: !0,
          include_reviews: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_tag_count: 20,
        };
        var ot = r(89921),
          ze = r.n(ot),
          vt = r(74812),
          S = r.n(vt),
          oe = r(90626),
          xt = r(24805),
          Ve = r(7582),
          Et = r(29057),
          Oe = r(10142),
          Fe = r(84676),
          Re = r(36118),
          Ke = r(92298),
          Ze = r.n(Ke),
          ea = r(19367),
          it = r.n(ea),
          Rt = r(16346),
          ta = r(34360),
          Ia = r(95863),
          Ae = r.n(Ia),
          yt = r(71421),
          Ee = r(36707),
          de = r(18210),
          qe = r(92264);
        function aa(m) {
          const { toolTipContent: n } = m,
            d = _a({ ...m });
          return (0, e.jsx)(yt.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, Ee.A)(Ae().CalendarBtn),
              onClick: (g) =>
                d(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(Re.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function _a(m) {
          return (0, oe.useCallback)(
            (d, g) => {
              const h = (0, e.jsx)(ba, { ...m });
              (0, Rt.lX)(h, d, g);
            },
            [m],
          );
        }
        function ba(m) {
          const { value: n, fnOnUpdate: d, minDate: g, maxDate: h } = m,
            p = (0, oe.useRef)(void 0),
            _ = (0, oe.useRef)(null),
            A = (0, oe.useCallback)(
              (k) => {
                const M = it().unix(g),
                  ve = it().unix(h);
                return (
                  k.isSameOrAfter(M, "month") && k.isSameOrBefore(ve, "month")
                );
              },
              [g, h],
            ),
            y = (0, oe.useCallback)(
              (k) => {
                d(k.unix()), p.current.Hide();
              },
              [d],
            ),
            X = (0, oe.useMemo)(() => {
              if (!it().locales().includes("YearMonthPickerContextMenu")) {
                const k = Array.from({ length: 12 }, (ve, ge) =>
                    (0, de.Gj)(new Date(2020, ge, 1)),
                  ),
                  M = Array.from({ length: 12 }, (ve, ge) =>
                    (0, qe.oL)(new Date(2020, ge, 1)),
                  );
                it().defineLocale("YearMonthPickerContextMenu", {
                  months: k,
                  monthsShort: M,
                });
              }
              return it()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(ta.tz, {
            refInstance: p,
            children: (0, e.jsx)(ta.kt, {
              onSelected: () => {},
              className: Ae().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (k) => {
                  k.preventDefault(), k.stopPropagation();
                },
                children: (0, e.jsx)(Ze(), {
                  ref: _,
                  value: X,
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
        var Ut = r(31032),
          Bt = r(47515),
          Lt = r(85599),
          et = r(41672),
          At = r(27221),
          tt = r.n(At);
        const qa = 25;
        function It(m) {
          const {
              rgAppIDs: n,
              children: d,
              nMonth: g,
              bTallCapsule: h,
              bBlurCapsules: p,
            } = m,
            _ = (0, oe.useMemo)(() => {
              let A = 0,
                y = [...n];
              for (; y.length < 25; ) y.push(n[A % n.length]), A++;
              return y.map((X) => Oe.A.Get().GetApp(X)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, Ee.A)({
                  [tt().ImagesCtn]: !0,
                  [tt().TallCapsules]: h,
                  [tt().BlurCapsules]: p,
                  [tt().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: tt().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: tt().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, Ee.A)({
                        [tt().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [tt().Wide2]: _.length <= 10,
                        [tt().Wide3]: _.length <= 20,
                      }),
                      children: _.map((A, y) =>
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
              d,
            ],
          });
        }
        function na(m) {
          const n = m > 1e12,
            d = new Date(n ? m : m * 1e3),
            g = {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
            h = new Intl.DateTimeFormat("en-US", g).format(d),
            p = new Date(
              d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            _ = p.getMonth(),
            A = p.getFullYear(),
            y = p.getDate(),
            X = p.getHours();
          let k, M;
          for (
            y > 15 || (y === 15 && X >= 10) ? (k = _ - 1) : (k = _ - 2);
            k < 0;
          )
            (k += 12), (M = (M ?? A) - 1);
          M = M ?? A;
          const ve = new Date(Date.UTC(M, k, 15, 17, 0));
          return Math.floor(ve.getTime() / 1e3);
        }
        function sa(m) {
          const [n, d] = m.split("_");
          let g = parseInt(d, 10),
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
          let _ = p,
            A = g;
          return (
            p == 11 ? ((_ = 0), (A += 1)) : (_ += 1),
            { dtMidMonth: new Date(g, p, 15), dtTestMonth: new Date(A, _, 15) }
          );
        }
        function Tt(m, n) {
          const d = [
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
          return `${d[n]}_${m}`;
        }
        var Le = r(21042),
          ra = r(56330),
          re = r(25679),
          _e = r(98609),
          Pe = r(41635),
          ja = r(87853),
          mt = r.n(ja);
        function oa(m) {
          let n = mt().PlatinumSection;
          switch (m) {
            case q.s4.NH:
              n = mt().GoldSection;
              break;
            case q.s4.U1:
              n = mt().SilverSection;
              break;
            case q.s4.DB:
              n = mt().BronzeSection;
              break;
          }
          return n;
        }
        function ia(m, n, d, g, h, p, _, A) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, Le.Sm)("items", "#Sale_default_label_148"),
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
              facets: d,
              show_on_tabs: p ? [p] : void 0,
              prefer_assets_without_overrides: h,
              show_deck_compability_details: !!_,
              show_as_demos: !!A,
              prefer_demo_store_page: !!A,
            });
        }
        function la(m, n, d, g, h, p, _, A) {
          if (_e.iA.logged_in) {
            const y = $.Fm.Get(),
              X = n.filter((M) => y.BIsGameWishlisted(M));
            X?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, Le.Sm)("items", "#Sale_OnWishlist"),
                capsules: X.map((M) => ({
                  id: M,
                  type: g.has(M) ? "dlc" : "game",
                })),
                capsules_per_row_array: X.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: X.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: p ? [p] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!_,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            const k = n.filter(
              (M) => y.BIsGameRecommended(M) && !y.BIsGameIgnored(M),
            );
            if (k?.length > 0) {
              const M = k.length;
              m.jsondata.sale_sections.push({
                ...(0, Le.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: k.map((ve) => ({
                  id: ve,
                  type: g.has(ve) ? "dlc" : "game",
                })),
                capsules_per_row_array: M == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  M == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: p ? [p] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!_,
                show_as_demos: !!A,
                prefer_demo_store_page: !!A,
              });
            }
            if (!A) {
              const M = d.filter((ve) => {
                if (!y.BIsGameOwned(ve)) {
                  const ge = Oe.A.Get().GetApp(ve);
                  return y.BIsGameOwned(ge.GetParentAppID());
                }
                return !1;
              });
              M.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, Le.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: M.map((ve) => ({ id: ve, type: "dlc" })),
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
        function Ca(m, n) {
          const d = $.Fm.Get(),
            g = [],
            h = [],
            p = [],
            _ = [],
            A = [];
          for (const y of m)
            d.BIsGameIgnored(y) ||
              (d.BIsGameRecommended(y)
                ? g.push(y)
                : d.BIsGameWishlisted(y)
                  ? h.push(y)
                  : n[1]?.includes(y)
                    ? p.push(y)
                    : n[2]?.includes(y)
                      ? _.push(y)
                      : A.push(y));
          return [
            ...(0, Pe.fW)(g),
            ...(0, Pe.fW)(h),
            ...(0, Pe.fW)(p),
            ...(0, Pe.fW)(_),
            ...(0, Pe.fW)(A),
          ];
        }
        function ht(m, n, d, g, h, p, _, A) {
          m.jsondata.sale_sections.push({
            ...(0, Le.Sm)("trailercarousel", ""),
            capsules: Ca(n, d).map((y) => ({
              id: y,
              type: g.has(y) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: p ? [p] : void 0,
            prefer_assets_without_overrides: h,
            show_deck_compability_details: !!_,
            show_as_demos: !!A,
            prefer_demo_store_page: !!A,
          });
        }
        var ca = r(50974);
        function Pt(m, n, d, g, h) {
          const p = (0, Le.U)(ca.wv, ne.DRF, m, (0, Ve.sB)()),
            _ = !1,
            A = [...h, ...d],
            y = new Set(h);
          if (
            ((p.jsondata.sale_sections = []),
            d.length > 9 && ht(p, d, g, y, _),
            d?.length > 25)
          )
            for (let X in g) {
              const k = g[X];
              p.jsondata.sale_sections.push({
                ...(0, Le.Sm)("items", "#SteamCharts_Monthly_Rank_" + X),
                capsules: k.map((M) => ({
                  id: M,
                  type: y.has(M) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: X == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + X + "_subtitle",
                sale_section_classname: oa(Number.parseInt(X)),
                prefer_assets_without_overrides: _,
              });
            }
          else {
            const X = Object.values(d).flat();
            p.jsondata.sale_sections.push({
              ...(0, Le.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: X.map((k) => ({
                id: k,
                type: y.has(k) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                d?.length > 9 ? (d?.length > 15 ? [3] : [2]) : [1],
              single_item_style: d?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: mt().AllTiers,
              prefer_assets_without_overrides: _,
            });
          }
          return (
            la(p, A, h, y, _),
            ia(p, d, n, y, _),
            p.jsondata.sale_sections.push({
              ...(0, Le.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Le.r3)(),
            }),
            p
          );
        }
        function Ea(m, n, d, g, h) {
          const { data: p } = (0, V.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Pt(m, n, d, g, h);
              } catch (_) {
                return (
                  console.error(`Montly new release: ${m} failed: `, _), null
                );
              }
            },
          });
          return p;
        }
        function ya(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: d,
              promotionName: g,
              rgFilteredAppIDByTier: h,
              facets: p,
            } = m,
            _ = Ea(g, p, d, h, n),
            A = (0, ne.sfN)(_e.TS.LANGUAGE);
          return _
            ? (0, e.jsx)(re._, {
                eventModel: _,
                language: A,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : _ === null
              ? (0, e.jsx)("div", {
                  className: ra.ErrorStylesWithIcon,
                  children: (0, de.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Lt.t, {
                  string: (0, de.we)("#Loading"),
                  position: "center",
                });
        }
        function da(m, n, d, g) {
          (0, oe.useEffect)(() => {
            if (m == null && g != Fe.Sq && d) {
              const h = Aa(d);
              h?.length > 0
                ? Oe.A.Get()
                    .HintLoadStoreApps(h, xt.Xh)
                    .then(() => n(h))
                : n([]);
            }
          }, [g, d, m, n]);
        }
        function Aa(m) {
          const n = $.Fm.Get(),
            d = m
              .filter((g) => {
                if (!n.BIsGameOwned(g)) {
                  const h = Oe.A.Get().GetApp(g);
                  return (
                    h && h.BIsVisible() && n.BIsGameOwned(h.GetParentAppID())
                  );
                }
                return !1;
              })
              .map((g) => Oe.A.Get().GetApp(g).GetParentAppID())
              .filter(Boolean);
          return Array.from(new Set(d));
        }
        var Se = r(19298),
          _t = r(92757);
        const at = ["topnewreleases", "bestofyear"];
        function ua(m) {
          return m.split(/[?#]/)[0];
        }
        function Dt(m) {
          const n = ua(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Qe(m) {
          if (!m) return !1;
          const n = U.B.SteamCharts(),
            d = ua(m);
          if (Dt(d) == Dt(n)) return !0;
          if (!d.startsWith(n)) return !1;
          const g = d.slice(n.length).split("/")[0];
          return !at.includes(g);
        }
        function Nt() {
          const m = (0, _t.W6)();
          return oe.useCallback(
            (n, d) => {
              if (Qe(n)) {
                d?.bReplace
                  ? window.location.replace(n)
                  : window.location.assign(n);
                return;
              }
              d?.bReplace ? m.replace(n, d?.state) : m.push(n, d?.state);
            },
            [m],
          );
        }
        var He = r(24660),
          zt = r(4370);
        function Da(m, n) {
          const d = Dt(window.location.pathname),
            g = Dt(m);
          return n ? d == g : d == g || d.startsWith(g + "/");
        }
        function bt(m) {
          const {
              to: n,
              exact: d,
              activeClassName: g,
              className: h,
              children: p,
              ..._
            } = m,
            A = typeof n == "string" ? n : void 0;
          return Qe(A)
            ? (0, e.jsx)(He.Ii, {
                href: A,
                className: (0, Ee.A)(h, Da(A, !!d) ? g : void 0),
                ..._,
                children: p,
              })
            : (0, e.jsx)(zt.A, {
                to: n,
                exact: d,
                activeClassName: g,
                className: h,
                ..._,
                children: p,
              });
        }
        function lt(m) {
          const { to: n, children: d, ...g } = m,
            h = typeof n == "string" ? n : void 0;
          return Qe(h)
            ? (0, e.jsx)(He.Ii, { href: h, ...g, children: d })
            : (0, e.jsx)(zt.X, { to: n, ...g, children: d });
        }
        function ct(m) {
          const { salePageName: n, TopMonthlyReleasesStore: d } = m,
            g = (0, Ve.f1)(),
            { dtMidMonth: h, dtTestMonth: p } = sa(n);
          return !h ||
            Math.floor(p.getTime() / 1e3) > g ||
            h.getFullYear() < Ft ||
            (h.getFullYear() == Ft && h.getMonth() < Ue)
            ? (0, e.jsx)("div", {
                children: (0, de.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(Ma, {
                TopMonthlyReleasesStore: d,
                nMonth: h.getMonth(),
                nYear: h.getFullYear(),
                promotionName: n,
              });
        }
        const Sa = { ...xt.Xh, apply_user_filters: !0 };
        function wa(m, n, d, g) {
          const h = c(m, n, d),
            p = (0, oe.useMemo)(
              () =>
                h
                  ? Array.from(
                      new Set([
                        ...(h.top_dlc_releases?.map((k) => k.appid) || []),
                        ...(h.top_combined_app_and_dlc_releases?.map(
                          (k) => k.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [h, g],
            ),
            _ = (0, Fe.zX)(p, Sa),
            A = (0, oe.useMemo)(
              () =>
                !h || _ == Fe.Sq
                  ? []
                  : h.top_dlc_releases
                      ?.filter((k) => !Oe.A.Get().BIsAppMissing(k.appid))
                      .map((k) => k.appid),
              [h, _],
            ),
            { rgFilteredCombinedAppsAndDLC: y, rgFilteredAppIDByTier: X } = (0,
            oe.useMemo)(() => {
              if (!h || _ == Fe.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const k = h?.top_combined_app_and_dlc_releases || [],
                M = [];
              return {
                rgFilteredCombinedAppsAndDLC: k
                  .filter((ge) => !Oe.A.Get().BIsAppMissing(ge.appid))
                  .map((ge) => {
                    const ie = ge.app_release_rank;
                    return (
                      M[ie] || (M[ie] = []), M[ie].push(ge.appid), ge.appid
                    );
                  }),
                rgFilteredAppIDByTier: M,
              };
            }, [_, h]);
          return {
            rgAppIDs: p,
            rgMonthlyReleases: h,
            rgFilteredAppIDByTier: X,
            rgFilteredCombinedAppsAndDLC: y,
            rgFilteredDLCsAppIDs: A,
            loadState: _,
          };
        }
        function Ma(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: d,
              nMonth: g,
              promotionName: h,
            } = m,
            [p, _] = (0, oe.useState)(null),
            [A, y] = (0, oe.useState)(null),
            {
              rgAppIDs: X,
              rgMonthlyReleases: k,
              rgFilteredAppIDByTier: M,
              rgFilteredCombinedAppsAndDLC: ve,
              rgFilteredDLCsAppIDs: ge,
              loadState: ie,
            } = wa(n, d, g);
          return (
            (0, oe.useEffect)(() => {
              p ||
                (0, Et.$R)({ bForceFeatureTagForFullController: !1 }).then(_);
            }, [p]),
            da(A, y, ge, ie),
            !k || ie == Fe.Sq || !p || A == null || !X
              ? (0, e.jsxs)(Se.Z, {
                  className: ze().ChartPage,
                  children: [
                    (0, e.jsx)(Ct, { nMonth: g, nYear: d }),
                    (0, e.jsx)(Lt.t, {
                      string: (0, de.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : X.length == 0
                ? (0, e.jsxs)(Se.Z, {
                    className: ze().ChartPage,
                    children: [
                      (0, e.jsx)(Ct, { nMonth: g, nYear: d }),
                      (0, e.jsx)("div", {
                        className: ze().NoticeBox,
                        children: (0, de.we)(
                          k.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Se.Z, {
                    className: ze().ChartPage,
                    children: [
                      (0, e.jsx)(It, {
                        rgAppIDs: ve,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(Ct, { nMonth: g, nYear: d }),
                      }),
                      (0, e.jsx)(ya, {
                        promotionName: h,
                        rgFilteredCombinedAppsAndDLC: ve,
                        rgFilteredAppIDByTier: M,
                        rgFilteredDLCsAppIDs: ge,
                        facets: p,
                      }),
                    ],
                  })
          );
        }
        function kt(m, n) {
          return (0, de.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, de.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Ft = 2003,
          Ue = 8,
          jt = 1063584e3;
        function Ct(m) {
          const { nMonth: n, nYear: d } = m,
            g = Nt(),
            h = (0, Ut.yk)() || (0, Bt.tx)(window),
            p = (0, Ve.f1)(),
            _ = n > 0 ? d : d - 1,
            A = n > 0 ? n - 1 : 11,
            y = Tt(_, A),
            X = d > Ft || n > Ue,
            k = n < 11 ? d : d + 1,
            M = n < 11 ? n + 1 : 0,
            ve = Tt(k, M),
            ge = new Date(M == 11 ? d + 1 : d, M == 11 ? 0 : M + 1, 15),
            ie = Math.floor(ge.getTime() / 1e3) < p,
            we = (0, oe.useCallback)(
              (Xe) => {
                h.active_modal ||
                  (Xe && ie
                    ? g(De.TopNewReleases(ve))
                    : !Xe && X && g(De.TopNewReleases(y)));
              },
              [h.active_modal, ie, X, g, ve, y],
            );
          return (
            (0, et.E)("ArrowLeft", () => we(!1), !0, !0),
            (0, et.E)("Left", () => we(!1), !0, !0),
            (0, et.E)("ArrowRight", () => we(!0), !0, !0),
            (0, et.E)("Right", () => we(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, Ee.A)(S().HeaderCtn, S().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: kt(n, d) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, Ee.A)(S().PageSubtitle),
                  children: [
                    (0, de.we)("#SteamCharts_Monthly_SubTitle", Ie(d)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, de.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(Se.Z, {
                  className: (0, Ee.A)(S().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(yt.Gq, {
                      toolTipContent: kt(A, _),
                      children: (0, e.jsx)("div", {
                        className: (0, Ee.A)({
                          [S().ChartNavCtn]: !0,
                          [S().Disabled]: !X,
                        }),
                        children: X
                          ? (0, e.jsx)(lt, {
                              to: X ? De.TopNewReleases(y) : void 0,
                              className: S().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: S().ChartNavPrev,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: S().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: S().ChartNavPrev,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(yt.Gq, {
                      toolTipContent: kt(M, k),
                      children: (0, e.jsx)("div", {
                        className: (0, Ee.A)({
                          [S().ChartNavCtn]: !0,
                          [S().Disabled]: !ie,
                        }),
                        children: ie
                          ? (0, e.jsx)(lt, {
                              to: De.TopNewReleases(ve),
                              className: S().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: S().ChartNavNext,
                                children: "\xA0",
                              }),
                            })
                          : (0, e.jsx)("div", {
                              className: S().ChartNavHitArea,
                              children: (0, e.jsx)("div", {
                                className: S().ChartNavNext,
                                children: "\xA0",
                              }),
                            }),
                      }),
                    }),
                    (0, e.jsx)(aa, {
                      toolTipContent: (0, de.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: jt,
                      maxDate: na(p),
                      value: Math.floor(
                        new Date(d, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Xe) => {
                        const fa = new Date(Xe * 1e3),
                          Za = Tt(fa.getFullYear(), fa.getMonth());
                        g(De.TopNewReleases(Za));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function ga(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function Ht(m) {
          return m || "global";
        }
        var nt = r(25792),
          Ba = r(27638),
          La = r(77187),
          St = r(65946);
        const Ta = 2,
          Pa = 60,
          Na = 2022;
        function Wt(m, n) {
          const d = new Date(m * 1e3),
            g = "America/Los_Angeles",
            h = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(d),
            ),
            _ =
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
          return d.getTime() >= _;
        }
        function Yt(m, n, d) {
          const g = n * 1e3,
            p = new Date(g).getUTCFullYear();
          return (
            m >= Na &&
            m < p + 1 &&
            (m != p || (d && _e.iA.is_support && Wt(n, Pa)) || Wt(n, Ta))
          );
        }
        function ka(m, n) {
          const d = new Date().getUTCFullYear(),
            g = [];
          for (let h = d, p = 0; h >= Na && p < n; h--, p++)
            Yt(h, m, !1) ? g.push(h) : p--;
          return g;
        }
        var dt = r(22275);
        function Ga(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: d,
            DynamicUserStore: g,
            children: h,
          } = m;
          (0, Ba.Y)(S().SteamChartsPage);
          const p = wt(g);
          let _ = oe.useMemo(() => ({ content_descriptors_excluded: p }), [p]);
          const A = oe.useRef(null);
          return (
            oe.useEffect(() => {
              A.current && A.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(Se.Z, {
              className: S().SteamChartsRootPanel,
              navRef: A,
              children: [
                (0, e.jsx)("div", {
                  className: S().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: S().AlignWithMenu,
                    children: (0, e.jsxs)(Se.Z, {
                      className: S().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(Se.Z, {
                          className: S().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: S().MenuLinks,
                            children: (0, e.jsxs)(bt, {
                              to: De.Overview(),
                              exact: !0,
                              activeClassName: S().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, Ee.A)(S().MenuItemIcon),
                                  children: (0, e.jsx)(Re.ww0, {}),
                                }),
                                (0, de.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(nt.tH, { children: (0, e.jsx)(Oa, {}) }),
                        (0, e.jsx)(nt.tH, {
                          children: (0, e.jsx)(Ra, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(nt.tH, {
                          children: (0, e.jsx)(Ne, {
                            TopMonthlyReleasesStore: d,
                          }),
                        }),
                        (0, e.jsx)(nt.tH, { children: (0, e.jsx)(Ua, {}) }),
                      ],
                    }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, Ee.A)(
                    S().SteamChartsShell,
                    "SteamChartsShell",
                  ),
                  children: (0, e.jsx)("div", {
                    className: S().SteamChartsContent,
                    children: (0, e.jsx)(La.E2, {
                      defaultOptions: _,
                      children: (0, e.jsx)(nt.tH, { children: h }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function wt(m) {
          return (0, St.q3)(() => m.ExcludedContentDescriptor);
        }
        function Oa() {
          return (0, e.jsxs)(Se.Z, {
            className: S().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(Se.Z, {
                className: S().MenuLinks,
                children: [
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: De.TopSelling(Z.TS.COUNTRY),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Re.t1X, {}),
                      (0, de.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: De.MostPlayed(),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Re.N3h, {}),
                      (0, de.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: De.MostPlayedOnSteamDeck(),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Re.lRD, {}),
                      (0, de.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ra(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: d, bCountryListInitialized: g } = L(
              n,
              Z.TS.COUNTRY,
            );
          if (!d || !g) return null;
          const h = Ht(
            n.BIsValidTopSellersCountry(Z.TS.COUNTRY) ? Z.TS.COUNTRY : "",
          );
          let p = [];
          for (let _ = 0; _ < 3; _++) {
            const A = d - _ * 60 * 60 * 24 * 7;
            p.push(
              (0, e.jsxs)(
                bt,
                {
                  to: De.TopSellers(h, ga(A)),
                  activeClassName: S().ActiveLink,
                  fnCanTakeFocus: dt.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, Ee.A)(S().MenuItemIcon),
                      children: (0, e.jsx)(Re.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, de.$z)(A, { timeZone: "UTC" }),
                  ],
                },
                A,
              ),
            );
          }
          return (0, e.jsxs)(Se.Z, {
            className: (0, Ee.A)(S().MenuGroup, S().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(Se.Z, { className: S().MenuLinks, children: p }),
            ],
          });
        }
        function Ne(m) {
          const n = (0, Ve.f1)(),
            d = na(n),
            g = [d, d - 720 * 60 * 60, d - 1440 * 60 * 60];
          return (0, e.jsxs)(Se.Z, {
            className: (0, Ee.A)(S().MenuGroup, S().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(Se.Z, {
                className: S().MenuLinks,
                children: g.map((h) => {
                  const p = new Date(h * 1e3),
                    _ = Tt(p.getFullYear(), p.getMonth()),
                    A = De.TopNewReleases(_),
                    y = window.location.pathname === A;
                  return (0, e.jsxs)(
                    bt,
                    {
                      className: y ? S().ActiveLink : "",
                      to: A,
                      fnCanTakeFocus: dt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, Ee.A)(S().MenuItemIcon),
                          children: (0, e.jsx)(Re.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, qe.CC)(h),
                      ],
                    },
                    "month_" + h,
                  );
                }),
              }),
            ],
          });
        }
        function Ua(m) {
          const n = (0, Ve.f1)(),
            d = (0, oe.useMemo)(() => ka(n, 3), [n]);
          return (0, e.jsxs)(Se.Z, {
            className: (0, Ee.A)(S().MenuGroup, S().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, de.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(Se.Z, {
                className: S().MenuLinks,
                children: d.map((g) => {
                  const h = De.BestOfYear("" + g),
                    p = window.location.pathname === h;
                  return (0, e.jsxs)(
                    lt,
                    {
                      className: (0, Ee.A)(p ? S().ActiveLink : ""),
                      to: h,
                      fnCanTakeFocus: dt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, Ee.A)(S().MenuItemIcon),
                          children: (0, e.jsx)(Re.VvS, { color: "#C3D3D8" }),
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
        var ma = r(68312),
          Vt = r(51079),
          en = r(179);
        function ha(m, n, d) {
          const g = (0, Le.U)(ca.yT, ne.DRF, "" + m, (0, Ve.sB)()),
            h = !0,
            p = { ...(0, Le.Sm)("tabs", ""), tabs: [] };
          return (
            d.forEach((_, A) => {
              p.tabs.push({
                unique_id: A + 1,
                default_label: _.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [p]),
            d.forEach((_, A) => {
              const {
                  rgFilteredCombinedAppsAndDLC: y,
                  rgFilteredAppIDByTier: X,
                  rgFilteredDLCsAppIDs: k,
                } = _,
                M = new Set(k),
                ve = [...k, ...y];
              g.jsondata.sale_sections.push({
                ...(0, Le.Sm)("text_section", ""),
                text_section_contents: [
                  (0, de.we)(_.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [A + 1],
                show_deck_compability_details: !!_.bShowDeckCompat,
                prefer_assets_without_overrides: h,
              });
              for (let ge in X) {
                const ie = X[ge];
                g.jsondata.sale_sections.push({
                  ...(0, Le.Sm)("items", "#SteamCharts_Yearly_Rank_" + ge),
                  capsules: ie.map((we) => ({
                    id: we,
                    type: M.has(we) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    ge == "3" ? [4] : ge == "0" ? [4] : [3],
                  capsule_style_per_row_array: ge == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + ge + "_subtitle",
                  show_on_tabs: [p.tabs[A].unique_id],
                  sale_section_classname: oa(Number.parseInt(ge)),
                  prefer_assets_without_overrides: h,
                  show_deck_compability_details: !!_.bShowDeckCompat,
                  show_as_demos: !!_.bShowDemoInfo,
                  prefer_demo_store_page: !!_.bShowDemoInfo,
                });
              }
              la(
                g,
                ve,
                k,
                M,
                h,
                p.tabs[A].unique_id,
                !!_.bShowDeckCompat,
                !!_.bShowDemoInfo,
              ),
                ht(
                  g,
                  y,
                  X,
                  M,
                  h,
                  p.tabs[A].unique_id,
                  !!_.bShowDeckCompat,
                  !!_.bShowDemoInfo,
                ),
                ia(
                  g,
                  y,
                  n,
                  M,
                  h,
                  p.tabs[A].unique_id,
                  !!_.bShowDeckCompat,
                  !!_.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, Le.Sm)("text_section", ""),
              text_section_contents: [
                (0, de.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${_e.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, de.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, Le.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Le.r3)(),
            }),
            g
          );
        }
        function za(m, n, d) {
          const { data: g } = (0, V.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return ha(m, n, d);
              } catch (h) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, h), null
                );
              }
            },
          });
          return g;
        }
        function Fa(m) {
          const { rgTabsData: n, nYear: d, facets: g } = m,
            h = za(d, g, n),
            p = (0, ne.sfN)(_e.TS.LANGUAGE);
          return h
            ? (0, e.jsx)(re._, {
                eventModel: h,
                language: p,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : h === null
              ? (0, e.jsx)("div", {
                  className: ra.ErrorStylesWithIcon,
                  children: (0, de.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(Lt.t, {
                  string: (0, de.we)("#Loading"),
                  position: "center",
                });
        }
        function Ha(m) {
          const { salePageName: n, TopYearlyReleasesStore: d } = m,
            g = (0, Ve.f1)(),
            h = Number.parseInt(n),
            p = Nt();
          return Yt(h, g, !0)
            ? (0, e.jsx)(Ya, { nYear: h, TopYearlyReleasesStore: d })
            : (p(De.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, de.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const Wa = {
          ...xt.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function st(m, n, d, g) {
          const h = g?.filter((y) => y.type == m),
            p = [],
            _ = [],
            A = h
              ?.filter((y) => !Oe.A.Get().BIsAppMissing(y.appid))
              .map((y) => {
                let X = y.app_release_rank;
                return (
                  X == q.s4.xE && (X = 0),
                  p[X] || (p[X] = []),
                  p[X].push(y.appid),
                  Oe.A.Get().GetApp(y.appid)?.GetAppType() == v.uE._i &&
                    _.push(y.appid),
                  y.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: d,
            rgFilteredCombinedAppsAndDLC: A,
            rgFilteredAppIDByTier: p,
            rgFilteredDLCsAppIDs: _,
          };
        }
        function Kt(m, n) {
          const d = m + 1,
            g = new Date(Date.UTC(d, 0, n, 1, 0, 0)),
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
            _ = Date.UTC(
              p("year"),
              p("month") - 1,
              p("day"),
              p("hour"),
              p("minute"),
              p("second"),
            );
          return Math.floor(_ / 1e3);
        }
        function tn(m, n, d) {
          const g = (0, Ve.f1)(),
            h = g < Kt(n, 1),
            p = g < Kt(n, 15),
            _ = ut(m, n),
            A = (0, oe.useMemo)(
              () =>
                _
                  ? Array.from(
                      new Set([
                        ...(_.top_dlc_releases?.map((k) => k.appid) || []),
                        ...(_.top_combined_app_and_dlc_releases?.map(
                          (k) => k.appid,
                        ) || []),
                        ...(_.top_app_list?.map((k) => k.appid) || []),
                      ]),
                    )
                  : (d && d(null), []),
              [_, d],
            ),
            y = (0, Fe.zX)(A, Wa),
            X = (0, oe.useMemo)(() => {
              if (!_ || y == Fe.Sq) return [];
              const k = _?.top_combined_app_and_dlc_releases || [],
                M = [],
                ve = k
                  .filter((we) => !Oe.A.Get().BIsAppMissing(we.appid))
                  .map((we) => {
                    let Xe = we.app_release_rank;
                    return (
                      Xe == q.s4.xE && (Xe = 0),
                      M[Xe] || (M[Xe] = []),
                      M[Xe].push(we.appid),
                      we.appid
                    );
                  });
              let ge = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: p
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      _.top_dlc_releases
                        ?.filter((we) => !Oe.A.Get().BIsAppMissing(we.appid))
                        .map((we) => we.appid) || [],
                    rgFilteredCombinedAppsAndDLC: ve,
                    rgFilteredAppIDByTier: M,
                  },
                ],
                ie = st(
                  q.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  h
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  _.top_app_list,
                );
              return (
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = st(
                  q.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  _.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = st(
                  q.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  _.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((ie.bShowDeckCompat = !0), ge.push(ie)),
                (ie = st(
                  q.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  _.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = st(
                  q.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  _.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 && ge.push(ie),
                (ie = st(
                  q.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  _.top_app_list,
                )),
                ie.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((ie.bShowDemoInfo = !0), ge.push(ie)),
                ge
              );
            }, [_, y, h, p]);
          return {
            rgAppIDs: A,
            rgYearlyReleases: _,
            rgTabsData: X,
            loadState: y,
          };
        }
        function Ya(m) {
          const { nYear: n, TopYearlyReleasesStore: d } = m,
            [g, h] = (0, oe.useState)(null),
            [p, _] = (0, oe.useState)(null),
            {
              rgAppIDs: A,
              rgYearlyReleases: y,
              rgTabsData: X,
              loadState: k,
            } = tn(d, n);
          return (
            (0, oe.useEffect)(() => {
              p ||
                (0, Et.$R)({ bForceFeatureTagForFullController: !1 }).then(_);
            }, [p]),
            da(g, h, X?.[0]?.rgFilteredDLCsAppIDs, k),
            !y || k == Fe.Sq || !p || g == null || !A
              ? (0, e.jsxs)(Se.Z, {
                  className: ze().ChartPage,
                  children: [
                    (0, e.jsx)(Zt, { nYear: n }),
                    (0, e.jsx)(Lt.t, {
                      string: (0, de.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : A.length == 0
                ? (0, e.jsxs)(Se.Z, {
                    className: ze().ChartPage,
                    children: [
                      (0, e.jsx)(Zt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: ze().NoticeBox,
                        children: (0, de.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(Se.Z, {
                    className: ze().ChartPage,
                    children: [
                      (0, e.jsx)(It, {
                        rgAppIDs: X[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(Zt, { nYear: n }),
                      }),
                      (0, e.jsx)(Fa, { facets: p, nYear: n, rgTabsData: X }),
                    ],
                  })
          );
        }
        function Zt(m) {
          const { nYear: n } = m,
            d = Nt(),
            g = (0, Ve.f1)(),
            [h] = (0, en.QD)("tab", 1),
            p = n + 1,
            _ = Yt(p, g, !0),
            A = n - 1,
            y = Yt(A, g, !0),
            X = (0, Ut.yk)() || (0, Bt.tx)(window),
            k = (0, oe.useCallback)(
              (ve) => {
                X.active_modal ||
                  (ve && _
                    ? d(De.BestOfYear("" + p))
                    : !ve && y && d(De.BestOfYear("" + A)));
              },
              [X.active_modal, _, y, d, p, A],
            );
          (0, et.E)("ArrowLeft", () => k(!1), !0, !0),
            (0, et.E)("Left", () => k(!1), !0, !0),
            (0, et.E)("ArrowRight", () => k(!0), !0, !0),
            (0, et.E)("Right", () => k(!0), !0, !0);
          const M = h != 1 ? `?tab=${h}` : "";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: S().YearlyHeaderCtn,
                children: [
                  (0, e.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    className: S().Triangle,
                    children: (0, e.jsx)("polygon", {
                      points: "50,35 100,100 0,100",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, Ee.A)(S().HeaderCtn, S().WithSubtitle),
                    children: (0, e.jsx)("h1", {
                      children: (0, de.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, Ee.A)(S().PageSubtitle),
                    children: [
                      (0, de.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(Se.Z, {
                className: (0, Ee.A)(S().ChartRangeCtn, S().AnnualChart),
                children: [
                  (0, e.jsx)(yt.Gq, {
                    toolTipContent: (0, de.we)("#SteamCharts_Yearly_Title", A),
                    children: (0, e.jsx)("div", {
                      className: (0, Ee.A)({
                        [S().ChartNavCtn]: !0,
                        [S().Disabled]: !y,
                      }),
                      children: y
                        ? (0, e.jsx)(lt, {
                            to: De.BestOfYear("" + A) + M,
                            className: S().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: S().ChartNavPrev,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: S().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: S().ChartNavPrev,
                              children: "\xA0",
                            }),
                          }),
                    }),
                  }),
                  (0, e.jsx)(yt.Gq, {
                    toolTipContent: (0, de.we)("#SteamCharts_Yearly_Title", p),
                    children: (0, e.jsx)("div", {
                      className: (0, Ee.A)({
                        [S().ChartNavCtn]: !0,
                        [S().Disabled]: !_,
                      }),
                      children: _
                        ? (0, e.jsx)(lt, {
                            to: De.BestOfYear("" + p) + M,
                            className: S().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: S().ChartNavNext,
                              children: "\xA0",
                            }),
                          })
                        : (0, e.jsx)("div", {
                            className: S().ChartNavHitArea,
                            children: (0, e.jsx)("div", {
                              className: S().ChartNavNext,
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
        var ke = r(90783);
        const De = {
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
        async function Va(m, n) {
          const d = new gt();
          return await d.Initialize(m, n), d;
        }
        function Ka(m) {
          const [n, d] = (0, oe.useState)(void 0),
            g = (0, ma.TR)(),
            h = (0, ma.rX)();
          if (
            ((0, oe.useEffect)(() => {
              Va(g, h).then((k) => d(k));
            }, [g, h]),
            !n)
          )
            return null;
          const p = De,
            {
              TopSellersStore: _,
              DynamicUserStore: A,
              TopMonthlyReleasesStore: y,
              TopYearlyReleasesStore: X,
            } = n;
          return (0, e.jsxs)(Ga, {
            TopSellersStore: _,
            DynamicUserStore: A,
            TopMonthlyReleasesStore: y,
            children: [
              (0, e.jsx)(pa, {}),
              (0, e.jsx)(Vt.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(oe.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(_t.dO, {
                    children: [
                      (0, e.jsx)(_t.qh, {
                        path: `${p.TopNewReleases(":salePagename")}`,
                        render: (k) => {
                          const {
                            match: {
                              params: { salePagename: M },
                            },
                          } = k;
                          return (0, e.jsx)(Vt.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(nt.tH, {
                              children: (0, e.jsx)(ct, {
                                salePageName: M,
                                TopMonthlyReleasesStore: y,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(_t.qh, {
                        path: `${p.BestOfYear(":salePagename")}`,
                        render: (k) => {
                          const {
                            match: {
                              params: { salePagename: M },
                            },
                          } = k;
                          return (0, e.jsx)(Vt.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(nt.tH, {
                              children: (0, e.jsx)(Ha, {
                                salePageName: M,
                                TopYearlyReleasesStore: X,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(_t.qh, { children: (0, e.jsx)(ke.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function pa() {
          const { pathname: m } = (0, _t.zy)();
          return (
            oe.useEffect(() => {
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
      17618: (R) => {
        R.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
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
      17083: (R, je, r) => {
        "use strict";
        r.d(je, { N_: () => O, k2: () => xe });
        var e = r(92757),
          U = r(42891),
          V = r(90626),
          ne = r(29248),
          ee = r(58584),
          te = r(81115),
          le = r(68841),
          K = (function (L) {
            (0, U.A)($, L);
            function $() {
              for (
                var Ie, se = arguments.length, Ce = new Array(se), c = 0;
                c < se;
                c++
              )
                Ce[c] = arguments[c];
              return (
                (Ie = L.call.apply(L, [this].concat(Ce)) || this),
                (Ie.history = (0, ne.zR)(Ie.props)),
                Ie
              );
            }
            var q = $.prototype;
            return (
              (q.render = function () {
                return V.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              $
            );
          })(V.Component),
          b = (function (L) {
            (0, U.A)($, L);
            function $() {
              for (
                var Ie, se = arguments.length, Ce = new Array(se), c = 0;
                c < se;
                c++
              )
                Ce[c] = arguments[c];
              return (
                (Ie = L.call.apply(L, [this].concat(Ce)) || this),
                (Ie.history = (0, ne.TM)(Ie.props)),
                Ie
              );
            }
            var q = $.prototype;
            return (
              (q.render = function () {
                return V.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              $
            );
          })(V.Component),
          v = function ($, q) {
            return typeof $ == "function" ? $(q) : $;
          },
          w = function ($, q) {
            return typeof $ == "string" ? (0, ne.yJ)($, null, null, q) : $;
          },
          z = function ($) {
            return $;
          },
          Q = V.forwardRef;
        typeof Q > "u" && (Q = z);
        function C(L) {
          return !!(L.metaKey || L.altKey || L.ctrlKey || L.shiftKey);
        }
        var B = Q(function (L, $) {
            var q = L.innerRef,
              Ie = L.navigate,
              se = L.onClick,
              Ce = (0, te.A)(L, ["innerRef", "navigate", "onClick"]),
              c = Ce.target,
              Be = (0, ee.A)({}, Ce, {
                onClick: function (Ge) {
                  try {
                    se && se(Ge);
                  } catch (rt) {
                    throw (Ge.preventDefault(), rt);
                  }
                  !Ge.defaultPrevented &&
                    Ge.button === 0 &&
                    (!c || c === "_self") &&
                    !C(Ge) &&
                    (Ge.preventDefault(), Ie());
                },
              });
            return (
              z !== Q ? (Be.ref = $ || q) : (Be.ref = q),
              V.createElement("a", Be)
            );
          }),
          O = Q(function (L, $) {
            var q = L.component,
              Ie = q === void 0 ? B : q,
              se = L.replace,
              Ce = L.to,
              c = L.innerRef,
              Be = (0, te.A)(L, ["component", "replace", "to", "innerRef"]);
            return V.createElement(e.XZ.Consumer, null, function (Ye) {
              Ye || (0, le.A)(!1);
              var Ge = Ye.history,
                rt = w(v(Ce, Ye.location), Ye.location),
                ut = rt ? Ge.createHref(rt) : "",
                gt = (0, ee.A)({}, Be, {
                  href: ut,
                  navigate: function () {
                    var ot = v(Ce, Ye.location),
                      ze = (0, ne.AO)(Ye.location) === (0, ne.AO)(w(ot)),
                      vt = se || ze ? Ge.replace : Ge.push;
                    vt(ot);
                  },
                });
              return (
                z !== Q ? (gt.ref = $ || c) : (gt.innerRef = c),
                V.createElement(Ie, gt)
              );
            });
          });
        if (0) var G, J;
        var be = function ($) {
            return $;
          },
          Z = V.forwardRef;
        typeof Z > "u" && (Z = be);
        function ce() {
          for (var L = arguments.length, $ = new Array(L), q = 0; q < L; q++)
            $[q] = arguments[q];
          return $.filter(function (Ie) {
            return Ie;
          }).join(" ");
        }
        var xe = Z(function (L, $) {
          var q = L["aria-current"],
            Ie = q === void 0 ? "page" : q,
            se = L.activeClassName,
            Ce = se === void 0 ? "active" : se,
            c = L.activeStyle,
            Be = L.className,
            Ye = L.exact,
            Ge = L.isActive,
            rt = L.location,
            ut = L.sensitive,
            gt = L.strict,
            ft = L.style,
            ot = L.to,
            ze = L.innerRef,
            vt = (0, te.A)(L, [
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
          return V.createElement(e.XZ.Consumer, null, function (S) {
            S || (0, le.A)(!1);
            var oe = rt || S.location,
              xt = w(v(ot, oe), oe),
              Ve = xt.pathname,
              Et = Ve && Ve.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              Oe = Et
                ? (0, e.B6)(oe.pathname, {
                    path: Et,
                    exact: Ye,
                    sensitive: ut,
                    strict: gt,
                  })
                : null,
              Fe = !!(Ge ? Ge(Oe, oe) : Oe),
              Re = typeof Be == "function" ? Be(Fe) : Be,
              Ke = typeof ft == "function" ? ft(Fe) : ft;
            Fe && ((Re = ce(Re, Ce)), (Ke = (0, ee.A)({}, Ke, c)));
            var Ze = (0, ee.A)(
              {
                "aria-current": (Fe && Ie) || null,
                className: Re,
                style: Ke,
                to: xt,
              },
              vt,
            );
            return (
              be !== Z ? (Ze.ref = $ || ze) : (Ze.innerRef = ze),
              V.createElement(O, Ze)
            );
          });
        });
        if (0) var ue;
      },
      44894: (R, je, r) => {
        "use strict";
        r.d(je, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
