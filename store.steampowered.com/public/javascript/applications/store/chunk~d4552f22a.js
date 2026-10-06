/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [11095],
    {
      7487: (w, j, n) => {
        "use strict";
        n.d(j, { K0: () => a, OJ: () => M, R8: () => U });
        var e = n(71742),
          m = n(90626);
        class U {
          reactNodes = [];
          AppendText(h, b = !1) {
            h.length &&
              (b
                ? this.reactNodes.push(
                    m.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": h,
                      },
                      h,
                    ),
                  )
                : this.reactNodes.push(h));
          }
          AppendNode(h) {
            this.reactNodes.push(h);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class a {
          m_decoratedAccumulator;
          constructor(h) {
            (0, e.wT)(h, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = h);
          }
          AppendText(h, b = !1) {
            this.m_decoratedAccumulator.AppendText(h, b);
          }
          AppendNode(h) {
            this.m_decoratedAccumulator.AppendNode(h);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class M extends a {
          constructor(h) {
            super(h);
          }
          AppendText(h) {
            let b = h;
            const L = [];
            for (
              let v = b.indexOf(`
`);
              v !== -1;
              v = b.indexOf(`
`)
            )
              L.push(b.substr(0, v)),
                L.push(m.createElement("br")),
                (b = b.substr(v + 1));
            b.length && L.push(b),
              L.forEach((v) => {
                super.AppendNode(v);
              });
          }
        }
      },
      33770: (w, j, n) => {
        "use strict";
        n.d(j, { B: () => A });
        var e = n(99412),
          m = n(90626),
          U = n(7487);
        const a = 0,
          M = 1,
          T = 2,
          h = 3;
        class b {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(r, t) {
            r instanceof Map
              ? (this.m_dictComponents = r)
              : (this.m_dictComponents = new Map(Object.entries(r))),
              (this.m_fnAccumulatorFactory = t);
          }
          Parse(r, t, o = !0) {
            const _ = E(r || "", o);
            return this.Parse_BuildElements(_, t);
          }
          Parse_BuildElements(r, t) {
            let o = this.m_fnAccumulatorFactory(void 0);
            const _ = [],
              d = () => (_.length < 1 ? void 0 : _[_.length - 1]),
              f = this.m_dictComponents,
              B = (x) => !!(x.tag && f.get(x.tag)?.autocloses);
            let l = !1,
              O = !0;
            const C = (x, F) => {
              let W = F.text.toLowerCase();
              if (x && x.node.tag === W && f.get(x.node.tag)) {
                const I = f.get(x.node.tag),
                  K = {
                    tagname: x.node.tag,
                    args: x.node.args,
                    rawargs: x.node.rawargs,
                  },
                  V = t(I.Constructor, K, ...o.GetElements());
                (o = x.accumulator),
                  Array.isArray(V)
                    ? V.forEach((Z) => o.AppendNode(Z))
                    : o.AppendNode(V),
                  (l = !!I.skipFollowingNewline),
                  (O = x.bWrapTextForCopying);
              } else if (x) {
                const I = x.accumulator;
                I.AppendText("[" + x.node.text + "]", !1),
                  o.GetElements().forEach((K) => I.AppendNode(K)),
                  I.AppendText("[/" + F.text + "]", !1),
                  (o = I),
                  (O = x.bWrapTextForCopying);
              }
            };
            for (
              r.forEach((x, F) => {
                if (x.type == M) {
                  const W = l ? x.text.replace(/^[\t\r ]*\n/g, "") : x.text;
                  o.AppendText(W, O), (l = !1);
                } else if (x.type == T) {
                  const W = f.get(x.tag);
                  if (!W) o.AppendText("[" + x.text + "]", _.length == 0);
                  else {
                    const I = d();
                    if (I !== void 0) {
                      const K = f.get(I.node.tag);
                      K &&
                        K.autocloses &&
                        x.tag === I.node.tag &&
                        C(_.pop(), I.node);
                    }
                    _.push({ accumulator: o, node: x, bWrapTextForCopying: O }),
                      (o = this.m_fnAccumulatorFactory(x)),
                      (l = !!W.skipInternalNewline),
                      (O = W.allowWrapTextForCopying ?? !1);
                  }
                } else if (x.type == h) {
                  let W = x.text.toLowerCase();
                  for (; d() && d().node.tag !== W && B(d().node); ) {
                    const I = _.pop();
                    C(I, I.node);
                  }
                  if (d()?.node.tag == W) {
                    const I = _.pop();
                    C(I, x);
                  } else o.AppendText("[/" + x.text + "]", _.length == 0);
                }
              });
              _.length > 0;
            ) {
              const x = _.pop();
              C(x, x.node);
            }
            return o.GetElements();
          }
        }
        function L(u, r, t = !1) {
          let o = "[" + u;
          r?.[""] && (o += `=${t ? "" + r[""] : v("" + r[""])}`);
          for (const _ in r) _ !== "" && (o += ` ${D(_)}=${v("" + r[_])}`);
          return (o += "]"), o;
        }
        function v(u) {
          return `"${u.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function D(u) {
          return u.replace(/(\\| |\])/g, "\\$1");
        }
        function g(u) {
          return `[/${u}]`;
        }
        function p(u) {
          return u.replace(/(\\|\[)/g, "\\$1");
        }
        function i(u, r, t = a) {
          const { type: o, text: _ = "" } = r;
          if (o == T) {
            let d = _.indexOf("=");
            const f = _.indexOf(" ");
            f != -1 && (d == -1 || f < d) && (d = f);
            let B,
              l,
              O = "";
            d > 0
              ? ((B = _.substr(0, d).toLocaleLowerCase()),
                (O = _.substr(d)),
                (l = y(O)))
              : ((l = {}), (B = _.toLocaleLowerCase())),
              u.push({ type: o, text: _, tag: B, args: l, rawargs: O });
          } else o != a && u.push({ type: o, text: _ });
          return { type: t, text: "" };
        }
        function P(u) {
          let r = "";
          return (
            u.type == h ? (r = "[/") : u.type == T && (r = "["),
            { type: M, text: r + (u.text ?? "") }
          );
        }
        function E(u, r) {
          const t = [];
          let o = { type: a, text: "" },
            _ = !1,
            d = !1,
            f = !1;
          for (let B = 0; B < u.length; B++) {
            const l = u[B];
            switch (o.type) {
              case a:
                l == "["
                  ? ((o.type = T), (d = !0))
                  : ((o.type = M), l == "\\" && r ? (_ = !_) : (o.text += l));
                break;
              case T:
              case h:
                if (l == "/" && d) (o.type = h), (o.text = ""), (d = !1);
                else if (l == "[" && !_) (o = i(t, P(o), T)), (d = !0);
                else if (l == "]" && !_) {
                  const O =
                      o.type == T && o.text?.toLocaleLowerCase() == "noparse",
                    C = o.type == h && o.text?.toLocaleLowerCase() == "noparse";
                  d || (f && !C)
                    ? ((o = P(o)), (o.text += l))
                    : O
                      ? (f = !0)
                      : C && (f = !1),
                    (o = i(t, o)),
                    (d = !1);
                } else
                  l == "\\" && r
                    ? ((o.text += l), (_ = !_), (d = !1))
                    : ((o.text += l), (_ = !1), (d = !1));
                break;
              case M:
                l == "[" && !_
                  ? ((o = i(t, o, T)), (d = !0))
                  : l == "\\" && r
                    ? (_ && (o.text += l), (_ = !_))
                    : ((o.text += l), (_ = !1));
                break;
            }
          }
          return (
            o.type != a &&
              (o.type == T || o.type == h
                ? t.push(P(o))
                : t.push({ type: o.type, text: o.text ?? "" })),
            t
          );
        }
        function y(u) {
          if (!u || u.length < 1) return {};
          const r = {};
          let t = "",
            o = "",
            _;
          ((l) => {
            (l[(l.PRE_NAME = 0)] = "PRE_NAME"),
              (l[(l.IN_NAME = 1)] = "IN_NAME"),
              (l[(l.POST_NAME = 2)] = "POST_NAME"),
              (l[(l.IN_VALUE = 3)] = "IN_VALUE"),
              (l[(l.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(_ || (_ = {}));
          let d = 0,
            f = 0;
          u[0] == "=" && (d = 2);
          let B = !1;
          for (f++; f < u.length; f++) {
            const l = u[f];
            let O = !0,
              C = !1;
            switch (d) {
              case 0:
                if (l == "=") return {};
                if (l == " ") continue;
                d = 1;
                break;
              case 1:
                (l == "=" || l == " ") &&
                  !B &&
                  (l == " " ? ((d = 0), (C = !0)) : (d = 2), (O = !1));
                break;
              case 2:
                l == " "
                  ? ((d = 0), (O = !1), (C = !0))
                  : l == '"'
                    ? ((d = 4), (O = !1))
                    : (d = 3);
                break;
              case 3:
              case 4:
                ((l == " " && d != 4 && !B) || (l == '"' && d == 4 && !B)) &&
                  ((d = 0), (O = !1), (C = !0));
                break;
            }
            if (O)
              if (l == "\\" && !B) B = !0;
              else if (((B = !1), d == 1)) t += l;
              else if (d == 3 || d == 4) o += l;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + d,
                );
            C && ((r[t] = o), (t = ""), (o = ""));
          }
          return d != 0 && (r[t] = o), r;
        }
        class A extends b {
          m_renderingLanguage;
          constructor(r, t, o) {
            super(r, t ?? (() => new U.R8())),
              (this.m_renderingLanguage =
                typeof o == "string" ? (0, e.sfN)(o) : o);
          }
          UpdateOverrideLanguage(r) {
            this.m_renderingLanguage = r;
          }
          ParseBBCode(r, t, o = !0) {
            let _ = 0;
            const d = this.Parse(
              r,
              (f, B, ...l) =>
                m.createElement(
                  f,
                  {
                    ...B,
                    context: t,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${_++}`,
                  },
                  ...l,
                ),
              o,
            );
            return d.length > 1
              ? m.createElement(m.Fragment, null, ...d)
              : d.length == 1
                ? d[0]
                : null;
          }
        }
      },
      29950: (w, j, n) => {
        "use strict";
        n.d(j, { J: () => e });
        function e(m) {
          if (!m) return m;
          const U = m.trim(),
            a = U.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return a.startsWith("javascript:") ||
            a.startsWith("data:") ||
            a.startsWith("vbscript:")
            ? ""
            : U;
        }
      },
      72080: (w, j, n) => {
        "use strict";
        n.d(j, {
          AT: () => v,
          J7: () => T,
          KN: () => M,
          MG: () => D,
          Yd: () => g,
          bv: () => h,
          gg: () => a,
          mZ: () => L,
          s4: () => p,
          zN: () => b,
        });
        var e = n(7850),
          m = n(11748),
          U = n.n(m);
        const a = {
          Box: m.DynamicLinkBox,
          Preview: m.DynamicLink_Preview,
          Type: m.DynamicLink_Type,
        };
        function M(i) {
          return (0, e.jsx)("img", {
            className: m.DynamicLink_Preview,
            src: i.strURL || void 0,
            alt: i.strAlt ?? "",
          });
        }
        function T(i) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Content,
            children: i.children,
          });
        }
        function h(i) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Name,
            children: i.children,
          });
        }
        function b(i) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Author,
            children: i.children,
          });
        }
        function L(i) {
          return (0, e.jsx)("span", {
            className: m.DynamicLink_AuthorName,
            children: i.children,
          });
        }
        function v(i) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Description,
            children: i.children,
          });
        }
        function D(i) {
          return (0, e.jsx)("span", {
            className: m.DynamicLink_Date,
            children: i.children,
          });
        }
        function g(i) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_YoutubeViews,
            children: i.children,
          });
        }
        function p(i) {
          return (0, e.jsx)("div", {
            className: m.Dynamiclink_Content,
            children: i.children,
          });
        }
      },
      374: (w, j, n) => {
        "use strict";
        n.d(j, { oK: () => D, F8: () => b });
        function e(g) {
          return g
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&");
        }
        var m = n(72609),
          U = n(80902);
        const a = "events/ajaxgetdynamiceventmetadata";
        async function M(g) {
          const p =
              m.TS.STORE_BASE_URL + a + "?" + new URLSearchParams(g).toString(),
            i = await fetch(p, { credentials: "include" });
          if (!i.ok) throw new Error(`${p} answered ${i.status}`);
          return await i.json();
        }
        function T(g) {
          return ["DynamicEventMetadata", "youtube", g];
        }
        function h(g, p = !0) {
          return {
            queryKey: T(g),
            queryFn: async () => {
              const i = await M({ youtubevideoids: g }),
                P = i.youtube?.find((E) => E.videoid == g) ?? i.youtube?.[0];
              if (!P) throw new Error(`no metadata for youtube video ${g}`);
              return { ...P, title: e(P.title), description: e(P.description) };
            },
            enabled: p && !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function b(g, p = !0) {
          return (0, U.I)(h(g, p));
        }
        function L(g) {
          return ["DynamicEventMetadata", "sharedfile", g];
        }
        function v(g) {
          return {
            queryKey: L(g),
            queryFn: async () => {
              const p = await M({ sharedfileids: g }),
                i =
                  p.sharedfiles?.find((P) => P.sharedfileid == g) ??
                  p.sharedfiles?.[0];
              if (!i) throw new Error(`no metadata for shared file ${g}`);
              return {
                ...i,
                title: e(i.title),
                description: e(i.description),
                type: e(i.type),
              };
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function D(g) {
          return (0, U.I)(v(g));
        }
      },
      43597: (w, j, n) => {
        "use strict";
        n.d(j, { AX: () => A, V2: () => E, j6: () => u });
        var e = n(7850),
          m = n(72080),
          U = n(86722),
          a = n(32093),
          M = n(72609),
          T = n(90626),
          h = n(43458),
          b = n(85599),
          L = n(32608),
          v = n(36707),
          D = n(18210),
          g = n(19730),
          p = n(374),
          i = n(31587),
          P = n.n(i),
          E = ((r) => (
            (r.left = "leftthumb"),
            (r.right = "rightthumb"),
            (r.full = "full"),
            (r.summary = "summary"),
            r
          ))(E || {});
        function y(r) {
          return r == "full"
            ? P().sizeFull
            : (0, v.A)(
                P().sizeThumb,
                r == "leftthumb" ? P().floatLeft : P().floatRight,
              );
        }
        function A(r) {
          const {
              videoID: t,
              bShowVideoImmediately: o,
              bAutoPlay: _,
              nStartSeconds: d,
              align: f = "full",
            } = r,
            [B, l] = (0, T.useState)(!o),
            { data: O, isSuccess: C } = (0, p.F8)(t, B);
          if (B) {
            const x = O?.title ?? (0, D.we)("#Loading"),
              F = O?.views ?? "0",
              W = O?.description ?? "",
              I = () => l(!1),
              K = (V) => {
                (V.key == "Enter" || V.key == " ") && (V.preventDefault(), I());
              };
            return (0, e.jsxs)("div", {
              className: m.gg.Box,
              role: "button",
              tabIndex: 0,
              onClick: I,
              onKeyDown: K,
              children: [
                (0, e.jsx)(m.KN, {
                  strURL: "https://img.youtube.com/vi/" + t + "/0.jpg",
                }),
                (0, e.jsxs)(m.J7, {
                  children: [
                    (0, e.jsx)(m.bv, {
                      children: (0, D.we)("#EventEditor_YouTubeVideoTitle", x),
                    }),
                    (0, e.jsx)(m.Yd, {
                      children: (0, D.we)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, g.Dq)(Number(F)),
                      ),
                    }),
                    (0, e.jsxs)(m.s4, {
                      children: [
                        C && W,
                        !C && (0, e.jsx)(b.t, { size: "medium" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, e.jsx)(L.gZ, {
              video: t,
              children: (0, e.jsxs)("div", {
                className: (0, v.A)(P().PreviewYouTubeVideo, y(f)),
                id: t,
                children: [
                  (0, e.jsx)("img", {
                    className: P().PlaceholderImg,
                    alt: "",
                    src:
                      M.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, e.jsx)(L.fm, {
                    video: t,
                    autoplay: _ ?? !1,
                    startSeconds: d,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
        function u(r, t) {
          if (M.TS.EREALM === a.TU.k_ESteamRealmChina) return null;
          const o = (0, h.XU)(r);
          return o?.strVideoID !== void 0
            ? (0, e.jsx)(A, {
                videoID: o.strVideoID,
                nStartSeconds: o.nStartSeconds,
                bShowVideoImmediately: !1,
              })
            : (0, U.Pm)(r, t?.event);
        }
      },
      72243: (w, j, n) => {
        "use strict";
        n.d(j, { L: () => v });
        var e = n(7850),
          m = n(90626),
          U = n(99412),
          a = n(32093),
          M = n(18210),
          T = n(53113),
          h = n(72609);
        function b(E) {
          return !(
            (!(0, T._1)(E.sPoster) && !(0, T.ZF)(E.sPoster)) ||
            (E.rgVideoSources &&
              E.rgVideoSources.some((y) => !(0, T.ZF)(y.sURL))) ||
            (E.rgVideoTracks && E.rgVideoTracks.some((y) => !(0, T.ZF)(y.sURL)))
          );
        }
        class L {
          m_bUserHasVolumePreference = !1;
          m_flVolumePreference = 0;
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(y) {
            (this.m_flVolumePreference = y),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static s_Singleton;
          static Get() {
            return L.s_Singleton || (L.s_Singleton = new L()), L.s_Singleton;
          }
        }
        const v = (0, m.forwardRef)(function (y, A) {
          const {
              video: u,
              bAutoPlay: r,
              bControls: t,
              bLoop: o,
              bMuted: _,
              className: d,
              mediaScale: f,
              flAspectRatio: B,
              onClick: l,
              altText: O,
            } = y,
            C = (0, m.useMemo)(
              () =>
                !!u.rgVideoTracks?.some(
                  (Q) => Q.sKind == "subtitles" || Q.sKind == "captions",
                ),
              [u.rgVideoTracks],
            ),
            [x, F] = m.useState(!1),
            W = D();
          if (!u.rgVideoSources || !u.rgVideoSources.length) return null;
          const I = b(u);
          let K;
          (!I || (C && h.TS.EUNIVERSE == U.wLO)) && (K = "anonymous");
          const V = _ || (r && L.Get().BVolumePreferenceMuted()),
            Z = u.sPoster ? g(u.sPoster, W) : "",
            q = (Q) => {
              const G = Q.target,
                z = G.muted ? 0 : G.volume;
              x && L.Get().SetVolumePreference(z);
            },
            ne = (Q) => {
              const G = Q.target,
                z = G.currentTime == 0,
                ee = L.Get().BUserHasVolumePreference();
              if ((F(!0), !!z))
                if (!ee && !r) {
                  const J = G.muted ? 0 : G.volume;
                  L.Get().SetVolumePreference(J);
                } else
                  ee &&
                    ((G.volume = L.Get().GetVolumePreference()),
                    (G.muted = L.Get().BVolumePreferenceMuted()));
            };
          return (0, e.jsxs)("video", {
            width: "100%",
            height: "auto",
            autoPlay: r,
            muted: V,
            playsInline: !0,
            controls: t,
            poster: Z,
            loop: o,
            crossOrigin: K,
            onVolumeChange: q,
            onPlay: ne,
            ref: A,
            className: d,
            onClick: l,
            "aria-label": O,
            style: {
              width: f && f >= 1 && f < 100 ? `${f}%` : void 0,
              aspectRatio: B || void 0,
            },
            children: [
              (0, e.jsx)(p, {
                rgVideoSources: u.rgVideoSources,
                strCacheBreakOrigin: W,
              }),
              (0, e.jsx)(i, {
                rgVideoTracks: u.rgVideoTracks,
                strCacheBreakOrigin: W,
              }),
            ],
          });
        });
        function D() {
          const E = window.location.href,
            A = [
              h.TS.STORE_BASE_URL,
              h.TS.COMMUNITY_BASE_URL,
              h.TS.PARTNER_BASE_URL,
              h.TS.HELP_BASE_URL,
              h.TS.STATS_BASE_URL,
              h.TS.STORE_CHECKOUT_BASE_URL,
            ].find((u) => u && E.startsWith(u));
          if (A) return A;
          try {
            return new URL(E).origin + "/";
          } catch {
            return "unknown";
          }
        }
        function g(E, y) {
          if (E) {
            if ((0, T._1)(E)) return E;
            try {
              const A = new URL(E);
              return (
                (A.search = (A.search ? A.search + "&" : "?") + "origin=" + y),
                A.toString()
              );
            } catch {
              return E;
            }
          }
        }
        function p(E) {
          const { rgVideoSources: y, strCacheBreakOrigin: A } = E;
          return y
            .filter((u) => !!u.sURL)
            .map((u) =>
              (0, e.jsx)(
                "source",
                { src: g(u.sURL, A), type: u.sFormat },
                u.sURL,
              ),
            );
        }
        function i(E) {
          const { rgVideoTracks: y, strCacheBreakOrigin: A } = E;
          return y
            ? y.map((u, r) =>
                (0, e.jsx)(
                  P,
                  { track: u, rgVideoTracks: y, strCacheBreakOrigin: A },
                  r,
                ),
              )
            : null;
        }
        function P(E) {
          const { track: y, rgVideoTracks: A, strCacheBreakOrigin: u } = E;
          let r = y.eLanguage;
          if (h.TS.EREALM == a.TU.k_ESteamRealmChina)
            if (M.A0.IsELanguageValidInRealm(r, a.TU.k_ESteamRealmChina))
              r = M.A0.GetELanguageFallback(r);
            else if (r === U.NFp) {
              if (A.find((t) => M.A0.GetELanguageFallback(t.eLanguage) === r))
                return null;
            } else return null;
          else if (!M.A0.IsELanguageValidInRealm(r, a.TU.k_ESteamRealmGlobal))
            return null;
          return (0, e.jsx)("track", {
            src: g(y.sURL, u),
            kind: y.sKind,
            default: y.bDefault,
            srcLang: (0, U.wwZ)(r),
            label: (0, M.uD)(r),
          });
        }
      },
      70187: (w, j, n) => {
        "use strict";
        n.d(j, {
          B8: () => $,
          It: () => O,
          Pk: () => re,
          Sz: () => F,
          Tu: () => o,
          W4: () => u,
          ZS: () => W,
          Zb: () => x,
          _J: () => ie,
          ck: () => ce,
          d$: () => J,
          j$: () => t,
        });
        var e = n(7850),
          m = n(29950),
          U = n(33645),
          a = n.n(U),
          M = n(24660),
          T = n(19298),
          h = n(71944),
          b = n(90626),
          L = n(43434),
          v = n(83482),
          D = n(1917),
          g = n(36118),
          p = n(71421),
          i = n(36707),
          P = n(18210),
          E = n(53113),
          y = n(98609),
          A = n(68941);
        const u = new Map([
            ["b", { Constructor: _, autocloses: !1 }],
            ["i", { Constructor: d, autocloses: !1 }],
            [
              "h1",
              { Constructor: x, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h2",
              { Constructor: F, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h3",
              { Constructor: W, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h4",
              { Constructor: I, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h5",
              { Constructor: K, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["center", { Constructor: V, autocloses: !1 }],
            [
              "smalltext",
              { Constructor: Z, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["u", { Constructor: f, autocloses: !1 }],
            ["strike", { Constructor: B, autocloses: !1 }],
            ["spoiler", { Constructor: q, autocloses: !1 }],
            ["hr", { Constructor: ne, autocloses: !1 }],
            ["noparse", { Constructor: ge, autocloses: !1 }],
            ["url", { Constructor: z, autocloses: !1 }],
            ["quote", { Constructor: re, autocloses: !1 }],
            ["pullquote", { Constructor: ae, autocloses: !1 }],
            ["code", { Constructor: X, autocloses: !1 }],
            ["c", { Constructor: le, autocloses: !1 }],
            [
              "list",
              { Constructor: $, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "olist",
              { Constructor: ie, autocloses: !1, skipInternalNewline: !0 },
            ],
            ["*", { Constructor: ce, autocloses: !0, skipInternalNewline: !0 }],
            [
              "table",
              { Constructor: pe, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "tr",
              {
                Constructor: xe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: ve,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: Te,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: Pe,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            ["calendarevent", { Constructor: ye, autocloses: !0 }],
            ["doclink", { Constructor: ee, autocloses: !1 }],
            ["color", { Constructor: Q, autocloses: !1 }],
            ["bgcolor", { Constructor: G, autocloses: !1 }],
            ["p", { Constructor: l, autocloses: !1, skipFollowingNewline: !0 }],
          ]),
          r = new Map([
            ["looping_media", { Constructor: A.$A, autocloses: !1 }],
            ["video", { Constructor: A.UT, autocloses: !1 }],
            ["youtubeorvideo", { Constructor: D.Eo, autocloses: !1 }],
            ["previewyoutube", { Constructor: D.gH, autocloses: !1 }],
          ]);
        function t(s, c) {
          return c === void 0 ? s[""] : s[c];
        }
        function o(s, c) {
          return (N) => s({ ...N, className: c });
        }
        function _(s) {
          return (0, e.jsx)("b", { className: a().Bold, children: s.children });
        }
        function d(s) {
          return (0, e.jsx)("i", {
            className: (0, i.A)(a().Italic, "BB_Italic"),
            children: s.children,
          });
        }
        function f(s) {
          return (0, e.jsx)("u", {
            className: a().Underline,
            children: s.children,
          });
        }
        function B(s) {
          return (0, e.jsx)("s", {
            className: a().Strike,
            children: s.children,
          });
        }
        function l(s) {
          return (0, e.jsxs)("p", {
            className: a().Paragraph,
            children: [s.children, (0, e.jsx)("wbr", {})],
          });
        }
        function O(s) {
          return (0, e.jsxs)("div", {
            className: a().Paragraph,
            role: "paragraph",
            children: [s.children, (0, e.jsx)("wbr", {})],
          });
        }
        function C(s, c, N) {
          let S = t(c.args, "id");
          return (
            S || (S = t(c.args)),
            S &&
              typeof S == "string" &&
              S.length > 0 &&
              S[0] === "#" &&
              (S = S.substring(1)),
            (0, e.jsx)(s, {
              id: S || void 0,
              className: (0, i.A)(N, c.className),
              children: c.children,
            })
          );
        }
        function x(s) {
          return C("h1", s, (0, i.A)(a().Header1, "BB_Header1"));
        }
        function F(s) {
          return C("h2", s, (0, i.A)(a().Header2, "BB_Header2"));
        }
        function W(s) {
          return C("h3", s, (0, i.A)(a().Header3, "BB_Header3"));
        }
        function I(s) {
          return C("h4", s, (0, i.A)(a().Header4, "BB_Header4"));
        }
        function K(s) {
          return C("h5", s, (0, i.A)(a().Header5, "BB_Header5"));
        }
        function V(s) {
          let c = t(s.args, "id");
          return (
            c &&
              typeof c == "string" &&
              c.length > 0 &&
              c[0] === "#" &&
              (c = c.substring(1)),
            (0, e.jsx)("span", {
              id: c || void 0,
              className: (0, i.A)(a().CenterSpan, "BB_Center"),
              children: s.children,
            })
          );
        }
        function Z(s) {
          return C("div", s, (0, i.A)(a().SmallText, "BB_SmallText"));
        }
        function q(s) {
          let [c, N] = b.useState(!1),
            S = b.useCallback(() => {
              N(!c);
            }, [c]);
          return (0, e.jsx)(T.Z, {
            className: (0, i.A)(a().Spoiler, c && a().Revealed),
            focusable: !0,
            onActivate: S,
            onOKActionDescription: (0, P.we)(
              c ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, e.jsx)("span", {
              className: a().SpoilerText,
              children: s.children,
            }),
          });
        }
        function ne(s) {
          return (0, e.jsx)("hr", { className: a().HR });
        }
        function Q(s) {
          const c = t(s.args);
          return (0, e.jsx)("span", {
            style: { color: c },
            children: s.children,
          });
        }
        function G(s) {
          const c = t(s.args);
          return (0, e.jsx)("span", {
            style: { backgroundColor: c },
            children: s.children,
          });
        }
        function z(s) {
          let c = (0, m.J)(t(s.args));
          if (!c) {
            const k = s.children;
            typeof k == "string" && (0, E.DZ)(k) && (c = (0, m.J)(k));
          }
          const N = t(s.args, "style") == "button" ? a().LinkButton : void 0,
            S = N && t(s.args, "buttoncolor");
          let R = t(s.args, "id");
          return (
            R &&
              typeof R == "string" &&
              R.length > 0 &&
              R[0] === "#" &&
              (R = R.substring(1)),
            c === void 0 && !R
              ? s.children || ""
              : c === void 0 ||
                  (typeof c == "string" && c.length > 0 && c[0] == "#")
                ? (0, e.jsx)("a", {
                    href: c ?? null,
                    id: R,
                    children: s.children,
                  })
                : (0, e.jsx)(J, {
                    className: N,
                    href: c,
                    id: R,
                    style: { backgroundColor: S },
                    children: s.children,
                  })
          );
        }
        function ee(s) {
          const c = t(s.args),
            N = t(s.args, "style") == "button" ? a().LinkButton : void 0,
            S = N && t(s.args, "buttoncolor");
          return (0, e.jsx)(J, {
            className: N,
            style: { backgroundColor: S },
            href: `${y.TS.PARTNER_BASE_URL}doc/${c}`,
            children: s.children,
          });
        }
        const J = (s) => {
          const { href: c, ...N } = s;
          let S = (0, v.OZ)(c ?? ""),
            R;
          (0, L.p)(S)
            ? ((S =
                (y.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, L.E)(S)),
              (R = "noopener nofollow"))
            : (S = (0, E.NT)(S));
          const k =
            typeof s.children == "string" &&
            s.children.length > 0 &&
            c &&
            !c.startsWith("steam://")
              ? (0, E.Qz)(c)
              : void 0;
          return (0, e.jsx)(p.Gq, {
            toolTipContent: k,
            direction: "top",
            children: (0, e.jsx)(M.Ii, {
              ...N,
              href: S,
              rel: R,
              children: s.children,
            }),
          });
        };
        function oe(s) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: t(s.args),
            children: s.children,
          });
        }
        function re(s) {
          const c = t(s.args, "author");
          return (0, e.jsxs)("blockquote", {
            className: (0, i.A)(a().BlockQuote, s.className),
            children: [
              !!c &&
                (0, e.jsxs)("div", {
                  className: a().QuoteAuthor,
                  children: [
                    (0, P.we)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, e.jsx)("b", { children: c + ":" }),
                  ],
                }),
              s.children,
            ],
          });
        }
        function ae(s) {
          return (0, e.jsx)("div", {
            className: a().PullQuote,
            children: s.children,
          });
        }
        function X(s) {
          return (0, e.jsx)("code", {
            className: a().CodeBlock,
            children: s.children,
          });
        }
        function le(s) {
          return (0, e.jsx)("code", {
            className: a().Code,
            children: s.children,
          });
        }
        function $(s) {
          return (0, e.jsx)("ul", {
            className: (0, i.A)(a().List, "bullets"),
            children: s.children,
          });
        }
        function ie(s) {
          return (0, e.jsx)("ol", {
            className: a().OrderedList,
            children: s.children,
          });
        }
        function ce(s) {
          let c = t(s.args, "id");
          return (
            c &&
              typeof c == "string" &&
              c.length > 0 &&
              c[0] === "#" &&
              (c = c.substring(1)),
            (0, e.jsx)("li", {
              className: a().ListItem,
              id: c || void 0,
              children: s.children,
            })
          );
        }
        function ge(s) {
          return s.children;
        }
        function pe(s) {
          const c = t(s.args, "noborder"),
            N = t(s.args, "equalcells"),
            S = t(s.args, "colwidth");
          return (0, e.jsxs)("table", {
            className: (0, i.A)(
              a().Table,
              "BB_Table",
              c && a().NoBorder,
              N && a().EqualCells,
            ),
            children: [
              S &&
                (0, e.jsx)("colgroup", {
                  children: S.split(",").map((R, k) =>
                    (0, e.jsx)(Ce, { width: R }, k),
                  ),
                }),
              (0, e.jsx)("tbody", { children: s.children }),
            ],
          });
        }
        function Ce(s) {
          const { width: c } = s;
          let N;
          return (
            c && parseInt(c) > 0 && (N = { width: `${c}px` }),
            (0, e.jsx)("col", { style: N })
          );
        }
        function xe(s) {
          return (0, e.jsx)("tr", {
            className: (0, i.A)(a().TableRow, "BB_TableRow"),
            children: s.children,
          });
        }
        function me(s, c) {
          const N = t(c.args, "width"),
            S = t(c.args, "colspan"),
            R = t(c.args, "rowspan"),
            k = {};
          return (
            S && parseInt(S) > 1 && (k.colSpan = parseInt(S)),
            R && parseInt(R) > 1 && (k.rowSpan = parseInt(R)),
            (0, e.jsx)(s, {
              className: (0, i.A)(a().TableCell, s == "td" && "BB_TableData"),
              ...k,
              style: N ? { width: N } : void 0,
              children: c.children,
            })
          );
        }
        function ve(s) {
          return me("th", s);
        }
        function Te(s) {
          return me("td", s);
        }
        function De(s, c, N, S) {
          switch (s) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: a().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: a().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: c || N || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: c || S || "#Bbcode_Expand_ShowMore_Expanded",
                style: a().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: a().ExpandSection_ShowMore,
              };
          }
        }
        function Pe(s) {
          const c = !!t(s.args, "expanded"),
            [N, S] = b.useState(c),
            R = t(s.args, "title"),
            k = t(s.args, "collapsed_str"),
            ue = t(s.args, "expanded_str"),
            Y = De(t(s.args, "type"), R, k, ue);
          return (0, e.jsxs)("div", {
            className: (0, i.A)({
              [a().ExpandSectionBlock]: !0,
              [Y.style ?? ""]: Y.style != null,
              [a().ExpandSectionExpanded]: N,
              [a().ExpandSectionCollapsed]: !N,
              BBCodeExpanded: N,
              BBCodeCollapsed: !N,
            }),
            children: [
              (0, e.jsxs)("div", {
                className: a().ExpandSectionHeader,
                onClick: () => S(!N),
                children: [
                  (0, P.we)(N ? Y.expanded : Y.collapsed),
                  (0, e.jsx)("div", {
                    className: a().EmbedArrow,
                    children: (0, e.jsx)(g.DK4, { angle: N ? 180 : 0 }),
                  }),
                ],
              }),
              N &&
                (0, e.jsx)("div", {
                  className: a().ExpandSectionBody,
                  children: s.children,
                }),
            ],
          });
        }
        function ye(s) {
          const c = t(s.args, "title"),
            N = t(s.args, "start") ?? t(s.args, "datetime"),
            S = t(s.args, "end") ?? t(s.args, "datetime"),
            R = t(s.args, "body") ?? null,
            k = t(s.args, "location") ?? null,
            ue = t(s.args, "id") ?? "",
            Y = new Date(N),
            Le = Y.getUTCFullYear(),
            Be = ("0" + (Y.getUTCMonth() + 1)).slice(-2),
            Oe = ("0" + Y.getUTCDate()).slice(-2),
            Ae = ("0" + Y.getUTCHours()).slice(-2),
            Me = ("0" + Y.getUTCMinutes()).slice(-2),
            fe = `${Le}${Be}${Oe}T${Ae}${Me}00Z`,
            te = new Date(S),
            Se = te.getUTCFullYear(),
            be = ("0" + (te.getUTCMonth() + 1)).slice(-2),
            Ne = ("0" + te.getUTCDate()).slice(-2),
            Ue = ("0" + te.getUTCHours()).slice(-2),
            Ie = ("0" + te.getUTCMinutes()).slice(-2),
            he = `${Se}${be}${Ne}T${Ue}${Ie}00Z`;
          let se;
          try {
            let H = `BEGIN:VCALENDAR\r
`;
            (H += `VERSION:2.0\r
`),
              (H += `BEGIN:VEVENT\r
`),
              (H += `DTSTART:${fe}\r
`),
              (H += `DTEND:${he}\r
`),
              (H += `SUMMARY:${c.replace(
                `
`,
                "\\n",
              )}\r
`),
              R &&
                (H += `DESCRIPTION:${R.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              k &&
                (H += `LOCATION:${k.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (H += `END:VEVENT\r
`),
              (H += `END:VCALENDAR\r
`),
              (se = `data:text/calendar;charset=utf-8;base64,${h.iI(new TextEncoder().encode(H))}`);
          } catch (H) {
            console.error(H);
          }
          let de =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (de += `&text=${encodeURI(c)}`),
            (de += `&details=${encodeURI(R)}`),
            (de += `&dates=${encodeURI(fe + "/" + he)}`);
          const Ee = (H) => {
            if ("ReactNativeWebView" in window) {
              const je = window.ReactNativeWebView,
                Re = {
                  event_name: "addcalendarevent",
                  tsStart: Y.getTime(),
                  tsEnd: te.getTime(),
                  strTitle: c,
                  strNotes: R,
                  strLocation: k,
                };
              je.postMessage(JSON.stringify(Re)), H.preventDefault();
            }
          };
          return (0, e.jsxs)("div", {
            className: (0, i.A)(
              "SaleSectionCalendarEventContainer",
              a().CalendarEventContainer,
            ),
            id: ue,
            children: [
              se &&
                (0, e.jsx)("a", {
                  className: (0, i.A)(
                    "SaleSectionCalendarEventLink",
                    a().CalendarEventLink,
                  ),
                  href: se,
                  onClick: Ee,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, e.jsx)("a", {
                className: (0, i.A)(
                  "SaleSectionCalendarEventLink",
                  a().CalendarEventLink,
                ),
                href: de,
                children: "Google",
              }),
              se &&
                (0, e.jsx)("a", {
                  className: (0, i.A)(
                    "SaleSectionCalendarEventLink",
                    a().CalendarEventLink,
                  ),
                  href: se,
                  onClick: Ee,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      68941: (w, j, n) => {
        "use strict";
        n.d(j, { $A: () => b, UT: () => L, g4: () => h });
        var e = n(7850),
          m = n(99412),
          U = n(72243),
          a = n(53113),
          M = n(98609),
          T = n(70187);
        function h(v) {
          let D = (0, T.j$)(v, "poster");
          D && (D = (0, a.L$)(D));
          const g = new Array();
          {
            const E = (0, T.j$)(v, "mp4");
            E && g.push({ sURL: (0, a.L$)(E), sFormat: "video/mp4" });
            const y = (0, T.j$)(v, "webm");
            y && g.push({ sURL: (0, a.L$)(y), sFormat: "video/webm" });
          }
          const p = (0, m.sfN)(M.TS.LANGUAGE),
            i = p != m.Bhc,
            P = new Array();
          for (let E = m.Bhc; E < m.bP9; E++) {
            const y = (0, T.j$)(v, "sub_" + (0, m.wwZ)(E));
            y &&
              P.push({
                sURL: (0, a.L$)(y),
                eLanguage: E,
                sKind: "subtitles",
                bDefault: i && E == p,
              });
            const A = (0, T.j$)(v, "cap_" + (0, m.wwZ)(E));
            A &&
              P.push({
                sURL: (0, a.L$)(A),
                eLanguage: E,
                sKind: "captions",
                bDefault: i && E == p,
              });
          }
          return { sPoster: D, rgVideoSources: g, rgVideoTracks: P };
        }
        function b(v) {
          const D = h(v.args);
          return (0, e.jsx)(U.L, {
            video: D,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function L(v) {
          const D = h(v.args),
            g = v.children ? v.children.toString() : void 0;
          g &&
            g.startsWith("http") &&
            D.rgVideoSources.push({
              sURL: (0, a.L$)(g),
              sFormat: "video/webm",
            });
          const p = (0, T.j$)(v.args, "autoplay"),
            i = p !== "0" && p !== "off" && p !== "false",
            P = (0, T.j$)(v.args, "controls"),
            E = P !== "0" && P !== "off" && P !== "false",
            y = (0, T.j$)(v.args, "loop"),
            A = P !== "0" && P !== "off" && P !== "false";
          return (0, e.jsx)(U.L, {
            video: D,
            bAutoPlay: i,
            bControls: E,
            bLoop: y ? A : i,
          });
        }
      },
      43828: (w, j, n) => {
        "use strict";
        n.d(j, { h: () => L });
        var e = n(7850),
          m = n(33770),
          U = n(90626),
          a = n(70187),
          M = n(7487),
          T = n(72609);
        function h(v) {
          return new M.OJ(new M.R8());
        }
        function b() {
          return new Map([...Array.from(a.W4.entries())]);
        }
        function L(v) {
          const { text: D, languageOverride: g } = v,
            [p] = (0, U.useState)(new m.B(b(), h, g ?? T.TS.LANGUAGE));
          return (0, e.jsx)(e.Fragment, { children: p.ParseBBCode(D, {}) });
        }
      },
      1917: (w, j, n) => {
        "use strict";
        n.d(j, { Eo: () => v, V2: () => M.V2, gH: () => L });
        var e = n(7850),
          m = n(90626),
          U = n(70187),
          a = n(68941),
          M = n(43597),
          T = n(32093),
          h = n(72609);
        function b() {
          return h.TS.EREALM === T.TU.k_ESteamRealmChina;
        }
        function L(D) {
          if (b()) return null;
          let g = (0, U.j$)(D.args);
          if (g) {
            let p = g.split(";");
            if (p.length == 2) {
              let i = p[0],
                P = p[1].toLocaleLowerCase();
              return (0, e.jsx)(M.AX, {
                videoID: i,
                align: P,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, e.jsx)(m.Fragment, {});
        }
        function v(D) {
          if (b() || h.TS.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, a.UT)(D);
          const g = (0, U.j$)(D.args, "youtubeid"),
            p = (0, U.j$)(D.args, "size"),
            i = (0, U.j$)(D.args, "seconds");
          return (0, e.jsx)(M.AX, {
            videoID: g,
            nStartSeconds: i ? Number.parseInt(i) : void 0,
            align: p,
            bShowVideoImmediately: !0,
          });
        }
      },
      96197: (w, j, n) => {
        "use strict";
        n.d(j, { n: () => P, c: () => A });
        var e = n(7850),
          m = n(90626),
          U = n(561),
          a = n(21227);
        function M(u) {
          const { text: r = "", style: t, children: o } = u;
          if (r == null) return (0, e.jsx)(m.Fragment, { children: o });
          let _;
          if (
            (r instanceof Array
              ? (_ = r
                  .map((d) => (d ? d.toString() : ""))
                  .filter((d) => d.length > 0)
                  .join(`
`))
              : (_ = r.toString()),
            m.Children.count(o) == 1)
          ) {
            let d = m.Children.only(o);
            return m.cloneElement(d, {
              "data-copystyle": t,
              "data-copytext": _,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${t} copytext=${_}`),
              (0, e.jsx)(m.Fragment, { children: o })
            );
        }
        function T(u) {
          let r = u.cloneContents(),
            t = "",
            o = "",
            _ = !1,
            f = (
              r.querySelector("[data-activechat=true]") || r
            ).querySelectorAll("[data-copytext]"),
            B = Array.from(f).map(
              (l) => l.getAttribute("data-copystyle") || "msg",
            );
          for (let l = 0; l < f.length; ++l) {
            let O = f[l],
              C = B[l];
            if (l + 1 < f.length && DOMUtils.BIsParent(O, f[l + 1])) continue;
            let x = O.tagName.toLowerCase(),
              F = C.includes("block"),
              W = C.includes("timestamp"),
              I = C.includes("server"),
              K = C.includes("invite"),
              V = C.includes("emote"),
              Z = C.includes("no-prefix"),
              q = C.includes("no-suffix"),
              ne = C.includes("allow-embedded-newlines"),
              Q = C.includes("block-continue"),
              G = C.includes("merge-adjacent"),
              z = C.includes("force-display"),
              ee = C.includes("prepend-innertext"),
              J = C.includes("append-innertext"),
              oe = C.includes("prepend-newline"),
              re = C.includes("append-newline"),
              ae = C.includes("speaker");
            if (!z) {
              let ie = x.match(/img|iframe/) != null,
                ce = O.querySelector("img,iframe") != null;
              if (!O.innerText && !ie && !ce) continue;
            }
            G &&
              (l > 0 && B[l - 1].includes("merge-adjacent") && (Z = !0),
              l + 1 < B.length &&
                B[l + 1].includes("merge-adjacent") &&
                (q = !0)),
              ae && (_ = !0);
            let X = "",
              le = `
`;
            !W && !ae && !I && !K && !V
              ? (_ && (X += "	"),
                o.includes("msg") && F && (oe = !0),
                o.includes("block") && !Q && (oe = !0))
              : (t.length != 0 &&
                  (X += `
`),
                (I || K) && (X += "		"));
            let $ = O.getAttribute("data-copytext") ?? "";
            $.length == 0
              ? ($ = O.innerText)
              : ee && O.innerText.length > 0
                ? ($ = `${O.innerText}${
                    C.includes("-with-newline")
                      ? `
`
                      : " "
                  }${$}`)
                : J &&
                  O.innerText.length > 0 &&
                  ($ += `${
                    C.includes("-with-newline")
                      ? `
`
                      : " "
                  }${O.innerText}`),
              $.length != 0 &&
                (oe &&
                  (t += `
`),
                Z || (t += X),
                (t += ne ? $ : $.replace(/\n/g, le + X)),
                q || (t += le),
                re &&
                  (t += `
`)),
              (o = C);
          }
          if (t.length != 0) return t;
        }
        function h(u) {
          const r = T(u);
          r != null && DOMUtils.CopyTextToClipboard(r);
        }
        function b(u) {
          const r = document.createRange();
          r.selectNode(u), h(r);
        }
        var L = n(36707),
          v = n(42060),
          D = n.n(v),
          g = n(86048),
          p = n(80902),
          i = n(72609);
        function P(u) {
          const { emoticon: r, large: t } = u,
            [o, _] = (0, g.OP)(),
            [d, f] = m.useState(null),
            B = `:${r}:`,
            l = (0, a.G)(r, t);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(M, {
                text: B,
                style: "merge-adjacent",
                children: (0, e.jsx)("img", {
                  ..._,
                  src: l,
                  className: (0, L.A)(D().emoticon, t ? D().large : void 0),
                  "data-emoticon": r,
                  alt: r,
                  ref: f,
                }),
              }),
              o && d && (0, e.jsx)(E, { target: d, emoticon: r }),
            ],
          });
        }
        function E(u) {
          const { target: r, emoticon: t } = u,
            { data: o } = y(t);
          return (0, e.jsx)(A, {
            target: r,
            title: `:${t}:`,
            subtitle: o && o.app_name ? o.app_name : void 0,
            children: (0, e.jsx)(P, { emoticon: t, large: !0 }),
          });
        }
        function y(u) {
          return (0, p.I)({
            queryKey: ["EmoticonHover", u],
            queryFn: async () => {
              const r = `${i.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(u)}?l=${encodeURIComponent(i.TS.LANGUAGE)}&origin=${self.origin}`,
                t = await fetch(r);
              if (t.status != 200)
                throw `Error fetching emoticon: ${t.status} ${t.statusText}`;
              return await t.json();
            },
          });
        }
        const A = ({ target: u, title: r, subtitle: t, children: o }) =>
          (0, e.jsxs)(U.g, {
            target: u,
            style: { zIndex: 1700 },
            className: D().EmoticonHover,
            children: [
              o,
              (0, e.jsxs)("div", {
                className: D().Info,
                children: [
                  (0, e.jsx)("div", {
                    className: D().Name,
                    children: r || (0, e.jsx)("span", { children: "\xA0" }),
                  }),
                  (0, e.jsx)("div", {
                    className: D().AppName,
                    children: t || (0, e.jsx)("span", { children: "\xA0" }),
                  }),
                ],
              }),
            ],
          });
      },
      34736: (w, j, n) => {
        "use strict";
        n.d(j, { $k: () => y, S8: () => r, fI: () => u });
        var e = n(7850),
          m = n(75844),
          U = n(90626),
          a = n(29630),
          M = n(99412),
          T = n(1960),
          h = n(561),
          b = n(67344),
          L = n(30096),
          v = n(72609),
          D = n(43828),
          g = n(3246),
          p = n.n(g),
          i = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          E = (t, o, _, d) => {
            for (
              var f = d > 1 ? void 0 : d ? P(o, _) : o, B = t.length - 1, l;
              B >= 0;
              B--
            )
              (l = t[B]) && (f = (d ? l(o, _, f) : l(f)) || f);
            return d && f && i(o, _, f), f;
          };
        const y = (0, m.PA)((t) => {
            const o = (0, a.z5)(t.photo, (0, M.sfN)(v.TS.LANGUAGE)),
              _ = o ? (typeof o == "string" ? o : o[1]) : void 0,
              d = !!t.title,
              f = !!t.company;
            return (0, e.jsxs)("div", {
              className: p().SpeakerPopup,
              onMouseLeave: t.fnClose,
              children: [
                (0, e.jsxs)("div", {
                  className: p().SpeakerInfoOuter,
                  children: [
                    t.photo && (0, e.jsx)("img", { src: _ }),
                    (0, e.jsxs)("div", {
                      className: p().SpeakerInfoInner,
                      children: [
                        (0, e.jsx)("div", { children: t.name }),
                        (d || f) &&
                          (0, e.jsxs)("div", {
                            children: [
                              d &&
                                (0, e.jsx)("span", {
                                  className: p().SpeakerTitle,
                                  children: t.title,
                                }),
                              d && f && (0, e.jsx)("span", { children: ", " }),
                              f && (0, e.jsx)("span", { children: t.company }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                t.bio &&
                  (0, e.jsxs)("div", {
                    className: p().SpeakerBio,
                    children: [
                      t.bio,
                      t.bioString && (0, e.jsx)(D.h, { text: t.bioString }),
                    ],
                  }),
              ],
            });
          }),
          A = class _e extends U.Component {
            static sm_embeddedElements = new T.MX(
              "presenter-hover-source-elements",
            );
            m_refAnchor = U.createRef();
            m_fnHidePopup = null;
            m_nScrollPosAtHoverStart = 0;
            ClosePopup() {
              (0, b.p)() ||
                (this.m_fnHidePopup &&
                  (this.m_fnHidePopup(),
                  (this.m_fnHidePopup = null),
                  window.removeEventListener("scroll", this.OnScroll)));
            }
            componentWillUnmount() {
              this.ClosePopup();
            }
            OnScroll() {
              Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
                this.ClosePopup();
            }
            OnHover(o) {
              const _ = this.m_refAnchor.current;
              if (!_) return;
              const d = {
                  direction: "right",
                  bEnablePointerEvents: !0,
                  style: { maxWidth: 640, minHeight: _.clientHeight },
                  target: _,
                },
                f = "presenter-hover-" + Math.floor(Math.random() * 1e8);
              (this.m_fnHidePopup = () =>
                _e.sm_embeddedElements.HideElement(_.ownerDocument, f)),
                window.addEventListener("scroll", this.OnScroll),
                (this.m_nScrollPosAtHoverStart = window.scrollY),
                _e.sm_embeddedElements.ShowElementDelayed(
                  _.ownerDocument,
                  150,
                  (0, e.jsx)(h.g, {
                    ...d,
                    children: (0, e.jsx)(y, {
                      ...this.props,
                      fnClose: this.OnLeave,
                    }),
                  }),
                  f,
                );
            }
            OnLeave(o) {
              this.ClosePopup();
            }
            render() {
              return (0, e.jsx)("div", {
                className: p().SpeakerHover,
                ref: this.m_refAnchor,
                onMouseEnter: this.OnHover,
                onFocus: this.OnHover,
                onMouseLeave: this.OnLeave,
                onBlur: this.OnLeave,
                children: this.props.children,
              });
            }
          };
        E([L.oI], A.prototype, "ClosePopup", 1),
          E([L.oI], A.prototype, "OnScroll", 1),
          E([L.oI], A.prototype, "OnHover", 1),
          E([L.oI], A.prototype, "OnLeave", 1);
        let u = A;
        function r(t) {
          const {
              photo: o,
              name: _,
              title: d,
              company: f,
              hidePhotoInCompactView: B,
            } = t,
            l = (0, a.z5)(o, (0, M.sfN)(v.TS.LANGUAGE)),
            O = l && !B ? (typeof l == "string" ? l : l[1]) : null,
            C = !!d,
            x = !!f;
          return (0, e.jsx)("div", {
            className: p().SpeakerOuter,
            children: (0, e.jsx)(u, {
              ...t,
              children: (0, e.jsx)("div", {
                className: p().Speaker,
                children: (0, e.jsxs)("div", {
                  className: p().SpeakerInfoOuter,
                  children: [
                    !!O && (0, e.jsx)("img", { src: O }),
                    (0, e.jsxs)("div", {
                      className: p().SpeakerInfoInner,
                      children: [
                        (0, e.jsx)("div", { children: _ }),
                        (C || x) &&
                          (0, e.jsxs)("div", {
                            children: [
                              C &&
                                (0, e.jsx)("span", {
                                  className: p().SpeakerTitle,
                                  children: d,
                                }),
                              C && x && (0, e.jsx)("span", { children: ", " }),
                              x && (0, e.jsx)("span", { children: f }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      33645: (w) => {
        w.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      11748: (w) => {
        w.exports = {
          DynamicLinkBox: "_3OFDUxRty2ooEGGBg8vLNM",
          DynamicLink_Preview: "_4x92ciMecfHsd6LXEp3zX",
          DynamicLink_Author: "_2CrHQnyBFUGqFf-6TbIsUA",
          DynamicLink_Description: "_1iv64lWG6UxhSX400UsU1S",
          DynamicLink_YouTubeEmbed: "_3Jd9PKMuBGuSbDBCsV03Oo",
          DynamicLink_StoreWidget: "uvn7ESAm1Jwm-SOwZmBWO",
          DynamicLink_Content: "_29vvBvtM17Ec_19L9VJZdk",
          DynamicLink_Name: "_25KAQjQwrv2EL8tnlLeTB7",
          DynamicLink_YoutubeViews: "_3ZgvwxMMqbe_8wVfRiQ9kq",
          Dynamiclink_Content: "_3UUlLNsS9oZt2zNHM5T76z",
          DynamicLink_URL: "_9135FDWNKXjIolFAo7Gub",
          DynamicLink_AuthorName: "_6R7Q24Jlkhs_t0fYUHxQx",
          DynamicLink_Date: "_15wEuEj-SyCZ4J4hJqtmgD",
        };
      },
      31587: (w) => {
        w.exports = {
          PreviewYouTubeVideo: "uT9FPw-RIxscziWGUKvsY",
          sizeThumb: "_34JfgvTZH0JwSWKnwpT5tf",
          sizeFull: "_2i-wrmaduZQDwFtlSpRG5b",
          PlaceholderImg: "wJ2r7A6UK2WbDVoNBgd36",
          floatLeft: "_3uqwDPu50ujydI4AiMemeN",
          floatRight: "_29hzTH-jljX8p2qXboZbXW",
        };
      },
      42060: (w) => {
        w.exports = {
          NewEmoticonIndicator: "_5BtHMjT9usALaSWHGugdV",
          NewEmoticonCircle: "u5Kx6dkUppvb-1qV4IIuy",
          EmoticonSelector: "_21dGPKyxoQJmk8T757A5tl",
          emoticon: "_1ZQW1wV5cNj3sDpibfbUqs",
          large: "_20l1z3ShpHQ9njRDYgy1I5",
          EmoticonSelector_Emoticons: "_1zMG_TAAO7uJ9DZvsPLfay",
          EmoticonSelector_Separator: "_2ETbIGwtl6SLfkb48DDgvG",
          EmoticonSelector_SeparatorBackground: "_3vIdbqkcpvxxyyRioKoQkz",
          EmoticonSelector_Controls: "_2ncH4xow85UXkBM0hcrY8l",
          EmoticonSelector_Item: "iSEjD9v1iZNJNbGHtDLZx",
          EmoticonSelector_Item_New: "_1C2S6Gne45ErVlr3yX0YuG",
          EffectHeading: "_1G4cTIWNmmp8hn-0UODGqo",
          StickerHeading: "_2o2L-YGgH5cNuwJW9nU9dm",
          GetFestive: "EOLiaNBZK-eUBTeiD-P4c",
          TopDivider: "xf7hAWPD4WwXxsyXYxFFo",
          BottomDivider: "_1gjpUnY8RyS8HpizGQvyFI",
          StickerButton: "_2fYj8pHe3bHHxWj4FucFvj",
          EffectButton: "_22MJpsSm-Ur5FU5WpYQKzn",
          EmoticonHover: "W_hPU2JmhTx3oUqDN9ADo",
          Info: "_29D_0UxbftoceIAKZktndo",
          Name: "_3zUR2KWg7TNWOQx2nDFyoh",
          AppName: "_2JWWOJGZuX70xQcA2QaBg",
          StickerHoverSticker: "_1HdRqbOgpBfEQzQ2py5nq5",
          EffectHoverEffect: "_1GZ-ESK0dV6oJBDhsU3RiH",
          PickerTab: "VrrpBsQE4GFseDy3cTw1Q",
          Clock: "_16xcLj__xBHmc9xDYmADhW",
          EmoticonItem: "P1aWuK_DhstDh-M08okCK",
        };
      },
      3246: (w) => {
        w.exports = {
          SpeakerOuter: "_3rRqPJdGrYx9YMtQMciIFY",
          Speaker: "_3F7-FkJu8-JstT7SouP8XJ",
          SpeakerPopup: "_3y7kVhhGmtbSgbZdte0EuV",
          SpeakerInfoOuter: "_1NC9nn23Pdd7FtZW6zM7he",
          SpeakerInfoInner: "_1bMpEcCbkVkKo1Oc02WFoJ",
          SpeakerTitle: "_2Vo0lUG19xIopljkxhtSod",
          SpeakerBio: "_2yP7s2N28D9PFHs9yUr3jD",
          SpeakerHover: "_16UyHpAXG98qQsfN8mBk3x",
        };
      },
    },
  ]);
})();
