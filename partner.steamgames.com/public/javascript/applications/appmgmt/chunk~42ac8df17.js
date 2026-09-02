/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [2012],
    {
      97825: (k, J, i) => {
        "use strict";
        i.d(J, { S: () => g });
        var n = i(35038),
          M = i(41944),
          a = i(44420),
          h = i(68312),
          y = i(51614),
          j = i(24179);
        function g(x) {
          const d = (0, h.KV)(),
            w = (0, j._7)();
          return (0, y.n)({
            mutationFn: () => b(d, x),
            onSuccess(B) {
              const [
                S,
                {
                  packageids_added: T,
                  appids_added: P,
                  purchase_result_detail: W,
                },
              ] = B;
              P && w(P);
            },
          });
        }
        async function b(x, d) {
          const w = n.w.Init(M.lO);
          w.Body().set_item_id(a.O4.fromObject(d));
          const B = await M._o.AddFreeLicense(x, w);
          return [B.GetEResult(), B.Body().toObject()];
        }
      },
      55483: (k, J, i) => {
        "use strict";
        i.d(J, {
          yT: () => W,
          MR: () => nr,
          AB: () => tr,
          Rc: () => ur,
          Gt: () => yr,
          ko: () => dr,
          fy: () => ar,
          ec: () => X,
          aA: () => z,
          TB: () => Q,
          vF: () => Ir,
        });
        var n = i(99412),
          M = i(76559),
          a = i(75233),
          h = i(20194),
          y = i(72604),
          j = i(72609);
        async function g(D) {
          const O = `${j.TS.COMMUNITY_BASE_URL}ogg/${D}/ajaxgetvanityandclanid/?origin=${B()}`;
          return w(O);
        }
        async function b(D) {
          const O = M.b.InitFromClanID(D),
            f = `${j.TS.COMMUNITY_BASE_URL}gid/${O.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${B()}`;
          return w(f);
        }
        async function x(D) {
          const O = `${j.TS.COMMUNITY_BASE_URL}groups/${D}/ajaxgetvanityandclanid/?origin=${B()}`;
          return w(O);
        }
        async function d(D) {
          const O = `${j.TS.COMMUNITY_BASE_URL}games/${D}/ajaxgetvanityandclanid/?origin=${B()}`;
          return w(O);
        }
        async function w(D) {
          const O = await fetch(D, { method: "GET" });
          if (O.status == 404) return null;
          if (!O.ok) throw new Error(`Server returned ${O.status}`);
          const f = await O.json();
          return f.success != y.R ? null : f;
        }
        function B() {
          return typeof window < "u" && typeof self < "u"
            ? self.origin
            : "ssr_server";
        }
        function S(D) {
          return ["clantoclaninfo", D];
        }
        function T(D) {
          return ["apptoclanid", D];
        }
        function P(D, O = "group") {
          return ["vanitytoclanid", O, D?.toLocaleLowerCase()];
        }
        function W(D) {
          const O = D?.[0];
          return (
            O == "clantoclaninfo" || O == "apptoclanid" || O == "vanitytoclanid"
          );
        }
        const o = new WeakSet();
        function c(D) {
          if (!o.has(D)) {
            o.add(D);
            for (const O of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              D.setQueryDefaults(O, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const e = new WeakMap();
        function U(D) {
          if (!D) return null;
          let O = e.get(D);
          return (
            O ||
              ((O = {
                ...D,
                clanSteamID: D.clanSteamIDString
                  ? new M.b(D.clanSteamIDString)
                  : M.b.InitFromClanID(D.clanAccountID),
              }),
              e.set(D, O)),
            O
          );
        }
        function N(D) {
          const { msg: O, success: f, ...I } = D;
          return {
            ...I,
            rss_language: D.rss_language ? D.rss_language : n.Bhc,
          };
        }
        function l(D, O) {
          if (!O) return null;
          c(D);
          const f = N(O);
          return (
            D.setQueryData(S(f.clanAccountID), f),
            f.appid && D.setQueryData(T(f.appid), f.clanAccountID),
            f.vanity_url &&
              D.setQueryData(P(f.vanity_url, "group"), f.clanAccountID),
            f
          );
        }
        function z(D, O) {
          for (const f of O) l(D, f);
        }
        function Q(D) {
          const O = (0, a.jE)();
          return (0, h.I)(X(D, O));
        }
        function X(D, O) {
          return (
            c(O),
            {
              queryKey: S(D ?? null),
              queryFn: async () => (D ? l(O, await b(D)) : null),
              enabled: D !== void 0,
              select: U,
            }
          );
        }
        function v(D, O) {
          return (
            c(O),
            {
              queryKey: T(D),
              queryFn: async () => l(O, await g(D))?.clanAccountID ?? null,
              enabled: !!D,
            }
          );
        }
        function K(D, O, f = "group") {
          return (
            c(O),
            {
              queryKey: P(D, f),
              queryFn: async () => {
                if (f == "store") {
                  const $ = O.getQueryData(P(D, "group"));
                  if ($) return $;
                }
                const I = f == "store" ? await d(D) : await x(D);
                return l(O, I)?.clanAccountID ?? null;
              },
              enabled: !!D,
            }
          );
        }
        function p(D) {
          return D.isPending ? void 0 : (D.data ?? null);
        }
        function Jr(D) {
          return Q(D.BIsClanAccount() ? D.GetAccountID() : void 0);
        }
        function Ir(D) {
          const O = (0, a.jE)(),
            f = (0, h.I)(v(D, O));
          return Q(D ? p(f) : void 0);
        }
        function Or(D, O = "group") {
          const f = useQueryClient(),
            I = useQuery(K(D, f, O));
          return Q(D ? p(I) : void 0);
        }
        function yr(D, O) {
          if (D) return U(O.getQueryData(S(D))) ?? void 0;
        }
        function dr(D, O) {
          if (D) return yr(O.getQueryData(T(D)), O);
        }
        function ar(D, O, f) {
          if (!D) return;
          const I = f ? [f] : ["store", "group"];
          for (const $ of I) {
            const R = yr(O.getQueryData(P(D, $)), O);
            if (R) return R;
          }
        }
        async function nr(D, O) {
          return D ? U(await O.fetchQuery(X(D, O))) : null;
        }
        async function tr(D, O) {
          return D ? nr(await O.fetchQuery(v(D, O)), O) : null;
        }
        async function ur(D, O, f = "group") {
          return D ? nr(await O.fetchQuery(K(D, O, f)), O) : null;
        }
      },
      90900: (k, J, i) => {
        "use strict";
        i.d(J, { J_: () => a, TP: () => d, st: () => B });
        var n = i(79024);
        function M(W) {
          if (W.preferenceControls.isTechnicallyNecessary) return !0;
          const o = GetCurrentCookiePreferences();
          if (!o) return !1;
          switch (o.preference_state) {
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_AllowAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultAllowAll:
              return !0;
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_RejectAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultRejectAll:
              return !1;
          }
          return (
            "IsAllowed" in W.preferenceControls &&
            W.preferenceControls.IsAllowed(o)
          );
        }
        const a = {
            name: "cookieSettings",
            options: {
              secure: !0,
              httpOnly: !1,
              path: "/",
              sameSite: "none",
              maxAge: 1e3 * 3600 * 24 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          h = {
            name: "steamLoginSecure",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          y = {
            name: "steamDidLoginRefresh",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
              maxAge: 5 * 1e3,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          j = {
            name: "sessionid",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          g = {
            name: "strResponsiveViewPrefs",
            options: { maxAge: 365 * 24 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          b = {
            name: "mobileClient",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          x = {
            name: "Steam_Language",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          d = {
            name: "shoppingCartGID",
            options: { path: "/", secure: !0, maxAge: 1e3 * 3600 * 24 * 7 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          w = {
            name: "app_impressions",
            options: { path: "/", secure: !0 },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed: (W) =>
                !!W.valve_analytics?.product_impressions_tracking,
            },
          },
          B = {
            name: "steamLoginSpoofSteamID",
            options: { path: "/", secure: !0 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          S = {
            name: "browserid",
            options: {
              path: "/",
              secure: !0,
              maxAge: 3600 * 24 * 7 * 365,
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed(W) {
                return W.valve_analytics?.product_impressions_tracking ?? !1;
              },
            },
          },
          T = {
            name: "clientHints",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !1,
              maxAge: 3600 * 24 * 7 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          P = {
            name: "webTradeEligibility",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !0,
              maxAge: 3600 * 24 * 1,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          };
      },
      52438: (k, J, i) => {
        "use strict";
        i.d(J, { j_: () => n });
        function n(y) {
          if (!document.cookie) return;
          const j = document.cookie.match("(^|; )" + y.name + "=([^;]*)");
          if (j && j[2]) return decodeURIComponent(j[2]);
        }
        function M(y, j) {
          if (!document.cookie || !IsCookieAllowedByPreferences(y)) return;
          const g = y.options?.path ?? "/";
          let b = "";
          y.options?.expires
            ? (b += ";expires=" + y.options.expires.toUTCString())
            : y.options?.maxAge &&
              (b += ";max-age=" + Math.floor(y.options.maxAge / 1e3)),
            y.options?.secure && (b += ";secure"),
            (document.cookie =
              encodeURIComponent(y.name) +
              "=" +
              encodeURIComponent(j) +
              b +
              ";path=" +
              g);
        }
        function a(y) {
          return M(
            { ...y, options: { ...y.options, expires: new Date(0) } },
            "",
          );
        }
        function h() {
          return window.SSR?.renderContext?.cookiePrefs;
        }
      },
      79024: (k, J, i) => {
        "use strict";
        i.d(J, { T4: () => Q, CY: () => n, ie: () => M });
        var n = {};
        i.r(n),
          i.d(n, {
            PK: () => b,
            UI: () => d,
            __: () => g,
            _H: () => w,
            rE: () => x,
          });
        var M = {};
        i.r(M), i.d(M, { CL: () => B, mO: () => T });
        var a = i(80613),
          h = i.n(a),
          y = i(75245),
          j = i(35038);
        const g = 0,
          b = 1,
          x = 2,
          d = 3,
          w = 4,
          B = 0,
          S = 1,
          T = 1;
        function P(X) {
          return "unknown EPrivacyCookiePreferenceState ( " + X + " )";
        }
        function W(X) {
          return "unknown EPrivacyCookiePreferencesVersion ( " + X + " )";
        }
        class o extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              o.prototype.version || y.Sg(o.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    version: { n: 1, br: y.qM.readEnum, bw: y.gp.writeEnum },
                    preference_state: {
                      n: 2,
                      br: y.qM.readEnum,
                      bw: y.gp.writeEnum,
                    },
                    content_customization: { n: 3, c },
                    valve_analytics: { n: 4, c: e },
                    third_party_analytics: { n: 5, c: U },
                    third_party_content: { n: 6, c: N },
                    utm_enabled: {
                      n: 7,
                      d: !0,
                      br: y.qM.readBool,
                      bw: y.gp.writeBool,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = y.w0(o.M())), o.sm_mbf;
          }
          toObject(v = !1) {
            return o.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(o.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(o.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new o();
            return o.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(o.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return o.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(o.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences";
          }
        }
        class c extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              c.prototype.recentapps || y.Sg(c.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    recentapps: { n: 1, br: y.qM.readBool, bw: y.gp.writeBool },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = y.w0(c.M())), c.sm_mbf;
          }
          toObject(v = !1) {
            return c.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(c.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(c.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new c();
            return c.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(c.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return c.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(c.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ContentCustomization";
          }
        }
        class e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              e.prototype.product_impressions_tracking || y.Sg(e.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    product_impressions_tracking: {
                      n: 1,
                      br: y.qM.readBool,
                      bw: y.gp.writeBool,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = y.w0(e.M())), e.sm_mbf;
          }
          toObject(v = !1) {
            return e.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(e.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(e.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new e();
            return e.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(e.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return e.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(e.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ValveAnalytics";
          }
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              U.prototype.google_analytics || y.Sg(U.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    google_analytics: {
                      n: 1,
                      br: y.qM.readBool,
                      bw: y.gp.writeBool,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = y.w0(U.M())), U.sm_mbf;
          }
          toObject(v = !1) {
            return U.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(U.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(U.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new U();
            return U.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(U.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return U.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(U.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
          }
        }
        class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              N.prototype.youtube || y.Sg(N.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    youtube: { n: 1, br: y.qM.readBool, bw: y.gp.writeBool },
                    vimeo: { n: 2, br: y.qM.readBool, bw: y.gp.writeBool },
                    sketchfab: { n: 3, br: y.qM.readBool, bw: y.gp.writeBool },
                    twitter: { n: 4, br: y.qM.readBool, bw: y.gp.writeBool },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = y.w0(N.M())), N.sm_mbf;
          }
          toObject(v = !1) {
            return N.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(N.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(N.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new N();
            return N.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(N.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return N.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(N.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
          }
        }
        class l extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(), a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          toObject(v = !1) {
            return l.toObject(v, this);
          }
          static toObject(v, K) {
            return v ? { $jspbMessageInstance: K } : {};
          }
          static fromObject(v) {
            return new l();
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new l();
            return l.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return v;
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return l.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {}
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Request";
          }
        }
        class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(v = null) {
            super(),
              z.prototype.preferences || y.Sg(z.M()),
              a.Message.initialize(this, v, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: { preferences: { n: 1, c: o } },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = y.w0(z.M())), z.sm_mbf;
          }
          toObject(v = !1) {
            return z.toObject(v, this);
          }
          static toObject(v, K) {
            return y.BT(z.M(), v, K);
          }
          static fromObject(v) {
            return y.Uq(z.M(), v);
          }
          static deserializeBinary(v) {
            let K = new (h().BinaryReader)(v),
              p = new z();
            return z.deserializeBinaryFromReader(p, K);
          }
          static deserializeBinaryFromReader(v, K) {
            return y.zj(z.MBF(), v, K);
          }
          serializeBinary() {
            var v = new (h().BinaryWriter)();
            return z.serializeBinaryToWriter(this, v), v.getResultBuffer();
          }
          static serializeBinaryToWriter(v, K) {
            y.i0(z.M(), v, K);
          }
          serializeBase64String() {
            var v = new (h().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, v), v.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Response";
          }
        }
        var Q;
        ((X) => {
          function v(K, p, Jr) {
            return K.SendMsg(
              "AccountPrivacy.GetCookiePreferences#1",
              (0, j.I8)(l, p, Jr),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          X.GetCookiePreferences = v;
        })(Q || (Q = {}));
      },
      41944: (k, J, i) => {
        "use strict";
        i.d(J, { _o: () => U, lO: () => c });
        var n = i(80613),
          M = i.n(n),
          a = i(75245),
          h = i(35038),
          y = i(44420),
          j = i(18025);
        class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              g.prototype.context || a.Sg(g.M()),
              n.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    context: { n: 2, c: y.TS },
                    data_request: { n: 3, c: y.gn },
                    gift_info: { n: 4, c: j.$z },
                    gidshoppingcart: {
                      n: 1,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    gidreplayoftransid: {
                      n: 5,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    for_init_purchase: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
          }
          toObject(l = !1) {
            return g.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(g.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(g.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new g();
            return g.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(g.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return g.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(g.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Request";
          }
        }
        class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              b.prototype.cart_items || a.Sg(b.M()),
              n.Message.initialize(this, l, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    cart_items: { n: 1, c: x, r: !0, q: !0 },
                    estimated_totals: { n: 5, c: S },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
          }
          toObject(l = !1) {
            return b.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(b.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(b.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new b();
            return b.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(b.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return b.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(b.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response";
          }
        }
        class x extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              x.prototype.line_item_id || a.Sg(x.M()),
              n.Message.initialize(this, l, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    item_id: { n: 2, c: y.O4 },
                    store_item: { n: 3, c: y.vB },
                    gift_info: { n: 4, c: j.$z },
                    errors: { n: 5, c: d },
                    warnings: { n: 6, c: w },
                    subtotal: { n: 7, c: j.Hi },
                    price_when_added: { n: 8, c: j.Hi },
                    original_price: { n: 9, c: j.Hi },
                    coupon_applied: { n: 10, c: j.HX },
                    coupon_discount: { n: 11, c: j.Hi },
                    can_purchase_as_gift: {
                      n: 12,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    restrict_add_additional_to_cart: {
                      n: 13,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    quantity: {
                      n: 14,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    included_packageids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = a.w0(x.M())), x.sm_mbf;
          }
          toObject(l = !1) {
            return x.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(x.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(x.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new x();
            return x.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(x.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return x.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(x.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem";
          }
        }
        class d extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              d.prototype.owned_appids || a.Sg(d.M()),
              n.Message.initialize(this, l, 0, -1, [1, 2, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: a.qM.readInt32,
                      pbr: a.qM.readPackedInt32,
                      bw: a.gp.writeRepeatedInt32,
                    },
                    duplicate_appids_in_cart: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readInt32,
                      pbr: a.qM.readPackedInt32,
                      bw: a.gp.writeRepeatedInt32,
                    },
                    unavailable_in_country: {
                      n: 3,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    invalid_coupon: {
                      n: 4,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    invalid_coupon_for_item: {
                      n: 5,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    coupon_exclusive_promo: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    cannot_purchase_as_gift: {
                      n: 7,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    invalid_item: {
                      n: 8,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    too_many_in_cart: {
                      n: 9,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    has_existing_billing_agreement: {
                      n: 10,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    missing_must_own_appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: a.qM.readInt32,
                      pbr: a.qM.readPackedInt32,
                      bw: a.gp.writeRepeatedInt32,
                    },
                    adult_content_restricted: {
                      n: 12,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    commercial_license_restricted: {
                      n: 13,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    gift_not_valid_for_recipient_region: {
                      n: 14,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
          }
          toObject(l = !1) {
            return d.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(d.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(d.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new d();
            return d.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(d.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return d.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(d.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Errors";
          }
        }
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              w.prototype.owned_appids || a.Sg(w.M()),
              n.Message.initialize(this, l, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: a.qM.readInt32,
                      pbr: a.qM.readPackedInt32,
                      bw: a.gp.writeRepeatedInt32,
                    },
                    owned_appids_extra_copy: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readInt32,
                      pbr: a.qM.readPackedInt32,
                      bw: a.gp.writeRepeatedInt32,
                    },
                    appids_in_mastersub: { n: 3, c: B, r: !0, q: !0 },
                    price_has_changed: {
                      n: 4,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    non_refundable: {
                      n: 5,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    gift_recipient_higher_price: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
          }
          toObject(l = !1) {
            return w.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(w.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(w.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new w();
            return w.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(w.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return w.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(w.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings";
          }
        }
        class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              B.prototype.cart_appid || a.Sg(B.M()),
              n.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    cart_appid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    mastersub_appid: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
          }
          toObject(l = !1) {
            return B.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(B.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(B.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new B();
            return B.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(B.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return B.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(B.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
          }
        }
        class S extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              S.prototype.subtotal || a.Sg(S.M()),
              n.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    subtotal: { n: 1, c: j.Hi },
                    wallet_balance: { n: 2, c: j.Hi },
                    exceeding_wallet_balance: { n: 3, c: j.Hi },
                    remaining_wallet_balance: { n: 4, c: j.Hi },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
          }
          toObject(l = !1) {
            return S.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(S.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(S.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new S();
            return S.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(S.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return S.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(S.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_EstimatedTotals";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              T.prototype.item_ids || a.Sg(T.M()),
              n.Message.initialize(this, l, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { item_ids: { n: 1, c: y.O4, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = a.w0(T.M())), T.sm_mbf;
          }
          toObject(l = !1) {
            return T.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(T.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(T.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new T();
            return T.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(T.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return T.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(T.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Request";
          }
        }
        class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              P.prototype.ownership_info || a.Sg(P.M()),
              n.Message.initialize(this, l, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { ownership_info: { n: 1, c: o, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = a.w0(P.M())), P.sm_mbf;
          }
          toObject(l = !1) {
            return P.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(P.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(P.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new P();
            return P.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(P.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return P.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(P.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response";
          }
        }
        class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              W.prototype.accountid || a.Sg(W.M()),
              n.Message.initialize(this, l, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    accountid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    already_owns: {
                      n: 2,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    wishes_for: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                    partial_owns_appids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                    partial_wishes_for: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
          }
          toObject(l = !1) {
            return W.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(W.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(W.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new W();
            return W.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(W.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return W.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(W.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
          }
        }
        class o extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              o.prototype.item_id || a.Sg(o.M()),
              n.Message.initialize(this, l, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    item_id: { n: 1, c: y.O4 },
                    friend_ownership: { n: 2, c: W, r: !0, q: !0 },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
          }
          toObject(l = !1) {
            return o.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(o.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(o.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new o();
            return o.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(o.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return o.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(o.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
          }
        }
        class c extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              c.prototype.item_id || a.Sg(c.M()),
              n.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = { proto: c, fields: { item_id: { n: 1, c: y.O4 } } }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
          }
          toObject(l = !1) {
            return c.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(c.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(c.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new c();
            return c.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(c.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return c.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(c.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Request";
          }
        }
        class e extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              e.prototype.packageids_added || a.Sg(e.M()),
              n.Message.initialize(this, l, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    packageids_added: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                    appids_added: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                    purchase_result_detail: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = a.w0(e.M())), e.sm_mbf;
          }
          toObject(l = !1) {
            return e.toObject(l, this);
          }
          static toObject(l, z) {
            return a.BT(e.M(), l, z);
          }
          static fromObject(l) {
            return a.Uq(e.M(), l);
          }
          static deserializeBinary(l) {
            let z = new (M().BinaryReader)(l),
              Q = new e();
            return e.deserializeBinaryFromReader(Q, z);
          }
          static deserializeBinaryFromReader(l, z) {
            return a.zj(e.MBF(), l, z);
          }
          serializeBinary() {
            var l = new (M().BinaryWriter)();
            return e.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, z) {
            a.i0(e.M(), l, z);
          }
          serializeBase64String() {
            var l = new (M().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Response";
          }
        }
        var U;
        ((N) => {
          function l(X, v, K) {
            return X.SendMsg("Checkout.ValidateCart#1", (0, h.I8)(g, v, K), b, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          N.ValidateCart = l;
          function z(X, v, K) {
            return X.SendMsg(
              "Checkout.GetFriendOwnershipForGifting#1",
              (0, h.I8)(T, v, K),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          N.GetFriendOwnershipForGifting = z;
          function Q(X, v, K) {
            return X.SendMsg(
              "Checkout.AddFreeLicense#1",
              (0, h.I8)(c, v, K),
              e,
              { ePrivilege: 1 },
            );
          }
          N.AddFreeLicense = Q;
        })(U || (U = {}));
      },
      18025: (k, J, i) => {
        "use strict";
        i.d(J, { $z: () => y, HX: () => b, Hi: () => g });
        var n = i(80613),
          M = i.n(n),
          a = i(75245);
        function h(x) {
          return "unknown ELineItemPurchaseNotice ( " + x + " )";
        }
        class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              y.prototype.accountid_giftee || a.Sg(y.M()),
              n.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: j },
                    time_scheduled_send: {
                      n: 3,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
          }
          toObject(d = !1) {
            return y.toObject(d, this);
          }
          static toObject(d, w) {
            return a.BT(y.M(), d, w);
          }
          static fromObject(d) {
            return a.Uq(y.M(), d);
          }
          static deserializeBinary(d) {
            let w = new (M().BinaryReader)(d),
              B = new y();
            return y.deserializeBinaryFromReader(B, w);
          }
          static deserializeBinaryFromReader(d, w) {
            return a.zj(y.MBF(), d, w);
          }
          serializeBinary() {
            var d = new (M().BinaryWriter)();
            return y.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, w) {
            a.i0(y.M(), d, w);
          }
          serializeBase64String() {
            var d = new (M().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              j.prototype.gifteename || a.Sg(j.M()),
              n.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = a.w0(j.M())), j.sm_mbf;
          }
          toObject(d = !1) {
            return j.toObject(d, this);
          }
          static toObject(d, w) {
            return a.BT(j.M(), d, w);
          }
          static fromObject(d) {
            return a.Uq(j.M(), d);
          }
          static deserializeBinary(d) {
            let w = new (M().BinaryReader)(d),
              B = new j();
            return j.deserializeBinaryFromReader(B, w);
          }
          static deserializeBinaryFromReader(d, w) {
            return a.zj(j.MBF(), d, w);
          }
          serializeBinary() {
            var d = new (M().BinaryWriter)();
            return j.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, w) {
            a.i0(j.M(), d, w);
          }
          serializeBase64String() {
            var d = new (M().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              g.prototype.amount_in_cents || a.Sg(g.M()),
              n.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: a.qM.readInt64String,
                      bw: a.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
          }
          toObject(d = !1) {
            return g.toObject(d, this);
          }
          static toObject(d, w) {
            return a.BT(g.M(), d, w);
          }
          static fromObject(d) {
            return a.Uq(g.M(), d);
          }
          static deserializeBinary(d) {
            let w = new (M().BinaryReader)(d),
              B = new g();
            return g.deserializeBinaryFromReader(B, w);
          }
          static deserializeBinaryFromReader(d, w) {
            return a.zj(g.MBF(), d, w);
          }
          serializeBinary() {
            var d = new (M().BinaryWriter)();
            return g.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, w) {
            a.i0(g.M(), d, w);
          }
          serializeBase64String() {
            var d = new (M().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              b.prototype.couponid || a.Sg(b.M()),
              n.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    couponid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    title: { n: 5, br: a.qM.readString, bw: a.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
          }
          toObject(d = !1) {
            return b.toObject(d, this);
          }
          static toObject(d, w) {
            return a.BT(b.M(), d, w);
          }
          static fromObject(d) {
            return a.Uq(b.M(), d);
          }
          static deserializeBinary(d) {
            let w = new (M().BinaryReader)(d),
              B = new b();
            return b.deserializeBinaryFromReader(B, w);
          }
          static deserializeBinaryFromReader(d, w) {
            return a.zj(b.MBF(), d, w);
          }
          serializeBinary() {
            var d = new (M().BinaryWriter)();
            return b.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, w) {
            a.i0(b.M(), d, w);
          }
          serializeBase64String() {
            var d = new (M().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
      },
      43462: (k, J, i) => {
        "use strict";
        i.d(J, { RI: () => n });
        var n = {};
        i.r(n), i.d(n, { $m: () => j });
        var M = i(80613),
          a = i.n(M),
          h = i(75245),
          y = i(35038);
        const j = 0,
          g = 1,
          b = 2,
          x = 3,
          d = 4;
        function w(W) {
          return "unknown ERecommendationIgnoreReason ( " + W + " )";
        }
        class B extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(), M.Message.initialize(this, o, 0, -1, void 0, null);
          }
          toObject(o = !1) {
            return B.toObject(o, this);
          }
          static toObject(o, c) {
            return o ? { $jspbMessageInstance: c } : {};
          }
          static fromObject(o) {
            return new B();
          }
          static deserializeBinary(o) {
            let c = new (a().BinaryReader)(o),
              e = new B();
            return B.deserializeBinaryFromReader(e, c);
          }
          static deserializeBinaryFromReader(o, c) {
            return o;
          }
          serializeBinary() {
            var o = new (a().BinaryWriter)();
            return B.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, c) {}
          serializeBase64String() {
            var o = new (a().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Request";
          }
        }
        class S extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              S.prototype.ignore_list || h.Sg(S.M()),
              M.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { ignore_list: { n: 1, c: T, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = h.w0(S.M())), S.sm_mbf;
          }
          toObject(o = !1) {
            return S.toObject(o, this);
          }
          static toObject(o, c) {
            return h.BT(S.M(), o, c);
          }
          static fromObject(o) {
            return h.Uq(S.M(), o);
          }
          static deserializeBinary(o) {
            let c = new (a().BinaryReader)(o),
              e = new S();
            return S.deserializeBinaryFromReader(e, c);
          }
          static deserializeBinaryFromReader(o, c) {
            return h.zj(S.MBF(), o, c);
          }
          serializeBinary() {
            var o = new (a().BinaryWriter)();
            return S.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, c) {
            h.i0(S.M(), o, c);
          }
          serializeBase64String() {
            var o = new (a().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response";
          }
        }
        class T extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              T.prototype.appid || h.Sg(T.M()),
              M.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                    packageid: {
                      n: 2,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    reason: { n: 3, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = h.w0(T.M())), T.sm_mbf;
          }
          toObject(o = !1) {
            return T.toObject(o, this);
          }
          static toObject(o, c) {
            return h.BT(T.M(), o, c);
          }
          static fromObject(o) {
            return h.Uq(T.M(), o);
          }
          static deserializeBinary(o) {
            let c = new (a().BinaryReader)(o),
              e = new T();
            return T.deserializeBinaryFromReader(e, c);
          }
          static deserializeBinaryFromReader(o, c) {
            return h.zj(T.MBF(), o, c);
          }
          serializeBinary() {
            var o = new (a().BinaryWriter)();
            return T.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, c) {
            h.i0(T.M(), o, c);
          }
          serializeBase64String() {
            var o = new (a().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response_IgnoreListEntry";
          }
        }
        var P;
        ((W) => {
          function o(c, e, U) {
            return c.SendMsg(
              "StorePreferences.GetIgnoreList#1",
              (0, y.I8)(B, e, U),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          W.GetIgnoreList = o;
        })(P || (P = {}));
      },
      89926: (k, J, i) => {
        "use strict";
        i.d(J, { l: () => x });
        var n = i(7850),
          M = i(64868),
          a = i(39905),
          h = i(1880),
          y = i(69168),
          j = i(74107),
          g = i(47875);
        function b(w) {
          const { closeModal: B, strDescOverride: S } = w;
          return (0, n.jsx)(h.o0, {
            strTitle: j.F5.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              S || j.F5.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: B,
            strOKButtonText: a.Z.Localize("#Button_OK"),
            onOK: () => {
              (0, g.l)(), B();
            },
          });
        }
        function x(w) {
          const [B, S, T] = (0, M.uD)();
          return {
            elDialogElement: (0, n.jsx)(y.E, {
              active: B,
              children: (0, n.jsx)(b, { closeModal: T, strDescOverride: w }),
            }),
            fnShowLogonDialog: S,
          };
        }
        function d(w) {
          const { label: B, strDialogDesc: S } = w,
            { elDialogElement: T, fnShowLogonDialog: P } = x(S);
          return jsxs(Fragment, {
            children: [
              jsx(Button, {
                onClick: P,
                children: B || SharedLocalization.Localize("#Login_SignIn"),
              }),
              T,
            ],
          });
        }
      },
      94352: (k, J, i) => {
        "use strict";
        i.d(J, { Q: () => Ce });
        var n = i(7850),
          M = i(44420),
          a = i(48357),
          h = i(80104),
          y = i(68260),
          j = i(77459),
          g = i(55483),
          b = i(20194),
          x = i(72604),
          d = i(72609);
        async function w(Y) {
          let Z = { get_appids: !0, l: d.TS.LANGUAGE };
          const A = new URLSearchParams(Z).toString(),
            ir = `${d.TS.STORE_BASE_URL}curator/${Y}/ajaxgetcreatorhomeinfo/?${A}`,
            lr = await fetch(ir, { method: "GET" });
          if (!lr.ok) throw new Error(`Server returned ${lr.status}`);
          const cr = await lr.json();
          return cr.success != x.R ? null : cr;
        }
        function B(Y) {
          return (0, b.I)(S(Y));
        }
        function S(Y) {
          return {
            queryKey: T(Y),
            queryFn: async () => {
              const Z = await w(Y);
              if (Z) {
                const {
                  success: A,
                  err_msg: ir,
                  warning: lr,
                  warning_msg: cr,
                  ...or
                } = Z;
                return or;
              }
              return null;
            },
            enabled: !!Y,
          };
        }
        function T(Y) {
          return ["creatorhomebyaccount", Y];
        }
        function P(Y, Z) {
          if (Y.vanity) {
            switch (Z) {
              case "publisher":
                return `${d.TS.STORE_BASE_URL}publisher/${Y.vanity}/`;
              case "franchise":
                return `${d.TS.STORE_BASE_URL}franchise/${Y.vanity}/`;
            }
            return `${d.TS.STORE_BASE_URL}developer/${Y.vanity}/`;
          }
          return `${d.TS.STORE_BASE_URL}curator/${Y.creator_clan_id}/`;
        }
        var W = i(35413),
          o = i(54698),
          c = i(64769),
          e = i.n(c),
          U = i(36707);
        function N(Y) {
          const {
              nCreatorAccountID: Z,
              classOverride: A,
              styleOverride: ir,
              followType: lr,
            } = Y,
            { data: cr } = (0, g.TB)(Z),
            { data: or } = B(Z);
          return !cr || !or
            ? null
            : (0, n.jsxs)("div", {
                className: (0, U.A)(e().GameHoverCreatorFollowButtonCtn, A),
                style: ir,
                children: [
                  (0, n.jsx)("a", {
                    href: P(or, "developer"),
                    children: (0, n.jsx)("img", {
                      src:
                        cr == null
                          ? (0, W.t)(void 0, "medium")
                          : cr?.avatar_medium_url,
                      alt: cr?.group_name,
                    }),
                  }),
                  (0, n.jsx)(o.of, { clanAccountID: Z, followType: lr }),
                ],
              });
        }
        var l = i(44267),
          z = i(90626),
          Q = i(19619),
          X = i(36118),
          v = i(47689),
          K = i(18210),
          p = i(3166),
          Jr = i(39722),
          Ir = i.n(Jr),
          Or = i(89926),
          yr = i(19298),
          dr = i(10134),
          ar = i(20125),
          nr = i(51614),
          tr = i(98609),
          ur = i(67705),
          D = i(43462);
        function O(Y, Z, A, ir = D.RI.$m) {
          const lr = (0, dr.h3)(),
            cr = tr.iA.accountid;
          return (0, nr.n)({
            mutationKey: ["useUpdateAppIgnore", Y, cr, Z],
            mutationFn: async () => {
              if (Y == null) return;
              const or =
                  tr.TS.STORE_BASE_URL + "recommended/ignorerecommendation",
                Ur = new FormData();
              Ur.append("appid", "" + Y),
                Ur.append("sessionid", (0, ur.KC)()),
                Ur.append("remove", Z ? "0" : "1"),
                A && Ur.append("snr", A),
                Ur.append("ignore_reason", "" + ir);
              const fe = await fetch(or, {
                method: "POST",
                body: Ur,
                credentials: "include",
              });
              if (!fe.ok)
                throw new Error(
                  `Ignore App ${Z ? "add" : "remove"} of appid ${Y} failed (${fe.status})`,
                );
            },
            onMutate: () => {
              Y != null && lr(Z ? [Y] : void 0, Z ? void 0 : [Y]);
            },
            onError: () => {
              Y != null && lr(Z ? void 0 : [Y], Z ? [Y] : void 0);
            },
            onSuccess: () => {
              (0, ar.WZ)();
            },
          });
        }
        function f(Y) {
          const { id: Z, snr: A, classOverride: ir } = Y,
            [lr, cr] = (0, z.useState)(!1),
            or = (0, v.m)("GameHoverIgnoreButton"),
            { elDialogElement: Ur, fnShowLogonDialog: fe } = (0, Or.l)(),
            he = Z && "appid" in Z ? Z.appid : void 0,
            De = (0, dr.BD)(he),
            { mutateAsync: Ze } = O(he, !De, A),
            Pe = Z && "appid" in Z && Q.Fm.Get().BIsGameIgnored(Z.appid),
            Ve = async (Je) => {
              Je.preventDefault(),
                Je.stopPropagation(),
                p.iA.logged_in
                  ? Z &&
                    "appid" in Z &&
                    (cr(!0), await Ze(), or.token.reason || cr(!1))
                  : fe();
            };
          return (0, n.jsxs)(yr.Z, {
            className: (0, U.A)(Ir().IgnoreButton, ir),
            onClick: Ve,
            children: [
              (0, n.jsx)(X.NtH, {}),
              (0, n.jsx)("div", {
                className: (0, U.A)(
                  Ir().IgnoreButtonText,
                  lr && Ir().IgnoreLoadingText,
                ),
                children: (0, K.we)(
                  Pe ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              Ur,
            ],
          });
        }
        var I = i(21721),
          $ = i(25046),
          R = i(87249),
          q = i(68094),
          V = i(40358),
          _ = i(29522),
          br = i(14616),
          vr = i(54806);
        const Br =
          i.p +
          "images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching";
        var Wr = i(14874),
          Fr = i(8323),
          ke = i(54963);
        const ct = 5500,
          Nr = 2e3,
          Kr = 10;
        function Lr(Y, Z) {
          return Y && Z && Z.main_capsule
            ? {
                stringifyID: `maincap_${Y.id}_${Y.item_type}`,
                rctImage: (0, n.jsx)(
                  "img",
                  {
                    className: e().FullDivImage,
                    loading: "lazy",
                    src: (0, I.b0)(Z, "main_capsule"),
                    alt: Y.name,
                  },
                  "fallback",
                ),
                nDurationMs: Nr,
              }
            : null;
        }
        function Hr(Y, Z) {
          return {
            stringifyID: `vid_${(0, q.ER)(Y)}`,
            rctImage: (0, n.jsx)(R.mj, { id: Y, active: !0 }),
            nDurationMs: ct,
          };
        }
        function Qr(Y, Z, A, ir) {
          return A.slice(0, ir).map((lr, cr) => {
            const or = (0, I.bu)(lr, "1920x1080");
            return {
              stringifyID: `screen${cr}_${(0, q.ER)(Y)}`,
              rctImage: (0, n.jsx)(
                "img",
                {
                  className: e().FullDivImage,
                  loading: "lazy",
                  src: or,
                  alt: `${Z}'s screenshot ${cr + 1}`,
                },
                or,
              ),
              nDurationMs: Nr,
            };
          });
        }
        function Xr(Y, Z, A, ir, lr) {
          const cr = [];
          if (
            (lr && cr.push(Hr(Y, lr)),
            ir && ir.length > 0 && cr.push(...Qr(Y, Z.name, ir, Kr)),
            cr.length == 0 && A && A.main_capsule)
          ) {
            const or = Lr(Z, A);
            or && cr.push(or);
          }
          return Y && cr.length == 0, cr;
        }
        function kr(Y, Z, A, ir, lr, cr) {
          const or = [];
          cr && or.push(Hr(Z, cr)),
            ir && ir.length > 0 && or.push(...Qr(Y, A.name, ir, Kr));
          const Ur = Kr - (ir?.length || 0);
          return (
            Ur > 0 && lr && lr.length > 0 && or.push(...Qr(Y, A.name, lr, Ur)),
            Y && or.length == 0,
            or
          );
        }
        function Vr(Y) {
          return (0, n.jsx)("img", {
            className: e().FullDivImage,
            loading: "lazy",
            src: (0, d.YJ)(Br),
            alt: "default",
          });
        }
        function Ar(Y) {
          const { id: Z } = Y,
            { data: A } = (0, V.U2)(Z);
          if (!A || A.unvailable_for_country_restriction || !A.visible)
            return (0, n.jsx)("div", {
              className: e().TrailerCtn,
              children: (0, n.jsx)(Vr, {}, "default"),
            });
          const ir = A.item_type,
            lr = A.type;
          return ir == M.c6.xO || ir == M.c6.RD
            ? (0, n.jsx)(Gr, { includeAppIDs: A.included_appids })
            : (lr == M.uE.ue || lr == M.uE.Vi) &&
                A.related_items &&
                A.related_items.parent_appid
              ? (0, n.jsx)(pr, {
                  demoItemDefaultInfo: A,
                  parentAppID: A.related_items.parent_appid,
                })
              : (0, n.jsx)(Zr, { storeItemDefaultData: A });
        }
        function Zr(Y) {
          const { storeItemDefaultData: Z } = Y,
            A = (0, Wr.QO)(Z),
            ir = (0, $.TH)(A),
            { data: lr } = (0, V.lv)(A),
            cr = (0, I.DT)(A),
            or = (0, z.useMemo)(() => Xr(A, Z, lr, cr, ir), [A, cr, ir, lr, Z]);
          return (0, n.jsx)($r, { rgTrailerAndImages: or });
        }
        function pr(Y) {
          const { demoItemDefaultInfo: Z, parentAppID: A } = Y,
            ir = (0, Wr.QO)(Z);
          return (0, $.TH)(ir)
            ? (0, n.jsx)(Zr, { storeItemDefaultData: Z })
            : (0, n.jsx)(Rr, {
                demoID: ir,
                demoItemDefaultInfo: Z,
                parentAppID: A,
              });
        }
        function Rr(Y) {
          const { parentAppID: Z, demoID: A, demoItemDefaultInfo: ir } = Y,
            lr = (0, _.$5)(Z),
            cr = (0, I.DT)(A),
            or = (0, I.DT)(lr),
            Ur = (0, $.TH)(lr),
            fe = (0, z.useMemo)(
              () => kr(A, lr, ir, cr, or, Ur),
              [A, lr, ir, Ur, cr, or],
            );
          return (0, n.jsx)($r, { rgTrailerAndImages: fe });
        }
        function Gr(Y) {
          const { includeAppIDs: Z } = Y,
            A = (0, br.eG)(),
            ir = (0, vr.E)({
              queries: Z.map((or) => (0, V.AQ)(A, { appid: or })),
            }),
            lr = (0, vr.E)({
              queries: Z.map((or) => (0, V.us)(A, { appid: or })),
            }),
            cr = (0, z.useMemo)(
              () =>
                ir
                  .map((or, Ur) => {
                    const fe = lr[Ur].data,
                      he = or.data;
                    return Lr(fe, he);
                  })
                  .filter((or) => !!or),
              [ir, lr],
            );
          return (0, n.jsx)($r, { rgTrailerAndImages: cr });
        }
        function $r(Y) {
          const { rgTrailerAndImages: Z } = Y,
            A = (0, z.useRef)(0),
            ir = (0, ke.CH)(),
            [lr] = z.useState(new Fr.LU()),
            cr = (0, z.useCallback)(
              (or = !1) => {
                if ((or && (A.current = 0), Z?.length > 0)) {
                  const Ur = Z[A.current].nDurationMs;
                  lr.Schedule(Ur, () => {
                    const fe = A.current;
                    (A.current = (A.current + 1) % Z.length),
                      fe != A.current && (cr(), ir());
                  });
                }
              },
              [Z, lr, ir],
            );
          return (
            (0, z.useEffect)(
              () => (Z.length > 0 && cr(), () => lr.Cancel()),
              [Z, cr, lr],
            ),
            (0, n.jsx)("div", {
              className: e().TrailerCtn,
              children: Z?.map((or, Ur) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: (0, U.A)({
                      [e().FullDivImage]: !0,
                      [e().Transparent]: Ur != A.current,
                    }),
                    children: or.rctImage,
                  },
                  "e-" + Ur + "-" + or.stringifyID,
                ),
              ),
            })
          );
        }
        var Dr = i(16179),
          Yr = i(62178),
          qr = i(3348),
          _r = i(19563),
          Cr = i(18654),
          ae = i.n(Cr),
          ne = i(29245),
          re = i(41188);
        function ee(Y) {
          const { id: Z } = Y,
            { data: A } = (0, V.xz)(Z);
          return A
            ? (0, n.jsx)("div", {
                className: e().TagRow,
                children: (0, n.jsx)("div", {
                  className: e().Tags,
                  children: A.slice(0, 10)
                    .filter((ir) => ir.tagid)
                    .map((ir) =>
                      (0, n.jsx)(
                        re.p,
                        { tagid: ir.tagid, className: e().Tag },
                        "tag_" + ir.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function te(Y) {
          const {
              id: Z,
              displayID: A,
              name: ir,
              strStoreUrl: lr,
              elElementToAppend: cr,
              bShowDemoButton: or,
              bHideBottomHalf: Ur,
              bHidePrice: fe,
              bShowDeckCompatibilityDialog: he,
              bUseSubscriptionLayout: De,
              nCreatorAccountID: Ze,
              bPreventNavigation: Pe,
              bShowDescription: Ve,
            } = Y,
            [Je, Ke] = (0, z.useState)(!1),
            at = "",
            [rt, Ie] = (0, z.useState)(at),
            ut = (He) => Ie(`translateY( -${He?.clientHeight || 0}px )`),
            { data: Le } = (0, V.J$)(Z),
            { data: et } = (0, V.lv)(A),
            dt = !De && !or && !cr,
            tt = Le && Le.item_type == M.c6.qI;
          return (0, n.jsxs)("div", {
            className: e().BottomShelf,
            style: { transform: Ur && Je ? rt : at },
            onMouseEnter: () => Ke(!0),
            onFocus: () => Ke(!0),
            onMouseLeave: () => Ke(!1),
            onBlur: () => Ke(!1),
            children: [
              (0, n.jsxs)("a", {
                href: lr,
                className: e().Midline,
                onClick: (He) => {
                  Pe && He.preventDefault();
                },
                "aria-disabled": Pe,
                children: [
                  et &&
                    (0, n.jsx)("div", {
                      className: e().CapsuleImageAnchorPoint,
                      children: (0, n.jsx)("div", {
                        className: (0, U.A)(
                          e().CapsuleImageCtn,
                          e().WithCornerShine,
                        ),
                        children: (0, n.jsx)("img", {
                          loading: "lazy",
                          src: (0, I.b0)(et, "header"),
                          alt: Le?.name,
                        }),
                      }),
                    }),
                  !fe &&
                    !De &&
                    (0, n.jsx)("div", {
                      className: e().Price,
                      children: (0, n.jsx)(a.NF, {
                        id: Z,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: e().BottomShelfOffScreen,
                ref: ut,
                children: (0, n.jsxs)("div", {
                  className: e().TextContent,
                  children: [
                    (0, n.jsx)("a", {
                      href: lr,
                      onClick: (He) => {
                        Pe && He.preventDefault();
                      },
                      "aria-disabled": Pe,
                      children: (0, n.jsx)("div", {
                        className: e().GameTitle,
                        children: Le?.name || ir,
                      }),
                    }),
                    Ve && (0, n.jsx)(se, { id: Z }),
                    (0, n.jsx)(ee, { id: Z }),
                    !he && (0, n.jsx)(h.J, { id: Z }),
                    !!(!he && dt) &&
                      (0, n.jsxs)("div", {
                        className: e().ReviewsAndRelease,
                        children: [
                          (0, n.jsx)(ne.Q, {
                            id: Z,
                            strClassName: e().PlatformDisplay,
                          }),
                          (0, n.jsx)(ie, { id: Z }),
                        ],
                      }),
                    or && (0, n.jsx)(y.j, { id: Z, className: e().DemoButton }),
                    !!(he && tt) && (0, n.jsx)(_r.Q8, { id: Z }),
                    !!cr && cr,
                    De &&
                      tt &&
                      Z &&
                      "appid" in Z &&
                      Z.appid &&
                      (0, n.jsx)(j.E, { appid: Z.appid, bIsMuted: !1 }),
                    Ze && (0, n.jsx)(N, { nCreatorAccountID: Ze }),
                  ],
                }),
              }),
            ],
          });
        }
        function ie(Y) {
          const { id: Z } = Y,
            { data: A } = (0, V.by)(Z);
          if (!A) return null;
          const ir = (0, qr.CC)(A);
          return (0, n.jsx)("div", {
            className: e().ReleaseDate,
            children: ir,
          });
        }
        function se(Y) {
          const { id: Z } = Y,
            { data: A } = (0, V.wl)(Z);
          return A
            ? (0, n.jsx)("div", {
                className: e().ShortDescription,
                children: A?.short_description,
              })
            : null;
        }
        function ot(Y) {
          const {
              id: Z,
              displayID: A,
              strStoreUrl: ir,
              bHideBottomHalf: lr,
              bShowDeckCompatibilityDialog: cr,
              bShowWishlistButton: or = !0,
              bShowIgnoreButton: Ur = !1,
            } = Y,
            { data: fe } = (0, V.Yo)(Z),
            { data: he } = (0, V.j4)(Z),
            De = fe === void 0 && he === void 0;
          return (0, n.jsxs)("div", {
            className: (0, U.A)(
              e().GameHoverCapsuleCtn,
              De && e().Loading,
              ae().InGameHover,
              lr && e().UseHidingBottomHalf,
            ),
            children: [
              (0, n.jsxs)("a", {
                href: ir,
                className: e().TrailerAnchorStoreLink,
                children: [
                  !!(or && !cr) && (0, n.jsx)(l.E, { id: A, snr: Y.strSNR }),
                  !!(Ur && !cr) && (0, n.jsx)(f, { id: A, snr: Y.strSNR }),
                  Z && (0, n.jsx)(Ar, { id: Z }),
                ],
              }),
              (0, n.jsx)(te, { ...Y }),
            ],
          });
        }
        function Ce(Y) {
          const {
              id: Z,
              name: A,
              bPreventNavigation: ir,
              elElementToAppend: lr,
              bShowDemoButton: cr,
              bPreferDemoStorePage: or,
              bHidePrice: Ur,
              bUseSubscriptionLayout: fe,
              strExtraParams: he,
              children: De,
              nCreatorAccountID: Ze,
              nWidthMultiplier: Pe,
              bShowDeckCompatibilityDialog: Ve,
              bShowWishlistButton: Je = !0,
              bShowIgnoreButton: Ke = !1,
              bShowDescription: at = !1,
              ...rt
            } = Y,
            { data: Ie } = (0, V.J$)(Z),
            ut = (0, p.Qn)(),
            { strStoreURL: Le, snr: et } = (0, Dr.x)(Ie, or);
          if ((!Ie && !A) || ut)
            return (0, n.jsx)(n.Fragment, { children: De });
          let dt = Z;
          Ie &&
            Ie.item_type == M.c6.RD &&
            Ie.included_appids?.length == 1 &&
            (dt = { appid: Ie.included_appids[0] });
          const tt = (0, Yr.n)() == "hiding",
            He = ir || !Ie ? void 0 : Le,
            mt = {
              id: Z,
              displayID: dt,
              name: A,
              bPreventNavigation: ir,
              strStoreUrl: He,
              elElementToAppend: lr,
              bShowDemoButton: cr,
              bShowDeckCompatibilityDialog: Ve,
              bHideBottomHalf: tt,
              bHidePrice: Ur,
              bUseSubscriptionLayout: fe,
              strSNR: et,
              nCreatorAccountID: Ze,
              bShowWishlistButton: Je,
              bShowIgnoreButton: Ke,
              bShowDescription: at,
            },
            ft = (0, n.jsx)(ot, { ...mt }),
            Bt = He ? (0, n.jsx)("a", { href: He, children: De }) : De;
          return (0, n.jsx)(Yr.J, {
            hoverContent: ft,
            nWidthMultiplier: Pe,
            ...rt,
            children: Bt,
          });
        }
      },
      80104: (k, J, i) => {
        "use strict";
        i.d(J, { J: () => P });
        var n = i(7850),
          M = i(84346),
          a = i(44420),
          h = i(83784),
          y = i(40358),
          j = i(29522),
          g = i(19619),
          b = i(12818),
          x = i(71421),
          d = i(36707),
          w = i(64769),
          B = i.n(w),
          S = i(39905),
          T = i(72609);
        function P(W) {
          const { id: o, bTruncateTotalReviews: c, bShowTooltip: e } = W,
            { data: U } = (0, y.ik)(o),
            { data: N } = (0, y.J$)(o),
            l = (0, j.h0)(o),
            { data: z } = (0, y.J$)(l);
          if (!U || !N || (N.type == a.uE.ue && !(0, h.J)(z))) return null;
          let Q = U.summary_unfiltered || U.summary_filtered,
            X = "#ReviewScore_UserReviewScoreAria",
            v = !1;
          const K = S.Z.Localize("#Language_" + T.TS.LANGUAGE);
          if (
            (g.Fm.Get().BShowFilteredUserReviewScores() &&
              (U.summary_language_specific
                ? ((v = !0),
                  (X = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (Q = U.summary_language_specific))
                : (Q = U.summary_filtered)),
            !Q || !Q.review_score)
          )
            return null;
          let p = B().ReviewScoreNone;
          Q.review_score > 0 && Q.review_score < a.j6.hc
            ? (p = B().ReviewScoreLow)
            : Q.review_score == a.j6.hc
              ? (p = B().ReviewScoreMixed)
              : (p = B().ReviewScoreHigh);
          const Jr = `${T.TS.STORE_BASE_URL}app/${N.appid}/#app_reviews_hash`,
            Ir = (0, n.jsxs)("div", {
              className: (0, d.A)(B().ReviewScoreValue, p),
              children: [
                (0, n.jsx)("div", {
                  className: B().ReviewScoreLabel,
                  "aria-label": S.Z.Localize(X, Q.review_score_label, K),
                  children: Q.review_score_label,
                }),
                (0, n.jsxs)("div", {
                  className: B().ReviewScoreCount,
                  "aria-label": S.Z.Localize(
                    "#GameHover_UserReviewCount",
                    Q.review_count.toLocaleString((0, M.J)()),
                  ),
                  children: [
                    "(",
                    c
                      ? "(" + Q.review_count.toLocaleString((0, M.J)()) + ")"
                      : v
                        ? S.Z.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            Q.review_count.toLocaleString((0, M.J)()),
                            K,
                          )
                        : S.Z.Localize(
                            "#GameHover_UserReviewCount",
                            Q.review_count.toLocaleString((0, M.J)()),
                          ),
                    ")",
                  ],
                }),
                !c &&
                  (0, n.jsxs)("div", {
                    className: B().ReviewScoreHeader,
                    children: [
                      " ",
                      S.Z.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let Or = "#ReviewScore_PercentPositive";
          if (N.item_type === a.c6.xO)
            Or = "#ReviewScore_PercentPositive_bundle";
          else if (N.item_type === a.c6.qI)
            switch (N.type) {
              case a.uE.Sv:
                Or = "#ReviewScore_PercentPositive_software";
                break;
              case a.uE.Wz:
                Or = "#ReviewScore_PercentPositive_video";
                break;
              case a.uE.Hk:
                Or = "#ReviewScore_PercentPositive_hardware";
                break;
              case a.uE.gQ:
                Or = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, n.jsx)(b.q, {
            url: Jr,
            className: (0, d.A)(B().ReviewScore, "ReviewScore"),
            children:
              e && Q.percent_positive != null && Q.review_count != null && Or
                ? (0, n.jsx)(x.he, {
                    bTopmost: !0,
                    toolTipContent: S.Z.Localize(
                      Or,
                      Q.percent_positive,
                      Q.review_count,
                    ),
                    children: Ir,
                  })
                : Ir,
          });
        }
      },
      44267: (k, J, i) => {
        "use strict";
        i.d(J, { E: () => c });
        var n = i(7850),
          M = i(19298),
          a = i(44420),
          h = i(89926),
          y = i(40358),
          j = i(29522),
          g = i(24179),
          b = i(54528),
          x = i(96362),
          d = i(90626),
          w = i(36118),
          B = i(47689),
          S = i(36707),
          T = i(3166),
          P = i(64769),
          W = i.n(P),
          o = i(39905);
        function c(e) {
          const {
              id: U,
              snr: N,
              classOverride: l,
              styleOverride: z,
              bShowInGamepadUI: Q,
            } = e,
            { data: X } = (0, y.J$)(U),
            { elDialogElement: v, fnShowLogonDialog: K } = (0, h.l)(),
            [p, Jr] = (0, d.useState)(() => {
              if (
                X &&
                (X.type == a.uE.ue || X.type == a.uE.Vi) &&
                X.related_items?.parent_appid
              )
                return X.related_items?.parent_appid;
              if (U && "appid" in U) return U.appid;
            }),
            Ir = (0, j.$5)(p),
            Or = (0, b.bB)(p),
            { bIsOwned: yr } = (0, g.ZJ)(Ir),
            [dr, ar] = (0, d.useState)(!1),
            nr = (0, B.m)("GameHoverWishlistButton"),
            { mutateAsync: tr } = (0, x.s)(p, !Or, N);
          (0, d.useEffect)(() => {
            U &&
              "appid" in U &&
              (X?.type == a.uE.ue || X?.type == a.uE.Vi) &&
              Jr(X.related_items?.parent_appid || U.appid);
          }, [X, U]);
          const ur = (0, d.useCallback)(
            async (D) => {
              T.iA.logged_in
                ? (D.preventDefault(),
                  D.stopPropagation(),
                  ar(!0),
                  await tr(),
                  nr.token.reason || ar(!1))
                : K();
            },
            [nr.token.reason, K, tr],
          );
          return yr && X?.type != a.uE.Hk
            ? null
            : (0, n.jsxs)(M.Z, {
                className: (0, S.A)(
                  W().WishlistButton,
                  Q && W().ShowInGamepadUI,
                  l,
                ),
                onActivate: ur,
                style: z,
                children: [
                  Or ? (0, n.jsx)(w.qnF, {}) : (0, n.jsx)(w.T4m, {}),
                  (0, n.jsx)("div", {
                    className: (0, S.A)(
                      W().WishlistButtonText,
                      dr && W().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: o.Z.Localize(
                      Or ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  v,
                ],
              });
        }
      },
      62178: (k, J, i) => {
        "use strict";
        i.d(J, { J: () => o, n: () => U });
        var n = i(7850),
          M = i(67344),
          a = i(90626),
          h = i(41301),
          y = i(561),
          j = i(76867),
          g = i(25792),
          b = i(21659),
          x = i(36707),
          d = i(54963),
          w = i(3166),
          B = i(64769),
          S = i.n(B),
          T = i(10350),
          P = i.n(T);
        const W = 150;
        function o(z) {
          const {
              hoverContent: Q,
              hoverProps: X,
              nDelayShowMs: v,
              nWidthMultiplier: K,
              children: p,
              className: Jr,
            } = z,
            Ir = (0, w.Qn)(),
            Or = (0, b.zI)(),
            yr = !Ir && !Or,
            [dr, ar] = a.useState(!1),
            [nr, tr] = a.useState(void 0),
            ur = (I) => {
              ar(!0), tr(I.currentTarget);
            },
            D = () => ar(!1),
            O = (I) => {
              I.keyCode == h.zV &&
                (ar(!1), I.preventDefault(), I.stopPropagation());
            },
            f = () => ar(!1);
          return (0, n.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, x.A)(P().ItemHoverSource, Jr),
            onMouseEnter: ur,
            onMouseLeave: D,
            onTouchStart: f,
            onKeyDown: O,
            children: [
              yr &&
                nr &&
                (0, n.jsx)(c, {
                  visible: dr,
                  target: nr,
                  nDelayShowMs: v,
                  nWidthMultiplier: K,
                  hoverProps: X,
                  children: Q,
                }),
              (0, n.jsx)(g.tH, { children: p }),
            ],
          });
        }
        function c(z) {
          const {
              hoverProps: Q,
              nDelayShowMs: X = W,
              nWidthMultiplier: v = 1.15,
              target: K,
              visible: p,
              children: Jr,
            } = z,
            [Ir, Or] = a.useState(p);
          if (
            (a.useEffect(() => {
              if (p)
                if (X) {
                  const ar = window.setTimeout(() => Or(!0), X);
                  return () => window.clearTimeout(ar);
                } else {
                  Or(!0);
                  return;
                }
              else {
                if ((0, M.p)()) return;
                Or(!1);
                return;
              }
            }, [p]),
            a.useEffect(() => {
              if (!Ir) return;
              const ar = 50,
                nr = K.ownerDocument.defaultView;
              if (nr) {
                const tr = nr.scrollY,
                  ur = () => {
                    Math.abs(nr.scrollY - tr) > ar && Or(!1);
                  };
                return (
                  window.addEventListener("scroll", ur),
                  () => window.removeEventListener("scroll", ur)
                );
              }
              return () => {};
            }, [Ir, K?.ownerDocument.defaultView]),
            !K || !Jr || !Ir)
          )
            return null;
          const yr = K.clientWidth < 200 ? "8px" : "10px",
            dr = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(Q || {}),
              style: {
                zIndex: 98,
                width: K.clientWidth * v,
                fontSize: yr,
                minHeight: U() == "hiding" ? void 0 : 300,
                height:
                  U() == "hiding" ? K.clientWidth * 1.15 * (125 / 184) : void 0,
                ...Q?.style,
              },
              target: K,
            };
          return (0, n.jsx)(e, {
            hoverProps: dr,
            children: (0, n.jsx)(g.tH, { children: Jr }),
          });
        }
        function e(z) {
          const { hoverProps: Q, children: X } = z,
            v = a.useCallback((p) => p?.focus(), []);
          return (0, n.jsx)(y.g, {
            ...Q,
            children: (0, n.jsx)(j.M, {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: {
                appearActive: (0, x.A)(P().Opening, S().Opening),
                enterDone: (0, x.A)(P().Open, S().Open),
              },
              children: (p) =>
                (0, n.jsx)("div", {
                  ref: (0, d.XB)(p, v),
                  className: P().HoverContentTransition,
                  tabIndex: -1,
                  children: X,
                }),
            }),
          });
        }
        function U() {
          return window.sessionStorage?.getItem(N) || "default";
        }
        const N = "DEBUG_UseNewGameHover";
        function l(z) {
          window.sessionStorage.setItem(N, z);
        }
        window.SetHoverPresentation = l;
      },
      68260: (k, J, i) => {
        "use strict";
        i.d(J, { j: () => xi });
        var n = i(7850),
          M = i(44420),
          a = i(40358),
          h = i(13977),
          y = i(71421),
          j = i(36707),
          g = i(94162),
          b = i(47729),
          x = i(72365),
          d = i.n(x),
          w = i(97825),
          B = i(99412),
          S = i(64868),
          T = i(66243),
          P = i(29522),
          W = i(24179),
          o = i(20125),
          c = i(90626);
        const e = null,
          U = -700,
          N = null,
          l = null,
          z = null,
          Q = null,
          X = null,
          v = null,
          K = null,
          p = null,
          Jr = null,
          Ir = null,
          Or = null,
          yr = null,
          dr = null,
          ar = null,
          nr = null,
          tr = null,
          ur = -600,
          D = -599,
          O = -598,
          f = -597,
          I = -596,
          $ = -595,
          R = -594,
          q = -593,
          V = -592,
          _ = -591,
          br = -590,
          vr = -589,
          Br = -588,
          Wr = -587,
          Fr = -586,
          ke = -585,
          ct = -584,
          Nr = -583,
          Kr = -582,
          Lr = -581,
          Hr = -580,
          Qr = -579,
          Xr = -578,
          kr = -577,
          Vr = -576,
          Ar = -575,
          Zr = -574,
          pr = -573,
          Rr = -572,
          Gr = -571,
          $r = null,
          Dr = -500,
          Yr = -499,
          qr = -498,
          _r = -497,
          Cr = -496,
          ae = null,
          ne = null,
          re = -300,
          ee = -203,
          te = -202,
          ie = -201,
          se = -200,
          ot = -199,
          Ce = -198,
          Y = -197,
          Z = -196,
          A = -195,
          ir = -194,
          lr = -193,
          cr = -192,
          or = -191,
          Ur = -190,
          fe = -189,
          he = -188,
          De = -187,
          Ze = -186,
          Pe = -185,
          Ve = -184,
          Je = -183,
          Ke = -182,
          at = null,
          rt = -102,
          Ie = -101,
          ut = -100,
          Le = -99,
          et = null,
          dt = null,
          tt = null,
          He = -95,
          mt = -94,
          ft = -93,
          Bt = -92,
          $e = null,
          Zt = -90,
          Ot = -89,
          Tt = -88,
          Et = -87,
          le = -86,
          oe = -85,
          gt = -84,
          jt = -83,
          Wt = -82,
          Dt = -81,
          xt = -80,
          Ut = -79,
          ht = -75,
          vt = -74,
          it = -70,
          nt = -69,
          It = -68,
          Ft = -67,
          lt = null,
          Ye = -1,
          Nt = 0,
          Pt = 1,
          F = 2,
          r = 3,
          s = 4,
          E = 5,
          er = 6,
          hr = 7,
          jr = 8,
          ce = 9,
          Mr = 10,
          mr = 11,
          sr = 12,
          Pr = 13,
          xe = 14,
          Ue = 15,
          Fe = 16,
          Kt = 17,
          Jt = 18,
          Ae = 19,
          Ct = 20,
          hi = 21,
          Ii = 32;
        function ri(L) {
          switch (L) {
            case Nt:
              return "Windows";
            case Pt:
              return "Windows 3.11";
            case F:
              return "Windows 95";
            case r:
              return "Windows 98";
            case s:
              return "Windows ME";
            case E:
              return "Windows NT";
            case er:
              return "Windows 2000";
            case hr:
              return "Windows XP";
            case jr:
              return "Windows 2003";
            case ce:
              return "Windows Vista";
            case Mr:
              return "Windows 7";
            case mr:
              return "Windows 2008";
            case sr:
              return "Windows 2012";
            case Ue:
              return "Windows 2012 R2";
            case Pr:
              return "Windows 8";
            case xe:
              return "Windows 8.1";
            case Fe:
              return "Windows 10";
            case Kt:
              return "Windows 2016";
            case Jt:
              return "Windows 2019";
            case Ae:
              return "Windows 2022";
            case Ct:
              return "Windows 11";
            case rt:
              return "Mac OS";
            case Ie:
              return "MacOS 10.4";
            case ut:
              return "MacOS 10.5";
            case Le:
              return "MacOS 10.5.8";
            case He:
              return "MacOS 10.6";
            case mt:
              return "MacOS 10.6.3";
            case ft:
              return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
            case Bt:
              return "MacOS 10.6.7";
            case Zt:
              return "MacOS 10.7";
            case Ot:
              return "MacOS 10.8";
            case Tt:
              return "MacOS 10.9";
            case Et:
              return "MacOS 10.10";
            case le:
              return "MacOS 10.11";
            case oe:
              return "MacOS 10.12";
            case gt:
              return "MacOS 10.13";
            case jt:
              return "MacOS 10.14";
            case Wt:
              return "MacOS 10.15";
            case Dt:
              return "MacOS 11 (as 10.16)";
            case ht:
              return "MacOS 12 (as 10.17)";
            case it:
              return "MacOS 13 (as 10.18)";
            case xt:
              return "MacOS 11";
            case Ut:
              return "MacOS 11.1";
            case vt:
              return "MacOS 12";
            case nt:
              return "MacOS 13";
            case It:
              return "MacOS 14";
            case Ft:
              return "MacOS 15";
            case ee:
              return "Linux";
            case te:
              return "Linux 2.2";
            case ie:
              return "Linux 2.4";
            case se:
              return "Linux 2.6";
            case ot:
              return "Linux 3.2";
            case Ce:
              return "Linux 3.5";
            case Y:
              return "Linux 3.6";
            case Z:
              return "Linux 3.10";
            case A:
              return "Linux 3.16";
            case ir:
              return "Linux 3.18";
            case lr:
              return "Linux 3.x";
            case or:
              return "Linux 4.1";
            case Ur:
              return "Linux 4.4";
            case fe:
              return "Linux 4.9";
            case he:
              return "Linux 4.14";
            case De:
              return "Linux 4.19";
            case cr:
              return "Linux 4.x";
            case Ze:
              return "Linux 5.x";
            case Pe:
              return "Linux 5.4";
            case Ve:
              return "Linux 6.x";
            case Je:
              return "Linux 7.x";
            case Ke:
              return "Linux 5.10";
            case re:
              return "PS3";
            case U:
              return "Web Client";
            case Dr:
              return "Android";
            case Yr:
              return "Android 6.x";
            case qr:
              return "Android 7.x";
            case _r:
              return "Android 8.x";
            case Cr:
              return "Android 9.x";
            case ur:
              return "iOS";
            case D:
              return "iOS 1";
            case O:
              return "iOS 2";
            case f:
              return "iOS 3";
            case I:
              return "iOS 4";
            case $:
              return "iOS 5";
            case R:
              return "iOS 6";
            case q:
              return "iOS 6.1";
            case V:
              return "iOS 7";
            case _:
              return "iOS 7.1";
            case br:
              return "iOS 8";
            case vr:
              return "iOS 8.1";
            case Br:
              return "iOS 8.2";
            case Wr:
              return "iOS 8.3";
            case Fr:
              return "iOS 8.4";
            case ke:
              return "iOS 9";
            case ct:
              return "iOS 9.1";
            case Nr:
              return "iOS 9.2";
            case Kr:
              return "iOS 9_.3";
            case Lr:
              return "iOS 10";
            case Hr:
              return "iOS 10.1";
            case Qr:
              return "iOS 10.2";
            case Xr:
              return "iOS 10.3";
            case kr:
              return "iOS 11";
            case Vr:
              return "iOS 11.1";
            case Ar:
              return "iOS 11.2";
            case Zr:
              return "iOS 11.3";
            case pr:
              return "iOS 11.4";
            case Rr:
              return "iOS 12";
            case Gr:
              return "iOS 12.1";
            default:
            case Ye:
              return "Unknown";
          }
        }
        var ei = ((L) => (
            (L[(L.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (L[(L.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (L[(L.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (L[(L.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (L[(L.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (L[(L.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (L[(L.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (L[(L.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (L[(L.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (L[(L.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (L[(L.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (L[(L.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (L[(L.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (L[(L.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (L[(L.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax"),
            L
          ))(ei || {}),
          $t = i(20194),
          Yt = i(54806),
          Xt = i(75233),
          ti = i(51614),
          yt = i(72604),
          St = i(42993),
          Qe = i(35038),
          Lt = i(68312),
          Fi = i(33512),
          fr = i(80613),
          G = i.n(fr),
          u = i(75245);
        class Be extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Be.prototype.client_instanceid || u.Sg(Be.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = u.w0(Be.M())), Be.sm_mbf;
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Be.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Be.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Be();
            return Be.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Be.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Be.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Request";
          }
        }
        class ge extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.protocol_version || u.Sg(ge.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    protocol_version: {
                      n: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = u.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(ge.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new ge();
            return ge.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(ge.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(ge.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Response";
          }
        }
        class Xe extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Xe.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new Xe();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Xe();
            return Xe.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Request";
          }
        }
        class ye extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.sessions || u.Sg(ye.M()),
              fr.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    sessions: { n: 1, c: Me, r: !0, q: !0 },
                    refetch_interval_sec: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = u.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(ye.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new ye();
            return ye.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(ye.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(ye.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response";
          }
        }
        class Me extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Me.prototype.client_instanceid || u.Sg(Me.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    protocol_version: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    machine_name: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    os_type: { n: 5, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    realm: { n: 7, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = u.w0(Me.M())), Me.sm_mbf;
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Me.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Me.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Me();
            return Me.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Me.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Me.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response_Session";
          }
        }
        class we extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.client_instanceid || u.Sg(we.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = u.w0(we.M())), we.sm_mbf;
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(we.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(we.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new we();
            return we.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(we.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(we.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Request";
          }
        }
        class ue extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.package_version || u.Sg(ue.M()),
              fr.Message.initialize(this, t, 0, -1, [7, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    package_version: {
                      n: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    os: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ip_public: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ip_private: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    bytes_available: {
                      n: 6,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    running_games: { n: 7, c: be, r: !0, q: !0 },
                    protocol_version: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    clientcomm_version: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    local_users: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: u.qM.readUint32,
                      pbr: u.qM.readPackedUint32,
                      bw: u.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(ue.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new ue();
            return ue.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(ue.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(ue.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData";
          }
        }
        class be extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.appid || u.Sg(be.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    extra_info: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    time_running_sec: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = u.w0(be.M())), be.sm_mbf;
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(be.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(be.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new be();
            return be.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(be.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(be.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData_RunningGames";
          }
        }
        class Oe extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Oe.prototype.client_info || u.Sg(Oe.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: { client_info: { n: 1, c: ue } },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = u.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(t = !1) {
            return Oe.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Oe.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Oe.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Oe();
            return Oe.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Oe.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Oe.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Response";
          }
        }
        class de extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.fields || u.Sg(de.M()),
              fr.Message.initialize(this, t, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    fields: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                    filters: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    client_instanceid: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    include_client_info: {
                      n: 4,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    filter_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: u.qM.readUint32,
                      pbr: u.qM.readPackedUint32,
                      bw: u.gp.writeRepeatedUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = u.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(de.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new de();
            return de.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(de.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(de.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Request";
          }
        }
        class ve extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ve.prototype.bytes_available || u.Sg(ve.M()),
              fr.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    bytes_available: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    apps: { n: 2, c: Se, r: !0, q: !0 },
                    client_info: { n: 3, c: ue },
                    refetch_interval_sec_full: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    refetch_interval_sec_changing: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    refetch_interval_sec_updating: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = u.w0(ve.M())), ve.sm_mbf;
          }
          toObject(t = !1) {
            return ve.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(ve.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(ve.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new ve();
            return ve.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(ve.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(ve.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response";
          }
        }
        class Se extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Se.prototype.appid || u.Sg(Se.M()),
              fr.Message.initialize(this, t, 0, -1, [17], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    app: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    category: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    app_type: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    num_downloading: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    bytes_download_rate: {
                      n: 11,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    bytes_downloaded: {
                      n: 12,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_to_download: {
                      n: 13,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    dlcs: { n: 17, c: ze, r: !0, q: !0 },
                    favorite: { n: 18, br: u.qM.readBool, bw: u.gp.writeBool },
                    auto_update: {
                      n: 19,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    installed: { n: 20, br: u.qM.readBool, bw: u.gp.writeBool },
                    download_paused: {
                      n: 21,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    changing: { n: 22, br: u.qM.readBool, bw: u.gp.writeBool },
                    available_on_platform: {
                      n: 23,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    bytes_staged: {
                      n: 24,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_to_stage: {
                      n: 25,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    bytes_required: {
                      n: 26,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    source_buildid: {
                      n: 27,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    target_buildid: {
                      n: 28,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    estimated_seconds_remaining: {
                      n: 29,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    queue_position: {
                      n: 30,
                      d: -1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    uninstalling: {
                      n: 31,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    rt_time_scheduled: {
                      n: 32,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    running: { n: 33, br: u.qM.readBool, bw: u.gp.writeBool },
                    update_percentage: {
                      n: 34,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = u.w0(Se.M())), Se.sm_mbf;
          }
          toObject(t = !1) {
            return Se.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Se.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Se.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Se();
            return Se.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Se.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Se.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData";
          }
        }
        class ze extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ze.prototype.appid || u.Sg(ze.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    app: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    installed: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = u.w0(ze.M())), ze.sm_mbf;
          }
          toObject(t = !1) {
            return ze.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(ze.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(ze.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new ze();
            return ze.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(ze.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(ze.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData_DLCData";
          }
        }
        class me extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.appid || u.Sg(me.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = u.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(me.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new me();
            return me.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(me.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(me.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Request";
          }
        }
        class pe extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new pe();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new pe();
            return pe.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Response";
          }
        }
        class Te extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Te.prototype.appid || u.Sg(Te.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = u.w0(Te.M())), Te.sm_mbf;
          }
          toObject(t = !1) {
            return Te.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Te.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Te.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Te();
            return Te.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Te.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Te.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Request";
          }
        }
        class Re extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Re.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new Re();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Re();
            return Re.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Response";
          }
        }
        class Ee extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ee.prototype.appid || u.Sg(Ee.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    action: {
                      n: 2,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = u.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(t = !1) {
            return Ee.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(Ee.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(Ee.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Ee();
            return Ee.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(Ee.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(Ee.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Request";
          }
        }
        class je extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              je.prototype.client_instanceid || u.Sg(je.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    appid: {
                      n: 2,
                      q: !0,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    query_params: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = u.w0(je.M())), je.sm_mbf;
          }
          toObject(t = !1) {
            return je.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(je.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(je.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new je();
            return je.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(je.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return je.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(je.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Request";
          }
        }
        class Ge extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ge.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new Ge();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new Ge();
            return Ge.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Response";
          }
        }
        class qe extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return qe.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new qe();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new qe();
            return qe.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Response";
          }
        }
        class We extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              We.prototype.client_instanceid || u.Sg(We.M()),
              fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    enable: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = u.w0(We.M())), We.sm_mbf;
          }
          toObject(t = !1) {
            return We.toObject(t, this);
          }
          static toObject(t, m) {
            return u.BT(We.M(), t, m);
          }
          static fromObject(t) {
            return u.Uq(We.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new We();
            return We.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return u.zj(We.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return We.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            u.i0(We.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Request";
          }
        }
        class _e extends fr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), fr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return _e.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new _e();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              H = new _e();
            return _e.deserializeBinaryFromReader(H, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Response";
          }
        }
        var Mt;
        ((L) => {
          function t(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.GetClientLogonInfo#1",
              (0, Qe.I8)(Be, gr, xr),
              ge,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetClientLogonInfo = t;
          function m(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, Qe.I8)(Xe, gr, xr),
              ye,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetAllClientLogonInfo = m;
          function H(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.GetClientInfo#1",
              (0, Qe.I8)(we, gr, xr),
              Oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetClientInfo = H;
          function C(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, Qe.I8)(de, gr, xr),
              ve,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetClientAppList = C;
          function rr(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, Qe.I8)(me, gr, xr),
              pe,
              { ePrivilege: 1 },
            );
          }
          L.InstallClientApp = rr;
          function wr(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, Qe.I8)(Te, gr, xr),
              Re,
              { ePrivilege: 1 },
            );
          }
          L.UninstallClientApp = wr;
          function Tr(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, Qe.I8)(je, gr, xr),
              Ge,
              { ePrivilege: 1 },
            );
          }
          L.LaunchClientApp = Tr;
          function Sr(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, Qe.I8)(Ee, gr, xr),
              qe,
              { ePrivilege: 1 },
            );
          }
          L.SetClientAppUpdateState = Sr;
          function Er(zr, gr, xr) {
            return zr.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, Qe.I8)(We, gr, xr),
              _e,
              { ePrivilege: 1 },
            );
          }
          L.EnableOrDisableDownloads = Er;
        })(Mt || (Mt = {}));
        const ii = "RemoteDownload_OnlineClient",
          si = "RemoteDownload_ClientAppList",
          ai = "RemoteDownload_ClientAppData",
          ni = "RemoteDownload_PatchNotes";
        class li extends Error {
          constructor(t, m) {
            super(t), (this.result = m);
          }
          result;
        }
        function kt() {
          const L = (0, Lt.KV)(),
            t = (0, St.LH)();
          return (0, $t.I)({
            queryKey: [ii, t],
            queryFn: async () => {
              const H = Qe.w.Init(Xe),
                C = await Mt.GetAllClientLogonInfo(L, H);
              if (C.GetEResult() !== yt.R)
                throw (
                  (console.error(
                    "Received error from GetAllClientLogonInfo",
                    C.GetEResult(),
                    C.Hdr().transport_error(),
                  ),
                  new Error(
                    `Error from GetAllClientLogonInfo: ${C.GetEResult()}`,
                  ))
                );
              const rr = [];
              for (const wr of C.Body().sessions())
                wr.device_type() !== B.eSB && rr.push(wr.toObject());
              return {
                sessions: rr,
                refetchInterval: C.Body().refetch_interval_sec() || 300,
              };
            },
            staleTime: 300 * 1e3,
            refetchInterval: (H) =>
              (H.state.data?.refetchInterval || 300) * 1e3,
          });
        }
        class ci {
          constructor(t) {
            Object.assign(this, t.toObject()),
              (this.bytes_to_download = parseInt(t.bytes_to_download() ?? "0")),
              (this.bytes_downloaded = parseInt(t.bytes_downloaded() ?? "0")),
              (this.bytes_staged = parseInt(t.bytes_staged() ?? "0")),
              (this.bytes_to_stage = parseInt(t.bytes_to_stage() ?? "0")),
              (this.bytes_required = parseInt(t.bytes_required() ?? "0"));
          }
          appid;
          app;
          category;
          app_type;
          num_downloading;
          bytes_download_rate;
          bytes_downloaded;
          bytes_to_download;
          favorite;
          auto_update;
          installed;
          download_paused;
          changing;
          available_on_platform;
          bytes_staged;
          bytes_to_stage;
          bytes_required;
          source_buildid;
          target_buildid;
          estimated_seconds_remaining;
          queue_position;
          uninstalling;
          rt_time_scheduled;
          update_percentage;
          BIsDownloading() {
            return this.num_downloading !== void 0 && this.num_downloading > 0;
          }
          SetDownloading() {
            (this.num_downloading = 1), (this.download_paused = !1);
          }
          SetPaused(t) {
            (this.download_paused = t), (this.num_downloading = t ? 0 : 1);
          }
          BIsAtTopOfQueue() {
            return this.queue_position === 0;
          }
          BIsPaused() {
            return (
              !!this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage ||
                this.queue_position != -1)
            );
          }
          BHasPendingUpdate() {
            return (
              !this.BIsDownloading() &&
              !this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage)
            );
          }
          GetPercentComplete() {
            return this.update_percentage
              ? this.update_percentage
              : this.bytes_to_download
                ? Math.floor(
                    (this.bytes_downloaded * 100) / this.bytes_to_download,
                  )
                : 0;
          }
        }
        async function Vt(L, t, m) {
          const H = t.client_instanceid,
            C = Qe.w.Init(de);
          C.Body().set_fields("games"),
            C.Body().set_filters(m),
            C.Body().set_client_instanceid(H),
            C.Body().set_include_client_info(!0);
          const rr = await Mt.GetClientAppList(L, C);
          if (rr.GetEResult() !== yt.R)
            throw (
              (console.error(
                "Received error from GetClientAppList",
                rr.GetEResult(),
                rr.Hdr().transport_error(),
              ),
              new li(
                `Error from GetClientAppList: ${rr.GetEResult()}`,
                rr.GetEResult(),
              ))
            );
          const wr = new Map();
          for (const Tr of rr.Body().apps()) {
            const Sr = new ci(Tr);
            wr.set(Tr.appid(), Sr);
          }
          return {
            session: t,
            mapApps: wr,
            clientInfo: rr.Body().client_info()?.toObject(),
            refetchIntervals: {
              full: rr.Body().refetch_interval_sec_full() || 3600,
              changing: rr.Body().refetch_interval_sec_changing() || 60,
              updating: rr.Body().refetch_interval_sec_updating() || 10,
            },
          };
        }
        async function oi(L, t, m, H) {
          if (!H) return;
          const C = await Vt(L, t, m);
          for (const [rr, wr] of C.mapApps) H.mapApps.set(rr, wr);
          return { ...C, mapApps: H.mapApps };
        }
        function Ht(L, t, m) {
          return [si, L, t, m];
        }
        function ui(L, t = !0) {
          const m = kt(),
            H = (0, Lt.KV)(),
            C = (0, St.LH)(),
            rr = (gr) => {
              t && (gr.result == yt.Dy || gr.result == yt._3) && m.refetch();
            },
            wr = (0, Yt.E)({
              queries: (m.data?.sessions || []).map((gr) => ({
                queryKey: Ht(C, gr.client_instanceid, "none"),
                queryFn: async () => Vt(H, gr, "none"),
                staletime: 3600 * 1e3,
                refetchInterval: (xr) =>
                  (xr.state.data?.refetchIntervals.full || 3600) * 1e3,
                enabled: m.isSuccess && !m.isFetching,
                onError: rr,
                retry: t,
              })),
            }),
            Tr = (0, c.useCallback)(
              (gr) => {
                if (!L) return gr;
                const xr = new Map(
                  Array.from(gr?.mapApps.entries() ?? []).filter(L),
                );
                return { ...gr, mapApps: xr };
              },
              [L],
            ),
            Sr = (0, Xt.jE)(),
            Er = (0, Yt.E)({
              queries: (m.data?.sessions || []).map((gr, xr) => ({
                queryKey: Ht(C, gr.client_instanceid, "changing"),
                queryFn: async () => oi(H, gr, "changing", wr[xr].data),
                enabled: wr[xr].isSuccess && !wr[xr].isFetching,
                staletime: 10 * 1e3,
                select: Tr,
                refetchInterval: (Ui) => {
                  const Qt = Ui.state.data;
                  if (!Qt) return 60 * 1e3;
                  let Gt = !1;
                  for (const _t of Qt.mapApps.values())
                    if (_t.BIsDownloading() || _t.uninstalling) {
                      Gt = !0;
                      break;
                    }
                  const qt = Qt.refetchIntervals;
                  return (Gt ? qt.updating : qt.changing) * 1e3;
                },
                onError: rr,
                retry: t,
              })),
            }),
            zr = () => {
              for (const gr of m.data?.sessions || []) {
                const xr = Ht(C, gr.client_instanceid, "changing");
                Sr.removeQueries({ queryKey: xr });
              }
              for (const gr of wr) gr.refetch();
            };
          return {
            rgQueries: Er.map((gr, xr) =>
              wr[xr].isError && !wr[xr].isFetching ? wr[xr] : gr,
            ),
            refetch: zr,
          };
        }
        function wt(L, t) {
          return [ai, L, t];
        }
        function zt(L, t = !0) {
          const m = (0, St.LH)(),
            { rgQueries: H } = ui(void 0, t);
          return (0, $t.I)({
            queryKey: wt(m, L),
            queryFn: () => {
              const C = new Map();
              for (const rr of H)
                if (rr.isSuccess) {
                  const wr = rr.data?.session?.client_instanceid,
                    Sr = rr.data?.mapApps?.get(L);
                  Sr &&
                    C.set(wr, {
                      session: rr.data.session,
                      app: Sr,
                      clientInfo: rr.data.clientInfo,
                    });
                }
              return C;
            },
            enabled: H.reduce(
              (C, rr) => C && rr.isSuccess && !rr.isFetching,
              !0,
            ),
            staleTime: 0,
            gcTime: 0,
          });
        }
        function Ni(L, t, m) {
          const H = useActiveAccount(),
            C = useActiveServiceTransport();
          return useQuery({
            queryKey: [ni, H, L, t, m],
            queryFn: async () => {
              if (!t || !m || t == m) return {};
              const wr = CProtoBufMsg.Init(
                  CClan_GetPartnerEventsByBuildIDRange_Request,
                ),
                Tr = wr.Body().add_requests();
              Tr.set_appid(L),
                Tr.set_start_build_id(t + 1),
                wr.Body().set_count(100);
              const Sr = await ClanService.GetPartnerEventsByBuildIDRange(
                C,
                wr,
              );
              if (Sr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from GetPartnerEventsByBuildIDRange",
                    Sr.GetEResult(),
                  ),
                  new Error(
                    `Error from GetPartnerEventsByBuildIDRange: ${Sr.GetEResult()}`,
                  ))
                );
              return {
                appid: L,
                source_buildid: t,
                target_buildid: m,
                patch_notes: Sr.Body()
                  .toObject()
                  .matches?.sort((Er, zr) => zr.build_id - Er.build_id),
              };
            },
          });
        }
        function di(L, t, m) {
          const H = (0, Lt.KV)(),
            C = zt(L),
            rr = (0, St.LH)(),
            wr = (0, Xt.jE)();
          return (0, ti.n)({
            mutationFn: async () => {
              const Tr = Qe.w.Init(me);
              Tr.Body().set_appid(L), Tr.Body().set_client_instanceid(t);
              const Sr = await Mt.InstallClientApp(H, Tr);
              if (Sr.GetEResult() != yt.R)
                throw (
                  (console.error(
                    "Received error from InstallClientApp",
                    Sr.GetEResult(),
                  ),
                  new Error(`Error from InstallClientApp: ${Sr.GetEResult()}`))
                );
              const Er = C?.data;
              Er && Er.get(t) && Er.get(t).app.SetDownloading(),
                wr.setQueryData(wt(rr, L), Er),
                C.refetch();
            },
            onSuccess: m,
          });
        }
        function Pi(L, t, m) {
          const H = useActiveServiceTransport(),
            C = zt(L),
            rr = useActiveAccount(),
            wr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Tr = CProtoBufMsg.Init(
                CClientComm_UninstallClientApp_Request,
              );
              Tr.Body().set_appid(L), Tr.Body().set_client_instanceid(t);
              const Sr = await ClientCommService.UninstallClientApp(H, Tr);
              if (Sr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from UninstallClientApp",
                    Sr.GetEResult(),
                  ),
                  new Error(
                    `Error from UninstallClientApp: ${Sr.GetEResult()}`,
                  ))
                );
              const Er = C?.data;
              Er && Er.get(t) && (Er.get(t).app.uninstalling = !0),
                wr.setQueryData(wt(rr, L), Er),
                C.refetch();
            },
            onSuccess: m,
          });
        }
        function Ki(L, t, m) {
          const H = useActiveServiceTransport(),
            C = zt(L),
            rr = useActiveAccount(),
            wr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Tr = C?.data,
                Sr = Tr && Tr.get(t),
                Er = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
              Er.Body().set_appid(L),
                Er.Body().set_client_instanceid(t),
                Er.Body().set_action(1);
              const zr = await ClientCommService.SetClientAppUpdateState(H, Er);
              if (zr.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from SetClientAppUpdateState",
                    zr.GetEResult(),
                  ),
                  new Error(
                    `Error from SetClientAppUpdateState: ${zr.GetEResult()}`,
                  ))
                );
              Sr && Tr.get(t).app.SetDownloading(),
                wr.setQueryData(wt(rr, L), Tr),
                C.refetch();
            },
            onSuccess: m,
          });
        }
        function Li(L, t, m, H) {
          const C = useActiveServiceTransport(),
            rr = zt(L),
            wr = useActiveAccount(),
            Tr = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Sr = rr?.data,
                Er = Sr && Sr.get(t);
              if (
                Er?.clientInfo?.clientcomm_version &&
                Er.clientInfo.clientcomm_version >= 1
              ) {
                const zr = CProtoBufMsg.Init(
                  CClientComm_EnableOrDisableDownloads_Request,
                );
                zr.Body().set_client_instanceid(t), zr.Body().set_enable(!m);
                const gr = await ClientCommService.EnableOrDisableDownloads(
                  C,
                  zr,
                );
                if (gr.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from EnableOrDisableDownloads",
                      gr.GetEResult(),
                    ),
                    new Error(
                      `Error from EnableOrDisableDownloads: ${gr.GetEResult()}`,
                    ))
                  );
              } else {
                const zr = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
                zr.Body().set_appid(L),
                  zr.Body().set_client_instanceid(t),
                  zr.Body().set_action(m ? 0 : 1);
                const gr = await ClientCommService.SetClientAppUpdateState(
                  C,
                  zr,
                );
                if (gr.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from SetClientAppUpdateState",
                      gr.GetEResult(),
                    ),
                    new Error(
                      `Error from SetClientAppUpdateState: ${gr.GetEResult()}`,
                    ))
                  );
              }
              Er && Sr.get(t)?.app.SetPaused(m),
                Tr.setQueryData(wt(wr, L), Sr),
                rr.refetch();
            },
            onSuccess: H,
          });
        }
        async function Hi(L, t, m, H) {
          const C = CProtoBufMsg.Init(CClientComm_LaunchClientApp_Request);
          C.Body().set_appid(m),
            C.Body().set_client_instanceid(t),
            C.Body().set_query_params(H);
          const rr = await ClientCommService.LaunchClientApp(L, C);
          if (rr.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from LaunchClientApp",
                rr.GetEResult(),
                rr.Hdr().transport_error(),
              ),
              new Error(`Error from LaunchClientApp: ${rr.GetEResult()}`))
            );
        }
        var mi = i(25792),
          fi = i(16346),
          Ne = i(18210),
          Bi = i(99047),
          gi = i(58579),
          At = i.n(gi);
        const yi = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function Mi(L) {
          const { setRemoteClientID: t, rgSessions: m } = L,
            H = (0, c.useCallback)(
              (C) => {
                m?.length &&
                  (0, fi.lX)(
                    (0, n.jsx)(wi, {
                      sessions: m,
                      setRemoteDownloadClientId: t,
                    }),
                    C,
                    yi,
                  );
              },
              [t, m],
            );
          return m?.length
            ? (0, n.jsx)("button", {
                onClick: H,
                className: At().ClientSelectDropdown,
                children: (0, n.jsx)(Oi, {}),
              })
            : null;
        }
        function wi({ sessions: L, setRemoteDownloadClientId: t }) {
          return (0, n.jsx)("ul", {
            className: At().ClientListDropdownMenu,
            children: L.map((m) =>
              (0, n.jsx)(
                Bi.kt,
                {
                  onSelected: () => {
                    t(m.client_instanceid);
                  },
                  children: (0, Ne.we)(
                    "#GamesList_Client_Indicator",
                    bi(m.device_type) ?? "",
                    m.machine_name,
                  ),
                },
                m.client_instanceid,
              ),
            ),
          });
        }
        function bi(L) {
          switch (L) {
            case B.g0U:
              return (0, Ne.we)("#Library_DeviceType_PC");
            case B.LS$:
              return (0, Ne.we)("#Library_DeviceType_SteamDeck");
            case B.bOm:
              return (0, Ne.we)("#Library_DeviceType_SteamMachine");
            case B.jYC:
              return (0, Ne.we)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function Oi(L) {
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ...L,
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var pt = i(2801),
          vi = i(36118),
          Si = i(85599),
          Rt = i(98609),
          zi = i(39285),
          st = i.n(zi);
        function Ti(L) {
          const { appid: t } = L,
            m = (0, P.$5)(t),
            { data: H } = (0, a.J$)(m),
            [C, rr, wr] = (0, S.uD)(!1),
            { mutateAsync: Tr } = (0, w.S)({ appid: t }),
            [Sr, Er] = (0, c.useState)(!1),
            zr = (0, W.S6)(t);
          return !H || zr
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)(T.sP, {
                    onClick: async () => {
                      try {
                        Er(!0), await Tr(), (0, o.WZ)(), Er(!1), rr();
                      } catch (gr) {
                        Er(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            gr,
                          );
                      }
                    },
                    children: [
                      Sr && (0, n.jsx)(Si.t, { size: "small" }),
                      (0, Ne.we)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, n.jsx)(mi.tH, {
                    children: (0, n.jsx)(pt.EN, {
                      active: C,
                      children: (0, n.jsx)(pt.o0, {
                        strTitle: (0, Ne.we)("#Sale_AddedToLibrary"),
                        strDescription: (0, Ne.PP)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, n.jsx)("span", {
                            className: st().GameName,
                            children: H.name || "",
                          }),
                        ),
                        closeModal: wr,
                        bAlertDialog: !0,
                        children: (0, n.jsx)(Ei, { id: m }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function Ei(L) {
          const { id: t } = L,
            m = kt(),
            [H, C] = (0, c.useState)(0),
            [rr, wr] = (0, c.useState)(!1),
            { data: Tr } = (0, a.qI)(t);
          if (!t || !("appid" in t) || Rt.TS.IN_CLIENT || !Tr) return null;
          const Sr = m.data?.sessions?.filter((Er) => {
            switch (Er.device_type) {
              default:
              case B.g0U:
                {
                  if (!Er.os_type) return !1;
                  const zr = ri(Er.os_type);
                  if (Tr.windows && zr.includes("Windows")) return !0;
                  if (Tr.mac && zr.includes("Mac")) return !0;
                  if (Tr.steamos_linux && zr.includes("Linux")) return !0;
                }
                break;
              case B.LS$:
                return Tr.windows || Tr.steamos_linux;
            }
            return !1;
          });
          if (Sr && Sr?.length > 0) {
            const Er = Sr[H];
            return (0, n.jsx)("div", {
              className: st().RemoteOptions,
              children: rr
                ? (0, n.jsx)(Wi, { session: Er })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(ji, {
                        rgAcceptableSession: Sr,
                        session: Er,
                        setSessionIndex: C,
                      }),
                      (0, n.jsx)("div", {
                        className: st().ActionRow,
                        children: (0, n.jsx)(Di, {
                          appid: t.appid,
                          session: Er,
                          setRemoteDownloadRequested: wr,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function ji(L) {
          const { rgAcceptableSession: t, session: m, setSessionIndex: H } = L;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                children: (0, Ne.we)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, n.jsxs)("div", {
                className: st().ClientSelector,
                children: [
                  (0, n.jsx)("span", {
                    className: st().ClientName,
                    children: m.machine_name,
                  }),
                  (0, n.jsx)(Mi, {
                    rgSessions: t,
                    setRemoteClientID: (C) => {
                      const rr = t.findIndex(
                        (wr) => wr.client_instanceid === C,
                      );
                      rr >= 0 && H(rr);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Wi(L) {
          const { session: t } = L;
          return (0, n.jsxs)("div", {
            className: st().DownloadStartedCtn,
            children: [
              (0, Ne.we)("#Sale_AddToLibrary_DownloadStarted"),
              (0, n.jsx)("br", {}),
              (0, n.jsx)("a", {
                href: `${Rt.TS.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
                children: (0, Ne.we)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function Di(L) {
          const { appid: t, session: m, setRemoteDownloadRequested: H } = L,
            C = di(t, m.client_instanceid);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(T.sP, {
                onClick: () => {
                  C.mutateAsync(), H(!0);
                },
                children: [
                  (0, n.jsx)(vi.f5X, {}),
                  (0, Ne.we)("#Button_StartDownload"),
                ],
              }),
              (0, n.jsx)("div", {
                className: st().LearnMoreCtn,
                children: (0, n.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: st().InlineLink,
                  children: (0, Ne.we)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var bt = i(39905);
        function xi(L) {
          const { id: t, className: m } = L,
            { data: H } = (0, a.J$)(t);
          if (!H) return null;
          const C =
              H.related_items?.demo_appid && H.related_items.demo_appid
                ? H.related_items.demo_appid
                : [],
            rr = C.length > 0,
            wr = rr || H.type === M.uE.ue,
            Tr = wr
              ? bt.Z.Localize("#Sale_InstallDemo_ttip", H.name || "")
              : rr
                ? bt.Z.Localize("#Sale_CannotInstallDemo_ttip", H.name || "")
                : bt.Z.Localize("#Loading");
          if ((0, g.$W)()) {
            if (wr && rr) {
              const Sr = H.type === M.uE.ue ? H.appid : C[0];
              return (0, n.jsx)("div", {
                className: m,
                children: (0, n.jsx)(Ti, { appid: Sr }),
              });
            }
            return null;
          }
          return !wr && rr && H.is_free
            ? (0, n.jsx)(b.h, { id: t, className: m })
            : (0, n.jsx)(y.he, {
                toolTipContent: Tr,
                onClick: (Sr) => {
                  Sr.preventDefault(),
                    Sr.stopPropagation(),
                    wr && (0, h.o)(H.type === M.uE.ue ? H.appid : C[0], H.name);
                },
                className: (0, j.A)(
                  m,
                  d().DemoButton,
                  !wr && d().DisabledButton,
                ),
                children: wr
                  ? bt.Z.Localize("#Sale_InstallDemo")
                  : bt.Z.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      29245: (k, J, i) => {
        "use strict";
        i.d(J, { Q: () => x });
        var n = i(7850),
          M = i(39905),
          a = i(40358),
          h = i(18654),
          y = i.n(h),
          j = i(36118),
          g = i(36707),
          b = i(3166);
        function x(d) {
          const {
              id: w,
              strClassName: B,
              bMinimizePlatforms: S,
              bHideWindows: T,
            } = d,
            { data: P } = (0, a.qI)(w);
          if (!P) return null;
          if (S) {
            let W = T
              ? null
              : P?.windows &&
                (0, n.jsx)("span", {
                  title: M.Z.Localize("#Platform_Windows"),
                  children: (0, n.jsx)(j.Xz0, {
                    "aria-label": M.Z.Localize("#Platform_Windows"),
                  }),
                });
            return (
              ((0, b.CI)() || (0, b.Hn)() || (0, b.rf)()) && P?.steamos_linux
                ? (W = (0, n.jsx)("span", {
                    title: M.Z.Localize("#Platform_Linux"),
                    children: (0, n.jsx)(j.Qte, {
                      "aria-label": M.Z.Localize("#Platform_Linux"),
                    }),
                  }))
                : (0, b.Pr)() && P?.mac
                  ? (W = (0, n.jsx)("span", {
                      title: M.Z.Localize("#Platform_Mac"),
                      children: (0, n.jsx)(j.kPc, {
                        "aria-label": M.Z.Localize("#Platform_Mac"),
                      }),
                    }))
                  : P.vr_support?.vrhmd &&
                    (W = (0, n.jsx)("span", {
                      title: M.Z.Localize("#Platform_VR"),
                      children: (0, n.jsx)(j.VR, {
                        "aria-label": M.Z.Localize("#Platform_VR"),
                      }),
                    })),
              W
                ? (0, n.jsx)("span", {
                    className: (0, g.A)(y().CapsulePlatform, B),
                    children: W,
                  })
                : null
            );
          }
          return (0, n.jsxs)("span", {
            className: (0, g.A)(y().CapsulePlatform, B),
            children: [
              !T &&
                P.windows &&
                (0, n.jsx)("span", {
                  title: M.Z.Localize("#Platform_Windows"),
                  children: (0, n.jsx)(j.Xz0, {
                    "aria-label": M.Z.Localize("#Platform_Windows"),
                  }),
                }),
              P.mac &&
                (0, n.jsx)("span", {
                  title: M.Z.Localize("#Platform_Mac"),
                  children: (0, n.jsx)(j.kPc, {
                    "aria-label": M.Z.Localize("#Platform_Mac"),
                  }),
                }),
              P.steamos_linux &&
                (0, n.jsx)("span", {
                  title: M.Z.Localize("#Platform_Linux"),
                  children: (0, n.jsx)(j.Qte, {
                    "aria-label": M.Z.Localize("#Platform_Linux"),
                  }),
                }),
              P.vr_support?.vrhmd &&
                (0, n.jsx)("span", {
                  title: M.Z.Localize("#Platform_VR"),
                  children: (0, n.jsx)(j.VR, {
                    "aria-label": M.Z.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      48357: (k, J, i) => {
        "use strict";
        i.d(J, { Bq: () => e, NF: () => o });
        var n = i(7850),
          M = i(44420),
          a = i(3348),
          h = i(81055),
          y = i(40358),
          j = i(11512),
          g = i(18654),
          b = i.n(g),
          x = i(36118),
          d = i(71421),
          w = i(36707),
          B = i(39905),
          S = i(72609),
          T = i(33220),
          P = i(86681),
          W = i(1706);
        function o(U) {
          const { id: N, bSelfPurchaseOption: l } = U,
            { data: z } = (0, y.Q_)(N),
            { data: Q } = (0, y.J$)(N);
          if (!Q) return null;
          const X = l && Q.item_type == M.c6.RD ? Q.self_purchase_option : z;
          return (0, n.jsx)(c, { purchaseOption: X, ...U });
        }
        function c(U) {
          const {
              bSingleLineMode: N,
              onlyOneDiscountPct: l,
              id: z,
              purchaseOption: Q,
              bHidePrePurchase: X,
              bHideReleaseDate: v,
              bHideIfDemo: K,
              bPurchaseOptionDisplay: p,
              strContainerClassName: Jr,
              strDiscountAndPriceClassName: Ir,
              strPriceFormattedClassName: Or,
              bPreferWholeNumbers: yr,
              bSelfPurchaseOption: dr,
              bHideNewTag: ar,
            } = U,
            nr = S.TS.NOW,
            { data: tr } = (0, y.by)(z),
            { data: ur } = (0, y.J$)(z);
          if (!ur) return null;
          const D = Q,
            O = !ar && (0, h.fk)(tr, nr),
            f = (0, w.A)({
              [b().StoreSalePriceWidgetContainer]: !0,
              [b().SingleLineMode]: N,
              StoreSalePriceWidgetContainer: !0,
              [b().NewItem]: O,
              [b().PurchaseOption]: p,
              [Jr ?? ""]: !!Jr,
            });
          if (U.bShowInLibrary)
            return (0, n.jsx)("div", {
              className: f,
              children: (0, n.jsx)("div", {
                className: b().StoreSalePriceBox,
                children: B.Z.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (tr && tr.is_coming_soon && (!D || !D.packageid)) {
            if (v) return null;
            const V =
              tr.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(tr.coming_soon_display)
                ? (0, j.d)(tr)
                : B.Z.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, a.CC)(tr),
                  );
            return (0, n.jsx)("div", {
              className: f,
              children: (0, n.jsx)("div", {
                className: b().StoreSalePriceBox,
                children: V,
              }),
            });
          }
          if (ur.is_free)
            if (ur.is_free_temporarily) {
              if (D && D.is_free_to_keep && !D.formatted_original_price)
                return (0, n.jsx)("div", {
                  className: f,
                  children: (0, n.jsx)("div", {
                    className: b().StoreSalePriceBox,
                    children: B.Z.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return ur.item_type == M.c6.qI && ur.type == M.uE.ue
                ? K
                  ? null
                  : (0, n.jsxs)("div", {
                      className: f,
                      children: [
                        O &&
                          (0, n.jsx)("div", {
                            className: b().StoreSaleNewItem,
                            children: B.Z.Localize("#Flag_New"),
                          }),
                        (0, n.jsx)("div", {
                          className: b().StoreSalePriceBox,
                          children: B.Z.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, n.jsxs)("div", {
                    className: f,
                    children: [
                      O &&
                        (0, n.jsx)("div", {
                          className: b().StoreSaleNewItem,
                          children: B.Z.Localize("#Flag_New"),
                        }),
                      (0, n.jsx)("div", {
                        className: b().StoreSalePriceBox,
                        children: B.Z.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!D || !D.formatted_final_price) return null;
          let I = D.discount_pct || 0,
            $ = (!l && ur.item_type == M.c6.xO && D.bundle_discount_pct) || 0,
            R = D.formatted_final_price;
          if (yr) {
            const V = (0, T.rt)(S.iA.country_code.toUpperCase()),
              _ = { ...(0, P.J)(V), bWholeUnitsOnly: !0 };
            R = (0, W.d)(Number.parseInt(D.final_price_in_cents || "0"), _);
          }
          const q = (0, h.Nq)(tr, D);
          return (0, n.jsx)(e, {
            bSingleLineMode: !!N,
            nBaseDiscountPercentage: $,
            nDiscountPercentage: I,
            bIsPrePurchase: q,
            strBestPurchaseOriginalPriceFormatted:
              D.formatted_original_price || "",
            strBestPurchasePriceFormatted: R,
            bHideDiscountPercentForCompliance:
              !!D.hide_discount_pct_for_compliance,
            bShowNewFlag: O,
            bHidePrePurchase: !!X,
            strDiscountAndPriceClassName: Ir,
            strPriceFormattedClassName: Or,
            bPurchaseOptionDisplay: p,
          });
        }
        function e(U) {
          const {
              bSingleLineMode: N,
              nDiscountPercentage: l,
              bIsPrePurchase: z,
              nBaseDiscountPercentage: Q,
              strBestPurchaseOriginalPriceFormatted: X,
              strBestPurchasePriceFormatted: v,
              bHideDiscountPercentForCompliance: K,
              bShowNewFlag: p,
              bHidePrePurchase: Jr,
              strDiscountAndPriceClassName: Ir,
              strPriceFormattedClassName: Or,
              bPurchaseOptionDisplay: yr,
            } = U,
            dr = K;
          let ar;
          return (
            l &&
              (dr
                ? (ar = B.Z.Localize("#Discount_ARIA_Label_SpecialPrice", X))
                : (ar = B.Z.Localize("#Discount_ARIA_Label", l, X, v))),
            (0, n.jsxs)("div", {
              className: (0, w.A)({
                [b().StoreSalePriceWidgetContainer]: !0,
                [b().SingleLineMode]: N,
                StoreSalePriceWidgetContainer: !0,
                [b().Discounted]: !!l,
                Discounted: !!l,
                [b().PrePurchase]: !!z,
                [b().NewItem]: !!p,
                [b().PurchaseOption]: yr,
                [Ir ?? ""]: !!Ir,
              }),
              "aria-label": ar,
              children: [
                !!(z && !Jr) &&
                  (0, n.jsx)("div", {
                    className: (0, w.A)(b().StoreSalePrepurchaseLabel),
                    children: (0, n.jsx)("span", {
                      children: B.Z.Localize(
                        "#EventDisplay_CallToAction_Prepurchase_Short",
                      ),
                    }),
                  }),
                !!(!z && p) &&
                  (0, n.jsx)("div", {
                    className: b().StoreSaleNewItem,
                    children: B.Z.Localize("#Flag_New"),
                  }),
                !!(Q && !dr) &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.Gq, {
                        toolTipContent: B.Z.Localize(
                          "#Sale_Bundle_Discount_ttip",
                        ),
                        children: (0, n.jsx)("span", {
                          className: (0, w.A)(b().BaseDiscount),
                          children: `-${Q}%`,
                        }),
                      }),
                      !!l &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("span", { children: "\xA0" }),
                            (0, n.jsx)(d.Gq, {
                              toolTipContent: B.Z.Localize(
                                "#Sale_Bundle_Discount_Limited_ttip",
                              ),
                              children: (0, n.jsx)("span", {
                                className: (0, w.A)(b().StoreSaleDiscountBox),
                                children: `-${l}%`,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                !!(!Q && l && !dr) &&
                  (0, n.jsx)("div", {
                    className: b().StoreSaleDiscountBox,
                    children: `-${l}%`,
                  }),
                !!(l && dr) &&
                  (0, n.jsx)("div", {
                    className: b().DiscountIconCtn,
                    children: (0, n.jsx)(x.XH_, {}),
                  }),
                (l || Q) && X && !dr
                  ? (0, n.jsxs)("div", {
                      className: (0, w.A)(b().StoreSaleDiscountedPriceCtn),
                      children: [
                        (0, n.jsx)("div", {
                          className: (0, w.A)({
                            [b().SingleLineOriginalPrice]: N,
                            [b().StoreOriginalPrice]: !N,
                          }),
                          children: X,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, w.A)({
                            [b().StoreSalePriceBox]: !0,
                            [b().SingleLineMode]: N,
                            [Or ?? ""]: !!Or,
                          }),
                          children: v,
                        }),
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: (0, w.A)({
                        [b().StoreSalePriceBox]: !0,
                        [Or ?? ""]: !!Or,
                      }),
                      children: v,
                    }),
              ],
            })
          );
        }
      },
      41188: (k, J, i) => {
        "use strict";
        i.d(J, { n: () => d, p: () => w });
        var n = i(7850),
          M = i(99412),
          a = i(39567),
          h = i(18654),
          y = i.n(h),
          j = i(12818),
          g = i(36707),
          b = i(39905),
          x = i(72609);
        function d(S) {
          const {
            rgTagIDs: T,
            bShowEvenIfNoTags: P,
            bHideTitle: W,
            bLargeText: o,
            bNoStoreLinks: c,
          } = S;
          return T?.length > 0 || P
            ? (0, n.jsxs)("div", {
                className: (0, g.A)(
                  y().SaleTagBlockCtn,
                  o ? y().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !W &&
                    (0, n.jsx)("div", {
                      className: (0, g.A)(y().TagTitle, "WidgetTagTitle"),
                      children: b.Z.Localize("#GameHover_Tags"),
                    }),
                  T?.length > 0
                    ? (0, n.jsx)("div", {
                        className: (0, g.A)(y().TagBox, "TagBox"),
                        children: T.map((e) =>
                          (0, n.jsx)(B, { tagid: e, bNoStoreLinks: c }, e),
                        ),
                      })
                    : (0, n.jsx)("div", {
                        children: b.Z.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function w(S) {
          const { tagid: T, className: P } = S,
            W = (0, a.MB)(T, x.TS.LANGUAGE);
          if (!W) return null;
          const o = (0, M.wwZ)((0, M.sfN)(x.TS.LANGUAGE)),
            c = `${x.TS.STORE_BASE_URL}tags/${o}/${W}`;
          return (0, n.jsx)(j.q, {
            url: c,
            className: (0, g.A)(y().Tag, "WidgetTag", P),
            children: W,
          });
        }
        function B(S) {
          const { tagid: T, className: P, bNoStoreLinks: W } = S,
            o = (0, M.wwZ)((0, M.sfN)(x.TS.LANGUAGE)),
            c = (0, a.MB)(T, x.TS.LANGUAGE),
            e = `${x.TS.STORE_BASE_URL}tags/${o}/${c}`;
          return c
            ? W
              ? (0, n.jsx)("div", {
                  className: (0, g.A)(y().Tag, "WidgetTag", P),
                  children: c,
                })
              : (0, n.jsx)(j.q, {
                  url: e,
                  className: (0, g.A)(y().Tag, "WidgetTag", P),
                  children: c,
                })
            : null;
        }
      },
      77459: (k, J, i) => {
        "use strict";
        i.d(J, { E: () => w });
        var n = i(7850),
          M = i(97825),
          a = i(29522),
          h = i(40358),
          y = i(24179),
          j = i(13977),
          g = i(18654),
          b = i.n(g),
          x = i(36707),
          d = i(18210);
        function w(B) {
          const { appid: S, bIsMuted: T } = B,
            P = (0, a.$5)(S),
            W = (0, y.S6)(S),
            { data: o } = (0, h.J$)(P),
            { mutate: c } = (0, M.S)(P),
            e = (N) => {
              N.preventDefault(), W ? (0, j.o)(S, o?.name) : c();
            },
            U = (0, x.A)(
              b().CapsuleBottomBar,
              T && b().Muted,
              W ? b().PlayNowButton : b().AddToLibraryButton,
            );
          return (0, n.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: e,
            className: U,
            onKeyDown: (N) => {
              (N.key === "Enter" || N.key === " ") &&
                (N.preventDefault(), e(N));
            },
            children: (0, d.we)(W ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      16179: (k, J, i) => {
        "use strict";
        i.d(J, { x: () => j });
        var n = i(47875),
          M = i(72865),
          a = i(95535),
          h = i(83482),
          y = i(77200);
        function j(g, b) {
          const x = (0, M.n9)(),
            d = (0, y.w)(),
            w = (0, a.tB)((0, n._)(g, b));
          return { snr: (0, h.L3)(x), strStoreURL: (0, h.It)(w, x, d) };
        }
      },
      12818: (k, J, i) => {
        "use strict";
        i.d(J, { q: () => g });
        var n = i(7850),
          M = i(24660),
          a = i(72865),
          h = i(52393),
          y = i.n(h),
          j = i(72609);
        function g(d) {
          const {
              className: w,
              url: B,
              style: S,
              children: T,
              bSkipForcingStoreLink: P,
              bOpenInline: W,
              bFocusable: o = !0,
            } = d,
            c = P ? B : B ? b(B, j.TS.STORE_BASE_URL) : void 0,
            e = (0, a.aL)(c);
          return e
            ? (0, n.jsx)(M.Ii, {
                href: e,
                target: j.TS.IN_CLIENT || W ? void 0 : "_blank",
                className: w,
                style: S,
                rel: "noopener noreferrer",
                focusable: o,
                children: T,
              })
            : (0, n.jsx)("span", { style: S, className: w, children: T });
        }
        function b(d, w) {
          try {
            const B = new URL(w),
              S = new URL(d);
            return B.href.replace(/\/$/, "") + S.pathname + S.search + S.hash;
          } catch {
            return "";
          }
        }
        function x(d) {
          const { section: w } = d;
          return w.label_link && !w.label_link_style
            ? jsx("div", {
                className: styles.SaleViewAll,
                children: jsx(g, {
                  url: w.label_link,
                  children: SharedLocalization.Localize(
                    "#btn_live_streams_all",
                  ),
                }),
              })
            : null;
        }
      },
      42993: (k, J, i) => {
        "use strict";
        i.d(J, { LH: () => y });
        var n = i(90626);
        const M = (0, n.createContext)(void 0),
          a = M.Provider;
        function h(j) {
          const { steamid: g, children: b } = j,
            x = useMemo(
              () => ({ useActiveAccount: () => (!g || g == "0" ? "" : g) }),
              [g],
            );
          return createElement(a, { value: x }, b);
        }
        function y() {
          const j = (0, n.useContext)(M);
          if (!j)
            throw new Error(
              "called useActiveAccount outside of ActiveAccountProvider",
            );
          return j.useActiveAccount();
        }
      },
      66243: (k, J, i) => {
        "use strict";
        i.d(J, { Oh: () => d, n9: () => b, sP: () => y });
        var n = i(7850),
          M = i(24660),
          a = i(44375),
          h = i.n(a);
        function y(B) {
          const { children: S, ...T } = B;
          return (0, n.jsx)(M.fu, {
            className: a.GreenButton,
            type: "button",
            ...T,
            children: (0, n.jsx)("span", { children: S }),
          });
        }
        function j(B) {
          const { children: S, ...T } = B;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...T,
            children: jsx("span", { children: S }),
          });
        }
        function g(B) {
          const { children: S, ...T } = B;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...T,
            children: jsx("span", { children: S }),
          });
        }
        function b(B) {
          const { children: S, ...T } = B;
          return (0, n.jsx)(M.fu, {
            className: a.BlueButton,
            type: "button",
            ...T,
            children: (0, n.jsx)("span", { children: S }),
          });
        }
        function x(B) {
          const { children: S, ...T } = B;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...T,
            children: jsx("span", { children: S }),
          });
        }
        function d(B) {
          const { children: S, ...T } = B;
          return (0, n.jsx)(M.fu, {
            className: a.GreyButton,
            type: "button",
            ...T,
            children: (0, n.jsx)("span", { children: S }),
          });
        }
        function w(B) {
          const { children: S, ...T } = B;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...T,
            children: jsx("span", { children: S }),
          });
        }
      },
      21721: (k, J, i) => {
        "use strict";
        i.d(J, { DT: () => g, b0: () => y, bu: () => j });
        var n = i(72609),
          M = i(40358),
          a = i(71742),
          h = i(41032);
        function y(x, d) {
          if (x[d]) {
            if (d == "community_icon") {
              const w = x.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${x[d]}.jpg`)
                .replace(/\?.*$/, "");
              return `${n.TS.MEDIA_CDN_COMMUNITY_URL}${w}`;
            } else if (typeof x[d] == "string") {
              const w = x.asset_url_format.replace("${FILENAME}", x[d]);
              return `${n.TS.STORE_ITEM_BASE_URL}${w}`;
            }
          }
        }
        function j(x, d = "full") {
          let w = "";
          switch (d) {
            case "thumb":
              w = ".116x65";
              break;
            case "600x338":
              w = ".600x338";
              break;
            case "1920x1080":
              w = ".1920x1080";
              break;
            case "full":
              w = "";
              break;
            default:
              (0, a.z_)(d, `Invalid size: ${d}`);
              break;
          }
          return (
            n.TS.STORE_ITEM_BASE_URL +
            x.filename.replace(/\.([^.]+)(\?.*)?$/, `${w}.$1$2`)
          );
        }
        function g(x) {
          const { data: d } = (0, M.j4)(x),
            w = (0, h.dy)();
          if (d)
            return [
              ...(d.all_ages_screenshots || []),
              ...(!w && d.mature_content_screenshots
                ? d.mature_content_screenshots
                : []),
            ].sort((B, S) => B.ordinal - S.ordinal);
        }
        function b(x, d = !1) {
          const { data: w } = useStoreItemAssets({ appid: x });
          if (w !== void 0)
            return w === null
              ? null
              : d && w.library_capsule_2x
                ? y(w, "library_capsule_2x")
                : w.library_capsule
                  ? y(w, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${x}/portrait.png`;
        }
      },
      87249: (k, J, i) => {
        "use strict";
        i.d(J, { C0: () => w, mj: () => B });
        var n = i(7850),
          M = i(44420),
          a = i(72609),
          h = i(40358),
          y = i(64238),
          j = i.n(y),
          g = i(90626),
          b = i(25046),
          x = i(73187),
          d = i.n(x),
          w = ((T) => (
            (T[(T.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (T[(T.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (T[(T.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            T
          ))(w || {});
        function B(T) {
          const { id: P, active: W, bIsHoverMode: o, eGrowOnActivate: c } = T,
            { data: e } = (0, h.J$)(P),
            U = g.useRef(0),
            N = g.useRef(null);
          g.useLayoutEffect(() => {
            W && N.current && (N.current.currentTime = U.current);
          }, [W]);
          const l = (K) => {
              U.current = K.currentTarget.currentTime;
            },
            z = (0, b.kB)(W ? P : void 0);
          if ((o && a.TS.IN_MOBILE) || !W || !e || !e.visible || !z)
            return null;
          const Q = z.filter(
            (K) => K.microtrailer && K.microtrailer.length > 0,
          );
          if (Q.length === 0)
            return e &&
              e.related_items?.parent_appid &&
              (e.type == M.uE.ue || e.type == M.uE.Vi)
              ? (0, n.jsx)(B, {
                  ...T,
                  id: { appid: e.related_items.parent_appid },
                })
              : null;
          let X;
          switch (c) {
            case 1:
              X = d().GrowOnHoverImplicit;
              break;
            case 2:
              X = d().GrowOnHoverMedium;
              break;
          }
          const v = Q[0];
          return (0, n.jsx)("video", {
            className: j()(d().CapsuleMicroTrailer, X),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: N,
            playsInline: !0,
            onTimeUpdate: l,
            children: (0, n.jsx)(S, { trailer: v }),
          });
        }
        function S(T) {
          const { trailer: P } = T;
          return !P || !P.microtrailer
            ? null
            : (0, n.jsx)(n.Fragment, {
                children: P.microtrailer?.map((W) =>
                  a.TS.IN_CLIENT && W.type == "video/mp4"
                    ? null
                    : (0, n.jsx)(
                        "source",
                        { src: (0, b.M4)(P, W.filename || ""), type: W.type },
                        W.filename,
                      ),
                ),
              });
        }
      },
      83784: (k, J, i) => {
        "use strict";
        i.d(J, { J: () => n, S: () => M });
        function n(a) {
          return a
            ? !!(
                a.related_items &&
                a.related_items.standalone_demo_appid &&
                a.related_items.standalone_demo_appid.length > 0 &&
                a.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function M(a) {
          return !a || !a.related_items?.standalone_demo_appid
            ? []
            : a.related_items?.standalone_demo_appid;
        }
      },
      3348: (k, J, i) => {
        "use strict";
        i.d(J, { CC: () => w });
        var n = i(16114),
          M = i(84346),
          a = i(11512);
        function h(B) {
          return B?.is_coming_soon
            ? j(
                B.coming_soon_display,
                B.steam_release_date,
                B.custom_release_date_message,
              )
            : B?.steam_release_date
              ? g(B.steam_release_date)
              : "";
        }
        function y(B) {
          return h(B.releaseInfo);
        }
        function j(B, S, T) {
          switch (B) {
            case "date_full":
              return g(S);
            case "date_month":
              return x(new Date(S * 1e3));
            case "date_quarter":
              return d(new Date(S * 1e3));
            case "date_year":
              return b(new Date(S * 1e3));
            case "text_comingsoon":
              return (
                T || SharedLocalization.Localize("#Store_ComingSoon_ComingSoon")
              );
            case "text_tba":
              return T || SharedLocalization.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function g(B) {
          return new Date(B * 1e3).toLocaleDateString(GetPreferredLocales());
        }
        function b(B) {
          return B.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function x(B) {
          return B.toLocaleDateString((0, M.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function d(B) {
          switch (B.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return SharedLocalization.Localize(
                "#Time_QuarterOfYear_Q1",
                B.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return SharedLocalization.Localize(
                "#Time_QuarterOfYear_Q2",
                B.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return SharedLocalization.Localize(
                "#Time_QuarterOfYear_Q3",
                B.getUTCFullYear(),
              );
            default:
              return SharedLocalization.Localize(
                "#Time_QuarterOfYear_Q4",
                B.getUTCFullYear(),
              );
          }
        }
        function w(B) {
          if (!B) return "";
          if (B && B.is_coming_soon) {
            if (B.coming_soon_display) return (0, a.d)(B);
            if (B.custom_release_date_message)
              return B.custom_release_date_message;
            const T = B.steam_release_date;
            return T
              ? B.is_abridged_release_date
                ? x(new Date(T * 1e3))
                : (0, n.$z)(T)
              : "";
          }
          let S = B.steam_release_date;
          return S || (S = B.original_release_date), S ? (0, n.$z)(S) : "";
        }
      },
      81055: (k, J, i) => {
        "use strict";
        i.d(J, { Nq: () => j, fk: () => y });
        var n = i(44983);
        function M(g, b = !1) {
          if (g.is_coming_soon && !b) return 0;
          let x = g.steam_release_date;
          return x || (x = g.original_release_date), x;
        }
        function a(g) {
          let b = g.original_steam_release_date;
          return b || (b = M(g)), b;
        }
        const h = 7;
        function y(g, b) {
          if (!g) return !1;
          const x = M(g);
          return x ? !g.is_coming_soon && x + h * n.Kp.PerDay > b : !1;
        }
        function j(g, b) {
          return !!(g && g.is_coming_soon && b && b.packageid);
        }
      },
      47875: (k, J, i) => {
        "use strict";
        i.d(J, { _: () => a, l: () => h });
        var n = i(72609),
          M = i(83784);
        function a(y, j = !1) {
          if (y)
            return j && (0, M.J)(y)
              ? `${n.TS.STORE_BASE_URL}app/${((0, M.S))(y)[0]}`
              : `${n.TS.STORE_BASE_URL}${y.store_url_path}`;
        }
        function h() {
          window.location.href = `${n.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      39567: (k, J, i) => {
        "use strict";
        i.d(J, { Fv: () => j, MB: () => x });
        var n = i(72604),
          M = i(35038),
          a = i(70512),
          h = i(68312),
          y = i(20194);
        function j(B) {
          const S = (0, h.TR)(),
            T = (0, h.rX)();
          return (0, y.I)(g(S.GetAnonymousServiceTransport(), T, B));
        }
        function g(B, S, T) {
          return {
            queryKey: ["LocalizedTagNames", T],
            queryFn: async () => {
              const P = `LocalizedTagNames2_${T}`,
                W = await S.GetObject(P),
                o = M.w.Init(a.Gr);
              o.Body().set_language(T),
                W?.version_hash &&
                  o.Body().set_have_version_hash(W.version_hash);
              const c = await a.nd.GetTagList(B, o);
              let e;
              if (c.GetEResult() == n.R)
                (e = c.Body().toObject()), S && S.StoreObject(P, e);
              else if (c.GetEResult() == n.Ze) e = W || void 0;
              else if (W)
                console.warn(
                  "Couldn't load updated tag localization, will continue with what we have from storage.",
                ),
                  (e = W);
              else throw c.GetErrorMessage();
              const U = {};
              return (
                (e?.tags || []).forEach(({ tagid: l, name: z }) => (U[l] = z)),
                U
              );
            },
            staleTime: 3600 * 1e3,
          };
        }
        async function b(B, S, T) {
          return ReactQueryClient.fetchQuery(
            g(B.GetAnonymousServiceTransport(), S, T),
          );
        }
        function x(B, S) {
          const { data: T } = j(S);
          return T && T[B];
        }
        function d(B) {
          const { data: S } = j(B);
          return !!S;
        }
        const w = null;
      },
      29522: (k, J, i) => {
        "use strict";
        i.d(J, { $5: () => g, _Z: () => h, h0: () => j });
        var n = i(40358),
          M = i(44420),
          a = i(90626);
        function h(d) {
          const { data: w } = (0, n.J$)(d);
          return (0, a.useMemo)(
            () =>
              w
                ? w.item_type == M.c6.qI
                  ? [w.appid]
                  : w.included_appids || []
                : [],
            [w],
          );
        }
        function y(d) {
          if (!d?.length) return [];
          const w = d.map((B) => B.creator_clan_account_id).filter((B) => !!B);
          return Array.from(new Set(w));
        }
        function j(d) {
          const { data: w } = (0, n.J$)(d);
          return (0, a.useMemo)(() => {
            if (w && w.related_items && w.related_items.parent_appid)
              return { appid: w.related_items.parent_appid };
          }, [w]);
        }
        function g(d) {
          return (0, a.useMemo)(() => (d ? { appid: d } : void 0), [d]);
        }
        function b(d) {
          return useMemo(() => (d ? { packageid: d } : void 0), [d]);
        }
        function x(d) {
          return useMemo(() => (d ? { bundleid: d } : void 0), [d]);
        }
      },
      10134: (k, J, i) => {
        "use strict";
        i.d(J, { BD: () => x, h3: () => d });
        var n = i(20194),
          M = i(75233),
          a = i(68312),
          h = i(98609),
          y = i(20125);
        async function j(B, S) {
          const T = (0, y.Am)(h.TS.STORE_BASE_URL, S, h.iA.country_code),
            W = await (await fetch(T)).json();
          return Object.keys(W.rgIgnoredApps).map(Number) || [];
        }
        function g() {
          const B = (0, a.KV)(),
            S = h.iA.accountid;
          return (0, n.I)(b(B, S));
        }
        function b(B, S) {
          return {
            queryKey: w(S),
            queryFn: async () => {
              if (!S) return new Set();
              const T = await j(B, S);
              return new Set(T);
            },
            staleTime: 600 * 1e3,
          };
        }
        function x(B) {
          const { data: S } = g();
          return S === void 0 || B == null ? void 0 : S.has(B);
        }
        function d() {
          const B = (0, M.jE)(),
            S = h.iA.accountid;
          return (T, P) => {
            B.setQueryData(w(S), (W) => {
              if (!W) return;
              const o = new Set(W);
              if (P) for (const c of P) o.delete(c);
              if (T) for (const c of T) o.add(c);
              return o;
            });
          };
        }
        function w(B) {
          return ["AccountIgnoreApps", B ?? 0];
        }
      },
      24179: (k, J, i) => {
        "use strict";
        i.d(J, { S6: () => T, ZJ: () => o, $Y: () => w, _7: () => P });
        var n = i(90626),
          M = i(20194),
          a = i(75233),
          h = i(68312),
          y = i(20125),
          j = i(98609);
        async function g(c, e) {
          const U = (0, y.Am)(j.TS.STORE_BASE_URL, e, j.iA.country_code);
          return (await (await fetch(U)).json()).rgOwnedApps || [];
        }
        async function b(c, e, U) {
          return (await g(c, e)).includes(U);
        }
        var x = i(40358),
          d = i(72609);
        function w() {
          const c = (0, h.KV)(),
            e = d.iA.accountid;
          return (0, M.I)(B(c, e));
        }
        function B(c, e) {
          return {
            queryKey: W(e),
            queryFn: async () => {
              if (!e) return new Set();
              const U = await g(c, e);
              return new Set(U);
            },
            staleTime: 600 * 1e3,
          };
        }
        function S(c, e, U) {
          return {
            queryKey: ["AccountOwnsApp", e, U],
            queryFn: async () => (e ? await b(c, e, U) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function T(c) {
          const e = (0, h.KV)(),
            U = d.iA.accountid,
            { data: N } = (0, M.I)(S(e, U, c));
          return N === void 0 ? void 0 : N;
        }
        function P(c) {
          const e = (0, a.jE)(),
            U = d.iA.accountid;
          return n.useCallback(
            (N) => {
              e.setQueryData(W(U), (l) =>
                l ? new Set([...l.values(), ...N]) : c ? new Set(N) : void 0,
              );
            },
            [e, U, c],
          );
        }
        function W(c) {
          return ["AccountOwnedApps", c ?? 0];
        }
        function o(c) {
          const { data: e } = (0, x.J$)(c && "appid" in c ? void 0 : c),
            { data: U } = w();
          let N;
          return (
            c && "appid" in c ? (N = [c.appid]) : e && (N = e.included_appids),
            N === void 0 || U === void 0 || N.length == 0
              ? { bIsOwned: void 0, unAppID: void 0 }
              : { bIsOwned: !N.some((l) => !U.has(l)), unAppID: N[0] }
          );
        }
      },
      35675: (k, J, i) => {
        "use strict";
        i.d(J, {
          Us: () => W,
          xU: () => P,
          eT: () => w,
          mQ: () => B,
          BU: () => o,
        });
        var n = i(32093),
          M = i(20194),
          a = i(75233),
          h = i(68312),
          y = i(72609),
          j = i(20125),
          g = i(98609);
        async function b(e, U) {
          const N = (0, j.Am)(g.TS.STORE_BASE_URL, U, g.iA.country_code),
            z = await (await fetch(N)).json(),
            Q = new Set();
          z.rgCreatorsIgnored?.forEach((p) => Q.add(p)),
            z.rgCreatorsFollowed?.forEach((p) => Q.add(p));
          const X = new Set();
          return (
            z.rgCreatorsIgnored?.forEach((p) => X.add(p)),
            [
              ...(z.rgCuratorsIgnored ?? []),
              ...(z.rgCurators
                ? Object.values(z.rgCurators ?? {}).map((p) => p.clanid)
                : []),
            ].map((p) => {
              const Jr = X.has(p);
              return {
                clanid: p,
                ignored: Jr,
                followed: !Jr,
                is_creator: Q.has(p),
              };
            })
          );
        }
        function x() {
          const e = (0, h.KV)(),
            U = y.iA.accountid;
          return (0, M.I)(d(e, U));
        }
        function d(e, U) {
          return {
            queryKey: c(U),
            queryFn: async () => {
              const N = new Map();
              if (U)
                try {
                  (await b(e, U)).forEach((z) => N.set(z.clanid, z));
                } catch (l) {
                  console.error("GetCuratorAffinityQuery", l);
                }
              return N;
            },
            enabled: !!U,
          };
        }
        function w(e) {
          const { data: U } = x();
          return U === void 0 || e == null ? void 0 : !!U.get(e)?.followed;
        }
        function B(e) {
          const { data: U } = x();
          return U === void 0 || e == null ? void 0 : !!U.get(e)?.ignored;
        }
        function S(e) {
          const { data: U } = x();
          if (U === void 0 || e == null || !U.has(e)) return;
          const N = U.get(e);
          return !!(N.followed && N.is_creator);
        }
        function T(e) {
          const { data: U } = x();
          if (U === void 0 || e == null || !U.has(e)) return;
          const N = U.get(e);
          return !!(N.ignored && N.is_creator);
        }
        function P() {
          return y.TS.EREALM != n.TU.k_ESteamRealmChina;
        }
        function W() {
          return y.TS.EREALM != n.TU.k_ESteamRealmChina;
        }
        function o() {
          const e = (0, a.jE)(),
            U = y.iA.accountid;
          return (N, l, z, Q) => {
            e.setQueryData(c(U), (X) => {
              if (!X) return;
              const v = new Map(X);
              return (
                N?.forEach((K) => {
                  v.has(K.clanAccountID)
                    ? (v.get(K.clanAccountID).followed = !0)
                    : v.set(K.clanAccountID, {
                        clanid: K.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                l?.forEach((K) => {
                  v.has(K.clanAccountID)
                    ? (v.get(K.clanAccountID).ignored = !0)
                    : v.set(K.clanAccountID, {
                        clanid: K.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                z?.forEach((K) => v.delete(K.clanAccountID)),
                Q?.forEach((K) => {
                  let p = v.get(K.clanAccountID);
                  p && (p.is_creator = !0);
                }),
                v
              );
            });
          };
        }
        function c(e) {
          return ["CuratorAffinityQueryKey", e ?? 0];
        }
      },
      20125: (k, J, i) => {
        "use strict";
        i.d(J, { Am: () => a, WZ: () => h });
        const n = "unUserdataVersion";
        function M() {
          return Number.parseInt(window.localStorage.getItem(n) || "0");
        }
        function a(y, j, g) {
          const b = M();
          let x = `${y}dynamicstore/userdata/?id=${j}&cc=${g}&origin=${self.origin}`;
          return b && (x += `&v=${b}`), x;
        }
        function h() {
          window.localStorage.setItem(
            n,
            (
              Number.parseInt(window.localStorage.getItem(n) || "0") + 1
            ).toString(),
          );
        }
      },
      96362: (k, J, i) => {
        "use strict";
        i.d(J, { s: () => j });
        var n = i(51614),
          M = i(67705),
          a = i(54528),
          h = i(20125),
          y = i(98609);
        function j(g, b, x) {
          const d = (0, a.$3)(),
            w = y.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateWishlist", g, w, b],
            mutationFn: async () => {
              if (g == null) return;
              const B =
                  y.TS.STORE_BASE_URL +
                  "api/" +
                  (b ? "addtowishlist" : "removefromwishlist"),
                S = new FormData();
              S.append("appid", "" + g),
                S.append("sessionid", (0, M.KC)()),
                x && S.append("snr", x);
              const T = await fetch(B, {
                method: "POST",
                body: S,
                credentials: "include",
              });
              if (!T.ok)
                throw new Error(
                  `Wishlist ${b ? "add" : "remove"} of appid ${g} failed (${T.status})`,
                );
            },
            onMutate: () => {
              g != null && d(b ? [g] : void 0, b ? void 0 : [g]);
            },
            onError: () => {
              g != null && d(b ? void 0 : [g], b ? [g] : void 0);
            },
            onSuccess: () => {
              (0, h.WZ)();
            },
          });
        }
      },
      54528: (k, J, i) => {
        "use strict";
        i.d(J, { bB: () => d, $3: () => w, F0: () => b });
        var n = i(20194),
          M = i(75233),
          a = i(68312),
          h = i(72609),
          y = i(20125),
          j = i(98609);
        async function g(S, T) {
          const P = (0, y.Am)(j.TS.STORE_BASE_URL, T, j.iA.country_code);
          return (await (await fetch(P)).json()).rgWishlist || [];
        }
        function b() {
          const S = (0, a.KV)(),
            T = h.iA.accountid;
          return (0, n.I)(x(S, T));
        }
        function x(S, T) {
          return {
            queryKey: B(T),
            queryFn: async () => {
              if (!T) return new Set();
              const P = await g(S, T);
              return new Set(P);
            },
            staleTime: 600 * 1e3,
          };
        }
        function d(S) {
          const { data: T } = b();
          return T === void 0 || S == null ? void 0 : T.has(S);
        }
        function w() {
          const S = (0, M.jE)(),
            T = h.iA.accountid;
          return (P, W) => {
            S.setQueryData(B(T), (o) => {
              if (!o) return;
              const c = new Set(o);
              if (W) for (const e of W) c.delete(e);
              if (P) for (const e of P) c.add(e);
              return c;
            });
          };
        }
        function B(S) {
          return ["AccountWishlistApps", S ?? 0];
        }
      },
      13977: (k, J, i) => {
        "use strict";
        i.d(J, { o: () => w });
        var n = i(7850),
          M = i(58534),
          a = i(2801),
          h = i(88003),
          y = i(36118),
          j = i(36707),
          g = i(18210),
          b = i(3166),
          x = i(54599),
          d = i.n(x);
        async function w(P, W) {
          const o = "steam://run/" + P;
          b.TS.IN_CLIENT
            ? (console.log(`Running game ${P} locally.`),
              (window.location.href = o))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${P}.`,
              ),
              S(P, o, W));
        }
        async function B(P, W) {
          const o = "steam://install/" + P;
          Config.IN_CLIENT ? (window.location.href = o) : S(P, o, W);
        }
        async function S(P, W, o) {
          console.log("prompting for", o);
          const c = b.TS.STORE_BASE_URL + "about/";
          (0, h.mK)(
            (0, n.jsx)(T, {
              appid: P,
              strGameName: o || "",
              strOnOKUrl: W,
              strDownloadSteamUrl: c,
            }),
            window,
          );
        }
        const T = (P) => {
          const W = () => P.closeModal && P.closeModal();
          return (0, n.jsx)(a.x_, {
            onEscKeypress: W,
            className: d().GotSteamDialog,
            children: (0, n.jsxs)(M.UC, {
              children: [
                (0, n.jsxs)(M.Y9, {
                  children: [" ", (0, g.we)("#GotSteam_Title"), " "],
                }),
                (0, n.jsxs)(M.nB, {
                  children: [
                    (0, n.jsx)(M.a3, {
                      children: (0, g.PP)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, n.jsx)("a", {
                          href: P.strDownloadSteamUrl,
                          className: d().DownloadSteamUrl,
                          children: (0, g.we)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, n.jsx)("span", {
                          className: d().GameName,
                          children: P.strGameName,
                        }),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: d().Buttons,
                      children: [
                        (0, n.jsxs)("a", {
                          href: P.strOnOKUrl,
                          onClick: W,
                          className: (0, j.A)(d().Button, d().LeftButton),
                          children: [
                            (0, n.jsxs)("div", {
                              className: d().AnswerText,
                              children: [" ", (0, g.we)("#GotSteam_Yes"), " "],
                            }),
                            (0, n.jsxs)("div", {
                              className: d().ActionText,
                              children: [
                                " ",
                                (0, g.we)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("a", {
                          href: P.strDownloadSteamUrl,
                          onClick: W,
                          className: d().Button,
                          children: [
                            (0, n.jsxs)("div", {
                              className: d().AnswerText,
                              children: [" ", (0, g.we)("#GotSteam_No"), " "],
                            }),
                            (0, n.jsxs)("div", {
                              className: d().ActionText,
                              children: [
                                " ",
                                (0, g.we)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: d().Footer,
                      children: [
                        (0, n.jsx)(y.Qte, { className: d().Logo }),
                        (0, g.we)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      19619: (k, J, i) => {
        "use strict";
        i.d(J, { Fm: () => tr, L2: () => D });
        var n = i(41735),
          M = i.n(n),
          a = i(14947),
          h = i(99412),
          y = i(72604),
          j = i(34592),
          g = i(3166),
          b = i(82734),
          x = i(25294),
          d = i(40497),
          w = i(44420),
          B = i(43462),
          S = i(20125),
          T = i(36191),
          P = i(93804),
          W = i(72609),
          o = i(20194),
          c = i(97996),
          e = ((O) => (
            (O[(O.AnyController = 0)] = "AnyController"),
            (O[(O.XboxController = 1)] = "XboxController"),
            (O[(O.Ps3Controller = 2)] = "Ps3Controller"),
            (O[(O.Ps4Controller = 3)] = "Ps4Controller"),
            (O[(O.Ps5Controller = 4)] = "Ps5Controller"),
            (O[(O.SwitchController = 5)] = "SwitchController"),
            (O[(O.SteamController = 6)] = "SteamController"),
            (O[(O.SteamDeckNeptune = 7)] = "SteamDeckNeptune"),
            (O[(O.SteamDeckGalileo = 8)] = "SteamDeckGalileo"),
            (O[(O.Switch2Controller = 9)] = "Switch2Controller"),
            (O[(O.SteamControllerTriton = 10)] = "SteamControllerTriton"),
            O
          ))(e || {});
        const U = {
          any_controller: 0,
          xbox_controller: 1,
          ps3_controller: 2,
          ps4_controller: 3,
          ps5_controller: 4,
          switch_controller: 5,
          steam_controller: 6,
          steam_deck_neptune: 7,
          steam_deck_galileo: 8,
          switch2_controller: 9,
          steam_controller_triton: 10,
        };
        function N() {
          const O = [...W.iA.excluded_content_descriptors];
          return {
            bLoaded: !1,
            setWishlist: new Set(),
            rgWishlistInOrder: [],
            setOwnedApps: new Set(),
            setOwnedPackages: new Set(),
            setExcludedTagIDs: new Set(),
            rgExcludedTagIDsSorted: [],
            setExcludedContentDescriptors: new Set(O),
            rgExcludedContentDescriptors: O,
            setRecommendedApps: new Set(),
            rgRecommendedAppsInOrder: [],
            mapIgnoredApps: new Map(),
            mapIgnoredPackages: new Map(),
            setCuratorsFollowed: new Set(),
            rgCuratorsFollowed: [],
            setCuratorsIgnored: new Set(),
            mapRecommendingCuratorsForApp: new Map(),
            setPreferredPlatforms: new Set(),
            setHardwareUsed: new Set(),
            rgRecommendedTags: [],
            ePrimaryLanguage: h.xPp,
            setSecondaryLanguages: new Set(),
            bShowFilteredUserReviewScores: !0,
            bAllowAppImpressions: !1,
          };
        }
        let l;
        function z() {
          return (l ??= N());
        }
        function Q() {
          return !!(0, c.VY)("wants_mature_content");
        }
        function X(O) {
          const f = N();
          if (
            ((f.bLoaded = !0),
            O.rgCurators &&
              ((f.rgCuratorsFollowed = Object.keys(O.rgCurators).map(Number)),
              (f.setCuratorsFollowed = new Set(f.rgCuratorsFollowed))),
            O.rgCuratorsIgnored &&
              (f.setCuratorsIgnored = new Set(O.rgCuratorsIgnored.map(Number))),
            O.rgWishlist &&
              ((f.rgWishlistInOrder = O.rgWishlist.map(Number)),
              (f.setWishlist = new Set(f.rgWishlistInOrder))),
            O.rgOwnedApps &&
              (f.setOwnedApps = new Set(O.rgOwnedApps.map(Number))),
            O.rgOwnedPackages &&
              (f.setOwnedPackages = new Set(O.rgOwnedPackages.map(Number))),
            O.rgIgnoredApps && (f.mapIgnoredApps = v(O.rgIgnoredApps)),
            O.rgIgnoredPackages &&
              (f.mapIgnoredPackages = v(O.rgIgnoredPackages)),
            O.rgExcludedTags &&
              ((f.setExcludedTagIDs = new Set(
                O.rgExcludedTags.map((I) => Number(I.tagid)),
              )),
              (f.rgExcludedTagIDsSorted = Array.from(
                f.setExcludedTagIDs,
              ).sort())),
            Q()
              ? ((f.setExcludedContentDescriptors = new Set()),
                (f.rgExcludedContentDescriptors = []))
              : O.rgExcludedContentDescriptorIDs &&
                ((f.rgExcludedContentDescriptors =
                  O.rgExcludedContentDescriptorIDs.map((I) => Number(I))),
                (f.setExcludedContentDescriptors = new Set(
                  f.rgExcludedContentDescriptors,
                ))),
            O.rgRecommendedApps &&
              ((f.rgRecommendedAppsInOrder = O.rgRecommendedApps.map(Number)),
              (f.setRecommendedApps = new Set(f.rgRecommendedAppsInOrder))),
            O.rgPreferredPlatforms &&
              (f.setPreferredPlatforms = new Set(O.rgPreferredPlatforms)),
            O.bAllowAppImpressions &&
              (f.bAllowAppImpressions = O.bAllowAppImpressions),
            (f.bShowFilteredUserReviewScores =
              !!O.bShowFilteredUserReviewScores),
            O.rgPrimaryLanguage !== void 0 &&
              (f.ePrimaryLanguage = O.rgPrimaryLanguage),
            O.rgSecondaryLanguages &&
              (f.setSecondaryLanguages = new Set(O.rgSecondaryLanguages)),
            O.rgRecommendedTags &&
              (f.rgRecommendedTags = O.rgRecommendedTags.map((I) => I.tagid)),
            O.rgCurations)
          )
            for (const I of Object.keys(O.rgCurations)) {
              const $ = [];
              for (const R of Object.keys(O.rgCurations[I]))
                O.rgCurations[I][R] === P.tV.$D && $.push(Number(R));
              f.mapRecommendingCuratorsForApp.set(Number(I), $);
            }
          if (O.rgHardwareUsed)
            for (const I of O.rgHardwareUsed) {
              const $ = U[I];
              $ !== void 0 && f.setHardwareUsed.add($);
            }
          return f;
        }
        function v(O) {
          const f = new Map();
          for (const [I, $] of Object.entries(O)) {
            const R = Number(I);
            R && f.set(R, Number($));
          }
          return f;
        }
        const K = "dynamicuserdata";
        function p(O) {
          return [K, O];
        }
        function Jr(O) {
          return O?.[0] == K;
        }
        async function Ir(O) {
          try {
            const f = await fetch(
              (0, S.Am)(W.TS.STORE_BASE_URL, O, W.iA.country_code),
              { credentials: "include" },
            );
            if (!f.ok) throw new Error(`Server returned ${f.status}`);
            return X(await f.json());
          } catch (f) {
            return (
              console.warn("LoadDynamicUserData", f),
              (0, T.aj)().ReportError(new Error(`LoadDynamicUserData ${f}`), {
                bIncludeMessageInIdentifier: !0,
              }),
              N()
            );
          }
        }
        function Or() {
          const O = W.iA.accountid;
          return {
            queryKey: p(O),
            queryFn: () => Ir(O),
            staleTime: 1 / 0,
            gcTime: 1 / 0,
            retry: !1,
            enabled: !0,
          };
        }
        function yr() {
          return (0, o.I)(Or());
        }
        function dr(O) {
          return O.getQueryData(p(W.iA.accountid)) ?? z();
        }
        async function ar(O) {
          return O.fetchQuery(Or());
        }
        function nr(O, f) {
          O.setQueryData(p(W.iA.accountid), (I) => {
            if (!I) return;
            const $ = f(I);
            return $ ? { ...I, ...$ } : I;
          });
        }
        class tr {
          m_queryClient = d.L;
          m_boxCacheVersion = a.sH.box(0);
          m_bInitialized = !1;
          m_boxAjaxInFlight = a.sH.box(!1);
          LazyInit() {
            this.m_bInitialized ||
              ((this.m_bInitialized = !0),
              this.m_queryClient.getQueryCache().subscribe((f) => {
                (f?.type != "added" &&
                  f?.type != "updated" &&
                  f?.type != "removed") ||
                  (Jr(f.query?.queryKey) &&
                    (0, a.h5)(() =>
                      this.m_boxCacheVersion.set(
                        this.m_boxCacheVersion.get() + 1,
                      ),
                    ));
              }));
          }
          ReadData() {
            return (
              this.LazyInit(),
              this.m_boxCacheVersion.get(),
              dr(this.m_queryClient)
            );
          }
          BIsLoaded() {
            return this.ReadData().bLoaded;
          }
          GetWishlistGamesInUserOrder() {
            return this.ReadData().rgWishlistInOrder;
          }
          GetRecommendedGamesInIRPriorityOrder() {
            return this.ReadData().rgRecommendedAppsInOrder;
          }
          GetFollowedCuratorCount() {
            return this.ReadData().setCuratorsFollowed.size;
          }
          GetFollowedCuratorsAccountID() {
            return this.ReadData().rgCuratorsFollowed;
          }
          BIsFollowingCurator(f) {
            return this.ReadData().setCuratorsFollowed.has(ur(f));
          }
          BIsIgnoringCurator(f) {
            return this.ReadData().setCuratorsIgnored.has(ur(f));
          }
          get ExcludedContentDescriptor() {
            return this.ReadData().rgExcludedContentDescriptors;
          }
          BExcludeTagIDs(f) {
            const I = this.ReadData().setExcludedTagIDs;
            return f.some(($) => I.has($));
          }
          GetExcludedTagsSortedByID() {
            return this.ReadData().rgExcludedTagIDsSorted;
          }
          BExcludesContentDescriptor(f) {
            const I = this.ReadData().setExcludedContentDescriptors;
            return f.some(($) => I.has($));
          }
          BIncludesContentDescriptor(f) {
            return !this.ReadData().setExcludedContentDescriptors.has(f);
          }
          BIsGameWishlisted(f) {
            return this.ReadData().setWishlist.has(Number(f));
          }
          BIsGameRecommended(f) {
            return this.ReadData().setRecommendedApps.has(Number(f));
          }
          BIsGameIgnored(f) {
            return !!f && this.ReadData().mapIgnoredApps.has(Number(f));
          }
          BIsPackageIgnored(f) {
            return !!f && this.ReadData().mapIgnoredPackages.has(Number(f));
          }
          BIsGameOwned(f) {
            return !!f && this.ReadData().setOwnedApps.has(Number(f));
          }
          BIsStoreItemOwned(f) {
            switch (f.GetStoreItemType()) {
              case w.c6.qI:
                if (this.BIsGameOwned(f.GetAppID())) return !0;
                break;
              case w.c6.RD:
              case w.c6.xO:
                if (f.GetIncludedAppIDs().every((I) => this.BIsGameOwned(I)))
                  return !0;
                break;
            }
            return !1;
          }
          BOwnsApp(f) {
            return !!f && this.ReadData().setOwnedApps.has(Number(f));
          }
          BOwnsPackage(f) {
            return this.ReadData().setOwnedPackages.has(Number(f));
          }
          BHasUsedHardware(f) {
            return this.ReadData().setHardwareUsed.has(f);
          }
          BShowFilteredUserReviewScores() {
            return this.ReadData().bShowFilteredUserReviewScores;
          }
          BAppImpressionsAllowed() {
            return this.ReadData().bAllowAppImpressions;
          }
          GetPrimaryLanguage() {
            return this.ReadData().ePrimaryLanguage;
          }
          GetSecondaryLanguages() {
            return this.ReadData().setSecondaryLanguages;
          }
          BIsAnyLanguageEnabled(f) {
            const { ePrimaryLanguage: I, setSecondaryLanguages: $ } =
              this.ReadData();
            return I == null || I <= h.xPp || h.bP9 <= I
              ? !0
              : f.some((R) => I === R || $.has(R));
          }
          GetRecommendedTags() {
            return this.ReadData().rgRecommendedTags;
          }
          BIsAjaxInFlight() {
            return this.m_boxAjaxInFlight.get();
          }
          BIsAppRecommendedBySomeCurator(f) {
            return this.ReadData().mapRecommendingCuratorsForApp.has(Number(f));
          }
          GetRecommendingCuratorsForApp(f) {
            return this.ReadData().mapRecommendingCuratorsForApp.get(Number(f));
          }
          BHasPlatformPreferenceSet() {
            const f = this.ReadData().setPreferredPlatforms.size;
            return f > 0 && f < 3;
          }
          BIsPreferredPlatform(f) {
            return this.ReadData().setPreferredPlatforms.has(f);
          }
          async HintLoad() {
            return this.LazyInit(), await ar(this.m_queryClient), this;
          }
          async UpdateFollowOrIgnoreCurator(f, I, $) {
            this.LazyInit();
            let R =
              g.TS.STORE_BASE_URL +
              "curators/" +
              (I ? "ajaxfollow/" : "ajaxignore/");
            const q = f.GetAccountID(),
              V = new FormData();
            V.append("clanid", "" + q),
              V.append("sessionid", (0, g.KC)()),
              V.append(I ? "follow" : "ignore", $ ? "1" : "0");
            let _ = await M().post(R, V, { withCredentials: !0 });
            return (
              _ &&
                _.status == 200 &&
                (this.InvalidateCache(),
                nr(this.m_queryClient, (br) => {
                  const vr = new Set(
                    I ? br.setCuratorsFollowed : br.setCuratorsIgnored,
                  );
                  return (
                    $ ? vr.add(q) : vr.delete(q),
                    I
                      ? {
                          setCuratorsFollowed: vr,
                          rgCuratorsFollowed: Array.from(vr),
                        }
                      : { setCuratorsIgnored: vr }
                  );
                })),
              _.data
            );
          }
          async UpdateAppIgnore(f, I, $, R = B.RI.$m) {
            this.LazyInit();
            let q = g.TS.STORE_BASE_URL + "recommended/ignorerecommendation";
            const V = new FormData();
            V.append("sessionid", (0, g.KC)()),
              V.append("appid", "" + f),
              V.append("remove", I ? "0" : "1"),
              V.append("snr", $),
              V.append("ignore_reason", "" + R);
            try {
              (0, a.h5)(() => this.m_boxAjaxInFlight.set(!0));
              let _ = await M().post(q, V, { withCredentials: !0 });
              return (
                _ &&
                  _.status == 200 &&
                  (this.InvalidateCache(),
                  nr(this.m_queryClient, (br) => {
                    const vr = new Map(br.mapIgnoredApps);
                    return (
                      I ? vr.set(Number(f), R) : vr.delete(Number(f)),
                      { mapIgnoredApps: vr }
                    );
                  })),
                _.data
              );
            } catch (_) {
              let br = (0, j.H)(_);
              console.error("UpdateAppIgnore", br.strErrorMsg, br);
            } finally {
              (0, a.h5)(() => this.m_boxAjaxInFlight.set(!1));
            }
            return { success: y.zi };
          }
          async AddToCart(f, I, $, R, q, V, _) {
            if (
              typeof window.g_bUseNewCartAPI < "u" &&
              window.g_bUseNewCartAPI &&
              typeof window.AddItemToCart == "function"
            ) {
              let Br;
              return (
                q && (Br = x.A.ParseSNR(q)), window.AddItemToCart(I, V, Br), !0
              );
            }
            const br = new FormData();
            br.append("action", "add_to_cart"),
              V
                ? br.append("bundleid", V.toString())
                : br.append("subid", "" + I),
              q && br.append("snr", q),
              br.append("sessionid", (0, g.KC)()),
              br.append("quantity", "1");
            const vr = (0, b.uX)(f);
            f.preventDefault();
            try {
              await M().post($, br, { withCredentials: !0 }),
                this.InvalidateCache(),
                _?.fnSetURL ? _.fnSetURL(R) : (vr.location.href = R);
            } catch (Br) {
              return console.log("HandleOnAddToCart", Br), !1;
            }
            return !0;
          }
          InvalidateCache() {
            (0, S.WZ)();
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              tr.s_globalSingletonStore ||
                (tr.s_globalSingletonStore = new tr()),
              tr.s_globalSingletonStore
            );
          }
          static BConfirmedAdultContentAgeGate() {
            return Q();
          }
          constructor() {}
        }
        function ur(O) {
          return typeof O == "object" && "GetAccountID" in O
            ? O.GetAccountID()
            : Number(O);
        }
        function D() {
          const { isPending: O } = yr();
          return [O, tr.Get()];
        }
      },
      76867: (k, J, i) => {
        "use strict";
        i.d(J, { M: () => h });
        var n = i(7850),
          M = i(90626),
          a = i(80724);
        function h(y) {
          const { children: j, ...g } = y,
            b = M.useRef(null);
          return (0, n.jsx)(a.A, { nodeRef: b, ...g, children: y.children(b) });
        }
      },
      47729: (k, J, i) => {
        "use strict";
        i.d(J, { h: () => Nt });
        var n = i(7850),
          M = i(72604);
        function a(F) {
          return !!F;
        }
        var h = i(68312),
          y = i(14616),
          j = i(40358),
          g = i(72865),
          b = i(75233),
          x = i(51614);
        function d(F) {
          return F.type === "account";
        }
        function w(F) {
          return F.type === "anonymous";
        }
        function B(F) {
          return F.type === "request";
        }
        function S(F) {
          return F.type === "replay";
        }
        function T() {
          const F = useShoppingCartID();
          return !B(F) && !S(F);
        }
        function P() {
          const F = useShoppingCartID();
          return S(F);
        }
        var W = i(35038),
          o = i(80613),
          c = i.n(o),
          e = i(75245),
          U = i(18025);
        class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.clanid || e.Sg(N.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    clanid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    listid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(N.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new N();
            return N.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(N.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(N.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_CuratorData";
          }
        }
        class l extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.domain || e.Sg(l.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    domain: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    controller: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    method: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    submethod: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    feature: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    depth: { n: 6, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    countrycode: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    webkey: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    is_client: { n: 9, br: e.qM.readBool, bw: e.gp.writeBool },
                    curator_data: { n: 10, c: N },
                    is_likely_bot: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_utm: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = e.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(l.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new l();
            return l.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(l.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(l.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_NavData";
          }
        }
        const z = 0,
          Q = 1,
          X = 2,
          v = 0,
          K = 1,
          p = 2,
          Jr = 3;
        function Ir(F) {
          return "unknown EAccountCartLineItemType ( " + F + " )";
        }
        function Or(F) {
          return "unknown EAccountCartValidationFailure ( " + F + " )";
        }
        class yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.validation_failure || e.Sg(yr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    validation_failure: {
                      n: 1,
                      d: v,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = e.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(yr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new yr();
            return yr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(yr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(yr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartValidationDetails";
          }
        }
        class dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.is_gift || e.Sg(dr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    is_gift: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    is_private: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(dr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new dr();
            return dr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(dr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(dr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItemFlags";
          }
        }
        class ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.line_item_id || e.Sg(ar.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    type: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_valid: { n: 8, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 9, c: yr },
                    time_added: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    price_when_added: { n: 11, c: U.Hi },
                    gift_info: { n: 12, c: U.$z },
                    flags: { n: 13, c: dr },
                    gidcoupon_applied: {
                      n: 14,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ar.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ar();
            return ar.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ar.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ar.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItem";
          }
        }
        class nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.line_items || e.Sg(nr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    line_items: { n: 1, c: ar, r: !0, q: !0 },
                    subtotal: { n: 2, c: U.Hi },
                    is_valid: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 4, c: yr },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(nr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new nr();
            return nr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(nr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(nr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartContents";
          }
        }
        class tr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.user_country || e.Sg(tr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(tr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new tr();
            return tr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(tr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(tr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Request";
          }
        }
        class ur extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.cart || e.Sg(ur.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = { proto: ur, fields: { cart: { n: 1, c: nr } } }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = e.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ur.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ur();
            return ur.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ur.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ur.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Response";
          }
        }
        class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.user_country || e.Sg(D.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    items: { n: 2, c: O, r: !0, q: !0 },
                    navdata: { n: 3, c: l },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(D.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new D();
            return D.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(D.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(D.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request";
          }
        }
        class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.packageid || e.Sg(O.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 10, c: U.$z },
                    flags: { n: 11, c: dr },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = e.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(O.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new O();
            return O.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(O.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(O.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
          }
        }
        class f extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.line_item_ids || e.Sg(f.M()),
              o.Message.initialize(this, r, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    line_item_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    cart: { n: 2, c: nr },
                    replaced_packages: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    existing_billing_agreementid: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    new_billing_agreement_recurring_packageid: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = e.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(f.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new f();
            return f.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(f.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(f.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Response";
          }
        }
        class I extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.line_item_id || e.Sg(I.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    gift_info: { n: 10, c: U.$z },
                    flags: { n: 11, c: dr },
                    apply_gidcoupon: {
                      n: 12,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = e.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(I.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new I();
            return I.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(I.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(I.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Request";
          }
        }
        class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.cart || e.Sg($.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = { proto: $, fields: { cart: { n: 1, c: nr } } }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT($.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new $();
            return $.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj($.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0($.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Response";
          }
        }
        class R extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.line_item_id || e.Sg(R.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = e.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(R.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new R();
            return R.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(R.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(R.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Request";
          }
        }
        class q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.cart || e.Sg(q.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = { proto: q, fields: { cart: { n: 1, c: nr } } }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(q.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new q();
            return q.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(q.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(q.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Response";
          }
        }
        class V extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.gidshoppingcart || e.Sg(V.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = e.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(V.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new V();
            return V.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(V.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(V.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Request";
          }
        }
        class _ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.cart || e.Sg(_.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = { proto: _, fields: { cart: { n: 1, c: nr } } }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = e.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(_.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new _();
            return _.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(_.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(_.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Response";
          }
        }
        class br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new br();
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new br();
            return br.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Request";
          }
        }
        class vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new vr();
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new vr();
            return vr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Response";
          }
        }
        class Br extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.language || e.Sg(Br.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    language: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Br.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Br();
            return Br.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Br.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Br.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Request";
          }
        }
        class Wr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.line_items || e.Sg(Wr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: { line_items: { n: 1, c: Fr, r: !0, q: !0 } },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Wr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Wr();
            return Wr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Wr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Wr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response";
          }
        }
        class Fr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.line_item_id || e.Sg(Fr.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    coupons: { n: 2, c: U.HX, r: !0, q: !0 },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Fr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Fr();
            return Fr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Fr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Fr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
          }
        }
        var ke;
        ((F) => {
          function r(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.GetCart#1",
              (0, W.I8)(tr, mr, sr),
              ur,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          F.GetCart = r;
          function s(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.AddItemsToCart#1",
              (0, W.I8)(D, mr, sr),
              f,
              { ePrivilege: 1 },
            );
          }
          F.AddItemsToCart = s;
          function E(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.ModifyLineItem#1",
              (0, W.I8)(I, mr, sr),
              $,
              { ePrivilege: 1 },
            );
          }
          F.ModifyLineItem = E;
          function er(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.RemoveItemFromCart#1",
              (0, W.I8)(R, mr, sr),
              q,
              { ePrivilege: 1 },
            );
          }
          F.RemoveItemFromCart = er;
          function hr(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.MergeShoppingCartContents#1",
              (0, W.I8)(V, mr, sr),
              _,
              { ePrivilege: 1 },
            );
          }
          F.MergeShoppingCartContents = hr;
          function jr(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.DeleteCart#1",
              (0, W.I8)(br, mr, sr),
              vr,
              { ePrivilege: 1 },
            );
          }
          F.DeleteCart = jr;
          function ce(Mr, mr, sr) {
            return Mr.SendMsg(
              "AccountCart.GetRelevantCoupons#1",
              (0, W.I8)(Br, mr, sr),
              Wr,
              { ePrivilege: 1 },
            );
          }
          F.GetRelevantCoupons = ce;
        })(ke || (ke = {}));
        var ct = i(41944);
        class Nr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.steamid_requester || e.Sg(Nr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Nr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Nr();
            return Nr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Nr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Nr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class Kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.gidshoppingcart || e.Sg(Kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = e.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Kr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Kr();
            return Kr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Kr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Kr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class Lr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.amount || e.Sg(Lr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    amount: {
                      n: 1,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Lr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Lr();
            return Lr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Lr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Lr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class Hr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.packageid || e.Sg(Hr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: Lr },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: U.$z },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Hr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Hr();
            return Hr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Hr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Hr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class Qr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.walletcredit || e.Sg(Qr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: { walletcredit: { n: 1, c: Lr } },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = e.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Qr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Qr();
            return Qr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Qr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Qr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class Xr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.couponid || e.Sg(Xr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Xr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Xr();
            return Xr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Xr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Xr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class kr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.microtxnappid || e.Sg(kr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = e.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(kr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new kr();
            return kr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(kr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(kr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class Vr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.bundleid || e.Sg(Vr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gift_info: { n: 4, c: U.$z },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Vr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Vr();
            return Vr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Vr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Vr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class Ar extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.reward_id || e.Sg(Ar.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = e.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Ar.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Ar();
            return Ar.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Ar.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Ar.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class Zr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.gidparent || e.Sg(Zr.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    children: { n: 2, c: Zr, r: !0, q: !0 },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Zr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Zr();
            return Zr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Zr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Zr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class pr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.couponid || e.Sg(pr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = e.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(pr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new pr();
            return pr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(pr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(pr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class Rr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.gidlineitem || e.Sg(Rr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: Hr },
                    wallet_credit_item: { n: 3, c: Qr },
                    coupon_item: { n: 4, c: Xr },
                    micro_item: { n: 5, c: kr },
                    bundle_item: { n: 7, c: Vr },
                    loyalty_item: { n: 8, c: Ar },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = e.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Rr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Rr();
            return Rr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Rr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Rr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class Gr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.coupons || e.Sg(Gr.M()),
              o.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: { coupons: { n: 1, c: pr, r: !0, q: !0 } },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = e.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Gr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Gr();
            return Gr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Gr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Gr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class $r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.gidshoppingcart || e.Sg($r.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT($r.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new $r();
            return $r.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj($r.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0($r.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class Dr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.lineitems || e.Sg(Dr.M()),
              o.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    lineitems: { n: 1, c: Rr, r: !0, q: !0 },
                    treeview: { n: 2, c: Zr, r: !0, q: !0 },
                    potentials: { n: 3, c: Gr },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = e.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Dr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Dr();
            return Dr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Dr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Dr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class Yr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.gidshoppingcart || e.Sg(Yr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Dr },
                    time_created: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = e.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Yr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Yr();
            return Yr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Yr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Yr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class qr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.gidshoppingcart || e.Sg(qr.M()),
              o.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: Hr, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = e.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(qr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new qr();
            return qr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(qr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(qr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class _r extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.gidshoppingcart || e.Sg(_r.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Dr },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = e.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(_r.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new _r();
            return _r.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(_r.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(_r.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class Cr extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.gidshoppingcart || e.Sg(Cr.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = e.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Cr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new Cr();
            return Cr.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Cr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Cr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class ae extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ae.prototype.gidshoppingcart || e.Sg(ae.M()),
              o.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Dr },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = e.w0(ae.M())), ae.sm_mbf;
          }
          toObject(r = !1) {
            return ae.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ae.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ae.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ae();
            return ae.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ae.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ae.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class ne extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ne.prototype.gidshoppingcart || e.Sg(ne.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    gift_info: { n: 8, c: U.$z },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = e.w0(ne.M())), ne.sm_mbf;
          }
          toObject(r = !1) {
            return ne.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ne.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ne.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ne();
            return ne.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ne.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ne.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class re extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              re.prototype.contents || e.Sg(re.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    contents: { n: 1, c: Dr },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = e.w0(re.M())), re.sm_mbf;
          }
          toObject(r = !1) {
            return re.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(re.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(re.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new re();
            return re.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(re.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(re.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class ee extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ee.prototype.gidshoppingcart || e.Sg(ee.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: U.$z },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = e.w0(ee.M())), ee.sm_mbf;
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ee.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ee.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ee();
            return ee.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ee.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ee.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class te extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              te.prototype.contents || e.Sg(te.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: { contents: { n: 1, c: Dr } },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = e.w0(te.M())), te.sm_mbf;
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(te.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(te.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new te();
            return te.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(te.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(te.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class ie extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ie.prototype.gidshoppingcart || e.Sg(ie.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = e.w0(ie.M())), ie.sm_mbf;
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(ie.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(ie.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new ie();
            return ie.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(ie.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(ie.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class se extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              se.prototype.contents || e.Sg(se.M()),
              o.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    contents: { n: 1, c: Dr },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = e.w0(se.M())), se.sm_mbf;
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(se.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(se.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new se();
            return se.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(se.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(se.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var ot;
        ((F) => {
          function r(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, W.I8)(Nr, mr, sr),
              Kr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.CreateNewShoppingCart = r;
          function s(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, W.I8)($r, mr, sr),
              Yr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.GetShoppingCartContents = s;
          function E(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, W.I8)(qr, mr, sr),
              _r,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.AddPackages = E;
          function er(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, W.I8)(Cr, mr, sr),
              ae,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.UpdatePackageQuantity = er;
          function hr(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, W.I8)(ne, mr, sr),
              re,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.AddBundle = hr;
          function jr(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, W.I8)(ee, mr, sr),
              te,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.ModifyLineItem = jr;
          function ce(Mr, mr, sr) {
            return Mr.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, W.I8)(ie, mr, sr),
              se,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          F.RemoveLineItems = ce;
        })(ot || (ot = {}));
        var Ce = i(72609),
          Y = i(25294);
        function Z(F, r, s) {
          return {
            queryKey: GetShoppingCartKey(r),
            queryFn: () => he(F, r),
            staleTime: 1800 * 1e3,
            ...s,
          };
        }
        function A(F) {
          const r = useActiveServiceTransport(),
            s = useShoppingCartID();
          return useQuery(Z(r, s, F));
        }
        function ir(F, r, s) {
          if (F !== void 0)
            return r
              ? F.line_items.some(
                  (E) =>
                    E.type ==
                      EAccountCartLineItemType.k_EAccountCartLineItem_Package &&
                    E.packageid === r,
                )
              : s
                ? F.line_items.some(
                    (E) =>
                      E.type ==
                        EAccountCartLineItemType.k_EAccountCartLineItem_Bundle &&
                      E.bundleid === s,
                  )
                : void 0;
        }
        function lr(F) {
          return A({ select: (r) => r.line_items?.length ?? 0, ...F });
        }
        function cr(F, r, s, E, er, hr) {
          const {
            navData: jr,
            nAccountIDGiftee: ce,
            bIsGift: Mr = !1,
          } = hr ?? {};
          if (BIsAccountCart(s)) {
            const mr = (E || []).map((sr) => ({
              packageid: sr,
              bIsGift: Mr,
              nAccountIDGiftee: ce,
            }));
            return (
              er &&
                mr.push({ bundleid: er, bIsGift: Mr, nAccountIDGiftee: ce }),
              fe(F, UserConfig.country_code, mr, jr).then(
                ([sr, Pr]) => (
                  InvalidateDynamicStoreVersion(),
                  sr == k_EResultOK
                    ? (ReplaceShoppingCart(r, s, Pr.cart),
                      {
                        success: !0,
                        items: Pr.line_item_ids,
                        replaced_packageids: Pr.replaced_packages,
                      })
                    : sr === k_EResultAlreadyOwned
                      ? {
                          success: !1,
                          result: sr,
                          existing_billing_agreementid:
                            Pr.existing_billing_agreementid,
                          new_billing_agreement_recurring_packageid:
                            Pr.new_billing_agreement_recurring_packageid,
                        }
                      : { success: !1, result: sr }
                ),
              )
            );
          } else
            return or(F, E, er, Mr, ce).then(([mr, sr]) => {
              if ((InvalidateDynamicStoreVersion(), mr)) {
                ReplaceShoppingCart(r, s, De(sr));
                const Pr = (E || []).map((Ue) =>
                  sr?.lineitems?.find(
                    (Fe) => Fe.package_item?.packageid === Ue,
                  ),
                );
                return (
                  er &&
                    Pr.push(
                      sr?.lineitems?.find(
                        (Ue) => Ue.bundle_item?.bundleid === er,
                      ),
                    ),
                  {
                    success: !0,
                    items: Pr.filter(isTruthy).map((Ue) => Ue.gidlineitem),
                  }
                );
              }
              return { success: !1 };
            });
        }
        async function or(F, r, s, E, er) {
          const hr = new FormData();
          r &&
            (r.length === 1
              ? hr.set("subid", r[0].toString())
              : r.forEach((Mr) => hr.append("subid[]", Mr.toString()))),
            s && hr.set("bundleid", s.toString()),
            (E || er) &&
              (hr.set("isgift", "1"),
              er && hr.set("gifteeaccountid", er.toString())),
            hr.set("action", "add_to_cart");
          const jr = await fetch(`${Ce.TS.STORE_BASE_URL}cart/addtocart`, {
            method: "post",
            body: hr,
          });
          if (!jr.ok) throw new Error("Failed to fetch /cart/addtocart");
          const ce = await jr.json();
          return [ce?.success ? M.R : M.zi, ce?.contents];
        }
        async function Ur(F, r, s, E) {
          return fe(F, r, [s], E);
        }
        async function fe(F, r, s, E) {
          const er = W.w.Init(D);
          if (!s || s.length === 0)
            return (
              console.error(
                "No valid Package or Bundle provided to add to cart",
              ),
              [M.nO, null]
            );
          s.forEach((jr) => {
            const ce = er.Body().add_items();
            jr.packageid
              ? ce.set_packageid(jr.packageid)
              : jr.bundleid
                ? ce.set_bundleid(jr.bundleid)
                : console.error(
                    "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
                  ),
              jr.bIsGift &&
                (ce.flags(!0).set_is_gift(!0),
                jr.nAccountIDGiftee &&
                  ce.gift_info(!0).set_accountid_giftee(jr.nAccountIDGiftee));
          }),
            E && er.Body().set_navdata(l.fromObject((0, Y.R)(E))),
            er.Body().set_user_country(r);
          const hr = await ke.AddItemsToCart(F, er);
          return (
            hr.BSuccess() ||
              console.warn(
                `Failed to add item to account cart: ${hr.GetEResult()}`,
              ),
            [hr.GetEResult(), hr.Body().toObject()]
          );
        }
        async function he(F, r) {
          if (BIsAccountCart(r)) {
            const s = CProtoBufMsg.Init(CAccountCart_GetCart_Request);
            s.Body().set_user_country(UserConfig.country_code);
            const E = await AccountCartService.GetCart(F, s);
            if (!E.BSuccess())
              throw `Error loading AccountCart: ${E.GetErrorMessage()}`;
            return E.Body().toObject()?.cart;
          } else if (BIsReplayCart(r)) {
            const s = CProtoBufMsg.Init(CCheckout_ValidateCart_Request);
            SetStoreBrowseContext(
              { country: UserConfig.country_code, language: Config.LANGUAGE },
              s,
            ),
              s.Body().set_gidreplayoftransid(r.gid);
            const E = await CheckoutService.ValidateCart(F, s);
            if (!E.BSuccess())
              throw `Error loading ReplayCart: ${E.GetErrorMessage()}`;
            return Pe(E.Body().toObject());
          } else {
            if (!r.gid) return De(void 0);
            const s = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
            s.Body().set_gidshoppingcart(r.gid);
            const E = await ShoppingCartService.GetShoppingCartContents(F, s);
            if (!E.BSuccess())
              throw `Error loading Legacy Cart: ${E.GetErrorMessage()}`;
            return De(E.Body().toObject().contents);
          }
        }
        function De(F) {
          const r = { line_items: [] };
          return (
            F?.lineitems?.length &&
              (r.line_items = F.lineitems
                .map((s) => (s.package_item?.gidbundle ? null : Ze(s)))
                .filter(a)),
            r
          );
        }
        function Ze(F) {
          const r = { price_when_added: {}, flags: {} };
          return (
            (r.line_item_id = F.gidlineitem),
            F.bundle_item?.bundleid
              ? ((r.bundleid = F.bundle_item.bundleid),
                (r.type = X),
                F.bundle_item.is_gift &&
                  ((r.flags.is_gift = F.bundle_item.is_gift),
                  (r.gift_info = F.bundle_item.gift_info)))
              : F.package_item &&
                ((r.packageid = F.package_item.packageid),
                (r.price_when_added.amount_in_cents =
                  F.package_item.costwhenadded?.amount ?? ""),
                (r.price_when_added.currency_code =
                  F.package_item.costwhenadded?.currencycode ?? 0),
                (r.type = Q),
                F.package_item.is_gift &&
                  ((r.flags.is_gift = F.package_item.is_gift),
                  (r.gift_info = F.package_item.gift_info))),
            r
          );
        }
        function Pe(F) {
          const r = { subtotal: F.estimated_totals.subtotal, line_items: [] };
          return (
            (r.line_items = F.cart_items
              ?.map((s) => {
                let E;
                if (s.item_id?.packageid)
                  E = EAccountCartLineItemType.k_EAccountCartLineItem_Package;
                else if (s.item_id?.bundleid)
                  E = EAccountCartLineItemType.k_EAccountCartLineItem_Bundle;
                else return;
                return {
                  line_item_id: s.line_item_id,
                  type: E,
                  packageid: s.item_id.packageid,
                  bundleid: s.item_id.bundleid,
                  is_valid: !0,
                  price_when_added: s.price_when_added,
                  gift_info: s.gift_info,
                  flags: { is_gift: !!s.gift_info?.accountid_giftee },
                  gidcoupon_applied: s.coupon_applied?.gidcoupon,
                };
              })
              .filter(isTruthy)),
            r
          );
        }
        var Ve = i(52438),
          Je = i(90900),
          Ke = i(90626);
        function at() {
          return Ce.iA.logged_in
            ? { type: "account" }
            : { type: "anonymous", gid: (0, Ve.j_)(Je.TP) };
        }
        const rt = Ke.createContext({ cartID: void 0 });
        function Ie() {
          return Ke.useContext(rt).cartID || at();
        }
        function ut(F) {
          const { cartID: r, children: s } = F,
            E = React.useMemo(() => ({ cartID: r }), [r]);
          return jsx(rt.Provider, { value: E, children: s });
        }
        function Le(F) {
          return d(F) ? F.type : F.gid;
        }
        function et(F) {
          return ["shopping_cart", Le(F), Ce.iA.accountid];
        }
        function dt(F, r) {
          return BIsAccountCart(F)
            ? ["validate_checkout", Le(F), UserConfig.accountid]
            : ["validate_checkout", Le(F), r?.accountid_giftee];
        }
        function tt(F, r) {
          F.invalidateQueries({ queryKey: ["validate_checkout"], exact: !1 });
        }
        function He(F, r) {
          F.invalidateQueries({ queryKey: et(r) }), tt(F, r);
        }
        function mt(F, r, s) {
          F.setQueryData(et(r), s), tt(F, r);
        }
        function ft(F, r, s, E, er) {
          return Bt(
            [{ packageid: F, bundleid: r, bIsGift: s, nAccountIDGiftee: E }],
            er,
          );
        }
        function Bt(F, r) {
          const s = Ie(),
            E = (0, h.KV)(),
            er = (0, b.jE)(),
            { storeBrowseContext: hr, dataLoader: jr } = (0, y.yn)(),
            { country: ce } = hr,
            Mr = (0, g.Gd)(r);
          return (0, x.n)({
            mutationFn: async () => {
              if (
                F.length == 0 ||
                !F.every((sr) => sr.packageid || sr.bundleid)
              )
                throw "Every item must have a valid package or bundle id";
              let mr;
              if (d(s)) {
                const [sr, Pr] = await fe(E, ce, F, Mr);
                if (sr == M.R) (mr = Pr.line_item_ids), mt(er, s, Pr.cart);
                else throw `AddItemsToAccountCart failed with ${sr}`;
              } else if (w(s)) {
                const sr = F.map((Fe) => Fe.packageid).filter(a),
                  Pr = F.map((Fe) => Fe.bundleid).filter(a);
                if (Pr.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [xe, Ue] = await or(
                  E,
                  sr.length > 0 ? sr : void 0,
                  Pr[0],
                  F.some((Fe) => Fe.bIsGift),
                  F.find((Fe) => Fe.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (xe == M.R && Ue) {
                  const Fe = new Set(sr),
                    Kt = new Set(Pr);
                  (mr =
                    Ue.lineitems
                      ?.filter(
                        (Ae) =>
                          (Ae.package_item &&
                            !Ae.package_item.gidbundle &&
                            Fe.has(Ae.package_item.packageid)) ||
                          (Ae.bundle_item && Kt.has(Ae.bundle_item.bundleid)),
                      )
                      ?.map((Ae) => Ae.gidlineitem) || []),
                    mt(er, s, De(Ue));
                } else throw `AddItemsToAnonymousCart failed with ${xe}`;
              } else throw "Invalid cart type";
              return mr;
            },
            onMutate: () => {
              (async () => {
                const mr = F.map((Pr) =>
                  Pr.packageid
                    ? { packageid: Pr.packageid }
                    : { bundleid: Pr.bundleid },
                );
                (
                  await Promise.all(
                    mr.map((Pr) => er.fetchQuery((0, j.us)(jr, Pr))),
                  )
                ).forEach((Pr, xe) => {
                  const Ue =
                    Pr?.included_appids?.length == 1
                      ? { appid: Pr.included_appids[0] }
                      : mr[xe];
                  er.prefetchQuery((0, j.AQ)(jr, Ue)),
                    er.prefetchQuery((0, j.rK)(jr, Ue));
                });
              })();
            },
          });
        }
        var $e = i(44420);
        function Zt(F) {
          const {
              storeItem: r,
              feature: s,
              depth: E,
              children: er,
              noImpressionTracking: hr,
              ...jr
            } = F,
            ce = r?.appid,
            Mr = Ot(r);
          if (!r) return er;
          const mr = jsx(FocusableAnchor, { ...jr, href: Mr, children: er });
          return ce && !hr
            ? jsx(ImpressionTrackedElement, {
                appID: ce,
                feature: s,
                depth: E,
                children: mr,
              })
            : mr;
        }
        function Ot(F, r, s) {
          return (0, g.aL)(
            F ? `${Ce.TS.STORE_BASE_URL}${F.store_url_path}` : void 0,
            r,
            s,
          );
        }
        var Tt = i(24179),
          Et = i(83482);
        class le extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              le.prototype.packageid || e.Sg(le.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    country_code: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = e.w0(le.M())), le.sm_mbf;
          }
          toObject(r = !1) {
            return le.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(le.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(le.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new le();
            return le.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(le.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(le.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class oe extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oe.prototype.inventory_available || e.Sg(oe.M()),
              o.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    inventory_available: {
                      n: 1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    high_pending_orders: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = e.w0(oe.M())), oe.sm_mbf;
          }
          toObject(r = !1) {
            return oe.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(oe.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(oe.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (c().BinaryReader)(r),
              E = new oe();
            return oe.deserializeBinaryFromReader(E, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(oe.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(oe.M(), r, s);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var gt;
        ((F) => {
          function r(s, E, er) {
            return s.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, W.I8)(le, E, er),
              oe,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          F.CheckInventoryAvailableByPackage = r;
        })(gt || (gt = {}));
        var jt = i(20194),
          Wt = i(69561),
          Dt = i(98609);
        const xt = { high_pending_orders: !1, inventory_available: !0 };
        function Ut(F) {
          const r = (0, h.rW)(),
            { data: s } = (0, j.J$)(F),
            E = (0, jt.I)({
              queryKey: [
                s?.id || Wt.sc,
                s?.type || "invalid",
                s?.item_type || "invalid",
              ],
              queryFn: () => ht(s, r),
              enabled: !!(s && s.type === $e.uE.Hk),
            });
          return E.isLoading ? null : E.data;
        }
        async function ht(F, r) {
          if (!F || F.item_type !== $e.c6.RD || F.type !== $e.uE.Hk) return xt;
          const s = W.w.Init(le);
          s.Body().set_packageid(F.id || 0),
            s.Body().set_country_code(Dt.iA.country_code);
          const E = await gt.CheckInventoryAvailableByPackage(r, s);
          if (E.GetEResult() !== M.R)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                E.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${E.GetEResult()}`,
              ))
            );
          return E.Body().toObject();
        }
        var vt = i(53107),
          it = i(36707),
          nt = i(3166),
          It = i(85599),
          Ft = i(82080),
          lt = i.n(Ft),
          Ye = i(39905);
        function Nt(F) {
          const { id: r, className: s } = F,
            E = (0, g.n9)(),
            { data: er } = (0, j.J$)(r),
            { data: hr } = (0, j.by)(r),
            { data: jr } = (0, j.EO)(r),
            ce = Ut(r),
            { bIsOwned: Mr } = (0, Tt.ZJ)(r),
            mr = Ot(er),
            sr = (0, Ke.useCallback)(() => {
              if (er) {
                let xe = er.appid;
                er.related_items?.parent_appid &&
                  er.type != $e.uE.Ov &&
                  (xe = er.related_items.parent_appid),
                  (0, vt.Id)(window, `steam://run/${xe}`);
              }
            }, [er]);
          if (!er || !hr || !jr || er.type == $e.uE.gQ) return null;
          const Pr =
            er.is_free ||
            (jr.final_price_in_cents != null &&
              jr.final_price_in_cents == "0") ||
            (jr.discount_pct && jr.discount_pct >= 100);
          if (er.item_type == $e.c6.RD) {
            if (er.type == $e.uE.Hk)
              if (ce) {
                if (!ce.inventory_available)
                  return (0, n.jsx)("div", {
                    className: (0, it.A)(lt().ActionOutOfStock, s),
                    children: (0, n.jsxs)("span", {
                      children: [" ", Ye.Z.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, n.jsx)(It.t, { size: "small", position: "center" });
            else if (Pr && er.included_appids && er.included_appids.length > 1)
              return null;
          }
          if (er.item_type == $e.c6.qI) {
            if (
              (hr.is_coming_soon && !jr.packageid) ||
              (Mr && er.type === $e.uE.Hk)
            )
              return null;
            if (!Mr && jr.is_free_to_keep)
              if (nt.TS.IN_CLIENT || (0, nt.yK)() != "store") {
                const xe = `${nt.TS.IN_CLIENT ? "steam://openurl/" : ""}${mr}`;
                return (0, n.jsx)("div", {
                  onClick: (Ue) => (0, vt.Id)(Ue, xe),
                  className: (0, it.A)(lt().Action, s),
                  children: (0, n.jsx)("span", {
                    children: Ye.Z.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const xe = (0, Et.wJ)(
                  `${nt.TS.STORE_BASE_URL}freelicense/addfreelicense`,
                  E,
                );
                return (0, n.jsxs)("form", {
                  action: xe,
                  method: "POST",
                  children: [
                    (0, n.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: jr.packageid,
                    }),
                    (0, n.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, nt.KC)(),
                    }),
                    (0, n.jsx)("button", {
                      className: (0, it.A)(lt().Action, s),
                      type: "submit",
                      children: Ye.Z.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((Mr || Pr) && !er.is_coming_soon) {
              let xe = Ye.Z.Localize(
                "#EventDisplay_CallToAction_PlayNowForFree",
              );
              return (
                Mr
                  ? (xe = Ye.Z.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : er.is_free_temporarily &&
                    (xe = Ye.Z.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, n.jsx)("div", {
                  className: (0, it.A)(lt().Action, s),
                  onClick: sr,
                  children: (0, n.jsx)("span", { children: xe }),
                })
              );
            }
            if (jr.formatted_final_price == "")
              return (0, n.jsx)("a", {
                href: mr,
                className: (0, it.A)(lt().Action, s),
                children: Ye.Z.Localize(
                  "#EventDisplay_CallToAction_VisitStore",
                ),
              });
          }
          return (0, n.jsx)(Pt, {
            className: s,
            storeItemBestPurchaseOption: jr,
            storeItemDefaultData: er,
          });
        }
        function Pt(F) {
          const {
              className: r,
              storeItemBestPurchaseOption: s,
              storeItemDefaultData: E,
            } = F,
            er = (0, g.n9)(),
            { mutate: hr } = ft(
              s?.packageid,
              s?.bundleid,
              !1,
              void 0,
              er.feature,
            );
          return (0, n.jsx)("div", {
            className: (0, it.A)(lt().Action, r),
            onClick: () => hr(),
            children: (0, n.jsx)("span", {
              children: Ye.Z.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      54698: (k, J, i) => {
        "use strict";
        i.d(J, { do: () => O, of: () => D });
        var n = i(7850),
          M = i(55483),
          a = i(24660),
          h = i(64868),
          y = i(72609),
          j = i(89926),
          g = i(72865),
          b = i(25294),
          x = i(20194),
          d = i(75233),
          w = i(68312),
          B = i(98609),
          S = i(20125);
        async function T(f, I) {
          const $ = (0, S.Am)(B.TS.STORE_BASE_URL, I, B.iA.country_code);
          return (await (await fetch($)).json()).rgFollowedApps || [];
        }
        function P() {
          const f = (0, w.KV)(),
            I = B.iA.accountid;
          return (0, x.I)(W(f, I));
        }
        function W(f, I) {
          return {
            queryKey: e(I),
            queryFn: async () => {
              if (!I) return new Set();
              const $ = await T(f, I);
              return new Set($);
            },
            staleTime: 600 * 1e3,
          };
        }
        function o(f) {
          const { data: I } = P();
          return I === void 0 || f == null ? void 0 : I.has(f);
        }
        function c() {
          const f = (0, d.jE)(),
            I = B.iA.accountid;
          return ($, R) => {
            f.setQueryData(e(I), (q) => {
              if (!q) return;
              const V = new Set(q);
              if (R) for (const _ of R) V.delete(_);
              if ($) for (const _ of $) V.add(_);
              return V;
            });
          };
        }
        function e(f) {
          return ["AccountFollowApps", f ?? 0];
        }
        var U = i(51614),
          N = i(67705);
        function l(f, I, $) {
          const R = c(),
            q = B.iA.accountid;
          return (0, U.n)({
            mutationKey: ["useUpdateAppFollow", f, q, I],
            mutationFn: async () => {
              if (f == null) return;
              const V = B.TS.STORE_BASE_URL + "explore/followgame",
                _ = new FormData();
              _.append("appid", "" + f),
                _.append("sessionid", (0, N.KC)()),
                I || _.append("unfollow", "1"),
                $ && _.append("snr", $);
              const br = await fetch(V, {
                method: "POST",
                body: _,
                credentials: "include",
              });
              if (!br.ok)
                throw new Error(
                  `Follow App ${I ? "add" : "remove"} of appid ${f} failed (${br.status})`,
                );
            },
            onMutate: () => {
              f != null && R(I ? [f] : void 0, I ? void 0 : [f]);
            },
            onError: () => {
              f != null && R(I ? void 0 : [f], I ? [f] : void 0);
            },
            onSuccess: () => {
              (0, S.WZ)();
            },
          });
        }
        var z = i(10134),
          Q = i(35675),
          X = ((f) => (
            (f[(f.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
            (f[(f.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
            (f[(f.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
            (f[(f.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
            f
          ))(X || {});
        function v(f, I) {
          const $ = (0, Q.BU)(),
            R = B.iA.accountid;
          return (0, U.n)({
            mutationKey: ["useUpdateCuratorAffinity", f, R, I],
            mutationFn: async () => {
              if (f == null) return !1;
              const q = I == X.k_ECuratorFollow || I == X.k_ECuratorUnfollow,
                V = I == X.k_ECuratorFollow || I == X.k_ECuratorIgnore,
                _ = `${B.TS.STORE_BASE_URL}curators/${q ? "ajaxfollow/" : "ajaxignore/"}`,
                br = new FormData();
              br.append("clanid", "" + f),
                br.append("sessionid", (0, N.KC)()),
                br.append(q ? "follow" : "ignore", V ? "1" : "0");
              const vr = await fetch(_, {
                  method: "POST",
                  body: br,
                  credentials: "include",
                }),
                Br = await vr.json();
              if (!vr.ok)
                throw new Error(
                  `Curator Affinity: ${q ? "Follow" : "Ignore"} Currator ${V ? "add" : "remove"} failed (${vr.status} / ${Br.msg})`,
                );
              return Br.is_creator;
            },
            onMutate: () => {
              if (f != null) {
                const q =
                  I == X.k_ECuratorUnfollow || I == X.k_ECuratorUnignore;
                $(
                  I == X.k_ECuratorFollow ? [{ clanAccountID: f }] : void 0,
                  I == X.k_ECuratorIgnore ? [{ clanAccountID: f }] : void 0,
                  q ? [{ clanAccountID: f }] : void 0,
                );
              }
            },
            onError: (q) => {
              if (f != null) {
                const V = I == X.k_ECuratorFollow || I == X.k_ECuratorIgnore;
                $(
                  I == X.k_ECuratorUnfollow ? [{ clanAccountID: f }] : void 0,
                  I == X.k_ECuratorUnignore ? [{ clanAccountID: f }] : void 0,
                  V ? [{ clanAccountID: f }] : void 0,
                  q ? [{ clanAccountID: f, is_creator: !0 }] : void 0,
                );
              }
            },
            onSuccess: (q) => {
              q &&
                f &&
                $(void 0, void 0, void 0, [
                  { clanAccountID: f, is_creator: !0 },
                ]),
                (0, S.WZ)();
            },
          });
        }
        var K = i(90626),
          p = i(85705),
          Jr = i(36118),
          Ir = i(36707),
          Or = i(18210),
          yr = i(2801),
          dr = i(71421),
          ar = i(56524),
          nr = i(63109),
          tr = i(95695);
        const ur = (f) => {
          const {
              className: I,
              bIgnored: $,
              bApplyingFollowing: R,
              bFollowing: q,
              onFollowClick: V,
              followType: _,
            } = f,
            { elDialogElement: br, fnShowLogonDialog: vr } = (0, j.l)();
          if (!(0, Q.xU)()) return null;
          let Br = null;
          switch (_) {
            case "app":
              Br = (0, Or.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              Br = (0, Or.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              Br = (0, Or.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              Br = (0, Or.we)("#steam_group_follow_ttip");
          }
          return Br
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(dr.Gq, {
                    toolTipContent: !$ && !q ? Br : void 0,
                    children: (0, n.jsxs)(a.ml, {
                      className: (0, Ir.A)(
                        tr.Button,
                        ar.FollowButton,
                        "FollowButton",
                        I,
                        q ? "Followed" : "",
                      ),
                      onClick: () => {
                        y.iA.logged_in ? V() : vr();
                      },
                      children: [
                        R && (0, n.jsx)(p.k, { size: 15 }),
                        !R && (q || $) && (0, n.jsx)(Jr.Jlk, {}),
                        (0, n.jsx)("div", {
                          className: (0, Ir.A)(
                            ar.FollowBtnText,
                            "FollowBtnText",
                          ),
                          children:
                            !R &&
                            (q
                              ? (0, Or.we)("#Button_Followed")
                              : $
                                ? (0, Or.we)("#Button_Ignored")
                                : (0, Or.we)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  br,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", _), null);
        };
        function D(f) {
          const {
              followType: I,
              fnSuccessCallback: $,
              clanAccountID: R,
              className: q,
            } = f,
            [V, _] = K.useState(!1),
            { data: br } = (0, M.TB)(I ? void 0 : R),
            vr = (0, Q.eT)(R),
            Br = (0, Q.mQ)(R),
            { mutateAsync: Wr } = v(
              R,
              vr ? X.k_ECuratorUnfollow : X.k_ECuratorFollow,
            ),
            [Fr, ke, ct] = (0, h.uD)(),
            Nr = K.useCallback(async () => {
              vr != null && (_(!0), await Wr(), _(!1), $ && $(vr));
            }, [vr, $, Wr]);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(ur, {
                className: q,
                bIgnored: !!Br,
                bFollowing: !!vr,
                bApplyingFollowing: V,
                onFollowClick: () => {
                  y.iA.is_limited ? ke() : Nr();
                },
                followType:
                  I ?? (br?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, n.jsx)(yr.EN, {
                active: Fr,
                children: (0, n.jsx)(nr.g, { closeModal: ct }),
              }),
            ],
          });
        }
        function O(f) {
          const { appid: I, className: $ } = f,
            [R, q] = K.useState(!1),
            V = o(I),
            _ = (0, z.BD)(I),
            br = (0, g.n9)(),
            vr = b.A.GetSNRLinkParam(br),
            { mutateAsync: Br } = l(I, !V, vr),
            Wr = K.useCallback(async () => {
              const { appid: Fr } = f;
              q(!0), await Br(), q(!1);
            }, [f, Br]);
          return (0, n.jsx)(ur, {
            className: $,
            bIgnored: !!_,
            bFollowing: !!V,
            bApplyingFollowing: R,
            onFollowClick: Wr,
            followType: "app",
          });
        }
      },
      63109: (k, J, i) => {
        "use strict";
        i.d(J, { g: () => y });
        var n = i(7850),
          M = i(2801),
          a = i(18210),
          h = i(3166);
        const y = (j) => {
          let g = h.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, n.jsx)(M.o0, {
            strTitle: (0, a.we)("#Informational_Message"),
            onCancel: j.closeModal,
            onOK: j.closeModal,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: (0, a.PP)(
                j.strTokenOverride || "#User_LimitedAccount",
                (0, n.jsx)("a", {
                  href: g,
                  target: h.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, a.we)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      85705: (k, J, i) => {
        "use strict";
        i.d(J, { k: () => y });
        var n = i(7850),
          M = i(36707),
          a = i(37999),
          h = i.n(a);
        function y(j) {
          const { size: g, color: b, trackColor: x } = j,
            d = { borderColor: x, borderLeftColor: b };
          if (typeof g == "number") {
            const w = `${g}px`;
            (d.width = w),
              (d.height = w),
              (d.minHeight = w),
              (d.minWidth = w),
              (d.borderWidth = `${g / 10}px`);
          }
          return (0, n.jsx)("div", {
            className: (0, M.A)(
              a.Loading,
              g == "small" && a.Small,
              (g == "medium" || !g) && a.Medium,
              g == "large" && a.Large,
            ),
            style: d,
          });
        }
      },
      77200: (k, J, i) => {
        "use strict";
        i.d(J, { w: () => y });
        var n = i(7850),
          M = i(90626);
        const a = M.createContext({});
        function h(j) {
          const { children: g, ...b } = j;
          return jsx(a.Provider, { value: b, children: g });
        }
        function y() {
          return M.useContext(a);
        }
      },
      21659: (k, J, i) => {
        "use strict";
        i.d(J, { c5: () => y, zI: () => j });
        var n = i(90626),
          M = i(45387),
          a = i.n(M),
          h = i(54963);
        function y() {
          return window.innerWidth < parseInt(a().strMaxMobileWidth);
        }
        function j() {
          const b = (0, h.CH)();
          return (
            n.useEffect(
              () => (
                window.addEventListener("resize", b),
                () => window.removeEventListener("resize", b)
              ),
              [b],
            ),
            window.innerWidth < parseInt(a().strMaxMobileWidth)
          );
        }
        function g() {
          const b = useForceUpdate();
          return (
            React.useEffect(
              () => (
                window.addEventListener("resize", b),
                () => window.removeEventListener("resize", b)
              ),
              [b],
            ),
            window.innerWidth < parseInt(styles.strMaxResponsiveWidth)
          );
        }
      },
      19730: (k, J, i) => {
        "use strict";
        i.d(J, { Dq: () => y, NO: () => j, dm: () => h });
        var n = i(84346),
          M = i(39905);
        function a(g, b) {
          const x = b.bUseBinary1K ? 1024 : 1e3,
            d = x * x,
            w = d * x,
            B = w * x;
          return g > B
            ? { nNum: g / B, strPrefix: "Tera" }
            : g > w
              ? { nNum: g / w, strPrefix: "Giga" }
              : g > d
                ? { nNum: g / d, strPrefix: "Mega" }
                : g > x
                  ? { nNum: g / x, strPrefix: "Kilo" }
                  : { nNum: g, strPrefix: "" };
        }
        function h(g, b, x, d) {
          let w = b;
          typeof w == "number"
            ? (w = {
                nDigitsAfterDecimal: b,
                bUseBinary1K: x || x === void 0,
                bValueIsInBytes: !d,
                bValueIsRate: d,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (w = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...w,
              });
          const { nNum: B, strPrefix: S } = a(g, w),
            T = `#${S}${w.bValueIsInBytes ? "bytes" : "bits"}${w.bValueIsRate ? "_PerSecond" : ""}`;
          return M.Z.Localize(
            T,
            B.toLocaleString((0, n.J)(), {
              minimumFractionDigits: w.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: w.nDigitsAfterDecimal,
            }),
          );
        }
        function y(g, b = 0) {
          let x;
          return (
            b && (x = { maximumFractionDigits: b }),
            g ? g.toLocaleString((0, n.J)(), x) : "" + g
          );
        }
        function j(g) {
          return g > 1e9
            ? Math.trunc(g / 1e9).toString() + "B"
            : g > 1e6
              ? Math.trunc(g / 1e6).toString() + "M"
              : g > 1e3
                ? Math.trunc(g / 1e3).toString() + "K"
                : g.toString();
        }
      },
      64769: (k) => {
        k.exports = {
          "duration-app-launch": "800ms",
          GameHoverCapsuleCtn: "_1isLDN8xbFyCDG5jtMO7J3",
          Loading: "_6exjsiWCk6IgWiQenqfQH",
          UseHidingBottomHalf: "_3707obuB-7wD8GDUYRaLH4",
          TrailerAnchorStoreLink: "_1VNyOcfe2cBKY52VedXjyc",
          TrailerCtn: "_3ANIAZhTtXLvORlbv-Du-N",
          FullDivImage: "JIMdRVl5GQwMrWUt3A6RH",
          Transparent: "_2pVFEfWO0oGPOwTylls-tE",
          Midline: "_3qz5n49jfXUrhCnqkmibgt",
          Price: "_3mEkhLPOOR45uhGnhsHkao",
          CapsuleImageAnchorPoint: "Ea3rwozDuOg8FLc8b7n2c",
          CapsuleImageCtn: "_3EW-HHeEwhOW7IbL8k5VnZ",
          WithCornerShine: "_30TPn4BD1o-X0WcWYvJ-gF",
          Opening: "LiQedMzPoDBtg4XmNlHSU",
          Open: "_2HPVMueZXbMmvgW8C6iOw7",
          DemoButton: "_2Mu1VwOBzB0kLcDCRbJD6w",
          WishlistButton: "_3FAid_cwwxW8-9Sp6pSPqS",
          ShowInGamepadUI: "_2f6Nut1kQFb4WnCmz4uXDG",
          WishlistButtonText: "_2GqXfP0dBAJl9ozuBV3Jqh",
          WishlistLoadingText: "_2k23LU1oBxEHe-_Qff-1k3",
          WishlistButtonNotTop: "_3W_yknADVFtPgqx9Wh2ayW",
          FollowGameButtonNotTop: "iNS5yHAxKgg4H1nukkyxN",
          BottomShelf: "_3QqbGLgtSpReBWRaPB5GnI",
          BottomShelfOffScreen: "_3ncpfgFYDbcm9Iv5ca27Y0",
          ShortDescription: "APpfln1FqbXnR9klsbeM_",
          TextContent: "_3WlfumeMCR40WR-uBdg3Gx",
          GameTitle: "_38GHf0V2kn6MNNjQF7QajG",
          TagRow: "_1keH60e_I90mkEgfpsw88B",
          Tags: "_1GfeALEEHA6uNXnvOXvTSW",
          Tag: "_2bi1NxjYgiXf0VZFoYAKWE",
          PlatformDisplay: "_1Y5yJHywrdBJlgg1JbWnM5",
          ReviewsAndRelease: "_39DFdWNzMu5Bpkg0MYRE__",
          ReleaseDate: "_3b8-ojNFf-CIMu9sOMJhM6",
          ReleasePrefix: "_1mRD6kBN_rXYh69QwQx9CJ",
          ReviewScore: "_6ctF1zf2MKZRofZdWQXqG",
          ReviewScoreHeader: "_3RQ_AUZpM18Y9IO5ufZ5X6",
          ReviewScoreCount: "yYag_VAd2NXLTrOBd-6mu",
          ReviewScoreLanguage: "_3-FV36ByKDMBDoEKOpnY9s",
          ReviewScoreValue: "XwgGstGDpIVOjAfg3pK1e",
          ReviewScoreDivider: "EbDXdng1ktTe_DvwN32Tv",
          ReviewScoreNone: "_j-FE6iveSoKTCgGAx_NK",
          ReviewScoreLow: "eb3U2C9mNpcsxnVO-QAvh",
          ReviewScoreMixed: "_33l5fpEoTZORkBTRCg4adM",
          ReviewScoreHigh: "_2Mc-wW0wAsgehC46aTwBVa",
          ReviewScorePercentage: "_2jmj3hWBpHbR2XUcZaAXFp",
          ReviewScoreLabel: "uEsfJ0VAuX37ItihZkK2J",
          GameHoverCreatorFollowButtonCtn: "_1RMWITT8PsJOgR4SoIR3Sw",
          BackgroundAnimation: "_2-NF7UzSGK3WLmqugAW3EM",
          "ItemFocusAnim-darkerGrey-nocolor": "bfQTK-Cop8MYUAa9j7rQb",
          "ItemFocusAnim-darkerGrey": "_1_wN_hVuLwcfYlTDIE-HTs",
          "ItemFocusAnim-darkGreySettings": "YO_BEpx_0vuXWdgMFEjkL",
          "ItemFocusAnim-darkGrey": "_32cDe-nAMlG7JYrA6niEGN",
          "ItemFocusAnim-grey": "_2LnPTi1cPqqxqvII8cqnlh",
          "ItemFocusAnim-translucent-white-10": "-jNJst4AtmAMI-o6ETEiC",
          "ItemFocusAnim-translucent-white-20": "_1dwebsW8iZHHqsEF46LGhs",
          "ItemFocusAnimBorder-darkGrey": "wiEMwKtkhMy1kSbxfOR43",
          "ItemFocusAnim-green": "PJqmv3PnTw0P2SQBGF3nn",
          focusAnimation: "_2mMG8YO1MWnzaegzgcISk2",
          hoverAnimation: "_2aCSOFWsYITdHt3aWn3-vu",
        };
      },
      39722: (k) => {
        k.exports = {
          "duration-app-launch": "800ms",
          IgnoreButton: "_2TD7UsjzdR3Zr5ZOZ09n1J",
          IgnoreButtonText: "_2L6vwdfaFPRJ1zesEu6_Bf",
          IgnoreLoadingText: "uh8VGMa5zc623SZkB_hEQ",
          BackgroundAnimation: "_10sTNSs7WhNZPw6GdPTOJX",
          "ItemFocusAnim-darkerGrey-nocolor": "_1MdU34KFhJRKlGMaHngbls",
          "ItemFocusAnim-darkerGrey": "G_fmZBeNGKwyXP6EjOOZ_",
          "ItemFocusAnim-darkGreySettings": "_3n4qtxFhgpKOJlGlGVcI1H",
          "ItemFocusAnim-darkGrey": "_20-FW4mkUJEpsgtwPjoMD6",
          "ItemFocusAnim-grey": "_1QVohJAkrDR6QXMK3fZLMu",
          "ItemFocusAnim-translucent-white-10": "_2vttABcjIJHbd-xXLvTfgb",
          "ItemFocusAnim-translucent-white-20": "_2uyItrki6ohcX2MO3FPcKx",
          "ItemFocusAnimBorder-darkGrey": "_8sJgPArY-c3-X6w3X3la9",
          "ItemFocusAnim-green": "_3ZGmJEBxcg9Rgo7ObB8qJ0",
          focusAnimation: "_23SWPBJXy3Zmgp6Guu_3nw",
          hoverAnimation: "_3BrzCFDf-VVWJEnHMnE5xt",
        };
      },
      10350: (k) => {
        k.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      72365: (k) => {
        k.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      39285: (k) => {
        k.exports = {
          RemoteOptions: "_1n4VsDtc0Av8cBgMJsgkDD",
          InlineLink: "_2nR4GT4DVg9Yl-bTs7Af6_",
          GameName: "_3uXW4QW6my5P4roTw70MxY",
          DownloadStartedCtn: "_1Vx6FpWjxhV9SI5Ld9_nsI",
          LearnMoreCtn: "_3oCB1RA8pibBfr_I0D7Jzr",
          ActionRow: "_1awvs90V6ciEDjEPbnZJ8J",
          ClientSelector: "_3aMZqhwSarToWISh50lejs",
          ClientName: "pR2rsYluolxfGVABLBUAc",
          Icon: "J_P3D4Qf7oCaZDIB-9dzG",
        };
      },
      44375: (k) => {
        k.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      73187: (k) => {
        k.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      54599: (k) => {
        k.exports = {
          GotSteamDialog: "_2Qusm1gosCAtAqLKo5hioQ",
          DownloadSteamUrl: "_10lP7BWsYbhm_AclLUpjRi",
          GameName: "_1_uzwF-1oILlCEkcaApC-n",
          Buttons: "_2_Obm3_emYUZKMgT1bdKgG",
          Button: "_2nVaF4foORFEq78yZ3A7yA",
          LeftButton: "_3WYyumzIcbu_0Zysgbr4_h",
          AnswerText: "hCqVo4reICITJSgSg8g6t",
          ActionText: "_2s5NsgqEDdI6nKvz-9YFa4",
          Footer: "_3OKQsxzgQZkt2GtKz9679g",
          Logo: "_2AEA_k1tEcjAtTL7-Bnitk",
        };
      },
      82080: (k) => {
        k.exports = {
          AddToCartAnchorCtn: "_2ZqO4e00c6-Fr4hJvTJsAu",
          Action: "yoe6d_43t3I6-mjbZGkLs",
          ActionOutOfStock: "_3XwnF5hpyOwvxFT_v7PMhS",
        };
      },
      56524: (k) => {
        k.exports = {
          DevSummaryCtn: "_1k0S-tUF_ENycLJ7PWqbzS",
          LargeFormat: "_1090TwnnSh07Rya_5ss37E",
          CreatorDescCtn: "_3nKoQbWM1xYxsCfDoImGQ-",
          SmallFormat: "_18tLexJfL4tGNabZ9Ywvlm",
          MinimalDisplay: "ROZPQ29NfT-_S-vY5rMJp",
          DevSummaryWidgetCtn: "A2B2VZqisd8LEU7zknWqk",
          DevSummaryContent: "_23xa4AVp7kYtbslOOB8xly",
          DevSummaryBackground: "_1TsqAyLSPMv7JrgVI6Jpnv",
          AvatarLink: "_1N0rYLgFmHTfQng24QRoEh",
          Avatar: "_3JepbxeEa0I4l8TnG9DeT5",
          CreatorTitleCtn: "_2T8Ub04W0G2L6_3692y23L",
          CreatorNameName: "_8196lUGpYeVntSAwJq-64",
          CreatorTagline: "NX5WeT2qHbZGaVykMxMA2",
          Title: "_37vyVYzsOKNDlPWnQ5zcMF",
          Followers: "_2ZpFi_vScMetinFMtGp2WE",
          FollowerCount: "_3cARehxbzcQp_dC3sKo3QH",
          SocialFollowersCtn: "BT3Bjo-dSXZV11Cqy_Awo",
          FollowBtnCtn: "_2artmqqQS2Rl8YMsi1nV-U",
          FollowButton: "_1HwWXjF06mJ9sG_9KXlgA-",
          FollowBtnText: "_1a5djsChaeoZViyFSGNom5",
          SocialContainer: "_1o1Ds-OdAZcjo18bw9QiEH",
          SocialImg: "_2v_K1-p6KHigjcjV3HlHsV",
          SocialLink: "_3eCVbMRawBIqtu1HpE7qJR",
          CuratorHoverCtn: "_30j_Rriv37jV9sEvTdi8Kw",
          MembersListLink: "_3DO0NUX-db2kVZWScbJetR",
          CreatorCarouselCtn: "_11Cu9S1VPnTs2MtOD6DUWN",
          CreatorCarouselCrumbs: "_2EheiN3i0vJ-6LTaCsey78",
          CreatorCarouselCrumb: "_3CIQhWZfRLsRxOmCy1obyV",
        };
      },
      52393: (k) => {
        k.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SaleSection: "_1cOoCFwafBlSkwllIMf3XM",
          CarouselDisplay: "mntHD0WiARnsfz_kMYssq",
          SaleSectionCtn: "i2PTzRNXOK1OXvXb9-wzd",
          NoTopPadding: "_28qZDRJ1HAArkoQZjlLJ09",
          SaleHeaderContainer: "W4mvnnQ0uYKKoCfVm8QgX",
          DisabledBackground: "OPH8r3-pnCjCM7T8GrpWo",
          SaleSectionTabs: "_1FPIVJTLsw1nvAN24BGGKg",
          SaleViewAll: "_1bsBzvGKJui5_QaWVRBFDo",
          SaleSectionLoginPrompt: "_2-dSBTJ6PQzCGvK48gjCCf",
          LoginButton: "_3h6sHYHa8EFm2_xoGiVAnh",
          SaleSectionLivePreview: "_2dBAh0VOfhvgWv2ck8hp7n",
          Hover: "_15FfaTmQGzroKql83EUpaR",
          JumpedTo: "d-8MOKpyXkBvtl8y9qw8C",
          JumpToSection: "tlI9rzg19pPTqlI5UfDP",
          JumpToButton: "eOemW7abP9ncGnYuKqjCO",
          SaleOverlayCtn: "_3GTIcdmGdFdIHRLd5vgEDq",
          SaleOverlay: "_1sZo8rydBtEGprct3pN_1a",
          CarouselCapsuleBordered: "_31OAy5ksRg6RGhCGnDqRr3",
          CarouselCapsuleAnimated: "_3V1O5NH39Eec7m68CKLMDQ",
          AppSummaryWidgetCtn: "_2H8BmYvTdIYKMgG-XiCkc-",
          CarouselSalePageCapsule: "_3r4Ny9tQdQZc50XDM5B2q2",
          SaleBroadcastCtn: "_1SFMhugeWIHJIHrHl6ZQvD",
          SaleOuterTopMargin: "_2-wCQql61VqgdUYz9XDAE6",
          SaleOuterContainer: "_150kddWk8JgylTvh_eC20b",
          CustomStyle_together: "_1lAygDKkL4NolLsYyh0b_x",
          SaleNewSizing: "_1v-BVc2xZoBmJV2CPwNpq0",
          SalePageLogoSet: "JxIGHUxdTjFyWl1KO_tkn",
          SaleBackground: "_2N8SepiLeBUusG1vbHCgiY",
          SaleSectionTitleCtn: "bE2EA4JB9SDa1PZ7HSFL-",
          SaleSectionSubtext: "_17Fnl-wNZIrLjca5rOwwlT",
          SaleSectionContainer: "W9_WAYXgEe-t-7aqqC4Jp",
          vr_supported: "_1BDSJfdkuBN1tCLPLLopYW",
          vr_required: "_1P__hyqsgd049GH0Bn007_",
          preview_placeholder_section: "_3QLsjvek1OeH0pVbeOTBJj",
          LinkCapsule: "_2zVSaxkr0mGLlJ4ivF37dx",
          fullscreen_bg: "j2ykTCJIixZLTJZbDR4Tp",
          fullscreen_bg_video: "_3BU-yduiJJKNkd7_HrsZOY",
          SalePageBroadcastContextHover: "hbVdlTqhylKeYY8mtvLqP",
          AlbumCoverImage: "_2JfUA1GR2GBllJws5Gspq-",
          AlbumTitle: "keaMw-O2oHvRxLDK6gqEG",
          SaleSectionTabListContainer: "_2VZtqrDRVSIicZZHPUY9SY",
          MobileTabSelector: "_2fm5TVukvQanOpOSUahWeX",
          Visible: "_2Jmo5M2wPydPpQXUh8BQt3",
          MobileTabSelectorButton: "_1t4-3uyyq_jmSjRl6tRVef",
          MobileTabSelectorShortcut: "_1P5tcXycY4v5y9lSKeW2bG",
          DesktopTabs: "_2utXvAVvZJb3Wlt5jGxCs",
          MobileTabSelectorDropDown: "_3KO7Yj0s2ECNBrnZ3x6jIy",
          MobileTabSelectorOption: "GiTJlPmmuQyCr-OSCN08c",
          TabContentsContainer: "_2xJbuKOjgnmynp-q7384DI",
          HorizontalScrollInDragForceCursor: "nemO6I3-P1dWDt4lymNBD",
          SaleBroadcastSection: "_1u0IZcPxb5nhSDdfCHHBY9",
          CarouselPage: "HlkukqE4fB5si76sBJzKX",
          TabButtonsCtn: "_21-6tYOa1oCDYC9YCj1Vur",
          TabButton: "_1Gz4sRWceGeI3Si8NI3ZNk",
          SaleTabLabel: "_2mYMQE06Py3h0CfEokpNiM",
          DefaultCreatorCtn: "_3KzJ1sfvwr94TVth1tZA9",
          EventSectionViewAllCtn: "_1B6gV2QA_GwFQvK3wA5qWs",
          SaleSectionBackgroundImageGroupEdit: "_2a4meRP6BAw2re4BFrrwtA",
          BackgroundAnimation: "_1iEXo2C5dYh1sLdEds2zo_",
          "ItemFocusAnim-darkerGrey-nocolor": "_6ALY2cB6oP10XwjHy38XP",
          "ItemFocusAnim-darkerGrey": "_15R1kTQu4fktTozfpKwx_x",
          "ItemFocusAnim-darkGreySettings": "_25-J06c8AyBhzEbrxt0OlL",
          "ItemFocusAnim-darkGrey": "_3yxHI8TA-jq3Ka361SNOoS",
          "ItemFocusAnim-grey": "HdE5j3QJ5wzLUrUd8A9S6",
          "ItemFocusAnim-translucent-white-10": "_3Pg_mdzZKHlcgBMGWoeuM-",
          "ItemFocusAnim-translucent-white-20": "OZ_TTGcJc45o9tMuXjaVs",
          "ItemFocusAnimBorder-darkGrey": "_36t4Gu0DFfDO9-hIb82st6",
          "ItemFocusAnim-green": "_30VQHyiQ7SgMZgv2Q9RwMo",
          focusAnimation: "_1bLCgV4sZsGIHim8xs3go9",
          hoverAnimation: "_3--MfPAMg27VUuOckksz2m",
        };
      },
      18654: (k) => {
        k.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          headerCapsuleImgWidth: "460",
          headerCapsuleImgHeight: "215",
          mainCapsuleImgWidth: "616",
          mainCapsuleImgHeight: "353",
          libraryAssetImgWidth: "300",
          libraryAssetImgHeight: "450",
          heroCapsuleImgWidth: "374",
          heroCapsuleImgHeight: "448",
          StoreSaleWidgetContainer: "_2hhNOdcC6yLwL_rugP3YLf",
          LibraryAssetExpandedDisplay: "PZY_7wH_NY7OgzH9MBiB8",
          SaleItemDefaultCapsuleDisplay: "_37iggltdgh0RtNIECJCfOj",
          BundleContentPreview: "jQ5GanUKBEe7hhgCh6b5z",
          PreviewCtn: "_1NM531LjOd5QmDktUetCOm",
          MarketingMessage: "_3_q87LhuWitbYSEHOVKYlM",
          StoreSaleWidgetRight: "v9uRg57bwOaPsvAnkXESO",
          StoreSaleWidgetHalfLeft: "_111nfdz8Xyg7lDjTWv_OmK",
          StoreSaleWidgetTitle: "_2ekpT6PjwtcFaT4jLQehUK",
          StoreSaleWidgetLibraryAssetExtendedTop: "_1uLNByMlXsYSmrGPWyDNhE",
          StoreSaleWidgetLeft: "_3DkfNrtTOLjNYd3yZliMzy",
          StoreSaleDiscountBox: "cnkoFkzVCby40gJ0jGGS4",
          PurchaseOption: "_2R_C2rCrJEg8G8_d7-QQKn",
          StoreSaleWidgetImage: "yvqq8z2k4i7-Mzx-JHeNC",
          CapsuleMicroTrailer: "_1M7n5f3gWCHv1wN1smoxWg",
          CapsulePlatform: "_2bCf9u4rlC8De687HY6wnh",
          StoreSaleWidgetContents: "AgwfelHhJjcEq6ZQ9ohVr",
          StoreMetaDataCtn: "_2W2g30XYcaT1E3_IWsyVMK",
          StoreSaleItemRelease: "vCEpeeiHJkcIDdtTkRfjT",
          StoreSaleItemDev: "_3tIbO7JWeYXTD8fDol5_-f",
          StoreSaleItemReview: "Kx5NfQxifS6Xw2JxtcV31",
          TitleCtn: "_3rrH9dPdtHVRMzAEw82AId",
          StoreSaleWidgetCrossCenterRight: "oW0H1sBVE8K8u0qbq_Tm5",
          CapsuleBottomBar: "_3lmdEmwrmqe-kicNCZ9v-I",
          PlayNowButton: "_38ePadMVKPpN2BnpideoQw",
          AddToLibraryButton: "_1DrDh5P3SNgRdVAaUyel3G",
          StoreActionWidgetContainer: "kW6m4Sjqacp5hykrj5LEo",
          StoreSalePriceWidgetContainer: "_2s-O5T3qJJYR2AUq4b9jIN",
          StoreSaleWidgetBgTint: "MvLJDXjfbme8Uw3OERaCb",
          LibraryFallbackAssetImageContainer: "_1APLSpJeTPfN76xzyzVSfx",
          FallbackBackground: "_3chRZTd1smybX8C-swWcAm",
          SaleTagBlockCtn: "_1ZqQL1ugqx5VZZK7e7nZuc",
          StoreSaleWidgetCenter: "_2asUTzZuAkj9cDRKsLvwRE",
          StoreSaleLibraryAssetWidgetRight: "_1gLxXYZKQJSLc5MKYXEesv",
          StoreSaleWidgetReleaseAndTags: "_3wryhCRrTuMULeq_YjNk-s",
          Bundle: "_2GbhLyknhFLhpEOlbBXC3z",
          WidgetReleaseDateAndPlatformCtn: "_3a6HRK-P6LK0-pxRKXYgyP",
          SaleItemBrowserRow: "gASJ2lL_xmVNuZkWGvrWg",
          StoreSaleWidgetRelease: "_1qvTFgmehUzbdYM9cw0eS7",
          StoreSaleWidgetTags: "_2bkP-3b7dvr0a_qPdZEfHY",
          AppTag: "_3FJnZuxmPA_MjxsF8BQQ5L",
          StoreSaleWidgetShortDesc: "_3AsE5JhqLAiICKUYvZLpap",
          LargeText: "_3FqDALHzNLR5fMMZTeBw8Z",
          TagTitle: "v1i4WK3tk4FpXSJ5wC60U",
          TagBox: "_1lqaDGTzuprpWRYk4_2JrN",
          Tag: "_33yqka47vWurNqhnhLJb_m",
          Categories: "_2hr4JZMbG9l2GKALFD0dO7",
          SaleItemFullCapsuleDisplay: "_2sVvRzH7oPUUIVDDVO0MJj",
          Category: "_2lQNYB6g6C7aiw0GDPe9fq",
          CategoryIcon: "_2RJxWCkjuP3H-i8oLU5W2Q",
          ReviewScores: "_3MxPBWjpjU_Gm8SIgi5g8A",
          StoreSaleBroadcastWidgetRight: "_9VjYX3CYMn2y-wWpAn00Y",
          StoreSalePriceActionWidgetContainer: "_1JuIpzMtS7-xZrnUmEQ4my",
          Action: "_2zssEuiPfY5YdQlnihDfVD",
          Discounted: "_1g0B-RjwkUV0_MDURgy3Bi",
          WishList: "_1djkdp7OAd0mF3a90RKf27",
          StoreSalePriceBox: "_3j4dI1yA7cRfCvK8h406OB",
          SingleLineMode: "_1ZlGJxv-xQaABSvaVvMlNq",
          StoreSaleDiscountedPriceCtn: "_3NhLu7mTdty7JufpSpz6Re",
          StoreSaleNewItem: "_2_KY_e11FV0ftXR2_7TMmP",
          StoreOriginalPrice: "_3fFFsvII7Y2KXNLDk_krOW",
          PrePurchase: "_2f7BMv_bJMTrHmaOF8B3Ws",
          NewItem: "_2xCT1pUf2c9TICHoMcQE0d",
          PurchaseOptionDetails: "_17_ynHC8fq9_LghcLrJYmW",
          InGameHover: "axjdi0dhiB17GHjL5FRCr",
          StoreSalePrepurchaseLabel: "_1Fru-E7WQMr8G_aR2sMg5F",
          SingleLineOriginalPrice: "t7Gt8aeopD7JPlhcNTqGV",
          BaseDiscount: "_3mInDnGL3LlUC7uPs1CfOP",
          StoreSalePriceButton: "_1BejQFnnmkHMi9stswiJzf",
          OuterCapsuleContainer: "_1dKR2IPNQSHs1MAIXBvt_R",
          BottomBarPriceInfo: "_1X3j2g29SBtsrFMgNiKi_Y",
          CapsuleContainer: "_22AcxR1RBDH6i-gjKRHYk0",
          Linked: "_3b7bzOQeDc139QX27AIMtM",
          EventRow: "_1UMFnczt69Ka8nOWKMzKJR",
          BottomCreatorRow: "_1JrUubE3c7FdJsMxYYxbt",
          CreatorLogo: "_3Krfug3wchu0qwGYQbbsHL",
          CreatorName: "Fmi-agZ0W7_4TkZ7CNquC",
          AddToCartButton: "_2iWMRE6knpPZLgHWASy5BH",
          AddToWishlistButton: "_2YfaLBUZmFkJ3NpkieGzS3",
          HeaderCapsuleImageContainer: "_2oW_y7Mm3ihf1XQ0C1VWhx",
          MainCapsuleImageContainer: "_1vpxH37o7mJotC0IoqWbqy",
          HeroCapsuleImageContainer: "vnhlb8EFU45PU6qG2GBDW",
          DiscoveryQueueCtn: "_2uX2GFSEk3nkWxRsaBXaeG",
          VerticalCapsule: "_3sy8XcvOMnFJv1_Edwpzqv",
          ForceLibrarySizing: "_25KI3ndwISqbgBdtNxpujP",
          CapsuleImage: "_2eQ4mkpf4IzUp1e9NnM2Wr",
          LinkCapsuleImage: "_2xO8H8kHMGocbbjupWJ7Nt",
          CapsuleParentInfo: "_2erfWpFrn1tZTPEbq97SuW",
          ParentType: "_3FCPPT5eoSXF0nNcICVdP6",
          Banner: "_2gxv9cF-4n9wq4yxruOTNl",
          Blue: "_2o-5t6bgEJxfbWVSmxT88V",
          EarlyAccessGradient: "_2Hl_ERfCdYklXHAYAqvd4R",
          LinesImg: "_3LecBjgbnwvS6bCFqxs6SC",
          CapsuleDecorators: "_1xNQcxU9_OtQ-_PrMbviS4",
          BundleContentsCtnTransition: "_24KNcWMI5Yvb_AnPAb23Fm",
          Expanding: "_38KIqxQJ2UZxWKjh4XFZrh",
          Expanded: "hPc1lu4wYeTfpyzGPwPIa",
          Collapsing: "_2NmI1RTJL46CD1bmy9p7U7",
          BundleContentsCtn: "_34acuCI4lsvrR8ezmi7K1E",
          BundleContentsTitle: "hhdk89lN3EL3ieRxGPbyl",
          BundleShowButton: "_2Vu78ZkZCgLm-FV4KStixO",
          ShowContentsButton: "-VlK4AN84fDgapWwCDax2",
          ShowContentsSection: "fsPeLo8K4uDXedwKw4_sG",
          BundleContentItem: "_2sdNOCzaF2AIAuenP19tA6",
          StoreSaleWidgetOuterContainer: "_1_P15GG6AKyF_NMX2j4-Mu",
          ContentsCount: "_353LzpA83V-kiAWaKcQAFg",
          PreviewItem: "_2yhQb4aKtskchqwmpCVbMq",
          DeckCompatIcon: "_1Nju8xukRGXgeu2mN0nVjT",
          BundleTag: "_1qR-LifiFC4bCiow5xRIy0",
          PreviewImg: "_1jx70oYOJWzNj7A5gNRxhg",
          DemoLayoutPopup: "_2tmp27YgSoUCJSBJA4t5yt",
          FreeWeekendBar: "_2SCofLY66uBY_jjrTzNjBN",
          FreeWeekendLabel: "_21B6LWEBK8rKCmK8COTVRq",
          RecommendationReason: "_3Q_taCjMHNZqbKEr1-r2GQ",
          LocalizationSpan: "_3bCSmg_cQ3aTa3waFLT6o7",
          CapsuleName: "_31P1R5vTMyJ5RwWAfVoKYG",
          DiscountIconCtn: "_3Qt9S4lxTBuJqoY2PidC5h",
          MaxActionButtonWidth: "_3GOwBXz8cR_9njnfMGlp7b",
          BackgroundAnimation: "_1k6sq680iiVKySIMXNcHkL",
          "ItemFocusAnim-darkerGrey-nocolor": "_34Tp7N_mW2y7TOcBFxCQVo",
          "ItemFocusAnim-darkerGrey": "WQW1YbFeZjtPKckWVFjzB",
          "ItemFocusAnim-darkGreySettings": "_2hTOwEn75PZ0XqJLLH6Yzc",
          "ItemFocusAnim-darkGrey": "_3T33tEqMtzz3ijG8DkMXYZ",
          "ItemFocusAnim-grey": "_1VqQfVz7N0T1g4AHmuCQu8",
          "ItemFocusAnim-translucent-white-10": "jiBNibpWxZkJeyBzbrB5j",
          "ItemFocusAnim-translucent-white-20": "_1y2_IkearpG-2NoiPwZu0U",
          "ItemFocusAnimBorder-darkGrey": "_1LiqE1tXtbXey4AKzgFJfX",
          "ItemFocusAnim-green": "_34pf2FqL7CWP6V9VNzPEIS",
          focusAnimation: "_1wLvhANps-c7yKLact-7v8",
          hoverAnimation: "_2FuCM99jbjgMa0JFZoisSA",
        };
      },
      58579: (k) => {
        k.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      37999: (k) => {
        k.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      45387: (k) => {
        k.exports = {
          strMaxMobileWidth: "700px",
          strMaxResponsiveWidth: "910px",
          strMaxTabletWidth: "1080px",
        };
      },
    },
  ]);
})();
