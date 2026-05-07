/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    33645: (e) => {
      e.exports = {
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
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
      };
    },
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (e, t, n) => {
      "use strict";
      n.d(t, { YA: () => l, p: () => c, qh: () => o });
      var a = n(20194),
        r = n(41735),
        s = n.n(r),
        i = n(78327);
      function o() {
        const e = (0, a.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await s().get(e);
            return 200 == t?.status && 1 == t.data?.success
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function c(e) {
        const t = o();
        return t?.find((t) => t.id == e);
      }
      function l(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => u,
        UA: () => g,
        Yd: () => h,
        qG: () => f,
        rN: () => m,
        vh: () => p,
      });
      var a = n(34629),
        r = n(41735),
        s = n.n(r),
        i = n(90626),
        o = n(68797),
        c = n(78327),
        l = n(6419);
      function u() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
      }
      class d {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        async FindPartnerByName(e) {
          return (
            this.m_mapPromises.has(e) ||
              this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
            this.m_mapPromises.get(e)
          );
        }
        async InternalFindPartnerByName(e) {
          const t = new Array();
          try {
            const n = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: c.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await s().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, o.H)(e);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                t.strErrorMsg,
              t,
            );
          }
          return t;
        }
        async LoadPartnerInfo(e) {
          if (this.m_mapOptInToPartners.has(e))
            return this.m_mapOptInToPartners.get(e);
          await this.FindPartnerByName("" + e);
          return (
            this.BHasPartnerInfoLoad(e) ||
              this.m_mapOptInToPartners.set(e, null),
            this.m_mapOptInToPartners.get(e)
          );
        }
        async LoadMultiplePartnerInfo(e) {
          if (!e || 0 == e.length) return [];
          const t = e.filter((e) => !this.m_mapOptInToPartners.has(e));
          return (
            t.length > 0 && (await this.FindPartnerByName("" + t.join(","))),
            e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, c.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == c.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function p(e) {
        const [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function g(e) {
        const [t, n] = i.useState(() => d.Get().GetPartnerInfo(e));
        return (
          i.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function m() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function h(e) {
        return d.Get().GetPartnerInfo(e);
      }
      function f(e) {
        return d.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([l.o], d.prototype, "FindPartnerByName", null);
    },
    95742: (e, t, n) => {
      "use strict";
      n.d(t, { Al: () => a, CS: () => r, op: () => o, vE: () => c });
      class a {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const a = (function (e, t) {
            const n = [];
            let a = { type: 0, text: "" },
              r = !1,
              s = !1,
              i = !1;
            for (let o = 0; o < e.length; o++) {
              const c = e[o];
              switch (a.type) {
                case 0:
                  "[" == c
                    ? ((a.type = 2), (s = !0))
                    : ((a.type = 1), "\\" == c && t ? (r = !r) : (a.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && s) (a.type = 3), (a.text = ""), (s = !1);
                  else if ("[" != c || r)
                    if ("]" != c || r)
                      "\\" == c && t
                        ? ((a.text += c), (r = !r), (s = !1))
                        : ((a.text += c), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase();
                      s || (i && !t)
                        ? ((a = u(a)), (a.text += c))
                        : e
                          ? (i = !0)
                          : t && (i = !1),
                        (a = l(n, a)),
                        (s = !1);
                    }
                  else (a = l(n, u(a), 2)), (s = !0);
                  break;
                case 1:
                  "[" != c || r
                    ? "\\" == c && t
                      ? (r && (a.text += c), (r = !r))
                      : ((a.text += c), (r = !1))
                    : ((a = l(n, a, 2)), (s = !0));
              }
            }
            0 != a.type &&
              (2 == a.type || 3 == a.type
                ? n.push(u(a))
                : n.push({ type: a.type, text: a.text ?? "" }));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const a = [],
            r = () => (a.length < 1 ? void 0 : a[a.length - 1]),
            s = this.m_dictComponents,
            i = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let o = !1,
            c = !0;
          const l = (e, a) => {
            let r = a.text.toLowerCase();
            if (e && e.node.tag === r && s.get(e.node.tag)) {
              const a = s.get(e.node.tag),
                r = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                i = t(a.Constructor, r, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(i)
                  ? i.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(i),
                (o = !!a.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (n = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, c), (o = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const i = r();
                  if (void 0 !== i) {
                    const t = s.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      l(a.pop(), i.node);
                  }
                  a.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == a.length);
              } else if (3 == e.type) {
                let t = e.text.toLowerCase();
                for (; r() && r().node.tag !== t && i(r().node); ) {
                  const e = a.pop();
                  l(e, e.node);
                }
                if (r()?.node.tag == t) {
                  const t = a.pop();
                  l(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == a.length);
              }
            });
            a.length > 0;
          ) {
            const e = a.pop();
            l(e, e.node);
          }
          return n.GetElements();
        }
      }
      function r(e, t) {
        let n = "[" + e;
        t?.[""] && (n += `=${s("" + t[""])}`);
        for (const e in t) "" !== e && (n += ` ${i(e)}=${s("" + t[e])}`);
        return (n += "]"), n;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function i(e) {
        return e.replace(/(\\| |\])/g, "\\$1");
      }
      function o(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, n = 0) {
        const { type: a, text: r = "" } = t;
        if (2 == a) {
          let t = r.indexOf("=");
          const n = r.indexOf(" ");
          let s, i;
          -1 != n && (-1 == t || n < t) && (t = n);
          let o = "";
          t > 0
            ? ((s = r.substr(0, t).toLocaleLowerCase()),
              (o = r.substr(t)),
              (i = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n = "",
                  a = "",
                  r = 0,
                  s = 0;
                "=" == e[0] && (r = 2);
                let i = !1;
                for (s++; s < e.length; s++) {
                  const o = e[s];
                  let c = !0,
                    l = !1;
                  switch (r) {
                    case 0:
                      if ("=" == o) return {};
                      if (" " == o) continue;
                      r = 1;
                      break;
                    case 1:
                      ("=" != o && " " != o) ||
                        i ||
                        (" " == o ? ((r = 0), (l = !0)) : (r = 2), (c = !1));
                      break;
                    case 2:
                      " " == o
                        ? ((r = 0), (c = !1), (l = !0))
                        : '"' == o
                          ? ((r = 4), (c = !1))
                          : (r = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == o && 4 != r && !i) ||
                        ('"' == o && 4 == r && !i)) &&
                        ((r = 0), (c = !1), (l = !0));
                  }
                  if (c)
                    if ("\\" != o || i)
                      if (((i = !1), 1 == r)) n += o;
                      else {
                        if (3 != r && 4 != r)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + r,
                          );
                        a += o;
                      }
                    else i = !0;
                  l && ((t[n] = a), (n = ""), (a = ""));
                }
                0 != r && (t[n] = a);
                return t;
              })(o)))
            : ((i = {}), (s = r.toLocaleLowerCase())),
            e.push({ type: a, text: r, tag: s, args: i, rawargs: o });
        } else 0 != a && e.push({ type: a, text: r });
        return { type: n, text: "" };
      }
      function u(e) {
        let t = "";
        return (
          3 == e.type ? (t = "[/") : 2 == e.type && (t = "["),
          { type: 1, text: t + (e.text ?? "") }
        );
      }
    },
    40236: (e, t, n) => {
      "use strict";
      n.d(t, { OO: () => c, wY: () => o });
      var a = n(90626),
        r = n(8871),
        s = n(81393);
      function i(e, t) {
        return (0, r.QS)(
          (n) => {
            if (!n) return;
            const a = t(n.ownerDocument.defaultView, (t) => {
              e(t[0]);
            });
            return a.observe(n), () => a.unobserve(n);
          },
          [e, t],
        );
      }
      function o(e) {
        return i(
          e,
          a.useCallback(
            (e, t) =>
              e.ResizeObserver
                ? new e.ResizeObserver(t)
                : ((0, s.wT)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function c(e, t) {
        const n = a.useRef(void 0);
        return (function (e, t) {
          return i(
            e,
            a.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
          );
        })((t) => {
          !n.current && t.isIntersecting && e.onEnter?.(t),
            n.current && !t.isIntersecting && e.onLeave?.(t),
            e.onIntersectionChange?.(t),
            (n.current = t.isIntersecting);
        }, t);
      }
    },
    78588: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => d });
      var a = n(7850),
        r = n(74812),
        s = n(8893),
        i = n(90717),
        o = n(26296),
        c = n(52038),
        l = n(18654),
        u = n.n(l);
      function d(e) {
        const { id: t, imageType: n, bPreferAssetWithoutOverride: l } = e,
          { storeItemAsset: d, storeItemDefaultInfo: p } = (0, r.q)(t, n, l);
        if ("library" === n || "vertical" == n)
          return (0, a.jsx)(s.G, { id: t, bPreferAssetWithoutOverride: l });
        let g,
          m,
          h = "";
        if ("main" === n)
          (g = u().mainCapsuleImgWidth),
            (m = u().mainCapsuleImgHeight),
            (h = u().MainCapsuleImageContainer);
        else
          (g = u().headerCapsuleImgWidth),
            (m = u().headerCapsuleImgHeight),
            (h = u().HeaderCapsuleImageContainer);
        if (void 0 === d || !p)
          return (0, a.jsx)("div", {
            className: (0, c.A)(h, "CapsuleImageCtn"),
          });
        if (null == d) return null;
        let f = (0, i.N)(d, "header" === n);
        return (0, a.jsx)("div", {
          className: (0, c.A)(h, "CapsuleImageCtn"),
          children: (0, a.jsx)(o.o, {
            lazyLoad: !0,
            srcs: f,
            className: (0, c.A)(u().CapsuleImage),
            width: g,
            height: m,
            alt: p.name,
          }),
        });
      }
    },
    90717: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => s, N: () => r });
      var a = n(42834);
      function r(e, t) {
        let n = [];
        return (
          e &&
            (function (e, t, n) {
              const r = (0, a.b0)(t, "header_2x") ?? (0, a.b0)(t, "header"),
                s =
                  (0, a.b0)(t, "main_capsule_2x") ??
                  (0, a.b0)(t, "main_capsule");
              n ? e.push(r, s) : e.push(s, r);
            })(n, e, t),
          n.filter((e) => !!e)
        );
      }
      function s(e, t) {
        return {
          strStoreVerticalURL: (0, a.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, a.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => m });
      var a = n(7850),
        r = n(74812),
        s = n(90626),
        i = n(18654),
        o = n.n(i),
        c = n(26296),
        l = n(52038),
        u = n(78327),
        d = n(90717),
        p = n(83164),
        g = n.n(p);
      function m(e) {
        const { id: t, bPreferLibrary: n, bPreferAssetWithoutOverride: i } = e,
          { storeItemDefaultInfo: p, storeItemAsset: m } = (0, r.q)(
            t,
            "vertical",
            i,
          ),
          [h, f] = s.useState(0);
        if (!p || !m)
          return (0, a.jsx)("div", {
            className: o().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: y } = (0, d.M)(
          m,
          p,
        );
        if (_ && (!n || !y))
          return (0, a.jsxs)("div", {
            className: (0, l.A)(
              o().HeroCapsuleImageContainer,
              "HeroCapsuleImageContainer",
            ),
            children: [
              (0, a.jsx)("img", {
                src: _,
                className: o().CapsuleImage,
                alt: p.name,
              }),
              Boolean(4 == p.type) &&
                (0, a.jsx)("img", {
                  className: g().CornerSash,
                  src: `${u.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                  alt: "DLC",
                }),
            ],
          });
        if (y)
          return (0, a.jsxs)("div", {
            className: (0, l.A)(
              o().LibraryFallbackAssetImageContainer,
              o().VerticalCapsule,
              n ? o().ForceLibrarySizing : "",
            ),
            children: [
              (0, a.jsx)("div", {
                className: o().FallbackBackground,
                style: { backgroundImage: `url(${y})` },
              }),
              (0, a.jsx)("img", {
                src: y,
                className: o().CapsuleImage,
                alt: p.name,
              }),
            ],
          });
        const I = (0, d.N)(m, !0),
          b = I.length - 1,
          v = (e) => {
            const t = I.indexOf(e);
            t >= b && t < I.length - 1 && f(t + 1);
          };
        if (h < I.length) {
          const e = I[h];
          return (0, a.jsxs)("div", {
            className: o().LibraryFallbackAssetImageContainer,
            children: [
              (0, a.jsx)("div", {
                className: o().FallbackBackground,
                style: { backgroundImage: `url(${e})` },
              }),
              (0, a.jsx)(c.o, {
                lazyLoad: !0,
                srcs: I,
                className: o().CapsuleImage,
                alt: p.name,
                onImageError: v,
              }),
            ],
          });
        }
        return (0, a.jsx)("div", { className: o().HeroCapsuleImageContainer });
      }
    },
    94191: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => x });
      var a = n(7850),
        r = n(8527),
        s = n(47911),
        i = n(20194),
        o = n(75233),
        c = n(24484),
        l = n(75515);
      var u = n(63664),
        d = n(39777),
        p = (n(35380), n(90626));
      function g() {
        return (0, i.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, c.Tc)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, l.h7)(e)) {
                const t = new Set();
                return (
                  e.filtered.forEach((e) => {
                    e.appid && t.add(e.appid);
                  }),
                  Array.from(t)
                );
              }
              return [];
            })();
            return new Set(e);
          },
        });
      }
      var m = n(58918),
        h = n(17376);
      const f =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var _ = n(18654),
        y = n.n(_),
        I = n(12155),
        b = n(52038),
        v = n(94011);
      function x(e) {
        const { appids: t, hide_status_banners: n, show_early_access: i } = e,
          { data: c } = (0, m.$Y)(),
          { data: l } = (0, h.F0)(),
          _ = t.length > 0 && t.every((e) => c && c.has(e)),
          x = t.length > 0 && t.every((e) => l && l.has(e)),
          A = (function (e) {
            const { data: t } = g(),
              [n, a] = (0, p.useState)(!1),
              r = (0, o.jE)(),
              s = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length || !t) return a(!1);
                (async () => {
                  const n = await Promise.all(
                    e
                      .filter((e) => !!e)
                      .map((e) => r.fetchQuery((0, d.us)(s, { appid: e }))),
                  );
                  a(
                    n.some(
                      (e) =>
                        (e && e.appid && t.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          t.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, s, r, t]),
              n
            );
          })(t),
          C = _ && !n,
          L = x && !n,
          E = !n && i;
        return (0, a.jsxs)("div", {
          className: (0, b.A)(y().CapsuleDecorators, "CapsuleDecorators"),
          children: [
            C &&
              (0, a.jsxs)("span", {
                className: (0, b.A)(y().Banner, y().Blue),
                children: [
                  (0, a.jsx)("img", {
                    src: (0, r.YJ)(f),
                    className: y().LinesImg,
                    alt: s.Z.Localize("#Sale_InLibrary"),
                  }),
                  s.Z.Localize("#Sale_InLibrary"),
                ],
              }),
            L &&
              (0, a.jsxs)("span", {
                className: y().Banner,
                children: [
                  (0, a.jsx)(I.qnF, { className: y().LinesImg }),
                  s.Z.Localize("#Sale_OnWishlist"),
                ],
              }),
            E && !C && !L && (0, a.jsx)(S, { appids: t }),
            A && (0, a.jsx)(v.K, {}),
          ],
        });
      }
      function S(e) {
        const { appids: t } = e,
          n = (function (e) {
            const [t, n] = (0, p.useState)(!1),
              a = (0, o.jE)(),
              r = (0, u.eG)();
            return (
              (0, p.useEffect)(() => {
                if (!e || 0 == e.length) return n(!1);
                (async () => {
                  const t = await Promise.all(
                    e.map((e) => a.fetchQuery((0, d.us)(r, { appid: e }))),
                  );
                  n(t.some((e) => e && e.is_early_access));
                })();
              }, [e, r, a]),
              t
            );
          })(t);
        return n
          ? (0, a.jsx)("span", {
              className: (0, b.A)(y().Banner, y().EarlyAccessGradient),
              children: s.Z.Localize("#Sale_EarlyAccess"),
            })
          : null;
      }
    },
    74812: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => s });
      var a = n(81393),
        r = n(39777);
      function s(e, t, n = !1) {
        const { data: s } = (0, r.J$)(e),
          { data: i } = (0, r.lv)(e, n);
        let o;
        s &&
          1 == s.included_appids?.length &&
          !(function (e, t) {
            if (!e) return !1;
            switch (t) {
              case "header":
                return !!e.header;
              case "main":
                return !!e.main_capsule;
              case "vertical":
              case "library":
                return !!e.hero_capsule || !!e.library_capsule;
              default:
                return (0, a.z_)(t, `Unhandled imageType: ${t}`), !1;
            }
          })(i, t) &&
          s.item_type &&
          [1, 2].includes(s.item_type) &&
          (o = { appid: s.included_appids[0] });
        const { data: c } = (0, r.J$)(o),
          { data: l } = (0, r.lv)(o, n),
          u = c?.visible ? c : s;
        return { storeItemAsset: c?.visible ? l : i, storeItemDefaultInfo: u };
      }
    },
    75515: (e, t, n) => {
      "use strict";
      n.d(t, { PH: () => u, TT: () => s, h7: () => d, mY: () => l });
      var a = n(34629),
        r = n(14947);
      class s {
        constructor() {
          (0, r.Gn)(this);
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
        default_selection_priority = l.k_eGeneral;
        current_selection_priority = l.k_eGeneral;
      }
      (0, a.Cg)([r.sH], s.prototype, "title", void 0),
        (0, a.Cg)([r.sH], s.prototype, "viewer_count", void 0),
        (0, a.Cg)([r.sH], s.prototype, "gamedata_subtitle", void 0),
        (0, a.Cg)([r.sH], s.prototype, "current_selection_priority", void 0);
      const i = "primary",
        o = "featured",
        c = "default_featured";
      var l;
      function u(e) {
        switch (e) {
          case i:
            return l.k_ePrimary;
          case o:
            return l.k_eFeatured;
          case c:
            return l.k_eDefaultFeatured;
          default:
            return l.k_eGeneral;
        }
      }
      function d(e) {
        const t = e;
        return (
          !!(
            t &&
            "number" == typeof t.success &&
            t.filtered &&
            Array.isArray(t.filtered) &&
            t.broadcast_chat_visibility
          ) &&
          (0 == t.filtered.length || "string" == typeof t.filtered[0].accountid)
        );
      }
      !(function (e) {
        (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
          (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
          (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (e[(e.k_eGeneral = 0)] = "k_eGeneral");
      })(l || (l = {}));
    },
    29379: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var a = n(60014),
        r = n(90626);
      n(7850);
      const s = r.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      var i = n(30600),
        o = n(8871);
      function c(e) {
        const { appID: t, feature: n, depth: c, children: l } = e,
          u = (0, a.ru)(n, c),
          d = r.useContext(s),
          [p, g] = r.useState(void 0),
          m = r.useCallback(
            (e) => {
              e.isIntersecting &&
                g((e) =>
                  e?.appID == t && e?.snr == u ? e : { appID: t, snr: u },
                );
            },
            [t, u],
          );
        (0, r.useEffect)(() => {
          p && null != p.appID && d.AddImpression(p.appID, p.snr);
        }, [d, p]);
        const h = (0, i.BL)(m),
          f = t && (!p || (p.appID != t && p.snr != u)),
          _ = (0, o.Ue)(l.props.ref, f ? h : void 0);
        return r.cloneElement(l, { ref: _ });
      }
    },
    96001: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => c, z: () => o });
      var a = n(81393),
        r = n(96059),
        s = n(30470),
        i = n(24484);
      class o {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        Init() {
          const e = (0, i.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(s.TS.WEBAPI_BASE_URL, e));
        }
      }
      function c() {
        return o.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    11577: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => l });
      var a = n(90626),
        r = n(96059),
        s = n(16021),
        i = n(81393),
        o = n(78327),
        c = n(63664);
      function l(e) {
        const [t, n] = (0, a.useState)(!1),
          [l] = (0, a.useState)(() =>
            (function () {
              const e = (0, o.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, i.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const t = new r.D(o.TS.WEBAPI_BASE_URL, e);
              ("dev" != o.TS.WEB_UNIVERSE && "beta" != o.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return t;
            })(),
          ),
          u = (0, a.useMemo)(
            () => ({
              country: o.TS.COUNTRY,
              language: o.TS.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, a.useEffect)(
            () => (
              n(!0),
              (function (e) {
                return s.A.Initialize(
                  e.GetServiceTransport(),
                  o.iA.is_partner_member,
                );
              })(l)
            ),
            [l],
          ),
          t
            ? (0, a.createElement)(c.V3, {
                context: u,
                serviceTransportOverride: l.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => x, CF: () => S, KM: () => y, KT: () => v });
      var a = n(41735),
        r = n.n(a),
        s = n(58632),
        i = n.n(s),
        o = n(90626),
        c = n(20194),
        l = n(75233),
        u = n(17720),
        d = n(68797),
        p = n(78327),
        g = n(56545),
        m = n(37735),
        h = n(23809),
        f = n(7860);
      const _ = "nicknames";
      function y(e) {
        const t = (0, h.KV)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (p.iA.logged_in) {
                const n = g.w.Init(m.dN),
                  a = (await m.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const I = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                const s = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        b = "avatarandpersonas";
      function v(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [b, e],
          queryFn: () => I.load(e),
        });
        return [t, n];
      }
      function x(e) {
        const t = (0, l.jE)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [b, e],
            queryFn: async () => {
              const n = await I.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [b, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
      function S(e) {
        return f.L.getQueryData([b, e]);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => y, iN: () => I, yk: () => b });
      var a = n(34629),
        r = n(7850),
        s = n(75844),
        i = n(65946),
        o = n(90626),
        c = n(22837),
        l = n(2160),
        u = n(63556),
        d = n(95695),
        p = n.n(d),
        g = n(52038),
        m = n(61859),
        h = n(91675),
        f = n(73745),
        _ = n(32754);
      let y = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: s,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              (0, r.jsx)(
                "option",
                { value: -1, children: (0, m.we)("#language_selection_none") },
                "langpicker_unset",
              ),
            );
          let i = new Array();
          const o = this.props.realms || [l.TU.k_ESteamRealmGlobal];
          for (const e of m.A0.GetLanguageListForRealms(o)) {
            if (t && !t(e)) continue;
            const n = (0, c.Lg)(e),
              a = (0, m.we)("#Language_" + n),
              r = !(!s || !s(e));
            i.push({ eLang: e, sLocName: a, bSupported: r });
          }
          i.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of i) {
            t.bSupported != u &&
              (e.push(
                (0, r.jsx)(
                  "option",
                  {
                    className: p().SupportedGroupLabel,
                    disabled: !0,
                    children: (0, m.we)(
                      t.bSupported
                        ? "#LanguageGroup_Supported"
                        : "#LanguageGroup_Unsupported",
                    ),
                  },
                  t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                ),
              ),
              (u = t.bSupported));
            const s = n && n(t.eLang),
              i = a && a(t.eLang);
            let o = t.sLocName;
            i &&
              0 !== i &&
              ((o += " "),
              (o += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(i) + " @ " + (0, h.KC)(i, { bForce24HourClock: !1 }),
              ))),
              e.push(
                (0, r.jsx)(
                  "option",
                  {
                    value: t.eLang,
                    className: (0, g.A)(
                      { [p().LanguageWithContent]: s },
                      t.bSupported
                        ? p().SupportedLanguage
                        : p().UnsupportedLanguage,
                    ),
                    children: o,
                  },
                  "langpicker" + t.eLang + (s ? "_hasdata" : ""),
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: n } = this.props;
          let a = Number.parseInt(e.currentTarget.value);
          a != n && t && t(a);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return (0, r.jsx)(_.he, {
            toolTipContent: n,
            children: (0, r.jsx)("select", {
              value: e,
              onChange: this.OnLanguageChange,
              disabled: t,
              children: a,
            }),
          });
        }
      };
      function I(e) {
        const [t, n] = (0, i.q3)(() => [
          u.O.Get().GetHasLocalizationContext(),
          u.O.Get().GetCurEditLanguage(),
        ]);
        return (0, r.jsx)(y, {
          selectedLang: n,
          fnLangHasData: u.O.Get().BHasLanguageData,
          fnOnLanguageChanged: u.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function b(e) {
        const { fnLangHasData: t } = e;
        o.useEffect(
          () => (
            u.O.Get().SetHasLocalizationContext(!0),
            () => u.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, i.q3)(() => {
          const e = [];
          for (let n = 0; n < 31; ++n) e[n] = !(!t || !t(n));
          return e;
        });
        return (
          o.useEffect(() => u.O.Get().SetHasLanguage(n), [n]),
          (0, r.jsx)(r.Fragment, {})
        );
      }
      (0, a.Cg)([f.oI], y.prototype, "OnLanguageChange", null),
        (y = (0, a.Cg)([s.PA], y));
    },
    94011: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => i });
      var a = n(7850),
        r = n(61859),
        s = n(35050);
      function i() {
        return (0, a.jsx)("div", {
          className: s.bordered_live_stream_icon,
          children: (0, r.we)("#home_page_live_broadcast"),
        });
      }
    },
    72860: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var a = n(47911),
        r = n(71420),
        s = n(55963),
        i = n(70300),
        o = n(81393),
        c = n(56011),
        l = n(61336);
      function u(e, t, n, u, d, p) {
        if (!n) return;
        if (!(0, i.nz)(e.item_type))
          return void (0, o.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const g = (0, s.wJ)(`${(0, r._)(e, u)}${d ? `?${d}` : ""}`, t);
        return {
          onClick: (e) => {
            let t = (0, c.uX)(e) || window;
            p
              ? p(e)
              : g.startsWith("steam://") || (t.location.href = (0, l.NT)(g));
          },
          onOKActionDescription: a.Z.Localize("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, t, n) => {
      "use strict";
      n.d(t, { nz: () => s, oj: () => i });
      var a = n(7850),
        r = n(29379);
      function s(e) {
        return 2 == e ? "bundle" : 1 == e ? "sub" : "app";
      }
      const i = (e) => {
        const { appid: t } = e,
          n = (0, a.jsx)("div", {
            className: "ImpressionTrackedElement",
            children: e.children,
          });
        return t ? (0, a.jsx)(r.A, { appID: t, children: n }) : n;
      };
    },
    36814: (e, t, n) => {
      "use strict";
      n.d(t, { XC: () => p });
      var a = n(7850),
        r = n(90626),
        s = n(12155),
        i = n(52038);
      n(13871);
      function o(e, t, n, a) {
        r.useEffect(() => {
          const r = (r) => {
            r.key === e &&
              (t(r), n && r.preventDefault(), a && r.stopPropagation());
          };
          return (
            document.addEventListener("keydown", r),
            () => document.removeEventListener("keydown", r)
          );
        }, [e, t, n, a]);
      }
      var c = n(9154),
        l = n(39449),
        u = n.n(l),
        d = n(61859);
      function p() {
        const [e, t] = r.useState(void 0),
          n = r.useCallback(() => t(void 0), []),
          s = (0, a.jsx)(c.EN, {
            active: void 0 !== e,
            children: (0, a.jsx)(g, { closeModal: n, rgImageURL: e }),
          });
        return [t, s];
      }
      function g(e) {
        const { closeModal: t, rgImageURL: n } = e,
          [s, i] = r.useState(0),
          o = n?.length ?? 0,
          l = r.useCallback(() => {
            i(0 == s ? o - 1 : s - 1);
          }, [s, o]),
          p = r.useCallback(() => {
            i(n && s + 1 >= o ? 0 : s + 1);
          }, [s, n, o]);
        return (0, a.jsxs)(c.eV, {
          title: (0, d.we)("#SaleTech_Screenshot_Viewer"),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: t,
          bHideCloseIcon: !0,
          modalClassName: u().PopupScreenshotModal,
          children: [
            (0, a.jsx)(m, {
              index: s,
              numElements: n?.length || 0,
              fnForward: p,
              fnBackwards: l,
              fnClose: t,
              bCircular: !0,
            }),
            (0, a.jsx)("div", {
              className: u().PopupScreenshotContainer,
              children: (0, a.jsx)("img", {
                className: u().PopupScreenshot,
                src: n?.[s],
              }),
            }),
          ],
        });
      }
      function m(e) {
        const {
          index: t,
          numElements: n,
          fnForward: r,
          fnBackwards: c,
          fnClose: l,
          bCircular: d,
        } = e;
        o("ArrowLeft", () => c?.(), !0, !0),
          o("Left", () => c?.(), !0, !0),
          o("ArrowRight", () => r?.(), !0, !0),
          o("Right", () => r?.(), !0, !0),
          o("Escape", () => l && l(), !0, !0),
          o("Esc", () => l && l(), !0, !0);
        let p = n > 1;
        return (0, a.jsxs)("div", {
          className: u().ButtonCtn,
          children: [
            p &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: (0, i.A)(
                      u().ButtonIcon,
                      0 !== t || d ? null : u().Disabled,
                    ),
                    onClick: c,
                    children: (0, a.jsx)(s.V5W, { angle: 270 }),
                  }),
                  (0, a.jsx)("div", {
                    className: (0, i.A)(
                      u().ButtonIcon,
                      t !== n - 1 || d ? null : u().Disabled,
                    ),
                    onClick: r,
                    children: (0, a.jsx)(s.V5W, { angle: 90 }),
                  }),
                ],
              }),
            (0, a.jsx)("div", {
              className: u().ButtonIcon,
              onClick: l,
              children: (0, a.jsx)(s.X, {}),
            }),
          ],
        });
      }
    },
    54492: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => l });
      var a = n(7850),
        r = n(39777),
        s = n(91822),
        i = n(52038),
        o = n(78327),
        c = n(58855);
      function l(e) {
        const { bAllowOutsideOfDeck: t } = e;
        return (0, o.Qn)() || t ? (0, a.jsx)(u, { ...e }) : null;
      }
      function u(e) {
        const { className: t, id: n } = e,
          o = (0, r.qI)(n),
          [l, u] = (0, s.FD)();
        let d = "unknown";
        if (2 == u)
          switch (o.data?.steam_os_compat_category) {
            case 2:
              d = "steamoscompatible";
              break;
            case 1:
              d = "steamosunsupported";
              break;
            case 0:
              d = "steamosunknown";
          }
        else
          switch (o.data?.steam_deck_compat_category) {
            case 3:
              d = "verified";
              break;
            case 2:
              d = "playable";
              break;
            case 1:
              d = "unsupported";
          }
        return (0, a.jsx)("div", {
          className: (0, i.A)(c.CompatIcon, "ds_steam_deck_compat", d, t),
        });
      }
    },
    26296: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => l, o: () => c });
      var a = n(7850),
        r = n(90626),
        s = n(61859),
        i = n(67523),
        o = n(41951);
      function c(e) {
        const {
            className: t,
            srcs: n,
            lazyLoad: s,
            width: i,
            height: o,
            alt: c,
            crossOrigin: l,
          } = e,
          [u, d] = r.useState(n.length),
          [p, g] = r.useState(0);
        r.useEffect(() => {
          u != n.length && (d(n.length), g(0));
        }, [u, n.length]);
        const m = r.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[p]),
            p + 1 < e.srcs.length && g(p + 1);
        }, [p, e]);
        return 0 == n.length
          ? null
          : (0, a.jsx)("img", {
              className: t,
              src: n[p],
              crossOrigin: l,
              onError: m,
              loading: s ? "lazy" : void 0,
              width: i,
              height: o,
              alt: c,
            });
      }
      function l(e) {
        const [t, n] = r.useState(!1),
          {
            className: c,
            src: l,
            lazyLoad: u,
            width: d,
            height: p,
            alt: g,
            crossOrigin: m,
          } = e;
        return t
          ? (0, a.jsxs)("div", {
              className: i.ErrorDiv,
              children: [
                (0, a.jsx)("p", {
                  children: (0, s.we)("#Image_ErrorTitle", l),
                }),
                (0, a.jsx)("ul", {
                  children: (0, a.jsx)("li", {
                    children: (0, s.we)("#Image_Error_msg1"),
                  }),
                }),
                (0, a.jsx)("p", {
                  children: (0, s.we)("#Image_Error_suggestion"),
                }),
              ],
            })
          : (0, a.jsx)(o.o, {
              className: c,
              src: l,
              onError: () => n(!0),
              crossOrigin: m,
              loading: u ? "lazy" : void 0,
              width: d,
              height: p,
              alt: g,
            });
      }
    },
    41951: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => g });
      var a = n(7850),
        r = n(90626),
        s = n(12155),
        i = n(52038),
        o = n(36814),
        c = n(10224),
        l = n(21038);
      const u = 1.3,
        d = 3,
        p = 256;
      function g(e) {
        const [t, n] = (0, r.useState)(!1),
          [g, m] = (0, r.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          h = (0, r.useRef)(null),
          [f, _] = (0, o.XC)();
        return (
          (0, r.useEffect)(() => {
            if (
              g.naturalWidth > g.displayWidth * u &&
              g.naturalHeight > g.displayHeight * u &&
              g.naturalWidth > p
            ) {
              g.naturalWidth / g.naturalHeight < d && n(!0);
            }
          }, [g]),
          t
            ? (0, a.jsxs)("span", {
                className: l.PreviewCtn,
                children: [
                  _,
                  (0, a.jsx)("span", {
                    className: l.SVG,
                    children: (0, a.jsx)(s.YNO, {}),
                  }),
                  (0, a.jsx)("img", {
                    ...e,
                    className: (0, i.A)({
                      ...(e.className && { [e.className]: !0 }),
                    }),
                    onClick: (t) => {
                      e.src && f([e.src]);
                    },
                  }),
                ],
              })
            : (0, a.jsx)("img", {
                ...e,
                ref: h,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, c.c5)()) {
                    const {
                      naturalWidth: t,
                      naturalHeight: n,
                      width: a,
                      height: r,
                    } = e.currentTarget;
                    m({
                      naturalWidth: t,
                      naturalHeight: n,
                      displayWidth: a,
                      displayHeight: r,
                    });
                  }
                },
              })
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => m, pn: () => f, qx: () => h });
      var a = n(7850),
        r = n(16676),
        s = n(61859),
        i = n(12155),
        o = n(90626),
        c = n(52038),
        l = n(95695),
        u = n(84811),
        d = n(64734),
        p = n(65946),
        g = n(26408);
      function m(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: r,
            toggleMinimized: s,
            className: i,
            children: o,
            elAdditionalButtons: m,
          } = e,
          h = (0, p.q3)(() => r());
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: (0, c.A)(
                i,
                d.SectionTitleHeader,
                d.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: (0, c.A)(
                    l.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, a.jsx)(g.o, { tooltip: n })],
                }),
                (0, a.jsxs)("div", {
                  className: d.SectionTitleButtons,
                  children: [
                    m,
                    (0, a.jsx)(f, { bIsMinimized: h, fnToggleMinimize: s }),
                  ],
                }),
              ],
            }),
            !h && (0, a.jsx)(u.tH, { children: o }),
          ],
        });
      }
      function h(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return (0, a.jsx)(m, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function f(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, a.jsx)(r.$n, {
          "data-tooltip-text": (0, s.we)(o),
          onClick: n,
          children: e.bIsMinimized
            ? (0, a.jsx)(i.hz4, {})
            : (0, a.jsx)(i.Xjb, {}),
        });
      }
    },
  },
]);
