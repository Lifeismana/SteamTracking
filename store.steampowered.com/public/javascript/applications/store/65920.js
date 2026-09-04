/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [65920],
    {
      15860: (Z, q, s) => {
        "use strict";
        s.d(q, { L: () => G, c: () => D });
        var e = s(27386),
          L = s(76617),
          A = s(58632),
          w = s.n(A);
        function D(z, y) {
          return new (w())(
            async (p) => {
              const _ = [...p],
                E = await e.xtC.GetPlayerLinkDetails(z, { steamids: _ }),
                R = new Map();
              return (
                E.Body()
                  .accounts()
                  .forEach((v) => {
                    const I = v.toObject();
                    R.set(I.public_data.steamid, I);
                  }),
                _.map((v) => R.get(v) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...y },
          );
        }
        function G(z) {
          return (0, L.V)("PlayerLinkDetails", () => D(z));
        }
      },
      76617: (Z, q, s) => {
        "use strict";
        s.d(q, { V: () => y });
        function e(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        }
        function L(p) {
          if (!e(p)) return !1;
          const _ = p.constructor;
          if (typeof _ > "u") return !0;
          const E = _.prototype;
          return !(
            !e(E) || !Object.prototype.hasOwnProperty.call(E, "isPrototypeOf")
          );
        }
        function A(...p) {
          return JSON.stringify(p, (_, E) => {
            if (L(E)) {
              const R = {};
              return (
                Object.keys(E)
                  .sort()
                  .forEach((v) => {
                    R[v] = E[v];
                  }),
                R
              );
            }
            return E;
          });
        }
        var w = s(90626),
          D = s(7850);
        const G = (0, w.createContext)({ instances: {}, factories: {} });
        function z(p) {
          const { name: _, fnFactory: E, children: R } = p,
            v = React.useContext(G),
            [I] = useState({}),
            f = useMemo(
              () => ({
                instances: I,
                factories: { ...v.factories, [_]: E },
                parent: v,
              }),
              [I, _, v],
            );
          return jsx(G.Provider, { value: f, children: R });
        }
        function y(p, _) {
          const E = (0, w.useContext)(G),
            R = typeof p == "string" ? p : A(...p);
          let v = E;
          for (; v; ) {
            if (R in v.instances) return v.instances[R];
            if (R in v.factories) break;
            v = v.parent;
          }
          const f = (v?.factories[R] ?? _)();
          return ((v ?? E).instances[R] = f), f;
        }
      },
      25279: (Z, q, s) => {
        "use strict";
        s.d(q, {
          Ek: () => ne,
          Fj: () => te,
          Ho: () => B,
          Kf: () => b,
          N_: () => Ce,
          XY: () => Be,
          dM: () => O,
          qj: () => d,
          s4: () => le,
          vz: () => Se,
          yu: () => u,
        });
        var e = s(72849);
        const L = 622,
          A = 1920,
          w = 450,
          D = 800,
          G = 460,
          z = 2108,
          y = 300,
          p = 800,
          _ = 300,
          E = 644,
          R = 337,
          v = 155,
          I = 433,
          f = 199,
          h = ["app_header_capsule", "app_main_capsule"],
          r = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          M = ["takeunder_art", "takeunder_mobile_art"],
          P = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          C = ["marketingmessage_art", "marketingmessage_art_2"],
          n = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          i = ["spotlight_art_hero"],
          a = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ...[...h, ...r, ...M, ...P, ...C, ...n, ...i],
          ];
        function d(Y) {
          return Array.isArray(Y) ? Y[0] : Y;
        }
        function O(Y) {
          const Q = Array.isArray(Y) ? Y : [Y];
          return Math.min(...Q);
        }
        function b(Y, Q) {
          return Q === void 0 ? d(Y) : Array.isArray(Y) ? Y[Q] : Y;
        }
        const K = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD],
          N = [e.bg.iS, e.bg.dU, e.bg.CK],
          m = [e.bg.iS, e.bg.dU],
          B = [e.bg.pJ, e.bg.nn],
          W = [e.bg.pi, e.bg.k7],
          X = [e.bg.iS, e.bg.dU, e.bg.CK, e.bg.wD, e.bg.pJ, e.bg.nn],
          te = {
            capsule: { width: D, height: w, rgAcceptableTypes: m },
            marketingmessage_art_2_eventcapsule: {
              width: D,
              height: w,
              rgAcceptableTypes: m,
            },
            marketingmessage_art_eventcapsule: {
              width: D,
              height: w,
              rgAcceptableTypes: m,
            },
            spotlight: { width: z, height: G, rgAcceptableTypes: m },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: m,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: m,
            },
            localized_title_image: {
              width: A,
              height: L,
              rgAcceptableTypes: m,
            },
            background: { width: A, height: L, rgAcceptableTypes: m },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            email_full: { width: p, height: y, rgAcceptableTypes: m },
            email_centered: { width: E, height: _, rgAcceptableTypes: m },
            broadcast_left: {
              width: [f, v],
              height: [I, R],
              rgAcceptableTypes: m,
            },
            broadcast_right: {
              width: [f, v],
              height: [I, R],
              rgAcceptableTypes: m,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: N,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: N,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: N,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: N,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: m,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: m,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: m,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: m,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: m,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: m,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: m,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: N,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: N,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: K,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: m,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [e.bg.k7, e.bg.pi],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [e.bg.iS, e.bg.dU],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: m,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: X,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: m,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: m,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: m,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: m,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: m,
            },
            spotlight_art: { width: 306, height: 260, rgAcceptableTypes: N },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: m,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: N,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: N,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: N,
            },
            takeover_art: { width: 1850, height: 450, rgAcceptableTypes: N },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: N,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.pJ],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [e.bg.nn],
            },
            takeunder_art: { width: 1200, height: 190, rgAcceptableTypes: N },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: N,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: m,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: m,
            },
          };
        function ne(Y, Q, _e, ae) {
          let se = null;
          if (Array.isArray(_e)) {
            if (
              ((se = _e
                .map((ge, me) => (Y === ge ? me : void 0))
                .filter((ge) => ge !== void 0)),
              se.length <= 0)
            )
              return !1;
          } else if (Y !== _e) return !1;
          if (Array.isArray(ae)) {
            const ge = ae
              .map((me, He) => (Q === me ? He : void 0))
              .filter((me) => me !== void 0);
            if (
              ge.length <= 0 ||
              (se?.length && !ge.some((me) => se.includes(me)))
            )
              return !1;
          } else if (Q !== ae) return !1;
          return !0;
        }
        function u(Y, Q, _e, ae) {
          const se = te[_e];
          return se
            ? se.bDisableEnforceDimensions
              ? !!ae
              : ne(Y, Q, se.width, se.height)
            : !1;
        }
        function le(Y, Q, _e) {
          const ae = te[_e];
          if (!ae) return !1;
          if (ae.bDisableEnforceDimensions) return !0;
          if (Array.isArray(ae.width)) {
            if (ae.width.filter((se) => Y < se).length == ae.width.length)
              return !1;
          } else if (Y < ae.width) return !1;
          if (Array.isArray(ae.height)) {
            if (ae.height.filter((se) => Q < se).length == ae.height.length)
              return !1;
          } else if (Q < ae.height) return !1;
          return !0;
        }
        function Be(Y) {
          const Q = te[Y];
          return (
            Q.rgAcceptableTypes.includes(e.bg.k7) ||
            Q.rgAcceptableTypes.includes(e.bg.pi)
          );
        }
        function Se(Y, Q) {
          return Q.filter((_e) => Ce(Y, _e));
        }
        function Ce(Y, Q) {
          return te[Q].rgAcceptableTypes.includes(Y);
        }
      },
      9472: (Z, q, s) => {
        "use strict";
        s.d(q, { o: () => z, q: () => y });
        var e = s(14947),
          L = s(72849),
          A = s(6658),
          w = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          G = (p, _, E, R) => {
            for (
              var v = R > 1 ? void 0 : R ? D(_, E) : _, I = p.length - 1, f;
              I >= 0;
              I--
            )
              (f = p[I]) && (v = (R ? f(_, E, v) : f(v)) || v);
            return R && v && w(_, E, v), v;
          };
        function z(p) {
          return p == "waiting" || p == "uploading" || p == "processing";
        }
        class y {
          m_originalSize = { width: 0, height: 0 };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(_, E, R, v, I) {
            (0, e.Gn)(this),
              (this.file = _),
              (this.filename = E),
              (this.fileType = (0, A.yh)(E) ?? L.bg.w3),
              (this.language = R),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = I),
              (this.height = I.height),
              (this.width = I.width),
              (this.m_originalDataUrl = v),
              (this.dataUrl = v);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        G([e.sH], y.prototype, "dataUrl", 2),
          G([e.sH], y.prototype, "width", 2),
          G([e.sH], y.prototype, "height", 2),
          G([e.sH], y.prototype, "status", 2),
          G([e.sH.ref], y.prototype, "message", 2),
          G([e.sH], y.prototype, "language", 2);
      },
      75909: (Z, q, s) => {
        "use strict";
        s.d(q, { bT: () => b, zO: () => K });
        var e = s(99412),
          L = s(71742),
          A = s(64868),
          w = s(41735),
          D = s.n(w),
          G = s(14947),
          z = s(90626),
          y = s(25279),
          p = s(53424),
          _ = s(34592),
          E = s(27066),
          R = s(82734),
          v = s(18210),
          I = s(3166),
          f = s(51746),
          h = s(29630),
          r = s(64),
          M = s(38410),
          P = Object.defineProperty,
          C = Object.getOwnPropertyDescriptor,
          n = (N, m, B, W) => {
            for (
              var X = W > 1 ? void 0 : W ? C(m, B) : m, te = N.length - 1, ne;
              te >= 0;
              te--
            )
              (ne = N[te]) && (X = (W ? ne(m, B, X) : ne(X)) || X);
            return W && X && P(m, B, X), X;
          };
        function i(N, m, B) {
          const W = (0, y.Kf)(m.width, B),
            X = (0, y.Kf)(m.height, B);
          return {
            sKey: `${N}_${W}x${X}`,
            width: W,
            height: X,
            bEnforceDimensions: !m.bDisableEnforceDimensions,
            artworkType: N,
            bHiddenFromDropdown: N === "hero",
            bDeprecated: (B ?? 0) >= 1,
            fnGetLabelText() {
              return this.artworkType == "spotlight"
                ? (0, v.we)("#EventEditor_ArtworkType_store_spotlight")
                : (0, v.we)("#EventEditor_ArtworkType_" + this.artworkType);
            },
          };
        }
        function o(N) {
          return N?.flatMap((m) => {
            const B = y.Fj[m];
            if (
              ((0, L.wT)(!!B, `Artwork Type not in Map ${m}`),
              typeof B.width == "number" && typeof B.height == "number")
            )
              return [i(m, B)];
            {
              let W = Math.max(
                Array.isArray(B.width) ? B.width.length : 1,
                Array.isArray(B.height) ? B.height.length : 1,
              );
              return Array.from({ length: W }, (X, te) => i(m, B, te));
            }
          });
        }
        class a extends M.Vr {
          m_filesToUpload = G.sH.array();
          m_filesCompleted = G.sH.array();
          m_clanImagesV2;
          m_clanSteamID;
          m_rgImageOptions;
          m_localizedImageGroupPrimaryImage;
          m_lastError = void 0;
          constructor(m, B, W, X) {
            super(),
              (0, G.Gn)(this),
              (this.m_clanSteamID = m),
              (this.m_rgImageOptions = o(B)),
              (this.m_localizedImageGroupPrimaryImage = W),
              (this.m_clanImagesV2 = X ?? !1);
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          async AddImage(m, B = e.Bhc) {
            const { language: W } = (0, M.jj)(m.name, B);
            return this.AddImageForLanguage(m, W);
          }
          async AddImageForLanguage(m, B) {
            if (!(0, f.aL)(m.type) && !(I.iA.is_support && (0, f.Uz)(m.type)))
              return !1;
            const W = await (0, f.zB)(m, (0, f.Uz)(m.type));
            if (!W) return !1;
            const X = new r.M7(
              m,
              m.name,
              B,
              this.m_rgImageOptions,
              W.src,
              (0, f.II)(W),
              W,
              this.m_localizedImageGroupPrimaryImage,
            );
            return (this.m_filesToUpload = [...this.m_filesToUpload, X]), !0;
          }
          async AddExistingClanImage(m, B = e.Bhc) {
            const W = h.zU.GetHashAndExt(m);
            if (!W) return !1;
            const X = h.zU.GenerateEditableURLFromHashAndExt(
                this.m_clanSteamID,
                W,
              ),
              te = await D()({ url: X, method: "GET", responseType: "blob" }),
              ne = (0, R.pE)(te.data, m.file_name);
            return await this.AddImage(ne, B);
          }
          DeleteUploadImageByIndex(m) {
            this.m_filesToUpload.splice(m, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]);
          }
          DeleteUploadImage(m) {
            let B = this.m_filesToUpload.findIndex(
              (W) => m.file == W.file && m.uploadTime == W.uploadTime,
            );
            B >= 0 && this.DeleteUploadImageByIndex(B);
          }
          ClearImages() {
            this.m_filesToUpload = G.sH.array();
          }
          GetFilesUploaded() {
            return this.m_filesCompleted;
          }
          GetLastErrorFile() {
            return this.m_lastError;
          }
          GetCompletedFiles() {
            return this.m_filesCompleted.length;
          }
          GetTotalFiles() {
            return this.m_filesToUpload.length;
          }
          GetFilesToUpload() {
            return this.m_filesToUpload.map((m) => m.file);
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          BHasError() {
            return this.m_lastError != null;
          }
          BAllDone() {
            return (
              this.m_filesCompleted.length > 0 &&
              this.m_filesCompleted.length == this.m_filesToUpload.length
            );
          }
          BIsFileCompleted(m) {
            return this.m_filesCompleted.indexOf(m) != -1;
          }
          RetryAllFailedUploads() {
            this.CancelAllUploads(), this.UploadAllImages();
          }
          async handleUploadRefresh(m) {
            await p.pU.LoadClanImages(this.m_clanSteamID, !0, m);
          }
          BGetUploadsAreInSerial() {
            return !1;
          }
          async UploadSingleImage(m, B, W, X) {
            const te = m.file,
              ne = m.GetCurrentImageOption(),
              u = m.GetResizeDimension(),
              le = new FormData();
            le.append("clanimage", te, B),
              le.append("sessionid", (0, I.KC)()),
              this.m_clanImagesV2 && le.append("clan_images_v2", "1"),
              ne?.artworkType && le.append("arttype", ne.artworkType),
              u &&
                u.length > 0 &&
                le.append(
                  "resize",
                  u.map((se) => se.width + "x" + se.height).join(","),
                );
            let Be = "/uploadimage/";
            const Se = this.m_localizedImageGroupPrimaryImage;
            Se &&
              ((Be = "/ajaxuploadlocalizedimage/"),
              le.append("origimagehash", Se.image_hash),
              Se.thumbnail_hash && le.append("thumbhash", Se.thumbnail_hash),
              le.append("extension", "" + Se.file_type),
              le.append("language", "" + W));
            const Ce = B.split(".").pop()?.toLocaleLowerCase();
            (Ce == "webm" || Ce == "mp4") &&
              (le.append("video_width", "" + m.width),
              le.append("video_height", "" + m.height));
            let Y =
                I.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                Be,
              Q = {
                cancelToken: X,
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              },
              _e,
              ae = !0;
            try {
              (_e = await D().post(Y, le, Q)), this.m_filesCompleted.push(te);
            } catch (se) {
              (ae = !1),
                (this.m_lastError = {
                  file: te,
                  status: se.response ? se.response.status : 500,
                  message: (0, _.H)(se).strErrorMsg,
                }),
                (_e = se.response);
            }
            return (
              Se || (await this.handleUploadRefresh(X)),
              { bSuccess: ae, result: _e.data }
            );
          }
        }
        n([G.sH], a.prototype, "m_filesToUpload", 2),
          n([G.sH], a.prototype, "m_filesCompleted", 2),
          n([G.sH], a.prototype, "m_lastError", 2),
          n([E.o], a.prototype, "AddImage", 1),
          n([E.o], a.prototype, "AddExistingClanImage", 1),
          n([E.o], a.prototype, "DeleteUploadImageByIndex", 1),
          n([E.o], a.prototype, "DeleteUploadImage", 1),
          n([E.o], a.prototype, "ClearImages", 1);
        class d extends a {
          constructor(m, B, W) {
            super(m, B, W, !1);
          }
        }
        class O extends a {
          constructor(m, B, W) {
            super(m, B, W, !0);
          }
        }
        async function b(N, m, B, W, X) {
          let te =
              I.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              m.ConvertTo64BitString() +
              "/resizeimage/",
            ne = new FormData();
          return (
            ne.append("imagehash", B),
            ne.append("extension", W),
            ne.append(
              "resize",
              X.map((le) => le.width + "x" + le.height).join(","),
            ),
            ne.append("sessionid", (0, I.KC)()),
            (await D().post(te, ne, { cancelToken: N })).data.count
          );
        }
        function K(N, m, B) {
          const W = (0, A.wm)(m instanceof Array ? m : [m]),
            X = N.ConvertTo64BitString();
          return z.useMemo(() => new d(N, W, B), [X, W]);
        }
      },
      64: (Z, q, s) => {
        "use strict";
        s.d(q, { K_: () => P, M7: () => M });
        var e = s(14947),
          L = s(25279),
          A = s(18210),
          w = s(9472),
          D = s(21254),
          G = s(51746),
          z = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          p = (n, i, o, a) => {
            for (
              var d = a > 1 ? void 0 : a ? y(i, o) : i, O = n.length - 1, b;
              O >= 0;
              O--
            )
              (b = n[O]) && (d = (a ? b(i, o, d) : b(d)) || d);
            return a && d && z(i, o, d), d;
          };
        const _ = 960,
          E = 311,
          R = 480,
          v = 156;
        class I extends w.q {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(i, o, a, d, O, b) {
            super(i, o, a, O, b), (0, e.Gn)(this), (this.m_rgImageOptions = d);
          }
          IsValidAssetType(i, o) {
            let a = 0,
              d = 0,
              O = !1,
              b =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (u) => u.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (i) (a = i.width), (d = i.height), (O = !0);
            else if (this.GetCurrentImageOption()) {
              const u = L.Fj[this.GetCurrentImageOption().artworkType];
              u &&
                ((a = u.width),
                (d = u.height),
                (O = !u.bDisableEnforceDimensions));
            }
            const K = this.width >= (0, L.dM)(a) && this.height >= (0, L.dM)(d),
              N = O ? (0, L.Ek)(this.width, this.height, a, d) : K,
              m = o && o != this.fileType,
              B =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, L.vz)(
                      this.fileType,
                      this.m_rgImageOptions?.map((u) => u.artworkType) || [],
                    ).length == 0
                  : !1,
              W = !!(0, D.t)(this.fileType);
            let X = "",
              te = !1,
              ne;
            return (
              b
                ? B
                  ? (X = (0, A.we)("#ImageUpload_InvalidFileType"))
                  : m
                    ? (X = (0, A.we)(
                        "#ImageUpload_InvalidFormat",
                        (0, G.EG)(o) ?? "",
                      ))
                    : !N && !W
                      ? (X = (0, A.we)(
                          "#ImageUpload_InvalidResolution",
                          (0, L.qj)(a),
                          (0, L.qj)(d),
                        ))
                      : K
                        ? !N && W
                          ? ((X = (0, A.we)(
                              "#ImageUpload_InvalidDimensions",
                              (0, L.qj)(a),
                              (0, L.qj)(d),
                            )),
                            (te = !0))
                          : ((Array.isArray(a) && this.width != (0, L.qj)(a)) ||
                              (Array.isArray(d) &&
                                this.height != (0, L.qj)(d))) &&
                            ((ne = ne ?? []),
                            ne.push(
                              (0, A.we)(
                                "#ImageUpload_PreferredDimension",
                                (0, L.qj)(a),
                                (0, L.qj)(d),
                              ),
                            ))
                        : (X = (0, A.we)(
                            "#ImageUpload_TooSmall",
                            (0, L.qj)(a),
                            (0, L.qj)(d),
                          ))
                : (X = (0, A.we)("#ImageUpload_InvalidFormatSelected")),
              {
                error: X,
                warnings: ne,
                needsCrop: te,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const i = (0, L.vz)(
              this.fileType,
              this.m_rgImageOptions?.map((a) => a.artworkType),
            );
            let o = C(this.width, this.height, i, !1);
            if ((o === void 0 && (o = C(this.width, this.height, i, !0)), o)) {
              const a = this.m_rgImageOptions.find(
                (d) =>
                  d.artworkType == o &&
                  (!d.bEnforceDimensions ||
                    (d.width == this.width && d.height == this.height)),
              );
              if (a) return a;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(i) {
            (this.m_currentImageOption = i),
              (this.m_currentImageOptionKey = i?.sKey);
          }
        }
        p([e.sH], I.prototype, "m_currentImageOption", 2),
          p([e.sH], I.prototype, "m_currentImageOptionKey", 2);
        class f extends I {
          video;
          constructor(i, o, a, d, O, b, K) {
            super(i, o, a, d, O, b), (this.video = K);
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, L.s4)(
              this.video.videoWidth,
              this.video.videoHeight,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, L.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return L.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class h extends I {
          constructor(i, o, a, d) {
            super(i, o, a, d, URL.createObjectURL(i), { width: 0, height: 0 });
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, L.XY)(i.artworkType);
          }
          FileTypeMatchesImageTypes(i) {
            return (0, L.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return L.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function r(n) {
          const i = n.split(".").pop()?.toLocaleLowerCase();
          return i == "webm" || i == "mp4";
        }
        class M extends I {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(i, o, a, d, O, b, K, N) {
            super(i, o, a, d, O, b),
              (0, e.Gn)(this),
              (this.media = K),
              (this.localizedImageGroupPrimaryImage = N);
          }
          IsValidAssetType(i, o) {
            return (
              (o = o ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(i, o)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(i) {
            return (0, L.s4)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              i.artworkType,
            );
          }
          FileTypeMatchesImageTypes(i) {
            return (0, L.N_)(this.fileType, i.artworkType);
          }
          BIsVideo() {
            return L.Ho.includes(this.fileType);
          }
          GetResizeDimension() {
            return P(this.GetCurrentImageOption()?.artworkType);
          }
        }
        p([e.sH], M.prototype, "bCropped", 2);
        function P(n) {
          if (n === "background")
            return [
              { width: _, height: E },
              { width: R, height: v },
            ];
          if (n === "capsule")
            return [
              {
                width: (0, L.qj)(L.Fj[n].width) / 2,
                height: (0, L.qj)(L.Fj[n].height) / 2,
              },
            ];
          if (n === "spotlight")
            return [
              {
                width: (0, L.qj)(L.Fj[n].width) / 2,
                height: (0, L.qj)(L.Fj[n].height) / 2,
              },
            ];
        }
        function C(n, i, o, a = !1) {
          if (o) {
            for (let d of o)
              if (a ? (0, L.s4)(n, i, d) : (0, L.yu)(n, i, d)) return d;
          }
        }
      },
      38410: (Z, q, s) => {
        "use strict";
        s.d(q, { PD: () => E, Vr: () => _, jj: () => R });
        var e = s(32093),
          L = s(99412),
          A = s(18210),
          w = s(41735),
          D = s.n(w);
        class G {}
        function z(v, I, f) {
          const h = v.filter((r) => {
            const M = r.IsValidAssetType(I, f);
            return r.status === "pending" && !M.error && !M.needsCrop;
          });
          return (
            h.forEach((r) => {
              (r.status = "waiting"), (r.message = "");
            }),
            h
          );
        }
        async function y(v, I, f, h, r) {
          const M = z(v, f, h),
            P = [];
          for (const C of M) {
            C.status = "uploading";
            const n = await I(C, C.filename, C.language ?? L.xPp, r);
            (C.status = n.bSuccess ? "success" : "failed"),
              (C.message =
                !n.bSuccess && n.elErrorMessage ? n.elErrorMessage : ""),
              P.push({
                bSuccess: n.bSuccess,
                image: C,
                uploadResult: n.result,
              });
          }
          return P;
        }
        async function p(v, I, f, h, r, M) {
          const P = z(v, h, r),
            C = [];
          let n = 0;
          const i = async () => {
              for (; n < P.length; ) {
                const a = n++,
                  d = P[a];
                d.status = "uploading";
                const O = await f(d, d.filename, d.language ?? L.xPp, M);
                (d.status = O.bSuccess ? "success" : "failed"),
                  (d.message =
                    !O.bSuccess && O.elErrorMessage ? O.elErrorMessage : ""),
                  (C[a] = { image: d, uploadResult: O });
              }
            },
            o = Array.from({ length: Math.floor(I) }, () => i());
          return (
            await Promise.all(o),
            C.map((a) => ({
              bSuccess: a.uploadResult.bSuccess,
              image: a.image,
              uploadResult: a.uploadResult.result,
            }))
          );
        }
        class _ extends G {
          m_cancel = void 0;
          async UploadAllImages(I, f) {
            this.m_cancel = D().CancelToken.source();
            const h = this.BGetUploadsAreInSerial() ? 1 : 4;
            let r;
            const M = this.UploadSingleImage.bind(this);
            return (
              h > 1
                ? (r = await p(
                    this.GetUploadImages(),
                    h,
                    M,
                    I,
                    f,
                    this.m_cancel.token,
                  ))
                : (r = await y(
                    this.GetUploadImages(),
                    M,
                    I,
                    f,
                    this.m_cancel.token,
                  )),
              r
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, A.we)("#ImageUpload_CancelRequest"));
          }
        }
        function E(v, I, f) {
          if (((v == null || v == null) && (v = I), !f || f.length === 0))
            return v;
          for (const h of f) if (A.A0.IsELanguageValidInRealm(v, h)) return v;
          for (const h of f) if (A.A0.IsELanguageValidInRealm(I, h)) return I;
          return f.includes(e.TU.k_ESteamRealmGlobal) ? L.Bhc : L.ZLm;
        }
        function R(v, I = L.Bhc) {
          let f = v.lastIndexOf(".");
          f != -1 && (v = v.slice(0, f).toLowerCase());
          let h = null,
            r = 0;
          v.endsWith("korean") && ((h = L.Pn1), (r = 6));
          for (let P = L.Bhc; P < L.bP9; ++P) {
            const C = (0, L.wwZ)(P);
            if (C.length <= r) continue;
            if (v.endsWith(C) && v.length > C.length + 2) {
              const i = v[v.length - C.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(i) || ((h = P), (r = C.length));
            }
            const n = (0, L.LgB)(P);
            n.length <= r || (v.endsWith(n) && ((h = P), (r = n.length)));
          }
          const M = (P) => P.replace(/[\s_-]+$/g, "");
          return {
            language: h ?? I,
            baseFilename: r > 0 ? M(v.substring(0, v.length - r)) : v,
          };
        }
      },
      53424: (Z, q, s) => {
        "use strict";
        s.d(q, { mr: () => P, n9: () => M, pU: () => r });
        var e = s(72604),
          L = s(41735),
          A = s.n(L),
          w = s(14947),
          D = s(90626),
          G = s(76559),
          z = s(47689),
          y = s(71742),
          p = s(8323),
          _ = s(30096),
          E = s(3166),
          R = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          I = (C, n, i, o) => {
            for (
              var a = o > 1 ? void 0 : o ? v(n, i) : n, d = C.length - 1, O;
              d >= 0;
              d--
            )
              (O = C[d]) && (a = (o ? O(n, i, a) : O(a)) || a);
            return o && a && R(n, i, a), a;
          };
        class f {
          success;
          images;
        }
        class h {
          constructor() {
            (0, w.Gn)(this);
          }
          m_mapClanToImages = new Map();
          m_mapClanImageLoadPromises = new Map();
          m_imageListChangeCallback = new Map();
          m_mapClanImageLoadState = new Map();
          m_mapImageIDToResolution = new Map();
          BHasImageResolution(n) {
            return this.m_mapImageIDToResolution.has(n.imageid);
          }
          GetImageResolution(n) {
            return this.m_mapImageIDToResolution.get(n.imageid);
          }
          SetImageResolution(n, i) {
            this.m_mapImageIDToResolution.set(n.imageid, i);
          }
          GetImageListCallbackForClanAccountIDInternal(n) {
            return (
              this.m_imageListChangeCallback.has(n) ||
                this.m_imageListChangeCallback.set(n, new p.lu()),
              this.m_imageListChangeCallback.get(n)
            );
          }
          GetImageListCallbackForClanAccountID(n) {
            return this.GetImageListCallbackForClanAccountIDInternal(n);
          }
          m_vecClanImageDragListener = new Array();
          AddClanImageDragListener(n) {
            this.m_vecClanImageDragListener.indexOf(n) == -1 &&
              this.m_vecClanImageDragListener.push(n);
          }
          RemoveClanImageDragListener(n) {
            let i = this.m_vecClanImageDragListener.indexOf(n);
            i != -1 && this.m_vecClanImageDragListener.splice(i, 1);
          }
          GetClanImageDragListener() {
            return this.m_vecClanImageDragListener;
          }
          BHasLoadedClanImages(n) {
            return this.m_mapClanToImages.has(n.GetAccountID());
          }
          async LoadClanImages(n, i, o) {
            const a = n.GetAccountID();
            if (i || !this.m_mapClanImageLoadPromises.has(a)) {
              const d = this.InternalLoadClanImages(n, i, o);
              this.m_mapClanImageLoadPromises.set(a, d);
            }
            return this.m_mapClanImageLoadPromises.get(a);
          }
          async InternalLoadClanImages(n, i, o) {
            let a = n.GetAccountID();
            if (
              ((0, y.wT)(n && a != 0, "ClanSteamID missing:" + n),
              n && (!this.m_mapClanToImages.has(a) || i))
            ) {
              let d = {},
                O;
              const b =
                E.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                n.ConvertTo64BitString() +
                "/getimages/";
              if (
                ((O = await A().get(b, {
                  params: d,
                  withCredentials: !0,
                  cancelToken: o,
                })),
                O)
              ) {
                for (let K of O.data.images) K.clanAccountID = a;
                (0, w.h5)(() => {
                  this.m_mapClanImageLoadState.set(a, { loaded: !0 }),
                    this.m_mapClanToImages.set(a, O.data.images),
                    this.GetImageListCallbackForClanAccountIDInternal(
                      a,
                    ).Dispatch(O.data.images);
                });
              }
            }
            return this.m_mapClanToImages.get(a);
          }
          GetLoadState(n) {
            return this.m_mapClanImageLoadState.get(n.GetAccountID());
          }
          GetClanImages(n) {
            return this.GetClanImagesByAccount(n.GetAccountID());
          }
          GetClanImagesByAccount(n) {
            let i = this.m_mapClanToImages.get(n);
            return i || new Array();
          }
          GetFilteredClanImages(n, i) {
            let o = r.GetClanImages(n);
            return this.GetFilteredClanImagesList(o, i);
          }
          GetFilteredClanImagesList(n, i) {
            if (i && i.trim().length > 0) {
              i = i.trim().toLowerCase();
              let o = new Array();
              for (let a of n)
                a.file_name &&
                  a.file_name.toLowerCase().indexOf(i) >= 0 &&
                  o.push(a);
              return o;
            }
            return n;
          }
          GetClanImageByID(n, i) {
            let o = n.GetAccountID(),
              a = this.m_mapClanToImages.get(o);
            return a ? a.find((d) => d.imageid == i) : void 0;
          }
          GetClanImageByURL(n, i) {
            let o = n.GetAccountID(),
              a = this.m_mapClanToImages.get(o);
            return a ? a.find((d) => d.thumb_url == i || d.url == i) : void 0;
          }
          GetClanImageByFile(n, i) {
            let o = n.GetAccountID(),
              a = this.m_mapClanToImages.get(o);
            return a ? a.find((d) => d.file_name == i.name) : void 0;
          }
          GetClanImageByImageHash(n, i) {
            let o = n.GetAccountID(),
              a = this.m_mapClanToImages.get(o);
            return a ? a.find((d) => d.image_hash == i) : void 0;
          }
          async DeleteClanImageByID(n, i) {
            let o = { sessionid: (0, E.KC)(), imageid: i },
              a = n.GetAccountID(),
              d = await A().get(
                E.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  n.ConvertTo64BitString() +
                  "/deleteimage/",
                { params: o },
              );
            if (!d || d.status != 200 || d.data.success != e.R) return d.data;
            let O = this.m_mapClanToImages.get(a);
            if (O) {
              let b = O.findIndex((K, N, m) => K.imageid == i);
              b >= 0 &&
                (O.splice(b, 1),
                this.GetImageListCallbackForClanAccountIDInternal(a).Dispatch([
                  ...O,
                ]));
            }
            return d.data;
          }
          async DeleteClanImage(n, i) {
            return this.DeleteClanImageByID(n, i.imageid);
          }
        }
        I([w.sH], h.prototype, "m_mapClanToImages", 2),
          I([w.sH], h.prototype, "m_mapClanImageLoadState", 2);
        const r = new h();
        function M(C) {
          const [n, i] = (0, D.useState)(r.GetClanImagesByAccount(C));
          return (0, _.hL)(r.GetImageListCallbackForClanAccountID(C), i), n;
        }
        function P(C) {
          const n = G.b.InitFromClanID(C),
            i = (0, z.m)("useLoadClanImages"),
            [o, a] = (0, D.useState)(() => r.BHasLoadedClanImages(n));
          return (
            (0, D.useEffect)(() => {
              const d = G.b.InitFromClanID(C);
              return (
                r.BHasLoadedClanImages(d) ||
                  r.LoadClanImages(d, !1, i.token).then(() => a(!0)),
                () => i.cancel()
              );
            }, [C, i]),
            o
          );
        }
      },
      6658: (Z, q, s) => {
        "use strict";
        s.d(q, { yh: () => y });
        var e = s(90626),
          L = s(72849);
        function A(p, _, E = !0) {
          const R = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            p && R.set("imw", Math.round(p).toString()),
            _ && R.set("imh", Math.round(_).toString()),
            !p || !_ || !E
              ? R.set("letterbox", "false")
              : R.set("letterbox", "true"),
            "?" + R.toString()
          );
        }
        const w = null;
        function D(p, _) {
          let E;
          for (let R of w)
            if (
              (E ? (E += ", ") : (E = ""),
              (E += `${p}${A(R, 0)} ${R}w`),
              R >= _)
            )
              break;
          return E;
        }
        function G(p) {
          let {
            src: _,
            orig_width: E,
            orig_height: R,
            sizes: v,
            default_width: I,
            ...f
          } = p;
          v || (v = "95vw"), I || (I = 1024);
          let h = `${_}${A(I, void 0)}`,
            r = D(_, E);
          return React.createElement("img", {
            src: h,
            srcSet: r,
            sizes: v,
            ...f,
          });
        }
        function z(p) {
          const {
            width: _,
            height: E,
            orig_width: R,
            orig_height: v,
            src: I,
            ...f
          } = p;
          let h = I + A(_, E),
            r,
            M = 6;
          if (
            (_ && R && (M = Math.min(M, Math.ceil(R / _))),
            E && v && (M = Math.min(M, Math.ceil(v / E))),
            M)
          )
            for (let P of [2, 4, 6]) {
              if (P > M) break;
              r ? (r += ", ") : (r = ""),
                (r += `${I}${A(_ && _ * P, E && E * P)} ${P}x`);
            }
          return React.createElement("img", { ...f, src: h, srcSet: r });
        }
        function y(p) {
          if (
            (p.indexOf("?") > 0 && (p = p.split("?")[0]),
            p.endsWith(".jpg") || p.endsWith(".jpeg"))
          )
            return L.bg.iS;
          if (p.endsWith(".png")) return L.bg.dU;
          if (p.endsWith(".gif")) return L.bg.CK;
          if (p.endsWith(".mp4")) return L.bg.nn;
          if (p.endsWith(".webm")) return L.bg.pJ;
          if (p.endsWith(".vtt")) return L.bg.k7;
          if (p.endsWith(".srt")) return L.bg.pi;
          if (p.endsWith(".webp")) return L.bg.wD;
        }
      },
      50109: (Z, q, s) => {
        "use strict";
        s.d(q, { E: () => v, O: () => R });
        var e = s(14947),
          L = s(65946),
          A = s(99412),
          w = s(41635),
          D = s(27066),
          G = s(3166),
          z = s(38585),
          y = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          _ = (I, f, h, r) => {
            for (
              var M = r > 1 ? void 0 : r ? p(f, h) : f, P = I.length - 1, C;
              P >= 0;
              P--
            )
              (C = I[P]) && (M = (r ? C(f, h, M) : C(M)) || M);
            return r && M && y(f, h, M), M;
          };
        const E = class Xe {
          m_eCurLang = (0, A.sfN)(G.TS.LANGUAGE);
          m_rgHasData = (0, w.$Y)([], A.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new z.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(f) {
            return this.m_eCurLang != f
              ? ((this.m_eCurLang = f), this.GetCallback().Dispatch(f), !0)
              : !1;
          }
          SetHasLanguage(f) {
            f.forEach((h, r) => {
              this.m_rgHasData[r] != h && (this.m_rgHasData[r] = h);
            });
          }
          BHasLanguageData(f) {
            return this.m_rgHasData[f];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(f) {
            f != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = f);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Xe.s_globalSingletonStore ||
                (Xe.s_globalSingletonStore = new Xe()),
              Xe.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        _([e.sH], E.prototype, "m_eCurLang", 2),
          _([e.sH], E.prototype, "m_rgHasData", 2),
          _([e.sH], E.prototype, "m_bHasLocalizationContext", 2),
          _([D.o], E.prototype, "GetCurEditLanguage", 1),
          _([D.o], E.prototype, "SetCurEditLanguage", 1),
          _([e.XI.bound], E.prototype, "SetHasLanguage", 1),
          _([D.o], E.prototype, "BHasLanguageData", 1);
        let R = E;
        function v() {
          return (0, L.q3)(() => R.Get().GetCurEditLanguage());
        }
      },
      35098: (Z, q, s) => {
        "use strict";
        s.d(q, { DW: () => R, js: () => _, mK: () => r, tb: () => h });
        var e = s(90626),
          L = s(80902),
          A = s(54806),
          w = s(99412),
          D = s(68312),
          G = s(15369),
          z = s(5858),
          y = s(76559),
          p = s(15860);
        function _(n) {
          const i = (0, D.KV)(),
            o = e.useContext(f);
          return (0, L.I)(r(o, i, n));
        }
        function E(n) {
          const i = React.useRef(void 0),
            o = _(n);
          return o.data
            ? o
            : (i.current ||
                (i.current = new CPersonaStateImpl(
                  typeof n == "string"
                    ? new CSteamID(n)
                    : CSteamID.InitFromAccountID(n),
                )),
              { ...o, data: i.current });
        }
        function R(n) {
          const i = (0, D.KV)(),
            o = e.useContext(f);
          return (0, A.E)({ queries: n.map((a) => r(o, i, a)) });
        }
        function v(n) {
          return ReactQueryClient.getQueryData(["PlayerSummary", n]);
        }
        function I(n) {
          const { loadPersonaState: i, children: o } = n,
            a = React.useMemo(() => ({ loadPersonaState: i }), [i]);
          return React.createElement(f.Provider, { value: a }, o);
        }
        const f = e.createContext({
          loadPersonaState: async (n, i) => {
            if (n == null) return null;
            const o = await P(i).load(
              y.b.InitFromAccountID(n).ConvertTo64BitString(),
            );
            return C(y.b.InitFromAccountID(n), o);
          },
        });
        function h() {
          return e.useContext(f);
        }
        function r(n, i, o) {
          const a = typeof o == "string" ? new y.b(o).GetAccountID() : o;
          return {
            queryKey: ["PlayerSummary", a],
            queryFn: () => n.loadPersonaState(a, i),
            enabled: !!a,
          };
        }
        let M;
        function P(n) {
          return (M ??= (0, p.c)(n));
        }
        function C(n, i) {
          let o = new z.Z(n);
          const a = i?.public_data,
            d = i?.private_data;
          return (
            (o.m_bInitialized = !!i),
            (o.m_ePersonaState = d?.persona_state ?? w.cU3),
            (o.m_strAvatarHash = a?.sha_digest_avatar
              ? (0, G.Kx)(a.sha_digest_avatar)
              : z.dV),
            (o.m_strPlayerName = a?.persona_name ?? n.ConvertTo64BitString()),
            (o.m_strAccountName = d?.account_name),
            d?.persona_state_flags &&
              (o.m_unPersonaStateFlags = d?.persona_state_flags),
            d?.game_id && (o.m_gameid = d?.game_id),
            d?.game_server_ip_address &&
              (o.m_unGameServerIP = d?.game_server_ip_address),
            d?.lobby_steam_id && (o.m_game_lobby_id = d?.lobby_steam_id),
            d?.game_extra_info && (o.m_strGameExtraInfo = d?.game_extra_info),
            a?.profile_url && (o.m_strProfileURL = a.profile_url),
            o
          );
        }
      },
      22714: (Z, q, s) => {
        "use strict";
        s.d(q, { A: () => C });
        var e = s(7850),
          L = s(90626),
          A = s(75844),
          w = s(30096),
          D = s(24660),
          G = s(19298),
          z = s(16346),
          y = s(38655),
          p = s(18210),
          _ = s(36707),
          E = s(90024),
          R = s.n(E),
          v = s(75975),
          I = s(71421),
          f = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          r = (n, i, o, a) => {
            for (
              var d = a > 1 ? void 0 : a ? h(i, o) : i, O = n.length - 1, b;
              O >= 0;
              O--
            )
              (b = n[O]) && (d = (a ? b(i, o, d) : b(d)) || d);
            return a && d && f(i, o, d), d;
          };
        const M = 1576780700;
        let P = class extends L.Component {
          OnEmoticonClick(n) {
            const {
                emoticonStore: i,
                strFlairGroupID: o,
                SetUIDisplayPref: a,
                contextOptions: d,
                bShowChatAddons: O,
              } = this.props,
              {
                roomEffectSettings: b,
                onRoomEffectSelected: K,
                onStickerSelected: N,
              } = this.props;
            let m = null;
            if (
              (O && b && K && N
                ? (m = (0, e.jsx)(y.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (B) =>
                      this.props.OnEmoticonSelected(B, !1),
                    roomEffectSettings: b,
                    onRoomEffectSelected: K,
                    onStickerSelected: N,
                  }))
                : o && i.flair_list && i.GetFlairListByGroupID(o)?.length > 0
                  ? (m = (0, e.jsx)(y.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (m = (0, e.jsx)(y.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, z.lX)(
                m,
                n,
                d || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && a)
            ) {
              let B = this.GetNewestIndicatorTime();
              (!B || B < M) && (B = M), a("rtLastAckedNewEmoticons", B);
            }
          }
          GetNewestIndicatorTime() {
            let n = this.props.emoticonStore,
              i = Number.MIN_SAFE_INTEGER,
              o = n.GetTimeReceivedNewestEmoticon();
            o && (i = o);
            let a = n.GetTimeReceivedForStickerOrEffect();
            return (
              (i = Math.max(a, i)), i > Number.MIN_SAFE_INTEGER ? i : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: n } = this.props;
            let i = this.GetNewestIndicatorTime();
            return !n || n < M ? !0 : i && (!n || n < i);
          }
          render() {
            const {
              disabled: n,
              className: i,
              ttip: o,
              useImg: a,
            } = this.props;
            let d = [i],
              O = !1;
            return (
              n ? d.push("disabled") : this.BHaveUnseenEmoticons() && (O = !0),
              o && d.push("ttip"),
              a
                ? (0, e.jsx)(G.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, p.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, e.jsx)(I.he, {
                      toolTipContent: o,
                      children: (0, e.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, _.A)(...d),
                        title:
                          this.props.title ||
                          (0, p.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (d.push(R().chatSubmitButton, R().EmoticonPickerButton),
                  (0, e.jsx)(D.fu, {
                    className: (0, _.A)(...d),
                    onOKActionDescription: (0, p.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, p.we)("#ChatEntryButton_Emoticon"),
                    disabled: n,
                    children: (0, e.jsxs)(I.he, {
                      toolTipContent: o,
                      children: [
                        this.props.buttonIcon || (0, e.jsx)(v.nl, {}),
                        O && (0, e.jsx)(y.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        r([w.oI], P.prototype, "OnEmoticonClick", 1), (P = r([A.PA], P));
        const C = P;
      },
      38655: (Z, q, s) => {
        "use strict";
        s.d(q, { Q4: () => Be, iY: () => Ce, CE: () => Y, iD: () => Ve });
        var e = s(7850),
          L = s(14947),
          A = s(75844),
          w = s(90626),
          D = s(76842),
          G = s(84676),
          z = s(34360),
          y = s(36707),
          p = s(18210);
        function _(T, S, j = !1) {
          return `${T}economy/sticker${j ? "static" : ""}/${encodeURIComponent(S)}`;
        }
        var E = s(3166),
          R = s(16412),
          v = s(19298),
          I = s(64415),
          f = s(19418);
        class h extends w.Component {
          constructor(S) {
            super(S), (this.state = { activeIndex: S.initialActiveIndex || 0 });
          }
          render() {
            const { config: S } = this.props,
              { activeIndex: j } = this.state,
              U = S[j],
              k = U ? U.renderContent() : null,
              H = S.length > 1,
              J = H
                ? ({ detail: { button: ce } }) => {
                    ce === I.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : ce === I.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            S.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, e.jsxs)(v.Z, {
              className: f.Picker,
              onButtonDown: J,
              children: [
                H && (0, e.jsx)(r, { children: this.RenderTabs() }),
                k,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: S }, j) => {
              const U = this.state.activeIndex === j;
              return (0, e.jsx)(
                P,
                {
                  active: U,
                  onClick: () => this.setState({ activeIndex: j }),
                  children: S(U),
                },
                j,
              );
            });
          }
        }
        function r(T) {
          return (0, e.jsx)(v.Z, {
            className: f.Tabs,
            "flow-children": "row",
            children: T.children,
          });
        }
        function M(T) {
          return (0, e.jsx)("div", {
            className: f.Content,
            children: T.children,
          });
        }
        function P(T) {
          const { active: S, children: j, onClick: U } = T;
          return (0, e.jsx)(v.Z, {
            className: (0, y.A)(f.Tab, S && f.Active),
            focusClassName: f.Focus,
            onActivate: U,
            children: (0, e.jsx)("div", {
              className: (0, y.A)(f.TabContent, S && f.Active),
              children: j,
            }),
          });
        }
        function C(T) {
          const {
            items: S,
            renderItem: j,
            onItemSelect: U,
            keyExtractor: k,
            renderEmpty: H,
          } = T;
          let J = S.map((ce, de) =>
            (0, e.jsx)(
              v.Z,
              {
                className: f.Item,
                onActivate: () => U(S[de]),
                autoFocus: de === 0,
                focusClassName: f.Focus,
                children: j(S[de]),
              },
              k(ce),
            ),
          );
          return (
            S.length === 0 && H && (J = H()),
            (0, e.jsx)(v.Z, {
              "flow-children": "grid",
              className: f.ItemList,
              children: J,
            })
          );
        }
        function n(T) {
          const {
            title: S,
            onFilterChange: j,
            filter: U,
            onSubmit: k,
            ...H
          } = T;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(M, {
                children: (0, e.jsx)(o, {
                  title: S,
                  children: (0, e.jsx)(C, { ...H }),
                }),
              }),
              (0, e.jsx)(a, { value: U, onChange: j, onSubmit: k }),
            ],
          });
        }
        function i(T) {
          const { onFilterChange: S, filter: j, sections: U, title: k } = T;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(M, {
                children: [
                  k &&
                    (0, e.jsx)("div", {
                      className: f.SectionedPageTitle,
                      children: k,
                    }),
                  U.map(({ title: H, ...J }) =>
                    (0, e.jsx)(
                      o,
                      { title: H, children: (0, e.jsx)(C, { ...J }) },
                      H,
                    ),
                  ),
                ],
              }),
              (0, e.jsx)(a, { value: j, onChange: S }),
            ],
          });
        }
        function o(T) {
          return (0, e.jsxs)("div", {
            className: f.Section,
            children: [
              (0, e.jsx)("div", {
                className: f.SectionTitle,
                children: T.title,
              }),
              (0, e.jsx)("div", {
                className: f.SectionContent,
                children: T.children,
              }),
            ],
          });
        }
        function a(T) {
          const { value: S, onChange: j, onSubmit: U } = T;
          return (0, e.jsx)("div", {
            className: f.FilterInputContainer,
            children: (0, e.jsx)(R.pd, {
              type: "text",
              placeholder: (0, p.we)("#AddonPicker_Search"),
              className: f.FilterInput,
              value: S,
              onChange: (k) => j(k.target.value),
              onSubmit: U,
            }),
          });
        }
        function d(T) {
          const { className: S, ...j } = T;
          return (0, e.jsx)("div", {
            className: (0, y.A)(S, f.AddonPickerMessage),
            ...j,
          });
        }
        var O = s(42060),
          b = s.n(O),
          K = s(53107),
          N = s(96197),
          m = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          W = (T, S, j, U) => {
            for (
              var k = U > 1 ? void 0 : U ? B(S, j) : S, H = T.length - 1, J;
              H >= 0;
              H--
            )
              (J = T[H]) && (k = (U ? J(S, j, k) : J(k)) || k);
            return U && k && m(S, j, k), k;
          };
        const X = 1e3;
        function te(T) {
          return T.recent_emoticons;
        }
        function ne(T) {
          return T.recent_stickers;
        }
        function u(T) {
          return te(T).length + ne(T).length > 0;
        }
        function le(T) {
          const [S, j] = (0, w.useState)(T.is_initialized);
          return (
            (0, w.useEffect)(() => {
              if (!T.is_initialized) {
                T.UpdateEmoticonList();
                const U = (0, L.z7)(
                  () => T.is_initialized,
                  () => j(T.is_initialized),
                );
                return () => U();
              }
              return () => {};
            }, [T]),
            S
          );
        }
        const Be = (0, A.PA)((T) => {
          const {
            emoticonStore: S,
            roomEffectSettings: j,
            strFlairGroupID: U,
            onEmoticonSelected: k,
            onRoomEffectSelected: H,
            onStickerSelected: J,
          } = T;
          le(S);
          const ce = [];
          return (
            u(S) &&
              ce.push({
                renderTab: (de) =>
                  (0, e.jsx)("span", {
                    title: (0, p.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, y.A)(
                      b().PickerTab,
                      b().Clock,
                      de && b().ActiveTab,
                    ),
                    children: (0, e.jsx)(Je, {}),
                  }),
                renderContent: () =>
                  (0, e.jsx)(Q, {
                    store: S,
                    onEmoticonSelect: (de) => k(de.name),
                    onStickerSelect: (de) => J(de.name),
                    flairGroupID: U,
                  }),
              }),
            (0, e.jsx)(z.tz, {
              children: (0, e.jsx)(h, {
                config: [
                  ...ce,
                  {
                    renderTab: (de) =>
                      (0, e.jsx)("span", {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: (0, y.A)(b().PickerTab, de && b().ActiveTab),
                        children: (0, e.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, e.jsx)(_e, {
                        store: S,
                        onItemSelect: (de) => k(de.name),
                        flairGroupID: U,
                      }),
                  },
                  {
                    renderTab: (de) =>
                      (0, e.jsx)("span", {
                        title: (0, p.we)("#AddonPicker_Stickers"),
                        className: (0, y.A)(b().PickerTab, de && b().ActiveTab),
                        children: (0, e.jsx)(Qe, {}),
                      }),
                    renderContent: () =>
                      (0, e.jsx)(se, {
                        store: S,
                        onItemSelect: (de) => J(de.name),
                      }),
                  },
                  {
                    renderTab: (de) =>
                      (0, e.jsx)("span", {
                        title: (0, p.we)("#AddonPicker_RoomEffects"),
                        className: (0, y.A)(b().PickerTab, de && b().ActiveTab),
                        children: (0, e.jsx)(ee, {}),
                      }),
                    renderContent: () =>
                      (0, e.jsx)(ge, {
                        store: S,
                        effectSettings: j,
                        onItemSelect: (de) => H(de.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let Se = class extends w.Component {
          m_disposeEmoticonStore;
          constructor(T) {
            super(T), (this.state = { strSearchText: "" });
            let S = this.props.emoticonStore;
            S.is_initialized ||
              (S.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, L.z7)(
                () => S.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: T,
                onEmoticonSelected: S,
                onStickerSelected: j,
                strFlairGroupID: U,
              } = this.props,
              k = [];
            return (
              u(T) &&
                k.push({
                  renderTab: (H) =>
                    (0, e.jsx)("span", {
                      title: (0, p.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, y.A)(
                        b().PickerTab,
                        b().Clock,
                        H && b().ActiveTab,
                      ),
                      children: (0, e.jsx)(Je, {}),
                    }),
                  renderContent: () =>
                    (0, e.jsx)(Q, {
                      store: T,
                      onEmoticonSelect: (H) => S(H.name),
                      onStickerSelect: (H) => j(H.name),
                      flairGroupID: U,
                    }),
                }),
              (0, e.jsx)(z.tz, {
                children: (0, e.jsx)(h, {
                  config: [
                    ...k,
                    {
                      renderTab: (H) =>
                        (0, e.jsx)("span", {
                          title: (0, p.we)("#AddonPicker_Emoticons"),
                          className: (0, y.A)(
                            b().PickerTab,
                            H && b().ActiveTab,
                          ),
                          children: (0, e.jsx)(Oe, {}),
                        }),
                      renderContent: () =>
                        (0, e.jsx)(_e, {
                          store: T,
                          onItemSelect: (H) => S(H.name),
                          flairGroupID: U,
                        }),
                    },
                    {
                      renderTab: (H) =>
                        (0, e.jsx)("span", {
                          title: (0, p.we)("#AddonPicker_Stickers"),
                          className: (0, y.A)(
                            b().PickerTab,
                            H && b().ActiveTab,
                          ),
                          children: (0, e.jsx)(Qe, {}),
                        }),
                      renderContent: () =>
                        (0, e.jsx)(se, {
                          store: T,
                          onItemSelect: (H) => j(H.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        Se = W([A.PA], Se);
        class Ce extends w.Component {
          m_disposeEmoticonStore;
          constructor(S) {
            super(S), (this.state = { strSearchText: "" });
            let j = this.props.emoticonStore;
            j.is_initialized ||
              (j.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, L.z7)(
                () => j.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, e.jsx)(z.tz, {
              children: (0, e.jsx)(h, {
                config: [
                  {
                    renderTab: () =>
                      (0, e.jsx)("span", {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: b().PickerTab,
                        children: (0, e.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, e.jsx)(me, {
                        store: this.props.emoticonStore,
                        onItemSelect: (S) => this.props.OnSelected(S.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Y extends w.Component {
          m_disposeEmoticonStore;
          constructor(S) {
            super(S), (this.state = { strSearchText: "" });
            let j = this.props.emoticonStore;
            j.is_initialized ||
              (j.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, L.z7)(
                () => j.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, e.jsx)(z.tz, {
              children: (0, e.jsx)(h, {
                config: [
                  {
                    renderTab: () =>
                      (0, e.jsx)("span", {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: b().PickerTab,
                        children: (0, e.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, e.jsx)(He, {
                        store: this.props.emoticonStore,
                        onItemSelect: (S) => this.props.OnSelected(S.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Q extends w.Component {
          state = { filter: "" };
          render() {
            const {
                store: S,
                onEmoticonSelect: j,
                onStickerSelect: U,
              } = this.props,
              { filter: k } = this.state,
              H = [];
            return (
              te(S) &&
                H.push({
                  title: (0, p.we)("#AddonPicker_RecentEmoticons"),
                  items: D.pN.FilterEmoticons(te(S), k),
                  onItemSelect: j,
                  renderItem: (J) => (0, e.jsx)(Fe, { emoticon: J }),
                  keyExtractor: (J) => J.name,
                  renderEmpty: () =>
                    (0, e.jsx)(d, {
                      children: k
                        ? (0, p.we)("#AddonPicker_NoResults")
                        : (0, p.we)(
                            "#AddonPicker_NoRecent",
                            (0, p.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              ne(S).length &&
                H.push({
                  title: (0, p.we)("#AddonPicker_RecentStickers"),
                  items: D.pN.FilterStickers(ne(S), k),
                  onItemSelect: U,
                  renderItem: (J) => (0, e.jsx)(Te, { sticker: J }),
                  keyExtractor: ({ name: J }) => J,
                  renderEmpty: () =>
                    (0, e.jsx)(d, {
                      children: k
                        ? (0, p.we)("#AddonPicker_NoResults")
                        : (0, p.we)(
                            "#AddonPicker_NoRecent",
                            (0, p.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, e.jsx)(i, {
                onFilterChange: (J) => this.setState({ filter: J }),
                filter: k,
                sections: H,
              })
            );
          }
        }
        class _e extends w.Component {
          state = { filter: "" };
          render() {
            const { store: S, onItemSelect: j, flairGroupID: U } = this.props,
              { filter: k } = this.state,
              H = !k && U ? S.GetFlairListByGroupID(U) : S.emoticon_list,
              J = D.pN.FilterEmoticons(H, k).slice(0, X);
            return (0, e.jsx)(n, {
              title: (0, p.we)("#AddonPicker_Emoticons"),
              items: J,
              onItemSelect: j,
              renderItem: (ce) => (0, e.jsx)(Fe, { emoticon: ce }),
              keyExtractor: (ce) => ce.name,
              onFilterChange: (ce) => this.setState({ filter: ce }),
              filter: k,
              onSubmit: () => j(J[0]),
              renderEmpty: () =>
                k
                  ? (0, e.jsx)(d, {
                      children: (0, p.we)("#AddonPicker_NoResults"),
                    })
                  : (0, e.jsx)(ae, {}),
            });
          }
        }
        function ae() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(d, {
                children: (0, p.we)(
                  "#AddonPicker_NoneOwned",
                  (0, p.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, e.jsx)(d, {
                children: (0, p.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, e.jsx)(K.uU, {
                    href: `${E.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, p.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, e.jsx)(K.uU, {
                    href: `${E.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, p.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class se extends w.Component {
          state = { filter: "" };
          render() {
            const { store: S, onItemSelect: j } = this.props,
              { filter: U } = this.state,
              k = D.pN.FilterStickers(S.GetStickerList(), U),
              H = () =>
                U
                  ? (0, e.jsx)(d, {
                      children: (0, p.we)("#AddonPicker_NoResults"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(d, {
                          children: (0, p.we)(
                            "#AddonPicker_NoneOwned",
                            (0, p.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, e.jsx)(d, {
                          children: (0, p.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, e.jsx)(K.uU, {
                              href: `${E.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, p.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, e.jsx)(n, {
              title: (0, p.we)("#EmoticonPicker_StickerHeading"),
              items: k,
              onItemSelect: j,
              renderItem: (J) => (0, e.jsx)(Te, { sticker: J }),
              keyExtractor: ({ name: J }) => J,
              onFilterChange: (J) => this.setState({ filter: J }),
              filter: U,
              onSubmit: () => j(k[0]),
              renderEmpty: H,
            });
          }
        }
        class ge extends w.Component {
          state = { filter: "" };
          render() {
            const { store: S, effectSettings: j, onItemSelect: U } = this.props,
              { filter: k } = this.state,
              H = S.GetEffectList().filter(
                ({ name: ce }) => ce.indexOf(k) > -1,
              ),
              J = () =>
                k
                  ? (0, e.jsx)(d, {
                      children: (0, p.we)("#AddonPicker_NoResults"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(d, {
                          children: (0, p.we)(
                            "#AddonPicker_NoneOwned",
                            (0, p.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, e.jsx)(d, {
                          children: (0, p.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, e.jsx)(K.uU, {
                              href: `${E.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, p.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, e.jsx)(n, {
              title: (0, p.we)("#EmoticonPicker_EffectHeading"),
              items: H,
              onItemSelect: U,
              renderItem: (ce) =>
                (0, e.jsx)($e, { effect: ce, roomEffectSettings: j }),
              keyExtractor: ({ name: ce }) => ce,
              onFilterChange: (ce) => this.setState({ filter: ce }),
              filter: k,
              onSubmit: () => U(H[0]),
              renderEmpty: J,
            });
          }
        }
        let me = class extends w.Component {
          state = { filter: "" };
          render() {
            const { store: T, onItemSelect: S, flairGroupID: j } = this.props,
              { filter: U } = this.state,
              k = [];
            return (
              te(T).length &&
                k.push({
                  title: (0, p.we)("#AddonPicker_RecentEmoticons"),
                  items: D.pN.FilterEmoticons(te(T), U),
                  onItemSelect: S,
                  renderItem: (H) => (0, e.jsx)(Fe, { emoticon: H }),
                  keyExtractor: (H) => H.name,
                  renderEmpty: () =>
                    (0, e.jsx)(d, {
                      children: U
                        ? (0, p.we)("#AddonPicker_NoResults")
                        : (0, p.we)(
                            "#AddonPicker_NoRecent",
                            (0, p.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, e.jsx)(i, {
                onFilterChange: (H) => this.setState({ filter: H }),
                filter: U,
                sections: [
                  ...k,
                  {
                    title: (0, p.we)("#AddonPicker_AllEmoticons"),
                    items: D.pN.FilterStickers(T.emoticon_list, U).slice(0, X),
                    onItemSelect: S,
                    renderItem: (H) => (0, e.jsx)(Fe, { emoticon: H }),
                    keyExtractor: (H) => H.name,
                    renderEmpty: () =>
                      U
                        ? (0, e.jsx)(d, {
                            children: (0, p.we)("#AddonPicker_NoResults"),
                          })
                        : (0, e.jsx)(ae, {}),
                  },
                ],
              })
            );
          }
        };
        me = W([A.PA], me);
        let He = class extends w.Component {
          state = { filter: "" };
          render() {
            const { store: T, onItemSelect: S, flairGroupID: j } = this.props,
              { filter: U } = this.state;
            return (0, e.jsx)(i, {
              onFilterChange: (k) => this.setState({ filter: k }),
              filter: U,
              sections: [
                {
                  title: (0, p.we)("#ChatEntryButton_Flair"),
                  items: D.pN.FilterStickers(T.GetFlairListByGroupID(j), U),
                  onItemSelect: S,
                  renderItem: (k) => (0, e.jsx)(Fe, { emoticon: k }),
                  keyExtractor: (k) => k.name,
                  renderEmpty: () =>
                    U
                      ? (0, e.jsx)(d, {
                          children: (0, p.we)("#AddonPicker_NoResults"),
                        })
                      : (0, e.jsx)(ae, {}),
                },
              ],
            });
          }
        };
        He = W([A.PA], He);
        const Fe = (T) => {
          const { emoticon: S, large: j } = T,
            U = !S.last_used && S.time_received;
          return (0, e.jsxs)("div", {
            className: b().EmoticonItem,
            children: [
              (0, e.jsx)(N.n, { emoticon: S.name, large: j }),
              U && (0, e.jsx)(Ve, {}),
            ],
          });
        };
        class Te extends w.Component {
          state = { showHover: !1 };
          m_ref = w.createRef();
          render() {
            const { sticker: S, className: j, ...U } = this.props,
              k = _(E.TS.COMMUNITY_CDN_URL, S.name);
            return (0, e.jsxs)("div", {
              ref: this.m_ref,
              className: (0, y.A)(j, b().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...U,
              children: [
                (0, e.jsx)("img", { style: { width: "100%" }, src: k }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, e.jsx)(ue, { target: this.m_ref.current, sticker: S }),
              ],
            });
          }
        }
        const ue = (0, A.PA)((T) => {
          const {
              target: S,
              sticker: { name: j, appid: U },
            } = T,
            [k] = (0, G.t7)(U, {});
          return (0, e.jsx)(N.c, {
            target: S,
            title: j,
            subtitle: k?.GetName(),
            children: (0, e.jsx)("img", {
              src: _(E.TS.COMMUNITY_CDN_URL, j),
              className: b().StickerHoverSticker,
            }),
          });
        });
        class $e extends w.Component {
          state = { showHover: !1 };
          m_ref = w.createRef();
          render() {
            const {
                effect: S,
                roomEffectSettings: j,
                className: U,
                ...k
              } = this.props,
              H = j[S.name];
            return (0, e.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, y.A)(U, b().EffectButton),
              ...k,
              children: [
                H.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, e.jsx)(qe, {
                    target: this.m_ref.current,
                    effect: S,
                    roomEffectSettings: j,
                  }),
              ],
            });
          }
        }
        const qe = (0, A.PA)((T) => {
          const {
              target: S,
              effect: { name: j, appid: U },
              roomEffectSettings: k,
            } = T,
            H = k[j],
            [J] = (0, G.t7)(U, {});
          return (0, e.jsx)(N.c, {
            target: S,
            title: j,
            subtitle: J?.GetName(),
            children: (0, e.jsx)("div", {
              className: b().EffectHoverEffect,
              children: H.renderEffectIcon(),
            }),
          });
        });
        function Ve() {
          return (0, e.jsx)("div", {
            className: b().NewEmoticonIndicator,
            children: (0, e.jsx)("div", { className: b().NewEmoticonCircle }),
          });
        }
        function et(T) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...T,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ...T,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function Qe(T) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...T,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function We(T) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...T,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ...T,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Oe(T) {
          return (0, e.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...T,
            children: (0, e.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function tt(T) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...T,
                children: [
                  jsx("path", {
                    d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ...T,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function ee(T) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...T,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function Je(T) {
          const { className: S, ...j } = T;
          return (0, e.jsx)("svg", {
            className: (0, y.A)("SVGIcon_Button SVGIcon_Clock", S),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...j,
            children: (0, e.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      55436: (Z, q, s) => {
        "use strict";
        s.d(q, { r: () => v, z: () => E });
        var e = s(7850),
          L = s(90626),
          A = s(16412),
          w = s(25792),
          D = s(96538),
          G = s(18210),
          z = s(85599),
          y = s(17618),
          p = s.n(y),
          _ = s(53424);
        const E = (I) => {
            const { clanSteamID: f, fnImageSelectCallBack: h } = I,
              [r, M] = (0, L.useState)(""),
              P = (0, _.mr)(I.clanSteamID.GetAccountID()),
              C = () => I.closeModal && I.closeModal(),
              n = _.pU.GetFilteredClanImages(f, r),
              i = (o) => {
                h(o), C();
              };
            return (0, e.jsx)(w.tH, {
              children: (0, e.jsx)(D.x_, {
                onEscKeypress: C,
                children: (0, e.jsxs)(A.UC, {
                  children: [
                    (0, e.jsx)(A.Y9, {
                      children: (0, G.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(A.nB, {
                      children: (0, e.jsxs)(A.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, G.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(A.pd, {
                            placeholder: (0, G.we)("#ClanImageChooser_Search"),
                            value: r,
                            onChange: (o) => M(o.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: y.ImagesOuterContainer,
                            children: P
                              ? (0, e.jsx)(z.t, {
                                  size: "medium",
                                  string: (0, G.we)("#Loading"),
                                })
                              : n.length > 0
                                ? n.map((o) =>
                                    (0, e.jsx)(
                                      R,
                                      {
                                        clanImage: o,
                                        searchStringHilight: r,
                                        fnImageClick: i,
                                      },
                                      "ci" + o.image_hash,
                                    ),
                                  )
                                : r.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, G.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, G.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(A.wi, {
                      children: (0, e.jsx)(A.$n, {
                        onClick: C,
                        children: (0, G.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          R = (I) => {
            const { clanImage: f, searchStringHilight: h, fnImageClick: r } = I;
            let M = f.file_name ? f.file_name : "",
              P = v(h, M, String(f.imageid), y.Hilight);
            return (0, e.jsxs)("div", {
              className: y.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: y.Image,
                  style: { backgroundImage: `url( '${f.thumb_url}' )` },
                  onDoubleClick: () => r(f),
                }),
                (0, e.jsx)("div", {
                  className: y.ImageFilename,
                  title: M,
                  children: P,
                }),
              ],
            });
          };
        function v(I, f, h, r) {
          let M = [];
          if (I.length > 0) {
            let P = f.toLocaleLowerCase();
            for (let C = 0; C < f.length; ) {
              let n = P.indexOf(I, C);
              if (n < 0) {
                M.push(
                  (0, e.jsx)(
                    "span",
                    { children: f.substring(C) },
                    h + "_" + String(C),
                  ),
                );
                break;
              } else
                C < n &&
                  M.push(
                    (0, e.jsx)(
                      "span",
                      { children: f.substring(C, n) },
                      h + "_" + String(C),
                    ),
                  ),
                  M.push(
                    (0, e.jsx)(
                      "span",
                      { className: r, children: f.substr(n, I.length) },
                      h + "_" + String(C),
                    ),
                  ),
                  (C = n + I.length);
            }
          } else M.push((0, e.jsx)("span", { children: f }, h + "_null"));
          return M;
        }
      },
      24806: (Z, q, s) => {
        "use strict";
        s.d(q, { Ng: () => r });
        var e = s(7850),
          L = s(75844),
          A = s(90626),
          w = s(99412),
          D = s(32093),
          G = s(50109),
          z = s(95695),
          y = s.n(z),
          p = s(36707),
          _ = s(18210),
          E = s(92264),
          R = s(30096),
          v = s(71421),
          I = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          h = (C, n, i, o) => {
            for (
              var a = o > 1 ? void 0 : o ? f(n, i) : n, d = C.length - 1, O;
              d >= 0;
              d--
            )
              (O = C[d]) && (a = (o ? O(n, i, a) : O(a)) || a);
            return o && a && I(n, i, a), a;
          };
        let r = class extends A.Component {
          GenerateLanguageOptions() {
            let C = [];
            const {
              fnFilterLanguage: n,
              fnLangHasData: i,
              fnLastUpdateRTime: o,
              fnIsLangSupported: a,
            } = this.props;
            this.props.bAllowUnsetOption &&
              C.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: w.xPp,
                    children: (0, _.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let d = new Array();
            const O = this.props.realms || [D.TU.k_ESteamRealmGlobal];
            for (const K of _.A0.GetLanguageListForRealms(O)) {
              if (n && !n(K)) continue;
              const N = (0, w.LgB)(K),
                m = (0, _.we)("#Language_" + N),
                B = !!(a && a(K));
              d.push({ eLang: K, sLocName: m, bSupported: B });
            }
            d.sort((K, N) =>
              K.bSupported != N.bSupported
                ? K.bSupported
                  ? -1
                  : 1
                : K.sLocName.localeCompare(N.sLocName),
            );
            let b = !1;
            for (const K of d) {
              K.bSupported != b &&
                (C.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: y().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, _.we)(
                        K.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    K.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (b = K.bSupported));
              const N = i && i(K.eLang),
                m = o && o(K.eLang);
              let B = K.sLocName;
              m &&
                m !== 0 &&
                ((B += " "),
                (B += (0, _.we)(
                  "#Language_Last_Update",
                  (0, _.$z)(m) +
                    " @ " +
                    (0, E.KC)(m, { bForce24HourClock: !1 }),
                ))),
                C.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: K.eLang,
                      className: (0, p.A)(
                        { [y().LanguageWithContent]: N },
                        K.bSupported
                          ? y().SupportedLanguage
                          : y().UnsupportedLanguage,
                      ),
                      children: B,
                    },
                    "langpicker" + K.eLang + (N ? "_hasdata" : ""),
                  ),
                );
            }
            return C;
          }
          OnLanguageChange(C) {
            const { fnOnLanguageChanged: n, selectedLang: i } = this.props;
            let o = Number.parseInt(C.currentTarget.value);
            o != i && n && n(o);
          }
          render() {
            const { selectedLang: C, bDisabled: n, strTooltip: i } = this.props;
            let o = this.GenerateLanguageOptions();
            return (0, e.jsx)(v.he, {
              toolTipContent: i,
              children: (0, e.jsx)("select", {
                value: C,
                onChange: this.OnLanguageChange,
                disabled: n,
                children: o,
              }),
            });
          }
        };
        h([R.oI], r.prototype, "OnLanguageChange", 1), (r = h([L.PA], r));
        function M(C) {
          const [n, i] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(r, {
            selectedLang: i,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !n,
            strTooltip: n ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function P(C) {
          const { fnLangHasData: n } = C;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const i = useObserver(() => {
            const o = [];
            for (let a = k_ELanguage_English; a < k_ELanguage_MAX; ++a)
              o[a] = !!(n && n(a));
            return o;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(i), [i]),
            jsx(Fragment, {})
          );
        }
      },
      21877: (Z, q, s) => {
        "use strict";
        s.d(q, { J: () => xt });
        var e = s(7850),
          L = s(41735),
          A = s.n(L),
          w = s(75844),
          D = s(90626),
          G = s(25518),
          z = s(72604),
          y = s(35038),
          p = s(85528),
          _ = s(76559),
          E = s(27386),
          R = s(16346),
          v = s(43458),
          I = s(29630),
          f = s(53424),
          h = s(30096),
          r = s(41301),
          M = s(96197),
          P = s(38655),
          C = s(14947),
          n = s(77700),
          i = s.n(n),
          o = s(36707),
          a = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          O = (l, t, c, g) => {
            for (
              var x = g > 1 ? void 0 : g ? d(t, c) : t, F = l.length - 1, $;
              F >= 0;
              F--
            )
              ($ = l[F]) && (x = (g ? $(t, c, x) : $(x)) || x);
            return g && x && a(t, c, x), x;
          };
        class b extends D.Component {
          m_strLastSearch;
          m_rgCurrentMatches = [];
          m_mapMatchByKey = new Map();
          containerRef = D.createRef();
          constructor(t) {
            super(t),
              (this.m_hMobxSearchDisposer = (0, C.fm)(async () => {
                await this.UpdateSearchResults(this.props.strSearch),
                  this.forceUpdate();
              })),
              (this.state = { selectedIndex: void 0 });
          }
          OnKeyDown(t) {
            if (this.BHandleKeyPress(t.keyCode)) {
              t.preventDefault();
              return;
            }
          }
          BHandleKeyPress(t) {
            switch (t) {
              case r.Oy:
                this.SetSelectedIndexDelta(-1);
                break;
              case r.BH:
                this.SetSelectedIndexDelta(1);
                break;
              case r.po:
                this.SetSelectedIndex(0);
                break;
              case r.o7:
                this.SetSelectedIndexDelta(-this.GetPageSize());
                break;
              case r.xF:
                this.SetSelectedIndex(-1);
                break;
              case r.v3:
                this.SetSelectedIndexDelta(this.GetPageSize());
                break;
              case r.wd:
              case r.$R:
                if (this.state.selectedIndex !== void 0)
                  this.ChooseSuggestion(
                    this.m_rgCurrentMatches[this.state.selectedIndex],
                  );
                else
                  return (
                    this.props.onSuggestionSelected(this.props.strSearch), !1
                  );
                break;
              case r.zV:
                this.props.onSuggestionSelected(this.props.strSearch);
                break;
              default:
                return !1;
            }
            return !0;
          }
          GetPageSize() {
            let t = this.containerRef.current,
              c = t && t.firstElementChild,
              g = this.m_rgCurrentMatches.length;
            if (
              (g > this.getMaxMatches() && (g = this.getMaxMatches()), c && g)
            ) {
              let x = c.scrollHeight / g,
                F = c.clientHeight / x;
              return Math.max(1, Math.floor(F));
            }
            return 5;
          }
          ChooseSuggestion(t) {
            this.props.onSuggestionSelected(
              this.props.strSearch,
              t ? this.getSelection(t) : void 0,
            );
          }
          SetSelectedIndexDelta(t) {
            this.state.selectedIndex !== void 0
              ? this.SetSelectedIndex(this.state.selectedIndex + t)
              : this.SetSelectedIndex(t === 1 ? 0 : t);
          }
          SetSelectedIndex(t) {
            if (!this.m_rgCurrentMatches.length) return;
            let c = this.m_rgCurrentMatches.length;
            c > this.getMaxMatches() && (c = this.getMaxMatches()),
              (t = t % c),
              t < 0 && (t += c),
              this.setState({ selectedIndex: t });
          }
          FindKeyIndex(t) {
            if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
              for (let c = 0; c < this.m_rgCurrentMatches.length; c++)
                this.m_mapMatchByKey.set(
                  this.getKey(this.m_rgCurrentMatches[c]),
                  c,
                );
            return this.m_mapMatchByKey.get(t);
          }
          OnClickSuggestion(t) {
            let c = this.FindKeyIndex(t);
            c !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[c]);
          }
          OnMouseOverSuggestion(t) {
            let c = this.FindKeyIndex(t);
            c !== void 0 && this.SetSelectedIndex(c);
          }
          BindSelectedElement(t) {
            if (!t) return;
            let c = this.containerRef.current,
              g = t.containerRef.current,
              x = c && c.firstElementChild;
            !g ||
              !x ||
              ((x.scrollTop + x.clientHeight < g.offsetTop ||
                g.offsetTop < x.scrollTop) &&
                g.scrollIntoView());
          }
          async UpdateSearchResults(t) {
            (this.m_rgCurrentMatches = await this.performSearch(t)),
              (this.m_strLastSearch = t),
              this.m_mapMatchByKey.clear(),
              this.m_rgCurrentMatches.length
                ? !this.state || this.state.selectedIndex === void 0
                  ? (this.props.nMinimumSearchLengthBeforeAutoSelection ===
                      void 0 ||
                      t.length >=
                        this.props.nMinimumSearchLengthBeforeAutoSelection) &&
                    this.setState({ selectedIndex: 0 })
                  : this.state.selectedIndex >=
                      this.m_rgCurrentMatches.length &&
                    this.setState({ selectedIndex: 0 })
                : this.state &&
                  this.state.selectedIndex !== void 0 &&
                  this.setState({ selectedIndex: void 0 });
          }
          m_hMobxSearchDisposer;
          componentWillUnmount() {
            this.m_hMobxSearchDisposer &&
              (this.m_hMobxSearchDisposer(),
              (this.m_hMobxSearchDisposer = void 0));
          }
          async componentDidUpdate(t) {
            this.m_strLastSearch != this.props.strSearch &&
              (await this.UpdateSearchResults(this.props.strSearch),
              this.forceUpdate());
          }
          render() {
            let t = [];
            if (this.m_rgCurrentMatches.length) {
              let c = this.getMaxMatches();
              for (
                let g = 0;
                g < Math.min(c, this.m_rgCurrentMatches.length);
                g++
              ) {
                let x = this.m_rgCurrentMatches[g],
                  F = this.getKey(x),
                  $ = g === this.state.selectedIndex;
                t.push(
                  (0, e.jsx)(
                    K,
                    {
                      matchKey: F,
                      fnOnClick: this.OnClickSuggestion,
                      fnOnMouseOver: this.OnMouseOverSuggestion,
                      bIsSelected: $,
                      ref: $ ? this.BindSelectedElement : void 0,
                      children: this.renderMatch(x),
                    },
                    F,
                  ),
                );
              }
              this.m_rgCurrentMatches.length > c &&
                t.push(
                  this.renderTooManyMatchesMessage(
                    this.m_rgCurrentMatches.length - c,
                  ),
                );
            } else {
              let c = this.renderNoMatchMessage();
              if (!c) return null;
              t.push(c);
            }
            return (0, e.jsx)("div", {
              className: i().mentionDialogPosition,
              ref: this.containerRef,
              children: (0, e.jsxs)("div", {
                className: i().mentionDialog,
                tabIndex: 0,
                onKeyDown: this.OnKeyDown,
                children: [this.renderHeader(), t],
              }),
            });
          }
        }
        O([h.oI], b.prototype, "OnKeyDown", 1),
          O([h.oI], b.prototype, "OnClickSuggestion", 1),
          O([h.oI], b.prototype, "OnMouseOverSuggestion", 1),
          O([h.oI], b.prototype, "BindSelectedElement", 1);
        class K extends D.PureComponent {
          containerRef = D.createRef();
          OnMouseOver(t) {
            this.props.fnOnMouseOver(this.props.matchKey);
          }
          OnClick(t) {
            this.props.fnOnClick(this.props.matchKey);
          }
          render() {
            return (0, e.jsx)("div", {
              className: (0, o.A)(
                i().suggestOption,
                i().mentionSearchOption,
                this.props.bIsSelected ? i().selected : "",
              ),
              onMouseEnter: this.OnMouseOver,
              onClick: this.OnClick,
              ref: this.containerRef,
              children: this.props.children,
            });
          }
        }
        O([h.oI], K.prototype, "OnMouseOver", 1),
          O([h.oI], K.prototype, "OnClick", 1);
        const N = b;
        var m = s(79786),
          B = s.n(m);
        class W extends N {
          performSearch(t) {
            return this.props.emoticonStore.SearchEmoticons(t, 10, !1);
          }
          getSelection(t) {
            return t.name;
          }
          getKey(t) {
            return t.name;
          }
          renderMatch(t) {
            return (0, e.jsxs)("div", {
              className: (0, o.A)(
                B().EmoticonSuggestion,
                t.recent ? "Recent" : "",
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: B().Emoticon,
                  children: [
                    (0, e.jsx)(M.n, { emoticon: t.name }),
                    t.new && (0, e.jsx)(P.iD, {}),
                  ],
                }),
                ":",
                t.name,
                ":",
              ],
            });
          }
          renderNoMatchMessage() {
            return null;
          }
          renderTooManyMatchesMessage(t) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        const X = W;
        var te = s(34510),
          ne = s.n(te),
          u = s(18210);
        class le extends N {
          performSearch(t) {
            let c = Array();
            return (
              this.props.supportBBCodes.forEach((g) => {
                g.indexOf(t) >= 0 && c.push({ name: g });
              }),
              c
            );
          }
          getSelection(t) {
            return "[" + t.name + "][/" + t.name + "]";
          }
          getKey(t) {
            return t.name;
          }
          renderMatch(t) {
            return (0, e.jsxs)(
              "div",
              {
                className: (0, o.A)(ne().BBCodeSuggestion),
                children: [
                  (0, e.jsx)("div", {
                    className: ne().BBCode,
                    children: t.name,
                  }),
                  "[",
                  t.name,
                  "]...[/",
                  t.name,
                  "]",
                ],
              },
              t.name,
            );
          }
          renderNoMatchMessage() {
            return (0, e.jsx)(
              "div",
              {
                className: (0, o.A)(i().mentionSearchOption, i().noMatches),
                children: (0, u.we)("#Bbcode_No_Match"),
              },
              "nomatches",
            );
          }
          renderTooManyMatchesMessage(t) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        var Be = Object.defineProperty,
          Se = Object.getOwnPropertyDescriptor,
          Ce = (l, t, c, g) => {
            for (
              var x = g > 1 ? void 0 : g ? Se(t, c) : t, F = l.length - 1, $;
              F >= 0;
              F--
            )
              ($ = l[F]) && (x = (g ? $(t, c, x) : $(x)) || x);
            return g && x && Be(t, c, x), x;
          };
        class Y extends D.Component {
          descTextAreaRef = D.createRef();
          m_MentionDialog;
          m_bDisabled = !0;
          m_iMentionSearchStartOffset;
          m_iMentionSearchCancelledOffset;
          constructor(t) {
            super(t),
              (this.state = {
                mentionSearch: void 0,
                activeSuggestSearchType: void 0,
              });
          }
          BindMentionDialog(t) {
            this.m_MentionDialog = t ?? void 0;
          }
          OnKeyDown(t) {
            if (
              this.state.activeSuggestSearchType &&
              this.m_MentionDialog &&
              !t.shiftKey &&
              !t.ctrlKey &&
              this.m_MentionDialog.BHandleKeyPress(t.keyCode)
            ) {
              t.preventDefault();
              return;
            }
            (t.keyCode == r.Dh || t.keyCode == r.jt) &&
              (this.m_iMentionSearchCancelledOffset = void 0);
          }
          FindMatchOpener(t, c, g) {
            for (let x = g - 1; x >= 0; x--) {
              if (c[x] == t) return x;
              if (
                c[x] == " " ||
                c[x] ==
                  `
`
              )
                break;
            }
          }
          ReplaceSuggestedText(t, c) {
            const g = this.descTextAreaRef.current;
            if (!g) return;
            let x = g.selectionStart,
              F = g.value,
              $ = this.FindMatchOpener(t, F, x);
            if (
              ($ === void 0 &&
                t == "@" &&
                ($ = this.FindMatchOpener("\uFF20", F, x)),
              $ !== void 0)
            ) {
              let oe = F.substr(0, $);
              (oe += c), (x >= F.length || F[x] != " ") && (oe += " ");
              let ve = oe.length;
              (oe += F.substr(x)),
                (g.value = oe),
                (g.selectionStart = g.selectionEnd = ve),
                this.props.fnSetText(oe),
                this.FocusTextInput();
            }
          }
          OnFocus(t) {
            this.UpdateAutoSearchState();
          }
          OnKeyPress(t) {
            this.UpdateAutoSearchState();
          }
          OnClick(t) {
            this.UpdateAutoSearchState();
          }
          ClearMentionSearchState() {
            (this.m_iMentionSearchStartOffset = void 0),
              this.state.activeSuggestSearchType &&
                this.setState({
                  activeSuggestSearchType: void 0,
                  mentionSearch: void 0,
                });
          }
          OnEmoticonSuggestionSelected(t, c) {
            if (!c) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText(":", ":" + c + ":"),
              this.ClearMentionSearchState();
          }
          OnBBCodeSuggestionSelected(t, c) {
            if (!c) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText("[", c), this.ClearMentionSearchState();
          }
          FocusTextInput() {
            this.descTextAreaRef.current &&
              this.descTextAreaRef.current.focus();
          }
          UpdateAutoSearchState() {
            let t = this.descTextAreaRef.current;
            if (!t || this.m_bDisabled) return;
            if (t.selectionStart != t.selectionEnd || !t.selectionStart) {
              this.ClearMentionSearchState();
              return;
            }
            let c = t.selectionStart,
              g = t.value,
              x,
              F;
            for (let oe = c - 1; oe >= 0; oe--) {
              let ve = oe > 0 ? g[oe - 1] : void 0;
              if (this.props.emoticonStore && g[oe] == ":" && g.length > 2) {
                (!ve ||
                  ve == " " ||
                  ve ==
                    `
` ||
                  ve == ":") &&
                  ((x = oe), (F = "Emoticon"));
                break;
              } else if (
                g[oe] == "[" &&
                (oe + 1 > g.length || g[oe + 1] != "/")
              ) {
                (!ve ||
                  ve == " " ||
                  ve ==
                    `
` ||
                  ve == "]") &&
                  ((x = oe), (F = "BBCode"));
                break;
              } else if (
                g[oe] == " " ||
                g[oe] ==
                  `
`
              )
                break;
            }
            if (x === void 0 || x === this.m_iMentionSearchCancelledOffset) {
              this.ClearMentionSearchState();
              return;
            }
            let $ = g.substr(x + 1, c - x - 1);
            (this.m_iMentionSearchStartOffset = x),
              this.setState({ activeSuggestSearchType: F, mentionSearch: $ });
          }
          GetTextAreaRef() {
            return this.descTextAreaRef;
          }
          GetTextAreaCurrent() {
            return this.descTextAreaRef.current;
          }
          render() {
            let {
                emoticonStore: t,
                supportBBCodes: c,
                fnSetText: g,
                ...x
              } = this.props,
              F;
            switch (this.state.activeSuggestSearchType) {
              case "Emoticon":
                t &&
                  (F = (0, e.jsx)(X, {
                    emoticonStore: t,
                    strSearch: this.state.mentionSearch,
                    nMinimumSearchLengthBeforeAutoSelection: 2,
                    onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                    ref: this.BindMentionDialog,
                  }));
                break;
              case "BBCode":
                F = (0, e.jsx)(le, {
                  supportBBCodes: c,
                  strSearch: this.state.mentionSearch,
                  nMinimumSearchLengthBeforeAutoSelection: 2,
                  onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                  ref: this.BindMentionDialog,
                });
                break;
            }
            return (0, e.jsxs)(D.Fragment, {
              children: [
                F,
                (0, e.jsx)("textarea", {
                  ...x,
                  ref: this.descTextAreaRef,
                  onKeyDown: this.OnKeyDown,
                  onKeyUp: this.OnKeyPress,
                  onFocus: this.OnFocus,
                  onClick: this.OnClick,
                }),
              ],
            });
          }
        }
        Ce([h.oI], Y.prototype, "BindMentionDialog", 1),
          Ce([h.oI], Y.prototype, "OnKeyDown", 1),
          Ce([h.oI], Y.prototype, "OnFocus", 1),
          Ce([h.oI], Y.prototype, "OnKeyPress", 1),
          Ce([h.oI], Y.prototype, "OnClick", 1),
          Ce([h.oI], Y.prototype, "OnEmoticonSuggestionSelected", 1),
          Ce([h.oI], Y.prototype, "OnBBCodeSuggestionSelected", 1),
          Ce([h.oI], Y.prototype, "FocusTextInput", 1),
          Ce([h.oI], Y.prototype, "GetTextAreaRef", 1),
          Ce([h.oI], Y.prototype, "GetTextAreaCurrent", 1);
        var Q = s(16412),
          _e = s(22714),
          ae = s(95695),
          se = s.n(ae),
          ge = s(96538),
          me = s(88003),
          He = s(41609),
          Fe = s.n(He),
          Te = s(82734),
          ue = s(3166);
        const $e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==";
        var qe = s(58612),
          Ve = s(35098),
          et = s(34360),
          Qe = s(34736),
          We = s(85599),
          Oe = s(71421),
          tt = s(99312),
          ee = s.n(tt),
          Je = s(99412),
          T = s(72849),
          S = s(71742),
          j = s(21254),
          U = s(55436),
          k = s(64233),
          H = s(75909);
        const J = (0, w.PA)((l) => {
          const {
              clanSteamID: t,
              inputClanImage: c,
              nWidth: g,
              nHeight: x,
              setImage: F,
            } = l,
            $ = D.useMemo(() => ({ width: g, height: x }), [g, x]),
            [oe, ve] = D.useState(void 0),
            [Me, ye] = D.useState(!!c),
            [be, ke] = D.useState(!1),
            Le = (0, H.zO)(t, "dummy"),
            Ge = D.useCallback(
              async (pe) => {
                if (
                  (Le.ClearImages(),
                  pe && (ye(!0), await Le.AddExistingClanImage(pe, Je.Bhc)))
                ) {
                  ve(pe);
                  const Ee = Le.GetUploadImages()[0].IsValidAssetType($);
                  Ee.error.length == 0 &&
                    !Ee.needsCrop &&
                    (!c || c.image_hash != pe.image_hash) &&
                    F(pe);
                }
                ye(!1);
              },
              [Le, c, F, $],
            );
          D.useEffect(() => {
            Ge(c);
          }, [Ge, c]);
          const je = (pe) => {
              const De = new _.b(ue.UF.CLANSTEAMID);
              (0, me.pg)(
                (0, e.jsx)(U.z, {
                  clanSteamID: De,
                  fnImageSelectCallBack: (Ee) => Ge(Ee),
                }),
                (0, Te.uX)(pe) ?? window,
              );
            },
            Pe = (pe) => {
              const De = (0, Te.uX)(pe) ?? window;
              let Ee = Le.GetUploadImages()[0];
              (0, me.pg)(
                (0, e.jsx)(j.q, {
                  ownerWin: De,
                  uploadFile: Ee,
                  forceResolution: { width: g, height: x },
                  fileType: T.bg.dU,
                }),
                De,
              );
            },
            we = async () => {
              ke(!0);
              try {
                const pe = await Le.UploadAllImages($),
                  De = Object.values(pe);
                if (De && De.length > 0) {
                  (0, S.wT)(
                    De.length == 1,
                    "ClanImagePickForCertainSize expected size 1, got " +
                      De.length,
                  );
                  const Ee = De[0].bSuccess ? De[0].uploadResult : void 0,
                    it = I.zU.GetHashAndExt(Ee ?? null),
                    ot = I.zU.GetThumbHashAndExt(Ee ?? null);
                  if (Ee?.image_hash && Ee.file_type !== void 0 && it && ot) {
                    const St = I.zU.GenerateURLFromHashAndExt(t, it),
                      Lt = I.zU.GenerateURLFromHashAndExt(t, ot),
                      rt = {
                        imageid: -11231412,
                        image_hash: Ee.image_hash,
                        thumbnail_hash: Ee.thumbnail_hash,
                        file_type: Ee.file_type,
                        file_name: Ee.file_name,
                        clanAccountID: t.GetAccountID(),
                        url: St,
                        thumb_url: Lt,
                        uploaded_time: Date.now() / 1e3,
                      };
                    ve(rt), F(rt);
                  }
                }
              } finally {
                ke(!1);
              }
            };
          let Ne = "",
            ie = !1,
            Ie;
          if (Le && Le.GetFilesToUpload().length > 0) {
            Ie = Le.GetUploadImages()[0];
            const pe = Ie.IsValidAssetType($);
            (Ne = pe.error), (ie = pe.needsCrop);
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              Me
                ? (0, e.jsx)(We.t, {
                    size: "medium",
                    string: (0, u.we)("#Loading"),
                  })
                : oe &&
                  (0, e.jsx)("div", {
                    className: k.Image,
                    style: {
                      backgroundImage: `url( '${Ie ? Ie.dataUrl : oe.url}' )`,
                      height: `${x}px`,
                      width: `${g}px`,
                    },
                  }),
              !!Ne && (0, e.jsx)("p", { children: Ne }),
              ie &&
                (0, e.jsx)(Q.$n, {
                  onClick: Pe,
                  children: (0, u.we)("#BBCode_ResizeImage"),
                }),
              Ie &&
                Ie.bCropped &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, u.we)(
                        "#ClanImagePickAndResize_UploadStatus",
                        Ie.status,
                      ),
                    }),
                    be
                      ? (0, e.jsx)(We.t, {
                          string: (0, u.we)("#Uploading"),
                          size: "small",
                        })
                      : (0, e.jsx)(Q.$n, {
                          onClick: we,
                          children: (0, u.we)(
                            "#ClanImagePickAndResize_UploadImage",
                          ),
                        }),
                  ],
                }),
              (0, e.jsx)(Q.$n, {
                onClick: je,
                children: (0, u.we)("#BBCode_ChooseImage", g, x),
              }),
            ],
          });
        });
        var ce = s(34592),
          de = Object.defineProperty,
          at = Object.getOwnPropertyDescriptor,
          lt = (l, t, c) =>
            t in l
              ? de(l, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (l[t] = c),
          ct = (l, t, c, g) => {
            for (
              var x = g > 1 ? void 0 : g ? at(t, c) : t, F = l.length - 1, $;
              F >= 0;
              F--
            )
              ($ = l[F]) && (x = (g ? $(t, c, x) : $(x)) || x);
            return g && x && de(t, c, x), x;
          },
          dt = (l, t, c) => lt(l, typeof t != "symbol" ? t + "" : t, c);
        let Re = class extends D.Component {
          m_cancelSignal = A().CancelToken.source();
          constructor(l) {
            super(l),
              (this.state = {
                formattingHelp: {
                  __html: Re.s_formattingHelp.get(l.formatType) ?? "",
                },
              });
          }
          componentDidMount() {
            this.AjaxGetFormattingHelp().catch((l) => {
              this.setState((0, ce.H)(l));
            });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "FormattingHelpWidget component unmounted",
            );
          }
          static GetHelpURL(l, t) {
            return (
              ue.TS.COMMUNITY_BASE_URL +
              "comment/" +
              l +
              "/formattinghelp" +
              (t ? "?ajax=1" : "")
            );
          }
          async AjaxGetFormattingHelp() {
            if (this.state.formattingHelp.__html == "") {
              let l = { sessionid: (0, ue.KC)() },
                t;
              (t = await A().get(Re.GetHelpURL(this.props.formatType, !0), {
                params: l,
                cancelToken: this.m_cancelSignal.token,
              })),
                Re.s_formattingHelp.set(this.props.formatType, t.data),
                this.setState({ formattingHelp: { __html: t.data } });
            }
          }
          render() {
            return this.state.strErrorMsg
              ? (0, e.jsxs)("div", {
                  children: [
                    this.state.strErrorMsg,
                    (0, e.jsx)("br", {}),
                    this.state.errorCode,
                  ],
                })
              : this.state.formattingHelp.__html == ""
                ? (0, e.jsx)(We.t, {})
                : (0, e.jsx)(ge.o0, {
                    strTitle: (0, u.we)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                    children: (0, e.jsx)("div", {
                      dangerouslySetInnerHTML: this.state.formattingHelp,
                    }),
                  });
          }
        };
        dt(Re, "s_formattingHelp", new Map()), (Re = ct([w.PA], Re));
        var st = s(38340),
          he = s(1917),
          ht = s(11243),
          nt = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          mt = (l, t, c) =>
            t in l
              ? nt(l, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (l[t] = c),
          V = (l, t, c, g) => {
            for (
              var x = g > 1 ? void 0 : g ? pt(t, c) : t, F = l.length - 1, $;
              F >= 0;
              F--
            )
              ($ = l[F]) && (x = (g ? $(t, c, x) : $(x)) || x);
            return g && x && nt(t, c, x), x;
          },
          ut = (l, t, c) => mt(l, typeof t != "symbol" ? t + "" : t, c);
        let Ke = class extends D.Component {
          descAutoTextAreaRef = D.createRef();
          constructor(l) {
            super(l), (this.state = { bShowDragTarget: !1 });
          }
          componentDidMount() {
            f.pU.AddClanImageDragListener(this.ClanImageDragListener);
          }
          componentWillUnmount() {
            f.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
          }
          ClanImageDragListener(l, t) {
            this.state.bShowDragTarget != t &&
              this.setState({ bShowDragTarget: t });
          }
          onFocus(l) {
            l && l.target.select();
          }
          InsertText(l) {
            re.replaceSelection(this.GetTextAreaRef()?.current, l);
          }
          OnTextAreaDropListener(l) {
            if (
              (l.preventDefault(),
              l.stopPropagation(),
              l.dataTransfer.items && l.dataTransfer.items[0])
            ) {
              let t = l.dataTransfer.getData("text");
              if (t && t.length > 0) {
                for (let c of [I.zU.GetBaseURL(), I.zU.GetBaseURLV2()])
                  if (t.startsWith(c)) {
                    let g =
                      "[img]" + st.lw + "/" + t.substr(c.length) + "[/img]";
                    re.replaceSelection(this.GetTextAreaRef()?.current, g);
                    break;
                  }
              }
            }
          }
          GetTextAreaRef() {
            return this.descAutoTextAreaRef.current?.GetTextAreaRef();
          }
          render() {
            return (0, e.jsxs)(D.Fragment, {
              children: [
                (0, e.jsx)(fe, {
                  pathToImages:
                    ue.TS.COMMUNITY_CDN_URL +
                    "public/images/sharedfiles/guides/",
                  fnTextareaRef: this.GetTextAreaRef,
                  emoticonStore: this.props.emoticonStore,
                  supportBBCodes: this.props.limitBBCode
                    ? this.props.limitBBCode
                    : G.Kl,
                  bSupportHTMLImport: this.props.bSupportHTMLImport,
                  showFormatHelp: this.props.showFormatHelp,
                  bEmbeddedInDialog: this.props.bEmbeddedInDialog,
                  clanSteamID: this.props.clanSteamID,
                }),
                (0, e.jsx)("div", {
                  className: (0, o.A)(
                    ee().DescriptionCtn,
                    ee().BBCodeEditorInputStyles,
                    this.state.bShowDragTarget ? ee().DragTarget : "",
                    this.props.className ? this.props.className : "",
                  ),
                  children: (0, e.jsx)(Y, {
                    cols: 90,
                    rows: this.props.nOverridesRows || 22,
                    maxLength: 64e3,
                    className: (0, o.A)(
                      ee().DefaultEditor,
                      this.props.classNameForTextArea
                        ? this.props.classNameForTextArea
                        : "",
                    ),
                    placeholder: this.props.strPlaceholder,
                    ref: this.descAutoTextAreaRef,
                    value: this.props.fnGetCurText(),
                    onChange: this.props.fnOnTextChange,
                    onDrop: this.OnTextAreaDropListener,
                    emoticonStore: this.props.emoticonStore,
                    fnSetText: this.props.fnSetText,
                    supportBBCodes: this.props.limitBBCode
                      ? this.props.limitBBCode
                      : G.Kl,
                  }),
                }),
              ],
            });
          }
        };
        V([h.oI], Ke.prototype, "ClanImageDragListener", 1),
          V([h.oI], Ke.prototype, "onFocus", 1),
          V([h.oI], Ke.prototype, "OnTextAreaDropListener", 1),
          V([h.oI], Ke.prototype, "GetTextAreaRef", 1),
          (Ke = V([w.PA], Ke));
        class re {
          static BIsFireFox() {
            return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            );
          }
          static replaceSelection(t, c) {
            if (!t) return;
            let g = t.selectionStart;
            t.focus(),
              re.InsertTextAtSelect(c, t),
              t.setSelectionRange(g, g + c.length);
          }
          static getSelectedString(t) {
            return t
              ? t.value.substr(
                  t.selectionStart,
                  t.selectionEnd - t.selectionStart,
                )
              : "";
          }
          static wrapBBCode(t, c, g) {
            if (!g) return;
            let x = re.getSelectedString(g),
              F = "";
            x.indexOf(t) == 0 && x.lastIndexOf(c) == x.length - c.length
              ? (F = x.substr(t.length, x.length - t.length - c.length))
              : (F = t + x + c),
              re.replaceSelection(g, F);
          }
          static append(t, c) {
            c &&
              (c.focus(),
              c.setSelectionRange(c.value.length, c.value.length),
              re.InsertTextAtSelect(t, c));
          }
          static ClearTextArea(t) {
            if (t) {
              t.focus();
              const c = 0,
                g = t.value.length;
              if (c !== g) {
                t.setRangeText
                  ? t.setRangeText("", c, g, "preserve")
                  : (t.value = "");
                const x = new Event("input", { bubbles: !0 });
                t.dispatchEvent(x);
              }
              t.focus();
            }
          }
          static overwrite(t, c) {
            c && (re.ClearTextArea(c), re.InsertTextAtSelect(t, c));
          }
          static InsertTextAtSelect(t, c) {
            const g = c.selectionStart,
              x = c.selectionEnd;
            if (g !== null && x !== null) {
              c.setRangeText
                ? c.setRangeText(t, g, x, "preserve")
                : (c.value = c.value.slice(0, g) + t + c.value.slice(x));
              const F = new Event("input", { bubbles: !0 });
              c.dispatchEvent(F),
                (c.selectionStart = c.selectionEnd = g + t.length);
            }
            c.focus();
          }
        }
        let fe = class extends D.Component {
          m_linkPopupRef = D.createRef();
          onBold() {
            re.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef()?.current);
          }
          onItalics() {
            re.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef()?.current);
          }
          onUnderline() {
            re.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef()?.current);
          }
          onStrikeThrough() {
            re.wrapBBCode(
              "[strike]",
              "[/strike]",
              this.props.fnTextareaRef()?.current,
            );
          }
          onHeader() {
            re.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef()?.current);
          }
          onHeader2() {
            re.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef()?.current);
          }
          onHeader3() {
            re.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef()?.current);
          }
          onUnorderedList() {
            this.handleList("list");
          }
          onOrderedList() {
            this.handleList("olist");
          }
          handleList(l) {
            let t = this.props.fnTextareaRef()?.current;
            if (!t) return;
            let c =
                "[" +
                l +
                `]
`,
              g = "[/" + l + "]";
            if (t.selectionStart == t.selectionEnd)
              re.wrapBBCode(
                c + "[*]",
                `
` + g,
                t,
              );
            else {
              let x = re.getSelectedString(t),
                F =
                  c +
                  x
                    .split(`
`)
                    .map(($) => ($.match(/\*+\s/) ? "[*]" : "[*] ") + $)
                    .join(`
`) +
                  `
` +
                  g;
              re.replaceSelection(t, F);
            }
          }
          OnAddLink(l) {
            const t = this.props.fnTextareaRef();
            t &&
              (0, me.HT)(
                (0, e.jsx)(Ue, { textareaRef: t }),
                (0, Te.uX)(l) ?? window,
              );
          }
          ShowHelpDialog(l) {
            this.props.showFormatHelp &&
              (0, me.HT)(
                (0, e.jsx)(Re, { formatType: this.props.showFormatHelp }),
                (0, Te.uX)(l) ?? window,
              );
          }
          OnConvertHTMLToBBCodeDialog(l) {
            const t = this.props.fnTextareaRef();
            if (!t) return;
            const c = (0, Te.uX)(l) ?? window;
            (0, me.HT)((0, e.jsx)(ze, { ownerWindow: c, textareaRef: t }), c);
          }
          OnOpenYoutubeDialog(l) {
            const t = this.props.fnTextareaRef();
            if (!t) return;
            let c = ue.TS.IMG_URL + "applications/community/";
            (0, me.HT)(
              (0, e.jsx)(Ae, { textareaRef: t, pathToImages: c }),
              (0, Te.uX)(l) ?? window,
            );
          }
          OnOpenImageDialog(l) {
            const t = this.props.fnTextareaRef();
            t &&
              (0, me.HT)(
                (0, e.jsx)(Ye, { textareaRef: t }),
                (0, Te.uX)(l) ?? window,
              );
          }
          OnOpenSpeakerDialog(l) {
            const t = this.props.fnTextareaRef(),
              c = this.props.clanSteamID;
            !t ||
              !c ||
              (0, me.pg)(
                (0, e.jsx)(gt, { clanSteamID: c, textareaRef: t }),
                (0, Te.uX)(l) ?? window,
              );
          }
          OnEmoticonSelected(l, t = !1) {
            let c = `\u02D0${l}\u02D0`;
            re.replaceSelection(this.props.fnTextareaRef()?.current, c),
              this.props.fnTextareaRef()?.current?.focus();
          }
          BSupports(l) {
            return this.props.supportBBCodes.findIndex((t) => t == l) >= 0;
          }
          render() {
            const {
              showFormatHelp: l,
              bEmbeddedInDialog: t,
              bSupportHTMLImport: c,
              pathToImages: g,
            } = this.props;
            let x;
            return (
              l &&
                (t
                  ? (x = (0, e.jsx)("span", {
                      className: (0, o.A)("ttip", ee().ActionGetHelp),
                      children: (0, e.jsx)(Oe.he, {
                        toolTipContent: (0, u.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: (0, e.jsxs)("a", {
                          href: Re.GetHelpURL(l, !1),
                          target: ue.TS.IN_CLIENT ? void 0 : "_blank",
                          children: [
                            (0, e.jsx)("img", { src: g + "/action_help.png" }),
                            " ",
                            (0, u.we)(
                              "#EventEditor_FormattingHelp_GetHelpLink",
                            ),
                          ],
                        }),
                      }),
                    }))
                  : (x = (0, e.jsx)("span", {
                      onClick: this.ShowHelpDialog,
                      className: (0, o.A)("ttip", ee().ActionGetHelp),
                      children: (0, e.jsxs)(Oe.he, {
                        toolTipContent: (0, u.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: [
                          (0, e.jsx)("img", { src: g + "/action_help.png" }),
                          " ",
                          (0, u.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                        ],
                      }),
                    }))),
              (0, e.jsxs)("div", {
                className: ee().TextEditorToolBarContainer,
                children: [
                  this.BSupports("b") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onBold,
                      tooltip: (0, u.we)("#Editor_Bold"),
                      imgURL: this.props.pathToImages + "/format_bold.png",
                    }),
                  this.BSupports("u") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onUnderline,
                      tooltip: (0, u.we)("#Editor_Underline"),
                      imgURL: this.props.pathToImages + "/format_underline.png",
                    }),
                  this.BSupports("i") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onItalics,
                      tooltip: (0, u.we)("#Editor_Italics"),
                      imgURL: this.props.pathToImages + "/format_italic.png",
                    }),
                  this.BSupports("strike") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onStrikeThrough,
                      tooltip: (0, u.we)("#Editor_StrikeThrough"),
                      imgURL: this.props.pathToImages + "/format_strike.png",
                    }),
                  !!(this.BSupports("url") && !t) &&
                    (0, e.jsx)(xe, {
                      onClick: this.OnAddLink,
                      tooltip: (0, u.we)("#Editor_Link"),
                      imgURL: this.props.pathToImages + "/format_link.png",
                    }),
                  this.BSupports("list") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onUnorderedList,
                      tooltip: (0, u.we)("#Editor_Unordered"),
                      imgURL: this.props.pathToImages + "/format_bullet.png",
                    }),
                  this.BSupports("olist") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onOrderedList,
                      tooltip: (0, u.we)("#Editor_Ordered"),
                      imgURL: this.props.pathToImages + "/format_numbered.png",
                    }),
                  this.BSupports("h1") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onHeader,
                      tooltip: (0, u.we)("#Editor_Header"),
                      imgURL: this.props.pathToImages + "/format_header1.png",
                    }),
                  this.BSupports("h2") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onHeader2,
                      tooltip: (0, u.we)("#Editor_Header2"),
                      imgURL: this.props.pathToImages + "/format_header2.png",
                    }),
                  this.BSupports("h3") &&
                    (0, e.jsx)(xe, {
                      onClick: this.onHeader3,
                      tooltip: (0, u.we)("#Editor_Header3"),
                      imgURL: this.props.pathToImages + "/format_header3.png",
                    }),
                  this.BSupports("previewyoutube") &&
                    (0, e.jsx)(xe, {
                      onClick: this.OnOpenYoutubeDialog,
                      tooltip: (0, u.we)("#EventEditor_InsertYouTube"),
                      imgURL: $e,
                    }),
                  (0, e.jsx)("span", {
                    className: "ttip",
                    children:
                      this.props.emoticonStore &&
                      (0, e.jsx)(Oe.he, {
                        toolTipContent: (0, u.we)("#Editor_Emoticon"),
                        children: (0, e.jsx)(_e.A, {
                          title: " ",
                          className: (0, o.A)(ee().EmoteOuter),
                          disabled: !1,
                          OnEmoticonSelected: this.OnEmoticonSelected,
                          rtLastAckedNewEmoticons: Number.MAX_VALUE,
                          emoticonStore: this.props.emoticonStore,
                          useImg: this.props.pathToImages + "/format_emote.png",
                          contextOptions: {
                            bOverlapHorizontal: !0,
                            bDisablePopTop: !0,
                          },
                        }),
                      }),
                  }),
                  !!(this.BSupports("img") && !t) &&
                    (0, e.jsx)(xe, {
                      onClick: this.OnOpenImageDialog,
                      tooltip: (0, u.we)("#EventEditor_InsertImage"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(
                    ue.iA.is_support &&
                    this.props.clanSteamID &&
                    this.BSupports("speaker")
                  ) &&
                    (0, e.jsx)(xe, {
                      onClick: this.OnOpenSpeakerDialog,
                      tooltip: (0, u.we)("#EventEditor_AddSpeaker"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(c && !t) &&
                    (0, e.jsx)(xe, {
                      onClick: this.OnConvertHTMLToBBCodeDialog,
                      className: ee().ActionImportHTML,
                      tooltip: (0, u.we)("#EventEditor_ImportFromHTML_ttip"),
                      children: (0, u.we)("#EventEditor_ImportHTML"),
                    }),
                  x,
                ],
              })
            );
          }
        };
        V([h.oI], fe.prototype, "onBold", 1),
          V([h.oI], fe.prototype, "onItalics", 1),
          V([h.oI], fe.prototype, "onUnderline", 1),
          V([h.oI], fe.prototype, "onStrikeThrough", 1),
          V([h.oI], fe.prototype, "onHeader", 1),
          V([h.oI], fe.prototype, "onHeader2", 1),
          V([h.oI], fe.prototype, "onHeader3", 1),
          V([h.oI], fe.prototype, "onUnorderedList", 1),
          V([h.oI], fe.prototype, "onOrderedList", 1),
          V([h.oI], fe.prototype, "OnAddLink", 1),
          V([h.oI], fe.prototype, "ShowHelpDialog", 1),
          V([h.oI], fe.prototype, "OnConvertHTMLToBBCodeDialog", 1),
          V([h.oI], fe.prototype, "OnOpenYoutubeDialog", 1),
          V([h.oI], fe.prototype, "OnOpenImageDialog", 1),
          V([h.oI], fe.prototype, "OnOpenSpeakerDialog", 1),
          V([h.oI], fe.prototype, "OnEmoticonSelected", 1),
          (fe = V([w.PA], fe));
        function xe(l) {
          return (0, e.jsx)("span", {
            onClick: l.onClick,
            className: l.className,
            children: (0, e.jsxs)(Oe.he, {
              toolTipContent: l.tooltip,
              className: "ttip",
              children: [
                !!l.imgURL && (0, e.jsx)("img", { src: l.imgURL }),
                l.children,
              ],
            }),
          });
        }
        let Ae = class extends D.Component {
          state = { youtubeInput: "", alignment: he.V2.left };
          OnYoutubeInsertLink() {
            const l =
              this.state.youtubeInput && (0, v.XU)(this.state.youtubeInput);
            if (!l) {
              alert((0, u.we)("#EventEditor_InsertYouTube_NoURL"));
              return;
            }
            if (this.state.alignment == he.V2.summary) {
              const t =
                "https://www.youtube.com/watch?v=" +
                l.strVideoID +
                (l.nStartSeconds ? "&t=" + l.nStartSeconds : "");
              re.wrapBBCode(t, "", this.props.textareaRef.current);
            } else {
              let t =
                "[previewyoutube=" +
                l.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              re.wrapBBCode(
                t,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({ youtubeInput: "", alignment: he.V2.left });
          }
          OnUrlChange(l) {
            this.state.youtubeInput != l.target.value &&
              this.setState({ youtubeInput: l.target.value });
          }
          OnLeftSelected() {
            this.setState({ alignment: he.V2.left });
          }
          OnRightSelected() {
            this.setState({ alignment: he.V2.right });
          }
          OnFullSelected() {
            this.setState({ alignment: he.V2.full });
          }
          OnSummarySelected() {
            this.setState({ alignment: he.V2.summary });
          }
          OnOuterDivClickPassDown(l) {}
          render() {
            return (0, e.jsx)(ge.o0, {
              strTitle: (0, u.we)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, u.we)("#EventEditor_InsertYouTube"),
              className: ee().BBCodeEditorInputStyles,
              children: (0, e.jsxs)("div", {
                className: ee().YouTubeInput,
                children: [
                  (0, e.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, e.jsxs)("label", {
                      children: [
                        (0, e.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, u.we)("#EventEditor_InsertYouTube_URL"),
                        }),
                        (0, e.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, e.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            ref: (l) => {
                              l?.focus();
                            },
                            type: "text",
                            value: this.state.youtubeInput,
                            onChange: this.OnUrlChange,
                            placeholder: (0, u.we)(
                              "#EventEditor_InsertYouTube_Placholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: "DialogInputLabelGroup",
                    children: [
                      (0, e.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, u.we)(
                          "#EventEditor_InsertYouTube_Position",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: ee().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, e.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: he.V2.left,
                            value: he.V2.left,
                            checked: this.state.alignment == he.V2.left,
                            onChange: this.OnLeftSelected,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: he.V2.left,
                            children: (0, e.jsx)("span", {
                              children: (0, u.we)(
                                "#EventEditor_InsertYouTube_Left",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: ee().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, e.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: he.V2.right,
                            value: he.V2.right,
                            checked: this.state.alignment == he.V2.right,
                            onChange: this.OnRightSelected,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: he.V2.right,
                            children: (0, e.jsx)("span", {
                              children: (0, u.we)(
                                "#EventEditor_InsertYouTube_Right",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: ee().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, e.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: he.V2.full,
                            value: he.V2.full,
                            checked: this.state.alignment == he.V2.full,
                            onChange: this.OnFullSelected,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: he.V2.full,
                            children: (0, e.jsx)("span", {
                              children: (0, u.we)(
                                "#EventEditor_InsertYouTube_Full",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: ee().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, e.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: he.V2.summary,
                            value: he.V2.summary,
                            checked: this.state.alignment == he.V2.summary,
                            onChange: this.OnSummarySelected,
                          }),
                          (0, e.jsx)("label", {
                            htmlFor: he.V2.summary,
                            children: (0, e.jsx)("span", {
                              children: (0, u.we)(
                                "#EventEditor_InsertYouTube_Summary",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        V([h.oI], Ae.prototype, "OnYoutubeInsertLink", 1),
          V([h.oI], Ae.prototype, "OnUrlChange", 1),
          V([h.oI], Ae.prototype, "OnLeftSelected", 1),
          V([h.oI], Ae.prototype, "OnRightSelected", 1),
          V([h.oI], Ae.prototype, "OnFullSelected", 1),
          V([h.oI], Ae.prototype, "OnSummarySelected", 1),
          V([h.oI], Ae.prototype, "OnOuterDivClickPassDown", 1),
          (Ae = V([w.PA], Ae));
        let Ue = class extends D.Component {
          state = { textToDisplay: "", strURL: "" };
          LoadFromTextArea() {
            const { textareaRef: l } = this.props;
            if (l && l.current) {
              let t = re.getSelectedString(l.current),
                c = Ue.m_regExp.exec(t);
              c
                ? this.setState({ strURL: c[1], textToDisplay: c[2] })
                : this.setState({ textToDisplay: t });
            }
          }
          componentDidMount() {
            this.LoadFromTextArea();
          }
          onLinkTitleUpdate(l) {
            this.setState({ textToDisplay: l.target.value });
          }
          onLinkURLUpdate(l) {
            this.setState({ strURL: l.target.value });
          }
          onInsertLink() {
            const { strURL: l, textToDisplay: t } = this.state;
            let c = "[url=" + l + "]" + t + "[/url]";
            re.replaceSelection(this.props.textareaRef.current, c);
          }
          render() {
            return (0, e.jsx)(ge.o0, {
              strTitle: (0, u.we)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, u.we)("#EventEditor_InsertLinkURL"),
              className: ee().BBCodeEditorInputStyles,
              children: (0, e.jsxs)("div", {
                className: ee().EventEditorLinkInput,
                children: [
                  (0, e.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, e.jsxs)("label", {
                      children: [
                        (0, e.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, u.we)("#EventEditor_LinkDescription"),
                        }),
                        (0, e.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, e.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkTitleUpdate,
                            value: this.state.textToDisplay,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, e.jsxs)("label", {
                      children: [
                        (0, e.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, u.we)("#EventEditor_LinkURL"),
                        }),
                        (0, e.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, e.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkURLUpdate,
                            value: this.state.strURL,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        ut(Ue, "m_regExp", new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i)),
          V([h.oI], Ue.prototype, "onLinkTitleUpdate", 1),
          V([h.oI], Ue.prototype, "onLinkURLUpdate", 1),
          V([h.oI], Ue.prototype, "onInsertLink", 1),
          (Ue = V([w.PA], Ue));
        let Ye = class extends D.Component {
          refFirstInput = D.createRef();
          state = { imgURL: "", anchorURL: "" };
          componentDidMount() {
            this.refFirstInput.current?.focus();
          }
          OnImageInsert() {
            const { anchorURL: l, imgURL: t } = this.state;
            let c = "",
              g = "";
            l && l.length > 0 && ((c += "[url=" + l + "]"), (g = "[/url]" + g)),
              (c += "[img]" + t),
              (g = "[/img]" + g),
              re.wrapBBCode(c, g, this.props.textareaRef.current);
          }
          OnImageURLChange(l) {
            this.state.imgURL != l.target.value &&
              this.setState({ imgURL: l.target.value });
          }
          OnAnchorURLChange(l) {
            this.state.anchorURL != l.target.value &&
              this.setState({ anchorURL: l.target.value });
          }
          render() {
            const { imgURL: l, anchorURL: t } = this.state;
            return (0, e.jsx)(ge.o0, {
              strTitle: (0, u.we)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, u.we)("#EventEditor_InsertImage_Title"),
              className: ee().BBCodeEditorInputStyles,
              children: (0, e.jsxs)("div", {
                className: ee().EventEditorLinkInput,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, u.we)("#EventEditor_InsertImage_Desc"),
                  }),
                  (0, e.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, e.jsxs)("label", {
                      children: [
                        (0, e.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, u.we)("#EventEditor_InsertImage_URL"),
                        }),
                        (0, e.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, e.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: l,
                            onChange: this.OnImageURLChange,
                            placeholder: (0, u.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                            ref: this.refFirstInput,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, e.jsxs)("label", {
                      children: [
                        (0, e.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, u.we)(
                            "#EventEditor_InsertImage_Anchor",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, e.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: t,
                            onChange: this.OnAnchorURLChange,
                            placeholder: (0, u.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        V([h.oI], Ye.prototype, "OnImageInsert", 1),
          V([h.oI], Ye.prototype, "OnImageURLChange", 1),
          V([h.oI], Ye.prototype, "OnAnchorURLChange", 1),
          (Ye = V([w.PA], Ye));
        const gt = (l) => {
          const [t, c] = D.useState(""),
            [g, x] = D.useState(""),
            [F, $] = D.useState(""),
            [oe, ve] = D.useState(""),
            [Me, ye] = D.useState(void 0),
            [be, ke] = D.useState(void 0),
            { data: Le } = (0, qe.Dv)(),
            { isLoading: Ge, data: je } = (0, Ve.js)(be?.GetAccountID()),
            Pe = () => {
              let ie = `[speaker name="${t.trim()}"`;
              if (
                (g.trim().length > 0 && (ie += ` title="${g}"`),
                F.trim().length > 0 && (ie += ` company="${F}"`),
                Me)
              ) {
                const Ie =
                  st.lw + "/" + Me.clanAccountID + "/" + I.zU.GetHashAndExt(Me);
                ie += ` photo="${Ie}"`;
              }
              be && (ie += ` steamid="${be.ConvertTo64BitString()}"`),
                (ie += `]${oe}[/speaker]`),
                re.replaceSelection(l.textareaRef.current, ie);
            },
            we = t.trim().length != 0 && oe.trim().length != 0,
            Ne = 184;
          return (0, e.jsx)(ge.o0, {
            strTitle: (0, u.we)("#EventEditor_AddSpeaker"),
            strDescription: (0, u.we)("#EventEditor_AddSpeaker_Desc"),
            closeModal: l.closeModal,
            onCancel: l.closeModal,
            bOKDisabled: !we,
            onOK: Pe,
            className: ee().BBCodeEditorInputStyles,
            children: (0, e.jsxs)("div", {
              className: ee().InsertSpeakerCtn,
              children: [
                (0, e.jsx)(Q.pd, {
                  type: "text",
                  label: (0, u.we)("#EventEditor_AddSpeaker_Name"),
                  value: t,
                  onChange: (ie) => c(ie.target.value),
                  focusOnMount: !0,
                }),
                (0, e.jsxs)("div", {
                  className: ee().TitleGroup,
                  children: [
                    (0, e.jsx)(Q.pd, {
                      type: "text",
                      label: (0, u.we)("#EventEditor_AddSpeaker_Title"),
                      value: g,
                      onChange: (ie) => x(ie.target.value),
                    }),
                    (0, e.jsx)(Q.pd, {
                      type: "text",
                      label: (0, u.we)("#EventEditor_AddSpeaker_Company"),
                      value: F,
                      onChange: (ie) => $(ie.target.value),
                    }),
                  ],
                }),
                (0, e.jsx)(Oe.he, {
                  toolTipContent: (0, u.we)(
                    "#EventEditor_AssociateSteamAccount_ttip",
                  ),
                  children: (0, e.jsxs)("div", {
                    className: "DialogLabel",
                    children: [
                      (0, u.we)("#EventEditor_AssociateSteamAccount"),
                      " (?)",
                    ],
                  }),
                }),
                (0, e.jsxs)("div", {
                  children: [
                    Ge &&
                      (0, e.jsx)(We.t, {
                        string: (0, u.we)("#Loading"),
                        size: "small",
                      }),
                    be &&
                      je &&
                      (0, e.jsxs)("a", {
                        href:
                          ue.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          be.ConvertTo64BitString(),
                        target: "_blank",
                        children: [
                          je
                            ? (0, e.jsx)("img", {
                                style: { marginRight: "8px" },
                                src: je.avatar_url,
                              })
                            : null,
                          je ? je.m_strPlayerName : null,
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: ee().AssociateRowCtn,
                      children: [
                        (0, e.jsx)(Q.$n, {
                          onClick: () => ke(new _.b(ue.iA.steamid)),
                          children: (0, u.we)(
                            "#EventEditor_SteamAccount_addme",
                          ),
                        }),
                        (0, e.jsx)(Q.$n, {
                          onClick: (ie) =>
                            (0, R.lX)(
                              (0, e.jsx)(_t, {
                                friends: Le ?? [],
                                setSteamID: ke,
                              }),
                              ie,
                            ),
                          children: (0, u.we)(
                            "#EventEditor_SteamAccount_addfriend",
                          ),
                        }),
                        (0, e.jsx)(Q.$n, {
                          onClick: () => ke(void 0),
                          children: (0, u.we)(
                            "#EventEditor_SteamAccount_clear",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: ee().PhotoCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, u.we)("#EventEditor_ChoosePhoto"),
                    }),
                    (0, e.jsx)(J, {
                      clanSteamID: l.clanSteamID,
                      inputClanImage: Me,
                      setImage: ye,
                      nWidth: Ne,
                      nHeight: Ne,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: ee().AboutCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, u.we)("#EventEditor_AddSpeaker_About"),
                    }),
                    (0, e.jsx)(Q.Cl, {
                      value: oe,
                      onChange: (ie) => ve(ie.target.value),
                      rows: 8,
                      cols: 80,
                      nMinHeight: 40,
                      placeholder: (0, u.we)(
                        "#EventEditor_AddSpeaker_About_Placeholder",
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: ee().PreviewCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, u.we)("#Button_Preview"),
                    }),
                    (0, e.jsx)(Qe.$k, {
                      company: F,
                      name: t,
                      title: g,
                      bioString: oe,
                      photo: Me ? Me.url : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
        function _t(l) {
          const { friends: t, setSteamID: c } = l;
          return (0, e.jsx)("div", {
            className: ee().DropDownScroll,
            children: t.map((g) =>
              (0, e.jsx)(ft, { steamid: g, setSteamID: c }, g),
            ),
          });
        }
        function ft(l) {
          const { steamid: t, setSteamID: c } = l,
            { data: g } = (0, Ve.js)(t);
          return (0, e.jsx)(et.kt, {
            onSelected: () => c(new _.b(t)),
            children: (0, e.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                g &&
                  (0, e.jsx)("img", {
                    className: Fe().WhitelistAvatar,
                    src: g.avatar_url,
                  }),
                g?.m_strPlayerName,
              ],
            }),
          });
        }
        let ze = class extends D.Component {
          m_isMounted = !1;
          m_bAppend = !1;
          constructor(l) {
            super(l), (this.state = { bPreserveNewLines: !1, strHTMLData: "" });
          }
          componentDidMount() {
            this.m_isMounted = !0;
          }
          componentWillUnmount() {
            this.m_isMounted = !1;
          }
          OnConvertAndOverriteHTML() {
            (this.m_bAppend = !1), this.ConvertBBCode();
          }
          OnConvertAndAppendHTML() {
            (this.m_bAppend = !0), this.ConvertBBCode();
          }
          async ConvertHtmlToBBCode(l, t) {
            let c = new URLSearchParams();
            return (
              c.append("content", l),
              c.append("preserve_newlines", t ? "1" : "0"),
              (
                await A().post(
                  ue.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
                  c,
                )
              ).data.content
            );
          }
          ConvertBBCode() {
            this.setState({ bConverting: !0 }),
              this.ConvertHtmlToBBCode(
                this.state.strHTMLData,
                this.state.bPreserveNewLines,
              )
                .then((l) => {
                  this.m_isMounted &&
                    (this.m_bAppend
                      ? re.append(l, this.props.textareaRef.current)
                      : re.overwrite(l, this.props.textareaRef.current),
                    this.setState({
                      bConverting: !1,
                      bFinishedConverting: !0,
                    }));
                })
                .catch((l) => {
                  (0, me.pg)(
                    (0, e.jsx)(ge.KG, {
                      strTitle: (0, u.we)("#EventEditor_ConvertHTML_Error"),
                      strDescription: (0, u.we)(
                        "#EventEditor_ConvertHTML_Error_Desc",
                        l.response && l.response.data ? l.response.data.msg : l,
                      ),
                      bAlertDialog: !0,
                      bDestructiveWarning: !0,
                    }),
                    this.props.ownerWindow,
                    { strTitle: (0, u.we)("#EventEditor_ConvertHTML_Error") },
                  );
                });
          }
          OnCheckboxChange(l) {
            let t = l.target.checked;
            t != this.state.bPreserveNewLines &&
              this.setState({ bPreserveNewLines: t });
          }
          OnTextAreaChange(l) {
            this.setState({ strHTMLData: l.currentTarget.value });
          }
          render() {
            const { closeModal: l } = this.props;
            return this.state.bConverting
              ? (0, e.jsx)(ge.o0, {
                  strTitle: (0, u.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, u.we)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: l,
                  bAlertDialog: !0,
                  onOK: l,
                  onCancel: l,
                  children: (0, e.jsx)(We.t, {}),
                })
              : this.state.bFinishedConverting
                ? (0, e.jsx)(ge.o0, {
                    strTitle: (0, u.we)("#EventEditor_ImportFromHTML"),
                    strDescription: (0, u.we)(
                      "#EventEditor_ImportFromHTML_ConvertFinished",
                    ),
                    closeModal: l,
                    bAlertDialog: !0,
                    onOK: l,
                    onCancel: l,
                  })
                : (0, e.jsx)(ge.eV, {
                    title: (0, u.we)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: l,
                    className: ee().BBCodeEditorInputStyles,
                    children: (0, e.jsxs)(Q.nB, {
                      children: [
                        (0, e.jsx)(Q.a3, {
                          children: (0, e.jsxs)("div", {
                            className: (0, o.A)(
                              se().FlexColumnContainer,
                              ee().ImportHTMLCtn,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: se().FlexColumnContainer,
                                children: (0, u.PP)(
                                  "#EventEditor_ImportFromHTML_ConvertDescription",
                                  (0, e.jsx)("a", {
                                    target: ue.TS.IN_CLIENT ? void 0 : "_blank",
                                    href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                                    children: (0, u.we)(
                                      "#EventEditor_ImportFromHTML_ConvertLearn",
                                    ),
                                  }),
                                ),
                              }),
                              (0, e.jsx)("textarea", {
                                value: this.state.strHTMLData,
                                placeholder: (0, u.we)(
                                  "#EventEditor_ImportFromHTML_Instruction",
                                ),
                                className: ee().ImportHTMLTextArea,
                                onChange: this.OnTextAreaChange,
                                ref: (t) => {
                                  t?.focus();
                                },
                              }),
                              (0, e.jsxs)("div", {
                                className: ee().ImportHTMLCheckBoxLine,
                                children: [
                                  (0, e.jsx)("input", {
                                    id: "ImportFromHTMLNewLines",
                                    type: "checkbox",
                                    checked: this.state.bPreserveNewLines,
                                    onChange: this.OnCheckboxChange,
                                  }),
                                  (0, e.jsxs)("label", {
                                    htmlFor: "ImportFromHTMLNewLines",
                                    children: [
                                      (0, u.we)(
                                        "#EventEditor_ImportFromHTML_PreserveNewlines",
                                      ),
                                      (0, e.jsx)(ht.o, {
                                        tooltip: (0, u.we)(
                                          "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                children: (0, u.we)(
                                  "#EventEditor_ImportFromHTML_ConvertToBBCode",
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, e.jsx)(Q.wi, {
                          children: (0, e.jsx)(Q.VQ, {
                            onCancel: () => l?.(),
                            strOKText: (0, u.we)("#Button_Overwrite"),
                            onUpdate: this.OnConvertAndAppendHTML,
                            strUpdateText: (0, u.we)("#Button_Append"),
                          }),
                        }),
                      ],
                    }),
                  });
          }
        };
        V([h.oI], ze.prototype, "OnConvertAndOverriteHTML", 1),
          V([h.oI], ze.prototype, "OnConvertAndAppendHTML", 1),
          V([h.oI], ze.prototype, "OnCheckboxChange", 1),
          V([h.oI], ze.prototype, "OnTextAreaChange", 1),
          (ze = V([w.PA], ze));
        var Ct = s(31151),
          It = s(87847),
          vt = s(26040),
          Et = s(86244),
          Ze = s.n(Et);
        const xt = (0, w.PA)((l) => {
          const { appid: t, eventLink: c } = l,
            g = D.useRef(null),
            { data: x } = (0, Ve.js)(ue.iA.steamid),
            [F, $] = D.useState(""),
            [oe, ve] = D.useState(!1),
            [Me, ye] = D.useState(""),
            [be, ke] = D.useState(!1);
          D.useEffect(
            () => () => {
              g.current?.("ShareEventOnFriendsActivityFeed: unmounting");
            },
            [],
          );
          const Le = x?.avatar_url,
            Ge = _.b.InitFromAccountID(ue.iA.accountid),
            je = async () => {
              g.current &&
                g.current(
                  "ShareEventOnFriendsActivityFeed: cancel previous...",
                );
              const Pe = A().CancelToken.source();
              (g.current = Pe.cancel), ve(!0);
              let we = F;
              we.trim().length != 0 &&
                (we += `

`),
                (we += c);
              const Ne =
                ue.TS.COMMUNITY_BASE_URL +
                "profiles/" +
                Ge.ConvertTo64BitString() +
                "/ajaxpostuserstatus";
              try {
                if (ue.TS.IN_STEAMUI) {
                  let ie = y.w.Init(E.kVt);
                  ie.Body().set_appid(t), ie.Body().set_status_text(we);
                  let Ie = await E.xtC.PostStatusToFriends(
                    p.Vw.CMInterface.GetServiceTransport(),
                    ie,
                  );
                  if (Ie.GetEResult() != z.R) {
                    const pe =
                      (0, u.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      Ie.GetEResult();
                    console.error(pe, !Pe.token.reason),
                      Pe.token.reason || ye(pe);
                    return;
                  }
                } else {
                  const ie = new FormData();
                  ie.append("appid", "" + t),
                    ie.append("status_text", we),
                    ie.append("sessionid", (0, ue.KC)());
                  const Ie = await A().post(Ne, ie, { withCredentials: !0 });
                  if (Ie.status != 200 || Ie?.data?.success != z.R) {
                    const pe =
                      (0, u.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      Ie?.data?.message;
                    console.error(pe), Pe.token.reason || ye(pe);
                    return;
                  }
                }
                Pe.token.reason ||
                  (ke(!0), ye((0, u.we)("#EventDisplay_Share_Success")));
              } catch (ie) {
                const Ie = (0, ce.H)(ie),
                  pe =
                    (0, u.we)("#EventDisplay_Share_Failure") +
                    `

` +
                    Ie.strErrorMsg;
                Pe.token.reason || ye(pe), console.error(pe);
              }
            };
          return oe
            ? (0, e.jsx)(ge.o0, {
                strDescription: "",
                strTitle: (0, u.we)("#Button_Share"),
                onCancel: l.closeModal,
                onOK: l.closeModal,
                bAlertDialog: !0,
                children: (0, e.jsxs)("div", {
                  className: se().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, u.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: Ze().Container,
                      children: [
                        Me?.length == 0
                          ? (0, e.jsx)(We.t, { position: "center" })
                          : (0, e.jsx)("div", { children: Me }),
                        !!be &&
                          (0, e.jsx)("a", {
                            href:
                              ue.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              Ge.ConvertTo64BitString() +
                              "/home",
                            target: ue.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, u.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, e.jsx)(ge.o0, {
                strDescription: "",
                strTitle: (0, u.we)("#Button_Share"),
                onCancel: l.closeModal,
                onOK: je,
                strOKButtonText: (0, u.we)("#Button_Post"),
                children: (0, e.jsxs)("div", {
                  className: se().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, u.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, o.A)(
                        Ze().Container,
                        se().FlexColumnContainer,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("img", {
                              className: Ze().SmallAvatar,
                              src: Le,
                              "data-miniprofile": "s" + ue.iA.steamid,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, o.A)(se().FlexColumnContainer),
                              children: (0, e.jsx)(Ke, {
                                strPlaceholder: (0, u.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => F,
                                fnOnTextChange: (Pe) =>
                                  $(Pe.currentTarget.value),
                                fnSetText: $,
                                emoticonStore: l.emoticonStore,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: G.iH,
                                classNameForTextArea: Ze().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: Ze().ShareLink,
                          children: (0, e.jsx)(vt.Rh, {
                            linkWidgets: (0, It.rx)(),
                            children: (0, e.jsx)(Ct.Zn, {
                              text: c,
                              partnerEventStore: l.partnerEventStore,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        });
      },
      79167: (Z, q, s) => {
        "use strict";
        s.d(q, { I: () => h });
        var e = s(7850),
          L = s(90626),
          A = s(30096),
          w = s(75844),
          D = s(8323),
          G = s(18210),
          z = s(16412),
          y = s(36118),
          p = s(81315),
          _ = s.n(p),
          E = s(13854),
          R = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          I = (r, M, P, C) => {
            for (
              var n = C > 1 ? void 0 : C ? v(M, P) : M, i = r.length - 1, o;
              i >= 0;
              i--
            )
              (o = r[i]) && (n = (C ? o(M, P, n) : o(n)) || n);
            return C && n && R(M, P, n), n;
          },
          f = ((r) => (
            (r.topleft = "topleft"),
            (r.top = "top"),
            (r.topright = "topright"),
            (r.left = "left"),
            (r.middle = "middle"),
            (r.right = "right"),
            (r.bottomleft = "bottomleft"),
            (r.bottom = "bottom"),
            (r.bottomright = "bottomright"),
            r
          ))(f || {});
        let h = class extends L.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new D.Ji();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(r) {
            super(r),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(r) {
            this.m_elLinkRegionBox = r;
          }
          OnMouseDown(r, M) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (P) => {
                this.OnMouseUp(P, M);
              }),
              (this.m_fnMouseMove = (P) => {
                this.OnMouseMove(P, M);
              }),
              this.setState({ EdgeDown: M }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((r.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((r.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              r.preventDefault(),
              r.stopPropagation();
          }
          OnMouseMove(r, M) {
            if (this.state.EdgeDown !== void 0) {
              switch ((r.shiftKey && this.m_fnMouseUp(), M)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(r.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(r.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(r.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(r.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(r.clientY),
                    curLeftPosPct: this.CalcLeftEdge(r.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(r.clientY),
                    curRightPosPct: this.CalcRightEdge(r.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(r.clientX),
                    curBottomPosPct: this.CalcBottomEdge(r.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(r.clientX),
                    curBottomPosPct: this.CalcBottomEdge(r.clientY),
                  });
                  break;
                }
                case "middle": {
                  const P = (0, E.OQ)(
                      this.CalcLeftEdge(r.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    C = 100 - (P + this.state.curWidthPct),
                    n = (0, E.OQ)(
                      this.CalcTopEdge(r.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    i = 100 - (n + this.state.curHeightPct),
                    o = {
                      curLeftPosPct: P,
                      curRightPosPct: C,
                      curTopPosPct: n,
                      curBottomPosPct: i,
                    };
                  this.setState(o);
                  break;
                }
                default:
                  break;
              }
              r.preventDefault(), r.stopPropagation();
            }
          }
          IsValidPct(r) {
            return r >= 0 && r <= 100;
          }
          UpdateState(r) {
            let M =
                r.curTopPosPct !== void 0
                  ? r.curTopPosPct
                  : this.state.curTopPosPct,
              P =
                r.curBottomPosPct !== void 0
                  ? r.curBottomPosPct
                  : this.state.curBottomPosPct,
              C =
                r.curLeftPosPct !== void 0
                  ? r.curLeftPosPct
                  : this.state.curLeftPosPct,
              n =
                r.curRightPosPct !== void 0
                  ? r.curRightPosPct
                  : this.state.curRightPosPct,
              i = (0, E.OQ)(
                100 - n - C,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              o = (0, E.OQ)(
                100 - P - M,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (r.curLeftPosPct !== void 0 || r.curRightPosPct !== void 0
                ? (o = i / this.m_aspectRatio)
                : (i = o * this.m_aspectRatio)),
              r.curLeftPosPct !== void 0
                ? (C = 100 - n - i)
                : (n = 100 - (C + i)),
              r.curTopPosPct !== void 0
                ? (M = 100 - P - o)
                : (P = 100 - (M + o));
            const a = 100 - n - C,
              d = 100 - P - M;
            this.IsValidPct(C) &&
              this.IsValidPct(n) &&
              this.IsValidPct(M) &&
              this.IsValidPct(P) &&
              this.IsValidPct(a) &&
              this.IsValidPct(d) &&
              this.setState({
                curLeftPosPct: C,
                curRightPosPct: n,
                curTopPosPct: M,
                curBottomPosPct: P,
              });
          }
          GetXPercent(r) {
            return this.m_rectLinkRegion
              ? ((r - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(r) {
            return this.m_rectLinkRegion
              ? ((r - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(r) {
            return (0, E.OQ)(this.GetXPercent(r), 0, 100);
          }
          CalcRightEdge(r) {
            return (0, E.OQ)(
              100 - (this.GetXPercent(r) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(r) {
            return (0, E.OQ)(this.GetYPercent(r), 0, 100);
          }
          CalcBottomEdge(r) {
            return (0, E.OQ)(
              100 - (this.GetYPercent(r) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(r, M) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({ EdgeDown: void 0 }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(r) {
            this.setState({
              text_link_url: r.target.value,
              valid_link: this.validateUrl(r.target.value),
            });
          }
          OnSetLinkDescriptionChange(r) {
            this.setState({ text_link_description: r.target.value });
          }
          validateUrl(r) {
            return r != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  r,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({ bEditingLink: !this.state.bEditingLink }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({ bEditingLink: !this.state.bEditingLink });
          }
          render() {
            let r = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              M = _().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (M += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
              (0, e.jsxs)("div", {
                className: M,
                style: r,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, e.jsxs)("div", {
                    className: _().LinkRegionGridBox,
                    children: [
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Top}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "top");
                        },
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopRight}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Left}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "left");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsxs)("div", {
                        className: `${_().LinkRegionEdge} ${_().Middle}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, e.jsx)("div", {
                              className: _().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, e.jsx)(y.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, e.jsx)("div", {
                              className: _().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, e.jsx)(y.xv8, {}),
                            }),
                          (0, e.jsxs)("div", {
                            className: _().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Right}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "right");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Bottom}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, e.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                        onMouseDown: (P) => {
                          this.OnMouseDown(P, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, e.jsxs)("div", {
                      className: _().LinkRegionInfo,
                      children: [
                        (0, e.jsx)(z.pd, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, G.we)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)(z.pd, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, G.we)("#SteamTV_LinkDescription"),
                          placeholder: (0, G.we)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, e.jsxs)("div", {
                          className: _().LinkRegionButtonContainer,
                          children: [
                            (0, e.jsxs)(z.$n, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, G.we)("#Button_OK"), " "],
                            }),
                            (0, e.jsxs)(z.$n, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, G.we)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        I([A.oI], h.prototype, "LinkRegionBoxRef", 1),
          I([A.oI], h.prototype, "OnMouseDown", 1),
          I([A.oI], h.prototype, "OnMouseMove", 1),
          I([A.oI], h.prototype, "OnMouseUp", 1),
          I([A.oI], h.prototype, "HandleDelete", 1),
          I([A.oI], h.prototype, "OnSetLinkURLChange", 1),
          I([A.oI], h.prototype, "OnSetLinkDescriptionChange", 1),
          I([A.oI], h.prototype, "OnSaveLink", 1),
          I([A.oI], h.prototype, "OnEditLink", 1),
          (h = I([w.PA], h));
      },
      21254: (Z, q, s) => {
        "use strict";
        s.d(q, { q: () => r, t: () => P });
        var e = s(7850),
          L = s(90626),
          A = s(25279),
          w = s(72849),
          D = s(16412),
          G = s(79167),
          z = s(96538),
          y = s(36707),
          p = s(18210),
          _ = s(30096),
          E = s(50666),
          R = s.n(E),
          v = s(82734),
          I = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          h = (C, n, i, o) => {
            for (
              var a = o > 1 ? void 0 : o ? f(n, i) : n, d = C.length - 1, O;
              d >= 0;
              d--
            )
              (O = C[d]) && (a = (o ? O(n, i, a) : O(a)) || a);
            return o && a && I(n, i, a), a;
          };
        class r extends L.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const n = this.props.uploadFile.GetCanvasImageSource();
            n &&
              (await M(
                this.props.uploadFile,
                n,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(n, i) {
            this.setState({ region: i });
          }
          GetDestWidth() {
            const { uploadFile: n, forceResolution: i } = this.props;
            if (i) return i.width;
            const o = n.GetCurrentImageOption();
            if (!o) return 0;
            const a = A.Fj[o.artworkType].width;
            return o ? (0, A.qj)(a) : 0;
          }
          GetDestHeight() {
            const { uploadFile: n, forceResolution: i } = this.props;
            if (i) return i.width;
            const o = n.GetCurrentImageOption();
            if (!o) return 0;
            const a = A.Fj[o.artworkType].height;
            return o ? (0, A.qj)(a) : 0;
          }
          GetLargestBoxThatFits(n, i, o, a) {
            let d = o,
              O = (d * i) / Math.max(n, 1);
            return (
              O > a && ((O = a), (d = (O * n) / Math.max(i, 1))),
              { width: d, height: O }
            );
          }
          GetPreviewWindowStyle() {
            const { region: n } = this.state,
              i = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              o = i.width,
              a = i.height,
              d = 1 / Math.max(n.widthPct / 100, 1e-4),
              O = 1 / Math.max(n.heightPct / 100, 1e-4),
              b = (this.props.uploadFile.width * n.xPosPct) / 100,
              K = (this.props.uploadFile.height * n.yPosPct) / 100,
              N = (o * d) / this.props.uploadFile.width,
              m = (a * O) / this.props.uploadFile.height,
              B = -b * N,
              W = -K * m;
            return {
              width: o,
              height: a,
              backgroundPosition: `${B}px ${W}px`,
              backgroundSize: `${100 * d}% ${100 * O}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const n = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              i = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              o = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, e.jsx)(z.x_, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, e.jsxs)("div", {
                className: (0, y.A)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, e.jsx)(D.iK, {
                    children: (0, p.we)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, y.A)("DialogBodyText"),
                    children: (0, p.we)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, e.jsxs)("div", {
                    className: E.CropImage,
                    style: { width: o.width, height: o.height },
                    children: [
                      (0, e.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, e.jsx)(G.I, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: n,
                        heightMinPct: i,
                        widthPct: n,
                        heightPct: i,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: E.CropPreviewGroup,
                    children: [
                      (0, e.jsx)("div", {
                        className: E.CropPreviewLabel,
                        children: (0, p.we)("#ImageUpload_CropPreview"),
                      }),
                      (0, e.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(D.jn, {
                    onClick: this.OnCrop,
                    children: (0, p.we)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        h([_.oI], r.prototype, "OnCrop", 1),
          h([_.oI], r.prototype, "UpdateCrop", 1);
        async function M(C, n, i, o, a, d, O, b, K) {
          return new Promise((N, m) => {
            const B = P(K);
            if (!B) {
              m("Invalid format provided");
              return;
            }
            const W = document.createElement("canvas");
            (W.width = O),
              (W.height = b),
              W.getContext("2d")?.drawImage(n, i, o, a, d, 0, 0, O, b),
              W.toBlob((u) => {
                const le = W.toDataURL(B);
                if (K !== w.bg.dU && le.startsWith("data:image/png")) {
                  m("Unable to encode into the requested file format");
                  return;
                }
                if (!u) {
                  m("Unable to apply crop into image");
                  return;
                }
                (C.file = (0, v.pE)(u, C.filename)),
                  (C.width = O),
                  (C.height = b),
                  (C.dataUrl = le),
                  (C.uploadTime = Date.now()),
                  (C.bCropped = !0),
                  N();
              });
          });
        }
        function P(C) {
          switch (C) {
            case w.bg.dU:
              return "image/png";
            case w.bg.iS:
              return "image/jpeg";
          }
        }
      },
      19418: (Z) => {
        Z.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      99312: (Z) => {
        Z.exports = {
          DragTarget: "_2sUvh2ZpsDAw1xNqgRBELg",
          DragOnTopOfMe: "_1mvpIyLL0-Pd4QMIoRXHtu",
          DescriptionCtn: "_3DQEBNkYGY3hyLFAjhtq7V",
          EventEditorLinkInput: "_25nbuIEmk-BBWxsSvWGG1n",
          DefaultEditor: "NENu2K19GJmLf1Asga-WF",
          ImportHTMLCtn: "_3sVZHF23hli8ijIwtMs8oU",
          ImportHTMLTextArea: "DHbRFUDVAeXGluFH-smoE",
          ImportHTMLConvertButtons: "lnyZaHhcGtBzDU0SMlFd1",
          ImportHTMLCheckBoxLine: "_3R3FNRLSeiOwBgELGjSPbz",
          OptionRow: "_2Y3MLEmGvWMI8BoNZgCllJ",
          TextEditorToolBarContainer: "_2bOpQtX5QAuQxfGhEJ_iYg",
          EmoteOuter: "_1x3UOXJkizqKhkssRfFjSS",
          YouTubeInput: "_3WXTC22teDkm8BMc01ZTLA",
          YouTubePreviewInsertOption: "_6ocliVvrdQxHPu-upv6-s",
          DropDownScroll: "P0-tbY3743fHY8SAzfF6b",
          InsertSpeakerCtn: "_2f-6Yv5h7xjUcZCrepnQhg",
          TitleGroup: "_1ddLhT39tQNuR4ljq6Nfg5",
          AssociateRowCtn: "_2HeY5m9J-kxRVzGn8dAwv5",
          PhotoCtn: "_2-f4CX_EyXfhRUmPdIey4w",
          AboutCtn: "_3hF9cNUOsfV0BkzEaWn7FM",
          PreviewCtn: "_VCRyh7nyN-2xDV6yH6Sg",
          BBCodeEditorInputStyles: "F506h2OVFDcZeXFtyqthY",
        };
      },
      34510: (Z) => {
        Z.exports = {
          BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
          Active: "_2vTzhbuJFb9_vHvquo2L-L",
          BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
        };
      },
      64233: (Z) => {
        Z.exports = { Image: "_1po_jxHTSix3Li3w5ZnMBB" };
      },
      90024: (Z) => {
        Z.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      79786: (Z) => {
        Z.exports = {
          Emoticon_Toggle: "Y5J3nttqNZsLax6MbnH-L",
          Active: "YCbwLzK9cJ7QissjKq11n",
          Emoticon: "_2o57_fRPxv5_x6BkjL_cgc",
        };
      },
      17618: (Z) => {
        Z.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      86244: (Z) => {
        Z.exports = {
          Container: "_2vGr9KsApU0s59_ZsZVxXY",
          SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
          ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
          ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
        };
      },
      81315: (Z) => {
        Z.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      41609: (Z) => {
        Z.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      77700: (Z) => {
        Z.exports = {
          narrowWidth: "500px",
          mentionDialogPosition: "_3isL0ZmZcmPqrXDdNiNSsm",
          mentionDialog: "_1QU3cLCGXCmYTUvjYiqqz6",
          mentionSearchText: "_1xVcZo7UqD1Idiz3hcGoHg",
          suggestOption: "vquL9mspYzz2tBtxrzqw9",
          mentionSearchOption: "_3O0sMruBIaruOmKJLJre-J",
          manyMatches: "_1cweL4uxVeoeKoymO9IuaT",
          selected: "boNOGnexLhWO9Nd0e6-0A",
          nickname: "_2dKJqMZUnKQIInZReBkcRI",
          mentionSearchMatch: "_2_0t_pDYqkDefMC0gDZV8G",
        };
      },
      50666: (Z) => {
        Z.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
    },
  ]);
})();
