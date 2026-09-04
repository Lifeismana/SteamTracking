/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
      97743: (G, N, s) => {
        "use strict";
        s.d(N, {
          $I: () => z,
          AP: () => D,
          Nt: () => P,
          XW: () => R,
          dr: () => C,
          fL: () => W,
          rT: () => L,
        });
        var e = s(80902),
          h = s(90626),
          l = s(99412),
          j = s(72604),
          v = s(35038),
          c = s(86174),
          p = s(3166),
          m = s(84192),
          O = s(68094),
          S = s(5827),
          k = s(71742),
          b = s(14947),
          M = s(18210),
          U = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          ee = (u, t, i, d) => {
            for (
              var f = d > 1 ? void 0 : d ? V(t, i) : t, y = u.length - 1, F;
              y >= 0;
              y--
            )
              (F = u[y]) && (f = (d ? F(t, i, f) : F(f)) || f);
            return d && f && U(t, i, f), f;
          };
        class P {
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
            P.sm_Instance = new P(t);
          }
          SetSteamInterfacePromotions(t) {
            this.m_SteamInterfacePromotions = t;
          }
          static Get() {
            return (
              (0, k.wT)(
                P.sm_Instance,
                "MarketingMessages store not initialized",
              ),
              P.sm_Instance
            );
          }
          async GetMessageList(t, i = !1) {
            if (!p.iA.logged_in) return [];
            const d = v.w.Init(c.LK);
            d.Body().set_country_code(p.TS.COUNTRY),
              d.Body().set_elanguage((0, l.sfN)(p.TS.LANGUAGE)),
              d.Body().set_client_package_version(t.nClientPackageVersion),
              d.Body().set_operating_system(t.eOSType),
              i && d.Body().set_include_seen_messages(!0),
              (0, m.rV)(d),
              (0, m.Bn)(d, P.sm_DefaultDataRequest);
            const f = await c.EO.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              d,
            );
            if (f.GetEResult() != j.R)
              throw `Error loading marketing messages: ${f.GetEResult()}`;
            if (i)
              for (const y of f.Body().messages())
                y.already_seen() &&
                  this.m_setMessagesSeen.add(y.message().gid());
            return f.Body().messages();
          }
          async GetSingleMessage(t, i) {
            const d = v.w.Init(c.e6);
            d.Body().set_gid(t),
              (0, m.rV)(d),
              (0, m.Bn)(d, P.sm_DefaultDataRequest);
            let f;
            if (
              (i || p.iA.logged_in
                ? (f = await c.EO.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    d,
                  ))
                : (f = await c.EO.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    d,
                  )),
              f.GetEResult() != j.R)
            )
              throw `Error loading marketing messages: ${f.GetEResult()}`;
            return f.Body().message();
          }
          MarkMessageSeen(t, i, d) {
            if (this.m_setMessagesSeen.has(t)) return;
            const f = v.w.Init(c.S4);
            f.Body().set_gid(t),
              f.Body().set_display_index(i),
              f.Body().set_template_type(d),
              c.EO.MarkMessageSeen(
                this.m_SteamInterface.GetServiceTransport(),
                f,
              ),
              this.m_setMessagesSeen.add(t);
          }
          BIsMessageSeen(t) {
            return this.m_setMessagesSeen.has(t);
          }
        }
        function se(u) {
          if (!u) return null;
          try {
            const t = JSON.parse(u);
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
        function H(u) {
          return `\xA9 ${new Date().getFullYear()} Valve Corporation${u ? " and " + u : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        class L {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          constructor(t) {
            (0, b.Gn)(this),
              (this.m_message = t),
              (this.m_templateVars = se(t.template_vars_json()));
            const i = t.associated_item(!1);
            this.m_associatedItemKey = i
              ? (0, O.Jz)({ item_type: i.item_type(), id: i.id() })
              : void 0;
          }
          get id() {
            return this.m_message.gid();
          }
          GetType() {
            return this.m_message.type();
          }
          static GetTypeAsLocalizedString(t) {
            switch (t) {
              case c.D4.QJ:
                return (0, M.we)("#spotlight_weekend_deal");
              case c.D4.xl:
                return (0, M.we)("#spotlight_midweek_madness");
              case c.D4.Sk:
                return (0, M.we)("#spotlight_daily_deal");
              case c.D4.OD:
                return (0, M.we)("#msg_available_everywhere");
              case c.D4.RV:
                return (0, M.we)("#msg_new_game");
              case c.D4.IT:
                return (0, M.we)("#msg_prepurchase_now");
              case c.D4.T9:
                return (0, M.we)("#msg_play_now");
              case c.D4.QY:
                return (0, M.we)("#label_pre_load_now");
              case c.D4.W8:
                return (0, M.we)("#label_just_updated");
              case c.D4.eV:
                return (0, M.we)("#label_new_dlc_available");
              case c.D4.SK:
                return (0, M.we)("#label_free_weekend");
              case c.D4.eH:
                return (0, M.we)("#msg_on_sale_now");
              case c.D4.k6:
                return (0, M.we)("#msg_play_beta_now");
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
              return c.rj.TO;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return c.rj.k2;
              case "mm_auto_render":
                return c.rj.H;
              case "partner_event":
                return c.rj.GS;
              case "featured_video":
                return c.rj.CT;
            }
            return c.rj.BA;
          }
          GetTemplateVars() {
            return this.m_templateVars;
          }
          GetLocalizedAltText(t) {
            return (
              this.m_templateVars?.localized_alt_text?.[t] ||
              this.m_templateVars?.localized_alt_text?.[
                M.A0.GetELanguageFallback(t)
              ] ||
              void 0
            );
          }
          GetTemplateImage() {
            let t = this.m_templateVars.ll_image[p.TS.LANGUAGE],
              i = (0, l.sfN)(p.TS.LANGUAGE);
            return (
              !t &&
                p.TS.LANGUAGE == (0, l.LgB)(l.FHN) &&
                ((t = this.m_templateVars.ll_image.LATAM), (i = l.FHN)),
              t || ((t = this.m_templateVars.ll_image.english), (i = l.Bhc)),
              [t?.path, i]
            );
          }
          GetTemplateBackgroundImage() {
            let t = this.m_templateVars.background[p.TS.LANGUAGE],
              i = (0, l.sfN)(p.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.background.english), (i = l.Bhc)),
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
            let t = this.m_templateVars.poster[p.TS.LANGUAGE],
              i = (0, l.sfN)(p.TS.LANGUAGE);
            return (
              t || ((t = this.m_templateVars.poster.english), (i = l.Bhc)),
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
            const i = (0, l.LgB)(t);
            return !!this.m_templateVars.mp4[i];
          }
          GetTemplateWebM(t) {
            const i = (0, l.LgB)(t);
            return this.m_templateVars.webm[i]?.path;
          }
          GetTemplateWebMWithFallback(t) {
            const i = (0, l.LgB)(t);
            if (this.m_templateVars.webm[i]?.path)
              return [this.m_templateVars.webm[i].path, t];
            const d = M.A0.GetELanguageFallback(t),
              f = (0, l.LgB)(d);
            return [this.m_templateVars.webm[f]?.path, d];
          }
          GetTemplateMP4(t) {
            const i = (0, l.LgB)(t);
            return this.m_templateVars.mp4[i]?.path;
          }
          GetTemplateMP4WithFallback(t) {
            const i = (0, l.LgB)(t);
            if (this.m_templateVars.mp4[i]?.path)
              return [this.m_templateVars.mp4[i].path, t];
            const d = M.A0.GetELanguageFallback(t),
              f = (0, l.LgB)(d);
            return [this.m_templateVars.mp4[f]?.path, d];
          }
          GetLegalHTML() {
            return this.GetTemplateVars().use_custom_legal_text
              ? this.GetTemplateVars().custom_legal_text
              : H(this.GetTemplateVars().partner);
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
        ee([b.sH], L.prototype, "m_templateVars", 2);
        const x = "^(replay)([0-9]{4})";
        function W(u) {
          return u.match(x)?.[2];
        }
        function z(u) {
          if (u) {
            const t = u.match(x);
            return t?.[2] && !isNaN(Number(t?.[2]));
          }
          return !1;
        }
        function B(u) {
          return u == "mm_auto_render";
        }
        function R(u, t, i) {
          const { bIncludeSeenMessages: d, ...f } = t,
            {
              data: y,
              isLoading: F,
              isError: w,
            } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                "List",
                f,
                { bIncludeSeenMessages: !!d },
              ],
              queryFn: () => u.GetMessageList(f, d),
              ...i,
            }),
            Q = h.useMemo(() => y?.map(($) => new L($.message())), [y]),
            ae = (0, S.cv)(),
            T = h.useRef(new Set());
          return (
            ae &&
              Q?.forEach(($) => {
                if (T.current.has($.id)) return;
                const te = $.GetAssociatedItemProto();
                te && (ae(te, P.sm_DefaultDataRequest), T.current.add($.id));
              }),
            { rgMessages: F ? null : Q, isError: w }
          );
        }
        function I(u, t, i) {
          const d = i?.enabled !== !1,
            { data: f } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: d,
            });
          return R(u, { ...f, ...t }, { ...i, enabled: !!f && d });
        }
        function C(u, t, i) {
          const { data: d, isError: f } = (0, e.I)({
              queryKey: [
                "MarketingMessages",
                i ? "SinglePreivew" : "Single",
                t,
              ],
              queryFn: () => u.GetSingleMessage(t, i),
              enabled: !!t,
            }),
            y = h.useMemo(() => {
              if (d) {
                const Q = new L(d);
                if (i) {
                  const ae = (0, p.Tc)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  ae?.dlc_appid_overrides?.length > 0 &&
                    Q.SetDLCAppIDOverride(ae.dlc_appid_overrides);
                }
                return Q;
              }
            }, [d, i]),
            F = (0, S.cv)(),
            w = h.useRef(new Set());
          if (F && y && !w.current.has(y.id)) {
            const Q = y.GetAssociatedItemProto();
            Q && (F(Q, P.sm_DefaultDataRequest), w.current.add(y.id));
          }
          return { message: y, isError: f };
        }
        function D(u, t, i, d, f) {
          const y = v.w.Init(c.cX);
          y.Body().set_gid(t),
            y.Body().set_display_index(i),
            y.Body().set_template_type(d),
            y.Body().set_click_location(f),
            c.EO.MarkMessageClicked(u, y);
        }
      },
      32738: (G, N, s) => {
        "use strict";
        s.d(N, { NZ: () => p, g1: () => m, ho: () => c });
        var e = s(7850),
          h = s(90626),
          l = s(44930),
          j = s(3166);
        const v = h.createContext({ setLegalText: void 0 });
        function c() {
          return !!h.useContext(v).setLegalText;
        }
        function p() {
          return h.useContext(v).setLegalText || function (k) {};
        }
        function m(S) {
          const [k, b] = h.useState(),
            M = (0, l.Dp)("BrowserView.RegisterForMessageFromParent"),
            U = (0, j.Qn)(),
            V = h.useMemo(
              () => ({ setLegalText: M && !U ? b : void 0 }),
              [M, b, U],
            );
          return (0, e.jsxs)(v.Provider, {
            value: V,
            children: [M && (0, e.jsx)(O, { strLegalText: k }), S.children],
          });
        }
        function O(S) {
          const { strLegalText: k } = S,
            b = h.useRef(void 0);
          return (
            h.useEffect(() => {
              (b.current = k),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  k || "",
                );
            }, [k]),
            h.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((M) => {
                  M == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      b.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      27638: (G, N, s) => {
        "use strict";
        s.d(N, { Y: () => l });
        var e = s(90626);
        function h(j) {
          const { title: v, bodyClassName: c, children: p } = j;
          return (
            React.useEffect(() => {
              const m = document.title;
              return (
                (document.title = v),
                () => {
                  document.title = m;
                }
              );
            }, [v]),
            l(c),
            p
          );
        }
        function l(j) {
          e.useEffect(() => {
            if (!j) return;
            const v = [];
            for (const c of j.split(/ /))
              document.body.classList.contains(c) || v.push(c);
            return (
              document.body.classList.add(...v),
              () => document.body.classList.remove(...v)
            );
          }, [j]);
        }
      },
      8736: (G, N, s) => {
        "use strict";
        s.d(N, { l: () => h });
        var e = s(18210);
        function h(l, j = "#Played_", v = !1) {
          if (l >= 120) {
            let c = l / 60;
            c = Math.round(c * 10) / 10;
            let p = e.pf.GetPreferredLocales(),
              m = c.toLocaleString(p, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, e.we)(j + "Hours", m);
          } else
            return v && l == 1
              ? (0, e.we)(j + "Minute", l)
              : (0, e.we)(j + "Minutes", l);
        }
      },
      9519: (G, N, s) => {
        "use strict";
        s.d(N, { q: () => j });
        var e = s(90626),
          h = s(30096);
        const l = 2e4;
        function j(v) {
          const c = (0, e.useRef)(!1),
            p = (0, e.useRef)(null),
            m = (0, e.useCallback)(() => {
              p.current = setTimeout(() => {
                v.current &&
                  !v.current.paused &&
                  (v.current.pause(), (c.current = !0));
              }, l);
            }, [v]),
            O = (0, e.useCallback)(() => {
              p.current && (clearTimeout(p.current), (p.current = null)),
                v.current && c.current && (v.current.play(), (c.current = !1));
            }, [v]);
          (0, h.l6)(window, "blur", m), (0, h.l6)(window, "focus", O);
        }
      },
      53617: (G, N, s) => {
        "use strict";
        s.d(N, { FS: () => z, WN: () => W, lS: () => H, xf: () => x });
        var e = s(80902),
          h = s(35038),
          l = s(68312),
          j = s(67529),
          v = s(27386),
          c = s(98609),
          p = s(3166),
          m = s(82734),
          O = s(90626),
          S = s(68094),
          k = s(40358),
          b = s(47875),
          M = s(72865),
          U = s(10349),
          V = s(97743),
          ee = s(15978),
          P = s(86174),
          se = s(70537);
        function H(B) {
          const R = (0, l.KV)();
          let I = (0, e.I)({
            queryKey: ["useGamePlaytimeInfo", B],
            queryFn: async () => L(B, R),
            enabled: !!(B && B != j.sc),
          });
          return I.isSuccess ? I.data : null;
        }
        async function L(B, R) {
          const I = h.w.Init(v.G9h);
          I.Body().set_steamid(c.iA.steamid),
            I.Body().set_appids_filter([B]),
            I.Body().set_include_played_free_games(!0),
            I.Body().set_language(c.TS.LANGUAGE);
          const C = await v.xtC.GetOwnedGames(R, I);
          return C.Body().games().length > 0
            ? C.Body().games()[0].toObject()
            : {};
        }
        function x(B) {
          return (0, p.Y2)() && B?.startsWith("https://store.steampowered.com/")
            ? B.replace("https://store.steampowered.com/", c.TS.STORE_BASE_URL)
            : B;
        }
        function W(B, R, I = !1) {
          let C = (0, l.KV)(),
            D = (0, ee.J)(),
            u = (0, se.Ng)();
          u = u !== null ? u + 1 : 0;
          let t;
          R == P.cU.wY
            ? (t = "image")
            : R == P.cU.xe
              ? (t = "button")
              : R == P.cU.FQ
                ? (t = "dlc_capsule")
                : R == P.cU.vx
                  ? (t = "header_area")
                  : R == P.cU.C1
                    ? (t = "game_capsule")
                    : R == P.cU.vm && (t = "partner_event");
          let i = (0, M.aL)(x(B), t);
          return (
            I && (i = B),
            i.startsWith("steam://") || (i = `steam://openurl/${i}`),
            (0, O.useCallback)(
              (f) => {
                (0, V.AP)(C, D.id, u, D.GetTemplateTypeForReporting(), R);
                let y = (0, m.uX)(f);
                y.location.href = i;
              },
              [i, C, D, u, R],
            )
          );
        }
        function z(B, R, I) {
          const C = (0, S.Jz)({ item_type: (0, U.SW)(R), id: B }),
            { data: D } = (0, k.J$)(C);
          return W((0, b._)(D) ?? c.TS.STORE_BASE_URL, I);
        }
      },
      15978: (G, N, s) => {
        "use strict";
        s.d(N, { Q: () => $e, J: () => Y });
        var e = s(7850),
          h = s(99412),
          l = s(90626),
          j = s(97743),
          v = s(32738),
          c = s(3166),
          p = s(32858),
          m = s(72865),
          O = s(53617),
          S = s(19298),
          k = s(48421),
          b = s(24179),
          M = s(98609);
        function U(o, a, n, r) {
          if (!r || !r.path) return null;
          const g = n ? "?t=" + n : "";
          return r.path.startsWith("images")
            ? `${M.TS.MEDIA_CDN_URL}steam/marketing/${o}/${r.path}${g}`
            : `${M.TS.BASE_URL_SHARED_CDN}store_item_assets/mm/${o}/${a}/${r.path}${g}`;
        }
        var V = s(30096),
          ee = s(9519);
        function P(o) {
          const { path: a, message: n, eLanguage: r, ...g } = o,
            _ = n.GetTemplateVars()?.last_asset_mtime,
            A = U(n.id, r, _, { type: "file", path: a }),
            E = n.GetLocalizedAltText(r);
          return (0, e.jsx)("img", { alt: E, ...g, src: A });
        }
        function se(o) {
          const { message: a, mp4Path: n, webmPath: r, language: g, ..._ } = o,
            A = a.GetTemplateVars()?.last_asset_mtime,
            E = U(a.id, g, A, { type: "file", path: r }),
            X = U(a.id, g, A, { type: "file", path: n }),
            Z = (0, l.useRef)(null);
          (0, ee.q)(Z);
          const J = (0, l.useRef)(!1),
            q = (0, l.useCallback)(() => {
              Z.current &&
                (document.visibilityState === "visible"
                  ? J.current && (Z.current.play(), (J.current = !1))
                  : Z.current.paused || (Z.current.pause(), (J.current = !0)));
            }, []);
          return (
            (0, V.l6)(document, "visibilitychange", q),
            (0, l.useEffect)(() => q(), [q]),
            (0, e.jsxs)("video", {
              ..._,
              ref: Z,
              children: [
                (0, e.jsx)("source", { src: E, type: "video/webm" }),
                (0, e.jsx)("source", { src: X, type: "video/mp4" }),
              ],
            })
          );
        }
        var H = s(51079),
          L = s(36707),
          x = s(18210),
          W = s(720),
          z = s.n(W),
          B = s(24660),
          R = s(71742),
          I = s(86174),
          C = s(11996),
          D = s(54528),
          u = s(65946),
          t = s(40358),
          i = s(21721),
          d = s(47875),
          f = s(72838),
          y = s(48357),
          F = s(40232),
          w = s(96117),
          Q = s(25792),
          ae = s(8736),
          T = s(22329);
        function $(o) {
          return (0, e.jsx)("div", {
            className: T.All,
            children: (0, e.jsx)("div", {
              className: T.MessageContent,
              children: o.children,
            }),
          });
        }
        function te(o) {
          return (0, e.jsx)("div", {
            className: T.MessageBody,
            children: o.children,
          });
        }
        function le(o) {
          const { isBackgroundBlur: a, bOverrideUseBackgroundImage: n } = o,
            r = Y(),
            g = (0, O.WN)(r.GetTemplateVars().linkurl, I.cU.wY),
            [_, A] = n ? r.GetTemplateBackgroundImage() : r.GetTemplateImage();
          return (0, e.jsx)(S.Z, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, L.A)(T.MessageImage, a && T.IsBlur),
            onActivate: g,
            children: _ && (0, e.jsx)(P, { message: r, path: _, eLanguage: A }),
          });
        }
        function pe(o) {
          const { fnOnClick: a } = o,
            n = Y(),
            r = (0, h.sfN)(c.TS.LANGUAGE),
            [g, _] = n.GetTemplateMP4WithFallback(r),
            [A, E] = n.GetTemplateWebMWithFallback(r);
          return (
            (0, R.wT)(
              _ == E,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${r} mp4 ${_} webm ${E}`,
            ),
            (0, e.jsx)("div", {
              className: T.VideoImageContainer,
              children: (0, e.jsx)(S.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, L.A)(T.MessageImage),
                onActivate: a,
                children: (0, e.jsx)(se, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: g,
                  message: n,
                  webmPath: A,
                  language: c.TS.IN_CLIENT ? E : _,
                }),
              }),
            })
          );
        }
        function ce(o) {
          const { id: a } = o,
            { data: n } = (0, t.lv)(a),
            r = n ? (0, i.b0)(n, "main_capsule") : void 0;
          return r
            ? (0, e.jsx)("div", {
                className: (0, L.A)(T.MessageImage, T.GameImage, T.IsBlur),
                children: (0, e.jsx)("img", { src: r }),
              })
            : null;
        }
        function he(o) {
          const { id: a, bPreview: n, bPreferAssetWithoutOverride: r } = o,
            { data: g } = (0, t.J$)(a),
            _ = g?.appid,
            A = (0, c.Qn)(),
            { bIsOwned: E } = (0, b.ZJ)(a),
            X = (0, D.bB)(_),
            Z = (0, C.Fh)(_),
            J = (0, O.lS)(_ ?? 0),
            q = (0, l.useMemo)(
              () =>
                n && (!J?.playtime_forever || !J?.rtime_last_played)
                  ? {
                      playtime_forever: 300,
                      rtime_last_played:
                        Math.floor(Date.now() / 1e3) - 7200 * 60,
                    }
                  : J,
              [J, n],
            );
          let re = "steam://openurl/" + ((0, d._)(g) ?? "");
          E &&
            _ &&
            (A
              ? (re = `steam://open/games/details/${_}`)
              : (re = `steam://nav/games/details/${_}`));
          const ie = (0, O.WN)(re, I.cU.vx, E);
          return (0, e.jsxs)("div", {
            className: T.BaseCtn,
            children: [
              (0, e.jsx)(B.Ii, {
                className: T.CapsuleCtn,
                onClick: ie,
                children: (0, e.jsx)(f.G, {
                  id: a,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: r,
                }),
              }),
              (0, e.jsxs)("div", {
                className: T.DescCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: T.GameNameCtn,
                    children: (0, e.jsx)(B.Ii, {
                      className: T.GameName,
                      onClick: ie,
                      children: g?.name,
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: T.LibraryDetails,
                    children: [
                      (0, e.jsx)(B.Ii, {
                        onClick: ie,
                        className: (0, L.A)(T.Button, T.ViewInLibrary),
                        children: (0, x.we)(
                          E
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !E &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: T.PlayDetailCtn,
                            children: [
                              X &&
                                (0, e.jsx)("span", {
                                  children: (0, x.we)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !X &&
                                Z &&
                                (0, e.jsx)("span", {
                                  children: (0, x.we)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      E &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            !!q?.rtime_last_played &&
                              (0, e.jsxs)("div", {
                                className: T.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, x.we)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, x._l)(q.rtime_last_played),
                                ],
                              }),
                            !!q?.playtime_forever &&
                              (0, e.jsxs)("div", {
                                className: T.PlayDetailCtn,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, x.we)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, ae.l)(q.playtime_forever),
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
        function me(o) {
          const a = Y(),
            n = (0, O.WN)(a.GetTemplateVars().linkurl, I.cU.xe);
          return (0, e.jsx)(ue, {
            bHidePrice: o.bHidePrice,
            fnOnClickButton: n,
          });
        }
        function ue(o) {
          const { bHidePrice: a, fnOnClickButton: n } = o,
            r = Y(),
            g = !0,
            [_, A] = (0, u.q3)(() => [
              r.GetTemplateVars().button_text_custom ||
                r.GetTemplateVars().button_text,
              !!r.GetTemplateVars().hide_price,
            ]),
            E = !!(a || A);
          return (0, e.jsxs)("div", {
            className: (0, L.A)(T.MessageFooter, !g && T.NoButton),
            children: [
              (0, e.jsxs)("div", {
                className: T.ButtonAndPriceCtn,
                children: [
                  g &&
                    (0, e.jsx)(S.Z, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: T.Btn,
                      onActivate: n,
                      children: _,
                    }),
                  !E && (0, e.jsx)(Q.tH, { children: (0, e.jsx)(Ee, {}) }),
                ],
              }),
              (0, e.jsx)(Te, {}),
            ],
          });
        }
        function Ee() {
          const a = Y().associated_item_key,
            { data: n } = (0, t.Q_)(a);
          return !n || !n.formatted_final_price
            ? (0, e.jsx)("div", { className: T.NoPrice })
            : (0, e.jsx)("div", {
                className: T.MessagePriceCtn,
                children: (0, e.jsx)(y.NF, { id: a, bHidePrePurchase: !0 }),
              });
        }
        function Te(o) {
          const a = Y();
          return (0, v.ho)()
            ? null
            : (0, e.jsx)("div", {
                className: T.Legal,
                dangerouslySetInnerHTML: { __html: a.GetLegalHTML() },
              });
        }
        function de(o) {
          const { id: a, type: n, eClickLocation: r } = o,
            g = (0, O.FS)(a, n, r);
          return (0, e.jsx)(F.p, {
            id: a,
            type: n,
            fnOnClickOverride: g,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function ge(o) {
          const { capsule: a, imageType: n } = o;
          return (
            (a.overrideNavigation = (0, O.FS)(a.id, a.type, I.cU.FQ)),
            (0, e.jsx)(w.W, {
              capsule: a,
              imageType: n,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            })
          );
        }
        var Ie = s(94162);
        function De(o) {
          const a = Y();
          let n = a.GetTemplateVars().update_event_clan_accountid,
            r = a.GetTemplateVars().update_event_gid;
          const {
            eventModel: g,
            bLoading: _,
            sErrorMessage: A,
          } = (0, k.B9)(n, r, o);
          return { message: a, eventModel: g };
        }
        function Pe(o) {
          const { bPreview: a, bUseAnimated: n } = o,
            { message: r, eventModel: g } = De(a),
            { data: _ } = (0, t.J$)(r.associated_item_key),
            A = (0, d._)(_) ?? "",
            E = ve(g, A, I.cU.wY),
            X = ve(g, A, I.cU.xe);
          return (0, e.jsx)(H.Ay, {
            submethod: "partner_event",
            children: (0, e.jsxs)($, {
              children: [
                (0, e.jsx)(ce, { id: r.associated_item_key }),
                (0, e.jsxs)(te, {
                  children: [
                    (0, e.jsx)(he, {
                      id: r.associated_item_key,
                      bPreview: a,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, e.jsx)(Le, {
                      message: r,
                      eventModel: g,
                      fnOnClickButton: E,
                      bUseAnimated: n,
                    }),
                  ],
                }),
                (0, e.jsx)(ue, { bHidePrice: !0, fnOnClickButton: X }),
              ],
            }),
          });
        }
        function Le(o) {
          const {
              message: a,
              fnOnClickButton: n,
              eventModel: r,
              bUseAnimated: g,
            } = o,
            [_, A] = a.GetTemplateImage(),
            E = (0, h.sfN)(M.TS.LANGUAGE);
          return (0, e.jsxs)("div", {
            className: z().UpdateEventCtn,
            children: [
              (0, e.jsx)("div", {
                className: z().EventType,
                children: (0, x.we)("#MarketingMessages_MajorUpdate"),
              }),
              (0, e.jsx)("div", {
                className: z().EventTitle,
                children: r?.GetNameWithFallback(E),
              }),
              (0, e.jsxs)(S.Z, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, L.A)(z().EventImage),
                onActivate: n,
                children: [
                  _ &&
                    !g &&
                    (0, e.jsx)(P, { message: a, path: _, eLanguage: A }),
                  g && (0, e.jsx)(pe, { fnOnClick: n }),
                ],
              }),
            ],
          });
        }
        function ve(o, a, n) {
          let r = (0, b.S6)(o?.appid),
            g = (0, m.aL)((0, O.xf)(a), "partner_event");
          if (o?.BIsVisibleEvent() && r && o.BIsValidForRealm(M.TS.EREALM)) {
            const E = (0, Ie.MP)();
            M.TS.IN_CLIENT && (E > 1726604483 || E == 0)
              ? (a = `steam://open/library/event/${o.appid}|${o.GID}`)
              : ((a = `${M.TS.STORE_BASE_URL}news/app/${o.appid}?emclan=${o.clanSteamID.ConvertTo64BitString()}&emgid=${o.GID}`),
                M.TS.IN_CLIENT && (a = `steam://openurl/${a}`));
          } else
            (a = g),
              o && (a += `${g.includes("?") ? "&" : "?"}emgid=${o.GID}`),
              M.TS.IN_CLIENT && (a = `steam://openurl/${a}`);
          return (0, O.WN)(a, n, !0);
        }
        var Ce = s(41735),
          Be = s.n(Ce),
          Oe = s(80902),
          Ge = s(72604),
          Se = s(67529);
        function Re(o) {
          const {
            isLoading: a,
            isError: n,
            data: r,
          } = (0, Oe.I)({
            queryKey: ["useDLCHubCount", o],
            queryFn: async () => Ne(o),
            enabled: !!(o && o != Se.sc),
          });
          return a || n ? null : r;
        }
        async function Ne(o) {
          const a = `${M.TS.STORE_BASE_URL}dlc/${o}/ajaxgetdlccount`,
            n = { origin: self.origin },
            r = await Be().get(a, { params: n, withCredentials: !1 });
          if (r.status !== 200 || r.data.success !== Ge.R)
            throw new Error(
              `FetchDLCCount failed: status == ${r.status}, eresult == ${r.data?.success}, err_msg == ${r.data?.err_msg}`,
            );
          return r.data.count;
        }
        var K = s(16205);
        function ke(o) {
          const { bPreview: a } = o,
            n = Y(),
            r = (0, l.useMemo)(
              () => n.GetDLCAppIDs().map((_) => ({ id: _, type: "game" })),
              [n],
            ),
            g = Re(n.associated_item_appid);
          return (
            (0, l.useEffect)(() => {
              if (n) {
                const _ = g
                  ? (0, x.Yp)("#MarketingMessages_See_Count_Items", g)
                  : (0, x.we)("#MarketingMessages_See_All_Items");
                n.OverrideCustomText(_),
                  n.OverrideURL(
                    `${M.TS.STORE_BASE_URL}dlc/${n.associated_item_appid}`,
                  );
              }
            }, [n, g]),
            (0, e.jsx)(H.Ay, {
              submethod: "dlc_override",
              children: (0, e.jsxs)($, {
                children: [
                  (0, e.jsx)(ce, { id: n.associated_item_key }),
                  (0, e.jsxs)(te, {
                    children: [
                      (0, e.jsx)(he, {
                        id: n.associated_item_key,
                        bPreview: a,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, e.jsx)(be, {
                        rgDLCSaleCapsules: r,
                        messageType: n.GetType(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(me, { bHidePrice: !0 }),
                ],
              }),
            })
          );
        }
        function oe(o) {
          const { messageType: a, itemCount: n } = o,
            r = j.rT.GetTypeAsLocalizedString(a);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !!r && (0, e.jsx)("div", { className: K.Type, children: r }),
              n == 1
                ? (0, e.jsx)("div", {
                    className: K.DealDesc,
                    children: (0, x.we)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, e.jsx)("div", {
                    className: K.DealDesc,
                    children: (0, x.we)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function be(o) {
          const { rgDLCSaleCapsules: a, messageType: n } = o;
          return a.length >= 4
            ? (0, e.jsxs)("div", {
                className: K.DlcCtn,
                children: [
                  (0, e.jsx)(oe, { messageType: n }),
                  (0, e.jsx)(fe, { first: a[0], second: a[1] }),
                  (0, e.jsx)(fe, { first: a[2], second: a[3] }),
                ],
              })
            : a.length >= 3
              ? (0, e.jsxs)("div", {
                  className: K.DlcCtn,
                  children: [
                    (0, e.jsx)(oe, { messageType: n }),
                    (0, e.jsx)("div", {
                      className: K.OneItemRow,
                      children: (0, e.jsx)(de, {
                        id: a[0].id,
                        type: a[0].type,
                        eClickLocation: I.cU.FQ,
                      }),
                    }),
                    (0, e.jsx)(fe, { first: a[1], second: a[2] }),
                  ],
                })
              : a.length >= 2
                ? (0, e.jsxs)("div", {
                    className: K.DlcCtn,
                    children: [
                      (0, e.jsx)(oe, { messageType: n }),
                      (0, e.jsx)("div", {
                        className: K.OneItemRow,
                        children: (0, e.jsx)(de, {
                          id: a[0].id,
                          type: a[0].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: K.OneItemRow,
                        children: (0, e.jsx)(de, {
                          id: a[1].id,
                          type: a[1].type,
                          eClickLocation: I.cU.FQ,
                        }),
                      }),
                    ],
                  })
                : a.length >= 1
                  ? (0, e.jsxs)("div", {
                      className: K.DlcCtn,
                      children: [
                        (0, e.jsx)(oe, { messageType: n, itemCount: a.length }),
                        (0, e.jsx)("div", {
                          className: K.OneBigItem,
                          children: (0, e.jsx)(ge, {
                            capsule: a[0],
                            imageType: "main",
                          }),
                        }),
                      ],
                    })
                  : null;
        }
        function fe(o) {
          const { first: a, second: n } = o;
          return (0, e.jsxs)("div", {
            className: K.TwoCapsuleRow,
            children: [
              (0, e.jsx)("div", {
                className: K.DlcCtn,
                children: (0, e.jsx)(ge, { capsule: a, imageType: "header" }),
              }),
              (0, e.jsx)("div", {
                className: K.DlcCtn,
                children: (0, e.jsx)(ge, { capsule: n, imageType: "header" }),
              }),
            ],
          });
        }
        var Ue = s(36118),
          je = s(53113),
          _e = s(31343);
        function Fe(o) {
          const a = Y(),
            [n, r] = (0, l.useState)(() => a.GetFeaturedVideoAutoPlay()),
            g = (0, l.useRef)(null);
          (0, ee.q)(g);
          const _ = (0, O.WN)(a.GetTemplateVars().linkurl, I.cU.wY),
            A = (0, c.Qn)();
          return (0, e.jsx)(S.Z, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (E) =>
              !A && a.GetFeaturedVideoAutoPlay() ? _(E) : r(!0),
            className: _e.PosterCtn,
            children: n
              ? (0, e.jsxs)("video", {
                  controls: !a.GetFeaturedVideoLoop(),
                  ref: g,
                  muted: !0,
                  autoPlay: !0,
                  className: _e.Video,
                  loop: a.GetFeaturedVideoLoop(),
                  crossOrigin: "anonymous",
                  children: [
                    (0, e.jsx)("source", {
                      src: (0, je.L$)(a.GetFeaturedVideoWebMURL()),
                      type: "video/webm",
                    }),
                    !M.TS.IN_CLIENT &&
                      (0, e.jsx)("source", {
                        src: (0, je.L$)(a.GetFeaturedVideoMP4URL()),
                        type: "video/mp4",
                      }),
                    (0, e.jsx)(we, { message: a }),
                  ],
                })
              : (0, e.jsx)(Ve, { message: a }),
          });
        }
        function Ve(o) {
          const { message: a } = o,
            n = a.GetTemplateVars()?.last_asset_mtime,
            [r, g] = a.GetPosterImage(),
            _ = U(a.id, g, n, { type: "file", path: r });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("img", { src: _, className: _e.Poster }),
              (0, e.jsx)(Ue.IOc, {}),
            ],
          });
        }
        function we(o) {
          const { message: a } = o,
            n = (0, l.useMemo)(() => {
              const r = a.GetSubtitleObj(),
                g = a.GetTemplateVars()?.last_asset_mtime,
                _ = new Array();
              for (let A = h.Bhc; A < h.bP9; ++A) {
                if (!x.A0.IsELanguageValidInRealm(A, M.TS.EREALM)) continue;
                const E = (0, h.LgB)(A);
                if (r && r[E]) {
                  const X = r[E].path,
                    Z = U(a.id, A, g, { type: "file", path: X });
                  _.push(
                    (0, e.jsx)(
                      "track",
                      {
                        src: Z,
                        kind: "subtitles",
                        srcLang: (0, h.wwZ)(A),
                        default: M.TS.LANGUAGE == E,
                        label: (0, x.we)(
                          "#language_selection_" + (0, h.LgB)(A),
                        ),
                      },
                      a.id + " " + A,
                    ),
                  );
                }
              }
              return _;
            }, [a]);
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function We(o) {
          const { bLowBandwidthMode: a } = o,
            n = Y(),
            r = !a && n.GetTemplateVars().custom_display === "featured_video";
          return (0, e.jsx)(H.Ay, {
            children: (0, e.jsxs)($, {
              children: [
                (0, e.jsx)(le, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: r,
                }),
                (0, e.jsxs)(te, {
                  children: [
                    (0, e.jsx)(le, { bOverrideUseBackgroundImage: r }),
                    !!r && (0, e.jsx)(Fe, {}),
                  ],
                }),
                (0, e.jsx)(me, {}),
              ],
            }),
          });
        }
        function Ke(o) {
          const a = Y(),
            n = (0, O.WN)(a.GetTemplateVars().linkurl, I.cU.vm);
          return (0, e.jsx)(H.Ay, {
            children: (0, e.jsxs)($, {
              children: [
                (0, e.jsx)(le, { isBackgroundBlur: !0 }),
                (0, e.jsx)(te, { children: (0, e.jsx)(pe, { fnOnClick: n }) }),
                (0, e.jsx)(me, {}),
              ],
            }),
          });
        }
        var Me = s(87937),
          He = s(10452),
          ze = s(81029),
          Qe = s(92264),
          ne = s(92609),
          xe = s(179);
        function Ye(o) {
          const { bPreview: a, bLowBandwidthMode: n } = o,
            r = Y(),
            g = (0, O.WN)(r.GetTemplateVars().linkurl, I.cU.C1),
            _ = r.associated_item_key;
          return (0, e.jsx)(H.Ay, {
            submethod: "mm-auto-render",
            children: (0, e.jsxs)($, {
              children: [
                (0, e.jsx)(ce, { id: _ }),
                (0, e.jsx)(te, {
                  children: (0, e.jsxs)("div", {
                    className: ne.AutoRenderContents,
                    children: [
                      (0, e.jsxs)("div", {
                        className: ne.TitleContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: ne.TypeTitle,
                            children: j.rT.GetTypeAsLocalizedString(
                              r.GetType(),
                            ),
                          }),
                          (0, e.jsx)(Ze, { message: r, id: _ }),
                        ],
                      }),
                      (0, e.jsx)(ze.oj, {
                        appid: r.associated_item_appid,
                        children: (0, e.jsx)(He.qP, {
                          id: _,
                          fnOnClickButton: g,
                          bLowBandwidthMode: n,
                          bUseAssetWithoutOverride:
                            r.GetAutoRenderWithoutAssetOverrides(),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(ue, {
                  bHidePrice: r.GetTemplateVars().hide_price,
                  fnOnClickButton: g,
                }),
              ],
            }),
          });
        }
        function Ze(o) {
          const { message: a, id: n } = o,
            { data: r } = (0, t.J$)(n),
            g = r?.free_weekend,
            [_] = (0, xe.QD)("timezone"),
            [A] = (0, xe.QD)("locale");
          if (a.GetType() == I.D4.SK) {
            if (g?.text)
              return (0, e.jsx)("div", {
                className: ne.TypeSubTitle,
                children: g.text,
              });
            if (g?.end_time) {
              A && x.pf.SetPreferredLocales([A]);
              const Z = _ || Intl.DateTimeFormat().resolvedOptions().timeZone,
                J = g.end_time,
                q = Me.unix(J).tz(Z),
                re = q.format("z"),
                ie = re.match(/^-?\d/)
                  ? `UTC${Me.unix(J).tz(Z).format("Z").replace(":00", "")}`
                  : re,
                Ae = (0, Qe.P0)(q.unix(), !1, ie, _);
              return (0, e.jsx)("div", {
                className: ne.TypeSubTitle,
                children: (0, x.we)("#msg_free_play_until", Ae),
              });
            } else
              return (0, e.jsx)("div", {
                className: ne.TypeSubTitle,
                children: (0, x.we)("#msg_free_play_weekend"),
              });
          }
          const X = a.GetTemplateVars()?.autorender_subtitle_token;
          return X
            ? (0, e.jsx)("div", {
                className: ne.TypeSubTitle,
                children: (0, x.we)(X),
              })
            : null;
        }
        const ye = l.createContext(null);
        function Y() {
          return l.useContext(ye);
        }
        function $e(o) {
          const { message: a, preview: n } = o,
            r = o.active !== !1,
            g = (0, v.NZ)();
          return (
            l.useEffect(() => {
              r && g(a.GetLegalHTML());
            }, [r, a, g]),
            (0, e.jsx)(ye.Provider, {
              value: a,
              children: (0, e.jsx)(l.Suspense, {
                fallback: null,
                children: (0, e.jsx)(Je, { message: a, active: r, preview: n }),
              }),
            })
          );
        }
        const Xe = l.lazy(() =>
          Promise.all([s.e(75976), s.e(8287)]).then(s.bind(s, 72795)),
        );
        function Je(o) {
          const { message: a, active: n, preview: r } = o,
            g = (0, h.sfN)(c.TS.LANGUAGE),
            { bLowBandwidthMode: _ } = (0, p.ri)();
          if (
            (0, j.$I)(a.GetTemplateVars().custom_display || "") &&
            c.iA.logged_in
          ) {
            const E = Number(
              (0, j.fL)(a.GetTemplateVars().custom_display || ""),
            );
            return isNaN(E) ? null : (0, e.jsx)(Xe, { active: n, year: E });
          }
          switch (a.GetTemplateVars().custom_display) {
            case "dlc_override":
              return (0, e.jsx)(ke, { bPreview: r });
            case "partner_event":
              return (0, e.jsx)(Pe, {
                bPreview: r,
                bUseAnimated: (0, p.vn)(a, g, _),
              });
            case "mm_auto_render":
              return (0, e.jsx)(Ye, { bPreview: r, bLowBandwidthMode: _ });
          }
          return a.GetTemplateType() === "image"
            ? (0, p.vn)(a, g, _)
              ? (0, e.jsx)(Ke, {})
              : (0, e.jsx)(We, { bLowBandwidthMode: _ })
            : null;
        }
      },
      70537: (G, N, s) => {
        "use strict";
        s.d(N, { Mf: () => H, Ng: () => se, eI: () => z });
        var e = s(7850),
          h = s(97743),
          l = s(90626),
          j = s(92757),
          v = s(16412),
          c = s(18210),
          p = s(32858),
          m = s(84121),
          O = s.n(m),
          S = s(36118),
          k = s(36707),
          b = s(90740),
          M = s(27638),
          U = s(85599),
          V = s(15978);
        const ee = 8,
          P = l.createContext(null);
        function se() {
          return l.useContext(P);
        }
        function H(C) {
          const { MarketingMessagesStore: D } = C,
            u = (0, p.ri)(),
            { rgMessages: t, isError: i } = (0, h.XW)(D, u),
            [d, f] = l.useState(!1),
            [y, F] = l.useState(0);
          (0, M.Y)(m.MarketingMessagePage);
          const w = (0, j.W6)();
          if (
            (l.useEffect(() => {
              t &&
                !t.length &&
                !i &&
                (u.bIncludeSeenMessages
                  ? f(!0)
                  : w.replace({
                      ...w.location,
                      search: (0, p.GY)({ ...u, bIncludeSeenMessages: !0 }),
                    }));
            }, [t, u, w, i]),
            i)
          )
            return (0, e.jsx)(B, {
              children: (0, c.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (d)
            return (0, e.jsx)(B, {
              children: (0, c.we)("#MarketingMessages_NoneAvailable"),
            });
          const Q = u.bIncludeSeenMessages ? t : t?.slice(0, ee);
          return (0, e.jsxs)("div", {
            className: m.MessageListPage,
            children: [
              (0, e.jsx)("div", {
                className: m.MessageListScroll,
                children: (0, e.jsx)(L, {
                  MarketingMessagesStore: D,
                  rgMessages: Q,
                  iActiveMessage: y,
                }),
              }),
              (0, e.jsx)(x, {
                cMessages: Q?.length,
                iMessage: y,
                setMessage: F,
              }),
            ],
          });
        }
        function L(C) {
          const {
            MarketingMessagesStore: D,
            rgMessages: u,
            iActiveMessage: t,
          } = C;
          return u
            ? (0, e.jsx)("div", {
                className: m.MessageListContainer,
                children: u?.map((i, d) =>
                  (0, e.jsx)(
                    I,
                    {
                      displayIndex: d,
                      message: i,
                      MarketingMessagesStore: D,
                      active: d == t,
                      next: d == t + 1 || d == t - 1,
                    },
                    i.id,
                  ),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, k.A)(m.MessageListContainer, m.Loading),
                children: (0, e.jsx)(U.t, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function x(C) {
          const { cMessages: D, iMessage: u, setMessage: t } = C,
            i = l.useCallback(() => t(u - 1), [t, u]),
            d = l.useCallback(() => t(u + 1), [t, u]),
            f = [];
          for (let w = 0; w < D; w++)
            f.push(
              (0, e.jsx)(W, { active: w == u, iMessage: w, setMessage: t }, w),
            );
          const y = u > 0 ? i : void 0,
            F = u < D - 1 ? d : void 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", { className: m.CarouselSpacer }),
              (0, e.jsx)("div", {
                className: m.CarouselBar,
                children: (0, e.jsxs)("div", {
                  className: m.Content,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, k.A)(m.LeftArrow, y && m.Active),
                      onClick: y,
                      children: (0, e.jsx)(S.l8x, { angle: 180 }),
                    }),
                    (0, e.jsx)("div", { className: m.Spacer }),
                    (0, e.jsx)("div", {
                      className: m.PipContainer,
                      children: (0, e.jsx)("div", {
                        className: m.Pips,
                        children: f,
                      }),
                    }),
                    (0, e.jsx)("div", { className: m.Spacer }),
                    (0, e.jsx)("div", {
                      className: (0, k.A)(m.LeftArrow, F && m.Active),
                      onClick: F,
                      children: (0, e.jsx)(S.l8x, { angle: 0 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function W(C) {
          const { active: D, iMessage: u, setMessage: t } = C,
            i = l.useCallback(() => t(u), [t, u]);
          return (0, e.jsx)("div", {
            className: (0, k.A)(m.Pip, D && m.Active),
            onClick: i,
          });
        }
        function z(C) {
          const { MarketingMessagesStore: D, preview: u } = C,
            t = (0, j.W5)(),
            { message: i, isError: d } = (0, h.dr)(D, t.params.messageid, u);
          return (
            (0, M.Y)(m.MarketingMessagePage),
            d
              ? (0, e.jsx)(B, {
                  children: (0, c.we)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : t.params.messageid
                ? i
                  ? (0, e.jsx)(V.Q, { message: i, preview: u })
                  : null
                : (0, e.jsx)(B, {
                    children: (0, c.we)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function B(C) {
          return (0, e.jsxs)(v.UC, {
            style: { maxWidth: "400px", margin: "0 auto" },
            children: [
              (0, e.jsxs)(v.Y9, {
                children: [(0, c.we)("#Error_Generic"), " "],
              }),
              (0, e.jsx)(v.nB, { children: C.children }),
            ],
          });
        }
        function R(C, D, u) {
          l.useEffect(() => {
            D &&
              C.MarkMessageSeen(D.id, u + 1, D.GetTemplateTypeForReporting());
          }, [D, C, u]);
        }
        function I(C) {
          const {
              message: D,
              MarketingMessagesStore: u,
              active: t,
              next: i,
              displayIndex: d,
            } = C,
            f = l.useRef(void 0),
            y = l.useRef(t || i);
          if ((R(u, t ? D : null, d), (t || i) && (y.current = !0), !y.current))
            return null;
          let F = {
            enter: m.Enter,
            enterActive: m.EnterActive,
            enterDone: m.EnterDone,
            exit: m.Exit,
            exitActive: m.ExitActive,
            exitDone: m.ExitDone,
          };
          return (0, e.jsx)(b.A, {
            in: t,
            nodeRef: f,
            classNames: F,
            timeout: 300,
            mountOnEnter: !i,
            unmountOnExit: !i,
            children: (0, e.jsx)(P.Provider, {
              value: d,
              children: (0, e.jsx)("div", {
                className: (0, k.A)(m.MessageWrapper, t && m.Active),
                ref: f,
                children: (0, e.jsx)(V.Q, { message: D, active: t }),
              }),
            }),
          });
        }
      },
      32858: (G, N, s) => {
        "use strict";
        s.d(N, { GY: () => v, ri: () => j, vn: () => c });
        var e = s(90626),
          h = s(92757),
          l = s(18210);
        function j() {
          const p = (0, h.zy)();
          return e.useMemo(() => {
            const m = new URLSearchParams(p.search);
            return {
              bIncludeSeenMessages: !!m.get("include_seen"),
              nClientPackageVersion: parseInt(
                m.get("client_package_version") || "0",
              ),
              eOSType: parseInt(m.get("os_type") || "0"),
              bLowBandwidthMode: !!m.get("low_bandwidth"),
            };
          }, [p.search]);
        }
        function v(p) {
          const m = new URLSearchParams();
          return (
            p.bIncludeSeenMessages && m.append("include_seen", "1"),
            p.nClientPackageVersion &&
              m.append(
                "client_package_version",
                p.nClientPackageVersion.toString(),
              ),
            p.eOSType && m.append("os_type", p.eOSType.toString()),
            p.bLowBandwidthMode && m.append("low_bandwidth", "1"),
            m.toString()
          );
        }
        function c(p, m, O) {
          if (!O && p.BHasTemplateAnimatedAssets()) {
            const S = l.A0.GetELanguageFallback(m);
            return (
              p.BHasTemplateAnimatedAssetForLanguage(m) ||
              p.BHasTemplateAnimatedAssetForLanguage(S)
            );
          }
          return !1;
        }
      },
      35330: (G, N, s) => {
        "use strict";
        s.r(N), s.d(N, { MarketingMessageRoutes: () => V, default: () => ee });
        var e = s(7850),
          h = s(58732),
          l = s(90626),
          j = s(92757),
          v = s(67705);
        const c = l.createContext({ prioritized_list: !1 });
        function p(L) {
          const [x, W] = l.useState(),
            z = (0, j.zy)(),
            B = l.useMemo(() => {
              const R = new URLSearchParams(z.search);
              return {};
            }, [z.search]);
          return (
            l.useEffect(() => {
              const R = (0, v.Tc)(
                "marketingmessage_config",
                "application_config",
              );
              W({});
            }, [B]),
            x
              ? (0, e.jsxs)(c.Provider, {
                  value: x,
                  children: [L.children, " "],
                })
              : null
          );
        }
        var m = s(70537),
          O = s(68312),
          S = s(3685),
          k = s(97743),
          b = s(32738),
          M = s(51079),
          U = s(3166);
        const V = {
          List: () => `${h.B.MarketingMessages()}list/`,
          Message: (L) => `${h.B.MarketingMessages()}${L}`,
          MessagePreview: (L) => `${h.B.MarketingMessages()}preview/${L}`,
        };
        function ee(L) {
          const x = H();
          return x
            ? (0, e.jsx)(M.Ay, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, e.jsx)(p, {
                  children: (0, e.jsx)(b.g1, {
                    children: (0, e.jsxs)(j.dO, {
                      children: [
                        (0, e.jsx)(j.qh, {
                          path: `${V.List()}`,
                          children: (0, e.jsx)(m.Mf, {
                            MarketingMessagesStore: x,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          path: `${V.MessagePreview(":messageid")}`,
                          children: (0, e.jsx)(m.eI, {
                            MarketingMessagesStore: x,
                            preview: !0,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          path: `${V.Message(":messageid")}`,
                          children: (0, e.jsx)(m.eI, {
                            MarketingMessagesStore: x,
                          }),
                        }),
                        (0, e.jsx)(j.qh, {
                          children: (0, e.jsx)(j.rd, { to: `${V.List()}` }),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        }
        let P;
        function se(L) {
          if (!P) {
            const x = (0, U.Tc)(
              "marketingmessage_config",
              "application_config",
            );
            if (((P = new k.Nt(L)), x?.promotion_operation_token)) {
              const W = new S.D(
                U.TS.WEBAPI_BASE_URL,
                x.promotion_operation_token,
              );
              P.SetSteamInterfacePromotions(W);
            }
          }
          return P;
        }
        function H() {
          const [L, x] = l.useState(null),
            W = (0, O.TR)();
          return (
            l.useEffect(() => {
              L || x(se(W));
            }, [L, W]),
            L
          );
        }
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
          EventType: "fRZmXDVszenGo5WnHprTJ",
          EventTitle: "_3ceduHPK-lBiZ5fsmCstLP",
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
      61738: (G, N, s) => {
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
        function h(j) {
          var v = l(j);
          return s(v);
        }
        function l(j) {
          if (!s.o(e, j)) {
            var v = new Error("Cannot find module '" + j + "'");
            throw ((v.code = "MODULE_NOT_FOUND"), v);
          }
          return e[j];
        }
        (h.keys = function () {
          return Object.keys(e);
        }),
          (h.resolve = l),
          (G.exports = h),
          (h.id = 61738);
      },
    },
  ]);
})();
