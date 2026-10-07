/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39297],
    {
      98001: (U, ue, o) => {
        "use strict";
        o.d(ue, { v: () => h });
        var t = o(72609);
        function ee(_) {
          const { appid: D, profileUrl: C, dlc: x } = _,
            Q = C
              ? `${C}/achievements/${D}`
              : `${Config.COMMUNITY_BASE_URL}achievements/${D}`;
          return x !== void 0 ? `${Q}?dlc=${x}` : Q;
        }
        function h(_) {
          const { appid: D, profileUrl: C } = _;
          return C
            ? `${C}/stats/${D}/achievements/`
            : `${t.TS.COMMUNITY_BASE_URL}stats/${D}/achievements/`;
        }
      },
      3946: (U, ue, o) => {
        "use strict";
        o.d(ue, { V: () => h });
        var t = o(7850),
          ee = o(72080);
        function h(_) {
          return (0, t.jsxs)("a", {
            href: _.strURL,
            className: ee.gg.Box,
            "data-modal-content-sizetofit": !!_.bSizeToFit,
            "data-appid": _.appid,
            "data-publishedfileid": _.publishedfileid,
            children: [
              (0, t.jsx)(ee.KN, { strURL: _.strPreviewURL }),
              (0, t.jsxs)(ee.J7, {
                children: [
                  (0, t.jsx)(ee.bv, { children: _.strTitle }),
                  (0, t.jsx)("div", {
                    children: (0, t.jsx)("span", {
                      className: ee.gg.Type,
                      children: _.strType,
                    }),
                  }),
                  _.author && (0, t.jsx)(ee.zN, { children: _.author }),
                  (0, t.jsx)(ee.AT, { children: _.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      93191: (U, ue, o) => {
        "use strict";
        o.d(ue, { F: () => h, n: () => ee });
        var t = o(72609);
        function ee(_, D) {
          return _?.public_data?.profile_url
            ? `${t.TS.COMMUNITY_BASE_URL}id/${_.public_data.profile_url}`
            : h(_?.public_data?.steamid || D);
        }
        function h(_) {
          return _ ? `${t.TS.COMMUNITY_BASE_URL}profiles/${_}` : "";
        }
      },
      15860: (U, ue, o) => {
        "use strict";
        o.d(ue, { L: () => C, c: () => D });
        var t = o(27386),
          ee = o(76617),
          h = o(58632),
          _ = o.n(h);
        function D(x, Q) {
          return new (_())(
            async (b) => {
              const u = [...b],
                a = await t.xtC.GetPlayerLinkDetails(x, { steamids: u }),
                E = new Map();
              return (
                a
                  .Body()
                  .accounts()
                  .forEach((g) => {
                    const $ = g.toObject();
                    E.set($.public_data.steamid, $);
                  }),
                u.map((g) => E.get(g) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...Q },
          );
        }
        function C(x) {
          return (0, ee.V)("PlayerLinkDetails", () => D(x));
        }
      },
      69596: (U, ue, o) => {
        "use strict";
        o.d(ue, { O: () => h });
        const t =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function ee(_) {
          return _ ? t.test(_.trim()) : !1;
        }
        function h(_, D) {
          return ee(_) ? _ : D;
        }
      },
      11547: (U, ue, o) => {
        "use strict";
        o.d(ue, { H: () => $e, k: () => nt });
        var t = o(7850),
          ee = o(29950),
          h = o(29630),
          _ = o(68941),
          D = o(70187),
          C = o(1917),
          x = o(24660),
          Q = o(72609),
          b = o(86722),
          u = o(6878),
          a = o.n(u),
          E = o(53107),
          g = o(36707),
          $ = o(53113),
          T = o(69596),
          S = o(35265);
        function me(I) {
          switch (I) {
            case "button":
              return (0, g.A)(a().LinkButton, "LinkButton");
            case "pill":
              return (0, g.A)(a().LinkPill, "LinkPill");
            default:
              return (0, g.A)(a().Link, "Link");
          }
        }
        function P(I, z, F) {
          let H = "";
          return (
            I == "button" && z && (H += `background-color: ${z};`),
            I == "pill" && F && (H += `color: ${F};`),
            H.length == 0 ? void 0 : H
          );
        }
        function Z(I, z, F) {
          let H;
          return (
            (I == "button" || I == "pill") && z && (H = { backgroundColor: z }),
            (I == "button" || I == "pill") &&
              F &&
              (H = { ...(H ?? {}), color: F }),
            H
          );
        }
        function Ie(I, z) {
          const F = (
            typeof I == "string"
              ? I
              : Array.isArray(I) && I.length == 1 && typeof I[0] == "string"
                ? I[0]
                : void 0
          )?.trim();
          return !F || !z ? !0 : F != z.trim();
        }
        function ve(I) {
          let z = (0, ee.J)((0, D.j$)(I.args) || (0, D.j$)(I.args, "href"));
          const F = (0, D.j$)(I.args, "style"),
            H = (0, D.j$)(I.args, "id"),
            Be = (0, T.O)(
              (0, D.j$)(I.args, "buttoncolor") || (0, D.j$)(I.args, "bgcolor"),
              void 0,
            ),
            je = (0, T.O)(
              (0, D.j$)(I.args, "labelcolor") || (0, D.j$)(I.args, "color"),
              void 0,
            ),
            Pe = me(F),
            Re = I.context.event,
            We = (0, h.z5)(z, I.language, Re?.rtime32_last_modified),
            He = (0, S.W7)(Ie(I.children, z) ? "" : (z ?? ""));
          if (He && z) return He.fnBBComponent(z, { event: I.context.event });
          if (We === void 0 || We == null) return I.children || "";
          typeof We == "string" ? (z = We) : (z = We[1]);
          const Ze = Z(F, Be, je);
          return typeof z == "string" && z.length > 0 && z[0] == "#"
            ? (0, t.jsx)(x.Ii, {
                className: Pe,
                href: z,
                style: Ze,
                children: I.children,
              })
            : z == "steam://settings/account"
              ? (0, t.jsx)(E.uU, {
                  className: Pe,
                  href: "steam://settings/account",
                  children: I.children,
                })
              : (0, t.jsx)(b.d$, {
                  className: Pe,
                  url: z,
                  event: I.context.event,
                  id: H,
                  style: Ze,
                  children: I.children,
                });
        }
        function ae(I) {
          const z = (0, D.j$)(I.args, "href"),
            F = (0, S.W7)(z);
          return F
            ? F.fnBBComponent(z, { event: I.context.event })
            : (0, t.jsx)(ve, { ...I });
        }
        var te = o(25046),
          le = o(29522),
          Se = o(40358),
          Y = o(64271),
          k = o(90626),
          X = o(67523),
          V = o.n(X),
          ie = o(36118),
          ye = o(18210),
          ze = o(85599),
          J = o(89767),
          Te = o.n(J),
          he = o(64457),
          Ae = o(48963),
          Ce = o.n(Ae),
          we = ((I) => (
            (I.k_TrailerAsButton = "button"),
            (I.k_TrailerAsPill = "pill"),
            (I.k_TrailerAsFull = "full"),
            (I.k_TrailerAsPoster = "poster"),
            (I.k_TrailerAsMicro = "micro"),
            I
          ))(we || {});
        const j = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function K(I, z) {
          const F = new Set();
          for (const H of I.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Be = j.exec(H[1] ?? ""),
              je = Be ? Number.parseInt(Be[1] ?? Be[2] ?? Be[3] ?? "") : z;
            je && F.add(je);
          }
          return Array.from(F);
        }
        function q(I) {
          const {
              embedStyle: z,
              appid: F,
              color: H,
              bgcolor: Be,
              children: je,
              trailerBaseID: Pe,
              subtitles: Re,
            } = I,
            [We, He] = (0, k.useState)(!1),
            Ze = (0, k.useMemo)(() => ({ appid: F }), [F]);
          switch (z) {
            case "button":
            case "pill":
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("button", {
                    type: "button",
                    className: (0, g.A)({
                      [Te().Pill]: z == "pill",
                      [Te().Button]: z == "button",
                    }),
                    onClick: () => He(!0),
                    style: { color: H, backgroundColor: Be },
                    children: [
                      (0, t.jsx)(ie.jGG, {}),
                      je || (0, ye.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, t.jsx)(he.PE, {
                    id: Ze,
                    bShowModal: We,
                    trailerBaseID: Pe,
                    hideModal: () => He(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, t.jsx)(ge, { ...I });
          }
        }
        function ge(I) {
          const { appid: z, trailerBaseID: F } = I,
            H = (0, le.$5)(z),
            { data: Be } = (0, Se.J$)(H),
            [je, Pe] = (0, k.useState)(() =>
              !z || !F ? (0, ye.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            Re = (0, te.kB)(H),
            We = (0, k.useMemo)(
              () => (Re ? Re.find((He) => He.trailer_base_id === F) : null),
              [Re, F],
            );
          return (
            (0, k.useEffect)(() => {
              Be?.unvailable_for_country_restriction &&
                Pe((0, ye.we)("#TrailerPlayer_CouldNotLoad", z, F)),
                Re &&
                  !We &&
                  Pe(
                    (0, ye.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      I.appid,
                      I.trailerBaseID,
                    ),
                  );
            }, [
              z,
              I.appid,
              I.trailerBaseID,
              Be?.unvailable_for_country_restriction,
              F,
              We,
              Re,
            ]),
            je
              ? I.bIsPreviewMode
                ? (0, t.jsx)("div", { className: V().ErrorDiv, children: je })
                : null
              : We
                ? (0, t.jsx)(xe, { trailerToPlay: We })
                : (0, t.jsx)(ze.t, {
                    string: (0, ye.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function xe(I) {
          const { trailerToPlay: z } = I,
            {
              rgDashTrailers: F,
              rgHlsTrailers: H,
              strCaptionManufest: Be,
            } = (0, k.useMemo)(() => {
              const { rgDashTrailers: je, rgHlsTrailers: Pe } = (0, te.hg)(z),
                Re = (0, te.Wv)(z);
              return {
                rgDashTrailers: je,
                rgHlsTrailers: Pe,
                strCaptionManufest: Re,
              };
            }, [z]);
          return F?.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: Ce().VideoPopupContainers,
                children: (0, t.jsx)(Y.P, {
                  dashManifests: F || [],
                  hlsManifest: (H.length > 0 && H?.[0]) || "",
                  screenshot: (0, te.hl)(z),
                  altText: z.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Be,
                }),
              });
        }
        var fe = o(34736),
          de = o(39239),
          be = o(13465),
          pe = o(80150),
          Ne = o(18994),
          Oe = o(3166),
          Me = o(68538);
        function _e(I) {
          const z = (0, Oe.Qn)(),
            F = (0, Ne.a4)(Ne.Wn),
            H =
              String((0, D.j$)(I.args, "autoadvance")).toLowerCase() === "true";
          return (0, t.jsx)(Me.F, {
            hideArrows: !F,
            hidePips: z,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: F,
            bAutoAdvance: H,
            className: a().ScreenshotCarousel,
            children: I.children,
          });
        }
        var Ge = o(37501),
          Fe = o.n(Ge),
          Ue = o(1123);
        function Ye(I) {
          const { strURL: z, children: F } = I;
          return (
            typeof z == "string"
              ? !(0, $.ZF)(z)
              : z.some((Be) => !(0, $.ZF)(Be))
          )
            ? (0, t.jsx)(Ve, { children: F })
            : (0, t.jsx)(t.Fragment, { children: F });
        }
        function Ve(I) {
          const { children: z } = I;
          return (0, Ue.Ey)()
            ? (0, t.jsx)(t.Fragment, { children: z })
            : (0, t.jsx)("div", {
                className: Fe().ImageBlocked,
                children: (0, ye.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, t.jsx)("a", {
                    href: Q.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var et = o(33645),
          Je = o.n(et);
        let Xe = null;
        function nt() {
          return (
            Xe == null &&
              (Xe = new Map([
                ["url", { Constructor: ve, autocloses: !1 }],
                ["dynamiclink", { Constructor: ae, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: D.Tu(D.Zb, a().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: D.Tu(D.Sz, a().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: D.Tu(D.ZS, a().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: D.Tu(D.Pk, a().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: D.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: D._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: D.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: D.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: at, autocloses: !1 }],
                ["previewyoutube", { Constructor: C.gH, autocloses: !1 }],
                ["looping_media", { Constructor: _.$A, autocloses: !1 }],
                ["video", { Constructor: _.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: C.Eo, autocloses: !1 }],
                ["trailer", { Constructor: it, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: rt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: tt, autocloses: !1 }],
                ["carousel", { Constructor: _e, autocloses: !1 }],
              ])),
            Xe
          );
        }
        function at(I) {
          const { showErrorInfo: z, event: F } = I.context;
          let H = (0, D.j$)(I.args, "src") || I.children?.toString();
          H || (H = (0, D.j$)(I.args)), (H = (0, ee.J)(H ?? "") || void 0);
          const Be = (0, D.j$)(I.args, "style") === "inline",
            je = (0, h.z5)(H, I.language, F?.rtime32_last_modified);
          if (je == null) return null;
          if (typeof je == "string") {
            H = je;
            let Pe;
            return (
              (Pe = !(0, $.ZF)(H)),
              F?.BHasTag("auto_rssfeed") && (Pe = !1),
              z
                ? (0, t.jsx)(de.i, {
                    className: (0, g.A)({ [Je().Image_Inline]: Be }),
                    src: H,
                    crossOrigin: Pe ? "anonymous" : void 0,
                  })
                : ((H = (0, $.L$)(H)),
                  (0, t.jsx)(Ye, {
                    strURL: H,
                    children: (0, t.jsx)(pe.o, {
                      className: (0, g.A)({ [Je().Image_Inline]: Be }),
                      src: H,
                      crossOrigin: Pe ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, t.jsx)(Ye, {
              strURL: je,
              children: (0, t.jsx)(be.c, { rgSources: je }),
            });
        }
        function tt(I) {
          const z = (0, D.j$)(I.args);
          if (z == null || z == null || z.length == 0) return "";
          const F = I.children?.toString(),
            H = new Array();
          return (
            H.push(
              `${Q.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${Q.TS.LANGUAGE}/${z}`,
            ),
            Q.TS.LANGUAGE != "english" &&
              H.push(
                `${Q.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${z}`,
              ),
            (0, t.jsx)(be.c, { rgSources: H, alt: F })
          );
        }
        function it(I) {
          const z = $e(I.args, "appid", I.context.event?.appid ?? 0),
            F = $e(I.args, "trailerid", 0);
          let H =
            (0, D.j$)(I.args, "style")?.toLocaleLowerCase() ??
            we.k_TrailerAsFull;
          H = Object.values(we).includes(H) ? H : we.k_TrailerAsFull;
          const Be = (0, T.O)(I.args.color, "black"),
            je = (0, T.O)(I.args.bgcolor, "white"),
            Pe = (0, _.g4)(I.args);
          return (0, t.jsx)(q, {
            appid: z,
            trailerBaseID: F,
            bIsPreviewMode: I.context.showErrorInfo,
            embedStyle: H,
            color: Be,
            bgcolor: je,
            subtitles: Pe.rgVideoTracks,
            children: I.children,
          });
        }
        function rt(I) {
          const z = (0, D.j$)(I.args, "name"),
            F = (0, D.j$)(I.args, "title"),
            H = (0, D.j$)(I.args, "company"),
            Be = (0, D.j$)(I.args, "photo");
          return I.context.bShowShortSpeakerInfo
            ? (0, t.jsx)(fe.S8, {
                name: z,
                title: F,
                company: H,
                photo: Be,
                bio: I.children,
              })
            : (0, t.jsx)(fe.$k, {
                name: z,
                title: F,
                company: H,
                photo: Be,
                bio: I.children,
              });
        }
        function $e(I, z, F) {
          const H = (0, D.j$)(I, z);
          return H === void 0 || H == null ? F : Number.parseInt(H);
        }
      },
      1683: (U, ue, o) => {
        "use strict";
        o.d(ue, { d3: () => te, Zn: () => le });
        var t = o(7850),
          ee = o(33770),
          h = o(7487),
          _ = o(72609),
          D = o(90626),
          C = o(70187),
          x = o(86722),
          Q = o(39414),
          b = o(38340),
          u = o(96197),
          a = o(53113);
        class E extends h.K0 {
          m_LinkFilter = Q.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(k, X, V, ie) {
            super(k),
              (this.m_parentNode = X),
              (this.m_mapHostToComponent = V),
              (this.m_globalStoreLink = ie);
          }
          AppendText(k, X = !1) {
            let V = k;
            if (
              (X || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let ie = this.m_LinkFilter.exec(V);
              for (; ie; ) {
                if (ie.index > 0) {
                  let J = ie.input.substring(0, ie.index);
                  super.AppendText(J, X);
                }
                let ye = ie[0],
                  ze = !1;
                if (this.m_mapHostToComponent) {
                  for (let J = 0; J < this.m_mapHostToComponent.length; ++J)
                    if (this.m_mapHostToComponent[J].urlRegExp.exec(ye)) {
                      (ze = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[J].fnBBComponent(
                            ye,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                ze || super.AppendNode((0, x.Pm)(ye)),
                  (V = ie.input.substring(ie.index + ye.length)),
                  (ie = this.m_LinkFilter.exec(V));
              }
            }
            V.length > 0 && super.AppendText(V, X);
          }
        }
        const g = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class $ extends h.K0 {
          m_EmoteRegex = new RegExp(g);
          AppendText(k, X = !1) {
            let V = k;
            if (k.length >= 3) {
              let ie = this.m_EmoteRegex.exec(V);
              for (; ie; ) {
                if (ie.index > 0) {
                  let ze = ie.input.substring(0, ie.index);
                  super.AppendText(ze, X);
                }
                let ye = ie[1];
                super.AppendNode(D.createElement(u.n, { emoticon: ye }, [])),
                  (V = ie.input.substring(ie.index + ye.length + 2)),
                  (ie = this.m_EmoteRegex.exec(V));
              }
            }
            V.length > 0 && super.AppendText(V, X);
          }
        }
        class T extends h.K0 {
          m_parentNode = void 0;
          constructor(k, X) {
            super(k), (this.m_parentNode = X);
          }
          AppendText(k, X = !1) {
            let V = k;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !S(V) &&
              (V = (0, a.L$)(V)),
              super.AppendText(V, X);
          }
        }
        function S(Y) {
          const k = Y.trim();
          return k.startsWith(b.lw) || k.startsWith(b.eg);
        }
        var me = o(11547),
          P = o(35265);
        let Z = null;
        function Ie() {
          return (
            Z == null &&
              (Z = new Map([
                ...Array.from(C.W4.entries()),
                ...Array.from((0, me.k)().entries()),
              ])),
            Z
          );
        }
        const ve = D.createContext(null);
        function ae() {
          return D.useContext(ve) ?? Ie();
        }
        function te(Y) {
          const k = ae(),
            X = D.useMemo(
              () =>
                new Map([
                  ...Array.from(k.entries()),
                  ...Array.from(Y.dictionary.entries()),
                ]),
              [k, Y.dictionary],
            );
          return (0, t.jsx)(ve.Provider, { value: X, children: Y.children });
        }
        function le(Y) {
          const {
              text: k,
              languageOverride: X,
              event: V,
              showErrorInfo: ie,
              bShowShortSpeakerInfo: ye,
            } = Y,
            ze = (0, P.m$)(),
            J = D.useCallback(
              (Ae) =>
                new T(
                  new $(new E(new h.OJ(new h.R8()), Ae, ze, { event: V })),
                  Ae,
                ),
              [V, ze],
            ),
            Te = ae();
          return D.useMemo(
            () => new ee.B(Te, J, X || _.TS.LANGUAGE),
            [Te, J, X],
          ).ParseBBCode(k, {
            showErrorInfo: ie,
            event: V,
            bShowShortSpeakerInfo: ye,
            bbcode: k,
          });
        }
        function Se(Y) {
          const {
              strTag: k,
              args: X,
              rawargs: V,
              language: ie = PchLanguageToELanguage(Config.LANGUAGE),
              children: ye,
              ...ze
            } = Y,
            J = ae().get(k);
          return J
            ? jsx(J.Constructor, {
                context: ze,
                tagname: k,
                args: X,
                language: ie,
                rawargs: V,
                children: ye,
              })
            : jsxs(Fragment, { children: [`[${k}]`, ye, `[/${k}]`] });
        }
      },
      35265: (U, ue, o) => {
        "use strict";
        o.d(ue, { m$: () => jt, W7: () => Wr });
        var t = o(7850),
          ee = o(32093),
          h = o(72609),
          _ = o(88743),
          D = o(40358),
          C = o(90626),
          x = o(86722),
          Q = o(6878),
          b = o.n(Q),
          u = o(36118),
          a = o(36707),
          E = o(87949),
          g = o(55483),
          $ = o(29696),
          T = o(99412),
          S = o(47797),
          me = o(76559);
        const P =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          Z =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          Ie = [P, Z],
          ve =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function ae(M, A) {
          const O = new RegExp(M).exec(A);
          if (!O || O.length <= 3) return;
          const oe = O[3];
          if (oe)
            switch (O[1]) {
              case "gid":
                return { eventGID: oe, strClanSteamID64: O[2] };
              case "group":
                return { eventGID: oe, clanAccountID: Number.parseInt(O[2]) };
              case "groups":
                return { eventGID: oe, strGroupVanity: O[2] };
              default:
                return isNaN(+O[2])
                  ? { eventGID: oe, strOGGVanity: O[2] }
                  : { eventGID: oe, appid: Number(O[2]) };
            }
        }
        function te(M) {
          for (const A of Ie) {
            const O = ae(A, M);
            if (O) return O;
          }
        }
        function le(M) {
          const A = [],
            O = new Set(),
            oe = [
              ...Ie.map((se) => ({ regExp: se, bAnnouncement: !1 })),
              { regExp: ve, bAnnouncement: !0 },
            ];
          for (const { regExp: se, bAnnouncement: ke } of oe)
            for (const vt of M.matchAll(new RegExp(se, "gi"))) {
              const bt = ae(se, vt[0]);
              bt &&
                !O.has(`${ke ? "A" : "E"}${bt.eventGID}`) &&
                (O.add(`${ke ? "A" : "E"}${bt.eventGID}`),
                A.push({ link: bt, bAnnouncement: ke }));
            }
          return A;
        }
        var Se = o(9046),
          Y = o(72080),
          k = o(29522),
          X = o(85599),
          V = o(18210),
          ie = o(13465),
          ye = o(56492),
          ze = o(88812),
          J = o(39654);
        function Te({ clanSteamID: M, strVanity: A, strGroupVanity: O }) {
          const oe = A !== void 0 || O !== void 0,
            { data: se, isPending: ke } = (0, g.W$)(
              oe ? (A ?? O ?? "") : "",
              A !== void 0 ? "store" : "group",
            );
          if (!oe) return M?.GetAccountID();
          if (!ke) return se?.clanAccountID ?? null;
        }
        function he(M) {
          const { appid: A, announcementGID: O, eventGID: oe, strURL: se } = M,
            ke = Te(M),
            vt = ke === null,
            bt = ke != null,
            {
              data: yt,
              isPending: vr,
              isError: lr,
            } = (0, J.vE)(
              vt
                ? void 0
                : {
                    clanAccountID: bt ? ke : void 0,
                    appid: A,
                    eventGID: oe,
                    announcementGID: O,
                  },
            ),
            Ot = (0, k.$5)(A || yt?.appid || void 0),
            { data: kr } = (0, D.J$)(Ot);
          if (vt || lr || yt === null) return (0, x.Pm)(se);
          if (vr || !yt) return (0, t.jsx)(X.t, {});
          const Ar = (0, T.sfN)(h.TS.LANGUAGE),
            Gr = yt.GetNameWithFallback(Ar),
            Ur = yt.GetSubTitleWithSummaryFallback(Ar),
            Tr = kr?.name,
            Yr = (0, V.TW)(yt.GetStartTimeAndDateUnixSeconds());
          return (0, t.jsxs)(ye.tj, {
            eventModel: yt,
            route: ye.PH.k_eView,
            className: Y.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": A,
            children: [
              (0, t.jsx)(Ae, { ...M, event: yt }),
              (0, t.jsxs)(Y.J7, {
                children: [
                  (0, t.jsxs)(Y.zN, {
                    children: [
                      (0, V.we)(
                        yt.type == T.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Tr ?? "",
                      ),
                      (0, t.jsx)(Y.MG, { children: Yr }),
                    ],
                  }),
                  (0, t.jsx)(Y.bv, {
                    children: (0, t.jsx)("div", {
                      className: Y.gg.Type,
                      children: Gr,
                    }),
                  }),
                  (0, t.jsx)(Y.AT, { children: Ur }),
                ],
              }),
            ],
          });
        }
        function Ae(M) {
          const {
            event: A,
            fnFilterImageURLsForKnownFailures: O,
            fnImageFailureCallback: oe,
          } = M;
          let se = (0, T.sfN)(h.TS.LANGUAGE),
            ke = (0, ze.WC)(A, "capsule", se, Se.wI.capsule_main) ?? [];
          return (
            ke && O && (ke = O(ke)),
            (0, t.jsx)(ie.c, {
              className: Y.gg.Preview,
              rgSources: ke ?? [],
              onIncrementalError: (vt, bt, yt) => oe && oe(bt),
            })
          );
        }
        var Ce = o(10349),
          we = o(53113);
        const j =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          K = ["store.steampowered.com", "store.steamchina.com"],
          q = ["steampowered.com", "steamcommunity.com"],
          ge = ["steamchina.com"],
          xe = ["steam.dev", "valve.org"];
        function fe(M, A) {
          return A.some((O) => M == O || M.endsWith(`.${O}`));
        }
        function de(M) {
          const A = (0, we.wm)(M).toLocaleLowerCase(),
            O = (0, we.wm)(h.TS.STORE_BASE_URL).toLocaleLowerCase(),
            oe = (0, we.wm)(h.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return A == O || A == oe
            ? !0
            : K.includes(O)
              ? fe(A, fe(O, ge) ? ge : q)
              : fe(A, [...q, ...ge, ...xe]);
        }
        function be(M) {
          if (de(M)) return pe(M);
        }
        function pe(M) {
          const A = new RegExp(j).exec(M);
          if (!A || A.length <= 2) return;
          const O = A[1].toLowerCase(),
            oe = Number(A[2]);
          if (!(!(oe > 0) || !(0, Ce.nB)(O)))
            return {
              id: oe,
              strItemType: O,
              storeItemKey:
                O == "sub"
                  ? { packageid: oe }
                  : O == "bundle"
                    ? { bundleid: oe }
                    : { appid: oe },
            };
        }
        function Ne(M) {
          const A = [],
            O = new Set();
          for (const oe of M.matchAll(new RegExp(j, "gi"))) {
            const se = pe(oe[0]);
            se &&
              !O.has(`${se.strItemType}/${se.id}`) &&
              (O.add(`${se.strItemType}/${se.id}`), A.push(se));
          }
          return A;
        }
        function Oe(M) {
          return (
            !!M && (M.GetEventType() == T.ajI || M.GetEventType() == T.HRy)
          );
        }
        function Me(M) {
          const A = Oe(M),
            O = A ? M.clanSteamID.GetAccountID() : void 0,
            { data: oe, isLoading: se } = (0, g.TB)(O),
            { data: ke, isLoading: vt } = (0, $.A5)(O);
          if (!A) return null;
          if (!(se || vt))
            return !ke || !oe || !(0, S.Ns)(M, oe) ? null : (ke.appids ?? []);
        }
        function _e(M, A) {
          return M === null
            ? !0
            : A.length > 0 && A.every((O) => M.includes(O));
        }
        function Ge(M, A) {
          const O = Me(A);
          if (M.appid === void 0) return !0;
          if (!(M.appid > 0)) return !1;
          if (O !== void 0) return _e(O, [M.appid]);
        }
        function Fe({ link: M, strURL: A, eventModel: O, bAnnouncement: oe }) {
          const se = Ge(M, O);
          if (se === void 0) return null;
          if (!se) return (0, x.Pm)(A, O);
          const ke =
            M.strClanSteamID64 !== void 0
              ? new me.b(M.strClanSteamID64)
              : M.clanAccountID !== void 0
                ? me.b.InitFromClanID(M.clanAccountID)
                : void 0;
          return (0, t.jsx)(he, {
            appid: M.appid,
            clanSteamID: ke,
            strVanity: M.strOGGVanity,
            strGroupVanity: M.strGroupVanity,
            eventGID: oe ? void 0 : M.eventGID,
            announcementGID: oe ? M.eventGID : void 0,
            strURL: A,
          });
        }
        function Ue(M, A, O, oe = !1) {
          if (de(A)) {
            const se = ae(M, A);
            if (se)
              return (0, t.jsx)(Fe, {
                link: se,
                strURL: A,
                eventModel: O?.event,
                bAnnouncement: oe,
              });
          }
          return (0, x.Pm)(A, O?.event);
        }
        function Ye(M, A) {
          return Ue(Z, M, A);
        }
        function Ve(M, A) {
          return Ue(P, M, A);
        }
        function et(M, A) {
          return Ue(ve, M, A, !0);
        }
        const Je = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function Xe(M) {
          if (!Je.test(M)) return;
          const A = M.split("?");
          if (A.length == 2)
            return new URLSearchParams(A[1]).get("id") ?? void 0;
        }
        var nt = o(3946),
          at = o(13854),
          tt = o(374);
        function it(M) {
          const { sharedFileID: A } = M,
            { data: O } = (0, tt.oK)(A),
            oe = h.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            se = O ?? {
              sharedfileid: A,
              title: (0, V.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: oe + A,
            },
            ke = (0, at.TG)(se.url) ? oe + se.url : se.url;
          let vt = se.personnaname !== void 0 && se.personnaname.length > 0;
          return (0, t.jsx)(nt.V, {
            strURL: ke,
            strTitle: se.title,
            strPreviewURL: se.previewurl,
            strType: se.type,
            strDescription: se.description,
            author:
              vt &&
              (0, V.PP)(
                "#EventEditor_Author",
                (0, t.jsx)(Y.mZ, { children: se.personnaname }),
              ),
            publishedfileid: A,
            appid: se.appid,
            bSizeToFit: se.bSizeToFit,
          });
        }
        var rt = o(80902),
          $e = o(32651),
          I = o.n($e);
        const z = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function F(M) {
          const A = new Set();
          for (const O of M.matchAll(new RegExp(z, "gi"))) O[1] && A.add(O[1]);
          return Array.from(A);
        }
        function H(M) {
          return ["sketchfab_oembed", M];
        }
        function Be(M) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(M)}`;
        }
        function je(M) {
          return {
            queryKey: H(M),
            queryFn: async () => {
              const A = await fetch(Be(M));
              if (A.status === 404) return null;
              if (!A.ok)
                throw new Error(`sketchfab oembed returned ${A.status}`);
              return await A.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function Pe(M) {
          return (0, rt.I)(je(M));
        }
        function Re(M) {
          const { modelID: A } = M,
            [O, oe] = C.useState(!0),
            { data: se } = Pe(A);
          if (O) {
            const ke = () => oe(!1),
              vt = (bt) => {
                (bt.key === "Enter" || bt.key === " ") &&
                  (bt.preventDefault(), ke());
              };
            return (0, t.jsxs)("div", {
              className: I().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: ke,
              onKeyDown: vt,
              children: [
                se?.thumbnail_url &&
                  (0, t.jsx)("img", {
                    className: I().dynamiclink_preview,
                    src: se.thumbnail_url,
                    alt: se.title,
                  }),
                (0, t.jsx)("img", {
                  className: I().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, t.jsxs)("div", {
                  className: I().dynamiclink_content,
                  children: [
                    (0, t.jsxs)("div", {
                      className: I().dynamiclink_name,
                      children: [
                        (0, t.jsx)("span", {
                          className: I().dynamiclink_type,
                          children: (0, V.we)("#EventDisplay_Sketchfab"),
                        }),
                        se?.title &&
                          (0, t.jsxs)("div", { children: [se.title, "\xA0"] }),
                      ],
                    }),
                    se?.author_name &&
                      (0, t.jsx)("div", {
                        className: I().dynamiclink_author,
                        children: se.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, t.jsx)("div", {
            className: I().sketchfabmodelembedded,
            children: (0, t.jsx)("iframe", {
              className: I().sketchfabmodelembedded,
              title: se?.title ?? A,
              src: `https://sketchfab.com/models/${encodeURIComponent(A)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const We =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function He(M) {
          const A = We.exec(M),
            O = A ? Number(A[1]) : 0;
          return O > 0 ? O : void 0;
        }
        function Ze(M) {
          return de(M) ? He(M) : void 0;
        }
        function ht(M) {
          const A = new Set();
          for (const O of M.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const oe = He(O[0]);
            oe && A.add(oe);
          }
          return Array.from(A);
        }
        var ct = o(31774),
          st = o(71421),
          mt = o(33998),
          dt = o.n(mt);
        function ut(M) {
          const { defid: A } = M,
            O = (0, ct.wk)(A);
          if (!O || !O.community_item_data) return null;
          const oe = O.appid,
            se = O.community_item_data.item_image_large,
            ke = `${h.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${oe}/${se}`;
          return (0, t.jsx)("div", {
            className: dt().Ctn,
            children: (0, t.jsx)(st.he, {
              toolTipContent: O.community_item_data.item_description,
              children: (0, t.jsx)("img", {
                src: ke,
                alt: O.community_item_data.item_title,
              }),
            }),
          });
        }
        var gt = o(43597);
        const zt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          er = /twitter\.com\/(\w+)(\/?)$/i,
          n = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          Mr = /twitch\.tv\/(\w+)(\/?)$/i,
          Ir =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function tr() {
          return h.TS.EREALM === ee.TU.k_ESteamRealmChina;
        }
        const sr = new Map();
        function jt() {
          const M = h.TS.EREALM;
          let A = sr.get(M);
          return (
            A ||
              (tr()
                ? (A = [
                    { urlRegExp: new RegExp(j), fnBBComponent: Ke },
                    { urlRegExp: new RegExp(P), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(Z), fnBBComponent: Ye },
                    { urlRegExp: new RegExp(ve), fnBBComponent: et },
                    { urlRegExp: new RegExp(Ir), fnBBComponent: or },
                  ])
                : (A = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: gt.j6,
                    },
                    { urlRegExp: new RegExp(Je), fnBBComponent: hr },
                    { urlRegExp: new RegExp(j), fnBBComponent: Ke },
                    { urlRegExp: new RegExp(P), fnBBComponent: Ve },
                    { urlRegExp: new RegExp(Z), fnBBComponent: Ye },
                    { urlRegExp: new RegExp(ve), fnBBComponent: et },
                    { urlRegExp: new RegExp(zt), fnBBComponent: y },
                    { urlRegExp: new RegExp(z), fnBBComponent: Yt },
                    { urlRegExp: new RegExp(er), fnBBComponent: Rr },
                    { urlRegExp: new RegExp(n), fnBBComponent: pt },
                    { urlRegExp: new RegExp(Mr), fnBBComponent: At },
                    { urlRegExp: new RegExp(Ir), fnBBComponent: or },
                    { urlRegExp: new RegExp(We), fnBBComponent: Cr },
                  ]),
              sr.set(M, A)),
            A
          );
        }
        function zr(M) {
          return jt().find((A) => !!A.urlRegExp.exec(M));
        }
        function Wr(M) {
          return C.useMemo(() => zr(M), [M]);
        }
        function y(M, A) {
          if (tr()) return null;
          const O = new RegExp(zt).exec(M);
          if (O && O.length > 1) {
            const oe = O[1];
            if (oe?.length > 0) {
              let se =
                "https://medal.tv/clip/" +
                oe +
                "/?autoplay=0&donate=0" +
                (A && A.event ? "&steamappid=" + A.event.appid : "");
              return (0, t.jsx)("iframe", {
                className: b().MedalTVWidget,
                src: se,
                title: oe,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, x.Pm)(M, A?.event);
        }
        function Yt(M, A) {
          let O = new RegExp(z).exec(M);
          if (O && O.length > 1) {
            let oe = O[1];
            if (oe && oe.length > 1) return (0, t.jsx)(Re, { modelID: oe });
          }
          return (0, x.Pm)(M, A?.event);
        }
        function hr(M, A) {
          const O = Xe(M);
          return O !== void 0
            ? (0, t.jsx)(it, { sharedFileID: O })
            : (0, x.Pm)(M, A?.event);
        }
        function Ke(M, A) {
          const O = be(M);
          return O
            ? (0, t.jsx)(pr, {
                eventModel: A?.event,
                inputID: O.id,
                inputType: O.strItemType,
                fallbackUrl: M,
              })
            : (0, x.Pm)(M, A?.event);
        }
        function pr(M) {
          const {
              inputID: A,
              inputType: O,
              eventModel: oe,
              fallbackUrl: se,
            } = M,
            ke = (0, _.dE)(A, O),
            { data: vt } = (0, D.J$)(ke),
            bt = Me(oe);
          let yt;
          if (bt === null) yt = !0;
          else if (bt && vt) {
            const vr = vt.appid ? [vt.appid] : (vt.included_appids ?? []);
            yt = _e(bt, vr);
          }
          return yt === void 0
            ? null
            : yt
              ? (0, t.jsx)(E.e, {
                  id: A,
                  inputType: O,
                  bApplyUserContentPref: !0,
                })
              : (0, x.Pm)(se, oe);
        }
        function Cr(M, A) {
          const O = Ze(M);
          return O
            ? (0, t.jsx)("div", {
                className: (0, a.A)(b().LoyaltyRewardCtn),
                children: (0, t.jsx)(ut, { defid: O, url: M }),
              })
            : (0, x.Pm)(M, A?.event);
        }
        function Rr(M, A) {
          return tr() ? null : rr(M, (0, t.jsx)(u.KKS, {}), "@", A);
        }
        function pt(M, A) {
          return tr() ? null : rr(M, (0, t.jsx)(u.KKS, {}), "#", A);
        }
        function At(M, A) {
          return tr() ? null : rr(M, (0, t.jsx)(u.qcc, {}), void 0, A);
        }
        function or(M, A) {
          return rr(M, (0, t.jsx)(u.Qte, {}), void 0, A);
        }
        function rr(M, A, O, oe) {
          let se;
          const ke = M.endsWith("/") ? M.length - 1 : M.length,
            vt = M.lastIndexOf("/", ke - 1);
          vt != -1 && vt + 1 < M.length && (se = M.substring(vt + 1, ke)),
            O && se && (se = O + se);
          const bt = (0, x.Pm)(M, oe?.event, se ?? M);
          return (0, t.jsxs)("div", {
            className: b().SocialLink,
            children: [
              (0, t.jsx)("div", { className: b().SocialIcon, children: A }),
              bt,
            ],
          });
        }
      },
      39654: (U, ue, o) => {
        "use strict";
        o.d(ue, { vE: () => T });
        var t = o(72604),
          ee = o(99412),
          h = o(72609),
          _ = o(80902),
          D = o(38884),
          C = o(76559),
          x = o(18210);
        const Q = "events/ajaxgetpartnerevent";
        function b(S) {
          const me = x.A0.GetELanguageFallback(S);
          return S != me ? `${S}_${me}` : `${S}`;
        }
        function u(S) {
          return S ? (0, D.oE)(new C.b(S.clanSteamID64), S.event) : null;
        }
        async function a(S, me) {
          const P = new URLSearchParams();
          S.clanAccountID && P.set("clan_accountid", String(S.clanAccountID)),
            S.appid && P.set("appid", String(S.appid)),
            S.eventGID && P.set("event_gid", S.eventGID),
            S.announcementGID && P.set("announcement_gid", S.announcementGID),
            P.set("lang_list", b(me)),
            P.set("last_modified_time", "0"),
            P.set("origin", window.location.origin);
          const Z = h.TS.STORE_BASE_URL + Q + "?" + P.toString(),
            Ie = await fetch(Z);
          if (!Ie.ok) throw new Error(`${Z} answered ${Ie.status}`);
          const ve = await Ie.json();
          return ve.success !== t.R || !ve.event?.clan_steamid
            ? null
            : { clanSteamID64: ve.event.clan_steamid, event: ve.event };
        }
        function E(S, me) {
          return [
            "LinkedPartnerEvent",
            S.clanAccountID,
            S.appid,
            S.eventGID,
            S.announcementGID,
            me,
          ];
        }
        function g(S) {
          return (
            !!S &&
            (!!S.clanAccountID || !!S.appid) &&
            (!!S.eventGID || !!S.announcementGID)
          );
        }
        function $(S, me) {
          const P = g(S);
          return {
            queryKey: E(S ?? {}, me),
            queryFn: () => a(S ?? {}, me),
            select: u,
            enabled: P,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function T(S) {
          const me = (0, ee.sfN)(h.TS.LANGUAGE);
          return (0, _.I)($(S, me));
        }
      },
      56492: (U, ue, o) => {
        "use strict";
        o.d(ue, {
          Bw: () => Te,
          EX: () => le,
          Hx: () => Ce,
          JP: () => te,
          LJ: () => V,
          OG: () => Ae,
          PH: () => Z,
          T7: () => Y,
          sY: () => ie,
          tj: () => we,
          yh: () => J,
        });
        var t = o(7850),
          ee = o(50974),
          h = o(99412),
          _ = o(24660),
          D = o(72865),
          C = o(90626),
          x = o(92757),
          Q = o(83482),
          b = o(16369),
          u = o(10303),
          a = o(64165),
          E = o(71742),
          g = o(53113),
          $ = o(3166),
          T = o(72609),
          S = o(39905),
          me = o(47875),
          P = o(40358),
          Z = ((j) => (
            (j.k_eView = "view"),
            (j.k_eViewWebSiteHub = "websitehub"),
            (j.k_eCommunityView = "communityview"),
            (j.k_eCommunityEdit = "edit"),
            (j.k_eCommunityEditBroadcast = "editBroadcast"),
            (j.k_eCommunityAdminPage = "admin"),
            (j.k_eCommunityPublish = "publish"),
            (j.k_eCommunityMigrate = "migrate"),
            (j.k_eCommunityPreview = "preview"),
            (j.k_eCommunityPreviewSale = "previewsale"),
            (j.k_eCommunityAnnouncementHub = "community_announcehub"),
            (j.k_eStoreView = "storeview"),
            (j.k_eStoreNewsHub = "newshub"),
            (j.k_eStoreOwnerPage = "store"),
            (j.k_eStoreSalePage = "sale"),
            (j.k_eStoreHardwarePreview = "hardwarepreview"),
            (j.k_eStoreUsersNewsHub = "usernewshub"),
            j
          ))(Z || {});
        const Ie =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function ve(j) {
          return j.match(Ie)?.[1];
        }
        function ae(j, K) {
          if (!K) return !1;
          const q = !0,
            ge = ve(window.location.href),
            xe = q && ge == "news",
            fe = K.GetEventType() == h.ajI,
            de = !1,
            be = K.appid ? "games" : "groups",
            pe =
              de &&
              be == ge &&
              ((K.appid && K.appid === $.UF.APPID) ||
                (!K.appid &&
                  K.clanSteamID.GetAccountID() === $.UF.CLANACCOUNTID));
          switch (j) {
            case "view":
              return pe || (xe && !ie());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return pe;
            case "admin":
              return fe ? !1 : pe;
            case "websitehub":
              return pe || xe;
            case "storeview":
              return xe && !ie();
            case "newshub":
            case "store":
            case "usernewshub":
              return xe;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, E.wT)(!1, "Unknown route specified for link: " + j), !1
              );
          }
        }
        function te(j) {
          const K =
            T.TS.COMMUNITY_BASE_URL +
            "gid/" +
            j.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            j.AnnouncementGID;
          return {
            strFacebookUrl: K + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: K + "?site=twitter",
            strRedditUrl: K + "?site=reddit",
          };
        }
        function le(j) {
          return ze(j, "sale", "absolute");
        }
        function Se(j, K) {
          return J(j, K, "sale", "absolute");
        }
        function Y(j) {
          return ze(j, "storeview", "absolute");
        }
        function k(j, K) {
          return J(j, K, "storeview", "absolute");
        }
        function X(j, K, q) {
          if (q)
            return (
              (j ? "/games/" + $.UF.VANITY_ID : "/groups/" + $.UF.VANITY_ID) +
              "/"
            );
          const ge = j ? "ogg/" + j : "gid/" + K.ConvertTo64BitString();
          return T.TS.COMMUNITY_BASE_URL + ge + "/";
        }
        function V() {
          return "news";
        }
        function ie() {
          return !1;
        }
        function ye(j) {
          return j.clanSteamID.GetAccountID() === ee.gt && !1;
        }
        function ze(j, K, q) {
          const { data: ge } = (0, P.J$)(
            j?.appid ? { appid: j.appid } : void 0,
          );
          if (j) return J(j, ge, K, q);
        }
        function J(j, K, q, ge) {
          const xe = ge === "relative",
            fe = !1,
            de = xe ? "/" : T.TS.STORE_BASE_URL,
            be = X(j.appid, j.clanSteamID, xe);
          q === "view"
            ? (q = fe ? "communityview" : "storeview")
            : q === "websitehub" &&
              (q = fe ? "community_announcehub" : "newshub");
          const pe = j.GID ? j.GID : "",
            Ne = j.AnnouncementGID ? j.AnnouncementGID : "",
            Oe =
              j.BIsOGGEvent() &&
              j.appid &&
              K &&
              j.BHasSaleUpdateLandingPageVanity(),
            Me = j.GetEventType() == h.ajI;
          switch (q) {
            case "publish":
              return (
                be +
                (j.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ne
                  : "partnerevents/publish/" + pe + "?tab=publishing")
              );
            case "edit":
              return (
                be +
                (j.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ne
                  : "partnerevents/edit/" + pe)
              );
            case "editBroadcast":
              return (
                be +
                (j.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Ne
                  : "partnerevents/edit/" + pe) +
                "?tab=broadcast"
              );
            case "migrate":
              return be + "partnerevents/migrate_announcement/" + Ne;
            case "preview":
              return Me
                ? be + "partnerevents/previewsale/" + pe
                : be +
                    (j.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Ne
                      : "partnerevents/preview/" + pe);
            case "previewsale":
              return be + "partnerevents/previewsale/" + pe;
            case "admin":
              return Me
                ? `${de}curator/${j.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : be + "partnerevents";
            case "community_announcehub":
              return be + "announcements";
            case "newshub": {
              const _e = j.appid
                ? `app/${j.appid}`
                : `group/${j.clanSteamID.GetAccountID()}`;
              return de + `${V()}/${_e}`;
            }
            case "store":
              return (
                de +
                (j.appid
                  ? "app/" + j.appid
                  : "curator/" + j.clanSteamID.GetAccountID())
              );
            case "sale":
              return j.jsondata.bSaleEnabled
                ? Oe
                  ? `${(0, me._)(K)}/${j.GetSaleUpdateLandingPageVanity()}`
                  : Me
                    ? `${de}curator/${j.clanSteamID.GetAccountID()}`
                    : de +
                      (0, a.n)(
                        j.clanSteamID.GetAccountID(),
                        j.GetSaleVanity(),
                        !!j.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : de;
            case "hardwarepreview":
              return ye(j) ? `${de}hardware_v2/${Ne}?beta=1` : de;
            case "communityview":
              return be + "announcements/detail/" + Ne;
            case "storeview": {
              if (j.clanSteamID.GetAccountID() == (0, b.H)())
                return `${T.TS.STORE_BASE_URL}meetsteam/${pe}`;
              if (Oe)
                return `${(0, me._)(K)}/${j.GetSaleUpdateLandingPageVanity()}`;
              if (Me) return `${de}curator/${j.clanSteamID.GetAccountID()}`;
              {
                const _e = j.appid
                    ? `app/${j.appid}`
                    : `group/${j.clanSteamID.GetAccountID()}`,
                  Ge = ie() ? "view_v2" : "view",
                  Fe = j.bOldAnnouncement ? `old_view/${Ne}` : `${Ge}/${pe}`;
                return `${de}${V()}/${_e}/${Fe}`;
              }
            }
            case "usernewshub":
              return `${de}${V()}/`;
            default:
              return (0, E.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function Te(j, K, q) {
          const ge = q === "forceAbsolute" || !ae(K, j);
          return ze(j, K, ge ? "absolute" : "relative");
        }
        function he(j, K, q, ge) {
          const xe = ge === "forceAbsolute" || !ae(q, j);
          return J(j, K, q, xe ? "absolute" : "relative");
        }
        function Ae(j) {
          const { eventModel: K, route: q, bPopup: ge = !0 } = j,
            xe = ae(q, K),
            fe = ze(K, q, xe ? "relative" : "absolute");
          return (
            C.useEffect(() => {
              fe && (ge ? window.open(fe) : window.location.assign(fe));
            }, [ge, fe]),
            xe && fe ? (0, t.jsx)(x.rd, { push: !0, to: fe }) : null
          );
        }
        function Ce(j, K, q) {
          const ge = X(j, K, !1);
          return q === "admin" ? ge + "partnerevents" : "";
        }
        function we(j) {
          const { eventModel: K, preferredFocus: q } = j,
            { bCanUseLink: ge } = C.useContext(u.I),
            xe = (0, D.n9)(),
            fe = (0, x.W6)(),
            de = ge && ae(j.route, K),
            be = ze(K, j.route, de ? "relative" : "absolute"),
            pe = !de && be ? (0, g.NT)(be) : be,
            Ne = de || !pe ? pe : (0, Q.wJ)(pe, xe),
            Oe = ze(K, "websitehub", "absolute"),
            Me =
              j.route != "websitehub"
                ? S.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            _e = C.useCallback(() => {
              Oe && window.location.assign(Oe);
            }, [Oe]);
          return K
            ? de
              ? (0, t.jsx)(_.Ii, {
                  style: j.style,
                  className: j.className,
                  href: fe.createHref({ pathname: Ne }),
                  onClick: (Ge) => {
                    Ne && (j.onClick?.(Ge), fe.push(Ne), Ge.preventDefault());
                  },
                  onOptionsActionDescription: Me,
                  onOptionsButton: Me ? _e : void 0,
                  preferredFocus: q,
                  children: j.children,
                })
              : (0, t.jsx)(_.Ii, {
                  href: Ne,
                  style: j.style,
                  className: j.className,
                  onClick: j.onClick,
                  preferredFocus: q,
                  onOptionsActionDescription: Me,
                  onOptionsButton: Me ? _e : void 0,
                  children: j.children,
                })
            : null;
        }
      },
      87949: (U, ue, o) => {
        "use strict";
        o.d(ue, { e: () => a });
        var t = o(7850),
          ee = o(78192),
          h = o(72609),
          _ = o(40358),
          D = o(88743),
          C = o(61431),
          x = o(36707),
          Q = o(18210),
          b = o(20881),
          u = o.n(b);
        function a(E) {
          const { inputType: g, id: $, bApplyUserContentPref: T } = E,
            S = g == "bundle" ? "bundle" : g == "sub" ? "sub" : "game",
            me = (0, D.zl)($, S),
            { data: P } = (0, _.J$)(me),
            { data: Z, isPending: Ie } = (0, _.Ij)(T ? me : void 0);
          if (!P) return null;
          if (T) {
            if (Ie) return null;
            if (
              Z?.filter_failure == ee.hQ.Zy ||
              Z?.filter_failure == ee.hQ.ir
            ) {
              let ve = "#StoreCapsule_App_Excluded";
              switch (g) {
                case "sub":
                  ve = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  ve = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, t.jsx)("div", {
                className: (0, x.A)(
                  u().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, Q.oW)(
                  ve,
                  (0, t.jsx)("a", {
                    href: h.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, t.jsx)("div", {
            className: (0, x.A)(u().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, t.jsx)(C.p, {
              id: $,
              type: S,
              bShowDemoButton: P.type == ee.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      88812: (U, ue, o) => {
        "use strict";
        o.d(ue, { WC: () => Q });
        var t = o(9046),
          ee = o(5827),
          h = o(75233),
          _ = o(80902),
          D = o(71742),
          C = o(68266),
          x = o(85741);
        function Q(a, E, g, $, T) {
          const S = (0, h.jE)(),
            me = (0, ee.eG)();
          return (0, _.I)(u(S, me, a, E, g, $, T)).data ?? void 0;
        }
        function b(a, E, g, $, T) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            a?.GID,
            E,
            g,
            $,
            T,
          ];
        }
        function u(a, E, g, $, T, S, me) {
          return {
            queryKey: b(g, $, T, S, me),
            enabled: g && !!g.GID,
            queryFn: async () => {
              if (!g) return null;
              let P = new Array();
              if (!g.BImageNeedScreenshotFallback($, T)) {
                const Z = await a.ensureQueryData((0, C.lx)(a, E, g, $, T, S));
                if ((Z && P.push(Z), S != t.wI.full)) {
                  const Ie = await a.ensureQueryData(
                    (0, C.lx)(a, E, g, $, T, t.wI.full),
                  );
                  Ie && P.push(Ie);
                }
              }
              if (!me)
                try {
                  const Z = await a.ensureQueryData((0, x.dO)(a, E, g));
                  Z && P.push(Z);
                } catch (Z) {
                  if (
                    ((0, D.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${g?.GID} from clan ${g?.clanSteamID.GetAccountID()}`,
                    ),
                    P.length == 0)
                  )
                    throw Z;
                }
              return P;
            },
          };
        }
      },
      68266: (U, ue, o) => {
        "use strict";
        o.d(ue, { lx: () => $, m0: () => E });
        var t = o(9046),
          ee = o(55483),
          h = o(72609),
          _ = o(21721),
          D = o(5827),
          C = o(40358),
          x = o(75233),
          Q = o(80902),
          b = o(18210),
          u = o(53113),
          a = o(85741);
        function E(S, me, P, Z = t.wI.full, Ie = !0) {
          const ve = (0, x.jE)(),
            ae = (0, D.eG)();
          return (0, Q.I)($(ve, ae, S, me, P, Z, Ie)).data ?? void 0;
        }
        function g(S, me, P, Z = t.wI.full, Ie = !0) {
          return ["useEventImageURLWithFallback", S?.GID, me, P, Z, Ie];
        }
        function $(S, me, P, Z, Ie, ve = t.wI.full, ae = !0) {
          return {
            queryKey: g(P, Z, Ie, ve, ae),
            enabled: !!P?.GID,
            initialData: () => T(P, Z, Ie, ve, ae),
            queryFn: async () => {
              if (!P) return null;
              let te = T(P, Z, Ie, ve, ae);
              if (te) return te;
              const le = await S.ensureQueryData(
                (0, ee.ec)(P.clanSteamID.GetAccountID(), S),
              );
              if (Z == "capsule") {
                let Y = P.appid;
                if (
                  !Y &&
                  le &&
                  ((le.is_creator_home && !le.is_ogg) || le.is_curator)
                )
                  if (P.jsondata?.referenced_appids?.length)
                    Y = P.jsondata.referenced_appids[0];
                  else return le.avatar_full_url ?? null;
                const k = await S.ensureQueryData((0, C.AQ)(me, { appid: Y }));
                return k
                  ? ((0, _.b0)(k, "main_capsule") ?? null)
                  : le?.avatar_full_url
                    ? le.avatar_full_url
                    : `${h.TS.STORE_ITEM_BASE_URL}steam/apps/${Y}/header.jpg`;
              }
              return Z == "background" &&
                le &&
                ((le.is_creator_home && !le.is_ogg) || le.is_curator)
                ? (le.creator_page_bg_url ?? null)
                : await S.ensureQueryData((0, a.dO)(S, me, P));
            },
          };
        }
        function T(S, me, P, Z = t.wI.full, Ie = !0) {
          if (!S) return;
          const ve = S.GetImageURL(me, P, Z);
          if (ve && ve.trim().length > 0) return ve;
          const ae = b.A0.GetELanguageFallback(P);
          if (P != ae) {
            const le = S.GetImageURL(me, ae, Z);
            if (le && le.trim().length > 0) return le;
          }
          if (me == "capsule") {
            let le = S.GetImageFromBeginningOfDescription(P, Number.MAX_VALUE);
            if (le && (Ie || (0, u.ZF)(le))) return le;
          }
        }
      },
      85741: (U, ue, o) => {
        "use strict";
        o.d(ue, { Mg: () => Q, dO: () => b });
        var t = o(55483),
          ee = o(99412),
          h = o(72609),
          _ = o(5827),
          D = o(40358),
          C = o(75233),
          x = o(80902);
        function Q(a) {
          const E = (0, C.jE)(),
            g = (0, _.eG)();
          return (0, x.I)(b(E, g, a)).data ?? void 0;
        }
        function b(a, E, g) {
          return {
            queryKey: u(g),
            enabled: !!g?.GID,
            queryFn: async () => {
              if (!g) return null;
              const $ = g.appid
                  ? await a.ensureQueryData((0, D.OE)(E, { appid: g.appid }))
                  : null,
                T = await a.ensureQueryData(
                  (0, t.ec)(g.clanSteamID.GetAccountID(), a),
                );
              if (g.appid)
                if ($) {
                  if (
                    $.all_ages_screenshots &&
                    $.all_ages_screenshots.length > 0
                  ) {
                    let S = Number(
                      g.bOldAnnouncement
                        ? g.AnnouncementGID
                        : g.GID == null
                          ? 0
                          : g.GID,
                    );
                    return (
                      (S = S % $.all_ages_screenshots.length),
                      `${h.TS.STORE_ITEM_BASE_URL}${$.all_ages_screenshots[S].filename}`
                    );
                  }
                } else return "";
              return g.GetEventType() != ee.ajI &&
                T &&
                ((T.is_creator_home && !T.is_ogg) || T.is_curator)
                ? (T.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function u(a) {
          return ["useFallbackArtworkScreenshot", a?.GID];
        }
      },
      16369: (U, ue, o) => {
        "use strict";
        o.d(ue, { H: () => h });
        var t = o(99412),
          ee = o(72609);
        const h = () => (ee.TS.EUNIVERSE === t.Rv ? 2581 : 45267781);
      },
      31774: (U, ue, o) => {
        "use strict";
        o.d(ue, { $O: () => me, wk: () => S });
        var t = o(80902),
          ee = o(75233),
          h = o(90626),
          _ = o(72609),
          D = o(48491),
          C = o(49288);
        async function x(P, Z) {
          const { rgDefIDs: Ie, strCategory: ve, itemClass: ae } = Z,
            te = await C.a9.QueryRewardItems(P, {
              definitionids: Ie,
              community_item_classes: ae ? [ae] : void 0,
              filter_match_any_category_tags: ve ? [ve] : void 0,
            });
          if (!te.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + te.GetEResult(),
            );
          return te.Body().toObject().definitions ?? [];
        }
        let Q;
        function b() {
          return (
            Q || (Q = new D.D(_.TS.WEBAPI_BASE_URL)), Q.GetServiceTransport()
          );
        }
        async function u(P) {
          return x(b(), P);
        }
        const a = 3600 * 1e3;
        function E(P) {
          return ["LoyaltyRewardDef", P];
        }
        function g(P, Z) {
          return ["LoyaltyRewardDefsByCategoryAndClass", P, Z];
        }
        function $(P) {
          return {
            queryKey: E(P),
            queryFn: async () => {
              const Z = await u({ rgDefIDs: [P] }),
                Ie = Z.length == 1 ? Z[0] : void 0;
              if (!Ie)
                throw new Error(
                  `Asked for point shop item ${P} and got ${Z.length} items back, wanted exactly one.`,
                );
              return Ie;
            },
            enabled: P > 0,
            staleTime: a,
            retry: !1,
          };
        }
        function T(P, Z) {
          return {
            queryKey: g(P, Z),
            queryFn: () => u({ strCategory: P, itemClass: Z }),
            enabled: !!(P && Z),
            staleTime: a,
            retry: !1,
          };
        }
        function S(P) {
          const { data: Z } = (0, t.I)($(P));
          return Z;
        }
        function me(P, Z) {
          const Ie = (0, ee.jE)(),
            { data: ve } = (0, t.I)(T(P, Z));
          return (
            (0, h.useEffect)(() => {
              ve?.forEach((ae) => {
                ae.defid !== void 0 && Ie.setQueryData(E(ae.defid), ae);
              });
            }, [ve, Ie]),
            ve
          );
        }
      },
      47797: (U, ue, o) => {
        "use strict";
        o.d(ue, { Ns: () => h });
        var t = o(99412);
        const ee = 1778623200;
        function h(C, x) {
          let Q = !1;
          return (
            C && C.GetEventType() == t.ajI
              ? (Q = !0)
              : C && x && x.is_creator_home && (Q = _(C, x)),
            Q
          );
        }
        function _(C, x) {
          return !!x && !!x.is_creator_home && (C.createTime ?? 0) > ee;
        }
        function D(C) {
          const x = useClanInfoByAccountID(C.clanSteamID.GetAccountID());
          return h(C, x.data);
        }
      },
      64457: (U, ue, o) => {
        "use strict";
        o.d(ue, { PE: () => te, Yg: () => Ie, _t: () => ve, gO: () => le });
        var t = o(7850),
          ee = o(21721),
          h = o(25046),
          _ = o(40358),
          D = o(68094),
          C = o(41032),
          x = o(90626),
          Q = o(62571),
          b = o(40426),
          u = o(36118),
          a = o(36707),
          E = o(18210),
          g = o(72609),
          $ = o(96538),
          T = o(85599),
          S = o(64271),
          me = o(48963),
          P = o.n(me),
          Z = o(50573);
        function Ie(Y) {
          const { id: k, bPopOutTrailerPlayback: X } = Y,
            { data: V } = (0, _.Yo)(k),
            { data: ie } = (0, _.j4)(k),
            { data: ye } = (0, _.J$)(k),
            [ze, J] = (0, x.useState)(!1),
            [Te, he] = (0, x.useState)(!1),
            Ae = (0, C.dy)(),
            Ce = V?.highlights?.filter((q) => !Ae || q.all_ages),
            we = Ce && Ce?.length > 0 ? Ce[0] : void 0,
            j = x.useCallback(() => {
              we && (X ? he(!0) : J((q) => !q));
            }, [we, X]);
          if (!ye)
            return (0, t.jsx)("div", {
              className: (0, a.A)(P().HilightGrid, P().MediaContainer),
              children: (0, t.jsx)(T.t, { size: "medium" }),
            });
          const K = we
            ? (0, t.jsx)(Se, {
                trailer: we,
                bPlayVideo: ze,
                fnTogglePlayTrailer: j,
              })
            : null;
          return !we &&
            !(
              ie &&
              ie.all_ages_screenshots &&
              ie.all_ages_screenshots.length > 0
            )
            ? null
            : (0, t.jsxs)("div", {
                className: (0, a.A)(P().HilightGrid, P().MediaContainer),
                children: [
                  (0, t.jsx)(ve, {
                    elFeaturedInCenter: K,
                    storeItemScreenshots: ie,
                    trailer: we,
                    id: k,
                    name: ye.name || "",
                  }),
                  X
                    ? (0, t.jsx)(te, {
                        id: k,
                        bShowModal: Te,
                        hideModal: () => he(!1),
                      })
                    : (0, t.jsx)(ae, {
                        name: ye.name || "",
                        trailer: we,
                        bPlayVideo: ze,
                        fnTogglePlayTrailer: j,
                        bControls: !0,
                      }),
                ],
              });
        }
        function ve(Y) {
          const {
              elFeaturedInCenter: k,
              id: X,
              name: V,
              trailer: ie,
              storeItemScreenshots: ye,
              featureElementclassName: ze,
              bUseTrailerAsFirstThumb: J,
              bNoScreenShotModals: Te,
            } = Y,
            [he, Ae] = x.useState(void 0),
            [Ce, we] = (0, b.XC)(),
            j = (0, C.dy)(),
            K = (0, x.useRef)(null),
            [q, ge] = (0, x.useState)(0);
          if (!X) return null;
          const xe = k || (he !== void 0 && he !== -1) ? he : 0,
            fe = new Array(),
            de = new Array();
          J &&
            ie &&
            (fe.push(
              (0, t.jsx)(
                Se,
                {
                  trailer: ie,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => Ae(0),
                  onMouseLeave: () => {
                    const Oe = K.current;
                    Oe && ge(Oe.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            de.push(
              (0, t.jsx)(
                ae,
                {
                  ref: K,
                  name: V,
                  trailer: ie,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: q,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const be = (
            j ? ye?.all_ages_screenshots : ye?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (be?.forEach((Oe, Me) => {
              if ((k || Me > 0) && fe.length < 3) {
                const _e = (0, ee.bu)(Oe, "thumb"),
                  Ge = (0, ee.bu)(Oe, "600x338"),
                  Fe = fe.length;
                fe.push(
                  (0, t.jsx)(
                    "div",
                    {
                      className: (0, a.A)({
                        [P().ThumbnailCtn]: !0,
                        [P().ThumbnialClickable]: !Te,
                      }),
                      onMouseEnter: () => Ae(Fe),
                      children: Te
                        ? (0, t.jsx)("img", { src: _e, alt: V })
                        : (0, t.jsx)("button", {
                            type: "button",
                            className: P().ThumbnailButton,
                            onClick: () => {
                              const Ue = [...(be || [])];
                              if (Ue.length > 0) {
                                for (let Ye = 0; Ye < Me; ++Ye) {
                                  const Ve = Ue.shift();
                                  Ve && Ue.push(Ve);
                                }
                                Ce(Ue.map((Ye) => (0, ee.bu)(Ye, "full")));
                              }
                            },
                            children: (0, t.jsx)("img", { src: _e, alt: V }),
                          }),
                    },
                    Me + "_small_" + _e,
                  ),
                ),
                  de.push(
                    (0, t.jsx)(
                      "div",
                      {
                        className: P().ScreenshotDisplayCtn,
                        children: (0, t.jsx)("img", { src: Ge, alt: V }),
                      },
                      Me + "_big_" + _e,
                    ),
                  );
              }
            }),
            !k && (!de || de.length == 0))
          )
            return null;
          const pe = fe.slice(0, 3),
            Ne = Array.from({ length: Math.max(0, 3 - pe.length) });
          return (0, t.jsxs)(t.Fragment, {
            children: [
              we,
              (0, t.jsx)("div", {
                className: ze || P().MainMediaCtn,
                children:
                  k && (xe === -1 || xe === void 0)
                    ? (0, t.jsx)(t.Fragment, { children: k })
                    : (0, t.jsx)(t.Fragment, {
                        children: xe !== void 0 && de[xe],
                      }),
              }),
              pe.length > 0 &&
                (0, t.jsxs)("div", {
                  className: P().ScreenshotThumbnailRow,
                  onMouseLeave: () => Ae(-1),
                  children: [
                    pe,
                    Ne.map((Oe, Me) =>
                      (0, t.jsx)(
                        "div",
                        { className: P().ThumbnailCtn },
                        `app_${(0, D.ER)(X)}_${Me}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function ae(Y) {
          const {
            ref: k,
            name: X,
            trailer: V,
            bControls: ie,
            bPlayVideo: ye,
            fnTogglePlayTrailer: ze,
            startTime: J,
          } = Y;
          if (
            ((0, x.useEffect)(() => {
              const he = k?.current;
              if (J != null && J > 0 && he) {
                const Ae = () => {
                  he.currentTime = J || 0;
                };
                return (
                  he.addEventListener("loadedmetadata", Ae),
                  () => {
                    he.removeEventListener("loadedmetadata", Ae);
                  }
                );
              }
            }, [k, J]),
            !V)
          )
            return null;
          let Te = (0, a.A)(P().VideoLargeContainer, ye && P().videoPlaying);
          return (0, t.jsxs)("div", {
            className: Te,
            onClick: ze,
            role: "presentation",
            children: [
              (0, t.jsx)(Z.hj, {
                name: X,
                trailerCategory: V.trailer_category,
                trailerDisplay: Z.g,
                mouseOver: !1,
              }),
              !!(ye && V.microtrailer) &&
                (0, t.jsx)("video", {
                  className: P().VideoLarge,
                  ref: k,
                  controls: ie,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: J != null && J > 0 ? void 0 : V.screenshot_full,
                  children: V.microtrailer?.map((he) =>
                    g.TS.IN_CLIENT && he.type == "video/mp4"
                      ? null
                      : (0, t.jsx)(
                          "source",
                          {
                            src: (0, h.M4)(V, he.filename || ""),
                            type: he.type,
                          },
                          he.filename,
                        ),
                  ),
                }),
              ie &&
                (0, t.jsx)("button", {
                  type: "button",
                  className: P().CloseButton,
                  "aria-label": (0, E.we)("#Button_Close"),
                  children: (0, t.jsx)(u.sED, {}),
                }),
            ],
          });
        }
        function te(Y) {
          const { id: k, bShowModal: X, trailerBaseID: V, hideModal: ie } = Y,
            { data: ye } = (0, _.J$)(k),
            ze = (0, h.kB)(k),
            J = (0, x.useMemo)(() => {
              if (!(!ze || ze.length == 0)) {
                if (V) {
                  const K = ze.find((q) => q.trailer_base_id == V);
                  if (K) return K;
                }
                return ze[0];
              }
            }, [ze, V]),
            Te = x.useId(),
            he = x.useId(),
            {
              rgDashTrailers: Ae,
              rgHlsTrailers: Ce,
              strCaptionManufest: we,
              strScreenshot: j,
            } = (0, x.useMemo)(() => {
              if (!J)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: K, rgHlsTrailers: q } = (0, h.hg)(J);
              return {
                rgDashTrailers: K,
                rgHlsTrailers: q,
                strCaptionManufest: (0, h.Wv)(J),
                strScreenshot: (0, h.hl)(J),
              };
            }, [J]);
          return !J || !J.adaptive_trailers || Ae.length == 0
            ? null
            : (0, t.jsx)($.EN, {
                active: X,
                children: (0, t.jsxs)($.eV, {
                  "aria-labelledby": (0, Q.q)(Te, he),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: ie,
                  children: [
                    (0, t.jsx)("div", {
                      className: P().VideoPopupContainers,
                      children: (0, t.jsx)(S.P, {
                        dashManifests: Ae,
                        hlsManifest: Ce[0] || "",
                        screenshot: j,
                        altText: J.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: we,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      id: Te,
                      style: { display: "none" },
                      children: ye?.name || "",
                    }),
                    (0, t.jsx)("div", {
                      id: he,
                      style: { display: "none" },
                      children: J.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function le(Y) {
          const {
              appid: k,
              trailerBaseID: X,
              bShowModal: V,
              hideModal: ie,
            } = Y,
            ye = (0, x.useMemo)(() => ({ appid: k }), [k]);
          return (0, t.jsx)(te, {
            id: ye,
            trailerBaseID: X,
            bShowModal: V,
            hideModal: ie,
          });
        }
        function Se(Y) {
          const {
            trailer: k,
            fnTogglePlayTrailer: X,
            bPlayVideo: V,
            onMouseEnter: ie,
            onMouseLeave: ye,
          } = Y;
          return (0, t.jsxs)("div", {
            className: (0, a.A)({
              [P().VideoThumbnail]: !V,
              [P().videoPlaying]: V,
              [P().ThumbnailCtn]: !0,
            }),
            onClick: X,
            onMouseEnter: ie,
            onMouseLeave: ye,
            role: "presentation",
            children: [
              (0, t.jsx)("img", { src: (0, h.hl)(k), alt: k.trailer_name }),
              (0, t.jsx)("button", {
                type: "button",
                className: P().VideoPlayButton,
                "aria-label": (0, E.we)("#Playback_Play_Tooltip"),
                children: (0, t.jsx)(u.jGG, {}),
              }),
            ],
          });
        }
      },
      76617: (U, ue, o) => {
        "use strict";
        o.d(ue, { V: () => Q });
        function t(b) {
          return Object.prototype.toString.call(b) === "[object Object]";
        }
        function ee(b) {
          if (!t(b)) return !1;
          const u = b.constructor;
          if (typeof u > "u") return !0;
          const a = u.prototype;
          return !(
            !t(a) || !Object.prototype.hasOwnProperty.call(a, "isPrototypeOf")
          );
        }
        function h(...b) {
          return JSON.stringify(b, (u, a) => {
            if (ee(a)) {
              const E = {};
              return (
                Object.keys(a)
                  .sort()
                  .forEach((g) => {
                    E[g] = a[g];
                  }),
                E
              );
            }
            return a;
          });
        }
        var _ = o(90626),
          D = o(7850);
        const C = (0, _.createContext)({ instances: {}, factories: {} });
        function x(b) {
          const { name: u, fnFactory: a, children: E } = b,
            g = React.useContext(C),
            [$] = useState({}),
            T = useMemo(
              () => ({
                instances: $,
                factories: { ...g.factories, [u]: a },
                parent: g,
              }),
              [$, u, g],
            );
          return jsx(C.Provider, { value: T, children: E });
        }
        function Q(b, u) {
          const a = (0, _.useContext)(C),
            E = typeof b == "string" ? b : h(...b);
          let g = a;
          for (; g; ) {
            if (E in g.instances) return g.instances[E];
            if (E in g.factories) break;
            g = g.parent;
          }
          const T = (g?.factories[E] ?? u)();
          return ((g ?? a).instances[E] = T), T;
        }
      },
      1012: (U, ue, o) => {
        "use strict";
        o.d(ue, { b: () => b });
        var t = o(90626),
          ee = o(84797),
          h = o(68622),
          _ = o(32339),
          D = o(4452);
        const C = { 2022: ee, 2023: h, 2024: _, 2025: D },
          x = Object.values(C).reduce((u, a) => ({ ...u, ...a }), {}),
          Q = 2022;
        function b(u) {
          const [a, E] = (0, t.useState)({});
          return (
            (0, t.useEffect)(() => {
              let $ = C[u];
              $ || ($ = C[Q]), E({ ...x, ...$ });
            }, [u]),
            a
          );
        }
      },
      38884: (U, ue, o) => {
        "use strict";
        o.d(ue, { E0: () => b, oE: () => u });
        var t = o(71742),
          ee = o(3166),
          h = o(76559),
          _ = o(73259),
          D = o(34592),
          C = o(99412),
          x = o(41635);
        function Q(a) {
          return (
            (a.gid == null || a.gid == null || a.gid == "0") &&
            !!a.announcement_body &&
            a.announcement_body.gid != "0"
          );
        }
        function b(a) {
          return Q(a) ? _.cB + a.announcement_body?.gid : a.gid;
        }
        function u(a, E) {
          let g = new _.lh();
          if (
            ((g.clanSteamID = a),
            (0, t.wT)(
              g.clanSteamID && g.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                g.clanSteamID.ConvertTo64BitString() +
                " " +
                ee.TS.EUNIVERSE,
            ),
            (g.GID = b(E)),
            (g.bOldAnnouncement = Q(E)),
            (g.appid = E.appid ?? 0),
            (g.createTime = E.rtime_created),
            (g.startTime = E.rtime32_start_time),
            (g.endTime = E.rtime32_end_time),
            (g.visibilityStartTime = E.rtime32_visibility_start),
            (g.visibilityEndTime = E.rtime32_visibility_end),
            (g.loadedAllLanguages = !1),
            (g.type = E.event_type ?? C.DRF),
            (g.nVotesUp = E.votes_up ?? 0),
            (g.nVotesDown = E.votes_down ?? 0),
            (g.comment_type = E.comment_type),
            (g.gidfeature = E.gidfeature),
            (g.gidfeature2 = E.gidfeature2),
            (g.featured_app_tagid = E.featured_app_tagid),
            (g.vecTags = new Array()),
            (g.creator_steamid = E.creator_steamid),
            (g.last_update_steamid = E.last_update_steamid),
            (g.rtime32_last_modified = E.rtime32_last_modified),
            (g.rtime32_moderator_reviewed = E.rtime_mod_reviewed),
            (g.video_preview_type = E.video_preview_type),
            (g.video_preview_id = E.video_preview_id),
            (g.has_live_stream = E.has_live_stream),
            (g.live_stream_viewer_count = E.live_stream_viewer_count),
            (g.m_nBuildID = E.build_id),
            (g.m_strBuildBranch = E.build_branch),
            E.announcement_body)
          ) {
            let T = E.announcement_body;
            (g.AnnouncementGID = T.gid),
              g.name.set(T.language, T.headline),
              g.description.set(T.language, T.body),
              g.timestamp_loc_updated.clear(),
              (g.forumTopicGID = T.forum_topic_id),
              (g.nCommentCount = T.commentcount),
              (g.postTime = T.posttime),
              g.bOldAnnouncement && !T.hidden && (g.startTime = T.posttime),
              (g.announcementClanSteamID = new h.b(T.clanid)),
              T.tags &&
                T.tags.length > 0 &&
                T.tags.forEach((S) => g.vecTags.push(S)),
              !g.rtime32_last_solr_search_col_updated &&
                g.rtime32_last_modified &&
                ((g.rtime32_last_solr_search_col_updated =
                  g.rtime32_last_modified),
                (g.rtime32_last_modified = T.updatetime));
          } else
            (g.AnnouncementGID = "0"),
              (g.forumTopicGID = E.forum_topic_id),
              g.name.clear(),
              g.description.clear(),
              g.timestamp_loc_updated.clear(),
              (g.postTime = E.rtime32_start_time),
              (g.nCommentCount = E.comment_count ?? 0),
              g.name.set(C.Bhc, E.event_name ?? ""),
              g.description.set(C.Bhc, E.event_notes ?? "");
          E.broadcaster_accountid &&
            (g.broadcaster = new h.b(E.broadcaster_accountid));
          const $ = _.DJ;
          try {
            g.jsondata = {
              ...$,
              ...(E.jsondata ? JSON.parse(E.jsondata) : void 0),
            };
          } catch (T) {
            const S = (0, D.H)(T);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  S.strErrorMsg,
                S,
              ),
              T)
            );
          }
          if (
            ((g.jsondata.localized_capsule_image = (0, x.$Y)(
              g.jsondata.localized_capsule_image || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_title_image = (0, x.$Y)(
              g.jsondata.localized_title_image || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_subtitle = (0, x.$Y)(
              g.jsondata.localized_subtitle || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_summary = (0, x.$Y)(
              g.jsondata.localized_summary || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_title = (0, x.$Y)(
              g.jsondata.localized_broadcast_title || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_left_image = (0, x.$Y)(
              g.jsondata.localized_broadcast_left_image || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_right_image = (0, x.$Y)(
              g.jsondata.localized_broadcast_right_image || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_sale_header = (0, x.$Y)(
              g.jsondata.localized_sale_header || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_sale_overlay = (0, x.$Y)(
              g.jsondata.localized_sale_overlay || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_banner = (0, x.$Y)(
              g.jsondata.localized_sale_product_banner || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_mobile_banner = (0, x.$Y)(
              g.jsondata.localized_sale_product_mobile_banner || [],
              C.bP9,
              null,
            )),
            (g.jsondata.localized_sale_logo = (0, x.$Y)(
              g.jsondata.localized_sale_logo || [],
              C.bP9,
              null,
            )),
            g.jsondata.sale_num_headers !== void 0 &&
              g.jsondata.localized_per_day_sales_header)
          )
            for (let T = 0; T < g.jsondata.sale_num_headers; ++T)
              g.jsondata.localized_per_day_sales_header[T] = (0, x.$Y)(
                g.jsondata.localized_per_day_sales_header[T],
                C.bP9,
                null,
              );
          return (
            g.jsondata.sale_sections &&
              g.jsondata.sale_sections.forEach((T, S) => {
                T.localized_label &&
                  (T.localized_label = (0, x.$Y)(
                    T.localized_label,
                    C.bP9,
                    null,
                  )),
                  T.section_type === "trailercarousel" &&
                    (T.show_as_carousel = !1),
                  (g.jsondata.sale_sections[S] = { ..._.G6, ...T });
              }),
            g.jsondata.email_setting &&
              g.jsondata.email_setting.sections &&
              g.jsondata.email_setting.sections.forEach((T) => {
                T.localized_headline !== void 0 &&
                  T.localized_headline !== null &&
                  (T.localized_headline = (0, x.$Y)(
                    T.localized_headline,
                    C.bP9,
                    null,
                  )),
                  T.localized_body !== void 0 &&
                    T.localized_body !== null &&
                    (T.localized_body = (0, x.$Y)(
                      T.localized_body,
                      C.bP9,
                      null,
                    )),
                  T.localized_image !== void 0 &&
                    T.localized_image !== null &&
                    (T.localized_image = (0, x.$Y)(
                      T.localized_image,
                      C.bP9,
                      null,
                    ));
              }),
            g.jsondata.localized_title_image.forEach((T, S) => {
              if (T != null && T.substr(0, 4) == "http") {
                let me = T.lastIndexOf("/"),
                  P = T.substr(me + 1);
                g.jsondata.localized_title_image[S] = P;
              }
            }),
            (g.bLoaded = !0),
            E.published
              ? E.unlisted
                ? (g.visibility_state = _.zv.k_EEventStateUnlisted)
                : E.hidden
                  ? (g.visibility_state = _.zv.k_EEventStateStaged)
                  : (g.visibility_state = _.zv.k_EEventStateVisible)
              : (g.visibility_state = _.zv.k_EEventStateUnpublished),
            g
          );
        }
      },
      46943: (U, ue, o) => {
        "use strict";
        o.d(ue, { Ul: () => P, xz: () => ve, $Y: () => Ie, i8: () => Z });
        var t = o(7850),
          ee = o(90626),
          h = o(75844),
          _ = o(5858),
          D = o(36707),
          C = o(3166),
          x = o(13465);
        const Q =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          b =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          u =
            o.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var a = o(43047),
          E = o.n(a),
          g = o(71742),
          $ = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          S = (ae, te, le, Se) => {
            for (
              var Y = Se > 1 ? void 0 : Se ? T(te, le) : te,
                k = ae.length - 1,
                X;
              k >= 0;
              k--
            )
              (X = ae[k]) && (Y = (Se ? X(te, le, Y) : X(Y)) || Y);
            return Se && Y && $(te, le, Y), Y;
          };
        function me(ae) {
          switch (ae) {
            case "X-Small":
            case "Small":
              return Q;
            case "Medium":
            case "MediumLarge":
              return b;
            case "Large":
            case "X-Large":
            case "FillArea":
              return u;
            default:
              return (0, g.z_)(ae, `Unhandled size ${ae}`), b;
          }
        }
        const P = ee.memo(function (te) {
          const {
              strAvatarURL: le,
              size: Se = "Medium",
              className: Y,
              statusStyle: k,
              statusPosition: X,
              children: V,
              ...ie
            } = te,
            ye = ee.useMemo(() => {
              const ze = [];
              return le && ze.push(le), ze.push(me(Se)), ze;
            }, [le, Se]);
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              E().avatarHolder,
              "avatarHolder",
              "no-drag",
              Se,
              Y,
            ),
            ...ie,
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(E().avatarStatus, "avatarStatus", X),
                style: k,
              }),
              (0, t.jsx)(x.c, {
                className: (0, D.A)(E().avatar, "avatar"),
                rgSources: ye,
                draggable: !1,
              }),
              V,
            ],
          });
        });
        let Z = class extends ee.Component {
          render() {
            const {
              persona: ae,
              size: te = "Medium",
              animatedAvatar: le,
              className: Se,
              strBackupAvatarURL: Y,
              ...k
            } = this.props;
            let X = "";
            return (
              le && le.image_small && le.image_small.length != 0
                ? (X =
                    C.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + le.image_small)
                : ae
                  ? ((X = ae.avatar_url_medium),
                    te == "Small" || te == "X-Small"
                      ? (X = ae.avatar_url)
                      : (te == "Large" ||
                          te == "X-Large" ||
                          te == "FillArea") &&
                        (X = ae.avatar_url_full))
                  : Y && (X = Y),
              (0, t.jsx)(P, {
                strAvatarURL: X,
                size: te,
                className: (0, D.A)((0, _.rO)(ae), Se),
                ...k,
              })
            );
          }
        };
        Z = S([h.PA], Z);
        const Ie = (0, h.PA)((ae) => {
          const {
            profileItem: te,
            className: le,
            bDisableAnimation: Se,
            ...Y
          } = ae;
          if (!te || !te.image_small || te.image_small.length == 0) return null;
          let k = Se ? te.image_large : te.image_small;
          return (
            k || (k = te.image_small),
            k.startsWith("https://") ||
              (k = C.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + k),
            (0, t.jsx)("div", {
              className: (0, D.A)(E().avatarFrame, le, "avatarFrame"),
              ...Y,
              children: (0, t.jsx)("img", {
                className: E().avatarFrameImg,
                src: k,
              }),
            })
          );
        });
        let ve = class extends ee.Component {
          m_timer;
          constructor(ae) {
            super(ae),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let ae = 0;
            switch (this.props.loopDuration) {
              case "Short":
                ae = 2500;
                break;
              case "Medium":
                ae = 5e3;
                break;
              case "Long":
                ae = 1e4;
                break;
            }
            ae != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                ae,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(ae) {
            this.props.loopDuration != ae.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != ae.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: ae,
              animatedAvatar: te,
              avatarFrame: le,
              children: Se,
              style: Y,
              bLimitProfileFrameAnimationTime: k,
              bParentHovered: X,
              ...V
            } = this.props;
            V.onClick && (Y = { ...Y, cursor: "pointer" });
            const ie = this.state.bAnimate ? (te ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(Z, {
                animatedAvatar: ie,
                ...V,
                children: [
                  Se,
                  (0, t.jsx)(Ie, {
                    profileItem: le ?? null,
                    bDisableAnimation: k && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        ve = S([h.PA], ve);
      },
      54407: (U, ue, o) => {
        "use strict";
        o.d(ue, { B3: () => ve, KM: () => S, KT: () => Ie });
        var t = o(41735),
          ee = o.n(t),
          h = o(58632),
          _ = o.n(h),
          D = o(90626),
          C = o(80902),
          x = o(75233),
          Q = o(72604),
          b = o(76559),
          u = o(34592),
          a = o(3166),
          E = o(35038),
          g = o(27386),
          $ = o(68312);
        const T = "nicknames";
        function S(te) {
          const le = (0, $.KV)(),
            { data: Se, isLoading: Y } = (0, C.I)({
              queryKey: [T],
              queryFn: async () => {
                const k = new Map();
                if (a.iA.logged_in) {
                  const X = E.w.Init(g.w_T),
                    ie = (await g.xtC.GetNicknameList(le, X)).Body().toObject();
                  ie?.nicknames &&
                    ie.nicknames.length > 0 &&
                    ie.nicknames.forEach((ye) => {
                      ye.accountid &&
                        ye.nickname &&
                        k.set(ye.accountid, ye.nickname);
                    });
                }
                return k;
              },
            });
          return Se ? Se.get(te) : null;
        }
        async function me(te) {
          if (!te || te.length == 0) return [];
          const le =
            (0, a.yK)() == "community"
              ? a.TS.COMMUNITY_BASE_URL
              : a.TS.STORE_BASE_URL;
          if (te.length == 1) {
            const Se = { accountid: te[0], origin: self.origin },
              Y = await ee().get(`${le}actions/ajaxgetavatarpersona`, {
                params: Se,
              });
            if (
              !Y ||
              Y.status != 200 ||
              Y.data?.success != Q.R ||
              !Y.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, u.H))(Y).strErrorMsg}`;
            return [Y.data.userinfo];
          } else {
            const Se = { accountids: te.join(","), origin: self.origin },
              Y = await ee().get(`${le}actions/ajaxgetmultiavatarpersona`, {
                params: Se,
              });
            if (
              !Y ||
              Y.status != 200 ||
              Y.data?.success != Q.R ||
              !Y.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, u.H))(Y).strErrorMsg}`;
            const k = new Map();
            return (
              Y.data.userinfos.forEach((X) =>
                k.set(new b.b(X.steamid).GetAccountID(), X),
              ),
              te.map((X) => k.get(X))
            );
          }
        }
        const P = new (_())((te) => me(te), { cache: !1 }),
          Z = "avatarandpersonas";
        function Ie(te) {
          const { data: le, isLoading: Se } = (0, C.I)({
            queryKey: [Z, te],
            queryFn: () => P.load(te),
          });
          return [le, Se];
        }
        function ve(te) {
          const le = (0, x.jE)(),
            { data: Se, isLoading: Y } = (0, C.I)({
              queryKey: [Z, te],
              queryFn: async () => {
                const X = await P.loadMany(te);
                return (
                  X.forEach((V) => {
                    if (V instanceof Error) return;
                    const ie = [Z, new b.b(V.steamid).GetAccountID()];
                    le.setQueryData(ie, V);
                  }),
                  X
                );
              },
              enabled: te?.length > 0,
            }),
            k = (0, D.useMemo)(() => {
              const X = new Array();
              return (
                Se?.forEach((V) => {
                  V instanceof Error || X.push(V);
                }),
                X
              );
            }, [Se]);
          return Y ? null : k;
        }
        function ae(te) {
          return ReactQueryClient.getQueryData([Z, te]);
        }
      },
      59490: (U, ue, o) => {
        "use strict";
        o.d(ue, { p: () => Q });
        var t = o(7850),
          ee = o(90626),
          h = o(76559),
          _ = o(54407),
          D = o(15736),
          C = o.n(D),
          x = o(3166);
        function Q(b) {
          const {
              accountID: u,
              bHideWhenNotAvailable: a,
              bHideName: E,
              bLink: g = !0,
            } = b,
            [$] = (0, _.KT)(u),
            T = (0, _.KM)(u),
            S = ee.useMemo(() => h.b.InitFromAccountID(u), [u]),
            me = `${x.TS.COMMUNITY_BASE_URL}profiles/${S.ConvertTo64BitString()}`,
            P = g ? "a" : "span";
          return (0, t.jsx)(t.Fragment, {
            children: $
              ? (0, t.jsxs)(P, {
                  href: g ? me : void 0,
                  children: [
                    (0, t.jsx)("img", {
                      className: D.SmallAvatar,
                      src: $.avatar_url,
                      "data-miniprofile": "s" + S.ConvertTo64BitString(),
                    }),
                    !E &&
                      (0, t.jsx)("span", {
                        children: T
                          ? `${T} (${$.persona_name})`
                          : $.persona_name,
                      }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: !a && (0, t.jsx)("span", { children: u }),
                }),
          });
        }
      },
      9519: (U, ue, o) => {
        "use strict";
        o.d(ue, { q: () => _ });
        var t = o(90626),
          ee = o(30096);
        const h = 2e4;
        function _(D) {
          const C = (0, t.useRef)(!1),
            x = (0, t.useRef)(null),
            Q = (0, t.useCallback)(() => {
              x.current = setTimeout(() => {
                D.current &&
                  !D.current.paused &&
                  (D.current.pause(), (C.current = !0));
              }, h);
            }, [D]),
            b = (0, t.useCallback)(() => {
              x.current && (clearTimeout(x.current), (x.current = null)),
                D.current && C.current && (D.current.play(), (C.current = !1));
            }, [D]);
          (0, ee.l6)(window, "blur", Q), (0, ee.l6)(window, "focus", b);
        }
      },
      60476: (U, ue, o) => {
        "use strict";
        o.r(ue), o.d(ue, { YearInReviewRoutes: () => ea, default: () => Xs });
        var t = o(7850),
          ee = o(72609),
          h = o(90626),
          _ = o(71742);
        const D = h.createContext(void 0);
        function C() {
          const s = h.useContext(D);
          return (
            (0, _.wT)(
              s,
              "Cannot use YIR page data outside of Steam Replay page!",
            ),
            s
          );
        }
        var x = o(3166),
          Q = o(35038),
          b = o(80613),
          u = o.n(b),
          a = o(75245);
        const E = 0,
          g = 1,
          $ = 2,
          T = 3,
          S = 4,
          me = 0,
          P = 1,
          Z = 2,
          Ie = 3,
          ve = 4,
          ae = 5,
          te = 6,
          le = 7,
          Se = 8,
          Y = 9,
          k = 10,
          X = 11;
        function V(s) {
          return "unknown ESeason ( " + s + " )";
        }
        function ie(s) {
          return "unknown EUserActionEventType ( " + s + " )";
        }
        function ye(s) {
          return "unknown EYearInReviewPrivacyState ( " + s + " )";
        }
        function ze(s) {
          return "unknown EYearInReviewAccessSource ( " + s + " )";
        }
        class J extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.total_playtime_seconds || a.Sg(J.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    total_playtime_seconds: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 20,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    vr_sessions: {
                      n: 21,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    deck_sessions: {
                      n: 22,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    controller_sessions: {
                      n: 23,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    linux_sessions: {
                      n: 24,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    macos_sessions: {
                      n: 25,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    windows_sessions: {
                      n: 26,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      n: 27,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      n: 28,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      n: 29,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      n: 30,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      n: 31,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      n: 32,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      n: 33,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = a.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(J.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new J();
            return J.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(J.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(J.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class Te extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.appid || a.Sg(Te.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = a.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Te.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Te();
            return Te.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class he extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.longest_consecutive_days || a.Sg(he.M()),
              b.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    longest_consecutive_days: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    rtime_start: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    streak_games: { n: 3, c: Te, r: !0, q: !0 },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = a.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(he.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new he();
            return he.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(he.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(he.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class Ae extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.overall_rank || a.Sg(Ae.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    overall_rank: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    vr_rank: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    deck_rank: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    controller_rank: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    linux_rank: {
                      n: 5,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    mac_rank: {
                      n: 6,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    windows_rank: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = a.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ae.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ae();
            return Ae.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class Ce extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.appid || a.Sg(Ce.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    stats: { n: 2, c: J },
                    playtime_streak: { n: 3, c: he },
                    playtime_ranks: { n: 4, c: Ae },
                    rtime_first_played: {
                      n: 5,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: J },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = a.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ce.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ce();
            return Ce.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class we extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.appid || a.Sg(we.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    new_this_year: {
                      n: 2,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    demo: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                    playtest: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                    played_during_early_access: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    played_vr: { n: 7, br: a.qM.readBool, bw: a.gp.writeBool },
                    played_deck: {
                      n: 8,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    played_controller: {
                      n: 9,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    played_linux: {
                      n: 10,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    played_mac: {
                      n: 11,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    played_windows: {
                      n: 12,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    total_playtime_percentagex100: {
                      n: 13,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 14,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    rtime_release_date: {
                      n: 15,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    parent_appid: {
                      n: 16,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = a.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(we.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new we();
            return we.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(we.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(we.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class j extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.appid || a.Sg(j.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    total_playtime_percentagex100: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = a.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(j.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new j();
            return j.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(j.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(j.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class K extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.appid || a.Sg(K.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    rank: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = a.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(K.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new K();
            return K.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(K.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(K.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class q extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.category || a.Sg(q.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    category: {
                      n: 1,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    rankings: { n: 2, c: K, r: !0, q: !0 },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = a.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(q.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new q();
            return q.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class ge extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.overall_ranking || a.Sg(ge.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    overall_ranking: { n: 1, c: q },
                    vr_ranking: { n: 2, c: q },
                    deck_ranking: { n: 3, c: q },
                    controller_ranking: { n: 4, c: q },
                    linux_ranking: { n: 5, c: q },
                    mac_ranking: { n: 6, c: q },
                    windows_ranking: { n: 7, c: q },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = a.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(ge.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new ge();
            return ge.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class xe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.total_achievements || a.Sg(xe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    total_achievements: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = a.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(xe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new xe();
            return xe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.stats || a.Sg(fe.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { stats: { n: 1, c: de, r: !0, q: !0 } },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = a.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(fe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new fe();
            return fe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class de extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.tag_id || a.Sg(de.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    tag_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    tag_weight: {
                      n: 2,
                      br: a.qM.readFloat,
                      bw: a.gp.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      n: 3,
                      br: a.qM.readFloat,
                      bw: a.gp.writeFloat,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = a.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new de();
            return de.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.screenshots_shared || a.Sg(be.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    screenshots_shared: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    gifts_sent: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    loyalty_reactions: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    written_reviews: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    guides_submitted: {
                      n: 5,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    workshop_contributions: {
                      n: 6,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    badges_earned: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    friends_added: {
                      n: 8,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    forum_posts: {
                      n: 9,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    workshop_subscriptions: {
                      n: 10,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    guide_subscribers: {
                      n: 11,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    workshop_subscribers: {
                      n: 12,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    games_played_pct: {
                      n: 13,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    achievements_pct: {
                      n: 14,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    game_streak_pct: {
                      n: 15,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    games_played_avg: {
                      n: 16,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    achievements_avg: {
                      n: 17,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    game_streak_avg: {
                      n: 18,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = a.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(be.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new be();
            return be.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.total_stats || a.Sg(pe.M()),
              b.Message.initialize(this, e, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    total_stats: { n: 1, c: J },
                    games: { n: 2, c: Ce, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: he },
                    months: { n: 5, c: Ne, r: !0, q: !0 },
                    game_summary: { n: 6, c: we, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: ge },
                    playtests_played: {
                      n: 9,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: xe },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: fe },
                    by_numbers: { n: 13, c: be },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = a.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(pe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new pe();
            return pe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class Ne extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.rtime_month || a.Sg(Ne.M()),
              b.Message.initialize(this, e, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    stats: { n: 2, c: J },
                    appid: { n: 4, c: Ce, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: J },
                    game_summary: { n: 6, c: j, r: !0, q: !0 },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = a.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ne.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ne();
            return Ne.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class Oe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.account_id || a.Sg(Oe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    account_id: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    playtime_stats: { n: 3, c: pe },
                    privacy_state: {
                      n: 4,
                      br: a.qM.readEnum,
                      bw: a.gp.writeEnum,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = a.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Oe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Oe();
            return Oe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class Me extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.from_dbo || a.Sg(Me.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    from_dbo: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                    overall_time_ms: {
                      n: 2,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    dbo_load_ms: {
                      n: 3,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    query_execution_ms: {
                      n: 4,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    message_population_ms: {
                      n: 5,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      n: 6,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = a.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Me.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Me();
            return Me.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class _e extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.statid || a.Sg(_e.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    statid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    fieldid: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    achievement_name_internal: {
                      n: 3,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    rtime_unlocked: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = a.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(_e.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new _e();
            return _e.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(_e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(_e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class Ge extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.appid || a.Sg(Ge.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    achievements: { n: 2, c: _e, r: !0, q: !0 },
                    all_time_unlocked_achievements: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    unlocked_more_in_future: {
                      n: 4,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = a.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ge.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ge();
            return Ge.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class Fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.median_achievements || a.Sg(Fe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    median_achievements: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    median_games: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    median_streak: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = a.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Fe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Fe();
            return Fe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class Ue extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.new_releases || a.Sg(Ue.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    new_releases: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    recent_releases: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    classic_releases: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    recent_cutoff_year: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = a.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ue.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ue();
            return Ue.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class Ye extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.games_played || a.Sg(Ye.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    games_played: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    unlocked_achievements: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    longest_streak: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = a.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ye.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ye();
            return Ye.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class Ve extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.steamid || a.Sg(Ve.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    force_regenerate: {
                      n: 3,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    access_source: {
                      n: 4,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      n: 5,
                      d: !1,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = a.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ve.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ve();
            return Ve.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class et extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.stats || a.Sg(et.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    stats: { n: 1, c: Oe },
                    performance_stats: { n: 2, c: Me },
                    percentiles: { n: 3, c: Fe },
                    distribution: { n: 4, c: Ue },
                    previous_year_summary: { n: 5, c: Ye },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = a.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(et.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new et();
            return et.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(et.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(et.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class Je extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.steamid || a.Sg(Je.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    privacy_state: {
                      n: 3,
                      br: a.qM.readEnum,
                      bw: a.gp.writeEnum,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = a.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Je.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Je();
            return Je.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class Xe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.privacy_state || a.Sg(Xe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: a.qM.readEnum,
                      bw: a.gp.writeEnum,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = a.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Xe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Xe();
            return Xe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class nt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.steamid || a.Sg(nt.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = a.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(nt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new nt();
            return nt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(nt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(nt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class at extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.privacy_state || a.Sg(at.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: a.qM.readEnum,
                      bw: a.gp.writeEnum,
                    },
                    generated_value: {
                      n: 2,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    steamid: {
                      n: 3,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = a.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(at.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new at();
            return at.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(at.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(at.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class tt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.steamid || a.Sg(tt.M()),
              b.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                    total_only: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = a.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(tt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new tt();
            return tt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(tt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(tt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class it extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.game_achievements || a.Sg(it.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    game_achievements: { n: 1, c: Ge, r: !0, q: !0 },
                    total_achievements: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = a.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(it.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new it();
            return it.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(it.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(it.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class rt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.steamid || a.Sg(rt.M()),
              b.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = a.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(rt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new rt();
            return rt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(rt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(rt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class $e extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.apps || a.Sg($e.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: { apps: { n: 1, c: z, r: !0, q: !0 } },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = a.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT($e.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new $e();
            return $e.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj($e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0($e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class I extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.image_url || a.Sg(I.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    image_url: {
                      n: 1,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    preview_url: {
                      n: 2,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    image_width: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    image_height: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      n: 5,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    visibility: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    spoiler_tag: {
                      n: 8,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = a.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(I.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new I();
            return I.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(I.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(I.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class z extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.appid || a.Sg(z.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    screenshots: { n: 2, c: I, r: !0, q: !0 },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(z.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new z();
            return z.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class F extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.steamid || a.Sg(F.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    gid: {
                      n: 2,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    type: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = a.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(F.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new F();
            return F.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(F.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(F.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class H extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.jsondata || a.Sg(H.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    jsondata: {
                      n: 1,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new H();
            return H.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class Be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.steamid || a.Sg(Be.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readFixed64String,
                      pbr: a.qM.readPackedFixed64String,
                      bw: a.gp.writeRepeatedFixed64String,
                    },
                    type: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = a.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Be.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Be();
            return Be.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class je extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.entries || a.Sg(je.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: { entries: { n: 1, c: Pe, r: !0, q: !0 } },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = a.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(je.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new je();
            return je.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class Pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.gid || a.Sg(Pe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    gid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = a.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Pe.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Pe();
            return Pe.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class Re extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.gid || a.Sg(Re.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    gid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    type: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    count: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    last_account_index: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = a.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Re.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Re();
            return Re.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class We extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.entries || a.Sg(We.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    entries: { n: 1, c: He, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = a.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(We.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new We();
            return We.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(We.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(We.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class He extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.gid || a.Sg(He.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    gid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = a.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(He.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new He();
            return He.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(He.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(He.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class Ze extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.steamid || a.Sg(Ze.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    return_private: {
                      n: 3,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = a.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(Ze.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new Ze();
            return Ze.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(Ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(Ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class ht extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.steamid || a.Sg(ht.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    privacy_state: {
                      n: 3,
                      br: a.qM.readEnum,
                      bw: a.gp.writeEnum,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    privacy_override: {
                      n: 5,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = a.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(ht.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new ht();
            return ht.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(ht.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(ht.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class ct extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.friend_shares || a.Sg(ct.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    friend_shares: { n: 1, c: ht, r: !0, q: !0 },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = a.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(ct.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new ct();
            return ct.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(ct.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(ct.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class st extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.steamid || a.Sg(st.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    year: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = a.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(st.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new st();
            return st.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(st.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(st.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class mt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.images || a.Sg(mt.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: { images: { n: 1, c: dt, r: !0, q: !0 } },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = a.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(mt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new mt();
            return mt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class dt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.name || a.Sg(dt.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    name: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                    url_path: {
                      n: 2,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = a.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(dt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new dt();
            return dt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(dt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(dt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class ut extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.steamid || a.Sg(ut.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    steamid: {
                      n: 1,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = a.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(ut.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new ut();
            return ut.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(ut.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(ut.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class gt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.year || a.Sg(gt.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    year: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    month: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    games_played: {
                      n: 4,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    top_played_appid: {
                      n: 5,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    longest_streak_days: {
                      n: 6,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    rt_streak_start: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    achievements: {
                      n: 8,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    screenshots: {
                      n: 9,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = a.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, r) {
            return a.BT(gt.M(), e, r);
          }
          static fromObject(e) {
            return a.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              i = new gt();
            return gt.deserializeBinaryFromReader(i, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return a.zj(gt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            a.i0(gt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var zt;
        ((s) => {
          function e(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, Q.I8)(Ve, W, R),
              et,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetUserYearInReview = e;
          function r(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, Q.I8)(nt, W, R),
              at,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetUserSharingPermissions = r;
          function i(L, W, R) {
            return L.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, Q.I8)(Je, W, R),
              Xe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.SetUserSharingPermissions = i;
          function l(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, Q.I8)(tt, W, R),
              it,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetUserYearAchievements = l;
          function c(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, Q.I8)(rt, W, R),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetUserYearScreenshots = c;
          function m(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, Q.I8)(F, W, R),
              H,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          s.GetUserActionData = m;
          function d(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, Q.I8)(Be, W, R),
              je,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          s.GetMultipleUserActionData = d;
          function p(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, Q.I8)(Re, W, R),
              We,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          s.GetAllUserActionDataForType = p;
          function f(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, Q.I8)(Ze, W, R),
              ct,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetFriendsSharedYearInReview = f;
          function w(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, Q.I8)(st, W, R),
              mt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetUserYearInReviewShareImage = w;
          function N(L, W, R) {
            return L.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, Q.I8)(ut, W, R),
              gt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetYIRCurrentMonthlySummary = N;
        })(zt || (zt = {}));
        var er = o(80902),
          n = o(83764);
        const Mr = {
            [n.Gkz]: [n.Gkz, n.Vg1, n.Sv2, n.e94, n.H2m, n.Loc],
            [n.GBh]: [n.GBh, n.dpF, n.NHG, n.CSO, n.$c4, n.pqi, n.rxn],
            [n.xXG]: [n.xXG, n.JtN, n.eQ$, n.ewi],
            [n.Jzd]: [n.Jzd],
            [n.IEJ]: [n.IEJ, n.LGs],
            [n.REG]: [n.REG],
            [n.X$z]: [n.X$z, n.NUE],
            [n.Vg1]: [n.Gkz, n.Vg1, n.Sv2, n.MnB],
            [n.nuP]: [n.nuP, n.BGM, n.R$d, n.bPv, n.Upk, n.yTG, n.mYY],
            [n.dpF]: [n.GBh, n.dpF, n.NHG, n.RRP, n.mRX],
            [n.z3Q]: [n.z3Q, n.KCN, n.J1r, n.gEw, n.Gxx],
            [n.equ]: [n.equ, n.NUE],
            [n.Sv2]: [n.Gkz, n.Vg1, n.Sv2, n.W1J],
            [n.dWZ]: [n.dWZ, n.jzL, n.a1e],
            [n.MnB]: [n.Vg1, n.MnB],
            [n.ubQ]: [n.ubQ, n.G1H, n.ZUO],
            [n.gGw]: [n.gGw, n.ZBT, n.RW$],
            [n.JtN]: [n.xXG, n.JtN, n.UfY, n.c2w],
            [n.ZBT]: [n.gGw, n.ZBT, n.RW$],
            [n.Xkc]: [n.Xkc],
            [n.Gb2]: [n.Gb2, n.aBe, n.U2r, n.qU0],
            [n.CT2]: [n.CT2],
            [n._D]: [n._D],
            [n.eQ$]: [n.xXG, n.eQ$, n.SCk, n.nNq],
            [n.JCU]: [n.JCU, n.guj],
            [n.NHG]: [n.GBh, n.dpF, n.NHG],
            [n.G1H]: [n.ubQ, n.G1H],
            [n.qj]: [n.qj, n.bvg],
            [n.ewi]: [n.xXG, n.ewi, n.dxW],
            [n.gm5]: [n.gm5],
            [n.uZq]: [n.uZq],
            [n.NGF]: [n.NGF, n.cNr],
            [n.bHv]: [n.bHv],
            [n.Vov]: [n.Vov, n.IbE, n.qn3],
            [n.QBr]: [n.QBr, n.GEy],
            [n.nZ3]: [n.nZ3],
            [n.RnC]: [n.RnC],
            [n.CSO]: [n.GBh, n.CSO],
            [n.zwR]: [n.zwR],
            [n.CI1]: [n.CI1],
            [n.ZoV]: [n.ZoV, n.lIy],
            [n.MNG]: [n.MNG, n.J2h],
            [n.bvg]: [n.qj, n.bvg],
            [n.$c4]: [n.GBh, n.$c4],
            [n.Izv]: [n.Izv, n.NUE],
            [n.guj]: [n.JCU, n.guj],
            [n.UEV]: [n.UEV],
            [n.t_B]: [n.t_B, n.V1D],
            [n.vPq]: [n.vPq],
            [n.qAH]: [n.qAH, n.Fyw],
            [n.LqT]: [n.LqT, n.cNr],
            [n.RW$]: [n.gGw, n.ZBT, n.RW$],
            [n.ZUO]: [n.ubQ, n.ZUO],
            [n.ceg]: [n.ceg, n.dxW],
            [n.KCN]: [n.z3Q, n.KCN],
            [n.Fyw]: [n.qAH, n.Fyw],
            [n.VmN]: [n.VmN],
            [n.lIy]: [n.ZoV, n.lIy],
            [n.pqi]: [n.GBh, n.pqi],
            [n.qhO]: [n.qhO],
            [n.aUb]: [n.aUb],
            [n.tvO]: [n.tvO],
            [n.ouZ]: [n.ouZ],
            [n.IbE]: [n.Vov, n.IbE, n.q6r, n.nIA],
            [n.uzb]: [n.uzb],
            [n.mG_]: [n.mG_],
            [n.Ey4]: [n.Ey4],
            [n.e94]: [n.Gkz, n.e94],
            [n.Ya6]: [n.Ya6],
            [n.KZU]: [n.KZU],
            [n.UfY]: [n.JtN, n.UfY],
            [n.aBe]: [n.Gb2, n.aBe],
            [n.LGs]: [n.IEJ, n.LGs],
            [n.Hc3]: [n.Hc3],
            [n.aNN]: [n.aNN, n.DHU, n.AJK, n.w7d],
            [n.H2m]: [n.Gkz, n.H2m],
            [n.c2w]: [n.JtN, n.c2w],
            [n.l$V]: [n.l$V],
            [n.dBS]: [n.dBS],
            [n.IxF]: [n.IxF],
            [n.SnN]: [n.SnN],
            [n.aAJ]: [n.aAJ],
            [n.mvf]: [n.mvf],
            [n.wIS]: [n.wIS],
            [n.zjR]: [n.zjR],
            [n.BWK]: [n.BWK],
            [n.Yui]: [n.Yui],
            [n.nL9]: [n.nL9, n.nPW, n.l7W, n.$$Y],
            [n.jzL]: [n.dWZ, n.jzL, n.a1e],
            [n.ljy]: [n.ljy],
            [n.yUQ]: [n.yUQ],
            [n.BGM]: [n.nuP, n.BGM, n.IZu],
            [n.bIG]: [n.bIG, n.W5T],
            [n.GEy]: [n.QBr, n.GEy],
            [n.kOp]: [n.kOp],
            [n.hwI]: [n.hwI],
            [n.RRP]: [n.dpF, n.RRP, n.Oxw],
            [n.W5T]: [n.bIG, n.W5T],
            [n.VmC]: [n.VmC],
            [n.kpV]: [n.kpV],
            [n.gFr]: [n.gFr],
            [n.R$d]: [n.nuP, n.R$d],
            [n.Mth]: [n.Mth],
            [n.J1r]: [n.z3Q, n.J1r],
            [n.Qnc]: [n.Qnc],
            [n.Oxw]: [n.RRP, n.Oxw, n.UMQ, n.jXd, n.W19],
            [n.fVF]: [n.fVF, n.$YD],
            [n.qmd]: [n.qmd],
            [n.PoK]: [n.PoK],
            [n.bPv]: [n.nuP, n.bPv],
            [n.V1D]: [n.t_B, n.V1D],
            [n.HuG]: [n.HuG],
            [n.ng1]: [n.ng1],
            [n.Buq]: [n.Buq],
            [n.x7u]: [n.x7u],
            [n.Ftl]: [n.Ftl],
            [n.dbP]: [n.dbP],
            [n.DHU]: [n.aNN, n.DHU],
            [n.Qw3]: [n.Qw3],
            [n.J2h]: [n.MNG, n.J2h],
            [n.FzB]: [n.FzB],
            [n.Mhp]: [n.Mhp],
            [n.SCk]: [n.eQ$, n.SCk],
            [n.xrV]: [n.xrV],
            [n.ZEP]: [n.ZEP],
            [n.O5E]: [n.O5E],
            [n.Cc7]: [n.Cc7],
            [n.J51]: [n.J51],
            [n.cTj]: [n.cTj],
            [n.mwe]: [n.mwe],
            [n.Upk]: [n.nuP, n.Upk],
            [n.CIE]: [n.CIE],
            [n.qn3]: [n.Vov, n.qn3],
            [n.LIU]: [n.LIU],
            [n.Bh3]: [n.Bh3],
            [n.r6c]: [n.r6c],
            [n.a1e]: [n.dWZ, n.jzL, n.a1e],
            [n.ws2]: [n.ws2],
            [n.pbj]: [n.pbj],
            [n.H9D]: [n.H9D, n.QMk],
            [n.yfg]: [n.yfg],
            [n.EuK]: [n.EuK],
            [n.w43]: [n.w43],
            [n.zah]: [n.zah, n.b7S, n.M$A, n.lXI, n.gKc],
            [n.NUE]: [n.X$z, n.equ, n.Izv, n.NUE],
            [n.Loc]: [n.Gkz, n.Loc],
            [n.orb]: [n.orb],
            [n.di6]: [n.di6],
            [n.Ehy]: [n.Ehy],
            [n.ACh]: [n.ACh],
            [n.SN2]: [n.SN2],
            [n.aWw]: [n.aWw],
            [n.YzP]: [n.YzP],
            [n.yd9]: [n.yd9],
            [n.MAO]: [n.MAO],
            [n.nNq]: [n.eQ$, n.nNq],
            [n.Wo$]: [n.Wo$],
            [n.qU1]: [n.qU1],
            [n.hSB]: [n.hSB],
            [n.DnZ]: [n.DnZ],
            [n.qgQ]: [n.qgQ],
            [n.DcL]: [n.DcL],
            [n.SJn]: [n.SJn],
            [n.PGe]: [n.PGe],
            [n.dh_]: [n.dh_],
            [n.aK9]: [n.aK9],
            [n.GtN]: [n.GtN],
            [n.rAU]: [n.rAU],
            [n.Ywc]: [n.Ywc],
            [n.URU]: [n.URU],
            [n.Ag6]: [n.Ag6],
            [n.PYD]: [n.PYD],
            [n.dZk]: [n.dZk],
            [n.LCt]: [n.LCt],
            [n.umB]: [n.umB],
            [n.iZW]: [n.iZW],
            [n.W$A]: [n.W$A],
            [n.dI5]: [n.dI5],
            [n.IYH]: [n.IYH],
            [n.UMQ]: [n.Oxw, n.UMQ],
            [n.Eyy]: [n.Eyy],
            [n.QMk]: [n.H9D, n.QMk],
            [n.fzK]: [n.fzK, n.Pjm],
            [n.se7]: [n.se7],
            [n.tE1]: [n.tE1],
            [n.U2r]: [n.Gb2, n.U2r],
            [n.aSG]: [n.aSG],
            [n.XDm]: [n.XDm],
            [n.rkt]: [n.rkt],
            [n.l0w]: [n.l0w],
            [n.$44]: [n.$44],
            [n.ZKR]: [n.ZKR],
            [n.Yr4]: [n.Yr4],
            [n.ngb]: [n.ngb],
            [n.q6r]: [n.IbE, n.q6r],
            [n.yTG]: [n.nuP, n.yTG],
            [n.HhK]: [n.HhK],
            [n.sYW]: [n.sYW],
            [n.ML$]: [n.ML$],
            [n.JJq]: [n.JJq],
            [n.xEY]: [n.xEY],
            [n.W1J]: [n.Sv2, n.W1J],
            [n._Sw]: [n._Sw],
            [n.OJd]: [n.OJd],
            [n.L9$]: [n.L9$],
            [n.gEw]: [n.z3Q, n.gEw],
            [n.col]: [n.col],
            [n.vNw]: [n.vNw],
            [n.QxX]: [n.QxX],
            [n.Yzj]: [n.Yzj],
            [n.Cuj]: [n.Cuj],
            [n.kMe]: [n.kMe],
            [n.N1C]: [n.N1C],
            [n.lw$]: [n.lw$],
            [n.nJM]: [n.nJM],
            [n.DfI]: [n.DfI],
            [n.oNT]: [n.oNT],
            [n.Bul]: [n.Bul],
            [n.nPW]: [n.nL9, n.nPW, n.l7W],
            [n.rgd]: [n.rgd],
            [n.r7M]: [n.r7M],
            [n.pvr]: [n.pvr],
            [n.CMh]: [n.CMh],
            [n.uCt]: [n.uCt],
            [n.cXA]: [n.cXA],
            [n.MW7]: [n.MW7],
            [n.mKd]: [n.mKd],
            [n.jx3]: [n.jx3],
            [n.QM3]: [n.QM3],
            [n.mYY]: [n.nuP, n.mYY],
            [n.IVO]: [n.IVO],
            [n.ycC]: [n.ycC],
            [n.DLU]: [n.DLU],
            [n.QSw]: [n.QSw],
            [n.ybs]: [n.ybs],
            [n.Gxx]: [n.z3Q, n.Gxx],
            [n.$YD]: [n.fVF, n.$YD],
            [n.XqG]: [n.XqG],
            [n.KoH]: [n.KoH],
            [n.mRX]: [n.dpF, n.mRX],
            [n.Xgy]: [n.Xgy],
            [n.ZI3]: [n.ZI3],
            [n.AHx]: [n.AHx],
            [n.Lun]: [n.Lun],
            [n.cS7]: [n.cS7],
            [n.XsI]: [n.XsI],
            [n.i5w]: [n.i5w],
            [n.U1I]: [n.U1I],
            [n.Wq7]: [n.Wq7],
            [n.btm]: [n.btm],
            [n.VW1]: [n.VW1],
            [n.rpf]: [n.rpf],
            [n.l7W]: [n.nL9, n.nPW, n.l7W],
            [n.WE2]: [n.WE2],
            [n.cNr]: [n.NGF, n.LqT, n.cNr],
            [n.hWb]: [n.hWb],
            [n.TTb]: [n.TTb],
            [n.f_e]: [n.f_e],
            [n.IVU]: [n.IVU],
            [n.YpH]: [n.YpH],
            [n.Xe4]: [n.Xe4],
            [n.UTf]: [n.UTf],
            [n.ZXz]: [n.ZXz],
            [n.mX6]: [n.mX6],
            [n.AnB]: [n.AnB],
            [n.Jtk]: [n.Jtk],
            [n.bT7]: [n.bT7],
            [n.sFD]: [n.sFD],
            [n.pUQ]: [n.pUQ],
            [n.GGT]: [n.GGT],
            [n.W5v]: [n.W5v],
            [n.t0u]: [n.t0u],
            [n.b7S]: [n.zah, n.b7S],
            [n.X_3]: [n.X_3],
            [n.gEn]: [n.gEn],
            [n._wZ]: [n._wZ],
            [n.w_P]: [n.w_P],
            [n.tS6]: [n.tS6],
            [n.M$A]: [n.zah, n.M$A, n.lXI],
            [n.oXQ]: [n.oXQ],
            [n.Wec]: [n.Wec],
            [n.vT2]: [n.vT2],
            [n.vXU]: [n.vXU],
            [n.wdW]: [n.wdW],
            [n.eXt]: [n.eXt],
            [n.jh5]: [n.jh5],
            [n.Hp8]: [n.Hp8],
            [n.dxW]: [n.ewi, n.ceg, n.dxW],
            [n.Pjm]: [n.fzK, n.Pjm],
            [n.hYj]: [n.hYj],
            [n.k52]: [n.k52],
            [n.v_]: [n.v_],
            [n.fxF]: [n.fxF],
            [n.vk_]: [n.vk_],
            [n.Eid]: [n.Eid],
            [n.rTg]: [n.rTg],
            [n.SXO]: [n.SXO],
            [n.hTI]: [n.hTI],
            [n.YxI]: [n.YxI],
            [n.iZ9]: [n.iZ9],
            [n.GW_]: [n.GW_],
            [n.uaC]: [n.uaC],
            [n.ijE]: [n.ijE],
            [n._z]: [n._z],
            [n.rSh]: [n.rSh],
            [n.PJd]: [n.PJd],
            [n.jXd]: [n.Oxw, n.jXd, n.W19],
            [n.lPO]: [n.lPO],
            [n.jsz]: [n.jsz],
            [n.JJT]: [n.JJT],
            [n.qDq]: [n.qDq],
            [n.lXI]: [n.zah, n.M$A, n.lXI],
            [n.CNW]: [n.CNW],
            [n.MCn]: [n.MCn],
            [n.qyq]: [n.qyq],
            [n.I8s]: [n.I8s],
            [n.tCQ]: [n.tCQ],
            [n.P3p]: [n.P3p],
            [n.L3J]: [n.L3J],
            [n.a5M]: [n.a5M],
            [n.y$q]: [n.y$q],
            [n.kci]: [n.kci],
            [n.rNe]: [n.rNe],
            [n.rxn]: [n.GBh, n.rxn],
            [n.gR3]: [n.gR3],
            [n.Y4B]: [n.Y4B],
            [n.LHe]: [n.LHe],
            [n.dm2]: [n.dm2],
            [n.aRw]: [n.aRw],
            [n.qU0]: [n.Gb2, n.qU0],
            [n.IZu]: [n.BGM, n.IZu],
            [n.pcg]: [n.pcg],
            [n.i2H]: [n.i2H],
            [n.Oyv]: [n.Oyv],
            [n.jdh]: [n.jdh],
            [n.TZq]: [n.TZq],
            [n.O10]: [n.O10],
            [n.FGn]: [n.FGn],
            [n.rgP]: [n.rgP],
            [n.GW8]: [n.GW8],
            [n.iY_]: [n.iY_],
            [n.KxZ]: [n.KxZ],
            [n.eut]: [n.eut],
            [n.FMz]: [n.FMz],
            [n.xok]: [n.xok],
            [n.W19]: [n.Oxw, n.jXd, n.W19],
            [n.tPT]: [n.tPT],
            [n.nIA]: [n.IbE, n.nIA],
            [n.JEe]: [n.JEe],
            [n.V9H]: [n.V9H],
            [n.w7d]: [n.aNN, n.w7d],
            [n.TXs]: [n.TXs],
            [n.Bpv]: [n.Bpv],
            [n.VLK]: [n.VLK],
            [n.puh]: [n.puh],
            [n.Fbc]: [n.Fbc],
            [n.I0E]: [n.I0E],
            [n.QA9]: [n.QA9, n.Ya$],
            [n.gKc]: [n.zah, n.gKc],
            [n.IzC]: [n.IzC],
            [n.Ya$]: [n.QA9, n.Ya$],
            [n.gOe]: [n.gOe],
            [n.Reo]: [n.Reo],
            [n.AJK]: [n.aNN, n.AJK],
            [n.$$Y]: [n.nL9, n.$$Y],
            [n.o0L]: [n.o0L],
          },
          Ir = [n.gGw, n.ZBT, n.RW$, n.G1H];
        function tr(s, e) {
          const r = s.filter((p) => Ir.findIndex((f) => f == p.nTagId) == -1);
          let i = [],
            l = [],
            c = r.length,
            m = 0,
            d = 0;
          for (; m < r.length && c + d > e && d < e; ) {
            const p = r[m].nTagId;
            l.findIndex((f) => f == p) == -1 &&
              (i.push({
                nTagId: p,
                nWeight: r[m].nWeight,
                nPreSelectionWeight: r[m].nPreSelectionWeight,
              }),
              Mr[p] &&
                Mr[p].forEach((f) => {
                  l.push(f);
                }),
              d++),
              m++,
              c--;
          }
          for (; m < r.length && d < e; )
            i.push({
              nTagId: r[m].nTagId,
              nWeight: r[m].nWeight,
              nPreSelectionWeight: r[m].nPreSelectionWeight,
            }),
              m++,
              d++;
          return i;
        }
        var sr = o(6469),
          jt = o(78192);
        function zr(s) {
          const e = sr.Fm.Get().BIsLoaded() ? sr.Fm.Get() : void 0;
          return h.useMemo(() => Wr(e, s), [e, s]);
        }
        function Wr(s, e) {
          if (!s || !e) return !1;
          if (s.BExcludesContentDescriptor(e.GetContentDescriptorIDs()))
            return !0;
          switch (e.GetStoreItemType()) {
            case jt.c6.qI:
              if (s.BIsGameIgnored(e.GetID())) return !0;
              break;
            case jt.c6.RD:
              if (s.BIsPackageIgnored(e.GetID())) return !0;
              break;
          }
          return !1;
        }
        var y = o(18210);
        const Yt = h.createContext({
          bIsUser: !1,
          persona_name: "",
          avatar_url: "",
          Screenshots: void 0,
          themeStyle: {},
        });
        function hr() {
          return (0, h.useContext)(Yt).bIsUser;
        }
        function Ke() {
          return (0, h.useContext)(Yt).themeStyle;
        }
        function pr(s) {
          const e = x.iA.logged_in,
            r = s?.GetContentDescriptorIDs().length > 0,
            i = hr(),
            l = zr(s);
          return e ? !i && l : r;
        }
        function Cr() {
          return (0, h.useContext)(Yt).persona_name;
        }
        function Rr() {
          const s = (0, h.useContext)(Yt).Screenshots;
          return (0, _.wT)(s, "YIR context missing initialization!"), s;
        }
        function pt() {
          const s = (0, h.useContext)(Yt),
            e = s.bIsUser;
          return h.useCallback(
            (r, ...i) => {
              if (e) {
                const l = `${r}_second`;
                return (0, y.PP)(l, ...i) === l
                  ? (0, y.PP)(r, ...i)
                  : (0, y.PP)(l, ...i);
              } else {
                const l = `${r}_third`;
                return (0, y.PP)(l, s.persona_name, ...i) === l
                  ? (0, y.PP)(r, ...i)
                  : (0, y.PP)(l, s.persona_name, ...i);
              }
            },
            [e, s.persona_name],
          );
        }
        function At(s) {
          return s < 100
            ? (0, y.we)("#YIR_Percent_Low", "1")
            : (0, y.we)("#YIR_Percent", Math.round(s / 100).toFixed(0));
        }
        function or() {
          return !0;
        }
        var rr = o(13854);
        function M(s, e, r) {
          const { rgRankings: i, nTotalResultCount: l } = O(s, e),
            c = new Set(i.map((d) => d.appid).slice(0, r));
          return {
            rgResults: s
              .GetRawStats()
              .playtime_stats.games.filter((d) => c.has(d.appid))
              .sort((d, p) => {
                const f = `${e}_rank`,
                  w = d.playtime_ranks[f] ?? 0,
                  N = p.playtime_ranks[f] ?? 0;
                return w - N;
              }),
            nTotalResultCount: l,
          };
        }
        function A(s, e, r, i) {
          const { rgRankings: l, nTotalResultCount: c } = O(s, e, r),
            m = l.map((d) => {
              if (d.relative_playtime_percentagex100) {
                let f = 0;
                return (
                  e == "demo" || e == "playtest"
                    ? (f =
                        i > 0
                          ? (d.relative_playtime_percentagex100 * 100 * 100) / i
                          : 0)
                    : (f = d.relative_playtime_percentagex100),
                  {
                    appid: d.appid,
                    parent_appid: d.parent_appid,
                    strPercentage: At(f),
                  }
                );
              }
              const p = s
                .GetRawStats()
                .playtime_stats.games.findIndex((f) => f.appid == d.appid);
              if (p >= 0) {
                const f = oe(e, i, s.GetRawStats().playtime_stats.games[p]);
                return {
                  appid: d.appid,
                  parent_appid: d.parent_appid,
                  strPercentage: At(f),
                };
              }
              return { appid: d.appid };
            });
          return { nTotalResultCount: c, rgResults: m };
        }
        function O(s, e, r) {
          if (e == "demo" || e == "playtest") {
            const c =
              e == "demo" ? s.GetDemoByPlaytime() : s.GetPlaytestByPlaytime();
            return {
              nTotalResultCount: c.length,
              rgRankings: c
                .slice(0, r)
                .map((m) => ({
                  appid: m.appid,
                  parent_appid: m.parent_appid,
                  relative_playtime_percentagex100:
                    m.total_playtime_percentagex100,
                })),
            };
          }
          const i = `${e}_ranking`,
            l = s.GetRawStats().playtime_stats.game_rankings[i]?.rankings;
          return {
            nTotalResultCount: l?.length ?? 0,
            rgRankings: l?.slice(0, r) || [],
          };
        }
        function oe(s, e, r) {
          const i = r.stats.total_playtime_percentagex100,
            l = `${s}_playtime_percentagex100`,
            c = r.relative_game_stats[l] ?? 0;
          return (0, rr.OQ)((c * i) / e, 0, 1e4);
        }
        function se(s, e) {
          const r = `${e === "overall" ? "total" : e}_sessions`;
          return s.stats[r] || 0;
        }
        function ke(s, e) {
          let r = () => !0;
          if (!s.playtime_stats?.game_summary) return [];
          switch (e) {
            case "overall":
              r = (i) => !i.demo && !i.playtest;
              break;
            case "vr":
              r = (i) => !i.demo && !i.playtest && i.played_vr;
              break;
            case "deck":
              r = (i) => !i.demo && !i.playtest && i.played_deck;
              break;
            case "controller":
              r = (i) => !i.demo && !i.playtest && i.played_controller;
              break;
            case "linux":
              r = (i) => !i.demo && !i.playtest && i.played_linux;
              break;
            case "mac":
              r = (i) => !i.demo && !i.playtest && i.played_mac;
              break;
            case "windows":
              r = (i) => !i.demo && !i.playtest && i.played_windows;
              break;
            case "demo":
              r = (i) => !!i.demo;
              break;
            case "playtest":
              r = (i) => !!i.playtest;
              break;
          }
          return s.playtime_stats.game_summary.filter(r);
        }
        function vt(s, e) {
          if (e != "demo" && e != "playtest") {
            const r = `${e === "overall" ? "total" : e}_sessions`,
              i = `${e === "overall" ? "total" : e}_playtime_percentagex100`;
            return {
              nTotalGames: ke(s, e).length || 0,
              nTotalSessions: s.playtime_stats.total_stats[r] || 0,
              nTotalPercentage: s.playtime_stats.total_stats[i] || 0,
            };
          } else {
            const r = ke(s, e);
            return {
              nTotalGames: r.length,
              nTotalSessions: r
                .map((i) => i.total_sessions)
                .reduce((i, l) => (i ?? 0) + (l ?? 0), 0),
              nTotalPercentage: r
                .map((i) => i.total_playtime_percentagex100)
                .reduce((i, l) => (i ?? 0) + (l ?? 0), 0),
            };
          }
        }
        const bt = "percentMonthOfOverall",
          yt = "percentOtherGamesRelativeMonth";
        function vr(s, e, r, i) {
          const l = new Set(r),
            c = e
              .map((d, p) => {
                const f = new Date((d.rtime_month + 86400) * 1e3),
                  w = {},
                  N = {},
                  L = {},
                  W = {},
                  R = d.stats.total_playtime_percentagex100;
                let ce = 0,
                  De = 0;
                (
                  d.game_summary?.sort(
                    (Ee, qe) =>
                      (qe?.total_playtime_percentagex100 ?? 0) -
                      (Ee?.total_playtime_percentagex100 ?? 0),
                  )
                )
                  .filter((Ee) => i.has(Ee.appid))
                  .forEach((Ee, qe) => {
                    const { appid: lt } = Ee,
                      Vt = Ee.total_playtime_percentagex100,
                      Gt = Ee.relative_playtime_percentagex100;
                    qe < 6 && typeof Gt == "number" && Gt > 100 && l.has(lt)
                      ? ((w[lt] = Vt), (N[lt] = Gt), (ce += Vt), (De += Gt))
                      : (L[lt] = Gt);
                    const Ut = i.get(lt).total_playtime_percentagex100 ?? 1;
                    W[lt] = (Vt / Ut) * 1e4;
                  }),
                  (w[bt] = R);
                const ft = R - ce;
                w[yt] = ft;
                const wt = 1e4 - De;
                return (
                  (N[yt] = wt),
                  {
                    date: f,
                    topPlayedPercentBreakdownPerMonth: w,
                    topPlayedRelativePercentBreakdownForMonth: N,
                    otherPlayedPercentBreakdownForMonth: L,
                    playPercentBreakdownForGame: W,
                  }
                );
              })
              .sort((d, p) => d.date.getTime() - p.date.getTime()),
            m = new Array();
          for (let d = 0; d < 12; ++d) {
            const p = c.findIndex(
              (f) => f.date.getMonth() === d && f.date.getFullYear() === s,
            );
            p === -1
              ? m.push({
                  date: new Date(s, d, 15),
                  topPlayedPercentBreakdownPerMonth: {},
                  topPlayedRelativePercentBreakdownForMonth: {},
                  otherPlayedPercentBreakdownForMonth: {},
                  playPercentBreakdownForGame: {},
                })
              : m.push(c[p]);
          }
          return m;
        }
        var lr = o(14947),
          Ot = o(76559),
          kr = o(36174),
          Ar = Object.defineProperty,
          Gr = Object.getOwnPropertyDescriptor,
          Ur = (s, e, r, i) => {
            for (
              var l = i > 1 ? void 0 : i ? Gr(e, r) : e, c = s.length - 1, m;
              c >= 0;
              c--
            )
              (m = s[c]) && (l = (i ? m(e, r, l) : m(l)) || l);
            return i && l && Ar(e, r, l), l;
          };
        const Tr = 5,
          Yr = 8;
        function ta(s) {
          s.game_summary?.length &&
            (0, _.wT)(
              s.total_stats &&
                Array.isArray(s.games) &&
                Array.isArray(s.months) &&
                typeof s.demos_played == "number" &&
                s.game_rankings &&
                typeof s.playtests_played == "number" &&
                typeof s.substantial == "boolean" &&
                s.by_numbers,
              "YIR playtime stats missing expected fields!",
            );
        }
        function ra(s) {
          return (
            (0, _.wT)(
              typeof s.account_id == "number" &&
                typeof s.year == "number" &&
                typeof s.privacy_state == "number" &&
                s.playtime_stats,
              "YIR stats missing expected fields!",
            ),
            s.playtime_stats && ta(s.playtime_stats),
            s
          );
        }
        function na(s) {
          if (typeof s?.new_releases == "number")
            return (
              (0, _.wT)(
                typeof s.recent_releases == "number" &&
                  typeof s.classic_releases == "number" &&
                  typeof s.recent_cutoff_year == "number",
                "YIR global playtime distribution missing expected fields!",
              ),
              s
            );
        }
        function aa(s) {
          if (typeof s?.games_played == "number")
            return (
              (0, _.wT)(
                typeof s.unlocked_achievements == "number" &&
                  typeof s.longest_streak == "number",
                "YIR previous year summary missing expected fields!",
              ),
              s
            );
        }
        class Hr {
          m_allStats;
          m_steamid;
          m_mapGameSummary = new Map();
          m_mapGameStats = new Map();
          m_globalPercentiles;
          m_globalGameplayDistribution;
          m_previousYearSummary;
          m_rgTopGamesShown = [];
          m_rgTopGameShownAppIDs = [];
          m_rgMonthChartData = [];
          m_rgTopGameMonthsChartIdsAndRanks = [];
          m_rgAggregateTagData = [];
          m_privacyState = 0;
          m_rgDemoByPlaytime = [];
          m_rgPlaytestByPlaytime = [];
          GetRawStats() {
            return this.m_allStats;
          }
          GetDemoByPlaytime() {
            return this.m_rgDemoByPlaytime;
          }
          BHasDemoByPlaytime() {
            return this.m_rgDemoByPlaytime.length > 0;
          }
          GetPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime;
          }
          BHasPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime.length > 0;
          }
          BHasPlaytimeData() {
            return this.m_allStats.playtime_stats.game_summary.length > 0;
          }
          GetPlayTimeStats() {
            return this.m_allStats.playtime_stats;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetYear() {
            return this.m_allStats.year;
          }
          GetPrivacyState() {
            return this.m_privacyState;
          }
          SetPrivacyState(e) {
            this.m_privacyState = e;
          }
          GetGameSummaryForApp(e) {
            return this.m_mapGameSummary.get(e);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetFilteredGameSummary() {
            return this.m_allStats.playtime_stats.game_summary.filter(
              (e) => !e.demo && !e.playtest,
            );
          }
          GetGameStats(e) {
            return this.m_mapGameStats.get(e);
          }
          GetTopGamesShown() {
            return this.m_rgTopGamesShown;
          }
          GetTopGamesShownAppIDs() {
            return this.m_rgTopGameShownAppIDs;
          }
          GetChartMonthlyData() {
            return this.m_rgMonthChartData;
          }
          GetTopGameIdsAndRanks() {
            return this.m_rgTopGameMonthsChartIdsAndRanks;
          }
          GetGlobalPercentiles() {
            return this.m_globalPercentiles;
          }
          GetGlobalGameplayDistribition() {
            return this.m_globalGameplayDistribution;
          }
          GetPreviousYearSummary() {
            return this.m_previousYearSummary;
          }
          GetChartMonthlyDataForApp(e) {
            const r = this.m_rgMonthChartData.map((l) => ({
                date: l.date,
                percent: l.playPercentBreakdownForGame[e],
              })),
              i = this.m_rgTopGameMonthsChartIdsAndRanks.find(
                (l) => l.appid === e,
              )?.rank;
            return { gameChartData: r, rank: i };
          }
          GetUserAggregateTagData() {
            return this.m_rgAggregateTagData;
          }
          constructor(e, r, i, l) {
            (0, lr.Gn)(this);
            const c = ra(e);
            if (
              ((this.m_allStats = c),
              (this.m_steamid = Ot.b.InitFromAccountID(c.account_id)),
              (this.m_privacyState = c.privacy_state),
              (this.m_globalPercentiles = r),
              (this.m_globalGameplayDistribution = na(i)),
              (this.m_previousYearSummary = aa(l)),
              this.BHasPlaytimeData() &&
                c.playtime_stats.total_stats.total_sessions > 0)
            ) {
              c.playtime_stats.game_summary.forEach((p) => {
                (0, _.wT)(
                  !this.m_mapGameSummary.has(p.appid),
                  `Found at least two record of appid ${p.appid} in stats.playtime_stats.game_summary`,
                ),
                  this.m_mapGameSummary.set(p.appid, p);
              }),
                c.playtime_stats.games.forEach((p) => {
                  (0, _.wT)(
                    !this.m_mapGameStats.has(p.appid),
                    `Found at least two record of appid ${p.appid} in stats.playtime_stats.games`,
                  ),
                    this.m_mapGameStats.set(p.appid, p);
                });
              const { rgResults: m } = M(this, "overall", Yr),
                d = m.map((p) => p.appid);
              (this.m_rgTopGameMonthsChartIdsAndRanks = d.map((p, f) => ({
                appid: p,
                rank: f,
              }))),
                (this.m_rgTopGamesShown = m.slice(0, Tr)),
                (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
                  (p) => p.appid,
                )),
                (this.m_rgMonthChartData = vr(
                  this.GetYear(),
                  this.GetPlayTimeStats().months,
                  d,
                  this.m_mapGameSummary,
                ));
            }
            if (
              c.playtime_stats.tag_stats &&
              c.playtime_stats.tag_stats.stats.length > 0
            ) {
              let d = c.playtime_stats.tag_stats.stats.map((p) => ({
                nTagId: p.tag_id,
                nWeight: parseFloat(p.tag_weight.toString()),
                nPreSelectionWeight: parseFloat(
                  p.tag_weight_pre_selection
                    ? p.tag_weight_pre_selection.toString()
                    : "0.0",
                ),
              }));
              this.m_rgAggregateTagData = tr(d, 6);
            }
            c &&
              ((this.m_rgDemoByPlaytime = c.playtime_stats.game_summary
                .filter((m) => !!m.demo)
                .sort(
                  (m, d) =>
                    d.total_playtime_percentagex100 -
                    m.total_playtime_percentagex100,
                )),
              (this.m_rgPlaytestByPlaytime = c.playtime_stats.game_summary
                .filter((m) => !!m.playtest)
                .sort(
                  (m, d) =>
                    d.total_playtime_percentagex100 -
                    m.total_playtime_percentagex100,
                )));
          }
          GetGameAgeCounts(e) {
            let r = this.m_allStats.playtime_stats?.game_summary || [];
            if (e.length == 0) return [r.length];
            let i = new Date(`December 15 ${this.GetYear()}`).getTime() / 1e3,
              l = Array(e.length + 1).fill(0);
            for (let c of r) {
              let m = c.rtime_release_date || i;
              if (m >= i) {
                l[0] += c.total_playtime_percentagex100;
                continue;
              }
              let d = (i - m) / kr.Kp.PerYear,
                p = e.findIndex((f) => d < f);
              p >= 0
                ? (l[p] += c.total_playtime_percentagex100)
                : (l[l.length - 1] += c.total_playtime_percentagex100);
            }
            return l;
          }
        }
        Ur([lr.sH], Hr.prototype, "m_privacyState", 2);
        const to = null,
          ia = "0px 0px 100% 0px";
        var Zt = o(72604),
          yr = o(10142),
          mn = o(84192),
          Nr = o(65946),
          Br = o(33828),
          sa = Object.defineProperty,
          oa = Object.getOwnPropertyDescriptor,
          la = (s, e, r, i) => {
            for (
              var l = i > 1 ? void 0 : i ? oa(e, r) : e, c = s.length - 1, m;
              c >= 0;
              c--
            )
              (m = s[c]) && (l = (i ? m(e, r, l) : m(l)) || l);
            return i && l && sa(e, r, l), l;
          };
        const Lt = {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          },
          dn = class fr {
            m_SteamInterface;
            m_DynamicUserStore = null;
            m_GameDetailPopupData = { index: void 0, appids: [] };
            get SteamInterface() {
              return this.m_SteamInterface;
            }
            GetGameList() {
              return this.m_GameDetailPopupData;
            }
            async GetLoadYearInReview(e, r) {
              const i = this.LoadFromPageConfigIfAvailable(e, r);
              if (i)
                return new Hr(
                  i,
                  this.LoadFromPageConfigGlobalPercentile(r),
                  this.LoadFromPageConfigGlobalDistribution(r),
                  this.LoadFromPageConfigPreviousYearSummary(r),
                );
              const l = Q.w.Init(Ve);
              l.Body().set_steamid(e),
                l.Body().set_year(r),
                l.Body().set_force_regenerate(!1);
              const c = await zt.GetUserYearInReview(
                  this.m_SteamInterface.GetServiceTransport(),
                  l,
                ),
                {
                  stats: m,
                  percentiles: d,
                  distribution: p,
                  previous_year_summary: f,
                } = c.Body().toObject();
              return (
                (0, _.wT)(
                  !!m && !!d && !!p && !!f,
                  "YIR Loaded with missing fields!",
                ),
                new Hr(m, d, p, f)
              );
            }
            async PreloadStoreItemCache(e) {
              let r = e
                .GetTopGamesShownAppIDs()
                .map((c) => jt.O4.fromObject({ appid: c }));
              if (r.length == 0) return !0;
              let i = Q.w.Init(jt.eE);
              (0, mn.rV)(i), (0, mn.Bn)(i, Lt), i.Body().set_ids(r);
              let l = await jt.$4.GetItems(
                this.m_SteamInterface.GetServiceTransport(),
                i,
              );
              if (l.GetEResult() != Zt.R) throw "error loading game info";
              for (let c of l.Body().store_items()) yr.A.Get().ReadItem(c, Lt);
              return !0;
            }
            LoadFromPageConfigIfAvailable(e, r) {
              const l = "yearinreview_" + new Ot.b(e).GetAccountID() + "_" + r;
              let c = (0, x.Tc)(l, "application_config");
              return this.ValidateYearInReview(c) ? c : null;
            }
            LoadFromPageConfigGlobalDistribution(e) {
              const r = "yearinreview_" + e + "_distribution";
              return (0, x.Fd)(r, "application_config");
            }
            LoadFromPageConfigGlobalPercentile(e) {
              const r = "yearinreview_" + e + "_percentiles";
              return (0, x.Fd)(r, "application_config");
            }
            LoadFromPageConfigPreviousYearSummary(e) {
              const r = "yearinreview_" + e + "_previous_year_summary";
              return (0, x.Fd)(r, "application_config");
            }
            ValidateYearInReview(e) {
              const r = e;
              return !!(
                r &&
                typeof r == "object" &&
                r.account_id &&
                typeof r.account_id == "number" &&
                r.playtime_stats &&
                typeof r.playtime_stats == "object"
              );
            }
            async SetYearInReviewPrivacy(e, r, i) {
              const l = Q.w.Init(Je);
              l.Body().set_steamid(e),
                l.Body().set_year(r),
                l.Body().set_privacy_state(i);
              const c = await zt.SetUserSharingPermissions(
                this.m_SteamInterface.GetServiceTransport(),
                l,
              );
              return c.GetEResult() != Zt.R
                ? {
                    privacy_state: void 0,
                    error: this.PrivacyEResultToMessage(c.GetEResult()),
                  }
                : { privacy_state: c.Body().privacy_state() };
            }
            PrivacyEResultToMessage(e) {
              return e === Zt.S7
                ? "Servers are busy, please try again later"
                : "";
            }
            GetGameDetailsPopupIndex() {
              return this.m_GameDetailPopupData.index;
            }
            SetGameDetailsPopupIndex(e) {
              e >= 0 &&
                e < this.m_GameDetailPopupData.appids.length &&
                (this.m_GameDetailPopupData.index = e);
            }
            SetGameDetailsPopupAppData(e, r) {
              (this.m_GameDetailPopupData.appids = r),
                (this.m_GameDetailPopupData.index = e);
            }
            static s_Singleton;
            static Get() {
              return (
                fr.s_Singleton ||
                  ((fr.s_Singleton = new fr()), fr.s_Singleton.Init()),
                fr.s_Singleton
              );
            }
            constructor() {
              (0, lr.Gn)(this);
            }
            async Init() {
              (this.m_SteamInterface = (0, Br.P)()),
                (this.m_DynamicUserStore = await sr.Fm.Get().HintLoad());
            }
          };
        la([lr.sH], dn.prototype, "m_GameDetailPopupData", 2);
        let Qt = dn;
        function ca(s, e) {
          const { data: r, isLoading: i } = (0, er.I)({
            queryKey: ["YearInReview", "Get", s, e],
            queryFn: () => Qt.Get().GetLoadYearInReview(s, e),
          });
          let l = r,
            { data: c, isLoading: m } = (0, er.I)({
              queryKey: ["YearInReview_AppDataLoading"],
              queryFn: () => Qt.Get().PreloadStoreItemCache(l),
              enabled: !!l,
            }),
            d = i || m;
          return !d && !c && (l = null), { userYearInReview: l, isLoading: d };
        }
        async function ma(s, e, r) {
          return await Qt.Get().SetYearInReviewPrivacy(s, e, r);
        }
        function un() {
          const [s, e, r] = (0, Nr.q3)(() => {
            const i = Qt.Get().GetGameList();
            return [
              typeof i.index == "number" && i.appids.length > i.index
                ? i.appids[i.index]
                : null,
              i.appids.length,
              i.index,
            ];
          });
          return { unAppID: s, length: e, index: r };
        }
        function gn(s, e) {
          return h.useCallback(() => {
            Qt.Get().SetGameDetailsPopupAppData(s, e);
          }, [s, e]);
        }
        function fn(s) {
          return h.useCallback(() => {
            Qt.Get().SetGameDetailsPopupIndex(s);
          }, [s]);
        }
        var da = o(29395),
          ua = o.n(da);
        class ga {
          m_SteamInterface;
          m_steamid;
          m_year;
          m_DataLoader;
          constructor(e, r, i) {
            (this.m_SteamInterface = e),
              (this.m_steamid = r),
              (this.m_year = i),
              (this.m_DataLoader = new (ua())(
                (l) => this.InternalLoadScreenshots(l),
                { cache: !1 },
              ));
          }
          get steamid() {
            return this.m_steamid;
          }
          get year() {
            return this.m_year;
          }
          GetScreenshots(e) {
            return this.m_DataLoader.load(e);
          }
          async InternalLoadScreenshots(e) {
            const r = Q.w.Init(rt);
            r.Body().set_steamid(this.m_steamid.ConvertTo64BitString()),
              r.Body().set_year(this.m_year),
              r.Body().set_appids(e);
            const i = await zt.GetUserYearScreenshots(
              this.m_SteamInterface.GetServiceTransport(),
              r,
            );
            if (!i.BSuccess())
              throw `Load Screenshots failed: ${i.GetErrorMessage()}`;
            const { apps: l = [] } = i.Body().toObject(),
              c = new Map();
            for (const m of l) m.appid && c.set(m.appid, m.screenshots ?? []);
            return e.map((m) => c.get(m));
          }
        }
        function fa(s) {
          const e = Rr(),
            { data: r } = (0, er.I)({
              queryKey: [
                "yirscreenshots",
                e.steamid.ConvertTo64BitString(),
                e.year,
                s,
              ],
              queryFn: () => e.GetScreenshots(s),
            });
          return r;
        }
        var Pr = o(34592),
          hn = o(8323),
          Lr = o(30096);
        async function pn(s, e) {
          const r = await e;
          if (r) {
            const i = r.find((l) => l.appid == s);
            if (i) return i;
          }
          return null;
        }
        class Wt {
          m_SteamInterface;
          m_mapUserAchievementsByYear = new Map();
          m_mapPromiseUserAchievementsByYear = new Map();
          m_mapAchievementLoadCallback = new Map();
          GetKey(e, r, i) {
            return `${e}_${r}_${i}`;
          }
          GetAchievementLoadCallback(e, r, i) {
            const l = this.GetKey(e, r, i);
            return (
              this.m_mapAchievementLoadCallback.has(l) ||
                this.m_mapAchievementLoadCallback.set(l, new hn.lu()),
              this.m_mapAchievementLoadCallback.get(l)
            );
          }
          GetAchievement(e, r, i) {
            const l = this.GetKey(e, r, i);
            return this.m_mapUserAchievementsByYear.get(l);
          }
          GetManyAchievement(e, r, i) {
            return i.map((l) => this.GetAchievement(e, r, l));
          }
          async LoadUserAchievementForYearForGame(e, r, i) {
            const l = this.GetKey(e, r, i);
            return (
              this.m_mapPromiseUserAchievementsByYear.has(l) ||
                this.m_mapPromiseUserAchievementsByYear.set(
                  l,
                  pn(i, this.InternalLoadUserAchievementForYear(e, r, [i])),
                ),
              this.m_mapPromiseUserAchievementsByYear.get(l)
            );
          }
          async LoadUserAchievementForYearForMultipleGame(e, r, i) {
            const l = new Array(),
              c = new Array();
            if (
              (i.forEach((m) => {
                const d = this.GetKey(e, r, m);
                this.m_mapPromiseUserAchievementsByYear.has(d)
                  ? l.push(this.m_mapPromiseUserAchievementsByYear.get(d))
                  : c.push(m);
              }),
              c.length > 0)
            ) {
              const m = this.InternalLoadUserAchievementForYear(e, r, c);
              c.forEach((d) => {
                const p = this.GetKey(e, r, d),
                  f = pn(d, m);
                this.m_mapPromiseUserAchievementsByYear.set(p, f), l.push(f);
              });
            }
            return Promise.all(l);
          }
          async InternalLoadUserAchievementForYear(e, r, i) {
            const l = Q.w.Init(tt),
              c = Ot.b.InitFromAccountID(r);
            l.Body().set_appids(i),
              l.Body().set_steamid(c.ConvertTo64BitString()),
              l.Body().set_year(e),
              l.Body().set_total_only(!1);
            let m = null;
            try {
              const d = await zt.GetUserYearAchievements(
                this.m_SteamInterface.GetServiceTransport(),
                l,
              );
              if (d.GetEResult() == Zt.R) {
                const { game_achievements: p = [] } = d.Body().toObject(),
                  f = new Map();
                for (const w of p) w.appid && f.set(w.appid, w);
                return (
                  i.forEach((w) => {
                    const N = this.GetKey(e, r, w),
                      L = f.get(w) || { appid: w, achievements: [] };
                    (L.achievements = (L.achievements ?? []).map((W) => ({
                      ...W,
                      achievement_name_internal: (
                        W.achievement_name_internal ?? ""
                      ).toLowerCase(),
                    }))),
                      this.m_mapUserAchievementsByYear.set(N, L),
                      this.GetAchievementLoadCallback(e, r, w).Dispatch(L);
                  }),
                  p
                );
              }
              m = (0, Pr.H)(d);
            } catch (d) {
              m = (0, Pr.H)(d);
            }
            return (
              console.error(
                "CYearInReviewUserAchievementStore.InternalLoadUserAchievementForYear failed: " +
                  m?.strErrorMsg,
                m,
              ),
              i.map((d) => ({ appid: d, achievements: [] }))
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Wt.s_Singleton ||
                ((Wt.s_Singleton = new Wt()), Wt.s_Singleton.Init()),
              Wt.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, Br.P)();
          }
        }
        function ha(s, e, r) {
          const [i, l] = (0, h.useState)(Wt.Get().GetManyAchievement(s, e, r));
          return (
            (0, h.useEffect)(() => {
              r?.length > 0 &&
                Wt.Get()
                  .LoadUserAchievementForYearForMultipleGame(s, e, r)
                  .then(l);
            }, [e, s, r]),
            i
          );
        }
        function vn(s, e, r) {
          const [i, l] = (0, h.useState)(Wt.Get().GetAchievement(s, e, r)),
            [c, m] = (0, h.useState)(r);
          return (
            (0, h.useEffect)(() => {
              (!i || c != r) &&
                Wt.Get()
                  .LoadUserAchievementForYearForGame(s, e, r)
                  .then((d) => {
                    l(d), m(r);
                  });
            }, [e, i, r, c, s]),
            (0, Lr.hL)(Wt.Get().GetAchievementLoadCallback(s, e, r), l),
            i
          );
        }
        var Kr = o(92757),
          pa = o(46943),
          yn = o(54407),
          Vr = o(16412),
          Tt = o(25792),
          Qr = o(179),
          Bn = o(95695),
          Mt = o(36118),
          br = o(85599),
          B = o(36707);
        const bn =
          o.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var It = o(84676),
          Bt = o(19730),
          re = o(10738),
          ot = o.n(re),
          _t = o(7253),
          v = o.n(_t),
          va = o(87762),
          Le = o.n(va),
          xr = o(81944);
        function Nt(s) {
          const { className: e, children: r, strClassOnFirstVisible: i } = s,
            [l, c] = (0, h.useState)(!1);
          return (0, t.jsx)(xr.J, {
            trigger: "once",
            onVisibilityChange: c,
            className: (0, B.A)(e, l ? i || "NowVisible" : void 0),
            children: r,
          });
        }
        var xn = o(41032),
          Ct = o(19298);
        const wn = { ...Lt, include_screenshots: !0 };
        function Dr(s) {
          const {
              category: e,
              userYearInReview: r,
              strClassName: i,
              bgImageURL: l,
              title: c,
              subTitle: m,
              disclaimer: d,
              subTitleTokenIfMax: p,
            } = s,
            f = r.GetRawStats(),
            w = 5,
            {
              nTotalGames: N,
              nTotalSessions: L,
              nTotalPercentage: W,
            } = (0, h.useMemo)(() => vt(f, e), [f, e]),
            { rgResults: R, nTotalResultCount: ce } = (0, h.useMemo)(
              () => A(r, e, w, W),
              [r, e, W, w],
            ),
            De = (0, h.useMemo)(
              () => R.map((lt) => lt.parent_appid || lt.appid),
              [R],
            ),
            [Qe, ft] = (0, h.useState)(
              R.length > 0 ? R[0].parent_appid || R[0].appid : 0,
            ),
            wt = (0, It.zX)(De, e == "vr" ? wn : Lt),
            Ee = ya(R, e, wt),
            qe =
              e === "overall" ||
              e === "controller" ||
              e == "demo" ||
              e == "playtest";
          return (0, t.jsxs)("div", {
            className: (0, B.A)(i, e, Le().PlatformContentsCtn),
            children: [
              (0, t.jsx)("div", { className: Le().SectionTitle, children: c }),
              !!l &&
                (0, t.jsx)("img", { src: l, className: Le().BackgroundImage }),
              e === "vr" && Qe > 0 && (0, t.jsx)(Ba, { appid: Qe }),
              (0, t.jsxs)("div", {
                className: (0, B.A)(v().YearInReviewContent, Le().StatsRow),
                children: [
                  (0, t.jsxs)("div", {
                    className: Le().StatBlock,
                    children: [
                      (0, t.jsx)("div", {
                        className: Le().BigNum,
                        children: (0, Bt.Dq)(N),
                      }),
                      (0, t.jsx)("div", {
                        className: Le().StatDescription,
                        children: (0, y.Yp)("#YIR_NewLine_Games", N),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: Le().StatBlock,
                    children: [
                      (0, t.jsx)("div", {
                        className: Le().BigNum,
                        children: (0, Bt.Dq)(L),
                      }),
                      (0, t.jsx)("div", {
                        className: Le().StatDescription,
                        children: (0, y.Yp)("#YIR_NewLine_Session", L),
                      }),
                    ],
                  }),
                  !qe &&
                    (0, t.jsx)(In, { percentVal: W, subToken: "#YIR_NewLine" }),
                ],
              }),
              !!m &&
                (0, t.jsx)("div", {
                  className: Le().SectionSubTitle,
                  children: m,
                }),
              !m &&
                !!p &&
                ce > w &&
                Ee > 0 &&
                (0, t.jsx)("div", {
                  className: Le().SectionSubTitle,
                  children: (0, y.we)(p, Ee),
                }),
              !!d &&
                (0, t.jsx)("div", { className: Le().Disclaimer, children: d }),
              (0, t.jsx)(Nt, {
                className: ot().SteamDeckGameCapRow,
                children: (0, t.jsx)(jn, {
                  rgGamePercentages: R,
                  category: e,
                  fnOnHoverApp: ft,
                }),
              }),
            ],
          });
        }
        function ya(s, e, r) {
          const [i, l] = h.useState(0);
          return (
            h.useEffect(() => {
              if (r == It.Sq) return;
              const c = s.reduce((m, d) => {
                const p = d.parent_appid || d.appid,
                  f = yr.A.Get().GetApp(p)?.BIsVisible(),
                  N = !(e == "demo" || e == "playtest") || d.parent_appid;
                return m + (f && N ? 1 : 0);
              }, 0);
              l(c);
            }, [s, r, e]),
            i
          );
        }
        function Ba(s) {
          const { appid: e } = s,
            [r] = (0, It.t7)(e, wn),
            i = (0, xn.$9)();
          if (!r) return null;
          const l = r.GetScreenshots(i == "blocked");
          if (!l.length) return null;
          const c = l[1],
            m = i == "masked" && !r.BIsAgeSafeScreenshot(c);
          return (0, t.jsx)("img", {
            src: c,
            className: (0, B.A)({ [Le().GameImage]: !0, [Le().BlurImage]: m }),
          });
        }
        function jn(s) {
          const { rgGamePercentages: e, category: r, fnOnHoverApp: i } = s,
            l = e.map((m) => m.appid);
          let c;
          switch (r) {
            case "demo":
              c = jt.uE.ue;
              break;
            case "playtest":
              c = jt.uE.Vi;
              break;
          }
          return (0, t.jsx)(Ct.Z, {
            "flow-children": "grid",
            className: (0, B.A)(
              v().YearInReviewContent,
              Le().CapRow,
              ot().CapRow,
            ),
            children: e.map((m, d) =>
              (0, t.jsx)(
                Fr,
                {
                  appid: m.appid,
                  strInfo: m.strPercentage,
                  nParentAppID: m.parent_appid,
                  eChildType: c,
                  index: d,
                  loading: "eager",
                  rgAppIDs: l,
                  fnOnMouseEvent: () => i && i(m.appid),
                },
                r + "_" + m.appid,
              ),
            ),
          });
        }
        function Fr(s) {
          const {
              appid: e,
              strInfo: r,
              rgAppIDs: i,
              index: l,
              loading: c,
              fnOnMouseEvent: m,
              nParentAppID: d,
              eChildType: p,
            } = s,
            [f, w] = (0, It.t7)(p == null ? e : d, Lt),
            N = gn(l, i);
          if (w == It.Sq) return null;
          if (!f || !f.BIsVisible())
            return d && (p == jt.uE.ue || p == jt.uE.Vi)
              ? (0, t.jsx)(Fr, { ...s, nParentAppID: d, eChildType: jt.uE.HT })
              : null;
          const L = f.GetAssetsWithoutOverrides()?.GetLibraryCapsuleURL();
          return (0, t.jsxs)("a", {
            className: ot().CapsuleCtn,
            onClick: N,
            onMouseEnter: m,
            children: [
              L
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: ot().SpecialFlags,
                        children: [
                          d &&
                            p == jt.uE.ue &&
                            (0, t.jsx)("div", {
                              className: ot().DemoPlayDetails,
                              children: (0, y.we)("#YIR_Played_Demo"),
                            }),
                          d &&
                            p == jt.uE.Vi &&
                            (0, t.jsx)("div", {
                              className: ot().PlaytestPlayDetails,
                              children: (0, y.we)("#YIR_Played_PlayTest"),
                            }),
                        ],
                      }),
                      (0, t.jsx)("img", {
                        loading: c,
                        src: L,
                        alt: f.GetName(),
                      }),
                    ],
                  })
                : (0, t.jsx)(Mn, { item: f }),
              !!r &&
                (0, t.jsx)("div", { className: ot().TimePlayed, children: r }),
            ],
          });
        }
        function Mn(s) {
          const { item: e } = s;
          return (0, t.jsxs)("div", {
            className: ot().UnavailableGame,
            children: [
              (0, t.jsx)("img", {
                src: bn,
                alt: e.GetName() || "" + e.GetAppID(),
              }),
              (0, t.jsx)("div", {
                className: ot().GameTitle,
                children: e.GetName(),
              }),
            ],
          });
        }
        function In(s) {
          const { percentVal: e, subToken: r } = s,
            i = At(e),
            l = `${r}_Percent`;
          return (0, t.jsxs)("div", {
            className: Le().StatBlock,
            children: [
              (0, t.jsx)("div", { className: Le().BigNum, children: i }),
              (0, t.jsx)("div", {
                className: Le().StatDescription,
                children: (0, y.we)(l),
              }),
            ],
          });
        }
        var Zr = o(83482),
          ba = o(6698),
          xa = o(21418),
          Jr = o(92264),
          cr = o(13824),
          Xr = o(72865),
          Jt = o(71421);
        function wa(s) {
          const { userYearInReview: e, nYear: r } = s,
            i = Ke(),
            l = (0, h.useMemo)(() => {
              const f = new Set();
              return (
                e.GetPlayTimeStats().game_summary.forEach((w) => {
                  !w.demo && !w.playtest
                    ? f.add(w.appid)
                    : w.parent_appid && f.add(w.parent_appid);
                }),
                Array.from(f)
              );
            }, [e]),
            c = (0, It.zX)(l, Lt),
            m = pt(),
            d = (f) =>
              window.sessionStorage.setItem("yirfirsttime", `?tab=${f.key}`),
            p = [
              {
                name: (0, y.we)("#YIR_FirstTime_Tab_MonthlyGrid"),
                key: "firsttimebymonth",
                contents: (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)("div", {
                    className: cr.MonthGridOverallCtn,
                    children: (0, t.jsx)(Ma, { userYearInReview: e, nYear: r }),
                  }),
                }),
                onClick: d,
              },
              {
                name: (0, y.we)("#YIR_FirstTime_Tab_Grid"),
                key: "firsttimegrid",
                contents: (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)(ja, { userYearInReview: e, nYear: r }),
                }),
                onClick: d,
              },
            ];
          return l.length == 0
            ? null
            : (0, t.jsxs)(Nt, {
                className: _t.AllFirstPlayedCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, B.A)(cr.AllGamesBGImage, i.AllGamesBGImage),
                  }),
                  (0, t.jsxs)("div", {
                    className: _t.YearInReviewContent,
                    children: [
                      (0, t.jsx)("div", {
                        className: _t.SectionTitle,
                        children: m("#YIR_FirstTime_Title", l.length),
                      }),
                      c == It.Sq
                        ? (0, t.jsx)(br.t, {
                            size: "medium",
                            position: "center",
                            string: (0, y.we)("#Loading"),
                          })
                        : (0, t.jsx)("div", {
                            className: _t.TabCtn,
                            children: (0, t.jsx)(xa.V, {
                              classNameCtn: _t.TabBar,
                              classNameTab: (0, B.A)(_t.Tab, i.Tab),
                              tabs: p,
                            }),
                          }),
                    ],
                  }),
                ],
              });
        }
        function ja(s) {
          const { nYear: e, userYearInReview: r } = s,
            i = r.GetPlayTimeStats().game_summary,
            l = pt(),
            [c, m] = h.useState(!1),
            { bShouldShowMore: d, rgGamesInOrderOfPlaytime: p } = (0,
            h.useMemo)(() => {
              const f = new Set(),
                w = i
                  .filter((W) =>
                    f.has(W.appid)
                      ? !1
                      : (f.add(W.appid),
                        W.parent_appid || (!W.demo && !W.playtest)),
                  )
                  .sort(
                    (W, R) =>
                      R.total_playtime_percentagex100 -
                      W.total_playtime_percentagex100,
                  )
                  .map((W) => ({
                    appid: W.appid,
                    strPercentage: At(W.total_playtime_percentagex100),
                    bNewThisYear: !!W.new_this_year,
                    bIsDemo: !!W.demo,
                    bIsPlaytest: !!W.playtest,
                    nParentAppID: W.parent_appid,
                  })),
                N = 100,
                L = i.length > N && !c;
              return {
                bShouldShowMore: L,
                rgGamesInOrderOfPlaytime: L ? w.slice(0, N) : w,
              };
            }, [i, c]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(An, {
                nYear: e,
                rgGamesInOrderOfPlaytime: p,
                strTooltip: l("#YIR_FirstTime_Percentages"),
              }),
              d &&
                (0, t.jsx)("div", {
                  className: re.MoreButtonContainer,
                  children: (0, t.jsx)("a", {
                    href: "#",
                    className: re.ShowMoreBtn,
                    onClick: () => m(!0),
                    children: (0, y.we)("#YIR_ShowMore"),
                  }),
                }),
            ],
          });
        }
        function Ma(s) {
          const { nYear: e, userYearInReview: r } = s,
            i = r.GetRawStats().playtime_stats.months;
          return (0, t.jsx)(t.Fragment, {
            children: i
              .filter((l) => l.stats.total_sessions > 0)
              .map((l) =>
                (0, t.jsx)(
                  Ia,
                  { month: l, userYearInReview: r, nYear: e },
                  "outermonth" + l.rtime_month,
                ),
              ),
          });
        }
        function Ia(s) {
          const { nYear: e, userYearInReview: r, month: i } = s,
            l = or(),
            c = pt(),
            [m, d] = h.useState(!1),
            { bShouldShowMore: p, rgGameStats: f } = (0, h.useMemo)(() => {
              const N = i.game_summary
                  .filter((R) => {
                    const ce = r.GetGameSummaryForApp(R.appid);
                    return (
                      (0, _.wT)(
                        ce,
                        `Displaying Month Data ${i.rtime_month} missing summary for appid: ${R.appid}`,
                      ),
                      ce && (ce.parent_appid || (!ce.demo && !ce.playtest))
                    );
                  })
                  .sort(
                    (R, ce) =>
                      ce.relative_playtime_percentagex100 -
                      R.relative_playtime_percentagex100,
                  )
                  .map((R) => {
                    const ce = r.GetGameSummaryForApp(R.appid);
                    return {
                      appid: ce.appid,
                      strPercentage: At(R.relative_playtime_percentagex100),
                      bNewThisYear: !!ce.new_this_year,
                      bIsDemo: !!ce.demo,
                      bIsPlaytest: !!ce.playtest,
                      nParentAppID: ce.parent_appid,
                    };
                  }),
                L = 8,
                W = N.length > L && !m;
              return { bShouldShowMore: W, rgGameStats: W ? N.slice(0, L) : N };
            }, [i.game_summary, i.rtime_month, m, r]);
          if (f.length == 0) return null;
          const w = new Date((i.rtime_month + 1440 * 60) * 1e3);
          return (0, t.jsxs)(
            "div",
            {
              className: cr.MonthGroupCtn,
              children: [
                (0, t.jsx)("div", {
                  className: cr.MonthTitle,
                  children: l
                    ? (0, y.we)(
                        "#YIR_MonthlyGrid_MonthSingular_" + (w.getMonth() + 1),
                      )
                    : (0, Jr.sq)(w),
                }),
                (0, t.jsx)(An, {
                  rgGamesInOrderOfPlaytime: f,
                  nYear: e,
                  strTooltip: c("#YIR_FirstTime_MonthlyPercentages"),
                }),
                p &&
                  (0, t.jsx)("div", {
                    className: re.MoreButtonContainer,
                    children: (0, t.jsx)("a", {
                      href: "#",
                      className: re.ShowMoreBtn,
                      onClick: () => d(!0),
                      children: (0, y.we)("#YIR_ShowMore"),
                    }),
                  }),
              ],
            },
            "monthgroup_" + i.rtime_month,
          );
        }
        function An(s) {
          const { nYear: e, rgGamesInOrderOfPlaytime: r, strTooltip: i } = s;
          let l = r.filter((d) =>
            yr.A.Get().BHasApp(d.nParentAppID || d.appid),
          );
          const c = l.map((d) => d.appid);
          let m = l.map((d, p) => {
            let f = () => Qt.Get().SetGameDetailsPopupAppData(p, c);
            return (0, t.jsx)(
              Aa,
              {
                appid: d.nParentAppID || d.appid,
                bNewThisYear: d.bNewThisYear,
                fnOnClick: f,
                nYear: e,
                strPercentage: d.strPercentage,
                strTooltip: i,
                bIsDemo: d.bIsDemo,
                bIsPlayTest: d.bIsPlaytest,
              },
              d.appid,
            );
          });
          return (0, t.jsx)(Ct.Z, {
            "flow-children": "grid",
            className: (0, B.A)(re.FirstPlayCtn, cr.FirstPlayCtn),
            children: m,
          });
        }
        function Aa(s) {
          const {
              nYear: e,
              appid: r,
              bNewThisYear: i,
              fnOnClick: l,
              strPercentage: c,
              strTooltip: m,
              bIsDemo: d,
              bIsPlayTest: p,
            } = s,
            [f] = (0, It.t7)(r, Lt),
            w = (0, Xr.n9)(),
            N = Ke();
          if (!f || !f.BIsVisible()) return null;
          const L = (0, Zr.wJ)(f?.GetStorePageURL() || "", w),
            W = f.GetAssetsWithoutOverrides()?.GetLibraryCapsuleURL();
          return (0, t.jsx)("div", {
            className: (0, B.A)({
              [re.GameCtn]: !0,
              [cr.GameCtn]: !0,
              [re.GameNewThisYear]: i,
            }),
            onClick: (R) => {
              l && (R.preventDefault(), l());
            },
            children: (0, t.jsx)(ba.oj, {
              appid: f.GetAppID(),
              children: (0, t.jsxs)("a", {
                href: l ? void 0 : L,
                className: re.CapsuleCtn,
                children: [
                  (!!i || !!d || !!p) &&
                    (0, t.jsxs)("div", {
                      className: re.SpecialFlags,
                      children: [
                        !!i &&
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              re.GamePlayDetails,
                              N.GamePlayDetails,
                            ),
                            children: (0, y.we)("#YIR_FirstTime_Played", e),
                          }),
                        !!d &&
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              re.DemoPlayDetails,
                              N.DemoPlayDetails,
                            ),
                            children: (0, y.we)("#YIR_Played_Demo"),
                          }),
                        !!p &&
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              re.PlaytestPlayDetails,
                              N.PlaytestPlayDetails,
                            ),
                            children: (0, y.we)("#YIR_Played_PlayTest"),
                          }),
                      ],
                    }),
                  W
                    ? (0, t.jsx)("img", { loading: "lazy", src: W })
                    : (0, t.jsx)(Mn, { item: f }),
                  !!c &&
                    (0, t.jsx)(Jt.he, {
                      toolTipContent: m,
                      className: re.TimePlayed,
                      children: c,
                    }),
                ],
              }),
            }),
          });
        }
        var Ta = o(20175),
          Rt = o.n(Ta),
          Ft = o(17247);
        function Na(s) {
          const {
            children: e,
            className: r,
            squareClassName: i,
            gridClassName: l,
            bEvenTiles: c,
            bFadeInTiles: m,
            bDrift: d,
          } = s;
          return (0, t.jsx)("div", {
            className: (0, B.A)(Ft.Container, r),
            children: (0, t.jsx)("div", {
              className: (0, B.A)(Ft.Frame, !m && Ft.FadeInGrid),
              children: (0, t.jsx)("div", {
                className: (0, B.A)(Ft.Square, d && Ft.Drift, i),
                children: (0, t.jsx)("div", {
                  className: (0, B.A)(
                    { [Ft.Grid]: !0, [Ft.WideTiles]: !c, [Ft.FadeInTiles]: m },
                    l,
                  ),
                  children: e,
                }),
              }),
            }),
          });
        }
        function Pa(s) {
          return (0, t.jsx)("img", {
            className: (0, B.A)(Ft.Tile, s.className),
            src: s.strImageURL,
            alt: "",
          });
        }
        const La = 9e3,
          Da = 1,
          Ea = 50;
        function Tn(s) {
          const { userYearInReview: e, children: r } = s,
            i = (0, h.useMemo)(
              () =>
                e
                  .GetPlayTimeStats()
                  .games.map((m) => e.GetGameSummaryForApp(m.appid))
                  .filter(
                    (m) => m && (m.parent_appid || (!m.demo && !m.playtest)),
                  ),
              [e],
            );
          if (!i || i.length == 0) return (0, t.jsx)($r, { children: r });
          const l = i[0].total_playtime_percentagex100 ?? 0;
          return e.GetPlayTimeStats().game_summary.length < Da || l >= La
            ? (0, t.jsx)(Sa, {
                appid: i[0].parent_appid || i[0].appid,
                children: r,
              })
            : (0, t.jsx)(Oa, { userYearInReview: e, children: r });
        }
        function Oa(s) {
          const { userYearInReview: e, children: r } = s,
            i = Ke(),
            l = (0, h.useMemo)(
              () =>
                Array.from(
                  new Set(
                    e
                      .GetPlayTimeStats()
                      .game_summary.filter(
                        (f) => f.parent_appid || (!f.demo && !f.playtest),
                      )
                      .sort(
                        (f, w) =>
                          w.total_playtime_percentagex100 -
                          f.total_playtime_percentagex100,
                      )
                      .slice(0, Ea)
                      .map((f) => f.parent_appid || f.appid),
                  ),
                ),
              [e],
            ),
            [c, m] = (0, h.useState)(null),
            d = (0, It.zX)(l, Lt);
          (0, h.useEffect)(() => {
            d != It.Sq &&
              m(l.map((f) => yr.A.Get().GetApp(f)).filter((f) => !!f));
          }, [l, d]);
          const p = (0, h.useMemo)(() => c && _a(c), [c]);
          return c
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(Na, {
                    className: (0, B.A)(Rt().ImagesCtn, i.ImagesCtn),
                    squareClassName: Rt().TileSquare,
                    gridClassName: (0, B.A)({
                      [Rt().TileGrid]: !0,
                      [Rt().Sub10]: c.length <= 10,
                      [Rt().Sub20]: c.length <= 20,
                      [Rt().Sub40]: c.length <= 40,
                    }),
                    bFadeInTiles: !0,
                    bDrift: !0,
                    children: p.map((f, w) =>
                      (0, t.jsx)(
                        Pa,
                        { strImageURL: f, className: Rt().Tile },
                        w,
                      ),
                    ),
                  }),
                  r,
                ],
              })
            : (0, t.jsx)($r, { children: r });
        }
        function _a(s) {
          const e = (l) => {
              const c = l.GetAssetsWithoutOverrides();
              return (
                (0, _.wT)(c, "Cannot get image without assets"),
                (c.GetLibraryHeroURL()?.trim().length ?? 0) > 0
                  ? c.GetLibraryHeroURL()
                  : c.GetMainCapsuleURL()
              );
            },
            r = (l) => {
              const c = l.GetAssetsWithoutOverrides();
              return (
                (0, _.wT)(c, "Cannot get image without assets"),
                (c.GetRawPageBackgroundURL()?.trim().length ?? 0) > 0
                  ? c.GetRawPageBackgroundURL()
                  : c.GetMainCapsuleURL()
              );
            },
            i = s.map(e);
          return (
            s.length <= 50 && i.push(...s.map(r)),
            s.length <= 20 && i.push(...s.map(e)),
            i
          );
        }
        function Sa(s) {
          const { appid: e, children: r } = s,
            [i] = (0, It.t7)(e, Lt),
            l = Ke();
          return i
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, B.A)(Rt().ImagesCtn, l.ImagesCtn),
                    children: (0, t.jsx)("div", {
                      className: (0, B.A)(Rt().SingleGame, l.SingleGame),
                      children: (0, t.jsx)("div", {
                        className: (0, B.A)(Rt().ImageTint, l.ImageTint),
                        children: (0, t.jsx)("img", {
                          src: i
                            ?.GetAssetsWithoutOverrides()
                            ?.GetLibraryHeroURL(),
                        }),
                      }),
                    }),
                  }),
                  r,
                ],
              })
            : (0, t.jsx)($r, { children: r });
        }
        function $r(s) {
          return (0, t.jsx)("div", {
            className: Rt().basicBackground,
            children: s.children,
          });
        }
        var za = o(54094),
          ne = o.n(za),
          Nn = o(98609),
          mr = o(84918),
          qr = o(91843),
          en = o(16965),
          wr = o(49404),
          Wa = o(55709),
          Ca = o(63905),
          Ra = o(79191),
          ka = o(47148);
        const dr = ({
          spaceAroundCount: s,
          endValue: e,
          maxValue: r,
          duration: i = 1e3,
          startAnimation: l = !1,
          stopAnimation: c = !1,
          onAnimationStart: m,
          onAnimationStop: d,
          delay: p = 0,
          className: f,
        }) => {
          const [w, N] = (0, h.useState)(0),
            L = h.useRef(null),
            W = (R) => (R < 0.5 ? 4 * R ** 3 : 1 - Math.pow(-2 * R + 2, 3) / 2);
          return (
            (0, h.useEffect)(() => {
              let R = null;
              const ce = () => {
                if (!R) return;
                const Qe = Date.now() - R,
                  ft = Math.min(1, Qe / i),
                  wt = W(ft),
                  Ee = Math.round((r ?? e) * wt);
                Ee <= e
                  ? (N(Ee), (L.current = requestAnimationFrame(ce)))
                  : N(e);
              };
              return (
                l &&
                  (m && m(),
                  window.setTimeout(() => {
                    (R = Date.now()),
                      m && m(),
                      (L.current = requestAnimationFrame(ce));
                  }, p)),
                () => {
                  L.current && cancelAnimationFrame(L.current), c && d && d();
                }
              );
            }, [e, i, l, c, m, d, p, r]),
            s
              ? (0, t.jsxs)(t.Fragment, {
                  children: ["\xA0", (0, Bt.Dq)(w), "\xA0"],
                })
              : (0, t.jsx)(t.Fragment, { children: (0, Bt.Dq)(w) })
          );
        };
        var Pn = o(94162),
          Ga = o(39567),
          Ln = o(24642);
        const Ua = () => {
            const s = Ke();
            return (0, t.jsxs)("svg", {
              className: (0, B.A)(
                ne().ProgressIconSVG,
                ne().IconStreak,
                s.IconStreak,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 220 256",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  d: "M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  d: "M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          Ya = () => {
            const s = Ke();
            return (0, t.jsxs)("svg", {
              className: (0, B.A)(
                ne().ProgressIconSVG,
                ne().IconGamesPlayed,
                s.IconGamesPlayed,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 215 215",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z",
                  fill: "#E5E5E5",
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          Ha = () => {
            const s = Ke();
            return (0, t.jsx)("svg", {
              className: (0, B.A)(
                ne().ProgressIconSVG,
                ne().IconAchievement,
                s.IconAchievement,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "120px",
              viewBox: "0 0 240 276",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z",
                fill: "#E5E5E5",
              }),
            });
          };
        function Ka(s) {
          const { userYearInReview: e } = s,
            r = Ke();
          return (0, t.jsx)(Nt, {
            className: (0, B.A)(v().TopHonorsSection, r.TopHonorsSection),
            children: (0, t.jsx)("div", {
              className: (0, B.A)(
                v().YearInReviewContent,
                v().TopHonorsContent,
              ),
              children: (0, t.jsxs)("div", {
                className: ne().TopHonorsCtn,
                children: [
                  (0, t.jsx)(Va, { userYearInReview: e }),
                  (0, t.jsxs)("div", {
                    className: ne().SpiderAndNumbersCnt,
                    children: [
                      (0, t.jsx)(Ja, { userYearInReview: e }),
                      (0, t.jsx)(qa, { userYearInReview: e }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Va(s) {
          let { userYearInReview: e } = s;
          const r = e.GetYear(),
            i = pt(),
            l = Ke();
          let c = e.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            m = e.GetFilteredGameSummary()?.length || 0,
            d =
              e.GetPlayTimeStats().playtime_streak?.longest_consecutive_days ||
              0,
            p = e.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
            f = e.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
            w = e.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
            N = d > 0 && w > 0 && Nn.iA.country_code.toLowerCase() !== "cn";
          p >= 99 && (p = 100),
            f >= 99 && (f = 100),
            w >= 99 && (w = 100),
            c == e.GetPlayTimeStats().by_numbers?.achievements_avg && (p = 50),
            m == e.GetPlayTimeStats().by_numbers?.games_played_avg && (f = 50),
            d == e.GetPlayTimeStats().by_numbers?.game_streak_avg && (w = 50),
            c == 0 && (p = 0),
            m == 0 && (f = 0),
            d == 0 && (w = 0);
          const [L, W] = h.useState(!1),
            [R, ce] = h.useState(!1),
            [De, Qe] = h.useState(!1),
            ft = h.useCallback(async (lt) => {
              lt && (W(!0), ce(!0), Qe(!0));
            }, []),
            wt = (0, t.jsx)(dr, {
              endValue: c,
              maxValue: (c * 100) / p,
              duration: 2e3,
              startAnimation: L,
              delay: 500,
            }),
            Ee = (0, t.jsx)(dr, {
              endValue: m,
              maxValue: (m * 100) / f,
              duration: 2e3,
              startAnimation: R,
              delay: 700,
            }),
            qe = (0, t.jsx)(dr, {
              endValue: d,
              maxValue: (d * 100) / w,
              duration: 2e3,
              startAnimation: De,
              delay: 900,
            });
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              ne().PlayBehaviorContainer,
              l.PlayBehaviorContainer,
            ),
            children: [
              (0, t.jsx)("div", {
                className: v().SectionTitle,
                children: i("#YIR_Compare_Title_Label"),
              }),
              (0, t.jsx)("div", {
                className: (0, B.A)(
                  v().SectionSubTitle,
                  ne().PlayBehaviorSectionSubTitle,
                ),
                children: i("#YIR_Compare_Subtitle_Label"),
              }),
              (0, t.jsxs)(xr.J, {
                onVisibilityChange: ft,
                children: [
                  (0, t.jsx)(tn, {
                    progressLabel: i(
                      c == 1
                        ? "#YIR_Compare_PlayerProgress_Achievements_Single"
                        : "#YIR_Compare_PlayerProgress_Achievements_Label",
                      wt,
                    ),
                    userPercent: p,
                    steamAverage:
                      e.GetPlayTimeStats().by_numbers?.achievements_avg,
                    progressIcon: (0, t.jsx)(Ha, {}),
                  }),
                  (0, t.jsx)(tn, {
                    progressLabel: i(
                      m == 1
                        ? "#YIR_Compare_PlayerProgress_PlayedGames_Single"
                        : "#YIR_Compare_PlayerProgress_PlayedGames_Label",
                      Ee,
                    ),
                    userPercent: f,
                    steamAverage:
                      e.GetPlayTimeStats().by_numbers?.games_played_avg,
                    progressIcon: (0, t.jsx)(Ya, {}),
                  }),
                  N &&
                    (0, t.jsx)(tn, {
                      progressLabel: i(
                        d == 1
                          ? "#YIR_Compare_PlayerProgress_LongestStreak_Single"
                          : "#YIR_Compare_PlayerProgress_LongestStreak_Label",
                        qe,
                      ),
                      userPercent: w,
                      steamAverage:
                        e.GetPlayTimeStats().by_numbers?.game_streak_avg,
                      progressIcon: (0, t.jsx)(Ua, {}),
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: ne().PlayNewnessContainer,
                children: (0, t.jsx)(Za, { userYearInReview: e }),
              }),
            ],
          });
        }
        function tn(s) {
          let {
            progressLabel: e,
            steamAverage: r,
            progressIcon: i,
            userPercent: l,
          } = s;
          const c = Ke();
          return (
            (l = rr.OQ(l, 0, 100)),
            (0, t.jsxs)(Nt, {
              className: ne().PlayerBehaviorProgressCnt,
              children: [
                (0, t.jsx)("div", {
                  className: ne().ProgressIcon,
                  children: i,
                }),
                (0, t.jsxs)("div", {
                  className: ne().ProgressRightSide,
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, B.A)(ne().ProgressLabel, c.ProgressLabel),
                      children: e,
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ProgressBar,
                      children: (0, t.jsx)("div", {
                        className: ne().ProgressBarWrapper,
                        children: (0, t.jsx)("div", {
                          className: (0, B.A)(
                            ne().ProgressBarFilled,
                            c.ProgressBarFilled,
                            c.ProgressBarFilledGradient,
                          ),
                          style: {
                            clipPath:
                              "polygon(0% 0, " +
                              l +
                              "% 0%, " +
                              l +
                              "% 100%, 0% 100%)",
                          },
                          children: (0, t.jsxs)("div", {
                            className: ne().GlitterBox,
                            children: [
                              (0, t.jsx)("div", { className: ne().Glitter }),
                              (0, t.jsx)("div", {
                                className: (0, B.A)(
                                  ne().Glitter,
                                  ne().GlitterSecond,
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ProgressLabelsCnt,
                      children:
                        r &&
                        (0, t.jsx)("div", {
                          className: ne().ProgressSteamAvgLabel,
                          children: (0, y.we)(
                            "#YIR_Compare_PlayerProgress_Steam_Avg",
                            r,
                          ),
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var Qa = ((s) => (
          (s.NewActive = "NewActive"),
          (s.UsedActive = "UsedActive"),
          (s.OldActive = "OldActive"),
          s
        ))(Qa || {});
        const Fa = {
          NewActive: "#YIR_Compare_NewGames_Flavor",
          UsedActive: "#YIR_Compare_ComfortGames_Flavor",
          OldActive: "#YIR_Compare_OldGames_Flavor",
        };
        function Za(s) {
          const { userYearInReview: e } = s,
            r = e.GetYear(),
            i = Ke(),
            l = i.new_games_color,
            c = i.used_games_color,
            m = i.old_games_color,
            [d, p] = (0, h.useState)("NewActive"),
            f = pt(),
            w = e.GetGlobalGameplayDistribition(),
            N = {
              NewActive: w?.new_releases || 0,
              UsedActive: w?.recent_releases || 0,
              OldActive: w?.classic_releases || 0,
            },
            L = w && w.new_releases ? w.recent_cutoff_year : 7,
            W = L + 1;
          let [R, ce, De] = h.useMemo(() => {
            let qe = e.GetGameAgeCounts([1, W]),
              lt = qe.reduce((Dt, Et) => Et + Dt, 0);
            if (lt == 0) return [0, 0, 0];
            let Vt = qe.map((Dt) => Math.floor((Dt * 100) / lt)),
              Gt = 100 - Vt.reduce((Dt, Et) => Et + Dt, 0),
              Ut = qe.map((Dt, Et) => ({
                decimal: ((Dt * 100) / lt) % 1,
                index: Et,
              }));
            for (
              Ut = Ut.sort((Dt, Et) => Dt.decimal - Et.decimal);
              Gt > 0 && Ut.length > 0;
            ) {
              let Dt = Ut.pop();
              (Vt[Dt.index] += 1), (Gt -= 1);
            }
            return Vt;
          }, [e, W]);
          const Qe = { NewActive: R, UsedActive: ce, OldActive: De },
            ft = {
              NewActive: f("#YIR_Compare_NewGames_Desc_User", r),
              UsedActive: f("#YIR_Compare_ComfortGames_Desc_User", L),
              OldActive: f("#YIR_Compare_OldGames_Desc_User", W),
            },
            wt = {
              NewActive: (0, y.we)("#YIR_Compare_NewGames_Desc_AvgSteam", r),
              UsedActive: (0, y.we)(
                "#YIR_Compare_ComfortGames_Desc_AvgSteam",
                L,
              ),
              OldActive: (0, y.we)("#YIR_Compare_OldGames_Desc_AvgSteam", W),
            },
            Ee = (0, h.useMemo)(() => {
              const qe = new Array();
              return (
                qe.push({ name: "new", value: R > 0 ? R : 1 }),
                qe.push({ name: "used", value: ce > 0 ? ce : 1 }),
                qe.push({ name: "old", value: De > 0 ? De : 1 }),
                qe
              );
            }, [R, ce, De]);
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              ne().GameNewnessComparisonContainer,
              ne()[d],
              i[d],
            ),
            children: [
              (0, t.jsx)("div", {
                className: (0, B.A)(ne().GameNewnessTitle, i.GameNewnessTitle),
                children: (0, y.PP)(
                  "#YIR_Compare_Flavor_Title",
                  (0, t.jsx)("div", {}),
                ),
              }),
              (0, t.jsxs)("div", {
                className: ne().GameNewnessDataCnt,
                children: [
                  (0, t.jsx)("div", {
                    className: ne().WheelChart,
                    children: (0, t.jsx)(mr.u, {
                      width: "100%",
                      height: "100%",
                      aspect: 1,
                      children: (0, t.jsx)(qr.r, {
                        children: (0, t.jsxs)(en.F, {
                          data: Ee,
                          dataKey: "value",
                          nameKey: "name",
                          cx: "50%",
                          cy: "50%",
                          innerRadius: "48%",
                          outerRadius: "92%",
                          fill: "#8884d8",
                          paddingAngle: 3,
                          minAngle: 2,
                          startAngle: 45,
                          endAngle: 405,
                          children: [
                            (0, t.jsx)(
                              wr.f,
                              {
                                onMouseEnter: () => p("NewActive"),
                                className: (0, B.A)(
                                  ne().WheelArc,
                                  d === "NewActive" && ne().Active,
                                ),
                                fill: l,
                                style:
                                  d === "NewActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-1",
                            ),
                            (0, t.jsx)(
                              wr.f,
                              {
                                onMouseEnter: () => p("UsedActive"),
                                className: (0, B.A)(
                                  ne().WheelArc,
                                  d === "UsedActive" && ne().Active,
                                ),
                                fill: c,
                                style:
                                  d === "UsedActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-2",
                            ),
                            (0, t.jsx)(
                              wr.f,
                              {
                                onMouseEnter: () => p("OldActive"),
                                className: (0, B.A)(
                                  ne().WheelArc,
                                  d === "OldActive" && ne().Active,
                                ),
                                fill: m,
                                style:
                                  d === "OldActive"
                                    ? { opacity: "1" }
                                    : { opacity: "0.75" },
                              },
                              "cell-3",
                            ),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: ne().RightSideContainer,
                    children: (0, t.jsxs)("div", {
                      className: ne().DataBoxesContainer,
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, B.A)(
                            ne().UserData,
                            i.UserData,
                            ne().DataBox,
                            i.DataBox,
                            i.Background,
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, B.A)(
                                ne().DataBoxArrow,
                                i.DataBoxArrow,
                                i.Background,
                              ),
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, B.A)(
                                ne().PercentageLabel,
                                i.PercentageLabel,
                                i.Color,
                              ),
                              children: [
                                (0, y.we)("#YIR_Compare_Percentage", Qe[d]),
                                (0, t.jsx)("div", {
                                  className: ne().FlavorLabel,
                                  children: (0, y.we)(Fa[d]),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: (0, B.A)(
                                ne().PercentageDescriptionLabel,
                                i.PercentageDescriptionLabel,
                                i.Color,
                              ),
                              children: ft[d],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, B.A)(
                            ne().SteamData,
                            i.SteamData,
                            ne().DataBox,
                            i.DataBox,
                            i.Border,
                          ),
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, B.A)(
                                ne().PercentageLabel,
                                i.PercentageLabel,
                                i.Color,
                              ),
                              children: (0, y.we)(
                                "#YIR_Compare_Percentage",
                                N[d],
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: (0, B.A)(
                                ne().PercentageDescriptionLabel,
                                i.PercentageDescriptionLabel,
                                i.Color,
                              ),
                              children: wt[d],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ja(s) {
          const { userYearInReview: e } = s,
            r = e.GetUserAggregateTagData(),
            { data: i } = (0, Ga.Fv)(Nn.TS.LANGUAGE),
            l = pt(),
            c = Ke(),
            m = (0, Pn.Ae)(),
            d = window.innerWidth <= 300,
            p = r.map((N) => N.nPreSelectionWeight).sort((N, L) => L - N);
          let f = r.map((N, L) => {
            const W = p.findIndex((R) => R - N.nPreSelectionWeight < 1e-5);
            return { subject: i && i[N.nTagId], A: (6 - W) * 10 + 2 * L + 0.5 };
          });
          if (f.length == 0) return null;
          const w = f.map((N, L) =>
            (0, t.jsx)("li", { children: N.subject }, L),
          );
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              ne().SpidergraphContainer,
              ne().HalfwidthColumn,
            ),
            children: [
              (0, t.jsx)("div", {
                className: ne().SectionLabel,
                children: (0, y.we)("#YIR_Spider_Title"),
              }),
              (0, t.jsx)("div", {
                className: (0, B.A)(ne().SectionDesc, c.SectionDesc),
                children: l("#YIR_Spider_Desc", e.GetYear()),
              }),
              (0, t.jsx)("div", {
                className: ne().GraphBox,
                children: (0, t.jsx)(mr.u, {
                  className: ne().SpiderResponsiveContainer,
                  children: (0, t.jsxs)(Wa.V, {
                    cx: "50%",
                    cy: "50%",
                    outerRadius: "70%",
                    data: f,
                    children: [
                      (0, t.jsx)(Ca.z, {}),
                      (0, t.jsx)(Ra.r, {
                        tick: (0, t.jsx)(Xa, {}),
                        dataKey: "subject",
                      }),
                      (0, t.jsx)(ka.V, {
                        name: "tempRadar",
                        dataKey: "A",
                        stroke: "#8884d8",
                        fill: "#8884d8",
                        fillOpacity: 1,
                        animationDuration: 2e3,
                        isAnimationActive: !0,
                      }),
                    ],
                  }),
                }),
              }),
              (m || d) &&
                (0, t.jsxs)("ol", {
                  className: ne().RadarChartLegend,
                  children: [" ", w, " "],
                }),
            ],
          });
        }
        function Xa(s) {
          const { payload: e, x: r, verticalAnchor: i, ...l } = s,
            c = (0, Pn.Ae)(),
            m = window.innerWidth <= 300;
          return c || m
            ? (0, t.jsx)("text", {
                x: r,
                ...l,
                children: (0, t.jsx)("tspan", {
                  x: r,
                  dy: "20px",
                  children: e.index + 1,
                }),
              })
            : (0, t.jsx)("svg", {
                x: r - 85,
                ...l,
                width: "170px",
                height: "100%",
                children: (0, t.jsx)("foreignObject", {
                  className: ne().RadarTextContainer,
                  dy: "20px",
                  width: "170",
                  height: "150",
                  children: (0, t.jsx)("div", {
                    className: ne().RadarText,
                    children: e.value,
                  }),
                }),
              });
        }
        function $a(s) {
          let e = s.GetRawStats().playtime_stats?.by_numbers;
          return e
            ? [
                ["#YIR_ByTheNum_Friends", e.friends_added || 0],
                ["#YIR_ByTheNum_GiftsSent", e.gifts_sent || 0],
                ["#YIR_ByTheNum_AwardsGiven", e.loyalty_reactions || 0],
                ["#YIR_ByTheNum_Badges", e.badges_earned || 0],
                ["#YIR_ByTheNum_Screenshots", e.screenshots_shared || 0],
                ["#YIR_ByTheNum_Reviews", e.written_reviews || 0],
                ["#YIR_ByTheNum_Posts", e.forum_posts || 0],
                ["#YIR_ByTheNum_Guides", e.guides_submitted || 0],
                ["#YIR_ByTheNum_GuideSubs", e.guide_subscribers || 0],
                ["#YIR_ByTheNum_Workshops", e.workshop_contributions || 0],
                [
                  "#YIR_ByTheNum_WorkshopSubscribers",
                  e.workshop_subscribers || 0,
                ],
                [
                  "#YIR_ByTheNum_WorkshopSubscriptions",
                  e.workshop_subscriptions || 0,
                ],
              ].sort((i, l) => l[1] - i[1])
            : [];
        }
        function qa(s) {
          const { userYearInReview: e } = s;
          let r = $a(e);
          if (r.length == 0) return null;
          let i = r.map(([l, c]) =>
            (0, t.jsx)(ei, { label: (0, y.we)(l), value: c }, l),
          );
          return (0, t.jsxs)("div", {
            className: (0, B.A)(ne().NumbersContainer, ne().HalfwidthColumn),
            children: [
              (0, t.jsx)("div", {
                className: ne().SectionLabel,
                children: (0, y.we)("#YIR_ByTheNum_Title"),
              }),
              (0, t.jsx)("div", {
                className: ne().NumbersRowsCnt,
                children: i,
              }),
            ],
          });
        }
        function ei(s) {
          let { label: e, value: r } = s,
            i = r ? (0, Ln.D)(r) : "-";
          return (0, t.jsxs)("div", {
            className: (0, B.A)(ne().NumbersRow, r == 0 && ne().Disabled),
            children: [
              (0, t.jsx)("div", { className: ne().NumbersLabel, children: e }),
              (0, t.jsx)("div", { className: ne().FillerDots }),
              (0, t.jsx)("div", { className: ne().NumbersValue, children: i }),
            ],
          });
        }
        class nr {
          m_SteamInterface;
          async LoadFriendsSharedYearInReview(e, r) {
            const i = Q.w.Init(Ze),
              l = Ot.b.InitFromAccountID(e);
            i.Body().set_year(r),
              i.Body().set_steamid(l.ConvertTo64BitString()),
              i.Body().set_return_private(x.iA.is_support);
            const c = await zt.GetFriendsSharedYearInReview(
              this.m_SteamInterface.GetServiceTransport(),
              i,
            );
            if (c.GetEResult() != Zt.R)
              throw "error friend sharing information " + c.GetEResult();
            const { friend_shares: m } = c.Body().toObject();
            if (!m) return [];
            const d = [];
            for (const p of m)
              if (p.steamid) {
                const {
                  steamid: f,
                  privacy_override: w,
                  privacy_state: N,
                  rt_privacy_updated: L,
                } = p;
                d.push({
                  steamid: f,
                  privacy_state: N ?? 0,
                  rt_privacy_updated: L ?? 0,
                  privacy_override: !!w,
                });
              }
            return d;
          }
          static s_Singleton;
          static Get() {
            return (
              nr.s_Singleton ||
                ((nr.s_Singleton = new nr()), nr.s_Singleton.Init()),
              nr.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, Br.P)();
          }
        }
        function ti(s, e) {
          return (0, er.I)({
            queryKey: ["SharedFriendYearInReviews", s, e],
            queryFn: () => nr.Get().LoadFriendsSharedYearInReview(s, e),
          });
        }
        var ri = o(59490),
          rn = o(90405),
          Xt = o(5751),
          ni = o(4874),
          ar = o(24660);
        function ai(s) {
          const { userYearInReview: e } = s;
          return x.iA.is_support || x.iA.accountid == e.GetAccountID()
            ? (0, t.jsxs)(rn.K, {
                rootMargin: "0px 0px 100% 0px",
                children: [
                  (0, t.jsx)(ii, {
                    accountID: e.GetAccountID(),
                    year: e.GetYear(),
                  }),
                  (0, t.jsx)(si, {
                    accountID: e.GetAccountID(),
                    year: e.GetYear(),
                  }),
                ],
              })
            : null;
        }
        function ii(s) {
          const { accountID: e, year: r } = s,
            i = (0, h.useMemo)(
              () => Ot.b.InitFromAccountID(e).ConvertTo64BitString(),
              [e],
            ),
            l = (0, ni.N0)(i, !0);
          if (
            l.isLoading ||
            l.data?.is_not_member_of_any_group() ||
            !l.data?.family_group()
          )
            return null;
          const c = l.data
            .family_group()
            .members()
            .map((m) => new Ot.b(m.steamid()))
            .filter((m) => m.GetAccountID() != e);
          return c.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: Xt.FriendsSharedSection,
                children: [
                  (0, t.jsx)("div", {
                    className: Xt.FriendsSharedSectionTitle,
                    children: (0, y.we)("#YIR_FamilyShared"),
                  }),
                  (0, t.jsx)("div", {
                    className: Xt.FriendsGrid,
                    children: c.map((m) =>
                      (0, t.jsx)(
                        En,
                        {
                          strSteamid: m.ConvertTo64BitString(),
                          year: r,
                          ePrivacy: T,
                          bPrivacyOverride: !1,
                        },
                        "family_" + m,
                      ),
                    ),
                  }),
                ],
              });
        }
        const Dn = 50;
        function si(s) {
          const { accountID: e, year: r } = s,
            { isLoading: i, data: l } = ti(e, r),
            c = (0, h.useMemo)(
              () =>
                l
                  ? [...l]
                      .sort(
                        (f, w) =>
                          (w.rt_privacy_updated ?? 0) -
                          (f.rt_privacy_updated ?? 0),
                      )
                      .slice(0, Dn)
                  : [],
              [l],
            ),
            m = (0, h.useMemo)(
              () => c.map((f) => new Ot.b(f.steamid).GetAccountID()),
              [c],
            ),
            d = (0, yn.B3)(m);
          if (i || m?.length == 0 || !d) return null;
          const p = new Map();
          for (const f of d)
            !f || !f.steamid || p.set(f.steamid, f.persona_name ?? "");
          return (
            c.sort((f, w) => p.get(f.steamid).localeCompare(p.get(w.steamid))),
            (0, t.jsxs)("div", {
              className: Xt.FriendsSharedSection,
              children: [
                (0, t.jsx)("div", {
                  className: Xt.FriendsSharedSectionTitle,
                  children: (0, y.we)("#YIR_FriendShared"),
                }),
                (0, t.jsx)(Ct.Z, {
                  className: Xt.FriendsGrid,
                  "flow-children": "grid",
                  children: c
                    .slice(0, Dn)
                    .map((f) =>
                      (0, t.jsx)(
                        En,
                        {
                          strSteamid: f.steamid,
                          ePrivacy: f.privacy_state,
                          year: r,
                          bPrivacyOverride: f.privacy_override,
                        },
                        "friendshare_" + f.steamid + "_" + r,
                      ),
                    ),
                }),
                !!x.iA.is_support &&
                  (0, t.jsx)("div", {
                    className: Bn.ValveOnlyBackground,
                    children: (0, y.we)("#YIR_FriendShared_support"),
                  }),
              ],
            })
          );
        }
        function En(s) {
          const { strSteamid: e, year: r, ePrivacy: i } = s,
            l = new Ot.b(e),
            c = Ke();
          return (0, t.jsx)(ar.Ii, {
            href: `${x.TS.STORE_BASE_URL}replay/${l.ConvertTo64BitString()}/${r}`,
            className: (0, B.A)({
              [Xt.IsPrivate]: i == g,
              [Xt.FriendCtn]: !0,
              [c.FriendCtn]: !0,
            }),
            children: (0, t.jsx)(ri.p, {
              accountID: l.GetAccountID(),
              bHideWhenNotAvailable: !0,
              bLink: !1,
            }),
          });
        }
        var oi = o(9519),
          li = o(40216),
          $t = o.n(li),
          Er = o(58861),
          On = o(93340);
        const Ht = 100;
        var ci = ((s) => (
          (s.windows = "windows"),
          (s.linux = "linux"),
          (s.deck = "deck"),
          (s.mac = "mac"),
          (s.vr = "vr"),
          s
        ))(ci || {});
        function mi(s) {
          const { userYearInReview: e } = s,
            r = e.GetPlayTimeStats(),
            i = r.total_stats,
            l = r.game_summary,
            c = pt(),
            m = Ke(),
            d = (0, h.useMemo)(() => {
              const w = new Array();
              return (
                typeof i.windows_playtime_percentagex100 == "number" &&
                  i.windows_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "windows",
                    name: (0, y.we)("#YIR_Platfrom_windows"),
                    value: i.windows_playtime_percentagex100,
                  }),
                typeof i.linux_playtime_percentagex100 == "number" &&
                  i.linux_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "linux",
                    name: (0, y.we)("#YIR_Platfrom_linux"),
                    value: i.linux_playtime_percentagex100,
                  }),
                typeof i.macos_playtime_percentagex100 == "number" &&
                  i.macos_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "mac",
                    name: (0, y.we)("#YIR_Platfrom_macos"),
                    value: i.macos_playtime_percentagex100,
                  }),
                typeof i.vr_playtime_percentagex100 == "number" &&
                  i.vr_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "vr",
                    name: (0, y.we)("#YIR_Platfrom_vr"),
                    value: i.vr_playtime_percentagex100,
                  }),
                typeof i.deck_playtime_percentagex100 == "number" &&
                  i.deck_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "deck",
                    name: (0, y.we)("#YIR_Platfrom_deck"),
                    value: i.deck_playtime_percentagex100,
                  }),
                w
              );
            }, [i]),
            p = (0, h.useMemo)(() => {
              const w = new Array();
              return (
                typeof i.windows_playtime_percentagex100 == "number" &&
                  i.windows_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "windows",
                    name: (0, y.we)("#YIR_Platfrom_windows"),
                    value: l.filter((N) => N.played_windows).length,
                  }),
                typeof i.linux_playtime_percentagex100 == "number" &&
                  i.linux_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "linux",
                    name: (0, y.we)("#YIR_Platfrom_linux"),
                    value: l.filter((N) => N.played_linux).length,
                  }),
                typeof i.macos_playtime_percentagex100 == "number" &&
                  i.macos_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "mac",
                    name: (0, y.we)("#YIR_Platfrom_macos"),
                    value: l.filter((N) => N.played_mac).length,
                  }),
                typeof i.vr_playtime_percentagex100 == "number" &&
                  i.vr_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "vr",
                    name: (0, y.we)("#YIR_Platfrom_vr"),
                    value: l.filter((N) => N.played_vr).length,
                  }),
                typeof i.deck_playtime_percentagex100 == "number" &&
                  i.deck_playtime_percentagex100 > Ht &&
                  w.push({
                    id: "deck",
                    name: (0, y.we)("#YIR_Platfrom_deck"),
                    value: l.filter((N) => N.played_deck).length,
                  }),
                w
              );
            }, [i, l]);
          if (d.length < 2) return null;
          const f = _n(i);
          return (0, t.jsx)(Nt, {
            className: (0, B.A)(ot().PlatformChartsCtn, m.PlatformChartsCtn),
            children: (0, t.jsxs)("div", {
              className: (0, B.A)(
                v().YearInReviewContent,
                ot().PlatformSpacing,
              ),
              children: [
                (0, t.jsx)("div", {
                  className: v().SectionTitle,
                  children: c("#YIR_Platform"),
                }),
                (0, t.jsxs)("div", {
                  className: ot().PlatformChartsRow,
                  children: [
                    (0, t.jsxs)("div", {
                      className: ot().PieCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: ot().GraphTitle,
                          children: (0, y.we)("#YIR_Platfrom_playtime"),
                        }),
                        (0, t.jsx)(mr.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, t.jsxs)(qr.r, {
                            children: [
                              (0, t.jsx)(en.F, {
                                data: d,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#8884d8",
                                paddingAngle: 1,
                                children: d.map((w, N) =>
                                  (0, t.jsx)(
                                    wr.f,
                                    { fill: m[`pie_${w.id}`] },
                                    `cell-${N}`,
                                  ),
                                ),
                              }),
                              (0, t.jsx)(Er.m, {
                                content: (w) =>
                                  (0, t.jsx)(di, {
                                    active: w.active,
                                    payload: w.payload,
                                  }),
                              }),
                              (0, t.jsx)(On.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: ot().PieCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: ot().GraphTitle,
                          children: (0, y.we)("#YIR_Platfrom_games"),
                        }),
                        (0, t.jsx)(mr.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, t.jsxs)(qr.r, {
                            children: [
                              (0, t.jsx)(en.F, {
                                data: p,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#82ca9d",
                                paddingAngle: 1,
                                children: p.map((w, N) =>
                                  (0, t.jsx)(
                                    wr.f,
                                    { fill: m[`pie_${w.id}`] },
                                    `cell-${N}`,
                                  ),
                                ),
                              }),
                              (0, t.jsx)(Er.m, {
                                content: (w) =>
                                  (0, t.jsx)(ui, {
                                    active: w.active,
                                    payload: w.payload,
                                  }),
                              }),
                              (0, t.jsx)(On.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (f.bDeck || f.bVR) &&
                  (0, t.jsx)("div", {
                    className: (0, B.A)(
                      v().SectionTitle,
                      ot().PlatformDetailsSetup,
                    ),
                    children: c("#YIR_Platform_DiveIn"),
                  }),
              ],
            }),
          });
        }
        function di(s) {
          const { active: e, payload: r } = s;
          if (e && r && r.length) {
            const i = r[0].value;
            return (0, t.jsxs)(Jt.t1, {
              children: [
                r[0].name,
                ": ",
                (0, y.we)("#YIR_Percent_Playtime", At(i)),
              ],
            });
          }
          return null;
        }
        function ui(s) {
          const { active: e, payload: r } = s;
          if (e && r && r.length) {
            const i = r[0].value,
              l = r[0].name;
            return (0, t.jsx)(Jt.t1, {
              children: (0, y.E3)(
                "#YIR_Platfrom_gamesplays_tooltip",
                i,
                (0, Bt.Dq)(i),
                l,
              ),
            });
          }
          return null;
        }
        const Or = 100;
        function gi(s) {
          const { userYearInReview: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(mi, { userYearInReview: e }),
              (0, t.jsx)(hi, { userYearInReview: e }),
            ],
          });
        }
        function fi(s) {
          const { userYearInReview: e, strClassName: r, nYear: i } = s,
            l = e.GetRawStats(),
            c = pt(),
            m = void 0,
            d = c("#YIR_TopGames_deck_subtitle"),
            {
              nTotalGames: p,
              nTotalSessions: f,
              nTotalPercentage: w,
            } = (0, h.useMemo)(() => vt(l, "deck"), [l]),
            { rgResults: N } = (0, h.useMemo)(() => A(e, "deck", 5, w), [e, w]),
            L = Number(Math.round(w / 100).toFixed(0));
          let W = c("#YIR_TopGames_deck_new");
          L > 50 && (W = c("#YIR_TopGames_deck_mostly"));
          const R = (0, h.useRef)(null),
            ce = (0, Lr.wY)((lt) => {
              R.current &&
                R.current.style.setProperty(
                  "--contentSize",
                  `${lt.contentRect.width}px`,
                );
            }),
            [De, Qe] = h.useState(!1),
            ft = h.useCallback((lt) => {
              lt && Qe(!0);
            }, []),
            wt = (0, t.jsx)(dr, {
              endValue: p,
              duration: 2e3,
              startAnimation: De,
            }),
            Ee = (0, t.jsx)(dr, {
              endValue: f,
              duration: 2e3,
              startAnimation: De,
            }),
            qe = (0, h.useRef)(null);
          return (
            (0, oi.q)(qe),
            (0, t.jsxs)("div", {
              className: (0, B.A)(
                r,
                Le().PlatformContentsCtn,
                $t().DeckContainer,
              ),
              ref: R,
              children: [
                (0, t.jsx)("div", {
                  className: (0, B.A)(Le().SectionTitle, $t().SectionTitle),
                  children: W,
                }),
                (0, t.jsxs)("div", {
                  className: $t().ScreenContainer,
                  ref: ce,
                  children: [
                    (0, t.jsxs)("div", {
                      className: $t().PlatformDataContainer,
                      children: [
                        (0, t.jsxs)(xr.J, {
                          onVisibilityChange: ft,
                          className: (0, B.A)(
                            v().YearInReviewContent,
                            Le().StatsRow,
                            $t().StatsRow,
                          ),
                          children: [
                            (0, t.jsxs)("div", {
                              className: Le().StatBlock,
                              children: [
                                (0, t.jsx)("div", {
                                  className: Le().BigNum,
                                  children: wt,
                                }),
                                (0, t.jsx)("div", {
                                  className: Le().StatDescription,
                                  children: (0, y.Yp)("#YIR_NewLine_Games", p),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: Le().StatBlock,
                              children: [
                                (0, t.jsx)("div", {
                                  className: Le().BigNum,
                                  children: Ee,
                                }),
                                (0, t.jsx)("div", {
                                  className: Le().StatDescription,
                                  children: (0, y.Yp)(
                                    "#YIR_NewLine_Session",
                                    f,
                                  ),
                                }),
                              ],
                            }),
                            (0, t.jsx)(In, {
                              percentVal: w,
                              subToken: "#YIR_NewLine",
                            }),
                          ],
                        }),
                        !!m &&
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              Le().SectionSubTitle,
                              $t().SectionSubTitle,
                            ),
                            children: m,
                          }),
                        (0, t.jsx)(Nt, {
                          className: ot().SteamDeckGameCapRow,
                          children: (0, t.jsx)(jn, {
                            rgGamePercentages: N,
                            category: "deck",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("video", {
                      className: $t().Video,
                      poster:
                        "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg",
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                      ref: qe,
                      children: [
                        (0, t.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm",
                          type: "video/webm",
                        }),
                        (0, t.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4",
                          type: "video/mp4",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: (0, B.A)(Le().Disclaimer, $t().Disclaimer),
                  children: d,
                }),
              ],
            })
          );
        }
        function _n(s) {
          return {
            bDeck:
              typeof s.deck_playtime_percentagex100 == "number" &&
              s.deck_playtime_percentagex100 > Or,
            bVR:
              typeof s.vr_playtime_percentagex100 == "number" &&
              s.vr_playtime_percentagex100 > Or,
          };
        }
        function hi(s) {
          const { userYearInReview: e } = s,
            r = e.GetYear(),
            i = pt(),
            l = e.GetPlayTimeStats().total_stats,
            c =
              l.controller_playtime_percentagex100 +
              l.deck_playtime_percentagex100;
          let m = !1;
          c > 7e3 && (m = !0);
          const d = _n(l);
          return (0, t.jsxs)(rn.K, {
            rootMargin: "0px 0px 100% 0px",
            children: [
              !!d.bDeck &&
                (0, t.jsx)(Nt, {
                  className: (0, B.A)(Le().Section, Le().Deck),
                  children: (0, t.jsx)(fi, { userYearInReview: e, nYear: r }),
                }),
              !!d.bVR &&
                (0, t.jsx)(Nt, {
                  className: (0, B.A)(Le().Section, Le().VR),
                  children: (0, t.jsx)(Dr, {
                    category: "vr",
                    userYearInReview: e,
                    bgImageURL: `${x.TS.IMG_URL}yearinreview/vr_background6.webp`,
                    title: i("#YIR_TopGames_vr"),
                    subTitle: void 0,
                  }),
                }),
              c > 1e3 &&
                (0, t.jsx)(Nt, {
                  className: (0, B.A)(Le().Section, Le().Controller),
                  children: (0, t.jsx)(Dr, {
                    category: "controller",
                    userYearInReview: e,
                    title: i(
                      m
                        ? "#YIR_TopGames_controllerMost"
                        : "#YIR_TopGames_controller",
                      At(c),
                    ),
                    subTitle: i(
                      "#YIR_Platform_subtitle_controller",
                      (0, y.we)("#YIR_Platfrom_controller_forsubtitle"),
                    ),
                  }),
                }),
              r >= 2024 &&
                (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)(pi, { userYearInReview: e }),
                }),
            ],
          });
        }
        function pi(s) {
          const { userYearInReview: e } = s,
            r = pt(),
            [i, l] = (0, h.useMemo)(
              () => [
                e
                  .GetDemoByPlaytime()
                  .filter(Boolean)
                  .map((c) => c.total_playtime_percentagex100)
                  .reduce((c, m) => c + m, 0),
                e
                  .GetPlaytestByPlaytime()
                  .filter(Boolean)
                  .map((c) => c.total_playtime_percentagex100)
                  .reduce((c, m) => c + m, 0),
              ],
              [e],
            );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              i > Or &&
                (0, t.jsxs)(Nt, {
                  className: (0, B.A)(Le().Section, Le().Demo),
                  children: [
                    (0, t.jsx)("div", { className: Le().BG_Demo }),
                    (0, t.jsx)(Dr, {
                      category: "demo",
                      userYearInReview: e,
                      title: r("#YIR_TopGames_demo"),
                      subTitleTokenIfMax: "#YIR_TopGames_demoMax",
                    }),
                  ],
                }),
              l > Or &&
                (0, t.jsxs)(Nt, {
                  className: (0, B.A)(Le().Section, Le().Playtest),
                  children: [
                    (0, t.jsx)("div", { className: Le().BG_Playtest }),
                    (0, t.jsx)(Dr, {
                      category: "playtest",
                      userYearInReview: e,
                      title: r("#YIR_TopGames_playtest"),
                      subTitleTokenIfMax: "#YIR_TopGames_playtestMax",
                    }),
                  ],
                }),
            ],
          });
        }
        var vi = o(11498),
          xt = o.n(vi);
        function yi(s) {
          const { userYearInReview: e } = s;
          if (x.iA.country_code.toLowerCase() === "cn") return null;
          const r = e.GetPlayTimeStats().playtime_streak;
          return !r ||
            (typeof r.longest_consecutive_days == "number" &&
              r.longest_consecutive_days < 5)
            ? null
            : (0, t.jsx)(Bi, { ...s, longestStreak: r });
        }
        function Bi(s) {
          const { userYearInReview: e, longestStreak: r } = s,
            i = pt(),
            l = or(),
            c = Ke(),
            [m, d] = h.useState(!1),
            p = h.useCallback((Ee) => {
              Ee && d(!0);
            }, []),
            [f, w] = h.useState(!1),
            N = h.useCallback((Ee) => {
              Ee &&
                window.setTimeout(() => {
                  w(!0);
                }, 30);
            }, []),
            [L, W] = h.useState(!1),
            R = 12,
            ce = r.streak_games.length > R && !L,
            De = ce
              ? r.streak_games.sort((Ee, qe) => Ee.appid - qe.appid).slice(0, R)
              : r.streak_games.sort((Ee, qe) => Ee.appid - qe.appid),
            Qe = De.map((Ee) => Ee.appid),
            ft = r.streak_games.length,
            wt = r.longest_consecutive_days ?? 0;
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              ot().StreakCtn,
              xt().StreakCtn,
              xt().Section,
              c.Section,
            ),
            children: [
              (0, t.jsx)("div", {
                className: (0, B.A)(
                  xt().LongestStreakBgImage,
                  c.LongestStreakBgImage,
                ),
              }),
              (0, t.jsxs)("div", {
                className: v().YearInReviewContent,
                children: [
                  (0, t.jsxs)("div", {
                    className: xt().SectionTitle,
                    children: [
                      (0, t.jsx)(xr.J, {
                        className: xt().LongestStreakDailyCount,
                        onVisibilityChange: p,
                        children: i(
                          "#YIR_Longest_Streak_Title",
                          (0, t.jsx)(dr, {
                            className: xt().LongestStreakNumber,
                            endValue: wt,
                            duration: 2e3,
                            startAnimation: m,
                          }),
                        ),
                      }),
                      (0, t.jsxs)(Nt, {
                        className: xt().StreakBarCtn,
                        children: [
                          (0, t.jsx)("div", { className: xt().StreakSizeCtn }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              xt().StreakSizeFullBar,
                              c.StreakSizeFullBar,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)({
                              [xt().StreakTickCtn]: !0,
                              [xt().LargerTicks]: wt < 40,
                            }),
                            children: (0, t.jsx)(xi, { nDays: wt - 1 }),
                          }),
                          (0, t.jsx)("div", { className: xt().StreakSizeCtn }),
                        ],
                      }),
                      (0, t.jsxs)(Nt, {
                        className: xt().StreakDates,
                        children: [
                          (0, t.jsx)("div", {
                            className: xt().StreakStart,
                            children: (0, y.TW)(r.rtime_start ?? 0, l),
                          }),
                          (0, t.jsx)("div", {
                            className: xt().StreakEnd,
                            children: (0, y.TW)(
                              (r.rtime_start ?? 0) + wt * 24 * 60 * 60,
                              l,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)(xr.J, {
                    onVisibilityChange: N,
                    className: (0, B.A)(
                      ot().LongestStreakGamesWrapper,
                      xt().LongestStreakGamesWrapper,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, B.A)(
                          xt().CapRowTitle,
                          f && xt().AnimateTitle,
                        ),
                        children: i(
                          ft > 1
                            ? "#YIR_Longest_Streak_Games"
                            : "#YIR_Longest_Streak_Games_Singular",
                          (0, Ln.D)(ft),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: (0, B.A)(xt().CapRowCtn),
                        children: (0, t.jsx)(Ct.Z, {
                          "flow-children": "grid",
                          className: (0, B.A)(
                            ot().CapRow,
                            ot().LongestStreak,
                            f && ot().AnimateCap,
                          ),
                          children: De.map((Ee, qe) => {
                            const lt = e.GetGameSummaryForApp(Ee.appid);
                            return (0, t.jsx)(
                              Fr,
                              {
                                appid: Ee.appid,
                                index: qe,
                                loading: "lazy",
                                rgAppIDs: Qe,
                                nParentAppID: lt?.parent_appid,
                                eChildType: bi(lt),
                              },
                              "longest_" + Ee.appid,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  ce &&
                    (0, t.jsx)("div", {
                      className: ot().MoreButtonContainer,
                      children: (0, t.jsx)("a", {
                        href: "#",
                        className: ot().ShowMoreBtn,
                        onClick: () => W(!0),
                        children: (0, y.we)("#YIR_ShowMore"),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function bi(s) {
          if (s?.demo) return jt.uE.ue;
          if (s?.playtest) return jt.uE.Vi;
        }
        function xi(s) {
          const { nDays: e } = s,
            r = [];
          if (e > 0) {
            for (let i = 0; i < e + 2; ++i)
              r.push(
                (0, t.jsx)(
                  "div",
                  { className: xt().Tick },
                  "DrawNDivForStreakDays" + i,
                ),
              );
            return (0, t.jsx)(t.Fragment, { children: r });
          }
          return null;
        }
        var _r = o(1946);
        function wi(s) {
          const { steamId: e, year: r } = s,
            i = Ke(),
            { rgOtherYears: l } = C(),
            c = pt();
          return l.length === 0
            ? null
            : (0, t.jsxs)("div", {
                className: _r.OtherYearsCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: (0, B.A)(
                      _r.OtherYearsHeader,
                      i.OtherYearsHeader,
                    ),
                    children: c("#YearInReview_OtherYearLinks_Header"),
                  }),
                  (0, t.jsx)("div", {
                    className: (0, B.A)(_r.OtherYearLinks, i.OtherYearLinks),
                    children: l.map((m) =>
                      (0, t.jsx)(
                        ar.Ii,
                        {
                          href: `${x.TS.STORE_BASE_URL}replay/${e.ConvertTo64BitString()}/${m}?src=${Se}`,
                          className: (0, B.A)(
                            _r.OtherYearLink,
                            i.OtherYearLink,
                          ),
                          children: m,
                        },
                        m,
                      ),
                    ),
                  }),
                ],
              });
        }
        var G = o(60197),
          kt = o.n(G),
          ji = o(88003),
          Mi = o(24806),
          nn = o(99412),
          Ii = o(96538);
        const Sn = "0123456789abcdef",
          zn = "bcdfghjkmnpqrtvw";
        function Wn(s, e, r) {
          return Array.from(s, (i) => {
            const l = e.indexOf(i);
            return l >= 0 ? r[l] : i;
          }).join("");
        }
        function Ai(s) {
          return s ? Wn(s.toString(16), Sn, zn) : "";
        }
        function no(s) {
          const e = Wn(s.toLowerCase(), zn, Sn).replace(/[^0-9a-f]/g, "");
          return e ? parseInt(e, 16) : 0;
        }
        class ir {
          m_SteamInterface;
          get SteamInterface() {
            return this.m_SteamInterface;
          }
          async GetLoadSocialImages(e, r, i) {
            const l = Q.w.Init(st);
            l.Body().set_steamid(e),
              l.Body().set_year(r),
              l.Body().set_language(i);
            const c = await zt.GetUserYearInReviewShareImage(
              this.m_SteamInterface.GetServiceTransport(),
              l,
            );
            if (c.GetEResult() != Zt.R)
              throw `Load social images failed: ${c.GetErrorMessage()}`;
            return c.Body().toObject().images ?? [];
          }
          static s_Singleton;
          static Get() {
            return (
              ir.s_Singleton ||
                ((ir.s_Singleton = new ir()), ir.s_Singleton.Init()),
              ir.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, Br.P)();
          }
        }
        const Ti = "yir_social_images";
        function Ni(s, e, r) {
          return (0, er.I)({
            queryKey: [Ti, s, e, r],
            queryFn: () => ir.Get().GetLoadSocialImages(s, e, r),
          });
        }
        var Pi = o(91085),
          ur = o(41672);
        function Cn(s) {
          const { userYearInReview: e, steamId: r, nYear: i } = s,
            l = hr(),
            c = Ke();
          if (!x.iA.logged_in) return null;
          if (!l && x.iA.logged_in)
            return (0, t.jsx)(ar.Ii, {
              className: (0, B.A)(G.SeeRewindButton, c.SeeRewindButton),
              href: `${x.TS.STORE_BASE_URL}replay/${x.iA.steamid}/${i}?src=${Y}`,
              children: (0, y.we)("#YIR_SeeYourRewind"),
            });
          const m = () => {
            (0, ji.pg)(
              (0, t.jsx)(Ei, { userYearInReview: e, steamId: r, nYear: i }),
              window,
              { strTitle: (0, y.we)("#Button_Share") },
            );
          };
          return (0, t.jsxs)(Ct.Z, {
            className: G.YIRShareCtn,
            children: [
              (0, t.jsx)(Rn, { userYearInReview: e, steamId: r, nYear: i }),
              (0, t.jsxs)(Ct.Z, {
                className: G.ShareButton,
                onActivate: m,
                children: [
                  (0, t.jsx)(Mt.SYj, { className: (0, B.A)(G.ShareIcon) }),
                  (0, t.jsx)("span", {
                    className: (0, B.A)(G.ShareText),
                    children: (0, y.we)("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
        function Rn(s) {
          const { userYearInReview: e, steamId: r, nYear: i } = s,
            [l, c] = (0, h.useState)(""),
            m = (0, Nr.q3)(() => e.GetPrivacyState()),
            d = (0, Nr.q3)(() => e.GetPrivacyState()),
            p = (0, h.useMemo)(() => d === T || d === $, [d]),
            f = [
              { data: g, label: (0, y.we)("#YIR_ShareVisbility_Private") },
              { data: $, label: (0, y.we)("#YIR_ShareVisbility_FriendsOnly") },
              { data: T, label: (0, y.we)("#YIR_ShareVisbility_Public") },
            ],
            w = async (N) => {
              if (N.data !== m) {
                const L = await ma(r.ConvertTo64BitString(), i, N.data);
                L.privacy_state !== void 0
                  ? e.SetPrivacyState(L.privacy_state)
                  : L.error && c(L.error);
              }
            };
          return (0, t.jsxs)(Ct.Z, {
            "flow-children": "column",
            children: [
              (0, t.jsx)("div", {
                className: (0, B.A)(G.PrivacyWarning, p ? G.Visible : ""),
                children: p
                  ? (0, y.we)("#YIR_ShareVisbility")
                  : (0, y.we)("#YIR_ShareModal_DisabledShareTtp"),
              }),
              (0, t.jsx)("div", {
                className: G.DropDownSizer,
                children: (0, t.jsx)(Vr.ZU, {
                  strDropDownButtonClassName: G.DropdownButton,
                  strDropDownClassName: G.DropdownOption,
                  rgOptions: f,
                  selectedOption: m,
                  onChange: w,
                }),
              }),
              l && (0, t.jsx)("div", { className: G.Error, children: l }),
            ],
          });
        }
        function Li(s) {
          return `y${s % 100}`;
        }
        const Di = "l";
        function Ei(s) {
          const {
              closeModal: e,
              userYearInReview: r,
              steamId: i,
              nYear: l,
            } = s,
            [c, m] = (0, h.useState)(),
            d = (0, Nr.q3)(() => r.GetPrivacyState()),
            p = (0, h.useMemo)(() => d === T || d === $, [d]),
            [f, w] = (0, h.useState)((0, nn.sfN)(x.TS.LANGUAGE)),
            N = (0, h.useMemo)(() => (0, nn.LgB)(f), [f]),
            L = Ai(i.GetAccountID()),
            W = `https://s.team/${Li(l)}/${L}`,
            R = (0, h.useMemo)(() => {
              const De = new URL(W);
              return De.searchParams.set(Di, N), De.href;
            }, [N, W]),
            ce = () => {
              m(!0);
            };
          return c
            ? (0, t.jsx)(Pi.J, { eventLink: R, closeModal: e })
            : (0, t.jsx)(Ii.o0, {
                strDescription: "",
                strTitle: (0, y.we)("#YIR_ShareModal_Title"),
                onCancel: e,
                onOK: e,
                bAlertDialog: !0,
                modalClassName: G.ShareModalDialogCtn,
                children: (0, t.jsxs)("div", {
                  className: G.ShareModal,
                  children: [
                    (0, t.jsx)("div", {
                      className: G.ShareLanguagePicker,
                      children: (0, t.jsx)("div", {
                        className: G.LangaugeDropdown,
                        children: (0, t.jsx)(Mi.Ng, {
                          selectedLang: f,
                          fnOnLanguageChanged: w,
                          fnFilterLanguage: (De) => De !== nn.X51,
                        }),
                      }),
                    }),
                    (0, t.jsx)(Oi, {
                      language: N,
                      steamId: i,
                      nYear: l,
                      shareUrl: R,
                    }),
                    (0, t.jsxs)("div", {
                      className: G.FooterCtn,
                      children: [
                        (0, t.jsx)(Rn, {
                          userYearInReview: r,
                          steamId: i,
                          nYear: l,
                        }),
                        (0, t.jsx)("div", {
                          className: (0, B.A)(G.VisBorder, !p && G.Disabled),
                          children: x.TS.IN_MOBILE_WEBVIEW
                            ? (0, t.jsx)(Ci, {
                                bCanShare: p,
                                shareUrl: R,
                                shareOnSteamActivityFeed: ce,
                              })
                            : (0, t.jsx)(Wi, {
                                nYear: l,
                                bCanShare: p,
                                shareUrl: R,
                                shortAccountCode: L,
                                language: N,
                                shareOnSteamActivityFeed: ce,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function Oi(s) {
          const { language: e, steamId: r, nYear: i, shareUrl: l } = s,
            [c, m] = (0, h.useState)(0),
            [d, p] = (0, h.useState)(!1),
            { isLoading: f, data: w } = Ni(r.ConvertTo64BitString(), i, e),
            N = w ? w.length - 1 : 0,
            L = `${x.TS.BASE_URL_SHARED_CDN}social_sharing/`,
            W = (Qe) => {
              c > 0 && (m(c - 1), Qe.stopPropagation());
            },
            R = (Qe) => {
              c < N && (m(c + 1), Qe.stopPropagation());
            },
            ce = (Qe) => {
              p(!0), Qe.stopPropagation();
            },
            De = (Qe) => {
              p(!1), Qe.stopPropagation();
            };
          return (
            (0, ur.E)("ArrowLeft", W),
            (0, ur.E)("Left", W),
            (0, ur.E)("ArrowRight", R),
            (0, ur.E)("Right", R),
            f
              ? (0, t.jsx)("div", {
                  className: (0, B.A)(G.CarouselCtn, G.LoadingCtn),
                  children: (0, t.jsx)(br.t, { position: "center" }),
                })
              : w
                ? (0, t.jsxs)("div", {
                    className: G.CarouselCtn,
                    children: [
                      d &&
                        (0, t.jsx)(_i, {
                          carouselIndex: c,
                          endPreviewImage: De,
                          onMoveLeft: W,
                          onMoveRight: R,
                          name: w[c].name,
                          url: `${L}${w[c].url_path}`,
                          maxIndex: N,
                        }),
                      (0, t.jsxs)("div", {
                        className: G.ImageArrowCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              G.Arrow,
                              G.Left,
                              c === 0 && G.ArrowDisabled,
                            ),
                            onClick: W,
                            children: (0, t.jsx)(Mt.V5W, { angle: 270 }),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(
                              G.Arrow,
                              G.Right,
                              c === N && G.ArrowDisabled,
                            ),
                            onClick: R,
                            children: (0, t.jsx)(Mt.V5W, { angle: 90 }),
                          }),
                          (0, t.jsxs)("div", {
                            className: G.ImagesCtn,
                            children: [
                              (0, t.jsx)("div", {
                                className: (0, B.A)(G.Peek, G.LeftPeak),
                                children:
                                  c !== 0 &&
                                  (0, t.jsx)("img", {
                                    className: G.PeakImg,
                                    src: `${L}${w[c - 1].url_path}`,
                                  }),
                              }),
                              (0, t.jsx)("div", {
                                className: G.CenterImage,
                                children: (0, t.jsxs)("div", {
                                  className: G.ImgAndPreviewCtn,
                                  children: [
                                    (0, t.jsx)("div", {
                                      onClick: ce,
                                      className: G.PreviewMask,
                                      children: (0, y.we)(
                                        "#YIR_ShareModal_FullscreenPreview",
                                      ),
                                    }),
                                    (0, t.jsx)("img", {
                                      className: G.CenterImg,
                                      src: `${L}${w[c].url_path}`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: (0, B.A)(G.Peek, G.RightPeak),
                                children:
                                  c !== N &&
                                  (0, t.jsx)("img", {
                                    className: G.PeakImg,
                                    src: `${L}${w[c + 1].url_path}`,
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      x.TS.IN_MOBILE_WEBVIEW
                        ? (0, t.jsx)(zi, {
                            imageUrl: `${L}${w[c].url_path}`,
                            shareUrl: l,
                          })
                        : x.TS.IN_CLIENT
                          ? null
                          : (0, t.jsx)(Si, {
                              imageUrl: `${L}${w[c].url_path}`,
                            }),
                      (0, t.jsx)("div", {
                        className: G.CarouselHintCtn,
                        children: w.map((Qe, ft) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: (0, B.A)(
                                G.CarouselHint,
                                ft === c ? G.ActiveHint : null,
                              ),
                            },
                            `${ft}_hint`,
                          ),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: G.FormatHint,
                        children: (0, y.we)(
                          `#YIR_ShareModal_ImageCaption_${w[c].name}`,
                        ),
                      }),
                    ],
                  })
                : (0, t.jsx)("div", {
                    className: (0, B.A)(G.CarouselCtn, G.LoadingCtn),
                    children: (0, t.jsx)("div", {
                      children: (0, y.we)(
                        "#YIR_ShareModal_FailedToGenerateImages",
                      ),
                    }),
                  })
          );
        }
        function _i(s) {
          const {
            carouselIndex: e,
            maxIndex: r,
            onMoveLeft: i,
            onMoveRight: l,
            endPreviewImage: c,
            name: m,
            url: d,
          } = s;
          return (
            (0, ur.E)("Escape", c),
            (0, ur.E)("Esc", c),
            (0, t.jsx)("div", {
              className: G.PreviewImageCtn,
              children: (0, t.jsx)("div", {
                className: G.PreviewClickCtn,
                onClick: c,
                children: (0, t.jsxs)("div", {
                  className: G.PreviewAndIconCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: G.CloseIcon,
                      children: (0, t.jsx)(Mt.sED, {}),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, B.A)(
                        G.Arrow,
                        G.Left,
                        e === 0 && G.ArrowDisabled,
                      ),
                      onClick: i,
                      children: (0, t.jsx)(Mt.V5W, { angle: 270 }),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, B.A)(
                        G.Arrow,
                        G.Right,
                        e === r && G.ArrowDisabled,
                      ),
                      onClick: l,
                      children: (0, t.jsx)(Mt.V5W, { angle: 90 }),
                    }),
                    (0, t.jsx)("img", {
                      className: G[`PreviewImage_${m}`],
                      src: d,
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function Si(s) {
          const e = () => {
            fetch(s.imageUrl)
              .then((r) => r.blob())
              .then((r) => URL.createObjectURL(r))
              .then((r) => {
                const i = document.createElement("a");
                (i.href = r),
                  (i.download = ""),
                  document.body.appendChild(i),
                  i.click(),
                  document.body.removeChild(i);
              });
          };
          return (0, t.jsxs)("div", {
            className: G.InteractButton,
            onClick: e,
            children: [
              (0, t.jsx)(Mt.MQO, { className: G.InteractButtonIcon }),
              (0, t.jsx)("span", {
                className: (0, B.A)(G.InteractButtonText),
                children: (0, y.we)("#YIR_ShareModal_SaveImage"),
              }),
            ],
          });
        }
        function zi(s) {
          const { imageUrl: e, shareUrl: r } = s,
            i = () => {
              const l = Reflect.get(window, "ReactNativeWebView");
              if (l?.postMessage) {
                const c = {
                  event_name: "shareimage",
                  link: e,
                  url: e,
                  subject: (0, y.we)("#YIR_ShareModal_MobileSubject"),
                  message: r,
                  title: (0, y.we)("#YIR_ShareModal_MobileMessage"),
                };
                l.postMessage(JSON.stringify(c));
                return;
              }
            };
          return (0, t.jsxs)("div", {
            className: G.InteractButton,
            onClick: i,
            children: [
              (0, t.jsx)(Mt.SYj, { className: G.InteractButtonIcon }),
              (0, t.jsx)("span", {
                className: (0, B.A)(G.InteractButtonText),
                children: (0, y.we)("#YIR_ShareModal_ShareImage"),
              }),
            ],
          });
        }
        function Wi(s) {
          const {
              bCanShare: e,
              shareUrl: r,
              shortAccountCode: i,
              language: l,
              nYear: c,
              shareOnSteamActivityFeed: m,
            } = s,
            [d, p] = (0, h.useState)(!1),
            f = () => {
              navigator.clipboard.writeText(r), p(!0);
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: G.ShareURLTitle,
                children: (0, y.we)("#YIR_ShareModal_YourLink"),
              }),
              (0, t.jsxs)("div", {
                className: G.ShareURLCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: G.ShareShortUrl,
                    children: r,
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, B.A)(G.ShareLinkButton),
                    onClick: f,
                    children: [
                      (0, t.jsx)(Mt.SYj, { className: G.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, B.A)(G.ShareLinkText),
                        children: (0, y.we)(
                          d
                            ? "#YIR_ShareModal_CopyLink_Success"
                            : "#YIR_ShareModal_CopyLink",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, B.A)(G.SocialButtons, G.SteamButtons),
                children: [
                  (0, t.jsxs)("div", {
                    onClick: m,
                    className: (0, B.A)(G.ShareLinkButton, G.FeedBtn),
                    children: [
                      (0, t.jsx)(Mt.Qte, { className: G.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, B.A)(G.ShareLinkText),
                        children: (0, y.we)(
                          "#YIR_ShareModal_ShareOnFriendsActivity",
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("a", {
                    href: `${x.TS.COMMUNITY_BASE_URL}profiles/${x.iA.steamid}/edit/showcases`,
                    className: (0, B.A)(G.ShareLinkButton, G.FeedBtn),
                    children: [
                      (0, t.jsx)(Mt.KJW, { className: G.ShareLinkIcon }),
                      (0, t.jsx)("span", {
                        className: (0, B.A)(G.ShareLinkText),
                        children: (0, y.we)("#YIR_ShareModal_AddShowcase"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Ci(s) {
          const { bCanShare: e, shareUrl: r, shareOnSteamActivityFeed: i } = s,
            l = () => {
              const c = Reflect.get(window, "ReactNativeWebView");
              if (c?.postMessage) {
                const m = {
                  event_name: "share",
                  link: r,
                  url: r,
                  subject: (0, y.we)("#YIR_ShareModal_MobileSubject"),
                  message: (0, y.we)("#YIR_ShareModal_MobileMessage"),
                  title: (0, y.we)("#YIR_ShareModal_MobileMessage"),
                };
                c.postMessage(JSON.stringify(m));
                return;
              }
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: G.MobileCtn,
              children: [
                (0, t.jsxs)("div", {
                  className: (0, B.A)(G.ShareLinkButton, !e && G.Disabled),
                  onClick: l,
                  children: [
                    (0, t.jsx)(Mt.SYj, { className: G.ShareLinkIcon }),
                    (0, t.jsx)("span", {
                      className: (0, B.A)(G.ShareLinkText),
                      children: (0, y.we)("#YIR_ShareModal_ShareLink"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  onClick: i,
                  className: (0, B.A)(G.ShareLinkButton, !e && G.Disabled),
                  children: [
                    (0, t.jsx)(Mt.Qte, { className: G.ShareLinkIcon }),
                    (0, t.jsx)("span", {
                      className: (0, B.A)(G.ShareLinkText),
                      children: (0, y.we)(
                        "#YIR_ShareModal_ShareOnFriendsActivity",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function an(s) {
          return s >= 2024;
        }
        function Ri(s) {
          const { userYearInReview: e } = s,
            r = e.GetYear(),
            i = e.GetPlayTimeStats().total_stats,
            l = e.GetPlayTimeStats().demos_played || 0,
            c = e.GetPlayTimeStats().playtests_played || 0,
            m = e.GetFilteredGameSummary(),
            d = e.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            p = m.filter((ce) => ce.new_this_year).length || 0,
            f = e.GetPlayTimeStats().playtime_streak,
            w = e.GetTopGamesShown(),
            N = pt(),
            L = w
              .slice(0, 5)
              .map((ce, De) =>
                yr.A.Get().BHasStoreItem(ce.appid, jt.c6.qI)
                  ? (0, t.jsx)(
                      Zi,
                      { gameStat: ce, gridClass: `Game${De}` },
                      `${De}_${ce.appid}`,
                    )
                  : null,
              )
              .filter((ce) => ce !== null),
            W = [
              Gi(d, e),
              Yi(r, i),
              Ui(
                r,
                f,
                an(r) ? e.GetPreviousYearSummary()?.longest_streak : void 0,
              ),
            ].filter((ce) => ce !== null),
            R = (0, t.jsx)(
              Ki,
              {
                rgGamesLength: m.length,
                nNewGames: p,
                nDemoPlayed: l,
                nPlaytestPlayed: c,
                nYear: e.GetYear(),
                nPreviousYearsGames: an(r)
                  ? e.GetPreviousYearSummary()?.games_played
                  : void 0,
              },
              "overview",
            );
          return (0, t.jsx)(Nt, {
            children: (0, t.jsxs)("div", {
              className: (0, B.A)(v().YearInReviewContent, v().SummaryArea),
              children: [
                (0, t.jsx)(Hi, {
                  rgGamesLength: m.length,
                  nNewGames: p,
                  totalAchievementUnlocked: d,
                  nTotalPlaytimeSeconds: i.total_playtime_seconds || 0,
                  nTotalPercentagePlaytimex100: i.total_playtime_percentagex100,
                }),
                m.length !== 1 &&
                  (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: v().SummaryGridCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: v().SectionSubTitle,
                          children: N("#YIR_YourSummary_SubTitle"),
                        }),
                        (0, t.jsx)(ki, {
                          overview: R,
                          statFillers: W,
                          gameFillers: L,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
        function ki(s) {
          let { statFillers: e, gameFillers: r, overview: i } = s;
          return r.length > 2 && e.length > 1
            ? (0, t.jsx)("div", {
                className: v().SummaryGridStandard,
                children: [i, e[0], e[1], r[0], r[1], r[2]],
              })
            : r.length > 1 && e.length > 2
              ? (0, t.jsx)("div", {
                  className: v().SummaryGridStandard,
                  children: [i, e[1], e[2], e[0], r[0], r[1]],
                })
              : e.length == 1 && r.length > 3
                ? (0, t.jsx)("div", {
                    className: v().SummaryGridStandard,
                    children: [i, e[0], r[0], r[1], r[2], r[3]],
                  })
                : r.length > 1
                  ? (0, t.jsx)("div", {
                      className: v().SummaryGridSparse,
                      children: [i, r[0], r[1]],
                    })
                  : null;
        }
        function Gi(s, e) {
          return s > 0
            ? (0, t.jsx)(Vi, { userYearInReview: e }, "totalAchievements")
            : null;
        }
        function Ui(s, e, r) {
          return e &&
            typeof e.longest_consecutive_days == "number" &&
            typeof r == "number" &&
            e.longest_consecutive_days <= 1 &&
            r <= 1
            ? null
            : e &&
                typeof e.longest_consecutive_days == "number" &&
                e.longest_consecutive_days > 0 &&
                x.iA.country_code.toLowerCase() !== "cn"
              ? (0, t.jsx)(
                  Qi,
                  { oLongestStreak: e, nYear: s, nPrevLongestStreamDays: r },
                  "longestStreak",
                )
              : null;
        }
        const kn = 1e3;
        function Yi(s, e) {
          const r =
              e.controller_playtime_percentagex100 +
              e.deck_playtime_percentagex100,
            i =
              e.total_playtime_percentagex100 -
              e.controller_playtime_percentagex100 -
              e.vr_playtime_percentagex100 -
              e.deck_playtime_percentagex100;
          return r < kn || i < kn
            ? null
            : (0, t.jsx)(Fi, { oTotalStats: e, nYear: s }, "hardwareTime");
        }
        function Hi(s) {
          const {
              rgGamesLength: e,
              nNewGames: r,
              totalAchievementUnlocked: i,
              nTotalPlaytimeSeconds: l,
              nTotalPercentagePlaytimex100: c,
            } = s,
            m = pt();
          let d;
          return (
            r > 50 && i > 100
              ? (d = m("#YIR_YourSummary_GamesTonNewAchievements"))
              : r > 20 && i > 100
                ? (d = m("#YIR_YourSummary_GamesNewAchievements"))
                : r > 20 && l > 36e4
                  ? (d = m("#YIR_YourSummary_GamesNew"))
                  : e > 10 && r < 5
                    ? (d = m("#YIR_YourSummary_GamesManyTriedNew"))
                    : e > 10
                      ? (d = m("#YIR_YourSummary_GamesMany"))
                      : r > 1 &&
                          r < 5 &&
                          (l > 36e4 ||
                            (l == 0 && typeof c == "number" && c > 5e3))
                        ? (d = m("#YIR_YourSummary_HoursManyTriedNew"))
                        : e < 2 && l > 36e4
                          ? (d = m("#YIR_YourSummary_HoursManySingleGame"))
                          : e < 2
                            ? (d = m("#YIR_YourSummary_SingleGame"))
                            : e < 5
                              ? (d = m("#YIR_YourSummary_GamesFew"))
                              : l > 36e4
                                ? (d = m("#YIR_YourSummary_HoursMany"))
                                : (d = null),
            (0, t.jsx)("div", { className: v().SectionTitle, children: d })
          );
        }
        function Ki(s) {
          const e = Cr(),
            {
              rgGamesLength: r,
              nNewGames: i,
              nDemoPlayed: l,
              nPlaytestPlayed: c,
              nYear: m,
              nPreviousYearsGames: d,
            } = s,
            p = Ke(),
            f = `${x.TS.IMG_URL}yearinreview/bg_2023.svg`;
          let w = v().NormalNumbers;
          return (
            r > 99999 ? (w = v().SixNumbers) : r > 99 && (w = v().ThreeNumbers),
            (0, t.jsx)("div", {
              className: (0, B.A)(v().SummaryCtnShadow, p.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, B.A)(
                  v().SummaryCtn,
                  v().GridItem,
                  p.GridItem,
                  v().OverviewBlock,
                  p.SummaryCtn,
                ),
                children: [
                  (0, t.jsx)("div", { className: v().SubtleBorder }),
                  (0, t.jsx)("div", {
                    className: (0, B.A)(
                      v().BackgroundImage,
                      v().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${f})` },
                  }),
                  (0, t.jsxs)("div", {
                    className: v().SummaryBlockTitle,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().RewindHeader,
                        children: (0, y.PP)(
                          "#YearInReview_SteamRewindHeader",
                          (0, t.jsx)("span", {
                            className: (0, B.A)(v().UserName, p.UserName),
                            children: (0, y.we)(
                              "#YearInReview_PossessiveUserName",
                              e,
                            ),
                          }),
                          (0, y.we)("#date_year", m),
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, B.A)(v().StatBox, v().Big),
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().BigNum, w),
                            children: (0, Bt.Dq)(r),
                          }),
                          (0, t.jsx)("div", {
                            className: v().SmallText,
                            children: (0, y.Yp)("#YIR_YourSummary_Games", r),
                          }),
                          (0, t.jsx)(sn, {
                            strTokenPrefix: "#YIR_YourSummary_PrevYear_Game",
                            nCurValue: r,
                            nPrevValue: d,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().SubSummaryCtn,
                    children: [
                      !!i &&
                        (0, t.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Bt.Dq)(i),
                            }),
                            (0, t.jsx)("div", {
                              className: v().SmallText,
                              children: (0, y.Yp)(
                                "#YIR_YourSummary_GamesFirst",
                                i,
                              ),
                            }),
                          ],
                        }),
                      !!l &&
                        (0, t.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Bt.Dq)(l),
                            }),
                            (0, t.jsx)("div", {
                              className: v().SmallText,
                              children: (0, y.Yp)("#YIR_YourSummary_Demos", l),
                            }),
                          ],
                        }),
                      !!c &&
                        (0, t.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, t.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Bt.Dq)(c),
                            }),
                            (0, t.jsx)("div", {
                              className: v().SmallText,
                              children: (0, y.Yp)(
                                "#YIR_YourSummary_PlayTests",
                                c,
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function sn(s) {
          const { strTokenPrefix: e, nCurValue: r, nPrevValue: i } = s;
          if (!(i == null || i === 0 || r === 0))
            return r == i
              ? null
              : r < i
                ? (0, t.jsxs)("div", {
                    className: v().CompareCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, B.A)(v().CompareArrow, v().ArrowDownCtn),
                      }),
                      (0, t.jsx)("div", {
                        className: v().CompareText,
                        children: (0, y.Yp)(
                          e + "Less",
                          i - r,
                          (0, Bt.Dq)(i - r),
                        ),
                      }),
                    ],
                  })
                : (0, t.jsxs)("div", {
                    className: v().CompareCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, B.A)(v().CompareArrow, v().ArrowUpCtn),
                      }),
                      (0, t.jsx)("div", {
                        className: v().CompareText,
                        children: (0, y.Yp)(
                          e + "More",
                          r - i,
                          (0, Bt.Dq)(r - i),
                        ),
                      }),
                    ],
                  });
        }
        function Vi(s) {
          const { userYearInReview: e } = s,
            r = e.GetPlayTimeStats().summary_stats,
            i = e.GetFilteredGameSummary(),
            l = e.GetYear(),
            c = Ke();
          if (!r) return null;
          const m = `${x.TS.IMG_URL}yearinreview/achievement_grid_02.webp`;
          let d = v().NormalNumbers;
          return (
            typeof r.total_achievements == "number" &&
            r.total_achievements > 99999
              ? (d = v().SixNumbers)
              : typeof r.total_achievements == "number" &&
                r.total_achievements > 99 &&
                (d = v().ThreeNumbers),
            (0, t.jsx)("div", {
              className: (0, B.A)(v().SummaryCtnShadow, c.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, B.A)(
                  v().SummaryCtn,
                  v().GridItem,
                  c.GridItem,
                  v().Achievements,
                  v().AchievementBlock,
                  c.SummaryCtn,
                  c.AchievementBlock,
                ),
                children: [
                  (0, t.jsx)("div", { className: v().SubtleBorder }),
                  (0, t.jsx)("div", {
                    className: (0, B.A)(
                      v().BackgroundImage,
                      v().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${m})` },
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, B.A)(
                      v().StatBox,
                      v().SummaryBlockHugeNumCtn,
                    ),
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, B.A)(v().BigNum, d),
                        children: (0, Bt.Dq)(r.total_achievements),
                      }),
                      (0, t.jsx)("div", {
                        className: v().SmallText,
                        children: (0, y.Yp)(
                          "#YIR_YourSummary_Achievement",
                          r.total_achievements,
                        ),
                      }),
                      (0, t.jsx)(sn, {
                        strTokenPrefix: "#YIR_YourSummary_PrevYear_Ach",
                        nCurValue: r.total_achievements,
                        nPrevValue: an(l)
                          ? e.GetPreviousYearSummary()?.unlocked_achievements
                          : void 0,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().SummaryBlockExtrasCtn,
                    children: [
                      (0, t.jsxs)("div", {
                        className: v().StatBox,
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().BigNum),
                            children: (0, Bt.Dq)(
                              r.total_games_with_achievements || 0,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: v().SmallText,
                            children: (0, y.Yp)(
                              "#YIR_YourSummary_Achievement_Games",
                              r.total_games_with_achievements,
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: v().StatBox,
                        children: [
                          (0, t.jsx)("div", {
                            className: v().BigNum,
                            children: (0, Bt.Dq)(
                              r.total_rare_achievements || 0,
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: v().SmallText,
                            children: (0, y.Yp)(
                              "#YIR_YourSummary_Achievement_Rare",
                              r.total_rare_achievements,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Qi(s) {
          const { oLongestStreak: e, nPrevLongestStreamDays: r } = s,
            i = e.rtime_start ?? 0,
            l = e.longest_consecutive_days ?? 0,
            c = or(),
            m = (0, y.TW)(i, c),
            d = (0, y.TW)(i + l * 24 * 60 * 60, c),
            p = Ke();
          if (x.iA.country_code === "ch") return null;
          const f = `${x.TS.IMG_URL}yearinreview/streak_bg.jpg`;
          return (0, t.jsx)("div", {
            className: (0, B.A)(v().SummaryCtnShadow, p.SummaryCtnShadow),
            children: (0, t.jsxs)("div", {
              className: (0, B.A)(
                v().SummaryCtn,
                v().GridItem,
                p.GridItem,
                v().StreakBlock,
                p.SummaryCtn,
                p.StreakBlock,
              ),
              children: [
                (0, t.jsx)("div", { className: v().SubtleBorder }),
                (0, t.jsx)("div", {
                  className: (0, B.A)(
                    v().BackgroundImage,
                    v().BackgroundImageCover,
                  ),
                  style: { backgroundImage: `url(${f})` },
                }),
                (0, t.jsxs)("div", {
                  className: (0, B.A)(v().StatBox, v().SummaryBlockHugeNumCtn),
                  children: [
                    (0, t.jsx)("div", {
                      className: v().BigNum,
                      children: (0, y.Yp)(
                        "#YIR_Game_LongestStreak_DaysPlayed",
                        l,
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: v().SmallText,
                      children: (0, y.we)("#YIR_YourSummary_Stat_Streak"),
                    }),
                    (0, t.jsx)("div", {
                      className: v().SmallLightText,
                      children: (0, y.we)(
                        "#YIR_Game_LongestStreak_FromDateToDate",
                        m,
                        d,
                      ),
                    }),
                    (0, t.jsx)(sn, {
                      strTokenPrefix: "#YIR_YourSummary_PrevYear_Day",
                      nCurValue: l,
                      nPrevValue: r,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: v().SummaryBlockExtrasCtn,
                  children: (0, t.jsxs)("div", {
                    className: (0, B.A)(v().StatBox, v().LongestStreakStat),
                    children: [
                      (0, t.jsx)("div", {
                        className: v().BigNum,
                        children: (0, Bt.Dq)(e.streak_games.length),
                      }),
                      (0, t.jsx)("div", {
                        className: v().SmallText,
                        children: (0, y.Yp)(
                          "#YIR_YourSummary_Games",
                          e.streak_games.length,
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Fi(s) {
          const { oTotalStats: e, nYear: r } = s,
            i =
              e.total_playtime_percentagex100 -
              e.controller_playtime_percentagex100 -
              e.vr_playtime_percentagex100 -
              e.deck_playtime_percentagex100,
            l = At(i),
            c =
              e.controller_playtime_percentagex100 +
              e.deck_playtime_percentagex100,
            m = At(c),
            d = `${x.TS.IMG_URL}yearinreview/keyboard.png?v=3`,
            p = `${x.TS.IMG_URL}yearinreview/controllers.png?v=2`,
            f = Ke();
          let w, N, L;
          return (
            Math.floor(c / 100) < 40
              ? ((w = 40), (N = v().Small), (L = v().Large))
              : Math.floor(c / 100) > 60
                ? ((w = 60), (N = v().Large), (L = v().Small))
                : (w = c / 100),
            (0, t.jsx)("div", {
              className: (0, B.A)(v().SummaryCtnShadow, f.SummaryCtnShadow),
              children: (0, t.jsxs)("div", {
                className: (0, B.A)(
                  v().HardwareSummary,
                  v().SummaryCtn,
                  v().GridItem,
                  f.GridItem,
                  v().HardwareBlock,
                  f.SummaryCtn,
                  f.HardwareBlock,
                ),
                children: [
                  (0, t.jsx)("div", { className: v().SubtleBorder }),
                  (0, t.jsxs)("div", {
                    className: v().ContentCtn,
                    children: [
                      (0, t.jsxs)("div", {
                        className: v().KeyboardPortion,
                        children: [
                          (0, t.jsx)("div", {
                            className: v().BackgroundImage,
                            style: { background: `url(${d}) bottom` },
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().Stat, L),
                            children: l,
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().Subtitle, L),
                            children: (0, y.we)(
                              "#YIR_HowYouPlayed_Keyboard_Generic",
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: v().ControllerPortion,
                        style: { height: w + "%" },
                        children: [
                          (0, t.jsx)("div", {
                            className: v().BackgroundImage,
                            style: { background: `url(${p}) top` },
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().Stat, N),
                            children: m,
                          }),
                          (0, t.jsx)("div", {
                            className: (0, B.A)(v().Subtitle, N),
                            children: (0, y.we)(
                              "#YIR_HowYouPlayed_Controllers_Percent",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Zi(s) {
          const { gameStat: e, gridClass: r } = s,
            { appid: i } = e,
            [l] = (0, It.t7)(i, Lt),
            c = gn(0, [i]),
            m = Ke();
          if (!l) return null;
          const d = l.GetAssetsWithoutOverrides()?.GetLibraryHeroURL(),
            p = Math.trunc(e.stats.total_sessions);
          return (0, t.jsx)("div", {
            className: (0, B.A)(v().SummaryCtnShadow, m.SummaryCtnShadow),
            children: (0, t.jsxs)("div", {
              className: (0, B.A)(
                v().SummaryCtn,
                v().GridItem,
                m.GridItem,
                v()[r],
                m.SummaryCtn,
                m[r],
              ),
              onClick: c,
              children: [
                (0, t.jsx)("div", { className: v().SubtleBorder }),
                (0, t.jsx)("div", {
                  className: (0, B.A)(v().BackgroundImage, m.BackgroundImage),
                  style: { backgroundImage: `url(${d})` },
                }),
                (0, t.jsx)("div", {
                  className: v().SummaryBlockGameName,
                  children: l.GetName(),
                }),
                (0, t.jsxs)("div", {
                  className: v().SummaryBlockExtrasCtn,
                  children: [
                    (0, t.jsx)(Ji, {
                      percentVal: e.stats.total_playtime_percentagex100,
                      subToken: "#YIR_Game_PlayStat",
                    }),
                    (0, t.jsxs)("div", {
                      className: v().StatBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: v().BigNum,
                          children: (0, Bt.Dq)(p),
                        }),
                        (0, t.jsx)("div", {
                          className: v().SmallText,
                          children: (0, y.we)(
                            p == 1
                              ? "#YIR_Game_PlaySession_Singular"
                              : "#YIR_Game_PlaySessions",
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
        function Ji(s) {
          const { percentVal: e, subToken: r, className: i } = s,
            l = At(e),
            c = `${r}_Percent`;
          return (0, t.jsxs)("div", {
            className: (0, B.A)(v().StatBox, i),
            children: [
              (0, t.jsx)("div", { className: v().BigNum, children: l }),
              (0, t.jsx)("div", {
                className: v().SmallText,
                children: (0, y.we)(c),
              }),
            ],
          });
        }
        var Xi = o(1012),
          Gn = o(82907),
          Un = o(49953),
          Yn = o(55241),
          on = o(71026),
          Hn = o(36058),
          Kt = o(44367);
        const $i = h.memo((s) => {
            const { data: e, topMonthlyAppsAndRanks: r } = s,
              i = Ke(),
              l = (0, h.useCallback)(
                (m, d) => (e[d]?.date ? (0, Jr.oL)(e[d].date) : ""),
                [e],
              ),
              c = (0, h.useRef)(void 0);
            return (0, t.jsx)(mr.u, {
              width: "100%",
              height: "100%",
              children: (0, t.jsxs)(Gn.X, {
                data: e,
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                barGap: 30,
                children: [
                  (0, t.jsx)(Un.d, { vertical: !1, stroke: "#a0aab6" }),
                  (0, t.jsx)(Yn.h, {
                    tickFormatter: At,
                    tick: { fill: "white" },
                    axisLine: !0,
                  }),
                  (0, t.jsx)(Er.m, {
                    wrapperStyle: { outline: "none" },
                    allowEscapeViewBox: { x: !1, y: !0 },
                    isAnimationActive: !1,
                    offset: 0,
                    content: (m) =>
                      (0, t.jsx)(qi, {
                        active: m.active,
                        payload: m.payload,
                        hoveredBarIDRef: c,
                      }),
                  }),
                  (0, t.jsx)(on.y, {
                    barSize: 60,
                    dataKey: `topPlayedPercentBreakdownPerMonth.${yt}`,
                    name: yt,
                    stackId: "a",
                    fill: i.monthOthersColor,
                    onMouseEnter: () => (c.current = yt),
                    onMouseOut: () => (c.current = void 0),
                  }),
                  r.map((m, d) =>
                    (0, t.jsx)(
                      on.y,
                      {
                        barSize: 60,
                        dataKey: `topPlayedPercentBreakdownPerMonth.${m.appid}`,
                        name: m.appid.toString(),
                        stackId: "a",
                        fill: i[`topApp_${m.rank}`],
                        onMouseEnter: () => (c.current = m.appid.toString()),
                        onMouseOut: () => (c.current = void 0),
                      },
                      `${d}`,
                    ),
                  ),
                  (0, t.jsx)(Hn.W, {
                    interval: 0,
                    tick: (0, t.jsx)(Vn, {}),
                    tickFormatter: l,
                  }),
                ],
              }),
            });
          }),
          ln = 7;
        function qi(s) {
          const { active: e, payload: r, hoveredBarIDRef: i } = s,
            l = Ke(),
            c = pt();
          if (e && r && r.length) {
            const m = r[0].payload.date.getMonth(),
              d = (0, y.we)(`#YIR_MonthlyCharts_MonthNoun_${m + 1}`),
              p = r[0].payload.topPlayedPercentBreakdownPerMonth[bt],
              f = Object.keys(r[0].payload.otherPlayedPercentBreakdownForMonth),
              w = r[0].payload.topPlayedRelativePercentBreakdownForMonth,
              N = r.find((De) => De.name === i.current),
              W = N?.name === yt,
              R = r
                .map((De) => {
                  const Qe = De.name,
                    ft = w[De.name];
                  if (Qe === yt) {
                    const wt = W && r.length == 1;
                    return (0, t.jsxs)(
                      h.Fragment,
                      {
                        children: [
                          !wt &&
                            (0, t.jsx)("div", {
                              className: (0, B.A)(
                                De === N && Kt.HoveredGameLabel,
                              ),
                              children: cn(
                                ft,
                                d,
                                "#YIR_MonthlyCharts_OtherGamesTooltip",
                              ),
                            }),
                          W &&
                            f
                              .slice(0, ln)
                              .map((Ee) =>
                                (0, t.jsx)(
                                  ts,
                                  { appId: Ee, className: Kt.HoveredGameLabel },
                                  Ee,
                                ),
                              ),
                          W &&
                            f.length > ln &&
                            (0, t.jsx)("div", {
                              className: Kt.HoveredGameLabel,
                              children: (0, y.we)(
                                "#YIR_MonthlyCharts_OtherGamesTooltip_AndMore",
                                f.length - ln,
                              ),
                            }),
                        ],
                      },
                      Qe,
                    );
                  }
                  return De.value
                    ? (0, t.jsx)(
                        rs,
                        {
                          appId: Qe,
                          className: (0, B.A)(De === N && Kt.HoveredGameLabel),
                          date: d,
                          value: ft,
                        },
                        Qe,
                      )
                    : null;
                })
                .reverse(),
              ce = R.length == 1 && f.length > 0;
            return (0, t.jsxs)(Jt.t1, {
              style: { background: N?.color ?? l.monthOthersColor },
              className: Kt.MonthlyChartTooltipCtn,
              children: [
                (0, t.jsx)("div", { className: Kt.TooltipBackgroundOverlay }),
                (0, t.jsx)("div", {
                  className: Kt.TooltipImageContainer,
                  children:
                    N &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        !W && (0, t.jsx)(Kn, { appId: N.name }),
                        W && (0, t.jsx)(es, { appIds: f.slice(0, 7) }),
                      ],
                    }),
                }),
                (0, t.jsxs)("div", {
                  className: Kt.TotalPlaytimeContainer,
                  children: [
                    (0, t.jsx)("div", {
                      className: re.TotalPlaytime,
                      children: cn(
                        p,
                        d,
                        "#YIR_MonthlyCharts_PlayedTotalTooltip",
                      ),
                    }),
                    !ce &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, y.we)(
                              "#YIR_MonthlyCharts_PlayedSubtitleTooltip",
                            ),
                          }),
                          R,
                        ],
                      }),
                    ce &&
                      N &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            children: c(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_Only",
                            ),
                          }),
                          R,
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function es({ appIds: s }) {
          return (0, t.jsx)("div", {
            className: Kt.OtherGamesStack,
            children: s?.map((e, r) =>
              (0, t.jsx)(
                Kn,
                {
                  appId: e,
                  style: { zIndex: s.length - r, "--stack-position": r },
                },
                e,
              ),
            ),
          });
        }
        function Kn({ appId: s, style: e }) {
          const [r] = (0, It.t7)(parseInt(s), Lt);
          if (!r) return null;
          const i = r.GetAssetsWithoutOverrides();
          if (!i) return null;
          const l = i.GetLibraryCapsuleURL() || bn;
          return (0, t.jsx)("img", {
            style: e,
            className: Kt.CapsuleImg,
            src: l,
          });
        }
        function ts({ appId: s, className: e }) {
          const [r] = (0, It.t7)(parseInt(s), Lt);
          return r
            ? (0, t.jsx)("div", { className: e, children: r.GetName() }, s)
            : null;
        }
        function rs(s) {
          const { appId: e, className: r, value: i, date: l } = s,
            [c] = (0, It.t7)(parseInt(e), Lt);
          return c
            ? (0, t.jsx)(
                "div",
                {
                  className: r,
                  children: cn(
                    i,
                    l,
                    "#YIR_MonthlyCharts_TopPlayedTooltip",
                    (0, t.jsx)("b", { children: c.GetName() }),
                  ),
                },
                e,
              )
            : null;
        }
        const ns = h.memo((s) => {
          const { data: e, name: r, color: i } = s,
            l = !0,
            c = Ke(),
            m = (0, h.useCallback)(
              (d, p) => (e[p]?.date ? (0, Jr.oL)(e[p].date) : ""),
              [e],
            );
          return (0, t.jsx)(mr.u, {
            width: "100%",
            height: "100%",
            children: (0, t.jsxs)(Gn.X, {
              data: e,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 30,
              children: [
                (0, t.jsx)(Er.m, {
                  wrapperStyle: {
                    outline: "1px solid " + (i ?? c.chartAccentColorAlt),
                  },
                  allowEscapeViewBox: { x: !1, y: !0 },
                  isAnimationActive: !1,
                  content: (d) =>
                    (0, t.jsx)(as, {
                      active: d.active,
                      payload: d.payload,
                      name: r,
                    }),
                }),
                (0, t.jsx)(Un.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, t.jsx)(Yn.h, {
                  tickFormatter: l ? At : Bt.NO,
                  tick: { fill: "white" },
                  axisLine: !0,
                }),
                (0, t.jsx)(on.y, {
                  barSize: 60,
                  dataKey: l ? "percent" : "value",
                  fill: i ?? c.chartAccentColorAlt,
                }),
                (0, t.jsx)(Hn.W, {
                  interval: 0,
                  tick: (0, t.jsx)(Vn, {}),
                  tickFormatter: m,
                  color: "#ffffff",
                }),
              ],
            }),
          });
        });
        function Vn(s) {
          const { x: e, y: r, payload: i } = s,
            l = s.tickFormatter(i.value, i.index);
          return (0, t.jsx)("g", {
            transform: `translate(${e},${r})`,
            children: (0, t.jsx)("text", {
              x: 0,
              y: 0,
              dy: 16,
              textAnchor: "end",
              fill: "#FFFFFF",
              transform: "rotate(-35)",
              children: l,
            }),
          });
        }
        function as(s) {
          const { active: e, payload: r, name: i } = s,
            l = !0,
            c = Ke(),
            m = r[0];
          if (e && m?.value) {
            const d = m.payload.date.getMonth(),
              p = (0, y.we)(`#YIR_MonthlyCharts_MonthNoun_${d + 1}`),
              f = m.value,
              w = l
                ? "#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent"
                : "#YIR_MonthlyCharts_TopPlayedTooltip_Time";
            return (0, t.jsx)(Jt.t1, {
              style: { background: "#0e1014" },
              children: (0, t.jsx)(
                "div",
                {
                  style: { color: c.chartAccentColor },
                  children: (0, y.PP)(
                    w,
                    (0, t.jsx)("b", { children: l ? At(f) : (0, Bt.Dq)(f) }),
                    p,
                    i,
                  ),
                },
                i,
              ),
            });
          }
          return null;
        }
        function cn(s, e, r, ...i) {
          const l = `${r}_Percent`;
          return (0, y.PP)(l, (0, t.jsx)("b", { children: At(s) }), e, ...i);
        }
        var Sr = o(77408);
        function is(s) {
          const { userYearInReview: e } = s,
            r = pt(),
            i = e.GetChartMonthlyData(),
            l = e.GetTopGameIdsAndRanks(),
            c = e.GetPlayTimeStats().games?.length ?? 0;
          return (0, t.jsx)("div", {
            className: Sr.Section,
            children:
              c > 1 &&
              (0, t.jsxs)(Nt, {
                className: Sr.AnimationVisibilityCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: _t.SectionTitle,
                    children: r("#YIR_MonthlyCharts_Title"),
                  }),
                  (0, t.jsx)("div", {
                    className: Sr.ChartContainer,
                    children: (0, t.jsx)("div", {
                      className: Sr.Chart,
                      children: (0, t.jsx)($i, {
                        data: i,
                        topMonthlyAppsAndRanks: l,
                      }),
                    }),
                  }),
                ],
              }),
          });
        }
        var ss = o(24179),
          os = o(54528),
          ls = o(96362),
          Qn = o(27386);
        class St {
          m_SteamInterface;
          m_mapAchievementDef = new Map();
          m_mapPromiseAchievementDef = new Map();
          m_mapLoadCallback = new Map();
          GetAchievements(e) {
            return this.m_mapAchievementDef.get(e);
          }
          BHasAchievementLoaded(e) {
            return this.m_mapAchievementDef.has(e);
          }
          GetAchievementLoadChange(e) {
            return (
              this.m_mapLoadCallback.has(e) ||
                this.m_mapLoadCallback.set(e, new hn.lu()),
              this.m_mapLoadCallback.get(e)
            );
          }
          async LoadAchievementDisplayInfo(e) {
            return this.m_mapAchievementDef.has(e)
              ? this.m_mapAchievementDef.get(e) || []
              : (this.m_mapPromiseAchievementDef.has(e) ||
                  this.m_mapPromiseAchievementDef.set(
                    e,
                    this.InternalLoadAchievementDisplayInfo(e),
                  ),
                this.m_mapPromiseAchievementDef.get(e) || []);
          }
          async InternalLoadAchievementDisplayInfo(e) {
            const r = Q.w.Init(Qn.ARV);
            r.Body().set_appid(e),
              r.Body().set_language(x.TS.LANGUAGE || "english");
            const i = { appid: e, l: x.TS.LANGUAGE };
            let l;
            try {
              const c = await Qn.xtC.GetGameAchievements(
                this.m_SteamInterface.GetServiceTransport(),
                r,
              );
              if (c.GetEResult() == Zt.R) {
                const m = c
                  .Body()
                  .achievements()
                  .map((d) => {
                    const p = d.toObject();
                    return (
                      (p.internal_name = (p.internal_name ?? "").toLowerCase()),
                      p
                    );
                  });
                return (
                  this.m_mapAchievementDef.set(e, m),
                  this.GetAchievementLoadChange(e).Dispatch(m),
                  m
                );
              }
              l = (0, Pr.H)(c);
            } catch (c) {
              l = (0, Pr.H)(c);
            }
            return (
              console.error(
                "CGameAchievementDisplayStore.InternalLoadAchievementDisplayInfo hit error: " +
                  l.strErrorMsg,
                l,
              ),
              []
            );
          }
          static s_Singleton;
          static Get() {
            return (
              St.s_Singleton ||
                ((St.s_Singleton = new St()), St.s_Singleton.Init()),
              St.s_Singleton
            );
          }
          constructor() {}
          Init() {
            this.m_SteamInterface = (0, Br.P)();
          }
        }
        function Fn(s) {
          const [e, r] = (0, h.useState)(St.Get().GetAchievements(s)),
            [i, l] = (0, h.useState)(s);
          return (
            (0, h.useEffect)(() => {
              ((e == null && !St.Get().BHasAchievementLoaded(s)) || i != s) &&
                St.Get()
                  .LoadAchievementDisplayInfo(s)
                  .then((c) => {
                    r(c), l(i);
                  });
            }, [s, e, i]),
            (0, Lr.hL)(St.Get().GetAchievementLoadChange(s), r),
            e
          );
        }
        function cs(s) {
          const e = Fn(s);
          return (0, h.useMemo)(() => {
            const r = new Map();
            if (!e) return r;
            for (const i of e) i.internal_name && r.set(i.internal_name, i);
            return r;
          }, [e]);
        }
        function ms(s) {
          const e = Fn(s);
          return e ? e.length : 0;
        }
        function ds(s) {
          const [e, r] = (0, h.useState)(St.Get().GetAchievements(s));
          return (0, Lr.hL)(St.Get().GetAchievementLoadChange(s), r), e;
        }
        function us(s, e, r) {
          const i = vn(r, e, s),
            l = ds(s),
            [c, m] = (0, h.useState)(() =>
              Zn(i?.all_time_unlocked_achievements, l?.length ?? 0),
            );
          return (
            (0, h.useEffect)(() => {
              m(Zn(i?.all_time_unlocked_achievements, l?.length ?? 0));
            }, [l?.length, i?.all_time_unlocked_achievements]),
            c
          );
        }
        function Zn(s, e) {
          return typeof s == "number" && s > 0 && e > 0 && e <= s;
        }
        const gs = 2022;
        var fs = o(72739),
          hs = o(29522),
          Jn = o(40426),
          ps = o(44533),
          qt = o.n(ps);
        function vs(s) {
          const {
              imgURL: e,
              glow: r,
              pauseAnimation: i,
              hidden: l,
              alt: c,
              className: m,
              ...d
            } = s,
            [p, f] = h.useState(!1),
            w = h.useCallback((L) => {
              L &&
                (L.complete
                  ? f(!0)
                  : (L.onload = () => {
                      f(!0);
                    }));
            }, []);
          if (l)
            return (0, t.jsx)("div", {
              className: qt().HiddenLabel,
              ...d,
              children: "?",
            });
          const N = p && r;
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              qt().AchievementIconWrapper,
              m,
              i && qt().RareAchievementNoAnimation,
            ),
            ...d,
            children: [
              N &&
                (0, t.jsx)("div", {
                  className: qt().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: qt().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: qt().RareAchievementIconGlow,
                    }),
                  }),
                }),
              (0, t.jsx)("img", {
                ref: w,
                className: (0, B.A)(qt().Icon, N && qt().IconGlow),
                src: e,
                loading: "lazy",
                alt: c,
              }),
            ],
          });
        }
        var ys = o(7077),
          Bs = o.n(ys),
          Pt = o(96002),
          bs = o(98001),
          xs = o(93191);
        function ws(s) {
          const { appid: e, userYearInReview: r } = s,
            i = vn(r.GetYear(), r.GetAccountID(), e);
          return !i || !((i?.achievements?.length ?? 0) > 0)
            ? null
            : (0, t.jsx)(Tt.tH, {
                children: (0, h.createElement)(js, {
                  ...s,
                  key: "achievementunlucklist_" + e,
                  userUnlockedAchievements: i,
                }),
              });
        }
        function js(s) {
          const {
              appid: e,
              userYearInReview: r,
              bBlurContent: i,
              userUnlockedAchievements: l,
            } = s,
            [c, m] = (0, h.useState)(i),
            d = pt(),
            p = ms(e),
            f = () => m(!1),
            w = l.achievements?.length ?? 0,
            N = l.all_time_unlocked_achievements,
            L = N == p && p > 0 && w > 0 && N > 0 && !l.unlocked_more_in_future,
            W = (0, bs.v)({
              appid: e,
              profileUrl: (0, xs.F)(r.GetSteamID().ConvertTo64BitString()),
            }),
            R = (0, x.hf)();
          return (0, t.jsxs)("div", {
            className: (0, B.A)(_t.YearInReviewContent, Pt.AchievementsCtn),
            children: [
              c &&
                (0, t.jsx)("div", {
                  onClick: f,
                  className: Pt.ContentRestrictionText,
                  children: (0, y.we)(
                    "#YIR_TopGames_ContentRestrictionAchievements",
                  ),
                }),
              (0, t.jsxs)("div", {
                className: Pt.AchievementSectionTitleCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: Pt.AchievementSectionTitle,
                    children: d("#YIR_TopGames_Achievements"),
                  }),
                  (0, t.jsxs)("div", {
                    className: Pt.AchievementLinkCtn,
                    children: [
                      R &&
                        (0, t.jsx)("a", {
                          href: W,
                          className: Pt.AchievementLink,
                          children: (0, y.we)("#YIR_SeeAllAchievements"),
                        }),
                      !R &&
                        (0, t.jsx)(ar.Ii, {
                          href: W,
                          target: "_blank",
                          className: Pt.AchievementLink,
                          children: (0, y.we)("#YIR_SeeAllAchievements"),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: (0, B.A)({
                  [Pt.AllUnlockedAchievements]: L,
                  [Pt.AchievementsRowCtn]: !0,
                }),
                children: (0, t.jsxs)("div", {
                  className: Pt.AchievementRow,
                  children: [
                    (0, t.jsxs)("div", {
                      className: Pt.AchievementsTitleCtn,
                      children: [
                        (0, t.jsx)("div", {
                          className: Pt.AchievementsBigNum,
                          children: (0, Bt.Dq)(w),
                        }),
                        (0, t.jsx)("div", {
                          className: Pt.AchievementsSmallText,
                          children: (0, y.PP)(
                            "#YIR_UnlockedThisYear_Short",
                            (0, t.jsx)("br", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, t.jsx)(Ms, { userUnlockedAchievements: l }),
                  ],
                }),
              }),
            ],
          });
        }
        function Ms(s) {
          const { userUnlockedAchievements: e } = s,
            r = e.appid;
          (0, _.wT)(r, "Missing appid for achievements list!");
          const i = cs(r),
            l = (0, h.useMemo)(
              () =>
                [...(e.achievements ?? [])].sort(
                  (m, d) => (m.rtime_unlocked ?? 0) - (d.rtime_unlocked ?? 0),
                ),
              [e],
            );
          return l?.length > 0
            ? (0, t.jsx)(t.Fragment, {
                children: l
                  .map((c) => i.get(c.achievement_name_internal ?? ""))
                  .filter((c) => !!c?.icon)
                  .map((c) =>
                    (0, t.jsx)(
                      As,
                      { appid: r, display: c },
                      "displayAch_" + c.internal_name,
                    ),
                  ),
              })
            : (0, t.jsx)(br.t, {
                size: "small",
                string: (0, y.we)("#Loading"),
              });
        }
        const Is = 10;
        function As(s) {
          const { display: e, appid: r } = s,
            i = `${x.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${r}/${e.icon}`,
            l = Number.parseFloat("" + e.player_percent_unlocked) < Is;
          return (0, t.jsx)(Jt.m9, {
            toolTipContent: (0, t.jsx)(Ts, { display: e }),
            className: (0, B.A)({
              [Pt.RareAchievement]: l,
              [Pt.Achievement]: !0,
            }),
            children: (0, t.jsx)(vs, {
              imgURL: i,
              className: Pt.AchievementIcon,
              alt: e.localized_name ?? e.internal_name,
              glow: l,
            }),
          });
        }
        function Ts(s) {
          const { display: e } = s;
          let r;
          return (
            e.localized_desc && e.localized_name
              ? (r = `${e?.localized_name}: ${e.localized_desc}`)
              : e.localized_name
                ? (r = e.localized_name)
                : e.internal_name && (r = e.internal_name),
            (0, t.jsxs)("div", {
              className: Bs().TextToolTip,
              children: [
                (0, t.jsx)("div", { children: r }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)("div", {
                  children: (0, y.we)(
                    "#YIR_Achievement_ttip",
                    (0, Bt.Dq)(
                      Math.max(
                        0.1,
                        Number.parseFloat("" + e.player_percent_unlocked),
                      ),
                    ),
                  ),
                }),
              ],
            })
          );
        }
        var jr = o(30386);
        function Ns(s) {
          const { appid: e, bBlurContent: r, nYear: i } = s,
            l = fa(e),
            [c, m] = (0, Jn.XC)(),
            d = pt();
          return !l || l.length == 0
            ? null
            : (0, t.jsxs)("div", {
                className: (0, B.A)(_t.YearInReviewContent, jr.ScreenshotsCtn),
                children: [
                  m,
                  (0, t.jsx)("div", {
                    className: jr.ScreenshotHeader,
                    children: d("#YIR_ScreenshotsThisYear"),
                  }),
                  (0, t.jsx)("div", {
                    className: jr.ScreenshotRow,
                    children: l.map((p, f) =>
                      (0, t.jsx)(
                        Ls,
                        {
                          nYear: i,
                          bBlurContent: r,
                          screenshot: p,
                          fnSetExpandScreenShot: () => {
                            const N = l
                              .slice(f)
                              .concat(l.slice(0, f))
                              .map((L) => L.image_url);
                            c(N);
                          },
                        },
                        `${p.image_url}_${f}`,
                      ),
                    ),
                  }),
                ],
              });
        }
        const Ps =
          "?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
        function Ls(s) {
          const {
              screenshot: e,
              fnSetExpandScreenShot: r,
              bBlurContent: i,
              nYear: l,
            } = s,
            [c, m] = (0, h.useState)(i),
            d = { backgroundImage: `url(${e.image_url + Ps})` },
            p = `${x.TS.IMG_URL}yearinreview/screenshot_placeholder.png`,
            f = () => {
              c && m(!1), r();
            };
          return (0, t.jsxs)("div", {
            className: jr.ScreenshotCtn,
            onClick: f,
            style: d,
            children: [
              c &&
                (0, t.jsx)("div", {
                  className: jr.ContentRestrictionText,
                  children: (0, y.we)(
                    "#YIR_TopGames_ContentRestrictionScreenshots",
                  ),
                }),
              (0, t.jsx)("img", { src: `${p}` }),
            ],
          });
        }
        function Xn(s) {
          const { userYearInReview: e } = s,
            r = e.GetTopGamesShownAppIDs(),
            i = pt(),
            l = 0,
            c = Tr,
            m = (0, h.useMemo)(() => r?.slice(l, c), [l, c, r]);
          if (!r || r.length == 0 || l > r.length) return null;
          let d = r.length > 1;
          return (0, t.jsx)("div", {
            className: (0, B.A)(re.TopGamesContainer),
            children: (0, t.jsxs)(rn.K, {
              placeholderHeight: "100vh",
              rootMargin: ia,
              className: re.FullWidth,
              children: [
                !!d &&
                  (0, t.jsx)("div", {
                    className: (0, B.A)(re.TopGameTitleCtn, re.white),
                    children: (0, t.jsx)("div", {
                      className: re.TopGameTitle,
                      children: i("#YIR_TopGame_mostplayed_intro"),
                    }),
                  }),
                m.map((p, f) =>
                  (0, t.jsx)(
                    Nt,
                    {
                      children: (0, t.jsx)(
                        $n,
                        { unAppID: p, userYearInReview: e, index: f },
                        f,
                      ),
                    },
                    f,
                  ),
                ),
              ],
            }),
          });
        }
        function Ds(s) {
          const { gameSummary: e, index: r, userYearInReview: i } = s,
            l = pt(),
            c = e.appid,
            m = i.GetYear();
          for (let p = m; p >= gs; --p) {
            const f = `#steamrewind${p}_gametext_appid_${c}`,
              w = l(f, m);
            if (f != w)
              return (0, t.jsxs)("div", {
                className: re.IntroLine,
                children: [w, " "],
              });
          }
          let d;
          return (
            r == 0
              ? e?.new_this_year
                ? typeof e.total_playtime_percentagex100 == "number" &&
                  e.total_playtime_percentagex100 > 1e3
                  ? (d = "#YIR_TopGame_first_new_hooked")
                  : (d = "#YIR_TopGame_first_new")
                : (d = "#YIR_TopGame_first_continued")
              : r == 1 &&
                (e?.new_this_year
                  ? (d = "#YIR_TopGame_top_new")
                  : (d = "#YIR_TopGame_top_continued")),
            d
              ? (0, t.jsx)("div", {
                  className: (0, B.A)(re.IntroLine, _t.IntroLine),
                  children: l(d, i.GetYear()),
                })
              : null
          );
        }
        function Es(s) {
          let [e, r] = h.useState(!1),
            i = h.useRef(null),
            l = i.current;
          const c = un();
          h.useEffect(() => {
            s !== null && s != l && r(!0), s === null && e && r(!1);
          }, [r, e, s, l]),
            (i.current = s);
          let m = h.useRef(void 0),
            d = h.useCallback(() => {
              let p = () => {
                  s == c.unAppID &&
                    Qt.Get().SetGameDetailsPopupAppData(void 0, []);
                },
                f = parseInt(re.strGameDetailsTransitionTimeMS);
              (m.current = setTimeout(p, f)), r(!1);
            }, [c.unAppID, s]);
          return (
            h.useEffect(
              () => () => {
                m.current && clearTimeout(m.current), (m.current = void 0);
              },
              [],
            ),
            [e, d]
          );
        }
        function Os(s) {
          return h.useCallback(
            (r) => {
              r.target == r.currentTarget && s();
            },
            [s],
          );
        }
        function _s(s) {
          let { userYearInReview: e } = s,
            { unAppID: r, length: i = 0, index: l = 0 } = un(),
            [c, m] = Es(r),
            d = Os(m);
          const p = fn(l + 1),
            f = fn(l - 1),
            w = (0, x.Qn)();
          if (r == null && !c) return null;
          let N = (0, B.A)(
              re.GameDetailsPopup,
              c && re.Visible,
              w && re.GamepadUI,
            ),
            L = (0, t.jsx)("div", {
              className: N,
              onClick: d,
              children: (0, t.jsxs)("div", {
                className: re.ContentWrapper,
                children: [
                  (0, t.jsx)("div", {
                    className: re.GameWrapper,
                    children:
                      r !== null &&
                      (0, t.jsx)($n, {
                        unAppID: r,
                        userYearInReview: e,
                        index: 1,
                      }),
                  }),
                  (0, t.jsx)(Jn._G, {
                    index: l,
                    numElements: i,
                    fnForward: p,
                    fnBackwards: f,
                    fnClose: m,
                  }),
                ],
              }),
            });
          return fs.createPortal(L, document.body);
        }
        const $n = h.memo((s) => {
          const { unAppID: e, userYearInReview: r, index: i } = s,
            l = r.GetGameStats(e),
            c = Math.trunc(l?.playtime_streak?.longest_consecutive_days || 1),
            m = r.GetGameSummaryForApp(e),
            d = m ? m.parent_appid || e : 0,
            [p, f] = (0, It.t7)(d, Lt),
            w = us(d, r.GetAccountID(), r.GetYear()),
            N = (0, Xr.n9)(),
            L = pt(),
            W = i % 2 ? "OddGradient" : "EvenGradient",
            R = (0, x.Qn)(),
            ce = hr(),
            De = Ke(),
            Qe = (0, x.hf)(),
            { gameChartData: ft, rank: wt } = (0, h.useMemo)(
              () => r.GetChartMonthlyDataForApp(e),
              [e, r],
            );
          if (f === It.Sq)
            return (0, t.jsx)("div", {
              className: (0, B.A)(
                re.TopGameBlockContainer,
                re[W],
                De.TopGameBlockContainer,
                De[W],
                re.LoadingCtn,
              ),
              children: (0, t.jsx)(br.t, { position: "center" }),
            });
          if (!p || !m) return null;
          let Ee = (0, Zr.wJ)(p.GetStorePageURL(), N);
          x.TS.IN_CLIENT && (Ee = "steam://openurl/" + Ee);
          const qe = ft?.find((eo) => eo.percent > 0),
            lt = qe ? qe.date.getMonth() : null,
            Vt = lt ? (0, y.we)(`#YIR_MonthlyCharts_MonthNoun_${lt + 1}`) : "",
            Gt = Math.trunc(m.total_sessions);
          let Ut = "";
          ce && R
            ? (Ut = `steam://open/games/details/${e}`)
            : ce &&
              !x.TS.IN_MOBILE_WEBVIEW &&
              (Ut = `steam://open/library/details/${e}`);
          const Dt = p.GetName() ?? "";
          let Et = Dt;
          return (
            m.demo
              ? (Et = (0, y.we)("#YIR_GameName_PlusDemo", Et))
              : m.playtest &&
                (Et = (0, y.we)("#YIR_GameName_PlusPlaytest", Et)),
            (0, t.jsxs)(Nt, {
              className: (0, B.A)(
                re.TopGameBlockContainer,
                re[W],
                De.TopGameBlockContainer,
                De[W],
              ),
              children: [
                (0, t.jsx)(zs, { oStoreItem: p }),
                (0, t.jsxs)("div", {
                  className: re.StandardInfoCtn,
                  children: [
                    (0, t.jsx)(Ss, { oStoreItem: p }),
                    (0, t.jsxs)("div", {
                      className: (0, B.A)(
                        _t.YearInReviewContent,
                        re.InfoContentSpacing,
                      ),
                      children: [
                        (0, t.jsxs)("div", {
                          className: re.InfoContainer,
                          children: [
                            (0, t.jsxs)(Ct.Z, {
                              className: re.GameLinks,
                              "flow-children": "row",
                              children: [
                                Qe &&
                                  (0, t.jsx)("a", {
                                    href: Ee,
                                    className: re.GameLink,
                                    children: (0, y.we)(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !Qe &&
                                  (0, t.jsx)(ar.Ii, {
                                    href: Ee,
                                    target: "_blank",
                                    className: re.GameLink,
                                    children: (0, y.we)(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !!Ut &&
                                  (0, t.jsx)(ar.Ii, {
                                    href: Ut,
                                    className: re.GameLink,
                                    children: (0, y.we)(
                                      "#YIR_TopGames_VisitInLibrary",
                                    ),
                                  }),
                                !ce && (0, t.jsx)(Cs, { appID: d }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: (0, B.A)({
                                [re.Title]: !0,
                                [re.TitleLongName]: (Et?.length ?? 0) > 25,
                              }),
                              children: Et,
                            }),
                            (0, t.jsx)(Ds, {
                              gameSummary: m,
                              userYearInReview: r,
                              index: i,
                            }),
                            (0, t.jsxs)("div", {
                              className: re.StatsGroup,
                              children: [
                                !!m.total_playtime_percentagex100 &&
                                  (0, t.jsxs)("div", {
                                    className: re.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: re.BigNum,
                                        children: At(
                                          Math.ceil(
                                            m.total_playtime_percentagex100,
                                          ),
                                        ),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: re.NumSubtitle,
                                        children: (0, y.we)(
                                          "#YIR_Game_PercentPlaytime",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!m.total_sessions &&
                                  (0, t.jsxs)("div", {
                                    className: re.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: re.BigNum,
                                        children: (0, Bt.Dq)(Gt),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: re.NumSubtitle,
                                        children: (0, y.we)(
                                          Gt == 1
                                            ? "#YIR_Game_PlaySession_Singular"
                                            : "#YIR_Game_PlaySessions",
                                        ),
                                      }),
                                    ],
                                  }),
                                x.iA.country_code.toLowerCase() !== "cn" &&
                                  c > 1 &&
                                  (0, t.jsx)("div", {
                                    className: re.StatContainer,
                                    children: (0, t.jsxs)(Jt.he, {
                                      toolTipContent: (0, y.PP)(
                                        "#YIR_Game_LongestStreak_ttip",
                                      ),
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: re.BigNum,
                                          children: (0, Bt.Dq)(c),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: re.NumSubtitle,
                                          children: (0, y.we)(
                                            "#YIR_Game_LongestStreak",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!m?.new_this_year &&
                                  (0, t.jsx)("div", {
                                    className: re.StatContainer,
                                    children: (0, t.jsxs)(Jt.he, {
                                      toolTipContent: L(
                                        "#YIR_TopGames_NewThisYEar_ttip",
                                      ),
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: re.BigNum,
                                          children: (0, t.jsx)(Mt.eNX, {}),
                                        }),
                                        (0, t.jsx)("div", {
                                          className: re.NumSubtitle,
                                          children: (0, y.we)(
                                            "#YIR_TopGames_NewThisYEar",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!w &&
                                  (0, t.jsxs)("div", {
                                    className: re.StatContainer,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: re.BigNum,
                                        children: (0, t.jsx)(Mt.Exy, {}),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: re.NumSubtitle,
                                        children: (0, y.we)(
                                          "#YIR_TopGames_100",
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        ft &&
                          (0, t.jsxs)("div", {
                            className: (0, B.A)(
                              re.GameChartCtn,
                              re.ChartWidthHelper,
                            ),
                            children: [
                              (0, t.jsx)("div", {
                                className: re.GameChartFirstPlayed,
                                children: Vt
                                  ? L(
                                      m?.new_this_year
                                        ? "#YIR_TopGames_firstplayedNew"
                                        : "#YIR_TopGames_firstplayed",
                                      Vt,
                                    )
                                  : null,
                              }),
                              (0, t.jsx)("div", {
                                className: re.GameChart,
                                children: (0, t.jsx)(ns, {
                                  data: ft,
                                  name: Dt,
                                  color: De[`topApp_${wt}`],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(Ws, {
                  appid: d,
                  userYearInReview: r,
                  oStoreItem: p,
                }),
              ],
            })
          );
        });
        function Ss(s) {
          const { oStoreItem: e } = s,
            r = pr(e),
            i = e.GetAssetsWithoutOverrides()?.GetLibraryHeroURL();
          return (0, t.jsx)("div", {
            className: re.BackgroundImage,
            style: r ? void 0 : { backgroundImage: `url(${i})` },
          });
        }
        function zs(s) {
          const { oStoreItem: e } = s,
            r = Ke(),
            i = pr(e),
            l = e.GetAssetsWithoutOverrides()?.GetLibraryHeroURL();
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: (0, B.A)(
                re.BackgroundImageFull,
                r.BackgroundImageFull,
              ),
              style: i ? void 0 : { backgroundImage: `url(${l})` },
            }),
          });
        }
        function Ws(s) {
          const { appid: e, userYearInReview: r, oStoreItem: i } = s,
            l = pr(i);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ws, {
                bBlurContent: l,
                appid: e,
                userYearInReview: r,
              }),
              (0, t.jsx)(Ns, { bBlurContent: l, appid: e, nYear: r.GetYear() }),
            ],
          });
        }
        function Cs(s) {
          const { appID: e } = s,
            r = (0, hs.$5)(e),
            i = (0, os.bB)(e),
            { bIsOwned: l } = (0, ss.ZJ)(r),
            c = (0, Xr.n9)(),
            m = (0, Zr.L3)(c),
            { mutate: d } = (0, ls.s)(e, !i, m);
          return !x.iA.logged_in || l
            ? null
            : (0, t.jsxs)(Ct.Z, {
                className: (0, B.A)(re.AddToWishlist),
                onActivate: (p) => {
                  p.preventDefault(), p.stopPropagation(), d();
                },
                children: [
                  i ? (0, t.jsx)(Mt.qnF, {}) : (0, t.jsx)(Mt.T4m, {}),
                  (0, y.we)(
                    i ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                  ),
                ],
              });
        }
        var Rs = o(78365);
        function ks(s) {
          const { pageData: e } = s,
            { steamid: r, nYear: i, eResult: l } = e,
            c = (0, Kr.W6)();
          h.useEffect(() => {
            (0, Qr.le)(c, "src", void 0),
              (0, Qr.le)(c, "snr", void 0),
              (0, Qr.le)(c, "sP", void 0);
          }, [c]);
          const m = h.useRef(null);
          if (
            (h.useEffect(() => {
              m.current && m.current.NavTree()?.Activate(!0);
            }, []),
            l == Zt.sW)
          )
            return (0, t.jsx)(gr, {
              message: (0, y.we)("#YIR_Error_NoShareNoGameplayNotUser"),
            });
          if (!r || !i)
            return (0, t.jsx)(gr, { message: (0, y.we)("#YIR_Error_NoData") });
          const d = new Ot.b(r);
          return (0, t.jsx)(D.Provider, {
            value: e,
            children: (0, t.jsx)(Ct.Z, {
              navRef: m,
              children: (0, t.jsx)(Gs, { steamID: d, year: i }),
            }),
          });
        }
        function Gs(s) {
          let { steamID: e, year: r } = s;
          const [i, l] = (0, yn.KT)(e.GetAccountID()),
            { userYearInReview: c, isLoading: m } = ca(
              e.ConvertTo64BitString(),
              r,
            );
          if (l || m)
            return (0, t.jsx)(br.t, {
              string: (0, y.we)("#Loading"),
              position: "center",
            });
          if (!i || !e.BIsIndividualAccount())
            return (0, t.jsx)(gr, { message: (0, y.we)("#YIR_Error_NoUser") });
          if (!c)
            return (0, t.jsx)(gr, {
              message: (0, y.we)("#YIR_Error_PageLoadFailed"),
            });
          const d = !c.GetPlayTimeStats()?.game_summary?.length;
          return x.iA.steamid !== i.steamid && d
            ? (0, t.jsx)(gr, {
                message: (0, y.we)("#YIR_Error_NoShareNoGameplayNotUser"),
              })
            : d
              ? (0, t.jsx)(gr, {
                  message: (0, y.we)("#YIR_Error_NoShareNoGameplay"),
                })
              : (0, t.jsx)(Rs.f7, {
                  autoFocus: !0,
                  noFocusRing: !0,
                  focusable: !1,
                  children: (0, t.jsx)("div", {
                    className: v().YearInReviewContainer,
                    children: (0, t.jsx)(Ys, {
                      userYearInReview: c,
                      avatarAndPersona: i,
                    }),
                  }),
                });
        }
        function Us(s) {
          const {
              viewAsUser: e,
              avatarAndPersona: r,
              userYearInReview: i,
              themeYear: l,
              children: c,
            } = s,
            m = i.GetSteamID(),
            d = i.GetYear(),
            p = (0, Xi.b)(l),
            f = h.useRef(void 0);
          (!f.current ||
            f.current.steamid.GetAccountID() != m.GetAccountID() ||
            f.current.year != d) &&
            (f.current = new ga(Qt.Get().SteamInterface, m, d));
          const w = f.current,
            N = h.useMemo(
              () => ({
                bIsUser: e,
                persona_name: r.persona_name,
                avatar_url: r.avatar_url,
                Screenshots: w,
                themeStyle: p,
              }),
              [e, r.persona_name, r.avatar_url, w, p],
            );
          return (0, t.jsx)(Yt.Provider, {
            value: N,
            children: (0, t.jsx)(xn.QA, {
              eAdultOnlyMediaBehavior: e ? "allowed" : "masked",
              children: c,
            }),
          });
        }
        function Ys(s) {
          const { userYearInReview: e, avatarAndPersona: r } = s,
            i = e.GetYear(),
            l = x.iA.logged_in && x.iA.steamid === r.steamid,
            [c, m] = (0, h.useState)(l),
            [d, p] = (0, h.useState)(i);
          return (0, t.jsxs)(Us, {
            viewAsUser: c,
            userYearInReview: e,
            avatarAndPersona: r,
            themeYear: d,
            children: [
              (0, t.jsx)(Qs, {
                viewAsUser: c,
                setViewAsUser: m,
                themeYear: d,
                setThemeYear: p,
              }),
              (0, t.jsx)(Hs, { ...s, viewAsUser: c }),
            ],
          });
        }
        function Hs(s) {
          const { userYearInReview: e, viewAsUser: r } = s,
            i = e.GetSteamID(),
            l = e.GetYear(),
            c = e.GetTopGamesShownAppIDs();
          ha(l, i.GetAccountID(), c);
          const { persona_name: m } = (0, h.useContext)(Yt),
            d = e.GetPlayTimeStats().game_summary?.length;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Vs, { userYearInReview: e }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsxs)(Tn, {
                  userYearInReview: e,
                  children: [
                    (0, t.jsx)(Ri, { userYearInReview: e }),
                    d === 1 && (0, t.jsx)(Xn, { userYearInReview: e }),
                  ],
                }),
              }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsx)(Ka, { userYearInReview: e }),
              }),
              typeof d == "number" &&
                d > 1 &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(Xn, { userYearInReview: e }),
                    (0, t.jsx)("div", {
                      className: v().TimeRelatedCtn,
                      children: (0, t.jsx)(Tt.tH, {
                        children: (0, t.jsx)(is, { userYearInReview: e }),
                      }),
                    }),
                  ],
                }),
              (0, t.jsx)("div", {
                className: v().GraphRelatedCtn,
                children: (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)(gi, { userYearInReview: e }),
                }),
              }),
              !!e.GetPlayTimeStats().playtime_streak &&
                (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)(yi, { userYearInReview: e }),
                }),
              typeof d == "number" &&
                d > 5 &&
                (0, t.jsx)(Tt.tH, {
                  children: (0, t.jsx)(wa, { userYearInReview: e, nYear: l }),
                }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsxs)("div", {
                  className: v().BottomCtn,
                  children: [
                    (0, t.jsx)(Tn, {
                      userYearInReview: e,
                      children: (0, t.jsx)(Fs, {
                        playerName: m,
                        userYearInReview: e,
                      }),
                    }),
                    r &&
                      (0, t.jsxs)("div", {
                        className: kt().ShareOptions,
                        children: [
                          (0, t.jsx)("div", {
                            className: kt().ShareTitle,
                            children: (0, y.we)("#YIR_ShareOptionsTitle"),
                          }),
                          (0, t.jsxs)(Ct.Z, {
                            className: kt().ShareColumns,
                            children: [
                              (0, t.jsxs)("div", {
                                className: (0, B.A)(kt().ShareArea),
                                children: [
                                  (0, t.jsx)("div", {
                                    className: kt().ShareTypeTitle,
                                    children: (0, y.we)(
                                      "#YIR_ShareModal_TitleSocial",
                                    ),
                                  }),
                                  (0, t.jsx)(Cn, {
                                    userYearInReview: e,
                                    steamId: i,
                                    nYear: l,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: (0, B.A)(kt().ShareArea),
                                children: [
                                  (0, t.jsx)("div", {
                                    className: kt().ShareTypeTitle,
                                    children: (0, y.we)(
                                      "#YIR_ShareModal_TitleProfile",
                                    ),
                                  }),
                                  (0, t.jsxs)(ar.Ii, {
                                    href: `${x.TS.COMMUNITY_BASE_URL}profiles/${x.iA.steamid}/edit/showcases`,
                                    className: (0, B.A)(kt().ShareButton),
                                    children: [
                                      (0, t.jsx)(Mt.KJW, {
                                        className: kt().ShareLinkIcon,
                                      }),
                                      (0, t.jsx)("span", {
                                        className: (0, B.A)(kt().ShareText),
                                        children: (0, y.we)(
                                          "#YIR_ShareModal_AddShowcase",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsx)(ai, { userYearInReview: e }),
              }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsx)(wi, { steamId: i, year: l }),
              }),
              (0, t.jsx)(Tt.tH, { children: (0, t.jsx)(Zs, { year: l }) }),
              (0, t.jsx)(Tt.tH, {
                children: (0, t.jsx)(_s, { userYearInReview: e }),
              }),
            ],
          });
        }
        function Ks() {
          const s = Ke(),
            { persona_name: e, avatar_url: r } = (0, h.useContext)(Yt);
          return (0, t.jsxs)("div", {
            className: v().AvatarName,
            children: [
              (0, t.jsx)(pa.Ul, {
                strAvatarURL: r.replace(/\.jpg$/, "_full.jpg"),
                className: v().UserAvatar,
              }),
              (0, t.jsx)("span", {
                className: (0, B.A)(v().UserName, s.UserName),
                children: (0, y.we)("#YearInReview_PossessiveUserName", e),
              }),
            ],
          });
        }
        function Vs(s) {
          let { userYearInReview: e } = s;
          const r = e.GetSteamID(),
            i = e.GetYear();
          return (0, t.jsx)("div", {
            className: (0, B.A)(v().YearInReviewContent, v().TopAreaSizer),
            children: (0, t.jsxs)("div", {
              className: v().HeaderCtn,
              children: [
                (0, t.jsx)("div", {
                  className: v().RewindHeader,
                  children: (0, y.PP)(
                    "#YearInReview_SteamRewindHeader",
                    (0, t.jsx)(Ks, {}),
                    (0, y.we)("#date_year", i, " "),
                  ),
                }),
                x.iA.logged_in &&
                  (0, t.jsx)("div", {
                    className: v().HeaderShareCtn,
                    children: (0, t.jsx)("div", {
                      className: (0, B.A)(kt().ShareArea),
                      children: (0, t.jsx)(Tt.tH, {
                        children: (0, t.jsx)(Cn, {
                          userYearInReview: e,
                          steamId: r,
                          nYear: i,
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function Qs(s) {
          const {
              viewAsUser: e,
              setViewAsUser: r,
              themeYear: i,
              setThemeYear: l,
            } = s,
            c = [
              { data: 2022, label: "2022" },
              { data: 2023, label: "2023" },
              { data: 2024, label: "2024" },
              { data: 2025, label: "2025" },
            ],
            m = (0, h.useCallback)(
              (f) => {
                l(f.data);
              },
              [l],
            ),
            d = (0, x.Qn)(),
            { bAllowDevToggles: p } = C();
          return !p || d
            ? null
            : (0, t.jsxs)("div", {
                className: (0, B.A)(v().DevToggle, Bn.ValveOnlyBackground),
                children: [
                  (0, t.jsx)("div", {
                    children: "Debug Only: Toggle First Person View",
                  }),
                  (0, t.jsx)(Vr.RF, { onChange: r, checked: e }),
                  (0, t.jsx)("div", {
                    children:
                      "Debug Only: Change to view the contents in the css style of a different year",
                  }),
                  (0, t.jsx)(Vr.ZU, {
                    rgOptions: c,
                    selectedOption: i,
                    onChange: m,
                  }),
                ],
              });
        }
        function gr(s) {
          let { message: e } = s;
          return (0, t.jsxs)("div", {
            className: v().MissingUserCtn,
            children: [
              (0, t.jsx)("div", { className: v().GenericBackground }),
              (0, t.jsxs)("div", {
                className: (0, B.A)(v().YearInReviewContainer, v().ErrorMsg),
                children: [
                  (0, t.jsx)("div", {
                    className: v().SectionTitle,
                    children: e,
                  }),
                  (0, t.jsx)("div", {}),
                ],
              }),
            ],
          });
        }
        function Fs(s) {
          let { userYearInReview: e } = s;
          const r = Ke();
          if (!x.iA.is_support && x.iA.accountid != e.GetAccountID())
            return null;
          const i = e.GetYear();
          return (0, t.jsx)("div", {
            className: (0, B.A)(v().YearInReviewContent, v().ConclusionCtn),
            children: (0, t.jsx)("div", {
              className: v().SectionTitle,
              children: (0, y.PP)(
                "#YIR_Conclusion",
                (0, t.jsx)("span", {
                  className: (0, B.A)(v().ConclusionName, r.ConclusionName),
                  children: s.playerName,
                }),
                i,
              ),
            }),
          });
        }
        function Zs(s) {
          const { year: e } = s;
          return (0, t.jsxs)("div", {
            className: (0, B.A)(
              v().YearInReviewContenredPadding,
              v().FAQSection,
            ),
            children: [
              (0, t.jsx)("div", {
                className: v().SectionTitle,
                children: (0, y.we)("#YIR_FAQ_Title"),
              }),
              (0, t.jsxs)("div", {
                className: v().Questions,
                children: [
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_Dates_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_Dates_A", e),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_Offline_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_Offline_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_Types_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_Types_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_Share_Q"),
                      }),
                      (0, t.jsxs)("div", {
                        className: v().Answer,
                        children: [
                          (0, y.we)("#YIR_FAQ_Share_A"),
                          (0, t.jsxs)("ol", {
                            children: [
                              (0, t.jsx)("li", {
                                children: (0, y.we)("#YIR_FAQ_Share_A_b1"),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, y.we)("#YIR_FAQ_Share_A_b2"),
                              }),
                              (0, t.jsx)("li", {
                                children: (0, y.we)("#YIR_FAQ_Share_A_b3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_ShareFamily_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_ShareFamily_A"),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: v().Question,
                        children: (0, y.we)("#YIR_FAQ_Controller_Q"),
                      }),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_Controller_A1"),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)("div", {
                        className: v().Answer,
                        children: (0, y.we)("#YIR_FAQ_Controller_A2"),
                      }),
                    ],
                  }),
                  e == 2022
                    ? (0, t.jsxs)("div", {
                        className: v().QuestionCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: v().Question,
                            children: (0, y.we)("#YIR_FAQ_PrivateApps_Q"),
                          }),
                          (0, t.jsx)("div", {
                            className: v().Answer,
                            children: (0, y.we)("#YIR_FAQ_PrivateApps_A", e),
                          }),
                        ],
                      })
                    : (0, t.jsxs)("div", {
                        className: v().QuestionCtn,
                        children: [
                          (0, t.jsx)("div", {
                            className: v().Question,
                            children: (0, y.we)("#YIR_FAQ_PrivateApps_v2_Q"),
                          }),
                          (0, t.jsx)("div", {
                            className: v().Answer,
                            children: (0, y.we)("#YIR_FAQ_PrivateApps_v2_A", e),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        }
        var Js = o(58732),
          qn = o(51079);
        const ea = { Home: (s, e) => `${Js.B.YearInReview(s, e)}` };
        function Xs(s) {
          return (
            (0, It.YM)(),
            (0, t.jsx)(qn.Ay, {
              domain: "store.steampowered.com",
              controller: "yearinreview",
              children: (0, t.jsx)(Kr.dO, {
                children: (0, t.jsx)(Kr.qh, {
                  path: `${ea.Home(":steamId?", ":year?")}`,
                  render: (e) =>
                    (0, t.jsx)(qn.Ay, {
                      method: "yearinreview",
                      children: (0, t.jsx)(Tt.tH, {
                        children: (0, t.jsx)($s, {
                          steamId: e.match.params.steamId,
                          year: e.match.params.year,
                        }),
                      }),
                    }),
                }),
              }),
            })
          );
        }
        function $s(s) {
          const { steamId: e, year: r } = s,
            i = h.useMemo(() => qs(e, r), [e, r]);
          return (0, t.jsx)(ks, { pageData: i });
        }
        function qs(s, e) {
          const r = s == "my" ? ee.iA.steamid : s || "",
            i = parseInt(e ?? ""),
            l = r ? new Ot.b(r).GetAccountID() : 0,
            c =
              ee.iA.is_support &&
              !!(0, x.Fd)("localization_advanced_access", "application_config");
          return {
            steamid: r,
            nYear: i,
            eResult: Number.parseInt(
              (0, x.Fd)("yearinreview_eresults", "application_config"),
            ),
            rgOtherYears:
              (0, x.Fd)(
                `yearinreview_otheryears_${l}_${i}`,
                "application_config",
              ) ?? [],
            bLocalizationAdvancedAccess: c,
            bAllowDevToggles: c,
          };
        }
      },
      32651: (U) => {
        U.exports = {
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
      89767: (U) => {
        U.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (U) => {
        U.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (U) => {
        U.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      20881: (U) => {
        U.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      48963: (U) => {
        U.exports = {
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
      17247: (U) => {
        U.exports = {
          Container: "_2_XDG9R-XpB-eIThkLBCSM",
          Frame: "_1jXJqI6egsVN9-CmA-JFSJ",
          FadeInGrid: "_2bPST_zPPtsm3_ju1z0sQB",
          FadeIn: "_2_0ROqVRdr3CcSZ79hAAVR",
          Square: "_3j8KRorQcTw5QNG3CCiWq7",
          Drift: "_2kCjs9_12D05MUxaukuLYA",
          Grid: "_3vVKhPGkKDvYoSLFYnJYFg",
          Tile: "_3EUu345VfD4sR0IeRyh0nG",
          WideTiles: "_3Y5PVvHgh3lGKAQh3IZY7g",
          FadeInTiles: "_2xidke4A8OynmVULh2_c30",
        };
      },
      96002: (U) => {
        U.exports = {
          narrowWidth: "500px",
          AchievementsCtn: "eW4gzXOFFjJmbPpnmLEsW",
          AchievementSectionTitleCtn: "ZYuVh_jByWjEiZwi_1F4D",
          AchievementLinkCtn: "_1A8oO_DYGf_JNfZh8P8cmF",
          AchievementLink: "_3C_8h8nr-D-hecmkF9QN7d",
          AchievementSectionTitle: "_1EIvaYu5QSWg8151LW-jqC",
          ElementFadeIn: "_3wH3B2-F3WSN3wgX9I6E2k",
          AchievementsRowCtn: "_1NYinaqqvjEHq4uImqKSbY",
          AchievementRow: "_14q6Kd9Yidcxi1X1KUxl2q",
          AchievementsTitleCtn: "mA8l4gfC6pg75YdZBvjDk",
          AchievementsBigNum: "_2FvUpx13BKH37sVztlDnpK",
          AchievementsSmallText: "_3H2xA2HF93zu8iENYyzEKg",
          Achievement: "_3jyFz4Q4D6NpReMRSXoiK3",
          RareAchievement: "_1OjH2qNVqYnsbJM2FX4UHe",
          AchievementIcon: "_2TUXykXU6g4otWY6JozzUI",
          ContentRestrictionText: "_1IKOfRrOKNPGjzGAbgTjE_",
          BadgeBoxIntro: "_3Cn6sA1BgWhcU0OndmfDJ",
          BadgeBarFiller: "LQw7WwNM7FoJiy3k15cQo",
          Appear: "_3mgR2GHe98OhWWVYPWA3Ic",
        };
      },
      13824: (U) => {
        U.exports = {
          MonthGridOverallCtn: "_39riY1ALzXddeLUi4b6njV",
          MonthGroupCtn: "_2PJ5dHX9Oih-78STp7Gh9k",
          FirstPlayCtn: "_1flKypEsMgcTMxdLOSn0A2",
          MonthTitle: "_2nSdjNpwdgPuYMr4zlXPEO",
          GameCtn: "_3LAV6o8j79NTSpKVTX-ONT",
          AllGamesBGImage: "_2VKXXNuV16rgy-mMP0blns",
        };
      },
      20175: (U) => {
        U.exports = {
          ImagesCtn: "_3JGbh53UazrhAaR6KXi8kg",
          TileSquare: "_2_U9r6EulYb2JwaZf9UwLi",
          TileGrid: "_3smtrFobH8_FPmgFkf2o_v",
          Sub40: "_2X3LKsjOCckZcubnNUbRM2",
          Sub20: "_3cbAf2Xk2Lfluxi1Ojnru0",
          Sub10: "_3_1vYOshswOh0vozKQSWaZ",
          Tile: "_16aTxalT2BhfKWNXqsBlxO",
          SingleGame: "JmN1Eo3aF2wu9FFFgic6Z",
          ImageTint: "_1R2cNHbD97TvCVeJbF_CfG",
          BgImage: "_1qOz25FACHWC7ZHi01fny1",
          ElementFadeIn: "_28HSFCMg_eIIlJ3r0UpPOm",
          BadgeBoxIntro: "_1AP0QN4L8dMuJ-MARIH7fT",
          BadgeBarFiller: "_1rQO1VsQaovoJdnwLQuEKM",
          Appear: "_2IAPuee0PtKJR3f7exLFT1",
        };
      },
      54094: (U) => {
        U.exports = {
          narrowWidth: "500px",
          TopHonorsCtn: "_1fuaqG0AL10aJNg8K_c_IU",
          BadgeBox: "K8vmWivWd7RVIckV95vAY",
          BadgeBoxIntro: "rfMXqTSox8ll__3Xmf3Oj",
          BadgeContents: "_2nNt_KIszccOtLf0WzUrIR",
          BadgeRarity_common: "_2_l6GtDYFnoyfVAacbyavx",
          RarityText: "_22TRHKdLUqaIFHF9wYsAkC",
          BadgeRarity_uncommon: "As1w9Z5lMhS31dnkvL5s1",
          BadgeRarity_rare: "_2_N4mS8cXcF67roPPhRTMk",
          BadgeRarity_epic: "_1f88ffr-7Fz7QWaK_zWrdU",
          BadgeRarity_legendary: "_3yYtr6MIzi7bCGhCAE6Ppd",
          RightCol: "_2wSSnjW5drN9i_2gGFxgy",
          RarityInfoCtn: "_9J952xXBVKswIlEmoOyoI",
          RarityBar: "_2ZvJp_rD6rOYVYPDALvtT8",
          RarityBarSegment: "_1eX3GDh_iGLW_M-ucuiZLg",
          FillerBar: "_2vEIDtSp6Gl8JcQ00rILPl",
          SegmentCap: "_2ImXaZqg410GKKDQa3Pbn9",
          BadgeBarFiller: "VvnUA7gDdbtSx5hRJrjdP",
          RarityDesc: "_2k7qd3KsckXv9UOPyfG_0Y",
          BadgeName: "_3hYW021Aqnc0gD0II-8MHL",
          BadgeImgCtn: "_1lDoCOc4W8CAwmYRBEQAgX",
          BadgeDesc: "_3cEWqPn5E4Jn5zZw0sHFdz",
          BadgeGetBtn: "_3XJ0GSTTp7c1x2fO9slbIQ",
          SpiderAndNumbersCnt: "_2smZfwTjxr99Z9G_YHKcfh",
          HalfwidthColumn: "_55cHDEWVgkgz-SPC3r7oT",
          SpidergraphContainer: "_1rrwJfEs-O1ewF5e3rvfT3",
          GraphBox: "_1tAaTMCqxdAxdDZqioNZZS",
          RadarText: "_1lysNWfa68EPC-Gs0MLiBY",
          RadarTextContainer: "_1NnV04cS9KHGEXhpeoeQ3a",
          SpiderResponsiveContainer: "_2m6tajXQvixPE5AD-ZpcSv",
          RadarChartLegend: "_25k2M_lXfkjbMBklQiNdjG",
          NumbersRowsCnt: "_26Xq-LpSAolU4ou9Y-DAua",
          NumbersRow: "_1hST62nyIzmGRJd-9FO5NH",
          NumbersLabel: "_316XVsECeACtqEuFhbw0z9",
          NumbersValue: "wZIDD_Uf6MaGoQQi4XP40",
          FillerDots: "mNltGcIak52Q1s5Zf0NIU",
          Disabled: "MwG2ah1xIjS4OqRtDiCFg",
          SectionLabel: "_3inzpKl31BtWhQSbg_7YwD",
          SectionDesc: "_1rEaTcJ6ze8AFIgxfZQ2yo",
          PlayBehaviorContainer: "C-BemrA90gLEsdt8GXUCW",
          ProgressBarFilled: "YvZP7EccXynGhWGolm-0V",
          GlitterBox: "_2eSDMaWxXPgE_9pGt-244C",
          GlitterSecond: "_2aQpSZj3RzmOr4PMTC1yYv",
          Glitter: "MrG3WtVvi1CJJOHxWLTup",
          glitterMove: "_6daCzBGcfUECEWT0DrkTb",
          glitterMove2: "O0KfKVlRf_7MOnYxM78Ul",
          PlayBehaviorSectionSubTitle: "_1YOa2_BDd_TkMANU6mMJE7",
          PlayerBehaviorProgressCnt: "_1X-jN8ooh5IUIJLkVhijmy",
          ProgressBarWrapper: "_1YwMMTi70jbfbwWfypUKo2",
          ProgressLabelsCnt: "j7FRn5nh3Vgo5rwVtLZ-d",
          ProgressSteamAvgLabel: "_1BlJPGLkneFv9cCQ77C_Dy",
          progressBar: "SM2hr-JEmMZ3nNlzXtoAM",
          Appear: "_21N1VxABguGyT6ysf3ZaZU",
          ProgressIcon: "_2kKy0ggIAf1owsS46dPOsP",
          ProgressIconSVG: "_3pR8vNlF4fw-IYTm2aQmyD",
          ProgressRightSide: "_3I2K8N7mKHswxhexlXUcC4",
          ProgressBar: "n5ZPCAGDZJjDaAgiZNWlM",
          ProgressLabel: "WJvSwYLbTMOL4rOFTJjHI",
          PlayNewnessContainer: "_1PSNF8opqp5pTAsjGZcEOx",
          GameNewnessComparisonContainer: "_3pgx0DerD0LSS9-eKcf4Hm",
          GameNewnessDataCnt: "_1mb_OZ_h-Dm2kW0s0v_koN",
          WheelChart: "NAtJjAiS2Shk-7DYc3FKY",
          WheelArc: "_3f8H_QF6WzUP1JLNlg-3nL",
          Active: "M68lG7ooQ9Qf__kYeYbw3",
          RightSideContainer: "_1U6F5GMm_PUsOkT5j_u0lh",
          DataBoxesContainer: "_3hCn2uxdtjvNUA_7-OQQue",
          FlavorLabel: "FLK0eC7Hha2-s1lmHSGS1",
          DataBox: "_3_yBPJ3Dz_41t_ynzRzu5W",
          PercentageLabel: "_1CY52kiA0KYztlYn57Xr_J",
          PercentageDescriptionLabel: "_3lRjsvADdzItoX6kp9ZA3l",
          DataBoxArrow: "_1KVkdXPA9foh8DFM-qCxAK",
          GameNewnessTitle: "_1XdZHYD0-hj6KSukuao0aQ",
          ElementFadeIn: "_1CU84LiLM_7J6_557M5kgY",
        };
      },
      10738: (U) => {
        U.exports = {
          narrowWidth: "500px",
          strGameDetailsTransitionTimeMS: "300ms",
          TotalHoursContainer: "v41gDiFwzw3DGnwP-cALt",
          HoursPlayed: "xoO6mo4p8_IOElI9H4Y5m",
          TotalHoursSubtitle: "_2-sdJ9wh7eHK4w4Voqc9ln",
          FullWidth: "_17wR6FHMEczf-g1zjUy-I0",
          TopGamesContainer: "_2Y1sojYqIjMbXoPIYQcNCp",
          TopGameTitleCtn: "_34JGPXmnQsOCJxAEu1xcrt",
          TopGameTitle: "_19je0cCd02CNGNMBOdci9V",
          TopGameBlockContainer: "jYyY7c20MJpyHRM26h1uY",
          LoadingCtn: "_2gZk9_4Xzl3ad1N8aa-cu0",
          OddGradient: "_245SNjjS1E3LEBXq1-r4bP",
          StandardInfoCtn: "_25MpyGTI8DJW4Zs8kPxdPu",
          NumSubtitle: "_2byk5HZvPT_RuATttbQ_5u",
          IntroLine: "_1elCDgKXuMsJGX3ide6oB3",
          Title: "_1CZyBeiXVNP99-3wCbR-u1",
          StatsGroup: "_4BvwvO3VgH6ZG7Qm9sktR",
          EvenGradient: "zLHeIjcDA7wGAKOP0whhC",
          SelectedInfoCtn: "_3fxvzSnvVc-dF2juJkRS5D",
          BackgroundImageFull: "_22ewA8ylzFNgyWrTZydfoX",
          ElementFadeIn: "_3nWeazHfpRmP8ACDtkkOTP",
          BackgroundImage: "_22vHC3-heyz9GnK5oX9K4g",
          InfoContentSpacing: "_2koF9YfeckrXhWH_6u-oPn",
          InfoContainer: "_1znVngHcZoMW202kwdao1x",
          GameLinks: "_376D9_KYoFhWD_jaMVCiL5",
          GameLink: "_3AJLZMHaJMHjqz8GnXgOXM",
          AddToWishlist: "_3Tbtm47DDFL79uIDv2jG7F",
          TitleLongName: "_3dIe92zTA3DZi1O9bKh2is",
          StatContainer: "BgocQlDSBw3hX4WIkeucS",
          BigNum: "Qrj9IL_mXAruukOvqwEQs",
          ChartStuff: "eE5uoTvZkRDHrLchbI4qZ",
          GameChartCtn: "_3RG2kKm1w-tWHsasI1rtFQ",
          GameChart: "_1pAvTYGtmTjIiVfjHw7UyD",
          GameChartFirstPlayed: "_2YyInrut3rASUln22zAIKA",
          ChartWidthHelper: "_124tZna8-zA2IxlGG1PCkV",
          GameContentCtn: "_28_8DbvXMfuGo0s0n7qPjC",
          GameCtn: "mYJUXAjxXDya5F1IOGXzA",
          GameItemDetails: "AcWl62PgtFqrKdMyKAQz1",
          GamePlayDetails: "_2tZ0ob7D8-SB3-4PEaJx_c",
          SteamDeckGameCapRow: "_22QsAjZhFOTIZrzllIurWw",
          CapsuleCtn: "_1tYDn7WYcdPWCEqCkNz-Sh",
          Appear: "_35970dLKkA_4fmagrjhQ46",
          FirstPlayCtn: "_189YieA8K_Mw9Al9s7_eIA",
          SpecialFlags: "_2pkhaqOq1UN7nIJG2porVE",
          DemoPlayDetails: "_1G35DzHjQTcCERQC-ECCLG",
          PlaytestPlayDetails: "_3t18OQQyxYzrBX3bQTTn8_",
          PlatformChartsCtn: "_2jWNP3arYY1BL3XcHAn84H",
          PlatformSpacing: "SCcKgk6BtdKuw9lsfGyYc",
          PlatformChartsRow: "_34dEzfz9OEnuEakksZvf9p",
          PieCtn: "_1LEPaxVodeDXqbGrLtA3Sy",
          GraphTitle: "NZbnzXMjU4o-X5NCZCwpV",
          PlatformDetailsSetup: "_3cAa7I-1ce0j1_Eg_kDiqB",
          LongestStreakGamesWrapper: "_1dN12HR7e2nKa7EjxxZQqM",
          CapRow: "_1eIbxOvxTgYUrKNzdR-L2S",
          LongestStreak: "MPGp0O3RzT0Q49w0c0qP0",
          AnimateCap: "_2otiVZWl9joMU9AEAW2Kow",
          StreakCtn: "_1Au1R3IqWALErUW3-9bU1c",
          TimePlayed: "ymaKsi0nft6kaA8oiJG1G",
          UnavailableGame: "_2-4VNSMEhhZ-xdD0370G8f",
          GameTitle: "_3_zycx95Xq_sda4DXlejZ3",
          GameDetailsPopup: "_3WtIxWH7i_hDPowMRyjdvD",
          Visible: "upLCDXwVTCA0UMfy-QsCt",
          ContentWrapper: "Nl_0Z8YOWE5w_X1p7fe_l",
          ButtonCtn: "_3BQdAb7-SQZ5czq4iF3IZy",
          ButtonIcon: "_16_hduxJtJFKPM6lpvyCv6",
          Disabled: "_2m3wA7jwIPPZv7sDP6RqFd",
          GameWrapper: "_3glI8tpJguLJ9Sv4yRyR0G",
          GamepadUI: "_2MnncrzvrUVL3Xm9OJiabl",
          MoreButtonContainer: "_3FFNVwcbTVx-7hdZ7OprmX",
          ShowMoreBtn: "_2KKzOhD1eO3N_NJLw4IsEf",
          BadgeBoxIntro: "_3b736i-37o9DisLoo-BdFc",
          BadgeBarFiller: "_2Fka1tXRnFsKNRxvNc7CXU",
        };
      },
      5751: (U) => {
        U.exports = {
          narrowWidth: "500px",
          FriendCtn: "QUjIgprzA6Kbs7xBAZ0G4",
          FriendsSharedSection: "_2Rq_zPIIJLZ1-QzjOI_QoE",
          FriendsSharedSectionTitle: "_35laQj1c49taZ9qr-yWwvU",
          FriendsGrid: "_3rWLm6o2EmBKqcTkRck7VQ",
        };
      },
      40216: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Video: "_1M1FzBz-vwcF2DlRDw6aJU",
          PlatformDataContainer: "_2KkuIOs5TU9Im57khW5Mjx",
          DeckContainer: "SRvgXpX46BGk3ExxAmzXp",
          StatsRow: "_2wwiTr9_1mZBnNSqY8TUY",
          SectionSubTitle: "bDYxzNyICQbYgW4xU4OV3",
          Disclaimer: "_3Lh3IS123CdB1UnKrM-UqX",
          SectionTitle: "U-nH5AEIm21jmfNmy9D62",
          ScreenContainer: "wclk5mJZGY7HN8R39K9UL",
        };
      },
      7253: (U) => {
        U.exports = {
          YearInReviewContainer: "_2Esrbjun6oDMfm3z0_S9Qo",
          YearInReviewContent: "_34xjVN8zuusfY6i5pdeRmd",
          TopAreaSizer: "cfYlTBD9UMEGy2eJy5IOW",
          TopHonorsContent: "_1prXkqO0MJWkcqW8bantCg",
          TabCtn: "_1vG6SnFZi-39wNl7yLagkJ",
          TabBar: "_3wXsAskmaHT7gqXr1IRL-q",
          Tab: "_2s9Wnaogy1AMi7QV2JxB-a",
          HeaderCtn: "_27O_99InrFLHyhSohDCxXU",
          RewindHeader: "_1JMmapAfV9CHfT-jwn3cYd",
          AvatarName: "_1Tj700YdecW57M1F9BtRnJ",
          UserAvatar: "-rUtuwXaIuwLDG9V4cUCC",
          UserName: "PVtbr3rlq7ect5ubSQ9F2",
          InlineUserName: "_1dsNG4PwglSIFcdCyDXQ_W",
          SectionTitle: "_1BNeBwWm-o15qeck5usEnN",
          Appear: "jZQYm4z4716xvqrUBHc_v",
          SectionSubTitle: "QI8iZ_nw5g3Y50IrU0oCr",
          SummaryArea: "_3uAxHEp9ysLQlzG-sK70cA",
          SummaryGridCtn: "_2T_rWOusDD7hI72GWqvSxy",
          SummaryCtnShadow: "tFnsQF7Hz95xX6SAoMsJ1",
          SummaryGridStandard: "_3ssxngi9TwcdmavYrjhJu0",
          SummaryGridSparse: "_13eGKeML2QcpA8dIvk-C96",
          GridItem: "rQGunY6vAvoBjpyGWmO7L",
          Game0: "_2gomgwC7T6AApxhCwH9y81",
          Game1: "_3e_VgLcpwHUfSQTu0yecqV",
          Game2: "_1zUzIl0TemMycLw8-ydBS0",
          OverviewBlock: "_3I6H8xkzT-CN3k2aPbncrO",
          BackgroundImage: "_1QgHJQJkFzU0eO3k4iRMeg",
          StreakBlock: "_1HLlwSlgqdvbwC_QGMBkLu",
          SummaryBlockHugeNumCtn: "_10b7HEOu3JIvH2oxFq98jE",
          BigNum: "_1nw1AxFXoiKpq_vOQ2gxSo",
          HardwareBlock: "_2eKuac26y2RDqwd3hijKhx",
          DeviceBlock: "_2JQ-inucnlchcJHltk89o4",
          SummaryCtn: "_2lymW1w_z1bts7qBxqDez-",
          SubtleBorder: "_2uIEUUlmsOtQ_cCEUHLzFM",
          HardwareSummary: "_3t5h2iZU4-U2vzsydxHQHU",
          ContentCtn: "_2wndfjAf02YLWuZTrl3Upk",
          KeyboardPortion: "_2sGNJXZZvAQsMvvsHQpsi9",
          Stat: "_3iusuePDL7HJ0BBMvsswXN",
          ControllerPortion: "_2Rju5NBn6F8SrpJhuKw0n-",
          Small: "_3f50VItIYkZXyjyyYuI5tI",
          Large: "_3BVO6m6Gnm0Chutro2BvHY",
          Subtitle: "Hm6JxuYw44F8HImXpU6rv",
          SummaryBlockGameName: "_3mF7QTrg76rUpW_7ZkH6Cj",
          SummaryBlockExtrasCtn: "uoFglYZQgZ3E6nWuPOoNS",
          BackgroundImageCover: "_1Cg4zw9p61lU_f4mrj9CVc",
          Achievements: "rYd4jy19WhWo8KETr4H-0",
          SummaryBlockTitle: "WH6tAR8H_SDsgV0sr_vL2",
          YearSubtitle: "CccBlIamN5QHiR2hhrRs7",
          Big: "_22GbSR4dXDNqFH8C_jR7wU",
          StatBox: "bk_lIAnpiU1e8qA_nznqG",
          SubSummaryCtn: "_2eMcK6ctsM113Dn4baXnwV",
          LongestStreakStat: "S_D1GGmEcTX1dGQp2KsjD",
          SmallText: "_3f1C4a_ZeRlqnBRzzCZDti",
          ThreeNumbers: "_2ZvOGrXnag650oklI7V0Om",
          SixNumbers: "FXwKG2EZBUov0iVhUTN4x",
          SmallLightText: "_3JNlrvwokXNRohEO0Tvs4e",
          CompareCtn: "j2MatsBj6tYWgcbtnkImS",
          CompareArrow: "wbWwg_omLILncKnMkKpsw",
          CompareText: "_3Ljt05PFk5ZfE26qoQ4-u5",
          ArrowUpCtn: "_1PZY3fz_RgHgbaH2lv2iNT",
          ArrowDownCtn: "_15faDGb4x4EbGg9sPldGZt",
          DeviceSummary: "KvSx-L-06AGp-qLrpef2c",
          HardwareStats: "_2qesp6PQPKseF-t6dpD3Wq",
          GraphRelatedCtn: "_2fmyth7b8H4gIhRBFczy5e",
          TimeRelatedCtn: "_2KxtKJjzlzIuzapjVSKqNz",
          TopHonorsSection: "_2EdxrhGWVNO8mvMC8NvWh_",
          AllPlayedCtn: "_2ofWP-i86B2a4xH6i-k3P3",
          AllPlayedContentCtn: "eP1XjsqRoD1zipUPQayu0",
          AllFirstPlayedCtn: "_1KfUzP0XKpB4290fXK8ify",
          DevToggle: "_1JBThC4rQWQ9zF5EMfQ4MF",
          MissingUserCtn: "_7HO2RlSAV0C6uHhSoW4i9",
          LogInCtn: "_3G68ot7J5tbGGa0Ee0wBIH",
          GenericBackground: "_3Bs8RBdWes0mqDsucdIzs",
          LoginButtonCtn: "_1dzf13YE6Dr2CEZy3nmiqB",
          ErrorMsg: "_2MjJiHLsSfL2DiDi_MPzUA",
          HeaderShareCtn: "_2N4fkkQz0G3s4han4AOTqr",
          ConclusionCtn: "_16sGmr-phaS10eLa666GJI",
          Questions: "_2JfwVZoBEMm3bmuUypCQad",
          FAQSection: "Y4GNRIKAMRdKmKxoYF8vm",
          QuestionCtn: "O3eoDWRpFpwI3gVzDZrmx",
          Question: "_7SV_vDBmbutmYDI4bHuk7",
          Answer: "NUC9MsCLgFupOBlmVEFD4",
          BottomCtn: "_2Ie0FCf-KNZznJYeFPagr2",
          ElementFadeIn: "_15L4egKWSvfAYxDxkQ8JYL",
          BadgeBoxIntro: "_3AZJqdqiXdE75tiaa7ZNUO",
          BadgeBarFiller: "_1HKcWglObNA64EsrdCdgrr",
        };
      },
      11498: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Section: "_3PAniBq6rjYc2m36IugM4q",
          SectionTitle: "_2Pj_j5ySAIbAQCZJXXHaxC",
          StreakSubTitle: "_23EJkuDULHTcznUJFfQClS",
          LongestStreakDailyCount: "_3Mls26KZCqFSTSheIHbQGV",
          StreakSizeCtn: "_2q-ySU-PiZjoMUj-6FcbKE",
          LongestStreakNumber: "_2mVNLmFQcHGqNencPh5yTz",
          StreakDates: "_1QUGOSy4PRgUezrY3wotbN",
          Appear: "mGVafvcRBs0HMzFZzM-DJ",
          LongestStreakGamesWrapper: "_3PpAFVa_jQ0ywCx7Xwf5BO",
          CapRowTitle: "_3odIeGfNSYjE1Pco5IxcMk",
          AnimateTitle: "_2v_Mh0aWrgvAsocnFFwGZ6",
          StreakCtn: "oyIC-gr9l17BgbvPxkiEz",
          CapRowCtn: "_1Qu-b7iJ7_WLnqhbkGK8KS",
          StreakBarCtn: "_18hECsdhmWyKkMjz9s4lE9",
          StreakSizeFullBar: "_3PQ0fWKugP_c_2ll8h9tbd",
          StreakBarAppear: "_3U_VC64UnvAlsdw8U3esu6",
          Tick: "_1dWifBSphUmwpzW4VJMACF",
          StreakTicksAppear: "_3baMsQloxlceJn-CpEUdn4",
          StreakTickCtn: "_1mi4nzggFHFLfhhTZbEFel",
          LargerTicks: "_GxOA0m2bytLLUw5q2jIT",
          LongestStreakBgImage: "_17zwGMeaO0XJXSkPq7a04I",
          ElementFadeIn: "_3KSWuVf_eGV3lstWKlCK_U",
          BadgeBoxIntro: "_1OHTIKYtZ9Ow6rX25gdfOo",
          BadgeBarFiller: "_1c-hMxFIRB9bFBmuwCHzvX",
        };
      },
      1946: (U) => {
        U.exports = {
          OtherYearsCtn: "ZFr-zkTzmpySQuVgzxYUD",
          OtherYearsHeader: "_3Y2GCNOtGNo0Xe8r1Kt626",
          OtherYearLinks: "_3Uhn7ap72dGDfQpLDwBkcX",
          OtherYearLink: "_3518yDLyo2qkU1CI0RYXgG",
        };
      },
      30386: (U) => {
        U.exports = {
          narrowWidth: "500px",
          ScreenshotsCtn: "_3z56d8ZAw1m7tymCPKLnZG",
          ElementFadeIn: "_2MMYVAwyNusl-34nkFkuct",
          ScreenshotHeader: "_2L22tSzCNjfYgYv7TmkZFx",
          ScreenshotRow: "_1iyC0Ag6XVeawCcnXnGk84",
          ScreenshotCtn: "_2f-mtEH2nBQPdLLAhFuHAV",
          ContentRestrictionText: "_3AVAQ0ejsc_Yx_RdEes-tz",
          BadgeBoxIntro: "AGlFAzZf1pf-pjqSJ7HCU",
          BadgeBarFiller: "_1kJTWtILvxJ2sJJe5I7WAu",
          Appear: "_3sCSuiPiK6YZP4YqJit8xO",
        };
      },
      60197: (U) => {
        U.exports = {
          ShareOptions: "_3JS3uvYxmm4uxg9LKg7V5v",
          ShareTitle: "_2KB0bv4bJkXKXE8ulaq-Gt",
          ShareColumns: "WWOHpVBgD-jmCyFqQdsQ-",
          ShowcaseInfo: "_1IRlqYfguWSVErwdY_3_oW",
          ShareCtn: "_3E9DRgDhze3SZC_8rBwh99",
          YIRShareCtn: "_31wedODkl1bENzsBW0EMLj",
          ShareButton: "_1chFu_g7Pym2VQZoV0Kzo1",
          PrivacyWarning: "RMRlwqHeaQrzZUfGqzTH",
          ShareTypeTitle: "_2pNSPsIoRtculZcbEkAG7p",
          ShareArea: "_3YTJzMIIhl0gbxy3VSWiBU",
          SeeRewindButton: "_1rpdyB04B1_1ebJE_duD2o",
          Visible: "_1vntg59bE9Q9TlrfhWrxdY",
          DropDownSizer: "_2yCHl9jEyJatvpX_K0NOnS",
          ShareHeader: "QtgJ2vuunulNd0kt151m7",
          DropdownButton: "_1OAMjMYJFZIRqi7Yuw7Sk",
          Error: "_4P3AgyOvHm67bo4nqnykw",
          DropdownOption: "_2WqegcyOGXE3OfOBPuFKJc",
          ShareText: "_3nWCNZlUDKPFLtm9kzz-aM",
          ShareIcon: "_2ZgUDbleMuASK8J04DMwAI",
          ShareModalDialogCtn: "rkCkoPjO5tWNNKg1C-4He",
          ShareModal: "OuDcn_EUKN87W0QRAXmnm",
          ShareLanguagePicker: "_1AUpsJw7_5TmxJSEOpnMMa",
          LanguageLabel: "_2Mjl1MC-eBE-tHDeIoqR-X",
          LangaugeDropdown: "C7WyauRrz8Gn01miyf_zU",
          CarouselCtn: "_12tro3nlSoDAnHR8Owl2vq",
          LoadingCtn: "_1WIhto2_LVaK2uRT08ROL_",
          PreviewImageCtn: "_3Q80Cy7mIk7SgDXsIJVpBh",
          PreviewClickCtn: "AKi0dI-yZTqoGbrXwdcLU",
          PreviewAndIconCtn: "ufwvtRETTFZXtZhb_2YrV",
          CloseIcon: "_1GcFVEjZotDw7tRUGkNn_w",
          PreviewImage_1080x1080: "_3t0bs5rOn7hUuHkHzroNlv",
          PreviewImage_1080x1920: "SUsV4qmRw0Tb9YlN5RoPp",
          PreviewImage_1200x628: "c1xhpyCeymLIYsz_s72rE",
          ImageArrowCtn: "_3EH6zdLzxQWcZnxCqZW0Q",
          Arrow: "jvbeU0Bou-oLQKh3j3ZAP",
          Left: "_1wzQblWkABmbS_w5mzgjqG",
          Right: "_39Y8RA971bGbJbOzEu4D7Y",
          ArrowDisabled: "_2zvDQQbZ-fxXABN88O355",
          ImagesCtn: "_1penYHZK5jtR2fhACZ7oNg",
          CenterImage: "_17MFLvHvCFoo1Z5LYr2X5u",
          ImgAndPreviewCtn: "_2xSt2_hCKs1Y1mahSb2Q-t",
          PreviewMask: "_2Lj4I8nwnDHOQVw6BwzarS",
          Peek: "uUXl4JVWLrftehzyXSOX_",
          RightPeak: "_1OLhccdSVrD5PyyrMCHocr",
          LeftPeak: "_3MsRzX0A-Q5jHnzfgKh_sH",
          CenterImg: "_1bbh4X_f6RdHR2juBmB5CC",
          PeakImg: "_1ya7qrbf5qUmfEwm2ajy6y",
          InteractButton: "_2ROuf9Q_Xc2fJ6h6KMPhAv",
          InteractButtonIcon: "_1yRGhIYdp7cijMDnbCkWF_",
          InteractButtonText: "IKqdC1gWDEh47b6aShvM",
          CarouselHintCtn: "_13LmX30k-qZcko23iAy_Wy",
          CarouselHint: "_3Lndnk7OuA-Cxrwu08gp9C",
          ActiveHint: "_36bKAFgz9yC26XLbSWSLLK",
          FormatHint: "_3AG4PvnnmFCLO8DBW5LxfU",
          FooterCtn: "_3zpbzTS5MXoJJRzrH9P1_A",
          TooltipCtn: "_2R2HhI-PrhY9YK1e6aw8KH",
          ShareURLCtn: "_138H68CtJTGveTjNlBA7oh",
          ShareLinkButton: "_2-pp7mLO0Z5LW_FQNWcuxT",
          ShareShortUrl: "_3_ln9maFPGFW9W9EImpue5",
          ShareURLTitle: "_1i0cNS9ygjMYD1w4cYQaFn",
          SteamButtons: "g_mP1q1Dfphi44kdlau1n",
          SocialButtons: "_35VyVQJGOTuLFu-ykNK0sQ",
          FeedBtn: "_26-PhsWZa7m6d4R1dlcBoO",
          FB: "_152BeQAIzn7gu6Px1V_qhD",
          TW: "_36Gw4vPvTa9gxJT9uPT44t",
          RD: "LmriTy2U0fOHClwJH7xM2",
          Disabled: "_37-P5ZQHj_XMuKff3PVXbB",
          VisBorder: "_28_hvR-87-1ah11ZwGiyOR",
          MobileCtn: "_1otpP9I_-wTkl2Jwm7SicJ",
          ShareLinkIcon: "_1kyX_DYZkTKUMjxdbfYgpp",
          ShareLinkText: "CZ5IqOSp9UsKs471m38mm",
          ElementFadeIn: "_34tvhpjD4JWJmlp63qfJ_u",
          BadgeBoxIntro: "_3ue5J5y5iKtAr7GmxxYyjr",
          BadgeBarFiller: "_2z0vHCKh4Vd4aHr-vQjwi5",
          Appear: "_21sWxqz5OUqF25JIXG2olE",
        };
      },
      87762: (U) => {
        U.exports = {
          Section: "_23CAjrh1GSkSnVLvTR5oMw",
          Windows: "_1vUKHU_-dtbGzZHmFG_u-U",
          Linux: "_1o--oAuSJeE_GmsCFpkwbk",
          Controller: "_2WFjtAehE3pFqje383Apw-",
          Mac: "_3SAulun4j-hGdFAOaHMbp1",
          Deck: "_1cdYllaGl7qKTKCszDFyZy",
          CapRow: "_3PinvS-n0dF9rC5O78ku-V",
          PlatformContentsCtn: "_1PsKgEezJS5LMLbRK6JRZv",
          VR: "_3JUUgSFwfKxpfQ_uNHi9Ux",
          SectionTitle: "_2ah4WA3WRlwVSDqcvyKiDp",
          BackgroundImage: "brAyRdlpyVp4WdUiouZB5",
          Playtest: "_3pbkBRNE2fKqDlygGwp91D",
          BG_Playtest: "_1SOo3GdhcPL3SZHHVSXD4Q",
          Demo: "_2x1g0ifxtuQ8mtjJ5iceYT",
          BG_Demo: "_1L4LhCnNHJcLq_zafC-iLq",
          GameImage: "_2yVfmbboadjMhiHjpNy-8q",
          SectionSubTitle: "_3D-DCkmRU57aIXxV54qrQy",
          ElementFadeIn: "_1QlNj-fqLYzkSNa-U9kQBj",
          StatsRow: "_3At0tlfltTfJr33sjMDd13",
          StatBlock: "_95lW8BaVq1fmWokWdPPsW",
          BigNum: "_2OZijVsBqx3_g0e6xUIed3",
          StatDescription: "_1Of54Z3aGealUyOUMITDzO",
          DemoSash: "pzuwMpcmcIVrNbv46H5g9",
          BadgeBoxIntro: "_2DanVgBGo7HGllaGxlFUPw",
          BadgeBarFiller: "_3IwREAEEL8jykwZNPZKhoi",
          Appear: "G3ygUAsC5hrz7PVYC_UfR",
        };
      },
      44367: (U) => {
        U.exports = {
          MonthlyChartTooltipCtn: "_1TNHuWn9a6C9HG2OhTIaAH",
          TooltipBackgroundOverlay: "_2gvJ9eyEAyGTfL9iQ3IuMd",
          TotalPlaytimeContainer: "MbHB9d5TrrPPsmCLXDaIV",
          TooltipImageContainer: "_133vUbAOO4PTUZTnAle9Gk",
          OtherGamesStack: "_24c6yhG567Fue2VRuoe_2i",
          CapsuleImg: "_3pVEkyjcVAxFbWBaXkDxtw",
          HoveredGameLabel: "k6Eh-X_tQXx5sEpDHBMq6",
          TotalPlaytime: "_3F-F53fTqM5DXVQc6Jz5d3",
        };
      },
      84797: (U) => {
        U.exports = {
          new_games_color: "#3cdf6a",
          used_games_color: "#4df",
          old_games_color: "#e496ff",
          pie_windows: "#28aee1",
          pie_linux: "#cd4141",
          pie_deck: "#9c85d1",
          pie_mac: "#939a9d",
          pie_vr: "#55af30",
          topApp_0: "#00a299",
          topApp_1: "#017baa",
          topApp_2: "#044fbb",
          topApp_3: "#2325b9",
          topApp_4: "#4a17a6",
          topApp_5: "#881abf",
          topApp_6: "#bf1a72",
          topApp_7: "#cb5545",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_1mCWTI0JoiDqCmO8bDDES5",
          SingleGame: "_2sI9nEpezKWeRW_uX3zDe9",
          ImageTint: "_1KFiu2aZBbuwvWHItKoR7-",
          Section: "ZbHrxezu8VrBxMPSTh9z3",
          StreakSizeFullBar: "_14BklrGtK29m79DW3nqHWV",
          LongestStreakBgImage: "_3bCDTuFBTstThIkVu8rZAK",
          Tab: "_2RZyYiWAwDAPtAyy1l4EhC",
          UserName: "_3ZGQww28rxBs_rNFt4A-Z",
          ConclusionName: "_2QHBE_5MFY0OIfAJK-6KPs",
          GridItem: "_3JsZSm646Y5ZkGhpSOODAW",
          AchievementBlock: "_2DHea-Spjx2dRqPQcVfpqw",
          StreakBlock: "_2Sd0qjwv69VPg701ROB46l",
          HardwareBlock: "_2KTGrVdH4bYO-rOyHaGaXe",
          DeviceBlock: "_33YJLXitiubERYxUXrbecK",
          SummaryCtnShadow: "_3eIkBGJSxL654zOmmOBOz7",
          BackgroundImage: "_36jZ71s237_s23yxdQgPFO",
          SummaryCtn: "_2l4E7GqLFXFY_rYWRbFOIt",
          TopHonorsSection: "_24OE-kMDyDQ0Ci29zIPqdq",
          MissingUserCtn: "_3L0BnaPXE2Nuz3x60nrf8",
          GenericBackground: "_1h36ybUWs1ZX5telCOk0XC",
          LogInCtn: "_26pjxsotAYqvNMpivHzvaw",
          FriendCtn: "_1mZ6NQJ_g6wG-NdlN86ksm",
          TopGameBlockContainer: "_36knYDLxQo9AaZviPf_cnn",
          OddGradient: "_1mrNpFA8PEjfLYXmvbboJl",
          EvenGradient: "uGK9CVVk1pMAHGs62QINl",
          TopMostGame: "_2pfc8dJefQjNg6UM3yLz9q",
          FirstPlayCtn: "_1TBDwSyyCkodf5oKezdape",
          GamePlayDetails: "vqmq5_0SK8i0bpeppqxnx",
          PlatformChartsCtn: "_2PR724R2IuabDLtoLxWpfk",
          IconAchievement: "_2IjTrxdj_wI9Gh7_aMbZTM",
          IconGamesPlayed: "_1pYbm7SYRqjtbSjm99vybx",
          IconStreak: "_3wrtHF8HGJ6k-7gSKy9tHu",
          PlayBehaviorContainer: "tiuwqat5VX9DqGp1wTasT",
          ProgressBarFilled: "_2TAF9zz_FTeA_XA7NabVmT",
          ProgressBarFilledGradient: "_2Jn-XMt83DMEbyRglDjPZ-",
          GameNewnessTitle: "_2S-kJn2DuxoMMQRJoCDp5K",
          NewActive: "_3nz5W7FAYvN2-2n0MuWlwo",
          DataBoxArrow: "_1EoUlR9aVJ5EMp7C5CYdlJ",
          Background: "DxFS4y1E5x3-FXRmvNTjr",
          UserData: "mjYOxpO92Sjjaq1vI0nPa",
          DataBox: "_1TC4ZL8Igk0UZwM5n37MPP",
          SteamData: "_1muEXi8fQZowcGSWQIP5EF",
          Border: "_3APY0jBERnHXknBhjYaKzK",
          PercentageLabel: "grEIxWPqvyXbDSONzpGyk",
          Color: "_1jd63YNjr7wMQzLdB_QziW",
          PercentageDescriptionLabel: "etu3gC0CbXo-55a8VnGLb",
          UsedActive: "_3cggzJW9YF-UN83xHTZQ8v",
          OldActive: "_2e8Hfol5roqPlMlmMEe4jK",
          AllGamesBGImage: "_3ugWpF65a-Hzz9zZbMdFei",
          SeeRewindButton: "_25JDT1O9te5Afb7dDcz4ry",
          MMFrame: "_34F3ONj5DcTlh_joG-sHu5",
          MMOverride: "_3410LOeYZJjY6R_H4U0YuQ",
          Header: "_1wRDr7Zzwg-daOQ9jG5qY5",
          YearSubtitle: "yqOBUuUlT4ChD5MB4Gfmb",
          ReplayLogo: "_1Dj2Lm_eGilmq2aTCNLmKz",
          ReplayLogoAccent: "_1boFekf-O9JBLOKZNRGpGL",
          Hashtag: "rUjuX2Th6QbH4f1-l8H3c",
          Avatar: "_3TIPQVu2JQ0Pp0s4DBxqdN",
          DataBlock: "_2ZVTo1HmTUnFF3TNZBarJ3",
          PersonaName: "_1n5x7nxPhP-Sq0AhY5ssVm",
          ReplayHighlight: "_1t179jT3miESogxBPLvKso",
          ViewPageButton: "jIjgB6ZoOX1pa2GftI1RS",
          Description: "_1vouHy7Qkdo_QusE7gHag1",
          OtherYearLink: "_1i52pDXbOiguTescoinJBz",
        };
      },
      68622: (U) => {
        U.exports = {
          new_games_color: "#d67070",
          used_games_color: "#683db4",
          old_games_color: "#3898b0",
          pie_windows: "#d67070",
          pie_linux: "#683db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_10kzTTAtqaz13b6p7OjG8S",
          scaleBackground: "_1WW8z64-BrcfAZZpgbuRTM",
          SingleGame: "_2Pj3-6RWhMQHDGPtVx1ftl",
          ImageTint: "RdmGip0ngXjp9kSzfsMuc",
          Section: "_1ihw3wAprvhicFWLMrq7hf",
          StreakSizeFullBar: "_3s6e74lp5bDTtWMnpcnBbA",
          LongestStreakBgImage: "_1GiTU8n2lD-sPz0sCR0Xhj",
          Tab: "_25kqUwukU9GN1Ef9tihV6L",
          UserName: "_1eLSYaRNKbAsXOhQTsmW1V",
          ConclusionName: "_3Xy9Cx3rQeyhPKSjwGEfl6",
          GridItem: "_3xyYnoaptMoTZ1HqL_koRs",
          AchievementBlock: "_1M433GBUUxgHItBhMw0U94",
          StreakBlock: "_2X6mwNm61FuayA-l1afHjg",
          HardwareBlock: "GImwL8nsYgPpolltUalGf",
          DeviceBlock: "_2s1BbZknfTzGiX0KPWI6sQ",
          SummaryCtnShadow: "_18moaZsJq2bOBUKUFkgZXW",
          BackgroundImage: "_1LIoXPNaAmjCNg--cqeYNJ",
          SummaryCtn: "_2iEZg9UeJZPaXWH8DEQgAY",
          TopHonorsSection: "_3pGXxrtry6vbrbKN05WUO6",
          FriendCtn: "_2W45uTzo4s5qj5DLPHUt2f",
          TopGameBlockContainer: "_36jqv5rato1nA9_Fm4TgqO",
          OddGradient: "_2humxv5J-6yJS4voPPdZ2t",
          EvenGradient: "_2Ri1edchogFKwyEY3XKJiq",
          TopMostGame: "_3AeiaW8hpnC1ONnWJUXAj5",
          GamePlayDetails: "il8qj5ZbFvylAOOLUaNtV",
          PlatformChartsCtn: "_1VlT4dTCqBdYP-i3bxLhyJ",
          gradient: "DcluJQjgDbSdO-U954rux",
          IconAchievement: "_1dt08I2SCDobYoSlg6xjqf",
          IconGamesPlayed: "_3Zy7ueS4aunldSTv-YA2GT",
          IconStreak: "_22reoVLCzn-Fuh73p1pXr5",
          PlayBehaviorContainer: "_1U1ZuwB1L9K4CPqioL0e5s",
          ProgressBarFilled: "_3NgeYY9GD7yBtWM_upyPTT",
          ProgressBarFilledGradient: "_2WMTIhxpdYdVPW8qMMaMIR",
          GameNewnessTitle: "_3kzRWYdjSiT3NFAj2oVTVY",
          NewActive: "_3YOjggFXHQrDGODGISowUn",
          DataBoxArrow: "_2V5vsfJLUUAm8Dkwco2jw9",
          Background: "_1P7u77iRdWEMNFa_uDOAgx",
          UserData: "sT4Y_Mssd38IykTqpNttI",
          DataBox: "sw8ZdGxYqpVlDpQ-O0ymi",
          SteamData: "_3QBOqe7aPF_N0gIqkC9fmI",
          Border: "_1LJoYGt4cvMN5B1_sAJP8f",
          PercentageLabel: "_6GBP_G16XsdGbYC8NTZh6",
          Color: "_5AuLAC-w6VzF8QR5dj5Xt",
          PercentageDescriptionLabel: "SsulucKQh-HigrEyVzMIg",
          UsedActive: "_3kPVLKj0dwg8U5A6Fg7ISA",
          OldActive: "_3n3sqX8WsGOyPAMMvYy_O-",
          AllGamesBGImage: "Da4bxMaQBEGNrVrq5DpDH",
          SeeRewindButton: "_288f6z1gFOsYlF9sPrQjGL",
          MMFrame: "_2uL2aC9JTgz2OiBYlYh0OV",
          MMOverride: "_3r4GfYoEmqFKtRaTHW4kce",
          Header: "_2a2ceVKfNdvTRhuk5GSdns",
          YearSubtitle: "_2p3PzXE3K1nmqcMQq3_IfL",
          ReplayLogo: "_3LKGj8E0hxcbos8M02X8Z5",
          ReplayLogoAccent: "QA6ZiaAVMlmpcQ76Vh1ai",
          Hashtag: "u0AZ32D3fSCUz7g34qqez",
          Avatar: "_1YfBn_vDDQheFIvB_NS8jT",
          DataBlock: "_2k0fIZXO_T84nzNLVPk3_8",
          PersonaName: "cUavdbPuv_0xdR4Dn9zos",
          ReplayHighlight: "_17c5leGvLNSi5Ww9tu6KYI",
          ViewPageButton: "AwTMLvj9vwwJanUhUW0md",
          Description: "_L5X9igrHe9C6CwhZe_ny",
          OtherYearLink: "_1fHTilDQDzxqV57h1u1xHI",
        };
      },
      32339: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_3OQ6rgJBkGnH9Bf6r2e3HL",
          scaleBackground: "_3JN7ZUgVCUsaPMpmqP7TwR",
          SingleGame: "_1HbdEudMGphunPB0JEXg7i",
          ImageTint: "_1gfY6mgm47-kMTUtqR0-Ou",
          Section: "tRbx_6RHxbCDIMagDBI8p",
          LongestStreakBgImage: "_1MVdzFDJOXawdsqr3Yhqsw",
          StreakSizeFullBar: "_36N_E04MlrcS-OcKDAtap2",
          Tab: "_1KD4j_7fmsom6XcRjCdT0Q",
          UserName: "WSDA_clh_9sxDy4zdmbjD",
          ConclusionName: "_1gHhZmVSITXh31m_yruKhR",
          SummaryCtnShadow: "_2-LqaFKV7kacR8awEnhfJX",
          GridItem: "_3OZGvnLThiIYbr4Ouh2bxp",
          BackgroundImage: "_2aMzl_Delss7H1rWla6XDB",
          FriendCtn: "_1_-90oN_7p0LZPblYQBANu",
          TopGameBlockContainer: "_1Y5fJhtMjArQRouT4r3-C7",
          BackgroundImageFull: "_3MOFeHUyOuqaV0X3Yr3VNf",
          OddGradient: "_3ZMWDI255mEZaJyC56j0wL",
          EvenGradient: "Juac3ZakPmb2mXfPy5vYL",
          TopMostGame: "_1hCC5kg_wi3ka5DgsPuQSB",
          GamePlayDetails: "_3rUVGxkgXErfzS1dUw-09d",
          PlatformChartsCtn: "_37_pY_aEthje0YSZyP7Cs3",
          gradient: "_3Z_LYJhCqdb8ZUUwCdpQgr",
          TopHonorsSection: "_1JuNaCUGgdEe4Kg1wwxKiC",
          SectionDesc: "frtdAP-rVslnmtiDFU5hj",
          IconAchievement: "_1blrLRqm7dIEf-KlyXeucX",
          IconGamesPlayed: "_3mFHXBXxcqOg-QN0otvPIV",
          IconStreak: "_1BAN0pj-aWkXRxswwHZqJ6",
          PlayBehaviorContainer: "_3K-BxOFebKlIgA3KHN3fRd",
          ProgressBarFilled: "_149r1AuXIu7SWFlKGFPK2g",
          ProgressBarFilledGradient: "_1dBow-Dbmq4zxmKY1jgQAn",
          GameNewnessTitle: "_3yTxsy6ozFIGQBi_USS7Wq",
          NewActive: "_3Q-lCYrQuOslt990fq-rr6",
          DataBoxArrow: "_1op5IwtjH5Lq0XP38WK3LT",
          Background: "_2j3GatBNdCKuNabv1m37Yq",
          UserData: "_3m-Ki0zq5OMIcIZ41vG6wU",
          DataBox: "ezwPo6nwskfStGExxxe2",
          SteamData: "_3ki5fNFYPN-mUpMWp_7yBc",
          Border: "_3OeymkaW96P8-ADBuNVDju",
          PercentageLabel: "_3JxJmNw4L3TNLr0RgUvc-J",
          Color: "GDFSAsxyT5cjNE1qUDVjI",
          PercentageDescriptionLabel: "LkZ04ZMADGM3ycZyxP335",
          UsedActive: "_1GIOMMTrITyIDVa9Vjc6JE",
          OldActive: "_3U-IfPH0I8djRe2moFvzuF",
          AllGamesBGImage: "_1yRd48MGRuylzC44_4Dmgb",
          SeeRewindButton: "mf6UTLxYSeiKkvIhlAodx",
          MMFrame: "_2vqAzxON4lE_16iKxhv8qT",
          MMOverride: "_2HmEzExHY4aeyBFI6MUXmT",
          Header: "_3gOcUL_xfcBkYU0g20TaXb",
          YearSubtitle: "_3UwJLn8p1rV25mjYmzwrVA",
          ReplayLogo: "_221R7vRZej1-5Itjx416tA",
          ReplayLogoAccent: "_18J6u_1IgoXwwOwNs17yBg",
          Hashtag: "_3bTOGmEBF0FW3IZn63KpR7",
          Avatar: "_2zdVUZKCn5qRHBOk2Wvvhh",
          DataBlock: "Cop9oURErdKz-xnG00D19",
          PersonaName: "_1yc5XlMVWWlXCsludrsGM8",
          ViewPageButton: "_8vh-tS_EH62zvZbZzF6Bq",
          Description: "_1ImcGBhCVlOyWddPGdtGz9",
          OtherYearLink: "_3LrPDKdIcbQ34J2OlNHDXh",
          BackgroundAnimation: "_1iXipF4ysagEImD280CprP",
          "ItemFocusAnim-darkerGrey-nocolor": "_1rmm8RPOlAxQMFUAP8bygH",
          "ItemFocusAnim-darkerGrey": "_3Ws16JxP5tjYQMyhOCZPyl",
          "ItemFocusAnim-darkGreySettings": "_1U1iTefDLSbKqIp4V19WVn",
          "ItemFocusAnim-darkGrey": "_1Z34B8hAZCLKdCS-fIrGZl",
          "ItemFocusAnim-grey": "_25oYhp1kwf6zZ5vtnsQBgc",
          "ItemFocusAnim-translucent-white-10": "_12q-BgpP8S8I4o8Y7tVgP5",
          "ItemFocusAnim-translucent-white-20": "LBhH9gPpgXf2pY0_Lc3Al",
          "ItemFocusAnimBorder-darkGrey": "_3V_jsm1ATEfbvpDr6TIw3R",
          "ItemFocusAnim-green": "_1CWlcSJ0K4nB9z9UY1GJO7",
          focusAnimation: "xxHDLCKk6ZGZZcwkKMJ_o",
          hoverAnimation: "_1JpeZ-3CBjNXMpN8RezwCI",
        };
      },
      4452: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_2s7mIvwS-3CubLZ0qh2JUW",
          scaleBackground: "_26thFVUdrVT5cwl3ZNo621",
          SingleGame: "Oi2hkZjaYSLMdFBa10fFW",
          ImageTint: "_4dii7ZD-CzK6Hdr_1zFfz",
          Section: "_1boQl7oW6GufFP0tCEqgPg",
          LongestStreakBgImage: "Rb3f3N7xL755z9IQo1z3a",
          StreakSizeFullBar: "_3232l-2EN_vmaNNFhu8wYg",
          Tab: "_2oU8grgLlvrP-1kypqcmjG",
          UserName: "_3tdBf9Fq7kubW0eXl3uhhM",
          ConclusionName: "_1fViacRZXSttKAoUhRITId",
          SummaryCtnShadow: "_2BWKGdK_xOyg1l3a2AgT4Z",
          GridItem: "_1NKomKIPmTDGyDrAtz-2d4",
          BackgroundImage: "_3wN5uwJqxQEIAmXkzKmCFm",
          FriendCtn: "_64HO5Fgwc4BRCG8pcDvno",
          TopGameBlockContainer: "DFb2vstqM2m5UIqllW6-z",
          BackgroundImageFull: "_2BWkMEocB_PWAlCNnvwkpW",
          OddGradient: "_31GzI9SB2Wj87sB13c7XHz",
          EvenGradient: "_283mQrlso9fruh_DtsBP18",
          TopMostGame: "_2PmC6qr8RF22oGrrTwa-Ai",
          GamePlayDetails: "_3gAeRCR1lnQimVrfYKP6JD",
          PlatformChartsCtn: "TSAyulrl5QSSKjK1gTZdg",
          gradient: "_2kZoREa11DQ2pGPkasd9xs",
          TopHonorsSection: "_3vxAkxTbGM_XzgF_jQu8MR",
          SectionDesc: "CJ9awmTLX6bSz36NY4HT4",
          IconAchievement: "_2vdLENzDQtBQjyAkyv9S_w",
          IconGamesPlayed: "_3iBplwgmTqlW65lS36SzT2",
          IconStreak: "_3muGaWbeottcWdmhZBqB53",
          PlayBehaviorContainer: "_3g2ea3qJY6j67_cFF5Mgsq",
          ProgressBarFilled: "_1LQbY-wdcf-dh-t3dkucGC",
          ProgressBarFilledGradient: "_3aihmNXrhiBM33b7t7UKFC",
          GameNewnessTitle: "_39lOiSYRWalnWaZ5SX3zhx",
          NewActive: "_1sdItmmpaYbqIRLLUtrDrG",
          DataBoxArrow: "_3ajjJPkrXfayfPA3Vivx-8",
          Background: "A6FIZiuS0_nAypC7LbvhE",
          UserData: "_1KHyWCx0wbs471k7TSRMAs",
          DataBox: "_2c-eiPgDpepgIpD_jtHUzC",
          SteamData: "_1yhuxYer1QE_Vm8FfAmsIa",
          Border: "_1SA7sXKMgETCa_JaP3B6C4",
          PercentageLabel: "_1c_OSzoiESQi8VycwjySgq",
          Color: "_2dH3sotPVHLbsosd0aSRFe",
          PercentageDescriptionLabel: "-_6lWC6tfX-A_YFsFXfOv",
          UsedActive: "_3or6GTplqe7LbAyXhO8n4E",
          OldActive: "_19DsdrAsV7SPTJTtHyxbx9",
          AllGamesBGImage: "_2OdQZo0IGLXzoR4AUydRp3",
          SeeRewindButton: "_1V87Pd_xyPBUjoW6T3yIYp",
          MMFrame: "_1rm7lp0POJnMfv_wJCmj51",
          MMOverride: "_3dXsGCw_Hqvycqp0ierI13",
          Header: "_2Mb9gJJAqkyW-uwgteM7bR",
          YearSubtitle: "_2JtAZbKQCRYsuq8Grhj9D_",
          ReplayLogo: "mpZwdryoa_9MxYXp1Qr8Q",
          ReplayLogoAccent: "_3TL2UyEq_QwjQ1KvR0c_LW",
          Hashtag: "_2vAhvd0pJ4Bjao8aEg0lk0",
          Avatar: "_1zOzJvJn7vryT-8zfXh6h4",
          DataBlock: "_3AqjU369Dul6eM24tTW4Ro",
          PersonaName: "_3C6Kgz1wyud6uRK9iRRtnZ",
          ViewPageButton: "g4FuYY6kNOhx6ps41n66o",
          Description: "_3ZFqletUdCzkvW-BpBfk0",
          OtherYearLink: "_3_I-YXo6WE2pSgpSqOe90G",
          BackgroundAnimation: "pim2eKmSTb2NQIYFR8-kO",
          "ItemFocusAnim-darkerGrey-nocolor": "_34ksdmLRP6M-DL55A02DbT",
          "ItemFocusAnim-darkerGrey": "_1rk5lOTR37WlC5N5CRPD_3",
          "ItemFocusAnim-darkGreySettings": "_3fTyTKz8tIlcCsQ-iKdny7",
          "ItemFocusAnim-darkGrey": "_1hxhmw8W2ifnYr2qLY4uPy",
          "ItemFocusAnim-grey": "_3O7xVUyXHUO3jznnaVQkCj",
          "ItemFocusAnim-translucent-white-10": "_3cPKti68OjsijubFhK8nJh",
          "ItemFocusAnim-translucent-white-20": "_2WYaf97De-ZJ0mFANrqtDV",
          "ItemFocusAnimBorder-darkGrey": "_2WH9L3RX3P6NaqBc2WQPlc",
          "ItemFocusAnim-green": "_3YKGX14tVZ6u6O9dDCD9Sb",
          focusAnimation: "_16qKuIfVUjk7_3Q-w67mSd",
          hoverAnimation: "_2uOutcDfkb2CPTKk4_5i7l",
        };
      },
      77408: (U) => {
        U.exports = {
          narrowWidth: "500px",
          Section: "_3Apb0bYbV5W1c7HG5T26XH",
          ChartContainer: "_23mKMjDPbjptriYDLI6HAk",
          Chart: "_28TwDjH899CiiJ8lJ1fFES",
        };
      },
      43047: (U) => {
        U.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      44533: (U) => {
        U.exports = {
          "duration-app-launch": "800ms",
          Icon: "_2V2sHETNfa62yMoDwSF3_t",
          IconGlow: "_3s4Rq3jnntBVP7HbJj1RMQ",
          AchievementIconWrapper: "_1fEbX-PfpZ2FhkhttWcm-V",
          RareAchievementIconGlowContainerRoot: "_2HUbCbZUn27MliiC8gRxGB",
          RareAchievementIconGlowContainer: "_2D_EJk8-jCnfqiwoKkOMVh",
          rotate: "_2liIQspBwdpNtEmYw2bU9j",
          RareAchievementNoAnimation: "_1a4bwiE4yUR3XXBKI6mKqt",
          RareAchievementIconGlow: "_1Z2eJs9-zNTKcWKy4M-oDE",
          HiddenLabel: "_1ABm6sfuqiZZDSL9z8mW1a",
          BackgroundAnimation: "_2jC4Eqt8IrbRbM81zvxlnW",
          "ItemFocusAnim-darkerGrey-nocolor": "_3jGCeVy7OzY5pw0Rpx0z8-",
          "ItemFocusAnim-darkerGrey": "_2Jqi29kzJtRTafvIOPyvAW",
          "ItemFocusAnim-darkGreySettings": "_2tg8Ji5QTXXXSzn1Q0HRa2",
          "ItemFocusAnim-darkGrey": "T-2rsbY05mXhgaIQkf73x",
          "ItemFocusAnim-grey": "_1WGat3-0-TCDKEtg7LEoB5",
          "ItemFocusAnim-translucent-white-10": "RkktEhJT7jnAfvbEiNBBH",
          "ItemFocusAnim-translucent-white-20": "_30c3lgfOmK8HMV6u21SQ42",
          "ItemFocusAnimBorder-darkGrey": "_1vYqEdzDmOIRAIgDNUHfBt",
          "ItemFocusAnim-green": "CrI_goODkSlbs2jjXglfz",
          focusAnimation: "_3xzftt0SCqsMfNLxtA825Q",
          hoverAnimation: "_10Y0xofBXAPurniv6K3_YV",
        };
      },
      6878: (U) => {
        U.exports = {
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
      15736: (U) => {
        U.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
    },
  ]);
})();
