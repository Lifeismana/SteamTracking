/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9352],
  {
    78430: (e) => {
      e.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
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
      n.d(t, { YA: () => d, p: () => c, qh: () => l });
      var a = n(37085),
        r = n(20194),
        i = n(41735),
        s = n.n(i),
        o = n(78327);
      function l() {
        const e = (0, r.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${o.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await s().get(e);
            return 200 == t?.status && t.data?.success == a.R
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function c(e) {
        const t = l();
        return t?.find((t) => t.id == e);
      }
      function d(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    5695: (e, t, n) => {
      "use strict";
      n.d(t, { DP: () => l, Gb: () => o, iS: () => d, sM: () => c });
      var a = n(7850),
        r = n(78430),
        i = n.n(r),
        s = n(6083);
      function o(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, a.jsx)(l, { text: t, regExp: /\r\n|\r|\n/ })
          : "";
      }
      function l(e) {
        const { text: t, regExp: n } = e;
        if (!t) return (0, a.jsx)(a.Fragment, {});
        const r = t.split(n);
        return (0, a.jsx)("div", {
          className: i().FeedbackText,
          children: r.map((e, t) =>
            (0, a.jsxs)(
              "span",
              { children: [e, t < r.length - 1 && (0, a.jsx)("br", {})] },
              t,
            ),
          ),
        });
      }
      function c(e) {
        return Number.parseInt(e.getValue()) ? "yes" : "no";
      }
      function d(e) {
        const t = Number.parseInt(e.getValue());
        return (0, s.D)(t);
      }
    },
    2516: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => r });
      var a = n(9161);
      function r(e, t, n) {
        const r = [],
          i = n.map((e) => e.header);
        r.push(i);
        for (const e of t) {
          const t = [];
          for (const a of n) {
            const n = e[a.accessorKey];
            t.push(null != n ? n.toString() : "");
          }
          r.push(t);
        }
        a.g.WriteCSVToFile(r, e);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => m,
        UA: () => g,
        Yd: () => y,
        qG: () => f,
        rN: () => h,
        vh: () => p,
      });
      var a = n(34629),
        r = n(41735),
        i = n.n(r),
        s = n(90626),
        o = n(22837),
        l = n(37085),
        c = n(68797),
        d = n(78327),
        u = n(6419);
      function m() {
        return d.TS.EUNIVERSE == o.Rv ? 12 : 1;
      }
      class _ {
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
            const n = d.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: (0, d.KC)(),
                searchtext: e,
                origin: self.origin,
              },
              r = await i().get(n, { params: a });
            200 == r?.status && r?.data?.success == l.R
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      d.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, c.H)(e);
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
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, d.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e));
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
        const [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              _.Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function g(e) {
        const [t, n] = s.useState(() => _.Get().GetPartnerInfo(e));
        return (
          s.useEffect(() => {
            !_.Get().BHasPartnerInfoLoad(e) && e > 0
              ? _.Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : _.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(_.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function h() {
        return { fnFindPartnerByName: _.Get().FindPartnerByName };
      }
      function y(e) {
        return _.Get().GetPartnerInfo(e);
      }
      function f(e) {
        return _.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([u.o], _.prototype, "FindPartnerByName", null);
    },
    21711: (e, t, n) => {
      "use strict";
      n.d(t, {
        Gl: () => g,
        N6: () => h,
        PQ: () => p,
        Z4: () => y,
        fI: () => f,
      });
      var a = n(41735),
        r = n.n(a),
        i = n(90626),
        s = n(20194),
        o = n(75233),
        l = n(37085),
        c = n(78327),
        d = n(29233),
        u = n(62490);
      class m {
        m_mapPartnerToContactInfo = new Map();
        m_mapPromisePartnerLoading = new Map();
        async FetchValvePartnerContacts(e) {
          const t =
              c.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
            n = { sessionid: (0, c.KC)(), strPartnerIDs: e.join(",") },
            a = await r().get(t, { params: n, withCredentials: !0 });
          return 200 == a?.status && a?.data.success == l.R
            ? (a.data.contacts.forEach((e) => {
                this.m_mapPartnerToContactInfo.has(e.partnerid) ||
                  this.m_mapPartnerToContactInfo.set(e.partnerid, []),
                  this.m_mapPartnerToContactInfo.get(e.partnerid).push(e);
              }),
              a.data.contacts)
            : [];
        }
        async LoadValvePartnerContact(e) {
          return e
            ? this.m_mapPartnerToContactInfo.has(e)
              ? this.m_mapPartnerToContactInfo.get(e)
              : (this.m_mapPromisePartnerLoading.has(e) ||
                  this.m_mapPromisePartnerLoading.set(
                    e,
                    this.InternalLoadValvePartnerContact(e),
                  ),
                this.m_mapPromisePartnerLoading.get(e))
            : [];
        }
        async InternalLoadValvePartnerContact(e) {
          return this.FetchValvePartnerContacts([e]);
        }
        async InternalLoadMultiplePartnerContact(e) {
          return this.FetchValvePartnerContacts(e);
        }
        GetPartnerContact(e) {
          return this.m_mapPartnerToContactInfo.get(e);
        }
        GetPartnerContactAccountsByFilter(e, t, n) {
          const a = this.m_mapPartnerToContactInfo.get(e);
          if (a?.length > 0) {
            const e = a
              .filter((e) => !e.appid || e.appid == t)
              .filter(
                (e) =>
                  !n ||
                  "any" == n ||
                  ("business" == n && e.is_business_contact) ||
                  ("tech" == n && e.is_tech_contact),
              )
              .map((e) => new d.b2(e.steamid).GetAccountID());
            return u.Ew(e);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return (
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        Init() {
          const e = (0, c.Fd)(
            "partner_valve_contact_list",
            "application_config",
          );
          e &&
            e.forEach((e) => {
              this.m_mapPartnerToContactInfo.has(e.partnerid)
                ? this.m_mapPartnerToContactInfo.get(e.partnerid).push(e)
                : this.m_mapPartnerToContactInfo.set(e.partnerid, [e]);
            });
        }
      }
      function _(e) {
        return ["PartnerValveContactByPartnerID", e];
      }
      function p(e, t) {
        return e.prefetchQuery({
          queryKey: _(t),
          queryFn: async () => m.Get().LoadValvePartnerContact(t),
        });
      }
      function g(e) {
        return m.Get().GetPartnerContact(e);
      }
      function h(e, t, n) {
        return m.Get().GetPartnerContactAccountsByFilter(e, t, n);
      }
      function y(e, t, n) {
        const [a, r] = (0, i.useState)(null),
          o = (function (e) {
            const { data: t, isLoading: n } = (0, s.I)({
              queryKey: _(e),
              queryFn: async () => m.Get().LoadValvePartnerContact(e),
            });
            return n ? null : t;
          })(e);
        return (
          (0, i.useEffect)(() => {
            o && r(m.Get().GetPartnerContactAccountsByFilter(e, t, n));
          }, [o, t, n, e]),
          a
        );
      }
      function f(e) {
        const t = (0, o.jE)();
        return (0, s.I)({
          queryKey: ["multiloadpartnerconatact", ...(e || [])],
          queryFn: async () => {
            const n = await m.Get().InternalLoadMultiplePartnerContact(e);
            return (
              e.forEach((e) => {
                const a = n.filter((t) => t.partnerid == e);
                t.setQueryData(_(e), a);
              }),
              n
            );
          },
          enabled: Boolean(e && e.length > 0),
        });
      }
    },
    79821: (e, t, n) => {
      "use strict";
      n.d(t, { Kl: () => a, Yj: () => l, iH: () => r, zV: () => c });
      const a = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        r = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        i = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      a.filter((e) => !i.includes(e));
      let s;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (s || (s = o(a)), s);
      }
      function l(e, t = null, n = " ") {
        const a = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(a, n);
      }
      function c(e, t = null, n = "") {
        const a = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(a, "gi"), n);
      }
    },
    17267: (e, t, n) => {
      "use strict";
      n.d(t, { zU: () => b, z5: () => y });
      var a = n(12611),
        r = n(7221),
        i = n(22837),
        s = n(37085),
        o = n(3577),
        l = n(34214),
        c = n(17720),
        d = n(81393),
        u = n(68797),
        m = n(82817),
        _ = n(66418),
        p = (n(7850), n(90626));
      function g(e, t) {
        return `${e}/${t}`;
      }
      const h = p.createContext({});
      new RegExp(
        `${a.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
        "gi",
      );
      function y(e, t, n = 0) {
        return f(e, t, n, p.useContext(h));
      }
      function f(e, t, n = 0, r) {
        if (!e || 0 == e.length) return null;
        if (e?.startsWith(a.lw)) return b.ReplacementTokenToClanImageURL(e);
        if (e?.startsWith(a.eg)) {
          const i = b.GetBaseURL(),
            s = e.substring(a.eg.length + 1),
            o = parseInt(s.substring(0, s.indexOf("/"))),
            l = s.substring(s.indexOf("/") + 1),
            c = b.GenerateURLFromHashAndExt(o, l);
          if (!1 === r?.[g(o, l)]) return c;
          const d = b
            .GetLocalizedClanImageFileNames(l, t)
            .map((e) => i + o + "/" + e + "?t=" + n);
          return d.push(c), d;
        }
        return e;
      }
      const b = {
        GetBaseURL: () => `${_.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${_.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(a.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, m.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GetLocalizedClanImageFileNames(e, t) {
          if (null == t) return [];
          const n = this.GetHashFromHashAndExt(e),
            a = this.GetExtStringFromHashAndExt(e),
            r = [n + "/" + (0, i.LgB)(t) + a];
          return (
            t == i.Pn1 && r.push(n + "/" + (0, i.x6o)((0, i.LgB)(t)) + a), r
          );
        },
        GenerateURLFromHashAndExt(e, t, n = r.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, t, n, i.xPp, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, t, n = r.wI.full, a, s) {
          e instanceof c.b && (e = e.GetAccountID());
          let o = this.GetBaseURL();
          const l = null != a && a != i.xPp;
          if (n != r.wI.full || l) {
            let r = t.substring(t.lastIndexOf(".")),
              c = t.substring(0, t.length - r.length);
            return l && a != i.Bhc && "localized_image_group" == s
              ? o + e + "/" + c + "/" + (0, i.x6o)((0, i.LgB)(a)) + r
              : o + e + "/" + c + n + r;
          }
          return o + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, n) {
          let a =
            _.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return n && (a += "&lang=" + n), a;
        },
        GetMimeType: (e) => (0, m.ab)(e),
        async AsyncGetImageResolution(e, t, n, a, r) {
          const i = t + this.GetExtensionString({ file_type: n }),
            s = this.GenerateEditableURLFromHashAndExt(e, i);
          return await this.AsyncGetImageResolutionInternal(s, a, r);
        },
        async AsyncGetImageResolutionInternal(e, t, n) {
          const a = (0, o.x0)();
          let r,
            i = new Image();
          (i.crossOrigin = "anonymous"),
            (i.onerror = (t) => {
              const r = { success: s.zi };
              n ||
                ((r.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, u.H)(t).strErrorMsg),
                console.error(r.err_msg)),
                (r.success = s.zi),
                a.resolve(r);
            }),
            (i.onload = () => {
              const t = { success: s.zi };
              if (
                ((t.width = i.width),
                (t.height = i.height),
                !(i.width > 0 && i.height > 0))
              )
                return (
                  (0, d.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + e,
                  ),
                  (t.err_msg = "No resolution reported for url " + e),
                  void a.resolve(t)
                );
              (t.success = s.R), a.resolve(t);
            }),
            (i.src = e),
            t.token.promise.catch(() => {
              (i.onload = () => {}),
                (i.onerror = () => {}),
                a.resolve({ success: s.e9 });
            });
          const l = new Promise((e, t) => {
            r = setTimeout(() => t(), 1e4);
          });
          let c;
          try {
            c = await Promise.race([l, a.promise]);
          } catch {
            c = { success: s._3, err_msg: "We timed out processing images" };
          } finally {
            clearTimeout(r);
          }
          return c;
        },
        BIsClanImageVideo: (e) =>
          e.file_type == l.bg.nn || e.file_type == l.bg.pJ,
      };
    },
    7221: (e, t, n) => {
      "use strict";
      n.d(t, { pb: () => r, wI: () => a });
      var a;
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(a || (a = {}));
      const r = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
    },
    25086: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => l });
      n(7850);
      var a = n(90626);
      const r = (0, a.createContext)(!1);
      const i = Intl.DateTimeFormat().resolvedOptions().timeZone,
        s =
          "document" in globalThis
            ? document.cookie
                .split(";")
                .find((e) => e.trim().startsWith("timezoneName"))
                ?.split("=")[1]
            : void 0,
        o = s && decodeURIComponent(s);
      function l() {
        return (0, a.useContext)(r) ? i : (o ?? i);
      }
      "document" in globalThis &&
        (document.cookie = `timezoneName=${i};expires=${new Date(Date.now() + 31536e6).toUTCString()};path=/;Secure;SameSite=None;`);
    },
    65954: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      var a = n(22837),
        r = n(66418);
      const i = () => (r.TS.EUNIVERSE === a.Rv ? 2581 : 45267781);
    },
    78132: (e, t, n) => {
      "use strict";
      n.d(t, {
        Lc: () => f,
        Mr: () => B,
        _t: () => v,
        ee: () => y,
        hh: () => m,
        mG: () => g,
        my: () => _,
        rF: () => S,
      });
      var a = n(63668),
        r = n(25086),
        i = n(20194),
        s = n(65954),
        o = n(14771),
        l = n(65946),
        c = n(91675),
        d = n(87937),
        u = n.n(d);
      const m = "America/Los_Angeles";
      function _(e, t) {
        return (0, i.I)(
          (function (e, t) {
            return {
              queryKey: p(e, t),
              queryFn: () => (0, a.t3)(t),
              enabled: (0, s.H)() == e,
              staleTime: 10 * o.Kp.PerMinute,
            };
          })(e, t),
        );
      }
      const p = (e, t) => ["useMeetSteamGetAvailability", e, t];
      function g(e, t, n) {
        return (0, i.I)(
          (function (e, t, n) {
            return {
              queryKey: h(e, t, n),
              queryFn: async () => {
                const e = await (0, a.vd)(t);
                return e ? JSON.parse(e) : {};
              },
              enabled: (0, s.H)() == e && !!n,
            };
          })(e, t, n),
        );
      }
      const h = (e, t, n) => ["useMeetSteamGetRegistrationDetails", e, t, n];
      function y(e) {
        return (0, i.I)(
          (function (e) {
            return {
              queryKey: ["MeetSteamRegistrantInfo", e],
              queryFn: () => (0, a.Nc)(),
              enabled: !!e,
              staleTime: 10 * o.Kp.PerMinute,
            };
          })(e),
        );
      }
      function f(e, t) {
        return (0, i.I)(
          (function (e, t) {
            return {
              queryKey: ["useMeetSteamQRCode", e, t],
              queryFn: () => (0, a.EI)(e, t),
              enabled: !!t && !0,
              staleTime: 10 * o.Kp.PerMinute,
            };
          })(e, t),
        ).data?.qrcode;
      }
      function b(e, t = Intl.DateTimeFormat().resolvedOptions().timeZone) {
        return "in_person" === e.location_type
          ? (e.in_person_time_zone ?? m)
          : t;
      }
      function v(e) {
        const t = (0, r.B)();
        return (0, l.q3)(() => ({
          rtime_start: e.rtime_start,
          rtime_end: e.rtime_end,
          sDisplayTimeZone: b(e, t),
        }));
      }
      function S(e, t) {
        const n = (function (e, t) {
            const n = u().unix(e),
              a = u().unix(e).tz(t).utcOffset() - n.utcOffset();
            return new Date(1e3 * (e + 60 * a));
          })(e, t),
          a = new Date();
        return n.getFullYear() == a.getFullYear() ? (0, c.$w)(n) : (0, c._9)(n);
      }
      function B(e, t, n, a) {
        const r = u().unix(e),
          i = u().unix(e).tz(n).utcOffset() - r.utcOffset(),
          s = u().unix(t),
          o = u().unix(t).tz(n),
          l = o.utcOffset() - s.utcOffset();
        return (
          (0, c.Vx)(e + 60 * i, t + 60 * l, !0) + (a ? "" : " " + o.format("z"))
        );
      }
    },
    63668: (e, t, n) => {
      "use strict";
      n.d(t, {
        t3: () => u,
        EI: () => g,
        Nc: () => p,
        vd: () => _,
        _V: () => m,
        kR: () => h,
      });
      var a = n(66418);
      const r = "meetsteam/availability",
        i = "meetsteam/registrations",
        s = "meetsteam/registrationdetails",
        o = "meetsteam/updateregistration",
        l = "meetsteam/registrantinfo",
        c = "meetsteam/attendance_qrcode";
      async function d(e, t) {
        const n = new URL(a.TS.STORE_BASE_URL + e);
        for (const [e, a] of Object.entries(t)) n.searchParams.set(e, a);
        const r = await fetch(n, { credentials: "include" });
        if (!r.ok) throw new Error(`${n} answered ${r.status}`);
        return await r.json();
      }
      async function u(e) {
        return (await d(r, { gid: e })).availability ?? [];
      }
      async function m(e) {
        return (await d(i, { gid: e })).registrations ?? [];
      }
      async function _(e) {
        return (await d(s, { gid: e })).strJSONData ?? "";
      }
      async function p() {
        return (
          (await d(l, {})).info ?? { realname: "", email: "", partners: [] }
        );
      }
      async function g(e, t) {
        return await d(c, { gid: e, accountid: String(t) });
      }
      async function h(e) {
        const t = a.TS.STORE_BASE_URL + o,
          n = new URLSearchParams({
            gid: e.gid,
            group_id: String(e.group_id),
            session_id: String(e.session_id),
            guest_count: String(e.guest_count),
            jsondata: e.jsondata,
            skip_email: e.skip_email ? "1" : "0",
          }),
          r = await fetch(t, {
            method: "POST",
            credentials: "include",
            body: n,
          });
        if (!r.ok) throw new Error(`${t} answered ${r.status}`);
        return (await r.json()).success;
      }
    },
    75682: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dp: () => I,
        wz: () => A,
        qX: () => v,
        cD: () => y,
        yX: () => B,
        Q5: () => a,
        Ji: () => i,
        Xs: () => r,
        AH: () => U,
        zF: () => O,
      });
      var a = {};
      n.r(a), n.d(a, { qZ: () => d });
      var r = {};
      n.r(r), n.d(r, { bV: () => u });
      var i = {};
      n.r(i), n.d(i, { mP: () => m });
      var s = n(80613),
        o = n.n(s),
        l = n(89068),
        c = n(56545);
      const d = 0,
        u = 3,
        m = 4;
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.voteid || l.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  active: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  start_time: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_time: { n: 4, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  app_discounts: { n: 5, c: p, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  groups: { n: 7, c: g, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localization: { n: 9, c: h },
                  reveal_time: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  flag: { n: 13, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || l.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  discount: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.groupid || l.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  group_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  app_discounts: { n: 3, c: p, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.title || l.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  title: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  title_linebreak: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.language || l.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  sale_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.votes || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  votes: { n: 1, c: _, r: !0, q: !0 },
                  labor_of_love_winners: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.voteid || l.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  voteid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.sale_appid || l.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.user_votes || l.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { user_votes: { n: 1, c: b, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.voteid || l.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new B();
          return B.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.user_votes || l.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { user_votes: { n: 1, c: b, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = l.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.category_id || l.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new w();
          return w.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new I();
          return I.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.nominations || l.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { nominations: { n: 1, c: w, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || l.Sg(G.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = l.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new G();
          return G.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.category_id || l.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new A();
          return A.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.nominations || l.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { nominations: { n: 1, c: w, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = l.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.category_id || l.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new M();
          return M.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.played_app || l.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  played_app: { n: 1, c: j, r: !0, q: !0 },
                  suggested_events: { n: 2, c: R, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: D, r: !0, q: !0 },
                  debug_query: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new z();
          return z.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appid || l.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  playtime: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new j();
          return j.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.clanid || l.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  clanid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || l.Sg(D.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = l.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new D();
          return D.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.generate_new || l.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  generate_new: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new F();
          return F.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.code || l.Sg(L.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  code: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = l.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            n = new L();
          return L.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var O, U;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t, n) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, c.I8)(y, t, n),
            f,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t, n) {
            return e.SendMsg("StoreSales.SetVote#1", (0, c.I8)(B, t, n), E, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t, n) {
            return e.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, c.I8)(v, t, n),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(O || (O = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t, n) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, c.I8)(I, t, n),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t, n) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, c.I8)(G, t, n),
                T,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t, n) {
              return e.SendMsg(
                "SteamAwards.Nominate#1",
                (0, c.I8)(A, t, n),
                C,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationRecommendations = function (e, t, n) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, c.I8)(M, t, n),
                z,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t, n) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, c.I8)(F, t, n),
                L,
                { ePrivilege: 1 },
              );
            });
        })(U || (U = {}));
    },
    12611: (e, t, n) => {
      "use strict";
      n.d(t, { eg: () => r, lw: () => a });
      const a = "{STEAM_CLAN_IMAGE}",
        r = "{STEAM_CLAN_LOC_IMAGE}";
    },
    62641: (e, t, n) => {
      "use strict";
      n.d(t, {
        CU: () => F,
        ye: () => D,
        DJ: () => P,
        G6: () => O,
        zv: () => T,
        IS: () => M,
        GE: () => A,
        yX: () => C,
        w: () => U,
        EE: () => G,
        lh: () => Q,
        Pm: () => L,
        qR: () => R,
        dm: () => k,
        DU: () => I,
        cB: () => x,
      });
      var a = n(34629),
        r = n(79821),
        i = n(2160),
        s = n(22837),
        o = n(75682),
        l = n(14947);
      const c = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(s.bP9),
        localized_broadcast_left_image: new Array(s.bP9),
        localized_broadcast_right_image: new Array(s.bP9),
        broadcast_whitelist: [],
      };
      var d = n(17720),
        u = n(17267),
        m = n(7221),
        _ = n(27939),
        p = n(97743),
        g = n(81393),
        h = n(61859),
        y = n(25489),
        f = n(27543),
        b = n(41338),
        v = n(14771),
        S = n(6419);
      (0, a.Cg)(
        [S.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      const B = 99999;
      n(19615);
      var E = n(66418);
      s.u0,
        s.zeJ,
        s.Fa4,
        s.Aav,
        s.SRb,
        s.zA,
        s.y6,
        s.hGl,
        s.WNR,
        s.pIh,
        s.izQ,
        s.uYK,
        s.f4X,
        s.zcX,
        s.yhO;
      s.HRy, s.LOv, s.HFK;
      s.Fwr, s.HFK;
      const w = [
        s.L0X,
        s.KDJ,
        s.HRy,
        s.C$4,
        s.zA,
        s.y6,
        s.hGl,
        s.pIh,
        s.izQ,
        s.I5b,
        s.LOv,
        s.WNR,
      ];
      new Set(w);
      const I = 593110;
      s.Fwr, s.HFK;
      var T;
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (e[(e.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(T || (T = {}));
      var G, A, C, M, z, j;
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType"),
          (e[(e.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
            "k_EStoreFilterClauseTypeOptInRegistrationTag");
      })(G || (G = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(A || (A = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(C || (C = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(M || (M = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(z || (z = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(j || (j = {}));
      function R(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function D(e) {
        switch (e) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function F(e, t = !1) {
        return (
          !(
            !e ||
            !(function (e) {
              switch (e) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(e.section_type)
          ) &&
          (t
            ? !!e.sale_tag_filter?.clauses?.length || !!e.smart_section
            : !!e.smart_section && null != e.smart_section_type)
        );
      }
      function L(e) {
        return F(e) ? e?.smart_section_type : void 0;
      }
      const O = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(s.bP9),
        localized_label_image: new Array(s.bP9),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var U;
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(U || (U = {}));
      const P = {
          localized_subtitle: new Array(s.bP9),
          localized_summary: new Array(s.bP9),
          localized_title_image: new Array(s.bP9),
          localized_capsule_image: new Array(s.bP9),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(s.bP9),
          localized_sale_overlay: new Array(s.bP9),
          localized_sale_product_banner: new Array(s.bP9),
          localized_sale_product_mobile_banner: new Array(s.bP9),
          localized_sale_logo: new Array(s.bP9),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...c,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        x = "old_announce_",
        k = 80,
        H = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        q = [s.HRy, s.LOv, s.HFK],
        N = [
          s.L0X,
          s.KDJ,
          s.HRy,
          s.C$4,
          s.zA,
          s.y6,
          s.hGl,
          s.pIh,
          s.izQ,
          s.I5b,
          s.LOv,
          s.WNR,
        ],
        W = [i.TU.k_ESteamRealmGlobal],
        V = [i.TU.k_ESteamRealmChina],
        $ = [i.TU.k_ESteamRealmGlobal, i.TU.k_ESteamRealmChina],
        K = [];
      class Q {
        constructor() {
          (0, l.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new d.b();
        forumTopicGID = void 0;
        clanSteamIDOriginal = void 0;
        type = s.DRF;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        createTime = void 0;
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = T.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = P;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        fnGetLocalizedGroupImages;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new Q(),
            n = JSON.parse(e);
          return (
            Object.assign(t, n),
            (t.name = new Map(n.name)),
            (t.description = new Map(n.description)),
            (t.vecTags = [...(n.vecTags ?? n.tags ?? [])]),
            (t.clanSteamID = new d.b(n.clanSteamID)),
            (0, g.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            n.broadcaster &&
              ((t.broadcaster = new d.b(n.broadcaster)),
              (0, g.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        static FromCClanEventData(e, t) {
          let n = new Q();
          (n.GID = e.gid),
            (n.clanSteamID = new d.b(e.clan_steamid)),
            n.name.set(t, e.event_name ?? ""),
            (n.type = e.event_type),
            (n.appid = e.appid ?? 0),
            (n.startTime = e.rtime32_start_time),
            (n.endTime = e.rtime32_end_time),
            (n.nCommentCount = e.comment_count ?? 0),
            (n.creator_steamid = e.creator_steamid),
            (n.last_update_steamid = e.last_update_steamid),
            (n.jsondata = JSON.parse(e.jsondata ?? "{}")),
            (n.rtime32_last_local_modification = e.rtime32_last_modified),
            e.published
              ? e.hidden
                ? (n.visibility_state = e.unlisted
                    ? T.k_EEventStateUnlisted
                    : T.k_EEventStateStaged)
                : (n.visibility_state = T.k_EEventStateVisible)
              : (n.visibility_state = T.k_EEventStateUnpublished),
            (n.createTime = e.rtime_created),
            (n.m_nBuildID = e.build_id),
            (n.m_strBuildBranch = e.build_branch),
            (n.visibilityStartTime = e.rtime32_visibility_start),
            (n.visibilityEndTime = e.rtime32_visibility_end),
            (n.rtime32_moderator_reviewed = e.rtime_mod_reviewed),
            (n.featured_app_tagid = e.featured_app_tagid),
            e.broadcaster_accountid &&
              (n.broadcaster = d.b.InitFromAccountID(e.broadcaster_accountid)),
            (n.AnnouncementGID = e.announcement_body?.gid ?? "0");
          const a = e.clan_steamid_original;
          return (
            a
              ? (n.clanSteamIDOriginal = new d.b(a))
              : e.announcement_body?.clanid &&
                (n.clanSteamIDOriginal = d.b.InitFromClanID(
                  Number(e.announcement_body.clanid),
                )),
            (n.postTime = e.announcement_body?.posttime),
            (n.forumTopicGID = e.forum_topic_id),
            n.name.set(t, e.announcement_body?.headline ?? ""),
            n.description.set(t, e.announcement_body?.body ?? ""),
            (n.nCommentCount = e.comment_count ?? 0),
            (n.vecTags = [...(e.announcement_body?.tags ?? [])]),
            (n.forumTopicGID = e.announcement_body?.forum_topic_id),
            (n.nVotesUp = e.announcement_body?.voteupcount ?? 0),
            (n.nVotesDown = e.announcement_body?.votedowncount ?? 0),
            n
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.vecTags = Array.from(this.vecTags)),
            (t.tags = t.vecTags),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new Q();
          if (
            ((t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.clanSteamIDOriginal = this.clanSteamIDOriginal),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, n) => {
              t.name.set(n, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, n) => {
              t.description.set(n, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, n) => {
              t.timestamp_loc_updated.set(n, e);
            }),
            (t.createTime = this.createTime ?? 0),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new d.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  H.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let n of t.jsondata.email_setting.sections)
              n.unique_id || ((n.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let n = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (n =
                  void 0 === n
                    ? e.visibility_index
                    : Math.max(n, e.visibility_index));
            }),
            n
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const n of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(n.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart(e = (0, p.Gw)()) {
          let t = 0;
          void 0 !== this.startTime &&
            e >= this.startTime &&
            (t = Math.floor((e - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (t = this.m_overrideCurrentDay);
          const n = this.GetLastReferencedSaleDay() || 0;
          return Math.min(t, n);
        }
        GetNameWithFallback(e) {
          const t = h.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !h.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !h.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const e = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header?.[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : m.pb.includes(e)
                  ? (t = this.fnGetLocalizedGroupImages?.())
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = s.Bhc, n = m.wI.full) {
          const a = this.GetImgArray(e),
            r = a && a.length > t && null != a[t];
          return r && a[t]?.startsWith("http")
            ? a[t]
            : r
              ? u.zU.GenerateURLFromHashAndExt(this.clanSteamID, a[t] ?? "", n)
              : void 0;
        }
        GetImageHash(e, t = s.Bhc) {
          let n = this.GetImgArray(e);
          return n && n.length > t && null != n[t]
            ? n[t].substr(0, n[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = s.Bhc) {
          let n = this.GetImgArray(e);
          return n && n.length > t && null != n[t] ? n[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let n = this.GetImgArray(e);
          return !!n && n.length > t && null != n[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL(e) {
          return this.BHasForumTopicGID()
            ? this.appid
              ? E.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.appid +
                "/eventcomments/" +
                this.forumTopicGID
              : e
                ? E.TS.COMMUNITY_BASE_URL +
                  "groups/" +
                  e +
                  "/eventcomments/" +
                  this.forumTopicGID
                : E.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  this.clanSteamID.ConvertTo64BitString() +
                  "/eventcomments/" +
                  this.forumTopicGID
            : "";
        }
        GetDiscussionURL(e) {
          return this.BHasForumTopicGID()
            ? this.GetForumTopicURL(e)
            : this.GetLegacyAnnouncementCommentsURL();
        }
        GetLegacyAnnouncementCommentsURL() {
          const e = this.clanSteamIDOriginal ?? this.clanSteamID;
          return this.BHasAnnouncementGID() && e && e.BIsValid()
            ? E.TS.COMMUNITY_BASE_URL +
                "gid/" +
                e.ConvertTo64BitString() +
                "/announcements/old_detail/" +
                this.AnnouncementGID
            : "";
        }
        BIsEventInFuture(e = (0, p.Gw)()) {
          return e < (this.startTime ?? 0);
        }
        BHasEventEnded(e = (0, p.Gw)()) {
          return (this.endTime ?? 0) < e;
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, y.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, y.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let n = this.GetDescriptionWithFallback(e);
          if (n) {
            let e = n.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = n.indexOf("[/img]", e);
              if (-1 != t) {
                let a = n.substring(e, t).trim();
                if (0 != a.length)
                  return u.zU.ReplacementTokenToClanImageURL(a);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        BImageNeedScreenshotFallback(e, t) {
          let n = this.GetImageURL(e, t);
          if (!n || 0 == n.length) {
            const a = h.A0.GetELanguageFallback(t);
            t != a && (n = this.GetImageURL(e, a));
          }
          return !n || 0 == n.length;
        }
        GetDescriptionWithFallback(e) {
          const t = h.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t, n = {}) {
          const a = h.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != a && null != this.GetImageURL(e, a)) ||
            (this.appid && n.bAppHasAgeSafeScreenshots) ||
            (!this.appid &&
              n.clanInfo &&
              ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
                n.clanInfo.is_curator))
          );
        }
        BIsVisibleEvent(e = (0, p.Gw)()) {
          let t = Math.floor(e);
          return (
            this.visibility_state == T.k_EEventStateUnlisted ||
            (this.visibility_state == T.k_EEventStateVisible &&
              t > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                t < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == T.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == T.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled(e = (0, p.Gw)()) {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > e ||
              (1575396e3 == this.jsondata.action_end_time && 1606845600 > e))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? h.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            h.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            Q.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            h.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            Q.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return h.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, r.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, r.zV)(e, ["p"], " ")),
              (e = (0, r.zV)(e)),
              (e = (0, b.aX)(e)),
              (0, b.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t?.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(e) {
          if (!e) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (q.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(N.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * v.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e, t = (0, p.Gw)()) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const n = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < n))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            h.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, h.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((e) =>
              d.b.InitFromAccountID(e).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL(e) {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              E.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              E.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? E.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? E.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? E.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, h.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? E.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? E.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : E.TS.STORE_BASE_URL + e.type
              : E.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          return this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
            ? E.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id
            : e
              ? e + "sale/" + this.jsondata.sale_vanity_id
              : E.TS.STORE_BASE_URL +
                "curator/" +
                this.clanSteamID.GetAccountID() +
                "/sale/" +
                this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, n, a, r, i) {
          const s = [],
            o = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let l = 100009;
          return (
            e &&
              s.push({
                ...o,
                section_type: "footer_self_creator_home",
                unique_id: l++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              s.push({
                ...o,
                section_type: "footer_browse_more",
                unique_id: l++,
              }),
            a &&
              s.push(
                this.GenerateDynamicCreatorHomeItemBrowserSection(l++, o, i),
              ),
            n &&
              s.push({
                ...o,
                section_type: "footer_default_social_share",
                unique_id: l++,
              }),
            r &&
              s.push({ ...o, section_type: "nextfest_header", unique_id: l++ }),
            s
          );
        }
        GetSaleSectionIncludingFooterSections(e = 0) {
          const t = this.jsondata?.sale_show_creator,
            n = this.jsondata.sale_browse_more_button,
            a =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            r = this.GetEventType() == s.ajI,
            i = this.BShowNextFestHeader(!0);
          return t || n || a || r || i
            ? [
                ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, i, e),
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!t, !!n, a, r, !1, e),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e, t = 0) {
          if (e > B) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(e) {
          return (
            this.jsondata.sale_sections?.filter((t) => t.section_type == e) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(e) {
          const t = this.jsondata.sale_sections?.length ?? 0;
          if (0 != t)
            for (let n = 0; n < t; ++n)
              if (this.jsondata.sale_sections[n].section_type === e)
                return this.jsondata.sale_sections[n];
        }
        static AccumulateCapsuleListIDs(e, t, n, a) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((a && !a(e.id)) || n.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const n = new Set(e),
            a = new Set();
          return (
            (0, g.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize,
            this.jsondata.tagged_items?.forEach((e) => {
              Q.AccumulateCapsuleListIDs([e.capsule], n, a, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (D(e.section_type))
                Q.AccumulateCapsuleListIDs(e.capsules, n, a, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const r of e.tabs)
                  Q.AccumulateCapsuleListIDs(r.capsules, n, a, t);
            }),
            a
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, f.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, h.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, h.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, h.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, h.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        this.type == s.KDJ)
                    ? (0, h.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, h.we)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion ?? o.Q5.qZ;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === U.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[e]
            : void 0;
        }
        GetIncludedRealmList() {
          const e = this.BInRealmGlobal(),
            t = this.BInRealmChina();
          return (
            (0, g.wT)(
              e || t,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e && t ? $ : e ? W : t ? V : K
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest(e = !1) {
          const t = this.jsondata.sale_vanity_id?.toLowerCase(),
            n = new d.b(this.clanSteamID).GetAccountID();
          return (
            !(!t || n != _.GU) &&
            !!t.startsWith("nextfest") &&
            (!e || (!t.endsWith("preview") && !t.endsWith("press")))
          );
        }
        BShowNextFestHeader(e) {
          return e && E.iA.is_valve_email
            ? this.BIsNextFest(!1)
            : this.BIsNextFest(!0) &&
                !!this.startTime &&
                this.startTime > new Date("2026-03-01").getTime() / 1e3;
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t, n) {
          return {
            ...t,
            section_type: "sale_item_browser",
            unique_id: e,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing: n >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            cap_item_count: 24,
            show_more_count: 48,
            facet_auto_generate_options: {
              only_facets: [
                { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
                { loc_token: "#Sale_Preferences" },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      (0, a.Cg)([l.sH], Q.prototype, "GID", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "AnnouncementGID", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "forumTopicGID", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "type", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "appid", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "name", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "description", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "timestamp_loc_updated", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "startTime", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "endTime", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "visibilityStartTime", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "visibilityEndTime", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "m_nBuildID", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "m_strBuildBranch", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "postTime", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "visibility_state", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "broadcaster", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "jsondata", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "nCommentCount", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "nVotesUp", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "nVotesDown", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "bOldAnnouncement", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "announcementClanSteamID", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "loadedAllLanguages", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "bLoaded", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "deleteInProgress", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "vecTags", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "last_update_steamid", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "rtime32_last_modified", void 0),
        (0, a.Cg)(
          [l.sH],
          Q.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, a.Cg)(
          [l.sH],
          Q.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, a.Cg)([l.sH], Q.prototype, "rtime32_moderator_reviewed", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "video_preview_type", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "video_preview_id", void 0),
        (0, a.Cg)([l.sH], Q.prototype, "m_overrideCurrentDay", void 0);
    },
    38390: (e, t, n) => {
      "use strict";
      n.d(t, { B9: () => m, PB: () => u, RR: () => d, hE: () => _ });
      var a = n(90626),
        r = n(37085),
        i = n(20587),
        s = n(4434),
        o = n(17720),
        l = (n(78327), n(11353), n(20194)),
        c = n(61859);
      n(41735), n(68797);
      function d(e) {
        const [t, n] = (0, a.useState)(() => i.O3.GetClanEventModel(e)),
          r = (0, s.m)("usePartnerEventByEventGID");
        return (
          (0, a.useEffect)(() => {
            e &&
              t?.GID != e &&
              (i.O3.Init(),
              i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                r,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || r.token.reason || n(t[0]);
              }));
          }, [e, t, r]),
          t
        );
      }
      function u(e) {
        const t = (0, s.m)("usePreloadPartnerEventsByEventGID"),
          n = (0, l.I)({
            queryKey: ["PreloadPartnerEventsByEventGID"],
            queryFn: () => (
              i.O3.Init(),
              i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, [], t)
            ),
          });
        return { bIsLoading: n.isLoading, events: n.data };
      }
      function m(e, t, n) {
        const [l, c] = (0, a.useState)(t ? i.O3.GetClanEventModel(t) : void 0),
          [d, u] = (0, a.useState)(!!e && !!t),
          [m, _] = (0, a.useState)(),
          [p, g] = (0, a.useState)(r.R),
          h = (0, s.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, a.useEffect)(() => {
            (async () => {
              try {
                if (l?.GID != t && t && e) {
                  i.O3.Init();
                  const a = o.b.InitFromClanID(e);
                  let s;
                  try {
                    s =
                      await i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        a,
                        t,
                        0,
                        n,
                      );
                  } catch (e) {
                    _(e?.response?.data?.err_msg),
                      g(e?.response?.data?.success || r.zi);
                  }
                  h.token.reason || c(s);
                }
              } finally {
                u(!1);
              }
            })();
          }, [e, t, l, n, h]),
          { eventModel: l, bLoading: d, sErrorMessage: m, eResult: p }
        );
      }
      function _(e) {
        let t = "" + e;
        const n = c.A0.GetELanguageFallback(e);
        return e != n && (t += "_" + n), t;
      }
    },
    30163: (e, t, n) => {
      "use strict";
      n.d(t, { E0: () => u, oE: () => m });
      var a = n(81393),
        r = n(78327),
        i = n(17720),
        s = n(62641),
        o = n(68797),
        l = n(22837),
        c = n(62490);
      function d(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function u(e) {
        return d(e) ? s.cB + e.announcement_body?.gid : e.gid;
      }
      function m(e, t) {
        let n = new s.lh();
        if (
          ((n.clanSteamID = e),
          (0, a.wT)(
            n.clanSteamID && n.clanSteamID.BIsValid(),
            "Invalid Clan SteamID: " +
              n.clanSteamID.ConvertTo64BitString() +
              " " +
              r.TS.EUNIVERSE,
          ),
          (n.GID = u(t)),
          (n.bOldAnnouncement = d(t)),
          (n.appid = t.appid ?? 0),
          (n.createTime = t.rtime_created),
          (n.startTime = t.rtime32_start_time),
          (n.endTime = t.rtime32_end_time),
          (n.visibilityStartTime = t.rtime32_visibility_start),
          (n.visibilityEndTime = t.rtime32_visibility_end),
          (n.loadedAllLanguages = !1),
          (n.type = t.event_type ?? l.DRF),
          (n.nVotesUp = t.votes_up ?? 0),
          (n.nVotesDown = t.votes_down ?? 0),
          (n.comment_type = t.comment_type),
          (n.gidfeature = t.gidfeature),
          (n.gidfeature2 = t.gidfeature2),
          (n.featured_app_tagid = t.featured_app_tagid),
          (n.vecTags = new Array()),
          (n.creator_steamid = t.creator_steamid),
          (n.last_update_steamid = t.last_update_steamid),
          (n.rtime32_last_modified = t.rtime32_last_modified),
          (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
          (n.video_preview_type = t.video_preview_type),
          (n.video_preview_id = t.video_preview_id),
          (n.has_live_stream = t.has_live_stream),
          (n.live_stream_viewer_count = t.live_stream_viewer_count),
          (n.m_nBuildID = t.build_id),
          (n.m_strBuildBranch = t.build_branch),
          t.announcement_body)
        ) {
          let e = t.announcement_body;
          (n.AnnouncementGID = e.gid),
            n.name.set(e.language, e.headline),
            n.description.set(e.language, e.body),
            n.timestamp_loc_updated.clear(),
            (n.forumTopicGID = e.forum_topic_id),
            (n.nCommentCount = e.commentcount),
            (n.postTime = e.posttime),
            n.bOldAnnouncement && !e.hidden && (n.startTime = e.posttime),
            (n.announcementClanSteamID = new i.b(e.clanid)),
            e.tags &&
              e.tags.length > 0 &&
              e.tags.forEach((e) => n.vecTags.push(e)),
            !n.rtime32_last_solr_search_col_updated &&
              n.rtime32_last_modified &&
              ((n.rtime32_last_solr_search_col_updated =
                n.rtime32_last_modified),
              (n.rtime32_last_modified = e.updatetime));
        } else
          (n.AnnouncementGID = "0"),
            (n.forumTopicGID = t.forum_topic_id),
            n.name.clear(),
            n.description.clear(),
            n.timestamp_loc_updated.clear(),
            (n.postTime = t.rtime32_start_time),
            (n.nCommentCount = t.comment_count ?? 0),
            n.name.set(l.Bhc, t.event_name ?? ""),
            n.description.set(l.Bhc, t.event_notes ?? "");
        t.broadcaster_accountid &&
          (n.broadcaster = new i.b(t.broadcaster_accountid));
        const m = s.DJ;
        try {
          n.jsondata = {
            ...m,
            ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
          };
        } catch (e) {
          const t = (0, o.H)(e);
          throw (
            (console.error(
              "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                t.strErrorMsg,
              t,
            ),
            e)
          );
        }
        if (
          ((n.jsondata.localized_capsule_image = (0, c.$Y)(
            n.jsondata.localized_capsule_image || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_title_image = (0, c.$Y)(
            n.jsondata.localized_title_image || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_subtitle = (0, c.$Y)(
            n.jsondata.localized_subtitle || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_summary = (0, c.$Y)(
            n.jsondata.localized_summary || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_broadcast_title = (0, c.$Y)(
            n.jsondata.localized_broadcast_title || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_broadcast_left_image = (0, c.$Y)(
            n.jsondata.localized_broadcast_left_image || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_broadcast_right_image = (0, c.$Y)(
            n.jsondata.localized_broadcast_right_image || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_sale_header = (0, c.$Y)(
            n.jsondata.localized_sale_header || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_sale_overlay = (0, c.$Y)(
            n.jsondata.localized_sale_overlay || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_sale_product_banner = (0, c.$Y)(
            n.jsondata.localized_sale_product_banner || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_sale_product_mobile_banner = (0, c.$Y)(
            n.jsondata.localized_sale_product_mobile_banner || [],
            l.bP9,
            null,
          )),
          (n.jsondata.localized_sale_logo = (0, c.$Y)(
            n.jsondata.localized_sale_logo || [],
            l.bP9,
            null,
          )),
          void 0 !== n.jsondata.sale_num_headers &&
            n.jsondata.localized_per_day_sales_header)
        )
          for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
            n.jsondata.localized_per_day_sales_header[e] = (0, c.$Y)(
              n.jsondata.localized_per_day_sales_header[e],
              l.bP9,
              null,
            );
        return (
          n.jsondata.sale_sections &&
            n.jsondata.sale_sections.forEach((e, t) => {
              e.localized_label &&
                (e.localized_label = (0, c.$Y)(e.localized_label, l.bP9, null)),
                "trailercarousel" === e.section_type &&
                  (e.show_as_carousel = !1),
                (n.jsondata.sale_sections[t] = { ...s.G6, ...e });
            }),
          n.jsondata.email_setting &&
            n.jsondata.email_setting.sections &&
            n.jsondata.email_setting.sections.forEach((e) => {
              void 0 !== e.localized_headline &&
                null !== e.localized_headline &&
                (e.localized_headline = (0, c.$Y)(
                  e.localized_headline,
                  l.bP9,
                  null,
                )),
                void 0 !== e.localized_body &&
                  null !== e.localized_body &&
                  (e.localized_body = (0, c.$Y)(e.localized_body, l.bP9, null)),
                void 0 !== e.localized_image &&
                  null !== e.localized_image &&
                  (e.localized_image = (0, c.$Y)(
                    e.localized_image,
                    l.bP9,
                    null,
                  ));
            }),
          n.jsondata.localized_title_image.forEach((e, t) => {
            if (null != e && "http" == e.substr(0, 4)) {
              let a = e.lastIndexOf("/"),
                r = e.substr(a + 1);
              n.jsondata.localized_title_image[t] = r;
            }
          }),
          (n.bLoaded = !0),
          t.published
            ? t.unlisted
              ? (n.visibility_state = s.zv.k_EEventStateUnlisted)
              : t.hidden
                ? (n.visibility_state = s.zv.k_EEventStateStaged)
                : (n.visibility_state = s.zv.k_EEventStateVisible)
            : (n.visibility_state = s.zv.k_EEventStateUnpublished),
          n
        );
      }
    },
    19615: (e, t, n) => {
      "use strict";
      n.d(t, { Wn: () => i, a4: () => c });
      var a = n(9646),
        r = n(90626);
      n(62641);
      const i = 940,
        s = 1920;
      function o() {
        return window.innerWidth ?? s;
      }
      function l() {
        (0, a.d)();
        const [e, t] = (0, r.useState)(() => o());
        return (
          (0, r.useEffect)(() => {
            const e = () => {
              t(o());
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      }
      function c(e = i) {
        return l() >= e;
      }
      var d;
      !(function (e) {
        (e.Random = "r"), (e.Personalized = "p");
      })(d || (d = {}));
    },
    20587: (e, t, n) => {
      "use strict";
      n.d(t, { ZQ: () => w, O3: () => I, dB: () => G, CO: () => A });
      var a = n(34629),
        r = n(41735),
        i = n.n(r),
        s = n(14947),
        o = n(31561),
        l = n(22837),
        c = n(37085),
        d = n(62641),
        u = n(17720);
      var m = n(62490),
        _ = n(81393),
        p = n(68797),
        g = n(6144),
        h = n(41338),
        y = n(78327),
        f = n(90626),
        b = n(73745),
        v = n(38390),
        S = n(30163),
        B = n(63340);
      class E {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, _.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class w {
        constructor(e = !1) {
          (0, s.Gn)(this), (this.m_bOnlySummary = e);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new g.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let t =
              ((e = "PartnerEventStore"),
              window.StoreDefaults ? window.StoreDefaults[e] : void 0);
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new u.b(e.clan_steamid);
                  const n = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      n,
                    );
                }
              });
            let n = (0, y.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(n) &&
              n.forEach((e) => {
                if (e) {
                  let t = new u.b(e.clan_steamid);
                  const n = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      d.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      n,
                    );
                }
              });
            let a = (0, y.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(a) &&
              a.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              }),
              (this.m_bLoadedFromConfig = !0);
          }
          var e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new g.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, h.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = (0, S.E0)(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new u.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let n = [],
            a = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!a || 0 == a.length) return n;
          for (let e of a) {
            let t = this.GetClanEventModel(e);
            t && n.push(t);
          }
          return n.sort(this.DefaultEventSortFunction), n;
        }
        InsertEventModelFromClanEventData(e, t) {
          const n = (0, S.oE)(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), n.appid, n.GID),
            this.m_mapExistingEvents.set(n.GID, n),
            n.AnnouncementGID &&
              n.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
            n
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, m.$Y)([], l.bP9, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let n = this.m_mapExistingEvents.get(e);
                n && t.push(n);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, n) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(n)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const a = this.m_PendingInfoPromise,
            r = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                n = this.m_rgQueuedEventsUniqueIDs,
                a = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, n, a).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), r();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, r);
          }
          return a;
        }
        async InternalLoadPartnerEventList(e, t, n) {
          let a = n.some((e) => e);
          const r =
              y.TS.STORE_BASE_URL +
              (a
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            s = (0, v.hE)((0, l.sfN)(y.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: s,
              origin: self.origin,
            };
          try {
            const e = await i().get(r, { params: o, withCredentials: a });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, n, a, r, i, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            n,
            a,
            r,
            i,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, n, a, r, i, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            n,
            a,
            r,
            i,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, n, a, r, i, s) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                n,
                a,
                r,
                i,
                s,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                n,
                a,
                r,
                i,
                s,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, n, a, r, o, d, m) {
          let g = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              n = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    g.push(this.m_mapExistingEvents.get(t));
                } else n.push(e);
              }),
              n.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  n,
                  m,
                )
              ).forEach((e) => g.push(e));
            }
          } else {
            let h =
              y.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const f = (0, v.hE)((0, l.sfN)(y.TS.LANGUAGE));
            d?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, _.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (d.only_summaries = void 0));
            let b = {
              clan_accountid: n ? n.GetAccountID() : void 0,
              appid: a,
              count_before: r,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: f,
              rtime_oldestevent: d ? d.rtime_oldestevent : void 0,
              require_tags:
                d && d.require_tags ? d.require_tags.join(",") : void 0,
              exclude_tags:
                d && d.exclude_tags ? d.exclude_tags.join(",") : void 0,
              require_no_tags: d ? d.require_no_tags : void 0,
              event_type_filter:
                d && d.event_type_filter
                  ? d.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                d && d.exclude_event_types
                  ? d.exclude_event_types.join(",")
                  : void 0,
              only_summaries: d && !!d.only_summaries,
              origin: self.origin,
            };
            try {
              let r = await i().get(h, { params: b, cancelToken: m?.token });
              if (r?.data?.success == c.R)
                (0, s.h5)(() => {
                  for (let e of r.data.events) {
                    let t = (0, S.E0)(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new u.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(n || t, e);
                    }
                    g.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == g.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        g.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && g.push(e);
                    }
                });
              else {
                let e = (0, p.H)(r?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    a +
                    " clanAccount:" +
                    (n ? n.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, p.H)(e);
              t.errorCode != c.e9 &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    a +
                    " clanAccount:" +
                    (n ? n.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return g;
        }
        async LoadPartnerEventsPageable(e, t, n = 0, a = 0, r) {
          let o = new Array(),
            l = y.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            c = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: n,
              count: a,
              l: y.TS.LANGUAGE,
              origin: self.origin,
              exclude_tags: r && r.length > 0 ? r?.join(",") : void 0,
            };
          try {
            let e = await i().get(l, { params: c });
            (0, s.h5)(() => {
              for (let t of e.data.events) {
                let e = (0, S.E0)(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new u.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                o.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, p.H)(e).strErrorMsg,
            );
          }
          return o;
        }
        async GetBestEventsForCurrentUser(e, t, n) {
          let a = new Array(),
            r = {
              l: y.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = y.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await i().get(o, {
              params: r,
              withCredentials: !0,
              cancelToken: n ? n.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, s.h5)(() => {
              for (let e of l.data.events) {
                let t = (0, S.E0)(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new u.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let n = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                a.push(n);
              }
            }),
            a
          );
        }
        async LoadImportantEventsAroundToday(e, t, n, a, r, o) {
          let l = new Array(),
            c = new Array();
          c.push({ priority: 0, appids: t }),
            n && c.push({ priority: 1, appids: n }),
            a && c.push({ priority: 2, appids: a });
          let d = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
              filterToEventTypes: o ? o.toString() : "",
              l: y.TS.LANGUAGE,
            },
            m = y.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            _ = await i().get(m, {
              params: d,
              withCredentials: !0,
              cancelToken: r.token,
            });
          return (
            (0, s.h5)(() => {
              for (let e of _.data.events) {
                let t = (0, S.E0)(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new u.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, n) {
          let a = this.m_mapClanToGIDs.get(e);
          a ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (a = this.m_mapClanToGIDs.get(e)));
          let r = this.m_mapAppIDToGIDs.get(t);
          r ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (r = this.m_mapAppIDToGIDs.get(t))),
            -1 == a.indexOf(n) && (a.push(n), r.push(n));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let n = new URLSearchParams();
          n.append("sessionid", (0, y.KC)()),
            n.append("bDelete", "1"),
            n.append("gid", t);
          const a = await i().post(
            y.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            n,
          );
          return this.RemoveGIDFromList(e, t), a.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let n = this.m_mapClanToGIDs.get(e.GetAccountID()),
              a = n.indexOf(t);
            a >= 0 && n.splice(a, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(d.cB + t) &&
              this.m_mapExistingEvents.delete(d.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          n,
          a,
          r,
          s = !1,
        ) {
          let o = (0, v.hE)(s ? l.Bhc : (0, l.sfN)(y.TS.LANGUAGE)),
            d = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: a,
              event_gid: n,
              lang_list: o,
              last_modified_time: r || 0,
              origin: self.origin,
              for_edit: s,
              only_summary: this.m_bOnlySummary,
            },
            m = null,
            p = null;
          if (s) {
            const n = (0, y.yK)();
            "community" === n
              ? ((p = y.TS.COMMUNITY_BASE_URL),
                (p += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (p += "/"))
              : (p =
                  "partnerweb" === n
                    ? y.TS.PARTNER_BASE_URL + "sales/"
                    : y.TS.STORE_BASE_URL + "events/"),
              (p += "ajaxgetpartnereventforedit"),
              (m = { params: d, withCredentials: !0 });
          } else
            (p = y.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (m = { params: d, withCredentials: !1 });
          try {
            let e = await i().get(p, m);
            if (e.data.success !== c.R) return;
            let t = e.data.event,
              n = (0, S.E0)(t);
            if (
              !this.m_mapExistingEvents.has(n) ||
              (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
                (t.rtime32_last_modified ?? 0) ||
              (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ??
                0) < (t.rtime_mod_reviewed ?? 0)
            ) {
              (0, _.wT)(
                t.clan_steamid,
                "ClanSteamID is missing from data we received",
              );
              let e = new u.b(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            return this.m_mapExistingEvents.get(n);
          } catch (e) {
            return;
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          n,
          a,
          r,
          i,
        ) {
          if (n && this.m_mapExistingEvents.has(n))
            return this.m_mapExistingEvents.get(n);
          if (a) {
            if (this.m_mapExistingEvents.has(d.cB + a))
              return this.m_mapExistingEvents.get(d.cB + a);
            if (this.m_mapAnnouncementBodyToEvent.has(a)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(a);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            n,
            a,
            r,
            i,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            n,
            a,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            n,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            n,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, n, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            n,
            a,
          );
        }
        async LoadPartnerEventGeneric(e, t, n, a, r) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            n,
            a,
            r,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              n = y.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              a = await i().get(n, { params: t, withCredentials: !0 });
            a.data.apps &&
              a.data.apps.length > 0 &&
              (0, s.h5)(() => {
                const e = new Map(a.data.apps?.map((e) => [e.appid, new E(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response?.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let n =
            y.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await i().get(n)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
          const a = new Array(),
            r = y.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = (0, v.hE)((0, l.sfN)(y.TS.LANGUAGE));
          let c = null,
            d = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? a.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (c = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && a.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (d = e);
          }
          if (!c && !d) return a;
          const m = new Array();
          for (; (c?.length ?? 0) > 0 || (d?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (d?.length ?? 0) > 0 ? d?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            m.push(
              i().get(r, { params: e, cancelToken: n ? n.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([...m]);
            let t = 0;
            (0, s.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = (0, S.E0)(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new u.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    a.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, p.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, p.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async SavePartnerEventSaleAssets(e, t, n, a) {
          let r = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const s = `${y.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              o = new FormData();
            o.append("sessionid", (0, y.KC)()),
              o.append("gidclanevent", t),
              o.append("json", JSON.stringify(n)),
              o.append("pageStyles", JSON.stringify(a));
            const l = await i().post(s, o, { withCredentials: !0 });
            if (l?.data?.success == c.R) {
              const e = this.m_mapExistingEvents.get(t);
              if (e && e.jsondata)
                for (const t in n)
                  if (n.hasOwnProperty(t) && n[t]) {
                    const a = t,
                      r = n[a];
                    void 0 !== r && void 0 !== a && (e.jsondata[a] = r);
                  }
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            r = (0, p.H)(l);
          } catch (e) {
            r = (0, p.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                r?.strErrorMsg,
              r,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, a.Cg)([s.sH], w.prototype, "m_mapExistingEvents", void 0),
        (0, a.Cg)([s.sH], w.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, a.Cg)([s.sH], w.prototype, "m_mapClanToGIDs", void 0),
        (0, a.Cg)([s.sH], w.prototype, "m_mapAppIDToGIDs", void 0),
        (0, a.Cg)([s.sH], w.prototype, "m_mapUpdatedApps", void 0),
        (0, a.Cg)([s.XI], w.prototype, "Init", null),
        (0, a.Cg)([b.oI], w.prototype, "GetPartnerEventChangeCallback", null),
        (0, a.Cg)([s.XI], w.prototype, "RegisterClanEvents", null),
        (0, a.Cg)(
          [s.XI],
          w.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, a.Cg)([s.XI], w.prototype, "DeleteClanEvent", null),
        (0, a.Cg)([s.XI], w.prototype, "RemoveGIDFromList", null),
        (0, a.Cg)([s.XI], w.prototype, "FlushEventFromCache", null),
        (0, a.Cg)([b.oI], w.prototype, "SavePartnerEventSaleAssets", null);
      const I = new w();
      (0, B.V)("g_PartnerEventStore", I);
      const T = new w(!0);
      function G(e, t, n = !1) {
        const [a, r] = (0, f.useState)(() => I.GetClanEventModel(t)),
          [i, s] = (0, f.useState)(!0),
          o = (0, f.useMemo)(() => u.b.InitFromClanID(e), [e]);
        return (
          (0, f.useEffect)(() => {
            !a &&
              e > 0 &&
              (I.Init(),
              I.LoadPartnerEventFromClanEventGIDAndClanSteamID(o, t, 0, n)
                .then(r)
                .finally(() => s(!1)));
          }, [o, t, a, e, n]),
          (0, b.hL)(n ? I.GetPartnerEventChangeCallback(t) : void 0, r),
          { eventModel: a, bLoading: i }
        );
      }
      function A() {
        return { fnSaveSaleAssets: I.SavePartnerEventSaleAssets };
      }
      (0, B.V)("g_PartnerEventSummaryStore", T);
    },
    96001: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => l, z: () => o });
      var a = n(81393),
        r = n(96059),
        i = n(30470),
        s = n(24484);
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
          const e = (0, s.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(i.TS.WEBAPI_BASE_URL, e));
        }
      }
      function l() {
        return o.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    11577: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => d, m: () => c });
      var a = n(90626),
        r = n(96059),
        i = n(16021),
        s = n(81393),
        o = n(78327),
        l = n(63664);
      function c(e) {
        const [t, n] = (0, a.useState)(!1),
          [r] = (0, a.useState)(() => u()),
          s = (0, a.useMemo)(
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
                return i.A.Initialize(
                  e.GetServiceTransport(),
                  o.iA.is_partner_member,
                );
              })(r)
            ),
            [r],
          ),
          t
            ? (0, a.createElement)(l.V3, {
                context: s,
                serviceTransportOverride: r.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
      function d(e) {
        const [t] = (0, a.useState)(() => u()),
          n = (0, a.useMemo)(
            () => ({
              country: o.TS.COUNTRY,
              language: o.TS.LANGUAGE,
              bUsePartnerAPI: !0,
              bIncludeUnpublished: e.bIncludeUnpublished,
            }),
            [e.bIncludeUnpublished],
          );
        return (0, a.createElement)(l.V3, {
          context: n,
          serviceTransportOverride: t.GetServiceTransport(),
          children: e.children,
        });
      }
      function u() {
        const e = (0, o.Tc)("partnerbrowse_webapi_token", "application_config");
        (0, s.wT)(Boolean(e), "require partnerbrowse_webapi_token");
        return new r.D(o.TS.WEBAPI_BASE_URL, e);
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => E, CF: () => w, KM: () => b, KT: () => B });
      var a = n(41735),
        r = n.n(a),
        i = n(58632),
        s = n.n(i),
        o = n(90626),
        l = n(20194),
        c = n(75233),
        d = n(37085),
        u = n(17720),
        m = n(68797),
        _ = n(78327),
        p = n(56545),
        g = n(42457),
        h = n(23809),
        y = n(7860);
      const f = "nicknames";
      function b(e) {
        const t = (0, h.KV)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [f],
            queryFn: async () => {
              const e = new Map();
              if (_.iA.logged_in) {
                const n = p.w.Init(g.w_T),
                  a = (await g.xtC.GetNicknameList(t, n)).Body().toObject();
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
      const v = new (s())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, _.yK)()
                  ? _.TS.COMMUNITY_BASE_URL
                  : _.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  a.data?.success != d.R ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
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
                  a.data?.success != d.R ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(a).strErrorMsg}`;
                const i = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    i.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => i.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        S = "avatarandpersonas";
      function B(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [S, e],
          queryFn: () => v.load(e),
        });
        return [t, n];
      }
      function E(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [S, e],
            queryFn: async () => {
              const n = await v.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [S, new u.b(e.steamid).GetAccountID()];
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
      function w(e) {
        return y.L.getQueryData([S, e]);
      }
    },
    79645: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u, c: () => d });
      var a = n(37085),
        r = n(41735),
        i = n.n(r),
        s = n(20194),
        o = n(68797),
        l = n(30470),
        c = n(78327);
      function d(e) {
        const { data: t, isLoading: n } = (0, s.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let n = `${l.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, c.yK)() &&
                (n = `${l.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const r = await i().get(n, { params: t, withCredentials: !0 });
              if (
                !r ||
                200 != r.status ||
                r.data?.success != a.R ||
                !r.data?.partners
              )
                throw `Load single user partner info failed ${((0, o.H))(r).strErrorMsg}`;
              return r.data.partners;
            })(e),
        });
        return n ? null : t;
      }
      function u(e, t) {
        const n = d(e);
        return n?.find((e) => e.partnerid === t);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => f, iN: () => b, yk: () => v });
      var a = n(34629),
        r = n(7850),
        i = n(75844),
        s = n(65946),
        o = n(90626),
        l = n(22837),
        c = n(2160),
        d = n(63556),
        u = n(95695),
        m = n.n(u),
        _ = n(52038),
        p = n(61859),
        g = n(91675),
        h = n(73745),
        y = n(32754);
      let f = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: i,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              (0, r.jsx)(
                "option",
                {
                  value: l.xPp,
                  children: (0, p.we)("#language_selection_none"),
                },
                "langpicker_unset",
              ),
            );
          let s = new Array();
          const o = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of p.A0.GetLanguageListForRealms(o)) {
            if (t && !t(e)) continue;
            const n = (0, l.LgB)(e),
              a = (0, p.we)("#Language_" + n),
              r = !(!i || !i(e));
            s.push({ eLang: e, sLocName: a, bSupported: r });
          }
          s.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let d = !1;
          for (const t of s) {
            t.bSupported != d &&
              (e.push(
                (0, r.jsx)(
                  "option",
                  {
                    className: m().SupportedGroupLabel,
                    disabled: !0,
                    children: (0, p.we)(
                      t.bSupported
                        ? "#LanguageGroup_Supported"
                        : "#LanguageGroup_Unsupported",
                    ),
                  },
                  t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                ),
              ),
              (d = t.bSupported));
            const i = n && n(t.eLang),
              s = a && a(t.eLang);
            let o = t.sLocName;
            s &&
              0 !== s &&
              ((o += " "),
              (o += (0, p.we)(
                "#Language_Last_Update",
                (0, p.$z)(s) + " @ " + (0, g.KC)(s, { bForce24HourClock: !1 }),
              ))),
              e.push(
                (0, r.jsx)(
                  "option",
                  {
                    value: t.eLang,
                    className: (0, _.A)(
                      { [m().LanguageWithContent]: i },
                      t.bSupported
                        ? m().SupportedLanguage
                        : m().UnsupportedLanguage,
                    ),
                    children: o,
                  },
                  "langpicker" + t.eLang + (i ? "_hasdata" : ""),
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
          return (0, r.jsx)(y.he, {
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
      function b(e) {
        const [t, n] = (0, s.q3)(() => [
          d.O.Get().GetHasLocalizationContext(),
          d.O.Get().GetCurEditLanguage(),
        ]);
        return (0, r.jsx)(f, {
          selectedLang: n,
          fnLangHasData: d.O.Get().BHasLanguageData,
          fnOnLanguageChanged: d.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, p.we)("#Localization_EditorNotInFocus"),
        });
      }
      function v(e) {
        const { fnLangHasData: t } = e;
        o.useEffect(
          () => (
            d.O.Get().SetHasLocalizationContext(!0),
            () => d.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, s.q3)(() => {
          const e = [];
          for (let n = l.Bhc; n < l.bP9; ++n) e[n] = !(!t || !t(n));
          return e;
        });
        return (
          o.useEffect(() => d.O.Get().SetHasLanguage(n), [n]),
          (0, r.jsx)(r.Fragment, {})
        );
      }
      (0, a.Cg)([h.oI], f.prototype, "OnLanguageChange", null),
        (f = (0, a.Cg)([i.PA], f));
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => p, pn: () => h, qx: () => g });
      var a = n(7850),
        r = n(16676),
        i = n(61859),
        s = n(12155),
        o = n(90626),
        l = n(52038),
        c = n(95695),
        d = n(84811),
        u = n(64734),
        m = n(65946),
        _ = n(26408);
      function p(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: r,
            toggleMinimized: i,
            className: s,
            children: o,
            elAdditionalButtons: p,
          } = e,
          g = (0, m.q3)(() => r());
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: (0, l.A)(
                s,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: (0, l.A)(
                    c.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(n) && (0, a.jsx)(_.o, { tooltip: n })],
                }),
                (0, a.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    p,
                    (0, a.jsx)(h, { bIsMinimized: g, fnToggleMinimize: i }),
                  ],
                }),
              ],
            }),
            !g && (0, a.jsx)(d.tH, { children: o }),
          ],
        });
      }
      function g(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return (0, a.jsx)(p, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => n(!t),
          children: e.children,
        });
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, a.jsx)(r.$n, {
          "data-tooltip-text": (0, i.we)(o),
          onClick: n,
          children: e.bIsMinimized
            ? (0, a.jsx)(s.hz4, {})
            : (0, a.jsx)(s.Xjb, {}),
        });
      }
    },
    65: (e, t, n) => {
      "use strict";
      function a(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function r(e) {
        const t = new Date(e.getTime());
        return t.setDate(1), t.setHours(0, 0, 0, 0), t;
      }
      function i(e, t) {
        const n = new Date(e);
        return n.setDate(e.getDate() + t), n;
      }
      function s(e, t) {
        return e.reduce((e, n) => {
          const a = t(n),
            r = Math.floor(a.getTime() / 1e3),
            i = e.get(r) || [];
          return e.set(r, [...i, n]), e;
        }, new Map());
      }
      n.d(t, { J2: () => r, bv: () => s, kO: () => i, xi: () => a });
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var a = n(40323),
        r = n.n(a);
      class i {
        static ParseCSVFile(e, t) {
          return new Promise((n, a) => {
            const i = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: n,
              error: (e) => a({ errors: [e] }),
              transformHeader: t,
            };
            r().parse(e, i);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const a = new FileReader();
            (a.onload = (e) => t(a.result)), a.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t, n, a) {
          const s = a
              ? r().unparse({ fields: a, data: e }, { header: !0 })
              : r().unparse(e, { header: !0 }),
            o = 1 == n ? ["\ufeff" + s] : [s];
          i.WriteFile(new Blob(o, { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let a =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (a += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([a], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    27543: (e, t, n) => {
      "use strict";
      n.d(t, { JS: () => i, rG: () => s });
      var a = n(22837),
        r = n(78686);
      function i(e) {
        switch (e) {
          case a.Aqr:
          case a.I5b:
          case a.jO6:
          case a.Y3j:
          case a.Bb7:
          case a.TiP:
          case a.EPt:
          case a.E3D:
          case a.L0X:
          case a.KDJ:
          case a.Fa4:
          case a.Aav:
          case a.SRb:
          case a.HRy:
          case a.C$4:
          case a.zA:
          case a.y6:
          case a.hGl:
          case a.WNR:
          case a.pIh:
          case a.izQ:
          case a.LOv:
          case a.zcX:
          case a.DRF:
          case a.HFK:
            return !0;
        }
        return !1;
      }
      function s(e) {
        let t = "#PartnerEvent_" + e,
          n = r.Z.Localize(t);
        return n != t ? n : r.Z.Localize("#PartnerEvent_Other");
      }
    },
  },
]);
