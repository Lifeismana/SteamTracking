/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4440],
    {
      55298: (R, B, e) => {
        "use strict";
        e.d(B, { YA: () => T, p: () => O, qh: () => _ });
        var t = e(72604),
          D = e(20194),
          L = e(41735),
          S = e.n(L),
          P = e(3166);
        function _() {
          const M = (0, D.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const v = `${P.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                m = await S().get(v);
              return m?.status == 200 && m.data?.success == t.R
                ? m.data.admins
                : (console.error("ValveAccounts:", m?.status), []);
            },
          });
          return M.isLoading ? null : M.data;
        }
        function O(M) {
          return _()?.find((m) => m.id == M);
        }
        function T(M, v) {
          return M.getQueryData(["useValveAccounts"])?.find((o) => o.id === v);
        }
      },
      91916: (R, B, e) => {
        "use strict";
        e.d(B, {
          MY: () => o,
          UA: () => i,
          Yd: () => r,
          qG: () => C,
          rN: () => d,
          vh: () => c,
        });
        var t = e(41735),
          D = e.n(t),
          L = e(90626),
          S = e(99412),
          P = e(72604),
          _ = e(34592),
          O = e(3166),
          T = e(27066),
          M = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          m = (g, p, u, s) => {
            for (
              var n = s > 1 ? void 0 : s ? v(p, u) : p, h = g.length - 1, E;
              h >= 0;
              h--
            )
              (E = g[h]) && (n = (s ? E(p, u, n) : E(n)) || n);
            return s && n && M(p, u, n), n;
          };
        function o() {
          return O.TS.EUNIVERSE == S.Rv ? 12 : 1;
        }
        const A = class $ {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(p) {
            return this.m_mapOptInToPartners.get(p);
          }
          BHasPartnerInfoLoad(p) {
            return this.m_mapOptInToPartners.has(p);
          }
          async FindPartnerByName(p) {
            return (
              this.m_mapPromises.has(p) ||
                this.m_mapPromises.set(p, this.InternalFindPartnerByName(p)),
              this.m_mapPromises.get(p)
            );
          }
          async InternalFindPartnerByName(p) {
            const u = new Array();
            try {
              const s = O.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                n = {
                  sessionid: (0, O.KC)(),
                  searchtext: p,
                  origin: self.origin,
                },
                h = await D().get(s, { params: n });
              h?.status == 200 && h?.data?.success == P.R
                ? h.data.publishers.forEach((E) => {
                    const I = {
                      partnerid: E.publisherid,
                      name: E.publishername,
                      partner_url:
                        O.TS.PARTNER_BASE_URL +
                        `pub/publisher/${E.publisherid}/`,
                      contacts: E.contacts,
                    };
                    this.m_mapOptInToPartners.set(E.publisherid, I), u.push(I);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${h?.status} eresult ${h?.data?.success} and msg ${h?.data?.msg}`,
                  );
            } catch (s) {
              const n = (0, _.H)(s);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  n.strErrorMsg,
                n,
              );
            }
            return u;
          }
          async LoadPartnerInfo(p) {
            if (this.m_mapOptInToPartners.has(p))
              return this.m_mapOptInToPartners.get(p);
            const u = await this.FindPartnerByName("" + p);
            return (
              this.BHasPartnerInfoLoad(p) ||
                this.m_mapOptInToPartners.set(p, null),
              this.m_mapOptInToPartners.get(p)
            );
          }
          async LoadMultiplePartnerInfo(p) {
            if (!p || p.length == 0) return [];
            const u = p.filter((s) => !this.m_mapOptInToPartners.has(s));
            return (
              u.length > 0 && (await this.FindPartnerByName("" + u.join(","))),
              p.map((s) => this.m_mapOptInToPartners.get(s)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return $.s_Singleton || ($.s_Singleton = new $()), $.s_Singleton;
          }
          constructor() {
            let p = JSON.parse(
              JSON.stringify((0, O.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(p) &&
              p.forEach((u) => this.m_mapOptInToPartners.set(u.partnerid, u));
          }
          ValidateStoreDefault(p) {
            const u = p;
            return u &&
              Array.isArray(u) &&
              u.length > 0 &&
              typeof u[0] == "object"
              ? typeof u[0].partnerid == "number" &&
                  typeof u[0].name == "string"
              : !1;
          }
        };
        m([T.o], A.prototype, "FindPartnerByName", 1);
        let l = A;
        function c(g) {
          const [p, u] = (0, L.useState)(!1);
          return (
            (0, L.useEffect)(() => {
              !p &&
                g?.length > 0 &&
                l
                  .Get()
                  .LoadMultiplePartnerInfo(g)
                  .then(() => u(!0));
            }, [g, p]),
            p
          );
        }
        function i(g) {
          const [p, u] = L.useState(() => l.Get().GetPartnerInfo(g));
          return (
            L.useEffect(() => {
              !l.Get().BHasPartnerInfoLoad(g) && g > 0
                ? l
                    .Get()
                    .LoadPartnerInfo(g)
                    .then((s) => u(s))
                : l.Get().BHasPartnerInfoLoad(g) &&
                  p?.partnerid != g &&
                  u(l.Get().GetPartnerInfo(g));
            }, [g, p]),
            [p]
          );
        }
        function d() {
          return { fnFindPartnerByName: l.Get().FindPartnerByName };
        }
        function r(g) {
          return l.Get().GetPartnerInfo(g);
        }
        function C(g) {
          return l.Get().LoadPartnerInfo(g);
        }
      },
      8145: (R, B, e) => {
        "use strict";
        e.d(B, { op: () => M, CS: () => _, vE: () => v, Al: () => P });
        const t = 0,
          D = 1,
          L = 2,
          S = 3;
        class P {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(i, d) {
            i instanceof Map
              ? (this.m_dictComponents = i)
              : (this.m_dictComponents = new Map(Object.entries(i))),
              (this.m_fnAccumulatorFactory = d);
          }
          Parse(i, d, r = !0) {
            const C = A(i || "", r);
            return this.Parse_BuildElements(C, d);
          }
          Parse_BuildElements(i, d) {
            let r = this.m_fnAccumulatorFactory(void 0);
            const C = [],
              g = () => (C.length < 1 ? void 0 : C[C.length - 1]),
              p = this.m_dictComponents,
              u = (E) => !!(E.tag && p.get(E.tag)?.autocloses);
            let s = !1,
              n = !0;
            const h = (E, I) => {
              let y = I.text.toLowerCase();
              if (E && E.node.tag === y && p.get(E.node.tag)) {
                const a = p.get(E.node.tag),
                  f = {
                    tagname: E.node.tag,
                    args: E.node.args,
                    rawargs: E.node.rawargs,
                  },
                  x = d(a.Constructor, f, ...r.GetElements());
                (r = E.accumulator),
                  Array.isArray(x)
                    ? x.forEach((U) => r.AppendNode(U))
                    : r.AppendNode(x),
                  (s = !!a.skipFollowingNewline),
                  (n = E.bWrapTextForCopying);
              } else if (E) {
                const a = E.accumulator;
                a.AppendText("[" + E.node.text + "]", !1),
                  r.GetElements().forEach((f) => a.AppendNode(f)),
                  a.AppendText("[/" + I.text + "]", !1),
                  (r = a),
                  (n = E.bWrapTextForCopying);
              }
            };
            for (
              i.forEach((E, I) => {
                if (E.type == D) {
                  const y = s ? E.text.replace(/^[\t\r ]*\n/g, "") : E.text;
                  r.AppendText(y, n), (s = !1);
                } else if (E.type == L) {
                  const y = p.get(E.tag);
                  if (!y) r.AppendText("[" + E.text + "]", C.length == 0);
                  else {
                    const a = g();
                    if (a !== void 0) {
                      const f = p.get(a.node.tag);
                      f &&
                        f.autocloses &&
                        E.tag === a.node.tag &&
                        h(C.pop(), a.node);
                    }
                    C.push({ accumulator: r, node: E, bWrapTextForCopying: n }),
                      (r = this.m_fnAccumulatorFactory(E)),
                      (s = !!y.skipInternalNewline),
                      (n = y.allowWrapTextForCopying ?? !1);
                  }
                } else if (E.type == S) {
                  let y = E.text.toLowerCase();
                  for (; g() && g().node.tag !== y && u(g().node); ) {
                    const a = C.pop();
                    h(a, a.node);
                  }
                  if (g()?.node.tag == y) {
                    const a = C.pop();
                    h(a, E);
                  } else r.AppendText("[/" + E.text + "]", C.length == 0);
                }
              });
              C.length > 0;
            ) {
              const E = C.pop();
              h(E, E.node);
            }
            return r.GetElements();
          }
        }
        function _(c, i, d = !1) {
          let r = "[" + c;
          i?.[""] && (r += `=${d ? "" + i[""] : O("" + i[""])}`);
          for (const C in i) C !== "" && (r += ` ${T(C)}=${O("" + i[C])}`);
          return (r += "]"), r;
        }
        function O(c) {
          return `"${c.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function T(c) {
          return c.replace(/(\\| |\])/g, "\\$1");
        }
        function M(c) {
          return `[/${c}]`;
        }
        function v(c) {
          return c.replace(/(\\|\[)/g, "\\$1");
        }
        function m(c, i, d = t) {
          const { type: r, text: C = "" } = i;
          if (r == L) {
            let g = C.indexOf("=");
            const p = C.indexOf(" ");
            p != -1 && (g == -1 || p < g) && (g = p);
            let u,
              s,
              n = "";
            g > 0
              ? ((u = C.substr(0, g).toLocaleLowerCase()),
                (n = C.substr(g)),
                (s = l(n)))
              : ((s = {}), (u = C.toLocaleLowerCase())),
              c.push({ type: r, text: C, tag: u, args: s, rawargs: n });
          } else r != t && c.push({ type: r, text: C });
          return { type: d, text: "" };
        }
        function o(c) {
          let i = "";
          return (
            c.type == S ? (i = "[/") : c.type == L && (i = "["),
            { type: D, text: i + (c.text ?? "") }
          );
        }
        function A(c, i) {
          const d = [];
          let r = { type: t, text: "" },
            C = !1,
            g = !1,
            p = !1;
          for (let u = 0; u < c.length; u++) {
            const s = c[u];
            switch (r.type) {
              case t:
                s == "["
                  ? ((r.type = L), (g = !0))
                  : ((r.type = D), s == "\\" && i ? (C = !C) : (r.text += s));
                break;
              case L:
              case S:
                if (s == "/" && g) (r.type = S), (r.text = ""), (g = !1);
                else if (s == "[" && !C) (r = m(d, o(r), L)), (g = !0);
                else if (s == "]" && !C) {
                  const n =
                      r.type == L && r.text?.toLocaleLowerCase() == "noparse",
                    h = r.type == S && r.text?.toLocaleLowerCase() == "noparse";
                  g || (p && !h)
                    ? ((r = o(r)), (r.text += s))
                    : n
                      ? (p = !0)
                      : h && (p = !1),
                    (r = m(d, r)),
                    (g = !1);
                } else
                  s == "\\" && i
                    ? ((r.text += s), (C = !C), (g = !1))
                    : ((r.text += s), (C = !1), (g = !1));
                break;
              case D:
                s == "[" && !C
                  ? ((r = m(d, r, L)), (g = !0))
                  : s == "\\" && i
                    ? (C && (r.text += s), (C = !C))
                    : ((r.text += s), (C = !1));
                break;
            }
          }
          return (
            r.type != t &&
              (r.type == L || r.type == S
                ? d.push(o(r))
                : d.push({ type: r.type, text: r.text ?? "" })),
            d
          );
        }
        function l(c) {
          if (!c || c.length < 1) return {};
          const i = {};
          let d = "",
            r = "",
            C;
          ((s) => {
            (s[(s.PRE_NAME = 0)] = "PRE_NAME"),
              (s[(s.IN_NAME = 1)] = "IN_NAME"),
              (s[(s.POST_NAME = 2)] = "POST_NAME"),
              (s[(s.IN_VALUE = 3)] = "IN_VALUE"),
              (s[(s.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(C || (C = {}));
          let g = 0,
            p = 0;
          c[0] == "=" && (g = 2);
          let u = !1;
          for (p++; p < c.length; p++) {
            const s = c[p];
            let n = !0,
              h = !1;
            switch (g) {
              case 0:
                if (s == "=") return {};
                if (s == " ") continue;
                g = 1;
                break;
              case 1:
                (s == "=" || s == " ") &&
                  !u &&
                  (s == " " ? ((g = 0), (h = !0)) : (g = 2), (n = !1));
                break;
              case 2:
                s == " "
                  ? ((g = 0), (n = !1), (h = !0))
                  : s == '"'
                    ? ((g = 4), (n = !1))
                    : (g = 3);
                break;
              case 3:
              case 4:
                ((s == " " && g != 4 && !u) || (s == '"' && g == 4 && !u)) &&
                  ((g = 0), (n = !1), (h = !0));
                break;
            }
            if (n)
              if (s == "\\" && !u) u = !0;
              else if (((u = !1), g == 1)) d += s;
              else if (g == 3 || g == 4) r += s;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + g,
                );
            h && ((i[d] = r), (d = ""), (r = ""));
          }
          return g != 0 && (i[d] = r), i;
        }
      },
      7742: (R, B, e) => {
        "use strict";
        e.d(B, { x0: () => D, yI: () => L });
        async function t(S) {
          try {
            return await S;
          } catch (P) {
            console.error(P);
            return;
          }
        }
        function D() {
          let S, P;
          return {
            promise: new Promise((O, T) => {
              (S = O), (P = T);
            }),
            resolve: S,
            reject: P,
          };
        }
        function L(S) {
          return new Promise((P) => setTimeout(P, S));
        }
      },
      2259: (R, B, e) => {
        "use strict";
        e.d(B, { OO: () => O, wY: () => P });
        var t = e(90626),
          D = e(18938),
          L = e(71742);
        function S(m, o) {
          return (0, D.QS)(
            (A) => {
              if (!A) return;
              const l = o(A.ownerDocument.defaultView, (c) => {
                m(c[0]);
              });
              return l.observe(A), () => l.unobserve(A);
            },
            [m, o],
          );
        }
        function P(m) {
          const o = t.useCallback(
            (A, l) =>
              A.ResizeObserver
                ? new A.ResizeObserver(l)
                : ((0, L.wT)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          );
          return S(m, o);
        }
        function _(m, o) {
          const A = t.useCallback(
            (l, c) => new l.IntersectionObserver(c, o),
            [o],
          );
          return S(m, A);
        }
        function O(m, o) {
          const A = t.useRef(void 0);
          return _((l) => {
            !A.current && l.isIntersecting && m.onEnter?.(l),
              A.current && !l.isIntersecting && m.onLeave?.(l),
              m.onIntersectionChange?.(l),
              (A.current = l.isIntersecting);
          }, o);
        }
        function T() {
          const m = useForceUpdate();
          return P(m);
        }
        function M(m, ...o) {
          const A = m.ownerDocument.defaultView,
            l = new A.ResizeObserver(...o);
          return l.observe(m), l;
        }
        function v(m, ...o) {
          const A = m.ownerDocument.defaultView,
            l = new A.IntersectionObserver(...o);
          return l.observe(m), l;
        }
      },
      84607: (R, B, e) => {
        "use strict";
        e.d(B, { a: () => M });
        var t = e(7850),
          D = e(89667),
          L = e(72838),
          S = e(42240),
          P = e(39239),
          _ = e(36707),
          O = e(18654),
          T = e.n(O);
        function M(v) {
          const {
              id: m,
              imageType: o,
              bPreferAssetWithoutOverride: A,
              strAdditionalClassName: l,
            } = v,
            { storeItemAsset: c, storeItemDefaultInfo: i } = (0, D.q)(m, o, A);
          if (o === "library" || o == "vertical")
            return (0, t.jsx)(L.G, { id: m, bPreferAssetWithoutOverride: A });
          let d = "";
          if (
            (o === "main"
              ? (d = T().MainCapsuleImageContainer)
              : (d = T().HeaderCapsuleImageContainer),
            c === void 0 || !i)
          )
            return (0, t.jsx)("div", {
              className: (0, _.A)(d, "CapsuleImageCtn", l),
            });
          if (c == null) return null;
          let r = (0, S.N)(c, o === "header");
          return (0, t.jsx)("div", {
            className: (0, _.A)(d, "CapsuleImageCtn", l),
            children: (0, t.jsx)(P.o, {
              lazyLoad: !0,
              srcs: r,
              className: (0, _.A)(T().CapsuleImage),
              alt: i.name,
            }),
          });
        }
      },
      42240: (R, B, e) => {
        "use strict";
        e.d(B, { M: () => L, N: () => D });
        var t = e(21721);
        function D(P, _) {
          let O = [];
          return P && S(O, P, _), O.filter((T) => !!T);
        }
        function L(P, _) {
          let O = (0, t.b0)(P, "hero_capsule"),
            T = (0, t.b0)(P, "library_capsule");
          return { strStoreVerticalURL: O, strLibraryVerticalURL: T };
        }
        function S(P, _, O) {
          const T = (0, t.b0)(_, "header_2x") ?? (0, t.b0)(_, "header"),
            M = (0, t.b0)(_, "main_capsule_2x") ?? (0, t.b0)(_, "main_capsule");
          O ? P.push(T, M) : P.push(M, T);
        }
      },
      72838: (R, B, e) => {
        "use strict";
        e.d(B, { G: () => A });
        var t = e(7850),
          D = e(44420),
          L = e(89667),
          S = e(90626),
          P = e(18654),
          _ = e.n(P),
          O = e(39239),
          T = e(36707),
          M = e(3166),
          v = e(42240),
          m = e(83164),
          o = e.n(m);
        function A(l) {
          const {
              id: c,
              bPreferLibrary: i,
              bPreferAssetWithoutOverride: d,
            } = l,
            { storeItemDefaultInfo: r, storeItemAsset: C } = (0, L.q)(
              c,
              "vertical",
              d,
            ),
            [g, p] = S.useState(0);
          if (!r || !C)
            return (0, t.jsx)("div", {
              className: _().HeroCapsuleImageContainer,
            });
          const { strStoreVerticalURL: u, strLibraryVerticalURL: s } = (0, v.M)(
            C,
            r,
          );
          if (u && (!i || !s))
            return (0, t.jsxs)("div", {
              className: (0, T.A)(
                _().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
              children: [
                (0, t.jsx)("img", {
                  src: u,
                  className: _().CapsuleImage,
                  alt: r.name,
                }),
                r.type == D.uE._i &&
                  (0, t.jsx)("img", {
                    className: o().CornerSash,
                    src: `${M.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                    alt: "DLC",
                  }),
              ],
            });
          if (s)
            return (0, t.jsxs)("div", {
              className: (0, T.A)(
                _().LibraryFallbackAssetImageContainer,
                _().VerticalCapsule,
                i ? _().ForceLibrarySizing : "",
              ),
              children: [
                (0, t.jsx)("div", {
                  className: _().FallbackBackground,
                  style: { backgroundImage: `url(${s})` },
                }),
                (0, t.jsx)("img", {
                  src: s,
                  className: _().CapsuleImage,
                  alt: r.name,
                }),
              ],
            });
          const n = (0, v.N)(C, !0),
            h = n.length - 1,
            E = (I) => {
              const y = n.indexOf(I);
              y >= h && y < n.length - 1 && p(y + 1);
            };
          if (g < n.length) {
            const I = n[g];
            return (0, t.jsxs)("div", {
              className: _().LibraryFallbackAssetImageContainer,
              children: [
                (0, t.jsx)("div", {
                  className: _().FallbackBackground,
                  style: { backgroundImage: `url(${I})` },
                }),
                (0, t.jsx)(O.o, {
                  lazyLoad: !0,
                  srcs: n,
                  className: _().CapsuleImage,
                  alt: r.name,
                  onImageError: E,
                }),
              ],
            });
          }
          return (0, t.jsx)("div", {
            className: _().HeroCapsuleImageContainer,
          });
        }
      },
      88743: (R, B, e) => {
        "use strict";
        e.d(B, { K7: () => _, dE: () => P, rt: () => L, zl: () => S });
        var t = e(90626),
          D = e(44420);
        function L(v) {
          return (0, t.useMemo)(() => O(v), [v?.id, v?.type]);
        }
        function S(v, m) {
          return (0, t.useMemo)(() => M(v, m), [v, m]);
        }
        function P(v, m) {
          return (0, t.useMemo)(() => T(v, m), [v, m]);
        }
        function _(v, m) {
          let o = "app";
          return (
            m == D.c6.xO ? (o = "bundle") : m == D.c6.RD && (o = "sub"),
            (0, t.useMemo)(() => T(v, o), [v, o])
          );
        }
        function O(v) {
          if (!(!v || !v.id)) {
            if (!v.type) return { appid: v.id };
            switch (v.type) {
              case "sub":
                return { packageid: v.id };
              case "bundle":
                return { bundleid: v.id };
              default:
                return { appid: v.id };
            }
          }
        }
        function T(v, m) {
          switch (m) {
            case "sub":
              return { packageid: v };
            case "bundle":
              return { bundleid: v };
            default:
              return { appid: v };
          }
        }
        function M(v, m) {
          switch (m) {
            case "sub":
              return { packageid: v };
            case "bundle":
              return { bundleid: v };
            default:
              return { appid: v };
          }
        }
      },
      46727: (R, B, e) => {
        "use strict";
        e.d(B, { V: () => h });
        var t = e(7850),
          D = e(72609),
          L = e(39905),
          S = e(20194),
          P = e(75233),
          _ = e(67705),
          O = e(34032);
        async function T() {
          let y = (0, _.Fd)(
            "broadcast_available_for_page",
            "application_config",
          );
          if ((0, O.h7)(y)) {
            const a = new Set();
            return (
              y.filtered.forEach((f) => {
                f.appid && a.add(f.appid);
              }),
              Array.from(a)
            );
          }
          return [];
        }
        var M = e(14616),
          v = e(40358),
          m = e(90626);
        function o() {
          return (0, S.I)(c());
        }
        function A(y) {
          const { data: a } = o(),
            f = useStoreItemKeyFromAppID(y),
            { data: x } = useStoreItemDefaultInfo(f);
          return !!(
            a &&
            (a.has(y) ||
              (x?.related_items?.parent_appid &&
                a.has(x.related_items.parent_appid)))
          );
        }
        function l(y) {
          const { data: a } = o(),
            [f, x] = (0, m.useState)(!1),
            U = (0, P.jE)(),
            j = (0, M.eG)();
          return (
            (0, m.useEffect)(() => {
              if (!y || y.length == 0 || !a) return x(!1);
              (async () => {
                const V = await Promise.all(
                  y
                    .filter((W) => !!W)
                    .map((W) => U.fetchQuery((0, v.us)(j, { appid: W }))),
                );
                x(
                  V.some(
                    (W) =>
                      (W && W.appid && a.has(W.appid)) ||
                      (W?.related_items?.parent_appid &&
                        a.has(W.related_items.parent_appid)),
                  ),
                );
              })();
            }, [y, j, U, a]),
            f
          );
        }
        function c() {
          return {
            queryKey: i(),
            queryFn: async () => {
              const y = await T();
              return new Set(y);
            },
          };
        }
        function i() {
          return ["BroadcastApps"];
        }
        var d = e(24179),
          r = e(54528);
        const C =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
        var g = e(18654),
          p = e.n(g),
          u = e(36118),
          s = e(36707),
          n = e(98932);
        function h(y) {
          const { appids: a, hide_status_banners: f, show_early_access: x } = y,
            { data: U } = (0, d.$Y)(),
            { data: j } = (0, r.F0)(),
            F = a.length > 0 && a.every((G) => U && U.has(G)),
            V = a.length > 0 && a.every((G) => j && j.has(G)),
            W = l(a),
            Z = F && !f,
            Y = V && !f,
            w = !f && x;
          return (0, t.jsxs)("div", {
            className: (0, s.A)(p().CapsuleDecorators, "CapsuleDecorators"),
            children: [
              Z &&
                (0, t.jsxs)("span", {
                  className: (0, s.A)(p().Banner, p().Blue),
                  children: [
                    (0, t.jsx)("img", {
                      src: (0, D.YJ)(C),
                      className: p().LinesImg,
                      alt: L.Z.Localize("#Sale_InLibrary"),
                    }),
                    L.Z.Localize("#Sale_InLibrary"),
                  ],
                }),
              Y &&
                (0, t.jsxs)("span", {
                  className: p().Banner,
                  children: [
                    (0, t.jsx)(u.qnF, { className: p().LinesImg }),
                    L.Z.Localize("#Sale_OnWishlist"),
                  ],
                }),
              w && !Z && !Y && (0, t.jsx)(E, { appids: a }),
              W && (0, t.jsx)(n.K, {}),
            ],
          });
        }
        function E(y) {
          const { appids: a } = y;
          return I(a)
            ? (0, t.jsx)("span", {
                className: (0, s.A)(p().Banner, p().EarlyAccessGradient),
                children: L.Z.Localize("#Sale_EarlyAccess"),
              })
            : null;
        }
        function I(y) {
          const [a, f] = (0, m.useState)(!1),
            x = (0, P.jE)(),
            U = (0, M.eG)();
          return (
            (0, m.useEffect)(() => {
              if (!y || y.length == 0) return f(!1);
              (async () => {
                const F = await Promise.all(
                  y.map((V) => x.fetchQuery((0, v.us)(U, { appid: V }))),
                );
                f(F.some((V) => V && V.is_early_access));
              })();
            }, [y, U, x]),
            a
          );
        }
      },
      89667: (R, B, e) => {
        "use strict";
        e.d(B, { q: () => S });
        var t = e(71742),
          D = e(44420),
          L = e(40358);
        function S(_, O, T = !1) {
          const { data: M } = (0, L.J$)(_),
            { data: v } = (0, L.lv)(_, T);
          let m;
          M &&
            M.included_appids?.length == 1 &&
            !P(v, O) &&
            M.item_type &&
            [D.c6.RD, D.c6.xO].includes(M.item_type) &&
            (m = { appid: M.included_appids[0] });
          const { data: o } = (0, L.J$)(m),
            { data: A } = (0, L.lv)(m, T),
            l = o?.visible ? o : M;
          return {
            storeItemAsset: o?.visible ? A : v,
            storeItemDefaultInfo: l,
          };
        }
        function P(_, O) {
          if (!_) return !1;
          switch (O) {
            case "header":
              return !!_.header;
            case "main":
              return !!_.main_capsule;
            case "vertical":
            case "library":
              return !!_.hero_capsule || !!_.library_capsule;
            default:
              return (0, t.z_)(O, `Unhandled imageType: ${O}`), !1;
          }
        }
      },
      34032: (R, B, e) => {
        "use strict";
        e.d(B, { PH: () => m, TT: () => P, h7: () => o, mY: () => v });
        var t = e(14947),
          D = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          S = (A, l, c, i) => {
            for (
              var d = i > 1 ? void 0 : i ? L(l, c) : l, r = A.length - 1, C;
              r >= 0;
              r--
            )
              (C = A[r]) && (d = (i ? C(l, c, d) : C(d)) || d);
            return i && d && D(l, c, d), d;
          };
        class P {
          constructor() {
            (0, t.Gn)(this);
          }
          accountid;
          steamid;
          appid;
          hub_popular;
          popular;
          relay_broadcast_id;
          rowversion;
          thumbnail_http_address;
          nAppIDVOD;
          title = void 0;
          viewer_count = void 0;
          whitelist_rank;
          gamedata_subtitle = void 0;
          store_title;
          left_panel;
          right_panel;
          snr;
          broadcast_chat_visibility;
          default_selection_priority = 0;
          current_selection_priority = 0;
        }
        S([t.sH], P.prototype, "title", 2),
          S([t.sH], P.prototype, "viewer_count", 2),
          S([t.sH], P.prototype, "gamedata_subtitle", 2),
          S([t.sH], P.prototype, "current_selection_priority", 2);
        const _ = "primary",
          O = "featured",
          T = "default_featured",
          M = "general";
        var v = ((A) => (
          (A[(A.k_ePrimary = 3)] = "k_ePrimary"),
          (A[(A.k_eFeatured = 2)] = "k_eFeatured"),
          (A[(A.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (A[(A.k_eGeneral = 0)] = "k_eGeneral"),
          A
        ))(v || {});
        function m(A) {
          switch (A) {
            case _:
              return 3;
            case O:
              return 2;
            case T:
              return 1;
            case M:
            default:
              return 0;
          }
        }
        function o(A) {
          const l = A;
          return l &&
            typeof l.success == "number" &&
            l.filtered &&
            Array.isArray(l.filtered) &&
            l.broadcast_chat_visibility
            ? l.filtered.length == 0
              ? !0
              : typeof l.filtered[0].accountid == "string"
            : !1;
        }
      },
      813: (R, B, e) => {
        "use strict";
        e.d(B, { TB: () => u, ac: () => g, vF: () => h });
        var t = e(40497),
          D = e(75233),
          L = e(14947),
          S = e(90626),
          P = e(76559),
          _ = e(71742),
          O = e(3166),
          T = e(16512),
          M = e(49628),
          v = e(33512),
          m = e(7638),
          o = e(55483),
          A = e(77291);
        const l = new WeakSet();
        function c(a = t.L) {
          if (typeof window > "u" || l.has(a)) return;
          const f = (0, O.Fd)("groupvanityinfo", "application_config");
          (f === void 0 && document.readyState != "complete") ||
            (l.add(a), i(f) && (0, o.aA)(a, f));
        }
        function i(a) {
          const f = a;
          return f &&
            Array.isArray(f) &&
            f.length > 0 &&
            typeof f[0] == "object"
            ? typeof f[0].clanAccountID == "number" &&
                (typeof f[0].appid == "number" ||
                  typeof f[0].vanity_url == "string")
            : !1;
        }
        function d(a) {
          return typeof a == "string" ? parseInt(a) : a;
        }
        function r(a) {
          return typeof a == "string" ? Number.parseInt(a) : a;
        }
        class C {
          m_queryClient = t.L;
          m_boxCacheVersion = L.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            c(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((f) => {
                  (f?.type != "added" &&
                    f?.type != "updated" &&
                    f?.type != "removed") ||
                    ((0, o.yT)(f.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, L.h5)(() =>
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
          AddGroupVanities(f) {
            this.LazyInit(), i(f) && (0, o.aA)(this.m_queryClient, f);
          }
          BHasClanInfoLoaded(f) {
            return (
              (0, _.wT)(
                f.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, _.wT)(
                f.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(f.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(f) {
            return !!(0, o.Gt)(r(f), this.ReadCache());
          }
          RegisterClanData(f) {
            this.LazyInit(), (0, o.aA)(this.m_queryClient, f);
          }
          async LoadOGGClanInfoForAppID(f) {
            return (
              this.LazyInit(),
              (f = d(f)),
              (0, _.wT)(
                f != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              f == 0 ? null : (0, o.AB)(f, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(f) {
            return this.LazyInit(), (0, o.Rc)(f, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(f) {
            return this.LazyInit(), (0, o.Rc)(f, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(f) {
            return this.LoadClanInfoForClanAccountID(f.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(f) {
            return this.LazyInit(), (0, o.MR)(r(f), this.m_queryClient);
          }
          GetOGGClanInfo(f) {
            const x = this.ReadCache();
            return typeof f == "string" ? (0, o.fy)(f, x) : (0, o.ko)(f, x);
          }
          GetClanSteamIDForAppID(f) {
            const x = (0, o.ko)(d(f), this.ReadCache());
            return x ? P.b.InitFromClanID(x.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(f) {
            return (0, o.ko)(d(f), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(f) {
            return (0, o.Gt)(f.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(f) {
            return this.BHasClanInfoLoadedByAccountID(f);
          }
          GetClanMemberCount(f) {
            return (0, o.ko)(d(f), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(f) {
            return (
              (0, _.wT)(
                !!f,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, o.Gt)(r(f), this.ReadCache())
            );
          }
          GetCreatorStoreURL(f) {
            let x = T.pF.GetCreatorHome(f);
            if (x) return x.GetCreatorHomeURL("developer");
            let U = this.GetClanInfoByClanAccountID(f.GetAccountID());
            return (
              O.TS.COMMUNITY_BASE_URL +
              (U.vanity_url
                ? "groups/" + U.vanity_url
                : "gid/" + f.ConvertTo64BitString())
            );
          }
        }
        const g = new C();
        (0, A.V)("g_ClanStore", g);
        function p() {
          const a = (0, D.jE)();
          return c(a), a;
        }
        function u(a) {
          p();
          const { data: f, isPending: x } = (0, o.TB)(a ? r(a) : void 0);
          return [!!a && x, f ?? void 0];
        }
        function s(a) {
          const f = p();
          useEffect(() => {
            a &&
              FetchClanInfoByAccountID(r(a), f).catch((x) =>
                console.error(`Failed to hint load clan info ${a}`, x),
              );
          }, [a, f]);
        }
        function n(a) {
          return p(), useClanInfoByVanityQuery(a).data ?? null;
        }
        function h(a) {
          p();
          const f = a ? d(a) : void 0,
            { data: x, isPending: U } = (0, o.vF)(f);
          return { bLoadingClanInfo: !!f && U, clanInfo: x ?? null };
        }
        function E(a) {
          const f = a.BIsOGGEvent(),
            x = CEventUserStore.Get().GetPartnerEventPermissions(
              a.clanSteamID,
            ).valve_admin;
          if (f) return { bVisible: !1 };
          if (a.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (a.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            a.jsondata.clone_from_event_gid &&
            a.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (a.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const U = g_CreatorHomeStore.GetCreatorHome(a.clanSteamID);
          return U &&
            U.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : x
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function I(a) {
          const f = a.BIsOGGEvent(),
            x = CEventUserStore.Get().GetPartnerEventPermissions(
              a.clanSteamID,
            ).valve_admin;
          return f
            ? a.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : x
                  ? a.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function y(a) {
          const f = a.BIsOGGEvent(),
            x = CEventUserStore.Get().GetPartnerEventPermissions(
              a.clanSteamID,
            ).valve_admin;
          return f
            ? { bVisible: !1 }
            : a.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : a.BHasSaleEnabled()
                ? { bVisible: !0 }
                : a.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      50109: (R, B, e) => {
        "use strict";
        e.d(B, { E: () => A, O: () => o });
        var t = e(14947),
          D = e(65946),
          L = e(99412),
          S = e(41635),
          P = e(27066),
          _ = e(3166),
          O = e(38585),
          T = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          v = (l, c, i, d) => {
            for (
              var r = d > 1 ? void 0 : d ? M(c, i) : c, C = l.length - 1, g;
              C >= 0;
              C--
            )
              (g = l[C]) && (r = (d ? g(c, i, r) : g(r)) || r);
            return d && r && T(c, i, r), r;
          };
        const m = class q {
          m_eCurLang = (0, L.sfN)(_.TS.LANGUAGE);
          m_rgHasData = (0, S.$Y)([], L.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new O.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(c) {
            return this.m_eCurLang != c
              ? ((this.m_eCurLang = c), this.GetCallback().Dispatch(c), !0)
              : !1;
          }
          SetHasLanguage(c) {
            c.forEach((i, d) => {
              this.m_rgHasData[d] != i && (this.m_rgHasData[d] = i);
            });
          }
          BHasLanguageData(c) {
            return this.m_rgHasData[c];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(c) {
            c != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = c);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              q.s_globalSingletonStore || (q.s_globalSingletonStore = new q()),
              q.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        v([t.sH], m.prototype, "m_eCurLang", 2),
          v([t.sH], m.prototype, "m_rgHasData", 2),
          v([t.sH], m.prototype, "m_bHasLocalizationContext", 2),
          v([P.o], m.prototype, "GetCurEditLanguage", 1),
          v([P.o], m.prototype, "SetCurEditLanguage", 1),
          v([t.XI.bound], m.prototype, "SetHasLanguage", 1),
          v([P.o], m.prototype, "BHasLanguageData", 1);
        let o = m;
        function A() {
          return (0, D.q3)(() => o.Get().GetCurEditLanguage());
        }
      },
      57698: (R, B, e) => {
        "use strict";
        e.d(B, { N: () => t });
        var t = ((D) => (
          (D[(D.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (D[(D.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (D[(D.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          D
        ))(t || {});
      },
      7638: (R, B, e) => {
        "use strict";
        e.d(B, { Ec: () => p, KN: () => C });
        var t = e(72604),
          D = e(35038),
          L = e(72849),
          S = e(41735),
          P = e.n(S),
          _ = e(14947),
          O = e(90626),
          T = e(76559),
          M = e(49628),
          v = e(71742),
          m = e(34592),
          o = e(3166),
          A = e(57698),
          l = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          i = (u, s, n, h) => {
            for (
              var E = h > 1 ? void 0 : h ? c(s, n) : s, I = u.length - 1, y;
              I >= 0;
              I--
            )
              (y = u[I]) && (E = (h ? y(s, n, E) : y(E)) || E);
            return h && E && l(s, n, E), E;
          };
        class d {
          clanid = void 0;
          appid = 0;
          can_edit = !1;
          owns_app = !1;
          follows_app = !1;
          support_user = !1;
          valve_admin = !1;
          limited_user = !1;
          event_ignored = new Array();
          event_followed = new Array();
          event_followed_flags = new Array();
          constructor(s) {
            (0, _.Gn)(this), (this.clanid = s);
          }
        }
        i([_.sH], d.prototype, "clanid", 2),
          i([_.sH], d.prototype, "appid", 2),
          i([_.sH], d.prototype, "can_edit", 2),
          i([_.sH], d.prototype, "owns_app", 2),
          i([_.sH], d.prototype, "follows_app", 2),
          i([_.sH], d.prototype, "support_user", 2),
          i([_.sH], d.prototype, "valve_admin", 2),
          i([_.sH], d.prototype, "limited_user", 2),
          i([_.sH], d.prototype, "event_ignored", 2),
          i([_.sH], d.prototype, "event_followed", 2),
          i([_.sH], d.prototype, "event_followed_flags", 2);
        const r = class Q {
          constructor() {
            (0, _.Gn)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
          m_cm = void 0;
          static s_EventUserStore;
          m_bIsPresentationMode = (0, o.Bu)();
          static Get() {
            return (
              (0, v.wT)(
                !!Q.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              Q.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!Q.s_EventUserStore;
          }
          static async InitGlobal(s) {
            if (!Q.s_EventUserStore) {
              const n = new Q();
              await n.Init(s), (Q.s_EventUserStore = n);
            }
          }
          static BIsInited() {
            return !!Q.s_EventUserStore;
          }
          async Init(s) {
            this.m_cm = s;
            const n = (0, o.Fd)(
              "partnereventpermissions",
              "application_config",
            );
            this.ValidateStoreDefault(n) &&
              (0, _.h5)(() => {
                n.forEach((E) => {
                  let I = new d(E.clanid),
                    y = {
                      result: I,
                      promise: Q.RemapToPromise(I),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(y, E),
                    this.m_mapClanToUserPermissions.set(E.clanid, y);
                });
              });
            let h = (0, o.Fd)("uservotes", "application_config");
            h &&
              (0, _.h5)(() => {
                h.forEach((E) => {
                  let I = E.voted_up ? !0 : E.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(E.clanAnnouncementGID, I);
                });
              });
          }
          ValidateStoreDefault(s) {
            const n = s;
            return n &&
              Array.isArray(n) &&
              n.length > 0 &&
              typeof n[0] == "object"
              ? typeof n[0].clanid == "number" && typeof n[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(s) {
            return s;
          }
          BIsUserLoggedIn() {
            return o.iA.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(s) {
            return (
              this.m_mapClanToUserPermissions.has(s) &&
              this.m_mapClanToUserPermissions.get(s).bLoaded
            );
          }
          GetPartnerEventPermissions(s) {
            if (!s || !s.BIsValid()) return new d(0);
            const n = s.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(n) ||
                this.LoadSingleAppEventPermissions(s),
              this.m_mapClanToUserPermissions.get(n).result
            );
          }
          async LoadSingleAppEventPermissions(s) {
            let n = s.GetAccountID(),
              h = this.m_mapClanToUserPermissions.get(n);
            return (
              h ||
                ((h = {
                  promise: this.InternalLoadSingleAppEventPermissions(s),
                  result: new d(n),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(n, h)),
              h.promise
            );
          }
          CopyFromResponseToTrack(s, n) {
            (s.result.appid = n.appid ?? 0),
              (s.result.can_edit = !!n.can_edit),
              (s.result.clanid = n.appid),
              (s.result.event_followed = n.event_followed ?? []),
              (s.result.event_ignored = n.event_ignored ?? []),
              (s.result.event_followed_flags = n.event_followed_flags ?? []),
              (s.result.follows_app = !!n.follows_app),
              (s.result.owns_app = !!n.owns_app),
              (s.result.limited_user = !!n.limited_user),
              (n.support_user || n.valve_admin) && this.m_bIsPresentationMode
                ? ((s.result.can_edit = !0),
                  (s.result.support_user = !1),
                  (s.result.valve_admin = !1))
                : ((s.result.support_user = !!n.support_user),
                  (s.result.valve_admin = !!n.valve_admin)),
              (s.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(s) {
            let n = null,
              h = s.GetAccountID(),
              E = !o.iA.logged_in;
            if (!this.m_mapClanToUserPermissions.has(h)) {
              let I = new d(s.GetAccountID());
              this.m_mapClanToUserPermissions.set(h, {
                result: I,
                promise: Q.RemapToPromise(I),
                bLoaded: !1,
              });
            }
            try {
              if (o.iA.logged_in) {
                let I =
                    o.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    s.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  y = {};
                if (
                  ((0, o.yK)() == "partnerweb"
                    ? ((I =
                        o.TS.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (y = { clanaccountid: s.GetAccountID() }))
                    : (0, o.yK)() == "store" &&
                      ((I =
                        o.TS.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (y = { clanaccountid: s.GetAccountID() })),
                  (n = await P().get(I, { params: y, withCredentials: !0 })),
                  !n || n.data.success != t.R)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, m.H)(n?.data).strErrorMsg,
                  ),
                    (E = !0);
                else {
                  let a = this.m_mapClanToUserPermissions.get(h);
                  a && this.CopyFromResponseToTrack(a, n.data);
                }
              }
            } catch (I) {
              if (
                ((n = I.response),
                (E = !0),
                !(
                  I &&
                  typeof I.response < "u" &&
                  typeof I.response.data < "u" &&
                  typeof I.response.data.success < "u" &&
                  I.response.data.success == t.Dy
                ))
              ) {
                const y = (0, m.H)(I);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    h +
                    ": " +
                    y.strErrorMsg,
                  y,
                );
              }
            } finally {
              E &&
                (0, _.h5)(() => {
                  let I = this.m_mapClanToUserPermissions.get(h);
                  (I.result.appid = n?.data.appid ?? 0),
                    (I.result.can_edit = !1),
                    (I.result.clanid = n && n.data ? n.data.clanid : 0),
                    (I.result.event_followed = new Array()),
                    (I.result.event_ignored = new Array()),
                    (I.result.event_followed_flags = new Array()),
                    (I.result.follows_app = !1),
                    (I.result.owns_app = !1),
                    (I.result.support_user = !1),
                    (I.result.valve_admin = !1),
                    (I.result.limited_user = !1),
                    (I.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(h).result;
          }
          async Vote(s, n, h) {
            if (!s || !s.AnnouncementGID) return !1;
            const E = this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID);
            if (E === n) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(s.AnnouncementGID, n),
              (0, _.h5)(() => {
                E === !0 && s.UpdateVoteCount("up", -1),
                  E === !1 && s.UpdateVoteCount("down", -1),
                  n === !0 && s.UpdateVoteCount("up", 1),
                  n === !1 && s.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let I = D.w.Init(L.QU);
              return (
                I.Body().set_announcementid(s.AnnouncementGID),
                I.Body().set_vote_up(!!n),
                I.Body().set_clan_accountid(s.clanSteamID.GetAccountID()),
                (
                  await L.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    I,
                  )
                ).GetEResult() == t.R
              );
            } else {
              const I = (0, o.yK)(),
                y =
                  I == "community" || I == "steamtv"
                    ? o.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      s.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      s.AnnouncementGID
                    : o.TS.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      s.AnnouncementGID,
                a = new URLSearchParams();
              a.append("sessionid", (0, o.KC)()),
                a.append("voteup", n ? "1" : "0"),
                a.append("clanid", "" + s.clanSteamID.GetAccountID()),
                a.append("ajax", "1");
              const f = { withCredentials: !0, cancelToken: h.token };
              return (await P().post(y, a, f)).data.success == t.R;
            }
          }
          async LoadMyVote(s, n) {
            if (s?.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(s.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID);
              let h;
              if (this.m_cm) {
                let E = D.w.Init(L.$Y);
                E.Body().set_announcementid(s.AnnouncementGID);
                let I = await L.BE.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  E,
                );
                I.GetEResult() == t.R &&
                  (h = I.Body().voted_up()
                    ? !0
                    : I.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const E = (0, o.yK)() == "store",
                  I = E
                    ? o.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : o.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      s.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      s.AnnouncementGID,
                  y = { gid: E ? s.AnnouncementGID : void 0 },
                  a = await P().get(I, {
                    withCredentials: !0,
                    cancelToken: n.token,
                    params: y,
                  });
                h = a.data.voted_up ? !0 : a.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(s.AnnouncementGID, h), h;
            }
          }
          SetVote(s, n) {
            this.m_mapAnnounceGIDToVote.set(s, n);
          }
          BHasMyVote(s) {
            return s.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(s.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(s) {
            return s.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(s) {
            if (
              s.BHasEmailEnabled() ||
              s.clanSteamID.GetAccountID() == (0, M.H)()
            )
              return !0;
            let n = this.GetPartnerEventPermissions(s.clanSteamID);
            return (o.UF.IS_OGG || o.UF.IS_VALVE_GROUP) && n.valve_admin;
          }
        };
        i([_.sH], r.prototype, "m_mapClanToUserPermissions", 2),
          i([_.sH], r.prototype, "m_mapAnnounceGIDToVote", 2),
          i([_.XI], r.prototype, "CopyFromResponseToTrack", 1);
        let C = r;
        function g() {
          const [u, s] = useState(() => C.BIsInited());
          return (
            useEffect(() => {
              u || (async () => (await Promise.all([C.InitGlobal()]), s(!0)))();
            }, [u]),
            u
          );
        }
        function p(u) {
          const [s, n] = (0, O.useState)(
              C.Get().BIsPartnerEventPermissionsLoaded(u),
            ),
            h = T.b.InitFromClanID(u),
            [E, I] = (0, O.useState)(C.Get().GetPartnerEventPermissions(h));
          return (
            (0, O.useEffect)(() => {
              if (!s) {
                const y = T.b.InitFromClanID(u);
                C.Get()
                  .LoadSingleAppEventPermissions(y)
                  .then((a) => {
                    I(a), n(!0);
                  });
              }
            }, [s, u]),
            E
          );
        }
      },
      63854: (R, B, e) => {
        "use strict";
        e.d(B, { a: () => _, z: () => P });
        var t = e(71742),
          D = e(13018),
          L = e(98609),
          S = e(67705);
        class P {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              P.s_Singleton ||
                ((P.s_Singleton = new P()), P.s_Singleton.Init()),
              P.s_Singleton
            );
          }
          Init() {
            const T = (0, S.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, t.wT)(!!T, "require promotion_operation_token"),
              (this.m_steamInterface = new D.D(L.TS.WEBAPI_BASE_URL, T));
          }
        }
        function _() {
          return P.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      61266: (R, B, e) => {
        "use strict";
        e.d(B, { T: () => T, m: () => O });
        var t = e(90626),
          D = e(13018),
          L = e(10142),
          S = e(71742),
          P = e(3166),
          _ = e(14616);
        function O(m) {
          const [o, A] = (0, t.useState)(!1),
            [l] = (0, t.useState)(() => M()),
            c = (0, t.useMemo)(
              () => ({
                country: P.TS.COUNTRY,
                language: P.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, t.useEffect)(() => (A(!0), v(l)), [l]),
            o
              ? (0, t.createElement)(_.V3, {
                  context: c,
                  serviceTransportOverride: l.GetServiceTransport(),
                  children: m.children,
                })
              : null
          );
        }
        function T(m) {
          const [o] = (0, t.useState)(() => M()),
            A = (0, t.useMemo)(
              () => ({
                country: P.TS.COUNTRY,
                language: P.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: m.bIncludeUnpublished,
              }),
              [m.bIncludeUnpublished],
            );
          return (0, t.createElement)(_.V3, {
            context: A,
            serviceTransportOverride: o.GetServiceTransport(),
            children: m.children,
          });
        }
        function M() {
          const m = (0, P.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, S.wT)(!!m, "require partnerbrowse_webapi_token"),
            new D.D(P.TS.WEBAPI_BASE_URL, m)
          );
        }
        function v(m) {
          return L.A.Initialize(
            m.GetServiceTransport(),
            P.iA.is_partner_member,
          );
        }
      },
      84676: (R, B, e) => {
        "use strict";
        e.d(B, {
          G6: () => o,
          Gg: () => c,
          MS: () => C,
          Ow: () => l,
          Sq: () => M,
          eR: () => v,
          gF: () => g,
          ik: () => m,
          t7: () => A,
          zX: () => r,
        });
        var t = e(41735),
          D = e.n(t),
          L = e(90626),
          S = e(72604),
          P = e(44420),
          _ = e(54963),
          O = e(10142);
        function T(u, s, n = !0) {
          const h = n
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            E = n || CStoreItemCache.Get().BHasStoreItem(u, s, h) ? u : null,
            [I, y] = o(E, s, h),
            [a, f] = useState(null),
            [x, U] = o(a, s, h);
          useEffect(() => {
            I?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              f(I.GetParentAppID());
          }, [I]);
          let j = I?.GetShortDescription()
            ? StripBBCodeTags(I.GetShortDescription())
            : "";
          (!j || j.length === 0) &&
            x &&
            (j = x?.GetShortDescription()
              ? StripBBCodeTags(x.GetShortDescription())
              : "");
          const F = y == m && (!a || U == m);
          return [j, F];
        }
        const M = 1,
          v = 2,
          m = 3;
        function o(u, s, n, h) {
          const E = (0, L.useRef)(void 0),
            I = (0, L.useRef)(void 0),
            y = (0, _.CH)();
          E.current = u;
          const [a, f] = (0, L.useState)(void 0),
            {
              include_assets: x,
              include_release: U,
              include_platforms: j,
              include_all_purchase_options: F,
              include_screenshots: V,
              include_trailers: W,
              include_ratings: Z,
              include_tag_count: Y,
              include_reviews: w,
              include_basic_info: G,
              include_supported_languages: K,
              include_full_description: N,
              include_included_items: z,
              include_assets_without_overrides: H,
              apply_user_filters: b,
              include_links: k,
              include_extra_details: X,
            } = n;
          if (
            ((0, L.useEffect)(() => {
              const J = {
                include_assets: x,
                include_release: U,
                include_platforms: j,
                include_all_purchase_options: F,
                include_screenshots: V,
                include_trailers: W,
                include_ratings: Z,
                include_tag_count: Y,
                include_reviews: w,
                include_basic_info: G,
                include_supported_languages: K,
                include_full_description: N,
                include_included_items: z,
                include_assets_without_overrides: H,
                apply_user_filters: b,
                include_links: k,
                include_extra_details: X,
              };
              let te = null;
              return (
                !u ||
                  u < 0 ||
                  O.A.Get().BHasStoreItem(u, s, J) ||
                  (a !== void 0 && h && h == I.current) ||
                  (h !== I.current && (f(void 0), (I.current = h)),
                  (te = D().CancelToken.source()),
                  O.A.Get()
                    .QueueStoreItemRequest(u, s, J)
                    .then((se) => {
                      !te?.token.reason && E.current === u && f(se == S.R), y();
                    })),
                () => te?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              u,
              s,
              h,
              a,
              x,
              U,
              j,
              F,
              V,
              W,
              Z,
              Y,
              w,
              G,
              K,
              N,
              z,
              H,
              b,
              k,
              X,
              y,
            ]),
            !u)
          )
            return [null, v];
          if (a === !1) return [void 0, v];
          if (O.A.Get().BIsStoreItemMissing(u, s)) return [void 0, v];
          if (!O.A.Get().BHasStoreItem(u, s, n)) return [void 0, M];
          const ee = O.A.Get().GetStoreItemWithLegacyVisibilityCheck(u, s);
          return ee ? [ee, m] : [null, v];
        }
        function A(u, s, n) {
          return o(u, P.c6.qI, s, n);
        }
        function l(u, s, n) {
          return o(u, P.c6.xO, s, n);
        }
        function c(u, s, n) {
          return o(u, P.c6.RD, s, n);
        }
        function i(u, s, n) {
          const [h, E] = o(u, s, n);
          let I;
          h?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !h.GetAssets()?.GetHeaderURL() &&
            h?.GetIncludedAppIDs().length == 1 &&
            (I = h.GetIncludedAppIDs()[0]);
          const [y, a] = A(I, n);
          return I && y?.BIsVisible() ? [y, a] : [h, E];
        }
        function d(u, s, n, h) {
          const E = (0, _.CH)(),
            {
              include_assets: I,
              include_release: y,
              include_platforms: a,
              include_all_purchase_options: f,
              include_screenshots: x,
              include_trailers: U,
              include_ratings: j,
              include_tag_count: F,
              include_reviews: V,
              include_basic_info: W,
              include_supported_languages: Z,
              include_full_description: Y,
              include_included_items: w,
              include_assets_without_overrides: G,
              apply_user_filters: K,
              include_links: N,
              include_extra_details: z,
            } = n;
          return (
            (0, L.useEffect)(() => {
              if (!u || u.length == 0) return;
              const b = {
                  include_assets: I,
                  include_release: y,
                  include_platforms: a,
                  include_all_purchase_options: f,
                  include_screenshots: x,
                  include_trailers: U,
                  include_ratings: j,
                  include_tag_count: F,
                  include_reviews: V,
                  include_basic_info: W,
                  include_supported_languages: Z,
                  include_full_description: Y,
                  include_included_items: w,
                  include_assets_without_overrides: G,
                  apply_user_filters: K,
                  include_links: N,
                  include_extra_details: z,
                },
                k = u.filter(
                  (J) =>
                    !(
                      O.A.Get().BHasStoreItem(J, s, b) ||
                      O.A.Get().BIsStoreItemMissing(J, s)
                    ),
                );
              if (k.length == 0) return;
              const X = D().CancelToken.source(),
                ee = k.map((J) => O.A.Get().QueueStoreItemRequest(J, s, b));
              return (
                Promise.all(ee).then(() => {
                  X.token.reason || E();
                }),
                () => X.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [u, s, h, E, I, y, a, f, x, U, j, F, V, W, Z, Y, w, G, K, N, z]),
            u
              ? u.every(
                  (b) =>
                    O.A.Get().BHasStoreItem(b, s, n) ||
                    O.A.Get().BIsStoreItemMissing(b, s),
                )
                ? u.every((b) =>
                    O.A.Get().GetStoreItemWithLegacyVisibilityCheck(b, s),
                  )
                  ? m
                  : v
                : M
              : v
          );
        }
        function r(u, s, n) {
          return d(u, P.c6.qI, s, n);
        }
        function C(u, s, n) {
          return d(u, P.c6.xO, s, n);
        }
        function g(u, s, n) {
          return d(u, P.c6.RD, s, n);
        }
        function p() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      51746: (R, B, e) => {
        "use strict";
        e.d(B, {
          EG: () => P,
          II: () => o,
          N1: () => A,
          S2: () => v,
          Uz: () => M,
          aL: () => T,
          ab: () => L,
          qR: () => S,
          zB: () => m,
        });
        var t = e(7742),
          D = e(72849);
        function L(l) {
          const c = l.toLowerCase();
          if (c.endsWith(".jpg") || c.endsWith(".jpeg")) return "image/jpeg";
          if (c.endsWith(".png")) return "image/png";
          if (c.endsWith(".gif")) return "image/gif";
          if (c.endsWith(".mp4")) return "video/mp4";
          if (c.endsWith(".webm")) return "video/webm";
          if (c.endsWith(".srt")) return "text/srt";
          if (c.endsWith(".vtt")) return "text/vtt";
          if (c.endsWith(".webp")) return "image/webp";
        }
        function S(l) {
          switch (l) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              l,
            ),
            ".jpg"
          );
        }
        function P(l) {
          switch (l) {
            case D.bg.iS:
              return ".jpg";
            case D.bg.CK:
              return ".gif";
            case D.bg.dU:
              return ".png";
            case D.bg.pJ:
              return ".webm";
            case D.bg.nn:
              return ".mp4";
            case D.bg.pi:
              return ".srt";
            case D.bg.k7:
              return ".vtt";
            case D.bg.wD:
              return ".webp";
          }
        }
        function _(l) {
          const c = (0, t.x0)(),
            i = new Image();
          return (
            (i.onload = () => c.resolve(i)),
            (i.onerror = (d) => {
              console.error("LoadImage failed to load the image, details", d),
                c.resolve(void 0);
            }),
            (i.src = l),
            c.promise
          );
        }
        function O(l) {
          const c = (0, t.x0)(),
            i = document.createElement("video");
          return (
            (i.preload = "metadata"),
            i.addEventListener("loadedmetadata", () => c.resolve(i)),
            (i.onerror = (d) => {
              console.error("LoadVideo failed to load the video, details", d),
                c.resolve(void 0);
            }),
            (i.src = l),
            c.promise
          );
        }
        function T(l) {
          return l.startsWith("image/");
        }
        function M(l) {
          return l.startsWith("video/");
        }
        function v(l, c) {
          return c ? O(l) : _(l);
        }
        async function m(l, c) {
          if (c) return O(URL.createObjectURL(l));
          {
            const i = (0, t.x0)(),
              d = new FileReader();
            (d.onload = () => i.resolve(d.result ?? void 0)),
              (d.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  d.error,
                ),
                  i.resolve(void 0);
              }),
              d.readAsDataURL(l);
            const r = await i.promise;
            return r ? _(r.toString()) : void 0;
          }
        }
        function o(l) {
          return l
            ? l instanceof HTMLVideoElement
              ? { width: l.videoWidth, height: l.videoHeight }
              : { width: l.width, height: l.height }
            : { width: 0, height: 0 };
        }
        function A(l, c) {
          if (!c) return l;
          const i = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const d of c)
            i.has(d.name.toLowerCase()) || (l[d.name] = d.value);
          return l;
        }
      },
      54407: (R, B, e) => {
        "use strict";
        e.d(B, { B3: () => u, CF: () => s, KM: () => d, KT: () => p });
        var t = e(41735),
          D = e.n(t),
          L = e(58632),
          S = e.n(L),
          P = e(90626),
          _ = e(20194),
          O = e(75233),
          T = e(72604),
          M = e(76559),
          v = e(34592),
          m = e(3166),
          o = e(35038),
          A = e(59514),
          l = e(68312),
          c = e(40497);
        const i = "nicknames";
        function d(n) {
          const h = (0, l.KV)(),
            { data: E, isLoading: I } = (0, _.I)({
              queryKey: [i],
              queryFn: async () => {
                const y = new Map();
                if (m.iA.logged_in) {
                  const a = o.w.Init(A.w_T),
                    x = (await A.xtC.GetNicknameList(h, a)).Body().toObject();
                  x?.nicknames &&
                    x.nicknames.length > 0 &&
                    x.nicknames.forEach((U) => {
                      y.set(U.accountid, U.nickname);
                    });
                }
                return y;
              },
            });
          return E ? E.get(n) : null;
        }
        async function r(n) {
          if (!n || n.length == 0) return [];
          const h =
            (0, m.yK)() == "community"
              ? m.TS.COMMUNITY_BASE_URL
              : m.TS.STORE_BASE_URL;
          if (n.length == 1) {
            const E = { accountid: n[0], origin: self.origin },
              I = await D().get(`${h}actions/ajaxgetavatarpersona`, {
                params: E,
              });
            if (
              !I ||
              I.status != 200 ||
              I.data?.success != T.R ||
              !I.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, v.H))(I).strErrorMsg}`;
            return [I.data.userinfo];
          } else {
            const E = { accountids: n.join(","), origin: self.origin },
              I = await D().get(`${h}actions/ajaxgetmultiavatarpersona`, {
                params: E,
              });
            if (
              !I ||
              I.status != 200 ||
              I.data?.success != T.R ||
              !I.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, v.H))(I).strErrorMsg}`;
            const y = new Map();
            return (
              I.data.userinfos.forEach((a) =>
                y.set(new M.b(a.steamid).GetAccountID(), a),
              ),
              n.map((a) => y.get(a))
            );
          }
        }
        const C = new (S())((n) => r(n), { cache: !1 }),
          g = "avatarandpersonas";
        function p(n) {
          const { data: h, isLoading: E } = (0, _.I)({
            queryKey: [g, n],
            queryFn: () => C.load(n),
          });
          return [h, E];
        }
        function u(n) {
          const h = (0, O.jE)(),
            { data: E, isLoading: I } = (0, _.I)({
              queryKey: [g, n],
              queryFn: async () => {
                const a = await C.loadMany(n);
                return (
                  a.forEach((f) => {
                    const x = [g, new M.b(f.steamid).GetAccountID()];
                    h.setQueryData(x, f);
                  }),
                  a
                );
              },
              enabled: n?.length > 0,
            }),
            y = (0, P.useMemo)(() => {
              const a = new Array();
              return (
                E?.forEach((f) => {
                  f instanceof Error || a.push(f);
                }),
                a
              );
            }, [E]);
          return I ? null : y;
        }
        function s(n) {
          return c.L.getQueryData([g, n]);
        }
      },
      49628: (R, B, e) => {
        "use strict";
        e.d(B, { H: () => L });
        var t = e(99412),
          D = e(98609);
        const L = () => (D.TS.EUNIVERSE === t.Rv ? 2581 : 45267781);
      },
      24806: (R, B, e) => {
        "use strict";
        e.d(B, { Ng: () => r, iN: () => C, yk: () => g });
        var t = e(7850),
          D = e(75844),
          L = e(65946),
          S = e(90626),
          P = e(99412),
          _ = e(32093),
          O = e(50109),
          T = e(95695),
          M = e.n(T),
          v = e(36707),
          m = e(18210),
          o = e(92264),
          A = e(54963),
          l = e(71421),
          c = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          d = (p, u, s, n) => {
            for (
              var h = n > 1 ? void 0 : n ? i(u, s) : u, E = p.length - 1, I;
              E >= 0;
              E--
            )
              (I = p[E]) && (h = (n ? I(u, s, h) : I(h)) || h);
            return n && h && c(u, s, h), h;
          };
        let r = class extends S.Component {
          GenerateLanguageOptions() {
            let p = [];
            const {
              fnFilterLanguage: u,
              fnLangHasData: s,
              fnLastUpdateRTime: n,
              fnIsLangSupported: h,
            } = this.props;
            this.props.bAllowUnsetOption &&
              p.push(
                (0, t.jsx)(
                  "option",
                  {
                    value: P.xPp,
                    children: (0, m.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let E = new Array();
            const I = this.props.realms || [_.TU.k_ESteamRealmGlobal];
            for (const a of m.A0.GetLanguageListForRealms(I)) {
              if (u && !u(a)) continue;
              const f = (0, P.LgB)(a),
                x = (0, m.we)("#Language_" + f),
                U = !!(h && h(a));
              E.push({ eLang: a, sLocName: x, bSupported: U });
            }
            E.sort((a, f) =>
              a.bSupported != f.bSupported
                ? a.bSupported
                  ? -1
                  : 1
                : a.sLocName.localeCompare(f.sLocName),
            );
            let y = !1;
            for (const a of E) {
              a.bSupported != y &&
                (p.push(
                  (0, t.jsx)(
                    "option",
                    {
                      className: M().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        a.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    a.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (y = a.bSupported));
              const f = s && s(a.eLang),
                x = n && n(a.eLang);
              let U = a.sLocName;
              x &&
                x !== 0 &&
                ((U += " "),
                (U += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(x) +
                    " @ " +
                    (0, o.KC)(x, { bForce24HourClock: !1 }),
                ))),
                p.push(
                  (0, t.jsx)(
                    "option",
                    {
                      value: a.eLang,
                      className: (0, v.A)(
                        { [M().LanguageWithContent]: f },
                        a.bSupported
                          ? M().SupportedLanguage
                          : M().UnsupportedLanguage,
                      ),
                      children: U,
                    },
                    "langpicker" + a.eLang + (f ? "_hasdata" : ""),
                  ),
                );
            }
            return p;
          }
          OnLanguageChange(p) {
            const { fnOnLanguageChanged: u, selectedLang: s } = this.props;
            let n = Number.parseInt(p.currentTarget.value);
            n != s && u && u(n);
          }
          render() {
            const { selectedLang: p, bDisabled: u, strTooltip: s } = this.props;
            let n = this.GenerateLanguageOptions();
            return (0, t.jsx)(l.he, {
              toolTipContent: s,
              children: (0, t.jsx)("select", {
                value: p,
                onChange: this.OnLanguageChange,
                disabled: u,
                children: n,
              }),
            });
          }
        };
        d([A.oI], r.prototype, "OnLanguageChange", 1), (r = d([D.PA], r));
        function C(p) {
          const [u, s] = (0, L.q3)(() => [
            O.O.Get().GetHasLocalizationContext(),
            O.O.Get().GetCurEditLanguage(),
          ]);
          return (0, t.jsx)(r, {
            selectedLang: s,
            fnLangHasData: O.O.Get().BHasLanguageData,
            fnOnLanguageChanged: O.O.Get().SetCurEditLanguage,
            bDisabled: !u,
            strTooltip: u
              ? void 0
              : (0, m.we)("#Localization_EditorNotInFocus"),
          });
        }
        function g(p) {
          const { fnLangHasData: u } = p;
          S.useEffect(
            () => (
              O.O.Get().SetHasLocalizationContext(!0),
              () => O.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const s = (0, L.q3)(() => {
            const n = [];
            for (let h = P.Bhc; h < P.bP9; ++h) n[h] = !!(u && u(h));
            return n;
          });
          return (
            S.useEffect(() => O.O.Get().SetHasLanguage(s), [s]),
            (0, t.jsx)(t.Fragment, {})
          );
        }
      },
      98932: (R, B, e) => {
        "use strict";
        e.d(B, { K: () => P });
        var t = e(7850),
          D = e(18210),
          L = e(35050),
          S = e.n(L);
        function P() {
          return (0, t.jsx)("div", {
            className: L.bordered_live_stream_icon,
            children: (0, D.we)("#home_page_live_broadcast"),
          });
        }
      },
      78069: (R, B, e) => {
        "use strict";
        e.d(B, { S: () => T });
        var t = e(39905),
          D = e(47875),
          L = e(83482),
          S = e(54603),
          P = e(71742),
          _ = e(82734),
          O = e(53113);
        function T(M, v, m, o, A, l) {
          if (!m) return;
          if (!(0, S.nz)(M.item_type)) {
            (0, P.wT)(
              !1,
              "StoreItemWidgetSalePageAction: unexpected type: " + M.item_type,
            );
            return;
          }
          const i = (0, L.wJ)(`${(0, D._)(M, o)}${A ? `?${A}` : ""}`, v);
          return {
            onClick: (r) => {
              let C = (0, _.uX)(r) || window;
              l
                ? l(r)
                : i.startsWith("steam://") || (C.location.href = (0, O.NT)(i));
            },
            onOKActionDescription: t.Z.Localize("#Sale_Gamepad_Action_Select"),
          };
        }
      },
      54603: (R, B, e) => {
        "use strict";
        e.d(B, { oj: () => A, nz: () => o });
        var t = e(7850),
          D = e(44420),
          L = e(72865),
          S = e(90626);
        const P = S.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function _() {
          return S.useContext(P);
        }
        function O(l) {
          return jsx(P.Provider, {
            value: l.ImpressionTracker,
            children: l.children,
          });
        }
        var T = e(40365),
          M = e(18938);
        function v(l) {
          const { appID: c, feature: i, depth: d, children: r } = l,
            C = (0, L.ru)(i, d),
            g = _(),
            [p, u] = S.useState(void 0),
            s = S.useCallback(
              (I) => {
                I.isIntersecting &&
                  u((y) =>
                    y?.appID == c && y?.snr == C ? y : { appID: c, snr: C },
                  );
              },
              [c, C],
            );
          (0, S.useEffect)(() => {
            p && p.appID != null && g.AddImpression(p.appID, p.snr);
          }, [g, p]);
          const n = (0, T.BL)(s),
            h = c && (!p || (p.appID != c && p.snr != C)),
            E = (0, M.Ue)(r.props.ref, h ? n : void 0);
          return S.cloneElement(r, { ref: E });
        }
        function m(l) {
          return l == "bundle"
            ? "bundle"
            : l == "sub"
              ? "sub"
              : (BIsSaleItemType(l), "app");
        }
        function o(l) {
          return l == D.c6.xO
            ? "bundle"
            : l == D.c6.RD
              ? "sub"
              : (l == D.c6.qI, "app");
        }
        const A = (l) => {
          const { appid: c } = l,
            i = (0, t.jsx)("div", {
              className: "ImpressionTrackedElement",
              children: l.children,
            });
          return c ? (0, t.jsx)(v, { appID: c, children: i }) : i;
        };
      },
      27788: (R, B, e) => {
        "use strict";
        e.d(B, { XC: () => o });
        var t = e(7850),
          D = e(90626),
          L = e(36118),
          S = e(36707),
          P = e(71568);
        function _(c, i, d, r) {
          D.useEffect(() => {
            const C = (g) => {
              g.key === c &&
                (i(g), d && g.preventDefault(), r && g.stopPropagation());
            };
            return (
              document.addEventListener("keydown", C),
              () => document.removeEventListener("keydown", C)
            );
          }, [c, i, d, r]);
        }
        function O(c, i) {
          const d = useBrowserContext();
          React.useEffect(() => {
            const r = (C) => {
              C.key === c && i(C);
            };
            return (
              d.ownerWindow.addEventListener("keydown", r),
              () => d.ownerWindow.removeEventListener("keydown", r)
            );
          }, [c, i, d.ownerWindow]);
        }
        var T = e(2801),
          M = e(39449),
          v = e.n(M),
          m = e(18210);
        function o() {
          const [c, i] = D.useState(void 0),
            d = D.useCallback(() => i(void 0), []),
            r = (0, t.jsx)(T.EN, {
              active: c !== void 0,
              children: (0, t.jsx)(A, { closeModal: d, rgImageURL: c }),
            });
          return [i, r];
        }
        function A(c) {
          const { closeModal: i, rgImageURL: d } = c,
            [r, C] = D.useState(0),
            g = d?.length ?? 0,
            p = D.useCallback(() => {
              r == 0 ? C(g - 1) : C(r - 1);
            }, [r, g]),
            u = D.useCallback(() => {
              d && r + 1 >= g ? C(0) : C(r + 1);
            }, [r, d, g]);
          return (0, t.jsxs)(T.eV, {
            title: (0, m.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: i,
            bHideCloseIcon: !0,
            modalClassName: v().PopupScreenshotModal,
            children: [
              (0, t.jsx)(l, {
                index: r,
                numElements: d?.length || 0,
                fnForward: u,
                fnBackwards: p,
                fnClose: i,
                bCircular: !0,
              }),
              (0, t.jsx)("div", {
                className: v().PopupScreenshotContainer,
                children: (0, t.jsx)("img", {
                  className: v().PopupScreenshot,
                  src: d?.[r],
                }),
              }),
            ],
          });
        }
        function l(c) {
          const {
            index: i,
            numElements: d,
            fnForward: r,
            fnBackwards: C,
            fnClose: g,
            bCircular: p,
          } = c;
          _("ArrowLeft", () => C?.(), !0, !0),
            _("Left", () => C?.(), !0, !0),
            _("ArrowRight", () => r?.(), !0, !0),
            _("Right", () => r?.(), !0, !0),
            _("Escape", () => g && g(), !0, !0),
            _("Esc", () => g && g(), !0, !0);
          let u = d > 1;
          return (0, t.jsxs)("div", {
            className: v().ButtonCtn,
            children: [
              u &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, S.A)(
                        v().ButtonIcon,
                        i === 0 && !p ? v().Disabled : null,
                      ),
                      onClick: C,
                      children: (0, t.jsx)(L.V5W, { angle: 270 }),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, S.A)(
                        v().ButtonIcon,
                        i === d - 1 && !p ? v().Disabled : null,
                      ),
                      onClick: r,
                      children: (0, t.jsx)(L.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, t.jsx)("div", {
                className: v().ButtonIcon,
                onClick: g,
                children: (0, t.jsx)(L.X, {}),
              }),
            ],
          });
        }
      },
      21770: (R, B, e) => {
        "use strict";
        e.d(B, { J: () => Z });
        var t = e(7850),
          D = e(21690),
          L = e(36707),
          S = e(3166),
          P = e(58855),
          _ = e(39905),
          O = e(40358),
          T = e(64238),
          M = e.n(T),
          v = e(90626),
          m = e(34713),
          o = e.n(m),
          A = e(55546),
          l = e(75779),
          c = e(71742),
          i = e(26356);
        function d(w) {
          const { data: G } = useStoreItemSupportedPlatforms(w.id);
          return jsx(C, { platforms: G });
        }
        function r(w) {
          const { id: G, ...K } = w,
            { data: N } = (0, O.qI)(G);
          return (0, t.jsx)(g, { ...K, platforms: N });
        }
        const C = v.memo(function (G) {
            const { platforms: K } = G;
            if (!K) return null;
            const { windows: N, mac: z, steamos_linux: H, vr_support: b } = K;
            return (0, t.jsxs)("span", {
              className: o().SupportedPlatforms,
              children: [
                N && (0, t.jsx)(p, {}),
                z && (0, t.jsx)(u, {}),
                H && (0, t.jsx)(s, {}),
                b?.vrhmd && (0, t.jsx)(n, {}),
              ],
            });
          }),
          g = v.memo(function (G) {
            const { platforms: K, eHWCompat: N, size: z = "small" } = G;
            let H;
            if (N == i.iA)
              return (
                (0, c.wT)(
                  !1,
                  "SteamHWCompatIndicator called for k_ESteamHWCompatibility_None",
                ),
                null
              );
            if (N == i.c9) {
              const b = K?.steam_os_compat_category;
              if (b === void 0) return null;
              switch (b) {
                case A.Hi:
                  H = W;
                  break;
                case A.u_:
                  H = F;
                  break;
                case A.xs:
                  H = V;
                  break;
                default:
                  return (
                    (0, c.z_)(b, `Unhandled steam os category: ${b}`), null
                  );
              }
            } else {
              let b;
              if (
                (N == i.JR
                  ? (b = K?.steam_machine_compat_category)
                  : N == i.bY
                    ? (b = K?.steam_frame_compat_category)
                    : (b = K?.steam_deck_compat_category),
                b === void 0)
              )
                return null;
              switch (b) {
                case l.I2:
                  H = U;
                  break;
                case l.sd:
                  H = j;
                  break;
                case l.V8:
                  H = F;
                  break;
                case l.YX:
                  H = V;
                  break;
                default:
                  return (
                    (0, c.z_)(b, `Unhandled deck compat category: ${b}`), null
                  );
              }
            }
            return (0, t.jsxs)("span", {
              className: M()(
                o().DeckCompat,
                z == "small" && o().Small,
                z == "fill" && o().Fill,
              ),
              children: [
                N == i.ZJ && (0, t.jsx)(a, {}),
                N == i.JR && (0, t.jsx)(f, {}),
                N == i.bY && (0, t.jsx)(x, {}),
                (0, t.jsx)(H, {}),
              ],
            });
          });
        function p() {
          return (0, t.jsx)("span", {
            className: M()(o().PlatformIndicator, o().Windows),
            title: _.Z.Localize("#Platform_Windows"),
            children: (0, t.jsx)(h, {}),
          });
        }
        function u() {
          return (0, t.jsx)("span", {
            className: M()(o().PlatformIndicator, o().Mac),
            title: _.Z.Localize("#Platform_Mac"),
            children: (0, t.jsx)(E, {}),
          });
        }
        function s() {
          return (0, t.jsx)("span", {
            className: M()(o().PlatformIndicator, o().SteamOS),
            title: _.Z.Localize("#Platform_Linux"),
            children: (0, t.jsx)(I, {}),
          });
        }
        function n() {
          return (0, t.jsx)("span", {
            className: o().PlatformIndicator,
            title: _.Z.Localize("#Platform_VR"),
            children: (0, t.jsx)(y, {}),
          });
        }
        function h() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
            children: [
              (0, t.jsx)("rect", {
                fill: "currentColor",
                width: "60.834",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                fill: "currentColor",
                width: "60.835",
                height: "60.835",
              }),
              (0, t.jsx)("rect", {
                y: "67.164",
                fill: "currentColor",
                width: "60.834",
                height: "60.836",
              }),
              (0, t.jsx)("rect", {
                x: "67.165",
                y: "67.164",
                fill: "currentColor",
                width: "60.835",
                height: "60.836",
              }),
            ],
          });
        }
        function E() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                d: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
              }),
              (0, t.jsx)("path", {
                d: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
              }),
            ],
          });
        }
        function I() {
          return (0, t.jsxs)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#FFFFFF",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
              }),
            ],
          });
        }
        function y() {
          return (0, t.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, t.jsx)("path", {
                d: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
                fill: "currentColor",
              }),
              (0, t.jsx)("path", {
                d: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function a() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
            ),
            className: M()(o().SteamDeckCompatLogo),
            children: (0, t.jsx)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                opacity: "0.84",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
                fill: "white",
              }),
            }),
          });
        }
        function f() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: M()(o().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function x() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            className: M()(o().SteamDeckCompatLogo),
            children: (0, t.jsxs)("svg", {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  d: "M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  opacity: "0.84",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z",
                  fill: "white",
                }),
              ],
            }),
          });
        }
        function U() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize("#SteamDeckVerified_Category_Verified"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: M()(o().SteamDeckCompatVerified),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function j() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize("#SteamDeckVerified_Category_Playable"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: M()(o().SteamDeckCompatPlayable),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function F() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize("#SteamDeckVerified_Category_Unsupported"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: M()(o().SteamDeckCompatUnsupported),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function V() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize("#SteamDeckVerified_Category_Unknown"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: M()(o().SteamDeckCompatUnknown),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function W() {
          return (0, t.jsx)("span", {
            title: _.Z.Localize("#SteamOSCompatibility_Category_Compatible"),
            className: o().SteamDeckCompatIcon,
            children: (0, t.jsx)("svg", {
              className: M()(o().SteamOSCompatCompatible),
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
                fill: "currentColor",
              }),
            }),
          });
        }
        function Z(w) {
          const { bAllowOutsideOfDeck: G } = w;
          return !(0, S.Qn)() && !G ? null : (0, t.jsx)(Y, { ...w });
        }
        function Y(w) {
          const { className: G, id: K } = w,
            [N, z] = (0, D.FD)();
          let H = z;
          if ((z == i.iA && (H = i.ZJ), !K)) return null;
          let b;
          return (
            z == i.bY && (b = P.CompatIconFrame),
            (0, t.jsx)("div", {
              className: (0, L.A)(P.CompatIcon, b, G),
              children: (0, t.jsx)(r, { id: K, eHWCompat: H }),
            })
          );
        }
      },
      39239: (R, B, e) => {
        "use strict";
        e.d(B, { i: () => T, o: () => O });
        var t = e(7850),
          D = e(90626),
          L = e(18210),
          S = e(67523),
          P = e.n(S),
          _ = e(80150);
        function O(M) {
          const {
              className: v,
              srcs: m,
              lazyLoad: o,
              width: A,
              height: l,
              alt: c,
              crossOrigin: i,
            } = M,
            [d, r] = D.useState(m.length),
            [C, g] = D.useState(0);
          D.useEffect(() => {
            d != m.length && (r(m.length), g(0));
          }, [d, m.length]);
          const p = D.useCallback(() => {
            M.onImageError && M.onImageError(M.srcs[C]),
              C + 1 < M.srcs.length && g(C + 1);
          }, [C, M]);
          return m.length == 0
            ? null
            : (0, t.jsx)("img", {
                className: v,
                src: m[C],
                crossOrigin: i,
                onError: p,
                loading: o ? "lazy" : void 0,
                width: A,
                height: l,
                alt: c,
              });
        }
        function T(M) {
          const [v, m] = D.useState(!1),
            {
              className: o,
              src: A,
              lazyLoad: l,
              width: c,
              height: i,
              alt: d,
              crossOrigin: r,
            } = M;
          return v
            ? (0, t.jsxs)("div", {
                className: S.ErrorDiv,
                children: [
                  (0, t.jsx)("p", {
                    children: (0, L.we)("#Image_ErrorTitle", A),
                  }),
                  (0, t.jsx)("ul", {
                    children: (0, t.jsx)("li", {
                      children: (0, L.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, t.jsx)("p", {
                    children: (0, L.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, t.jsx)(_.o, {
                className: o,
                src: A,
                onError: () => m(!0),
                crossOrigin: r,
                loading: l ? "lazy" : void 0,
                width: c,
                height: i,
                alt: d,
              });
        }
      },
      80150: (R, B, e) => {
        "use strict";
        e.d(B, { o: () => o });
        var t = e(7850),
          D = e(90626),
          L = e(36118),
          S = e(36707),
          P = e(27788),
          _ = e(21659),
          O = e(21038),
          T = e.n(O);
        const M = 1.3,
          v = 3,
          m = 256;
        function o(A) {
          const [l, c] = (0, D.useState)(!1),
            [i, d] = (0, D.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            r = (0, D.useRef)(null),
            [C, g] = (0, P.XC)();
          return (
            (0, D.useEffect)(() => {
              i.naturalWidth > i.displayWidth * M &&
                i.naturalHeight > i.displayHeight * M &&
                i.naturalWidth > m &&
                i.naturalWidth / i.naturalHeight < v &&
                c(!0);
            }, [i]),
            l
              ? (0, t.jsxs)("span", {
                  className: O.PreviewCtn,
                  children: [
                    g,
                    (0, t.jsx)("span", {
                      className: O.SVG,
                      children: (0, t.jsx)(L.YNO, {}),
                    }),
                    (0, t.jsx)("img", {
                      ...A,
                      className: (0, S.A)({
                        ...(A.className && { [A.className]: !0 }),
                      }),
                      onClick: (p) => {
                        A.src && C([A.src]);
                      },
                    }),
                  ],
                })
              : (0, t.jsx)("img", {
                  ...A,
                  ref: r,
                  onLoad: (p) => {
                    if (!p.currentTarget.closest("a") && !(0, _.c5)()) {
                      const {
                        naturalWidth: u,
                        naturalHeight: s,
                        width: n,
                        height: h,
                      } = p.currentTarget;
                      d({
                        naturalWidth: u,
                        naturalHeight: s,
                        displayWidth: n,
                        displayHeight: h,
                      });
                    }
                  },
                })
          );
        }
      },
      12932: (R, B, e) => {
        "use strict";
        e.d(B, { AQ: () => l, pn: () => i, qx: () => c });
        var t = e(7850),
          D = e(58534),
          L = e(18210),
          S = e(36118),
          P = e(90626),
          _ = e(36707),
          O = e(95695),
          T = e.n(O),
          M = e(25792),
          v = e(64734),
          m = e.n(v),
          o = e(65946),
          A = e(11243);
        function l(d) {
          const {
              title: r,
              tooltip: C,
              getMinimized: g,
              toggleMinimized: p,
              className: u,
              children: s,
              elAdditionalButtons: n,
            } = d,
            h = (0, o.q3)(() => g());
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, _.A)(
                  u,
                  v.SectionTitleHeader,
                  v.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, _.A)(
                      O.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [r, !!C && (0, t.jsx)(A.o, { tooltip: C })],
                  }),
                  (0, t.jsxs)("div", {
                    className: v.SectionTitleButtons,
                    children: [
                      n,
                      (0, t.jsx)(i, { bIsMinimized: h, fnToggleMinimize: p }),
                    ],
                  }),
                ],
              }),
              !h && (0, t.jsx)(M.tH, { children: s }),
            ],
          });
        }
        function c(d) {
          const [r, C] = P.useState(!!d.bStartMinimized);
          return (0, t.jsx)(l, {
            ...d,
            getMinimized: () => r,
            toggleMinimized: () => C(!r),
            children: d.children,
          });
        }
        function i(d) {
          const { bIsMinimized: r, fnToggleMinimize: C } = d,
            g = r ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, t.jsx)(D.$n, {
            "data-tooltip-text": (0, L.we)(g),
            onClick: C,
            children: d.bIsMinimized
              ? (0, t.jsx)(S.hz4, {})
              : (0, t.jsx)(S.Xjb, {}),
          });
        }
      },
      33645: (R) => {
        R.exports = {
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
      83164: (R) => {
        R.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
      },
      34713: (R) => {
        R.exports = {
          SupportedPlatforms: "_33rQKLUJRiKbr34oQgUJSd",
          PlatformIndicator: "_1POD5IsW1vYfv9B_TuSiBd",
          Windows: "_3xTrz2wDDtzNFR58CQfSNa",
          SteamOS: "_1z6ASwnrVeCtYcPfPjiZZd",
          Mac: "_1FiaJi5I3_8ky2ppYqGqfr",
          DeckCompat: "GFz2Vhq20J9x6lqpaKy2G",
          Fill: "_39zOL0i8BdQ_RV-xE0zXDz",
          SteamDeckCompatLogo: "_2xju2qqP5744ItNt2uvbdT",
          SteamDeckCompatIcon: "_28xj3TU4bHvjyeVhlzCmRV",
          SteamDeckCompatVerified: "_3-OPVQMD-qkvAyt3Jntn9t",
          SteamDeckCompatPlayable: "_1EMxxDePjZh_-E7AH0yDym",
          SteamDeckCompatUnsupported: "_2qziiy9xhD4mLc1OgxQAAy",
          SteamDeckCompatUnknown: "I6YFAbL_5IYOTtedVwwPV",
          SteamOSCompatCompatible: "_2fVV0WviM21gsBt1Iz-Htx",
        };
      },
      35050: (R) => {
        R.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
      },
      39449: (R) => {
        R.exports = {
          PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
          PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
          PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
          ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
          ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
          Disabled: "_1a_f8VY56CtjgePDRTaC-W",
        };
      },
      58855: (R) => {
        R.exports = {
          CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
          CompatIconFrame: "_3E70dZ6hSfFCmskaIzbgJp",
        };
      },
      67523: (R) => {
        R.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (R) => {
        R.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      64734: (R) => {
        R.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
