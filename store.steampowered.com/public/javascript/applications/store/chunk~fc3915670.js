/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [55050],
    {
      25518: (se, x, d) => {
        d.d(x, { Kl: () => h, Yj: () => C, iH: () => y, zV: () => V });
        const h = [
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
          y = [
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
          u = h.filter((Y) => !c.includes(Y)),
          l = null;
        function r(Y) {
          const { bIncludeMedia: X = !1, bIncludeValveOnly: ee = !1 } = Y,
            p = new Set();
          return (
            X || c.forEach((f) => p.add(f)),
            ee || l.forEach((f) => p.add(f)),
            h.filter((f) => !p.has(f))
          );
        }
        let T;
        function v(Y) {
          return Y
            ? Y.map((X) => (X == "*" ? "\\*" : X)).join("|")
            : (T || (T = v(h)), T);
        }
        function C(Y, X = null, ee = " ") {
          const p = new RegExp(
            "\\[(" + v(X) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return Y.replace(p, ee);
        }
        function V(Y, X = null, ee = "") {
          const p = "\\[\\/?(?:" + v(X) + "){1,}.*?]";
          return Y.replace(new RegExp(p, "gi"), ee);
        }
      },
      29630: (se, x, d) => {
        d.d(x, { zU: () => ue, z5: () => fe });
        var h = d(38340),
          y = d(9046),
          c = d(99412),
          u = d(72604),
          l = d(7742),
          r = d(72849),
          T = d(76559),
          v = d(71742),
          C = d(34592),
          V = d(51746),
          Y = d(72609),
          X = d(7850),
          ee = d(90626);
        function p(m, M) {
          return `${m}/${M}`;
        }
        const f = {},
          w = ee.createContext(f);
        function $(m) {
          const { resolutions: M, children: _ } = m;
          return jsx(w.Provider, { value: M, children: _ });
        }
        function N() {
          return ee.useContext(w);
        }
        const ge = new RegExp(
          `${h.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function ve(m) {
          const M = [],
            _ = new Set();
          for (const O of m.matchAll(ge)) {
            const W = Number.parseInt(O[1]),
              R = O[2],
              te = p(W, R);
            W > 0 &&
              !_.has(te) &&
              (_.add(te), M.push({ clanAccountID: W, hashAndExt: R }));
          }
          return M;
        }
        function fe(m, M, _ = 0) {
          const O = N();
          return he(m, M, _, O);
        }
        async function Ie(m, M, _ = 0) {
          return he(m, M, _);
        }
        function he(m, M, _ = 0, O) {
          if (!m || m.length == 0) return null;
          if (m?.startsWith(h.lw)) return ue.ReplacementTokenToClanImageURL(m);
          if (m?.startsWith(h.eg)) {
            const W = ue.GetBaseURL(),
              R = m.substring(h.eg.length + 1),
              te = parseInt(R.substring(0, R.indexOf("/"))),
              re = R.substring(R.indexOf("/") + 1),
              z = ue.GenerateURLFromHashAndExt(te, re);
            if (O?.[p(te, re)] === !1) return z;
            const ne = ue
              .GetLocalizedClanImageFileNames(re, M)
              .map((be) => W + te + "/" + be + "?t=" + _);
            return ne.push(z), ne;
          }
          return m;
        }
        const ue = {
          GetBaseURL() {
            return `${Y.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${Y.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(m) {
            return (
              (m = m.replace(h.lw, this.GetBaseURL())),
              m.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(m) {
            const _ =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                m,
              );
            return _?.groups
              ? [_.groups.filename, parseInt(_.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(m) {
            return (
              (m.file_type != null ? (0, V.EG)(m.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(m) {
            return m ? m.image_hash + this.GetExtensionString(m) : null;
          },
          GetThumbHashAndExt(m) {
            return m ? m.thumbnail_hash + this.GetExtensionString(m) : null;
          },
          GetHashFromHashAndExt(m) {
            let M = m.substring(m.lastIndexOf("."));
            return m.substring(0, m.length - M.length);
          },
          GetExtStringFromHashAndExt(m) {
            return m.substring(m.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(m, M) {
            if (M == null) return [];
            const _ = this.GetHashFromHashAndExt(m),
              O = this.GetExtStringFromHashAndExt(m),
              W = [_ + "/" + (0, c.LgB)(M) + O];
            return (
              M == c.Pn1 && W.push(_ + "/" + (0, c.x6o)((0, c.LgB)(M)) + O), W
            );
          },
          GenerateURLFromHashAndExt(m, M, _ = y.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              m,
              M,
              _,
              c.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(m, M, _ = y.wI.full, O, W) {
            m instanceof T.b && (m = m.GetAccountID());
            let R = this.GetBaseURL();
            const te = O != null && O != c.xPp;
            if (_ == y.wI.full && !te) return R + m + "/" + M;
            {
              let re = M.substring(M.lastIndexOf(".")),
                z = M.substring(0, M.length - re.length);
              return !te || O == c.Bhc || W != "localized_image_group"
                ? R + m + "/" + z + _ + re
                : R + m + "/" + z + "/" + (0, c.x6o)((0, c.LgB)(O)) + re;
            }
          },
          GetHashAndExtFromURL(m) {
            let M = this.GetBaseURL();
            return !m?.startsWith(M) ||
              ((m = m.substring(M.length)), m.indexOf("/") == -1)
              ? null
              : ((m = m.substring(m.indexOf("/") + 1)), m);
          },
          GenerateEditableURLFromHashAndExt(m, M, _) {
            let O =
              Y.TS.COMMUNITY_BASE_URL +
              "gid/" +
              m.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              M;
            return _ && (O += "&lang=" + _), O;
          },
          GetMimeType(m) {
            return (0, V.ab)(m);
          },
          async AsyncGetImageResolution(m, M, _, O, W) {
            const R = M + this.GetExtensionString({ file_type: _ }),
              te = this.GenerateEditableURLFromHashAndExt(m, R);
            return await this.AsyncGetImageResolutionInternal(te, O, W);
          },
          async AsyncGetImageResolutionInternal(m, M, _) {
            const O = (0, l.x0)();
            let W = new Image();
            (W.crossOrigin = "anonymous"),
              (W.onerror = (z) => {
                const ne = { success: u.zi };
                _ ||
                  ((ne.err_msg =
                    "Load fail on url " +
                    m +
                    " with error: " +
                    (0, C.H)(z).strErrorMsg),
                  console.error(ne.err_msg)),
                  (ne.success = u.zi),
                  O.resolve(ne);
              }),
              (W.onload = () => {
                const z = { success: u.zi };
                if (
                  ((z.width = W.width),
                  (z.height = W.height),
                  !(W.width > 0) || !(W.height > 0))
                ) {
                  (0, v.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + m,
                  ),
                    (z.err_msg = "No resolution reported for url " + m),
                    O.resolve(z);
                  return;
                }
                (z.success = u.R), O.resolve(z);
              }),
              (W.src = m),
              M.token.promise.catch(() => {
                (W.onload = () => {}),
                  (W.onerror = () => {}),
                  O.resolve({ success: u.e9 });
              });
            let R;
            const te = new Promise((z, ne) => {
              R = setTimeout(() => ne(), 1e4);
            });
            let re;
            try {
              re = await Promise.race([te, O.promise]);
            } catch {
              re = { success: u._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(R);
            }
            return re;
          },
          BIsClanImageVideo(m) {
            return m.file_type == r.bg.nn || m.file_type == r.bg.pJ;
          },
        };
      },
      9046: (se, x, d) => {
        d.d(x, { pb: () => c, wI: () => y });
        class h {
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
        var y = ((u) => (
          (u.full = ""),
          (u.background_main = "_960x311"),
          (u.background_mini = "_480x156"),
          (u.capsule_main = "_400x225"),
          (u.spotlight_main = "_1054x230"),
          u
        ))(y || {});
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
      7742: (se, x, d) => {
        d.d(x, { x0: () => y });
        async function h(u) {
          try {
            return await u;
          } catch (l) {
            console.error(l);
            return;
          }
        }
        function y() {
          let u, l;
          return {
            promise: new Promise((T, v) => {
              (u = T), (l = v);
            }),
            resolve: u,
            reject: l,
          };
        }
        function c(u) {
          return new Promise((l) => setTimeout(l, u));
        }
      },
      64165: (se, x, d) => {
        d.d(x, { n: () => y, s: () => c });
        var h = d(50974);
        function y(u, l, r) {
          return u == h.wv
            ? `charts/topnewreleases/${l}`
            : u == h.yT
              ? `charts/bestofyear/${l}`
              : r
                ? `sale/${l}`
                : `curator/${u}/sale/${l}`;
        }
        function c(u, l) {
          return y(u, "", l).startsWith("curator/");
        }
      },
      59432: (se, x, d) => {
        d.d(x, { Gw: () => l, Lk: () => r, ai: () => u, mm: () => c });
        var h = d(14947);
        const y = h.sH.box(void 0);
        function c() {
          return y.get();
        }
        function u(T) {
          (0, h.h5)(() => y.set(T));
        }
        function l() {
          const T = y.get();
          return T || Math.floor(Date.now() / 1e3);
        }
        function r() {
          const T = y.get();
          return T ? new Date(T * 1e3) : new Date();
        }
      },
      34041: (se, x, d) => {
        d.d(x, {
          $N: () => j,
          CX: () => J,
          Dp: () => a,
          wz: () => g,
          qX: () => b,
          cD: () => D,
          yX: () => H,
          Q5: () => h,
          Ji: () => c,
          Xs: () => y,
          AH: () => Ue,
          zF: () => Pe,
        });
        var h = {};
        d.r(h), d.d(h, { qZ: () => v });
        var y = {};
        d.r(y), d.d(y, { bV: () => ot, O8: () => Se, x1: () => De });
        var c = {};
        d.r(c),
          d.d(c, {
            HW: () => Be,
            MU: () => dt,
            qP: () => He,
            RU: () => pe,
            mP: () => Le,
          });
        var u = d(80613),
          l = d.n(u),
          r = d(75245),
          T = d(35038);
        const v = 0,
          C = 50,
          V = 51,
          Y = 52,
          X = 53,
          ee = 54,
          p = 55,
          f = 56,
          w = 57,
          $ = 58,
          N = 59,
          ge = 60,
          ve = 61,
          fe = 62,
          Ie = 63,
          he = 64,
          ue = 65,
          m = 66,
          M = 67,
          _ = 68,
          O = 69,
          W = 70,
          R = 71,
          te = 72,
          re = 73,
          z = 74,
          ne = 75,
          be = 76,
          E = 77,
          Ge = 78,
          Ae = 79,
          Ke = 80,
          Ye = 81,
          $e = 82,
          ht = 83,
          Je = 90,
          Xe = 91,
          ft = 92,
          Me = 93,
          Qe = 94,
          Ze = 95,
          bt = 96,
          yt = 97,
          qe = 98,
          Re = 99,
          Ce = 100,
          Ne = 101,
          Te = 110,
          Ee = 111,
          Ve = 112,
          et = 113,
          we = 114,
          _e = 115,
          ze = 116,
          je = 117,
          Oe = 118,
          ke = 119,
          Bt = 120,
          tt = 130,
          rt = 131,
          at = 132,
          it = 133,
          st = 134,
          ye = 135,
          nt = 136,
          lt = 137,
          Fe = 138,
          ct = 139,
          We = 140,
          xe = 0,
          Se = 1,
          De = 2,
          ot = 3,
          Be = 0,
          ut = 1,
          pt = 2,
          pe = 3,
          Le = 4,
          vt = 5,
          dt = 6,
          He = 7;
        function It(ae) {
          return "unknown ESteamAwardVoteCategoryID ( " + ae + " )";
        }
        function mt(ae) {
          return "unknown EVoteDefinitionFlag ( " + ae + " )";
        }
        function gt(ae) {
          return "unknown ESteamAwardsNominationSource ( " + ae + " )";
        }
        class P extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.voteid || r.Sg(P.M()),
              u.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
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
                    app_discounts: { n: 5, c: S, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    groups: { n: 7, c: U, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localization: { n: 9, c: G },
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
              B = new P();
            return P.deserializeBinaryFromReader(B, i);
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
            return "CStore_VoteDefinition";
          }
        }
        class S extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.appid || r.Sg(S.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
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
              B = new S();
            return S.deserializeBinaryFromReader(B, i);
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
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.groupid || r.Sg(U.M()),
              u.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
                    app_discounts: { n: 3, c: S, r: !0, q: !0 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(U.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new U();
            return U.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(U.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(U.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class G extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.title || r.Sg(G.M()),
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
              B = new G();
            return G.deserializeBinaryFromReader(B, i);
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
            return "CStore_VoteDefinition_Localization";
          }
        }
        class D extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.language || r.Sg(D.M()),
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
              B = new D();
            return D.deserializeBinaryFromReader(B, i);
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
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class A extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.votes || r.Sg(A.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    votes: { n: 1, c: P, r: !0, q: !0 },
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
              B = new A();
            return A.deserializeBinaryFromReader(B, i);
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
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class L extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.voteid || r.Sg(L.M()),
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
                    voteid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
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
              B = new L();
            return L.deserializeBinaryFromReader(B, i);
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
            return "SteamAwardsUserVote";
          }
        }
        class b extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.sale_appid || r.Sg(b.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
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
              B = new b();
            return b.deserializeBinaryFromReader(B, i);
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
            return "CStore_GetUserVotes_Request";
          }
        }
        class K extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.user_votes || r.Sg(K.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: { user_votes: { n: 1, c: L, r: !0, q: !0 } },
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
              B = new K();
            return K.deserializeBinaryFromReader(B, i);
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
            return "CStore_GetUserVotes_Response";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.voteid || r.Sg(H.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
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
              B = new H();
            return H.deserializeBinaryFromReader(B, i);
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
            return "CStore_SetVote_Request";
          }
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              s.prototype.user_votes || r.Sg(s.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: { user_votes: { n: 1, c: L, r: !0, q: !0 } },
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
              B = new s();
            return s.deserializeBinaryFromReader(B, i);
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
            return "CStore_SetVote_Response";
          }
        }
        class t extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              t.prototype.category_id || r.Sg(t.M()),
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
              B = new t();
            return t.deserializeBinaryFromReader(B, i);
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
            return "CSteamAwardsNomination";
          }
        }
        class a extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return a.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new a();
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new a();
            return a.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class n extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              n.prototype.nominations || r.Sg(n.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: { nominations: { n: 1, c: t, r: !0, q: !0 } },
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
              B = new n();
            return n.deserializeBinaryFromReader(B, i);
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
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class o extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.steamid || r.Sg(o.M()),
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
              B = new o();
            return o.deserializeBinaryFromReader(B, i);
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
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class g extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.category_id || r.Sg(g.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
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
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(g.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new g();
            return g.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(g.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(g.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class I extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.nominations || r.Sg(I.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { nominations: { n: 1, c: t, r: !0, q: !0 } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(I.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new I();
            return I.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(I.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(I.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class j extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.category_id || r.Sg(j.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    category_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(j.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new j();
            return j.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(j.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(j.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class k extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.played_app || r.Sg(k.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    played_app: { n: 1, c: F, r: !0, q: !0 },
                    suggested_events: { n: 2, c: Q, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: Z, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(k.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new k();
            return k.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(k.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(k.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class F extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.appid || r.Sg(F.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playtime: { n: 2, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(F.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new F();
            return F.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(F.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(F.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class Q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.clanid || r.Sg(Q.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
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
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Q.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new Q();
            return Q.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.appid || r.Sg(Z.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Z.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new Z();
            return Z.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Z.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Z.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.generate_new || r.Sg(J.M()),
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
                    generate_new: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
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
              B = new J();
            return J.deserializeBinaryFromReader(B, i);
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
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.code || r.Sg(q.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    code: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(q.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              B = new q();
            return q.deserializeBinaryFromReader(B, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Pe;
        ((ae) => {
          function e(de, me, ie) {
            return de.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, T.I8)(D, me, ie),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ae.GetVoteDefinitions = e;
          function i(de, me, ie) {
            return de.SendMsg("StoreSales.SetVote#1", (0, T.I8)(H, me, ie), s, {
              ePrivilege: 1,
            });
          }
          ae.SetVote = i;
          function B(de, me, ie) {
            return de.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, T.I8)(b, me, ie),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetUserVotes = B;
        })(Pe || (Pe = {}));
        var Ue;
        ((ae) => {
          function e(ie, le, ce) {
            return ie.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, T.I8)(a, le, ce),
              n,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetUserNominations = e;
          function i(ie, le, ce) {
            return ie.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, T.I8)(o, le, ce),
              n,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          ae.GetOtherUserNominations = i;
          function B(ie, le, ce) {
            return ie.SendMsg(
              "SteamAwards.Nominate#1",
              (0, T.I8)(g, le, ce),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.Nominate = B;
          function de(ie, le, ce) {
            return ie.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, T.I8)(j, le, ce),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ae.GetNominationRecommendations = de;
          function me(ie, le, ce) {
            return ie.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, T.I8)(J, le, ce),
              q,
              { ePrivilege: 1 },
            );
          }
          ae.GetNominationShareLink = me;
        })(Ue || (Ue = {}));
      },
      39829: (se, x, d) => {
        d.d(x, {
          $m: () => u,
          ML: () => Y,
          Sn: () => p,
          Wn: () => T,
          a4: () => X,
          f_: () => ee,
          jD: () => r,
          mj: () => l,
          rp: () => V,
        });
        var h = d(33902),
          y = d(90626),
          c = d(73259);
        const u = "100% 0px 100% 0px",
          l = "SaleSection_",
          r = "tab",
          T = 940,
          v = 1920;
        function C() {
          return window.innerWidth ?? v;
        }
        function V() {
          return C() >= T;
        }
        function Y() {
          const f = (0, h.d)(),
            [w, $] = (0, y.useState)(() => C());
          return (
            (0, y.useEffect)(() => {
              const N = () => {
                $(C());
              };
              return (
                N(),
                window.addEventListener("resize", N),
                () => window.removeEventListener("resize", N)
              );
            }, []),
            w
          );
        }
        function X(f = T) {
          return Y() >= f;
        }
        function ee(f) {
          const w = Y(),
            $ = w >= T,
            N = (0, c._B)(f);
          return $
            ? { nMaxCapsulesPerRow: N.nMaxItemsPerRow, bScreenIsWide: $ }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor(w / N.nItemMinimumWidth), 1),
                  N.nMaxItemsPerRow,
                ),
                bScreenIsWide: $,
              };
        }
        function p(f) {
          const w = (0, c._B)(f);
          return V()
            ? w.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / w.nItemMinimumWidth),
                  1,
                ),
                w.nMaxItemsPerRow,
              );
        }
      },
      38340: (se, x, d) => {
        d.d(x, { eg: () => y, lw: () => h, qR: () => c });
        const h = "{STEAM_CLAN_IMAGE}",
          y = "{STEAM_CLAN_LOC_IMAGE}",
          c = "{STEAM_APP_IMAGE}";
      },
      73259: (se, x, d) => {
        d.d(x, {
          FZ: () => gt,
          A4: () => Ye,
          iy: () => Ae,
          ZA: () => Ce,
          Dn: () => Ne,
          CU: () => Fe,
          Ay: () => nt,
          ye: () => ye,
          Fo: () => xe,
          G$: () => Se,
          Xx: () => Te,
          DJ: () => pe,
          G6: () => De,
          zv: () => Ee,
          IS: () => je,
          GE: () => _e,
          yX: () => ze,
          w: () => Be,
          EE: () => we,
          Zf: () => Oe,
          jR: () => ke,
          Ac: () => P,
          lh: () => K,
          Hc: () => ut,
          UR: () => We,
          mz: () => it,
          qQ: () => rt,
          MW: () => at,
          W2: () => tt,
          Pm: () => ct,
          qR: () => st,
          _B: () => Ve,
          j3: () => H,
          Yw: () => et,
          zK: () => qe,
          DU: () => Me,
          cB: () => Le,
        });
        var h = d(25518),
          y = d(32093),
          c = d(99412),
          u = d(34041),
          l = d(14947);
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
        var v = d(76559),
          C = d(29630),
          V = d(9046),
          Y = d(50974),
          X = d(59432),
          ee = d(64165),
          p = d(71742),
          f = d(18210),
          w = d(13854),
          $ = d(71684),
          N = d(48473),
          ge = d(36174),
          ve = d(27066),
          fe = Object.defineProperty,
          Ie = Object.getOwnPropertyDescriptor,
          he = (s, t, a, n) => {
            for (
              var o = n > 1 ? void 0 : n ? Ie(t, a) : t, g = s.length - 1, I;
              g >= 0;
              g--
            )
              (I = s[g]) && (o = (n ? I(t, a, o) : I(o)) || o);
            return n && o && fe(t, a, o), o;
          };
        const ue = null,
          m = { bScheduleEnabled: !1, scheduleEntries: [] },
          M = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class _ {
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
        class O {
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
        he([ve.o], O.prototype, "GetEventStartTime", 1);
        const W = 1e4,
          R = 99999;
        function te() {
          return Math.floor(W + Math.random() * (R - W + 1));
        }
        var re = d(18994),
          z = d(72609),
          ne = Object.defineProperty,
          be = Object.getOwnPropertyDescriptor,
          E = (s, t, a, n) => {
            for (
              var o = n > 1 ? void 0 : n ? be(t, a) : t, g = s.length - 1, I;
              g >= 0;
              g--
            )
              (I = s[g]) && (o = (n ? I(t, a, o) : I(o)) || o);
            return n && o && ne(t, a, o), o;
          };
        const Ge = [
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
        function Ae(s) {
          return (
            Ge.some((t) => t == s.GetEventType()) &&
            !s.BHasTag("steam_award_nomination_request") &&
            !s.BHasTag("curator")
          );
        }
        const Ke = [c.HRy, c.LOv, c.HFK];
        function Ye(s) {
          return (
            !Ke.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        const $e = [c.Fwr, c.HFK];
        function ht(s) {
          return (
            !$e.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        const Je = [
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
          Xe = new Set(Je);
        function ft(s) {
          return !!s.endTime && Xe.has(s.type);
        }
        const Me = 593110,
          Qe = 766,
          Ze = 221410,
          bt = 1675200,
          yt = 4165890,
          qe = [Me, Qe, Ze],
          Re = [c.Fwr, c.HFK];
        function Ce(s) {
          return (
            !Re.some((t) => t == s.GetEventType()) && !s.BHasTag("curator")
          );
        }
        function Ne(s, t = (0, X.Gw)()) {
          const a = 60 * ge.Kp.PerDay;
          return (
            s.BIsVisibleEvent(t) &&
            s.BIsOGGEvent() &&
            (s.rtime32_last_modified ?? 0) > t - a &&
            !Te(s)
          );
        }
        function Te(s) {
          return (
            s.BHasTag("mod_reviewed") && !s.BHasTag("mod_require_rereview")
          );
        }
        var Ee = ((s) => (
          (s[(s.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (s[(s.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (s[(s.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (s[(s.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          s
        ))(Ee || {});
        function Ve(s) {
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
        const et = "bordered";
        var we = ((s) => (
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
            (s[(s.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            s
          ))(we || {}),
          _e = ((s) => (
            (s[(s.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (s[(s.k_ELanguage = 1)] = "k_ELanguage"),
            (s[(s.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (s[(s.k_EUserPreference = 3)] = "k_EUserPreference"),
            (s[(s.k_EPrice = 4)] = "k_EPrice"),
            (s[(s.k_EAppType = 5)] = "k_EAppType"),
            s
          ))(_e || {}),
          ze = ((s) => (
            (s[(s.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (s[(s.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (s[(s.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            s
          ))(ze || {}),
          je = ((s) => (
            (s[(s.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (s[(s.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (s[(s.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            s
          ))(je || {}),
          Oe = ((s) => (
            (s.Steam = "Steam"),
            (s.Facebook = "Facebook"),
            (s.Twitter = "Twitter"),
            (s.Reddit = "Reddit"),
            s
          ))(Oe || {}),
          ke = ((s) => (
            (s.Summary = "summary"),
            (s.SummaryLargeImage = "summary_large_image"),
            s
          ))(ke || {});
        const Bt = null;
        function tt(s) {
          return s && !!s.show_as_carousel && !s.enable_faceted_browsing;
        }
        function rt(s) {
          return s.carousel_rows || 1;
        }
        function at(s) {
          return s.cap_item_count || 0;
        }
        function it(s) {
          return s.cap_section_row_count && s.cap_section_row_count > 0
            ? s.cap_section_row_count
            : s.section_type == "trailercarousel"
              ? 1
              : s.cap_section_content
                ? 4
                : 0;
        }
        function st(s) {
          return s?.store_filter ? JSON.stringify(s.store_filter) : void 0;
        }
        function ye(s) {
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
        function nt(s) {
          switch (s) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function lt(s) {
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
        function Fe(s, t = !1) {
          return !s || !lt(s.section_type)
            ? !1
            : t
              ? s.sale_tag_filter?.clauses?.length
                ? !0
                : !!s.smart_section
              : !!s.smart_section && s.smart_section_type != null;
        }
        function ct(s) {
          return Fe(s) ? s?.smart_section_type : void 0;
        }
        function We(s) {
          return (
            (s.jsondata.sale_ml_recommender_delay_hours &&
              (s.startTime ?? 0) +
                s.jsondata.sale_ml_recommender_delay_hours * ge.Kp.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        function xe(s, t, a) {
          return !s.BIsNextFest() || !ye(t.section_type)
            ? !1
            : a == re.sQ.Random
              ? !0
              : We(s) > 0;
        }
        function Se(s, t, a) {
          return !!(t.use_random_order || xe(s, t, a));
        }
        const De = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(c.bP9),
            localized_label_image: new Array(c.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          ot = { internal_type: "subscription_pricing" };
        var Be = ((s) => (
          (s[(s.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (s[(s.k_EContentHub = 1)] = "k_EContentHub"),
          s
        ))(Be || {});
        function ut(s) {
          return {
            arrowFill: s?.sale_carousel_arrow_color,
            arrowStyle: s?.sale_carousel_arrow_style,
            breadcrumbActiveColor: s?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: s?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: s?.sale_carousel_breadcrumb_style,
          };
        }
        function pt(s, t, a) {
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
        const pe = {
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
            ...m,
          },
          Le = "old_announce_",
          vt = 80,
          dt = 120,
          He = 180,
          It = "hide_from_events_and_discount",
          mt = [
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
          gt = [
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
          P = [
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
          S = [c.HRy, c.LOv, c.HFK],
          U = [
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
          G = [y.TU.k_ESteamRealmGlobal],
          D = [y.TU.k_ESteamRealmChina],
          A = [y.TU.k_ESteamRealmGlobal, y.TU.k_ESteamRealmChina],
          L = [],
          b = class oe {
            constructor() {
              (0, l.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new v.b();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
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
            jsondata = pe;
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
              let a = new oe(),
                n = JSON.parse(t);
              return (
                Object.assign(a, n),
                (a.name = new Map(n.name)),
                (a.description = new Map(n.description)),
                (a.vecTags = [...(n.vecTags ?? n.tags ?? [])]),
                (a.clanSteamID = new v.b(n.clanSteamID)),
                (0, p.wT)(
                  a.clanSteamID && a.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    a.clanSteamID.ConvertTo64BitString(),
                ),
                n.broadcaster &&
                  ((a.broadcaster = new v.b(n.broadcaster)),
                  (0, p.wT)(
                    a.broadcaster && a.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      a.broadcaster.ConvertTo64BitString(),
                  )),
                a
              );
            }
            static FromCClanEventData(t, a) {
              let n = new oe();
              (n.GID = t.gid),
                (n.clanSteamID = new v.b(t.clan_steamid)),
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
                  (n.broadcaster = v.b.InitFromAccountID(
                    t.broadcaster_accountid,
                  )),
                (n.AnnouncementGID = t.announcement_body?.gid ?? "0");
              const o = t.clan_steamid_original;
              return (
                o
                  ? (n.clanSteamIDOriginal = new v.b(o))
                  : t.announcement_body?.clanid &&
                    (n.clanSteamIDOriginal = v.b.InitFromClanID(
                      Number(t.announcement_body.clanid),
                    )),
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
              let a = new oe();
              if (
                ((a.GID = this.GID),
                (a.AnnouncementGID = this.AnnouncementGID),
                (a.clanSteamID = this.clanSteamID),
                (a.clanSteamIDOriginal = this.clanSteamIDOriginal),
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
                  ? new v.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (a.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (a.vecTags = new Array()),
                t
                  ? ((a.m_nBuildID = this.m_nBuildID),
                    (a.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((n) => a.vecTags.push(n)))
                  : this.vecTags.forEach((n) => {
                      mt.includes(n) && a.vecTags.push(n);
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
            GetDayIndexFromEventStart(t = (0, X.Gw)()) {
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
              const a = f.A0.GetELanguageFallback(t);
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
                  f.A0.IsELanguageValidInRealm(t, y.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  f.A0.IsELanguageValidInRealm(t, y.TU.k_ESteamRealmChina))
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
                    : V.pb.includes(t)
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
            GetImageURL(t, a = c.Bhc, n = V.wI.full) {
              const o = this.GetImgArray(t),
                g = o && o.length > a && o[a] != null;
              return g && o[a]?.startsWith("http")
                ? o[a]
                : g
                  ? C.zU.GenerateURLFromHashAndExt(
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
                  ? z.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : t
                    ? z.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      t +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : z.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(t) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(t)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const t = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !t || !t.BIsValid()
                ? ""
                : z.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    t.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(t = (0, X.Gw)()) {
              return t < (this.startTime ?? 0);
            }
            BHasEventEnded(t = (0, X.Gw)()) {
              return (this.endTime ?? 0) < t;
            }
            UpdateVoteCount(t, a) {
              t == "up"
                ? (this.nVotesUp = (0, w.OQ)(
                    this.nVotesUp + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : t == "down" &&
                  (this.nVotesDown = (0, w.OQ)(
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
                  let g = n.indexOf("[/img]", o);
                  if (g != -1) {
                    let I = n.substring(o, g).trim();
                    if (I.length != 0)
                      return C.zU.ReplacementTokenToClanImageURL(I);
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
                const o = f.A0.GetELanguageFallback(a);
                a != o && (n = this.GetImageURL(t, o));
              }
              return !n || n.length == 0;
            }
            GetDescriptionWithFallback(t) {
              const a = f.A0.GetELanguageFallback(t);
              return this.description.get(t) || this.description.get(a);
            }
            BIsImageSafeForAllAges(t, a, n = {}) {
              const o = f.A0.GetELanguageFallback(a);
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
            BIsVisibleEvent(t = (0, X.Gw)()) {
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
            BIsEventActionEnabled(t = (0, X.Gw)()) {
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
                ? f.NT.GetWithFallback(this.jsondata.localized_subtitle, t)
                : "";
            }
            GetSubTitleWithSummaryFallback(t) {
              return (
                f.NT.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
                oe.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
              );
            }
            GetSummaryWithFallback(t, a) {
              return (
                f.NT.GetWithFallback(this.jsondata?.localized_summary, t) ||
                oe.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(t),
                  a,
                )
              );
            }
            GetSummary(t) {
              return f.NT.Get(this.jsondata?.localized_summary ?? [], t);
            }
            BHasSummary(t) {
              return !!this.GetSummary(t);
            }
            static GenerateSummaryFromText(t, a) {
              return !t || t.trim().length == 0
                ? ""
                : ((t = (0, h.Yj)(t, [
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
                  (t = (0, h.zV)(t, ["p"], " ")),
                  (t = (0, h.zV)(t)),
                  (t = (0, N.aX)(t)),
                  (0, N.bC)(t, a || He));
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
              if (!this.jsondata.library_spotlight || S.includes(this.type))
                return !1;
              const a = new Date().getTime() / 1e3;
              return !(
                (U.includes(this.type) && this.endTime && a > this.endTime) ||
                (this.startTime && a > this.startTime + ge.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(t, a = (0, X.Gw)()) {
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
                f.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  t,
                ) ||
                (0, f.we)(
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
                  v.b.InitFromAccountID(t).ConvertTo64BitString(),
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
                  z.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  z.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const g = this.jsondata.source_content_hub;
                return g
                  ? typeof g == "string"
                    ? z.TS.STORE_BASE_URL + "category/" + g
                    : g.type == "category"
                      ? z.TS.STORE_BASE_URL + "category/" + g.category
                      : g.type == "tags"
                        ? z.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, f.l4)() || "en") +
                          "/" +
                          g.tagid
                        : g.type == "freetoplay"
                          ? z.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : g.type == "earlyaccess"
                            ? z.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : z.TS.STORE_BASE_URL + g.type
                  : z.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              const a = this.clanSteamID.GetAccountID(),
                n =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                o = this.GetSaleVanity();
              return t && (0, ee.s)(a, n)
                ? t + "sale/" + o
                : z.TS.STORE_BASE_URL + (0, ee.n)(a, o, n);
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
            GenerateDynamicSaleSections(t, a, n, o, g, I) {
              const j = [],
                k = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let F = R + 10;
              return (
                t &&
                  j.push({
                    ...k,
                    section_type: "footer_self_creator_home",
                    unique_id: F++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                a &&
                  j.push({
                    ...k,
                    section_type: "footer_browse_more",
                    unique_id: F++,
                  }),
                o &&
                  j.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      F++,
                      k,
                      I,
                    ),
                  ),
                n &&
                  j.push({
                    ...k,
                    section_type: "footer_default_social_share",
                    unique_id: F++,
                  }),
                g &&
                  j.push({
                    ...k,
                    section_type: "nextfest_header",
                    unique_id: F++,
                  }),
                j
              );
            }
            GetSaleSectionIncludingFooterSections(t = 0) {
              const a = this.jsondata?.sale_show_creator,
                n = this.jsondata.sale_browse_more_button,
                o =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                g = this.GetEventType() == c.ajI,
                I = this.BShowNextFestHeader(!0);
              return a || n || o || g || I
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, I, t),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!a, !!n, o, g, !1, t),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(t, a = 0) {
              return t > R
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
                t.forEach((g) => {
                  g &&
                    g.type &&
                    a.has(g.type) &&
                    (!o || o(g.id)) &&
                    n.add(g.id);
                });
            }
            GetSaleItemOfType(t, a) {
              if (!this.jsondata.sale_sections) return new Set();
              const n = new Set(t),
                o = new Set();
              return (
                (0, p.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((g) => {
                  oe.AccumulateCapsuleListIDs([g.capsule], n, o, a);
                }),
                this.jsondata.sale_sections.forEach((g) => {
                  if (ye(g.section_type))
                    oe.AccumulateCapsuleListIDs(g.capsules, n, o, a);
                  else if (g.section_type === "tabs" && g.tabs)
                    for (const I of g.tabs)
                      oe.AccumulateCapsuleListIDs(I.capsules, n, o, a);
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
              return (0, $.rG)(this.type);
            }
            GetCategoryAsString(t) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, f.we)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, f.we)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, f.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, f.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == c.KDJ)
                        ? (0, f.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && t
                          ? (0, f.we)("#PartnerEvent_MM_MajorUpdate")
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
              const t = this.BInRealmGlobal(),
                a = this.BInRealmChina();
              return (
                (0, p.wT)(
                  t || a,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                t && a ? A : t ? G : a ? D : L
              );
            }
            BIsValidForRealm(t) {
              return this.GetIncludedRealmList().includes(t);
            }
            BIsNextFest(t = !1) {
              const a = "nextfest",
                n = this.jsondata.sale_vanity_id?.toLowerCase(),
                o = new v.b(this.clanSteamID).GetAccountID();
              return !(
                !n ||
                o != Y.GU ||
                !n.startsWith(a) ||
                (t && (n.endsWith("preview") || n.endsWith("press")))
              );
            }
            BShowNextFestHeader(t) {
              return t && z.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(t, a, n) {
              const g = n >= 7;
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
                enable_faceted_browsing: g,
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
        E([l.sH], b.prototype, "GID", 2),
          E([l.sH], b.prototype, "AnnouncementGID", 2),
          E([l.sH], b.prototype, "forumTopicGID", 2),
          E([l.sH], b.prototype, "type", 2),
          E([l.sH], b.prototype, "appid", 2),
          E([l.sH], b.prototype, "name", 2),
          E([l.sH], b.prototype, "description", 2),
          E([l.sH], b.prototype, "timestamp_loc_updated", 2),
          E([l.sH], b.prototype, "startTime", 2),
          E([l.sH], b.prototype, "endTime", 2),
          E([l.sH], b.prototype, "visibilityStartTime", 2),
          E([l.sH], b.prototype, "visibilityEndTime", 2),
          E([l.sH], b.prototype, "m_nBuildID", 2),
          E([l.sH], b.prototype, "m_strBuildBranch", 2),
          E([l.sH], b.prototype, "postTime", 2),
          E([l.sH], b.prototype, "visibility_state", 2),
          E([l.sH], b.prototype, "broadcaster", 2),
          E([l.sH], b.prototype, "jsondata", 2),
          E([l.sH], b.prototype, "nCommentCount", 2),
          E([l.sH], b.prototype, "nVotesUp", 2),
          E([l.sH], b.prototype, "nVotesDown", 2),
          E([l.sH], b.prototype, "bOldAnnouncement", 2),
          E([l.sH], b.prototype, "announcementClanSteamID", 2),
          E([l.sH], b.prototype, "loadedAllLanguages", 2),
          E([l.sH], b.prototype, "bLoaded", 2),
          E([l.sH], b.prototype, "deleteInProgress", 2),
          E([l.sH], b.prototype, "vecTags", 2),
          E([l.sH], b.prototype, "last_update_steamid", 2),
          E([l.sH], b.prototype, "rtime32_last_modified", 2),
          E([l.sH], b.prototype, "rtime32_last_solr_search_col_updated", 2),
          E([l.sH], b.prototype, "rtime32_last_local_modification", 2),
          E([l.sH], b.prototype, "rtime32_moderator_reviewed", 2),
          E([l.sH], b.prototype, "video_preview_type", 2),
          E([l.sH], b.prototype, "video_preview_id", 2),
          E([l.sH], b.prototype, "m_overrideCurrentDay", 2);
        let K = b;
        function H(s) {
          if (s) return s?.replace(/[()]/g, "\\$&");
        }
      },
      18994: (se, x, d) => {
        d.d(x, {
          $m: () => c.$m,
          QS: () => u,
          Sn: () => c.Sn,
          Wn: () => c.Wn,
          ZI: () => T,
          a4: () => c.a4,
          f_: () => c.f_,
          jD: () => c.jD,
          jn: () => r,
          mj: () => c.mj,
          rp: () => c.rp,
          sQ: () => l,
        });
        var h = d(99412),
          y = d(53906),
          c = d(39829);
        const u = "exploration";
        var l = ((v) => ((v.Random = "r"), (v.Personalized = "p"), v))(l || {});
        function r(v) {
          switch (v) {
            case y.Oh:
              return h.mv5;
            case y._X:
              return h.KH9;
            case y.HD:
              return h.hmR;
            case y.rb:
              return h.R2g;
            default:
              return;
          }
        }
        function T(v) {
          switch (v) {
            case h.mv5:
              return y.Oh;
            case h.KH9:
              return y._X;
            case h.hmR:
              return y.HD;
            default:
              return;
          }
        }
      },
      51746: (se, x, d) => {
        d.d(x, {
          EG: () => l,
          II: () => X,
          Uz: () => C,
          aL: () => v,
          ab: () => c,
          zB: () => Y,
        });
        var h = d(7742),
          y = d(72849);
        function c(p) {
          const f = p.toLowerCase();
          if (f.endsWith(".jpg") || f.endsWith(".jpeg")) return "image/jpeg";
          if (f.endsWith(".png")) return "image/png";
          if (f.endsWith(".gif")) return "image/gif";
          if (f.endsWith(".mp4")) return "video/mp4";
          if (f.endsWith(".webm")) return "video/webm";
          if (f.endsWith(".srt")) return "text/srt";
          if (f.endsWith(".vtt")) return "text/vtt";
          if (f.endsWith(".webp")) return "image/webp";
        }
        function u(p) {
          switch (p) {
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
              p,
            ),
            ".jpg"
          );
        }
        function l(p) {
          switch (p) {
            case y.bg.iS:
              return ".jpg";
            case y.bg.CK:
              return ".gif";
            case y.bg.dU:
              return ".png";
            case y.bg.pJ:
              return ".webm";
            case y.bg.nn:
              return ".mp4";
            case y.bg.pi:
              return ".srt";
            case y.bg.k7:
              return ".vtt";
            case y.bg.wD:
              return ".webp";
          }
        }
        function r(p) {
          const f = (0, h.x0)(),
            w = new Image();
          return (
            (w.onload = () => f.resolve(w)),
            (w.onerror = ($) => {
              console.error("LoadImage failed to load the image, details", $),
                f.resolve(void 0);
            }),
            (w.src = p),
            f.promise
          );
        }
        function T(p) {
          const f = (0, h.x0)(),
            w = document.createElement("video");
          return (
            (w.preload = "metadata"),
            w.addEventListener("loadedmetadata", () => f.resolve(w)),
            (w.onerror = ($) => {
              console.error("LoadVideo failed to load the video, details", $),
                f.resolve(void 0);
            }),
            (w.src = p),
            f.promise
          );
        }
        function v(p) {
          return p.startsWith("image/");
        }
        function C(p) {
          return p.startsWith("video/");
        }
        function V(p, f) {
          return f ? T(p) : r(p);
        }
        async function Y(p, f) {
          if (f) return T(URL.createObjectURL(p));
          {
            const w = (0, h.x0)(),
              $ = new FileReader();
            ($.onload = () => w.resolve($.result ?? void 0)),
              ($.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  $.error,
                ),
                  w.resolve(void 0);
              }),
              $.readAsDataURL(p);
            const N = await w.promise;
            return N ? r(N.toString()) : void 0;
          }
        }
        function X(p) {
          return p
            ? p instanceof HTMLVideoElement
              ? { width: p.videoWidth, height: p.videoHeight }
              : { width: p.width, height: p.height }
            : { width: 0, height: 0 };
        }
        function ee(p, f) {
          if (!f) return p;
          const w = new Set([
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
          for (const $ of f)
            w.has($.name.toLowerCase()) || (p[$.name] = $.value);
          return p;
        }
      },
      71684: (se, x, d) => {
        d.d(x, { JS: () => u, rG: () => T });
        var h = d(99412),
          y = d(39905);
        function c(v) {
          return v !== k_EClanEventType_NewsEvent;
        }
        function u(v) {
          switch (v) {
            case h.Aqr:
            case h.I5b:
            case h.jO6:
            case h.Y3j:
            case h.Bb7:
            case h.TiP:
            case h.EPt:
            case h.E3D:
            case h.L0X:
            case h.KDJ:
            case h.Fa4:
            case h.Aav:
            case h.SRb:
            case h.HRy:
            case h.C$4:
            case h.zA:
            case h.y6:
            case h.hGl:
            case h.WNR:
            case h.pIh:
            case h.izQ:
            case h.LOv:
            case h.zcX:
            case h.DRF:
            case h.HFK:
              return !0;
          }
          return !1;
        }
        function l(v, C) {
          return !(
            v == k_EClanEventType_SmallUpdateEvent ||
            v == k_EClanEventType_CreatorHome ||
            (C && C.indexOf("curator") != -1)
          );
        }
        function r(v) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(v);
        }
        function T(v) {
          let C = "#PartnerEvent_" + v,
            V = y.Z.Localize(C);
          return V != C ? V : y.Z.Localize("#PartnerEvent_Other");
        }
      },
    },
  ]);
})();
