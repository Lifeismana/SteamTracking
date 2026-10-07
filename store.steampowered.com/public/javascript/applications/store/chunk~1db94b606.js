/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50762],
    {
      26589: (fe, de, r) => {
        "use strict";
        r.d(de, { gg: () => z, hM: () => q });
        var n = r(72609),
          I = r(75233),
          a = r(80902),
          s = r(67705),
          t = r(76559),
          v = r(3166);
        function L(w, h) {
          return {
            clanid: w,
            appid: h,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        }
        function k(w, h) {
          return !h || !(w.support_user || w.valve_admin)
            ? w
            : { ...w, can_edit: !0, support_user: !1, valve_admin: !1 };
        }
        async function F(w, h, D) {
          const f = (0, s.Bu)(),
            o = (0, s.Fd)("partnereventpermissions", "application_config");
          if (N(o)) {
            const p = o.find((S) => S.clanid == w);
            if (p) {
              let { success: S, warn_msg: V, err_msg: te, ...se } = p;
              return k(se, f);
            }
          }
          if (n.iA.logged_in) {
            const p = t.b.InitFromClanID(w);
            let S = `${n.TS.COMMUNITY_BASE_URL}gid/${p.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, v.yK)() == "partner"
              ? (S = `${n.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${w}`)
              : (0, v.yK)() == "store" &&
                (S = `${n.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${w}`);
            const V = await fetch(S, { method: "GET", credentials: "include" });
            if (V.status == 200) {
              const te = await V.json();
              if (te) {
                let { success: se, warn_msg: C, err_msg: K, ...c } = te;
                return k(c, f);
              }
            }
          }
          return L(w, void 0);
        }
        function N(w) {
          const h = w;
          return h &&
            Array.isArray(h) &&
            h.length > 0 &&
            typeof h[0] == "object"
            ? typeof h[0].clanid == "number" && typeof h[0].appid == "number"
            : !1;
        }
        var P = r(68312);
        function q(w) {
          const h = (0, I.jE)(),
            D = (0, P.KV)();
          return (0, a.I)(z(w, h, D));
        }
        function z(w, h, D) {
          return {
            queryKey: A(w),
            queryFn: async () => await F(w, h, D),
            enabled: !!w,
          };
        }
        function A(w) {
          return ["useEventUserPermissions", n.iA.accountid, w];
        }
      },
      3946: (fe, de, r) => {
        "use strict";
        r.d(de, { V: () => a });
        var n = r(7850),
          I = r(72080);
        function a(s) {
          return (0, n.jsxs)("a", {
            href: s.strURL,
            className: I.gg.Box,
            "data-modal-content-sizetofit": !!s.bSizeToFit,
            "data-appid": s.appid,
            "data-publishedfileid": s.publishedfileid,
            children: [
              (0, n.jsx)(I.KN, { strURL: s.strPreviewURL }),
              (0, n.jsxs)(I.J7, {
                children: [
                  (0, n.jsx)(I.bv, { children: s.strTitle }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                      className: I.gg.Type,
                      children: s.strType,
                    }),
                  }),
                  s.author && (0, n.jsx)(I.zN, { children: s.author }),
                  (0, n.jsx)(I.AT, { children: s.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      54357: (fe, de, r) => {
        "use strict";
        r.d(de, { B: () => F });
        var n = r(7850),
          I = r(90626);
        function a(P) {
          const [q, z] = useState(!1);
          return (
            useEffect(() => {
              startTransition(() => z(!0));
            }, []),
            jsx(s.Provider, { value: q, children: P.children })
          );
        }
        const s = (0, I.createContext)(!1);
        function t() {
          return (0, I.useContext)(s);
        }
        const v = Intl.DateTimeFormat().resolvedOptions().timeZone,
          L =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((P) => P.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          k = L && decodeURIComponent(L);
        function F() {
          return t() ? v : (k ?? v);
        }
        function N() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${v};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        N();
      },
      69596: (fe, de, r) => {
        "use strict";
        r.d(de, { O: () => a });
        const n =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function I(s) {
          return s ? n.test(s.trim()) : !1;
        }
        function a(s, t) {
          return I(s) ? s : t;
        }
      },
      11547: (fe, de, r) => {
        "use strict";
        r.d(de, { H: () => Fe, k: () => je });
        var n = r(7850),
          I = r(29950),
          a = r(29630),
          s = r(68941),
          t = r(70187),
          v = r(1917),
          L = r(24660),
          k = r(72609),
          F = r(86722),
          N = r(6878),
          P = r.n(N),
          q = r(53107),
          z = r(36707),
          A = r(53113),
          w = r(69596),
          h = r(35265);
        function D(W) {
          switch (W) {
            case "button":
              return (0, z.A)(P().LinkButton, "LinkButton");
            case "pill":
              return (0, z.A)(P().LinkPill, "LinkPill");
            default:
              return (0, z.A)(P().Link, "Link");
          }
        }
        function f(W, _, he) {
          let Me = "";
          return (
            W == "button" && _ && (Me += `background-color: ${_};`),
            W == "pill" && he && (Me += `color: ${he};`),
            Me.length == 0 ? void 0 : Me
          );
        }
        function o(W, _, he) {
          let Me;
          return (
            (W == "button" || W == "pill") &&
              _ &&
              (Me = { backgroundColor: _ }),
            (W == "button" || W == "pill") &&
              he &&
              (Me = { ...(Me ?? {}), color: he }),
            Me
          );
        }
        function p(W, _) {
          const he = (
            typeof W == "string"
              ? W
              : Array.isArray(W) && W.length == 1 && typeof W[0] == "string"
                ? W[0]
                : void 0
          )?.trim();
          return !he || !_ ? !0 : he != _.trim();
        }
        function S(W) {
          let _ = (0, I.J)((0, t.j$)(W.args) || (0, t.j$)(W.args, "href"));
          const he = (0, t.j$)(W.args, "style"),
            Me = (0, t.j$)(W.args, "id"),
            Je = (0, w.O)(
              (0, t.j$)(W.args, "buttoncolor") || (0, t.j$)(W.args, "bgcolor"),
              void 0,
            ),
            $e = (0, w.O)(
              (0, t.j$)(W.args, "labelcolor") || (0, t.j$)(W.args, "color"),
              void 0,
            ),
            O = D(he),
            $ = W.context.event,
            pe = (0, a.z5)(_, W.language, $?.rtime32_last_modified),
            Ie = (0, h.W7)(p(W.children, _) ? "" : (_ ?? ""));
          if (Ie && _) return Ie.fnBBComponent(_, { event: W.context.event });
          if (pe === void 0 || pe == null) return W.children || "";
          typeof pe == "string" ? (_ = pe) : (_ = pe[1]);
          const De = o(he, Je, $e);
          return typeof _ == "string" && _.length > 0 && _[0] == "#"
            ? (0, n.jsx)(L.Ii, {
                className: O,
                href: _,
                style: De,
                children: W.children,
              })
            : _ == "steam://settings/account"
              ? (0, n.jsx)(q.uU, {
                  className: O,
                  href: "steam://settings/account",
                  children: W.children,
                })
              : (0, n.jsx)(F.d$, {
                  className: O,
                  url: _,
                  event: W.context.event,
                  id: Me,
                  style: De,
                  children: W.children,
                });
        }
        function V(W) {
          const _ = (0, t.j$)(W.args, "href"),
            he = (0, h.W7)(_);
          return he
            ? he.fnBBComponent(_, { event: W.context.event })
            : (0, n.jsx)(S, { ...W });
        }
        var te = r(25046),
          se = r(29522),
          C = r(40358),
          K = r(64271),
          c = r(90626),
          u = r(67523),
          g = r.n(u),
          E = r(36118),
          Q = r(18210),
          B = r(85599),
          b = r(89767),
          T = r.n(b),
          J = r(64457),
          Y = r(48963),
          ee = r.n(Y),
          ye = ((W) => (
            (W.k_TrailerAsButton = "button"),
            (W.k_TrailerAsPill = "pill"),
            (W.k_TrailerAsFull = "full"),
            (W.k_TrailerAsPoster = "poster"),
            (W.k_TrailerAsMicro = "micro"),
            W
          ))(ye || {});
        const M = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function ge(W, _) {
          const he = new Set();
          for (const Me of W.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Je = M.exec(Me[1] ?? ""),
              $e = Je ? Number.parseInt(Je[1] ?? Je[2] ?? Je[3] ?? "") : _;
            $e && he.add($e);
          }
          return Array.from(he);
        }
        function U(W) {
          const {
              embedStyle: _,
              appid: he,
              color: Me,
              bgcolor: Je,
              children: $e,
              trailerBaseID: O,
              subtitles: $,
            } = W,
            [pe, Ie] = (0, c.useState)(!1),
            De = (0, c.useMemo)(() => ({ appid: he }), [he]);
          switch (_) {
            case "button":
            case "pill":
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("button", {
                    type: "button",
                    className: (0, z.A)({
                      [T().Pill]: _ == "pill",
                      [T().Button]: _ == "button",
                    }),
                    onClick: () => Ie(!0),
                    style: { color: Me, backgroundColor: Je },
                    children: [
                      (0, n.jsx)(E.jGG, {}),
                      $e || (0, Q.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, n.jsx)(J.PE, {
                    id: De,
                    bShowModal: pe,
                    trailerBaseID: O,
                    hideModal: () => Ie(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, n.jsx)(ae, { ...W });
          }
        }
        function ae(W) {
          const { appid: _, trailerBaseID: he } = W,
            Me = (0, se.$5)(_),
            { data: Je } = (0, C.J$)(Me),
            [$e, O] = (0, c.useState)(() =>
              !_ || !he ? (0, Q.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            $ = (0, te.kB)(Me),
            pe = (0, c.useMemo)(
              () => ($ ? $.find((Ie) => Ie.trailer_base_id === he) : null),
              [$, he],
            );
          return (
            (0, c.useEffect)(() => {
              Je?.unvailable_for_country_restriction &&
                O((0, Q.we)("#TrailerPlayer_CouldNotLoad", _, he)),
                $ &&
                  !pe &&
                  O(
                    (0, Q.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      W.appid,
                      W.trailerBaseID,
                    ),
                  );
            }, [
              _,
              W.appid,
              W.trailerBaseID,
              Je?.unvailable_for_country_restriction,
              he,
              pe,
              $,
            ]),
            $e
              ? W.bIsPreviewMode
                ? (0, n.jsx)("div", { className: g().ErrorDiv, children: $e })
                : null
              : pe
                ? (0, n.jsx)(ve, { trailerToPlay: pe })
                : (0, n.jsx)(B.t, {
                    string: (0, Q.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function ve(W) {
          const { trailerToPlay: _ } = W,
            {
              rgDashTrailers: he,
              rgHlsTrailers: Me,
              strCaptionManufest: Je,
            } = (0, c.useMemo)(() => {
              const { rgDashTrailers: $e, rgHlsTrailers: O } = (0, te.hg)(_),
                $ = (0, te.Wv)(_);
              return {
                rgDashTrailers: $e,
                rgHlsTrailers: O,
                strCaptionManufest: $,
              };
            }, [_]);
          return he?.length == 0
            ? null
            : (0, n.jsx)("div", {
                className: ee().VideoPopupContainers,
                children: (0, n.jsx)(K.P, {
                  dashManifests: he || [],
                  hlsManifest: (Me.length > 0 && Me?.[0]) || "",
                  screenshot: (0, te.hl)(_),
                  altText: _.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Je,
                }),
              });
        }
        var Ee = r(34736),
          Le = r(39239),
          Re = r(13465),
          Ne = r(80150),
          Pe = r(18994),
          we = r(3166),
          H = r(68538);
        function ue(W) {
          const _ = (0, we.Qn)(),
            he = (0, Pe.a4)(Pe.Wn),
            Me =
              String((0, t.j$)(W.args, "autoadvance")).toLowerCase() === "true";
          return (0, n.jsx)(H.F, {
            hideArrows: !he,
            hidePips: _,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: he,
            bAutoAdvance: Me,
            className: P().ScreenshotCarousel,
            children: W.children,
          });
        }
        var G = r(37501),
          me = r.n(G),
          re = r(1123);
        function be(W) {
          const { strURL: _, children: he } = W;
          return (
            typeof _ == "string"
              ? !(0, A.ZF)(_)
              : _.some((Je) => !(0, A.ZF)(Je))
          )
            ? (0, n.jsx)(Se, { children: he })
            : (0, n.jsx)(n.Fragment, { children: he });
        }
        function Se(W) {
          const { children: _ } = W;
          return (0, re.Ey)()
            ? (0, n.jsx)(n.Fragment, { children: _ })
            : (0, n.jsx)("div", {
                className: me().ImageBlocked,
                children: (0, Q.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, n.jsx)("a", {
                    href: k.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var ne = r(33645),
          oe = r.n(ne);
        let xe = null;
        function je() {
          return (
            xe == null &&
              (xe = new Map([
                ["url", { Constructor: S, autocloses: !1 }],
                ["dynamiclink", { Constructor: V, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: t.Tu(t.Zb, P().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: t.Tu(t.Sz, P().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: t.Tu(t.ZS, P().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: t.Tu(t.Pk, P().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: t.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: t._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: t.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: t.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: Te, autocloses: !1 }],
                ["previewyoutube", { Constructor: v.gH, autocloses: !1 }],
                ["looping_media", { Constructor: s.$A, autocloses: !1 }],
                ["video", { Constructor: s.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: v.Eo, autocloses: !1 }],
                ["trailer", { Constructor: ke, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: ze,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: Ge, autocloses: !1 }],
                ["carousel", { Constructor: ue, autocloses: !1 }],
              ])),
            xe
          );
        }
        function Te(W) {
          const { showErrorInfo: _, event: he } = W.context;
          let Me = (0, t.j$)(W.args, "src") || W.children?.toString();
          Me || (Me = (0, t.j$)(W.args)), (Me = (0, I.J)(Me ?? "") || void 0);
          const Je = (0, t.j$)(W.args, "style") === "inline",
            $e = (0, a.z5)(Me, W.language, he?.rtime32_last_modified);
          if ($e == null) return null;
          if (typeof $e == "string") {
            Me = $e;
            let O;
            return (
              (O = !(0, A.ZF)(Me)),
              he?.BHasTag("auto_rssfeed") && (O = !1),
              _
                ? (0, n.jsx)(Le.i, {
                    className: (0, z.A)({ [oe().Image_Inline]: Je }),
                    src: Me,
                    crossOrigin: O ? "anonymous" : void 0,
                  })
                : ((Me = (0, A.L$)(Me)),
                  (0, n.jsx)(be, {
                    strURL: Me,
                    children: (0, n.jsx)(Ne.o, {
                      className: (0, z.A)({ [oe().Image_Inline]: Je }),
                      src: Me,
                      crossOrigin: O ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, n.jsx)(be, {
              strURL: $e,
              children: (0, n.jsx)(Re.c, { rgSources: $e }),
            });
        }
        function Ge(W) {
          const _ = (0, t.j$)(W.args);
          if (_ == null || _ == null || _.length == 0) return "";
          const he = W.children?.toString(),
            Me = new Array();
          return (
            Me.push(
              `${k.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${k.TS.LANGUAGE}/${_}`,
            ),
            k.TS.LANGUAGE != "english" &&
              Me.push(
                `${k.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${_}`,
              ),
            (0, n.jsx)(Re.c, { rgSources: Me, alt: he })
          );
        }
        function ke(W) {
          const _ = Fe(W.args, "appid", W.context.event?.appid ?? 0),
            he = Fe(W.args, "trailerid", 0);
          let Me =
            (0, t.j$)(W.args, "style")?.toLocaleLowerCase() ??
            ye.k_TrailerAsFull;
          Me = Object.values(ye).includes(Me) ? Me : ye.k_TrailerAsFull;
          const Je = (0, w.O)(W.args.color, "black"),
            $e = (0, w.O)(W.args.bgcolor, "white"),
            O = (0, s.g4)(W.args);
          return (0, n.jsx)(U, {
            appid: _,
            trailerBaseID: he,
            bIsPreviewMode: W.context.showErrorInfo,
            embedStyle: Me,
            color: Je,
            bgcolor: $e,
            subtitles: O.rgVideoTracks,
            children: W.children,
          });
        }
        function ze(W) {
          const _ = (0, t.j$)(W.args, "name"),
            he = (0, t.j$)(W.args, "title"),
            Me = (0, t.j$)(W.args, "company"),
            Je = (0, t.j$)(W.args, "photo");
          return W.context.bShowShortSpeakerInfo
            ? (0, n.jsx)(Ee.S8, {
                name: _,
                title: he,
                company: Me,
                photo: Je,
                bio: W.children,
              })
            : (0, n.jsx)(Ee.$k, {
                name: _,
                title: he,
                company: Me,
                photo: Je,
                bio: W.children,
              });
        }
        function Fe(W, _, he) {
          const Me = (0, t.j$)(W, _);
          return Me === void 0 || Me == null ? he : Number.parseInt(Me);
        }
      },
      1683: (fe, de, r) => {
        "use strict";
        r.d(de, { d3: () => te, Zn: () => se });
        var n = r(7850),
          I = r(33770),
          a = r(7487),
          s = r(72609),
          t = r(90626),
          v = r(70187),
          L = r(86722),
          k = r(39414),
          F = r(38340),
          N = r(96197),
          P = r(53113);
        class q extends a.K0 {
          m_LinkFilter = k.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(c, u, g, E) {
            super(c),
              (this.m_parentNode = u),
              (this.m_mapHostToComponent = g),
              (this.m_globalStoreLink = E);
          }
          AppendText(c, u = !1) {
            let g = c;
            if (
              (u || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let E = this.m_LinkFilter.exec(g);
              for (; E; ) {
                if (E.index > 0) {
                  let b = E.input.substring(0, E.index);
                  super.AppendText(b, u);
                }
                let Q = E[0],
                  B = !1;
                if (this.m_mapHostToComponent) {
                  for (let b = 0; b < this.m_mapHostToComponent.length; ++b)
                    if (this.m_mapHostToComponent[b].urlRegExp.exec(Q)) {
                      (B = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[b].fnBBComponent(
                            Q,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                B || super.AppendNode((0, L.Pm)(Q)),
                  (g = E.input.substring(E.index + Q.length)),
                  (E = this.m_LinkFilter.exec(g));
              }
            }
            g.length > 0 && super.AppendText(g, u);
          }
        }
        const z = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class A extends a.K0 {
          m_EmoteRegex = new RegExp(z);
          AppendText(c, u = !1) {
            let g = c;
            if (c.length >= 3) {
              let E = this.m_EmoteRegex.exec(g);
              for (; E; ) {
                if (E.index > 0) {
                  let B = E.input.substring(0, E.index);
                  super.AppendText(B, u);
                }
                let Q = E[1];
                super.AppendNode(t.createElement(N.n, { emoticon: Q }, [])),
                  (g = E.input.substring(E.index + Q.length + 2)),
                  (E = this.m_EmoteRegex.exec(g));
              }
            }
            g.length > 0 && super.AppendText(g, u);
          }
        }
        class w extends a.K0 {
          m_parentNode = void 0;
          constructor(c, u) {
            super(c), (this.m_parentNode = u);
          }
          AppendText(c, u = !1) {
            let g = c;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !h(g) &&
              (g = (0, P.L$)(g)),
              super.AppendText(g, u);
          }
        }
        function h(K) {
          const c = K.trim();
          return c.startsWith(F.lw) || c.startsWith(F.eg);
        }
        var D = r(11547),
          f = r(35265);
        let o = null;
        function p() {
          return (
            o == null &&
              (o = new Map([
                ...Array.from(v.W4.entries()),
                ...Array.from((0, D.k)().entries()),
              ])),
            o
          );
        }
        const S = t.createContext(null);
        function V() {
          return t.useContext(S) ?? p();
        }
        function te(K) {
          const c = V(),
            u = t.useMemo(
              () =>
                new Map([
                  ...Array.from(c.entries()),
                  ...Array.from(K.dictionary.entries()),
                ]),
              [c, K.dictionary],
            );
          return (0, n.jsx)(S.Provider, { value: u, children: K.children });
        }
        function se(K) {
          const {
              text: c,
              languageOverride: u,
              event: g,
              showErrorInfo: E,
              bShowShortSpeakerInfo: Q,
            } = K,
            B = (0, f.m$)(),
            b = t.useCallback(
              (Y) =>
                new w(
                  new A(new q(new a.OJ(new a.R8()), Y, B, { event: g })),
                  Y,
                ),
              [g, B],
            ),
            T = V();
          return t
            .useMemo(() => new I.B(T, b, u || s.TS.LANGUAGE), [T, b, u])
            .ParseBBCode(c, {
              showErrorInfo: E,
              event: g,
              bShowShortSpeakerInfo: Q,
              bbcode: c,
            });
        }
        function C(K) {
          const {
              strTag: c,
              args: u,
              rawargs: g,
              language: E = PchLanguageToELanguage(Config.LANGUAGE),
              children: Q,
              ...B
            } = K,
            b = V().get(c);
          return b
            ? jsx(b.Constructor, {
                context: B,
                tagname: c,
                args: u,
                language: E,
                rawargs: g,
                children: Q,
              })
            : jsxs(Fragment, { children: [`[${c}]`, Q, `[/${c}]`] });
        }
      },
      35265: (fe, de, r) => {
        "use strict";
        r.d(de, { m$: () => dt, W7: () => It });
        var n = r(7850),
          I = r(32093),
          a = r(72609),
          s = r(88743),
          t = r(40358),
          v = r(90626),
          L = r(86722),
          k = r(6878),
          F = r.n(k),
          N = r(36118),
          P = r(36707),
          q = r(87949),
          z = r(55483),
          A = r(29696),
          w = r(99412),
          h = r(47797),
          D = r(76559);
        const f =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          o =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          p = [f, o],
          S =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function V(Z, X) {
          const ie = new RegExp(Z).exec(X);
          if (!ie || ie.length <= 3) return;
          const Oe = ie[3];
          if (Oe)
            switch (ie[1]) {
              case "gid":
                return { eventGID: Oe, strClanSteamID64: ie[2] };
              case "group":
                return { eventGID: Oe, clanAccountID: Number.parseInt(ie[2]) };
              case "groups":
                return { eventGID: Oe, strGroupVanity: ie[2] };
              default:
                return isNaN(+ie[2])
                  ? { eventGID: Oe, strOGGVanity: ie[2] }
                  : { eventGID: Oe, appid: Number(ie[2]) };
            }
        }
        function te(Z) {
          for (const X of p) {
            const ie = V(X, Z);
            if (ie) return ie;
          }
        }
        function se(Z) {
          const X = [],
            ie = new Set(),
            Oe = [
              ...p.map((Ae) => ({ regExp: Ae, bAnnouncement: !1 })),
              { regExp: S, bAnnouncement: !0 },
            ];
          for (const { regExp: Ae, bAnnouncement: Ye } of Oe)
            for (const _e of Z.matchAll(new RegExp(Ae, "gi"))) {
              const nt = V(Ae, _e[0]);
              nt &&
                !ie.has(`${Ye ? "A" : "E"}${nt.eventGID}`) &&
                (ie.add(`${Ye ? "A" : "E"}${nt.eventGID}`),
                X.push({ link: nt, bAnnouncement: Ye }));
            }
          return X;
        }
        var C = r(9046),
          K = r(72080),
          c = r(29522),
          u = r(85599),
          g = r(18210),
          E = r(13465),
          Q = r(56492),
          B = r(88812),
          b = r(39654);
        function T({ clanSteamID: Z, strVanity: X, strGroupVanity: ie }) {
          const Oe = X !== void 0 || ie !== void 0,
            { data: Ae, isPending: Ye } = (0, z.W$)(
              Oe ? (X ?? ie ?? "") : "",
              X !== void 0 ? "store" : "group",
            );
          if (!Oe) return Z?.GetAccountID();
          if (!Ye) return Ae?.clanAccountID ?? null;
        }
        function J(Z) {
          const { appid: X, announcementGID: ie, eventGID: Oe, strURL: Ae } = Z,
            Ye = T(Z),
            _e = Ye === null,
            nt = Ye != null,
            {
              data: it,
              isPending: Dt,
              isError: Yt,
            } = (0, b.vE)(
              _e
                ? void 0
                : {
                    clanAccountID: nt ? Ye : void 0,
                    appid: X,
                    eventGID: Oe,
                    announcementGID: ie,
                  },
            ),
            Zt = (0, c.$5)(X || it?.appid || void 0),
            { data: He } = (0, t.J$)(Zt);
          if (_e || Yt || it === null) return (0, L.Pm)(Ae);
          if (Dt || !it) return (0, n.jsx)(u.t, {});
          const e = (0, w.sfN)(a.TS.LANGUAGE),
            i = it.GetNameWithFallback(e),
            j = it.GetSubTitleWithSummaryFallback(e),
            Xt = He?.name,
            en = (0, g.TW)(it.GetStartTimeAndDateUnixSeconds());
          return (0, n.jsxs)(Q.tj, {
            eventModel: it,
            route: Q.PH.k_eView,
            className: K.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": X,
            children: [
              (0, n.jsx)(Y, { ...Z, event: it }),
              (0, n.jsxs)(K.J7, {
                children: [
                  (0, n.jsxs)(K.zN, {
                    children: [
                      (0, g.we)(
                        it.type == w.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Xt ?? "",
                      ),
                      (0, n.jsx)(K.MG, { children: en }),
                    ],
                  }),
                  (0, n.jsx)(K.bv, {
                    children: (0, n.jsx)("div", {
                      className: K.gg.Type,
                      children: i,
                    }),
                  }),
                  (0, n.jsx)(K.AT, { children: j }),
                ],
              }),
            ],
          });
        }
        function Y(Z) {
          const {
            event: X,
            fnFilterImageURLsForKnownFailures: ie,
            fnImageFailureCallback: Oe,
          } = Z;
          let Ae = (0, w.sfN)(a.TS.LANGUAGE),
            Ye = (0, B.WC)(X, "capsule", Ae, C.wI.capsule_main) ?? [];
          return (
            Ye && ie && (Ye = ie(Ye)),
            (0, n.jsx)(E.c, {
              className: K.gg.Preview,
              rgSources: Ye ?? [],
              onIncrementalError: (_e, nt, it) => Oe && Oe(nt),
            })
          );
        }
        var ee = r(10349),
          ye = r(53113);
        const M =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          ge = ["store.steampowered.com", "store.steamchina.com"],
          U = ["steampowered.com", "steamcommunity.com"],
          ae = ["steamchina.com"],
          ve = ["steam.dev", "valve.org"];
        function Ee(Z, X) {
          return X.some((ie) => Z == ie || Z.endsWith(`.${ie}`));
        }
        function Le(Z) {
          const X = (0, ye.wm)(Z).toLocaleLowerCase(),
            ie = (0, ye.wm)(a.TS.STORE_BASE_URL).toLocaleLowerCase(),
            Oe = (0, ye.wm)(a.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return X == ie || X == Oe
            ? !0
            : ge.includes(ie)
              ? Ee(X, Ee(ie, ae) ? ae : U)
              : Ee(X, [...U, ...ae, ...ve]);
        }
        function Re(Z) {
          if (Le(Z)) return Ne(Z);
        }
        function Ne(Z) {
          const X = new RegExp(M).exec(Z);
          if (!X || X.length <= 2) return;
          const ie = X[1].toLowerCase(),
            Oe = Number(X[2]);
          if (!(!(Oe > 0) || !(0, ee.nB)(ie)))
            return {
              id: Oe,
              strItemType: ie,
              storeItemKey:
                ie == "sub"
                  ? { packageid: Oe }
                  : ie == "bundle"
                    ? { bundleid: Oe }
                    : { appid: Oe },
            };
        }
        function Pe(Z) {
          const X = [],
            ie = new Set();
          for (const Oe of Z.matchAll(new RegExp(M, "gi"))) {
            const Ae = Ne(Oe[0]);
            Ae &&
              !ie.has(`${Ae.strItemType}/${Ae.id}`) &&
              (ie.add(`${Ae.strItemType}/${Ae.id}`), X.push(Ae));
          }
          return X;
        }
        function we(Z) {
          return (
            !!Z && (Z.GetEventType() == w.ajI || Z.GetEventType() == w.HRy)
          );
        }
        function H(Z) {
          const X = we(Z),
            ie = X ? Z.clanSteamID.GetAccountID() : void 0,
            { data: Oe, isLoading: Ae } = (0, z.TB)(ie),
            { data: Ye, isLoading: _e } = (0, A.A5)(ie);
          if (!X) return null;
          if (!(Ae || _e))
            return !Ye || !Oe || !(0, h.Ns)(Z, Oe) ? null : (Ye.appids ?? []);
        }
        function ue(Z, X) {
          return Z === null
            ? !0
            : X.length > 0 && X.every((ie) => Z.includes(ie));
        }
        function G(Z, X) {
          const ie = H(X);
          if (Z.appid === void 0) return !0;
          if (!(Z.appid > 0)) return !1;
          if (ie !== void 0) return ue(ie, [Z.appid]);
        }
        function me({ link: Z, strURL: X, eventModel: ie, bAnnouncement: Oe }) {
          const Ae = G(Z, ie);
          if (Ae === void 0) return null;
          if (!Ae) return (0, L.Pm)(X, ie);
          const Ye =
            Z.strClanSteamID64 !== void 0
              ? new D.b(Z.strClanSteamID64)
              : Z.clanAccountID !== void 0
                ? D.b.InitFromClanID(Z.clanAccountID)
                : void 0;
          return (0, n.jsx)(J, {
            appid: Z.appid,
            clanSteamID: Ye,
            strVanity: Z.strOGGVanity,
            strGroupVanity: Z.strGroupVanity,
            eventGID: Oe ? void 0 : Z.eventGID,
            announcementGID: Oe ? Z.eventGID : void 0,
            strURL: X,
          });
        }
        function re(Z, X, ie, Oe = !1) {
          if (Le(X)) {
            const Ae = V(Z, X);
            if (Ae)
              return (0, n.jsx)(me, {
                link: Ae,
                strURL: X,
                eventModel: ie?.event,
                bAnnouncement: Oe,
              });
          }
          return (0, L.Pm)(X, ie?.event);
        }
        function be(Z, X) {
          return re(o, Z, X);
        }
        function Se(Z, X) {
          return re(f, Z, X);
        }
        function ne(Z, X) {
          return re(S, Z, X, !0);
        }
        const oe = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function xe(Z) {
          if (!oe.test(Z)) return;
          const X = Z.split("?");
          if (X.length == 2)
            return new URLSearchParams(X[1]).get("id") ?? void 0;
        }
        var je = r(3946),
          Te = r(13854),
          Ge = r(374);
        function ke(Z) {
          const { sharedFileID: X } = Z,
            { data: ie } = (0, Ge.oK)(X),
            Oe = a.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            Ae = ie ?? {
              sharedfileid: X,
              title: (0, g.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: Oe + X,
            },
            Ye = (0, Te.TG)(Ae.url) ? Oe + Ae.url : Ae.url;
          let _e = Ae.personnaname !== void 0 && Ae.personnaname.length > 0;
          return (0, n.jsx)(je.V, {
            strURL: Ye,
            strTitle: Ae.title,
            strPreviewURL: Ae.previewurl,
            strType: Ae.type,
            strDescription: Ae.description,
            author:
              _e &&
              (0, g.PP)(
                "#EventEditor_Author",
                (0, n.jsx)(K.mZ, { children: Ae.personnaname }),
              ),
            publishedfileid: X,
            appid: Ae.appid,
            bSizeToFit: Ae.bSizeToFit,
          });
        }
        var ze = r(80902),
          Fe = r(32651),
          W = r.n(Fe);
        const _ = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function he(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(_, "gi")))
            ie[1] && X.add(ie[1]);
          return Array.from(X);
        }
        function Me(Z) {
          return ["sketchfab_oembed", Z];
        }
        function Je(Z) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(Z)}`;
        }
        function $e(Z) {
          return {
            queryKey: Me(Z),
            queryFn: async () => {
              const X = await fetch(Je(Z));
              if (X.status === 404) return null;
              if (!X.ok)
                throw new Error(`sketchfab oembed returned ${X.status}`);
              return await X.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function O(Z) {
          return (0, ze.I)($e(Z));
        }
        function $(Z) {
          const { modelID: X } = Z,
            [ie, Oe] = v.useState(!0),
            { data: Ae } = O(X);
          if (ie) {
            const Ye = () => Oe(!1),
              _e = (nt) => {
                (nt.key === "Enter" || nt.key === " ") &&
                  (nt.preventDefault(), Ye());
              };
            return (0, n.jsxs)("div", {
              className: W().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ye,
              onKeyDown: _e,
              children: [
                Ae?.thumbnail_url &&
                  (0, n.jsx)("img", {
                    className: W().dynamiclink_preview,
                    src: Ae.thumbnail_url,
                    alt: Ae.title,
                  }),
                (0, n.jsx)("img", {
                  className: W().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, n.jsxs)("div", {
                  className: W().dynamiclink_content,
                  children: [
                    (0, n.jsxs)("div", {
                      className: W().dynamiclink_name,
                      children: [
                        (0, n.jsx)("span", {
                          className: W().dynamiclink_type,
                          children: (0, g.we)("#EventDisplay_Sketchfab"),
                        }),
                        Ae?.title &&
                          (0, n.jsxs)("div", { children: [Ae.title, "\xA0"] }),
                      ],
                    }),
                    Ae?.author_name &&
                      (0, n.jsx)("div", {
                        className: W().dynamiclink_author,
                        children: Ae.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, n.jsx)("div", {
            className: W().sketchfabmodelembedded,
            children: (0, n.jsx)("iframe", {
              className: W().sketchfabmodelembedded,
              title: Ae?.title ?? X,
              src: `https://sketchfab.com/models/${encodeURIComponent(X)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const pe =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function Ie(Z) {
          const X = pe.exec(Z),
            ie = X ? Number(X[1]) : 0;
          return ie > 0 ? ie : void 0;
        }
        function De(Z) {
          return Le(Z) ? Ie(Z) : void 0;
        }
        function Qe(Z) {
          const X = new Set();
          for (const ie of Z.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const Oe = Ie(ie[0]);
            Oe && X.add(Oe);
          }
          return Array.from(X);
        }
        var Ce = r(31774),
          ut = r(71421),
          tt = r(33998),
          Mt = r.n(tt);
        function et(Z) {
          const { defid: X } = Z,
            ie = (0, Ce.wk)(X);
          if (!ie || !ie.community_item_data) return null;
          const Oe = ie.appid,
            Ae = ie.community_item_data.item_image_large,
            Ye = `${a.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${Oe}/${Ae}`;
          return (0, n.jsx)("div", {
            className: Mt().Ctn,
            children: (0, n.jsx)(ut.he, {
              toolTipContent: ie.community_item_data.item_description,
              children: (0, n.jsx)("img", {
                src: Ye,
                alt: ie.community_item_data.item_title,
              }),
            }),
          });
        }
        var lt = r(43597);
        const yt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          Wt = /twitter\.com\/(\w+)(\/?)$/i,
          ht = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          ct = /twitch\.tv\/(\w+)(\/?)$/i,
          qe =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function st() {
          return a.TS.EREALM === I.TU.k_ESteamRealmChina;
        }
        const at = new Map();
        function dt() {
          const Z = a.TS.EREALM;
          let X = at.get(Z);
          return (
            X ||
              (st()
                ? (X = [
                    { urlRegExp: new RegExp(M), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(f), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: be },
                    { urlRegExp: new RegExp(S), fnBBComponent: ne },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                  ])
                : (X = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: lt.j6,
                    },
                    { urlRegExp: new RegExp(oe), fnBBComponent: Rt },
                    { urlRegExp: new RegExp(M), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(f), fnBBComponent: Se },
                    { urlRegExp: new RegExp(o), fnBBComponent: be },
                    { urlRegExp: new RegExp(S), fnBBComponent: ne },
                    { urlRegExp: new RegExp(yt), fnBBComponent: bt },
                    { urlRegExp: new RegExp(_), fnBBComponent: pt },
                    { urlRegExp: new RegExp(Wt), fnBBComponent: kt },
                    { urlRegExp: new RegExp(ht), fnBBComponent: St },
                    { urlRegExp: new RegExp(ct), fnBBComponent: jt },
                    { urlRegExp: new RegExp(qe), fnBBComponent: Nt },
                    { urlRegExp: new RegExp(pe), fnBBComponent: xt },
                  ]),
              at.set(Z, X)),
            X
          );
        }
        function Et(Z) {
          return dt().find((X) => !!X.urlRegExp.exec(Z));
        }
        function It(Z) {
          return v.useMemo(() => Et(Z), [Z]);
        }
        function bt(Z, X) {
          if (st()) return null;
          const ie = new RegExp(yt).exec(Z);
          if (ie && ie.length > 1) {
            const Oe = ie[1];
            if (Oe?.length > 0) {
              let Ae =
                "https://medal.tv/clip/" +
                Oe +
                "/?autoplay=0&donate=0" +
                (X && X.event ? "&steamappid=" + X.event.appid : "");
              return (0, n.jsx)("iframe", {
                className: F().MedalTVWidget,
                src: Ae,
                title: Oe,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, L.Pm)(Z, X?.event);
        }
        function pt(Z, X) {
          let ie = new RegExp(_).exec(Z);
          if (ie && ie.length > 1) {
            let Oe = ie[1];
            if (Oe && Oe.length > 1) return (0, n.jsx)($, { modelID: Oe });
          }
          return (0, L.Pm)(Z, X?.event);
        }
        function Rt(Z, X) {
          const ie = xe(Z);
          return ie !== void 0
            ? (0, n.jsx)(ke, { sharedFileID: ie })
            : (0, L.Pm)(Z, X?.event);
        }
        function Ve(Z, X) {
          const ie = Re(Z);
          return ie
            ? (0, n.jsx)(Gt, {
                eventModel: X?.event,
                inputID: ie.id,
                inputType: ie.strItemType,
                fallbackUrl: Z,
              })
            : (0, L.Pm)(Z, X?.event);
        }
        function Gt(Z) {
          const {
              inputID: X,
              inputType: ie,
              eventModel: Oe,
              fallbackUrl: Ae,
            } = Z,
            Ye = (0, s.dE)(X, ie),
            { data: _e } = (0, t.J$)(Ye),
            nt = H(Oe);
          let it;
          if (nt === null) it = !0;
          else if (nt && _e) {
            const Dt = _e.appid ? [_e.appid] : (_e.included_appids ?? []);
            it = ue(nt, Dt);
          }
          return it === void 0
            ? null
            : it
              ? (0, n.jsx)(q.e, {
                  id: X,
                  inputType: ie,
                  bApplyUserContentPref: !0,
                })
              : (0, L.Pm)(Ae, Oe);
        }
        function xt(Z, X) {
          const ie = De(Z);
          return ie
            ? (0, n.jsx)("div", {
                className: (0, P.A)(F().LoyaltyRewardCtn),
                children: (0, n.jsx)(et, { defid: ie, url: Z }),
              })
            : (0, L.Pm)(Z, X?.event);
        }
        function kt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "@", X);
        }
        function St(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.KKS, {}), "#", X);
        }
        function jt(Z, X) {
          return st() ? null : wt(Z, (0, n.jsx)(N.qcc, {}), void 0, X);
        }
        function Nt(Z, X) {
          return wt(Z, (0, n.jsx)(N.Qte, {}), void 0, X);
        }
        function wt(Z, X, ie, Oe) {
          let Ae;
          const Ye = Z.endsWith("/") ? Z.length - 1 : Z.length,
            _e = Z.lastIndexOf("/", Ye - 1);
          _e != -1 && _e + 1 < Z.length && (Ae = Z.substring(_e + 1, Ye)),
            ie && Ae && (Ae = ie + Ae);
          const nt = (0, L.Pm)(Z, Oe?.event, Ae ?? Z);
          return (0, n.jsxs)("div", {
            className: F().SocialLink,
            children: [
              (0, n.jsx)("div", { className: F().SocialIcon, children: X }),
              nt,
            ],
          });
        }
      },
      39654: (fe, de, r) => {
        "use strict";
        r.d(de, { vE: () => w });
        var n = r(72604),
          I = r(99412),
          a = r(72609),
          s = r(80902),
          t = r(38884),
          v = r(76559),
          L = r(18210);
        const k = "events/ajaxgetpartnerevent";
        function F(h) {
          const D = L.A0.GetELanguageFallback(h);
          return h != D ? `${h}_${D}` : `${h}`;
        }
        function N(h) {
          return h ? (0, t.oE)(new v.b(h.clanSteamID64), h.event) : null;
        }
        async function P(h, D) {
          const f = new URLSearchParams();
          h.clanAccountID && f.set("clan_accountid", String(h.clanAccountID)),
            h.appid && f.set("appid", String(h.appid)),
            h.eventGID && f.set("event_gid", h.eventGID),
            h.announcementGID && f.set("announcement_gid", h.announcementGID),
            f.set("lang_list", F(D)),
            f.set("last_modified_time", "0"),
            f.set("origin", window.location.origin);
          const o = a.TS.STORE_BASE_URL + k + "?" + f.toString(),
            p = await fetch(o);
          if (!p.ok) throw new Error(`${o} answered ${p.status}`);
          const S = await p.json();
          return S.success !== n.R || !S.event?.clan_steamid
            ? null
            : { clanSteamID64: S.event.clan_steamid, event: S.event };
        }
        function q(h, D) {
          return [
            "LinkedPartnerEvent",
            h.clanAccountID,
            h.appid,
            h.eventGID,
            h.announcementGID,
            D,
          ];
        }
        function z(h) {
          return (
            !!h &&
            (!!h.clanAccountID || !!h.appid) &&
            (!!h.eventGID || !!h.announcementGID)
          );
        }
        function A(h, D) {
          const f = z(h);
          return {
            queryKey: q(h ?? {}, D),
            queryFn: () => P(h ?? {}, D),
            select: N,
            enabled: f,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function w(h) {
          const D = (0, I.sfN)(a.TS.LANGUAGE);
          return (0, s.I)(A(h, D));
        }
      },
      56492: (fe, de, r) => {
        "use strict";
        r.d(de, {
          Bw: () => T,
          EX: () => se,
          Hx: () => ee,
          JP: () => te,
          LJ: () => g,
          OG: () => Y,
          PH: () => o,
          T7: () => K,
          sY: () => E,
          tj: () => ye,
          yh: () => b,
        });
        var n = r(7850),
          I = r(50974),
          a = r(99412),
          s = r(24660),
          t = r(72865),
          v = r(90626),
          L = r(92757),
          k = r(83482),
          F = r(16369),
          N = r(10303),
          P = r(64165),
          q = r(71742),
          z = r(53113),
          A = r(3166),
          w = r(72609),
          h = r(39905),
          D = r(47875),
          f = r(40358),
          o = ((M) => (
            (M.k_eView = "view"),
            (M.k_eViewWebSiteHub = "websitehub"),
            (M.k_eCommunityView = "communityview"),
            (M.k_eCommunityEdit = "edit"),
            (M.k_eCommunityEditBroadcast = "editBroadcast"),
            (M.k_eCommunityAdminPage = "admin"),
            (M.k_eCommunityPublish = "publish"),
            (M.k_eCommunityMigrate = "migrate"),
            (M.k_eCommunityPreview = "preview"),
            (M.k_eCommunityPreviewSale = "previewsale"),
            (M.k_eCommunityAnnouncementHub = "community_announcehub"),
            (M.k_eStoreView = "storeview"),
            (M.k_eStoreNewsHub = "newshub"),
            (M.k_eStoreOwnerPage = "store"),
            (M.k_eStoreSalePage = "sale"),
            (M.k_eStoreHardwarePreview = "hardwarepreview"),
            (M.k_eStoreUsersNewsHub = "usernewshub"),
            M
          ))(o || {});
        const p =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function S(M) {
          return M.match(p)?.[1];
        }
        function V(M, ge) {
          if (!ge) return !1;
          const U = !0,
            ae = S(window.location.href),
            ve = U && ae == "news",
            Ee = ge.GetEventType() == a.ajI,
            Le = !1,
            Re = ge.appid ? "games" : "groups",
            Ne =
              Le &&
              Re == ae &&
              ((ge.appid && ge.appid === A.UF.APPID) ||
                (!ge.appid &&
                  ge.clanSteamID.GetAccountID() === A.UF.CLANACCOUNTID));
          switch (M) {
            case "view":
              return Ne || (ve && !E());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return Ne;
            case "admin":
              return Ee ? !1 : Ne;
            case "websitehub":
              return Ne || ve;
            case "storeview":
              return ve && !E();
            case "newshub":
            case "store":
            case "usernewshub":
              return ve;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, q.wT)(!1, "Unknown route specified for link: " + M), !1
              );
          }
        }
        function te(M) {
          const ge =
            w.TS.COMMUNITY_BASE_URL +
            "gid/" +
            M.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            M.AnnouncementGID;
          return {
            strFacebookUrl: ge + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: ge + "?site=twitter",
            strRedditUrl: ge + "?site=reddit",
          };
        }
        function se(M) {
          return B(M, "sale", "absolute");
        }
        function C(M, ge) {
          return b(M, ge, "sale", "absolute");
        }
        function K(M) {
          return B(M, "storeview", "absolute");
        }
        function c(M, ge) {
          return b(M, ge, "storeview", "absolute");
        }
        function u(M, ge, U) {
          if (U)
            return (
              (M ? "/games/" + A.UF.VANITY_ID : "/groups/" + A.UF.VANITY_ID) +
              "/"
            );
          const ae = M ? "ogg/" + M : "gid/" + ge.ConvertTo64BitString();
          return w.TS.COMMUNITY_BASE_URL + ae + "/";
        }
        function g() {
          return "news";
        }
        function E() {
          return !1;
        }
        function Q(M) {
          return M.clanSteamID.GetAccountID() === I.gt && !1;
        }
        function B(M, ge, U) {
          const { data: ae } = (0, f.J$)(
            M?.appid ? { appid: M.appid } : void 0,
          );
          if (M) return b(M, ae, ge, U);
        }
        function b(M, ge, U, ae) {
          const ve = ae === "relative",
            Ee = !1,
            Le = ve ? "/" : w.TS.STORE_BASE_URL,
            Re = u(M.appid, M.clanSteamID, ve);
          U === "view"
            ? (U = Ee ? "communityview" : "storeview")
            : U === "websitehub" &&
              (U = Ee ? "community_announcehub" : "newshub");
          const Ne = M.GID ? M.GID : "",
            Pe = M.AnnouncementGID ? M.AnnouncementGID : "",
            we =
              M.BIsOGGEvent() &&
              M.appid &&
              ge &&
              M.BHasSaleUpdateLandingPageVanity(),
            H = M.GetEventType() == a.ajI;
          switch (U) {
            case "publish":
              return (
                Re +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/publish/" + Ne + "?tab=publishing")
              );
            case "edit":
              return (
                Re +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/edit/" + Ne)
              );
            case "editBroadcast":
              return (
                Re +
                (M.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Pe
                  : "partnerevents/edit/" + Ne) +
                "?tab=broadcast"
              );
            case "migrate":
              return Re + "partnerevents/migrate_announcement/" + Pe;
            case "preview":
              return H
                ? Re + "partnerevents/previewsale/" + Ne
                : Re +
                    (M.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Pe
                      : "partnerevents/preview/" + Ne);
            case "previewsale":
              return Re + "partnerevents/previewsale/" + Ne;
            case "admin":
              return H
                ? `${Le}curator/${M.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : Re + "partnerevents";
            case "community_announcehub":
              return Re + "announcements";
            case "newshub": {
              const ue = M.appid
                ? `app/${M.appid}`
                : `group/${M.clanSteamID.GetAccountID()}`;
              return Le + `${g()}/${ue}`;
            }
            case "store":
              return (
                Le +
                (M.appid
                  ? "app/" + M.appid
                  : "curator/" + M.clanSteamID.GetAccountID())
              );
            case "sale":
              return M.jsondata.bSaleEnabled
                ? we
                  ? `${(0, D._)(ge)}/${M.GetSaleUpdateLandingPageVanity()}`
                  : H
                    ? `${Le}curator/${M.clanSteamID.GetAccountID()}`
                    : Le +
                      (0, P.n)(
                        M.clanSteamID.GetAccountID(),
                        M.GetSaleVanity(),
                        !!M.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : Le;
            case "hardwarepreview":
              return Q(M) ? `${Le}hardware_v2/${Pe}?beta=1` : Le;
            case "communityview":
              return Re + "announcements/detail/" + Pe;
            case "storeview": {
              if (M.clanSteamID.GetAccountID() == (0, F.H)())
                return `${w.TS.STORE_BASE_URL}meetsteam/${Ne}`;
              if (we)
                return `${(0, D._)(ge)}/${M.GetSaleUpdateLandingPageVanity()}`;
              if (H) return `${Le}curator/${M.clanSteamID.GetAccountID()}`;
              {
                const ue = M.appid
                    ? `app/${M.appid}`
                    : `group/${M.clanSteamID.GetAccountID()}`,
                  G = E() ? "view_v2" : "view",
                  me = M.bOldAnnouncement ? `old_view/${Pe}` : `${G}/${Ne}`;
                return `${Le}${g()}/${ue}/${me}`;
              }
            }
            case "usernewshub":
              return `${Le}${g()}/`;
            default:
              return (0, q.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function T(M, ge, U) {
          const ae = U === "forceAbsolute" || !V(ge, M);
          return B(M, ge, ae ? "absolute" : "relative");
        }
        function J(M, ge, U, ae) {
          const ve = ae === "forceAbsolute" || !V(U, M);
          return b(M, ge, U, ve ? "absolute" : "relative");
        }
        function Y(M) {
          const { eventModel: ge, route: U, bPopup: ae = !0 } = M,
            ve = V(U, ge),
            Ee = B(ge, U, ve ? "relative" : "absolute");
          return (
            v.useEffect(() => {
              Ee && (ae ? window.open(Ee) : window.location.assign(Ee));
            }, [ae, Ee]),
            ve && Ee ? (0, n.jsx)(L.rd, { push: !0, to: Ee }) : null
          );
        }
        function ee(M, ge, U) {
          const ae = u(M, ge, !1);
          return U === "admin" ? ae + "partnerevents" : "";
        }
        function ye(M) {
          const { eventModel: ge, preferredFocus: U } = M,
            { bCanUseLink: ae } = v.useContext(N.I),
            ve = (0, t.n9)(),
            Ee = (0, L.W6)(),
            Le = ae && V(M.route, ge),
            Re = B(ge, M.route, Le ? "relative" : "absolute"),
            Ne = !Le && Re ? (0, z.NT)(Re) : Re,
            Pe = Le || !Ne ? Ne : (0, k.wJ)(Ne, ve),
            we = B(ge, "websitehub", "absolute"),
            H =
              M.route != "websitehub"
                ? h.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            ue = v.useCallback(() => {
              we && window.location.assign(we);
            }, [we]);
          return ge
            ? Le
              ? (0, n.jsx)(s.Ii, {
                  style: M.style,
                  className: M.className,
                  href: Ee.createHref({ pathname: Pe }),
                  onClick: (G) => {
                    Pe && (M.onClick?.(G), Ee.push(Pe), G.preventDefault());
                  },
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? ue : void 0,
                  preferredFocus: U,
                  children: M.children,
                })
              : (0, n.jsx)(s.Ii, {
                  href: Pe,
                  style: M.style,
                  className: M.className,
                  onClick: M.onClick,
                  preferredFocus: U,
                  onOptionsActionDescription: H,
                  onOptionsButton: H ? ue : void 0,
                  children: M.children,
                })
            : null;
        }
      },
      32606: (fe, de, r) => {
        "use strict";
        r.d(de, { O: () => F, j: () => k });
        var n = r(7850),
          I = r(65946),
          a = r(18057),
          s = r(36707),
          t = r(71684),
          v = r(38182),
          L = r.n(v);
        function k(N) {
          const {
              event: P,
              className: q,
              nOverrideStartTime: z,
              nOverrideEndTime: A,
            } = N,
            w = N.stylesmodule ? { ...L(), ...N.stylesmodule } : L(),
            [h, D, f] = (0, I.q3)(() => [
              z ||
                (P.bOldAnnouncement
                  ? P.postTime
                  : P.GetStartTimeAndDateUnixSeconds()),
              A || P.GetEndTimeAndDateUnixSeconds(),
              P.type,
            ]),
            o = !(0, t.JS)(f);
          return (0, n.jsx)("div", {
            className: (0, s.A)(w.EventDetailTimeInfo, q),
            children: (0, n.jsx)(a.v9, {
              startDateAndTime: h,
              endDateAndTime: D,
              bHideEndTime: o,
              stylesmodule: w,
            }),
          });
        }
        function F(N) {
          const {
              id: P,
              event: q,
              className: z,
              dateRangeLayout: A = "horizontal",
            } = N,
            [w, h, D] = (0, I.q3)(() => [
              q.GetStartTimeAndDateUnixSeconds(),
              q.GetEndTimeAndDateUnixSeconds(),
              q.type,
            ]),
            f = {};
          return (
            A == "vertical" &&
              (f.ShortDateRange = L().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: P,
              className: (0, s.A)(L().EventDetailTimeInfo, z),
              children: (0, n.jsx)(a.u1, {
                startDateAndTime: w,
                endDateAndTime: h,
                bHideEndTime: !(0, t.JS)(D),
                stylesmodule: f,
              }),
            })
          );
        }
      },
      87949: (fe, de, r) => {
        "use strict";
        r.d(de, { e: () => P });
        var n = r(7850),
          I = r(78192),
          a = r(72609),
          s = r(40358),
          t = r(88743),
          v = r(61431),
          L = r(36707),
          k = r(18210),
          F = r(20881),
          N = r.n(F);
        function P(q) {
          const { inputType: z, id: A, bApplyUserContentPref: w } = q,
            h = z == "bundle" ? "bundle" : z == "sub" ? "sub" : "game",
            D = (0, t.zl)(A, h),
            { data: f } = (0, s.J$)(D),
            { data: o, isPending: p } = (0, s.Ij)(w ? D : void 0);
          if (!f) return null;
          if (w) {
            if (p) return null;
            if (o?.filter_failure == I.hQ.Zy || o?.filter_failure == I.hQ.ir) {
              let S = "#StoreCapsule_App_Excluded";
              switch (z) {
                case "sub":
                  S = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  S = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, n.jsx)("div", {
                className: (0, L.A)(
                  N().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, k.oW)(
                  S,
                  (0, n.jsx)("a", {
                    href: a.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, n.jsx)("div", {
            className: (0, L.A)(N().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, n.jsx)(v.p, {
              id: A,
              type: h,
              bShowDemoButton: f.type == I.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      42277: (fe, de, r) => {
        "use strict";
        r.d(de, { KL: () => F, mc: () => N });
        var n = r(72604),
          I = r(72609),
          a = r(75233),
          s = r(80902),
          t = r(51614),
          v = r(83028);
        function L(P, q) {
          return ["GetClanAnnouncementVoteForUser", q, P];
        }
        function k(P) {
          return P == "up" ? 1 : P == "down" ? -1 : 0;
        }
        function F(P, q, z, A) {
          const w = (0, a.jE)(),
            h = L(P, I.iA.accountid),
            { data: D } = (0, s.I)({
              queryKey: h,
              queryFn: async () => await z.GetMyEventVote(P),
              initialData: A?.initialVote,
              enabled: !!P && !!I.iA.accountid && (A?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: f } = (0, t.n)({
              mutationFn: async (p) => {
                const S = await z.RateEvent(P, q, p);
                if (S != n.R)
                  throw new Error(`RateClanAnnouncement failed with ${S}`);
              },
              onMutate: (p) => w.setQueryData(h, p),
              onError: () => w.invalidateQueries({ queryKey: h }),
            });
          return {
            myVote: D,
            Vote: (p) => {
              !P || p == D || f(p);
            },
          };
        }
        function N(P, q) {
          if (P.length == 0) return;
          const z = q ?? (0, v.X)("SetMyEventVotes");
          z &&
            P.forEach((A) =>
              z.setQueryData(L(A.gidAnnouncement, I.iA.accountid), A.vote),
            );
        }
      },
      80684: (fe, de, r) => {
        "use strict";
        r.d(de, { _: () => P });
        var n = r(7850),
          I = r(5827),
          a = r(40358),
          s = r(47875),
          t = r(54806),
          v = r(65946),
          L = r(1683),
          k = r(18210),
          F = r(98462),
          N = r.n(F);
        function P(q) {
          const { event: z } = q,
            A = (0, v.q3)(() => z.jsondata?.referenced_appids || []),
            w = (0, I.eG)(),
            h = (0, t.E)({
              queries: A.map((o) => (0, a.us)(w, { appid: o })),
              combine: (o) => ({
                bLoaded: o.every((p) => !p.isPending),
                data: o.map((p) => p.data),
              }),
            });
          if (!A.length || !h.bLoaded) return null;
          const D = h.data
              .flatMap((o) =>
                o?.store_url_path && o?.name
                  ? [`[url="${(0, s._)(o)}"]${o.name}[/url]`]
                  : [],
              )
              .join((0, k.we)("#EventDisplay_ReferencedApps_Joiner")),
            f = (0, k.Yp)("#EventDisplay_ReferencedApps", A.length, D);
          return (0, n.jsx)("div", {
            className: N().ReferencedApps,
            children: (0, n.jsx)(L.Zn, { text: f, event: z }),
          });
        }
      },
      88812: (fe, de, r) => {
        "use strict";
        r.d(de, { WC: () => k });
        var n = r(9046),
          I = r(5827),
          a = r(75233),
          s = r(80902),
          t = r(71742),
          v = r(68266),
          L = r(85741);
        function k(P, q, z, A, w) {
          const h = (0, a.jE)(),
            D = (0, I.eG)();
          return (0, s.I)(N(h, D, P, q, z, A, w)).data ?? void 0;
        }
        function F(P, q, z, A, w) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            P?.GID,
            q,
            z,
            A,
            w,
          ];
        }
        function N(P, q, z, A, w, h, D) {
          return {
            queryKey: F(z, A, w, h, D),
            enabled: z && !!z.GID,
            queryFn: async () => {
              if (!z) return null;
              let f = new Array();
              if (!z.BImageNeedScreenshotFallback(A, w)) {
                const o = await P.ensureQueryData((0, v.lx)(P, q, z, A, w, h));
                if ((o && f.push(o), h != n.wI.full)) {
                  const p = await P.ensureQueryData(
                    (0, v.lx)(P, q, z, A, w, n.wI.full),
                  );
                  p && f.push(p);
                }
              }
              if (!D)
                try {
                  const o = await P.ensureQueryData((0, L.dO)(P, q, z));
                  o && f.push(o);
                } catch (o) {
                  if (
                    ((0, t.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${z?.GID} from clan ${z?.clanSteamID.GetAccountID()}`,
                    ),
                    f.length == 0)
                  )
                    throw o;
                }
              return f;
            },
          };
        }
      },
      68266: (fe, de, r) => {
        "use strict";
        r.d(de, { lx: () => A, m0: () => q });
        var n = r(9046),
          I = r(55483),
          a = r(72609),
          s = r(21721),
          t = r(5827),
          v = r(40358),
          L = r(75233),
          k = r(80902),
          F = r(18210),
          N = r(53113),
          P = r(85741);
        function q(h, D, f, o = n.wI.full, p = !0) {
          const S = (0, L.jE)(),
            V = (0, t.eG)();
          return (0, k.I)(A(S, V, h, D, f, o, p)).data ?? void 0;
        }
        function z(h, D, f, o = n.wI.full, p = !0) {
          return ["useEventImageURLWithFallback", h?.GID, D, f, o, p];
        }
        function A(h, D, f, o, p, S = n.wI.full, V = !0) {
          return {
            queryKey: z(f, o, p, S, V),
            enabled: !!f?.GID,
            initialData: () => w(f, o, p, S, V),
            queryFn: async () => {
              if (!f) return null;
              let te = w(f, o, p, S, V);
              if (te) return te;
              const se = await h.ensureQueryData(
                (0, I.ec)(f.clanSteamID.GetAccountID(), h),
              );
              if (o == "capsule") {
                let K = f.appid;
                if (
                  !K &&
                  se &&
                  ((se.is_creator_home && !se.is_ogg) || se.is_curator)
                )
                  if (f.jsondata?.referenced_appids?.length)
                    K = f.jsondata.referenced_appids[0];
                  else return se.avatar_full_url ?? null;
                const c = await h.ensureQueryData((0, v.AQ)(D, { appid: K }));
                return c
                  ? ((0, s.b0)(c, "main_capsule") ?? null)
                  : se?.avatar_full_url
                    ? se.avatar_full_url
                    : `${a.TS.STORE_ITEM_BASE_URL}steam/apps/${K}/header.jpg`;
              }
              return o == "background" &&
                se &&
                ((se.is_creator_home && !se.is_ogg) || se.is_curator)
                ? (se.creator_page_bg_url ?? null)
                : await h.ensureQueryData((0, P.dO)(h, D, f));
            },
          };
        }
        function w(h, D, f, o = n.wI.full, p = !0) {
          if (!h) return;
          const S = h.GetImageURL(D, f, o);
          if (S && S.trim().length > 0) return S;
          const V = F.A0.GetELanguageFallback(f);
          if (f != V) {
            const se = h.GetImageURL(D, V, o);
            if (se && se.trim().length > 0) return se;
          }
          if (D == "capsule") {
            let se = h.GetImageFromBeginningOfDescription(f, Number.MAX_VALUE);
            if (se && (p || (0, N.ZF)(se))) return se;
          }
        }
      },
      85741: (fe, de, r) => {
        "use strict";
        r.d(de, { Mg: () => k, dO: () => F });
        var n = r(55483),
          I = r(99412),
          a = r(72609),
          s = r(5827),
          t = r(40358),
          v = r(75233),
          L = r(80902);
        function k(P) {
          const q = (0, v.jE)(),
            z = (0, s.eG)();
          return (0, L.I)(F(q, z, P)).data ?? void 0;
        }
        function F(P, q, z) {
          return {
            queryKey: N(z),
            enabled: !!z?.GID,
            queryFn: async () => {
              if (!z) return null;
              const A = z.appid
                  ? await P.ensureQueryData((0, t.OE)(q, { appid: z.appid }))
                  : null,
                w = await P.ensureQueryData(
                  (0, n.ec)(z.clanSteamID.GetAccountID(), P),
                );
              if (z.appid)
                if (A) {
                  if (
                    A.all_ages_screenshots &&
                    A.all_ages_screenshots.length > 0
                  ) {
                    let h = Number(
                      z.bOldAnnouncement
                        ? z.AnnouncementGID
                        : z.GID == null
                          ? 0
                          : z.GID,
                    );
                    return (
                      (h = h % A.all_ages_screenshots.length),
                      `${a.TS.STORE_ITEM_BASE_URL}${A.all_ages_screenshots[h].filename}`
                    );
                  }
                } else return "";
              return z.GetEventType() != I.ajI &&
                w &&
                ((w.is_creator_home && !w.is_ogg) || w.is_curator)
                ? (w.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function N(P) {
          return ["useFallbackArtworkScreenshot", P?.GID];
        }
      },
      28515: (fe, de, r) => {
        "use strict";
        r.d(de, { n: () => v });
        var n = r(7850),
          I = r(90626),
          a = r(59432);
        const s = I.createContext(void 0);
        function t(L) {
          const [k, F] = React.useState(L.rtServerNow),
            N = !!L.bHoldSeed;
          return (
            React.useEffect(() => {
              N || F(void 0);
            }, [N]),
            jsx(s.Provider, { value: k, children: L.children })
          );
        }
        function v() {
          return I.useContext(s) ?? (0, a.Gw)();
        }
      },
      90533: (fe, de, r) => {
        "use strict";
        r.d(de, { Eg: () => k, m4: () => w, EG: () => A, fm: () => f });
        var n = r(61639),
          I = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(3166);
        async function v(o, p) {
          const S = new URLSearchParams();
          S.append("page_action", String(o)),
            S.append("snr", t.TS.SNR),
            S.append("uint_data", String(p)),
            S.append("str_data", L());
          try {
            await fetch(
              t.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              { method: "POST", body: S },
            );
          } catch {}
        }
        function L() {
          if (t.TS.IN_CLIENT) return "steam";
          const o = navigator.userAgent;
          return /iPhone|iPad|iPod/i.test(o) ||
            (/Macintosh/i.test(o) && /Safari/i.test(o))
            ? "ios"
            : /Android/i.test(o)
              ? "android"
              : "";
        }
        var k = ((o) => (
          (o[(o.k_eDiscussions = 0)] = "k_eDiscussions"),
          (o[(o.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (o[(o.k_eClickThrough = 2)] = "k_eClickThrough"),
          (o[(o.k_eMuted = 3)] = "k_eMuted"),
          (o[(o.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (o[(o.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (o[(o.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (o[(o.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (o[(o.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (o[(o.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (o[(o.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (o[(o.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (o[(o.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing"),
          o
        ))(k || {});
        const F = {
          nFutureViewedIndex: 0,
          nPastViewedIndex: 0,
          nLastRecordedFilter: 0,
        };
        function N() {
          return ["EventCalendarTrackingProgress"];
        }
        function P(o) {
          return o.getQueryData(N()) ?? F;
        }
        function q(o, p) {
          o.setQueryDefaults(N(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
            o.setQueryData(N(), (S) => ({ ...(S ?? F), ...p }));
        }
        function z(o, p, S) {
          return clearTimeout(o), setTimeout(S, p);
        }
        function A(o) {
          v(n.Mc.ej, o);
        }
        function w(o, p) {
          const V = z(P(o).schFilter, 1e3, () => {
            p != P(o).nLastRecordedFilter &&
              (q(o, { nLastRecordedFilter: p }), v(n.Mc.Ms, p));
          });
          q(o, { schFilter: V });
        }
        function h(o, p, S, V) {
          let te = 0,
            se = 0,
            C,
            K;
          for (const B of S) {
            const b = B.start_time > V;
            if ((B.unique_id == p && ((C = se), (K = B)), b)) te++;
            else if (C !== void 0) break;
            se++;
          }
          if (C === void 0 || !K) return;
          const c = 500,
            u = P(o);
          if (C < te) {
            const B = te - C;
            if (u.nFutureViewedIndex >= B) return;
            const b = z(u.schFuture, c, () => {
              const T =
                Math.min(B, 4095) |
                (Math.min(te, 255) << 12) |
                (Math.min(D(V), 2047) << 20);
              v(n.Mc.R, T);
            });
            q(o, { nFutureViewedIndex: B, schFuture: b });
            return;
          }
          const g = C - te;
          if (u.nPastViewedIndex >= g) return;
          const E = Math.floor((V - K.start_time) / (24 * 3600)),
            Q = z(u.schPast, c, () => {
              const B =
                Math.min(g, 4095) |
                (Math.min(E, 255) << 12) |
                (Math.min(D(V), 2047) << 20);
              v(n.Mc.mZ, B);
            });
          q(o, { nPastViewedIndex: g, schPast: Q });
        }
        function D(o) {
          return Math.max(0, Math.floor(Date.now() / 1e3 - o));
        }
        function f() {
          const o = (0, I.jE)(),
            { mutate: p } = (0, a.n)({
              mutationFn: async (S) => {
                switch (S.type) {
                  case "interaction":
                    A(S.interaction);
                    break;
                  case "filter-change":
                    w(o, S.nFilterBitMask);
                    break;
                  case "event-viewed":
                    h(o, S.gidEvent, S.rgItemsInView, S.rtCalendarInit);
                    break;
                }
              },
            });
          return s.useMemo(
            () => ({
              RecordInteraction: (S) =>
                p({ type: "interaction", interaction: S }),
              RecordFilterChange: (S) =>
                p({ type: "filter-change", nFilterBitMask: S }),
              RecordEventViewed: (S, V, te) =>
                p({
                  type: "event-viewed",
                  gidEvent: S,
                  rgItemsInView: V,
                  rtCalendarInit: te,
                }),
            }),
            [p],
          );
        }
      },
      16369: (fe, de, r) => {
        "use strict";
        r.d(de, { H: () => a });
        var n = r(99412),
          I = r(72609);
        const a = () => (I.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      69909: (fe, de, r) => {
        "use strict";
        r.d(de, {
          Lc: () => p,
          Mr: () => K,
          Sk: () => S,
          Ue: () => te,
          _t: () => V,
          ee: () => f,
          hh: () => N,
          mG: () => w,
          my: () => q,
          rF: () => se,
          us: () => C,
        });
        var n = r(16936),
          I = r(54357),
          a = r(80902),
          s = r(16369),
          t = r(36174),
          v = r(65946),
          L = r(92264),
          k = r(87937),
          F = r.n(k);
        const N = "America/Los_Angeles";
        function P(c, u) {
          return {
            queryKey: z(c, u),
            queryFn: () => (0, n.t3)(u),
            enabled: (0, s.H)() == c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function q(c, u) {
          return (0, a.I)(P(c, u));
        }
        const z = (c, u) => ["useMeetSteamGetAvailability", c, u];
        function A(c, u, g) {
          return {
            queryKey: h(c, u, g),
            queryFn: async () => {
              const E = await (0, n.vd)(u);
              return E ? JSON.parse(E) : {};
            },
            enabled: (0, s.H)() == c && !!g,
          };
        }
        function w(c, u, g) {
          return (0, a.I)(A(c, u, g));
        }
        const h = (c, u, g) => ["useMeetSteamGetRegistrationDetails", c, u, g];
        function D(c) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", c],
            queryFn: () => (0, n.Nc)(),
            enabled: !!c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function f(c) {
          return (0, a.I)(D(c));
        }
        function o(c, u) {
          return {
            queryKey: ["useMeetSteamQRCode", c, u],
            queryFn: () => (0, n.EI)(c, u),
            enabled: !!u && !0,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function p(c, u) {
          return (0, a.I)(o(c, u)).data?.qrcode;
        }
        function S(c, u = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return c.location_type === "in_person"
            ? (c.in_person_time_zone ?? N)
            : u;
        }
        function V(c) {
          const u = (0, I.B)();
          return (0, v.q3)(() => ({
            rtime_start: c.rtime_start,
            rtime_end: c.rtime_end,
            sDisplayTimeZone: S(c, u),
          }));
        }
        function te(c, u) {
          const g = F().unix(c),
            Q = F().unix(c).tz(u).utcOffset() - g.utcOffset();
          return new Date((c + Q * 60) * 1e3);
        }
        function se(c, u) {
          const g = te(c, u),
            E = new Date();
          return g.getFullYear() == E.getFullYear()
            ? (0, L.$w)(g)
            : (0, L._9)(g);
        }
        function C(c, u) {
          const g = F().unix(c),
            Q = F().unix(c).tz(u).utcOffset() - g.utcOffset();
          return (0, L.KC)(c + Q * 60);
        }
        function K(c, u, g, E) {
          const Q = F().unix(c),
            b = F().unix(c).tz(g).utcOffset() - Q.utcOffset(),
            T = F().unix(u),
            J = F().unix(u).tz(g),
            Y = J.utcOffset() - T.utcOffset();
          return (
            (0, L.Vx)(c + b * 60, u + Y * 60, !0) +
            (E ? "" : " " + J.format("z"))
          );
        }
      },
      5191: (fe, de, r) => {
        "use strict";
        r.d(de, { j: () => re });
        var n = r(7850),
          I = r(55483),
          a = r(29522),
          s = r(40358),
          t = r(90533),
          v = r(72609),
          L = r(89926),
          k = r(28515),
          F = r(99412),
          N = r(64868),
          P = r(90626),
          q = r(16346),
          z = r(40650),
          A = r(16412),
          w = r(18057),
          h = r(96538),
          D = r(36118),
          f = r(85599),
          o = r(71421),
          p = r(36707),
          S = r(18210),
          V = r(36174),
          te = r(53113),
          se = r(6878),
          C = r.n(se),
          K = r(95695),
          c = r(56492),
          u = r(42937);
        function g(ne) {
          return (
            (ne.bHasVerifiedEmail && ne.bFollowsByEmail) ||
            (ne.bHasPushNotification && ne.bFollowsByPush)
          );
        }
        function E(ne) {
          const {
              eventModel: oe,
              rtNow: xe,
              notifyState: je,
              bOnlyShowIcon: Te,
              renderPanel: Ge,
              onRequestSignIn: ke,
              bSignedIn: ze,
              onTrack: Fe,
            } = ne,
            [W, _] = P.useState(!1),
            he = P.useRef(null),
            Me = P.useRef(null),
            Je = P.useCallback(() => {
              Me.current?.Hide(), _(!1);
            }, []),
            $e = () => {
              const De = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, p.A)(
                  u.ReminderDialog,
                  u.ReminderOptions,
                  z.contextMenu,
                ),
              };
              (Me.current = (0, q.lX)(Ge(Je), he.current, De)),
                Me.current.SetOnHideCallback(Je),
                _(!0),
                Fe?.("opened");
            },
            O = (De) => {
              if (!ze) {
                ke?.();
                return;
              }
              W ? Je() : $e(), De.stopPropagation(), De.preventDefault();
            },
            $ = Te && !W,
            pe = g(je);
          return (oe.startTime !== void 0 && oe.startTime < xe) ||
            oe.BIsUnlistedEvent()
            ? null
            : (0, n.jsxs)("div", {
                className: (0, p.A)({
                  [u.ReminderCheckBox]: !0,
                  [C().ReminderCtn]: !0,
                  [u.IconMode]: $,
                  [u.TextMode]: !$,
                  ReminderSet: pe,
                  RemindMeWidget: !0,
                }),
                onClick: O,
                ref: he,
                children: [
                  pe &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)(D.Jlk, {}),
                    }),
                  $ &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)(D.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, S.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOptions }),
                ],
              });
        }
        function Q(ne) {
          const {
              eventModel: oe,
              lang: xe,
              rtNow: je,
              notifyState: Te,
              bShowStartTime: Ge,
              bExpandLeft: ke,
              bOnlyShowIcon: ze,
              strCalendarEventTitle: Fe,
              onChangeNotify: W,
              onTrack: _,
              fnHidePanel: he,
            } = ne,
            [Me, Je] = P.useState(!1),
            [$e, O] = P.useState(void 0),
            [$, pe, Ie] = (0, N.uD)(),
            De = async (qe, st) => {
              if (!(!oe.GID || oe.GID == F.kFb)) {
                Je(!0);
                try {
                  await W(qe, st),
                    qe && _?.(st == "email" ? "notify-email" : "notify-push");
                } catch (at) {
                  O(at instanceof Error ? at.message : String(at)), pe();
                }
                Je(!1);
              }
            },
            Qe = oe.jsondata.bSaleEnabled
              ? c.PH.k_eStoreSalePage
              : c.PH.k_eStoreView,
            Ce = (0, c.Bw)(oe, Qe, "forceAbsolute"),
            ut = () => {
              let qe = oe.GetSubTitleWithLanguageFallback(xe);
              qe = qe
                ? `${qe}


`
                : "";
              const st = oe.GetSummaryWithFallback(xe);
              return `${qe}${st}

${Ce}`;
            },
            tt = () => {
              const qe = encodeURIComponent(Fe),
                st = encodeURIComponent(ut()),
                at = oe.GetStartTimeAndDateUnixSeconds(),
                dt = B(at),
                Et = oe.GetEndTimeAndDateUnixSeconds() || at + V.Kp.PerHour,
                It = B(Et),
                bt =
                  (v.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${qe}&details=${st}&dates=${dt}/${It}`;
              return (0, te.k2)(bt);
            },
            Mt = (qe) => {
              const st = oe.appid
                  ? "app/" + oe.appid
                  : "group/" + oe.clanSteamID.GetAccountID(),
                at = "l=" + (0, F.LgB)(xe);
              return `${v.TS.STORE_BASE_URL}${(0, c.LJ)()}/download/${st}/${qe}/${oe.GID}?${at}`;
            },
            {
              bHasVerifiedEmail: et,
              bHasPushNotification: lt,
              bFollowsByEmail: yt,
              bFollowsByPush: Wt,
            } = Te,
            ht = !1,
            ct = Ge && oe.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, p.A)(
                  u.ReminderCheckBox,
                  ze ? u.IconMode : u.TextMode,
                  "RemindMeWidget",
                ),
                onClick: he,
                children: [
                  g(Te) &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)(D.Jlk, {}),
                    }),
                  ze &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)(D.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, S.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOpennedOptions }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, p.A)(
                  u.FlexColumnContainer,
                  u.ReminderBackground,
                  ke && u.ReminderExpandsLeft,
                ),
                children: [
                  Me &&
                    (0, n.jsx)(f.t, {
                      className: u.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  ct &&
                    (0, n.jsx)("div", {
                      className: u.FullStartTime,
                      children: (0, S.PP)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, S.TW)(
                          ct,
                          (0, V.Ct)(new Date(ct * 1e3), new Date(je * 1e3)),
                        ),
                        (0, w.yi)(ct, !0),
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderOptionsHeader,
                    children: (0, S.we)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, p.A)(u.ReminderOption, !et && u.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, S.we)(
                          et
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, n.jsx)(A.Yh, {
                          label: (0, S.we)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !et,
                          checked: yt,
                          onChange: (qe) => De(qe, "email"),
                        }),
                      }),
                      !et &&
                        (0, n.jsx)("div", {
                          className: K.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: v.TS.STORE_BASE_URL + "account/",
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => _?.("email-unverified"),
                            children: (0, S.we)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, p.A)(u.ReminderOption, !lt && u.Unverified),
                    children: [
                      (0, n.jsx)(o.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, S.we)(
                          lt
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, n.jsx)(A.Yh, {
                          label: (0, S.we)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !lt,
                          checked: Wt,
                          onChange: (qe) => De(qe, "push"),
                        }),
                      }),
                      !lt &&
                        (0, n.jsx)("div", {
                          className: K.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: v.TS.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => _?.("push-missing"),
                            children: (0, S.we)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)(P.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: u.ReminderOptionsHeader,
                        children: (0, S.we)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: u.ReminderCalendarOptions,
                        children: [
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: Mt("ics"),
                            onClick: () => _?.("calendar-apple"),
                            children: (0, S.we)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            target: v.TS.IN_CLIENT ? void 0 : "_blank",
                            href: tt(),
                            onClick: () => _?.("calendar-google"),
                            children: (0, S.we)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: Mt("outlook"),
                            onClick: () => _?.("calendar-outlook"),
                            children: (0, S.we)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  ht &&
                    (0, n.jsx)("div", {
                      className: (0, p.A)(u.ReminderSettings, u.ReminderOption),
                      children: (0, S.we)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
              (0, n.jsx)(h.EN, {
                active: $,
                children: (0, n.jsx)(h.KG, {
                  strTitle: (0, S.we)(
                    "#EventDisplay_Reminder_FollowEvent_Error",
                  ),
                  strDescription: (0, S.we)(
                    "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                  ),
                  closeModal: Ie,
                  children: $e,
                }),
              }),
            ],
          });
        }
        function B(ne) {
          return new Date(ne * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var b = r(26589),
          T = r(68312),
          J = r(75233),
          Y = r(80902),
          ee = r(76559),
          ye = r(67705),
          M = ((ne) => (
            (ne[(ne.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (ne[(ne.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (ne[(ne.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
            ne
          ))(M || {});
        const ge = "notificationaction/usercontactmethods";
        async function U() {
          const ne = v.TS.STORE_BASE_URL + ge,
            oe = await fetch(ne, { credentials: "include" });
          if (!oe.ok) throw new Error(`${ne} answered ${oe.status}`);
          return await oe.json();
        }
        const ae = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
        function ve() {
          const { data: ne } = (0, Y.I)(Le());
          return ne ?? ae;
        }
        function Ee(ne) {
          return ["useUserContactMethods", ne];
        }
        function Le() {
          return {
            queryKey: Ee(v.iA.accountid),
            queryFn: U,
            enabled: !!v.iA.logged_in,
            initialData: () => {
              const ne = (0, ye.Fd)("notificationstore", "application_config");
              return Ne(ne) ? Re(ne) : void 0;
            },
          };
        }
        function Re(ne) {
          return {
            bHasValidatedEmail: !!ne.email_validated,
            bHasPushNotification: (ne.mobile_device_count ?? 0) > 0,
          };
        }
        function Ne(ne) {
          const oe = ne;
          return (
            !!oe &&
            typeof oe == "object" &&
            typeof oe.mobile_device_count == "number"
          );
        }
        function Pe(ne, oe) {
          const xe = (0, J.jE)(),
            je = (0, T.KV)(),
            { data: Te } = (0, Y.I)((0, b.gg)(ne, xe, je)),
            Ge = ve(),
            ke = H(Te, oe);
          return {
            bHasVerifiedEmail: Ge.bHasValidatedEmail,
            bHasPushNotification: Ge.bHasPushNotification,
            bFollowsByEmail: (ke & M.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (ke & M.k_ENotifyFlagByPush) != 0,
          };
        }
        function we(ne, oe) {
          const xe = (0, J.jE)(),
            je = (0, T.KV)(),
            Te = (0, b.gg)(ne, xe, je);
          return async (Ge, ke) => {
            if (!oe) return;
            const ze = xe.getQueryData(Te.queryKey),
              Fe =
                ke == "email" ? M.k_ENotifyFlagByEmail : M.k_ENotifyFlagByPush,
              W = H(ze, oe),
              _ = Ge ? W | Fe : W & ~Fe;
            await ue(ne, oe, _),
              await xe.invalidateQueries({ queryKey: Te.queryKey });
          };
        }
        function H(ne, oe) {
          const xe = oe ? (ne?.event_followed?.indexOf(oe) ?? -1) : -1;
          return xe == -1 ? 0 : (ne?.event_followed_flags?.[xe] ?? 0);
        }
        async function ue(ne, oe, xe) {
          const je = xe == 0,
            Ge = `${`${v.TS.STORE_BASE_URL}events/`}${je ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            ke = new URLSearchParams();
          ke.append("sessionid", (0, ye.KC)()),
            ke.append("ignore", "false"),
            ke.append("gid", oe),
            ke.append("notification_flag", "" + xe),
            ke.append("clan_accountid", "" + ne);
          const ze = await fetch(Ge, {
            method: "POST",
            body: ke,
            credentials: "include",
          });
          if (!ze.ok) throw new Error(`${Ge} answered ${ze.status}`);
        }
        function G(ne) {
          const { eventModel: oe, bOnlyShowIcon: xe, onTrack: je } = ne,
            Te = (0, k.n)(),
            Ge = Pe(oe.clanSteamID.GetAccountID(), oe.GID),
            { elDialogElement: ke, fnShowLogonDialog: ze } = (0, L.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(E, {
                eventModel: oe,
                rtNow: Te,
                notifyState: Ge,
                bOnlyShowIcon: xe,
                bSignedIn: !!v.iA.logged_in || v.TS.IN_CLIENT,
                onRequestSignIn: ze,
                onTrack: je,
                renderPanel: (Fe) =>
                  (0, n.jsx)(me, { ...ne, rtNow: Te, fnHidePanel: Fe }),
              }),
              ke,
            ],
          });
        }
        function me(ne) {
          const {
              eventModel: oe,
              lang: xe,
              strHubName: je,
              bShowStartTime: Te,
              bExpandLeft: Ge,
              bOnlyShowIcon: ke,
              onTrack: ze,
              rtNow: Fe,
              fnHidePanel: W,
            } = ne,
            _ = oe.clanSteamID.GetAccountID(),
            he = Pe(_, oe.GID),
            Me = we(_, oe.GID),
            Je = oe.GetNameWithFallback(xe) ?? "",
            $e = je ? `${je}: ${Je}` : Je;
          return (0, n.jsx)(Q, {
            eventModel: oe,
            lang: xe,
            rtNow: Fe,
            notifyState: he,
            strCalendarEventTitle: $e,
            bShowStartTime: Te,
            bExpandLeft: Ge,
            bOnlyShowIcon: ke,
            onChangeNotify: Me,
            onTrack: ze,
            fnHidePanel: W,
          });
        }
        function re(ne) {
          const {
              eventModel: oe,
              lang: xe,
              bShowStartTime: je,
              bExpandLeft: Te,
              bOnlyShowIcon: Ge,
            } = ne,
            ke = (0, t.fm)(),
            ze = be(oe);
          return (0, n.jsx)(G, {
            eventModel: oe,
            lang: xe,
            strHubName: ze,
            bShowStartTime: je,
            bExpandLeft: Te,
            bOnlyShowIcon: Ge,
            onTrack: (Fe) => ke.RecordInteraction(Se[Fe]),
          });
        }
        function be(ne) {
          const oe = ne.appid || void 0,
            xe = (0, a.$5)(oe),
            { data: je } = (0, s.J$)(xe),
            { data: Te } = (0, I.TB)(
              oe ? void 0 : ne.clanSteamID.GetAccountID(),
            );
          return (oe ? je?.name : Te?.group_name) || void 0;
        }
        const Se = {
          opened: t.Eg.k_eReminder_Opened,
          "notify-email": t.Eg.k_eReminder_Email,
          "notify-push": t.Eg.k_eReminder_MobilePush,
          "email-unverified": t.Eg.k_eReminder_EmailUnverified,
          "push-missing": t.Eg.k_eReminder_MobilePushMissing,
          "calendar-apple": t.Eg.k_eReminder_CalendarApple,
          "calendar-google": t.Eg.k_eReminder_CalendarGoogle,
          "calendar-outlook": t.Eg.k_eReminder_CalendarOutlook,
        };
      },
      91778: (fe, de, r) => {
        "use strict";
        r.d(de, { k: () => t });
        var n = r(7850),
          I = r(90626),
          a = r(69168);
        const s = I.lazy(() =>
          Promise.all([
            r.e(5858),
            r.e(58612),
            r.e(98028),
            r.e(8319),
            r.e(34178),
            r.e(98656),
          ])
            .then(r.bind(r, 21637))
            .then((v) => ({ default: v.ShareEventDialogBody })),
        );
        function t(v) {
          const { bActive: L, ...k } = v;
          return (0, n.jsx)(a.E, {
            active: L,
            children: (0, n.jsx)(I.Suspense, {
              fallback: null,
              children: (0, n.jsx)(s, { ...k }),
            }),
          });
        }
      },
      73644: (fe, de, r) => {
        "use strict";
        r.d(de, {
          D1: () => te,
          Nk: () => o,
          k6: () => u,
          lS: () => D,
          lz: () => p,
        });
        var n = r(7850),
          I = r(32093),
          a = r(78192),
          s = r(72609),
          t = r(40358),
          v = r(90626),
          L = r(95695),
          k = r.n(L),
          F = r(36118),
          N = r(71421),
          P = r(36707),
          q = r(18210),
          z = r(53113),
          A = r(19890),
          w = r.n(A),
          h = r(4515);
        function D(g) {
          const { appid: E } = g;
          return (0, n.jsx)("div", {
            className: w().AppSocialLinksCtn,
            children: (0, n.jsx)(f, { appid: E }),
          });
        }
        function f(g) {
          const { appid: E } = g,
            { data: Q } = (0, t.bg)({ appid: E });
          return !Q || Q.length == 0
            ? null
            : (0, n.jsx)(S, {
                strTitle: (0, q.we)("#EventDisplay_SocialTitle"),
                id: "" + E,
                rgSocialMedia: Q,
              });
        }
        function o(g) {
          return (0, v.useMemo)(
            () =>
              g
                ? g.map((E) => {
                    const Q = (0, h.v)(E.type);
                    return Q == a.jL.EK || Q == a.jL.Or
                      ? { link_type: Q, text: E.link }
                      : { link_type: Q, url: E.link };
                  })
                : [],
            [g],
          );
        }
        function p(g) {
          const { gidClanEvent: E, rgSocial: Q, bIsCreatorHomeEvent: B } = g,
            b = o(Q);
          if (b.length == 0) return null;
          const T = B
            ? (0, q.we)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, q.we)("#EventDisplay_Sale_SocialTitle");
          return (0, n.jsx)(S, { strTitle: T, id: E, rgSocialMedia: b });
        }
        function S(g) {
          const { strTitle: E, id: Q, rgSocialMedia: B } = g;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: (0, P.A)(
                  k().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: E,
              }),
              (0, n.jsx)(te, { id: Q, rgSocialMedia: B }),
            ],
          });
        }
        const V = [
          a.jL.EK,
          a.jL.$3,
          a.jL.M0,
          a.jL.Ow,
          a.jL.Ib,
          a.jL.qe,
          a.jL.Lk,
        ];
        function te(g) {
          const { id: E, rgSocialMedia: Q, className: B } = g,
            b = s.TS.EREALM === I.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, P.A)(w().AppSocialLinks, B),
            children: Q.filter(
              (T) => !b || V.includes(T.link_type || a.jL.I0),
            ).map((T) =>
              T.url
                ? (0, n.jsx)(
                    se,
                    { social: T },
                    "app_social_link_" + E + "_" + T.link_type,
                  )
                : (0, n.jsx)(
                    C,
                    { social: T },
                    "app_social_text_" + E + "_" + T.link_type + "_" + T.text,
                  ),
            ),
          });
        }
        function se(g) {
          const { social: E } = g;
          return E.url
            ? (0, n.jsx)("a", {
                href: (0, z.NT)(E.url, !0),
                target: s.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(N.he, {
                  toolTipContent: E.url,
                  children: (0, n.jsx)(K, { social: E }),
                }),
              })
            : null;
        }
        function C(g) {
          const { social: E } = g;
          return (0, n.jsxs)("div", {
            className: w().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(N.he, {
                toolTipContent: E.text,
                children: (0, n.jsx)(K, { social: E }),
              }),
              (0, n.jsx)("div", {
                className: w().AppSocialText,
                children: E.text,
              }),
            ],
          });
        }
        function K(g) {
          const { social: E } = g;
          return (0, n.jsx)(u, {
            linkType: E.link_type || a.jL.I0,
            className: w().AppSocialLinkIcon,
          });
        }
        const c = {
          [a.jL.lQ]: F.agV,
          [a.jL.GO]: F.ZnA,
          [a.jL.jG]: F.oy,
          [a.jL.F7]: F.ofN,
          [a.jL.Eb]: F.Bki,
          [a.jL.EK]: F.$vK,
          [a.jL.M0]: F.$vK,
          [a.jL.$3]: F.$vK,
          [a.jL.a$]: F.OSJ,
          [a.jL.Ow]: F.nm_,
          [a.jL.Ib]: F.tIO,
          [a.jL.uw]: F.Vt2,
          [a.jL.sP]: F.Vgk,
          [a.jL.u5]: F.VSd,
          [a.jL.db]: F.ccb,
          [a.jL.Yu]: F.rNt,
          [a.jL.JN]: F.g$j,
          [a.jL.EM]: F.BQz,
          [a.jL.Or]: F.jdP,
          [a.jL.qe]: F.bKN,
          [a.jL.H5]: F.sDU,
          [a.jL.Xm]: F.MbF,
          [a.jL.DB]: F.emH,
          [a.jL.Lk]: F.Yoo,
        };
        function u(g) {
          const { linkType: E, ...Q } = g,
            B = c[E];
          return B ? (0, n.jsx)(B, { ...Q }) : null;
        }
      },
      4515: (fe, de, r) => {
        "use strict";
        r.d(de, { X: () => t, v: () => a });
        var n = r(78192);
        const I = {
          discord_server: n.jL.Eb,
          youtube: n.jL.lQ,
          facebook: n.jL.GO,
          twitter: n.jL.jG,
          twitch: n.jL.F7,
          reddit: n.jL.uw,
          instagram: n.jL.sP,
          tumblr: n.jL.u5,
          qq: n.jL.EK,
          qqlink: n.jL.M0,
          qqchannel: n.jL.$3,
          bilibili: n.jL.Ow,
          weibo: n.jL.Ib,
          wechat: n.jL.Or,
          tieba: n.jL.db,
          tiktok: n.jL.Yu,
          douyin: n.jL.qe,
          bluesky: n.jL.H5,
          mastodon: n.jL.Xm,
          threads: n.jL.DB,
          vk: n.jL.a$,
          telegram: n.jL.JN,
          linkedin: n.jL.EM,
          rednote: n.jL.Lk,
        };
        function a(v) {
          return I[v] ?? n.jL.I0;
        }
        const s = new Map(Object.entries(I).map(([v, L]) => [L, v]));
        function t(v) {
          return s.get(v);
        }
      },
      16936: (fe, de, r) => {
        "use strict";
        r.d(de, {
          t3: () => F,
          EI: () => z,
          Nc: () => q,
          vd: () => P,
          _V: () => N,
          kR: () => A,
        });
        var n = r(72609);
        const I = "meetsteam/availability",
          a = "meetsteam/registrations",
          s = "meetsteam/registrationdetails",
          t = "meetsteam/updateregistration",
          v = "meetsteam/registrantinfo",
          L = "meetsteam/attendance_qrcode";
        async function k(w, h) {
          const D = new URL(n.TS.STORE_BASE_URL + w);
          for (const [o, p] of Object.entries(h)) D.searchParams.set(o, p);
          const f = await fetch(D, { credentials: "include" });
          if (!f.ok) throw new Error(`${D} answered ${f.status}`);
          return await f.json();
        }
        async function F(w) {
          return (await k(I, { gid: w })).availability ?? [];
        }
        async function N(w) {
          return (await k(a, { gid: w })).registrations ?? [];
        }
        async function P(w) {
          return (await k(s, { gid: w })).strJSONData ?? "";
        }
        async function q() {
          return (
            (await k(v, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function z(w, h) {
          return await k(L, { gid: w, accountid: String(h) });
        }
        async function A(w) {
          const h = n.TS.STORE_BASE_URL + t,
            D = new URLSearchParams({
              gid: w.gid,
              group_id: String(w.group_id),
              session_id: String(w.session_id),
              guest_count: String(w.guest_count),
              jsondata: w.jsondata,
              skip_email: w.skip_email ? "1" : "0",
            }),
            f = await fetch(h, {
              method: "POST",
              credentials: "include",
              body: D,
            });
          if (!f.ok) throw new Error(`${h} answered ${f.status}`);
          return (await f.json()).success;
        }
      },
      90711: (fe, de, r) => {
        "use strict";
        r.d(de, {
          DK: () => Yt,
          hW: () => Me,
          Lw: () => Fe,
          ku: () => $e,
          Mn: () => _,
          sW: () => I,
          nn: () => n,
        });
        var n = {};
        r.r(n), r.d(n, { Tq: () => F, TC: () => f, fe: () => w });
        var I = {};
        r.r(I), r.d(I, { rx: () => C, XP: () => K });
        var a = r(80613),
          s = r.n(a),
          t = r(75245),
          v = r(35038);
        const L = 0,
          k = 1,
          F = 0,
          N = 1,
          P = 2,
          q = 3,
          z = 4,
          A = 5,
          w = 6,
          h = 7,
          D = 8,
          f = 9,
          o = 10,
          p = 11,
          S = 12,
          V = 13,
          te = 14,
          se = 15,
          C = 0,
          K = 1,
          c = 2;
        function u(He) {
          return "unknown EBroadcastChatPermission ( " + He + " )";
        }
        function g(He) {
          return "unknown EBroadcastWatchLocation ( " + He + " )";
        }
        function E(He) {
          return "unknown EBroadcastChatBan ( " + He + " )";
        }
        function Q(He) {
          return "unknown EBroadcastRestriction ( " + He + " )";
        }
        class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.permission || t.Sg(B.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    cellid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sysid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(B.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new B();
            return B.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(B.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(B.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class b extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.broadcast_id || t.Sg(b.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(b.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new b();
            return b.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(b.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(b.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class T extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.broadcast_id || t.Sg(T.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(T.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new T();
            return T.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(T.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(T.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new J();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new J();
            return J.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.broadcast_id || t.Sg(Y.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    as_rtmp: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    sysid: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Y();
            return Y.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.upload_token || t.Sg(ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ee();
            return ee.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.broadcast_id || t.Sg(ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ye();
            return ye.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class M extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.steamid || t.Sg(M.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(M.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new M();
            return M.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(M.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(M.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.gameid || t.Sg(ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ge();
            return ge.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.steamid || t.Sg(U.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(U.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new U();
            return U.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(U.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(U.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.thumbnail_url || t.Sg(ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    duration: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ae();
            return ae.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.steamid || t.Sg(ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ve();
            return ve.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.response || t.Sg(Ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    response: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    duration: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ee();
            return Ee.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function Le(He) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            He +
            " )"
          );
        }
        class Re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || t.Sg(Re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Re();
            return Re.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class Ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.steamid || t.Sg(Ne.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ne.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ne();
            return Ne.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ne.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ne.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || t.Sg(Pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Pe();
            return Pe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class we extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.success || t.Sg(we.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(we.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new we();
            return we.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(we.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(we.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.permission || t.Sg(H.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(H.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new H();
            return H.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(H.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(H.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ue();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ue();
            return ue.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.steamid || t.Sg(G.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new G();
            return G.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function me(He) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            He +
            " )"
          );
        }
        class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.broadcast_id || t.Sg(re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new re();
            return re.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.broadcast_id || t.Sg(be.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(be.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new be();
            return be.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.broadcast_id || t.Sg(Se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Se.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Se();
            return Se.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Se.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Se.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.broadcast_id || t.Sg(ne.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ne.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ne();
            return ne.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ne.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ne.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.broadcast_channel_id || t.Sg(oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new oe();
            return oe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.thumbnail_upload_token || t.Sg(xe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new xe();
            return xe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.broadcast_upload_id || t.Sg(je.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(je.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new je();
            return je.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(je.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(je.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.broadcaster_steamid || t.Sg(Te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Te.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Te();
            return Te.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Te.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Te.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class Ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.broadcast_id || t.Sg(Ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ge();
            return Ge.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.steamid || t.Sg(ke.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ke.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ke();
            return ke.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.chat_id || t.Sg(ze.M()),
              a.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ze.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ze();
            return ze.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.chat_id || t.Sg(Fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Fe();
            return Fe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class W extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.persona_name || t.Sg(W.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    in_game: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    result: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(W.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new W();
            return W.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(W.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(W.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.chat_id || t.Sg(_.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(_.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new _();
            return _.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(_.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(_.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.result || t.Sg(he.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(he.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new he();
            return he.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(he.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(he.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.chat_id || t.Sg(Me.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Me();
            return Me.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class Je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Je();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Je();
            return Je.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.chat_id || t.Sg($e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT($e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new $e();
            return $e.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj($e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0($e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new O();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new O();
            return O.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.chat_id || t.Sg($.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT($.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new $();
            return $.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj($.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0($.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.persona_names || t.Sg(pe.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { persona_names: { n: 1, c: Ie, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new pe();
            return pe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class Ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.steam_id || t.Sg(Ie.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ie();
            return Ie.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class De extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.steamid || t.Sg(De.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(De.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new De();
            return De.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(De.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(De.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.broadcast_clip_id || t.Sg(Qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Qe();
            return Qe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class Ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.broadcast_clip_id || t.Sg(Ce.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ce.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ce();
            return Ce.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ce.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ce.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class ut extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ut();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ut();
            return ut.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.broadcast_clip_id || t.Sg(tt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(tt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new tt();
            return tt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(tt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(tt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Mt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Mt();
            return Mt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.broadcast_clip_id || t.Sg(et.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new et();
            return et.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcast_clip_id || t.Sg(lt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(lt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new lt();
            return lt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(lt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(lt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.broadcast_permission || t.Sg(yt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: L,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(yt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new yt();
            return yt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(yt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(yt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class Wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Wt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Wt();
            return Wt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.ip || t.Sg(ht.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ht.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ht();
            return ht.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ht.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ht.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcast_permission || t.Sg(ct.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ct.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ct();
            return ct.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ct.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ct.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.row_limit || t.Sg(qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new qe();
            return qe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.upload_stats || t.Sg(st.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { upload_stats: { n: 1, c: at, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(st.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new st();
            return st.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(st.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(st.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.upload_result || t.Sg(at.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 19, br: t.qM.readBool, bw: t.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(at.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new at();
            return at.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(at.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(at.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.upload_id || t.Sg(dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new dt();
            return dt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.viewer_stats || t.Sg(Et.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    viewer_stats: { n: 1, c: It, r: !0, q: !0 },
                    country_stats: { n: 2, c: bt, r: !0, q: !0 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Et();
            return Et.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.time || t.Sg(It.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(It.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new It();
            return It.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(It.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(It.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.country_code || t.Sg(bt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    country_code: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(bt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new bt();
            return bt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(bt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(bt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class pt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.webrtc_session_id || t.Sg(pt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    started: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    offer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    fps: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new pt();
            return pt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class Rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Rt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Rt();
            return Rt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.webrtc_session_id || t.Sg(Ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ve();
            return Ve.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Gt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Gt();
            return Gt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.broadcaster_steamid || t.Sg(xt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new xt();
            return xt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new kt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new kt();
            return kt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class St extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.sdp_mid || t.Sg(St.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(St.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new St();
            return St.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(St.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(St.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.webrtc_session_id || t.Sg(jt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: St },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(jt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new jt();
            return jt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(jt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(jt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class Nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Nt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Nt();
            return Nt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.broadcaster_steamid || t.Sg(wt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(wt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new wt();
            return wt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(wt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(wt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Z();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Z();
            return Z.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.broadcaster_steamid || t.Sg(X.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(X.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new X();
            return X.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(X.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(X.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.candidate_generation || t.Sg(ie.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: St, r: !0, q: !0 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new ie();
            return ie.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class Oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.broadcast_session_id || t.Sg(Oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Oe();
            return Oe.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.cellid || t.Sg(Ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ae();
            return Ae.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class Ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.turn_server || t.Sg(Ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Ye();
            return Ye.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.broadcast_session_id || t.Sg(_e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(_e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new _e();
            return _e.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(_e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(_e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.broadcast_session_id || t.Sg(nt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(nt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new nt();
            return nt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(nt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(nt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.broadcast_session_id || t.Sg(it.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(it.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new it();
            return it.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(it.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(it.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class Dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.broadcast_session_id || t.Sg(Dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = t.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Dt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              j = new Dt();
            return Dt.deserializeBinaryFromReader(j, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Yt;
        ((He) => {
          function e(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, v.I8)(B, Be, Ue),
              b,
              { ePrivilege: 1 },
            );
          }
          He.BeginBroadcastSession = e;
          function i(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, v.I8)(T, Be, Ue),
              J,
              { ePrivilege: 1 },
            );
          }
          He.EndBroadcastSession = i;
          function j(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, v.I8)(Y, Be, Ue),
              ee,
              { ePrivilege: 1 },
            );
          }
          He.StartBroadcastUpload = j;
          function Xt(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, v.I8)(je, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastUploadStop = Xt;
          function en(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, v.I8)(ve, Be, Ue),
              Ee,
              { ePrivilege: 2 },
            );
          }
          He.WatchBroadcast = en;
          function rn(We, Be) {
            return We.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, v.I8)(Re, Be),
              { ePrivilege: 2 },
            );
          }
          He.HeartbeatBroadcast = rn;
          function un(We, Be) {
            return We.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, v.I8)(Ne, Be),
              { ePrivilege: 2 },
            );
          }
          He.StopWatchingBroadcast = un;
          function cn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, v.I8)(M, Be, Ue),
              ge,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastStatus = cn;
          function dn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, v.I8)(U, Be, Ue),
              ae,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastThumbnail = dn;
          function gn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, v.I8)(Pe, Be, Ue),
              we,
              { ePrivilege: 1 },
            );
          }
          He.InviteToBroadcast = gn;
          function fn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, v.I8)(H, Be, Ue),
              ue,
              { ePrivilege: 1 },
            );
          }
          He.SendBroadcastStateToServer = fn;
          function zn(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, v.I8)(Ge, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyBroadcastSessionHeartbeat = zn;
          function Ct(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, v.I8)(ke, Be, Ue),
              ze,
              { ePrivilege: 2 },
            );
          }
          He.GetBroadcastChatInfo = Ct;
          function yn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, v.I8)(Fe, Be, Ue),
              W,
              { ePrivilege: 3 },
            );
          }
          He.PostChatMessage = yn;
          function vn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, v.I8)(_, Be, Ue),
              he,
              { ePrivilege: 1 },
            );
          }
          He.UpdateChatMessageFlair = vn;
          function Tt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, v.I8)(Me, Be, Ue),
              Je,
              { ePrivilege: 3 },
            );
          }
          He.MuteBroadcastChatUser = Tt;
          function hn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, v.I8)($e, Be, Ue),
              O,
              { ePrivilege: 3 },
            );
          }
          He.RemoveUserChatText = hn;
          function sn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, v.I8)($, Be, Ue),
              pe,
              { ePrivilege: 1 },
            );
          }
          He.GetBroadcastChatUserNames = sn;
          function tn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, v.I8)(De, Be, Ue),
              Qe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.StartBuildClip = tn;
          function an(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, v.I8)(Ce, Be, Ue),
              ut,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBuildClipStatus = an;
          function pn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, v.I8)(tt, Be, Ue),
              Mt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.SetClipDetails = pn;
          function Vt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, v.I8)(et, Be, Ue),
              lt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetClipDetails = Vt;
          function qt(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, v.I8)(yt, Be, Ue),
              Wt,
              { ePrivilege: 1 },
            );
          }
          He.SetRTMPInfo = qt;
          function _t(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, v.I8)(ht, Be, Ue),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          He.GetRTMPInfo = _t;
          function Mn(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, v.I8)(_e, Be),
              { ePrivilege: 1 },
            );
          }
          He.NotifyWebRTCHaveTURNServer = Mn;
          function ln(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, v.I8)(pt, Be, Ue),
              Rt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStartResult = ln;
          function En(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, v.I8)(Ve, Be, Ue),
              Gt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCStopped = En;
          function bn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, v.I8)(xt, Be, Ue),
              kt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCSetAnswer = bn;
          function Sn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, v.I8)(Ae, Be, Ue),
              Ye,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCLookupTURNServer = Sn;
          function wn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, v.I8)(jt, Be, Ue),
              Nt,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddHostCandidate = wn;
          function Dn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, v.I8)(wt, Be, Ue),
              Z,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCAddViewerCandidate = Dn;
          function nn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, v.I8)(X, Be, Ue),
              ie,
              { ePrivilege: 1 },
            );
          }
          He.WebRTCGetHostCandidates = nn;
          function In(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, v.I8)(qe, Be, Ue),
              st,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastUploadStats = In;
          function xn(We, Be, Ue) {
            return We.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, v.I8)(dt, Be, Ue),
              Et,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          He.GetBroadcastViewerStats = xn;
        })(Yt || (Yt = {}));
        var Zt;
        ((He) => {
          (He.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: G,
          }),
            (He.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: re,
            }),
            (He.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: ye,
            }),
            (He.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: be,
            }),
            (He.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: Se,
            }),
            (He.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: Te,
            }),
            (He.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: ne,
            }),
            (He.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: oe,
            }),
            (He.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: xe,
            }),
            (He.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Oe,
            }),
            (He.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: nt,
            }),
            (He.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: it,
            }),
            (He.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: Dt,
            });
        })(Zt || (Zt = {}));
      },
      61639: (fe, de, r) => {
        "use strict";
        r.d(de, { Mc: () => n });
        var n = {};
        r.r(n),
          r.d(n, {
            Ms: () => V,
            n6: () => z,
            U6: () => k,
            kz: () => P,
            ej: () => C,
            R: () => se,
            mZ: () => te,
            Is: () => w,
            B_: () => F,
            bW: () => N,
            iy: () => L,
          });
        var I = r(80613),
          a = r.n(I),
          s = r(75245),
          t = r(35038);
        const v = 0,
          L = 1,
          k = 2,
          F = 3,
          N = 4,
          P = 5,
          q = 6,
          z = 7,
          A = 8,
          w = 9,
          h = 10,
          D = 11,
          f = 12,
          o = 13,
          p = 14,
          S = 15,
          V = 16,
          te = 17,
          se = 18,
          C = 19;
        function K(J) {
          return "unknown EProductPageAction ( " + J + " )";
        }
        function c(J) {
          return "unknown EProductViewAction ( " + J + " )";
        }
        function u(J) {
          return "unknown EProductImpressionFromClientType ( " + J + " )";
        }
        function g(J) {
          return "unknown ETrackedEmailType ( " + J + " )";
        }
        function E(J) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + J + " )"
          );
        }
        function Q(J) {
          return "unknown EUnifedProductInteractionActions ( " + J + " )";
        }
        class B extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(Y = null) {
            super(),
              B.prototype.impressions || s.Sg(B.M()),
              I.Message.initialize(this, Y, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { impressions: { n: 1, c: b, r: !0, q: !0 } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
          }
          toObject(Y = !1) {
            return B.toObject(Y, this);
          }
          static toObject(Y, ee) {
            return s.BT(B.M(), Y, ee);
          }
          static fromObject(Y) {
            return s.Uq(B.M(), Y);
          }
          static deserializeBinary(Y) {
            let ee = new (a().BinaryReader)(Y),
              ye = new B();
            return B.deserializeBinaryFromReader(ye, ee);
          }
          static deserializeBinaryFromReader(Y, ee) {
            return s.zj(B.MBF(), Y, ee);
          }
          serializeBinary() {
            var Y = new (a().BinaryWriter)();
            return B.serializeBinaryToWriter(this, Y), Y.getResultBuffer();
          }
          static serializeBinaryToWriter(Y, ee) {
            s.i0(B.M(), Y, ee);
          }
          serializeBase64String() {
            var Y = new (a().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, Y), Y.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class b extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(Y = null) {
            super(),
              b.prototype.type || s.Sg(b.M()),
              I.Message.initialize(this, Y, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    type: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
          }
          toObject(Y = !1) {
            return b.toObject(Y, this);
          }
          static toObject(Y, ee) {
            return s.BT(b.M(), Y, ee);
          }
          static fromObject(Y) {
            return s.Uq(b.M(), Y);
          }
          static deserializeBinary(Y) {
            let ee = new (a().BinaryReader)(Y),
              ye = new b();
            return b.deserializeBinaryFromReader(ye, ee);
          }
          static deserializeBinaryFromReader(Y, ee) {
            return s.zj(b.MBF(), Y, ee);
          }
          serializeBinary() {
            var Y = new (a().BinaryWriter)();
            return b.serializeBinaryToWriter(this, Y), Y.getResultBuffer();
          }
          static serializeBinaryToWriter(Y, ee) {
            s.i0(b.M(), Y, ee);
          }
          serializeBase64String() {
            var Y = new (a().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, Y), Y.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var T;
        ((J) => {
          function Y(ee, ye) {
            return ee.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(B, ye),
              { ePrivilege: 1 },
            );
          }
          J.ReportProductImpressionsFromClient = Y;
        })(T || (T = {}));
      },
      36631: (fe, de, r) => {
        "use strict";
        r.d(de, {
          Ay: () => L,
          Cs: () => N,
          HN: () => A,
          HY: () => t,
          LD: () => F,
          MU: () => z,
          W3: () => v,
          bs: () => a,
          uF: () => s,
          yD: () => P,
        });
        var n = r(7850),
          I = r(90626);
        const a = 0,
          s = 1,
          t = 2,
          v = 3,
          L = 4,
          k = { eLocation: a },
          F = I.createContext(k);
        function N(w) {
          const { children: h, location: D } = w;
          return (0, n.jsx)(F.Provider, {
            value: { ...k, eLocation: D ?? a },
            children: h,
          });
        }
        function P() {
          return I.useContext(F);
        }
        function q() {
          return P().eLocation == s;
        }
        function z() {
          return P().eLocation == t;
        }
        function A() {
          const w = P();
          return w.eLocation == t || w.eLocation == s;
        }
      },
      92799: (fe, de, r) => {
        "use strict";
        r.d(de, { m: () => o });
        var n = r(7850),
          I = r(23386),
          a = r(24660),
          s = r(64868),
          t = r(72609),
          v = r(90626),
          L = r(16412),
          k = r(73191),
          F = r(69168),
          N = r(36118),
          P = r(85599),
          q = r(36707),
          z = r(18210),
          A = r(6881),
          w = r(4105),
          h = r(94253),
          D = r(74187),
          f = r.n(D);
        function o(se) {
          const C = (0, h.Oz)(),
            { bLoading: K } = C,
            { className: c, bPreviewMode: u, rewardType: g } = se,
            [E, Q, B] = (0, s.uD)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(L.$n, {
                className: (0, q.A)("CSSClaimItemButton", c),
                onClick: () => {
                  C.bCanClaimNewItem
                    ? Q()
                    : u &&
                      (Q(),
                      console.log(
                        "Show dialog for debugging, since already claimed: ",
                        C,
                      ));
                },
                disabled: K,
                children: K
                  ? (0, n.jsx)(P.t, {
                      string: (0, z.we)("#Loading"),
                      size: "small",
                    })
                  : (0, n.jsx)(p, { claimState: C }),
              }),
              (0, n.jsx)(F.E, {
                active: E,
                children: (0, n.jsx)(S, { rewardType: g, closeModal: B }),
              }),
            ],
          });
        }
        function p(se) {
          const { claimState: C, strButtonOverride: K, rewardType: c } = se;
          if (C.bAlreadyClaimedCurrentItem)
            return (0, n.jsxs)("div", {
              className: (0, q.A)(D.CheckMark, "CSSClaimedState"),
              children: [
                (0, n.jsx)(N.Jlk, {}),
                (0, n.jsxs)("span", {
                  children: [
                    " ",
                    K || (0, z.we)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let u = (0, z.we)("#Sale_ClaimableReward_generic");
          switch (C?.community_item_class || c) {
            case I.Ed:
              u = (0, z.we)("#Sale_ClaimableReward_sticker");
              break;
            case I.jE:
              u = (0, z.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case I.xw:
              u = (0, z.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)("span", {
            className: "CSSUnclaimedState",
            children: u,
          });
        }
        function S(se) {
          const { closeModal: C, rewardType: K } = se,
            { fnClaimItem: c } = (0, h.CC)(),
            u = (0, k.vs)(),
            [g, E] = v.useState(null);
          v.useEffect(() => {
            u.bLoading ||
              (u.fnSetLoading(!0),
              c()
                .then((b) => {
                  if ((E(b), b.appid)) {
                    let T = (0, z.we)(
                      "#Sale_ClaimableReward_completed_generic",
                    );
                    const J = g?.community_item_class || K;
                    switch (J) {
                      case I.Ed:
                        T = (0, z.we)(
                          "#Sale_ClaimableReward_completed_sticker",
                        );
                        break;
                      case I.jE:
                        T = (0, z.we)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case I.xw:
                        T = (0, z.we)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    u.fnSetStrSuccess("   "),
                      u.fnSetElSuccess(
                        (0, n.jsxs)("div", {
                          className: D.DialogCtn,
                          children: [
                            (0, n.jsx)("span", { children: T }),
                            (0, n.jsx)(V, {
                              appid: b.appid,
                              community_item_type: b.community_item_type,
                              rewardType: J,
                            }),
                          ],
                        }),
                      );
                  } else
                    u.fnSetStrError((0, z.we)("#Sale_ClaimableReward_Busy"));
                })
                .catch(() =>
                  u.fnSetStrError((0, z.we)("#Sale_ClaimableReward_Busy")),
                ));
          }, [g?.community_item_class, u, c, K]);
          let Q = (0, z.we)("#Sale_ClaimableReward_generic");
          switch (g?.community_item_class || K) {
            case I.Ed:
              Q = (0, z.we)("#Sale_ClaimableReward_sticker");
              break;
            case I.jE:
              Q = (0, z.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case I.xw:
              Q = (0, z.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)(k.Hh, {
            state: u,
            strDialogTitle: Q,
            closeModal: C,
          });
        }
        function V(se) {
          const { appid: C, community_item_type: K, rewardType: c } = se;
          return !C || !K
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(w.f8, { appid: C, community_item_type: K }),
                  c == I.jE &&
                    (0, n.jsx)(te, { appid: C, community_item_type: K }),
                ],
              });
        }
        function te(se) {
          const { appid: C, community_item_type: K } = se,
            c = (0, A.fw)(C),
            { mutate: u, isSuccess: g } = (0, h.t5)();
          if (!c) return null;
          const E = c.find((Q) => Q.item_type == K);
          return E
            ? (0, n.jsxs)("div", {
                className: D.EquipCtn,
                children: [
                  g
                    ? (0, n.jsx)("div", {
                        children: (0, z.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, n.jsx)(L.$n, {
                        onClick: () => u(E),
                        children: (0, z.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, z.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/edit/goldenprofile`,
                    children: (0, z.we)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, z.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
        }
      },
      11587: (fe, de, r) => {
        "use strict";
        r.d(de, { Qg: () => h, h3: () => w });
        var n = r(72609),
          I = r(80902),
          a = r(75233),
          s = r(51614),
          t = r(90626),
          v = r(72604);
        const L = "saleaction/giveawayregistration",
          k = "saleaction/creategiveawayregistration";
        async function F(D) {
          const f = n.TS.STORE_BASE_URL + L + "?name=" + encodeURIComponent(D),
            o = await fetch(f, { credentials: "include" });
          return await P("GetUserGiveawayRegistration", D, f, o);
        }
        async function N(D) {
          const f = n.TS.STORE_BASE_URL + k,
            o = await fetch(f, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: D }),
            });
          return await P("UpdateUserGiveawayRegistration", D, f, o);
        }
        async function P(D, f, o, p) {
          if (!p.ok) throw new Error(o + " answered " + p.status);
          const S = await p.json();
          if (S?.success == v.R && S.registration) return S.registration;
          throw new Error(D + " on " + f + " answered " + S?.success);
        }
        const q = { registered: !1 };
        function z(D, f) {
          return ["sale", "giveawayregistration", D, f];
        }
        function A(D, f) {
          return {
            queryKey: z(D, f),
            queryFn: () => F(D),
            enabled: !!D,
            retry: !1,
          };
        }
        function w(D) {
          const { data: f, isError: o } = (0, I.I)(A(D, n.iA.accountid));
          return o ? q : f;
        }
        function h() {
          const D = (0, a.jE)(),
            { mutateAsync: f } = (0, s.n)({
              mutationFn: N,
              onSuccess: (p, S) => D.setQueryData(z(S, n.iA.accountid), p),
            });
          return {
            fnCreateRegistration: (0, t.useCallback)(
              async (p) => {
                try {
                  return await f(p);
                } catch (S) {
                  return (
                    console.error(
                      "Registering for giveaway " + p + " failed",
                      S,
                    ),
                    q
                  );
                }
              },
              [f],
            ),
          };
        }
      },
      31774: (fe, de, r) => {
        "use strict";
        r.d(de, { $O: () => D, wk: () => h });
        var n = r(80902),
          I = r(75233),
          a = r(90626),
          s = r(72609),
          t = r(48491),
          v = r(49288);
        async function L(f, o) {
          const { rgDefIDs: p, strCategory: S, itemClass: V } = o,
            te = await v.a9.QueryRewardItems(f, {
              definitionids: p,
              community_item_classes: V ? [V] : void 0,
              filter_match_any_category_tags: S ? [S] : void 0,
            });
          if (!te.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + te.GetEResult(),
            );
          return te.Body().toObject().definitions ?? [];
        }
        let k;
        function F() {
          return (
            k || (k = new t.D(s.TS.WEBAPI_BASE_URL)), k.GetServiceTransport()
          );
        }
        async function N(f) {
          return L(F(), f);
        }
        const P = 3600 * 1e3;
        function q(f) {
          return ["LoyaltyRewardDef", f];
        }
        function z(f, o) {
          return ["LoyaltyRewardDefsByCategoryAndClass", f, o];
        }
        function A(f) {
          return {
            queryKey: q(f),
            queryFn: async () => {
              const o = await N({ rgDefIDs: [f] }),
                p = o.length == 1 ? o[0] : void 0;
              if (!p)
                throw new Error(
                  `Asked for point shop item ${f} and got ${o.length} items back, wanted exactly one.`,
                );
              return p;
            },
            enabled: f > 0,
            staleTime: P,
            retry: !1,
          };
        }
        function w(f, o) {
          return {
            queryKey: z(f, o),
            queryFn: () => N({ strCategory: f, itemClass: o }),
            enabled: !!(f && o),
            staleTime: P,
            retry: !1,
          };
        }
        function h(f) {
          const { data: o } = (0, n.I)(A(f));
          return o;
        }
        function D(f, o) {
          const p = (0, I.jE)(),
            { data: S } = (0, n.I)(w(f, o));
          return (
            (0, a.useEffect)(() => {
              S?.forEach((V) => {
                V.defid !== void 0 && p.setQueryData(q(V.defid), V);
              });
            }, [S, p]),
            S
          );
        }
      },
      6881: (fe, de, r) => {
        "use strict";
        r.d(de, { _u: () => u, fw: () => p, p1: () => S, Km: () => V });
        var n = r(80902),
          I = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(72609),
          v = r(33828),
          L = r(48491),
          k = r(67705),
          F = r(72604),
          N = r(31224);
        async function P(g, E) {
          const Q = await N.uy.GetCommunityInventory(g, { filter_appids: [E] });
          if (Q.GetEResult() != F.R)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                E +
                " answered " +
                Q.GetEResult(),
            );
          return Q.Body().toObject().items ?? [];
        }
        let q;
        function z() {
          if (!q) {
            const g = (0, k.Fd)("read_inventory_token", "application_config");
            q = g ? new L.D(t.TS.WEBAPI_BASE_URL, g) : (0, v.P)();
          }
          return q.GetServiceTransport();
        }
        async function A(g) {
          return P(z(), g);
        }
        const w = 3 * 1e3,
          h = 5 * 1e3,
          D = 15 * 1e3;
        function f(g) {
          return ["QuestCommunityInventory", g];
        }
        function o(g) {
          return {
            queryKey: f(g),
            queryFn: () => A(g),
            enabled: !!g,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function p(g) {
          const { data: E } = (0, n.I)(o(g));
          return E;
        }
        function S(g, E) {
          const Q = p(g);
          return {
            communityItem: (0, s.useMemo)(
              () => Q?.find((b) => b.appid == g && b.item_type == E),
              [Q, g, E],
            ),
            bLoaded: Q != null,
          };
        }
        function V() {
          const g = (0, I.jE)();
          return (0, a.n)({
            mutationFn: (E) => se(g, E.appid, E.fnBHasExpectedItems),
          });
        }
        const te = new WeakMap();
        function se(g, E, Q) {
          if (!E || Q(g.getQueryData(f(E)) ?? [])) return Promise.resolve();
          let B = te.get(g);
          B || ((B = new Map()), te.set(g, B));
          let b = B.get(E);
          return (
            b || ((b = C(g, E, Q).finally(() => B?.delete(E))), B.set(E, b)), b
          );
        }
        async function C(g, E, Q) {
          const B = [0, w, K()];
          for (const b of B) {
            b > 0 && (await c(b));
            let T;
            try {
              (T = await A(E)), g.setQueryData(f(E), T);
            } catch (J) {
              console.error(
                "Re-reading the community inventory for app " + E + " failed",
                J,
              );
            }
            if (Q(T ?? [])) return;
          }
        }
        function K() {
          return h + Math.floor(Math.random() * (D - h));
        }
        function c(g) {
          return new Promise((E) => setTimeout(E, g));
        }
        function u(g, E, Q) {
          g.setQueryData(f(E), Q);
        }
      },
      4105: (fe, de, r) => {
        "use strict";
        r.d(de, { Zx: () => V, f8: () => S });
        var n = r(7850),
          I = r(65946),
          a = r(23386),
          s = r(85599),
          t = r(18210),
          v = r(72609),
          L = r(56330),
          k = r(80902),
          F = r(90626),
          N = r(72604);
        const P = "minigamev2/itemdefs",
          q = "appid",
          z = "editor";
        function A() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            v.TS.STORE_BASE_URL
            ? v.TS.STORE_BASE_URL
            : v.TS.COMMUNITY_BASE_URL;
        }
        async function w(te, se) {
          if (!te) return [];
          const C = new URLSearchParams({ [q]: String(te), l: v.TS.LANGUAGE });
          se && C.set(z, "1");
          const K = `${A()}${P}?${C}`,
            c = await fetch(K, { credentials: se ? "include" : "same-origin" });
          if (!c.ok) throw new Error(`${K} answered ${c.status}`);
          const u = await c.json();
          if (u?.success == N.R && u.item_definitions)
            return u.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              te +
              " answered " +
              u?.success,
          );
        }
        function h(te, se) {
          return ["MinigameCommunityItemDefs", te, !!se];
        }
        function D(te, se) {
          return {
            queryKey: h(te, se),
            queryFn: () => w(te, se),
            enabled: !!te,
            retry: !1,
          };
        }
        function f(te, se) {
          const { data: C } = (0, k.I)(D(te, se));
          return C;
        }
        function o(te, se, C) {
          const K = f(te, C);
          return (0, F.useMemo)(
            () =>
              K?.find(
                (c) => (C || c.active) && c.appid == te && c.item_type == se,
              ),
            [K, te, se, C],
          );
        }
        function p(te) {
          const {
            appid: se,
            item_image_small: C,
            item_image_large: K,
            item_movie_mp4: c,
            item_movie_webm: u,
            item_title: g,
          } = te;
          if (c && u) {
            const E = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${C}`,
              Q = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${u}`,
              B = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${c}`;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: E,
                playsInline: !0,
                className: te.videoClassName,
                children: [
                  (0, n.jsx)("source", { src: Q, type: "video/webm" }),
                  !v.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: B, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const E = `${v.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${se}/${C || K}`;
            return (0, n.jsx)("img", {
              className: te.className,
              src: E,
              alt: g,
            });
          }
        }
        function S(te) {
          const { appid: se, community_item_type: C, bForEdit: K } = te,
            c = o(se, C, K),
            u =
              c && !c.active
                ? (0, n.jsx)("div", {
                    className: L.WarningStylesBackground,
                    children: (0, t.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return c
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(p, { ...c }), u],
              })
            : (0, n.jsx)(s.t, { size: "small", string: (0, t.we)("#Loading") });
        }
        function V(te) {
          const { section: se, rewardDef: C, language: K } = te,
            c = o(C.appid ?? 0, C.community_item_type ?? 0),
            [u] = (0, I.q3)(() => [!!se.rewards?.show_reward_item_name]);
          let g;
          switch (C.community_class) {
            case a.xi:
            case a.xw:
              g = `${v.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              g = `${v.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              g = `${v.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              g = `${v.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              g = `${v.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, n.jsxs)("a", {
            href: g,
            children: [
              (0, n.jsx)(S, {
                appid: C.appid ?? 0,
                community_item_type: C.community_item_type ?? 0,
              }),
              !!u && (0, n.jsx)("span", { children: c?.item_name }),
            ],
          });
        }
      },
      94253: (fe, de, r) => {
        "use strict";
        r.d(de, {
          t5: () => b,
          os: () => ge,
          Qt: () => ee,
          CC: () => B,
          Oz: () => Q,
          lu: () => T,
        });
        var n = r(23386),
          I = r(72609),
          a = r(68312),
          s = r(75233),
          t = r(80902),
          v = r(51614),
          L = r(90626),
          k = r(33828),
          F = r(48491),
          N = r(67705),
          P = r(72604),
          q = r(31224),
          z = r(7112);
        const A = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function w(U, ae) {
          const ve = await z.Qm.CanClaimItem(U, { language: ae });
          if (ve.GetEResult() != P.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + ve.GetEResult(),
            );
          const Ee = ve.Body().toObject(),
            Le = Ee.reward_item?.defid ? Ee.reward_item : void 0;
          return {
            bCanClaimNewItem: !!Ee.can_claim,
            bAlreadyClaimedCurrentItem: !!Le,
            appid: Le?.appid,
            community_item_type: Le?.community_item_type,
            community_item_class: Le?.community_item_class,
            rtNextClaimTime:
              (Ee.next_claim_time ?? 0) > 0 ? Ee.next_claim_time : void 0,
          };
        }
        async function h(U, ae) {
          const ve = await z.Qm.ClaimItem(U, { language: ae });
          if (ve.GetEResult() == P.Ze) return w(U, ae);
          if (ve.GetEResult() != P.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + ve.GetEResult(),
            );
          const Ee = ve.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: Ee?.appid,
            community_item_type: Ee?.community_item_type,
            community_item_class: Ee?.community_item_class,
            rtNextClaimTime:
              (ve.Body().next_claim_time() ?? 0) > 0
                ? ve.Body().next_claim_time()
                : void 0,
          };
        }
        async function D(U, ae) {
          const ve = await q.uy.ActivateProfileModifierItem(U, {
            communityitemid: ae.communityitemid,
            appid: ae.appid,
            activate: !0,
          });
          if (ve.GetEResult() != P.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + ve.GetEResult(),
            );
          return ve.GetEResult();
        }
        async function f(U, ae, ve, Ee) {
          return (
            await z.Qm.GetCurrentDefinition(U, {
              sale_def_type: ae,
              language: ve,
              include_community_item_def: Ee,
            })
          )
            .Body()
            .toObject();
        }
        async function o(U, ae, ve, Ee) {
          return (
            await z.Qm.GetClaimedSaleRewards(U, {
              sale_def_type: ae,
              language: ve,
              include_community_item_def: Ee,
            })
          )
            .Body()
            .toObject();
        }
        let p;
        function S() {
          if (!p) {
            const U = (0, N.Fd)("loyalty_webapi_token", "application_config");
            p = U ? new F.D(I.TS.WEBAPI_BASE_URL, U) : (0, k.P)();
          }
          return p.GetServiceTransport();
        }
        async function V(U) {
          return w(S(), U);
        }
        async function te(U) {
          return h(S(), U);
        }
        async function se(U) {
          return D(S(), U);
        }
        const C = 300 * 1e3;
        let K = !1,
          c = null;
        const u = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: n.Ed,
        };
        function g(U) {
          return ["SaleItemCanClaim", U];
        }
        function E(U) {
          return {
            queryKey: g(U),
            queryFn: () => V(U),
            enabled: !K,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function Q() {
          const U = I.TS.LANGUAGE,
            ae = (0, s.jE)(),
            { data: ve, isLoading: Ee } = (0, t.I)(E(U)),
            Le = ve?.rtNextClaimTime;
          return (
            (0, L.useEffect)(() => {
              let Re = 0;
              if (Le) {
                const Ne = () => {
                  const Pe = Le * 1e3 - Date.now();
                  if (Pe <= 0) {
                    ae.invalidateQueries({ queryKey: g(U) });
                    return;
                  }
                  Re = window.setTimeout(Ne, Pe > C ? Pe / 2 : Pe);
                };
                Ne();
              }
              return () => window.clearTimeout(Re);
            }, [Le, U, ae]),
            { ...(ve ?? A), bLoading: Ee }
          );
        }
        function B() {
          const U = (0, s.jE)(),
            { mutateAsync: ae } = (0, v.n)({
              mutationFn: () => {
                if (c) {
                  const Ee = c;
                  return (c = null), Promise.resolve(Ee);
                }
                return K
                  ? Promise.resolve(U.getQueryData(g(I.TS.LANGUAGE)) ?? A)
                  : te(I.TS.LANGUAGE);
              },
              onSuccess: (Ee) => U.setQueryData(g(I.TS.LANGUAGE), Ee),
            });
          return { fnClaimItem: (0, L.useCallback)(() => ae(), [ae]) };
        }
        function b() {
          return (0, v.n)({ mutationFn: (U) => se(U) });
        }
        function T() {
          const U = (0, s.jE)();
          return {
            fnSetClaimState: (0, L.useCallback)(
              (ve) => {
                (K = !0),
                  (c = ve.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...u,
                      }
                    : null),
                  U.setQueryData(g(I.TS.LANGUAGE), ve);
              },
              [U],
            ),
          };
        }
        function J(U, ae, ve) {
          return ["SaleRewardsGetDefinition", U, ae, ve];
        }
        function Y(U, ae, ve, Ee) {
          return {
            queryKey: J(ae, ve, Ee),
            queryFn: () => f(U, ae, ve, Ee),
            staleTime: 1 / 0,
          };
        }
        function ee(U, ae, ve) {
          const Ee = (0, a.KV)();
          return (0, t.I)(Y(Ee, U, ae, ve));
        }
        function ye(U, ae, ve, Ee) {
          return ["GetClaimedSaleRewards", U, ae, !!ve, Ee];
        }
        function M(U, ae, ve, Ee, Le) {
          return {
            queryKey: ye(ae, ve, Ee, Le),
            queryFn: () => o(U, ae, ve, Ee),
            staleTime: 1 / 0,
          };
        }
        function ge(U, ae, ve, Ee) {
          const Le = (0, a.KV)();
          return (0, t.I)(M(Le, U, ae, ve, Ee));
        }
      },
      86959: (fe, de, r) => {
        "use strict";
        r.d(de, { Fk: () => a, rz: () => k });
        var n = r(53113),
          I = r(72609);
        function a(f, o) {
          return !o || o.startsWith("https://") || o.startsWith("http://")
            ? o
            : `${I.TS.CLAN_CDN_ASSET_URL}images/clan/${f}/${o}`;
        }
        function s(f, o, p) {
          return !o || IsHttpOrHttps(o) ? o : `${p}images/clan/${f}/${o}`;
        }
        const t = "poster",
          v = `${t}.avif`,
          L = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
        function k(f) {
          const o = f.video_webm_src || f.video_mp4_src;
          if (!o || f.image?.includes(`.${t}.`)) return f.image;
          const p = L.exec(o);
          return p ? `${p[1]}.${v}` : f.image;
        }
        const F = 0.01,
          N = 100,
          P = 4,
          q = null,
          z = 0.005;
        function A(f, o) {
          if (!(!f || !o || f <= 0 || o <= 0)) return w(f / o);
        }
        function w(f) {
          if (!f || !Number.isFinite(f) || f < F || f > N) return;
          const o = Math.pow(10, P);
          return Math.round(f * o) / o;
        }
        function h(f) {
          const o = f.trim();
          if (!o) return;
          const p = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(o);
          if (p) return A(parseFloat(p[1]), parseFloat(p[2]));
          if (/^\d+(?:\.\d+)?$/.test(o)) return w(parseFloat(o));
        }
        function D(f) {
          const o = q.find(([p, S]) => Math.abs(f - p / S) < z);
          return o ? `${o[0]}:${o[1]}` : String(f);
        }
      },
      47797: (fe, de, r) => {
        "use strict";
        r.d(de, { Ns: () => a });
        var n = r(99412);
        const I = 1778623200;
        function a(v, L) {
          let k = !1;
          return (
            v && v.GetEventType() == n.ajI
              ? (k = !0)
              : v && L && L.is_creator_home && (k = s(v, L)),
            k
          );
        }
        function s(v, L) {
          return !!L && !!L.is_creator_home && (v.createTime ?? 0) > I;
        }
        function t(v) {
          const L = useClanInfoByAccountID(v.clanSteamID.GetAccountID());
          return a(v, L.data);
        }
      },
      64457: (fe, de, r) => {
        "use strict";
        r.d(de, { PE: () => te, Yg: () => p, _t: () => S, gO: () => se });
        var n = r(7850),
          I = r(21721),
          a = r(25046),
          s = r(40358),
          t = r(68094),
          v = r(41032),
          L = r(90626),
          k = r(62571),
          F = r(40426),
          N = r(36118),
          P = r(36707),
          q = r(18210),
          z = r(72609),
          A = r(96538),
          w = r(85599),
          h = r(64271),
          D = r(48963),
          f = r.n(D),
          o = r(50573);
        function p(K) {
          const { id: c, bPopOutTrailerPlayback: u } = K,
            { data: g } = (0, s.Yo)(c),
            { data: E } = (0, s.j4)(c),
            { data: Q } = (0, s.J$)(c),
            [B, b] = (0, L.useState)(!1),
            [T, J] = (0, L.useState)(!1),
            Y = (0, v.dy)(),
            ee = g?.highlights?.filter((U) => !Y || U.all_ages),
            ye = ee && ee?.length > 0 ? ee[0] : void 0,
            M = L.useCallback(() => {
              ye && (u ? J(!0) : b((U) => !U));
            }, [ye, u]);
          if (!Q)
            return (0, n.jsx)("div", {
              className: (0, P.A)(f().HilightGrid, f().MediaContainer),
              children: (0, n.jsx)(w.t, { size: "medium" }),
            });
          const ge = ye
            ? (0, n.jsx)(C, {
                trailer: ye,
                bPlayVideo: B,
                fnTogglePlayTrailer: M,
              })
            : null;
          return !ye &&
            !(E && E.all_ages_screenshots && E.all_ages_screenshots.length > 0)
            ? null
            : (0, n.jsxs)("div", {
                className: (0, P.A)(f().HilightGrid, f().MediaContainer),
                children: [
                  (0, n.jsx)(S, {
                    elFeaturedInCenter: ge,
                    storeItemScreenshots: E,
                    trailer: ye,
                    id: c,
                    name: Q.name || "",
                  }),
                  u
                    ? (0, n.jsx)(te, {
                        id: c,
                        bShowModal: T,
                        hideModal: () => J(!1),
                      })
                    : (0, n.jsx)(V, {
                        name: Q.name || "",
                        trailer: ye,
                        bPlayVideo: B,
                        fnTogglePlayTrailer: M,
                        bControls: !0,
                      }),
                ],
              });
        }
        function S(K) {
          const {
              elFeaturedInCenter: c,
              id: u,
              name: g,
              trailer: E,
              storeItemScreenshots: Q,
              featureElementclassName: B,
              bUseTrailerAsFirstThumb: b,
              bNoScreenShotModals: T,
            } = K,
            [J, Y] = L.useState(void 0),
            [ee, ye] = (0, F.XC)(),
            M = (0, v.dy)(),
            ge = (0, L.useRef)(null),
            [U, ae] = (0, L.useState)(0);
          if (!u) return null;
          const ve = c || (J !== void 0 && J !== -1) ? J : 0,
            Ee = new Array(),
            Le = new Array();
          b &&
            E &&
            (Ee.push(
              (0, n.jsx)(
                C,
                {
                  trailer: E,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => Y(0),
                  onMouseLeave: () => {
                    const we = ge.current;
                    we && ae(we.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Le.push(
              (0, n.jsx)(
                V,
                {
                  ref: ge,
                  name: g,
                  trailer: E,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: U,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const Re = (
            M ? Q?.all_ages_screenshots : Q?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (Re?.forEach((we, H) => {
              if ((c || H > 0) && Ee.length < 3) {
                const ue = (0, I.bu)(we, "thumb"),
                  G = (0, I.bu)(we, "600x338"),
                  me = Ee.length;
                Ee.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: (0, P.A)({
                        [f().ThumbnailCtn]: !0,
                        [f().ThumbnialClickable]: !T,
                      }),
                      onMouseEnter: () => Y(me),
                      children: T
                        ? (0, n.jsx)("img", { src: ue, alt: g })
                        : (0, n.jsx)("button", {
                            type: "button",
                            className: f().ThumbnailButton,
                            onClick: () => {
                              const re = [...(Re || [])];
                              if (re.length > 0) {
                                for (let be = 0; be < H; ++be) {
                                  const Se = re.shift();
                                  Se && re.push(Se);
                                }
                                ee(re.map((be) => (0, I.bu)(be, "full")));
                              }
                            },
                            children: (0, n.jsx)("img", { src: ue, alt: g }),
                          }),
                    },
                    H + "_small_" + ue,
                  ),
                ),
                  Le.push(
                    (0, n.jsx)(
                      "div",
                      {
                        className: f().ScreenshotDisplayCtn,
                        children: (0, n.jsx)("img", { src: G, alt: g }),
                      },
                      H + "_big_" + ue,
                    ),
                  );
              }
            }),
            !c && (!Le || Le.length == 0))
          )
            return null;
          const Ne = Ee.slice(0, 3),
            Pe = Array.from({ length: Math.max(0, 3 - Ne.length) });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              ye,
              (0, n.jsx)("div", {
                className: B || f().MainMediaCtn,
                children:
                  c && (ve === -1 || ve === void 0)
                    ? (0, n.jsx)(n.Fragment, { children: c })
                    : (0, n.jsx)(n.Fragment, {
                        children: ve !== void 0 && Le[ve],
                      }),
              }),
              Ne.length > 0 &&
                (0, n.jsxs)("div", {
                  className: f().ScreenshotThumbnailRow,
                  onMouseLeave: () => Y(-1),
                  children: [
                    Ne,
                    Pe.map((we, H) =>
                      (0, n.jsx)(
                        "div",
                        { className: f().ThumbnailCtn },
                        `app_${(0, t.ER)(u)}_${H}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function V(K) {
          const {
            ref: c,
            name: u,
            trailer: g,
            bControls: E,
            bPlayVideo: Q,
            fnTogglePlayTrailer: B,
            startTime: b,
          } = K;
          if (
            ((0, L.useEffect)(() => {
              const J = c?.current;
              if (b != null && b > 0 && J) {
                const Y = () => {
                  J.currentTime = b || 0;
                };
                return (
                  J.addEventListener("loadedmetadata", Y),
                  () => {
                    J.removeEventListener("loadedmetadata", Y);
                  }
                );
              }
            }, [c, b]),
            !g)
          )
            return null;
          let T = (0, P.A)(f().VideoLargeContainer, Q && f().videoPlaying);
          return (0, n.jsxs)("div", {
            className: T,
            onClick: B,
            role: "presentation",
            children: [
              (0, n.jsx)(o.hj, {
                name: u,
                trailerCategory: g.trailer_category,
                trailerDisplay: o.g,
                mouseOver: !1,
              }),
              !!(Q && g.microtrailer) &&
                (0, n.jsx)("video", {
                  className: f().VideoLarge,
                  ref: c,
                  controls: E,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: b != null && b > 0 ? void 0 : g.screenshot_full,
                  children: g.microtrailer?.map((J) =>
                    z.TS.IN_CLIENT && J.type == "video/mp4"
                      ? null
                      : (0, n.jsx)(
                          "source",
                          { src: (0, a.M4)(g, J.filename || ""), type: J.type },
                          J.filename,
                        ),
                  ),
                }),
              E &&
                (0, n.jsx)("button", {
                  type: "button",
                  className: f().CloseButton,
                  "aria-label": (0, q.we)("#Button_Close"),
                  children: (0, n.jsx)(N.sED, {}),
                }),
            ],
          });
        }
        function te(K) {
          const { id: c, bShowModal: u, trailerBaseID: g, hideModal: E } = K,
            { data: Q } = (0, s.J$)(c),
            B = (0, a.kB)(c),
            b = (0, L.useMemo)(() => {
              if (!(!B || B.length == 0)) {
                if (g) {
                  const ge = B.find((U) => U.trailer_base_id == g);
                  if (ge) return ge;
                }
                return B[0];
              }
            }, [B, g]),
            T = L.useId(),
            J = L.useId(),
            {
              rgDashTrailers: Y,
              rgHlsTrailers: ee,
              strCaptionManufest: ye,
              strScreenshot: M,
            } = (0, L.useMemo)(() => {
              if (!b)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: ge, rgHlsTrailers: U } = (0, a.hg)(b);
              return {
                rgDashTrailers: ge,
                rgHlsTrailers: U,
                strCaptionManufest: (0, a.Wv)(b),
                strScreenshot: (0, a.hl)(b),
              };
            }, [b]);
          return !b || !b.adaptive_trailers || Y.length == 0
            ? null
            : (0, n.jsx)(A.EN, {
                active: u,
                children: (0, n.jsxs)(A.eV, {
                  "aria-labelledby": (0, k.q)(T, J),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: E,
                  children: [
                    (0, n.jsx)("div", {
                      className: f().VideoPopupContainers,
                      children: (0, n.jsx)(h.P, {
                        dashManifests: Y,
                        hlsManifest: ee[0] || "",
                        screenshot: M,
                        altText: b.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: ye,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      id: T,
                      style: { display: "none" },
                      children: Q?.name || "",
                    }),
                    (0, n.jsx)("div", {
                      id: J,
                      style: { display: "none" },
                      children: b.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function se(K) {
          const { appid: c, trailerBaseID: u, bShowModal: g, hideModal: E } = K,
            Q = (0, L.useMemo)(() => ({ appid: c }), [c]);
          return (0, n.jsx)(te, {
            id: Q,
            trailerBaseID: u,
            bShowModal: g,
            hideModal: E,
          });
        }
        function C(K) {
          const {
            trailer: c,
            fnTogglePlayTrailer: u,
            bPlayVideo: g,
            onMouseEnter: E,
            onMouseLeave: Q,
          } = K;
          return (0, n.jsxs)("div", {
            className: (0, P.A)({
              [f().VideoThumbnail]: !g,
              [f().videoPlaying]: g,
              [f().ThumbnailCtn]: !0,
            }),
            onClick: u,
            onMouseEnter: E,
            onMouseLeave: Q,
            role: "presentation",
            children: [
              (0, n.jsx)("img", { src: (0, a.hl)(c), alt: c.trailer_name }),
              (0, n.jsx)("button", {
                type: "button",
                className: f().VideoPlayButton,
                "aria-label": (0, q.we)("#Playback_Play_Tooltip"),
                children: (0, n.jsx)(N.jGG, {}),
              }),
            ],
          });
        }
      },
      76945: (fe, de, r) => {
        "use strict";
        r.d(de, {
          $G: () => C,
          Hu: () => w,
          TY: () => A,
          VV: () => b,
          Xx: () => B,
          aS: () => u,
          bs: () => P,
          m1: () => h,
          sK: () => p,
          xh: () => q,
        });
        var n = r(72604),
          I = r(34041),
          a = r(72609),
          s = r(75233),
          t = r(80902),
          v = r(51614),
          L = r(19367),
          k = r.n(L);
        const F = k()("2026-11-23T09:30:00-08:00").unix(),
          N = k()("2026-11-30T10:00:00-08:00").unix(),
          P = "store/promo/steamawards2025/";
        function q() {
          return 2025;
        }
        function z(T) {
          return `${Config.MEDIA_CDN_URL}store/promo/${T}`;
        }
        const A = "#173471",
          w = "#ee6c5d",
          h = "#FFFFFF",
          D = k()("2026-12-17T09:30:00-08:00").unix(),
          f = k()("2027-01-02T10:00:00-08:00").unix(),
          o = { 2023: 2640290, 2024: 3334340, 2025: 4147080, 2026: 5350740 },
          p = 4147080,
          S = 2215130;
        function V(T) {
          switch (T) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function te(T) {
          return T >= F && T < N;
        }
        function se(T) {
          return T >= F;
        }
        function C(T, J, Y, ee) {
          const ye = te(ee),
            M = g(T, J),
            ge = g(T, Y);
          if (!(!M.length && !ge.length))
            return {
              nomination: M.length
                ? { rgCategories: M, bNominationsLive: ye }
                : void 0,
              vote: ge.length
                ? { rgCategories: ge, bNominationsLive: ye }
                : void 0,
            };
        }
        function K(T) {
          return T >= D && T < f;
        }
        function c(T) {
          return T >= f;
        }
        function u(T) {
          return T > 0;
        }
        function g(T, J) {
          const Y = [];
          for (const ee of J.filter(u)) {
            const ye = T.find((M) => M.voteid == ee);
            ye?.localization?.title &&
              Y.push({
                eCategoryID: ee,
                strTitle: ye.localization.title,
                strDescription: ye.localization.award_description ?? "",
                bLaborOfLove: ye.flag == I.Xs.bV,
              });
          }
          return Y;
        }
        function E(T) {
          return ["SteamAwards.GetUserNominations", T];
        }
        function Q(T) {
          return ["StoreSales.GetUserVotes", T, p];
        }
        function B(T, J) {
          const Y = (0, s.jE)(),
            ee = E(a.iA.accountid),
            { data: ye, isPending: M } = (0, t.I)({
              queryKey: ee,
              queryFn: async () => await J.GetMySteamAwardNominations(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: ge } = (0, v.n)({
              mutationFn: async (U) => {
                const ae = await J.NominateForSteamAward(U, T);
                if (ae != n.R)
                  throw new Error(`SteamAwards.Nominate failed with ${ae}`);
              },
              onMutate: (U) =>
                Y.setQueryData(ee, (ae) => [
                  ...(ae ?? []).filter((ve) => ve.category_id != T),
                  { category_id: T, appid: U },
                ]),
              onError: () => Y.invalidateQueries({ queryKey: ee }),
            });
          return {
            unNominatedAppID: ye?.find((U) => U.category_id == T)?.appid,
            bAnswered: ye != null || !a.iA.accountid || !M,
            Nominate: ge,
          };
        }
        function b(T, J) {
          const Y = (0, s.jE)(),
            ee = Q(a.iA.accountid),
            { data: ye, isPending: M } = (0, t.I)({
              queryKey: ee,
              queryFn: async () => await J.GetMySteamAwardVotes(),
              enabled: !!a.iA.accountid,
            }),
            { mutate: ge } = (0, v.n)({
              mutationFn: async (U) => {
                const ae = await J.SetSteamAwardVote(U, T);
                if (ae != n.R)
                  throw new Error(`StoreSales.SetVote failed with ${ae}`);
              },
              onMutate: (U) =>
                Y.setQueryData(ee, (ae) => [
                  ...(ae ?? []).filter((ve) => ve.voteid != T),
                  { voteid: T, appid: U },
                ]),
              onError: () => Y.invalidateQueries({ queryKey: ee }),
            });
          return {
            unVotedAppID: ye?.find((U) => U.voteid == T)?.appid,
            bAnswered: ye != null || !a.iA.accountid || !M,
            Vote: ge,
          };
        }
      },
      91354: (fe, de, r) => {
        "use strict";
        r.d(de, { c: () => k });
        var n = r(7850),
          I = r(64238),
          a = r.n(I),
          s = r(16412),
          t = r(36118),
          v = r(89206),
          L = r.n(v);
        function k(F) {
          const { bExpanded: N, setExpanded: P } = F;
          return (0, n.jsx)(s.wl, {
            className: a()(v.ExpandRowButton, N && v.Selected),
            onClick: () => P(!N),
            children: (0, n.jsx)(t.b8_, { direction: "down" }),
          });
        }
      },
      9032: (fe, de, r) => {
        "use strict";
        r.d(de, { uj: () => v, fB: () => L });
        var n = r(80902),
          I = r(72604),
          a = r(72609);
        async function s(k, F) {
          const N = a.TS.STORE_BASE_URL + "video/details/" + k + "/0",
            P = await fetch(N, { credentials: "include", signal: F });
          if (!P.ok) throw new Error(N + " answered " + P.status);
          const q = await P.json();
          if (q?.success != I.R && q?.success != "ready")
            throw new Error(
              "video/details on " + k + " answered " + q?.success,
            );
          return { appid: k, video_url: q.video_url, bookmark: q.bookmark };
        }
        function t(k) {
          return ["video", "vod", k];
        }
        function v(k) {
          return {
            queryKey: t(k),
            queryFn: ({ signal: F }) => s(k, F),
            retry: !1,
          };
        }
        function L(k) {
          const { data: F, isPending: N } = (0, n.I)(v(k));
          return { vodInfo: F, bLoading: N };
        }
      },
      813: (fe, de, r) => {
        "use strict";
        r.d(de, { $5: () => S, TB: () => p, ac: () => f });
        var n = r(40497),
          I = r(75233),
          a = r(14947),
          s = r(90626),
          t = r(76559),
          v = r(71742),
          L = r(3166),
          k = r(60480),
          F = r(33512),
          N = r(55483),
          P = r(77291);
        const q = new WeakSet();
        function z(c = n.L) {
          if (typeof window > "u" || typeof document > "u" || q.has(c)) return;
          const u = (0, L.Fd)("groupvanityinfo", "application_config");
          (u === void 0 && document.readyState != "complete") ||
            (q.add(c), A(u) && (0, N.aA)(c, u));
        }
        function A(c) {
          const u = c;
          return u &&
            Array.isArray(u) &&
            u.length > 0 &&
            typeof u[0] == "object"
            ? typeof u[0].clanAccountID == "number" &&
                (typeof u[0].appid == "number" ||
                  typeof u[0].vanity_url == "string")
            : !1;
        }
        function w(c) {
          return typeof c == "string" ? parseInt(c) : c;
        }
        function h(c) {
          return typeof c == "string" ? Number.parseInt(c) : c;
        }
        class D {
          m_queryClient = n.L;
          m_boxCacheVersion = a.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            z(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((u) => {
                  (u?.type != "added" &&
                    u?.type != "updated" &&
                    u?.type != "removed") ||
                    ((0, N.yT)(u.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, a.h5)(() =>
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
          AddGroupVanities(u) {
            this.LazyInit(), A(u) && (0, N.aA)(this.m_queryClient, u);
          }
          BHasClanInfoLoaded(u) {
            return (
              (0, v.wT)(
                u.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, v.wT)(
                u.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(u.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(u) {
            return !!(0, N.Gt)(h(u), this.ReadCache());
          }
          RegisterClanData(u) {
            this.LazyInit(), (0, N.aA)(this.m_queryClient, u);
          }
          async LoadOGGClanInfoForAppID(u) {
            return (
              this.LazyInit(),
              (u = w(u)),
              (0, v.wT)(
                u != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              u == 0 ? null : (0, N.AB)(u, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(u) {
            return this.LazyInit(), (0, N.Rc)(u, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(u) {
            return this.LazyInit(), (0, N.Rc)(u, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(u) {
            return this.LoadClanInfoForClanAccountID(u.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(u) {
            return this.LazyInit(), (0, N.MR)(h(u), this.m_queryClient);
          }
          GetOGGClanInfo(u) {
            const g = this.ReadCache();
            return typeof u == "string" ? (0, N.fy)(u, g) : (0, N.ko)(u, g);
          }
          GetClanSteamIDForAppID(u) {
            const g = (0, N.ko)(w(u), this.ReadCache());
            return g ? t.b.InitFromClanID(g.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(u) {
            return (0, N.ko)(w(u), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(u) {
            return (0, N.Gt)(u.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(u) {
            return this.BHasClanInfoLoadedByAccountID(u);
          }
          GetClanMemberCount(u) {
            return (0, N.ko)(w(u), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(u) {
            return (
              (0, v.wT)(
                !!u,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, N.Gt)(h(u), this.ReadCache())
            );
          }
          GetCreatorStoreURL(u) {
            let g = k.pF.GetCreatorHome(u);
            if (g) return g.GetCreatorHomeURL("developer");
            let E = this.GetClanInfoByClanAccountID(u.GetAccountID());
            return (
              L.TS.COMMUNITY_BASE_URL +
              (E.vanity_url
                ? "groups/" + E.vanity_url
                : "gid/" + u.ConvertTo64BitString())
            );
          }
        }
        const f = new D();
        (0, P.V)("g_ClanStore", f);
        function o() {
          const c = (0, I.jE)();
          return z(c), c;
        }
        function p(c) {
          o();
          const { data: u, isPending: g } = (0, N.TB)(c ? h(c) : void 0);
          return [!!c && g, u ?? void 0];
        }
        function S(c) {
          const u = o();
          (0, s.useEffect)(() => {
            c &&
              (0, N.MR)(h(c), u).catch((g) =>
                console.error(`Failed to hint load clan info ${c}`, g),
              );
          }, [c, u]);
        }
        function V(c) {
          return o(), useClanInfoByVanityQuery(c).data ?? null;
        }
        function te(c) {
          o();
          const u = c ? w(c) : void 0,
            { data: g, isPending: E } = useClanInfoByAppIDQuery(u);
          return { bLoadingClanInfo: !!u && E, clanInfo: g ?? null };
        }
        function se(c, u) {
          if (c.BIsOGGEvent()) return { bVisible: !1 };
          if (c.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (c.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            c.jsondata.clone_from_event_gid &&
            c.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (c.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const E = g_CreatorHomeStore.GetCreatorHome(c.clanSteamID);
          return E &&
            E.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : u
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function C(c, u) {
          return c.BIsOGGEvent()
            ? c.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : u
                  ? c.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function K(c) {
          return c.BIsOGGEvent()
            ? { bVisible: !1 }
            : c.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : c.BHasSaleEnabled()
                ? { bVisible: !0 }
                : c.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      53025: (fe, de, r) => {
        "use strict";
        r.d(de, { $: () => L });
        var n = r(41735),
          I = r.n(n),
          a = r(3166),
          s = r(77495),
          t = r(73259),
          v = r(72604);
        class L extends s.ZQ {
          async DeleteOldAnnouncement(F, N) {
            let P = new URLSearchParams();
            P.append("sessionid", (0, a.KC)());
            let q =
                a.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                F.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                N,
              z = await I().post(q, P);
            if (z.data.success != v.R) throw z.data;
            return this.RemoveGIDFromList(F, t.cB + N), z.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              L.sm_Instance ||
                ((L.sm_Instance = new L()), L.sm_Instance.Init()),
              L.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              L.sm_SummaryInstance ||
                ((L.sm_SummaryInstance = new L(!0)),
                L.sm_SummaryInstance.Init()),
              L.sm_SummaryInstance
            );
          }
        }
      },
      76035: (fe, de, r) => {
        "use strict";
        r.d(de, {
          $d: () => J,
          AD: () => C,
          CF: () => we,
          Fq: () => V,
          Jo: () => K,
          Mn: () => Re,
          N2: () => T,
          PV: () => Pe,
          QS: () => Ee,
          RE: () => se,
          Ri: () => S,
          Vz: () => g,
          ZB: () => ve,
          _C: () => U,
          a8: () => Le,
          cO: () => u,
          ed: () => Q,
          jT: () => B,
          kr: () => c,
          lE: () => ee,
          np: () => ge,
          rv: () => ae,
        });
        var n = r(72604),
          I = r(32093),
          a = r(35038),
          s = r(27386),
          t = r(34041),
          v = r(80902),
          L = r(75233),
          k = r(51614),
          F = r(68312),
          N = r(98609),
          P = r(67705),
          q = r(6469),
          z = r(41735),
          A = r.n(z),
          w = r(75779),
          h = r(90626),
          D = r(31224),
          f = r(76945);
        const o = 2640290,
          p = 3334340,
          S = f.sK,
          V = 2215130;
        let te;
        function se() {
          return (
            te || (te = (0, P.Fd)("steam_awards_config", "application_config")),
            te
          );
        }
        const C = h.createContext(null);
        function K(H) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardDefs_${H}`],
            queryFn: async () => {
              const G = a.w.Init(t.cD);
              return (
                G.Body().set_sale_appid(H),
                G.Body().set_language(N.TS.LANGUAGE),
                (await t.zF.GetVoteDefinitions(ue, G)).Body().toObject()
              );
            },
            initialData: () => se()?.definitions,
            enabled: H > 0,
          });
        }
        async function c(H) {
          const ue = a.w.Init(t.Dp);
          return (
            (await t.AH.GetUserNominations(H, ue)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function u() {
          const H = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardNominations_${N.iA.accountid}`],
            queryFn: () => c(H),
            initialData: () => se()?.user_nominations?.nominations,
            enabled: N.iA.logged_in,
          });
        }
        function g(H) {
          const ue = u();
          return ue.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: ue.data?.find((G) => G.category_id == H),
                bLoadingNominationForCategory: !1,
              };
        }
        function E() {
          return [`SteamAwardBadgeProgress_${N.iA.accountid}`];
        }
        function Q(H) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: E(),
            queryFn: async () => {
              const G = a.w.Init(s.jng);
              return (
                G.Body().set_badgeid(H),
                G.Body().set_steamid(N.iA.steamid),
                (await s.xtC.GetCommunityBadgeProgress(ue, G)).Body().toObject()
              );
            },
            initialData: () => se()?.badge_progress,
            enabled: N.iA.logged_in,
          });
        }
        function B(H) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardSuggestions_${H}`],
            queryFn: async () => {
              const G = a.w.Init(t.$N);
              return (
                G.Body().set_category_id(H),
                (await t.AH.GetNominationRecommendations(ue, G))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function b(H, ue) {
          H.setQueryData([`SteamAwardNominations_${N.iA.accountid}`], ue);
        }
        async function T(H, ue, G, me) {
          const re = a.w.Init(t.wz);
          re.Body().set_category_id(G),
            re.Body().set_source(me),
            re.Body().set_nominated_id(ue);
          const be = await t.AH.Nominate(H, re);
          return (
            be.BSuccess() ||
              console.warn(`Failed to nominate app: ${be.GetEResult()}`),
            [be.GetEResult(), be.Body().toObject()]
          );
        }
        function J(H, ue, G, me, re) {
          const be = (0, F.KV)(),
            Se = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => T(be, H, ue, G),
            onSuccess: ([ne, oe]) => {
              ne == n.R
                ? (b(Se, oe.nominations),
                  window.setTimeout(
                    () => Se.invalidateQueries({ queryKey: E() }),
                    1e3,
                  ),
                  re && re())
                : me && me(ne);
            },
            onError: () => {
              me && me();
            },
          });
        }
        async function Y(H, ue, G) {
          let me = {
            cc: N.TS.COUNTRY,
            l: N.TS.LANGUAGE,
            realm: I.TU.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: H.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: q.Fm.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: q.Fm.Get().ExcludedContentDescriptor,
            excluded_apps: G,
          };
          ue.release_date_max &&
            (me.release_date_max = new Date(
              ue.release_date_max * 1e3,
            ).toISOString()),
            ue.release_date_min &&
              (me.release_date_min = new Date(
                ue.release_date_min * 1e3,
              ).toISOString()),
            ue.flag == t.Xs.O8 && (me.vrsupport = 1),
            ue.flag == t.Xs.x1 &&
              (me.steam_deck_compat_categories = [w.YX, w.sd, w.I2]);
          const re = `${N.TS.STORE_BASE_URL}search/suggest`;
          return (
            (await A().get(re, { params: me, withCredentials: !0 })).data ?? []
          );
        }
        function ee(H, ue, G) {
          return (0, v.I)({
            queryKey: [H, ue.voteid, G],
            queryFn: () => Y(H, ue, G),
            staleTime: 1 / 0,
          });
        }
        function ye() {
          const H = u();
          return H.data ? H.data.map((ue) => ue.appid) : [];
        }
        async function M(H, ue) {
          const G = a.w.Init(t.CX);
          G.Body().set_generate_new(ue);
          const me = await t.AH.GetNominationShareLink(H, G);
          return (
            me.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${me.GetEResult()}`,
              ),
            [me.GetEResult(), me.Body().toObject()]
          );
        }
        function ge() {
          const H = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`GetNominationShareLink_${N.iA.accountid}`],
            queryFn: async () => M(H, !1),
            initialData: () => [n.R, se()?.share_link],
            staleTime: 1 / 0,
            enabled: N.iA.logged_in,
          });
        }
        function U() {
          const H = (0, F.KV)(),
            ue = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => M(H, !0),
            onSuccess: ([G, me]) => {
              G == n.R &&
                ue.setQueryData(
                  [`GetNominationShareLink_${N.iA.accountid}`],
                  [G, me],
                );
            },
          });
        }
        async function ae(H, ue, G, me) {
          const re = a.w.Init(t.yX);
          re.Body().set_voteid(G),
            re.Body().set_appid(ue),
            re.Body().set_sale_appid(me);
          const be = await t.zF.SetVote(H, re);
          return (
            be.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${ue}): ${be.GetEResult()}`,
              ),
            [be.GetEResult(), be.Body().toObject()]
          );
        }
        function ve(H, ue, G) {
          const me = (0, F.KV)(),
            re = (0, L.jE)();
          return (0, k.n)({
            mutationFn: () => ae(me, H, ue, G),
            onSuccess: ([be, Se]) => {
              be == n.R &&
                re.setQueryData(
                  [`SteamAwardUserVotes_${N.iA.accountid}`],
                  Se.user_votes,
                );
            },
          });
        }
        async function Ee(H, ue) {
          const G = a.w.Init(t.qX);
          G.Body().set_sale_appid(ue);
          const me = await t.zF.GetUserVotes(H, G);
          return (
            me.BSuccess() ||
              console.warn(`Failed to get votes for user: ${me.GetEResult()}`),
            me.Body().toObject()?.user_votes
          );
        }
        function Le(H) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardUserVotes_${N.iA.accountid}`],
            queryFn: () => Ee(ue, H),
            initialData: () => se()?.user_votes,
            enabled: N.iA.logged_in,
          });
        }
        function Re(H, ue) {
          const G = Le(H);
          return (0, h.useMemo)(
            () => G.data?.find((me) => me.voteid == ue)?.appid,
            [ue, G.data],
          );
        }
        function Ne(H) {
          const ue = (0, F.KV)();
          return (0, v.I)({
            queryKey: [`SteamAwardItemDefs_${H}`],
            queryFn: async () => {
              const G = a.w.Init(D.RG);
              return (
                G.Body().set_appid(H),
                G.Body().set_language(N.TS.LANGUAGE),
                (await D.uy.GetCommunityItemDefinitions(ue, G))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => se()?.item_definitions,
          });
        }
        function Pe(H, ue) {
          const G = Ne(H),
            me = K(H);
          if (!G.data || !me.data) return null;
          const re = me.data.votes.find((be) => be.voteid == ue);
          return G.data.item_definitions?.find(
            (be) => be.item_type == re.item_type,
          );
        }
        function we() {
          return h.useContext(C).yearStyles;
        }
      },
      73191: (fe, de, r) => {
        "use strict";
        r.d(de, { Hh: () => N, vs: () => k });
        var n = r(7850),
          I = r(90626),
          a = r(96538),
          s = r(56330),
          t = r.n(s),
          v = r(18210),
          L = r(85599);
        function k(P) {
          const [q, z] = (0, I.useState)(() => !!P),
            [A, w] = (0, I.useState)(!1),
            [h, D] = (0, I.useState)(!1),
            [f, o] = (0, I.useState)(null),
            [p, S] = (0, I.useState)(null),
            [V, te] = (0, I.useState)(null),
            [se, C] = (0, I.useState)(null),
            [K, c] = (0, I.useState)(null);
          return {
            bLoading: q,
            bError: A,
            bSuccess: h,
            strError: f,
            strSuccess: p,
            elSuccess: se,
            elError: V,
            strThrobber: K,
            fnSetLoading: z,
            fnSetError: w,
            fnSetSuccess: D,
            fnSetStrError: o,
            fnSetStrSuccess: S,
            fnSetElSuccess: C,
            fnSetElError: te,
            fnSetThrobber: c,
          };
        }
        function F(P, q) {
          q != k_EResultOK ? P.fnSetError(!0) : P.fnSetSuccess(!0);
        }
        function N(P) {
          const {
              strDialogTitle: q,
              state: z,
              closeModal: A,
              strThrobber: w,
            } = P,
            {
              bLoading: h,
              bError: D,
              bSuccess: f,
              strError: o,
              strSuccess: p,
              elSuccess: S,
              elError: V,
              strThrobber: te,
            } = z;
          return D || o || V
            ? (0, n.jsxs)(a.o0, {
                strTitle: q,
                bAlertDialog: !0,
                closeModal: A,
                className: s.SuccessErrorDialog,
                children: [
                  !!o &&
                    (0, n.jsx)("div", {
                      className: s.ErrorStylesWithIcon,
                      children:
                        o || (0, v.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!V && V,
                ],
              })
            : f || p || S
              ? (0, n.jsx)(a.o0, {
                  strTitle: q,
                  strDescription: p || (0, v.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: A,
                  className: s.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!S && S }),
                })
              : (0, n.jsx)(a.o0, {
                  strTitle: q,
                  className: s.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(L.t, {
                    string: w || te || (0, v.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      82385: (fe, de, r) => {
        "use strict";
        r.d(de, { AD: () => Fe, He: () => _ });
        var n = r(7850),
          I = r(14947),
          a = r(75844),
          s = r(90626),
          t = r(99412),
          v = r(41301),
          L = r(19298),
          k = r(72849),
          F = r(9046),
          N = r(32606),
          P = r(813),
          q = r(7582),
          z = r(34360),
          A = r(31117),
          w = r(94520),
          h = r(98144),
          D = r(90316),
          f = r.n(D),
          o = r(95695),
          p = r.n(o),
          S = r(13465),
          V = r(36118),
          te = r(85599),
          se = r(53107),
          C = r(5552),
          K = r(71742),
          c = r(8323),
          u = r(36707),
          g = r(82734),
          E = r(18210),
          Q = r(30096),
          B = r(53113),
          b = r(3166),
          T = r(17009),
          J = r.n(T),
          Y = r(90537),
          ee = r(56492),
          ye = r(88812),
          M = r(42184),
          ge = r(5191),
          U = r(80684),
          ae = r(7967),
          ve = r(76559),
          Ee = r(60480),
          Le = r(84676);
        function Re(O) {
          const { bOn: $ } = O;
          return jsx("div", {
            className: $ ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize($ ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function Ne(O) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(Pe, { identifier: O.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(we, { identifier: O.identifier })
              : jsx(H, { identifier: O.identifier });
        }
        function Pe(O) {
          const $ = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: pe } = useCreatorHome($.GetAccountID());
          return !pe || !pe.BIsLoaded()
            ? null
            : jsx(ue, {
                strURL: NavLink(pe.GetCreatorHomeURL("developer")),
                strImgUrl: pe.GetAvatarURLFullSize(),
                strName: pe.GetName(),
              });
        }
        function we(O) {
          const $ = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return $
            ? jsx(ue, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: $.avatar_full_url,
                strName: $.group_name,
              })
            : null;
        }
        function H(O) {
          const [$] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return $
            ? jsx(ue, {
                strURL: NavLink($.GetStorePageURL()),
                strImgUrl: $.GetAssets().GetSmallCapsuleURL(),
                strName: $.GetName(),
              })
            : null;
        }
        function ue(O) {
          const { strURL: $, strImgUrl: pe, strName: Ie } = O;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: $,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: pe }), Ie],
              }),
            }),
          });
        }
        function G(O) {
          const { children: $ } = O;
          return (0, b.Qn)() && !b.TS.IN_STEAMUI
            ? (0, n.jsx)(ae.Qg, {
                className: o.GamepadOnlyScrollPanel,
                children: $,
              })
            : (0, n.jsx)(n.Fragment, { children: $ });
        }
        var me = r(79590),
          re = r(73644),
          be = r(41032),
          Se = r(37589),
          ne = r(20169),
          oe = Object.defineProperty,
          xe = Object.getOwnPropertyDescriptor,
          je = (O, $, pe, Ie) => {
            for (
              var De = Ie > 1 ? void 0 : Ie ? xe($, pe) : $,
                Qe = O.length - 1,
                Ce;
              Qe >= 0;
              Qe--
            )
              (Ce = O[Qe]) && (De = (Ie ? Ce($, pe, De) : Ce(De)) || De);
            return Ie && De && oe($, pe, De), De;
          };
        const Te = 56,
          Ge = 136,
          ke = s.lazy(() =>
            Promise.all([
              r.e(36597),
              r.e(56589),
              r.e(85599),
              r.e(33512),
              r.e(94781),
              r.e(18307),
              r.e(8892),
              r.e(80702),
              r.e(48355),
              r.e(36786),
              r.e(55050),
              r.e(60480),
              r.e(60839),
              r.e(14632),
              r.e(54409),
              r.e(73810),
              r.e(49968),
              r.e(34004),
              r.e(11095),
              r.e(14867),
              r.e(8319),
              r.e(10177),
              r.e(68396),
            ]).then(r.bind(r, 2422)),
          );
        function ze(O) {
          const [$, pe] = (0, Le.t7)(O.appid, { include_assets: !0 }),
            [Ie, De] = (0, P.TB)(O.clanID);
          let Qe = "";
          return (
            O.appid
              ? (Qe = $?.GetAssets()?.GetCommunityIconURL() || "")
              : O.clanID && (Qe = De ? De.avatar_full_url : ""),
            (0, n.jsx)("div", {
              className: (0, u.A)(J().ScrollButton, J().GameArt, J().AnimIn),
              onClick: O.onAppIconClick,
              children: !!Qe && (0, n.jsx)("img", { src: Qe }),
            })
          );
        }
        let Fe = class extends s.Component {
          m_loader = null;
          m_refPage = s.createRef();
          m_refContent = s.createRef();
          m_refScroll = s.createRef();
          m_refScrollAnchor = s.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(O) {
            super(O),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new $e(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let $ = this.m_refContent.current.children,
              pe = this.GetScrollTopForComparison();
            for (let Ie = 0; Ie < $.length; Ie++) {
              let De = $[Ie],
                Qe = De.offsetTop,
                Ce = Qe + De.clientHeight;
              if (Qe <= pe && Ce > pe) return Ie;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? Ge : Te;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(O) {
            let $ = this.m_refContent.current;
            if (!$ || O < 0 || O >= $.children.length || this.m_scrollAnimation)
              return;
            let pe = $.children[O].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(pe);
          }
          ScrollToOffset(O) {
            let $ = this.m_refScroll.current;
            if (!$) return;
            let pe = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new C.JV($, { scrollTop: O }, pe)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let O = this.m_loader.GetEvents(),
              $ = this.FindCurrentlyViewedEventIndex() + 1;
            if ($ >= O.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent($),
              $ == O.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let O = this.FindCurrentlyViewedEventIndex(),
              $ = O - 1;
            if ($ < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let pe = this.m_refContent.current;
            if (pe) {
              let Ie = pe.children[O],
                De = Ie.offsetTop,
                Qe = De + Ie.clientHeight,
                Ce = this.GetScrollTopForComparison();
              (Ce = Ce - (Qe - De) * 0.3), De <= Ce && ($ = O);
            }
            this.ScrollToEvent($);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(O) {
            O.currentTarget == O.target && this.Close();
          }
          OnKeyDown(O) {
            O.keyCode == v.zV && this.Close();
          }
          OnScroll(O) {
            if (this.props.bShowOnlyInitialEvent) return;
            let $ = this.m_refScroll.current;
            if (!$) return;
            let pe = $.clientHeight;
            $.scrollHeight - ($.scrollTop + pe) <= pe &&
              this.m_loader.LoadMoreAtEnd(),
              $.scrollTop <= pe && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(O) {
            let $ = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !$)
            )
              return null;
            let pe = this.m_refScroll.current;
            if (!pe || !this.m_refScrollAnchor.current) return null;
            let Ie = this.m_refScrollAnchor.current.GetDOM();
            return Ie ? Ie.offsetTop - pe.scrollTop : null;
          }
          OnTouchStart(O) {
            O.touches.length == 1 &&
              (this.m_nTouchStartClientY = O.touches[0].clientY);
          }
          OnTouchMove(O) {
            if (!this.m_refScroll.current || O.touches.length == 0) return;
            const $ = this.m_nTouchStartClientY - O.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(O, $);
          }
          OnWheel(O) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(O, O.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(O, $) {
            const pe =
                g.kD(O.target) && g.id(this.m_refScroll.current, O.target),
              Ie = $ < 0 && this.m_refScroll.current.scrollTop < 1,
              De =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              Qe = $ > 0 && De;
            (!pe || Ie || Qe) && O.cancelable && O.preventDefault();
          }
          SetGlobalHeaderHidden(O) {
            const $ = document.getElementsByClassName("responsive_header");
            (0, K.wT)($.length <= 1, "Must have at most one responsive_header"),
              $.length >= 1 && ($[0].style.display = O ? "none" : null);
          }
          SetFooterPinnedToBottom(O) {
            const $ = document.getElementById("footer");
            $ && ($.style.position = O ? "absolute" : null);
          }
          componentDidMount() {
            const O = this.m_refScroll.current;
            O && !g.id(O, O.ownerDocument.activeElement) && O.focus();
            const $ = this.m_refPage.current;
            $ &&
              ($.addEventListener("touchstart", this.OnTouchStart),
              $.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              $.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(O, $, pe) {
            if (pe !== null) {
              let Ie = this.m_refScroll.current;
              Ie && !g.id(Ie, Ie.ownerDocument.activeElement) && Ie.focus();
              let De = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              De && (Ie.scrollTop = De.offsetTop - pe);
            }
          }
          componentWillUnmount() {
            const O = this.m_refPage.current;
            O &&
              (O.removeEventListener("touchstart", this.OnTouchStart),
              O.removeEventListener("touchmove", this.OnTouchMove),
              O.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: O, bShowOnlyInitialEvent: $ } = this.props,
              pe = !O,
              Ie = pe ? [] : $ ? [O] : this.m_loader.GetEvents(),
              De = [];
            let Qe = this.props.appid,
              Ce = this.props.clanSteamID?.GetAccountID();
            for (const ut of Ie) {
              const tt = ut.GID == this.props.initialEvent.GID,
                Mt = tt;
              De.push(
                (0, n.jsx)(
                  _,
                  {
                    ref: tt ? this.m_refScrollAnchor : null,
                    event: ut,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: tt,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !Mt,
                    className: this.props.eventClassName,
                  },
                  ut.GID,
                ),
              ),
                Qe == null && (Qe = ut.appid),
                Ce == null && (Ce = ut.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = De.length),
              (0, n.jsxs)(L.Z, {
                onCancelButton: this.props.closeModal,
                className: J().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, n.jsx)(M.v, { appId: Qe, clanId: Ce }),
                  (0, n.jsx)(L.Z, {
                    className: (0, u.A)(
                      J().AppPartnerEventsBody,
                      J().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: ne.Yo.NoTransformSparseContent,
                    children: pe
                      ? (0, n.jsx)("div", {
                          className: J().NoEvents,
                          children: (0, E.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: (0, u.A)(
                                J().ControlSection,
                                !this.props.onAppIconClick && J().NoGameLink,
                                $ && J().NoScrollArrows,
                              ),
                              children: (0, n.jsx)("div", {
                                className: J().ControlSectionWidth,
                                children: (0, n.jsxs)("div", {
                                  className: J().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, n.jsx)("div", {
                                        className: (0, u.A)(
                                          J().CloseButton,
                                          J().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, n.jsx)(V.sED, {}),
                                      }),
                                    !$ &&
                                      (0, n.jsx)("div", {
                                        className: (0, u.A)(
                                          J().ScrollButton,
                                          J().Up,
                                          J().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, n.jsx)(V.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !$ &&
                                      (0, n.jsx)("div", {
                                        className: (0, u.A)(
                                          J().ScrollButton,
                                          J().Down,
                                          J().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, n.jsx)(V.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, n.jsx)(ze, {
                                        appid: Qe,
                                        clanID: Ce,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !$ &&
                              (0, n.jsx)(W, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, n.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, u.A)(
                                J().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && J().NoGameLink,
                              ),
                              children: De,
                            }),
                            !$ &&
                              (0, n.jsx)(W, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        je([Q.oI], Fe.prototype, "ScrollToNextEvent", 1),
          je([Q.oI], Fe.prototype, "ScrollToPrevEvent", 1),
          je([Q.oI], Fe.prototype, "OnScrollComplete", 1),
          je([Q.oI], Fe.prototype, "Close", 1),
          je([Q.oI], Fe.prototype, "OnBackgroundClick", 1),
          je([Q.oI], Fe.prototype, "OnKeyDown", 1),
          je([Q.oI], Fe.prototype, "OnScroll", 1),
          je([Q.oI], Fe.prototype, "OnTouchStart", 1),
          je([Q.oI], Fe.prototype, "OnTouchMove", 1),
          je([Q.oI], Fe.prototype, "OnWheel", 1),
          (Fe = je([a.PA], Fe));
        const W = (0, a.PA)((O) => {
            let $ = O.loader.GetNewerState(),
              pe = O.loader.GetOlderState();
            return $ == 2 && pe == 2
              ? null
              : (O.location == "top" ? $ : pe) == 2
                ? (0, n.jsx)("div", {
                    className: J().DirectionState,
                    children: (0, n.jsx)(te.t, {
                      position: "center",
                      string: (0, E.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          _ = s.forwardRef(function ($, pe) {
            const Ie = (0, b.Qn)(),
              [De, Qe] = (0, Le.t7)($.event.appid, { include_assets: !0 }),
              Ce = (0, be.Zj)($.event.appid),
              ut = (0, Y.Y)();
            return (0, n.jsx)(he, {
              ref: pe,
              ...$,
              bInGamepadUI: Ie,
              bShouldMaskImages: Ce,
              storeItem: De,
              tracker: ut,
            });
          });
        let he = class extends s.Component {
          m_refContent = s.createRef();
          m_sendReadInfo = new c.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const O = 750,
              $ = () => {
                this.props.tracker.RecordEventRead(this.props.event, k.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(O, $);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: O,
                langOverride: $,
                partnerEventStore: pe,
                emoticonStore: Ie,
                className: De,
                additionalTypeAndDateElement: Qe,
                headerClassnames: Ce,
                isPreview: ut,
                bShouldMaskImages: tt,
                storeItem: Mt,
              } = this.props,
              et = $ || (0, t.sfN)(b.TS.LANGUAGE),
              lt = O.GetDescriptionWithFallback(et) || "",
              yt = Ce,
              Wt = "300px",
              ht = O.GetCategoryAsString(),
              ct = O.type;
            let qe = "";
            if (O.appid) qe = Mt?.GetName() || "";
            else if (O.clanSteamID) {
              const dt = P.ac.GetClanInfoByClanAccountID(
                O.clanSteamID.GetAccountID(),
              );
              qe = dt ? dt.group_name : "";
            }
            const st = q.HD.GetTimeNowWithOverride(),
              at =
                ct !== t.uYK && st < O.GetStartTimeAndDateUnixSeconds() && !ut;
            return (0, n.jsx)(G, {
              children: (0, n.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, u.A)(
                  De,
                  J().PartnerEvent,
                  f().InLibraryView,
                  yt == "editor" ? f().InEditor : "",
                ),
                children: [
                  (0, n.jsx)(Me, { ...this.props, eLanguage: et }),
                  (0, n.jsx)("div", {
                    className: f().LibraryEventTitleContainer,
                    children: (0, n.jsxs)("div", {
                      className: f().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, n.jsxs)("div", {
                          className: (0, u.A)(
                            J().EventTypeAndTimeRow,
                            at && J().WithReminder,
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: J().TimeandPostedBy,
                              children: [
                                (0, n.jsx)("span", {
                                  className: J().EventType,
                                  children: ht,
                                }),
                                (0, n.jsxs)("span", {
                                  className: J().PostedBy,
                                  children: [
                                    " ",
                                    (0, E.we)("#EventDisplay_PostedBy"),
                                    qe,
                                    " ",
                                  ],
                                }),
                                (0, n.jsx)(N.O, {
                                  event: O,
                                  className: f().EventDetailTimeInfo,
                                }),
                              ],
                            }),
                            at &&
                              !ut &&
                              (0, n.jsx)("div", {
                                className: J().ReminderContainer,
                                children: (0, n.jsx)(ge.j, {
                                  eventModel: O,
                                  lang: et,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !ut && Qe,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !ut &&
                          (0, n.jsx)(Se.Y, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: { rootMargin: `0px 0px -${Wt} 0px` },
                          }),
                        this.props.bInGamepadUI
                          ? (0, n.jsx)("div", {
                              className: f().EventDetailTitle,
                              children: O.GetNameWithFallback(et),
                            })
                          : (0, n.jsx)(ee.tj, {
                              eventModel: O,
                              route: ee.PH.k_eView,
                              className: f().EventDetailTitle,
                              children: O.GetNameWithFallback(et),
                            }),
                        O.BHasSubTitle(et) &&
                          (0, n.jsx)("div", {
                            className: (0, u.A)(
                              f().EventDetailsSubTitle,
                              J().LibraryViewSubtitle,
                            ),
                            children: O.GetSubTitle(et),
                          }),
                        (0, n.jsx)("div", {
                          className: f().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    O.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, n.jsx)("div", {
                      className: f().EventBroadcastCtn,
                      children: (0, n.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, n.jsx)(ke, { event: this.props.event }),
                      }),
                    }),
                  O.BHasTag("steam_award_nomination_request") &&
                    (0, n.jsx)(h.EventDisplaySteamAwardNomination, {
                      event: O,
                      lang: et,
                    }),
                  O.BHasTag("steam_award_vote_request") &&
                    (0, n.jsx)(h.WinterSaleSteamAwardVoteWrapper, {
                      appID: O.appid,
                      bIsEventActionEnabled: O.BIsEventActionEnabled(),
                      voteCategories: O.GetSteamAwardNomineeCategories(),
                    }),
                  (0, n.jsxs)("div", {
                    className: f().LibraryEventBodyContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, u.A)(
                          f().EventDetailsBody,
                          J().EventDetailsBody,
                          tt && f().MaskImages,
                        ),
                        onContextMenu: b.TS.IN_CLIENT ? z.aE : void 0,
                        children: [
                          (0, n.jsx)(w.fh, { text: lt, event: O }),
                          (0, n.jsx)("span", { className: p().Clear }),
                        ],
                      }),
                      (0, n.jsx)(U._, { event: this.props.event }),
                      !!O.jsondata.read_more_link &&
                        (0, n.jsx)("div", {
                          className: (0, u.A)(J().ReadMoreCnt),
                          children: (0, n.jsx)(se.uU, {
                            className: (0, u.A)(p().Button),
                            href: O.jsondata.read_more_link,
                            children: (0, E.we)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        O.jsondata.bSaleEnabled && O.jsondata.sale_vanity_id
                      ) &&
                        (0, n.jsxs)("div", {
                          className: (0, u.A)(J().ReadMoreCnt),
                          children: [
                            (0, n.jsx)(me.m, { gidEvent: O.GID }),
                            (0, n.jsx)("a", {
                              className: (0, u.A)(p().Button, "LinkButton"),
                              href: (0, B.k2)((0, Ee.n4)(O)),
                              children: (0, E.we)(
                                "#Event_Button_VisitSalePage",
                              ),
                            }),
                          ],
                        }),
                      (0, n.jsx)(re.lS, { appid: O.appid }),
                    ],
                  }),
                  !ut && (0, n.jsx)(A.F, { eventModel: O, emoticonStore: Ie }),
                ],
              }),
            });
          }
        };
        je([Q.oI], he.prototype, "OnEnterVisible", 1),
          je([Q.oI], he.prototype, "OnLeaveVisible", 1),
          (he = je([a.PA], he));
        function Me(O) {
          const {
              event: $,
              fnFilterImageURLsForKnownFailures: pe,
              fnImageFailureCallback: Ie,
              eLanguage: De,
              bShouldMaskImages: Qe,
            } = O,
            Ce = $.BImageNeedScreenshotFallback("background", De),
            ut = $.type;
          let tt = (0, ye.WC)($, "background", De, F.wI.background_main, !Ce);
          return (
            pe && tt && (tt = pe(tt)),
            (0, n.jsxs)(n.Fragment, {
              children: [
                ut != t.Fwr &&
                  !Ce &&
                  (0, n.jsx)(S.c, {
                    className: (0, u.A)(
                      f().EventCoverImageBackground,
                      Qe && f().MaskImages,
                    ),
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => Ie && Ie(et),
                  }),
                tt &&
                  tt.length > 0 &&
                  (0, n.jsx)(S.c, {
                    className: f().EventBackgroundBlur,
                    rgSources: tt,
                    onIncrementalError: (Mt, et, lt) => Ie && Ie(et),
                  }),
              ],
            })
          );
        }
        var Je = ((O) => (
          (O[(O.Idle = 1)] = "Idle"),
          (O[(O.Loading = 2)] = "Loading"),
          (O[(O.EndOfContent = 3)] = "EndOfContent"),
          O
        ))(Je || {});
        class $e {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor($) {
            (0, I.Gn)(this), (this.m_partnerEventStore = $);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent($, pe) {
            const Ie = this.m_partnerEventStore;
            (this.m_nAppID = $.appid),
              (this.m_clanSteamID = $.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = pe),
              this.m_rgEvents.push($);
            let De = null;
            try {
              De = await Ie.LoadAdjacentPartnerEventsByEvent(
                $,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, I.h5)(() => {
              if (!De || De.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let Qe = De.findIndex((tt) => tt.GID == $.GID),
                Ce = Qe,
                ut = Qe >= 0 ? De.length - Qe - 1 : 0;
              (this.m_eNewerDirection = Ce >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection =
                  ut >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = De);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let $ = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let pe = null;
            try {
              pe =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  $,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, I.h5)(() => {
              if (!pe) {
                this.m_eOlderDirection = 1;
                return;
              }
              const Ie = new Set(this.m_rgEvents.map((De) => De.GID));
              for (let De of pe)
                Ie.has(De.GID) || (this.m_rgEvents.push(De), Ie.add(De.GID));
              this.m_eOlderDirection =
                pe.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let $ = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let pe = null;
            try {
              pe =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  $,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, I.h5)(() => {
              if (!pe) {
                this.m_eNewerDirection = 1;
                return;
              }
              const Ie = new Set(this.m_rgEvents.map((De) => De.GID));
              for (let De of pe.reverse())
                Ie.has(De.GID) || (this.m_rgEvents.unshift(De), Ie.add(De.GID));
              this.m_eNewerDirection =
                pe.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        je([I.sH.shallow], $e.prototype, "m_rgEvents", 2),
          je([I.sH], $e.prototype, "m_eOlderDirection", 2),
          je([I.sH], $e.prototype, "m_eNewerDirection", 2);
      },
      33752: (fe, de, r) => {
        "use strict";
        r.d(de, { W: () => Q });
        var n = r(7850),
          I = r(26589),
          a = r(40358),
          s = r(75844),
          t = r(90626),
          v = r(76559),
          L = r(813),
          k = r(6469),
          F = r(10142),
          N = r(16412),
          P = r(36118),
          q = r(53107),
          z = r(47689),
          A = r(36707),
          w = r(18210),
          h = r(53113),
          D = r(3166),
          f = r(17009),
          o = r.n(f),
          p = r(80702),
          S = r(95414),
          V = r(73259);
        function te(B) {
          const {
              appId: b,
              clanId: T,
              strCapsuleUrl: J,
              strGroupTitle: Y,
              strExtraBannerGroupStyle: ee,
              actions: ye,
            } = B,
            M = b !== V.DU,
            ge = t.useMemo(() => (b ? { appid: b } : { creatorid: T }), [b, T]),
            U = (0, n.jsx)("img", { className: o().AppBannerLogo, src: J });
          return (0, D.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: o().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: o().AppBannerBackground,
                    style: { backgroundImage: `url(${J})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, A.A)(o().AppBannerGroup, ee),
                    children: [
                      M
                        ? b
                          ? (0, n.jsx)(p.Q, {
                              id: ge,
                              className: o().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: U,
                            })
                          : (0, n.jsx)(S.u, {
                              id: ge,
                              hoverClassName: o().AppBannerLogoCtn,
                              children: U,
                            })
                        : (0, n.jsxs)("div", {
                            className: o().AppBannerLogoCtn,
                            children: [U, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: o().AppBannerTitle,
                        children: [
                          Y,
                          (0, n.jsx)("div", {
                            className: o().NewsHubSubTitle,
                            children: (0, w.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      M &&
                        (0, n.jsx)("div", {
                          className: o().AppBannerLinks,
                          children: ye,
                        }),
                    ],
                  }),
                ],
              });
        }
        function se(B) {
          const { appid: b, clanAccountID: T } = B,
            J = React.useMemo(() => (b ? { appid: b } : void 0), [b]),
            { data: Y } = useStoreItemDefaultInfo(J),
            { data: ee } = useStoreItemAssets(J),
            { data: ye } = useClanInfoByAccountID(b ? void 0 : T),
            { bIsOwned: M } = useIsStoreItemOwned(J),
            ge = b
              ? ee
                ? StoreAssetURL(ee, "header")
                : void 0
              : ye?.avatar_full_url,
            U = b ? Y?.name : ye?.group_name;
          return jsx(te, {
            appId: b ?? 0,
            clanId: T,
            strCapsuleUrl: ge,
            strGroupTitle: U,
            strExtraBannerGroupStyle: b ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(b && !M) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: b,
                      bIsFree: !!Y?.is_free,
                      bIsComingSoon: !!Y?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: b
                    ? jsx(AppFollowButton, {
                        appid: b,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: T,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var C = r(56492),
          K = r(72147),
          c = r(64774);
        function u(B, b) {
          const [T, J] = (0, t.useState)({}),
            Y = (0, z.m)("useEventHeaderData");
          return (
            (0, t.useEffect)(() => {
              if (B)
                F.A.Get()
                  .QueueAppRequest(B, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const ee = F.A.Get().GetApp(B);
                    ee &&
                      !Y?.token?.reason &&
                      J({
                        strCapsuleUrl: ee.GetAssets().GetHeaderURL(),
                        strGroupTitle: ee.GetName(),
                        strStoreURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ee.GetStorePageURL(),
                        strCommunityURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ee.GetCommunityPageURL(),
                        strForumURL:
                          (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ee.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (b) {
                const ee = v.b.InitFromClanID(b);
                L.ac.LoadClanInfoForClanSteamID(ee).then((ye) => {
                  Y?.token?.reason ||
                    J({
                      strCapsuleUrl: ye.avatar_full_url,
                      strGroupTitle: ye.group_name,
                      strStoreURL:
                        (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        D.TS.STORE_BASE_URL +
                        "curator/" +
                        b +
                        "/",
                      strCommunityURL:
                        (D.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        D.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        ee.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: o().ClanBanner,
                    });
                });
              }
            }, [B, Y?.token?.reason, b]),
            T
          );
        }
        const g = {};
        function E(B) {
          const { appId: b, clanId: T, bShowRSSFeed: J } = B,
            { strStoreURL: Y, strCommunityURL: ee, strForumURL: ye } = u(b, T),
            M = (0, D.Y2)(),
            ge =
              D.TS.STORE_BASE_URL +
              "feeds/" +
              (0, C.LJ)() +
              (b ? "/app/" + b : "/group/" + T) +
              "/?cc=" +
              D.TS.COUNTRY +
              "&l=" +
              D.TS.LANGUAGE,
            { data: U } = (0, I.hM)(T),
            ae = !!(U?.can_edit || U?.support_user),
            ve = k.Fm.Get().BOwnsApp(b),
            Ee = (0, t.useMemo)(() => {
              const Le = [];
              return (
                D.TS.IN_CLIENT &&
                  ve &&
                  Le.push({
                    label: (0, w.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + b,
                  }),
                Le.push({
                  label: (0, w.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, h.k2)(Y),
                }),
                M ||
                  (Le.push({
                    label: (0, w.we)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, h.k2)(ee),
                  }),
                  ye &&
                    Le.push({
                      label: (0, w.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, h.k2)(ye),
                    }),
                  J &&
                    Le.push({
                      label: (0, n.jsxs)("div", {
                        className: o().RssRow,
                        children: [
                          (0, n.jsx)(P.ZPc, {}),
                          (0, w.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: ge,
                    })),
                ae &&
                  Le.push({
                    label: (0, w.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, C.Hx)(b, v.b.InitFromClanID(T), "admin"),
                  }),
                Le
              );
            }, [ve, Y, M, ae, ee, ye, J, ge, b, T]);
          return (0, n.jsx)(N.m, {
            strDefaultLabel: (0, w.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: o().AppBannerLinkDD,
            strDropDownButtonClassName: o().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: o().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: o().DDButtonArrow,
            rgOptions: Ee,
            onChange: (Le, Re, Ne) => (0, q.EP)(Ne, Le.data),
          });
        }
        const Q = (0, s.PA)((B) => {
          const { appId: b, clanId: T } = B,
            {
              strCapsuleUrl: J,
              strGroupTitle: Y,
              strExtraBannerGroupStyle: ee,
            } = u(b, T),
            ye = (0, t.useMemo)(
              () => (b ? { appid: b } : { creatorid: T }),
              [b, T],
            ),
            { data: M } = (0, a.J$)(ye),
            ge = k.Fm.Get().BOwnsApp(b);
          return (0, n.jsx)(te, {
            appId: b,
            clanId: T,
            strCapsuleUrl: J,
            strGroupTitle: Y,
            strExtraBannerGroupStyle: ee,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!ge && b) &&
                  (0, n.jsx)("div", {
                    className: o().HeaderWishlistButton,
                    children: (0, n.jsx)(c._, {
                      appid: b,
                      bIsFree: !!M?.is_free,
                      bIsComingSoon: !!M?.is_coming_soon,
                      className: (0, A.A)(
                        o().ActionButton,
                        o().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: o().HeaderFollowButton,
                  children: b
                    ? (0, n.jsx)(K.do, {
                        appid: b,
                        className: o().HeaderButtonDark,
                      })
                    : (0, n.jsx)(K.of, {
                        clanAccountID: T,
                        className: o().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(E, { ...B }),
              ],
            }),
          });
        });
      },
      91424: (fe, de, r) => {
        "use strict";
        r.d(de, { H: () => D, Y: () => h });
        var n = r(7850),
          I = r(75844),
          a = r(90626),
          s = r(53025),
          t = r(77495),
          v = r(58483),
          L = r(82385),
          k = r(88003),
          F = r(30096),
          N = r(19332),
          P = r.n(N),
          q = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          A = (f, o, p, S) => {
            for (
              var V = S > 1 ? void 0 : S ? z(o, p) : o, te = f.length - 1, se;
              te >= 0;
              te--
            )
              (se = f[te]) && (V = (S ? se(o, p, V) : se(V)) || V);
            return S && V && q(o, p, V), V;
          };
        function w(f) {
          const { event: o, closeModal: p } = f,
            S = (0, v.LJ)();
          return (0, n.jsx)(L.AD, {
            initialEvent: o,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: t.O3,
            emoticonStore: S,
            showAppHeader: !0,
            closeModal: p,
          });
        }
        function h(f, o) {
          (0, k.pg)((0, n.jsx)(w, { event: f }), o);
        }
        let D = class extends a.Component {
          m_refFocus = a.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(f) {
            const { fnClose: o } = this.props;
            f.keyCode === 27 && o && o();
          }
          OnBackgroundClick(f) {
            f.currentTarget == f.target && this.props.fnClose();
          }
          render() {
            const { event: f, langOverride: o, isPreview: p } = this.props;
            return (0, n.jsx)("div", {
              ref: this.m_refFocus,
              className: N.Main,
              onClick: this.OnBackgroundClick,
              children: (0, n.jsx)(v.sU, {
                children: (S) =>
                  (0, n.jsx)(
                    L.He,
                    {
                      event: f,
                      emoticonStore: S,
                      partnerEventStore: s.$.Get(),
                      langOverride: o,
                      isPreview: p,
                      bDisableBroadcastPlayer: !1,
                    },
                    f.GID,
                  ),
              }),
            });
          }
        };
        A([F.oI], D.prototype, "escFunction", 1),
          A([F.oI], D.prototype, "OnBackgroundClick", 1),
          (D = A([I.PA], D));
      },
      31117: (fe, de, r) => {
        "use strict";
        r.d(de, { W: () => Re, F: () => Ne });
        var n = r(7850),
          I = r(19298),
          a = r(65946),
          s = r(813),
          t = r(41735),
          v = r.n(t),
          L = r(14947),
          k = r(72604),
          F = r(34592),
          N = r(3166),
          P = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          z = (Pe, we, H, ue) => {
            for (
              var G = ue > 1 ? void 0 : ue ? q(we, H) : we,
                me = Pe.length - 1,
                re;
              me >= 0;
              me--
            )
              (re = Pe[me]) && (G = (ue ? re(we, H, G) : re(G)) || G);
            return ue && G && P(we, H, G), G;
          };
        const A = class Jt {
          constructor() {
            (0, L.Gn)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              Jt.s_EventRepost ||
                ((Jt.s_EventRepost = new Jt()), Jt.s_EventRepost.Initialize()),
              Jt.s_EventRepost
            );
          }
          static ValidateRepostData(we) {
            const H = we;
            return H &&
              H.repost_clan_account_ids &&
              Array.isArray(H.repost_clan_account_ids) &&
              H.repost_clan_account_ids.length > 0
              ? typeof H.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let we = (0, N.Tc)("repostcontrols", "application_config");
              Jt.ValidateRepostData(we) &&
                we.repost_clan_account_ids.forEach((H) =>
                  this.m_mapClanReposted.add(H),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(we, H, ue) {
            if (this.m_mapSourceEventGIDToPostedClans.has(H))
              return this.m_mapSourceEventGIDToPostedClans.get(H);
            const G = N.TS.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              me = {
                sessionid: (0, N.KC)(),
                source_clan_accountid: we.GetAccountID(),
                source_event_gid: H,
              };
            try {
              const re = await v().get(G, {
                params: me,
                withCredentials: !0,
                cancelToken: ue?.token,
              });
              if (re?.data?.success == k.R)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    H,
                    re.data.repost_clan_accountid || [],
                  ),
                  re.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  re?.data?.success +
                  " and msg: " +
                  re?.data?.msg,
              );
            } catch (re) {
              const be = (0, F.H)(re);
              console.error(
                "GetRepostClanAccountID: fail repost with " + be.strErrorMsg,
                be,
              );
            }
            return new Array();
          }
          async RepostEvent(we, H, ue, G, me) {
            const re = N.TS.STORE_BASE_URL + "events/ajaxrepostevent",
              be = new FormData();
            be.append("sessionid", (0, N.KC)()),
              be.append("source_clan_accountid", "" + we.GetAccountID()),
              be.append("source_event_gid", "" + H),
              be.append("repost_clan_accountid", "" + ue.GetAccountID()),
              be.append("add", "" + G);
            try {
              let Se = await v().post(re, be, {
                withCredentials: !0,
                cancelToken: me?.token,
              });
              if (Se?.data?.success == k.R && Se.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(H) ||
                  this.m_mapSourceEventGIDToPostedClans.set(H, []);
                const ne = this.m_mapSourceEventGIDToPostedClans
                  .get(H)
                  .findIndex((oe) => ue.GetAccountID() == oe);
                return (
                  G && ne == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(H)
                        .push(ue.GetAccountID())
                    : !G &&
                      ne !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans
                        .get(H)
                        .splice(ne, 1),
                  Se.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    Se?.data?.success +
                    " and msg: " +
                    Se?.data?.msg,
                );
            } catch (Se) {
              const ne = (0, F.H)(Se);
              console.error(
                "RepostEvent: fail repost with " + ne.strErrorMsg,
                ne,
              );
            }
            return null;
          }
        };
        z([L.sH], A.prototype, "m_mapClanReposted", 2);
        let w = A;
        var h = r(95695),
          D = r.n(h),
          f = r(47875),
          o = r(88003),
          p = r(36707),
          S = r(82734),
          V = r(18210),
          te = r(13854),
          se = r(53113),
          C = r(96538),
          K = r(14256),
          c = r.n(K),
          u = r(64868),
          g = r(36118),
          E = r(56492),
          Q = r(91778);
        function B(Pe) {
          const { eventModel: we, emoticonStore: H } = Pe,
            [ue, G, me] = (0, u.uD)(),
            re = (0, E.T7)(we);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(I.Z, {
                focusable: !0,
                className: (0, p.A)(D().Button, D().Icon, c().DiscussionButton),
                onActivate: G,
                children: [
                  (0, n.jsx)(g.SYj, { className: c().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: c().DiscussionButtonText,
                    children: (0, V.we)("#Button_Share"),
                  }),
                ],
              }),
              (0, n.jsx)(Q.k, {
                eventModel: we,
                strEventLink: re ?? "",
                bActive: ue,
                closeModal: me,
                emoticonStore: H,
              }),
            ],
          });
        }
        var b = r(68988),
          T = r(85385),
          J = r(75844),
          Y = r(90626),
          ee = r(76559),
          ye = r(16412),
          M = r(25792),
          ge = r(85599);
        const U = (0, J.PA)((Pe) => {
          const { eventModel: we } = Pe,
            [H, ue] = (0, Y.useState)(!0),
            [G, me] = (0, Y.useState)(new Set()),
            [re, be] = (0, Y.useState)(new Set()),
            [Se, ne] = (0, Y.useState)(new Set()),
            [oe, xe] = (0, Y.useState)(null),
            [je, Te] = (0, Y.useState)(null),
            Ge = (0, Y.useRef)(null);
          (0, Y.useEffect)(
            () => (
              H &&
                (async () => {
                  const Fe = v().CancelToken.source();
                  Ge.current = Fe.cancel;
                  const W = w
                    .Get()
                    .LoadClansAlreadyRepostedTo(we.clanSteamID, we.GID, Fe);
                  W.then((he) => {
                    const Me = new Set();
                    he.forEach((Je) => Me.add(Je)), me(Me);
                  });
                  let _ = new Array();
                  _.push(W),
                    w
                      .Get()
                      .GetRepostClanAccountID()
                      .forEach((he) => {
                        const Me = ee.b.InitFromClanID(he);
                        _.push(s.ac.LoadClanInfoForClanSteamID(Me));
                      }),
                    await Promise.all(_),
                    ue(!1);
                })(),
              () => Ge.current && Ge.current()
            ),
            [H, we.GID, we.clanSteamID],
          );
          const ke = new Array();
          return (
            w
              .Get()
              .GetRepostClanAccountID()
              .forEach((ze) => {
                const Fe = s.ac.GetClanInfoByClanAccountID(ze);
                if (Fe && ze != we.clanSteamID.GetAccountID()) {
                  const W = G.has(ze),
                    _ = re.has(ze) || (W && !Se.has(ze));
                  ke.push(
                    (0, n.jsx)(
                      ye.Yh,
                      {
                        label: W
                          ? (0, V.we)(
                              "#EventRepost_Dialog_Existing",
                              Fe.group_name,
                            )
                          : Fe.group_name,
                        checked: _,
                        disabled: oe !== null,
                        onChange: (he) => {
                          G.has(ze)
                            ? (he ? Se.delete(ze) : Se.add(ze), ne(new Set(Se)))
                            : (he ? re.add(ze) : re.delete(ze),
                              be(new Set(re)));
                        },
                      },
                      "checkbox" + ze,
                    ),
                  );
                }
              }),
            (0, n.jsx)(M.tH, {
              children: (0, n.jsx)(C.x_, {
                onEscKeypress: () => Pe.closeModal && Pe.closeModal(),
                children: (0, n.jsxs)(ye.UC, {
                  children: [
                    (0, n.jsx)(ye.Y9, {
                      children: (0, V.we)("#EventRepost_Dialog_Title"),
                    }),
                    (0, n.jsxs)(ye.nB, {
                      children: [
                        (0, n.jsx)(ye.a3, {
                          children: (0, V.we)("#EventRepost_Dialog_Desc"),
                        }),
                        H
                          ? (0, n.jsx)(ge.t, { string: (0, V.we)("#Loading") })
                          : (0, n.jsx)("div", { children: ke }),
                        !!(re.size || Se.size) &&
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("span", {
                                children: (0, V.we)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, n.jsxs)("ul", {
                                children: [
                                  !!re.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, V.we)(
                                        "#EventRepost_Dialog_Action_Add",
                                        re.size,
                                      ),
                                    }),
                                  !!Se.size &&
                                    (0, n.jsx)("li", {
                                      children: (0, V.we)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        Se.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!oe && (0, n.jsx)("div", { children: oe }),
                        !!je && (0, n.jsx)("div", { children: je }),
                      ],
                    }),
                    (0, n.jsx)(ye.wi, {
                      children: (0, n.jsx)(ye.CB, {
                        onCancel: () => Pe.closeModal && Pe.closeModal(),
                        strOKText: (0, V.we)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (re.size == 0 && Se.size == 0) ||
                          oe !== null ||
                          je !== null,
                        onOK: async () => {
                          Ge.current && Ge.current();
                          const ze = v().CancelToken.source();
                          Ge.current = ze.cancel;
                          const Fe = re.size + Se.size;
                          let W = 1;
                          xe((0, V.we)("#EventRepost_Dialog_Progress", W, Fe));
                          for (const _ of Array.from(re)) {
                            const he = ee.b.InitFromClanID(_);
                            if (
                              await w
                                .Get()
                                .RepostEvent(we.clanSteamID, we.GID, he, !0, ze)
                            )
                              xe(
                                (0, V.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++W,
                                  Fe,
                                ),
                              );
                            else {
                              Te((0, V.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const _ of Array.from(Se)) {
                            const he = ee.b.InitFromClanID(_);
                            if (
                              await w
                                .Get()
                                .RepostEvent(we.clanSteamID, we.GID, he, !1, ze)
                            )
                              xe(
                                (0, V.we)(
                                  "#EventRepost_Dialog_Progress",
                                  ++W,
                                  Fe,
                                ),
                              );
                            else {
                              Te((0, V.we)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          Te((0, V.we)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var ae = r(24660),
          ve = r(19730);
        function Ee(Pe) {
          const {
            nVoteCount: we,
            nCommentCount: H,
            myVote: ue,
            onVote: G,
            strDiscussionURL: me,
            onDiscussionUnavailable: re,
            bShowDiscussion: be,
            repost: Se,
            share: ne,
          } = Pe;
          return (0, n.jsxs)(I.Z, {
            className: c().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: c().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: c().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: c().VoteCount,
                        children: [
                          (0, n.jsx)(g.bfp, {
                            className: c().VoteUpStaticIcon,
                          }),
                          (0, ve.Dq)(we),
                        ],
                      }),
                      (0, n.jsxs)(I.Z, {
                        focusable: !0,
                        className: (0, p.A)(
                          D().Button,
                          D().Icon,
                          c().DiscussionButton,
                          ue == "up" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => G("up"),
                        children: [
                          (0, n.jsx)(g.bfp, {
                            className:
                              ue == "up"
                                ? c().VoteUpSelectedIcon
                                : c().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: c().DiscussionButtonText,
                            children: (0, V.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(I.Z, {
                        focusable: !0,
                        className: (0, p.A)(
                          D().Button,
                          D().Icon,
                          c().DiscussionButton,
                          ue == "down" ? c().VoteButtonSelected : "",
                        ),
                        onActivate: () => G("down"),
                        "aria-label": (0, V.we)("#Button_RateDown"),
                        children: (0, n.jsx)(g.bfp, {
                          className:
                            ue == "down"
                              ? c().VoteDownSelectedIcon
                              : c().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  be &&
                    (0, n.jsx)(Le, {
                      commentCount: H,
                      discussionURL: me,
                      gotoDiscussion: re,
                    }),
                  Se,
                ],
              }),
              ne &&
                (0, n.jsx)("div", {
                  className: c().ShareContainer,
                  children: ne,
                }),
            ],
          });
        }
        function Le(Pe) {
          const { commentCount: we, discussionURL: H, gotoDiscussion: ue } = Pe;
          return (0, n.jsxs)("div", {
            className: c().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: c().DiscussionCount,
                children: [(0, n.jsx)(g.ROZ, {}), (0, ve.Dq)(we)],
              }),
              H &&
                (0, n.jsx)(ae.Ii, {
                  href: (0, se.k2)(H),
                  children: (0, n.jsxs)("div", {
                    className: (0, p.A)(
                      D().Button,
                      D().Icon,
                      c().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(g.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: c().DiscussionButtonText,
                        children: (0, V.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !H &&
                (0, n.jsxs)(I.Z, {
                  focusable: !0,
                  onActivate: ue,
                  className: (0, p.A)(
                    D().Button,
                    D().Icon,
                    c().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(g.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: c().DiscussionButtonText,
                      children: (0, V.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Re() {
          return N.iA.logged_in
            ? N.iA.is_limited
              ? ((0, o.pg)((0, n.jsx)(T.g, {}), window), !1)
              : !0
            : (N.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, o.pg)(
                    (0, n.jsx)(C.o0, {
                      strTitle: (0, V.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, V.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, V.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, f.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function Ne(Pe) {
          const { eventModel: we, emoticonStore: H } = Pe,
            ue = (0, N.Qn)(),
            { myVote: G, Vote: me } = (0, b.C)(we),
            re = (ze) => {
              Re() && G !== void 0 && me(ze);
            },
            [, be] = (0, s.TB)(we.clanSteamID.GetAccountID()),
            Se = (ze) => {
              (0, o.pg)(
                (0, n.jsx)(C.KG, {
                  strDescription: (0, V.we)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, S.uX)(ze),
              );
            },
            ne = (ze) => {
              (0, o.pg)((0, n.jsx)(U, { eventModel: we }), (0, S.uX)(ze));
            },
            [oe, xe, je, Te] = (0, a.q3)(() => [
              (0, te.OQ)(
                we.nVotesUp - we.nVotesDown,
                0,
                Number.MAX_SAFE_INTEGER,
              ),
              (0, se.NT)(we.GetDiscussionURL(be?.vanity_url)),
              we.BIsUnlistedEvent(),
              we.nCommentCount,
            ]),
            Ge = (0, N.Y2)(),
            ke = N.iA.logged_in && w.Get().BCanRepostPartnerEvent();
          return (0, n.jsx)(Ee, {
            nVoteCount: oe,
            nCommentCount: Te,
            myVote: G ?? void 0,
            onVote: re,
            strDiscussionURL: xe,
            onDiscussionUnavailable: Se,
            bShowDiscussion: !Ge && !je,
            repost:
              ke &&
              (0, n.jsx)("div", {
                className: c().VoteContainer,
                children: (0, n.jsx)(I.Z, {
                  focusable: !0,
                  className: (0, p.A)(
                    D().Button,
                    D().Icon,
                    c().DiscussionButton,
                    G == "down" ? c().VoteButtonSelected : "",
                  ),
                  onActivate: ne,
                  children: (0, V.we)("#EventRepost_Dialog_Title"),
                }),
              }),
            share: !ue && (0, n.jsx)(B, { eventModel: we, emoticonStore: H }),
          });
        }
      },
      94520: (fe, de, r) => {
        "use strict";
        r.d(de, { zj: () => Tn, d3: () => pt.d3, fh: () => wr });
        var n = r(7850),
          I = r(5191),
          a = r(70187),
          s = r(39256),
          t = r(18210),
          v = r(39654);
        function L(m) {
          const { MissingEventFallback: l } = m,
            { event: d, showErrorInfo: y } = m.context,
            x = (0, a.j$)(m.args),
            R = !!x && x != d?.GID,
            { data: le, isPending: ce } = (0, v.vE)(
              R && d
                ? { clanAccountID: d.clanSteamID.GetAccountID(), eventGID: x }
                : void 0,
            );
          if (!R)
            return d
              ? (0, n.jsx)(I.j, { eventModel: d, lang: m.language })
              : null;
          if (d) {
            if (le)
              return (0, n.jsx)(I.j, { eventModel: le, lang: m.language });
            if (ce) return null;
          }
          return l
            ? (0, n.jsx)(l, {
                eventGID: x,
                lang: m.language,
                bShowErrorInfo: !!y,
              })
            : y
              ? (0, n.jsx)(k, { eventGID: x })
              : null;
        }
        function k({ eventGID: m }) {
          return (0, n.jsx)("div", {
            className: s.ErrorDiv,
            children: (0, t.we)("#EventDidplay_Reminder_EventNotVisible", m),
          });
        }
        function F(m) {
          return /\[remindme\b/i.test(m);
        }
        function N(m) {
          const l = new Set();
          for (const d of m.matchAll(/\[remindme=(\d+)\]/gi)) l.add(d[1]);
          return [...l];
        }
        var P = r(48421);
        const q = new Map([["remindme", { Constructor: z, autocloses: !1 }]]);
        function z(m) {
          return (0, n.jsx)(L, { ...m, MissingEventFallback: A });
        }
        function A({ eventGID: m, lang: l, bShowErrorInfo: d }) {
          const y = (0, P.RR)(m);
          return y
            ? (0, n.jsx)(I.j, { eventModel: y, lang: l })
            : d
              ? (0, n.jsx)(k, { eventGID: m })
              : null;
        }
        var w = r(64868),
          h = r(72609),
          D = r(11587),
          f = r(89926),
          o = r(90626),
          p = r(16412),
          S = r(96538),
          V = r(69168),
          te = r(85599);
        function se(m) {
          if (m === "GameAwardDrop2022") {
            const l = (0, D.h3)(m),
              d = (0, D.Qg)();
            return l
              ? l.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: l.eligible,
                    bFailedState: !l.eligible,
                    fnAction: l.eligible
                      ? void 0
                      : async () => {
                          await d.fnCreateRegistration(m);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await d.fnCreateRegistration(m);
                    },
                  }
              : { bInitialState: !0 };
          }
          return { bInitialState: !0 };
        }
        function C(m) {
          const l = (0, a.j$)(m.args, "action"),
            d = (0, a.j$)(m.args, "initialToken"),
            y = (0, a.j$)(m.args, "successToken"),
            x = (0, a.j$)(m.args, "failToken"),
            R = se(l),
            { elDialogElement: le, fnShowLogonDialog: ce } = (0, f.l)(),
            [Ke, Xe, rt] = (0, w.uD)();
          return !l || !d || !y || !x
            ? m.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !h.iA.logged_in && l != "test" && l != "nologinrequired"
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(p.$n, {
                      className: "CSSActionDialogButton",
                      onClick: ce,
                      children: (0, t.we)("#Login_SignIn"),
                    }),
                    le,
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(p.$n, {
                      className: "CSSActionDialogButton",
                      onClick: Xe,
                      children: [
                        !!R.bInitialState && (0, t.we)(d),
                        !!R.bSuccessState && (0, t.we)(y),
                        !!R.bFailedState && (0, t.we)(x),
                      ],
                    }),
                    (0, n.jsx)(V.E, {
                      active: Ke,
                      children: (0, n.jsx)(K, {
                        strAction: l,
                        strInitialToken: d,
                        strSuccessToken: y,
                        strFailToken: x,
                        closeModal: rt,
                        children: m.children,
                      }),
                    }),
                  ],
                });
        }
        function K(m) {
          const {
              strAction: l,
              children: d,
              closeModal: y,
              strInitialToken: x,
              strSuccessToken: R,
              strFailToken: le,
            } = m,
            ce = se(l),
            [Ke, Xe] = o.useState(!!ce.fnAction),
            rt = o.useRef(!1);
          o.useEffect(() => {
            !ce.fnAction ||
              rt.current ||
              ((rt.current = !0), Xe(!0), ce.fnAction().finally(() => Xe(!1)));
          }, [ce]);
          const Ze = o.useId();
          return (0, n.jsxs)(S.eV, {
            bDisableBackgroundDismiss: !0,
            closeModal: y,
            onCancel: y,
            className: "CSSActionDialogDialog",
            "aria-labelledby": Ze,
            children: [
              (0, n.jsxs)(p.Y9, {
                id: Ze,
                children: [
                  !!ce.bInitialState && (0, t.we)(x),
                  !!ce.bSuccessState && (0, t.we)(R),
                  !!ce.bFailedState && (0, t.we)(le),
                ],
              }),
              (0, n.jsx)(p.nB, {
                children: (0, n.jsx)(p.a3, {
                  children: Ke
                    ? (0, n.jsx)(te.t, {
                        size: "medium",
                        position: "center",
                        string: (0, t.we)("#Loading"),
                      })
                    : d,
                }),
              }),
            ],
          });
        }
        var c = r(23386),
          u = r(92799);
        function g(m) {
          const l = !!m.context.showErrorInfo,
            { elDialogElement: d, fnShowLogonDialog: y } = (0, f.l)();
          if (!h.iA.logged_in)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(p.$n, {
                  onClick: y,
                  className: "CSSClaimItemLoginButton",
                  children: (0, t.we)("#Sale_ClaimableReward_Login"),
                }),
                d,
              ],
            });
          const x = (0, a.j$)(m.args, "type");
          let R;
          if (x)
            switch (x) {
              case "profilemodifier":
                R = c.jE;
                break;
              case "sticker":
                R = c.Ed;
                break;
            }
          return (0, n.jsx)(u.m, { bPreviewMode: l, rewardType: R });
        }
        function E(m) {
          return /\[claimitem\b/i.test(m);
        }
        function Q(m) {
          const l = (0, a.j$)(m.args, "name"),
            d =
              ((0, a.j$)(m.args, "visible") || "false").toLowerCase() ===
              "true",
            y = (0, D.h3)(l);
          return l
            ? !y || !y.registered
              ? null
              : (y.eligible && d) || (!y.eligible && !d)
                ? (0, n.jsx)(n.Fragment, { children: m.children })
                : null
            : m.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        const B = /\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function b(m) {
          const l = new Set();
          for (const d of m.matchAll(/\[giveawayeligible\b([^\]]*)\]/gi)) {
            const y = B.exec(d[1] ?? ""),
              x = y?.[1] ?? y?.[2] ?? y?.[3];
            x && l.add(x);
          }
          return Array.from(l);
        }
        var T = r(99412),
          J = r(86048);
        function Y(m, l) {
          const d = o.useCallback(
            (y) => {
              y.preventDefault(), (y.returnValue = l);
            },
            [l],
          );
          (0, J.l6)(window, "beforeunload", m ? d : void 0),
            o.useEffect(() => {
              if (!m || !window.navigation) return;
              const y = (x) => {
                (x.navigationType != "push" &&
                  x.navigationType != "traverse") ||
                  x.hashChange ||
                  x.downloadRequest !== null ||
                  !x.cancelable ||
                  window.confirm(l) ||
                  x.preventDefault();
              };
              return (
                window.navigation.addEventListener("navigate", y),
                () => window.navigation.removeEventListener("navigate", y)
              );
            }, [m, l]);
        }
        var ee = r(65946),
          ye = r(87937),
          M = r.n(ye),
          ge = r(91354),
          U = r(69909),
          ae = r(72604),
          ve = r(16936),
          Ee = r(80902),
          Le = r(75233),
          Re = r(51614),
          Ne = r(16369);
        const Pe = 0,
          we = 1,
          H = 2,
          ue = 3,
          G = new Map(),
          me = "",
          re = 0;
        function be(m, l) {
          return ["MeetSteamRegistrations", m, l];
        }
        function Se(m, l) {
          return ["MeetSteamSelections", m, l];
        }
        function ne(m) {
          return {
            queryKey: be(m?.gidClanEvent ?? me, m?.userAccountID ?? re),
            queryFn: async () => {
              if (!m) return G;
              const l = await (0, ve._V)(m.gidClanEvent),
                d = new Map();
              return (
                l.forEach((y) => {
                  const x = {
                    ...y,
                    regmodel: y.jsondata ? JSON.parse(y.jsondata) : void 0,
                  };
                  x.group_id === void 0 ||
                    x.session_id === void 0 ||
                    d.set(x.group_id, x);
                }),
                d
              );
            },
            enabled:
              !!m && (0, Ne.H)() == m?.clanAccountID && !!m?.userAccountID,
          };
        }
        function oe(m, l) {
          return {
            queryKey: Se(m, l),
            queryFn: () => null,
            initialData: null,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        const xe = o.createContext(void 0);
        function je(m) {
          const {
              clanAccountID: l,
              gidClanEvent: d,
              userAccountID: y,
              children: x,
            } = m,
            R = o.useMemo(
              () => ({ clanAccountID: l, gidClanEvent: d, userAccountID: y }),
              [l, d, y],
            );
          return (0, n.jsx)(xe.Provider, { value: R, children: x });
        }
        function Te() {
          const m = o.useContext(xe),
            l = (0, Ee.I)(ne(m)),
            d = (0, Ee.I)(oe(m?.gidClanEvent ?? me, m?.userAccountID ?? re)),
            y = l.data ?? G;
          return o.useMemo(
            () => ({
              registrations: y,
              selections: d.data ?? Ge(y),
              bLoading: l.isFetching,
            }),
            [y, d.data, l.isFetching],
          );
        }
        function Ge(m) {
          const l = new Map();
          return (
            m.forEach((d, y) => {
              d.session_id !== void 0 && l.set(y, d.session_id);
            }),
            l
          );
        }
        function ke(m, l) {
          return l === void 0 ? void 0 : m.selections.get(l);
        }
        function ze(m) {
          return Array.from(m.selections.keys());
        }
        function Fe(m, l, d) {
          if (l === void 0 || d === void 0) return Pe;
          const y = m.registrations.get(l)?.session_id == d,
            x = m.selections.get(l) == d;
          return y && x ? we : !y && x ? H : y && !x ? ue : Pe;
        }
        function W(m, l, d) {
          if (l === void 0 || d === void 0) return !1;
          const y = !!m.registrations.get(l),
            x = m.selections.get(l) == d,
            R = m.registrations.get(l)?.session_id == m.selections.get(l);
          return y && !x && R;
        }
        function _(m, l) {
          return l === void 0 ? void 0 : m.registrations.get(l)?.session_id;
        }
        function he(m) {
          return m.selections.size == 0 && m.registrations.size == 0
            ? !1
            : m.selections.size != m.registrations.size ||
                !Array.from(m.selections.entries()).every(
                  (l) => m.registrations.get(l[0])?.session_id == l[1],
                );
        }
        function Me(m) {
          return Array.from(m.selections.entries()).some((l) => {
            const d = m.registrations.get(l[0]);
            return !d || d.session_id != l[1];
          });
        }
        function Je(m) {
          return m.registrations.size > 0;
        }
        function $e() {
          return Te().bLoading;
        }
        function O() {
          return he(Te());
        }
        function $() {
          return Je(Te());
        }
        function pe(m, l) {
          const d = Te();
          return De(d, m, l);
        }
        function Ie(m, l) {
          const d = Te();
          return De(
            d,
            m.filter((y) => !!y.ask_registration_question),
            l,
          );
        }
        function De(m, l, d) {
          return l
            .filter((y) => y.sessions.some((x) => Fe(m, y.group_id, x.id) == d))
            .map((y) => y.group_id)
            .filter((y) => y !== void 0);
        }
        function Qe(m, l, d, y) {
          d !== void 0 &&
            m.setQueryData(Se(l.gidClanEvent, l.userAccountID), (x) => {
              const R =
                  m.getQueryData(be(l.gidClanEvent, l.userAccountID)) ?? G,
                le = new Map(x ?? Ge(R));
              return y !== void 0 && y > 0 ? le.set(d, y) : le.delete(d), le;
            });
        }
        function Ce() {
          const m = o.useContext(xe),
            l = (0, Le.jE)(),
            d = Te();
          return o.useCallback(
            (y, x) => {
              if (!m) return;
              const R = ke(d, y) == x;
              Qe(l, m, y, R ? void 0 : x);
            },
            [m, l, d],
          );
        }
        function ut() {
          const m = o.useContext(xe),
            l = (0, Le.jE)(),
            d = Te(),
            { mutateAsync: y } = (0, Re.n)({
              mutationFn: async (x) => {
                if (!m) return !1;
                const R = Object.fromEntries(
                    Object.entries(x).filter(
                      ([Ke]) => !Ke.startsWith("registration_emailed_"),
                    ),
                  ),
                  le = [];
                for (const [Ke, Xe] of d.selections)
                  le.push({
                    gid: m.gidClanEvent,
                    group_id: Ke,
                    session_id: Xe,
                    guest_count: x.guests_registered ?? 1,
                    jsondata: JSON.stringify(R),
                    skip_email: !1,
                  });
                for (const Ke of d.registrations.keys())
                  d.selections.has(Ke) ||
                    le.push({
                      gid: m.gidClanEvent,
                      group_id: Ke,
                      session_id: 0,
                      guest_count: 0,
                      jsondata: JSON.stringify({}),
                      skip_email: !1,
                    });
                let ce = !0;
                for (let Ke = 0; Ke < le.length; Ke++) {
                  const Xe = await (0, ve.kR)({
                    ...le[Ke],
                    skip_email: Ke != le.length - 1,
                  });
                  ce = ce && Xe == ae.R;
                }
                return (
                  l.setQueryData(Se(m.gidClanEvent, m.userAccountID), null),
                  await l.invalidateQueries({
                    queryKey: be(m.gidClanEvent, m.userAccountID),
                  }),
                  ce
                );
              },
            });
          return y;
        }
        var tt = r(71421),
          Mt = r(36707),
          et = r(92264),
          lt = r(36631),
          yt = r(84346),
          Wt = r(54357);
        const ht =
            /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
          ct = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
        function qe(m) {
          const l = [];
          for (const d of m.matchAll(ht))
            l.push({
              strTag: d[1].toLowerCase(),
              nID: Number(ct.exec(d[2])?.[1] ?? 0),
            });
          return l;
        }
        function st(m) {
          return qe(m).length > 0;
        }
        function at(m, l) {
          return m === void 0
            ? !0
            : qe(m).find((y) => y.strTag == "meetsteamsessiongroup")?.nID == l;
        }
        function dt(m, l, d) {
          if (m === void 0) return !0;
          const y = qe(m),
            x = y[y.length - 1];
          return x?.strTag == l && x.nID == d;
        }
        const Et = o.createContext(null);
        function It(m) {
          return jsx(Et.Provider, {
            value: m.nVisibilityID ?? null,
            children: m.children,
          });
        }
        function bt() {
          return o.useContext(Et);
        }
        var pt = r(1683),
          Rt = r(93507),
          Ve = r.n(Rt),
          Gt = r(41635);
        const xt = [];
        function kt(m) {
          const {
              eventModel: l,
              fnConfirm: d,
              fnHideModal: y,
              nMaxPerTeam: x,
              bAddingOrChangingSessions: R,
            } = m,
            le = (0, T.sfN)(h.TS.LANGUAGE),
            [ce, Ke] = o.useState({}),
            [Xe, rt] = o.useState(!1),
            Ze = o.useCallback(
              (ft) => {
                Ke({ ...ce, ...ft });
              },
              [ce],
            ),
            gt = (0, U.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              h.iA.accountid,
            ),
            { data: Ft } = (0, U.ee)(h.iA.accountid),
            Lt = Ft?.realname ?? "",
            vt = Ft?.email ?? "",
            ot = Ft?.partners ?? xt,
            [At, zt] = o.useState(void 0),
            [mt, Pt] = o.useState(void 0),
            Ht = o.useMemo(() => {
              const ft = [];
              return (
                mt == null &&
                  ft.push({
                    data: void 0,
                    label: (0, t.we)("#MeetSteam_ChoosePartner"),
                  }),
                ft.push(
                  ...ot.map((Ot, Qt) => ({
                    data: Ot.partnerid,
                    label: Ot.partner_name,
                  })),
                ),
                ft.push({
                  data: 0,
                  label: (0, t.we)("#MeetSteam_ChoosePartnerOther"),
                }),
                ft
              );
            }, [ot, mt]);
          o.useEffect(() => {
            if (!gt.isSuccess) return;
            const ft = ot.find((Qt) => Qt.partnerid == gt.data.partner_id),
              Ot = gt.data.partner_id === 0 ? 0 : ft?.partnerid;
            Pt(Ot), zt(Ot), Ke(gt.data);
          }, [gt.isSuccess, gt.data, ot]);
          const Bt = ot?.length > 0,
            Ut = !Bt || mt != null,
            $t = Ut && mt === 0;
          o.useEffect(() => {
            if (mt == At || (zt(mt), !Bt || !Ut)) return;
            let ft;
            const Ot = ot.find((Qt) => Qt.partnerid == mt);
            $t || !Ot
              ? (ft = {
                  name: vt?.length > 0 ? Lt : void 0,
                  email_override: vt?.length > 0 ? vt : void 0,
                  partner_id: 0,
                })
              : (ft = {
                  name:
                    Ot.partneruserrealname?.length > 0
                      ? Ot.partneruserrealname
                      : void 0,
                  company:
                    Ot.partner_name?.length > 0 ? Ot.partner_name : void 0,
                  email_override:
                    Ot.partneruseremail?.length > 0
                      ? Ot.partneruseremail
                      : void 0,
                  partner_id: Ot.partnerid,
                }),
              Object.values(ft).some((Qt) => Qt != null) && Ze(St(ft));
          }, [Ut, $t, Bt, mt, At, ot, vt, Lt, Ze]);
          const mn = gt.isLoading || Xe,
            Fn = R
              ? (0, t.we)(
                  "#MeetSteam_Register_title",
                  l.GetNameWithFallback(le) ?? "",
                )
              : (0, t.we)("#MeetSteam_Unregister_title"),
            Ln =
              !R ||
              (Ut &&
                !!ce.name &&
                (!ce.guest_names ||
                  ce.guest_names.every((ft) => ft.length > 0)) &&
                !!ce.email_override &&
                !!ce.company);
          return (0, n.jsxs)(S.EN, {
            active: !0,
            children: [
              mn &&
                (0, n.jsx)(S.eV, {
                  "aria-label": Xe
                    ? (0, t.we)("#Saving")
                    : (0, t.we)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, n.jsx)(te.t, {
                    size: "medium",
                    position: "center",
                    string: Xe ? (0, t.we)("#Saving") : (0, t.we)("#Loading"),
                  }),
                }),
              !mn &&
                (0, n.jsx)(S.o0, {
                  strTitle: Fn,
                  onCancel: y,
                  bOKDisabled: !Ln,
                  onOK: async () => {
                    rt(!0), await d(ce), rt(!1), gt.refetch(), y();
                  },
                  children:
                    R &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, t.we)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, n.jsx)("br", {}),
                        Bt &&
                          (0, n.jsx)(p.m, {
                            label: (0, t.we)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, t.we)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: Ht,
                            selectedOption: mt,
                            onChange: (ft) => Pt(ft.data),
                          }),
                        Ut &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Name"),
                                value: ce.name || "",
                                onChange: (ft) =>
                                  Ze({ name: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Email"),
                                value: ce.email_override || "",
                                mustBeEmail: !0,
                                onChange: (ft) =>
                                  Ze({
                                    email_override: ft.currentTarget.value,
                                  }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Company"),
                                value: ce.company || "",
                                onChange: (ft) =>
                                  Ze({ company: ft.currentTarget.value }),
                              }),
                              (0, n.jsx)(p.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Game"),
                                value: ce.game || "",
                                onChange: (ft) =>
                                  Ze({ game: ft.currentTarget.value }),
                              }),
                              x > 0 &&
                                (0, n.jsx)(p.m, {
                                  label: (0, t.we)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, t.we)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({ length: x + 1 }).map(
                                    (ft, Ot) => ({ data: Ot, label: Ot }),
                                  ),
                                  selectedOption:
                                    (ce.guests_registered ?? 1) - 1,
                                  onChange: (ft) => {
                                    const Ot = ce.guest_names ?? [];
                                    Ze({
                                      guests_registered: ft.data + 1,
                                      guest_names:
                                        Ot.length > ft.data
                                          ? Ot.slice(0, ft.data)
                                          : Gt.$Y(Ot, ft.data, ""),
                                    });
                                  },
                                }),
                              (ce.guests_registered ?? 0) > 1 &&
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, t.we)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (ce.guest_names ?? []).map((ft, Ot) =>
                                      (0, n.jsx)(
                                        p.pd,
                                        {
                                          type: "text",
                                          label: (0, t.we)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: ft,
                                          onChange: (Qt) => {
                                            const kn = [
                                              ...(ce.guest_names ?? []),
                                            ];
                                            (kn[Ot] = Qt.currentTarget.value),
                                              Ze({ guest_names: kn });
                                          },
                                        },
                                        "guesname_" + Ot,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, n.jsx)(jt, {
                                eventModel: l,
                                oReg: ce,
                                fnUpdateRegistration: Ze,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function St(m) {
          return Object.fromEntries(
            Object.entries(m).filter(([l, d]) => d !== void 0),
          );
        }
        function jt(m) {
          const { eventModel: l, oReg: d, fnUpdateRegistration: y } = m,
            x = Ie(l.jsondata.meet_steam_groups ?? [], H);
          return !x || x.length == 0
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_desc"),
                  }),
                  x.map((R) => {
                    const le = l.jsondata.meet_steam_groups?.find(
                      (ce) => ce.group_id == R,
                    );
                    return le
                      ? (0, n.jsx)(
                          Nt,
                          {
                            groupInfo: le,
                            oReg: d,
                            fnUpdateText: (ce) => {
                              let Ke = d.pre_event_partner_questions
                                  ? [...d.pre_event_partner_questions]
                                  : [],
                                Xe = Ke.findIndex((rt) => rt.group_id == R);
                              Xe < 0
                                ? Ke.push({ group_id: R, question: ce })
                                : (Ke[Xe] = { group_id: R, question: ce }),
                                y({ pre_event_partner_questions: Ke });
                            },
                          },
                          "groupquestion" + R,
                        )
                      : null;
                  }),
                ],
              });
        }
        function Nt(m) {
          const { fnUpdateText: l, groupInfo: d, oReg: y } = m,
            x = (0, T.sfN)(h.TS.LANGUAGE),
            [R, le] = (0, ee.q3)(() => [
              t.NT.GetWithFallback(d.localized_session_title, x) ?? "",
              y.pre_event_partner_questions?.find(
                (ce) => ce.group_id == d.group_id,
              )?.question || "",
            ]);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(p.JU, { children: R }),
              (0, n.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, n.jsx)("textarea", {
                  value: le,
                  className: (0, Mt.A)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, t.we)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (ce) => l(ce.currentTarget.value),
                }),
              }),
            ],
          });
        }
        function wt(m) {
          const l = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "group_id"),
            x = Number.parseInt(y),
            R = (0, ee.q3)(() => Dt(l, x));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session group id ", x],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Ne.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const le = at(m.context.bbcode, x),
            ce = dt(m.context.bbcode, "meetsteamsessiongroup", x);
          return (0, n.jsxs)(je, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: h.iA.accountid,
            children: [
              le && (0, n.jsx)(Z, { eventModel: l }),
              (0, n.jsx)(ie, { groupData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: ce }),
            ],
          });
        }
        function Z(m) {
          const { eventModel: l } = m;
          return $()
            ? (0, n.jsx)(X, { eventModel: l, accountID: h.iA.accountid })
            : null;
        }
        function X(m) {
          const { eventModel: l, accountID: d } = m,
            y = (0, U.Lc)(l.GID ?? "", d);
          return (0, n.jsx)("div", {
            children:
              !!y &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children: (0, t.we)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, n.jsx)("img", { src: y, alt: "" }),
                ],
              }),
          });
        }
        function ie(m) {
          const { groupData: l, eventModel: d } = m,
            y = (0, lt.MU)(),
            x = bt(),
            R = $e(),
            le = (0, U.my)(d.clanSteamID.GetAccountID(), d.GID ?? ""),
            ce = (0, o.useMemo)(
              () =>
                l?.sessions &&
                [...l.sessions].sort(
                  (mt, Pt) => (mt.rtime_start ?? 0) - (Pt.rtime_start ?? 0),
                ),
              [l?.sessions],
            ),
            { elLogInDialog: Ke, fnRequireLogIn: Xe } = Zt(),
            rt = Te(),
            Ze = (0, ee.q3)(() =>
              ce?.reduce(
                (mt, Pt) => mt.set(Pt.id ?? 0, Fe(rt, l.group_id, Pt.id)),
                new Map(),
              ),
            ),
            gt = Ce(),
            Ft = (0, U.mG)(
              d.clanSteamID.GetAccountID(),
              d.GID ?? "",
              h.iA.accountid,
            ),
            Lt = Ft.isSuccess && !!Ft.data.allow_registration_if_full,
            vt = le.data;
          if (le.isError)
            return (0, n.jsx)("div", {
              children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (!vt || (R && h.iA.accountid))
            return (0, n.jsx)(te.t, {
              size: "medium",
              position: "center",
              string: (0, t.we)("#Loading"),
            });
          const ot = (mt) => gt(l.group_id, mt),
            At = l.group_visibility_tokens ?? [],
            zt = x !== null && At.includes(x);
          return At.length > 0 && !zt && !y
            ? null
            : (0, n.jsxs)(Oe, {
                groupData: l,
                children: [
                  ce?.map((mt, Pt) => {
                    const Ht = vt.find(
                        ($t) =>
                          $t.group_id === l.group_id && $t.session_id === mt.id,
                      ),
                      Bt = Ze?.get(mt.id ?? 0),
                      Ut = Pt + 1 < ce.length;
                    return (0, n.jsxs)(
                      o.Fragment,
                      {
                        children: [
                          (0, n.jsx)("div", {
                            className: Ve().SessionColumnCtn,
                            children: (0, n.jsx)(Ye, {
                              sessionData: mt,
                              onClick: () => Xe(() => ot(mt.id)),
                              nGuestReservations: Ht?.guest_count || 0,
                              eRegistrationStatus: Bt,
                              bAllowedToRegisterIfFull: Lt,
                            }),
                          }),
                          Ut && (0, n.jsx)(nt, {}),
                        ],
                      },
                      "timecol_" + l.group_id + "_" + mt.id,
                    );
                  }),
                  Ke,
                ],
              });
        }
        function Oe(m) {
          const { groupData: l, children: d } = m,
            y = (0, T.sfN)(h.TS.LANGUAGE),
            x = t.NT.GetWithFallback(l?.localized_session_title, y),
            R = t.NT.GetWithFallback(l?.localized_session_description, y),
            le = t.NT.GetWithFallback(l?.localized_intended_audience, y),
            ce = t.NT.GetWithFallback(l?.localized_sesssion_faq, y),
            Ke = (0, lt.MU)(),
            [Xe, rt] = (0, o.useState)(!1);
          return l
            ? (0, n.jsxs)("div", {
                className: (0, Mt.A)({
                  [Ve().Ctn]: !0,
                  [Ve().CtnRegistered]: !1,
                  [Ve().VisibilityOverride]:
                    Ke && (l.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!x &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: x,
                    }),
                  !!R &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionDesc,
                      children: R,
                    }),
                  !!le &&
                    (0, n.jsx)("div", {
                      className: Ve().SessionAudience,
                      children: (0, t.we)(
                        "#MeetSteam_Session_Audience",
                        le ?? "",
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: Ve().SessionOptions,
                    children: d,
                  }),
                  !!ce &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: Ve().ExpanderRow,
                          children: [
                            (0, n.jsx)(ge.c, {
                              bExpanded: Xe,
                              setExpanded: rt,
                            }),
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        Xe &&
                          (0, n.jsx)("div", {
                            className: Ve().FAQDisplay,
                            children: (0, n.jsx)(pt.Zn, { text: ce ?? "" }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function Ae(m, l, d, y) {
          const x = d || (m === Pe && l > 0) || m === we || m === H || m === ue;
          let R = null,
            le = null;
          return (
            m == we
              ? ((R = (0, t.we)("#MeetSteam_Registered")),
                (le = Ve().Registered))
              : m == H
                ? ((R = (0, t.we)("#MeetSteam_Registering")),
                  (le = Ve().Registering))
                : m == ue
                  ? ((R = (0, t.we)("#MeetSteam_Unegistering")),
                    (le = Ve().Unregistering))
                  : y &&
                    ((R = (0, t.we)("#MeetSteam_Already")),
                    (le = Ve().RegisteredElsewhere)),
            { bEnabled: x, strStatusClass: le, strStatusToken: R }
          );
        }
        function Ye(m) {
          const {
              sessionData: l,
              onClick: d,
              nGuestReservations: y,
              eRegistrationStatus: x = Pe,
              bAllowedToRegisterIfFull: R,
            } = m,
            le = (0, ee.q3)(() => l.max_capacity ?? 0),
            ce = Math.max(0, le - (y || 0)),
            {
              strStatusClass: Ke,
              strStatusToken: Xe,
              bEnabled: rt,
            } = Ae(x, ce, !!R),
            {
              sDisplayTimeZone: Ze,
              rtime_start: gt,
              rtime_end: Ft,
            } = (0, U._t)(l),
            Lt = (0, U.rF)(gt ?? 0, Ze),
            vt = (0, U.Mr)(gt ?? 0, Ft ?? 0, Ze);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, Ke),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Xe }),
                }),
                (0, n.jsxs)("button", {
                  className: (0, Mt.A)(Ve().Button, Ve().Background),
                  disabled: !rt,
                  onClick: d,
                  children: [
                    (0, n.jsx)("div", { className: Ve().Title, children: Lt }),
                    (0, n.jsx)("div", {
                      className: Ve().TimeFrame,
                      children: vt,
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: ce,
                  bAllowedToRegisterIfFull: R,
                }),
              ],
            }),
          });
        }
        function _e(m) {
          const { nAvailableSpace: l, bAllowedToRegisterIfFull: d } = m;
          return (0, n.jsx)(n.Fragment, {
            children:
              d ||
              (0, n.jsxs)(n.Fragment, {
                children: [
                  " ",
                  l < 1
                    ? (0, n.jsx)("div", {
                        className: Ve().SoldOut,
                        children: (0, t.we)("#MeetSteam_SoldOut"),
                      })
                    : (0, n.jsx)("div", {
                        className: Ve().MaxSize,
                        children: (0, t.Yp)(
                          "#MeetSteam_Spot",
                          l.toLocaleString((0, yt.J)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function nt() {
          return (0, n.jsx)("div", {
            className: Ve().InstanceDivider,
            children: "\u25C6",
          });
        }
        function it(m) {
          const { eventModel: l, bIsLast: d } = m,
            [y, x] = o.useState(!1),
            [R, le] = o.useState(!1),
            ce = (0, U.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            [Ke, Xe, rt] = (0, w.uD)(),
            { elLogInDialog: Ze, fnRequireLogIn: gt } = Zt(),
            Ft = ut(),
            Lt = async (Bt) => {
              x(!0), (await Ft(Bt)) || Xe(), ce.refetch(), x(!1);
            },
            vt = $e(),
            ot = y || vt,
            At = O(),
            zt = Te(),
            mt = Me(zt),
            Pt = Je(zt),
            Ht = (0, ee.q3)(() =>
              ze(zt).reduce((Bt, Ut) => {
                const $t = Dt(l, Ut),
                  mn = ke(zt, $t?.group_id),
                  Fn =
                    $t?.sessions?.find((Ln) => Ln.id == mn)?.max_per_team ?? 0;
                return Math.max(Bt, Fn);
              }, 1),
            );
          return (
            Y(At, (0, t.we)("#EventEditor_UnsavedChanges")),
            (0, n.jsxs)("div", {
              className: (0, Mt.A)(
                Ve().CompleteRegistrationCtn,
                d && At && Ve().Visible,
              ),
              children: [
                (0, n.jsx)("p", {
                  children: Pt
                    ? (0, t.we)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, t.we)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                d &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      !ot &&
                        (0, n.jsx)(p.jn, {
                          disabled: !At,
                          onClick: () => gt(() => le(!0)),
                          children: Pt
                            ? (0, t.we)("#MeetSteam_UpdateRegistration")
                            : (0, t.we)("#MeetSteam_CompleteRegistration"),
                        }),
                      ot &&
                        (0, n.jsx)(te.t, {
                          size: "small",
                          position: "center",
                          string: (0, t.we)("#Saving"),
                        }),
                      R &&
                        (0, n.jsx)(kt, {
                          eventModel: l,
                          fnConfirm: Lt,
                          fnHideModal: () => le(!1),
                          nMaxPerTeam: Ht,
                          bAddingOrChangingSessions: mt,
                        }),
                      Ke &&
                        (0, n.jsx)(S.EN, {
                          active: !0,
                          children: (0, n.jsx)(S.Ee, {
                            strTitle: (0, t.we)("#Error_Generic"),
                            strDescription: (0, t.we)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: rt,
                          }),
                        }),
                      Ze,
                    ],
                  }),
              ],
            })
          );
        }
        function Dt(m, l) {
          return (m?.jsondata?.meet_steam_groups || [])?.find(
            (y) => y.group_id == l,
          );
        }
        function Yt(m, l) {
          return (m?.jsondata?.meet_steam_schedules || [])?.find(
            (y) => y.schedule_id == l,
          );
        }
        function Zt() {
          const { elDialogElement: m, fnShowLogonDialog: l } = (0, f.l)(
            (0, t.we)("#EventDisplay_Share_NotLoggedIn_Description"),
          );
          return {
            elLogInDialog: m,
            fnRequireLogIn: (y) => {
              h.iA.logged_in ? y() : l();
            },
          };
        }
        function He(m) {
          const l = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "schedule_id"),
            x = Number.parseInt(y),
            R = (0, ee.q3)(() => Yt(l, x));
          if (!R || !l)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session schedule id ", x],
                })
              : null;
          if (l.clanSteamID.GetAccountID() != (0, Ne.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const le = dt(m.context.bbcode, "meetsteamscheduleview", x);
          return (0, n.jsxs)(je, {
            clanAccountID: l.clanSteamID.GetAccountID(),
            gidClanEvent: l.GID ?? "",
            userAccountID: h.iA.accountid,
            children: [
              (0, n.jsx)(e, { scheduleData: R, eventModel: l }),
              (0, n.jsx)(it, { eventModel: l, bIsLast: le }),
            ],
          });
        }
        function e(m) {
          const { eventModel: l } = m,
            d = Ce(),
            y = $e(),
            x = (0, U.my)(l.clanSteamID.GetAccountID(), l.GID ?? ""),
            R = (0, U.mG)(
              l.clanSteamID.GetAccountID(),
              l.GID ?? "",
              h.iA.accountid,
            ),
            le = x.data;
          return x.isError
            ? (0, n.jsx)("div", {
                children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
              })
            : !le || (y && h.iA.accountid)
              ? (0, n.jsx)(te.t, {
                  size: "medium",
                  position: "center",
                  string: (0, t.we)("#Loading"),
                })
              : (0, n.jsx)(i, {
                  ...m,
                  fnOnClick: d,
                  rgAvailability: le,
                  bAllowedToRegisterIfFull: R.data?.allow_registration_if_full,
                });
        }
        function i(m) {
          const {
              eventModel: l,
              scheduleData: d,
              bAllowedToRegisterIfFull: y,
              fnOnClick: x,
              rgAvailability: R,
            } = m,
            le = (0, lt.HN)(),
            ce = bt(),
            Ke = (0, Wt.B)(),
            [Xe, rt, Ze] = (0, ee.q3)(() => [
              l.jsondata.meet_steam_groups,
              d.in_person_time_zone ?? U.hh,
              d.location_type,
            ]),
            [gt, Ft, Lt] = (0, o.useMemo)(() => {
              if (!Xe) return [new Map(), new Map(), new Array()];
              const vt = new Map(),
                ot = new Map();
              for (const At of Xe) {
                const zt = At.group_visibility_tokens ?? [],
                  mt = ce !== null && zt.includes(ce);
                if (!(zt.length > 0 && !mt && !le))
                  for (const Pt of At.sessions) {
                    const Bt = (
                      Ze == "in_person"
                        ? M()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(rt)
                        : M()
                            .unix(Pt.rtime_start ?? 0)
                            .tz(Ke)
                    ).format("YYYY-MM-DD");
                    let Ut = vt.get(Bt);
                    Ut || ((Ut = []), vt.set(Bt, Ut)),
                      Ut.push({ group: At, session: Pt });
                  }
              }
              for (const At of d.session_breaks || []) {
                const mt = (
                  Ze == "in_person"
                    ? M()
                        .unix(At.rtime_start ?? 0)
                        .tz(rt)
                    : M()
                        .unix(At.rtime_start ?? 0)
                        .tz(Ke)
                ).format("YYYY-MM-DD");
                let Pt = ot.get(mt);
                Pt || ((Pt = []), ot.set(mt, Pt)), Pt.push(At);
              }
              for (const At of vt.values())
                At.sort(
                  (zt, mt) =>
                    (zt.session.rtime_start ?? 0) -
                    (mt.session.rtime_start ?? 0),
                );
              return [vt, ot, Array.from(vt.keys()).sort()];
            }, [Xe, ce, le, Ze, rt, Ke, d.session_breaks]);
          return Xe
            ? (0, n.jsx)(n.Fragment, {
                children: Lt.map((vt) => {
                  const ot = gt.get(vt);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: Ve().SingleDayCtn,
                      children: (0, n.jsx)(j, {
                        scheduleData: d,
                        bAllowedToRegisterIfFull: !!y,
                        fnOnClick: x,
                        rgDayGroupSessions: ot ?? [],
                        rgBreakSessions: Ft.get(vt) || [],
                        rgAvailability: R ?? [],
                      }),
                    },
                    "day_" + vt,
                  );
                }),
              })
            : (0, n.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function j(m) {
          const {
              scheduleData: l,
              rgDayGroupSessions: d,
              rgBreakSessions: y,
              bAllowedToRegisterIfFull: x,
              fnOnClick: R,
              rgAvailability: le,
            } = m,
            ce = (0, o.useMemo)(() => {
              const Ze = [];
              for (const gt of d)
                Ze.length == 0 ||
                Ze[Ze.length - 1][0].session.rtime_start !=
                  gt.session.rtime_start
                  ? Ze.push([gt])
                  : Ze[Ze.length - 1].push(gt);
              return Ze;
            }, [d]),
            { sDisplayTimeZone: Ke, rtime_start: Xe } = (0, U._t)(d[0].session),
            rt = (0, U.rF)(Xe ?? 0, Ke);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h2", {
                className: Ve().ScheduleTopDate,
                children: rt,
              }),
              y
                .filter(
                  (Ze) =>
                    (Ze.rtime_end ?? 0) <= (ce[0][0].session.rtime_start ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
              ce.map((Ze, gt) => {
                let Ft = [];
                if (gt + 1 < ce.length) {
                  const Lt = Ze[0].session.rtime_start ?? 0,
                    vt = ce[gt + 1][0].session.rtime_end ?? 0;
                  Ft = y.filter(
                    (ot) =>
                      Lt < (ot.rtime_start ?? 0) && (ot.rtime_end ?? 0) < vt,
                  );
                }
                return (0, n.jsxs)(
                  o.Fragment,
                  {
                    children: [
                      (0, n.jsx)(en, {
                        bAllowedToRegisterIfFull: x,
                        fnOnClick: R,
                        scheduleData: l,
                        rgSlotSessions: Ze,
                        rgAvailability: le,
                      }),
                      Ft.map((Lt) =>
                        (0, n.jsx)(
                          Xt,
                          { scheduleData: l, breakSession: Lt },
                          `breaks_${l.schedule_id}_${Lt.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + Ze[0].session.rtime_start,
                );
              }),
              y
                .filter(
                  (Ze) =>
                    (Ze.rtime_start ?? 0) >=
                    (ce[ce.length - 1][0].session.rtime_end ?? 0),
                )
                .map((Ze) =>
                  (0, n.jsx)(
                    Xt,
                    { scheduleData: l, breakSession: Ze },
                    `breaks_${l.schedule_id}_${Ze.break_id}`,
                  ),
                ),
            ],
          });
        }
        function Xt(m) {
          const { scheduleData: l, breakSession: d } = m,
            y = (0, T.sfN)(h.TS.LANGUAGE),
            x = (0, ee.q3)(
              () =>
                t.NT.GetWithFallback(d.localized_break_description, y) ?? "",
            ),
            R = (0, ee.q3)(() => ({
              rtime_start: d.rtime_start,
              rtime_end: d.rtime_end,
              location_type: l.location_type,
              in_person_time_zone: l.in_person_time_zone,
            }));
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: R }),
              (0, n.jsx)("div", { children: x }),
            ],
          });
        }
        function en(m) {
          const {
            scheduleData: l,
            rgSlotSessions: d,
            bAllowedToRegisterIfFull: y,
            fnOnClick: x,
            rgAvailability: R,
          } = m;
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleRow,
            children: [
              (0, n.jsx)(rn, { session: d[0].session }),
              (0, n.jsx)("div", {
                className: Ve().ScheduleSessionsColumn,
                children: d.map((le) =>
                  (0, n.jsx)(
                    un,
                    {
                      bAllowedToRegisterIfFull: y,
                      fnOnClick: x,
                      session: le,
                      rgAvailability: R,
                    },
                    `entry_${le.group.group_id}_${le.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function rn(m) {
          const { session: l } = m,
            {
              sDisplayTimeZone: d,
              rtime_start: y,
              rtime_end: x,
            } = (0, U._t)(l),
            R = (0, U.rF)(y ?? 0, d),
            le = (0, U.Mr)(y ?? 0, x ?? 0, d);
          return (0, n.jsxs)("div", {
            className: Ve().ScheduleTimeColumn,
            children: [
              (0, n.jsx)("div", { children: le }),
              (0, n.jsx)("div", { className: Ve().Timezone, children: R }),
            ],
          });
        }
        function un(m) {
          const {
              session: l,
              bAllowedToRegisterIfFull: d,
              fnOnClick: y,
              rgAvailability: x,
            } = m,
            R = (0, T.sfN)(h.TS.LANGUAGE),
            [le, ce, Ke, Xe] = (0, ee.q3)(() => [
              t.NT.GetWithFallback(l.group.localized_session_title, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_intended_audience, R) ??
                "",
              t.NT.GetWithFallback(l.group.localized_sesssion_faq, R) ?? "",
              t.NT.GetWithFallback(l.group.localized_session_description, R) ??
                "",
            ]),
            [rt, Ze, gt] = (0, w.uD)(!1),
            Ft = Te(),
            [Lt, vt, ot] = (0, ee.q3)(() => [
              Fe(Ft, l.group.group_id, l.session.id),
              W(Ft, l.group.group_id, l.session.id),
              _(Ft, l.group.group_id),
            ]),
            At = x?.find(
              (Ut) =>
                Ut.group_id === l.group.group_id &&
                Ut.session_id === l.session.id,
            )?.guest_count,
            zt = Math.max(0, (l.session.max_capacity ?? 0) - (At || 0)),
            {
              strStatusClass: mt,
              strStatusToken: Pt,
              bEnabled: Ht,
            } = Ae(Lt, zt, d, vt),
            Bt =
              vt && ot
                ? l.group.sessions.find((Ut) => Ut.id == ot)?.rtime_start
                : void 0;
          return (0, n.jsx)(tt.Gq, {
            toolTipContent: Bt
              ? (0, t.we)(
                  "#MeetSteam_AlreadyReg",
                  (0, et.TW)(Bt),
                  (0, et.KC)(Bt),
                )
              : void 0,
            children: (0, n.jsxs)("div", {
              className: (0, Mt.A)(Ve().SessionInstance, mt),
              children: [
                (0, n.jsx)("div", {
                  className: Ve().StatusText,
                  children: (0, n.jsx)("span", { children: Pt }),
                }),
                (0, n.jsxs)("div", {
                  className: Ve().Background,
                  children: [
                    (0, n.jsx)("div", {
                      className: Ve().SessionTitle,
                      children: le,
                    }),
                    ce &&
                      (0, n.jsx)("div", {
                        className: Ve().SessionAudience,
                        children: (0, t.we)("#MeetSteam_Session_Audience", ce),
                      }),
                    (0, n.jsx)("button", {
                      type: "button",
                      className: Ve().SessionInfoLink,
                      onClick: Ze,
                      children: (0, t.we)("#MeetSteam_Session_Details"),
                    }),
                    (0, n.jsx)("div", {
                      className: Ve().ScheduleActionRow,
                      children: (0, n.jsx)(p.$n, {
                        onClick: () => {
                          y && y(l.group.group_id, l.session.id);
                        },
                        disabled: !Ht,
                        children: (0, t.we)(
                          Lt == we ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(_e, {
                  nAvailableSpace: zt,
                  bAllowedToRegisterIfFull: d,
                }),
                (0, n.jsx)(S.EN, {
                  active: rt,
                  children: (0, n.jsxs)(S.o0, {
                    strTitle: le,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: gt,
                    children: [
                      (0, n.jsx)("div", { children: ce }),
                      (0, n.jsx)("div", { children: Xe }),
                      !!Ke &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                            (0, n.jsx)(pt.Zn, { text: Ke }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var cn = r(29522),
          dn = r(40358);
        function gn(m) {
          const l = Number.parseInt((0, a.j$)(m.args, "id")) || 0,
            d =
              ((0, a.j$)(m.args, "visible") || "false").toLowerCase() ===
              "true",
            y = m.context.showErrorInfo,
            x = (0, cn.oc)(l),
            { data: R, isPending: le } = (0, dn.J$)(x);
          if (!l)
            return y
              ? (0, n.jsx)("div", { children: "Error: PackageID Not Set" })
              : null;
          if (le) return null;
          const ce =
            R?.success == ae.R
              ? !!(R.visible && R.best_purchase_option)
              : !R?.unvailable_for_country_restriction;
          return (!ce && !d) || (ce && d)
            ? (0, n.jsx)(n.Fragment, { children: m.children })
            : null;
        }
        const fn = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function zn(m) {
          const l = new Set();
          for (const d of m.matchAll(/\[packagepurchaseable\b([^\]]*)\]/gi)) {
            const y = fn.exec(d[1] ?? ""),
              x = Number.parseInt(y?.[1] ?? y?.[2] ?? y?.[3] ?? "");
            x && l.add(x);
          }
          return Array.from(l);
        }
        var Ct = r(50974),
          yn = r(41735),
          vn = r.n(yn),
          Tt = r(14947),
          hn = r(71742),
          sn = r(67705);
        const tn = 0,
          an = 1,
          pn = 2,
          Vt = 3,
          qt = 4,
          _t = 5,
          Mn = 6,
          ln = 7;
        function En() {
          const m = {
            exportFn: void 0,
            file: void 0,
            dataURL: void 0,
            uploadFileName: "",
            displayFileName: void 0,
            sha1: "",
            hmac: "",
            timestamp: 0,
            imageWidth: 0,
            imageHeight: 0,
            fileInfo: void 0,
            uploadInfo: void 0,
            eUploadState: tn,
            uploadProgress: 0,
            strErrorDescription: void 0,
          };
          return (0, Tt.l_)(m, {
            exportFn: !1,
            file: Tt.sH.ref,
            uploadFileName: !1,
            displayFileName: !1,
            sha1: !1,
            hmac: !1,
            timestamp: !1,
            fileInfo: !1,
            uploadInfo: !1,
          });
        }
        class bn {
          m_Callbacks;
          m_fileUploadProps = En();
          m_onComplete;
          constructor(l) {
            (0, Tt.Gn)(this, {
              SetUploadFileError: Tt.XI,
              StartFileExportToUpload: Tt.XI,
              SetImageFileToUpload: Tt.XI,
              SetOtherFileToUpload: Tt.XI,
              SetFileToUpload: Tt.XI,
              RetryFileUpload: Tt.XI,
              BeginFileUpload: Tt.XI,
              DoFileUpload: Tt.XI,
              CommitFileUpload: Tt.XI,
              ClearFileUploadError: Tt.XI,
              Reset: Tt.XI,
            }),
              (this.m_Callbacks = l);
          }
          get file_upload_props() {
            return this.m_fileUploadProps;
          }
          get file_upload_data_url() {
            return this.m_fileUploadProps.dataURL;
          }
          get file() {
            return this.m_fileUploadProps.file;
          }
          LogFileUploadMessage(l) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(l);
          }
          SetUploadFileError(l, d) {
            (this.m_fileUploadProps.eUploadState = l),
              (this.m_fileUploadProps.strErrorDescription = d),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(l, d = {}) {
            const { displayFilename: y, info: x, onComplete: R } = d;
            (this.m_fileUploadProps.eUploadState = ln),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = R),
              (this.m_fileUploadProps.fileInfo = x),
              this.SetFileToUpload(l),
              (this.m_fileUploadProps.displayFileName = y);
          }
          async SetImageFileToUpload(l, d = {}) {
            const { processor: y = Sn, info: x } = d;
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = x;
            const R = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  R,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let le = [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
                "webp",
                "avif",
              ],
              ce = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (le.indexOf(ce) == -1) {
              let Xe = ce || R;
              this.SetUploadFileError(
                _t,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  Xe,
                ),
              );
              return;
            }
            const Ke = await y(l);
            this.SetFileToUpload(Ke.file),
              (this.m_fileUploadProps.imageHeight = Ke.height),
              (this.m_fileUploadProps.imageWidth = Ke.width);
          }
          async SetOtherFileToUpload(l, d = {}) {
            if (!l) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = d.info;
            const y = this.m_Callbacks.GetFileNameOverride?.() ?? l.name;
            if (l.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  y,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let x = ["zip"],
              R = l.name.split(".").pop()?.toLowerCase() ?? "";
            if (x.indexOf(R) == -1) {
              let le = R || y;
              this.SetUploadFileError(
                _t,
                (0, t.we)("#Chat_Settings_Error_FileTypeNotZip", le),
              );
              return;
            }
            this.SetFileToUpload(l);
          }
          SetFileToUpload(l) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !l)
            ) {
              this.m_fileUploadProps.eUploadState = tn;
              return;
            }
            let d = "";
            if (typeof l == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = l);
            else {
              (this.m_fileUploadProps.file = l),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                d = URL.createObjectURL(l);
              } catch (x) {
                console.error(`Failed to created object URL from file: ${x}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = an;
            let y = "";
            for (; y.length < 40; )
              y += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = d),
              (this.m_fileUploadProps.sha1 = y),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(l) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = ln;
              const { eResult: x, file: R } =
                await this.m_fileUploadProps.exportFn((le) => {
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = le * 0.5;
                  });
                });
              if (x != ae.R || !R)
                return (
                  this.SetUploadFileError(
                    Vt,
                    (0, t.we)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = R),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + R.name);
            }
            let d = this.m_fileUploadProps.file;
            if (!d)
              throw (
                ((0, hn.wT)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = pn),
              (this.m_fileUploadProps.uploadInfo = l);
            let y = new FormData();
            y.append("sessionid", (0, sn.KC)()),
              y.append("l", h.TS.LANGUAGE),
              y.append("file_size", d.size.toString()),
              y.append("file_name", this.m_fileUploadProps.uploadFileName),
              y.append("file_sha", this.m_fileUploadProps.sha1),
              y.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              y.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              y.append("file_type", d.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  y,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let x = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${h.TS.LANGUAGE}`,
                  { method: "POST", body: y, credentials: "include" },
                ),
                R;
              try {
                R = await x.json();
              } catch {}
              if (!x.ok) {
                let le = "";
                throw (
                  ((0, Tt.h5)(() => {
                    (this.m_fileUploadProps.eUploadState = Vt),
                      this.LogFileUploadMessage(x),
                      R?.message
                        ? (le = R?.message)
                        : (le = (0, t.we)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                        "#Chat_Upload_ErrorStart",
                        le,
                      ));
                  }),
                  le)
                );
              }
              if (!R || !R.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = R.timestamp),
                (this.m_fileUploadProps.hmac = R.hmac),
                this.DoFileUpload(R.result, d)
              );
            } catch (x) {
              let R = x || (0, t.we)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, Tt.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                      "#Chat_Upload_ErrorStart",
                      R,
                    ));
                }),
                R)
              );
            }
          }
          async DoFileUpload(l, d) {
            let y = l.use_https ? "https://" : "http://";
            y += l.url_host + l.url_path;
            const x = {};
            for (const le of l.request_headers) {
              if (
                le.name.toLowerCase() == "content-length" ||
                le.name.toLowerCase() == "host"
              )
                continue;
              let ce = le.name;
              ce.toLowerCase() === "content-type" && (ce = "Content-Type"),
                (x[ce] = le.value);
            }
            let R = {
              onUploadProgress: (le) => {
                const ce = !!this.m_fileUploadProps.exportFn,
                  Ke = ce ? 50 : 0,
                  Xe = ce ? 50 : 100,
                  rt = Ke + (le.loaded / le.total) * Xe;
                rt > this.m_fileUploadProps.uploadProgress &&
                  (0, Tt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = rt;
                  });
              },
              headers: x,
              transformRequest: [(le) => le],
            };
            try {
              return (
                await vn().put(y, d, R), this.CommitFileUpload(!0, l.ugcid, d)
              );
            } catch (le) {
              throw (
                (this.LogFileUploadMessage(le.response),
                (0, Tt.h5)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, l.ugcid, d),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(l, d, y) {
            let x = this.m_fileUploadProps.sha1,
              R = new FormData();
            R.append("sessionid", (0, sn.KC)()),
              R.append("l", h.TS.LANGUAGE),
              R.append("file_name", this.m_fileUploadProps.uploadFileName),
              R.append("file_sha", x),
              R.append("success", l ? "1" : "0"),
              R.append("ugcid", d),
              R.append("file_type", y.type),
              R.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              R.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              R.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              R.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                R,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let le = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: R,
                credentials: "include",
              });
              return (
                l
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Mn),
                    this.m_onComplete && this.m_onComplete(ae.R, y.size))
                  : ((this.m_fileUploadProps.eUploadState = Vt),
                    this.m_onComplete && this.m_onComplete(ae.zi, y.size)),
                le
              );
            } catch (le) {
              if (!l) return;
              let ce = "";
              throw (
                ((0, Tt.h5)(() => {
                  if (
                    (this.LogFileUploadMessage(le),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    le.response)
                  ) {
                    let Ke = le.response.data,
                      Xe = le.response.status,
                      rt = Ke && Ke.success;
                    Ke.message
                      ? (ce = Ke.message)
                      : (ce = (0, t.we)("#Chat_Settings_Error_ServerError"));
                  } else ce = (0, t.we)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${ce}`),
                    this.m_onComplete && this.m_onComplete(ae.zi, y.size);
                }),
                ce)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != Vt &&
              this.m_fileUploadProps.eUploadState != qt &&
              this.m_fileUploadProps.eUploadState != _t) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        function Sn(m) {
          return new Promise((l) => {
            let d = new FileReader();
            (d.onload = () => {
              let y = m,
                x = d.result,
                R = wn(x),
                le = new Blob([R], { type: m.type });
              if (le) {
                let ce = le;
                (ce.lastModifiedDate = new Date(m.lastModified)),
                  (ce.name = m.name),
                  (y = ce);
              }
              if (m.type.indexOf("image") == 0) {
                let ce = new Image();
                (ce.src = URL.createObjectURL(m)),
                  (ce.onload = (Ke) => {
                    l({ file: y, width: ce.width, height: ce.height });
                  });
              } else l({ file: y, width: 0, height: 0 });
            }),
              d.readAsArrayBuffer(m);
          });
        }
        function wn(m) {
          let l = new DataView(m),
            d = 0,
            y = 0,
            x = [],
            R = 0;
          if (l.getUint16(d) == 65496) {
            d += 2;
            let le = l.getUint16(d);
            for (d += 2; d < l.byteLength && d < 131072; ) {
              if (le == 65505)
                (x[R] = { recess: y, offset: d - 2 }),
                  (y = d + l.getUint16(d)),
                  R++;
              else if (le == 65498) break;
              (d += l.getUint16(d)), (le = l.getUint16(d)), (d += 2);
            }
            let ce = m.byteLength - y;
            if (
              (x.forEach((Xe) => {
                ce += Xe.offset - Xe.recess;
              }),
              ce === m.byteLength)
            )
              return m;
            const Ke = new Uint8Array(ce);
            if (x.length > 0) {
              let Xe = 0;
              x.forEach((rt) => {
                let Ze = rt.offset - rt.recess;
                Ke.set(new Uint8Array(m.slice(rt.recess, rt.offset)), Xe),
                  (Xe += Ze);
              }),
                Ke.set(new Uint8Array(m.slice(y)), Xe);
            }
            return Ke.buffer;
          }
          return m;
        }
        var Dn = r(24660),
          nn = r(36118),
          In = r(39362),
          xn = r.n(In);
        function We(m) {
          const { fileUploadManager: l } = m,
            d = (0, o.useRef)(null);
          return (0, n.jsxs)("div", {
            className: xn().Ctn,
            children: [
              (0, n.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: { display: "none" },
                name: "fileupload",
                ref: d,
                onChange: (y) => {
                  const x = y.currentTarget.files;
                  x?.length &&
                    (l.SetImageFileToUpload(x[0]),
                    (y.currentTarget.value = ""));
                },
              }),
              (0, n.jsx)(Dn.fu, {
                type: "button",
                title: (0, t.we)("#Button_Upload"),
                onOKActionDescription: (0, t.we)("#Button_Upload"),
                onClick: () => d.current?.click(),
                children: (0, n.jsx)(nn.xv8, {}),
              }),
            ],
          });
        }
        var Be = r(71714),
          Ue = r.n(Be);
        function Vn(m) {
          const { fileUploadManager: l } = m,
            d = (0, ee.q3)(() => l.file_upload_props.eUploadState);
          return d == an
            ? (0, n.jsx)(Hn, { fileUploadManager: l })
            : d == Vt || d == _t || d == qt
              ? (0, n.jsx)(Qn, { fileUploadManager: l })
              : d != tn
                ? (0, n.jsx)($n, { fileUploadManager: l })
                : null;
        }
        function Hn(m) {
          const { fileUploadManager: l } = m,
            d = l.file;
          return d
            ? (0, n.jsxs)("div", {
                className: Ue().UploadPreviewContainer,
                children: [
                  d.type.indexOf("image") != -1 &&
                    (0, n.jsx)("img", {
                      className: Ue().UploadPreview,
                      src: l.file_upload_data_url,
                    }),
                  d.type.indexOf("video") != -1 && (0, n.jsx)(nn.CeX, {}),
                  (0, n.jsxs)("div", {
                    className: Ue().FileUploadFileName,
                    children: ["'", d.name, "'"],
                  }),
                  (0, n.jsx)("div", {
                    className: Ue().FileUploadCancel,
                    onClick: () => l.Reset(),
                    children: (0, n.jsx)(nn.sED, {}),
                  }),
                  (0, n.jsx)(p.jn, {
                    className: Ue().FileUploadBtn,
                    onClick: async () => {
                      await l.BeginFileUpload(), l.Reset();
                    },
                    children: (0, t.we)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function $n(m) {
          const { fileUploadManager: l } = m,
            [d, y, x] = (0, ee.q3)(() => [
              l.file_upload_props.file,
              l.file_upload_props.displayFileName,
              l.file_upload_props.uploadProgress,
            ]),
            R = d ? (0, t.we)("#Uploading_Item", y ?? "") : "",
            le = { width: x + "%" };
          return (0, n.jsxs)("div", {
            className: Ue().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: Ue().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: (0, Mt.A)(
                  Ue().FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, n.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: le,
                }),
              }),
            ],
          });
        }
        function Qn(m) {
          const { fileUploadManager: l } = m,
            [d, y, x] = (0, ee.q3)(() => [
              l.file_upload_props.strErrorDescription,
              l.file_upload_props.displayFileName,
              l.file_upload_props.eUploadState,
            ]),
            R = y ? (0, t.we)("#Uploading_Item", y) : "",
            le = d || (0, t.we)("#Chat_Upload_ErrorCloud");
          return (0, n.jsxs)("div", {
            className: Ue().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: Ue().FileUploadProgressName,
                children: R,
              }),
              (0, n.jsx)("div", {
                className: Ue().FileUploadErrorDescription,
                children: le,
              }),
              (0, n.jsx)("div", {
                className: Ue().FileUploadActions,
                children: (0, n.jsxs)(p.dR, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    x == Vt &&
                      (0, n.jsx)(p.jn, {
                        onClick: async () => {
                          await l.RetryFileUpload(), l.Reset();
                        },
                        children: (0, t.we)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, n.jsx)(p.$n, {
                      onClick: () => l.ClearFileUploadError(),
                      children: (0, t.we)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var jn = r(25792);
        function Yn(m) {
          const { showErrorInfo: l, event: d } = m.context,
            y = d?.clanSteamID.GetAccountID() ?? 0;
          return y == Ct.GU ||
            y == Ct.bv ||
            (h.TS.EUNIVERSE == T.Rv && y == Ct.mW) ||
            (h.TS.EUNIVERSE == T.wLO && y == Ct.Kd)
            ? (0, n.jsx)(jn.tH, {
                children: (0, n.jsx)(Zn, { clanAccountID: y }),
              })
            : l
              ? (0, n.jsx)("div", {
                  children: (0, t.we)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function Zn(m) {
          const { clanAccountID: l } = m,
            [d] = o.useState(() => new bn(Xn(l)));
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(We, { fileUploadManager: d }),
              (0, n.jsx)(Vn, { fileUploadManager: d }),
            ],
          });
        }
        function Xn(m) {
          return {
            PopulateBeginFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + m);
            },
            PopulateCommitFileUploadFormData: (l) => {
              l.append("clan_account_id", "" + m);
            },
            GetBeginFileUploadURL: () =>
              h.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              h.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (l) => {
              console.log("UploadFileButton: ", l);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var Jn = r(86336),
          Cn = r(24642),
          qn = r(16114);
        function Un(m, l, d) {
          const y = _n(m, l);
          return (0, o.useMemo)(() => {
            const x = y.results.find((R) => d == R.unique_id);
            return {
              bLoading: y.bLoading,
              success: y.success,
              userPollData: x,
              error_message: y.error_message,
              userPollSubmitData: y.userPollSubmitData,
            };
          }, [y, d]);
        }
        function _n(m, l) {
          const d = (0, Ee.I)({
            queryKey: on(m, l),
            queryFn: async () => {
              const x = await (
                await fetch(Bn(m, l, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return Wn(x);
            },
            placeholderData: {
              results: [],
              success: ae.S7,
              bLoading: !0,
              userPollSubmitData: { user_poll_option_votes: [] },
            },
          });
          return d.data
            ? d.data
            : {
                results: [],
                success: ae.S7,
                bLoading: !0,
                userPollSubmitData: { user_poll_option_votes: [] },
              };
        }
        function er(m, l) {
          const d = (0, Le.jE)();
          return (0, Re.n)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              m.GetAccountID(),
              l,
            ],
            mutationFn: async (y) => {
              const x = { votes: y.votes },
                R = await fetch(Bn(m, l, !0), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(x),
                  credentials: "include",
                });
              if (!R.ok) throw new Error(`Server returned ${R.status}`);
              return await R.json();
            },
            onSuccess: (y, x) => {
              if (y.success == ae.R) d.setQueryData(on(m, l), () => Wn(y));
              else {
                const R = d.getQueryData(on(m, l));
                if (R) {
                  const le = {
                    ...R,
                    success: y.success,
                    error_message: y.error_message,
                  };
                  d.setQueryData(on(m, l), () => le);
                }
              }
            },
          });
        }
        function Wn(m) {
          return {
            ...m,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: m.results
                .map((l) => l.voted_option_id)
                .reduce((l, d) => l.concat(d), []),
            },
          };
        }
        function on(m, l) {
          return tr(m.ConvertTo64BitString(), l);
        }
        function tr(m, l) {
          return ["usePartnerEventUserPoll", m, l];
        }
        function Bn(m, l, d) {
          return `${h.TS.COMMUNITY_BASE_URL}partnerevents/${m.ConvertTo64BitString()}/userpoll/${l}/${d ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${encodeURIComponent(location.origin)}`;
        }
        const nr = 1440 * 60;
        function Nn(m, l) {
          let d = 0;
          return (
            l.poll_end_time
              ? (d = l.poll_end_time)
              : (d =
                  (m.rtime32_visibility_start ?? m.rtime32_start_time ?? 0) +
                  (l.poll_end_days_since_start || nr)),
            d
          );
        }
        function rr(m, l) {
          return Nn(m, l) < Math.floor(Date.now() / 1e3);
        }
        var Dr = r(98609);
        const Ir = null;
        function xr(m) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${m.ConvertTo64BitString()}`;
        }
        var Kn = ((m) => (
            (m.k_EPollResult_NotVisible = "not_visible"),
            (m.k_EPollResult_Visible_After_Vote = "after_vote"),
            (m.k_EPollResult_Visible_After_End = "after_end"),
            (m.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (m.k_EPollResult_Visible_On_Demand = "on_demand"),
            m
          ))(Kn || {}),
          ir = ((m) => (
            (m.k_EPollVoter_AnyUser = "any_user"),
            (m.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (m.k_EPollVoter_MinPlayTime = "min_play_time"),
            (m.k_EPollVoter_MemberOfGroup = "member_of_group"),
            m
          ))(ir || {}),
          sr = r(76559),
          ar = r(28515),
          Rn = r(56330),
          lr = r(86959),
          or = r(6365),
          Kt = r.n(or);
        function mr(m) {
          const l = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "poll_id"),
            x = Number.parseInt(y),
            R = (0, ee.q3)(() => ur(l, x));
          if (!R || !l)
            return d
              ? (0, n.jsx)("div", {
                  className: Rn.ErrorStylesWithIcon,
                  children: (0, t.we)("#UserPolls_Editor_FailToFindModel", x),
                })
              : null;
          const le = (0, T.sfN)(h.TS.LANGUAGE);
          return (0, n.jsx)(jn.tH, {
            children: (0, n.jsx)(cr, {
              userPollDef: R,
              lang: le,
              eventModel: l,
            }),
          });
        }
        function ur(m, l) {
          return (
            (m?.jsondata?.user_polls || [])?.find((y) => y.poll_id == l) || null
          );
        }
        function cr(m) {
          const { eventModel: l, userPollDef: d, lang: y } = m,
            { userPollData: x, ...R } = Un(
              l.clanSteamID,
              l.GID || "0",
              d.poll_id,
            ),
            le = !!(R.error_message && R.error_message?.length > 0),
            ce = er(l.clanSteamID, l.GID || "0"),
            [Ke, Xe] = (0, o.useState)(void 0),
            [rt, Ze] = (0, o.useState)(!1),
            [gt, Ft] = (0, o.useState)(!1),
            Lt = x?.option_results && x?.option_results.length > 0,
            vt = ((x && x.voted_option_id?.length) || 0) > 0;
          return (
            (0, o.useEffect)(() => {
              !gt &&
                d.results_visibility_settings != Kn.k_EPollResult_NotVisible &&
                Lt &&
                (rr(
                  {
                    rtime32_visibility_start:
                      l.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: l.GetStartTimeAndDateUnixSeconds(),
                  },
                  d,
                ) ||
                  vt) &&
                Ft(!0);
            }, [Lt, vt, gt, l, d]),
            (0, n.jsxs)(dr, {
              ...m,
              children: [
                d.options?.map((ot) => {
                  const At = x?.option_results.find(
                      (mt) => mt.unique_id == ot.option_id,
                    ),
                    zt =
                      x?.voted_option_id.includes(ot.option_id || 0) ||
                      Ke === ot.option_id;
                  return (0, n.jsx)(
                    gr,
                    {
                      lang: y,
                      pollOptionDef: ot,
                      bSelected: zt,
                      nPercentage: gt ? At?.percent : void 0,
                      onClick: () => Xe(ot.option_id),
                      bDisableSelection:
                        R.bLoading || !x?.vote_permitted || le || rt || vt,
                    },
                    "polloption" + ot.option_id,
                  );
                }),
                !!Ke &&
                  (0, n.jsx)(p.$n, {
                    onClick: async () => {
                      if (
                        !R.userPollSubmitData.user_poll_option_votes.includes(
                          Ke,
                        )
                      ) {
                        Ze(!0);
                        const ot = {
                          user_poll_option_votes: [
                            ...R.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        ot.user_poll_option_votes.push(Ke),
                          await ce.mutateAsync({ votes: ot }),
                          Xe(void 0),
                          Ze(!1);
                      }
                    },
                    children: (0, t.we)("#Button_Submit"),
                  }),
                (rt || R.bLoading) &&
                  (0, n.jsx)(te.t, {
                    size: "small",
                    position: "center",
                    string: R.bLoading ? (0, t.we)("#Loading") : void 0,
                  }),
                Lt &&
                  !vt &&
                  !gt &&
                  (0, n.jsx)(Jn.W, {
                    onClick: () => Ft(!0),
                    children: (0, t.we)("#UserPolls_JustSeeResults"),
                  }),
                le &&
                  (0, n.jsx)("div", {
                    className: Rn.ErrorStylesWithIcon,
                    children: R.error_message,
                  }),
              ],
            })
          );
        }
        function dr(m) {
          const { userPollDef: l, lang: d, eventModel: y, children: x } = m,
            R = (0, ar.n)(),
            [le, ce] = (0, ee.q3)(() => [
              t.NT.GetWithFallback(l.localized_poll_description, d),
              l.user_poll_background,
            ]);
          let Ke;
          const Xe = y.clanSteamID.GetAccountID();
          ce &&
            (Ke = {
              backgroundImage: `url('${(0, lr.Fk)(Xe, ce)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const rt = (0, o.useMemo)(() => sr.b.InitFromClanID(Xe), [Xe]),
            { userPollData: Ze } = Un(rt, y.GID || "0", l.poll_id),
            gt = Nn(
              {
                rtime32_visibility_start:
                  y.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: y.GetStartTimeAndDateUnixSeconds(),
              },
              l,
            );
          return (0, n.jsx)("div", {
            className: Kt().PollBackground,
            style: Ke,
            children: (0, n.jsxs)("div", {
              className: Kt().PollContainer,
              children: [
                (0, n.jsx)("div", {
                  className: Kt().PollQuestion,
                  children: le,
                }),
                (0, n.jsx)("div", { className: Kt().PollOptions, children: x }),
                (0, n.jsxs)("div", {
                  className: Kt().PollStatus,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, t.Yp)(
                        "#UserPolls_status_N_Votes",
                        (0, Cn.D)(Ze?.total_votes || 0),
                      ),
                    }),
                    Ze?.display_message
                      ? (0, n.jsx)("div", { children: Ze?.display_message })
                      : (0, n.jsx)("div", {
                          children: (0, t.PP)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, qn.R2)(gt - R),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function gr(m) {
          const {
              pollOptionDef: l,
              onClick: d,
              lang: y,
              bDisableSelection: x,
              bSelected: R,
              nPercentage: le,
            } = m,
            [ce] = (0, ee.q3)(() => [
              t.NT.GetWithFallback(l.localized_option, y),
            ]),
            Ke = Math.round((le ?? 0) * 100),
            Xe = !x && !!d;
          return (0, n.jsxs)("div", {
            className: (0, Mt.A)({
              [Kt().PollOption]: !0,
              [Kt().Selected]: R,
              [Kt().Disabled]: x,
            }),
            role: "button",
            "aria-pressed": !!R,
            "aria-disabled": !!x,
            tabIndex: Xe ? 0 : void 0,
            onClick: Xe ? d : void 0,
            onKeyDown: Xe
              ? (rt) => {
                  (rt.key === "Enter" || rt.key === " ") &&
                    (rt.preventDefault(), d?.());
                }
              : void 0,
            children: [
              (0, n.jsx)("div", { className: Kt().BackgroundBar }),
              (0, n.jsx)("div", {
                className: Kt().ForegroundBar,
                style: { width: `${Ke}%` },
              }),
              (0, n.jsxs)("div", {
                className: Kt().ContentRow,
                children: [
                  (0, n.jsx)("div", { className: Kt().PollVoteIcon }),
                  le !== void 0 &&
                    (0, n.jsxs)("div", {
                      className: Kt().PctText,
                      children: [Ke, "%"],
                    }),
                  (0, n.jsx)("span", {
                    className: Kt().OptionText,
                    children: ce,
                  }),
                ],
              }),
            ],
          });
        }
        function jr(m) {
          return /\[userpolls\b/i.test(m);
        }
        var fr = r(90711),
          yr = r(30364);
        function vr(m) {
          const { dynamicImport: l, fallback: d, ...y } = m,
            [x] = (0, o.useState)(() =>
              o.lazy(async () => ({ default: await l() })),
            );
          return (0, n.jsx)(yr.f, {
            fallback: d,
            children: (0, n.jsx)(o.Suspense, {
              fallback: d,
              children: (0, n.jsx)(x, { ...y }),
            }),
          });
        }
        var hr = r(9032),
          pr = r(11547),
          Mr = r(1491);
        const Er = (m) => {
          const { vodInfo: l, bLoading: d } = (0, hr.fB)(m.appid);
          return !l && m.bPreviewMode
            ? (0, n.jsx)("div", {
                children: (0, t.we)(
                  d ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                  m.appid,
                ),
              })
            : (0, n.jsx)("div", {
                className: Mr.BroadcastCtn,
                children: (0, n.jsx)(jn.tH, {
                  children: (0, n.jsx)(vr, {
                    dynamicImport: async () =>
                      (
                        await Promise.all([
                          r.e(36597),
                          r.e(56589),
                          r.e(85599),
                          r.e(33512),
                          r.e(94781),
                          r.e(18307),
                          r.e(8892),
                          r.e(80702),
                          r.e(48355),
                          r.e(36786),
                          r.e(55050),
                          r.e(60480),
                          r.e(60839),
                          r.e(14632),
                          r.e(54409),
                          r.e(73810),
                          r.e(49968),
                          r.e(34004),
                          r.e(11095),
                          r.e(14867),
                          r.e(8319),
                          r.e(10177),
                          r.e(68396),
                        ]).then(r.bind(r, 7132))
                      ).default,
                    nAppIDVOD: m.appid,
                    watchLocation: fr.nn.TC,
                    bStartPaused: !0,
                  }),
                }),
              });
        };
        function Ar(m) {
          const l = new Set();
          for (const d of m.matchAll(/\[vod\b([^\]]*)\]/gi)) {
            const y = k_BBCodeAppIDArgRegExp.exec(d[1] ?? ""),
              x = y ? Number.parseInt(y[1] ?? y[2] ?? y[3] ?? "") : 0;
            x && l.add(x);
          }
          return Array.from(l);
        }
        function br(m) {
          const l = (0, pr.H)(m.args, "appid", 0);
          return (0, n.jsx)(Er, {
            appid: l,
            bPreviewMode: !!m.context.showErrorInfo,
          });
        }
        let An = null;
        function Sr() {
          return (
            An == null &&
              (An = new Map([
                ["remindme", { Constructor: L, autocloses: !1 }],
                ["vod", { Constructor: br, autocloses: !1 }],
                ["giveawayeligible", { Constructor: Q, autocloses: !1 }],
                ["claimitem", { Constructor: g, autocloses: !0 }],
                ["packagepurchaseable", { Constructor: gn, autocloses: !1 }],
                ["actiondialog", { Constructor: C, autocloses: !1 }],
                ["uploadfilebutton", { Constructor: Yn, autocloses: !0 }],
                ["userpolls", { Constructor: mr, autocloses: !1 }],
                ["meetsteamsessiongroup", { Constructor: wt, autocloses: !1 }],
                ["meetsteamscheduleview", { Constructor: He, autocloses: !1 }],
              ])),
            An
          );
        }
        let On = null;
        function Gn() {
          return (
            On == null &&
              (On = new Map([
                ...Array.from(Sr().entries()),
                ...Array.from(q.entries()),
              ])),
            On
          );
        }
        let Pn = null;
        function Or() {
          return (
            Pn == null &&
              (Pn = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(Gn().entries()),
              ])),
            Pn
          );
        }
        function wr(m) {
          return (0, n.jsx)(Tn, { children: (0, n.jsx)(pt.Zn, { ...m }) });
        }
        function Pr(m) {
          return jsx(Tn, { children: jsx(EventBBDisplayElement, { ...m }) });
        }
        function Tn(m) {
          return (0, n.jsx)(pt.d3, { dictionary: Gn(), children: m.children });
        }
      },
      42184: (fe, de, r) => {
        "use strict";
        r.d(de, { v: () => v });
        var n = r(7850),
          I = r(33752),
          a = r(36707),
          s = r(17009),
          t = r.n(s);
        function v(L) {
          return (0, n.jsx)("div", {
            className: (0, a.A)(
              t().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(I.W, { ...L }),
          });
        }
      },
      68988: (fe, de, r) => {
        "use strict";
        r.d(de, { C: () => w });
        var n = r(42277),
          I = r(72604),
          a = r(72609);
        const s = "partnereventaction/myvote",
          t = "partnereventaction/rateevent";
        async function v(p) {
          const S = a.TS.STORE_BASE_URL + s + "?gid=" + encodeURIComponent(p),
            V = await fetch(S, { credentials: "include" });
          if (!V.ok) throw new Error(`${S} answered ${V.status}`);
          return (await V.json()).vote ?? null;
        }
        async function L(p, S, V) {
          const te = a.TS.STORE_BASE_URL + t,
            se = {
              gid: p,
              clanaccountid: String(S),
              voteup: V == "up" ? "1" : "0",
            },
            C = await fetch(te, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(se),
            });
          if (!C.ok) throw new Error(`${te} answered ${C.status}`);
          return (await C.json()).success ?? I.zi;
        }
        const k = { GetMyEventVote: v, RateEvent: L };
        var F = r(72849),
          N = r(68312),
          P = r(90626),
          q = r(71742),
          z = r(67705);
        let A;
        function w(p, S) {
          const V = p?.AnnouncementGID,
            te = p?.clanSteamID.GetAccountID() ?? 0,
            se = h(),
            { myVote: C, Vote: K } = (0, n.KL)(V, te, se, {
              initialVote: o(V),
              ...S,
            });
          return {
            myVote: C,
            Vote: (u) => {
              !p ||
                !V ||
                u == C ||
                (C && p.UpdateVoteCount(C, -1), p.UpdateVoteCount(u, 1), K(u));
            },
          };
        }
        function h() {
          const { useActiveCMInterface: p } = (0, N.tc)(),
            S = (0, N.KV)(),
            V = !!p;
          return P.useMemo(
            () =>
              V
                ? {
                    GetMyEventVote: async (te) => await D(S, te),
                    RateEvent: async (te, se, C) => await f(S, te, se, C),
                  }
                : k,
            [V, S],
          );
        }
        async function D(p, S) {
          if (!p) return null;
          const V = await F.BE.GetClanAnnouncementVoteForUser(p, {
            announcementid: S,
          });
          return V.BSuccess()
            ? V.Body().voted_up()
              ? "up"
              : V.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function f(p, S, V, te) {
          return p
            ? (
                await F.BE.RateClanAnnouncement(p, {
                  announcementid: S,
                  vote_up: te == "up",
                  clan_accountid: V,
                })
              ).GetEResult()
            : I.Dy;
        }
        function o(p) {
          if (typeof window > "u") {
            (0, q.wT)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            A ||
              ((A = new Map()),
              (0, z.Fd)("uservotes", "application_config")?.forEach((V) => {
                V.clanAnnouncementGID &&
                  A.set(
                    V.clanAnnouncementGID,
                    V.voted_up ? "up" : V.voted_down ? "down" : null,
                  );
              })),
            p ? A.get(p) : void 0
          );
        }
      },
      98144: (fe, de, r) => {
        "use strict";
        r.r(de),
          r.d(de, {
            EventDisplaySteamAwardNomination: () => we,
            UserEligibleToNominateOrVote: () => ve,
            WinterSaleSteamAwardVoteWrapper: () => H,
            default: () => ue,
          });
        var n = r(7850),
          I = r(72604),
          a = r(99412),
          s = r(76945),
          t = r(64868),
          v = r(72609),
          L = r(89926),
          k = r(39905),
          F = r(40358),
          N = r(21721),
          P = r(1880),
          q = r(69168),
          z = r(12247),
          A = r.n(z),
          w = r(95695),
          h = r.n(w),
          D = r(85599),
          f = r(36707);
        function o(G) {
          return `${v.TS.MEDIA_CDN_URL}${s.bs}${G}`;
        }
        function p(G) {
          const {
              strMainTitle: me,
              subtitle: re,
              headerText: be,
              headerContent: Se,
              children: ne,
              footer: oe,
            } = G,
            xe = {
              backgroundColor: s.TY,
              backgroundImage: `url( ${o("header_notrophy.webp")} )`,
              color: s.m1,
            };
          return (0, n.jsxs)("div", {
            style: xe,
            className: (0, f.A)(A().SteamAwardContainer, h().PartnerEventFont),
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: A().SteamAwardHeaderImage,
                    src: o("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: A().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: A().SteamAwardMainTitle,
                        children: me,
                      }),
                      re,
                      (0, n.jsx)("div", {
                        className: A().SteamAwardHeaderText,
                        children: be,
                      }),
                      Se,
                    ],
                  }),
                ],
              }),
              ne,
              !!oe &&
                (0, n.jsx)("div", {
                  className: A().SteamAwardLinkToNominationPage,
                  children: oe,
                }),
            ],
          });
        }
        function S(G) {
          return `${v.TS.STORE_BASE_URL}steamawards/${G ? "nominations/" : ""}`;
        }
        function V() {
          return (0, n.jsx)(D.t, {
            className: A().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: k.Z.Localize("#Loading"),
          });
        }
        function te(G) {
          const { elDialogElement: me, fnShowLogonDialog: re } = (0, L.l)(),
            [be, Se, ne] = (0, t.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                me,
                (0, n.jsx)(q.E, {
                  active: be,
                  children: (0, n.jsx)(se, { bVote: G, closeModal: ne }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              v.iA.logged_in ? (v.iA.is_limited ? (Se(), !1) : !0) : (re(), !1),
          };
        }
        function se(G) {
          const { bVote: me, closeModal: re } = G;
          return (0, n.jsx)(P.o0, {
            strTitle: k.Z.Localize("#Informational_Message"),
            onCancel: re,
            onOK: re,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: k.Z.LocalizeReact(
                me
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${v.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: v.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: k.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function C(G) {
          const {
              strLocTokenInfix: me,
              unCurrentAppID: re,
              unNewAppID: be,
              fnOnConfirm: Se,
              closeModal: ne,
            } = G,
            { data: oe } = (0, F.J$)({ appid: re }),
            { data: xe } = (0, F.J$)({ appid: be }),
            { data: je } = (0, F.lv)({ appid: re }),
            { data: Te } = (0, F.lv)({ appid: be }),
            Ge = je ? (0, N.b0)(je, "small_capsule") : void 0,
            ke = Te ? (0, N.b0)(Te, "small_capsule") : void 0;
          return (0, n.jsx)(P.o0, {
            modalClassName: A().SteamAwardConflictModal,
            strTitle: k.Z.Localize(
              me == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: ne,
            onOK: Se,
            onCancel: ne,
            children: (0, n.jsxs)("div", {
              className: A().ConflictBody,
              children: [
                k.Z.LocalizeReact(
                  me == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: oe?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: A().SteamAwardModalGameTitle,
                    children: xe?.name,
                  }),
                ),
                Ge && ke
                  ? (0, n.jsxs)("div", {
                      className: A().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: Ge, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: ke, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(D.t, {
                      size: "small",
                      position: "center",
                      string: k.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var K = r(16412),
          c = r(53113);
        function u(G) {
          const {
              unAppID: me,
              widget: re,
              actions: be,
              bNominationsOpen: Se,
            } = G,
            ne = re.rgCategories[0],
            { data: oe } = (0, F.J$)({ appid: me }),
            {
              unNominatedAppID: xe,
              bAnswered: je,
              Nominate: Te,
            } = (0, s.Xx)(ne.eCategoryID, be),
            { elDialogElement: Ge, BCanTakeAction: ke } = te(!1),
            [ze, Fe, W] = (0, t.uD)();
          if (!re.bNominationsLive) return null;
          if (!je) return (0, n.jsx)(V, {});
          const _ = (0, c.NT)(S(!0)),
            he = xe == me,
            Me = re.rgCategories.length == 1,
            Je = Se && !ne.bLaborOfLove,
            $e = (O) => {
              if (!(!O || !ke())) {
                if (xe && xe != me) {
                  Fe();
                  return;
                }
                Te(me);
              }
            };
          return (0, n.jsxs)(p, {
            strMainTitle: k.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: A().SteamAwardSubTitle,
              children: [
                Se
                  ? k.Z.Localize("#SteamAwards_EventCallToAction")
                  : k.Z.Localize(
                      "#SteamAwards_EventVotingDateTeaser",
                      (0, s.xh)(),
                    ),
                Se &&
                  (0, n.jsxs)("a", {
                    href: _,
                    className: A().SteamAwardLearnMore,
                    children: [
                      "(",
                      k.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: Se
              ? Me
                ? k.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    oe?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: A().LinkText,
                    href: _,
                    children: k.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      oe?.name ?? "",
                    ),
                  })
              : k.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              Je &&
              (0, n.jsx)("a", {
                href: _,
                children: k.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(Me && (Se || he)) &&
                (0, n.jsx)("div", {
                  className: (0, f.A)(
                    A().SteamAwardNominationWidget,
                    A().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: A().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: s.Hu },
                        className: (0, f.A)(
                          A().SteamAwardNominateButton,
                          he && A().Nominated,
                        ),
                        children: (0, n.jsx)(K.Yh, {
                          controlled: !0,
                          className: (0, f.A)(
                            A().SteamAwardVoteCheckBox,
                            he && A().Nominated,
                          ),
                          checked: he,
                          onChange: $e,
                          disabled: he,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: A().SteamAwardCategoryTitle,
                            children: k.Z.Localize(
                              he
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              ne.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: A().SteamAwardCategoryDesc,
                        children: ne.strDescription,
                      }),
                    ],
                  }),
                }),
              Ge,
              (0, n.jsx)(q.E, {
                active: ze,
                children: (0, n.jsx)(C, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: xe,
                  unNewAppID: me,
                  fnOnConfirm: () => Te(me),
                  closeModal: W,
                }),
              }),
            ],
          });
        }
        function g(G) {
          const {
              unAppID: me,
              widget: re,
              actions: be,
              bVotesOpen: Se,
              bHideCategoryDescriptions: ne,
            } = G,
            { data: oe } = (0, F.J$)({ appid: me }),
            xe = (0, c.NT)(S(!1));
          return (0, n.jsx)(p, {
            strMainTitle: k.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: Se
              ? k.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  oe?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: xe,
                  className: A().LinkText,
                  children: k.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: A().AwardCategoriesCtn,
              children: re.rgCategories.map((je) =>
                (0, n.jsx)(
                  E,
                  {
                    unAppID: me,
                    category: je,
                    actions: be,
                    bVotesOpen: Se,
                    bHideDescription: ne,
                  },
                  je.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: xe,
              children: k.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function E(G) {
          const {
              unAppID: me,
              category: re,
              actions: be,
              bVotesOpen: Se,
              bHideDescription: ne,
            } = G,
            {
              unVotedAppID: oe,
              bAnswered: xe,
              Vote: je,
            } = (0, s.VV)(re.eCategoryID, be),
            { elDialogElement: Te, BCanTakeAction: Ge } = te(!0),
            [ke, ze, Fe] = (0, t.uD)(),
            W = oe == me;
          if (!Se && !W) return null;
          const _ = () => {
            if (!(!xe || !Ge())) {
              if (oe && oe != me) {
                ze();
                return;
              }
              je(me);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: s.Hu },
            className: A().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: A().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, f.A)(
                      A().SteamAwardCategoryTitle,
                      A().VotingTitle,
                    ),
                    children: re.strTitle,
                  }),
                  !ne &&
                    (0, n.jsx)("div", {
                      className: A().SteamAwardCategoryDesc,
                      children: re.strDescription,
                    }),
                  W
                    ? (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: k.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: A().SteamAwardVoteButton,
                        onClick: _,
                        children: (0, n.jsx)("span", {
                          className: A().SteamAwardVoteButtonText,
                          children: k.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              Te,
              (0, n.jsx)(q.E, {
                active: ke,
                children: (0, n.jsx)(C, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: oe,
                  unNewAppID: me,
                  fnOnConfirm: () => je(me),
                  closeModal: Fe,
                }),
              }),
            ],
          });
        }
        var Q = r(68312),
          B = r(34041),
          b = r(65946),
          T = r(90626),
          J = r(76035),
          Y = r(28515),
          ee = r(18210),
          ye = r(3166),
          M = r(96538),
          ge = r(88003),
          U = r(85385),
          ae = r(47875);
        function ve(G) {
          return ye.iA.logged_in
            ? ye.iA.is_limited
              ? ((0, ge.pg)(
                  (0, n.jsx)(U.g, {
                    strTokenOverride: G
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, ge.pg)(
                (0, n.jsx)(M.o0, {
                  strTitle: (0, ee.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, ee.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, ee.we)("#MobileLogin_SignIn"),
                  onOK: ae.l,
                }),
                window,
              ),
              !1);
        }
        function Ee(G) {
          const me = (0, Q.KV)();
          return (0, T.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, J.kr)(me),
              NominateForSteamAward: async (re, be) => {
                if (G) return I.R;
                const [Se] = await (0, J.N2)(me, re, be, B.Ji.mP);
                return Se;
              },
              GetMySteamAwardVotes: () => (0, J.QS)(me, s.sK),
              SetSteamAwardVote: async (re, be) => {
                if (G) return I.R;
                const [Se] = await (0, J.rv)(me, re, be, s.sK);
                return Se;
              },
            }),
            [me, G],
          );
        }
        const Le = [];
        function Re(G, me, re) {
          const be = G.some(s.aS) || me.some(s.aS),
            Se = (0, J.Jo)(be ? s.sK : void 0);
          return be
            ? Se.data
              ? {
                  widgets: (0, s.$G)(Se.data.votes ?? [], G, me, re),
                  bLoading: !1,
                }
              : { bLoading: Se.isPending }
            : { bLoading: !1 };
        }
        function Ne(G, me) {
          return me ? { ...G, bNominationsLive: !0 } : G;
        }
        function Pe(G) {
          return !!G && ye.TS.EUNIVERSE == a.wLO;
        }
        function we(G) {
          const { event: me, previewMode: re } = G,
            [be, Se] = (0, b.q3)(() => [me.GetSteamAwardCategory(), me.appid]),
            ne = (0, Y.n)(),
            { widgets: oe, bLoading: xe } = Re([be], Le, ne),
            je = Ee(Pe(re));
          if (xe) return (0, n.jsx)(V, {});
          if (!oe?.nomination) return null;
          const Te =
            me.BIsEventActionEnabled(ne) ||
            ne < me.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsx)(u, {
            unAppID: Se,
            actions: je,
            widget: Ne(oe.nomination, !!re),
            bNominationsOpen: Te,
          });
        }
        function H(G) {
          const {
              appID: me,
              voteCategories: re,
              bIsEventActionEnabled: be,
              previewMode: Se,
              bRenderFromStorePage: ne,
            } = G,
            oe = (0, Y.n)(),
            { widgets: xe, bLoading: je } = Re(Le, re ?? Le, oe),
            Te = Ee(Pe(Se));
          return je
            ? (0, n.jsx)(V, {})
            : xe?.vote
              ? (0, n.jsx)(g, {
                  unAppID: me,
                  widget: xe.vote,
                  actions: Te,
                  bVotesOpen: be || !!Se,
                  bHideCategoryDescriptions: ne,
                })
              : null;
        }
        function ue(G) {
          const me = (0, ye.Tc)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return me
            ? (0, n.jsx)(H, {
                appID: G.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: me,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${G.appID}`,
              ),
              null);
        }
      },
      79590: (fe, de, r) => {
        "use strict";
        r.d(de, { m: () => A });
        var n = r(7850),
          I = r(99412),
          a = r(90626),
          s = r(48421),
          t = r(36707),
          v = r(18210),
          L = r(53113),
          k = r(72609),
          F = r(20193),
          N = r(29630),
          P = r(60480);
        function q(w) {
          const { gidEvent: h } = w,
            D = usePartnerEventByEventGID(h);
          return D
            ? jsx(z, {
                event: D,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(D) ?? ""),
              })
            : null;
        }
        function z(w) {
          const { event: h, lang: D, href: f } = w,
            [o, p] = (0, a.useMemo)(() => {
              const S = h.jsondata.localized_sale_product_banner,
                V = h.jsondata.localized_sale_product_mobile_banner;
              if (S?.length && V?.length) {
                const te = v.NT.GetWithFallback(S, D),
                  se = v.NT.GetWithFallback(V, D);
                if (te?.length && se?.length)
                  return [
                    N.zU.GenerateURLFromHashAndExt(h.clanSteamID, te),
                    N.zU.GenerateURLFromHashAndExt(h.clanSteamID, se),
                  ];
              }
              return [void 0, void 0];
            }, [h, D]);
          return !o?.length || !p?.length
            ? null
            : (0, n.jsxs)("a", {
                href: f,
                className: F.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: o,
                    className: (0, t.A)(F.Banner, F.Big),
                  }),
                  (0, n.jsx)("img", {
                    src: p,
                    className: (0, t.A)(F.Banner, F.Mobile),
                  }),
                ],
              });
        }
        function A(w) {
          const { gidEvent: h } = w,
            D = (0, s.RR)(h);
          return D
            ? (0, n.jsx)(z, {
                event: D,
                lang: (0, I.sfN)(k.TS.LANGUAGE),
                href: (0, L.k2)((0, P.n4)(D) ?? ""),
              })
            : null;
        }
      },
      18057: (fe, de, r) => {
        "use strict";
        r.d(de, {
          K4: () => o,
          gS: () => p,
          pg: () => w,
          u1: () => V,
          v9: () => S,
          yi: () => h,
        });
        var n = r(7850),
          I = r(90626),
          a = r(71421),
          s = r(18210),
          t = r(75844),
          v = r(36707),
          L = r(36174),
          k = r(55351),
          F = r.n(k),
          N = r(7582),
          P = r(28515),
          q = r(54357),
          z = r(87937),
          A = r.n(z);
        function w(C, K) {
          const u = K ?? A().tz.guess(),
            g = A().unix(C).tz(u),
            E = (0, s.l4)();
          return E && g.locale(E), g.format("LT");
        }
        function h(C, K, c) {
          const g = c ?? A().tz.guess(),
            E = A().unix(C).tz(g),
            Q = (0, s.l4)();
          return (
            Q && E.locale(Q),
            (0, n.jsxs)(I.Fragment, {
              children: [
                E.format("LT"),
                K
                  ? (0, n.jsx)(a.Gq, {
                      toolTipContent: E.format("Z") + ", " + g,
                      children: (0, n.jsxs)("span", {
                        children: ["\xA0", E.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function D(C, K, c) {
          return (0, s.TW)(C, {
            weekday: "short",
            year: c ? void 0 : "numeric",
            timeZone: K,
          });
        }
        function f(C, K, c, u) {
          return A().unix(C).tz(c).isSame(A().unix(K).tz(c), u);
        }
        const o = (0, t.PA)((C) => {
            const {
                dateAndTime: K,
                bSingleLine: c,
                bOnlyTime: u,
                bOnlyDate: g,
              } = C,
              E = (0, q.B)(),
              Q = !u && !!K,
              B = !g && !!K,
              b = Q && D(K, E),
              T = C.stylesmodule ? { ...F(), ...C.stylesmodule } : F();
            return c
              ? (0, n.jsxs)("span", {
                  className: u || g ? T.DateAndTimeInline : T.DateAndTime,
                  children: [
                    Q && b,
                    Q && B ? (0, n.jsx)("span", { children: "\xA0" }) : void 0,
                    !!(K && B) && h(K, B, E),
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: T.DateAndTime,
                  children: [
                    Q &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: T.LocalizedDate,
                            children: b,
                          }),
                          " ",
                          (0, n.jsx)("span", {
                            className: T.At,
                            children: (0, s.we)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: T.LocalizedTime,
                      children: !!(K && B) && h(K, B, E),
                    }),
                  ],
                });
          }),
          p = (C) => {
            const K = (0, n.jsx)("div", {
              className: C.stylesmodule?.DateToolTip,
              children: (0, n.jsx)(o, {
                dateAndTime: C.rtFullDate,
                bSingleLine: !0,
                stylesmodule: C.stylesmodule,
              }),
            });
            return (0, n.jsx)(a.m9, {
              toolTipContent: K,
              direction: "top",
              className: C.className,
              bTopmost: !0,
              children: C.children,
            });
          },
          S = (0, t.PA)((C) => {
            const { startDateAndTime: K, endDateAndTime: c = 0 } = C,
              u = C.stylesmodule ? { ...F(), ...C.stylesmodule } : F(),
              g = (0, q.B)(),
              E = (0, P.n)(),
              Q =
                C.bHideEndTime ||
                C.endDateAndTime == null ||
                C.endDateAndTime < 1;
            if (K == null || K == 0)
              return (0, n.jsxs)("div", {
                className: u.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: u.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if (Q)
              return (0, n.jsxs)("div", {
                className: u.StartDate,
                children: [
                  (0, n.jsxs)("div", {
                    className: u.RightSideTitles,
                    children: [
                      (0, s.we)(
                        K < E
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, n.jsx)(o, { stylesmodule: u, dateAndTime: K }),
                ],
              });
            const B = K <= E && E <= c,
              b = f(K, c, g, "day");
            return (0, n.jsxs)("div", {
              className: u.MultiDateAndTime,
              children: [
                (0, n.jsxs)("div", {
                  className: u.StartDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: u.RightSideTitles,
                      children: (0, s.we)(
                        K >= E
                          ? "#EventDisplay_TimeBeginsOn"
                          : c >= E
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: u,
                      bSingleLine: !0,
                      dateAndTime: K,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: u.EndDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: u.RightSideTitles,
                      children: (0, s.we)(
                        c < E
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, n.jsx)(o, {
                      stylesmodule: u,
                      bSingleLine: !0,
                      bOnlyTime: b,
                      dateAndTime: c,
                    }),
                  ],
                }),
                B &&
                  (0, n.jsx)("span", {
                    className: u.ActiveEvent,
                    children: (0, n.jsx)("span", {
                      className: (0, v.A)(
                        u.RightSideTitles,
                        u.ActiveEventCallOut,
                      ),
                      children: (0, s.we)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          V = (0, t.PA)((C) => {
            const {
                startDateAndTime: K,
                endDateAndTime: c,
                bHideEndTime: u,
              } = C,
              g = C.stylesmodule ? { ...F(), ...C.stylesmodule } : F(),
              E = (0, q.B)(),
              Q = (0, P.n)();
            if (K == null || K == 0)
              return (0, n.jsxs)("div", {
                className: g.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: g.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const B = f(K, Q, E, "year"),
              b = (0, n.jsx)("div", {
                className: g.ShortDateAndTime,
                children: D(K, E, B),
              });
            let T = (0, n.jsxs)(p, {
              rtFullDate: K,
              stylesmodule: g,
              children: [
                (0, n.jsx)("div", {
                  className: g.RightSideTitles,
                  children: (0, s.we)(
                    K < Q
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                b,
              ],
            });
            if (
              (Q < K &&
                K < Q + L.Kp.PerWeek &&
                (T = (0, n.jsx)(p, {
                  rtFullDate: K,
                  stylesmodule: g,
                  children: (0, n.jsx)("div", {
                    className: g.RightSideTitles,
                    children: (0, s.PP)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      b,
                      (0, n.jsxs)("div", {
                        className: g.ShortDateAndTime,
                        children: [h(K, !1, E), " "],
                      }),
                    ),
                  }),
                })),
              u || c == null || c < 1)
            )
              return T;
            const J = K <= Q && Q <= c;
            J &&
              (T = (0, n.jsx)(p, {
                rtFullDate: K,
                className: g.ActiveEvent,
                stylesmodule: g,
                children: (0, n.jsx)("span", {
                  className: g.ActiveEventCallOut,
                  children: (0, s.we)("#Time_Now"),
                }),
              }));
            let Y = null;
            const ee = J ? c - Q : c - K;
            if (ee <= L.Kp.PerDay) {
              const M = (0, n.jsx)("div", {
                className: g.ShortDateAndTime,
                children: (0, s.Hq)(ee, !0),
              });
              c < Q
                ? (Y = (0, n.jsxs)("div", {
                    className: g.RightSideTitles,
                    children: [(0, s.we)("#EventDisplay_TimeEndsOn_Ran"), M],
                  }))
                : (Y = (0, n.jsx)("div", {
                    className: g.RightSideTitles,
                    children: (0, s.PP)(
                      J
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      M,
                    ),
                  }));
            } else {
              const M = f(c, Q, E, "year");
              Y = (0, n.jsxs)(I.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: g.RightSideTitles,
                    children: (0, s.we)(
                      c < Q
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: g.ShortDateAndTime,
                    children: D(c, E, M),
                  }),
                ],
              });
            }
            const ye = (0, n.jsx)(p, {
              rtFullDate: c,
              stylesmodule: g,
              children: Y,
            });
            return (0, n.jsxs)("div", {
              className: g.ShortDateRange,
              children: [T, ye],
            });
          });
        function te(C, K, c) {
          const u = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            g = new Date(C * 1e3),
            E = new Date(K * 1e3),
            Q = u.getFullYear() == g.getFullYear(),
            B = u.getFullYear() == E.getFullYear(),
            b = g.getFullYear() == E.getFullYear(),
            T = b && g.getMonth() == E.getMonth(),
            J = T && g.getDate() == E.getDate(),
            Y = {
              day: "numeric",
              month: c ?? "long",
              year: Q ? void 0 : "numeric",
            },
            ee = g.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              Y,
            );
          if (J) return ee;
          {
            const ye = {
                day: "numeric",
                month: T && B ? void 0 : (c ?? "long"),
                year: b ? void 0 : "numeric",
              },
              M = E.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                ye,
              );
            return ee + " - " + M;
          }
        }
        function se(C) {
          const {
            rtStartDate: K,
            rtEndDate: c,
            strMonthFormat: u,
            className: g,
          } = C;
          return jsxs("div", { className: g, children: [te(K, c, u), " "] });
        }
      },
      32651: (fe) => {
        fe.exports = {
          sketchfab_play_overlay_image: "_2WGPdoLu3Mok312NPs4DC_",
          sketchfabmodelembedded: "_14FKhrcp5aEfuZXW03a6au",
          dynamiclink_box: "la-zlY3wcco-_OyUTXmWM",
          dynamiclink_preview: "B_zezwCTpciygxrjvmXNV",
          dynamiclink_content: "ZTL8kcUkjRh3Jhqb-3UG5",
          dynamiclink_name: "FZ02D3gsewSiEX4HnmBN-",
          dynamiclink_type: "_2vy-XuvOjtS-m9dMXarnp_",
          dynamiclink_author: "_11n3JjqH-AfIdduU-GuPbA",
        };
      },
      89767: (fe) => {
        fe.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (fe) => {
        fe.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (fe) => {
        fe.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      93507: (fe) => {
        fe.exports = {
          Ctn: "_3NIqIo6tGlpqtfGjHpyLie",
          VisibilityOverride: "_3pcYsTE5HL27MtO86WYmme",
          CtnRegistered: "_1VB65QYhIgMFp2q1ZP6J7m",
          SessionTitle: "_1OTRg9MwZ-gXnTlzsAk3eo",
          SessionDesc: "p3KQHdRiob_3hxCpLh0uq",
          SessionAudience: "_2uhzVmwMkXjVFDHkkGZHH2",
          SessionInfoLink: "_3p8YtOkGirN939Ea_jXZxt",
          SessionOptions: "_2wVsMqm6JJCnwCY17iSy8e",
          InstanceDivider: "gl2vdc67LNUjjtiXqPFH7",
          SessionColumnCtn: "_2f1ChYzzL2olk2rc26ryZd",
          SessionInstance: "_2Ds0oFNiqwjLbUIXS3vtza",
          Background: "_7eGMMwFRbr4j5BfzKni4",
          Button: "_3GG-T1DiWDj3SFj3OxHvqk",
          Title: "FASRtKtyZqBG0qYF-Z9jC",
          TimeFrame: "_1Bghmlop5OeD8yo0vgWZfi",
          MaxSize: "K4pWcOihhDvMT-fDws-VV",
          SoldOut: "rgGd8Am1rg1mz_kxvEGH6",
          Max: "_1yjWYrgU1bUzf5NayfQasE",
          Day: "_1nveS3mgrR2b1IS8eMMbyB",
          Time: "_2yvFwPbCS-ANZl7acURIx_",
          Registering: "_83qj5S18JG9HmEKI9Wmc7",
          Registered: "_2qabIqTzYkEcr3iJYDlZzc",
          RegisteredElsewhere: "_3aHc8KtKOQ-SwqTYJIuDb8",
          Unregistering: "_275cqznDlVXIWbEw8_PnF3",
          StatusText: "_2GDjx_pi9_pnifIUoqsaGc",
          CompleteRegistrationCtn: "_1GysEsKJ5GLzadr9CREzKu",
          Visible: "NxuVWv-dDPNw29fHP7030",
          "confirm-panel-intro": "_3Fo1c-SNWhknOr2k_l8u3g",
          ExpanderRow: "_7dh50vSyIAlY2RiPYghM_",
          FAQDisplay: "_2b79ASKFdOZ6byYhNUAt_f",
          SingleDayCtn: "_35p36HiLyvDBzAUK1o3rJu",
          ScheduleTopDate: "_1zgdCPTGowHjI64yMQ0SIX",
          ScheduleRow: "_3qt63DpwOZeaHX-5Ma_gTC",
          ScheduleTimeColumn: "_1nL-IL0bfiLvA7Xt_OXHH6",
          Timezone: "_11w6YvEmWuRgFvbXV-ewap",
          ScheduleSessionsColumn: "_1EgCyIh4WiJJ6qFQPgDCU4",
          ScheduleActionRow: "_2bw3ivGwUkjG31I4_kwk7r",
        };
      },
      6365: (fe) => {
        fe.exports = {
          PollBackground: "_2r_t3AhqjpzUxObM0vLPwL",
          PollContainer: "_3hHnAsj2GNM_j1UZvYD5mi",
          PollQuestion: "_3jEARWe0zZetd6h8KP6kCo",
          PollOptions: "_1M3TJW3OFn6kL8Y2NegE1Q",
          PollOption: "_1qcuI6mCt5_qtvFIRZYFUl",
          Selected: "_1tGKmiNT8kR1M3BFlWcG1j",
          PollVoteIcon: "_1dpuVtT-fBprfWUYwIYVf9",
          Disabled: "FNR2rMnaJDHSxS8QcOw3Z",
          ContentRow: "_2y19ohgg-3iLZIuV1Pt627",
          BackgroundBar: "_2R8BCMr1cgNzCrRd3tkNNb",
          ForegroundBar: "OSxkpWT-ORYpJSdW2JZMm",
          PctText: "MU9BomtVv8bCuqosNmbo",
          OptionText: "_2MjpgTcoK-yty8ZkBXirNL",
          PollStatus: "tpwoVtxSkk230qksahSCn",
        };
      },
      1491: (fe) => {
        fe.exports = { BroadcastCtn: "b2Fu47WqOo1P0imbAoSy1" };
      },
      38182: (fe) => {
        fe.exports = {
          narrowWidth: "500px",
          EventDetailTimeInfo: "xBUZ1jJ4rafFpeTqBLFXy",
          StartDate: "_3fnIGWmHQRS3H57PR7Qm0V",
          EndDate: "_27ujtr5AsAF4_qa1HEifF4",
          MultiDateAndTime: "_130Qkcrkkg7Ygi1ksNJVM",
          RightSideTitles: "_34vtF4hGMg7lb2WZUbe8ie",
          DateAndTime: "zLuUcDh0YJONQX3MssuAu",
          VerticalLocalDateAndTime: "MT8Ri2dV3bsGLkpXTvoVG",
        };
      },
      20881: (fe) => {
        fe.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      20193: (fe) => {
        fe.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      98462: (fe) => {
        fe.exports = { ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG" };
      },
      42937: (fe) => {
        fe.exports = {
          FlexColumnContainer: "rh8dmsOr2EWCLPlwnCFIJ",
          FullStartTime: "_2hYSOJf-lN9ud36C3VZ8e9",
          ReminderDialog: "_1wuYdqboukc5kNT3-44sfX",
          ReminderOptions: "_2QnQmTwVmvRwL6o4ysTPBQ",
          ReminderBackground: "_13UwIiuzRz_qEbDAVBW-t-",
          ReminderExpandsLeft: "_1-ZywREdsd3bg4EdYP0XeG",
          ReminderOption: "_1x4NpiMrsiBt6sYz1zzHIc",
          Unverified: "X5LUdUZjlvYo4k6czlifb",
          CheckboxWrapper: "xpjXUWiD1HYf5bLjnpEMH",
          ReminderCheckBox: "kPLmwYMHgDUHl1qO252N2",
          IconMode: "_12XV43l_Qpg43IzyNzxR2O",
          RemindBell: "_2HlM-E-WiSOionA9tu8HB1",
          RemindCheck: "_2JziNs1TXz_ViAio_L0hFY",
          ReminderDefault: "_3NwTBeStn8IpEP8Zg2jIF6",
          TextMode: "_1zPOQ2nBel9G46FV8P-KA-",
          ReminderCheck: "_1eDuCf0wTgvblQ_etRjP06",
          ReminderOpennedOptions: "zwAlLjqNWaKW-8d69n0KK",
          ReminderOptionsHeader: "-EdAjT_iIqwrdjsZlHLXt",
          ReminderCalendarOptions: "_2fcTGlG_bOzJAhswx6vIIz",
          ReminderSettings: "_3Pr4BoHW3n0OD8XPdtzVAW",
          ReminderNotes: "_2mOFOyTA2w0vN-SOWZNXwi",
          RpcThrobber: "_2Aby7dwRv-eMDWo3OwH59",
        };
      },
      19890: (fe) => {
        fe.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      74187: (fe) => {
        fe.exports = {
          CheckMark: "_3QpozFqH35lAw0VLMCSzjT",
          DialogCtn: "_1Bzbk55gxuoPniZQJkoTjn",
          EquipCtn: "_2_ZLb7Wk-U4cDrBvFBE7b5",
        };
      },
      48963: (fe) => {
        fe.exports = {
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
      89206: (fe) => {
        fe.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      39362: (fe) => {
        fe.exports = { Ctn: "_1xGaMOW4aakB5uwqOCT3nI" };
      },
      71714: (fe) => {
        fe.exports = {
          UploadPreviewContainer: "CCBFyy2uP4GNSQGfe2T1L",
          SVGIcon_Video: "_2Fs53eUCdV8xsO83Jc40DH",
          UploadPreview: "_1cXUbzBtV9qFc_63x_j2F2",
          FileUploadFileName: "_21dZgGfG0xtybuVTE6nCv0",
          FileUploadCancel: "rFDt7lDfNBv3BUjppBm9i",
          SVGIcon_X_Line: "_1H7hrp21ukrcZyCAzv9Oc1",
          FileUploadBtn: "_2FFH3ZhSGGItb8Z61CSGfe",
          FileUploadProgressContainer: "_1UobbffXVmx8rwsOHYeNb5",
          FileUploadProgressBarContainer: "tFbvGbecHSHr8P3EdINV-",
          FileUploadProgressName: "_288RbRaiLR6h9q5sWoD2eC",
        };
      },
      17009: (fe) => {
        fe.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          Up: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      19332: (fe) => {
        fe.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      14256: (fe) => {
        fe.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      6878: (fe) => {
        fe.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      12247: (fe) => {
        fe.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      56330: (fe) => {
        fe.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      90316: (fe) => {
        fe.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          StickyPageBarColumn: "_2aUTuHeHvSh1O3J73MAMmQ",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          UnpublishedDataBar: "j-JOpd1RiQoelltUAkGGx",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          UnpublishedDataBarTitle: "l7Y1p6I1nHpnwDPjA-a3t",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          UnpublishedDataBarDetail: "_3130s6Y2hpKUIZucKqpnwE",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          VO: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
        };
      },
      39256: (fe) => {
        fe.exports = { ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV" };
      },
      55351: (fe) => {
        fe.exports = {
          DateAndTime: "_2V6GLdiU4guy4ND3n4Usgg",
          DateAndTimeInline: "HZ6b2d4r4EFnT_1BeU5vo",
          At: "Fn5EUtWkwSAw_gbbiySKN",
          ActiveEvent: "rT7EkJjqw27KBB7HxAAWk",
          ActiveEventCallOut: "_2pJftSRjT_UngZZ4BJimwg",
          RightSideTitles: "_4LAnPYKRPeF-QDReu_VGm",
          DateToolTip: "_2E5LHvnVEF3dSVV3wrDflm",
          ShortDateAndTime: "MBkkhT4wei3tWetnWbiqn",
          ShortDateRange: "_3CN6I3krBRNzD7kCuKQ_w7",
        };
      },
    },
  ]);
})();
