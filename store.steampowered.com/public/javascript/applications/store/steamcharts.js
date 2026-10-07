/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [2414],
    {
      94381: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { S: () => j });
        var e = r(7850),
          U = r(68031),
          V = r(31857);
        function re(z) {
          return (0, e.jsx)(V.I, {
            ...z,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var ae = r(21895),
          ne = r(64238),
          le = r.n(ne),
          K = r(80549);
        function j(z) {
          const {
              checked: X,
              onChange: E,
              disabled: B,
              children: G,
              ref: k,
              variant: q,
              color: je,
              align: Z = "center",
              icon: ce,
              ...xe
            } = z,
            ue = X === "indeterminate",
            L = ce ?? (ue ? M : re),
            ee = () => {
              B || (E && E(ue ? !0 : !X));
            },
            te = (oe) => {
              B ||
                (oe.key === " " &&
                  (ee(), oe.preventDefault(), oe.stopPropagation()));
            },
            Ie = (0, K.f)("Checkbox", q);
          return (0, e.jsxs)(U.s, {
            align: Z,
            ref: k,
            role: "checkbox",
            "aria-checked": ue ? "mixed" : X,
            "data-state": v(X),
            className: le()(ae.Root, ae[`Variant-${Ie}`], B && ae.Disabled),
            onClick: ee,
            tabIndex: 0,
            onKeyDown: te,
            cursor: "default",
            "aria-disabled": B,
            "data-accent-color": je,
            ...xe,
            children: [
              (0, e.jsx)("div", {
                className: ae.Checkbox,
                children: X && (0, e.jsx)(L, { className: ae.Icon }),
              }),
              G,
            ],
          });
        }
        function v(z) {
          return z === "indeterminate" ? z : z ? "checked" : "unchecked";
        }
        function M(z) {
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
      31857: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { I: () => ne });
        var e = r(7850),
          U = r(69289),
          V = r(8928),
          re = r(16619),
          ae = r.n(re);
        function ne(M) {
          return (0, e.jsx)("svg", { ...j(M) });
        }
        const le = [
          ...V.L,
          {
            prop: "size",
            responsive: !0,
            className: (M) => re[`IconSize-${M}`],
          },
          {
            prop: "color",
            className: re.Color,
            cssProperty: (M) => ["--icon-color", K(M)],
          },
          {
            prop: "hitSlop",
            className: re.HitSlop,
            cssProperty: (M) => [
              "--hit-slop-custom",
              typeof M == "string" ? M : "",
            ],
          },
          V.h.find(({ prop: M }) => M === "cursor"),
        ];
        function K(M) {
          return !M || M[0] === "#" ? M : (0, U.w7)(M);
        }
        function j(M) {
          const { viewBox: z, ...X } = M,
            B = { className: X.size ? void 0 : re.IconSizeDefault, ...X };
          return z && (B.viewBox = v(z)), (0, U.mz)(B, le);
        }
        function v(M) {
          if (M)
            return typeof M == "number"
              ? `0 0 ${M} ${M}`
              : typeof M == "string"
                ? M
                : `0 0 ${M.width} ${M.height}`;
        }
      },
      50109: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { E: () => X, O: () => z });
        var e = r(14947),
          U = r(65946),
          V = r(99412),
          re = r(41635),
          ae = r(27066),
          ne = r(3166),
          le = r(38585),
          K = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          v = (E, B, G, k) => {
            for (
              var q = k > 1 ? void 0 : k ? j(B, G) : B, je = E.length - 1, Z;
              je >= 0;
              je--
            )
              (Z = E[je]) && (q = (k ? Z(B, G, q) : Z(q)) || q);
            return k && q && K(B, G, q), q;
          };
        const M = class qt {
          m_eCurLang = (0, V.sfN)(ne.TS.LANGUAGE);
          m_rgHasData = (0, re.$Y)([], V.bP9, !1);
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
            B.forEach((G, k) => {
              this.m_rgHasData[k] != G && (this.m_rgHasData[k] = G);
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
        v([e.sH], M.prototype, "m_eCurLang", 2),
          v([e.sH], M.prototype, "m_rgHasData", 2),
          v([e.sH], M.prototype, "m_bHasLocalizationContext", 2),
          v([ae.o], M.prototype, "GetCurEditLanguage", 1),
          v([ae.o], M.prototype, "SetCurEditLanguage", 1),
          v([e.XI.bound], M.prototype, "SetHasLanguage", 1),
          v([ae.o], M.prototype, "BHasLanguageData", 1);
        let z = M;
        function X() {
          return (0, U.q3)(() => z.Get().GetCurEditLanguage());
        }
      },
      21042: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { Sm: () => le, U: () => ae, r3: () => j });
        var e = r(99412),
          U = r(72609),
          V = r(73259),
          re = r(76559);
        function ae(v, M, z, X) {
          const E = new V.lh();
          return (
            (E.type = M),
            (E.clanSteamID = new re.b(v, U.TS.EUNIVERSE, e.P3F, 0)),
            (E.GID = "fakeevent_" + ne++),
            (E.visibility_state = V.zv.k_EEventStateUnlisted),
            (E.visibilityStartTime = X - 1),
            (E.jsondata.bSaleEnabled = !0),
            (E.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (E.jsondata.sale_vanity_id = z),
            (E.jsondata.sale_header_offset = 0),
            (E.jsondata.sale_header_disable_top_margin = !1),
            E
          );
        }
        let ne = 1234;
        function le(v, M) {
          return {
            unique_id: ne++,
            capsules: [],
            events: [],
            links: [],
            section_type: v,
            localized_label: [],
            default_label: M,
          };
        }
        const K = "socialcontent_";
        function j() {
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
      55436: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { r: () => X, z: () => M });
        var e = r(7850),
          U = r(90626),
          V = r(16412),
          re = r(25792),
          ae = r(96538),
          ne = r(18210),
          le = r(85599),
          K = r(17618),
          j = r.n(K),
          v = r(53424);
        const M = (E) => {
            const { clanSteamID: B, fnImageSelectCallBack: G } = E,
              [k, q] = (0, U.useState)(""),
              je = (0, v.mr)(E.clanSteamID.GetAccountID()),
              Z = () => E.closeModal && E.closeModal(),
              ce = v.pU.GetFilteredClanImages(B, k),
              xe = (ue) => {
                G(ue), Z();
              };
            return (0, e.jsx)(re.tH, {
              children: (0, e.jsx)(ae.x_, {
                onEscKeypress: Z,
                children: (0, e.jsxs)(V.UC, {
                  children: [
                    (0, e.jsx)(V.Y9, {
                      children: (0, ne.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(V.nB, {
                      children: (0, e.jsxs)(V.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, ne.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(V.pd, {
                            placeholder: (0, ne.we)("#ClanImageChooser_Search"),
                            value: k,
                            onChange: (ue) => q(ue.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: K.ImagesOuterContainer,
                            children: je
                              ? (0, e.jsx)(le.t, {
                                  size: "medium",
                                  string: (0, ne.we)("#Loading"),
                                })
                              : ce.length > 0
                                ? ce.map((ue) =>
                                    (0, e.jsx)(
                                      z,
                                      {
                                        clanImage: ue,
                                        searchStringHilight: k,
                                        fnImageClick: xe,
                                      },
                                      "ci" + ue.image_hash,
                                    ),
                                  )
                                : k.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, ne.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, ne.we)(
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
                        children: (0, ne.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          z = (E) => {
            const { clanImage: B, searchStringHilight: G, fnImageClick: k } = E;
            let q = B.file_name ? B.file_name : "",
              je = X(G, q, String(B.imageid), K.Hilight);
            return (0, e.jsxs)("div", {
              className: K.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: K.Image,
                  style: { backgroundImage: `url( '${B.thumb_url}' )` },
                  onDoubleClick: () => k(B),
                }),
                (0, e.jsx)("div", {
                  className: K.ImageFilename,
                  title: q,
                  children: je,
                }),
              ],
            });
          };
        function X(E, B, G, k) {
          let q = [];
          if (E.length > 0) {
            let je = B.toLocaleLowerCase();
            for (let Z = 0; Z < B.length; ) {
              let ce = je.indexOf(E, Z);
              if (ce < 0) {
                q.push(
                  (0, e.jsx)(
                    "span",
                    { children: B.substring(Z) },
                    G + "_" + String(Z),
                  ),
                );
                break;
              } else
                Z < ce &&
                  q.push(
                    (0, e.jsx)(
                      "span",
                      { children: B.substring(Z, ce) },
                      G + "_" + String(Z),
                    ),
                  ),
                  q.push(
                    (0, e.jsx)(
                      "span",
                      { className: k, children: B.substr(ce, E.length) },
                      G + "_" + String(Z),
                    ),
                  ),
                  (Z = ce + E.length);
            }
          } else q.push((0, e.jsx)("span", { children: B }, G + "_null"));
          return q;
        }
      },
      24806: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { Ng: () => k });
        var e = r(7850),
          U = r(75844),
          V = r(90626),
          re = r(99412),
          ae = r(32093),
          ne = r(50109),
          le = r(95695),
          K = r.n(le),
          j = r(36707),
          v = r(18210),
          M = r(92264),
          z = r(30096),
          X = r(71421),
          E = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          G = (Z, ce, xe, ue) => {
            for (
              var L = ue > 1 ? void 0 : ue ? B(ce, xe) : ce,
                ee = Z.length - 1,
                te;
              ee >= 0;
              ee--
            )
              (te = Z[ee]) && (L = (ue ? te(ce, xe, L) : te(L)) || L);
            return ue && L && E(ce, xe, L), L;
          };
        let k = class extends V.Component {
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
                    value: re.xPp,
                    children: (0, v.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let ee = new Array();
            const te = this.props.realms || [ae.TU.k_ESteamRealmGlobal];
            for (const oe of v.A0.GetLanguageListForRealms(te)) {
              if (ce && !ce(oe)) continue;
              const Ee = (0, re.LgB)(oe),
                c = (0, v.we)("#Language_" + Ee),
                Me = !!(L && L(oe));
              ee.push({ eLang: oe, sLocName: c, bSupported: Me });
            }
            ee.sort((oe, Ee) =>
              oe.bSupported != Ee.bSupported
                ? oe.bSupported
                  ? -1
                  : 1
                : oe.sLocName.localeCompare(Ee.sLocName),
            );
            let Ie = !1;
            for (const oe of ee) {
              oe.bSupported != Ie &&
                (Z.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: K().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, v.we)(
                        oe.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    oe.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Ie = oe.bSupported));
              const Ee = xe && xe(oe.eLang),
                c = ue && ue(oe.eLang);
              let Me = oe.sLocName;
              c &&
                c !== 0 &&
                ((Me += " "),
                (Me += (0, v.we)(
                  "#Language_Last_Update",
                  (0, v.$z)(c) +
                    " @ " +
                    (0, M.KC)(c, { bForce24HourClock: !1 }),
                ))),
                Z.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: oe.eLang,
                      className: (0, j.A)(
                        { [K().LanguageWithContent]: Ee },
                        oe.bSupported
                          ? K().SupportedLanguage
                          : K().UnsupportedLanguage,
                      ),
                      children: Me,
                    },
                    "langpicker" + oe.eLang + (Ee ? "_hasdata" : ""),
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
            return (0, e.jsx)(X.he, {
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
        G([z.oI], k.prototype, "OnLanguageChange", 1), (k = G([U.PA], k));
        function q(Z) {
          const [ce, xe] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(k, {
            selectedLang: xe,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !ce,
            strTooltip: ce
              ? void 0
              : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function je(Z) {
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
      25679: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { _: () => as });
        var e = r(7850),
          U = r(99412),
          V = r(19298),
          re = r(20169),
          ae = r(28604),
          ne = r(36631),
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
        var j = r(65946),
          v = r(90626),
          M = r(73259),
          z = r(25792),
          X = r(52393),
          E = r.n(X),
          B = r(95695),
          G = r.n(B),
          k = r(36707),
          q = r(3166),
          je = r(82054),
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
                  className: (0, k.A)(
                    E().SaleBackground,
                    E()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    E().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: a
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    o && (0, e.jsx)("source", { src: o, type: "video/webm" }),
                    i &&
                      !q.TS.IN_CLIENT &&
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
            [x] = (0, j.q3)(() => [t.jsondata.sale_sub_menu]);
          v.useEffect(() => {
            if (!u) return;
            const C = new Image();
            (C.onload = () => {
              const A = (100 * C.width) / 950 + "%";
              l.current && l.current.style.setProperty("--background-scale", A);
            }),
              (C.src = u);
          }, [u]);
          const p = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            I =
              t.jsondata.item_source_type === M.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                p),
            _ = u ? `url(${u})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              x
                ? (0, e.jsx)(je.j, {
                    event: t,
                    language: a,
                    bIsPreview: i,
                    subMenu: x,
                    styleVariation: je.g.k_SubMenu,
                  })
                : (0, e.jsx)(K, { strURL: u }),
              (0, e.jsx)("div", {
                className: (0, k.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: I,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, k.A)(
                    E()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    E().SaleBackground,
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
                          className: (0, k.A)(
                            G().SalePageBackground,
                            G().BackgroundImage,
                            G().Blur,
                          ),
                          src: u,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, k.A)(
                            G().SalePageBackground,
                            G().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: _,
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
          ee = r(50909),
          te = r.n(ee);
        function Ie(s) {
          const { eventModel: t } = s,
            { data: a } = (0, ue.hM)(t.clanSteamID.GetAccountID());
          if (
            !a ||
            (!a.can_edit && !a.support_user) ||
            (0, q.yK)() == "community"
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
              className: te().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: te().WarningText,
                      children: L.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  i.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: te().WarningText,
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
        var oe = r(76789),
          Ee = r.n(oe),
          c = r(18210);
        function Me(s) {
          const { eventModel: t, language: a } = s,
            [o, i] = (0, j.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, a),
            ]);
          return i && i?.length > 0
            ? o
              ? (0, e.jsx)("a", {
                  className: Ee().SalePageLogoCtn,
                  href: q.TS.STORE_BASE_URL + o,
                  children: (0, e.jsx)(He, { ...s }),
                })
              : (0, e.jsx)("div", {
                  className: (0, k.A)(Ee().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(He, { ...s }),
                })
            : null;
        }
        function He(s) {
          const { eventModel: t, language: a } = s,
            o = (0, Z.m0)(t, "sale_logo", a);
          return (0, e.jsx)("img", { src: o, alt: "logo" });
        }
        var Ne = r(72865),
          tt = r(71347),
          ct = r.n(tt),
          dt = r(53107);
        function ht(s) {
          const { rgPresenters: t } = s;
          if (!t || t.length == 0) return null;
          const a = (0, U.sfN)(q.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, k.A)(
                  ct().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: L.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(at, { presentor: t[0], lang: a }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, k.A)(
                  ct().PresenterDisclaimer,
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
                            (0, e.jsx)(at, { presentor: o, lang: a }),
                            t.length > 2 && ", ",
                          ],
                        },
                        o.url,
                      ),
                    ),
                  (0, e.jsx)(at, { presentor: t[t.length - 1], lang: a }),
                ),
              });
        }
        function at(s) {
          const { presentor: t, lang: a } = s,
            o = (0, Ne.aL)(t.url);
          return (0, e.jsx)(dt.uU, {
            href: o,
            bUseLinkFilter: !0,
            className: ct().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, a),
          });
        }
        var Ge = r(60480),
          pt = r(92757),
          S = r(18994),
          ie = r(56412),
          ut = r(86515),
          We = r(39153),
          Ct = r(61478);
        function ke(s) {
          const { event: t, broadcastEmbedContext: a } = s,
            o = !!t?.jsondata?.broadcast_display_wide_player,
            i = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(Ct.B, {
                event: t,
                broadcastEmbedContext: a,
                bWideBroadcastDisplay: o,
                bWideBroadcastPermitChat: i,
              }),
          });
        }
        var Oe = r(85671);
        function Ye(s) {
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
        var qe = r(179),
          Ze = r(50109),
          gt = r(30096),
          ft = r(98609),
          Lt = r(57673);
        const Tt = new Map();
        function ja(s, t) {
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
        function ea(s, t, a) {
          const o = new Map(),
            i = new Map(),
            l = new Map();
          let u,
            x,
            p = 0;
          const { selectedTabBackgroundDef: I, nTabSaleSectionIndex: _ } = ja(
            t,
            a,
          );
          if (s?.enabled) {
            const C = s.groups?.length;
            if (
              (s.groups?.forEach((w, A) => {
                if (p >= t.length || t[p].section_type == "tabs") return;
                const R = new Array();
                for (
                  let P = 0;
                  P < (w?.num_sections || 0) &&
                  p < t.length &&
                  t[p].section_type != "tabs";
                  ++P, ++p
                ) {
                  const Q = t[p].unique_id;
                  R.push(Q),
                    i.set(Q, w.background_id),
                    P === 0 && l.set(Q, w.background_id);
                }
                if (
                  (o.set(w.background_id, {
                    nBackgroundGroupID: w.background_id,
                    sectionUniqueIDs: R,
                    nSaleSectionLastIndex: p - 1,
                    nUniqueIDNextSaleSection:
                      p < t.length && (_ === void 0 || p < _)
                        ? t[p].unique_id
                        : void 0,
                  }),
                  A + 1 == C && s.last_group_until_cover_section_until_end)
                )
                  for (
                    let P = p;
                    P < t.length &&
                    (!I || !I.enabled || P < _) &&
                    !(t[P].section_type == "tabs" && I?.enabled);
                    ++P
                  ) {
                    const Q = t[P].unique_id;
                    i.set(Q, w.background_id);
                  }
              }),
              p < t.length && (_ === void 0 || p < _) && (u = t[p].unique_id),
              I?.enabled && _ !== void 0)
            ) {
              let w = _;
              const A = I.groups.length;
              for (
                I.groups.forEach((R, F) => {
                  if (w >= t.length) return;
                  const P = new Array();
                  for (
                    let H = 0;
                    H < R.num_sections && w < t.length;
                    ++H, ++w
                  ) {
                    const $ = t[w],
                      pe = $.unique_id;
                    (0, Lt.bF)(a, $)
                      ? (P.push(pe),
                        i.set(pe, R.background_id),
                        H === 0 && l.set(pe, R.background_id))
                      : --H;
                  }
                  let T = w;
                  for (; T < t.length && !(0, Lt.bF)(a, t[T]); ) T += 1;
                  if (
                    (o.set(R.background_id, {
                      nBackgroundGroupID: R.background_id,
                      sectionUniqueIDs: P,
                      nSaleSectionLastIndex: w - 1,
                      nUniqueIDNextSaleSection:
                        T < t.length ? t[T].unique_id : void 0,
                    }),
                    F + 1 == A && I.last_group_until_cover_section_until_end)
                  )
                    for (let H = w; H < t.length; ++H) {
                      const $ = t[H];
                      if ($.section_type == "tabs" && I?.enabled) break;
                      (0, Lt.bF)(a, $) && i.set($.unique_id, R.background_id);
                    }
                });
                w < t.length && !(0, Lt.bF)(a, t[w]);
              )
                w++;
              w < t.length && (x = t[w].unique_id);
            }
          } else t?.length > 0 && (u = t[0].unique_id);
          return {
            mapGroupToSections: o,
            nFirstSaleSectionIDWithoutGroup: u,
            mapSectionToGroup: i,
            mapFirstSectionToGroup: l,
            selectedTabBackgroundDef: I,
            nTabSaleSectionIndex: _,
            nFirstTabSectionIDWithoutGroup: x,
          };
        }
        var ye = r(29630),
          Ae = r(68434),
          ge = r(15181),
          Pt = r(41635),
          nt = r(81416);
        function ta(s, t, a, o) {
          let l = s.jsondata.sale_background_img_groups.groups.find(
            (u) => u.background_id === t.groupID,
          );
          return (
            !l &&
              o >= 0 &&
              (l = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((p) => p.unique_id == o)
                ?.tab_background_img_groups?.groups?.find(
                  (p) => p.background_id == t.groupID,
                )),
            (0, e.jsx)(
              aa,
              {
                eventModel: s,
                displayDef: l,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  l &&
                  l.randomize_section_order &&
                  a !== nt.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(Ca, {
                        clanEventGID: s.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function Ca(s) {
          const { clanEventGID: t, elSaleSections: a } = s,
            [o, i] = (0, Ae.M)(`sale_section_seed_${t}`, (0, ge.m)());
          if (!a || a.length === 0) return null;
          if (a.length > 1 && o !== void 0) {
            const l = (0, ge.A)(o);
            return (0, e.jsx)(e.Fragment, { children: Pt.fW(a, 0, l) });
          }
          return (0, e.jsx)(e.Fragment, { children: a });
        }
        function aa(s) {
          const {
              displayDef: t,
              children: a,
              eventModel: o,
              derivedGroupInfo: i,
            } = s,
            l = (0, Ze.E)(),
            u = v.useCallback(
              (A, R) => {
                Tt.set(i.nBackgroundGroupID, R);
              },
              [i],
            ),
            x = (0, gt.w6)(u);
          if (!a || (Array.isArray(a) && a.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: a });
          let p;
          if (t.localized_background_art) {
            const A = (0, U.LgB)(l),
              R =
                A in t.localized_background_art
                  ? A
                  : c.A0.GetLanguageFallback(ft.TS.LANGUAGE),
              F = t.localized_background_art[R];
            F && (p = ye.zU.GenerateURLFromHashAndExt(o.clanSteamID, F));
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
          const _ =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            C = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            w = {
              backgroundImage: I ? `url(${p}), ${I}` : `url(${p})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: C ? t.position_setting : void 0,
              backgroundColor: _ ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: x,
            style: w,
            id: "background_group_" + t.background_id,
            children: a,
          });
        }
        var Ft = r(9807),
          vt = r(4720),
          st = r(64641),
          na = r.n(st),
          Re = r(85599);
        function Xa(s) {
          return typeof s == "string" || typeof s == "number"
            ? s
            : JSON.stringify(s);
        }
        class sa {
          Keyify = (t) => Xa(t);
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
        var xt = r(71742),
          Ea = r(53113),
          Et = r(90405);
        function Be(s, t) {
          return s
            ? t
              ? !!s.valve_admin
              : !!(s.valve_admin || s.support_user)
            : !1;
        }
        function Ht(s, t) {
          const a = !!(s && s.BIsClanAccount()),
            { data: o } = (0, ue.hM)(a ? s.GetAccountID() : 0);
          return a && Be(o, t);
        }
        function ra(s) {
          const { clanSteamID: t, id: a } = s;
          return Ht(t, s.requireAdmin)
            ? (0, e.jsx)("div", {
                id: a,
                className: (0, k.A)(
                  s.className,
                  s.requireAdmin
                    ? B.ValveOnlyAdminBackground
                    : B.ValveOnlyBackground,
                ),
                children: s.children,
              })
            : null;
        }
        var se = r(16412),
          _e = r(96538),
          Ve = r(88003),
          yt = r(12932),
          Nt = r(46777),
          oa = r(77495),
          ia = r(16346),
          ya = r(61257),
          la = r(56718),
          mt = r(71421),
          Aa = r(27828),
          kt = r.n(Aa);
        function Da(s) {
          return `rgba(${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}, ${s.rgb.a})`;
        }
        function ca(s) {
          const t = parseInt(s.slice(1), 16),
            a = (t >> 16) & 255,
            o = (t >> 8) & 255,
            i = t & 255;
          return `rgba(${a}, ${o}, ${i}, 1)`;
        }
        function Sa(s) {
          const { color: t, onChange: a, strTitle: o, disableAlpha: i } = s,
            [l, u] = (0, v.useState)(() => t || "rgba(255, 255, 255, 1)"),
            x = (0, v.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(L.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const _ = (await new window.EyeDropper().open()).sRGBHex,
                  C = ca(_);
                u(C), a(C);
              } catch (p) {
                console.warn(L.Z.Localize("#Sale_EyeDropperFailed"), p);
              }
            }, [a]);
          return (0, e.jsxs)("div", {
            className: kt().ColorPickerDialog,
            children: [
              !!o && (0, e.jsx)(se.JU, { children: o }),
              (0, e.jsx)(ya.xk, {
                onChange: (p) => {
                  const I = Da(p);
                  u(I), a(I);
                },
                color: l,
                disableAlpha: i,
                className: kt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: kt().EyeDropperCtn,
                children: (0, e.jsx)(mt.Gq, {
                  toolTipContent: L.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(se.$n, {
                    className: kt().EyeDropperBtn,
                    onClick: x,
                    children: (0, e.jsx)(la.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function we(s) {
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
                p = (_) => {
                  u.current && !u.current.contains(_.target) && o();
                },
                I = (_) => {
                  _.key === "Escape" && o();
                };
              return (
                x.addEventListener("pointerdown", p, !0),
                x.addEventListener("keydown", I, !0),
                () => {
                  x.removeEventListener("pointerdown", p, !0),
                    x.removeEventListener("keydown", I, !0);
                }
              );
            }, [o]),
            (0, e.jsx)("div", {
              ref: u,
              children: (0, e.jsx)(Sa, {
                color: t,
                disableAlpha: i,
                strTitle: l ?? L.Z.Localize("#Button_Color"),
                onChange: a,
              }),
            })
          );
        }
        function It() {
          return {
            openColorPicker: (0, v.useCallback)((t, a) => {
              let o = null;
              const i = () => o?.Hide();
              o = (0, ia.lX)(
                (0, e.jsx)(we, {
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
        var wa = r(13447),
          Xe = r.n(wa),
          Gt = r(32190),
          Ot = r.n(Gt),
          Qe = r(76559),
          Wt = r(75909),
          Ue = r(53424),
          da = r(72604),
          bt = r(41735),
          At = r.n(bt),
          Rt = r(14947),
          rt = r(9046),
          Ma = Object.defineProperty,
          Ba = Object.getOwnPropertyDescriptor,
          Yt = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Ba(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Ma(t, a, i), i;
          };
        const Ut = class ln {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Rt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, a, o, i) {
            let l =
                q.TS.COMMUNITY_BASE_URL +
                "gid/" +
                a.ConvertTo64BitString() +
                "/hasclanimagefile",
              u = { image_hash_and_ext: o, lang: "" + i };
            return (
              (await At().get(l, { params: u, cancelToken: t && t.token })).data
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
              (this.m_curLocImageGroup.localized_images = (0, Pt.$Y)(
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
                : ye.zU.GenerateURLFromHashAndExt(
                    t,
                    ye.zU.GetHashAndExt(o) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const a = this.m_curLocImageGroup.primaryImage,
              o = Qe.b.InitFromClanID(a.clanAccountID),
              i = ye.zU.GetHashAndExt(a) ?? "",
              l = [];
            for (let x = U.Bhc; x < U.bP9; ++x)
              l.push(ln.BDoesClanImageFileExistsOnCDNOrOrigin(t, o, i, x));
            const u = await Promise.all(l);
            (0, Rt.h5)(() => {
              for (let x = U.Bhc; x < U.bP9; ++x)
                u[x] &&
                  (this.m_curLocImageGroup.localized_images[x] =
                    ye.zU.GenerateURLFromHashAndExtAndLang(
                      o,
                      i,
                      rt.wI.full,
                      x,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, a, o) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = o
                ? ye.zU.GenerateURLFromHashAndExtAndLang(
                    a,
                    o,
                    rt.wI.full,
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
                l = ye.zU.GetHashAndExt(o);
              l &&
                (this.m_curLocImageGroup.localized_images[a] =
                  ye.zU.GenerateURLFromHashAndExtAndLang(
                    i,
                    l,
                    rt.wI.full,
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
              .map((o) => ye.zU.GetHashAndExtFromURL(o));
          }
        };
        Yt([Rt.sH], Ut.prototype, "m_curLocImageGroup", 2);
        let ua = Ut;
        const ze = new ua();
        var ot = r(38410),
          zt = r(34592),
          ga = r(75844),
          et = r(32093),
          Vt = r(72849),
          La = r(64),
          Ta = r(72739),
          Dt = r(82734);
        function Pa(s, t) {
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
            Ta.createPortal(
              (0, e.jsx)("form", {
                onSubmit: St,
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
        function ma(s) {
          const [t, a] = v.useState(!1),
            o = v.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            i = v.useCallback((p) => {
              Dt.NO(p) && a(!1);
            }, []),
            l = v.useCallback(() => a(!1), []),
            u = t ? St : void 0,
            x = v.useCallback(
              (p) => {
                p.dataTransfer.files?.length &&
                  (s(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
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
        function St(s) {
          s.preventDefault();
        }
        function Ja(s) {
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
        var Kt = r(71647),
          _t = r.n(Kt);
        function ka(s) {
          const {
              onDropFiles: t,
              renderDesciption: a,
              elAdditonalButtons: o,
              elOverrideDragAndDropText: i,
            } = s,
            [l, u] = ma(t),
            [x, p] = Pa(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...l,
            className: (0, k.A)(
              u ? _t().DragAndDropContainerDragging : _t().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!a && a(),
              (0, e.jsx)("div", {
                children: i || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: _t().ImageUploadBar,
                children: [
                  x,
                  (0, e.jsxs)("label", {
                    onClick: p,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: _t().SelectImageButton,
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
          Ga = r(21254),
          Oa = r(27344),
          Pe = r.n(Oa),
          ha = r(9472);
        function Zt(s) {
          const {
              imageUploader: t,
              fnUploadComplete: a,
              elOverrideDragAndDropText: o,
              forceResolution: i,
              elAdditonalButtons: l,
              rgRealmList: u,
            } = s,
            [x, p] = (0, j.q3)(() => [
              t.GetUploadImages(),
              Ze.O.Get().GetCurEditLanguage(),
            ]),
            I = v.useCallback(
              async (w) => {
                let A = Array.from(w),
                  R = !0;
                for (let F = 0; F < A.length; F++) {
                  const P = A[F],
                    { language: T } = (0, ot.jj)(P?.name, p);
                  try {
                    const Q = (0, ot.PD)(T, p, u);
                    (R = await t.AddImageForLanguage(P, Q)),
                      R ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            F +
                            " file=" +
                            P.name,
                        ),
                        (0, Ve.pg)(
                          (0, e.jsx)(_e.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              P.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (Q) {
                    let H = (0, zt.H)(Q);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + H.strErrorMsg,
                      H,
                    ),
                      (0, Ve.pg)(
                        (0, e.jsx)(_e.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            H.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return R;
              },
              [p, t, u],
            ),
            _ = v.useMemo(
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
          (0, j.q3)(() =>
            x.map((w) => ({ a: w.GetCurrentImageOption(), b: w.language })),
          );
          const C = async () => {
            const w = await t.UploadAllImages(i);
            a?.(w);
          };
          return (0, e.jsxs)(ka, {
            onDropFiles: I,
            elAdditonalButtons: _,
            elOverrideDragAndDropText: o,
            children: [
              (0, e.jsx)(v.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Pe().UploadPreviewCtn,
                  children: x.map((w) =>
                    (0, e.jsx)(
                      pa,
                      {
                        asset: w,
                        forceResolution: i,
                        fnOnRemove: () => t.DeleteUploadImage(w),
                        languageRealms: u,
                      },
                      "arttabupload_" + w.filename + "_" + w.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(Ra, { imageUploader: t, fnOnUploadImageRequested: C }),
            ],
          });
        }
        function Ra(s) {
          const { imageUploader: t, fnOnUploadImageRequested: a } = s,
            [o] = (0, j.q3)(() => [t.GetUploadImages()]),
            i = o.some((u) => u.status == "pending"),
            l = o.some(
              (u) =>
                u.status == "waiting" ||
                u.status == "uploading" ||
                u.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Pe().UploadPreviewButtonsCtn,
            children: [
              !!o.length &&
                (0, e.jsx)(se.$n, {
                  style: { margin: "8px" },
                  onClick: a,
                  disabled: !i,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!o.length &&
                (0, e.jsx)(se.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: l,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function $a(s, t, a, o, i) {
          let l = new Array();
          return (
            s.GetUploadImages().forEach((u) => {
              l.push(
                jsx(
                  pa,
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
        const pa = (0, ga.PA)(Ua);
        function Ua(s) {
          const t = (A) => {
              if (A instanceof La.M7) {
                A.ResetImage();
                const R = window,
                  F = (0, e.jsx)(Ga.q, {
                    ownerWin: R,
                    uploadFile: A,
                    forceResolution: s.forceResolution,
                    fileType: s.forceFileType || Vt.bg.dU,
                  });
                (0, Ve.HT)(F, R, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  A.fileType,
                  JSON.stringify(A.GetCurrentImageOption()),
                );
            },
            { asset: a, fnOnRemove: o, languageRealms: i } = s,
            l = a.ImageOptions?.map((A) => {
              let R = A?.fnGetLabelText(),
                F;
              A.bEnforceDimensions && (R += ` - ${A.width}x${A.height}`),
                A.bDeprecated &&
                  ((R += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (F = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let P;
              return (
                (a.BIsOriginalMinimumDimensions(A) &&
                  a.FileTypeMatchesImageTypes(A)) ||
                  (P = Pe().ImageDimensionTooSmall),
                { label: R, data: A, strOptionClass: P, tooltip: F }
              );
            }).filter((A) => !A.data.bHiddenFromDropdown),
            u = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            x = a.BSupportsLanguages()
              ? jt(
                  c.A0.GetLanguageListForRealms(
                    i ?? [et.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            p = a.IsValidAssetType(s.forceResolution, s.forceFileType),
            I = a.status == "pending";
          let _ = u[a.status];
          a.status == "pending" &&
            (p.needsCrop
              ? (_ = (0, c.we)("#ImageUpload_NeedsCrop"))
              : p.error && (_ = (0, c.we)("#ImageUpload_Invalid")));
          let C;
          const w = a.GetCurrentImageOption();
          return (
            w && (C = l?.find((A) => A.data.sKey == w.sKey)?.data),
            C || (C = l?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Pe().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Pe().UploadPreviewDelete,
                  onClick: () => o(a),
                  children: (0, e.jsx)(wt.sED, {}),
                }),
                (0, e.jsx)(za, { asset: a }),
                x &&
                  (0, e.jsx)(se.m, {
                    strDropDownClassName: G().DropDownScroll,
                    rgOptions: x,
                    selectedOption: a.language,
                    onChange: (A) => (a.language = A.data),
                    disabled: !I,
                  }),
                l &&
                  l?.length > 1 &&
                  (0, e.jsx)(se.m, {
                    label: a.GetImageOptionLabel(),
                    rgOptions: l,
                    selectedOption: C,
                    onChange: (A) => a.SetCurrentImageOption(A.data),
                    disabled: !I,
                  }),
                I &&
                  p.warnings?.map((A, R) =>
                    (0, e.jsx)(
                      "div",
                      { className: Pe().UploadPreviewWarning, children: A },
                      `warning${R}`,
                    ),
                  ),
                I &&
                  p.messages?.map((A, R) =>
                    (0, e.jsx)(
                      "div",
                      { className: Pe().UploadPreviewMessage, children: A },
                      `message${R}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, k.A)({
                    [G().FlexColumnContainer]: !0,
                    [Pe().UploadPreviewError]: a.status == "failed",
                  }),
                  children: [
                    _,
                    (0, ha.o)(a.status) &&
                      (0, e.jsx)("div", {
                        className: na().FlexCenter,
                        children: (0, e.jsx)(Re.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Pe().UploadPreviewError,
                  children: a.message,
                }),
                I &&
                  p.error &&
                  (0, e.jsx)("div", {
                    className: Pe().UploadPreviewError,
                    children: p.error,
                  }),
                I &&
                  p.needsCrop &&
                  (0, e.jsx)(se.jn, {
                    onClick: () => t(a),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function za(s) {
          const { asset: t } = s;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Pe().PreviewImgCtn,
                onClick: (a) =>
                  (0, Ve.pg)((0, e.jsx)(Fa, { asset: t }), (0, Dt.uX)(a)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Pe().PreviewImgInfo,
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
                className: Pe().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Pe().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function Fa(s) {
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
        function jt(s) {
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
        var Mt = ((s) => (
          (s[(s.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (s[(s.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (s[(s.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (s[(s.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          s
        ))(Mt || {});
        function fa(s, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(s)}`
            : `${k_ClanImageReplacementToken}/${s.clanAccountID}/${ClanImageUtils.GetHashAndExt(s)}`;
        }
        function qa(s, t, a) {
          let o = "";
          const i = fa(t);
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
            const l = fa(t, !0);
            o = "[url=" + i + "][img]" + l + "[/img][/url]";
          }
          s.InsertText(o);
        }
        var Qt = r(55436),
          Ha = r(53732),
          me = r.n(Ha),
          va = r(49460);
        function Wa(s) {
          const { fnSetImageSearch: t } = s,
            a = (0, v.useRef)(null);
          return (0, e.jsx)("div", {
            className: va.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: a,
              className: va.SearchInput,
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
        const Ya = v.memo(function (t) {
          const {
            fileNameSearch: a,
            clanAccountID: o,
            imageInsertCallBack: i,
            fnOnExpandImage: l,
            showImageActions: u = !0,
            InternalOpenLocalizeImageGroup: x,
          } = t;
          return (0, e.jsx)(m, {
            clanAccountID: o,
            fileNameSearch: a,
            children: (p, I) =>
              p.map((_) =>
                (0, e.jsx)(
                  d,
                  {
                    clanImage: _,
                    searchStringHilight: I,
                    imageInsertCallBack: i,
                    showImageActions: u,
                    fnOnOpenLocalizedImageGroup: x,
                    OnImageClick: l,
                  },
                  _.imageid,
                ),
              ),
          });
        });
        function m(s) {
          const { clanAccountID: t, fileNameSearch: a, children: o } = s,
            i = (0, Ue.n9)(t),
            l = a.trim().toLowerCase() || "",
            u = Ue.pU.GetFilteredClanImagesList(i, l);
          if (u.length == 0) {
            const x = Qe.b.InitFromClanID(t);
            let p = Ue.pU.GetLoadState(x);
            return p && p.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: me().ResultNotification,
                    children:
                      l.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : p && p.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: me().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", p.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: me().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(u, l);
        }
        function n(s) {
          const {
            clanAccountID: t,
            fileNameSearch: a,
            onImageSelected: o,
            selectedItem: i,
          } = s;
          return jsx(m, {
            clanAccountID: t,
            fileNameSearch: a,
            children: (l) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: l.map((u) =>
                  jsx(
                    f,
                    { clanImage: u, selected: u == i, onImageSelected: o },
                    u.imageid,
                  ),
                ),
              }),
          });
        }
        function d(s) {
          const {
              clanImage: t,
              searchStringHilight: a,
              imageInsertCallBack: o,
              OnImageClick: i,
              showImageActions: l,
              fnOnOpenLocalizedImageGroup: u,
            } = s,
            [x, p] = v.useState(!1),
            I = () => o(t, Mt.k_eInsertFullImage),
            _ = () => o(t, Mt.k_eInsertVideo),
            C = () => o(t, Mt.k_eInsertThumbnail),
            w = (be) => {
              t.url &&
                (be.dataTransfer.setData("text", t.url),
                Ue.pU.GetClanImageDragListener().forEach((Te) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Te($e, !0);
                }));
            },
            A = (be) => {
              t.url &&
                Ue.pU.GetClanImageDragListener().forEach((Te) => {
                  let $e = Qe.b.InitFromClanID(t.clanAccountID);
                  Te($e, !1);
                });
            },
            R = (be) => {
              (0, Ve.pg)(
                (0, e.jsx)(_e.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: P,
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
                (0, Dt.uX)(be) ?? window,
              );
            },
            F = (be) => {
              console.log("ClanImageWrapper on delete error: " + be),
                (0, Ve.pg)(
                  (0, e.jsx)(_e.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: be }),
                  }),
                  window,
                );
            },
            P = () => {
              p(!0);
              let be = Qe.b.InitFromClanID(t.clanAccountID);
              Ue.pU
                .DeleteClanImage(be, t)
                .then((Te) => {
                  Te.success != da.R && F((0, zt.H)(Te).strErrorMsg), p(!1);
                })
                .catch((Te) => {
                  F((0, zt.H)(Te).strErrorMsg), p(!1);
                }),
                T();
            },
            T = () => {},
            Q = () => {
              i && i(t);
            },
            H = t.file_name ? t.file_name : "",
            $ = (0, Qt.r)(a, H, String(t.imageid), me().Hilight),
            pe = ye.zU.BIsClanImageVideo(t),
            fe = l && !x && !pe,
            De = l && !x && !pe,
            Je = l && !x && pe,
            ve = l && !x && !pe;
          return (0, e.jsx)(Et.K, {
            placeholderHeight: "100vh",
            className: me().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: me().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: me().ImageWrapper,
                  style: {
                    backgroundImage: pe ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: w,
                  onDragEnd: A,
                  onDoubleClick: I,
                  onClick: Q,
                  children: (0, e.jsx)(h, {
                    clanImage: t,
                    className: me().VideoBackground,
                  }),
                }),
                fe &&
                  (0, e.jsx)("span", {
                    className: me().Full,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                x &&
                  (0, e.jsx)(Re.t, {
                    size: "medium",
                    className: me().FloatingThrobber,
                  }),
                De &&
                  (0, e.jsx)("span", {
                    className: me().Thumb,
                    onClick: C,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                ve &&
                  u &&
                  (0, e.jsx)(g, {
                    bDeleting: x,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: u,
                  }),
                Je &&
                  (0, e.jsx)("span", {
                    className: me().Full,
                    onClick: _,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !x &&
                  (0, e.jsx)("span", {
                    className: me().Delete,
                    onClick: R,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: me().ImageWrapperFilename,
                  title: H,
                  children: $,
                }),
              ],
            }),
          });
        }
        function g(s) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: a,
              bDeleting: o,
            } = s,
            { data: i } = (0, ue.hM)(t.clanAccountID);
          return o || !i?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, k.A)(me().Localized, G().ValveOnlyBackground),
                onClick: () => a?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function h(s) {
          const { clanImage: t, className: a } = s;
          return ye.zU.BIsClanImageVideo(t)
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
        function f(s) {
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
                  ? jsx(h, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function b(s) {
          const { clanSteamID: t, closeModal: a, OnClanImageSelected: o } = s,
            i = v.useCallback(
              (x, p) => {
                o?.(x, p), a?.();
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
              (0, e.jsx)(Wa, { fnSetImageSearch: u }),
              (0, e.jsx)(Ya, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: l,
                imageInsertCallBack: i,
                showImageActions: !1,
              }),
            ],
          });
        }
        function y(s) {
          const { clanSteamID: t, OnClanImageSelected: a } = s;
          return (0, e.jsxs)("div", {
            className: _t().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: _t().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  (0, Ve.pg)(
                    (0, e.jsx)(b, { clanSteamID: t, OnClanImageSelected: a }),
                    (0, Dt.uX)(o) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function D(s) {
          const {
              clanSteamID: t,
              rgSupportArtwork: a,
              localizedPrimaryImage: o,
              bAllowPreviousClanImageSelection: i,
              fnSetImageURL: l,
              rgRealmList: u,
            } = s,
            [x] = (0, j.q3)(() => [Ze.O.Get().GetCurEditLanguage()]),
            p = (0, Wt.zO)(t, a, o),
            I = s.uploaderOverride || p,
            [_, C] = v.useState(!1),
            w = v.useCallback(
              async (F, P) => {
                if (!_) {
                  C(!0);
                  try {
                    const { language: T } = (0, ot.jj)(F.file_name ?? "", x),
                      Q = (0, ot.PD)(T, x, u);
                    await I.AddExistingClanImage(F, Q);
                  } catch (T) {
                    let Q = (0, zt.H)(T);
                    console.error("AddExistingClanImage: " + Q.strErrorMsg, Q),
                      (0, Ve.pg)(
                        (0, e.jsx)(_e.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            Q.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  C(!1);
                }
              },
              [_, I, x, u],
            ),
            A = v.useMemo(
              () =>
                i
                  ? [
                      [
                        (0, e.jsx)(
                          y,
                          { clanSteamID: t, OnClanImageSelected: w },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [w, i, t],
            ),
            R = (F) => {
              for (const P of F) {
                const T = P.uploadResult;
                if (T?.origimagehash) {
                  const Q = (0, ot.PD)(T.language, x, u);
                  ze.AddLocalizeImageUploaded(T.origimagehash, Q);
                } else {
                  const Q = Ue.pU.GetClanImageByImageHash(
                      t,
                      T?.image_hash ?? "",
                    ),
                    H = P.image.GetCurrentImageOption();
                  if (Q && H) {
                    const $ = (0, ot.PD)(P.image.language, x, u);
                    l(H.artworkType, Q, $);
                  }
                }
              }
            };
          return (0, e.jsx)(Zt, {
            ...s,
            imageUploader: I,
            rgRealmList: u,
            elAdditonalButtons: _
              ? [
                  (0, e.jsx)(
                    Re.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : A,
            fnUploadComplete: R,
          });
        }
        var Y = r(25279),
          N = r(84676),
          W = r(25359),
          J = r.n(W),
          he = r(24806);
        function de(s) {
          const {
              clanImage: t,
              closeModal: a,
              lang: o,
              fnOnArtworkLangChange: i,
              realms: l,
              fnLangHasData: u,
            } = s,
            [x, p] = (0, v.useState)(o),
            I = Qe.b.InitFromClanID(t.clanAccountID),
            _ = (0, j.q3)(() =>
              ye.zU.GenerateURLFromHashAndExt(I, ye.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(_e.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => i?.(t, o, x),
            onCancel: a,
            closeModal: a,
            children: (0, e.jsxs)("div", {
              className: (0, k.A)(G().FlexColumnContainer, J().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: J().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: J().ArtworkPreview,
                    src: _,
                  }),
                }),
                (0, e.jsx)(he.Ng, {
                  selectedLang: x,
                  fnLangHasData: u,
                  fnOnLanguageChanged: p,
                  realms: l,
                }),
              ],
            }),
          });
        }
        var Se = r(56330);
        function Ke(s) {
          if (!s) return s;
          const t = s.lastIndexOf(".");
          return t === -1 ? s : s.substring(0, t);
        }
        var xa = r(58483),
          Va = r(82385),
          cn = r(94520),
          dn = r(95174),
          un = r(9709),
          Ka = r(64868),
          gn = r(44894);
        const mn =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var hn = r(11243);
        function pn(s) {
          const {
            clanSteamID: t,
            fnGetImageHash: a,
            fnLangHasData: o,
            fnOnRemoveImage: i,
          } = s;
          (0, Ue.mr)(t.GetAccountID());
          const l = v.useMemo(() => {
              let I = new Array();
              const _ = c.A0.GetLanguageListForRealms([
                et.TU.k_ESteamRealmGlobal,
                et.TU.k_ESteamRealmChina,
              ]);
              for (const C of _) {
                const w = a(C);
                if (w) {
                  const A = (0, U.LgB)(C),
                    R = (0, c.we)("#Language_" + A);
                  I.push({ lang: C, strLang: A, locLang: R, imgHash: w });
                }
              }
              return (
                (I = I.sort((C, w) =>
                  C.locLang > w.locLang ? 1 : C.locLang < w.locLang ? -1 : 0,
                )),
                I
              );
            }, [a]),
            [u, x, p] = (0, Ka.uD)();
          return (0, e.jsxs)("div", {
            className: J().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: J().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: J().LanguageListContainer,
                children: l.map((I) =>
                  (0, e.jsx)(
                    fn,
                    { langData: I, ...s },
                    "lang_select_" + t.GetAccountID() + " " + I.strLang,
                  ),
                ),
              }),
              !!i &&
                (0, e.jsxs)(se.$n, {
                  onClick: x,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(hn.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(_e.EN, {
                active: u,
                children: (0, e.jsx)(_e.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: p,
                  onOK: () => {
                    for (let I = 0; I < U.bP9; I++) o && i && o(I) && i(I);
                  },
                }),
              }),
            ],
          });
        }
        function fn(s) {
          const {
              clanSteamID: t,
              langData: a,
              langOverride: o,
              fnOnLanguagePreviewChange: i,
              fnOnArtworkLangChange: l,
              fnOnRemoveImage: u,
            } = s,
            [x, p] = (0, j.q3)(() => {
              const I = Ue.pU.GetClanImageByImageHash(t, a.imgHash);
              let _ = "";
              I &&
                (_ = ye.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  ye.zU.GetHashAndExt(I),
                  rt.wI.full,
                  a.lang,
                ));
              let C = J().LanguageSelectorSelected;
              return (
                o != a.lang &&
                  (C = a.imgHash
                    ? J().LanguageSelector
                    : J().LanguageSelectorNoData),
                [_, C]
              );
            });
          return (0, e.jsxs)("div", {
            id: a.strLang,
            className: J().LanguageContainer,
            onClick: (I) => {
              let _ = (0, U.sfN)(I.currentTarget.id);
              i(_);
            },
            children: [
              (0, e.jsx)("div", { className: p, children: a.locLang }),
              (0, e.jsxs)("span", {
                className: J().LanguageOptions,
                children: [
                  !!x &&
                    (0, e.jsx)("a", {
                      href: x,
                      target: "_blank",
                      children: (0, e.jsx)(mt.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: wt.YNO(),
                      }),
                    }),
                  !!l && (0, e.jsx)(vn, { ...s }),
                  !!u && (0, e.jsx)(xn, { fnOnRemoveImage: u, langData: a }),
                ],
              }),
            ],
          });
        }
        function vn(s) {
          const {
              clanSteamID: t,
              langData: a,
              fnOnArtworkLangChange: o,
              fnGetImageHash: i,
              fnLangHasData: l,
              realms: u,
            } = s,
            [x, p, I] = (0, Ka.uD)(),
            _ = (0, j.q3)(() => {
              const C = i(a.lang);
              return (
                (0, xt.wT)(
                  !C || !C.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + C,
                ),
                Ue.pU.GetClanImageByImageHash(t, C)
              );
            });
          if (!_) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: mn,
                  onClick: () => p(),
                }),
              }),
              (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(_e.EN, {
                  active: x,
                  children: (0, e.jsx)(de, {
                    clanImage: _,
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
        function xn(s) {
          const { fnOnRemoveImage: t, langData: a } = s,
            [o, i, l] = (0, Ka.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(mt.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": a.lang,
                  src: gn.A,
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
        var Za = r(13465),
          In = r(21659),
          bn = r(15496),
          Fe = r.n(bn),
          _n = r(88812);
        function jn(s) {
          const {
              event: t,
              spotlightURLOverride: a,
              fnHandleOpenEvent: o,
              fnImageFailureCallback: i,
              fnFilterImageURLsForKnownFailures: l,
              langOverride: u,
            } = s,
            x = (0, In.c5)(),
            p = v.useCallback(
              (T) => {
                T.preventDefault(), o && o(t);
              },
              [t, o],
            ),
            I = u || (0, U.sfN)(q.TS.LANGUAGE),
            [_, C, w] = (0, j.q3)(() => [
              t.GetSummaryWithFallback(I),
              t.GetNameWithFallback(I),
              t.BShowLibrarySpotlightText(),
            ]);
          let A = "spotlight",
            R = rt.wI.spotlight_main;
          (t.appid == 2434320 || q.TS.EUNIVERSE == U.Rv) &&
            ((A = x
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (R = rt.wI.full));
          let F =
            (0, _n.WC)(a !== void 0 ? void 0 : t, A, I, R) ??
            (a !== void 0 ? [a] : []);
          l && F && (F = l(F));
          const P = _.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(v.Fragment, {
            children: (0, e.jsx)("div", {
              className: Fe().MajorEvent_Ctn,
              ref: s.containerRef,
              children: (0, e.jsxs)(V.Z, {
                className: (0, k.A)(
                  Fe().AppDetailsSpotlightContainer,
                  Fe().MajorEventContainer,
                ),
                onActivate: p,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Fe().MajorEventBackground,
                    children: (0, e.jsx)(Za.c, {
                      className: Fe().MajorEventImageBackgroundBlur,
                      rgSources: F,
                      onIncrementalError: (T, Q, H) => i && i(Q),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Fe().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(Za.c, {
                        className: Fe().MajorEventImage,
                        rgSources: F,
                        onIncrementalError: (T, Q, H) => i && i(Q),
                      }),
                      (0, e.jsx)("div", {
                        className: Fe().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Fe().MajoreEventImageContentContainer,
                        children:
                          w &&
                          (0, e.jsxs)("div", {
                            className: Fe().MajorEventContent,
                            children: [
                              (0, e.jsx)(Za.c, {
                                className: Fe().MajorEventSpotlightBackground,
                                rgSources: F,
                                onIncrementalError: (T, Q, H) => i && i(Q),
                              }),
                              (0, e.jsxs)("div", {
                                className: Fe().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Fe().MajorEventTitle,
                                    children: C,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Fe().MajorEventSummary,
                                    children: P,
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
        var Cn = r(79949),
          Le = r.n(Cn);
        function En(s) {
          const {
              langOverride: t,
              artworkType: a,
              fnOnLanguagePreviewChange: o,
              clanSteamID: i,
              eventModel: l,
              partnerEventStore: u,
              fnOnRemoveImage: x,
              fnOnArtworkLangChange: p,
              realms: I,
              fnLangHasData: _,
              fnGetImageHashAndExt: C,
            } = s,
            w = C(a, t),
            A = w
              ? ye.zU.GenerateURLFromHashAndExtAndLang(i, w, rt.wI.full, t)
              : "",
            [R] = (0, j.q3)(() => [Mn(a, C)]);
          return R == 0
            ? (0, e.jsxs)("div", {
                className: J().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(en, {
                      imgURL:
                        q.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: l,
                    }),
                  a === "background" &&
                    (0, e.jsx)(tn, {
                      imgURL:
                        q.TS.IMG_URL + "events/defaults/default_img_header.jpg",
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
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: J().ImagePreviewContainer,
                children: [
                  a === "capsule" &&
                    (0, e.jsx)(en, {
                      imgURL: A,
                      eventModel: l,
                      langOverride: t,
                    }),
                  a === "background" &&
                    (0, e.jsx)(tn, {
                      imgURL: A,
                      lang: t,
                      eventModel: l,
                      partnerEventStore: u,
                    }),
                  a === "spotlight" &&
                    (0, e.jsx)(Ia, { imgURL: A, event: l, lang: t }),
                  a === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ia, { imgURL: A, event: l, lang: t }),
                  a === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ia, { imgURL: A, event: l, lang: t }),
                  (a === "broadcast_left" || a === "broadcast_right") &&
                    (0, e.jsx)(Dn, {
                      imgURL: A,
                      side: a === "broadcast_right" ? "right" : "left",
                    }),
                  a === "sale_header" && (0, e.jsx)(Sn, { imgURL: A }),
                  a === "sale_overlay" && (0, e.jsx)(wn, { imgURL: A }),
                  rt.pb.includes(a) &&
                    (0, e.jsx)("img", {
                      className: un.PreviewImg,
                      src:
                        ze.GetLocalizedImageGroupForEditAsURL(i, t) ?? void 0,
                    }),
                  a === "product_banner" && (0, e.jsx)(Xt, { imgURL: A }),
                  a === "product_mobile_banner" &&
                    (0, e.jsx)(Xt, { imgURL: A }),
                  a === "sale_logo" && (0, e.jsx)(Xt, { imgURL: A }),
                  a === "bestofyear_banner" && (0, e.jsx)(Xt, { imgURL: A }),
                  a === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(Xt, { imgURL: A }),
                  (0, e.jsx)(pn, {
                    langOverride: t,
                    clanSteamID: i,
                    fnOnLanguagePreviewChange: o,
                    fnOnRemoveImage: x,
                    fnOnArtworkLangChange: p,
                    realms: I,
                    fnLangHasData: _,
                    fnGetImageHash: (F) => Ke(C(a, F) ?? ""),
                  }),
                ],
              });
        }
        function us(s) {
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
        function yn(s) {
          const { artworkType: t, langOverride: a, eventModel: o } = s,
            i = Y.Fj[t],
            l = v.useMemo(
              () =>
                An(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${i.width} X ${i.height}`,
                ),
              [i.height, i.width, t],
            );
          return (0, e.jsx)(Ia, { lang: a, imgURL: l, event: o });
        }
        function An(s, t) {
          const i = document.createElement("canvas");
          (i.width = 780), (i.height = 200);
          const l = i.getContext("2d"),
            u = 20;
          for (let I = 0; I < 200; I += u)
            for (let _ = 0; _ < 780; _ += u)
              (l.fillStyle =
                (_ / u + I / u) % 2 === 0 ? "#a405e3ff" : "#000000"),
                l.fillRect(_, I, u, u);
          const x = l.createLinearGradient(0, 0, 780, 0);
          x.addColorStop(0, "rgba(32,32,32,0.8)"),
            x.addColorStop(1, "rgba(60,60,60,0.8)"),
            (l.fillStyle = x),
            l.fillRect(0, 0, 780, 200);
          const p = l.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            p.addColorStop(0, "rgba(0,0,0,0)"),
            p.addColorStop(1, "rgba(0,0,0,0.6)"),
            (l.fillStyle = p),
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
        function en(s) {
          const { imgURL: t, eventModel: a, langOverride: o } = s,
            i = (0, Ze.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(dn.u, {
              event: a,
              imageURLOverride: t,
              langOverride: o ?? i,
            }),
          });
        }
        function tn(s) {
          const { lang: t, eventModel: a, partnerEventStore: o } = s,
            i = (0, xa.LJ)(),
            [l, u, x, p, I] = (0, j.q3)(() => [
              a.GetNameWithFallback(t),
              a.GetDescriptionWithFallback(t),
              a.GetSubTitleWithLanguageFallback(t),
              a.type,
              a.AnnouncementGID,
            ]);
          let _ = u
            ? (0, e.jsx)(cn.fh, {
                text: u || "",
                showErrorInfo: !1,
                event: a,
                languageOverride: Ze.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Le().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Le().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, k.A)(
                  Le().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Le().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Le().MainImageCtn,
                      children: (0, e.jsx)("img", { src: s.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Le().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Le().TextTitle,
                            children:
                              l ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextSubTitle,
                            children:
                              x ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Le().TextBody,
                            children: _,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              p != U.Fwr &&
                (0, e.jsxs)(v.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Le().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Le().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, k.A)(
                        Le().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Le().DetailExample2,
                        children: (0, e.jsx)(
                          Va.He,
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
        const Ia = (s) => {
            const [t] = (0, N.t7)(s.event.appid, { include_assets: !0 });
            if (!t) return null;
            const a = t.GetName(),
              o = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Le().SpotlightExample,
              children: (0, e.jsx)(jn, {
                event: s.event,
                strDisplayName: a ?? "",
                gameIconUrl: o,
                spotlightURLOverride: s.imgURL,
                langOverride: s.lang,
              }),
            });
          },
          Dn = (s) => {
            const t = [
              (0, e.jsx)("img", { src: s.imgURL }, "img"),
              (0, e.jsx)("div", { className: J().BroadcastPreview }, "video"),
            ];
            return (
              s.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Le().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Sn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          wn = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            }),
          Xt = (s) =>
            (0, e.jsx)("div", {
              className: Le().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: s.imgURL,
              }),
            });
        function Mn(s, t) {
          let a = 0;
          for (let o = U.Bhc; o < U.bP9; ++o)
            (t(s, o)?.length ?? 0) > 0 && (a += 1);
          return a;
        }
        var Bn = Object.defineProperty,
          Ln = Object.getOwnPropertyDescriptor,
          an = (s, t, a, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Ln(t, a) : t, l = s.length - 1, u;
              l >= 0;
              l--
            )
              (u = s[l]) && (i = (o ? u(t, a, i) : u(i)) || i);
            return o && i && Bn(t, a, i), i;
          };
        const Tn =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Pn = ((s) => (
          (s[(s.k_None = 0)] = "k_None"),
          (s[(s.k_Suggested = 1)] = "k_Suggested"),
          (s[(s.k_Required = 2)] = "k_Required"),
          (s[(s.k_Requested = 3)] = "k_Requested"),
          s
        ))(Pn || {});
        function Nn(s) {
          const {
              artworkType: t,
              headerHint: a,
              appid: o,
              fnToggleMinimize: i,
              realms: l,
              eventModel: u,
              fnLangHasData: x,
              fnGetImageHashAndExt: p,
              fnSetImageURL: I,
              partnerEventStore: _,
            } = s,
            [C] = (0, N.t7)(o, { include_assets: !0 }),
            [w, A] = (0, j.q3)(() => [
              u?.GetEventType(),
              u?.BHasTag("vo_marketing_message"),
            ]),
            R = w == U.ajI;
          let F = null;
          a === 2
            ? (F = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : a === 1
              ? (F = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : a === 3 &&
                (F = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let P = null;
          t === "capsule"
            ? R
              ? (P = (0, e.jsxs)(e.Fragment, {
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
              : (P = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!A &&
                      (0, e.jsxs)("div", {
                        className: J().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${q.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
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
              ? (P = (0, e.jsx)(e.Fragment, {
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
                ? (P = (0, e.jsx)(e.Fragment, {
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
                  ? (P = (0, e.jsx)(e.Fragment, {
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
                    ? (P = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (P = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: G().EventElementRequired,
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
                        ? C &&
                          (P = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !C.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Se.ErrorStylesBackground,
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
                          ? (P = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Tn,
                                      target: q.TS.IN_CLIENT
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
                            ? (P = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: G().EventElementOptional,
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
                              ? (P = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: G().EventElementOptional,
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
                                ? (P = (0, e.jsxs)(e.Fragment, {
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
                                  ? (P = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: G().EventElementOptional,
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
                                  : (P = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: G().EventElementRequired,
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
          const T = Y.Fj[s.artworkType].width,
            Q = Y.Fj[s.artworkType].height;
          return (0, e.jsxs)("div", {
            id: s.id,
            className: J().ArtworkSelectorContainer,
            children: [
              !!s.title &&
                (0, e.jsxs)("div", {
                  className: J().Title,
                  onDoubleClick: i,
                  children: [
                    s.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    F,
                    i &&
                      (0, e.jsx)(se.$n, {
                        onClick: i,
                        children: (0, e.jsx)(mt.he, {
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
                  className: (0, k.A)(J().SelectImageBlock, J().Tips),
                  children: [
                    P,
                    !!(T && Q) &&
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
                            (0, Y.qj)(T),
                            (0, Y.qj)(Q),
                          ),
                        ],
                      }),
                    !!s.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Se.WarningStylesWithIcon,
                          children: s.strWarning,
                        }),
                      }),
                    s.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    s.elAdditionalControls,
                    !!s.fnRemoveAllArtwork &&
                      (0, e.jsx)(se.$n, {
                        onClick: (H) => {
                          (0, Ve.pg)(
                            (0, e.jsx)(kn, {
                              fnRemoveAllArtwork: s.fnRemoveAllArtwork,
                            }),
                            (0, Dt.uX)(H) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !s.bIsMinimized &&
                (0, e.jsx)(Gn, {
                  clanSteamID: s.clanSteamID,
                  title: s.title ?? "",
                  eventModel: u,
                  artworkType: s.artworkType,
                  realms: l,
                  appid: o,
                  fnGetImageHashAndExt: p,
                  fnSetImageURL: I,
                  fnLangHasData: x,
                  partnerEventStore: _,
                }),
            ],
          });
        }
        function kn(s) {
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
        function Gn(s) {
          const {
              artworkType: t,
              realms: a,
              clanSteamID: o,
              fnLangHasData: i,
              fnGetImageHashAndExt: l,
              fnSetImageURL: u,
              eventModel: x,
              appid: p,
              partnerEventStore: I,
            } = s,
            _ = t === "localized_image_group",
            [C, w] = v.useState((0, Ze.E)()),
            [A, R] = v.useState(new Array()),
            F = v.useCallback(
              (T, Q, H) => {
                let $ = [];
                A.find((fe) => fe.clanImage.imageid == T.imageid)
                  ? ($ = A.map((fe) =>
                      fe.clanImage.imageid == T.imageid
                        ? { clanImage: T, lang: Q }
                        : fe,
                    ))
                  : H && ($ = A.concat({ clanImage: T, lang: Q })),
                  R($);
              },
              [A],
            ),
            P = v.useCallback(
              (T, Q, H) => {
                (0, Rt.h5)(() => {
                  Ke(l(t, Q) ?? "") == T.image_hash && u(t, null, Q),
                    u(t, T, H),
                    F(T, H, !1);
                });
              },
              [l, t, u, F],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(se.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${q.TS.PARTNER_BASE_URL}admin/game/editbyappid/${p}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(ba, {
                    list: A,
                    fnOnArtworkLanguageChange: P,
                    realms: a,
                    fnLangHasData: i,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, k.A)(
                        J().SelectImageBlock,
                        J().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(En, {
                        eventModel: x,
                        clanSteamID: o,
                        fnOnLanguagePreviewChange: (T) => {
                          T != C && w(T);
                        },
                        langOverride: C,
                        fnOnArtworkLangChange: _ ? null : P,
                        artworkType: t,
                        fnOnRemoveImage: _ ? null : (T) => u(t, null, T),
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
        let ba = class extends v.Component {
          ShowLangChangeDialog(s, t) {
            const {
              fnOnArtworkLanguageChange: a,
              realms: o,
              fnLangHasData: i,
            } = this.props;
            (0, Ve.pg)(
              (0, e.jsx)(de, {
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
                      className: G().FlexRowContainer,
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
              className: J().UploadSuccess,
              children: t,
            });
          }
        };
        an([gt.oI], ba.prototype, "ShowLangChangeDialog", 1),
          (ba = an([ga.PA], ba));
        var On = r(6658);
        function Rn(s) {
          const {
              clanSteamID: t,
              appid: a,
              eventModel: o,
              realms: i,
              loc_images: l,
              artworkType: u,
              fnLangHasData: x,
              closeModal: p,
              fnSetImageURL: I,
              partnerEventStore: _,
            } = s,
            [C, w] = (0, v.useState)(!1),
            A = (0, Wt.zO)(t, u),
            R = t.GetAccountID(),
            [F] = (0, j.q3)(() => [
              A.GetFilesToUpload().length - A.GetCompletedFiles(),
            ]);
          (0, v.useEffect)(() => {
            w(!1),
              ze.ClearImageGroup(),
              l?.forEach((H, $) => {
                const pe = Qe.b.InitFromClanID(R);
                if (ze.GetAllLocalizedGroupImages().length == 0) {
                  const fe = H && ye.zU.GetHashFromHashAndExt(H),
                    De = fe && Ue.pU.GetClanImageByImageHash(pe, fe);
                  De && ze.SetPrimaryImageForImageGroup(De, u);
                }
                ze.SetLocalizedImageGroupAtLang($, pe, H ?? null);
              }),
              w(!0);
          }, [l, R, u]);
          const P = (0, v.useCallback)(
              (H, $, pe = U.Bhc) => {
                const fe = Qe.b.InitFromClanID(R),
                  De = ye.zU.GetHashAndExt($ ?? null);
                if (ze.GetAllLocalizedGroupImages().length == 0) {
                  const Je = De && ye.zU.GetHashFromHashAndExt(De),
                    ve = Je && Ue.pU.GetClanImageByImageHash(fe, Je);
                  ve && ze.SetPrimaryImageForImageGroup(ve, H);
                }
                ze.SetLocalizedImageGroupAtLang(pe, fe, De);
              },
              [R],
            ),
            T = (0, v.useCallback)((H, $) => {
              const fe =
                ze.GetLocalizedImageGroupForEdit()?.localized_images[$];
              return fe && fe.split("/").pop();
            }, []),
            Q = () => {
              const H = ze.GetLocalizedImageGroupForEdit();
              for (let $ = U.Bhc; $ < U.bP9; ++$) {
                const pe = H?.localized_images[$];
                if (pe) {
                  const fe = pe.split("/").pop() || "";
                  I(
                    u,
                    {
                      image_hash: Ke(fe),
                      clanAccountID: R,
                      file_type: (0, On.yh)(fe) ?? Vt.bg.w3,
                      imageid: 0,
                    },
                    $,
                  );
                } else I(u, null, $);
              }
              ze.ClearImageGroup(), s.onOK ? s.onOK() : p?.();
            };
          return (0, e.jsxs)(_e.o0, {
            onCancel: p,
            closeModal: p,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, k.A)(Se.NotTooWideModal, Se.ImageManageDialog),
            strTitle: s.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: s.strLocalizedDescription,
            bOKDisabled: F > 0,
            onOK: Q,
            strOKButtonText:
              F > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              C
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(D, {
                        clanSteamID: t,
                        rgSupportArtwork: [u],
                        fnSetImageURL: P,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: i ?? [],
                        uploaderOverride: A,
                      }),
                      (0, e.jsx)(Nn, {
                        clanSteamID: t,
                        eventModel: o,
                        artworkType: u,
                        title: null,
                        appid: a,
                        realms: i,
                        fnRemoveAllArtwork: () => ze.ClearImageGroup(),
                        fnSetImageURL: P,
                        fnGetImageHashAndExt: T,
                        fnLangHasData: x,
                        partnerEventStore: _,
                      }),
                    ],
                  })
                : (0, e.jsx)(Re.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              s.children,
            ],
          });
        }
        function Un(s) {
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
              (0, e.jsx)(se.JU, {
                children: o || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(se.m, {
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
        var zn = r(94381);
        function Fn(s) {
          const {
              closeModal: t,
              imgGroup: a,
              fnUpdateImageGroup: o,
              eventModel: i,
            } = s,
            { openColorPicker: l } = It(),
            [u, x] = (0, v.useState)(() => a),
            [p, I, _, C, w, A, R, F] = (0, j.q3)(() => [
              u.repeat_setting,
              u.scaling_setting,
              u.background_color1,
              u.background_color2,
              u.gradient_setting,
              u.position_setting,
              i.GetIncludedRealmList(),
              u.randomize_section_order,
            ]),
            [P] = (0, v.useState)(() => Hn(u.localized_background_art ?? {}));
          return (0, e.jsxs)(Rn, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: i.appid,
            eventModel: i,
            clanSteamID: i.clanSteamID,
            closeModal: t,
            partnerEventStore: oa.O3,
            artworkType: "localized_background_art",
            realms: R,
            loc_images: P,
            fnLangHasData: (T) => !!P[T],
            fnGetImageHash: (T, Q) => P[Q],
            fnSetImageURL: async (T, Q, H) => {
              x(($) => {
                const pe = { ...$.localized_background_art },
                  fe = ye.zU.GetHashAndExt(Q);
                return (
                  fe ? (pe[(0, U.LgB)(H)] = fe) : delete pe[(0, U.LgB)(H)],
                  { ...$, localized_background_art: pe }
                );
              });
            },
            onOK: () => {
              x((T) => (o(T), t && setTimeout(t, 1), { ...T }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: Xe().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: Xe().ImageOptions,
                    children: [
                      (0, e.jsx)(Un, {
                        setting: p,
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
                      (0, e.jsx)(Wn, {
                        scaling_setting: I ?? "contain",
                        disable: p !== "no-repeat",
                        fnUpdateSetting: (T) => x({ ...u, scaling_setting: T }),
                      }),
                      I != "cover" &&
                        (0, e.jsx)(Vn, {
                          position_settings: A,
                          fnUpdateSetting: (T) =>
                            x({ ...u, position_setting: T }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Xe().ColorOptions,
                    children: [
                      (0, e.jsx)(se.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Ot().ColorCtn,
                        children: [
                          (0, e.jsx)(se.$n, {
                            style: { backgroundColor: _ },
                            onClick: (T) =>
                              l(T, {
                                color: _ ?? "",
                                onChange: (Q) =>
                                  x({ ...u, background_color1: Q }),
                              }),
                            children: (0, c.we)(
                              _ === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(se.$n, {
                            onClick: () =>
                              x({ ...u, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: Xe().SwapColorsCtn,
                        children: (0, e.jsx)(se.$n, {
                          onClick: () =>
                            x({
                              ...u,
                              background_color1: C,
                              background_color2: _,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      w !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Ot().ColorCtn,
                          children: [
                            (0, e.jsx)(se.$n, {
                              style: { backgroundColor: C },
                              onClick: (T) =>
                                l(T, {
                                  color: C ?? "",
                                  onChange: (Q) =>
                                    x({ ...u, background_color2: Q }),
                                }),
                              children: (0, c.we)(
                                C === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(se.$n, {
                              onClick: () =>
                                x({ ...u, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(Yn, {
                        gradient: w ?? "top-to-bottom",
                        fnUpdateSetting: (T) =>
                          x({ ...u, gradient_setting: T }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(ra, {
                clanSteamID: i.clanSteamID,
                children: (0, e.jsx)(zn.S, {
                  checked: !!F,
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
        function Hn(s) {
          const t = Pt.$Y([], U.bP9, null);
          for (const a in s) {
            const o = (0, U.sfN)(a);
            o != U.xPp && (t[o] = s[a]);
          }
          return t;
        }
        function Wn(s) {
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
              (0, e.jsx)(se.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(se.m, {
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
        function Yn(s) {
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
              (0, e.jsx)(se.JU, {
                children: o || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(se.m, {
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
        function Vn(s) {
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
              (0, e.jsx)(se.JU, {
                children: o || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(se.m, {
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
        function Kn(s) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: a,
              fnSetBackgroundImgGroupEditMode: o,
              bShowAsValveOnly: i,
            } = s,
            [l, u] = (0, v.useState)(t.BIsBackgroundImageEnabled()),
            [x, p, I] = (0, gt.uD)(),
            _ = (0, j.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, k.A)(Xe().Ctn, i && B.ValveOnlyBackground),
            children: (0, e.jsxs)(z.tH, {
              children: [
                (0, e.jsx)(se.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: l,
                  onChange: (C) => {
                    u(C), t.SetBackgroundImageEnabled(C);
                  },
                }),
                l
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(se.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: a,
                          onChange: o,
                        }),
                        (0, e.jsx)(se.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: _,
                          onChange: (C) =>
                            t.SetSalePageLastCoverSectionUntilEnd(C),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(se.$n, {
                          onClick: p,
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
                  href: `${ft.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Qa = v.forwardRef(function (t, a) {
          const {
              imgGroupDerivedMapping: o,
              backgroundImageEditModel: i,
              groupIndex: l,
              imgGroup: u,
              eventModel: x,
              nTabIndex: p,
            } = t,
            I = (0, Ze.E)(),
            [_, C, w, A] = (0, j.q3)(() => [
              u && o.mapGroupToSections.get(u.background_id),
              (u &&
                o.mapGroupToSections.get(u.background_id)?.sectionUniqueIDs) ??
                [],
              p != null
                ? i?.GetTabLastCoverSectionUntilEnd(p)
                : i?.GetSalePageLastCoverSectionUntilEnd(),
              p != null ? i?.GetTabGroupCount(p) : i?.GetSalePageGroupCount(),
            ]),
            R = w && l + 1 === A,
            [F, P, T] = (0, gt.uD)(),
            [Q, H, $] = (0, gt.uD)();
          let pe;
          _?.nUniqueIDNextSaleSection &&
            (pe = (0, Nt.h_)(
              ne.HY,
              i.GetSaleSectionByID(_?.nUniqueIDNextSaleSection),
              I,
              x,
              _.nSaleSectionLastIndex + 1,
            ));
          let fe;
          if (_ && C?.length > 1) {
            const De = C[C.length - 1];
            fe = (0, Nt.h_)(
              ne.HY,
              i?.GetSaleSectionByID(De),
              I,
              x,
              _.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(yt.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              p != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              l + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: a,
              children: [
                (0, e.jsx)(se.$n, {
                  onClick: P,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(_e.EN, {
                  active: F,
                  children: (0, e.jsx)(Fn, {
                    imgGroup: u,
                    closeModal: T,
                    eventModel: x,
                    fnUpdateImageGroup: (De) =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, De)
                        : i.SetSalePageBackgroundGroup(l, De),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: Xe().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    C.map((De) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, Nt.h_)(
                            ne.W3,
                            i.GetSaleSectionByID(De),
                            I,
                            x,
                            i.GetSaleSectionIndexByID(De, !0),
                          ),
                        },
                        "li_" + De,
                      ),
                    ),
                    !!R &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!fe &&
                  (0, e.jsx)(se.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", fe),
                  }),
                !!pe &&
                  (0, e.jsx)(se.$n, {
                    onClick: () =>
                      p != null
                        ? i.SetTabBackgroundGroup(p, l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          })
                        : i.SetSalePageBackgroundGroup(l, {
                            ...u,
                            num_sections: u.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", pe),
                  }),
                l > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(se.$n, {
                        onClick: H,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(_e.EN, {
                        active: Q,
                        children: (0, e.jsx)(_e.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            p != null
                              ? i.RemoveTabBackgroundGroup(p, l)
                              : i.RemoveSalePageBackgroundGroup(l),
                          closeModal: $,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function Zn(s) {
          const { backgroundImageEditModel: t, nTabID: a } = s;
          return (0, e.jsx)("div", {
            className: Xe().CtnEditor,
            children: (0, e.jsx)(se.$n, {
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
        function Qn(s) {
          const {
              nTabID: t,
              nSectionUniqueID: a,
              salePageBackgroundDerivedConfig: o,
              backgroundImageEditModel: i,
            } = s,
            l = o.mapFirstSectionToGroup.get(a);
          return a == o.nFirstSaleSectionIDWithoutGroup ||
            a == o.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(Zn, { backgroundImageEditModel: i, nTabID: t })
            : l
              ? (0, e.jsx)(Xn, { ...s, groupID: l })
              : null;
        }
        function Xn(s) {
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
            u = l.findIndex((F) => F.background_id === t),
            x = l[u],
            [p, I] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!p) return;
            const F = (0, Ve.pg)(
              (0, e.jsx)(_e.o0, {
                bAlertDialog: !0,
                closeModal: () => I(!1),
                children: (0, e.jsx)(Qa, {
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
              F.then((P) => P.Close());
            };
          }, [p, i, x, u, a, o]);
          const _ = (0, j.q3)(() => Tt.get(t)),
            [C, w] = (0, v.useState)(null),
            A = v.useCallback((F, P) => {
              w(P);
            }, []),
            R = (0, gt.w6)(A);
          return (0, e.jsxs)("div", {
            className: Xe().CtnEditor,
            ref: R,
            children: [
              !!(_ && C && C > _) &&
                (0, e.jsx)(se.$n, {
                  onClick: (F) => I(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Qa, {
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
        var Jn = r(81557),
          nn = r.n(Jn);
        function $n(s) {
          const { imgGroupDerivedMapping: t } = s,
            [a, o] = (0, v.useState)(!1);
          (0, v.useEffect)(() => {
            if (!a) return;
            const _ = (0, Ve.pg)(
              (0, e.jsx)(_e.o0, {
                bAlertDialog: !0,
                closeModal: () => o(!1),
                children: (0, e.jsx)(sn, { ...s }),
              }),
              window,
            );
            return () => {
              _.then((C) => C.Close());
            };
          }, [a, s]);
          const i = (0, j.q3)(() => {
              const _ = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (_) {
                const C = t.mapGroupToSections.get(_);
                if (C) return Tt.get(C?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [l, u] = (0, v.useState)(null),
            x = v.useCallback((_, C) => {
              u(C);
            }, []),
            p = (0, gt.w6)(x),
            I = !!(i >= 0 && l && l > i);
          return (0, e.jsxs)("div", {
            className: (0, k.A)(Xe().CtnEditor, nn().TabCtn),
            ref: p,
            children: [
              I &&
                (0, e.jsx)(se.$n, {
                  onClick: (_) => o(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(sn, { ...s }),
            ],
          });
        }
        function sn(s) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: a,
              nTabID: o,
            } = s,
            [i, l] = (0, v.useState)(null),
            [u, x, p, I] = (0, j.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(o),
              t?.BIsTabEnabled(o),
              a.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(z.tH, {
            children: [
              (0, e.jsx)(se.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: x,
                onChange: (_) => {
                  if (
                    ((0, xt.wT)(t, "edit model mising"),
                    (0, xt.wT)(o !== void 0, "tab setting missing"),
                    o !== void 0 && t)
                  ) {
                    const C = t.SetTabEnabled(o, _);
                    (0, xt.wT)(
                      !!C,
                      `Failed to create model TabID ${o}backgroundModel`,
                    ),
                      l(C);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${o}.`,
                    );
                },
              }),
              !!x &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(se.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: u,
                      onChange: (_) => t.SetTabLastCoverSectionUntilEnd(o, _),
                    }),
                    (0, e.jsx)(Qa, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (p || i)?.groups[0],
                      imgGroupDerivedMapping: a,
                      eventModel: I,
                      nTabIndex: o,
                      classNameHeader: nn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var Jt = r(85692);
        function qn(s) {
          const { nSectionID: t, children: a } = s,
            [o, i] = v.useState(!1),
            [l, u] = v.useState(!1);
          v.useEffect(() => {
            Jt.TU.Get().SetMouseOverSection(t, o);
          }, [t, o]);
          const x = (0, j.q3)(() => Jt.TU.Get().GetMouseOverSectionID()),
            p = t && t == x,
            I = () => Jt.TU.Get().JumpToSection(t),
            _ = v.useRef(null);
          return (
            (0, Jt.lM)((C) =>
              t != C ? !1 : (_.current?.scrollIntoView(), u(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: _,
              className: (0, k.A)({
                [E().SaleSectionLivePreview]: !0,
                [E().Hover]: !!p,
                [E().JumpedTo]: !!l,
              }),
              onAnimationEnd: () => u(!1),
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: [
                o &&
                  (0, e.jsx)(mt.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: E().JumpToButton,
                      onClick: I,
                      children: (0, e.jsx)(wt.ffu, {}),
                    }),
                  }),
                a,
              ],
            })
          );
        }
        var es = r(55817),
          ts = r(20557);
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
            [p, I] = v.useState(a?.GetDayIndexFromEventStart()),
            [_, C] = v.useState(null),
            w = (0, j.q3)(() => a.jsondata.sale_header_disable_top_margin),
            A = ns(a, p, (0, ts.TC)(!!o)),
            [R, F] = (0, v.useState)(!1);
          v.useEffect(() => {
            if (
              a.jsondata.sale_custom_css &&
              !_ &&
              o &&
              a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, q.yK)() == "community"
            ) {
              const pe = document.getElementsByTagName("HEAD")[0],
                fe = document.createElement("style");
              (fe.innerText = (0, Ea.L$)(a.jsondata.sale_custom_css)),
                C(fe),
                pe.appendChild(fe);
            }
            const $ = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, xt.wT)(
                $.length <= 1,
                "Must have at most one react_landing_background",
              ),
              $.length >= 1 && ($[0].style.backgroundImage = ""),
              () => {
                _ && (_.remove(), C(null));
              }
            );
          }, [a, _, o]);
          const P = a?.jsondata,
            T = v.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(q.UF.CLANACCOUNTID),
                nAppIDVOD: Number(P?.broadcast_preroll_vod_appid),
                event: a,
                bIsPreview: o,
                language: i,
                accountIDs: o ? P?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  P?.broadcast_chat_announcement_giveaway,
              }),
              [o, a, P, i, t],
            ),
            Q = (0, j.q3)(() => l?.BIsBackgroundImageEnabled() ?? !1),
            H = Ht(a?.clanSteamID);
          if (!a || p === void 0)
            return (0, e.jsx)("div", {
              className: na().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Re.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const $ =
                a.jsondata.localized_sale_logo &&
                a.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              pe = a.BUsesContentHubForItemSource(),
              fe = a
                .GetSaleSections()
                .some((lt) => lt.section_type === "contenthubtitle"),
              De = pe && fe;
            let Je,
              ve = !0;
            $
              ? (Je = 0)
              : a.BUsesContentHubForItemSource()
                ? (Je = 20)
                : a.GetEventType() == U.ajI
                  ? ((Je = 0), (ve = !1))
                  : (Je = a.jsondata.sale_header_offset || 0);
            const be = ve && a.jsondata.sale_header_offset === 530,
              $e = !ut.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  a.GetContentHubType(),
                  a.GetContentHubCategory(),
                  a.GetContentHubTag(),
                ),
              Bt = o
                ? !R && l?.BIsBackgroundImageEnabled()
                  ? nt.S.EPreviewMode_EditBackground
                  : nt.S.EPreviewMode_Enabled
                : nt.S.EPreviewMode_Disabled,
              it = Q || a.GetEventType() != U.ajI,
              $t = pe ? re.Yo.NoTransform : re.Yo.NoTransformSparseContent,
              _a = (0, k.A)(
                E().SaleOuterContainer,
                w && E().SaleOuterTopMargin,
                be && E().SaleNewSizing,
                E()[`CustomStyle_${a.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                $ && E().SalePageLogoSet,
                De && E().ContentHub,
              );
            return (0, e.jsx)(z.tH, {
              children: (0, e.jsx)(ae.EU, {
                eventModel: a,
                language: i,
                children: (0, e.jsx)(ne.Cs, {
                  location: o ? ne.HY : ne.bs,
                  children: (0, e.jsxs)(xe, {
                    event: a,
                    language: i,
                    bIsPreview: !!o,
                    children: [
                      $e && (0, e.jsx)(ae.Sn, {}),
                      (0, e.jsx)(Ie, { eventModel: a }),
                      !!l &&
                        (it || H) &&
                        (0, e.jsx)(Kn, {
                          backgroundImageEditModel: l,
                          bBackgroundImgGroupEditMode: R,
                          fnSetBackgroundImgGroupEditMode: F,
                          bShowAsValveOnly: !it,
                        }),
                      (0, e.jsxs)(V.Z, {
                        style: De ? void 0 : { marginTop: `${Je || 0}px` },
                        className: _a,
                        scrollIntoViewType: $t,
                        children: [
                          (0, e.jsx)(Me, { eventModel: a, language: i }),
                          (0, e.jsx)(ht, {
                            rgPresenters: a.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(ke, {
                            event: a,
                            broadcastEmbedContext: T,
                          }),
                          (0, e.jsx)(rs, {
                            ePreviewMode: Bt,
                            event: a,
                            backgroundImageEditModel: l,
                            language: i,
                            promotionName: t,
                            nSaleDayIndex: p,
                            broadcastEmbedContext: T,
                            selectedTab: A,
                            tagSelection: A?.GetTagSelection(),
                          }),
                          !x &&
                            (0, e.jsx)(Ye, {
                              event: a,
                              addtionalAdminButtons: u,
                              fnOnChangeDayIndex: (lt) => {
                                lt != p &&
                                  ((a.m_overrideCurrentDay = lt), I(lt));
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
          const [o] = (0, qe.QD)(S.jD, void 0),
            [i] = (0, qe.QD)(ie.dk, void 0),
            [l] = (0, qe.QD)(ie.NV, void 0),
            u = v.useMemo(() => {
              const C = s
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((w) => !w.hide);
              if (C && C.length > 0) {
                let w = o > 0 ? C.find((R) => R.unique_id == o) : void 0;
                w || (w = C[0]);
                const A = w === C[0];
                return { selTab: w, bIsDefaultTab: A };
              }
            }, [s, o]),
            x = (0, ie.U9)((0, ie.XL)(i, l), u?.selTab.tab_tag_filter, a),
            p = x?.strParentKey,
            I = x?.strChildKey;
          return v.useMemo(() => {
            if (!u) return;
            let _;
            p && (_ = { strParentKey: p, strChildKey: I });
            const C =
              s.jsondata.sale_opt_in_page_name ||
              s.jsondata.prune_list_optin_name;
            return new vt.y(u.selTab, t, u.bIsDefaultTab, _, C);
          }, [s, t, u, p, I]);
        }
        function rn() {
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
            [x, p] = v.useState((0, S.rp)()),
            I = v.useMemo(() => new sa(), []),
            _ = v.useCallback(() => p((0, S.rp)()), []);
          v.useEffect(
            () => (
              window.addEventListener("resize", _),
              () => window.removeEventListener("resize", _)
            ),
            [_],
          ),
            v.useEffect(() => {
              let ve = "";
              const be = () => {
                  const $e = rn();
                  if ($e && $e != ve) {
                    const Bt = document.getElementById($e);
                    Bt && ((ve = $e), Bt.scrollIntoView({ block: "start" }));
                  }
                },
                Te = setTimeout(() => be(), 150);
              return (
                window.addEventListener("hashchange", be),
                () => {
                  clearTimeout(Te),
                    window.removeEventListener("hashchange", be);
                }
              );
            }, []);
          const C = (0, pt.W6)(),
            w = (ve, be) => {
              (0, qe.ip)(C, { ...(be || {}), [S.jD]: ve.toString() });
            },
            [A, R] = (0, qe.QD)("controller"),
            [F, P] = (0, j.q3)(() => {
              const ve =
                  Ge.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                be = t.GetSaleSectionIncludingFooterSections(ve);
              return [
                ea(
                  t.jsondata.sale_background_img_groups,
                  be,
                  l && l.GetActiveTabUniqueID(),
                ),
                be,
              ];
            });
          let T = !1;
          const Q = new vt.y(void 0, o),
            H = [{ elements: [], activeTab: Q }];
          let $ = null;
          const pe = (0, q.Qn)(),
            fe = (0, Jt.ty)(),
            De = v.useMemo(() => {
              const ve = rn();
              if (!ve) return;
              const be = P.findIndex((Te) => Te.section_anchor === ve);
              return be > -1 ? be : void 0;
            }, [P]);
          P.forEach((ve, be) => {
            const Te = H[H.length - 1].activeTab;
            if (Te && !Te.ShouldShowSection(ve)) return;
            const $e = ut.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Bt = x && !$e && !t.jsondata.content_hub_restricted_width;
            let it = (0, nt.I)(ve, i, t, a, pe);
            if (it === void 0) return;
            if (!it)
              if ((0, Ft.su)(ve) && !q.iA.logged_in)
                T ||
                  ((it = (0, e.jsx)(Ft.CC, {
                    section: ve,
                    event: t,
                    language: a,
                  })),
                  (T = !0));
              else {
                const cs = ve.diable_tab_id_filtering
                  ? new vt.y(void 0, Te && Te.GetSaleDay())
                  : Te;
                ve.section_type == "tabs" &&
                  ve.tabs?.some(
                    (ds) => ds.unique_id == l?.GetActiveTabUniqueID(),
                  ) &&
                  H.push({ activeTab: l, elements: [] }),
                  (it = (0, e.jsx)(es.H, {
                    ...s,
                    section: ve,
                    activeTab: cs,
                    appVisibilityTracker: I,
                    selectedTab: l,
                    setTabUniqueIDQueryParam: w,
                    expanded: Bt,
                    controllerCategory: A,
                    setControllerCategory: R,
                  }));
              }
            fe &&
              (it = (0, e.jsx)(qn, { nSectionID: ve.unique_id, children: it }));
            const $t = H && H.length && H[H.length - 1];
            let _a = (0, e.jsx)(
              ls,
              {
                section: ve,
                nActiveTabID:
                  $t && $t.activeTab && $t.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: be,
                ePreviewMode: i,
                salePageBackgroundDerivedConfig: F,
                backgroundImageEditModel: u,
                bExpanded: Bt,
                children: (0, e.jsx)(Et._, {
                  enabled: !De || be > De,
                  children: it,
                }),
              },
              "SaleSectionIndex_" + ve.unique_id + "_" + be,
            );
            const lt = F.mapSectionToGroup.get(ve.unique_id);
            $ &&
              $.groupID != lt &&
              (H[H.length - 1].elements.push(
                ta(t, $, i, l && l?.GetActiveTabUniqueID()),
              ),
              ($ = null)),
              lt
                ? ($ ||
                    ($ = {
                      groupID: lt,
                      elSaleSections: [],
                      derivedGroupInfo: F.mapGroupToSections.get(lt),
                    }),
                  $.elSaleSections.push(_a))
                : H[H.length - 1].elements.push(_a);
          }),
            $ &&
              (H[H.length - 1].elements.push(
                ta(t, $, i, l && l?.GetActiveTabUniqueID()),
              ),
              ($ = null));
          const Je = H.map((ve, be) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, k.A)(
                  E().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ve.elements,
              },
              "TabSection_" + be,
            ),
          );
          return (0, e.jsx)(V.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Je,
          });
        }
        const rs = (0, pt.y)(ss);
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
            i = (0, We.OM)(a);
          return (t == "hide_when_open_door_index" && i) ||
            (t == "show_when_open_door_index" && !i)
            ? null
            : (0, e.jsx)(e.Fragment, { children: o });
        }
        function on({ children: s, onChange: t }) {
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
              children: p,
            } = s,
            I = t.section_anchor ? t.section_anchor : S.mj + (t.unique_id || a),
            _ = t.section_type != "tabs",
            [C, w] = (0, v.useState)(!0);
          return C
            ? (0, e.jsx)(z.tH, {
                children: (0, e.jsx)(os, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: _
                    ? (0, e.jsx)(V.Z, {
                        navKey: I,
                        id: I,
                        className: (0, k.A)({
                          [E().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: x,
                          [t.single_item_style || ""]: !0,
                          [E().SaleSectionBackgroundImageGroupEdit]:
                            i == nt.S.EPreviewMode_EditBackground,
                          [E().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          i === nt.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  p,
                                  (0, e.jsx)(Qn, {
                                    nSectionUniqueID: t.unique_id || a,
                                    nTabID: o,
                                    salePageBackgroundDerivedConfig: l,
                                    backgroundImageEditModel: u,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(on, { onChange: w, children: p }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          i === nt.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: I,
                                className: (0, k.A)({
                                  [E().SaleSectionCtn]: !0,
                                  [E().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [E().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  p,
                                  (0, e.jsx)($n, {
                                    backgroundImageEditModel: u,
                                    nTabID: o,
                                    imgGroupDerivedMapping: l,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(on, { onChange: w, children: p }),
                      }),
                }),
              })
            : null;
        }
      },
      4370: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { A: () => ne, X: () => le });
        var e = r(7850),
          U = r(17083),
          V = r(24660);
        function re(K) {
          return !!(K.metaKey || K.altKey || K.ctrlKey || K.shiftKey);
        }
        function ae(K) {
          const { navigate: j, onClick: v, ...M } = K,
            { target: z } = M,
            X = (E) => {
              try {
                v && v(E);
              } catch (B) {
                throw (E.preventDefault(), B);
              }
              !E.defaultPrevented &&
                E.button === 0 &&
                (!z || z === "_self") &&
                !re(E) &&
                (E.preventDefault(), j());
            };
          return (0, e.jsx)(V.Ii, { ...M, onClick: X });
        }
        function ne(K) {
          return (0, e.jsx)(U.k2, { component: ae, ...K });
        }
        function le(K) {
          return (0, e.jsx)(U.N_, { component: ae, ...K });
        }
      },
      12932: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { qx: () => B });
        var e = r(7850),
          U = r(16412),
          V = r(18210),
          re = r(36118),
          ae = r(90626),
          ne = r(36707),
          le = r(95695),
          K = r.n(le),
          j = r(25792),
          v = r(64734),
          M = r.n(v),
          z = r(65946),
          X = r(11243);
        function E(k) {
          const {
              title: q,
              tooltip: je,
              getMinimized: Z,
              toggleMinimized: ce,
              className: xe,
              children: ue,
              elAdditionalButtons: L,
            } = k,
            ee = (0, z.q3)(() => Z());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, ne.A)(
                  xe,
                  v.SectionTitleHeader,
                  v.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, ne.A)(
                      le.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [q, !!je && (0, e.jsx)(X.o, { tooltip: je })],
                  }),
                  (0, e.jsxs)("div", {
                    className: v.SectionTitleButtons,
                    children: [
                      L,
                      (0, e.jsx)(G, { bIsMinimized: ee, fnToggleMinimize: ce }),
                    ],
                  }),
                ],
              }),
              !ee && (0, e.jsx)(j.tH, { children: ue }),
            ],
          });
        }
        function B(k) {
          const [q, je] = ae.useState(!!k.bStartMinimized);
          return (0, e.jsx)(E, {
            ...k,
            getMinimized: () => q,
            toggleMinimized: () => je(!q),
            children: k.children,
          });
        }
        function G(k) {
          const { bIsMinimized: q, fnToggleMinimize: je } = k,
            Z = q ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, V.we)(Z),
            onClick: je,
            children: k.bIsMinimized
              ? (0, e.jsx)(re.hz4, {})
              : (0, e.jsx)(re.Xjb, {}),
          });
        }
      },
      27638: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { Y: () => V });
        var e = r(90626);
        function U(re) {
          const { title: ae, bodyClassName: ne, children: le } = re;
          return (
            React.useEffect(() => {
              const K = document.title;
              return (
                (document.title = ae),
                () => {
                  document.title = K;
                }
              );
            }, [ae]),
            V(ne),
            le
          );
        }
        function V(re) {
          e.useEffect(() => {
            if (!re) return;
            const ae = [];
            for (const ne of re.split(/ /))
              document.body.classList.contains(ne) || ae.push(ne);
            return (
              document.body.classList.add(...ae),
              () => document.body.classList.remove(...ae)
            );
          }, [re]);
        }
      },
      6479: (O, Ce, r) => {
        "use strict";
        r.r(Ce), r.d(Ce, { SteamChartsRoutes: () => me, default: () => Wa });
        var e = r(7850),
          U = r(58732),
          V = r(80902),
          re = r(99412),
          ae = r(72604),
          ne = r(35038),
          le = r(80613),
          K = r.n(le),
          j = r(75245),
          v = r(78192);
        class M extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              M.prototype.country_code || j.Sg(M.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    country_code: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                    context: { n: 2, c: v.TS },
                    data_request: { n: 3, c: v.gn },
                    start_date: {
                      n: 4,
                      br: j.qM.readUint32,
                      bw: j.gp.writeUint32,
                    },
                    page_start: {
                      n: 5,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    page_count: {
                      n: 6,
                      d: 20,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = j.w0(M.M())), M.sm_mbf;
          }
          toObject(n = !1) {
            return M.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(M.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(M.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new M();
            return M.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(M.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return M.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(M.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, n), n.getResultBase64String()
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
              z.prototype.start_date || j.Sg(z.M()),
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
                      br: j.qM.readUint32,
                      bw: j.gp.writeUint32,
                    },
                    ranks: { n: 2, c: X, r: !0, q: !0 },
                    next_page_start: {
                      n: 3,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = j.w0(z.M())), z.sm_mbf;
          }
          toObject(n = !1) {
            return z.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(z.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(z.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new z();
            return z.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(z.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(z.M(), n, d);
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
        class X extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              X.prototype.rank || j.Sg(X.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    rank: { n: 1, br: j.qM.readInt32, bw: j.gp.writeInt32 },
                    appid: { n: 2, br: j.qM.readInt32, bw: j.gp.writeInt32 },
                    item: { n: 3, c: v.vB },
                    last_week_rank: {
                      n: 4,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    consecutive_weeks: {
                      n: 5,
                      br: j.qM.readInt32,
                      bw: j.gp.writeInt32,
                    },
                    first_top100: {
                      n: 6,
                      br: j.qM.readBool,
                      bw: j.gp.writeBool,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = j.w0(X.M())), X.sm_mbf;
          }
          toObject(n = !1) {
            return X.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(X.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(X.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new X();
            return X.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(X.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return X.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(X.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank";
          }
        }
        class E extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              E.prototype.language || j.Sg(E.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    language: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = j.w0(E.M())), E.sm_mbf;
          }
          toObject(n = !1) {
            return E.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(E.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(E.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new E();
            return E.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(E.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return E.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(E.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, n), n.getResultBase64String()
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
              B.prototype.countries || j.Sg(B.M()),
              le.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { countries: { n: 1, c: G, r: !0, q: !0 } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = j.w0(B.M())), B.sm_mbf;
          }
          toObject(n = !1) {
            return B.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(B.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(B.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new B();
            return B.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(B.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return B.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(B.M(), n, d);
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
        class G extends le.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              G.prototype.country_code || j.Sg(G.M()),
              le.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    country_code: {
                      n: 1,
                      br: j.qM.readString,
                      bw: j.gp.writeString,
                    },
                    name: { n: 2, br: j.qM.readString, bw: j.gp.writeString },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = j.w0(G.M())), G.sm_mbf;
          }
          toObject(n = !1) {
            return G.toObject(n, this);
          }
          static toObject(n, d) {
            return j.BT(G.M(), n, d);
          }
          static fromObject(n) {
            return j.Uq(G.M(), n);
          }
          static deserializeBinary(n) {
            let d = new (K().BinaryReader)(n),
              g = new G();
            return G.deserializeBinaryFromReader(g, d);
          }
          static deserializeBinaryFromReader(n, d) {
            return j.zj(G.MBF(), n, d);
          }
          serializeBinary() {
            var n = new (K().BinaryWriter)();
            return G.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, d) {
            j.i0(G.M(), n, d);
          }
          serializeBase64String() {
            var n = new (K().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreTopSellers_GetCountryList_Response_Country";
          }
        }
        var k;
        ((m) => {
          function n(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetWeeklyTopSellers#1",
              (0, ne.I8)(M, h, f),
              z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetWeeklyTopSellers = n;
          function d(g, h, f) {
            return g.SendMsg(
              "StoreTopSellers.GetCountryList#1",
              (0, ne.I8)(E, h, f),
              B,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCountryList = d;
        })(k || (k = {}));
        var q = r(84192),
          je = r(71742),
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
                  (Z.TS.EUNIVERSE == re.Rv || Z.TS.EUNIVERSE == re.CII) &&
                    (h = 1539068400),
                    this.LoadCountryList()
                      .then(() =>
                        this.LoadCurrentWeekStart(h, n).then((f) => {
                          (this.m_rtCurrentWeek = f), d();
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
                const d = ne.w.Init(E);
                d.Body().set_language(Z.TS.LANGUAGE);
                const g = await k.GetCountryList(
                  this.m_WebAPI.GetServiceTransport(),
                  d,
                );
                if (g.GetEResult() == ae.R) {
                  let h = g
                    .Body()
                    .countries()
                    .map((f) => f.toObject());
                  h.sort((f, b) => (f.name < b.name ? -1 : 1)),
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
              (0, je.wT)(
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
            let h = ne.w.Init(M);
            (0, q.rV)(h),
              (0, q.Bn)(h, ht),
              g && h.Body().set_country_code(g),
              n && h.Body().set_start_date(n),
              h.Body().set_page_count(ce);
            let f = await k.GetWeeklyTopSellers(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              h,
            );
            if (f.GetEResult() != ae.R) throw "error loading top sellers";
            return f.Body().start_date();
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
        var ee = r(6469),
          te = r(79809);
        function Ie(m) {
          let n = 50;
          return (
            m < 2009 ? (n = 5) : m < 2014 ? (n = 10) : m < 2018 && (n = 25), n
          );
        }
        class oe {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopMonthlyReleases(n, d) {
            let g = ne.w.Init(te.GM);
            const h = new Date(n, d, 15);
            g.Body().set_rtime_month(Math.floor(h.getTime() / 1e3)),
              g.Body().set_include_dlc(!0);
            const f = Ie(n);
            g.Body().set_top_results_limit(f);
            let b = await te.ZG.GetMonthTopAppReleases(
              this.m_WebAPI.GetAnonymousServiceTransport(),
              g,
            );
            if (b.GetEResult() != ae.R) {
              if (b.GetEResult() == ae.S7) return { bSQLError: !0 };
              if (b.GetEResult() == ae.p) return {};
              throw "error loading top releases";
            }
            return b.Body().toObject();
          }
        }
        const Ee = "useMonthlyTopRelease";
        function c(m, n, d) {
          const { data: g } = (0, V.I)({
            queryKey: [Ee, n, d],
            queryFn: () => m.LoadTopMonthlyReleases(n, d),
          });
          return g;
        }
        var Me = r(72609);
        class He {
          m_WebAPI;
          constructor(n) {
            this.m_WebAPI = n;
          }
          async LoadTopYearlyReleases(n) {
            let d = ne.w.Init(te.FN);
            const g = new Date(n, 1, 15);
            d.Body().set_rtime_year(Math.floor(g.getTime() / 1e3)),
              d.Body().set_include_dlc(!0);
            const h =
              (Me.iA.is_support, this.m_WebAPI.GetAnonymousServiceTransport());
            let f = await te.ZG.GetYearTopAppReleases(h, d);
            if (f.GetEResult() != ae.R) {
              if (f.GetEResult() == ae.S7) return { bSQLError: !0 };
              if (f.GetEResult() == ae.p) return {};
              throw "error loading top releases";
            }
            const b = f.Body().toObject();
            return Me.iA.is_support && b.top_app_list.length == 0, b;
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
            for (const f of n)
              m.top_app_list.push({ ...h, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 730, app_release_rank: f }),
                m.top_app_list.push({ ...h, appid: 540, app_release_rank: f });
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
        const tt = "useYearlyTopRelease";
        function ct(m, n) {
          const { data: d } = (0, V.I)({
            queryKey: [tt, n],
            queryFn: () => m.LoadTopYearlyReleases(n),
          });
          return d;
        }
        class dt {
          m_DynamicUserStore;
          m_TopSellersStore;
          m_TopMonthlyReleasesStore;
          m_TopYearlyReleasesStore;
          m_WebAPI;
          async Initialize(n, d) {
            (this.m_WebAPI = n),
              (this.m_TopSellersStore = new xe(this.m_WebAPI, d)),
              (this.m_TopMonthlyReleasesStore = new oe(this.m_WebAPI)),
              (this.m_TopYearlyReleasesStore = new He(this.m_WebAPI)),
              (this.m_DynamicUserStore = await ee.Fm.Get().HintLoad());
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
        var at = r(89921),
          Ge = r.n(at),
          pt = r(74812),
          S = r.n(pt),
          ie = r(90626),
          ut = r(24805),
          We = r(7582),
          Ct = r(29057),
          ke = r(10142),
          Oe = r(84676),
          Ye = r(36118),
          qe = r(92298),
          Ze = r.n(qe),
          gt = r(19367),
          ft = r.n(gt),
          Lt = r(16346),
          Tt = r(34360),
          ja = r(95863),
          ea = r.n(ja),
          ye = r(71421),
          Ae = r(36707),
          ge = r(18210),
          Pt = r(92264);
        function nt(m) {
          const { toolTipContent: n } = m,
            d = ta({ ...m });
          return (0, e.jsx)(ye.Gq, {
            toolTipContent: n,
            children: (0, e.jsx)("div", {
              className: (0, Ae.A)(ea().CalendarBtn),
              onClick: (g) =>
                d(g, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
              children: (0, e.jsx)(Ye.VvS, { color: "#c6d4df" }),
            }),
          });
        }
        function ta(m) {
          return (0, ie.useCallback)(
            (d, g) => {
              const h = (0, e.jsx)(Ca, { ...m });
              (0, Lt.lX)(h, d, g);
            },
            [m],
          );
        }
        function Ca(m) {
          const { value: n, fnOnUpdate: d, minDate: g, maxDate: h } = m,
            f = (0, ie.useRef)(void 0),
            b = (0, ie.useRef)(null),
            y = (0, ie.useCallback)(
              (N) => {
                const W = ft().unix(g),
                  J = ft().unix(h);
                return (
                  N.isSameOrAfter(W, "month") && N.isSameOrBefore(J, "month")
                );
              },
              [g, h],
            ),
            D = (0, ie.useCallback)(
              (N) => {
                d(N.unix()), f.current.Hide();
              },
              [d],
            ),
            Y = (0, ie.useMemo)(() => {
              if (!ft().locales().includes("YearMonthPickerContextMenu")) {
                const N = Array.from({ length: 12 }, (J, he) =>
                    (0, ge.Gj)(new Date(2020, he, 1)),
                  ),
                  W = Array.from({ length: 12 }, (J, he) =>
                    (0, Pt.oL)(new Date(2020, he, 1)),
                  );
                ft().defineLocale("YearMonthPickerContextMenu", {
                  months: N,
                  monthsShort: W,
                });
              }
              return ft()().clone().locale("YearMonthPickerContextMenu");
            }, []);
          return (0, e.jsx)(Tt.tz, {
            refInstance: f,
            children: (0, e.jsx)(Tt.kt, {
              onSelected: () => {},
              className: ea().PickerContainer,
              children: (0, e.jsx)("div", {
                onClick: (N) => {
                  N.preventDefault(), N.stopPropagation();
                },
                children: (0, e.jsx)(Ze(), {
                  ref: b,
                  value: Y,
                  onChange: D,
                  dateFormat: "YYYY-MM",
                  timeFormat: !1,
                  closeOnSelect: !0,
                  isValidDate: y,
                  input: !1,
                  locale: "YearMonthPickerContextMenu",
                }),
              }),
            }),
          });
        }
        var aa = r(31032),
          Ft = r(47515),
          vt = r(85599),
          st = r(41672),
          na = r(27221),
          Re = r.n(na);
        const Xa = 25;
        function sa(m) {
          const {
              rgAppIDs: n,
              children: d,
              nMonth: g,
              bTallCapsule: h,
              bBlurCapsules: f,
            } = m,
            b = (0, ie.useMemo)(() => {
              let y = 0,
                D = [...n];
              for (; D.length < 25; ) D.push(n[y % n.length]), y++;
              return D.map((Y) => ke.A.Get().GetApp(Y)).filter(Boolean);
            }, [n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, Ae.A)({
                  [Re().ImagesCtn]: !0,
                  [Re().TallCapsules]: h,
                  [Re().BlurCapsules]: f,
                  [Re().AnnualChart]: !g,
                }),
                children: (0, e.jsx)("div", {
                  className: Re().AllImagesCtn,
                  children: (0, e.jsx)("div", {
                    className: Re().AllImages,
                    children: (0, e.jsx)("div", {
                      className: (0, Ae.A)({
                        [Re().ImageTint]: !0,
                        [`Month${g}`]: !0,
                        [Re().Wide2]: b.length <= 10,
                        [Re().Wide3]: b.length <= 20,
                      }),
                      children: b.map((y, D) =>
                        h
                          ? (0, e.jsx)(
                              "img",
                              { src: y.GetAssets().GetHeroCapsuleURL() },
                              "bg_" + y.GetAppID() + "+" + D,
                            )
                          : (0, e.jsx)(
                              "img",
                              { src: y.GetAssets().GetHeaderURL() },
                              "bg_" + y.GetAppID() + "+" + D,
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
        function xt(m) {
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
            f = new Date(
              d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            ),
            b = f.getMonth(),
            y = f.getFullYear(),
            D = f.getDate(),
            Y = f.getHours();
          let N, W;
          for (
            D > 15 || (D === 15 && Y >= 10) ? (N = b - 1) : (N = b - 2);
            N < 0;
          )
            (N += 12), (W = (W ?? y) - 1);
          W = W ?? y;
          const J = new Date(Date.UTC(W, N, 15, 17, 0));
          return Math.floor(J.getTime() / 1e3);
        }
        function Ea(m) {
          const [n, d] = m.split("_");
          let g = parseInt(d, 10),
            f = {
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
          if (f === void 0) return { dtMidMonth: null, dtTestMonth: null };
          let b = f,
            y = g;
          return (
            f == 11 ? ((b = 0), (y += 1)) : (b += 1),
            { dtMidMonth: new Date(g, f, 15), dtTestMonth: new Date(y, b, 15) }
          );
        }
        function Et(m, n) {
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
        var Be = r(21042),
          Ht = r(56330),
          ra = r(25679),
          se = r(98609),
          _e = r(41635),
          Ve = r(87853),
          yt = r.n(Ve);
        function Nt(m) {
          let n = yt().PlatinumSection;
          switch (m) {
            case te.s4.NH:
              n = yt().GoldSection;
              break;
            case te.s4.U1:
              n = yt().SilverSection;
              break;
            case te.s4.DB:
              n = yt().BronzeSection;
              break;
          }
          return n;
        }
        function oa(m, n, d, g, h, f, b, y) {
          n?.length > 25 &&
            m.jsondata.sale_sections.push({
              ...(0, Be.Sm)("items", "#Sale_default_label_148"),
              capsules: n.map((D) => ({
                id: D,
                type: g.has(D) ? "dlc" : "game",
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
              show_on_tabs: f ? [f] : void 0,
              prefer_assets_without_overrides: h,
              show_deck_compability_details: !!b,
              show_as_demos: !!y,
              prefer_demo_store_page: !!y,
            });
        }
        function ia(m, n, d, g, h, f, b, y) {
          if (se.iA.logged_in) {
            const D = ee.Fm.Get(),
              Y = n.filter((W) => D.BIsGameWishlisted(W));
            Y?.length > 0 &&
              m.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#Sale_OnWishlist"),
                capsules: Y.map((W) => ({
                  id: W,
                  type: g.has(W) ? "dlc" : "game",
                })),
                capsules_per_row_array: Y.length < 3 ? [2] : [5],
                carousel_rows: 1,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array: Y.length < 3 ? ["grid"] : ["tall"],
                random_from_entire_set: !0,
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!b,
                show_as_demos: !!y,
                prefer_demo_store_page: !!y,
              });
            const N = n.filter(
              (W) => D.BIsGameRecommended(W) && !D.BIsGameIgnored(W),
            );
            if (N?.length > 0) {
              const W = N.length;
              m.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#Sale_default_label_RecommendedForYou"),
                capsules: N.map((J) => ({
                  id: J,
                  type: g.has(J) ? "dlc" : "game",
                })),
                capsules_per_row_array: W == 2 ? [2] : [3, 2],
                carousel_rows: 2,
                show_as_carousel: !0,
                disable_background: !0,
                capsule_style_per_row_array:
                  W == 2 ? ["grid"] : ["tall", "grid"],
                show_on_tabs: f ? [f] : void 0,
                prefer_assets_without_overrides: h,
                show_deck_compability_details: !!b,
                show_as_demos: !!y,
                prefer_demo_store_page: !!y,
              });
            }
            if (!y) {
              const W = d.filter((J) => {
                if (!D.BIsGameOwned(J)) {
                  const he = ke.A.Get().GetApp(J);
                  return D.BIsGameOwned(he.GetParentAppID());
                }
                return !1;
              });
              W.length > 0 &&
                m.jsondata.sale_sections.push({
                  ...(0, Be.Sm)("dlc_for_you", "#Sale_default_label_246"),
                  capsules: W.map((J) => ({ id: J, type: "dlc" })),
                  dlc_for_you_data: {
                    group_by_parent_app: !0,
                    hide_dlc_stats: !0,
                    parent_app_page_size: 5,
                    hide_dlc_grouping: !0,
                  },
                  capsules_per_row_array: [3],
                  show_as_carousel: !0,
                  disable_background: !0,
                  show_on_tabs: f ? [f] : void 0,
                  prefer_assets_without_overrides: h,
                });
            }
          }
        }
        function ya(m, n) {
          const d = ee.Fm.Get(),
            g = [],
            h = [],
            f = [],
            b = [],
            y = [];
          for (const D of m)
            d.BIsGameIgnored(D) ||
              (d.BIsGameRecommended(D)
                ? g.push(D)
                : d.BIsGameWishlisted(D)
                  ? h.push(D)
                  : n[1]?.includes(D)
                    ? f.push(D)
                    : n[2]?.includes(D)
                      ? b.push(D)
                      : y.push(D));
          return [
            ...(0, _e.fW)(g),
            ...(0, _e.fW)(h),
            ...(0, _e.fW)(f),
            ...(0, _e.fW)(b),
            ...(0, _e.fW)(y),
          ];
        }
        function la(m, n, d, g, h, f, b, y) {
          m.jsondata.sale_sections.push({
            ...(0, Be.Sm)("trailercarousel", ""),
            capsules: ya(n, d).map((D) => ({
              id: D,
              type: g.has(D) ? "dlc" : "game",
            })),
            use_random_order: !1,
            disable_background: !0,
            trailer_carousel_auto_advance_msec: 1e4,
            show_on_tabs: f ? [f] : void 0,
            prefer_assets_without_overrides: h,
            show_deck_compability_details: !!b,
            show_as_demos: !!y,
            prefer_demo_store_page: !!y,
          });
        }
        var mt = r(50974);
        function Aa(m, n, d, g, h) {
          const f = (0, Be.U)(mt.wv, re.DRF, m, (0, We.sB)()),
            b = !1,
            y = [...h, ...d],
            D = new Set(h);
          if (
            ((f.jsondata.sale_sections = []),
            d.length > 9 && la(f, d, g, D, b),
            d?.length > 25)
          )
            for (let Y in g) {
              const N = g[Y];
              f.jsondata.sale_sections.push({
                ...(0, Be.Sm)("items", "#SteamCharts_Monthly_Rank_" + Y),
                capsules: N.map((W) => ({
                  id: W,
                  type: D.has(W) ? "dlc" : "game",
                })),
                capsules_per_row_array: [4],
                capsule_style_per_row_array: Y == "1" ? ["tall"] : ["grid"],
                show_as_carousel: !1,
                use_random_order: !0,
                border_width: 1,
                default_subtitle:
                  "#SteamCharts_Monthly_Rank_" + Y + "_subtitle",
                sale_section_classname: Nt(Number.parseInt(Y)),
                prefer_assets_without_overrides: b,
              });
            }
          else {
            const Y = Object.values(d).flat();
            f.jsondata.sale_sections.push({
              ...(0, Be.Sm)("items", "#SteamCharts_Monthly_Rank_All"),
              capsules: Y.map((N) => ({
                id: N,
                type: D.has(N) ? "dlc" : "game",
              })),
              capsules_per_row_array:
                d?.length > 9 ? (d?.length > 15 ? [3] : [2]) : [1],
              single_item_style: d?.length < 9 ? "library" : "bordered",
              show_as_carousel: !1,
              use_random_order: !0,
              sale_section_classname: yt().AllTiers,
              prefer_assets_without_overrides: b,
            });
          }
          return (
            ia(f, y, h, D, b),
            oa(f, d, n, D, b),
            f.jsondata.sale_sections.push({
              ...(0, Be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Be.r3)(),
            }),
            f
          );
        }
        function kt(m, n, d, g, h) {
          const { data: f } = (0, V.I)({
            queryKey: ["useMonthEventModel", m],
            queryFn: () => {
              try {
                return Aa(m, n, d, g, h);
              } catch (b) {
                return (
                  console.error(`Montly new release: ${m} failed: `, b), null
                );
              }
            },
          });
          return f;
        }
        function Da(m) {
          const {
              rgFilteredDLCsAppIDs: n,
              rgFilteredCombinedAppsAndDLC: d,
              promotionName: g,
              rgFilteredAppIDByTier: h,
              facets: f,
            } = m,
            b = kt(g, f, d, h, n),
            y = (0, re.sfN)(se.TS.LANGUAGE);
          return b
            ? (0, e.jsx)(ra._, {
                eventModel: b,
                language: y,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : b === null
              ? (0, e.jsx)("div", {
                  className: Ht.ErrorStylesWithIcon,
                  children: (0, ge.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(vt.t, {
                  string: (0, ge.we)("#Loading"),
                  position: "center",
                });
        }
        function ca(m, n, d, g) {
          (0, ie.useEffect)(() => {
            if (m == null && g != Oe.Sq && d) {
              const h = Sa(d);
              h?.length > 0
                ? ke.A.Get()
                    .HintLoadStoreApps(h, ut.Xh)
                    .then(() => n(h))
                : n([]);
            }
          }, [g, d, m, n]);
        }
        function Sa(m) {
          const n = ee.Fm.Get(),
            d = m
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
          return Array.from(new Set(d));
        }
        var we = r(19298),
          It = r(92757);
        const wa = ["topnewreleases", "bestofyear"];
        function Xe(m) {
          return m.split(/[?#]/)[0];
        }
        function Gt(m) {
          const n = Xe(m);
          return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
        }
        function Ot(m) {
          if (!m) return !1;
          const n = U.B.SteamCharts(),
            d = Xe(m);
          if (Gt(d) == Gt(n)) return !0;
          if (!d.startsWith(n)) return !1;
          const g = d.slice(n.length).split("/")[0];
          return !wa.includes(g);
        }
        function Qe() {
          const m = (0, It.W6)();
          return ie.useCallback(
            (n, d) => {
              if (Ot(n)) {
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
        var Wt = r(24660),
          Ue = r(4370);
        function da(m, n) {
          const d = Gt(window.location.pathname),
            g = Gt(m);
          return n ? d == g : d == g || d.startsWith(g + "/");
        }
        function bt(m) {
          const {
              to: n,
              exact: d,
              activeClassName: g,
              className: h,
              children: f,
              ...b
            } = m,
            y = typeof n == "string" ? n : void 0;
          return Ot(y)
            ? (0, e.jsx)(Wt.Ii, {
                href: y,
                className: (0, Ae.A)(h, da(y, !!d) ? g : void 0),
                ...b,
                children: f,
              })
            : (0, e.jsx)(Ue.A, {
                to: n,
                exact: d,
                activeClassName: g,
                className: h,
                ...b,
                children: f,
              });
        }
        function At(m) {
          const { to: n, children: d, ...g } = m,
            h = typeof n == "string" ? n : void 0;
          return Ot(h)
            ? (0, e.jsx)(Wt.Ii, { href: h, ...g, children: d })
            : (0, e.jsx)(Ue.X, { to: n, ...g, children: d });
        }
        function Rt(m) {
          const { salePageName: n, TopMonthlyReleasesStore: d } = m,
            g = (0, We.f1)(),
            { dtMidMonth: h, dtTestMonth: f } = Ea(n);
          return !h ||
            Math.floor(f.getTime() / 1e3) > g ||
            h.getFullYear() < Ut ||
            (h.getFullYear() == Ut && h.getMonth() < ua)
            ? (0, e.jsx)("div", {
                children: (0, ge.we)(
                  "#DateTimePicker_Fallback_Invalid_DateTime",
                ),
              })
            : (0, e.jsx)(Ba, {
                TopMonthlyReleasesStore: d,
                nMonth: h.getMonth(),
                nYear: h.getFullYear(),
                promotionName: n,
              });
        }
        const rt = { ...ut.Xh, apply_user_filters: !0 };
        function Ma(m, n, d, g) {
          const h = c(m, n, d),
            f = (0, ie.useMemo)(
              () =>
                h
                  ? Array.from(
                      new Set([
                        ...(h.top_dlc_releases?.map((N) => N.appid) || []),
                        ...(h.top_combined_app_and_dlc_releases?.map(
                          (N) => N.appid,
                        ) || []),
                      ]),
                    )
                  : (g && g(null), []),
              [h, g],
            ),
            b = (0, Oe.zX)(f, rt),
            y = (0, ie.useMemo)(
              () =>
                !h || b == Oe.Sq
                  ? []
                  : h.top_dlc_releases
                      ?.filter((N) => !ke.A.Get().BIsAppMissing(N.appid))
                      .map((N) => N.appid),
              [h, b],
            ),
            { rgFilteredCombinedAppsAndDLC: D, rgFilteredAppIDByTier: Y } = (0,
            ie.useMemo)(() => {
              if (!h || b == Oe.Sq)
                return {
                  rgFilteredCombinedAppsAndDLC: [],
                  rgFilteredAppIDByTier: [],
                };
              const N = h?.top_combined_app_and_dlc_releases || [],
                W = [];
              return {
                rgFilteredCombinedAppsAndDLC: N.filter(
                  (he) => !ke.A.Get().BIsAppMissing(he.appid),
                ).map((he) => {
                  const de = he.app_release_rank;
                  return W[de] || (W[de] = []), W[de].push(he.appid), he.appid;
                }),
                rgFilteredAppIDByTier: W,
              };
            }, [b, h]);
          return {
            rgAppIDs: f,
            rgMonthlyReleases: h,
            rgFilteredAppIDByTier: Y,
            rgFilteredCombinedAppsAndDLC: D,
            rgFilteredDLCsAppIDs: y,
            loadState: b,
          };
        }
        function Ba(m) {
          const {
              TopMonthlyReleasesStore: n,
              nYear: d,
              nMonth: g,
              promotionName: h,
            } = m,
            [f, b] = (0, ie.useState)(null),
            [y, D] = (0, ie.useState)(null),
            {
              rgAppIDs: Y,
              rgMonthlyReleases: N,
              rgFilteredAppIDByTier: W,
              rgFilteredCombinedAppsAndDLC: J,
              rgFilteredDLCsAppIDs: he,
              loadState: de,
            } = Ma(n, d, g);
          return (
            (0, ie.useEffect)(() => {
              f ||
                (0, Ct.$R)({ bForceFeatureTagForFullController: !1 }).then(b);
            }, [f]),
            ca(y, D, he, de),
            !N || de == Oe.Sq || !f || y == null || !Y
              ? (0, e.jsxs)(we.Z, {
                  className: Ge().ChartPage,
                  children: [
                    (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                    (0, e.jsx)(vt.t, {
                      string: (0, ge.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : Y.length == 0
                ? (0, e.jsxs)(we.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                      (0, e.jsx)("div", {
                        className: Ge().NoticeBox,
                        children: (0, ge.we)(
                          N.bSQLError
                            ? "#Error_ErrorCommunicatingWithNetwork"
                            : "#SteamCharts_NewMonth_NoRelease",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(we.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(sa, {
                        rgAppIDs: J,
                        nMonth: g,
                        bBlurCapsules: !0,
                        children: (0, e.jsx)(ot, { nMonth: g, nYear: d }),
                      }),
                      (0, e.jsx)(Da, {
                        promotionName: h,
                        rgFilteredCombinedAppsAndDLC: J,
                        rgFilteredAppIDByTier: W,
                        rgFilteredDLCsAppIDs: he,
                        facets: f,
                      }),
                    ],
                  })
          );
        }
        function Yt(m, n) {
          return (0, ge.we)(
            "#SteamCharts_Monthly_Title_wMonthAndYear",
            (0, ge.we)("#Sale_Reservation_MonthNoun_" + (m + 1)),
            n,
          );
        }
        const Ut = 2003,
          ua = 8,
          ze = 1063584e3;
        function ot(m) {
          const { nMonth: n, nYear: d } = m,
            g = Qe(),
            h = (0, aa.yk)() || (0, Ft.tx)(window),
            f = (0, We.f1)(),
            b = n > 0 ? d : d - 1,
            y = n > 0 ? n - 1 : 11,
            D = Et(b, y),
            Y = d > Ut || n > ua,
            N = n < 11 ? d : d + 1,
            W = n < 11 ? n + 1 : 0,
            J = Et(N, W),
            he = new Date(W == 11 ? d + 1 : d, W == 11 ? 0 : W + 1, 15),
            de = Math.floor(he.getTime() / 1e3) < f,
            Se = (0, ie.useCallback)(
              (Ke) => {
                h.active_modal ||
                  (Ke && de
                    ? g(me.TopNewReleases(J))
                    : !Ke && Y && g(me.TopNewReleases(D)));
              },
              [h.active_modal, de, Y, g, J, D],
            );
          return (
            (0, st.E)("ArrowLeft", () => Se(!1), !0, !0),
            (0, st.E)("Left", () => Se(!1), !0, !0),
            (0, st.E)("ArrowRight", () => Se(!0), !0, !0),
            (0, st.E)("Right", () => Se(!0), !0, !0),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, Ae.A)(S().HeaderCtn, S().WithSubtitle),
                  children: (0, e.jsx)("h1", { children: Yt(n, d) }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, Ae.A)(S().PageSubtitle),
                  children: [
                    (0, ge.we)("#SteamCharts_Monthly_SubTitle", Ie(d)),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("span", {
                      children: (0, ge.we)(
                        "#SteamCharts_Monthly_PublishSchedule",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)(we.Z, {
                  className: (0, Ae.A)(S().ChartRangeCtn),
                  children: [
                    (0, e.jsx)(ye.Gq, {
                      toolTipContent: Yt(y, b),
                      children: (0, e.jsx)("div", {
                        className: (0, Ae.A)({
                          [S().ChartNavCtn]: !0,
                          [S().Disabled]: !Y,
                        }),
                        children: Y
                          ? (0, e.jsx)(At, {
                              to: Y ? me.TopNewReleases(D) : void 0,
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
                    (0, e.jsx)(ye.Gq, {
                      toolTipContent: Yt(W, N),
                      children: (0, e.jsx)("div", {
                        className: (0, Ae.A)({
                          [S().ChartNavCtn]: !0,
                          [S().Disabled]: !de,
                        }),
                        children: de
                          ? (0, e.jsx)(At, {
                              to: me.TopNewReleases(J),
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
                    (0, e.jsx)(nt, {
                      toolTipContent: (0, ge.we)(
                        "#SteamCharts_Monthly_Calendar",
                      ),
                      minDate: ze,
                      maxDate: xt(f),
                      value: Math.floor(
                        new Date(d, n, 15, 12, 0, 0).getTime() / 1e3,
                      ),
                      fnOnUpdate: (Ke) => {
                        const xa = new Date(Ke * 1e3),
                          Va = Et(xa.getFullYear(), xa.getMonth());
                        g(me.TopNewReleases(Va));
                      },
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function zt(m) {
          if (!m) return "";
          const n = new Date(m * 1e3);
          return `${n.getUTCFullYear()}-${n.getUTCMonth() + 1}-${n.getUTCDate()}`;
        }
        function ga(m) {
          return m || "global";
        }
        var et = r(25792),
          Vt = r(27638),
          La = r(77187),
          Ta = r(65946);
        const Dt = 2,
          Pa = 60,
          ma = 2022;
        function Na(m, n) {
          const d = new Date(m * 1e3),
            g = "America/Los_Angeles",
            h = Number(
              new Intl.DateTimeFormat("en-US", {
                timeZone: g,
                year: "numeric",
              }).format(d),
            ),
            b =
              new Date(
                new Intl.DateTimeFormat("en-US", {
                  timeZone: g,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                  .formatToParts(new Date(Date.UTC(h, 11, 31)))
                  .reduce((y, D) => ((y[D.type] = D.value), y), {}).year +
                  "-12-31T10:00:00",
              ).getTime() -
              n * 24 * 60 * 60 * 1e3;
          return d.getTime() >= b;
        }
        function St(m, n, d) {
          const g = n * 1e3,
            f = new Date(g).getUTCFullYear();
          return (
            m >= ma &&
            m < f + 1 &&
            (m != f || (d && se.iA.is_support && Na(n, Pa)) || Na(n, Dt))
          );
        }
        function Ja(m, n) {
          const d = new Date().getUTCFullYear(),
            g = [];
          for (let h = d, f = 0; h >= ma && f < n; h--, f++)
            St(h, m, !1) ? g.push(h) : f--;
          return g;
        }
        var Kt = r(22275);
        function _t(m) {
          const {
            TopSellersStore: n,
            TopMonthlyReleasesStore: d,
            DynamicUserStore: g,
            children: h,
          } = m;
          (0, Vt.Y)(S().SteamChartsPage);
          const f = ka(g);
          let b = ie.useMemo(() => ({ content_descriptors_excluded: f }), [f]);
          const y = ie.useRef(null);
          return (
            ie.useEffect(() => {
              y.current && y.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsxs)(we.Z, {
              className: S().SteamChartsRootPanel,
              navRef: y,
              children: [
                (0, e.jsx)("div", {
                  className: S().SteamChartsRootPosition,
                  children: (0, e.jsx)("div", {
                    className: S().AlignWithMenu,
                    children: (0, e.jsxs)(we.Z, {
                      className: S().SteamChartsMenu,
                      children: [
                        (0, e.jsx)(we.Z, {
                          className: S().MenuGroup,
                          children: (0, e.jsx)("div", {
                            className: S().MenuLinks,
                            children: (0, e.jsxs)(bt, {
                              to: me.Overview(),
                              exact: !0,
                              activeClassName: S().ActiveLink,
                              children: [
                                (0, e.jsx)("span", {
                                  className: (0, Ae.A)(S().MenuItemIcon),
                                  children: (0, e.jsx)(Ye.ww0, {}),
                                }),
                                (0, ge.we)("#SteamCharts_Menu_Overview"),
                              ],
                            }),
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(wt, {}) }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Ga, { TopSellersStore: n }),
                        }),
                        (0, e.jsx)(et.tH, {
                          children: (0, e.jsx)(Oa, {
                            TopMonthlyReleasesStore: d,
                          }),
                        }),
                        (0, e.jsx)(et.tH, { children: (0, e.jsx)(Pe, {}) }),
                      ],
                    }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: (0, Ae.A)(
                    S().SteamChartsShell,
                    "SteamChartsShell",
                  ),
                  children: (0, e.jsx)("div", {
                    className: S().SteamChartsContent,
                    children: (0, e.jsx)(La.E2, {
                      defaultOptions: b,
                      children: (0, e.jsx)(et.tH, { children: h }),
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function ka(m) {
          return (0, Ta.q3)(() => m.ExcludedContentDescriptor);
        }
        function wt() {
          return (0, e.jsxs)(we.Z, {
            className: S().MenuGroup,
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_LiveCharts"),
              }),
              (0, e.jsxs)(we.Z, {
                className: S().MenuLinks,
                children: [
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: me.TopSelling(Z.TS.COUNTRY),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.t1X, {}),
                      (0, ge.we)("#SteamCharts_Menu_TopSelling"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: me.MostPlayed(),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.N3h, {}),
                      (0, ge.we)("#SteamCharts_Menu_MostPlayed"),
                    ],
                  }),
                  (0, e.jsxs)(bt, {
                    className: S().MenuItemIcon,
                    to: me.MostPlayedOnSteamDeck(),
                    activeClassName: S().ActiveLink,
                    children: [
                      (0, e.jsx)(Ye.lRD, {}),
                      (0, ge.we)("#SteamCharts_Menu_MostPlayedOnDeck"),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ga(m) {
          const { TopSellersStore: n } = m,
            { rtCurrentWeek: d, bCountryListInitialized: g } = L(
              n,
              Z.TS.COUNTRY,
            );
          if (!d || !g) return null;
          const h = ga(
            n.BIsValidTopSellersCountry(Z.TS.COUNTRY) ? Z.TS.COUNTRY : "",
          );
          let f = [];
          for (let b = 0; b < 3; b++) {
            const y = d - b * 60 * 60 * 24 * 7;
            f.push(
              (0, e.jsxs)(
                bt,
                {
                  to: me.TopSellers(h, zt(y)),
                  activeClassName: S().ActiveLink,
                  fnCanTakeFocus: Kt.Nw,
                  children: [
                    (0, e.jsx)("span", {
                      className: (0, Ae.A)(S().MenuItemIcon),
                      children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
                    }),
                    (0, ge.$z)(y, { timeZone: "UTC" }),
                  ],
                },
                y,
              ),
            );
          }
          return (0, e.jsxs)(we.Z, {
            className: (0, Ae.A)(S().MenuGroup, S().Weekly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_WeeklyCharts"),
              }),
              (0, e.jsx)(we.Z, { className: S().MenuLinks, children: f }),
            ],
          });
        }
        function Oa(m) {
          const n = (0, We.f1)(),
            d = xt(n),
            g = [d, d - 720 * 60 * 60, d - 1440 * 60 * 60];
          return (0, e.jsxs)(we.Z, {
            className: (0, Ae.A)(S().MenuGroup, S().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_MonthlyCharts"),
              }),
              (0, e.jsx)(we.Z, {
                className: S().MenuLinks,
                children: g.map((h) => {
                  const f = new Date(h * 1e3),
                    b = Et(f.getFullYear(), f.getMonth()),
                    y = me.TopNewReleases(b),
                    D = window.location.pathname === y;
                  return (0, e.jsxs)(
                    bt,
                    {
                      className: D ? S().ActiveLink : "",
                      to: y,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, Ae.A)(S().MenuItemIcon),
                          children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
                        }),
                        (0, Pt.CC)(h),
                      ],
                    },
                    "month_" + h,
                  );
                }),
              }),
            ],
          });
        }
        function Pe(m) {
          const n = (0, We.f1)(),
            d = (0, ie.useMemo)(() => Ja(n, 3), [n]);
          return (0, e.jsxs)(we.Z, {
            className: (0, Ae.A)(S().MenuGroup, S().Monthly),
            children: [
              (0, e.jsx)("div", {
                className: S().MenuHeader,
                children: (0, ge.we)("#SteamCharts_Menu_YearlyCharts"),
              }),
              (0, e.jsx)(we.Z, {
                className: S().MenuLinks,
                children: d.map((g) => {
                  const h = me.BestOfYear("" + g),
                    f = window.location.pathname === h;
                  return (0, e.jsxs)(
                    At,
                    {
                      className: (0, Ae.A)(f ? S().ActiveLink : ""),
                      to: h,
                      fnCanTakeFocus: Kt.Nw,
                      children: [
                        (0, e.jsx)("span", {
                          className: (0, Ae.A)(S().MenuItemIcon),
                          children: (0, e.jsx)(Ye.VvS, { color: "#C3D3D8" }),
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
        var ha = r(68312),
          Zt = r(51079),
          Ra = r(179);
        function $a(m, n, d) {
          const g = (0, Be.U)(mt.yT, re.DRF, "" + m, (0, We.sB)()),
            h = !0,
            f = { ...(0, Be.Sm)("tabs", ""), tabs: [] };
          return (
            d.forEach((b, y) => {
              f.tabs.push({
                unique_id: y + 1,
                default_label: b.strTabTitleToken,
                localized_label: [],
                capsules: [],
              });
            }),
            (g.jsondata.sale_sections = [f]),
            d.forEach((b, y) => {
              const {
                  rgFilteredCombinedAppsAndDLC: D,
                  rgFilteredAppIDByTier: Y,
                  rgFilteredDLCsAppIDs: N,
                } = b,
                W = new Set(N),
                J = [...N, ...D];
              g.jsondata.sale_sections.push({
                ...(0, Be.Sm)("text_section", ""),
                text_section_contents: [
                  (0, ge.we)(b.strTabSubTitleToken, m, m + 1),
                ],
                show_on_tabs: [y + 1],
                show_deck_compability_details: !!b.bShowDeckCompat,
                prefer_assets_without_overrides: h,
              });
              for (let he in Y) {
                const de = Y[he];
                g.jsondata.sale_sections.push({
                  ...(0, Be.Sm)("items", "#SteamCharts_Yearly_Rank_" + he),
                  capsules: de.map((Se) => ({
                    id: Se,
                    type: W.has(Se) ? "dlc" : "game",
                  })),
                  capsules_per_row_array:
                    he == "3" ? [4] : he == "0" ? [4] : [3],
                  capsule_style_per_row_array: he == "0" ? ["tall"] : ["grid"],
                  show_as_carousel: !1,
                  use_random_order: !0,
                  border_width: 1,
                  default_subtitle:
                    "#SteamCharts_Yearly_Rank_" + he + "_subtitle",
                  show_on_tabs: [f.tabs[y].unique_id],
                  sale_section_classname: Nt(Number.parseInt(he)),
                  prefer_assets_without_overrides: h,
                  show_deck_compability_details: !!b.bShowDeckCompat,
                  show_as_demos: !!b.bShowDemoInfo,
                  prefer_demo_store_page: !!b.bShowDemoInfo,
                });
              }
              ia(
                g,
                J,
                N,
                W,
                h,
                f.tabs[y].unique_id,
                !!b.bShowDeckCompat,
                !!b.bShowDemoInfo,
              ),
                la(
                  g,
                  D,
                  Y,
                  W,
                  h,
                  f.tabs[y].unique_id,
                  !!b.bShowDeckCompat,
                  !!b.bShowDemoInfo,
                ),
                oa(
                  g,
                  D,
                  n,
                  W,
                  h,
                  f.tabs[y].unique_id,
                  !!b.bShowDeckCompat,
                  !!b.bShowDemoInfo,
                );
            }),
            g.jsondata.sale_sections.push({
              ...(0, Be.Sm)("text_section", ""),
              text_section_contents: [
                (0, ge.we)("#SteamCharts_Yearly_FAQ") +
                  `
[url=${se.TS.HELP_BASE_URL}faqs/view/6C17-2BC1-2A01-9B76]${(0, ge.we)("#SteamCharts_Yearly_FAQ_link")}[/url]`,
              ],
            }),
            g.jsondata.sale_sections.push({
              ...(0, Be.Sm)(
                "social_share",
                "#EventDisplay_Share_WithFriendsHeader",
              ),
              social_share: (0, Be.r3)(),
            }),
            g
          );
        }
        function pa(m, n, d) {
          const { data: g } = (0, V.I)({
            queryKey: ["useYearEventModel", m],
            queryFn: () => {
              try {
                return $a(m, n, d);
              } catch (h) {
                return (
                  console.error(`Yearly new release: ${m} failed: `, h), null
                );
              }
            },
          });
          return g;
        }
        function Ua(m) {
          const { rgTabsData: n, nYear: d, facets: g } = m,
            h = pa(d, g, n),
            f = (0, re.sfN)(se.TS.LANGUAGE);
          return h
            ? (0, e.jsx)(ra._, {
                eventModel: h,
                language: f,
                bIsPreview: !1,
                bDynamicallyCreatedSale: !0,
              })
            : h === null
              ? (0, e.jsx)("div", {
                  className: Ht.ErrorStylesWithIcon,
                  children: (0, ge.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : (0, e.jsx)(vt.t, {
                  string: (0, ge.we)("#Loading"),
                  position: "center",
                });
        }
        function za(m) {
          const { salePageName: n, TopYearlyReleasesStore: d } = m,
            g = (0, We.f1)(),
            h = Number.parseInt(n),
            f = Qe();
          return St(h, g, !0)
            ? (0, e.jsx)(qa, { nYear: h, TopYearlyReleasesStore: d })
            : (f(me.Overview(), { bReplace: !0 }),
              (0, e.jsx)("div", {
                children: (0, ge.we)("#SteamCharts_Yearly_Unavailable"),
              }));
        }
        const Fa = {
          ...ut.Xh,
          apply_user_filters: !0,
          include_assets_without_overrides: !0,
        };
        function jt(m, n, d, g) {
          const h = g?.filter((D) => D.type == m),
            f = [],
            b = [],
            y = h
              ?.filter((D) => !ke.A.Get().BIsAppMissing(D.appid))
              .map((D) => {
                let Y = D.app_release_rank;
                return (
                  Y == te.s4.xE && (Y = 0),
                  f[Y] || (f[Y] = []),
                  f[Y].push(D.appid),
                  ke.A.Get().GetApp(D.appid)?.GetAppType() == v.uE._i &&
                    b.push(D.appid),
                  D.appid
                );
              });
          return {
            strTabTitleToken: n,
            strTabSubTitleToken: d,
            rgFilteredCombinedAppsAndDLC: y,
            rgFilteredAppIDByTier: f,
            rgFilteredDLCsAppIDs: b,
          };
        }
        function Mt(m, n) {
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
            f = (y) => Number(h.find((D) => D.type === y).value),
            b = Date.UTC(
              f("year"),
              f("month") - 1,
              f("day"),
              f("hour"),
              f("minute"),
              f("second"),
            );
          return Math.floor(b / 1e3);
        }
        function fa(m, n, d) {
          const g = (0, We.f1)(),
            h = g < Mt(n, 1),
            f = g < Mt(n, 15),
            b = ct(m, n),
            y = (0, ie.useMemo)(
              () =>
                b
                  ? Array.from(
                      new Set([
                        ...(b.top_dlc_releases?.map((N) => N.appid) || []),
                        ...(b.top_combined_app_and_dlc_releases?.map(
                          (N) => N.appid,
                        ) || []),
                        ...(b.top_app_list?.map((N) => N.appid) || []),
                      ]),
                    )
                  : (d && d(null), []),
              [b, d],
            ),
            D = (0, Oe.zX)(y, Fa),
            Y = (0, ie.useMemo)(() => {
              if (!b || D == Oe.Sq) return [];
              const N = b?.top_combined_app_and_dlc_releases || [],
                W = [],
                J = N.filter((Se) => !ke.A.Get().BIsAppMissing(Se.appid)).map(
                  (Se) => {
                    let Ke = Se.app_release_rank;
                    return (
                      Ke == te.s4.xE && (Ke = 0),
                      W[Ke] || (W[Ke] = []),
                      W[Ke].push(Se.appid),
                      Se.appid
                    );
                  },
                );
              let he = [
                  {
                    strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                    strTabSubTitleToken: f
                      ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                      : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                    rgFilteredDLCsAppIDs:
                      b.top_dlc_releases
                        ?.filter((Se) => !ke.A.Get().BIsAppMissing(Se.appid))
                        .map((Se) => Se.appid) || [],
                    rgFilteredCombinedAppsAndDLC: J,
                    rgFilteredAppIDByTier: W,
                  },
                ],
                de = jt(
                  te.Cm.Hm,
                  "#SteamCharts_Yearly_Tab_TopSellers",
                  h
                    ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                    : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                  b.top_app_list,
                );
              return (
                de.rgFilteredCombinedAppsAndDLC?.length > 0 && he.push(de),
                (de = jt(
                  te.Cm.UM,
                  "#SteamCharts_Yearly_Tab_MostPlayed",
                  "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                  b.top_app_list,
                )),
                de.rgFilteredCombinedAppsAndDLC?.length > 0 && he.push(de),
                (de = jt(
                  te.Cm.IJ,
                  "#SteamCharts_Yearly_Tab_SteamDeck",
                  "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                  b.top_app_list,
                )),
                de.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((de.bShowDeckCompat = !0), he.push(de)),
                (de = jt(
                  te.Cm.lu,
                  "#SteamCharts_Yearly_Tab_Controller",
                  "#SteamCharts_Yearly_Tab_Controller_desc",
                  b.top_app_list,
                )),
                de.rgFilteredCombinedAppsAndDLC?.length > 0 && he.push(de),
                (de = jt(
                  te.Cm.$L,
                  "#SteamCharts_Yearly_Tab_VR",
                  "#SteamCharts_Yearly_Tab_VR_desc",
                  b.top_app_list,
                )),
                de.rgFilteredCombinedAppsAndDLC?.length > 0 && he.push(de),
                (de = jt(
                  te.Cm.e,
                  "#SteamCharts_Yearly_Tab_Demo",
                  "#SteamCharts_Yearly_Tab_Demo_desc",
                  b.top_app_list,
                )),
                de.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                  ((de.bShowDemoInfo = !0), he.push(de)),
                he
              );
            }, [b, D, h, f]);
          return {
            rgAppIDs: y,
            rgYearlyReleases: b,
            rgTabsData: Y,
            loadState: D,
          };
        }
        function qa(m) {
          const { nYear: n, TopYearlyReleasesStore: d } = m,
            [g, h] = (0, ie.useState)(null),
            [f, b] = (0, ie.useState)(null),
            {
              rgAppIDs: y,
              rgYearlyReleases: D,
              rgTabsData: Y,
              loadState: N,
            } = fa(d, n);
          return (
            (0, ie.useEffect)(() => {
              f ||
                (0, Ct.$R)({ bForceFeatureTagForFullController: !1 }).then(b);
            }, [f]),
            ca(g, h, Y?.[0]?.rgFilteredDLCsAppIDs, N),
            !D || N == Oe.Sq || !f || g == null || !y
              ? (0, e.jsxs)(we.Z, {
                  className: Ge().ChartPage,
                  children: [
                    (0, e.jsx)(Qt, { nYear: n }),
                    (0, e.jsx)(vt.t, {
                      string: (0, ge.we)("#Loading"),
                      position: "center",
                    }),
                  ],
                })
              : y.length == 0
                ? (0, e.jsxs)(we.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(Qt, { nYear: n }),
                      (0, e.jsx)("div", {
                        className: Ge().NoticeBox,
                        children: (0, ge.we)(
                          "#Error_ErrorCommunicatingWithNetwork",
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)(we.Z, {
                    className: Ge().ChartPage,
                    children: [
                      (0, e.jsx)(sa, {
                        rgAppIDs: Y[0].rgFilteredCombinedAppsAndDLC,
                        bTallCapsule: !0,
                        bBlurCapsules: !1,
                        children: (0, e.jsx)(Qt, { nYear: n }),
                      }),
                      (0, e.jsx)(Ua, { facets: f, nYear: n, rgTabsData: Y }),
                    ],
                  })
          );
        }
        function Qt(m) {
          const { nYear: n } = m,
            d = Qe(),
            g = (0, We.f1)(),
            [h] = (0, Ra.QD)("tab", 1),
            f = n + 1,
            b = St(f, g, !0),
            y = n - 1,
            D = St(y, g, !0),
            Y = (0, aa.yk)() || (0, Ft.tx)(window),
            N = (0, ie.useCallback)(
              (J) => {
                Y.active_modal ||
                  (J && b
                    ? d(me.BestOfYear("" + f))
                    : !J && D && d(me.BestOfYear("" + y)));
              },
              [Y.active_modal, b, D, d, f, y],
            );
          (0, st.E)("ArrowLeft", () => N(!1), !0, !0),
            (0, st.E)("Left", () => N(!1), !0, !0),
            (0, st.E)("ArrowRight", () => N(!0), !0, !0),
            (0, st.E)("Right", () => N(!0), !0, !0);
          const W = h != 1 ? `?tab=${h}` : "";
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
                    className: (0, Ae.A)(S().HeaderCtn, S().WithSubtitle),
                    children: (0, e.jsx)("h1", {
                      children: (0, ge.we)("#SteamCharts_Yearly_Title", n),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, Ae.A)(S().PageSubtitle),
                    children: [
                      (0, ge.we)("#SteamCharts_Yearly_SubTitle", 100),
                      (0, e.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)(we.Z, {
                className: (0, Ae.A)(S().ChartRangeCtn, S().AnnualChart),
                children: [
                  (0, e.jsx)(ye.Gq, {
                    toolTipContent: (0, ge.we)("#SteamCharts_Yearly_Title", y),
                    children: (0, e.jsx)("div", {
                      className: (0, Ae.A)({
                        [S().ChartNavCtn]: !0,
                        [S().Disabled]: !D,
                      }),
                      children: D
                        ? (0, e.jsx)(At, {
                            to: me.BestOfYear("" + y) + W,
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
                  (0, e.jsx)(ye.Gq, {
                    toolTipContent: (0, ge.we)("#SteamCharts_Yearly_Title", f),
                    children: (0, e.jsx)("div", {
                      className: (0, Ae.A)({
                        [S().ChartNavCtn]: !0,
                        [S().Disabled]: !b,
                      }),
                      children: b
                        ? (0, e.jsx)(At, {
                            to: me.BestOfYear("" + f) + W,
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
        var Ha = r(90783);
        const me = {
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
        async function va(m, n) {
          const d = new dt();
          return await d.Initialize(m, n), d;
        }
        function Wa(m) {
          const [n, d] = (0, ie.useState)(void 0),
            g = (0, ha.TR)(),
            h = (0, ha.rX)();
          if (
            ((0, ie.useEffect)(() => {
              va(g, h).then((N) => d(N));
            }, [g, h]),
            !n)
          )
            return null;
          const f = me,
            {
              TopSellersStore: b,
              DynamicUserStore: y,
              TopMonthlyReleasesStore: D,
              TopYearlyReleasesStore: Y,
            } = n;
          return (0, e.jsxs)(_t, {
            TopSellersStore: b,
            DynamicUserStore: y,
            TopMonthlyReleasesStore: D,
            children: [
              (0, e.jsx)(Ya, {}),
              (0, e.jsx)(Zt.Ay, {
                domain: "store.steampowered.com",
                controller: "steamcharts",
                children: (0, e.jsx)(ie.Suspense, {
                  fallback: null,
                  children: (0, e.jsxs)(It.dO, {
                    children: [
                      (0, e.jsx)(It.qh, {
                        path: `${f.TopNewReleases(":salePagename")}`,
                        render: (N) => {
                          const {
                            match: {
                              params: { salePagename: W },
                            },
                          } = N;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "monthlytopreleases",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(Rt, {
                                salePageName: W,
                                TopMonthlyReleasesStore: D,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(It.qh, {
                        path: `${f.BestOfYear(":salePagename")}`,
                        render: (N) => {
                          const {
                            match: {
                              params: { salePagename: W },
                            },
                          } = N;
                          return (0, e.jsx)(Zt.Ay, {
                            method: "bestofyear",
                            children: (0, e.jsx)(et.tH, {
                              children: (0, e.jsx)(za, {
                                salePageName: W,
                                TopYearlyReleasesStore: Y,
                              }),
                            }),
                          });
                        },
                      }),
                      (0, e.jsx)(It.qh, { children: (0, e.jsx)(Ha.a, {}) }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Ya() {
          const { pathname: m } = (0, It.zy)();
          return (
            ie.useEffect(() => {
              typeof window.ScrollToTopStoreMobileAware < "u"
                ? window.ScrollToTopStoreMobileAware()
                : window.scrollTo(0, 0);
            }, [m]),
            null
          );
        }
      },
      21895: (O) => {
        O.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (O) => {
        O.exports = {
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
      50909: (O) => {
        O.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (O) => {
        O.exports = {
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
      71347: (O) => {
        O.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (O) => {
        O.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (O) => {
        O.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      95863: (O) => {
        O.exports = {
          narrowWidth: "500px",
          CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
          PickerContainer: "_3YV5gmu_9QoN0IYGWX7N0E",
        };
      },
      17618: (O) => {
        O.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      32190: (O) => {
        O.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (O) => {
        O.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (O) => {
        O.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (O) => {
        O.exports = {
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
      9709: (O) => {
        O.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (O) => {
        O.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (O) => {
        O.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (O) => {
        O.exports = {
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
      25359: (O) => {
        O.exports = {
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
      79949: (O) => {
        O.exports = {
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
      15496: (O) => {
        O.exports = {
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
      64734: (O) => {
        O.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      89921: (O) => {
        O.exports = {
          ChartPage: "_1A7NagdRz58_o8HPHMa3eE",
          NoticeBox: "Wz_vOPow_bEtEb4cgCPEi",
        };
      },
      27221: (O) => {
        O.exports = {
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
      87853: (O) => {
        O.exports = {
          PlatinumSection: "_2M6w2tE1mq1K57VNXnkzkT",
          GoldSection: "_2XQYX2jtslkhZFeU8dsDIp",
          SilverSection: "_2KzJEuTfwQGu9Qw4v4HY7R",
          BronzeSection: "aAu4zZKXrAiL6gzPT_bZG",
          AllTiers: "_3MBqFIUsuhw30AtrWEE_mX",
        };
      },
      74812: (O) => {
        O.exports = {
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
      17083: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { N_: () => G, k2: () => xe });
        var e = r(92757),
          U = r(42891),
          V = r(90626),
          re = r(29248),
          ae = r(58584),
          ne = r(81115),
          le = r(68841),
          K = (function (L) {
            (0, U.A)(ee, L);
            function ee() {
              for (
                var Ie, oe = arguments.length, Ee = new Array(oe), c = 0;
                c < oe;
                c++
              )
                Ee[c] = arguments[c];
              return (
                (Ie = L.call.apply(L, [this].concat(Ee)) || this),
                (Ie.history = (0, re.zR)(Ie.props)),
                Ie
              );
            }
            var te = ee.prototype;
            return (
              (te.render = function () {
                return V.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(V.Component),
          j = (function (L) {
            (0, U.A)(ee, L);
            function ee() {
              for (
                var Ie, oe = arguments.length, Ee = new Array(oe), c = 0;
                c < oe;
                c++
              )
                Ee[c] = arguments[c];
              return (
                (Ie = L.call.apply(L, [this].concat(Ee)) || this),
                (Ie.history = (0, re.TM)(Ie.props)),
                Ie
              );
            }
            var te = ee.prototype;
            return (
              (te.render = function () {
                return V.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              ee
            );
          })(V.Component),
          v = function (ee, te) {
            return typeof ee == "function" ? ee(te) : ee;
          },
          M = function (ee, te) {
            return typeof ee == "string" ? (0, re.yJ)(ee, null, null, te) : ee;
          },
          z = function (ee) {
            return ee;
          },
          X = V.forwardRef;
        typeof X > "u" && (X = z);
        function E(L) {
          return !!(L.metaKey || L.altKey || L.ctrlKey || L.shiftKey);
        }
        var B = X(function (L, ee) {
            var te = L.innerRef,
              Ie = L.navigate,
              oe = L.onClick,
              Ee = (0, ne.A)(L, ["innerRef", "navigate", "onClick"]),
              c = Ee.target,
              Me = (0, ae.A)({}, Ee, {
                onClick: function (Ne) {
                  try {
                    oe && oe(Ne);
                  } catch (tt) {
                    throw (Ne.preventDefault(), tt);
                  }
                  !Ne.defaultPrevented &&
                    Ne.button === 0 &&
                    (!c || c === "_self") &&
                    !E(Ne) &&
                    (Ne.preventDefault(), Ie());
                },
              });
            return (
              z !== X ? (Me.ref = ee || te) : (Me.ref = te),
              V.createElement("a", Me)
            );
          }),
          G = X(function (L, ee) {
            var te = L.component,
              Ie = te === void 0 ? B : te,
              oe = L.replace,
              Ee = L.to,
              c = L.innerRef,
              Me = (0, ne.A)(L, ["component", "replace", "to", "innerRef"]);
            return V.createElement(e.XZ.Consumer, null, function (He) {
              He || (0, le.A)(!1);
              var Ne = He.history,
                tt = M(v(Ee, He.location), He.location),
                ct = tt ? Ne.createHref(tt) : "",
                dt = (0, ae.A)({}, Me, {
                  href: ct,
                  navigate: function () {
                    var at = v(Ee, He.location),
                      Ge = (0, re.AO)(He.location) === (0, re.AO)(M(at)),
                      pt = oe || Ge ? Ne.replace : Ne.push;
                    pt(at);
                  },
                });
              return (
                z !== X ? (dt.ref = ee || c) : (dt.innerRef = c),
                V.createElement(Ie, dt)
              );
            });
          });
        if (0) var k, q;
        var je = function (ee) {
            return ee;
          },
          Z = V.forwardRef;
        typeof Z > "u" && (Z = je);
        function ce() {
          for (
            var L = arguments.length, ee = new Array(L), te = 0;
            te < L;
            te++
          )
            ee[te] = arguments[te];
          return ee
            .filter(function (Ie) {
              return Ie;
            })
            .join(" ");
        }
        var xe = Z(function (L, ee) {
          var te = L["aria-current"],
            Ie = te === void 0 ? "page" : te,
            oe = L.activeClassName,
            Ee = oe === void 0 ? "active" : oe,
            c = L.activeStyle,
            Me = L.className,
            He = L.exact,
            Ne = L.isActive,
            tt = L.location,
            ct = L.sensitive,
            dt = L.strict,
            ht = L.style,
            at = L.to,
            Ge = L.innerRef,
            pt = (0, ne.A)(L, [
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
            var ie = tt || S.location,
              ut = M(v(at, ie), ie),
              We = ut.pathname,
              Ct = We && We.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              ke = Ct
                ? (0, e.B6)(ie.pathname, {
                    path: Ct,
                    exact: He,
                    sensitive: ct,
                    strict: dt,
                  })
                : null,
              Oe = !!(Ne ? Ne(ke, ie) : ke),
              Ye = typeof Me == "function" ? Me(Oe) : Me,
              qe = typeof ht == "function" ? ht(Oe) : ht;
            Oe && ((Ye = ce(Ye, Ee)), (qe = (0, ae.A)({}, qe, c)));
            var Ze = (0, ae.A)(
              {
                "aria-current": (Oe && Ie) || null,
                className: Ye,
                style: qe,
                to: ut,
              },
              pt,
            );
            return (
              je !== Z ? (Ze.ref = ee || Ge) : (Ze.innerRef = Ge),
              V.createElement(G, Ze)
            );
          });
        });
        if (0) var ue;
      },
      44894: (O, Ce, r) => {
        "use strict";
        r.d(Ce, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
