/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
      64457: (G, k, s) => {
        "use strict";
        s.d(k, { PE: () => J, Yg: () => L, _t: () => A, gO: () => S });
        var e = s(7850),
          v = s(21721),
          c = s(25046),
          M = s(40358),
          j = s(68094),
          g = s(41032),
          _ = s(90626),
          h = s(62571),
          N = s(40426),
          b = s(36118),
          U = s(36707),
          w = s(18210),
          y = s(72609),
          H = s(96538),
          z = s(85599),
          te = s(64271),
          B = s(48963),
          O = s.n(B),
          $ = s(50573);
        function L(I) {
          const { id: p, bPopOutTrailerPlayback: T } = I,
            { data: l } = (0, M.Yo)(p),
            { data: t } = (0, M.j4)(p),
            { data: i } = (0, M.J$)(p),
            [m, d] = (0, _.useState)(!1),
            [x, P] = (0, _.useState)(!1),
            R = (0, g.dy)(),
            V = l?.highlights?.filter((Y) => !R || Y.all_ages),
            W = V && V?.length > 0 ? V[0] : void 0,
            E = _.useCallback(() => {
              W && (T ? P(!0) : d((Y) => !Y));
            }, [W, T]);
          if (!i)
            return (0, e.jsx)("div", {
              className: (0, U.A)(O().HilightGrid, O().MediaContainer),
              children: (0, e.jsx)(z.t, { size: "medium" }),
            });
          const K = W
            ? (0, e.jsx)(F, {
                trailer: W,
                bPlayVideo: m,
                fnTogglePlayTrailer: E,
              })
            : null;
          return !W &&
            !(t && t.all_ages_screenshots && t.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, U.A)(O().HilightGrid, O().MediaContainer),
                children: [
                  (0, e.jsx)(A, {
                    elFeaturedInCenter: K,
                    storeItemScreenshots: t,
                    trailer: W,
                    id: p,
                    name: i.name || "",
                  }),
                  T
                    ? (0, e.jsx)(J, {
                        id: p,
                        bShowModal: x,
                        hideModal: () => P(!1),
                      })
                    : (0, e.jsx)(Q, {
                        name: i.name || "",
                        trailer: W,
                        bPlayVideo: m,
                        fnTogglePlayTrailer: E,
                        bControls: !0,
                      }),
                ],
              });
        }
        function A(I) {
          const {
              elFeaturedInCenter: p,
              id: T,
              name: l,
              trailer: t,
              storeItemScreenshots: i,
              featureElementclassName: m,
              bUseTrailerAsFirstThumb: d,
              bNoScreenShotModals: x,
            } = I,
            [P, R] = _.useState(void 0),
            [V, W] = (0, N.XC)(),
            E = (0, g.dy)(),
            K = (0, _.useRef)(null),
            [Y, pe] = (0, _.useState)(0);
          if (!T) return null;
          const le = p || (P !== void 0 && P !== -1) ? P : 0,
            re = new Array(),
            ce = new Array();
          d &&
            t &&
            (re.push(
              (0, e.jsx)(
                F,
                {
                  trailer: t,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => R(0),
                  onMouseLeave: () => {
                    const ne = K.current;
                    ne && pe(ne.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            ce.push(
              (0, e.jsx)(
                Q,
                {
                  ref: K,
                  name: l,
                  trailer: t,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: Y,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const Te = (
            E ? i?.all_ages_screenshots : i?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (Te?.forEach((ne, oe) => {
              if ((p || oe > 0) && re.length < 3) {
                const ue = (0, v.bu)(ne, "thumb"),
                  Me = (0, v.bu)(ne, "600x338"),
                  je = re.length;
                re.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, U.A)({
                        [O().ThumbnailCtn]: !0,
                        [O().ThumbnialClickable]: !x,
                      }),
                      onMouseEnter: () => R(je),
                      children: x
                        ? (0, e.jsx)("img", { src: ue, alt: l })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: O().ThumbnailButton,
                            onClick: () => {
                              const ge = [...(Te || [])];
                              if (ge.length > 0) {
                                for (let he = 0; he < oe; ++he) {
                                  const Ae = ge.shift();
                                  Ae && ge.push(Ae);
                                }
                                V(ge.map((he) => (0, v.bu)(he, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: ue, alt: l }),
                          }),
                    },
                    oe + "_small_" + ue,
                  ),
                ),
                  ce.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: O().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: Me, alt: l }),
                      },
                      oe + "_big_" + ue,
                    ),
                  );
              }
            }),
            !p && (!ce || ce.length == 0))
          )
            return null;
          const de = re.slice(0, 3),
            ve = Array.from({ length: Math.max(0, 3 - de.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              W,
              (0, e.jsx)("div", {
                className: m || O().MainMediaCtn,
                children:
                  p && (le === -1 || le === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: p })
                    : (0, e.jsx)(e.Fragment, {
                        children: le !== void 0 && ce[le],
                      }),
              }),
              de.length > 0 &&
                (0, e.jsxs)("div", {
                  className: O().ScreenshotThumbnailRow,
                  onMouseLeave: () => R(-1),
                  children: [
                    de,
                    ve.map((ne, oe) =>
                      (0, e.jsx)(
                        "div",
                        { className: O().ThumbnailCtn },
                        `app_${(0, j.ER)(T)}_${oe}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function Q(I) {
          const {
            ref: p,
            name: T,
            trailer: l,
            bControls: t,
            bPlayVideo: i,
            fnTogglePlayTrailer: m,
            startTime: d,
          } = I;
          if (
            ((0, _.useEffect)(() => {
              const P = p?.current;
              if (d != null && d > 0 && P) {
                const R = () => {
                  P.currentTime = d || 0;
                };
                return (
                  P.addEventListener("loadedmetadata", R),
                  () => {
                    P.removeEventListener("loadedmetadata", R);
                  }
                );
              }
            }, [p, d]),
            !l)
          )
            return null;
          let x = (0, U.A)(O().VideoLargeContainer, i && O().videoPlaying);
          return (0, e.jsxs)("div", {
            className: x,
            onClick: m,
            role: "presentation",
            children: [
              (0, e.jsx)($.hj, {
                name: T,
                trailerCategory: l.trailer_category,
                trailerDisplay: $.g,
                mouseOver: !1,
              }),
              !!(i && l.microtrailer) &&
                (0, e.jsx)("video", {
                  className: O().VideoLarge,
                  ref: p,
                  controls: t,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: d != null && d > 0 ? void 0 : l.screenshot_full,
                  children: l.microtrailer?.map((P) =>
                    y.TS.IN_CLIENT && P.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          { src: (0, c.M4)(l, P.filename || ""), type: P.type },
                          P.filename,
                        ),
                  ),
                }),
              t &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: O().CloseButton,
                  "aria-label": (0, w.we)("#Button_Close"),
                  children: (0, e.jsx)(b.sED, {}),
                }),
            ],
          });
        }
        function J(I) {
          const { id: p, bShowModal: T, trailerBaseID: l, hideModal: t } = I,
            { data: i } = (0, M.J$)(p),
            m = (0, c.kB)(p),
            d = (0, _.useMemo)(() => {
              if (!(!m || m.length == 0)) {
                if (l) {
                  const K = m.find((Y) => Y.trailer_base_id == l);
                  if (K) return K;
                }
                return m[0];
              }
            }, [m, l]),
            x = _.useId(),
            P = _.useId(),
            {
              rgDashTrailers: R,
              rgHlsTrailers: V,
              strCaptionManufest: W,
              strScreenshot: E,
            } = (0, _.useMemo)(() => {
              if (!d)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: K, rgHlsTrailers: Y } = (0, c.hg)(d);
              return {
                rgDashTrailers: K,
                rgHlsTrailers: Y,
                strCaptionManufest: (0, c.Wv)(d),
                strScreenshot: (0, c.hl)(d),
              };
            }, [d]);
          return !d || !d.adaptive_trailers || R.length == 0
            ? null
            : (0, e.jsx)(H.EN, {
                active: T,
                children: (0, e.jsxs)(H.eV, {
                  "aria-labelledby": (0, h.q)(x, P),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: t,
                  children: [
                    (0, e.jsx)("div", {
                      className: O().VideoPopupContainers,
                      children: (0, e.jsx)(te.P, {
                        dashManifests: R,
                        hlsManifest: V[0] || "",
                        screenshot: E,
                        altText: d.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: W,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: x,
                      style: { display: "none" },
                      children: i?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: P,
                      style: { display: "none" },
                      children: d.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function S(I) {
          const { appid: p, trailerBaseID: T, bShowModal: l, hideModal: t } = I,
            i = (0, _.useMemo)(() => ({ appid: p }), [p]);
          return (0, e.jsx)(J, {
            id: i,
            trailerBaseID: T,
            bShowModal: l,
            hideModal: t,
          });
        }
        function F(I) {
          const {
            trailer: p,
            fnTogglePlayTrailer: T,
            bPlayVideo: l,
            onMouseEnter: t,
            onMouseLeave: i,
          } = I;
          return (0, e.jsxs)("div", {
            className: (0, U.A)({
              [O().VideoThumbnail]: !l,
              [O().videoPlaying]: l,
              [O().ThumbnailCtn]: !0,
            }),
            onClick: T,
            onMouseEnter: t,
            onMouseLeave: i,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, c.hl)(p), alt: p.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: O().VideoPlayButton,
                "aria-label": (0, w.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(b.jGG, {}),
              }),
            ],
          });
        }
      },
      97743: (G, k, s) => {
        "use strict";
        s.d(k, {
          $I: () => J,
          AP: () => T,
          Nt: () => B,
          XW: () => F,
          dr: () => p,
          fL: () => Q,
          rT: () => L,
        });
        var e = s(80902),
          v = s(90626),
          c = s(99412),
          M = s(72604),
          j = s(35038),
          g = s(86174),
          _ = s(3166),
          h = s(84192),
          N = s(68094),
          b = s(5827),
          U = s(71742),
          w = s(14947),
          y = s(18210),
          H = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          te = (l, t, i, m) => {
            for (
              var d = m > 1 ? void 0 : m ? z(t, i) : t, x = l.length - 1, P;
              x >= 0;
              x--
            )
              (P = l[x]) && (d = (m ? P(t, i, d) : P(d)) || d);
            return m && d && H(t, i, d), d;
          };
        class B {
          m_SteamInterface;
          m_SteamInterfacePromotions;
          m_setMessagesSeen = new Set();
          static sm_DefaultDataRequest = {
            include_release: !0,
            include_assets: !0,
          };
          constructor(t) {
            this.m_SteamInterface = t;
          }
          static sm_Instance;
          static Init(t) {
            B.sm_Instance = new B(t);
          }
          SetSteamInterfacePromotions(t) {
            this.m_SteamInterfacePromotions = t;
          }
          static Get() {
            return (
              (0, U.wT)(
                B.sm_Instance,
                "MarketingMessages store not initialized",
              ),
              B.sm_Instance
            );
          }
          async GetMessageList(t, i = !1) {
            if (!_.iA.logged_in) return [];
            const m = j.w.Init(g.LK);
            m.Body().set_country_code(_.TS.COUNTRY),
              m.Body().set_elanguage((0, c.sfN)(_.TS.LANGUAGE)),
              m.Body().set_client_package_version(t.nClientPackageVersion),
              m.Body().set_operating_system(t.eOSType),
              i && m.Body().set_include_seen_messages(!0),
              (0, h.rV)(m),
              (0, h.Bn)(m, B.sm_DefaultDataRequest);
            const d = await g.EO.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              m,
            );
            if (d.GetEResult() != M.R)
              throw `Error loading marketing messages: ${d.GetEResult()}`;
            if (i)
              for (const x of d.Body().messages())
                x.already_seen() &&
                  this.m_setMessagesSeen.add(x.message().gid());
            return d.Body().messages();
          }
          async GetSingleMessage(t, i) {
            const m = j.w.Init(g.e6);
            m.Body().set_gid(t),
              (0, h.rV)(m),
              (0, h.Bn)(m, B.sm_DefaultDataRequest);
            let d;
            if (
              (i || _.iA.logged_in
                ? (d = await g.EO.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    m,
                  ))
                : (d = await g.EO.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    m,
                  )),
              d.GetEResult() != M.R)
            )
              throw `Error loading marketing messages: ${d.GetEResult()}`;
            return d.Body().message();
          }
          MarkMessageSeen(t, i, m) {
            if (this.m_setMessagesSeen.has(t)) return;
            const d = j.w.Init(g.S4);
            d.Body().set_gid(t),
              d.Body().set_display_index(i),
              d.Body().set_template_type(m),
              g.EO.MarkMessageSeen(
                this.m_SteamInterface.GetServiceTransport(),
                d,
              ),
              this.m_setMessagesSeen.add(t);
          }
          BIsMessageSeen(t) {
            return this.m_setMessagesSeen.has(t);
          }
        }
        function O(l) {
          if (!l) return null;
          try {
            const t = JSON.parse(l);
            return (
              t.use_additional_fields &&
                (t.use_additional_fields =
                  t.use_additional_fields === "true" ||
                  t.use_additional_fields === 1),
              t.use_custom_legal_text &&
                (t.use_custom_legal_text =
                  t.use_custom_legal_text === "true" ||
                  t.use_custom_legal_text === 1),
              t.last_asset_mtime &&
                (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
              (t.ll_image = t.ll_image || {}),
              t
            );
          } catch {}
          return null;
        }
        function $(l) {
          return `\xA9 ${new Date().getFullYear()} Valve Corporation${l ? " and " + l : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        class L {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          m_rgRecommendedAppIDs;
          m_nSaleItemCount;
          constructor(t) {
            (0, w.Gn)(this),
              (this.m_message = t),
              (this.m_templateVars = O(t.template_vars_json()));
            const i = t.associated_item(!1);
            (this.m_associatedItemKey = i
              ? (0, N.Jz)({ item_type: i.item_type(), id: i.id() })
              : void 0),
              (this.m_rgRecommendedAppIDs = t
                .recommended_items()
                .map((m) => m.appid())
                .filter(Boolean)),
              (this.m_nSaleItemCount = t.sale_item_count());
          }
          get id() {
            return this.m_message.gid();
          }
          GetType() {
            return this.m_message.type();
          }
          static GetTypeAsLocalizedString(t) {
            switch (t) {
              case g.D4.QJ:
                return (0, y.we)("#spotlight_weekend_deal");
              case g.D4.xl:
                return (0, y.we)("#spotlight_midweek_madness");
              case g.D4.Sk:
                return (0, y.we)("#spotlight_daily_deal");
              case g.D4.OD:
                return (0, y.we)("#msg_available_everywhere");
              case g.D4.RV:
                return (0, y.we)("#msg_new_game");
              case g.D4.IT:
                return (0, y.we)("#msg_prepurchase_now");
              case g.D4.T9:
                return (0, y.we)("#msg_play_now");
              case g.D4.QY:
                return (0, y.we)("#label_pre_load_now");
              case g.D4.W8:
                return (0, y.we)("#label_just_updated");
              case g.D4.eV:
                return (0, y.we)("#label_new_dlc_available");
              case g.D4.SK:
                return (0, y.we)("#label_free_weekend");
              case g.D4.eH:
                return (0, y.we)("#msg_on_sale_now");
              case g.D4.k6:
                return (0, y.we)("#msg_play_beta_now");
            }
            return null;
          }
          GetTemplateType() {
            return this.m_message.template_type();
          }
          GetTemplateTypeForReporting() {
            if (
              this.GetTemplateVars().custom_display &&
              this.GetTemplateVars().custom_display.startsWith("replay")
            )
              return g.rj.TO;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return g.rj.k2;
              case "mm_auto_render":
                return g.rj.H;
              case "partner_event":
                return g.rj.GS;
              case "featured_video":
                return g.rj.CT;
            }
            return g.rj.BA;
          }
          GetTemplateVars() {
            return this.m_templateVars;
          }
          GetLocalizedAltText(t) {
            return (
              this.m_templateVars?.localized_alt_text?.[t] ||
              this.m_templateVars?.localized_alt_text?.[
                y.A0.GetELanguageFallback(t)
              ] ||
              void 0
            );
          }
          GetTemplateImage() {
            let t = this.m_templateVars.ll_image[_.TS.LANGUAGE],
              i = (0, c.sfN)(_.TS.LANGUAGE);
            return (
              !t &&
                _.TS.LANGUAGE == (0, c.LgB)(c.FHN) &&
                ((t = this.m_templateVars.ll_image.LATAM), (i = c.FHN)),
              t || ((t = this.m_templateVars.ll_image.english), (i = c.Bhc)),
              [t?.path, i]
            );
          }
          GetTemplateBackgroundImage() {
            let t = this.m_templateVars.background[_.TS.LANGUAGE],
              i = (0, c.sfN)(_.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.background.english), (i = c.Bhc)),
              [t?.path, i]
            );
          }
          GetFeaturedVideoMP4URL() {
            return this.m_templateVars.featured_video_mp4;
          }
          GetFeaturedVideoWebMURL() {
            return this.m_templateVars.featured_video_webm;
          }
          GetFeaturedVideoAutoPlay() {
            return this.m_templateVars.featured_video_autoplay;
          }
          GetFeaturedVideoLoop() {
            return this.m_templateVars.featured_video_loop;
          }
          GetPosterImage() {
            let t = this.m_templateVars.poster[_.TS.LANGUAGE],
              i = (0, c.sfN)(_.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.poster.english), (i = c.Bhc)),
              [t?.path, i]
            );
          }
          GetSubtitleObj() {
            return this.m_templateVars.subtitles;
          }
          GetDLCAppIDs() {
            return this.m_templateVars.additional_featuring
              .filter((t) => !!t.appid)
              .map((t) => t.appid);
          }
          GetAutoRenderWithoutAssetOverrides() {
            return !!this.m_templateVars.autorender_assets_without_overrides;
          }
          GetGID() {
            return this.m_message.gid();
          }
          SetDLCAppIDOverride(t) {
            (this.m_templateVars.additional_featuring = t.map((i) => ({
              appid: i,
            }))),
              (this.m_templateVars.custom_display = "dlc_override");
          }
          GetRecommendedAppIDs() {
            return this.m_rgRecommendedAppIDs;
          }
          GetSaleItemCount() {
            return this.m_nSaleItemCount;
          }
          SetRecommendedAppIDsOverride(t) {
            this.m_rgRecommendedAppIDs = t;
          }
          OverrideCustomText(t) {
            this.m_templateVars.button_text_custom = t;
          }
          OverrideURL(t) {
            this.m_templateVars.linkurl = t;
          }
          BHasTemplateAnimatedAssets() {
            return this.m_templateVars.has_animated_assets;
          }
          BHasTemplateAnimatedAssetForLanguage(t) {
            const i = (0, c.LgB)(t);
            return !!this.m_templateVars.mp4[i];
          }
          GetTemplateWebM(t) {
            const i = (0, c.LgB)(t);
            return this.m_templateVars.webm[i]?.path;
          }
          GetTemplateWebMWithFallback(t) {
            const i = (0, c.LgB)(t);
            if (this.m_templateVars.webm[i]?.path)
              return [this.m_templateVars.webm[i].path, t];
            const m = y.A0.GetELanguageFallback(t),
              d = (0, c.LgB)(m);
            return [this.m_templateVars.webm[d]?.path, m];
          }
          GetTemplateMP4(t) {
            const i = (0, c.LgB)(t);
            return this.m_templateVars.mp4[i]?.path;
          }
          GetTemplateMP4WithFallback(t) {
            const i = (0, c.LgB)(t);
            if (this.m_templateVars.mp4[i]?.path)
              return [this.m_templateVars.mp4[i].path, t];
            const m = y.A0.GetELanguageFallback(t),
              d = (0, c.LgB)(m);
            return [this.m_templateVars.mp4[d]?.path, m];
          }
          GetLegalHTML() {
            return this.GetTemplateVars().use_custom_legal_text
              ? this.GetTemplateVars().custom_legal_text
              : $(this.GetTemplateVars().partner);
          }
          get associated_item_key() {
            return this.m_associatedItemKey;
          }
          get associated_item_appid() {
            return this.m_message.associated_item(!1)?.appid();
          }
          GetAssociatedItemProto() {
            return this.m_message.associated_item(!1);
          }
        }
        te([w.sH], L.prototype, "m_templateVars", 2);
        const A = "^(replay)([0-9]{4})";
        function Q(l) {
          return l.match(A)?.[2];
        }
        function J(l) {
          if (l) {
            const t = l.match(A);
            return t?.[2] && !isNaN(Number(t?.[2]));
          }
          return !1;
        }
        function S(l) {
          return l == "mm_auto_render";
        }
        function F(l, t, i) {
          const { bIncludeSeenMessages: m, ...d } = t,
            {
              data: x,
              isLoading: P,
              isError: R,
            } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                "List",
                d,
                { bIncludeSeenMessages: !!m },
              ],
              queryFn: () => l.GetMessageList(d, m),
              ...i,
            }),
            V = v.useMemo(() => x?.map((K) => new L(K.message())), [x]),
            W = (0, b.cv)(),
            E = v.useRef(new Set());
          return (
            W &&
              V?.forEach((K) => {
                if (E.current.has(K.id)) return;
                const Y = K.GetAssociatedItemProto();
                Y && (W(Y, B.sm_DefaultDataRequest), E.current.add(K.id));
              }),
            { rgMessages: P ? null : V, isError: R }
          );
        }
        function I(l, t, i) {
          const m = i?.enabled !== !1,
            { data: d } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: m,
            });
          return F(l, { ...d, ...t }, { ...i, enabled: !!d && m });
        }
        function p(l, t, i) {
          const { data: m, isError: d } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                i ? "SinglePreivew" : "Single",
                t,
              ],
              queryFn: () => l.GetSingleMessage(t, i),
              enabled: !!t,
            }),
            x = v.useMemo(() => {
              if (m) {
                const V = new L(m);
                if (i) {
                  const W = (0, _.Tc)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  W?.dlc_appid_overrides?.length > 0 &&
                    V.SetDLCAppIDOverride(W.dlc_appid_overrides),
                    W?.recommended_appid_overrides?.length > 0 &&
                      V.SetRecommendedAppIDsOverride(
                        W.recommended_appid_overrides,
                      );
                }
                return V;
              }
            }, [m, i]),
            P = (0, b.cv)(),
            R = v.useRef(new Set());
          if (P && x && !R.current.has(x.id)) {
            const V = x.GetAssociatedItemProto();
            V && (P(V, B.sm_DefaultDataRequest), R.current.add(x.id));
          }
          return { message: x, isError: d };
        }
        function T(l, t, i, m, d) {
          const x = j.w.Init(g.cX);
          x.Body().set_gid(t),
            x.Body().set_display_index(i),
            x.Body().set_template_type(m),
            x.Body().set_click_location(d),
            g.EO.MarkMessageClicked(l, x);
        }
      },
      32738: (G, k, s) => {
        "use strict";
        s.d(k, { NZ: () => _, g1: () => h, ho: () => g });
        var e = s(7850),
          v = s(90626),
          c = s(44930),
          M = s(3166);
        const j = v.createContext({ setLegalText: void 0 });
        function g() {
          return !!v.useContext(j).setLegalText;
        }
        function _() {
          return v.useContext(j).setLegalText || function (U) {};
        }
        function h(b) {
          const [U, w] = v.useState(),
            y = (0, c.Dp)("BrowserView.RegisterForMessageFromParent"),
            H = (0, M.Qn)(),
            z = v.useMemo(
              () => ({ setLegalText: y && !H ? w : void 0 }),
              [y, w, H],
            );
          return (0, e.jsxs)(j.Provider, {
            value: z,
            children: [y && (0, e.jsx)(N, { strLegalText: U }), b.children],
          });
        }
        function N(b) {
          const { strLegalText: U } = b,
            w = v.useRef(void 0);
          return (
            v.useEffect(() => {
              (w.current = U),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  U || "",
                );
            }, [U]),
            v.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((y) => {
                  y == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      w.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      27638: (G, k, s) => {
        "use strict";
        s.d(k, { Y: () => c });
        var e = s(90626);
        function v(M) {
          const { title: j, bodyClassName: g, children: _ } = M;
          return (
            React.useEffect(() => {
              const h = document.title;
              return (
                (document.title = j),
                () => {
                  document.title = h;
                }
              );
            }, [j]),
            c(g),
            _
          );
        }
        function c(M) {
          e.useEffect(() => {
            if (!M) return;
            const j = [];
            for (const g of M.split(/ /))
              document.body.classList.contains(g) || j.push(g);
            return (
              document.body.classList.add(...j),
              () => document.body.classList.remove(...j)
            );
          }, [M]);
        }
      },
      8736: (G, k, s) => {
        "use strict";
        s.d(k, { l: () => v });
        var e = s(18210);
        function v(c, M = "#Played_", j = !1) {
          if (c >= 120) {
            let g = c / 60;
            g = Math.round(g * 10) / 10;
            let _ = e.pf.GetPreferredLocales(),
              h = g.toLocaleString(_, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, e.we)(M + "Hours", h);
          } else
            return j && c == 1
              ? (0, e.we)(M + "Minute", c)
              : (0, e.we)(M + "Minutes", c);
        }
      },
      9519: (G, k, s) => {
        "use strict";
        s.d(k, { q: () => M });
        var e = s(90626),
          v = s(30096);
        const c = 2e4;
        function M(j) {
          const g = (0, e.useRef)(!1),
            _ = (0, e.useRef)(null),
            h = (0, e.useCallback)(() => {
              _.current = setTimeout(() => {
                j.current &&
                  !j.current.paused &&
                  (j.current.pause(), (g.current = !0));
              }, c);
            }, [j]),
            N = (0, e.useCallback)(() => {
              _.current && (clearTimeout(_.current), (_.current = null)),
                j.current && g.current && (j.current.play(), (g.current = !1));
            }, [j]);
          (0, v.l6)(window, "blur", h), (0, v.l6)(window, "focus", N);
        }
      },
      53617: (G, k, s) => {
        "use strict";
        s.d(k, { FS: () => J, WN: () => Q, lS: () => $, xf: () => A });
        var e = s(80902),
          v = s(35038),
          c = s(68312),
          M = s(67529),
          j = s(27386),
          g = s(98609),
          _ = s(3166),
          h = s(82734),
          N = s(90626),
          b = s(68094),
          U = s(40358),
          w = s(47875),
          y = s(72865),
          H = s(10349),
          z = s(97743),
          te = s(94344),
          B = s(86174),
          O = s(70537);
        function $(S) {
          const F = (0, c.KV)();
          let I = (0, e.I)({
            queryKey: ["useGamePlaytimeInfo", S],
            queryFn: async () => L(S, F),
            enabled: !!(S && S != M.sc),
          });
          return I.isSuccess ? I.data : null;
        }
        async function L(S, F) {
          const I = v.w.Init(j.G9h);
          I.Body().set_steamid(g.iA.steamid),
            I.Body().set_appids_filter([S]),
            I.Body().set_include_played_free_games(!0),
            I.Body().set_language(g.TS.LANGUAGE);
          const p = await j.xtC.GetOwnedGames(F, I);
          return p.Body().games().length > 0
            ? p.Body().games()[0].toObject()
            : {};
        }
        function A(S) {
          return (0, _.Y2)() && S?.startsWith("https://store.steampowered.com/")
            ? S.replace("https://store.steampowered.com/", g.TS.STORE_BASE_URL)
            : S;
        }
        function Q(S, F, I = !1) {
          let p = (0, c.KV)(),
            T = (0, te.J)(),
            l = (0, O.Ng)();
          l = l !== null ? l + 1 : 0;
          let t;
          F == B.cU.wY
            ? (t = "image")
            : F == B.cU.xe
              ? (t = "button")
              : F == B.cU.FQ
                ? (t = "dlc_capsule")
                : F == B.cU.vx
                  ? (t = "header_area")
                  : F == B.cU.C1
                    ? (t = "game_capsule")
                    : F == B.cU.vm && (t = "partner_event");
          let i = (0, y.aL)(A(S), t);
          return (
            I && (i = S),
            i.startsWith("steam://") || (i = `steam://openurl/${i}`),
            (0, N.useCallback)(
              (d) => {
                (0, z.AP)(p, T.id, l, T.GetTemplateTypeForReporting(), F);
                let x = (0, h.uX)(d);
                x.location.href = i;
              },
              [i, p, T, l, F],
            )
          );
        }
        function J(S, F, I) {
          const p = (0, b.Jz)({ item_type: (0, H.SW)(F), id: S }),
            { data: T } = (0, U.J$)(p);
          return Q((0, w._)(T) ?? g.TS.STORE_BASE_URL, I);
        }
      },
      94344: (G, k, s) => {
        "use strict";
        s.d(k, { Q: () => _s, J: () => ee });
        var e = s(7850),
          v = s(99412),
          c = s(90626),
          M = s(97743),
          j = s(32738),
          g = s(3166),
          _ = s(32858),
          h = s(72865),
          N = s(53617),
          b = s(19298),
          U = s(48421),
          w = s(24179),
          y = s(98609);
        function H(o, a, n, r) {
          if (!r || !r.path) return null;
          const u = n ? "?t=" + n : "";
          return r.path.startsWith("images")
            ? `${y.TS.MEDIA_CDN_URL}steam/marketing/${o}/${r.path}${u}`
            : `${y.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${o}/${a}/${r.path}${u}`;
        }
        var z = s(30096),
          te = s(9519);
        function B(o) {
          const { path: a, message: n, eLanguage: r, ...u } = o,
            f = n.GetTemplateVars()?.last_asset_mtime,
            C = H(n.id, r, f, { type: "file", path: a }),
            D = n.GetLocalizedAltText(r);
          return (0, e.jsx)("img", { alt: D, ...u, src: C });
        }
        function O(o) {
          const { message: a, mp4Path: n, webmPath: r, language: u, ...f } = o,
            C = a.GetTemplateVars()?.last_asset_mtime,
            D = H(a.id, u, C, { type: "file", path: r }),
            X = H(a.id, u, C, { type: "file", path: n }),
            Z = (0, c.useRef)(null);
          (0, te.q)(Z);
          const se = (0, c.useRef)(!1),
            ae = (0, c.useCallback)(() => {
              Z.current &&
                (document.visibilityState === "visible"
                  ? se.current && (Z.current.play(), (se.current = !1))
                  : Z.current.paused || (Z.current.pause(), (se.current = !0)));
            }, []);
          return (
            (0, z.l6)(document, "visibilitychange", ae),
            (0, c.useEffect)(() => ae(), [ae]),
            (0, e.jsxs)("video", {
              ...f,
              ref: Z,
              children: [
                (0, e.jsx)("source", { src: D, type: "video/webm" }),
                (0, e.jsx)("source", { src: X, type: "video/mp4" }),
              ],
            })
          );
        }
        var $ = s(51079),
          L = s(36707),
          A = s(18210),
          Q = s(720),
          J = s.n(Q),
          S = s(24660),
          F = s(71742),
          I = s(86174),
          p = s(11996),
          T = s(54528),
          l = s(65946),
          t = s(40358),
          i = s(21721),
          m = s(47875),
          d = s(72838),
          x = s(48357),
          P = s(61431),
          R = s(96117),
          V = s(25792),
          W = s(8736),
          E = s(22329);
        function K(o) {
          return (0, e.jsx)("div", {
            className: E.All,
            children: (0, e.jsx)("div", {
              className: E.MessageContent,
              children: o.children,
            }),
          });
        }
        function Y(o) {
          return (0, e.jsx)("div", {
            className: E.MessageBody,
            children: o.children,
          });
        }
        function pe(o) {
          const { isBackgroundBlur: a, bOverrideUseBackgroundImage: n } = o,
            r = ee(),
            u = (0, N.WN)(r.GetTemplateVars().linkurl, I.cU.wY),
            [f, C] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
          return (0, e.jsx)(b.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, L.A)(E.MessageImage, a && E.IsBlur),
            onActivate: u,
            children: f && (0, e.jsx)(B, { message: r, path: f, eLanguage: C }),
          });
        }
        function le(o) {
          const { fnOnClick: a } = o,
            n = ee(),
            r = (0, v.sfN)(g.TS.LANGUAGE),
            [u, f] = n.GetTemplateMP4WithFallback(r),
            [C, D] = n.GetTemplateWebMWithFallback(r);
          return (
            (0, F.wT)(
              f == D,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${f} webm ${D}`,
            ),
            (0, e.jsx)("div", {
              className: E.VideoImageContainer,
              children: (0, e.jsx)(b.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, L.A)(E.MessageImage),
                onActivate: a,
                children: (0, e.jsx)(O, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: u,
                  message: n,
                  webmPath: C,
                  language: g.TS.IN_CLIENT ? D : f,
                }),
              }),
            })
          );
        }
        function re(o) {
          const { id: a } = o,
            { data: n } = (0, t.lv)(a),
            r = n ? (0, i.b0)(n, "main_capsule") : void 0;
          return r ? (0, e.jsx)(ce, { strImageURL: r }) : null;
        }
        function ce(o) {
          return (0, e.jsx)("div", {
            className: (0, L.A)(E.MessageImage, E.GameImage, E.IsBlur),
            children: (0, e.jsx)("img", { src: o.strImageURL }),
          });
        }
        function Te(o) {
          const { strType: a, strTitle: n, bSmallTitle: r } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: E.EventType, children: a }),
              (0, e.jsx)("div", {
                className: (0, L.A)(E.EventTitle, r && E.SmallTitle),
                children: n,
              }),
            ],
          });
        }
        function de(o) {
          const { id: a, bPreview: n, bPreferAssetWithoutOverride: r } = o,
            { data: u } = (0, t.J$)(a),
            f = u?.appid,
            C = (0, g.Qn)(),
            { bIsOwned: D } = (0, w.ZJ)(a),
            X = (0, T.bB)(f),
            Z = (0, p.Fh)(f),
            se = (0, N.lS)(f ?? 0),
            ae = (0, c.useMemo)(
              () =>
                n && (!se?.playtime_forever || !se?.rtime_last_played)
                  ? {
                      playtime_forever: 300,
                      rtime_last_played:
                        Math.floor(Date.now() / 1e3) - 7200 * 60,
                    }
                  : se,
              [se, n],
            );
          let fe = "steam://openurl/" + ((0, m._)(u) ?? "");
          D &&
            f &&
            (C
              ? (fe = `steam://open/games/details/${f}`)
              : (fe = `steam://nav/games/details/${f}`));
          const xe = (0, N.WN)(fe, I.cU.vx, D);
          return (0, e.jsxs)("div", {
            className: E.BaseCtn,
            children: [
              (0, e.jsx)(S.Ii, {
                className: E.CapsuleCtn,
                onClick: xe,
                children: (0, e.jsx)(d.G, {
                  id: a,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: r,
                }),
              }),
              (0, e.jsxs)("div", {
                className: E.DescCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: E.GameNameCtn,
                    children: (0, e.jsx)(S.Ii, {
                      className: E.GameName,
                      onClick: xe,
                      children: u?.name,
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: E.LibraryDetails,
                    children: [
                      (0, e.jsx)(S.Ii, {
                        onClick: xe,
                        className: (0, L.A)(E.Button, E.ViewInLibrary),
                        children: (0, A.we)(
                          D
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !D &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: E.PlayDetailCtn,
                            children: [
                              X &&
                                (0, e.jsx)("span", {
                                  children: (0, A.we)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !X &&
                                Z &&
                                (0, e.jsx)("span", {
                                  children: (0, A.we)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      D &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            !!ae?.rtime_last_played &&
                              (0, e.jsxs)("div", {
                                className: E.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, A.we)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, A._l)(ae.rtime_last_played),
                                ],
                              }),
                            !!ae?.playtime_forever &&
                              (0, e.jsxs)("div", {
                                className: E.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, A.we)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, W.l)(ae.playtime_forever),
                                ],
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
        function ve(o) {
          const a = ee(),
            n = (0, N.WN)(a.GetTemplateVars().linkurl, I.cU.xe);
          return (0, e.jsx)(ne, {
            bHidePrice: o.bHidePrice,
            fnOnClickButton: n,
          });
        }
        function ne(o) {
          const { bHidePrice: a, fnOnClickButton: n } = o,
            r = ee(),
            u = !0,
            [f, C] = (0, l.q3)(() => [
              r.GetTemplateVars().button_text_custom ||
                r.GetTemplateVars().button_text,
              !!r.GetTemplateVars().hide_price,
            ]),
            D = !!(a || C);
          return (0, e.jsxs)("div", {
            className: (0, L.A)(E.MessageFooter, !u && E.NoButton),
            children: [
              (0, e.jsxs)("div", {
                className: E.ButtonAndPriceCtn,
                children: [
                  u &&
                    (0, e.jsx)(b.Z, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: E.Btn,
                      onActivate: n,
                      children: f,
                    }),
                  !D && (0, e.jsx)(V.tH, { children: (0, e.jsx)(oe, {}) }),
                ],
              }),
              (0, e.jsx)(ue, {}),
            ],
          });
        }
        function oe() {
          const a = ee().associated_item_key,
            { data: n } = (0, t.Q_)(a);
          return !n || !n.formatted_final_price
            ? (0, e.jsx)("div", { className: E.NoPrice })
            : (0, e.jsx)("div", {
                className: E.MessagePriceCtn,
                children: (0, e.jsx)(x.NF, { id: a, bHidePrePurchase: !0 }),
              });
        }
        function ue(o) {
          const a = ee();
          return (0, j.ho)()
            ? null
            : (0, e.jsx)("div", {
                className: E.Legal,
                dangerouslySetInnerHTML: { __html: a.GetLegalHTML() },
              });
        }
        function Me(o) {
          const { id: a, type: n, eClickLocation: r } = o,
            u = (0, N.FS)(a, n, r);
          return (0, e.jsx)(P.p, {
            id: a,
            type: n,
            fnOnClickOverride: u,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function je(o) {
          const { capsule: a, imageType: n } = o;
          return (
            (a.overrideNavigation = (0, N.FS)(a.id, a.type, I.cU.FQ)),
            (0, e.jsx)(R.W, {
              capsule: a,
              imageType: n,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            })
          );
        }
        var ge = s(94162);
        function he(o) {
          const a = ee();
          let n = a.GetTemplateVars().update_event_clan_accountid,
            r = a.GetTemplateVars().update_event_gid;
          const {
            eventModel: u,
            bLoading: f,
            sErrorMessage: C,
          } = (0, U.B9)(n, r, o);
          return { message: a, eventModel: u };
        }
        function Ae(o) {
          const { bPreview: a, bUseAnimated: n } = o,
            { message: r, eventModel: u } = he(a),
            { data: f } = (0, t.J$)(r.associated_item_key),
            C = (0, m._)(f) ?? "",
            D = De(u, C, I.cU.wY),
            X = De(u, C, I.cU.xe);
          return (0, e.jsx)($.Ay, {
            submethod: "partner_event",
            children: (0, e.jsxs)(K, {
              children: [
                (0, e.jsx)(re, { id: r.associated_item_key }),
                (0, e.jsxs)(Y, {
                  children: [
                    (0, e.jsx)(de, {
                      id: r.associated_item_key,
                      bPreview: a,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, e.jsx)(be, {
                      message: r,
                      eventModel: u,
                      fnOnClickButton: D,
                      bUseAnimated: n,
                    }),
                  ],
                }),
                (0, e.jsx)(ne, { bHidePrice: !0, fnOnClickButton: X }),
              ],
            }),
          });
        }
        function be(o) {
          const {
              message: a,
              fnOnClickButton: n,
              eventModel: r,
              bUseAnimated: u,
            } = o,
            [f, C] = a.GetTemplateImage(),
            D = (0, v.sfN)(y.TS.LANGUAGE);
          return (0, e.jsxs)("div", {
            className: J().UpdateEventCtn,
            children: [
              (0, e.jsx)(Te, {
                strType: (0, A.we)("#MarketingMessages_MajorUpdate"),
                strTitle: r?.GetNameWithFallback(D),
              }),
              (0, e.jsxs)(b.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, L.A)(J().EventImage),
                onActivate: n,
                children: [
                  f &&
                    !u &&
                    (0, e.jsx)(B, { message: a, path: f, eLanguage: C }),
                  u && (0, e.jsx)(le, { fnOnClick: n }),
                ],
              }),
            ],
          });
        }
        function De(o, a, n) {
          let r = (0, w.S6)(o?.appid),
            u = (0, h.aL)((0, N.xf)(a), "partner_event");
          if (o?.BIsVisibleEvent() && r && o.BIsValidForRealm(y.TS.EREALM)) {
            const D = (0, ge.MP)();
            y.TS.IN_CLIENT && (D > 1726604483 || D == 0)
              ? (a = `steam://open/library/event/${o.appid}|${o.GID}`)
              : ((a = `${y.TS.STORE_BASE_URL}news/app/${o.appid}?emclan=${o.clanSteamID.ConvertTo64BitString()}&emgid=${o.GID}`),
                y.TS.IN_CLIENT && (a = `steam://openurl/${a}`));
          } else
            (a = u),
              o && (a += `${u.includes("?") ? "&" : "?"}emgid=${o.GID}`),
              y.TS.IN_CLIENT && (a = `steam://openurl/${a}`);
          return (0, N.WN)(a, n, !0);
        }
        var Ge = s(41735),
          Ne = s.n(Ge),
          Ue = s(80902),
          Fe = s(72604),
          ke = s(67529);
        function Ve(o) {
          const {
            isLoading: a,
            isError: n,
            data: r,
          } = (0, Ue.I)({
            queryKey: ["useDLCHubCount", o],
            queryFn: async () => We(o),
            enabled: !!(o && o != ke.sc),
          });
          return a || n ? null : r;
        }
        async function We(o) {
          const a = `${y.TS.STORE_BASE_URL}dlc/${o}/ajaxgetdlccount`,
            n = { origin: self.origin },
            r = await Ne().get(a, { params: n, withCredentials: !1 });
          if (r.status !== 200 || r.data.success !== Fe.R)
            throw new Error(
              `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
            );
          return r.data.count;
        }
        var q = s(16205);
        function Ke(o) {
          const { bPreview: a } = o,
            n = ee(),
            r = (0, c.useMemo)(
              () => n.GetDLCAppIDs().map((f) => ({ id: f, type: "game" })),
              [n],
            ),
            u = Ve(n.associated_item_appid);
          return (
            (0, c.useEffect)(() => {
              if (n) {
                const f = u
                  ? (0, A.Yp)("#MarketingMessages_See_Count_Items", u)
                  : (0, A.we)("#MarketingMessages_See_All_Items");
                n.OverrideCustomText(f),
                  n.OverrideURL(
                    `${y.TS.STORE_BASE_URL}dlc/${n.associated_item_appid}`,
                  );
              }
            }, [n, u]),
            (0, e.jsx)($.Ay, {
              submethod: "dlc_override",
              children: (0, e.jsxs)(K, {
                children: [
                  (0, e.jsx)(re, { id: n.associated_item_key }),
                  (0, e.jsxs)(Y, {
                    children: [
                      (0, e.jsx)(de, {
                        id: n.associated_item_key,
                        bPreview: a,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, e.jsx)(we, {
                        rgDLCSaleCapsules: r,
                        messageType: n.GetType(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(ve, { bHidePrice: !0 }),
                ],
              }),
            })
          );
        }
        function Ie(o) {
          const { messageType: a, itemCount: n } = o,
            r = M.rT.GetTypeAsLocalizedString(a);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!r && (0, e.jsx)("div", { className: q.Type, children: r }),
              n == 1
                ? (0, e.jsx)(Pe, {
                    strDesc: (0, A.we)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, e.jsx)(Pe, {
                    strDesc: (0, A.we)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function we(o) {
          const { rgDLCSaleCapsules: a, messageType: n } = o;
          return a.length >= 4
            ? (0, e.jsx)(He, {
                rgSaleCapsules: a,
                children: (0, e.jsx)(Ie, { messageType: n }),
              })
            : a.length >= 3
              ? (0, e.jsxs)("div", {
                  className: q.DlcCtn,
                  children: [
                    (0, e.jsx)(Ie, { messageType: n }),
                    (0, e.jsx)("div", {
                      className: q.OneItemRow,
                      children: (0, e.jsx)(Me, {
                        id: a[0].id,
                        type: a[0].type,
                        eClickLocation: I.cU.FQ,
                      }),
                    }),
                    (0, e.jsx)(Ee, { first: a[1], second: a[2] }),
                  ],
                })
              : a.length >= 2
                ? (0, e.jsxs)("div", {
                    className: q.DlcCtn,
                    children: [
                      (0, e.jsx)(Ie, { messageType: n }),
                      (0, e.jsx)("div", {
                        className: q.OneItemRow,
                        children: (0, e.jsx)(Me, {
                          id: a[0].id,
                          type: a[0].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: q.OneItemRow,
                        children: (0, e.jsx)(Me, {
                          id: a[1].id,
                          type: a[1].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                    ],
                  })
                : a.length >= 1
                  ? (0, e.jsxs)("div", {
                      className: q.DlcCtn,
                      children: [
                        (0, e.jsx)(Ie, { messageType: n, itemCount: a.length }),
                        (0, e.jsx)("div", {
                          className: q.OneBigItem,
                          children: (0, e.jsx)(je, {
                            capsule: a[0],
                            imageType: "main",
                          }),
                        }),
                      ],
                    })
                  : null;
        }
        function He(o) {
          const { rgSaleCapsules: a, children: n } = o;
          return (0, e.jsxs)("div", {
            className: q.DlcCtn,
            children: [
              n,
              (0, e.jsx)(Ee, { first: a[0], second: a[1] }),
              (0, e.jsx)(Ee, { first: a[2], second: a[3] }),
            ],
          });
        }
        function Pe(o) {
          return (0, e.jsx)("div", {
            className: q.DealDesc,
            children: o.strDesc,
          });
        }
        function Ee(o) {
          const { first: a, second: n } = o;
          return (0, e.jsxs)("div", {
            className: q.TwoCapsuleRow,
            children: [
              (0, e.jsx)("div", {
                className: q.DlcCtn,
                children: (0, e.jsx)(je, { capsule: a, imageType: "header" }),
              }),
              (0, e.jsx)("div", {
                className: q.DlcCtn,
                children: (0, e.jsx)(je, { capsule: n, imageType: "header" }),
              }),
            ],
          });
        }
        var ze = s(36118),
          Le = s(53113),
          Ce = s(31343);
        function Qe(o) {
          const a = ee(),
            [n, r] = (0, c.useState)(() => a.GetFeaturedVideoAutoPlay()),
            u = (0, c.useRef)(null);
          (0, te.q)(u);
          const f = (0, N.WN)(a.GetTemplateVars().linkurl, I.cU.wY),
            C = (0, g.Qn)();
          return (0, e.jsx)(b.Z, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (D) =>
              !C && a.GetFeaturedVideoAutoPlay() ? f(D) : r(!0),
            className: Ce.PosterCtn,
            children: n
              ? (0, e.jsxs)("video", {
                  controls: !a.GetFeaturedVideoLoop(),
                  ref: u,
                  muted: !0,
                  autoPlay: !0,
                  className: Ce.Video,
                  loop: a.GetFeaturedVideoLoop(),
                  crossOrigin: "anonymous",
                  children: [
                    (0, e.jsx)("source", {
                      src: (0, Le.L$)(a.GetFeaturedVideoWebMURL()),
                      type: "video/webm",
                    }),
                    !y.TS.IN_CLIENT &&
                      (0, e.jsx)("source", {
                        src: (0, Le.L$)(a.GetFeaturedVideoMP4URL()),
                        type: "video/mp4",
                      }),
                    (0, e.jsx)($e, { message: a }),
                  ],
                })
              : (0, e.jsx)(Ye, { message: a }),
          });
        }
        function Ye(o) {
          const { message: a } = o,
            n = a.GetTemplateVars()?.last_asset_mtime,
            [r, u] = a.GetPosterImage(),
            f = H(a.id, u, n, { type: "file", path: r });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("img", { src: f, className: Ce.Poster }),
              (0, e.jsx)(ze.IOc, {}),
            ],
          });
        }
        function $e(o) {
          const { message: a } = o,
            n = (0, c.useMemo)(() => {
              const r = a.GetSubtitleObj(),
                u = a.GetTemplateVars()?.last_asset_mtime,
                f = new Array();
              for (let C = v.Bhc; C < v.bP9; ++C) {
                if (!A.A0.IsELanguageValidInRealm(C, y.TS.EREALM)) continue;
                const D = (0, v.LgB)(C);
                if (r && r[D]) {
                  const X = r[D].path,
                    Z = H(a.id, C, u, { type: "file", path: X });
                  f.push(
                    (0, e.jsx)(
                      "track",
                      {
                        src: Z,
                        kind: "subtitles",
                        srcLang: (0, v.wwZ)(C),
                        default: y.TS.LANGUAGE == D,
                        label: (0, A.we)(
                          "#language_selection_" + (0, v.LgB)(C),
                        ),
                      },
                      a.id + " " + C,
                    ),
                  );
                }
              }
              return f;
            }, [a]);
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function Je(o) {
          const { bLowBandwidthMode: a } = o,
            n = ee(),
            r = !a && n.GetTemplateVars().custom_display === "featured_video";
          return (0, e.jsx)($.Ay, {
            children: (0, e.jsxs)(K, {
              children: [
                (0, e.jsx)(pe, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: r,
                }),
                (0, e.jsxs)(Y, {
                  children: [
                    (0, e.jsx)(pe, { bOverrideUseBackgroundImage: r }),
                    !!r && (0, e.jsx)(Qe, {}),
                  ],
                }),
                (0, e.jsx)(ve, {}),
              ],
            }),
          });
        }
        function Ze(o) {
          const a = ee(),
            n = (0, N.WN)(a.GetTemplateVars().linkurl, I.cU.vm);
          return (0, e.jsx)($.Ay, {
            children: (0, e.jsxs)(K, {
              children: [
                (0, e.jsx)(pe, { isBackgroundBlur: !0 }),
                (0, e.jsx)(Y, { children: (0, e.jsx)(le, { fnOnClick: n }) }),
                (0, e.jsx)(ve, {}),
              ],
            }),
          });
        }
        var Be = s(87937),
          Xe = s(86048),
          qe = s(41188),
          es = s(64457),
          ss = s(48963),
          ie = s.n(ss),
          ts = s(25046),
          as = s(85599),
          ns = s(76532),
          ye = s.n(ns),
          rs = s(71421),
          is = s(67705);
        function os(o) {
          const { id: a } = o,
            { data: n } = (0, t.J$)(a),
            r = (0, c.useMemo)(() => {
              if (!n) return [];
              const u =
                n.categories?.supported_player_categoryids?.slice(0, 1) || [];
              return (
                n.categories?.feature_categoryids?.forEach((f) => u.push(f)),
                n.categories?.controller_categoryids?.forEach((f) => u.push(f)),
                n.categories?.supported_player_categoryids
                  ?.slice(1)
                  .forEach((f) => u.push(f)),
                u
              );
            }, [n]);
          return !r || r.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: (0, L.A)(ye().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  r?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, L.A)(ye().TagBox, ye().Categories),
                        children: r.map((u) =>
                          (0, e.jsx)(ls, { categoryID: u }, "cat_" + u),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: (0, A.we)("#Broadcast_None"),
                      }),
              });
        }
        class _e {
          m_rgCategories;
          constructor() {
            this.m_rgCategories = (0, is.Tc)(
              "feature_categories",
              "application_config",
            );
          }
          static g_Self = null;
          static Get() {
            return _e.g_Self || (_e.g_Self = new _e()), _e.g_Self;
          }
        }
        function ls(o) {
          const { categoryID: a } = o,
            n = _e.Get().m_rgCategories.find((r) => r.categoryid == a);
          return n
            ? (0, e.jsx)("div", {
                className: ye().Category,
                children: (0, e.jsx)(rs.he, {
                  toolTipContent: n.name,
                  children: (0, e.jsx)("div", {
                    className: ye().CategoryIcon,
                    style: {
                      background: `url(${y.TS.STORE_CDN_URL}/public/images/${n.image_path}) no-repeat center center/cover`,
                    },
                  }),
                }),
              })
            : null;
        }
        function cs(o) {
          const {
              id: a,
              fnOnClickButton: n,
              bLowBandwidthMode: r,
              bUseAssetWithoutOverride: u,
            } = o,
            { data: f } = (0, t.j4)(a),
            { data: C } = (0, t.J$)(a),
            D = (0, ts.kB)(a);
          return !f || !C
            ? (0, e.jsx)("div", {
                className: (0, L.A)(ie().HilightGrid, ie().MediaContainerMM),
                children: (0, e.jsx)(as.t, { size: "medium" }),
              })
            : (0, e.jsx)("div", {
                className: (0, L.A)(ie().HilightGrid, ie().MediaContainerMM),
                children: (0, e.jsx)(es._t, {
                  id: a,
                  elFeaturedInCenter: (0, e.jsx)(ms, {
                    id: a,
                    bUseAssetWithoutOverride: !!u,
                    fnOnClickButton: n,
                  }),
                  trailer: D && D.length > 0 ? D[0] : void 0,
                  storeItemScreenshots: f,
                  bUseTrailerAsFirstThumb: !r,
                  bNoScreenShotModals: !0,
                  name: C.name || "",
                }),
              });
        }
        function ms(o) {
          const { id: a, fnOnClickButton: n, bUseAssetWithoutOverride: r } = o,
            [, u] = (0, Xe.OP)(),
            { data: f } = (0, t.lv)(a, r),
            { data: C } = (0, t.J$)(a),
            { data: D } = (0, t.wl)(a),
            { data: X } = (0, t.xz)(a);
          if (!f || !D || !C) return null;
          const Z = (0, i.b0)(f, "main_capsule");
          return (0, e.jsxs)(b.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: ie().MainCapsuleWithHover,
            ...u,
            onActivate: n,
            children: [
              (0, e.jsx)("img", {
                className: ie().MainCapsule,
                src: Z,
                alt: C.name || "",
              }),
              (0, e.jsxs)("div", {
                className: ie().AppDetails,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, L.A)(ie().GameName),
                    children: C.name || "",
                  }),
                  (0, e.jsxs)("div", {
                    className: ie().ShortDesc,
                    children: [D.short_description, " "],
                  }),
                  (0, e.jsx)(qe.n, {
                    rgTagIDs: X
                      ? X.slice(0, 10).map((se) => se.tagid || 0)
                      : [],
                    instanceNum: 0,
                    bLargeText: !0,
                    bHideTitle: !0,
                    bNoStoreLinks: !0,
                  }),
                  (0, e.jsx)(os, { id: a }),
                ],
              }),
            ],
          });
        }
        var ds = s(6698),
          us = s(92264),
          me = s(92609),
          Oe = s(179);
        function gs(o) {
          const { bPreview: a, bLowBandwidthMode: n } = o,
            r = ee(),
            u = (0, N.WN)(r.GetTemplateVars().linkurl, I.cU.C1),
            f = r.associated_item_key;
          return (0, e.jsx)($.Ay, {
            submethod: "mm-auto-render",
            children: (0, e.jsxs)(K, {
              children: [
                (0, e.jsx)(re, { id: f }),
                (0, e.jsx)(Y, {
                  children: (0, e.jsxs)("div", {
                    className: me.AutoRenderContents,
                    children: [
                      (0, e.jsxs)("div", {
                        className: me.TitleContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: me.TypeTitle,
                            children: M.rT.GetTypeAsLocalizedString(
                              r.GetType(),
                            ),
                          }),
                          (0, e.jsx)(hs, { message: r, id: f }),
                        ],
                      }),
                      (0, e.jsx)(ds.oj, {
                        appid: r.associated_item_appid,
                        children: (0, e.jsx)(cs, {
                          id: f,
                          fnOnClickButton: u,
                          bLowBandwidthMode: n,
                          bUseAssetWithoutOverride:
                            r.GetAutoRenderWithoutAssetOverrides(),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(ne, {
                  bHidePrice: r.GetTemplateVars().hide_price,
                  fnOnClickButton: u,
                }),
              ],
            }),
          });
        }
        function hs(o) {
          const { message: a, id: n } = o,
            { data: r } = (0, t.J$)(n),
            u = r?.free_weekend,
            [f] = (0, Oe.QD)("timezone"),
            [C] = (0, Oe.QD)("locale");
          if (a.GetType() == I.D4.SK) {
            if (u?.text)
              return (0, e.jsx)("div", {
                className: me.TypeSubTitle,
                children: u.text,
              });
            if (u?.end_time) {
              C && A.pf.SetPreferredLocales([C]);
              const Z = f || Intl.DateTimeFormat().resolvedOptions().timeZone,
                se = u.end_time,
                ae = Be.unix(se).tz(Z),
                fe = ae.format("z"),
                xe = fe.match(/^-?\d/)
                  ? `UTC${Be.unix(se).tz(Z).format("Z").replace(":00", "")}`
                  : fe,
                Re = (0, us.P0)(ae.unix(), !1, xe, f);
              return (0, e.jsx)("div", {
                className: me.TypeSubTitle,
                children: (0, A.we)("#msg_free_play_until", Re),
              });
            } else
              return (0, e.jsx)("div", {
                className: me.TypeSubTitle,
                children: (0, A.we)("#msg_free_play_weekend"),
              });
          }
          const X = a.GetTemplateVars()?.autorender_subtitle_token;
          return X
            ? (0, e.jsx)("div", {
                className: me.TypeSubTitle,
                children: (0, A.we)(X),
              })
            : null;
        }
        const Se = c.createContext(null);
        function ee() {
          return c.useContext(Se);
        }
        function _s(o) {
          const { message: a, preview: n } = o,
            r = o.active !== !1,
            u = (0, j.NZ)();
          return (
            c.useEffect(() => {
              r && u(a.GetLegalHTML());
            }, [r, a, u]),
            (0, e.jsx)(Se.Provider, {
              value: a,
              children: (0, e.jsx)(c.Suspense, {
                fallback: null,
                children: (0, e.jsx)(ps, { message: a, active: r, preview: n }),
              }),
            })
          );
        }
        const fs = c.lazy(() =>
          Promise.all([s.e(75976), s.e(8287)]).then(s.bind(s, 72795)),
        );
        function ps(o) {
          const { message: a, active: n, preview: r } = o,
            u = (0, v.sfN)(g.TS.LANGUAGE),
            { bLowBandwidthMode: f } = (0, _.ri)();
          if (
            (0, M.$I)(a.GetTemplateVars().custom_display || "") &&
            g.iA.logged_in
          ) {
            const D = Number(
              (0, M.fL)(a.GetTemplateVars().custom_display || ""),
            );
            return isNaN(D) ? null : (0, e.jsx)(fs, { active: n, year: D });
          }
          switch (a.GetTemplateVars().custom_display) {
            case "dlc_override":
              return (0, e.jsx)(Ke, { bPreview: r });
            case "partner_event":
              return (0, e.jsx)(Ae, {
                bPreview: r,
                bUseAnimated: (0, _.vn)(a, u, f),
              });
            case "mm_auto_render":
              return (0, e.jsx)(gs, { bPreview: r, bLowBandwidthMode: f });
          }
          return a.GetTemplateType() === "image"
            ? (0, _.vn)(a, u, f)
              ? (0, e.jsx)(Ze, {})
              : (0, e.jsx)(Je, { bLowBandwidthMode: f })
            : null;
        }
      },
      70537: (G, k, s) => {
        "use strict";
        s.d(k, { Mf: () => $, Ng: () => O, eI: () => J });
        var e = s(7850),
          v = s(97743),
          c = s(90626),
          M = s(92757),
          j = s(16412),
          g = s(18210),
          _ = s(32858),
          h = s(84121),
          N = s.n(h),
          b = s(36118),
          U = s(36707),
          w = s(90740),
          y = s(27638),
          H = s(85599),
          z = s(94344);
        const te = 8,
          B = c.createContext(null);
        function O() {
          return c.useContext(B);
        }
        function $(p) {
          const { MarketingMessagesStore: T } = p,
            l = (0, _.ri)(),
            { rgMessages: t, isError: i } = (0, v.XW)(T, l),
            [m, d] = c.useState(!1),
            [x, P] = c.useState(0);
          (0, y.Y)(h.MarketingMessagePage);
          const R = (0, M.W6)();
          if (
            (c.useEffect(() => {
              t &&
                !t.length &&
                !i &&
                (l.bIncludeSeenMessages
                  ? d(!0)
                  : R.replace({
                      ...R.location,
                      search: (0, _.GY)({ ...l, bIncludeSeenMessages: !0 }),
                    }));
            }, [t, l, R, i]),
            i)
          )
            return (0, e.jsx)(S, {
              children: (0, g.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (m)
            return (0, e.jsx)(S, {
              children: (0, g.we)("#MarketingMessages_NoneAvailable"),
            });
          const V = l.bIncludeSeenMessages ? t : t?.slice(0, te);
          return (0, e.jsxs)("div", {
            className: h.MessageListPage,
            children: [
              (0, e.jsx)("div", {
                className: h.MessageListScroll,
                children: (0, e.jsx)(L, {
                  MarketingMessagesStore: T,
                  rgMessages: V,
                  iActiveMessage: x,
                }),
              }),
              (0, e.jsx)(A, {
                cMessages: V?.length,
                iMessage: x,
                setMessage: P,
              }),
            ],
          });
        }
        function L(p) {
          const {
            MarketingMessagesStore: T,
            rgMessages: l,
            iActiveMessage: t,
          } = p;
          return l
            ? (0, e.jsx)("div", {
                className: h.MessageListContainer,
                children: l?.map((i, m) =>
                  (0, e.jsx)(
                    I,
                    {
                      displayIndex: m,
                      message: i,
                      MarketingMessagesStore: T,
                      active: m == t,
                      next: m == t + 1 || m == t - 1,
                    },
                    i.id,
                  ),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, U.A)(h.MessageListContainer, h.Loading),
                children: (0, e.jsx)(H.t, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function A(p) {
          const { cMessages: T, iMessage: l, setMessage: t } = p,
            i = c.useCallback(() => t(l - 1), [t, l]),
            m = c.useCallback(() => t(l + 1), [t, l]),
            d = [];
          for (let R = 0; R < T; R++)
            d.push(
              (0, e.jsx)(Q, { active: R == l, iMessage: R, setMessage: t }, R),
            );
          const x = l > 0 ? i : void 0,
            P = l < T - 1 ? m : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: h.CarouselSpacer }),
              (0, e.jsx)("div", {
                className: h.CarouselBar,
                children: (0, e.jsxs)("div", {
                  className: h.Content,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, U.A)(h.LeftArrow, x && h.Active),
                      onClick: x,
                      children: (0, e.jsx)(b.l8x, { angle: 180 }),
                    }),
                    (0, e.jsx)("div", { className: h.Spacer }),
                    (0, e.jsx)("div", {
                      className: h.PipContainer,
                      children: (0, e.jsx)("div", {
                        className: h.Pips,
                        children: d,
                      }),
                    }),
                    (0, e.jsx)("div", { className: h.Spacer }),
                    (0, e.jsx)("div", {
                      className: (0, U.A)(h.LeftArrow, P && h.Active),
                      onClick: P,
                      children: (0, e.jsx)(b.l8x, { angle: 0 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Q(p) {
          const { active: T, iMessage: l, setMessage: t } = p,
            i = c.useCallback(() => t(l), [t, l]);
          return (0, e.jsx)("div", {
            className: (0, U.A)(h.Pip, T && h.Active),
            onClick: i,
          });
        }
        function J(p) {
          const { MarketingMessagesStore: T, preview: l } = p,
            t = (0, M.W5)(),
            { message: i, isError: m } = (0, v.dr)(T, t.params.messageid, l);
          return (
            (0, y.Y)(h.MarketingMessagePage),
            m
              ? (0, e.jsx)(S, {
                  children: (0, g.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : t.params.messageid
                ? i
                  ? (0, e.jsx)(z.Q, { message: i, preview: l })
                  : null
                : (0, e.jsx)(S, {
                    children: (0, g.we)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function S(p) {
          return (0, e.jsxs)(j.UC, {
            style: { maxWidth: "400px", margin: "0 auto" },
            children: [
              (0, e.jsxs)(j.Y9, {
                children: [(0, g.we)("#Error_Generic"), " "],
              }),
              (0, e.jsx)(j.nB, { children: p.children }),
            ],
          });
        }
        function F(p, T, l) {
          c.useEffect(() => {
            T &&
              p.MarkMessageSeen(T.id, l + 1, T.GetTemplateTypeForReporting());
          }, [T, p, l]);
        }
        function I(p) {
          const {
              message: T,
              MarketingMessagesStore: l,
              active: t,
              next: i,
              displayIndex: m,
            } = p,
            d = c.useRef(void 0),
            x = c.useRef(t || i);
          if ((F(l, t ? T : null, m), (t || i) && (x.current = !0), !x.current))
            return null;
          let P = {
            enter: h.Enter,
            enterActive: h.EnterActive,
            enterDone: h.EnterDone,
            exit: h.Exit,
            exitActive: h.ExitActive,
            exitDone: h.ExitDone,
          };
          return (0, e.jsx)(w.A, {
            in: t,
            nodeRef: d,
            classNames: P,
            timeout: 300,
            mountOnEnter: !i,
            unmountOnExit: !i,
            children: (0, e.jsx)(B.Provider, {
              value: m,
              children: (0, e.jsx)("div", {
                className: (0, U.A)(h.MessageWrapper, t && h.Active),
                ref: d,
                children: (0, e.jsx)(z.Q, { message: T, active: t }),
              }),
            }),
          });
        }
      },
      32858: (G, k, s) => {
        "use strict";
        s.d(k, { GY: () => j, ri: () => M, vn: () => g });
        var e = s(90626),
          v = s(92757),
          c = s(18210);
        function M() {
          const _ = (0, v.zy)();
          return e.useMemo(() => {
            const h = new URLSearchParams(_.search);
            return {
              bIncludeSeenMessages: !!h.get("include_seen"),
              nClientPackageVersion: parseInt(
                h.get("client_package_version") || "0",
              ),
              eOSType: parseInt(h.get("os_type") || "0"),
              bLowBandwidthMode: !!h.get("low_bandwidth"),
            };
          }, [_.search]);
        }
        function j(_) {
          const h = new URLSearchParams();
          return (
            _.bIncludeSeenMessages && h.append("include_seen", "1"),
            _.nClientPackageVersion &&
              h.append(
                "client_package_version",
                _.nClientPackageVersion.toString(),
              ),
            _.eOSType && h.append("os_type", _.eOSType.toString()),
            _.bLowBandwidthMode && h.append("low_bandwidth", "1"),
            h.toString()
          );
        }
        function g(_, h, N) {
          if (!N && _.BHasTemplateAnimatedAssets()) {
            const b = c.A0.GetELanguageFallback(h);
            return (
              _.BHasTemplateAnimatedAssetForLanguage(h) ||
              _.BHasTemplateAnimatedAssetForLanguage(b)
            );
          }
          return !1;
        }
      },
      35330: (G, k, s) => {
        "use strict";
        s.r(k), s.d(k, { MarketingMessageRoutes: () => z, default: () => te });
        var e = s(7850),
          v = s(58732),
          c = s(90626),
          M = s(92757),
          j = s(67705);
        const g = c.createContext({ prioritized_list: !1 });
        function _(L) {
          const [A, Q] = c.useState(),
            J = (0, M.zy)(),
            S = c.useMemo(() => {
              const F = new URLSearchParams(J.search);
              return {};
            }, [J.search]);
          return (
            c.useEffect(() => {
              const F = (0, j.Tc)(
                "marketingmessage_config",
                "application_config",
              );
              Q({});
            }, [S]),
            A
              ? (0, e.jsxs)(g.Provider, {
                  value: A,
                  children: [L.children, " "],
                })
              : null
          );
        }
        var h = s(70537),
          N = s(68312),
          b = s(3685),
          U = s(97743),
          w = s(32738),
          y = s(51079),
          H = s(3166);
        const z = {
          List: () => `${v.B.MarketingMessages()}list/`,
          Message: (L) => `${v.B.MarketingMessages()}${L}`,
          MessagePreview: (L) => `${v.B.MarketingMessages()}preview/${L}`,
        };
        function te(L) {
          const A = $();
          return A
            ? (0, e.jsx)(y.Ay, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, e.jsx)(_, {
                  children: (0, e.jsx)(w.g1, {
                    children: (0, e.jsxs)(M.dO, {
                      children: [
                        (0, e.jsx)(M.qh, {
                          path: `${z.List()}`,
                          children: (0, e.jsx)(h.Mf, {
                            MarketingMessagesStore: A,
                          }),
                        }),
                        (0, e.jsx)(M.qh, {
                          path: `${z.MessagePreview(":messageid")}`,
                          children: (0, e.jsx)(h.eI, {
                            MarketingMessagesStore: A,
                            preview: !0,
                          }),
                        }),
                        (0, e.jsx)(M.qh, {
                          path: `${z.Message(":messageid")}`,
                          children: (0, e.jsx)(h.eI, {
                            MarketingMessagesStore: A,
                          }),
                        }),
                        (0, e.jsx)(M.qh, {
                          children: (0, e.jsx)(M.rd, { to: `${z.List()}` }),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        }
        let B;
        function O(L) {
          if (!B) {
            const A = (0, H.Tc)(
              "marketingmessage_config",
              "application_config",
            );
            if (((B = new U.Nt(L)), A?.promotion_operation_token)) {
              const Q = new b.D(
                H.TS.WEBAPI_BASE_URL,
                A.promotion_operation_token,
              );
              B.SetSteamInterfacePromotions(Q);
            }
          }
          return B;
        }
        function $() {
          const [L, A] = c.useState(null),
            Q = (0, N.TR)();
          return (
            c.useEffect(() => {
              L || A(O(Q));
            }, [L, Q]),
            L
          );
        }
      },
      48963: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
      84121: (G) => {
        G.exports = {
          MarketingMessagePage: "_1HVoKfdcaouK3kHKX2kH5t",
          MessageListPage: "_1N7O3VXbkpN2z55HsSDZsi",
          MessageListScroll: "_2RW7G8Bi-8k-29anQh8Ie8",
          CarouselBar: "O7VJKyPtoS7TXCr6mrwCr",
          Content: "_1qtg3ASXX4ClYiTHPq9Tkl",
          LeftArrow: "_3ZyZUkBq73dLvZ6zKdM9PQ",
          RightArrow: "_2WuPusSmjw_B4rfkgb-NV8",
          Active: "cwA5j4AsP5OB7WjWuOlFv",
          Spacer: "COvXCP3wZxk_s1ho7e3WO",
          PipContainer: "_3ASpk2zuTuDhIXKorFGF_L",
          Pips: "_1rpuGJtVR-xrddd9ui6IWu",
          Pip: "ZQrtMhZB1tpkd2bgBXyIF",
          MessageListContainer: "_33cf4TnmCK5XdTjanW9bVf",
          Loading: "_1xSKZdDmIvXYCmFif6fSAq",
          MessageWrapper: "_152h7KWYvm_9hIyzRzh8kl",
          Enter: "DZICERQkVmyCBP2E-PwlH",
          EnterActive: "RU-xm1VaMHf9H7o1TFkVO",
          EnterDone: "_3AP2YQ_mKZF-H78sMt3rKC",
          Exit: "_2xmDIRYN5Pu_eHRMjWop63",
          ExitActive: "_32DFHj9NmyNtEK-3K3nKuX",
          ExitDone: "_3cFXRpyI9jrZ2qCySg3fiT",
        };
      },
      92609: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          AutoRenderContents: "_1H1L2spV-tto6AJmQMSfsA",
          TitleContainer: "_2iA76-Eh1ID-HXFGGR5BoH",
          TypeTitle: "klzItvORTtJ0Eeg8ArDrN",
          TypeSubTitle: "QPZq6bu7lf50YpRKZgPCc",
          BackgroundAnimation: "_13qwvch-5kbKbOaRivhMXc",
          "ItemFocusAnim-darkerGrey-nocolor": "_3DNhNNrE4iKRi60PdXWepo",
          "ItemFocusAnim-darkerGrey": "_15lW83rYVxUKmbx_X2Huiw",
          "ItemFocusAnim-darkGreySettings": "_2-gDTKZjm9Ajq5sJ9tSPUR",
          "ItemFocusAnim-darkGrey": "_3HGF0obZAs6s2bNbYpM7qW",
          "ItemFocusAnim-grey": "_3YpbyrBpBdoe0gBRw1Hbqx",
          "ItemFocusAnim-translucent-white-10": "_30y8LayXh8jUHdaxQlL0ZS",
          "ItemFocusAnim-translucent-white-20": "_27U6YkfThQDFTGvax-gmlu",
          "ItemFocusAnimBorder-darkGrey": "_2JbY6SYVtLg0XfAcDsFaMR",
          "ItemFocusAnim-green": "_3976kBFFMdgKDnNELLMM6G",
          focusAnimation: "SzNeb_49-6eaLunS7L3C",
          hoverAnimation: "_1ji7N9JSTyeK_qtueFlYQi",
        };
      },
      720: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          UpdateEventCtn: "_3ICxVDu3-Bkx9aqyLehGGP",
          EventImage: "zDfA0bzAjCUkfaQx_KvS7",
          BackgroundAnimation: "OTs9Tg4QxhQ0Y_QNGDDt9",
          "ItemFocusAnim-darkerGrey-nocolor": "_1NdRyUGS8v6vgPO4so1xTw",
          "ItemFocusAnim-darkerGrey": "_2pygTjxugmVCyf_AACiIV9",
          "ItemFocusAnim-darkGreySettings": "_2k7FRzOjQym6IuES_SDcJs",
          "ItemFocusAnim-darkGrey": "_3znWC1DynbIfoAl5wwBaoo",
          "ItemFocusAnim-grey": "_2oa-LIlworjV0-bg_CQfoy",
          "ItemFocusAnim-translucent-white-10": "i9BFCko5sTUsKunkoSgIG",
          "ItemFocusAnim-translucent-white-20": "_2XDvVDTKofCXGIqRPg15Bt",
          "ItemFocusAnimBorder-darkGrey": "_3rZ3pu0VIsvlLePQQSHFLd",
          "ItemFocusAnim-green": "_2vAKcsXEpb9snlDyeK82te",
          focusAnimation: "_2I7fW0qyN3vk4sB9-UXHBH",
          hoverAnimation: "_1TlYxkxN-WZNFNjoM2t3Ha",
        };
      },
      16205: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          BackgroundImage: "_3vQ5a1hrg4SbTU1Uw3351z",
          DlcCtn: "_3H7i0ChQjoGWieNRcKmYea",
          Type: "HmoaKPBZvHxysTOtEt6I_",
          DealDesc: "_3fPQtBXFQwL3xrK4zmpmyq",
          OneItemRow: "_6a9d-uI8VyQTmWHS3vFI-",
          OneBigItem: "_2lKQioAzojICHeg5SX6fhc",
          TwoCapsuleRow: "_1s9-9e_1KjO0xTTJNj-KuT",
          BackgroundAnimation: "MAJyK9QcMypCZbMYmoLHu",
          "ItemFocusAnim-darkerGrey-nocolor": "_2IE90ljBHRp1SITs86XIYT",
          "ItemFocusAnim-darkerGrey": "_3Izi4xp4tar8pwj5nAAAJx",
          "ItemFocusAnim-darkGreySettings": "_1AXb9HQ7EwT6k-c4TWuD6b",
          "ItemFocusAnim-darkGrey": "_17XlJo9wQvFGnl_mC2sDDP",
          "ItemFocusAnim-grey": "_2_GD3bdKzrHkm2Ldb6tVut",
          "ItemFocusAnim-translucent-white-10": "_31VDSRuwtIPGNRsMsAiiuS",
          "ItemFocusAnim-translucent-white-20": "RpA2APZ8BdkDDu88M1t99",
          "ItemFocusAnimBorder-darkGrey": "_1JoYgnM2uNiTB2PbeAfe-S",
          "ItemFocusAnim-green": "_2cI4C5AH9C-VNLXQyhLoZE",
          focusAnimation: "_1kz2gc1Q6nZYfgugTIMxpo",
          hoverAnimation: "_2Kc7YeIDyVeYMtcdglCErh",
        };
      },
      31343: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          PosterCtn: "_24bJJZ8-xr8Et4DVUrr17J",
          Poster: "_3LbyxomxMvYMy7cLThkkIf",
          Video: "_2bH_Jxh-T2YFCPBCW_pvQB",
          BackgroundAnimation: "fmJwkjLpps2lTYiDhuZaS",
          "ItemFocusAnim-darkerGrey-nocolor": "_3P7eXvQeL41e2U1Dlf-o3y",
          "ItemFocusAnim-darkerGrey": "_1ox1csOfGebwxpQWCIrD8r",
          "ItemFocusAnim-darkGreySettings": "_1edLKf573MLIIzXMGDJQuk",
          "ItemFocusAnim-darkGrey": "_20nB-hQDWUFRiLXleHcpCi",
          "ItemFocusAnim-grey": "_3izRpxwl4_d_Vxa1pgYMiA",
          "ItemFocusAnim-translucent-white-10": "_1hhQO02787EOl9eQ9AMGYY",
          "ItemFocusAnim-translucent-white-20": "Y9TgOYN31D-9Nr_0YqCTN",
          "ItemFocusAnimBorder-darkGrey": "_3vZR4wYNZIWMbiwF5nGGUP",
          "ItemFocusAnim-green": "_1rcnmgd1hOIPA9f3ngfevA",
          focusAnimation: "_3uCspaHoybU11f9AiHQU-o",
          hoverAnimation: "fLko22pxQFa4_xcoc8AEf",
        };
      },
      22329: (G) => {
        G.exports = {
          "duration-app-launch": "800ms",
          All: "_1Ihp0wKLvNYkePQe0VrHnC",
          MessageFooter: "_3t5WMbFCdjhi0jY_LsEmHU",
          ButtonAndPriceCtn: "_1ZbewdWkMfyxa_PdVDMoDU",
          Legal: "_2_eDs58X0eEznR-ukDC_qt",
          NoButton: "_3IuUvJa9v9WI7_4WCI8-5t",
          Btn: "_3J3L60oPKSSmfBrQoNzGka",
          MessagePriceCtn: "_2g5STEIbDalv8hDLrPF3f-",
          Price: "G3m3RKwAqO-NG8_dvnifU",
          NoPrice: "_3fIuqvgfN6oD_bvpdHWEl8",
          PriceReal: "_14BApLFAAyKDCTSv-FU3cM",
          PriceRealShort: "_1E4sfQ48HHNa1aVRVPso3t",
          PriceRegular: "lhwy7sGWsQ0H-qiGzBfVO",
          Strike: "_3zM6T8KcphlmjOBnyqYGi0",
          MessageContent: "_2OxhXhvrpr4BL-kq6s7Eov",
          IsBlur: "_1M-oJo6Qwi_taE9-LcUQXw",
          MessageBody: "yNkHDKSU1gO-i7O8pRwGb",
          MessageImage: "_3R5wv6ya3QU6VH7qq2819z",
          VideoImageContainer: "_2yR5YNB4D48KDMaHJC7ELs",
          GameImage: "_1YhdlZrF81fOxpD5J2tD7o",
          EventType: "_1kBtSqsFkkixOn9MlYuuTa",
          EventTitle: "_2WtqvOJO09bKKgVvJYV_7q",
          SmallTitle: "M0i1HNwFwWUb2fshnV5cu",
          BaseCtn: "_6Tfttc004NhLDjbTDS9PC",
          CapsuleCtn: "bSrl3b6Qz1HKSithRsqvM",
          DescCtn: "_20PKe9KJTJC5SAbLi4Dy-Y",
          GameNameCtn: "kgQI2KVBs-Y3neqiTpbvQ",
          GameName: "QFFkjL-A27JtOIgIqO5dH",
          LibraryDetails: "_1ddC4grHqe7uggEE2cihEv",
          Button: "_2T5KnJO7YB00MG9YIyfImx",
          ViewInLibrary: "_3he9kmZ7_zW9VD6jkZAb1N",
          PlayDetailCtn: "J3BmO963EVK__A5VRDAQM",
          TextTop: "_3eCgYrG63hATLNUS2prQdu",
          TextBottom: "_3-KPIEC01O5ncvCQdfuTum",
          ButtonContainer: "_10sC9pDV-gUZWLDMtbWFpZ",
          BackgroundAnimation: "iazxtC_6xsy3ZAlQoiLly",
          "ItemFocusAnim-darkerGrey-nocolor": "_2cB4L3LYRmW8ZPhM1KmIiK",
          "ItemFocusAnim-darkerGrey": "ydW4ABxqu6OYOVnY28tB8",
          "ItemFocusAnim-darkGreySettings": "_4i8hDH1Gg-f_tUZZ4Zp5",
          "ItemFocusAnim-darkGrey": "_2IeQuqKv4kC7vVDREUnVXJ",
          "ItemFocusAnim-grey": "X3U1lQ94969mdo-OyDB4r",
          "ItemFocusAnim-translucent-white-10": "_3I9H7g6vFex4f-XocVTj-X",
          "ItemFocusAnim-translucent-white-20": "_2_i92FJitTDXOf5j2qHIAl",
          "ItemFocusAnimBorder-darkGrey": "_3ptMvwESzMu4HLigXQtQOm",
          "ItemFocusAnim-green": "jkn_IZFEGtZHxdFRc6KON",
          focusAnimation: "_38aC9CNFSq3FVlwkvehRI-",
          hoverAnimation: "_2a2hzvLCbR64ODBqWR_ARQ",
        };
      },
      61738: (G, k, s) => {
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
        function v(M) {
          var j = c(M);
          return s(j);
        }
        function c(M) {
          if (!s.o(e, M)) {
            var j = new Error("Cannot find module '" + M + "'");
            throw ((j.code = "MODULE_NOT_FOUND"), j);
          }
          return e[M];
        }
        (v.keys = function () {
          return Object.keys(e);
        }),
          (v.resolve = c),
          (G.exports = v),
          (v.id = 61738);
      },
    },
  ]);
})();
