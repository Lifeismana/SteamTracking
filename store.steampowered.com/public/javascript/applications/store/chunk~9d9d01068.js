/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [63089],
    {
      25518: (oe, Q, m) => {
        m.d(Q, { Kl: () => f, Yj: () => V, iH: () => B, zV: () => re });
        const f = [
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
          B = [
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
          c = [
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
          ],
          u = f.filter((x) => !c.includes(x)),
          l = null;
        function r(x) {
          const { bIncludeMedia: U = !1, bIncludeValveOnly: q = !1 } = x,
            g = new Set();
          return (
            U || c.forEach((I) => g.add(I)),
            q || l.forEach((I) => g.add(I)),
            f.filter((I) => !g.has(I))
          );
        }
        let T;
        function E(x) {
          return x
            ? x.map((U) => (U == "*" ? "\\*" : U)).join("|")
            : (T || (T = E(f)), T);
        }
        function V(x, U = null, q = " ") {
          const g = new RegExp(
            "\\[(" + E(U) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return x.replace(g, q);
        }
        function re(x, U = null, q = "") {
          const g = "\\[\\/?(?:" + E(U) + "){1,}.*?]";
          return x.replace(new RegExp(g, "gi"), q);
        }
      },
      29630: (oe, Q, m) => {
        m.d(Q, { zU: () => ne, z5: () => R });
        var f = m(38340),
          B = m(9046),
          c = m(99412),
          u = m(72604),
          l = m(7742),
          r = m(72849),
          T = m(76559),
          E = m(71742),
          V = m(34592),
          re = m(51746),
          x = m(72609),
          U = m(7850),
          q = m(90626);
        function g(d, v) {
          return `${d}/${v}`;
        }
        const I = {},
          F = q.createContext(I);
        function Z(d) {
          const { resolutions: v, children: w } = d;
          return jsx(F.Provider, { value: v, children: w });
        }
        function ce() {
          return q.useContext(F);
        }
        const be = new RegExp(
          `${f.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function ye(d) {
          const v = [],
            w = new Set();
          for (const z of d.matchAll(be)) {
            const k = Number.parseInt(z[1]),
              C = z[2],
              ee = g(k, C);
            k > 0 &&
              !w.has(ee) &&
              (w.add(ee), v.push({ clanAccountID: k, hashAndExt: C }));
          }
          return v;
        }
        function R(d, v, w = 0) {
          const z = ce();
          return ue(d, v, w, z);
        }
        async function se(d, v, w = 0) {
          return ue(d, v, w);
        }
        function ue(d, v, w = 0, z) {
          if (!d || d.length == 0) return null;
          if (d?.startsWith(f.lw)) return ne.ReplacementTokenToClanImageURL(d);
          if (d?.startsWith(f.eg)) {
            const k = ne.GetBaseURL(),
              C = d.substring(f.eg.length + 1),
              ee = parseInt(C.substring(0, C.indexOf("/"))),
              j = C.substring(C.indexOf("/") + 1),
              N = ne.GenerateURLFromHashAndExt(ee, j);
            if (z?.[g(ee, j)] === !1) return N;
            const le = ne
              .GetLocalizedClanImageFileNames(j, v)
              .map((M) => k + ee + "/" + M + "?t=" + w);
            return le.push(N), le;
          }
          return d;
        }
        const ne = {
          GetBaseURL() {
            return `${x.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${x.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(d) {
            return (
              (d = d.replace(f.lw, this.GetBaseURL())),
              d.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(d) {
            const w =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                d,
              );
            return w?.groups
              ? [w.groups.filename, parseInt(w.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(d) {
            return (
              (d.file_type != null ? (0, re.EG)(d.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(d) {
            return d ? d.image_hash + this.GetExtensionString(d) : null;
          },
          GetThumbHashAndExt(d) {
            return d ? d.thumbnail_hash + this.GetExtensionString(d) : null;
          },
          GetHashFromHashAndExt(d) {
            let v = d.substring(d.lastIndexOf("."));
            return d.substring(0, d.length - v.length);
          },
          GetExtStringFromHashAndExt(d) {
            return d.substring(d.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(d, v) {
            if (v == null) return [];
            const w = this.GetHashFromHashAndExt(d),
              z = this.GetExtStringFromHashAndExt(d),
              k = [w + "/" + (0, c.LgB)(v) + z];
            return (
              v == c.Pn1 && k.push(w + "/" + (0, c.x6o)((0, c.LgB)(v)) + z), k
            );
          },
          GenerateURLFromHashAndExt(d, v, w = B.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              d,
              v,
              w,
              c.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(d, v, w = B.wI.full, z, k) {
            d instanceof T.b && (d = d.GetAccountID());
            let C = this.GetBaseURL();
            const ee = z != null && z != c.xPp;
            if (w == B.wI.full && !ee) return C + d + "/" + v;
            {
              let j = v.substring(v.lastIndexOf(".")),
                N = v.substring(0, v.length - j.length);
              return !ee || z == c.Bhc || k != "localized_image_group"
                ? C + d + "/" + N + w + j
                : C + d + "/" + N + "/" + (0, c.x6o)((0, c.LgB)(z)) + j;
            }
          },
          GetHashAndExtFromURL(d) {
            let v = this.GetBaseURL();
            return !d?.startsWith(v) ||
              ((d = d.substring(v.length)), d.indexOf("/") == -1)
              ? null
              : ((d = d.substring(d.indexOf("/") + 1)), d);
          },
          GenerateEditableURLFromHashAndExt(d, v, w) {
            let z =
              x.TS.COMMUNITY_BASE_URL +
              "gid/" +
              d.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              v;
            return w && (z += "&lang=" + w), z;
          },
          GetMimeType(d) {
            return (0, re.ab)(d);
          },
          async AsyncGetImageResolution(d, v, w, z, k) {
            const C = v + this.GetExtensionString({ file_type: w }),
              ee = this.GenerateEditableURLFromHashAndExt(d, C);
            return await this.AsyncGetImageResolutionInternal(ee, z, k);
          },
          async AsyncGetImageResolutionInternal(d, v, w) {
            const z = (0, l.x0)();
            let k = new Image();
            (k.crossOrigin = "anonymous"),
              (k.onerror = (N) => {
                const le = { success: u.zi };
                w ||
                  ((le.err_msg =
                    "Load fail on url " +
                    d +
                    " with error: " +
                    (0, V.H)(N).strErrorMsg),
                  console.error(le.err_msg)),
                  (le.success = u.zi),
                  z.resolve(le);
              }),
              (k.onload = () => {
                const N = { success: u.zi };
                if (
                  ((N.width = k.width),
                  (N.height = k.height),
                  !(k.width > 0) || !(k.height > 0))
                ) {
                  (0, E.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + d,
                  ),
                    (N.err_msg = "No resolution reported for url " + d),
                    z.resolve(N);
                  return;
                }
                (N.success = u.R), z.resolve(N);
              }),
              (k.src = d),
              v.token.promise.catch(() => {
                (k.onload = () => {}),
                  (k.onerror = () => {}),
                  z.resolve({ success: u.e9 });
              });
            let C;
            const ee = new Promise((N, le) => {
              C = setTimeout(() => le(), 1e4);
            });
            let j;
            try {
              j = await Promise.race([ee, z.promise]);
            } catch {
              j = { success: u._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(C);
            }
            return j;
          },
          BIsClanImageVideo(d) {
            return d.file_type == r.bg.nn || d.file_type == r.bg.pJ;
          },
        };
      },
      9046: (oe, Q, m) => {
        m.d(Q, { pb: () => c, wI: () => B });
        class f {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var B = ((u) => (
          (u.full = ""),
          (u.background_main = "_960x311"),
          (u.background_mini = "_480x156"),
          (u.capsule_main = "_400x225"),
          (u.spotlight_main = "_1054x230"),
          u
        ))(B || {});
        const c = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      7742: (oe, Q, m) => {
        m.d(Q, { x0: () => B });
        async function f(u) {
          try {
            return await u;
          } catch (l) {
            console.error(l);
            return;
          }
        }
        function B() {
          let u, l;
          return {
            promise: new Promise((T, E) => {
              (u = T), (l = E);
            }),
            resolve: u,
            reject: l,
          };
        }
        function c(u) {
          return new Promise((l) => setTimeout(l, u));
        }
      },
      34041: (oe, Q, m) => {
        m.d(Q, {
          $N: () => D,
          CX: () => P,
          Dp: () => te,
          wz: () => L,
          qX: () => o,
          cD: () => t,
          yX: () => p,
          Q5: () => f,
          Ji: () => c,
          Xs: () => B,
          AH: () => De,
          zF: () => Le,
        });
        var f = {};
        m.r(f), m.d(f, { qZ: () => E });
        var B = {};
        m.r(B), m.d(B, { bV: () => We, O8: () => ot, x1: () => pe });
        var c = {};
        m.r(c),
          m.d(c, {
            HW: () => ut,
            MU: () => Se,
            qP: () => He,
            RU: () => mt,
            mP: () => gt,
          });
        var u = m(80613),
          l = m.n(u),
          r = m(75245),
          T = m(35038);
        const E = 0,
          V = 50,
          re = 51,
          x = 52,
          U = 53,
          q = 54,
          g = 55,
          I = 56,
          F = 57,
          Z = 58,
          ce = 59,
          be = 60,
          ye = 61,
          R = 62,
          se = 63,
          ue = 64,
          ne = 65,
          d = 66,
          v = 67,
          w = 68,
          z = 69,
          k = 70,
          C = 71,
          ee = 72,
          j = 73,
          N = 74,
          le = 75,
          M = 76,
          Pe = 77,
          Ue = 78,
          Ge = 79,
          Ae = 80,
          Ye = 81,
          Bt = 82,
          Ke = 83,
          Je = 90,
          pt = 91,
          ve = 92,
          Xe = 93,
          $e = 94,
          vt = 95,
          It = 96,
          Qe = 97,
          Ze = 98,
          qe = 99,
          Re = 100,
          Ie = 101,
          Me = 110,
          Ce = 111,
          Ne = 112,
          Te = 113,
          Ee = 114,
          we = 115,
          ze = 116,
          je = 117,
          Oe = 118,
          Ve = 119,
          et = 120,
          tt = 130,
          rt = 131,
          at = 132,
          Be = 133,
          it = 134,
          st = 135,
          _e = 136,
          nt = 137,
          ke = 138,
          Fe = 139,
          lt = 140,
          ct = 0,
          ot = 1,
          pe = 2,
          We = 3,
          ut = 0,
          xe = 1,
          dt = 2,
          mt = 3,
          gt = 4,
          ht = 5,
          Se = 6,
          He = 7;
        function ft(ae) {
          return "unknown ESteamAwardVoteCategoryID ( " + ae + " )";
        }
        function bt(ae) {
          return "unknown EVoteDefinitionFlag ( " + ae + " )";
        }
        function yt(ae) {
          return "unknown ESteamAwardsNominationSource ( " + ae + " )";
        }
        class h extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              h.prototype.voteid || r.Sg(h.M()),
              u.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    voteid: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    active: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                    start_time: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    end_time: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    app_discounts: { n: 5, c: W, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    groups: { n: 7, c: S, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localization: { n: 9, c: s },
                    reveal_time: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    release_date_min: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    winner_appid: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    flag: { n: 13, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    release_date_max: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    item_type: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(e = !1) {
            return h.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(h.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(h.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new h();
            return h.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(h.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(h.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition";
          }
        }
        class W extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.appid || r.Sg(W.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(W.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new W();
            return W.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(W.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(W.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class S extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.groupid || r.Sg(S.M()),
              u.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    groupid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    group_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    app_discounts: { n: 3, c: W, r: !0, q: !0 },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(S.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new S();
            return S.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(S.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(S.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              s.prototype.title || r.Sg(s.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    title: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    title_linebreak: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    title_award: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    award_description: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(e = !1) {
            return s.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(s.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(s.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new s();
            return s.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(s.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(s.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_Localization";
          }
        }
        class t extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              t.prototype.language || r.Sg(t.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              t.sm_m ||
                (t.sm_m = {
                  proto: t,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    sale_appid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              t.sm_m
            );
          }
          static MBF() {
            return t.sm_mbf || (t.sm_mbf = r.w0(t.M())), t.sm_mbf;
          }
          toObject(e = !1) {
            return t.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(t.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(t.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new t();
            return t.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(t.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(t.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class a extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              a.prototype.votes || r.Sg(a.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    votes: { n: 1, c: h, r: !0, q: !0 },
                    labor_of_love_winners: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(e = !1) {
            return a.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(a.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(a.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new a();
            return a.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(a.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(a.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class n extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              n.prototype.voteid || r.Sg(n.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    voteid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = r.w0(n.M())), n.sm_mbf;
          }
          toObject(e = !1) {
            return n.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(n.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(n.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new n();
            return n.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(n.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(n.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAwardsUserVote";
          }
        }
        class o extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.sale_appid || r.Sg(o.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(o.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new o();
            return o.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(o.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(o.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Request";
          }
        }
        class b extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.user_votes || r.Sg(b.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { user_votes: { n: 1, c: n, r: !0, q: !0 } },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(b.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new b();
            return b.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(b.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(b.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Response";
          }
        }
        class p extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.voteid || r.Sg(p.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    voteid: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    sale_appid: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(p.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new p();
            return p.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(p.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(p.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Request";
          }
        }
        class O extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.user_votes || r.Sg(O.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { user_votes: { n: 1, c: n, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = r.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(O.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new O();
            return O.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(O.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(O.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Response";
          }
        }
        class _ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.category_id || r.Sg(_.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    category_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    last_updated: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(_.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new _();
            return _.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(_.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(_.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwardsNomination";
          }
        }
        class te extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new te();
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new te();
            return te.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.nominations || r.Sg(H.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: { nominations: { n: 1, c: _, r: !0, q: !0 } },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(H.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new H();
            return H.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(H.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(H.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class G extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.steamid || r.Sg(G.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    code: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new G();
            return G.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class L extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.category_id || r.Sg(L.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    category_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    nominated_id: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    source: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = r.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(L.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new L();
            return L.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(L.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(L.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class A extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.nominations || r.Sg(A.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: { nominations: { n: 1, c: _, r: !0, q: !0 } },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(A.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new A();
            return A.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(A.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(A.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class D extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.category_id || r.Sg(D.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    category_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(D.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new D();
            return D.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(D.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(D.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.played_app || r.Sg(Y.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    played_app: { n: 1, c: K, r: !0, q: !0 },
                    suggested_events: { n: 2, c: J, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: X, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new Y();
            return Y.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class K extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.appid || r.Sg(K.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playtime: { n: 2, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(K.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new K();
            return K.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(K.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(K.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.clanid || r.Sg(J.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    clanid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(J.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new J();
            return J.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(J.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(J.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.appid || r.Sg(X.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(X.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new X();
            return X.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(X.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(X.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class P extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.generate_new || r.Sg(P.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    generate_new: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(P.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new P();
            return P.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(P.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(P.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class $ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.code || r.Sg($.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    code: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT($.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new $();
            return $.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj($.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0($.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Le;
        ((ae) => {
          function e(he, fe, ie) {
            return he.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, T.I8)(t, fe, ie),
              a,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ae.GetVoteDefinitions = e;
          function i(he, fe, ie) {
            return he.SendMsg("StoreSales.SetVote#1", (0, T.I8)(p, fe, ie), O, {
              ePrivilege: 1,
            });
          }
          ae.SetVote = i;
          function y(he, fe, ie) {
            return he.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, T.I8)(o, fe, ie),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetUserVotes = y;
        })(Le || (Le = {}));
        var De;
        ((ae) => {
          function e(ie, de, me) {
            return ie.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, T.I8)(te, de, me),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetUserNominations = e;
          function i(ie, de, me) {
            return ie.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, T.I8)(G, de, me),
              H,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          ae.GetOtherUserNominations = i;
          function y(ie, de, me) {
            return ie.SendMsg(
              "SteamAwards.Nominate#1",
              (0, T.I8)(L, de, me),
              A,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.Nominate = y;
          function he(ie, de, me) {
            return ie.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, T.I8)(D, de, me),
              Y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetNominationRecommendations = he;
          function fe(ie, de, me) {
            return ie.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, T.I8)(P, de, me),
              $,
              { ePrivilege: 1 },
            );
          }
          ae.GetNominationShareLink = fe;
        })(De || (De = {}));
      },
      38340: (oe, Q, m) => {
        m.d(Q, { eg: () => B, lw: () => f, qR: () => c });
        const f = "{STEAM_CLAN_IMAGE}",
          B = "{STEAM_CLAN_LOC_IMAGE}",
          c = "{STEAM_APP_IMAGE}";
      },
      88034: (oe, Q, m) => {
        m.d(Q, { Gw: () => l, Lk: () => r, ai: () => u, mm: () => c });
        var f = m(14947);
        const B = f.sH.box(void 0);
        function c() {
          return B.get();
        }
        function u(T) {
          (0, f.h5)(() => B.set(T));
        }
        function l() {
          const T = B.get();
          return T || Math.floor(Date.now() / 1e3);
        }
        function r() {
          const T = B.get();
          return T ? new Date(T * 1e3) : new Date();
        }
      },
      73259: (oe, Q, m) => {
        m.d(Q, {
          FZ: () => He,
          A4: () => Ae,
          iy: () => Ue,
          ZA: () => qe,
          Dn: () => Re,
          CU: () => _e,
          Ay: () => it,
          ye: () => Be,
          Fo: () => Fe,
          G$: () => lt,
          Xx: () => Ie,
          DJ: () => xe,
          G6: () => ct,
          zv: () => Me,
          IS: () => ze,
          GE: () => Ee,
          yX: () => we,
          w: () => pe,
          EE: () => Te,
          Zf: () => je,
          jR: () => Oe,
          Ac: () => ft,
          lh: () => W,
          Hc: () => We,
          UR: () => ke,
          mz: () => rt,
          qQ: () => et,
          MW: () => tt,
          W2: () => Ve,
          Pm: () => nt,
          qR: () => at,
          _B: () => Ce,
          j3: () => S,
          Yw: () => Ne,
          zK: () => Qe,
          DU: () => ve,
          cB: () => dt,
        });
        var f = m(25518),
          B = m(32093),
          c = m(99412),
          u = m(34041),
          l = m(14947);
        const r = null,
          T = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(c.bP9),
            localized_broadcast_left_image: new Array(c.bP9),
            localized_broadcast_right_image: new Array(c.bP9),
            broadcast_whitelist: [],
          };
        var E = m(76559),
          V = m(29630),
          re = m(9046),
          x = m(50974),
          U = m(88034),
          q = m(71742),
          g = m(18210),
          I = m(13854),
          F = m(71684),
          Z = m(48473),
          ce = m(36174),
          be = m(27066),
          ye = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          se = (s, t, a, n) => {
            for (
              var o = n > 1 ? void 0 : n ? R(t, a) : t, b = s.length - 1, p;
              b >= 0;
              b--
            )
              (p = s[b]) && (o = (n ? p(t, a, o) : p(o)) || o);
            return n && o && ye(t, a, o), o;
          };
        const ue = null,
          ne = { bScheduleEnabled: !1, scheduleEntries: [] },
          d = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class v {
          m_eventModel;
          constructor(t) {
            this.m_eventModel = t;
          }
          BHasScheduleEnabled() {
            return this.m_eventModel.jsondata.bScheduleEnabled;
          }
          GetScheduleEntries() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries
              : [];
          }
          GetScheduleEntriesCount() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries.length
              : 0;
          }
        }
        class w {
          m_eventModel;
          m_entry;
          constructor(t, a) {
            (this.m_eventModel = t), (this.m_entry = a);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        se([be.o], w.prototype, "GetEventStartTime", 1);
        const z = 1e4,
          k = 99999;
        function C() {
          return Math.floor(z + Math.random() * (k - z + 1));
        }
        var ee = m(18994),
          j = m(72609),
          N = Object.defineProperty,
          le = Object.getOwnPropertyDescriptor,
          M = (s, t, a, n) => {
            for (
              var o = n > 1 ? void 0 : n ? le(t, a) : t, b = s.length - 1, p;
              b >= 0;
              b--
            )
              (p = s[b]) && (o = (n ? p(t, a, o) : p(o)) || o);
            return n && o && N(t, a, o), o;
          };
        const Pe = [
          c.u0,
          c.zeJ,
          c.Fa4,
          c.Aav,
          c.SRb,
          c.zA,
          c.y6,
          c.hGl,
          c.WNR,
          c.pIh,
          c.izQ,
          c.uYK,
          c.f4X,
          c.zcX,
          c.yhO,
        ];
        function Ue(s) {
          return (
            Pe.some((t) => t == s.GetEventType()) &&
            !s.BHasTag("steam_award_nomination_request") &&
            !s.BHasTag("curator")
          );
        }
        const Ge = [c.HRy, c.LOv, c.HFK];
        function Ae(s) {
          return (
            !Ge.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        const Ye = [c.Fwr, c.HFK];
        function Bt(s) {
          return (
            !Ye.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        const Ke = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          Je = new Set(Ke);
        function pt(s) {
          return !!s.endTime && Je.has(s.type);
        }
        const ve = 593110,
          Xe = 766,
          $e = 221410,
          vt = 1675200,
          It = 4165890,
          Qe = [ve, Xe, $e],
          Ze = [c.Fwr, c.HFK];
        function qe(s) {
          return (
            !Ze.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        function Re(s, t = (0, U.Gw)()) {
          const a = 60 * ce.Kp.PerDay;
          return (
            s.BIsVisibleEvent(t) &&
            s.BIsOGGEvent() &&
            (s.rtime32_last_modified ?? 0) > t - a &&
            !Ie(s)
          );
        }
        function Ie(s) {
          return (
            s.BHasTag("mod_reviewed") && !s.BHasTag("mod_require_rereview")
          );
        }
        var Me = ((s) => (
          (s[(s.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (s[(s.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (s[(s.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (s[(s.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          s
        ))(Me || {});
        function Ce(s) {
          switch (s) {
            case "links":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "itemdef":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "contenthubspecials":
              return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
            default:
              return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
          }
        }
        const Ne = "bordered";
        var Te = ((s) => (
            (s[(s.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (s[(s.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (s[(s.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (s[(s.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (s[(s.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (s[(s.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (s[(s.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (s[(s.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            s
          ))(Te || {}),
          Ee = ((s) => (
            (s[(s.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (s[(s.k_ELanguage = 1)] = "k_ELanguage"),
            (s[(s.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (s[(s.k_EUserPreference = 3)] = "k_EUserPreference"),
            (s[(s.k_EPrice = 4)] = "k_EPrice"),
            (s[(s.k_EAppType = 5)] = "k_EAppType"),
            s
          ))(Ee || {}),
          we = ((s) => (
            (s[(s.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (s[(s.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (s[(s.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            s
          ))(we || {}),
          ze = ((s) => (
            (s[(s.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (s[(s.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (s[(s.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            s
          ))(ze || {}),
          je = ((s) => (
            (s.Steam = "Steam"),
            (s.Facebook = "Facebook"),
            (s.Twitter = "Twitter"),
            (s.Reddit = "Reddit"),
            s
          ))(je || {}),
          Oe = ((s) => (
            (s.Summary = "summary"),
            (s.SummaryLargeImage = "summary_large_image"),
            s
          ))(Oe || {});
        function Ve(s) {
          return s && !!s.show_as_carousel && !s.enable_faceted_browsing;
        }
        function et(s) {
          return s.carousel_rows || 1;
        }
        function tt(s) {
          return s.cap_item_count || 0;
        }
        function rt(s) {
          return s.cap_section_row_count && s.cap_section_row_count > 0
            ? s.cap_section_row_count
            : s.section_type == "trailercarousel"
              ? 1
              : s.cap_section_content
                ? 4
                : 0;
        }
        function at(s) {
          return s?.store_filter ? JSON.stringify(s.store_filter) : void 0;
        }
        function Be(s) {
          switch (s) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function it(s) {
          switch (s) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function st(s) {
          switch (s) {
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
        }
        function _e(s, t = !1) {
          return !s || !st(s.section_type)
            ? !1
            : t
              ? s.sale_tag_filter?.clauses?.length
                ? !0
                : !!s.smart_section
              : !!s.smart_section && s.smart_section_type != null;
        }
        function nt(s) {
          return _e(s) ? s?.smart_section_type : void 0;
        }
        function ke(s) {
          return (
            (s.jsondata.sale_ml_recommender_delay_hours &&
              (s.startTime ?? 0) +
                s.jsondata.sale_ml_recommender_delay_hours * ce.Kp.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        function Fe(s, t, a) {
          return !s.BIsNextFest() || !Be(t.section_type)
            ? !1
            : a == ee.sQ.Random
              ? !0
              : ke(s) > 0;
        }
        function lt(s, t, a) {
          return !!(t.use_random_order || Fe(s, t, a));
        }
        const ct = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(c.bP9),
            localized_label_image: new Array(c.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          ot = { internal_type: "subscription_pricing" };
        var pe = ((s) => (
          (s[(s.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (s[(s.k_EContentHub = 1)] = "k_EContentHub"),
          s
        ))(pe || {});
        function We(s) {
          return {
            arrowFill: s?.sale_carousel_arrow_color,
            arrowStyle: s?.sale_carousel_arrow_style,
            breadcrumbActiveColor: s?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: s?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: s?.sale_carousel_breadcrumb_style,
          };
        }
        function ut(s, t, a) {
          (t.library_spotlight = void 0),
            t.email_setting &&
              ((t.email_setting.locked = void 0),
              (t.email_setting.force_feature_id = void 0)),
            (t.steam_award_category_suggestion = void 0),
            (t.steam_award_category_voteids = void 0),
            (t.action_end_time = void 0),
            (t.ownership_requirement_info = void 0),
            (t.sale_use_subscription_layout = void 0),
            (t.app_right_requirement_info = void 0),
            (t.clone_from_event_gid = a),
            (t.clone_from_sale_enabled = t.bSaleEnabled),
            (t.bSaleEnabled = s == k_EClanEventType_CreatorHome),
            (t.sale_discount_event_id = void 0),
            (t.valve_access_log = []),
            (t.bInvisibleGameOptIn = void 0),
            (t.rt_migrated_time = void 0),
            (t.optin_tagid || t.sale_opt_in_page_name) &&
              ((t.tagged_items = void 0),
              (t.tagged_item_filter = void 0),
              (t.auto_item_tags = void 0)),
            (t.optin_prune_tagid = void 0),
            (t.optin_tagid = void 0),
            (t.sale_opt_in_page_name = void 0),
            (t.prune_list_optin_name = void 0),
            (t.optin_only = void 0),
            (t.child_demo_appid_for_repost = void 0),
            (t.sale_vanity_id = void 0),
            (t.sale_update_landing_page_vanity_id = void 0),
            (t.automatically_push_updated_source = void 0),
            (t.country_restriction = void 0);
        }
        const xe = {
            localized_subtitle: new Array(c.bP9),
            localized_summary: new Array(c.bP9),
            localized_title_image: new Array(c.bP9),
            localized_capsule_image: new Array(c.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(c.bP9),
            localized_sale_overlay: new Array(c.bP9),
            localized_sale_product_banner: new Array(c.bP9),
            localized_sale_product_mobile_banner: new Array(c.bP9),
            localized_sale_logo: new Array(c.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ...T,
            ...ne,
          },
          dt = "old_announce_",
          mt = 80,
          gt = 120,
          ht = 180,
          Se = [
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
          He = [
            "steam_blog_featured",
            "workshop",
            "steam_blog",
            "blog",
            "audience_followers",
            "steamvr",
            "patchnotes",
            "steam_library_beta",
            "hide_library_overview",
            "mod_hide_library_overview",
            "hide_library_detail",
            "mod_hide_library_detail",
            "hide_store",
            "mod_hide_store",
            "halloween2019candidate",
            "halloween2019",
            "halloween2019reviewed",
            "horror",
            "cute",
            "halloween",
            "mod_reviewed",
            "steam_award_nomination_request",
            "steam_award_vote_request",
            "steam_game_festival_artist_statement",
            "steam_game_festival_office_hour",
            "steam_game_festival_broadcast",
            "curator",
            "curator_group_members",
            "curator_public",
            "mod_require_rereview",
            "auto_rssfeed",
            "auto_migrated",
            "enable_steam_china",
            "disable_steam_global",
            "skip_megaphone",
            "seasonal_sale_featuring",
            "show_library_demo_detail",
            "clear_library_demo_detail",
            "repost_source_possible",
            "autocreate_promotools",
            "vo_marketing_message",
          ],
          ft = [
            "patchnotes",
            "steam_award_nomination_request",
            "steam_award_vote_request",
            "mod_hide_library_overview",
            "steam_game_festival_artist_statement",
            "steam_game_festival_office_hour",
            "steam_game_festival_broadcast",
            "halloween",
            "curator",
            "curator_group_members",
            "curator_public",
            "audience_followers",
          ],
          bt = [c.HRy, c.LOv, c.HFK],
          yt = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          h = class ge {
            constructor() {
              (0, l.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new E.b();
            forumTopicGID = void 0;
            type = c.DRF;
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
            visibility_state = 0;
            broadcaster = void 0;
            jsondata = xe;
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
              return !this.bOldAnnouncement && !!this.GID;
            }
            static FromJSON(t) {
              let a = new ge(),
                n = JSON.parse(t);
              return (
                Object.assign(a, n),
                (a.name = new Map(n.name)),
                (a.description = new Map(n.description)),
                (a.vecTags = [...(n.vecTags ?? n.tags ?? [])]),
                (a.clanSteamID = new E.b(n.clanSteamID)),
                (0, q.wT)(
                  a.clanSteamID && a.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    a.clanSteamID.ConvertTo64BitString(),
                ),
                n.broadcaster &&
                  ((a.broadcaster = new E.b(n.broadcaster)),
                  (0, q.wT)(
                    a.broadcaster && a.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      a.broadcaster.ConvertTo64BitString(),
                  )),
                a
              );
            }
            static FromCClanEventData(t, a) {
              let n = new ge();
              return (
                (n.GID = t.gid),
                (n.clanSteamID = new E.b(t.clan_steamid)),
                n.name.set(a, t.event_name ?? ""),
                (n.type = t.event_type),
                (n.appid = t.appid ?? 0),
                (n.startTime = t.rtime32_start_time),
                (n.endTime = t.rtime32_end_time),
                (n.nCommentCount = t.comment_count ?? 0),
                (n.creator_steamid = t.creator_steamid),
                (n.last_update_steamid = t.last_update_steamid),
                (n.jsondata = JSON.parse(t.jsondata ?? "{}")),
                (n.rtime32_last_local_modification = t.rtime32_last_modified),
                t.published
                  ? t.hidden
                    ? (n.visibility_state = t.unlisted ? 3 : 1)
                    : (n.visibility_state = 2)
                  : (n.visibility_state = 0),
                (n.createTime = t.rtime_created),
                (n.m_nBuildID = t.build_id),
                (n.m_strBuildBranch = t.build_branch),
                (n.visibilityStartTime = t.rtime32_visibility_start),
                (n.visibilityEndTime = t.rtime32_visibility_end),
                (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
                (n.featured_app_tagid = t.featured_app_tagid),
                t.broadcaster_accountid &&
                  (n.broadcaster = E.b.InitFromAccountID(
                    t.broadcaster_accountid,
                  )),
                (n.AnnouncementGID = t.announcement_body?.gid ?? "0"),
                (n.postTime = t.announcement_body?.posttime),
                (n.forumTopicGID = t.forum_topic_id),
                n.name.set(a, t.announcement_body?.headline ?? ""),
                n.description.set(a, t.announcement_body?.body ?? ""),
                (n.nCommentCount = t.comment_count ?? 0),
                (n.vecTags = [...(t.announcement_body?.tags ?? [])]),
                (n.forumTopicGID = t.announcement_body?.forum_topic_id),
                (n.nVotesUp = t.announcement_body?.voteupcount ?? 0),
                (n.nVotesDown = t.announcement_body?.votedowncount ?? 0),
                n
              );
            }
            toJSON(t) {
              let a = new Object();
              return (
                Object.assign(a, this),
                (a.name = Array.from(this.name)),
                (a.description = Array.from(this.description)),
                (a.vecTags = Array.from(this.vecTags)),
                (a.tags = a.vecTags),
                (a.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
                this.broadcaster &&
                  (a.broadcaster = this.broadcaster.ConvertTo64BitString()),
                a
              );
            }
            clone(t = !1) {
              let a = new ge();
              if (
                ((a.GID = this.GID),
                (a.AnnouncementGID = this.AnnouncementGID),
                (a.clanSteamID = this.clanSteamID),
                (a.bOldAnnouncement = this.bOldAnnouncement),
                (a.nCommentCount = this.nCommentCount),
                (a.nVotesUp = this.nVotesUp),
                (a.nVotesDown = this.nVotesDown),
                (a.forumTopicGID = this.forumTopicGID),
                (a.comment_type = this.comment_type),
                (a.gidfeature = this.gidfeature),
                (a.gidfeature2 = this.gidfeature2),
                (a.featured_app_tagid = this.featured_app_tagid),
                (a.creator_steamid = this.creator_steamid),
                (a.last_update_steamid = this.last_update_steamid),
                (a.rtime32_last_modified = this.rtime32_last_modified),
                (a.rtime32_last_solr_search_col_updated =
                  this.rtime32_last_solr_search_col_updated),
                (a.rtime32_moderator_reviewed =
                  this.rtime32_moderator_reviewed),
                (a.type = this.type),
                (a.appid = this.appid),
                (a.name = new Map()),
                this.name.forEach((n, o) => {
                  a.name.set(o, n);
                }),
                (a.description = new Map()),
                this.description.forEach((n, o) => {
                  a.description.set(o, n);
                }),
                (a.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((n, o) => {
                  a.timestamp_loc_updated.set(o, n);
                }),
                (a.createTime = this.createTime ?? 0),
                (a.startTime = this.startTime),
                (a.endTime = this.endTime),
                (a.visibilityStartTime = this.visibilityStartTime),
                (a.visibilityEndTime = this.visibilityEndTime),
                (a.postTime = this.postTime),
                (a.visibility_state = this.visibility_state),
                (a.loadedAllLanguages = this.loadedAllLanguages),
                (a.bLoaded = this.bLoaded),
                (a.broadcaster = this.broadcaster
                  ? new E.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (a.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (a.vecTags = new Array()),
                t
                  ? ((a.m_nBuildID = this.m_nBuildID),
                    (a.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((n) => a.vecTags.push(n)))
                  : this.vecTags.forEach((n) => {
                      Se.includes(n) && a.vecTags.push(n);
                    }),
                a.jsondata.email_setting)
              ) {
                let n = 100;
                for (let o of a.jsondata.email_setting.sections)
                  o.unique_id || ((o.unique_id = `email_section_${n}`), n++);
              }
              return a;
            }
            GetLastReferencedSaleDayFromCapsules(t, a) {
              let n = a;
              return (
                t?.forEach((o) => {
                  o.visibility_index !== void 0 &&
                    (n =
                      n === void 0
                        ? o.visibility_index
                        : Math.max(n, o.visibility_index));
                }),
                n
              );
            }
            GetLastReferencedSaleDay() {
              let t;
              for (const a of this.GetSaleSections())
                if (a.section_type === "tabs") {
                  if ((a.tabs?.length ?? 0) > 0)
                    for (const n of a.tabs ?? [])
                      t = this.GetLastReferencedSaleDayFromCapsules(
                        n.capsules,
                        t,
                      );
                } else
                  t = this.GetLastReferencedSaleDayFromCapsules(a.capsules, t);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (t == null || t < (this.jsondata.sale_num_headers ?? 0)) &&
                  (t = this.jsondata.sale_num_headers),
                t
              );
            }
            GetDayIndexFromEventStart(t = (0, U.Gw)()) {
              let a = 0;
              this.startTime !== void 0 &&
                t >= this.startTime &&
                (a = Math.floor((t - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (a = this.m_overrideCurrentDay);
              const n = this.GetLastReferencedSaleDay() || 0;
              return Math.min(a, n);
            }
            GetNameWithFallback(t) {
              const a = g.A0.GetELanguageFallback(t);
              return this.name.get(t) || this.name.get(a);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(t) {
              return !!(
                (this.BInRealmGlobal() &&
                  g.A0.IsELanguageValidInRealm(t, B.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  g.A0.IsELanguageValidInRealm(t, B.TU.k_ESteamRealmChina))
              );
            }
            GetImgArray(t) {
              let a = [];
              if (
                ((t === "background" || t == "localized_title_image") &&
                  (a = this.jsondata.localized_title_image),
                t === "capsule")
              )
                a = this.jsondata.localized_capsule_image;
              else if (t === "spotlight")
                a = this.jsondata.localized_spotlight_image;
              else if (t === "email_full" || t === "email_centered")
                a = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (t === "broadcast_left")
                a = this.jsondata.localized_broadcast_left_image;
              else if (t === "broadcast_right")
                a = this.jsondata.localized_broadcast_right_image;
              else if (t === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const n = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  a = this.jsondata.localized_per_day_sales_header?.[n];
                } else a = this.jsondata.localized_sale_header;
              else
                t === "sale_logo"
                  ? (a = this.jsondata.localized_sale_logo)
                  : t === "sale_overlay"
                    ? (a = this.jsondata.localized_sale_overlay)
                    : re.pb.includes(t)
                      ? (a = this.fnGetLocalizedGroupImages?.())
                      : t === "product_banner"
                        ? (a = this.jsondata.localized_sale_product_banner)
                        : t === "product_mobile_banner"
                          ? (a =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : t === "bestofyear_banner"
                            ? (a = this.jsondata.localized_bestofyear_banner)
                            : t === "bestofyear_banner_mobile"
                              ? (a =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : t === "localized_store_app_spotlight"
                                ? (a =
                                    this.jsondata.localized_store_app_spotlight)
                                : t ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (a =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return a;
            }
            GetImageURL(t, a = c.Bhc, n = re.wI.full) {
              const o = this.GetImgArray(t),
                b = o && o.length > a && o[a] != null;
              return b && o[a]?.startsWith("http")
                ? o[a]
                : b
                  ? V.zU.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      o[a] ?? "",
                      n,
                    )
                  : void 0;
            }
            GetImageHash(t, a = c.Bhc) {
              let n = this.GetImgArray(t);
              return n && n.length > a && n[a] != null
                ? n[a].substr(0, n[a].length - 4)
                : null;
            }
            GetImageHashAndExt(t, a = c.Bhc) {
              let n = this.GetImgArray(t);
              return n && n.length > a && n[a] != null ? n[a] : null;
            }
            BHasSomeImage(t) {
              let a = this.GetImgArray(t);
              return !!a && a.some((n) => n != null && n.length > 0);
            }
            BHasImage(t, a) {
              let n = this.GetImgArray(t);
              return !!n && n.length > a && n[a] != null;
            }
            BHasAnnouncementGID() {
              return (
                this.AnnouncementGID !== null &&
                this.AnnouncementGID !== void 0 &&
                this.AnnouncementGID.length > 1
              );
            }
            GetAnnouncementGID() {
              return this.AnnouncementGID;
            }
            BHasForumTopicGID() {
              return (
                this.forumTopicGID !== null &&
                this.forumTopicGID !== void 0 &&
                this.forumTopicGID.length > 1
              );
            }
            GetForumTopicURL(t) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? j.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : t
                    ? j.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      t +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : j.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            BIsEventInFuture(t = (0, U.Gw)()) {
              return t < (this.startTime ?? 0);
            }
            BHasEventEnded(t = (0, U.Gw)()) {
              return (this.endTime ?? 0) < t;
            }
            UpdateVoteCount(t, a) {
              t == "up"
                ? (this.nVotesUp = (0, I.OQ)(
                    this.nVotesUp + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : t == "down" &&
                  (this.nVotesDown = (0, I.OQ)(
                    this.nVotesDown + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(t, a) {
              let n = this.GetDescriptionWithFallback(t);
              if (n) {
                let o = n.indexOf("[img]");
                if (o !== -1 && o < a) {
                  o += 5;
                  let b = n.indexOf("[/img]", o);
                  if (b != -1) {
                    let p = n.substring(o, b).trim();
                    if (p.length != 0)
                      return V.zU.ReplacementTokenToClanImageURL(p);
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
            BImageNeedScreenshotFallback(t, a) {
              let n = this.GetImageURL(t, a);
              if (!n || n.length == 0) {
                const o = g.A0.GetELanguageFallback(a);
                a != o && (n = this.GetImageURL(t, o));
              }
              return !n || n.length == 0;
            }
            GetDescriptionWithFallback(t) {
              const a = g.A0.GetELanguageFallback(t);
              return this.description.get(t) || this.description.get(a);
            }
            BIsImageSafeForAllAges(t, a, n = {}) {
              const o = g.A0.GetELanguageFallback(a);
              return (
                this.GetImageURL(t, a) != null ||
                (a != o && this.GetImageURL(t, o) != null) ||
                (this.appid && n.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  n.clanInfo &&
                  ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
                    n.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(t = (0, U.Gw)()) {
              let a = Math.floor(t);
              return (
                this.visibility_state == 3 ||
                (this.visibility_state == 2 &&
                  a > (this.visibilityStartTime ?? 0) &&
                  ((this.visibilityEndTime ?? 0) < 10 ||
                    a < (this.visibilityEndTime ?? 0)))
              );
            }
            BIsStagedEvent() {
              return this.visibility_state == 1;
            }
            BIsUnlistedEvent() {
              return this.visibility_state == 3;
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
            BIsEventActionEnabled(t = (0, U.Gw)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > t ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > t))
              );
            }
            BHasSubTitle(t) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                t >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let a = this.jsondata.localized_subtitle[t];
              return a != null && a != "";
            }
            GetSubTitle(t) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                t >= this.jsondata.localized_subtitle.length
              )
                return "";
              let a = this.jsondata.localized_subtitle[t];
              return a || "";
            }
            GetSubTitleWithLanguageFallback(t) {
              return this.jsondata
                ? g.NT.GetWithFallback(this.jsondata.localized_subtitle, t)
                : "";
            }
            GetSubTitleWithSummaryFallback(t) {
              return (
                g.NT.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
                ge.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
              );
            }
            GetSummaryWithFallback(t, a) {
              return (
                g.NT.GetWithFallback(this.jsondata?.localized_summary, t) ||
                ge.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(t),
                  a,
                )
              );
            }
            GetSummary(t) {
              return g.NT.Get(this.jsondata?.localized_summary ?? [], t);
            }
            BHasSummary(t) {
              return !!this.GetSummary(t);
            }
            static GenerateSummaryFromText(t, a) {
              return !t || t.trim().length == 0
                ? ""
                : ((t = (0, f.Yj)(t, [
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
                  (t = (0, f.zV)(t, ["p"], " ")),
                  (t = (0, f.zV)(t)),
                  (t = (0, Z.aX)(t)),
                  (0, Z.bC)(t, a || ht));
            }
            BHasTag(t) {
              return this.vecTags.indexOf(t) != -1;
            }
            BHasTagStartingWith(t) {
              return this.vecTags.some((a) => a?.startsWith(t));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(t) {
              if (!t) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || bt.includes(this.type))
                return !1;
              const a = new Date().getTime() / 1e3;
              return !(
                (yt.includes(this.type) && this.endTime && a > this.endTime) ||
                (this.startTime && a > this.startTime + ce.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(t, a = (0, U.Gw)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const n = this.endTime ? this.endTime : a + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (t || ((this.startTime ?? 0) - 600 <= a && a < n))
              );
            }
            BHasBroadcastForceBanner() {
              return !!this.jsondata.broadcast_force_banner;
            }
            BSaleShowBroadcastAtTopOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (a) => a.section_type == "broadcast",
                )
              );
            }
            BSaleShowCuratorRecommendationAtBottomOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (a) => a.section_type == "curator_recommendation",
                )
              );
            }
            GetBroadcastChatVisibility() {
              return this.jsondata.broadcastChatSetting || "hide";
            }
            GetBroadcastTitle(t) {
              return (
                g.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  t,
                ) ||
                (0, g.we)(
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
                this.jsondata.broadcast_whitelist?.map((t) =>
                  E.b.InitFromAccountID(t).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(t) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(t),
              );
            }
            BHasSaleEnabled() {
              return !!this.jsondata.bSaleEnabled;
            }
            BHasSaleVanity() {
              return (
                !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id
              );
            }
            GetSaleVanity() {
              return this.jsondata.sale_vanity_id ?? "";
            }
            BHasSaleUpdateLandingPageVanity() {
              return (
                !!this.jsondata.bSaleEnabled &&
                !!this.jsondata.sale_update_landing_page_vanity_id
              );
            }
            GetSaleUpdateLandingPageVanity() {
              return this.jsondata.sale_update_landing_page_vanity_id ?? "";
            }
            GetSaleURL(t) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  j.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  j.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const a = this.jsondata.source_content_hub;
                return a
                  ? typeof a == "string"
                    ? j.TS.STORE_BASE_URL + "category/" + a
                    : a.type == "category"
                      ? j.TS.STORE_BASE_URL + "category/" + a.category
                      : a.type == "tags"
                        ? j.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, g.l4)() || "en") +
                          "/" +
                          a.tagid
                        : a.type == "freetoplay"
                          ? j.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : a.type == "earlyaccess"
                            ? j.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : j.TS.STORE_BASE_URL + a.type
                  : j.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              return this.jsondata
                .sale_vanity_id_valve_approved_for_sale_subpath
                ? j.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id
                : t
                  ? t + "sale/" + this.jsondata.sale_vanity_id
                  : j.TS.STORE_BASE_URL +
                    "curator/" +
                    this.clanSteamID.GetAccountID() +
                    "/sale/" +
                    this.jsondata.sale_vanity_id;
            }
            BHasEmailEnabled() {
              return (
                !!this.jsondata.email_setting &&
                this.jsondata.email_setting.bEnable
              );
            }
            GetSaleSections() {
              return this.jsondata.sale_sections ?? [];
            }
            GenerateDynamicSaleSections(t, a, n, o, b, p) {
              const O = [],
                _ = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let te = k + 10;
              return (
                t &&
                  O.push({
                    ..._,
                    section_type: "footer_self_creator_home",
                    unique_id: te++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                a &&
                  O.push({
                    ..._,
                    section_type: "footer_browse_more",
                    unique_id: te++,
                  }),
                o &&
                  O.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      te++,
                      _,
                      p,
                    ),
                  ),
                n &&
                  O.push({
                    ..._,
                    section_type: "footer_default_social_share",
                    unique_id: te++,
                  }),
                b &&
                  O.push({
                    ..._,
                    section_type: "nextfest_header",
                    unique_id: te++,
                  }),
                O
              );
            }
            GetSaleSectionIncludingFooterSections(t = 0) {
              const a = this.jsondata?.sale_show_creator,
                n = this.jsondata.sale_browse_more_button,
                o =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                b = this.GetEventType() == c.ajI,
                p = this.BShowNextFestHeader(!0);
              return a || n || o || b || p
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, p, t),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!a, !!n, o, b, !1, t),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(t, a = 0) {
              return t > k
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, a).find(
                    (o) => o.unique_id == t,
                  )
                : this.jsondata.sale_sections?.find((n) => n.unique_id == t);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(t) {
              return (
                this.jsondata.sale_sections?.filter(
                  (a) => a.section_type == t,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(t) {
              const a = this.jsondata.sale_sections?.length ?? 0;
              if (a != 0) {
                for (let n = 0; n < a; ++n)
                  if (this.jsondata.sale_sections[n].section_type === t)
                    return this.jsondata.sale_sections[n];
              }
            }
            static AccumulateCapsuleListIDs(t, a, n, o) {
              t &&
                t.forEach((b) => {
                  b &&
                    b.type &&
                    a.has(b.type) &&
                    (!o || o(b.id)) &&
                    n.add(b.id);
                });
            }
            GetSaleItemOfType(t, a) {
              if (!this.jsondata.sale_sections) return new Set();
              const n = new Set(t),
                o = new Set();
              return (
                (0, q.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((b) => {
                  ge.AccumulateCapsuleListIDs([b.capsule], n, o, a);
                }),
                this.jsondata.sale_sections.forEach((b) => {
                  if (Be(b.section_type))
                    ge.AccumulateCapsuleListIDs(b.capsules, n, o, a);
                  else if (b.section_type === "tabs" && b.tabs)
                    for (const p of b.tabs)
                      ge.AccumulateCapsuleListIDs(p.capsules, n, o, a);
                }),
                o
              );
            }
            GetSaleItemCountOfType(t, a) {
              return this.GetSaleItemOfType(t, a).size;
            }
            GetSaleFeaturedAppsCount(t) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                t,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(t) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                t,
              );
            }
            GetSaleFeaturedBundlesCount(t) {
              return this.GetSaleItemCountOfType(["bundle"], t);
            }
            GetSaleFeaturedPackagesCount(t) {
              return this.GetSaleItemCountOfType(["sub"], t);
            }
            GetSaleFeaturedApps(t) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                t,
              );
            }
            GetSaleFeaturedAppsAndDemos(t) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                t,
              );
            }
            GetSaleFeaturedBundles(t) {
              return this.GetSaleItemOfType(["bundle"], t);
            }
            GetSaleFeaturedPackages(t) {
              return this.GetSaleItemOfType(["sub"], t);
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
              return (0, F.rG)(this.type);
            }
            GetCategoryAsString(t) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, g.we)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, g.we)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, g.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, g.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == c.KDJ)
                        ? (0, g.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && t
                          ? (0, g.we)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(t) {
              let a = !0;
              return (
                t?.forEach((n) => {
                  this.vecTags.includes(n) || (a = !1);
                }),
                a
              );
            }
            BAllowedSteamStoreSpotlight() {
              return !!this.jsondata.store_spotlight;
            }
            BHasLibaryHomeSpotlight() {
              return !!this.jsondata.library_home_spotlight;
            }
            BHasSaleProductBanners() {
              return (
                !!this.jsondata.bSaleEnabled &&
                (this.BHasSomeImage("product_banner") ||
                  this.BHasSomeImage("product_banner_override"))
              );
            }
            GetSteamAwardCategory() {
              return this.jsondata.steam_award_category_suggestion ?? u.Q5.qZ;
            }
            GetSteamAwardNomineeCategories() {
              return this.jsondata.steam_award_category_voteids ?? [];
            }
            BIsLockedToGameOwners() {
              return !!this.jsondata.ownership_requirement_info
                ?.bLockedToAppOwners;
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
              return !!this.jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights;
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
                this.jsondata.item_source_type === 1 &&
                !!this.jsondata.source_content_hub
              );
            }
            GetContentHubType() {
              if (this.BUsesContentHubForItemSource())
                return this.jsondata.source_content_hub == null
                  ? "games"
                  : typeof this.jsondata.source_content_hub == "string"
                    ? "category"
                    : this.jsondata.source_content_hub.type;
            }
            GetContentHubCategory() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? this.jsondata.source_content_hub
                  : this.jsondata.source_content_hub.category;
            }
            GetContentHubTag() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? 0
                  : this.jsondata.source_content_hub.tagid;
            }
            GetContentHub() {
              return typeof this.jsondata.source_content_hub == "string"
                ? {
                    type: "category",
                    category: this.jsondata.source_content_hub,
                  }
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
            GetSalePageBackgroundGroup(t) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[t]
                : void 0;
            }
            GetIncludedRealmList() {
              const t = new Array();
              return (
                this.BInRealmGlobal() && t.push(B.TU.k_ESteamRealmGlobal),
                this.BInRealmChina() && t.push(B.TU.k_ESteamRealmChina),
                (0, q.wT)(
                  t.length > 0,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                t
              );
            }
            BIsValidForRealm(t) {
              return this.GetIncludedRealmList().includes(t);
            }
            BIsNextFest(t = !1) {
              const a = "nextfest",
                n = this.jsondata.sale_vanity_id?.toLowerCase(),
                o = new E.b(this.clanSteamID).GetAccountID();
              return !(
                !n ||
                o != x.GU ||
                !n.startsWith(a) ||
                (t && (n.endsWith("preview") || n.endsWith("press")))
              );
            }
            BShowNextFestHeader(t) {
              return t && j.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(t, a, n) {
              const b = n >= 7;
              return {
                ...a,
                section_type: "sale_item_browser",
                unique_id: t,
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
                enable_faceted_browsing: b,
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
          };
        M([l.sH], h.prototype, "GID", 2),
          M([l.sH], h.prototype, "AnnouncementGID", 2),
          M([l.sH], h.prototype, "forumTopicGID", 2),
          M([l.sH], h.prototype, "type", 2),
          M([l.sH], h.prototype, "appid", 2),
          M([l.sH], h.prototype, "name", 2),
          M([l.sH], h.prototype, "description", 2),
          M([l.sH], h.prototype, "timestamp_loc_updated", 2),
          M([l.sH], h.prototype, "startTime", 2),
          M([l.sH], h.prototype, "endTime", 2),
          M([l.sH], h.prototype, "visibilityStartTime", 2),
          M([l.sH], h.prototype, "visibilityEndTime", 2),
          M([l.sH], h.prototype, "m_nBuildID", 2),
          M([l.sH], h.prototype, "m_strBuildBranch", 2),
          M([l.sH], h.prototype, "postTime", 2),
          M([l.sH], h.prototype, "visibility_state", 2),
          M([l.sH], h.prototype, "broadcaster", 2),
          M([l.sH], h.prototype, "jsondata", 2),
          M([l.sH], h.prototype, "nCommentCount", 2),
          M([l.sH], h.prototype, "nVotesUp", 2),
          M([l.sH], h.prototype, "nVotesDown", 2),
          M([l.sH], h.prototype, "bOldAnnouncement", 2),
          M([l.sH], h.prototype, "announcementClanSteamID", 2),
          M([l.sH], h.prototype, "loadedAllLanguages", 2),
          M([l.sH], h.prototype, "bLoaded", 2),
          M([l.sH], h.prototype, "deleteInProgress", 2),
          M([l.sH], h.prototype, "vecTags", 2),
          M([l.sH], h.prototype, "last_update_steamid", 2),
          M([l.sH], h.prototype, "rtime32_last_modified", 2),
          M([l.sH], h.prototype, "rtime32_last_solr_search_col_updated", 2),
          M([l.sH], h.prototype, "rtime32_last_local_modification", 2),
          M([l.sH], h.prototype, "rtime32_moderator_reviewed", 2),
          M([l.sH], h.prototype, "video_preview_type", 2),
          M([l.sH], h.prototype, "video_preview_id", 2),
          M([l.sH], h.prototype, "m_overrideCurrentDay", 2);
        let W = h;
        function S(s) {
          if (s) return s?.replace(/[()]/g, "\\$&");
        }
      },
      18994: (oe, Q, m) => {
        m.d(Q, {
          $m: () => r,
          ML: () => I,
          QS: () => V,
          Sn: () => ce,
          Wn: () => x,
          ZI: () => ye,
          a4: () => F,
          f_: () => Z,
          jD: () => T,
          jn: () => be,
          mj: () => E,
          rp: () => g,
          sQ: () => re,
        });
        var f = m(33902),
          B = m(99412),
          c = m(73259),
          u = m(90626),
          l = m(53906);
        const r = "100% 0px 100% 0px",
          T = "tab",
          E = "SaleSection_",
          V = "exploration";
        var re = ((R) => ((R.Random = "r"), (R.Personalized = "p"), R))(
          re || {},
        );
        const x = 940,
          U = 1920;
        function q() {
          return window.innerWidth ?? U;
        }
        function g() {
          return q() >= x;
        }
        function I() {
          const R = (0, f.d)(),
            [se, ue] = (0, u.useState)(() => q());
          return (
            (0, u.useEffect)(() => {
              const ne = () => {
                ue(q());
              };
              return (
                ne(),
                window.addEventListener("resize", ne),
                () => window.removeEventListener("resize", ne)
              );
            }, []),
            se
          );
        }
        function F(R = x) {
          return I() >= R;
        }
        function Z(R) {
          const se = F(x),
            ue = (0, c._B)(R);
          return se
            ? { nMaxCapsulesPerRow: ue.nMaxItemsPerRow, bScreenIsWide: se }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(
                    Math.floor(window.innerWidth / ue.nItemMinimumWidth),
                    1,
                  ),
                  ue.nMaxItemsPerRow,
                ),
                bScreenIsWide: se,
              };
        }
        function ce(R) {
          const se = (0, c._B)(R);
          return g()
            ? se.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / se.nItemMinimumWidth),
                  1,
                ),
                se.nMaxItemsPerRow,
              );
        }
        function be(R) {
          switch (R) {
            case l.Oh:
              return B.mv5;
            case l._X:
              return B.KH9;
            case l.HD:
              return B.hmR;
            case l.rb:
              return B.R2g;
            default:
              return;
          }
        }
        function ye(R) {
          switch (R) {
            case B.mv5:
              return l.Oh;
            case B.KH9:
              return l._X;
            case B.hmR:
              return l.HD;
            default:
              return;
          }
        }
      },
      51746: (oe, Q, m) => {
        m.d(Q, {
          EG: () => l,
          II: () => U,
          Uz: () => V,
          aL: () => E,
          ab: () => c,
          zB: () => x,
        });
        var f = m(7742),
          B = m(72849);
        function c(g) {
          const I = g.toLowerCase();
          if (I.endsWith(".jpg") || I.endsWith(".jpeg")) return "image/jpeg";
          if (I.endsWith(".png")) return "image/png";
          if (I.endsWith(".gif")) return "image/gif";
          if (I.endsWith(".mp4")) return "video/mp4";
          if (I.endsWith(".webm")) return "video/webm";
          if (I.endsWith(".srt")) return "text/srt";
          if (I.endsWith(".vtt")) return "text/vtt";
          if (I.endsWith(".webp")) return "image/webp";
        }
        function u(g) {
          switch (g) {
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
              g,
            ),
            ".jpg"
          );
        }
        function l(g) {
          switch (g) {
            case B.bg.iS:
              return ".jpg";
            case B.bg.CK:
              return ".gif";
            case B.bg.dU:
              return ".png";
            case B.bg.pJ:
              return ".webm";
            case B.bg.nn:
              return ".mp4";
            case B.bg.pi:
              return ".srt";
            case B.bg.k7:
              return ".vtt";
            case B.bg.wD:
              return ".webp";
          }
        }
        function r(g) {
          const I = (0, f.x0)(),
            F = new Image();
          return (
            (F.onload = () => I.resolve(F)),
            (F.onerror = (Z) => {
              console.error("LoadImage failed to load the image, details", Z),
                I.resolve(void 0);
            }),
            (F.src = g),
            I.promise
          );
        }
        function T(g) {
          const I = (0, f.x0)(),
            F = document.createElement("video");
          return (
            (F.preload = "metadata"),
            F.addEventListener("loadedmetadata", () => I.resolve(F)),
            (F.onerror = (Z) => {
              console.error("LoadVideo failed to load the video, details", Z),
                I.resolve(void 0);
            }),
            (F.src = g),
            I.promise
          );
        }
        function E(g) {
          return g.startsWith("image/");
        }
        function V(g) {
          return g.startsWith("video/");
        }
        function re(g, I) {
          return I ? T(g) : r(g);
        }
        async function x(g, I) {
          if (I) return T(URL.createObjectURL(g));
          {
            const F = (0, f.x0)(),
              Z = new FileReader();
            (Z.onload = () => F.resolve(Z.result ?? void 0)),
              (Z.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  Z.error,
                ),
                  F.resolve(void 0);
              }),
              Z.readAsDataURL(g);
            const ce = await F.promise;
            return ce ? r(ce.toString()) : void 0;
          }
        }
        function U(g) {
          return g
            ? g instanceof HTMLVideoElement
              ? { width: g.videoWidth, height: g.videoHeight }
              : { width: g.width, height: g.height }
            : { width: 0, height: 0 };
        }
        function q(g, I) {
          if (!I) return g;
          const F = new Set([
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
          for (const Z of I)
            F.has(Z.name.toLowerCase()) || (g[Z.name] = Z.value);
          return g;
        }
      },
      71684: (oe, Q, m) => {
        m.d(Q, { JS: () => u, rG: () => T });
        var f = m(99412),
          B = m(39905);
        function c(E) {
          return E !== k_EClanEventType_NewsEvent;
        }
        function u(E) {
          switch (E) {
            case f.Aqr:
            case f.I5b:
            case f.jO6:
            case f.Y3j:
            case f.Bb7:
            case f.TiP:
            case f.EPt:
            case f.E3D:
            case f.L0X:
            case f.KDJ:
            case f.Fa4:
            case f.Aav:
            case f.SRb:
            case f.HRy:
            case f.C$4:
            case f.zA:
            case f.y6:
            case f.hGl:
            case f.WNR:
            case f.pIh:
            case f.izQ:
            case f.LOv:
            case f.zcX:
            case f.DRF:
            case f.HFK:
              return !0;
          }
          return !1;
        }
        function l(E, V) {
          return !(
            E == k_EClanEventType_SmallUpdateEvent ||
            E == k_EClanEventType_CreatorHome ||
            (V && V.indexOf("curator") != -1)
          );
        }
        function r(E) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(E);
        }
        function T(E) {
          let V = "#PartnerEvent_" + E,
            re = B.Z.Localize(V);
          return re != V ? re : B.Z.Localize("#PartnerEvent_Other");
        }
      },
    },
  ]);
})();
