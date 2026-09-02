/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9281],
    {
      21438: (z, Y, a) => {
        "use strict";
        a.d(Y, { A4: () => _, LU: () => p, sK: () => C });
        var e = a(7850),
          E = a(90626),
          S = a(36631),
          w = a(3166);
        const W = {
            editModel: null,
            bClanImagesV2: !1,
            setClanImagesV2: void 0,
          },
          I = E.createContext(W);
        function _(c) {
          const { children: O, editModel: U } = c,
            { bClanImagesV2: X, setClanImagesV2: B } = s();
          return (0, e.jsx)(I.Provider, {
            value: { ...W, editModel: U, bClanImagesV2: X, setClanImagesV2: B },
            children: (0, e.jsx)(S.Cs, { location: S.uF, children: O }),
          });
        }
        function j() {
          return E.useContext(I);
        }
        function p() {
          return j().editModel;
        }
        function s() {
          const c = "storeUseClanImagesV2",
            [O, U] = E.useState(() => !!localStorage.getItem(c)),
            X = E.useCallback((B) => {
              B ? localStorage.setItem(c, "1") : localStorage.removeItem(c),
                U(B);
            }, []);
          return { bClanImagesV2: O, setClanImagesV2: X };
        }
        function C() {
          const c = E.useContext(I),
            O = !1;
          return {
            bClanImagesV2: c.bClanImagesV2 && O,
            bClanImagesV2Allowed: O,
            setClanImagesV2: c.setClanImagesV2,
          };
        }
      },
      4748: (z, Y, a) => {
        "use strict";
        a.d(Y, { G: () => R });
        var e = a(7850),
          E = a(99412),
          S = a(41735),
          w = a.n(S),
          W = a(75844),
          I = a(65946),
          _ = a(90626),
          j = a(19316),
          p = a(89084),
          s = a(75909),
          C = a(72805),
          c = a(55486),
          O = a.n(c),
          U = a(38745),
          X = a(85096),
          B = a(95695),
          ne = a.n(B),
          y = a(2801),
          D = a(88003),
          g = a(85599),
          x = a(34592),
          b = a(36707),
          n = a(18210),
          $ = a(54963),
          m = a(96043),
          H = a(40888),
          u = a.n(H);
        function G(r) {
          const t = (0, _.useRef)(null);
          (0, _.useEffect)(() => {
            var P;
            (P = t.current) == null || P.showModal();
            const V = document.body.style.overflow;
            return (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = V;
              }
            );
          }, []);
          const l =
              typeof r.prevSrc == "string"
                ? (0, e.jsx)("img", { src: r.prevSrc })
                : r.prevSrc,
            o =
              typeof r.mainSrc == "string"
                ? (0, e.jsx)("img", { src: r.mainSrc })
                : r.mainSrc,
            v =
              typeof r.nextSrc == "string"
                ? (0, e.jsx)("img", { src: r.nextSrc })
                : r.nextSrc,
            h = [
              u().LightboxDialog,
              ...(r.backgroundClassName ? [r.backgroundClassName] : []),
            ];
          return (0, e.jsxs)("dialog", {
            ref: t,
            className: (0, b.A)(...h),
            onClose: (P) => r.onCloseRequest(P),
            onKeyDown: (P) => {
              P.key === "ArrowRight" && r.nextSrc
                ? r.onMoveNextRequest(P)
                : P.key === "ArrowLeft" && r.prevSrc && r.onMovePrevRequest(P);
            },
            children: [
              r.prevSrc &&
                (0, e.jsx)("div", {
                  className: (0, b.A)(
                    u().LightboxImageContainer,
                    u().LightboxPrevImage,
                  ),
                  children: l,
                }),
              (0, e.jsx)("div", {
                className: (0, b.A)(
                  u().LightboxImageContainer,
                  u().LightboxMainImage,
                ),
                tabIndex: 0,
                onClick: (P) => {
                  P.target.nodeName !== "IMG" && r.onCloseRequest(P);
                },
                children: o,
              }),
              r.nextSrc &&
                (0, e.jsx)("div", {
                  className: (0, b.A)(
                    u().LightboxImageContainer,
                    u().LightboxNextImage,
                  ),
                  children: v,
                }),
              (0, e.jsxs)("div", {
                className: u().LightboxToolbar,
                children: [
                  (0, e.jsx)("span", {
                    className: u().LightboxImageTitle,
                    children: r.imageTitle,
                  }),
                  (0, e.jsxs)("div", {
                    className: u().LightboxToolbarButtons,
                    children: [
                      r.toolbarButtons,
                      (0, e.jsx)("button", {
                        className: u().LightboxCloseButton,
                        onClick: r.onCloseRequest,
                      }),
                    ],
                  }),
                ],
              }),
              r.prevSrc &&
                (0, e.jsx)("button", {
                  className: u().LightboxLeftButton,
                  onClick: r.onMovePrevRequest,
                }),
              r.nextSrc &&
                (0, e.jsx)("button", {
                  className: u().LightboxRightButton,
                  onClick: r.onMoveNextRequest,
                }),
            ],
          });
        }
        var A = a(21438),
          F = a(53424);
        let Q = 1;
        const R = (0, W.PA)((r) => {
          const {
              clanSteamID: t,
              appid: l,
              imageInsertCallBack: o,
              partnerEventStore: v,
              bHideDragAndDrop: h,
              bShowLightBox: P,
              fnSetImageURL: V,
              rgRealmList: Z,
              fnLangHasData: L,
              fnGetImageHash: Ie,
            } = r,
            [ve, ie] = _.useState(""),
            [je, le] = _.useState(0),
            [q, ae] = _.useState(),
            [re, te] = _.useState(void 0),
            [he, N] = _.useState(!F.pU.BHasLoadedClanImages(t)),
            [se, De] = _.useState(void 0),
            Ce = (0, $.YR)(() => w().CancelToken.source());
          _.useEffect(
            () => () => Ce.cancel("ClanImagePicker component unmounted"),
            [Ce],
          );
          const Te = (0, $.YR)(() => new Map()),
            [Se, xe] = (0, _.useState)(null),
            { bClanImagesV2: Ae } = (0, A.sK)(),
            Oe = t.GetAccountID(),
            ye = _.useCallback(
              () => F.pU.LoadClanImages(t, !1, Ce.token),
              [Ce, Oe],
            ),
            Re = _.useCallback(async () => {
              if (!Te.has(t.GetAccountID()))
                try {
                  await ye(), Ce.token.reason || N(!1);
                } catch (me) {
                  let ge = (0, x.H)(me);
                  console.error(
                    "ClanImagePicker Failed: " +
                      ge.strErrorMsg +
                      " errCode: " +
                      ge.strErrorMsg,
                  ),
                    Te.set(t.GetAccountID(), ge.strErrorMsg),
                    Ce.token.reason || (N(!1), De(ge.strErrorMsg));
                }
            }, [Ce, t, Te, ye]);
          _.useEffect(() => {
            he && Re();
          }, [Re, he]);
          const i = _.useCallback(() => {
            N(!0), Re();
          }, [Re]);
          _.useEffect(() => {
            i();
          }, [Oe, i]);
          const M = F.pU.BHasLoadedClanImages(t);
          _.useEffect(() => {
            M || i();
          }, [M, i]);
          const f = () => {
              ie(ve), le(null);
            },
            d = async (me) => {
              if (me && me.length > 0) {
                const ge = Ae ? new s.vN(t, null) : new s.VE(t, null);
                xe(ge);
                let ue = !0,
                  ce = Array.from(me);
                for (let Me = 0; ue && Me < ce.length; Me++) {
                  let pe = ce[Me];
                  (ue = await ge.AddImage(pe, E.Bhc)),
                    ue ||
                      (console.error(
                        "ClanImagePicker.OnDropFiles: failed on i=" +
                          Me +
                          " file=" +
                          pe.name,
                      ),
                      (0, D.pg)(
                        (0, e.jsx)(y.KG, {
                          strDescription: (0, n.we)(
                            "#ImagePicker_Error",
                            pe.name,
                          ),
                        }),
                        window,
                      ));
                }
                return ue && (ie(""), le(++Q), ge.UploadAllImages()), ue;
              }
              return !1;
            },
            K = (me) => {
              if (me && P) {
                let ge = F.pU.GetFilteredClanImages(t, ve.trim().toLowerCase()),
                  ue = ge.findIndex((ce, Me, pe) => me.imageid == ce.imageid);
                ue >= 0 && (ae(ue), te(ge));
              }
            },
            T = () => {
              ae(void 0), te(void 0);
            },
            k = (me) => {
              if (q != null) {
                const ge = re[q];
                T(),
                  requestAnimationFrame(() => {
                    o(ge, me);
                  });
              }
            },
            fe = () => {
              k(p._o.k_eInsertFullImage);
            },
            Ee = () => {
              k(p._o.k_eInsertThumbnail);
            },
            Pe = (me) => {
              (0, D.pg)(
                (0, e.jsx)(m.$, {
                  primaryLocalizedImage: me,
                  appid: l,
                  clanSteamID: t,
                  fnSetImageURL: V,
                  rgRealmList: Z,
                  fnLangHasData: L,
                  fnGetImageHash: Ie,
                  partnerEventStore: v,
                }),
                window,
              );
            };
          if (se)
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", { children: (0, n.we)("#Error_Message") }),
                (0, e.jsx)("div", { children: se }),
                (0, e.jsx)("div", {
                  className: (0, b.A)(ne().Button),
                  onClick: Re,
                  children: (0, n.we)("#Button_Retry"),
                }),
              ],
            });
          if (he)
            return (0, e.jsx)(g.t, {
              position: "center",
              string: (0, n.we)("#Loading"),
            });
          let de = re;
          return (0, e.jsxs)("div", {
            className: (0, b.A)(O().PickerContainer),
            children: [
              (0, e.jsx)(X.g, { fnSetImageSearch: (me) => ie(me) }),
              (0, e.jsx)("div", {
                className: O().ImagesContainer,
                children: (0, e.jsx)(C.GF, {
                  clanAccountID: t.GetAccountID(),
                  fileNameSearch: ve,
                  imageInsertCallBack: o,
                  fnOnExpandImage: K,
                  InternalOpenLocalizeImageGroup: Pe,
                }),
              }),
              je > 0 &&
                (0, e.jsx)(
                  J,
                  { uploader: Se, onDismiss: f },
                  "clanimageuploaderview" + je,
                ),
              !h && (0, e.jsx)(U.D, { onDropFiles: d }),
              q != null &&
                (0, e.jsx)(G, {
                  mainSrc: de[q].url,
                  imageTitle: de[q].file_name,
                  nextSrc: q < de.length - 1 ? de[q + 1].url : void 0,
                  prevSrc: q > 0 ? de[q - 1].url : void 0,
                  onMoveNextRequest: () => ae(q + 1),
                  onMovePrevRequest: () => ae(q - 1),
                  onCloseRequest: T,
                  toolbarButtons: [
                    (0, e.jsx)(
                      "button",
                      {
                        className: O().Full,
                        onClick: fe,
                        children: (0, n.we)("#ImagePicker_FullSize"),
                      },
                      "fullsize",
                    ),
                    (0, e.jsx)(
                      "button",
                      {
                        className: O().Full,
                        onClick: Ee,
                        children: (0, n.we)("#ImagePicker_Thumbnail"),
                      },
                      "thumbnail",
                    ),
                  ],
                }),
              (0, e.jsx)(ee, {}),
            ],
          });
        });
        function ee(r) {
          const {
            bClanImagesV2: t,
            bClanImagesV2Allowed: l,
            setClanImagesV2: o,
          } = (0, A.sK)();
          return (0, e.jsx)(e.Fragment, {
            children:
              l &&
              o &&
              (0, e.jsx)(j.Yh, {
                className: O().EnableClanImagesV2,
                label: "New media conversion",
                checked: t,
                onChange: (v) => o(v),
              }),
          });
        }
        function J(r) {
          const { uploader: t, onDismiss: l } = r,
            [o, v] = (0, I.q3)(() => [
              t.BAllDone(),
              !t.BAllDone() && !t.BHasError(),
            ]),
            h = t.GetLastErrorFile();
          return (0, e.jsxs)("div", {
            className: O().UploaderContainer,
            children: [
              v &&
                (0, e.jsxs)("div", {
                  className: O().UploaderRunning,
                  children: [
                    (0, e.jsx)("div", {
                      className: O().UploaderDesc,
                      children: (0, n.we)(
                        "#ImageUpload_Desc",
                        t.GetCompletedFiles(),
                        t.GetTotalFiles(),
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: "DialogButton",
                      onClick: () => {
                        t.CancelAllUploads(), l();
                      },
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                  ],
                }),
              t.BHasError() &&
                h &&
                (0, e.jsxs)("div", {
                  className: O().UploadMessageAndButtonsContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: O().UploadError,
                      children: (0, n.we)(
                        "#ImageUpload_Error",
                        h.file.name,
                        h.status,
                        h.message,
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: O().UploadButtonCancel,
                      onClick: l,
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                    (0, e.jsx)("button", {
                      className: O().UploadButtonRetry,
                      onClick: () => t.RetryAllFailedUploads(),
                      children: (0, n.we)("#Button_Retry"),
                    }),
                  ],
                }),
              !!o &&
                (0, e.jsx)("div", {
                  className: O().UploadMessageAndButtonsContainer,
                  children: (0, e.jsx)("div", {
                    className: O().UploadSuccess,
                    children: (0, n.we)("#ImageUpload_Success"),
                  }),
                }),
            ],
          });
        }
      },
      96043: (z, Y, a) => {
        "use strict";
        a.d(Y, { $: () => $ });
        var e = a(7850),
          E = a(72604),
          S = a(41735),
          w = a.n(S),
          W = a(75844),
          I = a(90626),
          _ = a(76559),
          j = a(35524),
          p = a(19316),
          s = a(9709),
          C = a.n(s),
          c = a(95682),
          O = a(95695),
          U = a.n(O),
          X = a(2801),
          B = a(85599),
          ne = a(34592),
          y = a(18210),
          D = a(54963),
          g = a(79573),
          x = a(11243),
          b = a(51746),
          n = a(29630);
        const $ = (0, W.PA)((m) => {
          const {
              closeModal: H,
              appid: u,
              partnerEventStore: G,
              primaryLocalizedImage: A,
              clanSteamID: F,
              fnSetImageURL: Q,
              rgRealmList: R,
              fnLangHasData: ee,
              fnGetImageHash: J,
            } = m,
            [r, t] = I.useState(),
            [l, o] = I.useState(!0),
            [v, h] = I.useState(),
            P = (0, D.YR)(() => w().CancelToken.source());
          I.useEffect(
            () => () => P.cancel("LocalizedImageDialog component unmounted"),
            [P],
          );
          const V = I.useCallback(async () => {
              var ae;
              try {
                const re = _.b.InitFromClanID(A.clanAccountID),
                  te = await n.zU.AsyncGetImageResolution(
                    re,
                    A.image_hash,
                    A.file_type,
                    P,
                    !1,
                  );
                if (P.token.reason) return;
                if (te.success != E.R || !te.width || !te.height) {
                  console.error(
                    "LocalizedImageDialog : failed to determine the primary image resolution. " +
                      ((ae = te.err_msg) != null ? ae : ""),
                  ),
                    h({ strMsg: te.err_msg });
                  return;
                }
                h(void 0), t(te);
              } catch (re) {
                let te = (0, ne.H)(re);
                console.error("LocalizedImageDialog : " + te.strErrorMsg, te),
                  h({ strMsg: te.strErrorMsg });
              }
            }, [P, A.clanAccountID, A.file_type, A.image_hash]),
            Z = I.useCallback(async () => {
              try {
                await j.R.DetermineAvailableLocalizationForGroup(P),
                  P.token.reason || o(!1);
              } catch (ae) {
                let re = (0, ne.H)(ae);
                console.error("LocalizedImageDialog : " + re.strErrorMsg, re);
              }
            }, [P]),
            L = I.useCallback(() => V().then(Z), [Z, V]),
            Ie = I.useCallback(() => {
              h(void 0), L();
            }, [L]);
          I.useEffect(() => {
            H &&
              (j.R.SetPrimaryImageForImageGroup(A, "localized_image_group"),
              L());
          }, [H, L, A]);
          const ve = !l && r,
            ie = r ? ` - ${r.width}x${r.height}` : "",
            je = (0, b.EG)(A.file_type).slice(1),
            le =
              r != null && r.width && r != null && r.height
                ? { width: r.width, height: r.height }
                : void 0,
            q = n.zU.GenerateURLFromHashAndExt(F, n.zU.GetHashAndExt(A));
          return (0, e.jsx)(X.eV, {
            bAllowFullSize: !0,
            title: (0, y.we)("#ImagePickerLoc_Title"),
            onCancel: H,
            closeModal: H,
            children: (0, e.jsx)(p.nB, {
              children: (0, e.jsxs)(p.a3, {
                children: [
                  (0, e.jsx)("div", {
                    className: U().FlexRowContainer,
                    children: (0, e.jsxs)("span", {
                      className: U().FlexColumnContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, y.we)("#ImagePickerLoc_Default"),
                            (0, e.jsx)(x.o, {
                              tooltip: (0, y.we)(
                                "#ImagePickerLoc_Default_Hint",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", { className: s.TitleImg, src: q }),
                        (0, e.jsx)("div", {
                          children: A.file_name + ie + " - " + je,
                        }),
                      ],
                    }),
                  }),
                  !!v &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, y.we)("#Error_Message"),
                        }),
                        !!(v != null && v.strMsg) &&
                          (0, e.jsx)("div", { children: v.strMsg }),
                        (0, e.jsx)("div", {
                          className: U().Button,
                          onClick: Ie,
                          children: (0, y.we)("#Button_Retry"),
                        }),
                      ],
                    }),
                  !ve &&
                    !v &&
                    (0, e.jsx)(B.t, {
                      position: "center",
                      string: (0, y.we)("#Loading"),
                    }),
                  ve &&
                    (0, e.jsxs)(I.Fragment, {
                      children: [
                        (0, e.jsx)(c.t, {
                          clanSteamID: F,
                          rgSupportArtwork: [],
                          localizedPrimaryImage: A,
                          forceResolution: le,
                          bAllowPreviousClanImageSelection: !0,
                          fnSetImageURL: Q,
                          rgRealmList: R,
                        }),
                        (0, e.jsx)("div", {
                          className: s.ArtworkBar,
                          children: (0, e.jsx)(g.it, {
                            clanSteamID: F,
                            eventModel: void 0,
                            artworkType: "localized_image_group",
                            title: (0, y.we)("#ImagePickerLoc_Title"),
                            realms: R,
                            fnLangHasData: ee,
                            appid: u,
                            fnGetImageHashAndExt: J,
                            fnSetImageURL: Q,
                            partnerEventStore: G,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          });
        });
      },
      95174: (z, Y, a) => {
        "use strict";
        a.d(Y, { u: () => Q, z: () => R });
        var e = a(7850),
          E = a(9046),
          S = a(99412),
          w = a(19298),
          W = a(68266),
          I = a(56492),
          _ = a(72609),
          j = a(33327),
          p = a(21721),
          s = a(95995),
          C = a(29522),
          c = a(40358),
          O = a(72865),
          U = a(41032),
          X = a(65946),
          B = a(68031),
          ne = a(90626),
          y = a(90825),
          D = a(33924),
          g = a.n(D),
          x = a(86866),
          b = a(18654),
          n = a.n(b),
          $ = a(78069),
          m = a(72429),
          H = a(13465),
          u = a(36118),
          G = a(36707),
          A = a(3166);
        const F = 30;
        function Q(ee) {
          var J, r;
          const {
              event: t,
              imageURLOverride: l,
              bShowAssociatedApp: o,
              langOverride: v,
              onClick: h,
              eEventRount: P,
              bHidePrices: V,
              nSummaryMaxLength: Z,
            } = ee,
            L = (0, U.Zj)(t.appid),
            Ie = (0, x.n)(),
            ve = v || (0, S.sfN)(_.TS.LANGUAGE),
            ie =
              (J = (0, W.m0)(
                l !== void 0 ? void 0 : t,
                "capsule",
                ve,
                E.wI.capsule_main,
              )) != null
                ? J
                : l,
            je =
              (r = (0, W.m0)(
                l !== void 0 ? void 0 : t,
                "capsule",
                ve,
                E.wI.full,
              )) != null
                ? r
                : l,
            [le, q, ae, re] = (0, X.q3)(() => [
              t.GetNameWithFallback(ve) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(ve, Z),
              t.GetSubTitleWithLanguageFallback(ve) || "",
            ]),
            te = (0, C.$5)(t.appid),
            { data: he } = (0, c.lv)(te),
            N = [];
          if ((ie && N.push(ie), je && je !== ie && N.push(je), he)) {
            const xe = (0, p.b0)(he, "main_capsule");
            xe && N.push(xe);
          }
          const [se, De] = (0, ne.useState)(ie),
            Ce = (xe, Ae, Oe) => {
              Oe >= N.length && De(void 0), De(N[Oe + 1]);
            };
          if (!t)
            return (0, e.jsx)("div", { className: g().OtherEvents_EventCtn });
          const Te = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
          let Se = re;
          return (
            re && (re.length > F || le.length > F) && (Se = void 0),
            (0, e.jsxs)("div", {
              className: g().EventSizer,
              children: [
                (0, e.jsxs)(I.tj, {
                  className: (0, G.A)(
                    g().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    g().HoversEnabled,
                  ),
                  eventModel: t,
                  route: P || I.PH.k_eView,
                  onClick: h,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, G.A)(
                        g().EventSummaryContainer,
                        g().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: g().EventSummaryType,
                          children: q,
                        }),
                        (0, e.jsx)("div", {
                          className: g().EventSummaryText,
                          children: ae,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: g().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: se ? `url(${(0, y.j3)(se)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: g().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, G.A)(
                            g().OtherEvents_MainImageCtn,
                            L && g().MaskImages,
                          ),
                          children: (0, e.jsx)(H.c, {
                            rgSources: N,
                            onIncrementalError: Ce,
                            className: g().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: g().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: g().OtherEvents_TextTitle,
                              children: le,
                            }),
                            !!Se &&
                              (0, e.jsx)("div", {
                                className: g().OtherEvents_SubTitle,
                                children: Se,
                              }),
                            (0, e.jsxs)(B.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, G.A)(
                                    g().EventType,
                                    g().ShowInWideMode,
                                  ),
                                  children: q,
                                }),
                                Te > Ie
                                  ? (0, e.jsx)("div", {
                                      className: (0, G.A)(
                                        g().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, e.jsx)(m.K4, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          t.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, e.jsx)(m.K4, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        t.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, G.A)(
                                g().EventSummaryText,
                                g().ShowInWideMode,
                              ),
                              children: ae,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(o && t.appid) &&
                  (0, e.jsx)(R, { appid: t.appid, bHidePrice: V }),
              ],
            })
          );
        }
        function R(ee) {
          const { appid: J, bHidePrice: r } = ee,
            t = (0, C.$5)(J),
            { data: l } = (0, c.J$)(t),
            { data: o } = (0, c.lv)(t),
            { data: v } = (0, c.Q_)(t),
            h = (0, O.n9)(),
            P = (0, A.Qn)();
          if (!o || !l) return null;
          const V = v && v.hide_discount_pct_for_compliance;
          return (0, e.jsx)(s.A, {
            appID: J,
            children: (0, e.jsxs)(w.Z, {
              className: (0, G.A)(g().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, $.S)(l, h, P, !1),
              children: [
                (0, e.jsx)(j.Q, {
                  id: t,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, G.A)(g().AppCapsuleImage, g().CapsuleShadow),
                    src: (0, p.b0)(o, "small_capsule"),
                    alt: l.name,
                  }),
                }),
                !r &&
                  !l.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, G.A)(
                      g().AppCapsulePrice,
                      v != null && v.discount_pct ? n().Discounted : "",
                    ),
                    children: [
                      !!(v != null && v.discount_pct && V) &&
                        (0, e.jsx)("div", {
                          className: n().DiscountIconCtn,
                          children: (0, e.jsx)(u.XH_, {}),
                        }),
                      !!(v != null && v.discount_pct && !V) &&
                        (0, e.jsx)("span", {
                          className: n().StoreSaleDiscountBox,
                          children: `-${v == null ? void 0 : v.discount_pct}%`,
                        }),
                      v &&
                        v.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: n().StoreSalePriceBox,
                          children: v.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      89084: (z, Y, a) => {
        "use strict";
        a.d(Y, { _o: () => w, fW: () => I, fw: () => W });
        var e = a(98112),
          E = a(38340),
          S = a(29630),
          w = ((_) => (
            (_[(_.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
            (_[(_.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
            (_[(_.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
            (_[(_.k_eInsertVideo = 4)] = "k_eInsertVideo"),
            _
          ))(w || {});
        function W(_, j = !1) {
          return j
            ? `${E.lw}/${_.clanAccountID}/${S.zU.GetThumbHashAndExt(_)}`
            : `${E.lw}/${_.clanAccountID}/${S.zU.GetHashAndExt(_)}`;
        }
        function I(_, j, p) {
          let s = "";
          const C = W(j);
          if (p == 4)
            (s = "[video webm="),
              j.file_type == e.bg.pJ && (s += C),
              (s += " mp4="),
              j.file_type == e.bg.nn && (s += C),
              (s += " autoplay=true controls=false][/video]");
          else if (p == 2) s = "[img]" + C + "[/img]";
          else {
            const c = W(j, !0);
            s = "[url=" + C + "][img]" + c + "[/img][/url]";
          }
          _.InsertText(s);
        }
      },
      35524: (z, Y, a) => {
        "use strict";
        a.d(Y, { R: () => y });
        var e = a(72604),
          E = a(99412),
          S = a(41735),
          w = a.n(S),
          W = a(14947),
          I = a(76559),
          _ = a(41635),
          j = a(3166),
          p = a(9046),
          s = a(29630),
          C = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          O = (D, g, x) =>
            g in D
              ? C(D, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: x,
                })
              : (D[g] = x),
          U = (D, g, x, b) => {
            for (
              var n = b > 1 ? void 0 : b ? c(g, x) : g, $ = D.length - 1, m;
              $ >= 0;
              $--
            )
              (m = D[$]) && (n = (b ? m(g, x, n) : m(n)) || n);
            return b && n && C(g, x, n), n;
          },
          X = (D, g, x) => O(D, typeof g != "symbol" ? g + "" : g, x);
        const B = class We {
          constructor() {
            X(this, "m_curLocImageGroup", null),
              X(this, "m_curLocImageGroupType", null),
              (0, W.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(g, x, b, n) {
            let $ =
                j.TS.COMMUNITY_BASE_URL +
                "gid/" +
                x.ConvertTo64BitString() +
                "/hasclanimagefile",
              m = { image_hash_and_ext: b, lang: "" + n };
            return (
              (await w().get($, { params: m, cancelToken: g && g.token })).data
                .success == e.R
            );
          }
          SetPrimaryImageForImageGroup(g, x) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != g.imageid ||
              x != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: g,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = x),
              (this.m_curLocImageGroup.localized_images = (0, _.$Y)(
                this.m_curLocImageGroup.localized_images,
                E.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            var g;
            return (g = this.m_curLocImageGroup) == null
              ? void 0
              : g.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(g, x) {
            var b;
            if (this.m_curLocImageGroup) {
              let n = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[x]
                ? this.m_curLocImageGroup.localized_images[x]
                : s.zU.GenerateURLFromHashAndExt(
                    g,
                    (b = s.zU.GetHashAndExt(n)) != null ? b : "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(g) {
            var x;
            if (!this.m_curLocImageGroup) return;
            const b = this.m_curLocImageGroup.primaryImage,
              n = I.b.InitFromClanID(b.clanAccountID),
              $ = (x = s.zU.GetHashAndExt(b)) != null ? x : "",
              m = [];
            for (let u = E.Bhc; u < E.bP9; ++u)
              m.push(We.BDoesClanImageFileExistsOnCDNOrOrigin(g, n, $, u));
            const H = await Promise.all(m);
            (0, W.h5)(() => {
              var u;
              for (let G = E.Bhc; G < E.bP9; ++G)
                H[G] &&
                  (this.m_curLocImageGroup.localized_images[G] =
                    s.zU.GenerateURLFromHashAndExtAndLang(
                      n,
                      $,
                      p.wI.full,
                      G,
                      (u = this.m_curLocImageGroupType) != null ? u : void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(g, x, b) {
            var n;
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[g] = b
                ? s.zU.GenerateURLFromHashAndExtAndLang(
                    x,
                    b,
                    p.wI.full,
                    g,
                    (n = this.m_curLocImageGroupType) != null ? n : void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(g, x) {
            var b;
            if (!this.m_curLocImageGroup) return;
            let n = this.m_curLocImageGroup.primaryImage;
            if ((n == null ? void 0 : n.image_hash) == g) {
              const $ = I.b.InitFromClanID(n.clanAccountID),
                m = s.zU.GetHashAndExt(n);
              m &&
                (this.m_curLocImageGroup.localized_images[x] =
                  s.zU.GenerateURLFromHashAndExtAndLang(
                    $,
                    m,
                    p.wI.full,
                    x,
                    (b = this.m_curLocImageGroupType) != null ? b : void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((b) => s.zU.GetHashAndExtFromURL(b));
          }
        };
        U([W.sH], B.prototype, "m_curLocImageGroup", 2);
        let ne = B;
        const y = new ne();
      },
      71242: (z, Y, a) => {
        "use strict";
        a.d(Y, { u: () => e });
        function e(E) {
          if (!E) return E;
          const S = E.lastIndexOf(".");
          return S === -1 ? E : E.substring(0, S);
        }
      },
      95682: (z, Y, a) => {
        "use strict";
        a.d(Y, { t: () => B });
        var e = a(7850),
          E = a(65946),
          S = a(90626),
          w = a(75909),
          W = a(35524),
          I = a(38410),
          _ = a(53424),
          j = a(50109),
          p = a(2801),
          s = a(88003),
          C = a(85599),
          c = a(34592),
          O = a(18210),
          U = a(38080),
          X = a(72805);
        function B(ne) {
          const {
              clanSteamID: y,
              rgSupportArtwork: D,
              localizedPrimaryImage: g,
              bAllowPreviousClanImageSelection: x,
              fnSetImageURL: b,
              rgRealmList: n,
            } = ne,
            [$] = (0, E.q3)(() => [j.O.Get().GetCurEditLanguage()]),
            m = (0, w.zO)(y, D, g),
            H = ne.uploaderOverride || m,
            [u, G] = S.useState(!1),
            A = S.useCallback(
              async (R, ee) => {
                var J, r;
                if (!u) {
                  G(!0);
                  try {
                    const { language: t } = (0, I.jj)(
                        (J = R.file_name) != null ? J : "",
                        $,
                      ),
                      l = (0, I.PD)(t, $, n);
                    await H.AddExistingClanImage(R, l);
                  } catch (t) {
                    let l = (0, c.H)(t);
                    console.error("AddExistingClanImage: " + l.strErrorMsg, l),
                      (0, s.pg)(
                        (0, e.jsx)(p.KG, {
                          strDescription: (0, O.we)(
                            "#EventError_Code",
                            (r = l.strErrorMsg) != null ? r : "",
                          ),
                        }),
                        window,
                      );
                  }
                  G(!1);
                }
              },
              [u, H, $, n],
            ),
            F = S.useMemo(
              () =>
                x
                  ? [
                      [
                        (0, e.jsx)(
                          X.Hd,
                          { clanSteamID: y, OnClanImageSelected: A },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [A, x, y],
            ),
            Q = (R) => {
              var ee;
              for (const J of R) {
                const r = J.uploadResult;
                if (r != null && r.origimagehash) {
                  const t = (0, I.PD)(r.language, $, n);
                  W.R.AddLocalizeImageUploaded(r.origimagehash, t);
                } else {
                  const t = _.pU.GetClanImageByImageHash(
                      y,
                      (ee = r == null ? void 0 : r.image_hash) != null
                        ? ee
                        : "",
                    ),
                    l = J.image.GetCurrentImageOption();
                  if (t && l) {
                    const o = (0, I.PD)(J.image.language, $, n);
                    b(l.artworkType, t, o);
                  }
                }
              }
            };
          return (0, e.jsx)(U.O9, {
            ...ne,
            imageUploader: H,
            rgRealmList: n,
            elAdditonalButtons: u
              ? [
                  (0, e.jsx)(
                    C.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, O.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : F,
            fnUploadComplete: Q,
          });
        }
      },
      72805: (z, Y, a) => {
        "use strict";
        a.d(Y, { GF: () => H, Hd: () => J, ge: () => G });
        var e = a(7850),
          E = a(72604),
          S = a(98112),
          w = a(90626),
          W = a(89084),
          I = a(76559),
          _ = a(53424),
          j = a(7638),
          p = a(55436),
          s = a(95695),
          C = a.n(s),
          c = a(64377),
          O = a(2801),
          U = a(88003),
          X = a(85599),
          B = a(34592),
          ne = a(36707),
          y = a(82734),
          D = a(18210),
          g = a(53732),
          x = a.n(g),
          b = a(71647),
          n = a.n(b),
          $ = a(85096),
          m = a(29630);
        const H = w.memo(function (t) {
          const {
            fileNameSearch: l,
            clanAccountID: o,
            imageInsertCallBack: v,
            fnOnExpandImage: h,
            showImageActions: P = !0,
            InternalOpenLocalizeImageGroup: V,
          } = t;
          return (0, e.jsx)(u, {
            clanAccountID: o,
            fileNameSearch: l,
            children: (Z, L) =>
              Z.map((Ie) =>
                (0, e.jsx)(
                  A,
                  {
                    clanImage: Ie,
                    searchStringHilight: L,
                    imageInsertCallBack: v,
                    showImageActions: P,
                    fnOnOpenLocalizedImageGroup: V,
                    OnImageClick: h,
                  },
                  Ie.imageid,
                ),
              ),
          });
        });
        function u(r) {
          const { clanAccountID: t, fileNameSearch: l, children: o } = r,
            v = (0, _.n9)(t),
            h = l.trim().toLowerCase() || "",
            P = _.pU.GetFilteredClanImagesList(v, h);
          if (P.length == 0) {
            const V = I.b.InitFromClanID(t);
            let Z = _.pU.GetLoadState(V);
            return Z && Z.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: x().ResultNotification,
                    children:
                      h.length > 0
                        ? (0, D.we)("#ImagePicker_EmptySearch")
                        : (0, D.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : Z && Z.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: x().ErrorCode,
                      children: (0, D.we)("#ImagePicker_Error", Z.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: x().ResultNotification,
                      children: (0, D.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return o(P, h);
        }
        function G(r) {
          const {
            clanAccountID: t,
            fileNameSearch: l,
            onImageSelected: o,
            selectedItem: v,
          } = r;
          return (0, e.jsx)(u, {
            clanAccountID: t,
            fileNameSearch: l,
            children: (h) =>
              (0, e.jsx)("div", {
                className: x().ClanImageGrid,
                children: h.map((P) =>
                  (0, e.jsx)(
                    R,
                    { clanImage: P, selected: P == v, onImageSelected: o },
                    P.imageid,
                  ),
                ),
              }),
          });
        }
        function A(r) {
          const {
              clanImage: t,
              searchStringHilight: l,
              imageInsertCallBack: o,
              OnImageClick: v,
              showImageActions: h,
              fnOnOpenLocalizedImageGroup: P,
            } = r,
            [V, Z] = w.useState(!1),
            L = () => o(t, W._o.k_eInsertFullImage),
            Ie = () => o(t, W._o.k_eInsertVideo),
            ve = () => o(t, W._o.k_eInsertThumbnail),
            ie = (xe) => {
              t.url &&
                (xe.dataTransfer.setData("text", t.url),
                _.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Oe = I.b.InitFromClanID(t.clanAccountID);
                  Ae(Oe, !0);
                }));
            },
            je = (xe) => {
              t.url &&
                _.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Oe = I.b.InitFromClanID(t.clanAccountID);
                  Ae(Oe, !1);
                });
            },
            le = (xe) => {
              var Ae, Oe;
              (0, U.pg)(
                (0, e.jsx)(O.o0, {
                  strTitle: (0, D.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: ae,
                  onCancel: re,
                  closeModal: re,
                  children: (0, e.jsxs)(w.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, D.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          (Ae = t.file_name) != null ? Ae : "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, D.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (Oe = (0, y.uX)(xe)) != null ? Oe : window,
              );
            },
            q = (xe) => {
              console.log("ClanImageWrapper on delete error: " + xe),
                (0, U.pg)(
                  (0, e.jsx)(O.KG, {
                    strTitle: (0, D.we)("#Error_FailureNotice"),
                    strDescription: (0, D.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: xe }),
                  }),
                  window,
                );
            },
            ae = () => {
              Z(!0);
              let xe = I.b.InitFromClanID(t.clanAccountID);
              _.pU
                .DeleteClanImage(xe, t)
                .then((Ae) => {
                  Ae.success != E.R && q((0, B.H)(Ae).strErrorMsg), Z(!1);
                })
                .catch((Ae) => {
                  q((0, B.H)(Ae).strErrorMsg), Z(!1);
                }),
                re();
            },
            re = () => {},
            te = () => {
              v && v(t);
            },
            he = t.file_name ? t.file_name : "",
            N = (0, p.r)(l, he, String(t.imageid), x().Hilight),
            se = m.zU.BIsClanImageVideo(t),
            De = h && !V && !se,
            Ce = h && !V && !se,
            Te = h && !V && se,
            Se = h && !V && !se;
          return (0, e.jsx)(c.K, {
            placeholderHeight: "100vh",
            className: x().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: x().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: x().ImageWrapper,
                  style: {
                    backgroundImage: se ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: ie,
                  onDragEnd: je,
                  onDoubleClick: L,
                  onClick: te,
                  children: (0, e.jsx)(Q, {
                    clanImage: t,
                    className: x().VideoBackground,
                  }),
                }),
                De &&
                  (0, e.jsx)("span", {
                    className: x().Full,
                    onClick: L,
                    children: (0, D.we)("#ImagePicker_FullSize"),
                  }),
                V &&
                  (0, e.jsx)(X.t, {
                    size: "medium",
                    className: x().FloatingThrobber,
                  }),
                Ce &&
                  (0, e.jsx)("span", {
                    className: x().Thumb,
                    onClick: ve,
                    children: (0, D.we)("#ImagePicker_Thumbnail"),
                  }),
                Se &&
                  P &&
                  (0, e.jsx)(F, {
                    bDeleting: V,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: P,
                  }),
                Te &&
                  (0, e.jsx)("span", {
                    className: x().Full,
                    onClick: Ie,
                    children: (0, D.we)("#ImagePicker_Video"),
                  }),
                !V &&
                  (0, e.jsx)("span", {
                    className: x().Delete,
                    onClick: le,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: x().ImageWrapperFilename,
                  title: he,
                  children: N,
                }),
              ],
            }),
          });
        }
        function F(r) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: l,
              bDeleting: o,
            } = r,
            v = (0, j.Ec)(t.clanAccountID);
          return o || !v.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, ne.A)(x().Localized, C().ValveOnlyBackground),
                onClick: () => (l == null ? void 0 : l(t)),
                children: "(VO) " + (0, D.we)("#ImagePicker_Localized"),
              });
        }
        function Q(r) {
          const { clanImage: t, className: l } = r;
          return m.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: l,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == S.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function R(r) {
          const { clanImage: t, onImageSelected: l, selected: o } = r;
          return (0, e.jsxs)("div", {
            className: (0, ne.A)(x().ClanImageGridItem, o && x().Selected),
            onClick: () => l(t, !1),
            onDoubleClick: () => l(t, !0),
            title: t.file_name,
            children: [
              (0, e.jsx)("div", {
                className: x().ImgCtn,
                children: m.zU.BIsClanImageVideo(t)
                  ? (0, e.jsx)(Q, { clanImage: t })
                  : (0, e.jsx)("img", { src: t.url, loading: "lazy" }),
              }),
              (0, e.jsx)("div", { className: x().Name, children: t.file_name }),
            ],
          });
        }
        function ee(r) {
          const { clanSteamID: t, closeModal: l, OnClanImageSelected: o } = r,
            v = w.useCallback(
              (V, Z) => {
                o == null || o(V, Z), l == null || l();
              },
              [o, l],
            ),
            [h, P] = w.useState("");
          return (0, e.jsxs)(O.o0, {
            strTitle: (0, D.we)("#ImagePicker_Images"),
            strDescription: (0, D.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: l,
            onCancel: l,
            children: [
              (0, e.jsx)($.g, { fnSetImageSearch: P }),
              (0, e.jsx)(H, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: h,
                imageInsertCallBack: v,
                showImageActions: !1,
              }),
            ],
          });
        }
        function J(r) {
          const { clanSteamID: t, OnClanImageSelected: l } = r;
          return (0, e.jsxs)("div", {
            className: n().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, D.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: n().SelectImageButton,
                    children: (0, D.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (o) => {
                  var v;
                  (0, U.pg)(
                    (0, e.jsx)(ee, { clanSteamID: t, OnClanImageSelected: l }),
                    (v = (0, y.uX)(o)) != null ? v : window,
                  );
                },
              }),
            ],
          });
        }
      },
      38745: (z, Y, a) => {
        "use strict";
        a.d(Y, { D: () => _ });
        var e = a(7850),
          E = a(36707),
          S = a(18210),
          w = a(95603),
          W = a(71647),
          I = a.n(W);
        function _(j) {
          const {
              onDropFiles: p,
              renderDesciption: s,
              elAdditonalButtons: C,
              elOverrideDragAndDropText: c,
            } = j,
            [O, U] = (0, w.hk)(p),
            [X, B] = (0, w.Ss)(p, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...O,
            className: (0, E.A)(
              U ? I().DragAndDropContainerDragging : I().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!s && s(),
              (0, e.jsx)("div", {
                children: c || (0, S.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: I().ImageUploadBar,
                children: [
                  X,
                  (0, e.jsxs)("label", {
                    onClick: B,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, S.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: I().SelectImageButton,
                        children: (0, S.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              C,
              j.children,
            ],
          });
        }
      },
      85096: (z, Y, a) => {
        "use strict";
        a.d(Y, { g: () => I });
        var e = a(7850),
          E = a(90626),
          S = a(18210),
          w = a(49460),
          W = a.n(w);
        function I(_) {
          const { fnSetImageSearch: j } = _,
            p = (0, E.useRef)(null);
          return (0, e.jsx)("div", {
            className: w.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: p,
              className: w.SearchInput,
              type: "text",
              placeholder: (0, S.we)("#ImagePicker_Search"),
              onChange: (s) => j(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (j(""), p.current && (p.current.value = ""));
              },
            }),
          });
        }
      },
      38080: (z, Y, a) => {
        "use strict";
        a.d(Y, { O9: () => A, PY: () => F, fY: () => Q });
        var e = a(7850),
          E = a(65946),
          S = a(75844),
          w = a(90626),
          W = a(99412),
          I = a(32093),
          _ = a(98112),
          j = a(64),
          p = a(38410),
          s = a(50109),
          C = a(19316),
          c = a(38745),
          O = a(95695),
          U = a.n(O),
          X = a(2801),
          B = a(88003),
          ne = a(64641),
          y = a.n(ne),
          D = a(36118),
          g = a(85599),
          x = a(34592),
          b = a(36707),
          n = a(82734),
          $ = a(21254),
          m = a(18210),
          H = a(27344),
          u = a.n(H),
          G = a(9472);
        function A(l) {
          const {
              imageUploader: o,
              fnUploadComplete: v,
              elOverrideDragAndDropText: h,
              forceResolution: P,
              elAdditonalButtons: V,
              rgRealmList: Z,
            } = l,
            [L, Ie] = (0, E.q3)(() => [
              o.GetUploadImages(),
              s.O.Get().GetCurEditLanguage(),
            ]),
            ve = w.useCallback(
              async (le) => {
                var q;
                let ae = Array.from(le),
                  re = !0;
                for (let te = 0; te < ae.length; te++) {
                  const he = ae[te],
                    { language: N } = (0, p.jj)(
                      he == null ? void 0 : he.name,
                      Ie,
                    );
                  try {
                    const se = (0, p.PD)(N, Ie, Z);
                    (re = await o.AddImageForLanguage(he, se)),
                      re ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            te +
                            " file=" +
                            he.name,
                        ),
                        (0, B.pg)(
                          (0, e.jsx)(X.KG, {
                            strDescription: (0, m.we)(
                              "#ImagePicker_Error",
                              he.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (se) {
                    let De = (0, x.H)(se);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + De.strErrorMsg,
                      De,
                    ),
                      (0, B.pg)(
                        (0, e.jsx)(X.KG, {
                          strDescription: (0, m.we)(
                            "#EventError_Code",
                            (q = De.strErrorMsg) != null ? q : "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return re;
              },
              [Ie, o, Z],
            ),
            ie = w.useMemo(
              () =>
                V instanceof Array
                  ? V
                  : [
                      (0, e.jsx)(
                        w.Fragment,
                        { children: V },
                        "elAdditonalButtons",
                      ),
                    ],
              [V],
            );
          (0, E.q3)(() =>
            L.map((le) => ({ a: le.GetCurrentImageOption(), b: le.language })),
          );
          const je = async () => {
            const le = await o.UploadAllImages(P);
            v == null || v(le);
          };
          return (0, e.jsxs)(c.D, {
            onDropFiles: ve,
            elAdditonalButtons: ie,
            elOverrideDragAndDropText: h,
            children: [
              (0, e.jsx)(w.Fragment, {
                children: (0, e.jsx)("div", {
                  className: u().UploadPreviewCtn,
                  children: L.map((le) =>
                    (0, e.jsx)(
                      R,
                      {
                        asset: le,
                        forceResolution: P,
                        fnOnRemove: () => o.DeleteUploadImage(le),
                        languageRealms: Z,
                      },
                      "arttabupload_" + le.filename + "_" + le.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(F, { imageUploader: o, fnOnUploadImageRequested: je }),
            ],
          });
        }
        function F(l) {
          const { imageUploader: o, fnOnUploadImageRequested: v } = l,
            [h] = (0, E.q3)(() => [o.GetUploadImages()]),
            P = h.some((Z) => Z.status == "pending"),
            V = h.some(
              (Z) =>
                Z.status == "waiting" ||
                Z.status == "uploading" ||
                Z.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: u().UploadPreviewButtonsCtn,
            children: [
              !!h.length &&
                (0, e.jsx)(C.$n, {
                  style: { margin: "8px" },
                  onClick: v,
                  disabled: !P,
                  children: (0, m.we)("#ImageUpload_Upload"),
                }),
              !!h.length &&
                (0, e.jsx)(C.$n, {
                  style: { margin: "8px" },
                  onClick: o.ClearImages,
                  disabled: V,
                  children: (0, m.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function Q(l, o, v, h, P) {
          let V = new Array();
          return (
            l.GetUploadImages().forEach((Z) => {
              V.push(
                (0, e.jsx)(
                  R,
                  {
                    asset: Z,
                    forceResolution: v,
                    forceFileType: h,
                    fnOnRemove: () => l.DeleteUploadImage(Z),
                    languageRealms: P,
                  },
                  o + Z.file + "_" + Z.uploadTime,
                ),
              );
            }),
            V
          );
        }
        const R = (0, S.PA)(ee);
        function ee(l) {
          var o, v, h, P, V;
          const Z = (N) => {
              if (N instanceof j.M7) {
                N.ResetImage();
                const se = window,
                  De = (0, e.jsx)($.q, {
                    ownerWin: se,
                    uploadFile: N,
                    forceResolution: l.forceResolution,
                    fileType: l.forceFileType || _.bg.dU,
                  });
                (0, B.HT)(De, se, "CropModal", {
                  strTitle: (0, m.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  N.fileType,
                  JSON.stringify(N.GetCurrentImageOption()),
                );
            },
            { asset: L, fnOnRemove: Ie, languageRealms: ve } = l,
            ie =
              (o = L.ImageOptions) == null
                ? void 0
                : o
                    .map((N) => {
                      let se = N == null ? void 0 : N.fnGetLabelText(),
                        De;
                      N.bEnforceDimensions &&
                        (se += ` - ${N.width}x${N.height}`),
                        N.bDeprecated &&
                          ((se += ` ${(0, m.we)("#ImageUpload_Deprecated")}`),
                          (De = (0, m.we)("#ImageUpload_Deprecated_ttip")));
                      let Ce;
                      return (
                        (L.BIsOriginalMinimumDimensions(N) &&
                          L.FileTypeMatchesImageTypes(N)) ||
                          (Ce = u().ImageDimensionTooSmall),
                        { label: se, data: N, strOptionClass: Ce, tooltip: De }
                      );
                    })
                    .filter((N) => !N.data.bHiddenFromDropdown),
            je = {
              pending: (0, m.we)("#ImageUpload_Pending"),
              waiting: (0, m.we)("#ImageUpload_Waiting"),
              uploading: (0, m.we)("#ImageUpload_Uploading"),
              processing: (0, m.we)("#ImageUpload_Processing"),
              success: (0, m.we)("#ImageUpload_SuccessCard"),
              failed: (0, m.we)("#ImageUpload_Failed"),
            },
            le = L.BSupportsLanguages()
              ? t(
                  m.A0.GetLanguageListForRealms(
                    ve != null ? ve : [I.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            q = L.IsValidAssetType(l.forceResolution, l.forceFileType),
            ae = L.status == "pending";
          let re = je[L.status];
          L.status == "pending" &&
            (q.needsCrop
              ? (re = (0, m.we)("#ImageUpload_NeedsCrop"))
              : q.error && (re = (0, m.we)("#ImageUpload_Invalid")));
          let te;
          const he = L.GetCurrentImageOption();
          return (
            he &&
              (te =
                (v =
                  ie == null
                    ? void 0
                    : ie.find((N) => N.data.sKey == he.sKey)) == null
                  ? void 0
                  : v.data),
            te ||
              (te =
                (h = ie == null ? void 0 : ie[0]) == null ? void 0 : h.data),
            (0, e.jsxs)("div", {
              className: u().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: u().UploadPreviewDelete,
                  onClick: () => Ie(L),
                  children: (0, e.jsx)(D.sED, {}),
                }),
                (0, e.jsx)(J, { asset: L }),
                le &&
                  (0, e.jsx)(C.m, {
                    strDropDownClassName: U().DropDownScroll,
                    rgOptions: le,
                    selectedOption: L.language,
                    onChange: (N) => (L.language = N.data),
                    disabled: !ae,
                  }),
                ie &&
                  (ie == null ? void 0 : ie.length) > 1 &&
                  (0, e.jsx)(C.m, {
                    label: L.GetImageOptionLabel(),
                    rgOptions: ie,
                    selectedOption: te,
                    onChange: (N) => L.SetCurrentImageOption(N.data),
                    disabled: !ae,
                  }),
                ae &&
                  ((P = q.warnings) == null
                    ? void 0
                    : P.map((N, se) =>
                        (0, e.jsx)(
                          "div",
                          { className: u().UploadPreviewWarning, children: N },
                          `warning${se}`,
                        ),
                      )),
                ae &&
                  ((V = q.messages) == null
                    ? void 0
                    : V.map((N, se) =>
                        (0, e.jsx)(
                          "div",
                          { className: u().UploadPreviewMessage, children: N },
                          `message${se}`,
                        ),
                      )),
                (0, e.jsxs)("div", {
                  className: (0, b.A)({
                    [U().FlexColumnContainer]: !0,
                    [u().UploadPreviewError]: L.status == "failed",
                  }),
                  children: [
                    re,
                    (0, G.o)(L.status) &&
                      (0, e.jsx)("div", {
                        className: y().FlexCenter,
                        children: (0, e.jsx)(g.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: u().UploadPreviewError,
                  children: L.message,
                }),
                ae &&
                  q.error &&
                  (0, e.jsx)("div", {
                    className: u().UploadPreviewError,
                    children: q.error,
                  }),
                ae &&
                  q.needsCrop &&
                  (0, e.jsx)(C.jn, {
                    onClick: () => Z(L),
                    children: (0, m.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function J(l) {
          const { asset: o } = l;
          return o.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: u().PreviewImgCtn,
                onClick: (v) =>
                  (0, B.pg)((0, e.jsx)(r, { asset: o }), (0, n.uX)(v)),
                children: [
                  (0, e.jsxs)("span", {
                    className: u().PreviewImgInfo,
                    children: [o.width, " x ", o.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: o.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: u().PreviewImgCtn,
                style: { backgroundImage: `url(${o.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: u().PreviewImgInfo,
                  children: [o.width, " x ", o.height],
                }),
              });
        }
        function r(l) {
          const { asset: o, closeModal: v } = l;
          return (0, e.jsx)(X.o0, {
            bAlertDialog: !0,
            closeModal: v,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: o.dataUrl }),
            }),
          });
        }
        function t(l) {
          const o = [],
            v = new Array();
          for (const h of l) {
            if (h == W.X51) continue;
            const P = (0, m.we)("#Language_" + (0, W.LgB)(h));
            v.push({ label: P, data: h });
          }
          return (
            v.sort((h, P) => h.label.localeCompare(P.label)),
            v.forEach((h) => o.push({ label: h.label, data: h.data })),
            v
          );
        }
      },
      79573: (z, Y, a) => {
        "use strict";
        a.d(Y, { uE: () => xe, it: () => Ae });
        var e = a(7850),
          E = a(99412),
          S = a(14947),
          w = a(65946),
          W = a(75844),
          I = a(90626),
          _ = a(25279),
          j = a(50109),
          p = a(84676),
          s = a(19316),
          C = a(25359),
          c = a.n(C),
          O = a(54327),
          U = a(56330),
          X = a(95695),
          B = a.n(X),
          ne = a(2801),
          y = a(88003),
          D = a(36118),
          g = a(71421),
          x = a(36707),
          b = a(82734),
          n = a(18210),
          $ = a(54963),
          m = a(3166),
          H = a(71242),
          u = a(29630),
          G = a(35524),
          A = a(9046),
          F = a(58483),
          Q = a(73085),
          R = a(46457),
          ee = a(95174),
          J = a(9709),
          r = a(22142),
          t = a(19298),
          l = a(13465),
          o = a(21659),
          v = a(15496),
          h = a.n(v),
          P = a(88812);
        function V(i) {
          var M;
          const {
              event: f,
              spotlightURLOverride: d,
              fnHandleOpenEvent: K,
              fnImageFailureCallback: T,
              fnFilterImageURLsForKnownFailures: k,
              langOverride: fe,
            } = i,
            Ee = (0, o.c5)(),
            Pe = I.useCallback(
              (oe) => {
                oe.preventDefault(), K && K(f);
              },
              [f, K],
            ),
            de = fe || (0, E.sfN)(m.TS.LANGUAGE),
            [me, ge, ue] = (0, w.q3)(() => [
              f.GetSummaryWithFallback(de),
              f.GetNameWithFallback(de),
              f.BShowLibrarySpotlightText(),
            ]);
          let ce = "spotlight",
            Me = A.wI.spotlight_main;
          (f.appid == 2434320 || m.TS.EUNIVERSE == E.Rv) &&
            ((ce = Ee
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (Me = A.wI.full));
          let pe =
            (M = (0, P.WC)(d !== void 0 ? void 0 : f, ce, de, Me)) != null
              ? M
              : d !== void 0
                ? [d]
                : [];
          k && pe && (pe = k(pe));
          const _e = me.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(I.Fragment, {
            children: (0, e.jsx)("div", {
              className: h().MajorEvent_Ctn,
              ref: i.containerRef,
              children: (0, e.jsxs)(t.Z, {
                className: (0, x.A)(
                  h().AppDetailsSpotlightContainer,
                  h().MajorEventContainer,
                ),
                onActivate: Pe,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: h().MajorEventBackground,
                    children: (0, e.jsx)(l.c, {
                      className: h().MajorEventImageBackgroundBlur,
                      rgSources: pe,
                      onIncrementalError: (oe, Le, Ue) => T && T(Le),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: h().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(l.c, {
                        className: h().MajorEventImage,
                        rgSources: pe,
                        onIncrementalError: (oe, Le, Ue) => T && T(Le),
                      }),
                      (0, e.jsx)("div", {
                        className: h().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: h().MajoreEventImageContentContainer,
                        children:
                          ue &&
                          (0, e.jsxs)("div", {
                            className: h().MajorEventContent,
                            children: [
                              (0, e.jsx)(l.c, {
                                className: h().MajorEventSpotlightBackground,
                                rgSources: pe,
                                onIncrementalError: (oe, Le, Ue) => T && T(Le),
                              }),
                              (0, e.jsxs)("div", {
                                className: h().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: h().MajorEventTitle,
                                    children: ge,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: h().MajorEventSummary,
                                    children: _e,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: h().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Z = a(79949),
          L = a.n(Z);
        function Ie(i) {
          var M;
          const {
              langOverride: f,
              artworkType: d,
              fnOnLanguagePreviewChange: K,
              clanSteamID: T,
              eventModel: k,
              partnerEventStore: fe,
              fnOnRemoveImage: Ee,
              fnOnArtworkLangChange: Pe,
              realms: de,
              fnLangHasData: me,
              fnGetImageHashAndExt: ge,
            } = i,
            ue = ge(d, f),
            ce = ue
              ? u.zU.GenerateURLFromHashAndExtAndLang(T, ue, A.wI.full, f)
              : "",
            [Me] = (0, w.q3)(() => [se(d, ge)]);
          return Me == 0
            ? (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  d === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL:
                        m.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: k,
                    }),
                  d === "background" &&
                    (0, e.jsx)(q, {
                      imgURL:
                        m.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: f,
                      eventModel: k,
                      partnerEventStore: fe,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(d) &&
                    (0, e.jsx)(ie, {
                      langOverride: f,
                      artworkType: d,
                      eventModel: k,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  d === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL: ce,
                      eventModel: k,
                      langOverride: f,
                    }),
                  d === "background" &&
                    (0, e.jsx)(q, {
                      imgURL: ce,
                      lang: f,
                      eventModel: k,
                      partnerEventStore: fe,
                    }),
                  d === "spotlight" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: k, lang: f }),
                  d === "localized_store_app_spotlight" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: k, lang: f }),
                  d === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: k, lang: f }),
                  (d === "broadcast_left" || d === "broadcast_right") &&
                    (0, e.jsx)(re, {
                      imgURL: ce,
                      side: d === "broadcast_right" ? "right" : "left",
                    }),
                  d === "sale_header" && (0, e.jsx)(te, { imgURL: ce }),
                  d === "sale_overlay" && (0, e.jsx)(he, { imgURL: ce }),
                  A.pb.includes(d) &&
                    (0, e.jsx)("img", {
                      className: J.PreviewImg,
                      src:
                        (M = G.R.GetLocalizedImageGroupForEditAsURL(T, f)) !=
                        null
                          ? M
                          : void 0,
                    }),
                  d === "product_banner" && (0, e.jsx)(N, { imgURL: ce }),
                  d === "product_mobile_banner" &&
                    (0, e.jsx)(N, { imgURL: ce }),
                  d === "sale_logo" && (0, e.jsx)(N, { imgURL: ce }),
                  d === "bestofyear_banner" && (0, e.jsx)(N, { imgURL: ce }),
                  d === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(N, { imgURL: ce }),
                  (0, e.jsx)(r.h, {
                    langOverride: f,
                    clanSteamID: T,
                    fnOnLanguagePreviewChange: K,
                    fnOnRemoveImage: Ee,
                    fnOnArtworkLangChange: Pe,
                    realms: de,
                    fnLangHasData: me,
                    fnGetImageHash: (pe) => {
                      var _e;
                      return (0, H.u)((_e = ge(d, pe)) != null ? _e : "");
                    },
                  }),
                ],
              });
        }
        function ve(i) {
          const { artworkType: M } = i,
            f = ArtworkTypeMap[M];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + M),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [f.width, " X ", f.height],
              }),
            ],
          });
        }
        function ie(i) {
          const { artworkType: M, langOverride: f, eventModel: d } = i,
            K = _.Fj[M],
            T = I.useMemo(
              () =>
                je(
                  (0, n.we)("#EventEditor_ArtworkType_" + M),
                  `${K.width} X ${K.height}`,
                ),
              [K.height, K.width, M],
            );
          return (0, e.jsx)(ae, { lang: f, imgURL: T, event: d });
        }
        function je(i, M) {
          const K = document.createElement("canvas");
          (K.width = 780), (K.height = 200);
          const T = K.getContext("2d"),
            k = 20;
          for (let Pe = 0; Pe < 200; Pe += k)
            for (let de = 0; de < 780; de += k)
              (T.fillStyle =
                (de / k + Pe / k) % 2 === 0 ? "#a405e3ff" : "#000000"),
                T.fillRect(de, Pe, k, k);
          const fe = T.createLinearGradient(0, 0, 780, 0);
          fe.addColorStop(0, "rgba(32,32,32,0.8)"),
            fe.addColorStop(1, "rgba(60,60,60,0.8)"),
            (T.fillStyle = fe),
            T.fillRect(0, 0, 780, 200);
          const Ee = T.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            Ee.addColorStop(0, "rgba(0,0,0,0)"),
            Ee.addColorStop(1, "rgba(0,0,0,0.6)"),
            (T.fillStyle = Ee),
            T.fillRect(0, 0, 780, 200),
            (T.fillStyle = "#fff"),
            (T.font = "32px Arial"),
            (T.textAlign = "center"),
            (T.textBaseline = "middle"),
            T.fillText(i, 780 / 2, 200 / 2 - 20),
            M &&
              ((T.font = "18px Arial"), T.fillText(M, 780 / 2, 200 / 2 + 25)),
            K.toDataURL("image/png")
          );
        }
        function le(i) {
          const { imgURL: M, eventModel: f, langOverride: d } = i,
            K = (0, j.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ee.u, {
              event: f,
              imageURLOverride: M,
              langOverride: d != null ? d : K,
            }),
          });
        }
        function q(i) {
          const { lang: M, eventModel: f, partnerEventStore: d } = i,
            K = (0, F.LJ)(),
            [T, k, fe, Ee, Pe] = (0, w.q3)(() => [
              f.GetNameWithFallback(M),
              f.GetDescriptionWithFallback(M),
              f.GetSubTitleWithLanguageFallback(M),
              f.type,
              f.AnnouncementGID,
            ]);
          let de = k
            ? (0, e.jsx)(R.fh, {
                text: k || "",
                partnerEventStore: d,
                showErrorInfo: !1,
                event: f,
                languageOverride: j.O.Get().GetCurEditLanguage(),
              })
            : (0, n.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: L().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: L().ExampleSectionTitle,
                children: (0, n.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, x.A)(L().DetailPageExample, "DetailPageExample"),
                children: (0, e.jsxs)("div", {
                  className: L().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: L().MainImageCtn,
                      children: (0, e.jsx)("img", { src: i.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: L().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: L().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: L().TextTitle,
                            children:
                              T ||
                              (0, n.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: L().TextSubTitle,
                            children:
                              fe ||
                              (0, n.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: L().TextBody,
                            children: de,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Ee != E.Fwr &&
                (0, e.jsxs)(I.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: L().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: L().ExampleSectionTitle,
                      children: (0, n.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, x.A)(
                        L().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: L().DetailExample2,
                        children: (0, e.jsx)(
                          Q.He,
                          {
                            event: f,
                            emoticonStore: K,
                            partnerEventStore: d,
                            headerClassnames: "editor",
                            langOverride: M,
                            bDisableBroadcastPlayer: !0,
                          },
                          Pe,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const ae = (i) => {
            var M;
            const [f] = (0, p.t7)(i.event.appid, { include_assets: !0 });
            if (!f) return null;
            const d = f.GetName(),
              K =
                (M = f.GetAssets()) == null ? void 0 : M.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: L().SpotlightExample,
              children: (0, e.jsx)(V, {
                event: i.event,
                strDisplayName: d != null ? d : "",
                gameIconUrl: K,
                spotlightURLOverride: i.imgURL,
                langOverride: i.lang,
              }),
            });
          },
          re = (i) => {
            const M = [
              (0, e.jsx)("img", { src: i.imgURL }, "img"),
              (0, e.jsx)("div", { className: c().BroadcastPreview }, "video"),
            ];
            return (
              i.side === "right" && M.reverse(),
              (0, e.jsx)("div", {
                className: L().BroadcastPreviewContainer,
                children: M,
              })
            );
          },
          te = (i) =>
            (0, e.jsx)("div", {
              className: L().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            }),
          he = (i) =>
            (0, e.jsx)("div", {
              className: L().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            }),
          N = (i) =>
            (0, e.jsx)("div", {
              className: L().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: i.imgURL,
              }),
            });
        function se(i, M) {
          var f, d;
          let K = 0;
          for (let T = E.Bhc; T < E.bP9; ++T)
            ((d = (f = M(i, T)) == null ? void 0 : f.length) != null ? d : 0) >
              0 && (K += 1);
          return K;
        }
        var De = Object.defineProperty,
          Ce = Object.getOwnPropertyDescriptor,
          Te = (i, M, f, d) => {
            for (
              var K = d > 1 ? void 0 : d ? Ce(M, f) : M, T = i.length - 1, k;
              T >= 0;
              T--
            )
              (k = i[T]) && (K = (d ? k(M, f, K) : k(K)) || K);
            return d && K && De(M, f, K), K;
          };
        const Se =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var xe = ((i) => (
          (i[(i.k_None = 0)] = "k_None"),
          (i[(i.k_Suggested = 1)] = "k_Suggested"),
          (i[(i.k_Required = 2)] = "k_Required"),
          (i[(i.k_Requested = 3)] = "k_Requested"),
          i
        ))(xe || {});
        function Ae(i) {
          var M, f;
          const {
              artworkType: d,
              headerHint: K,
              appid: T,
              fnToggleMinimize: k,
              realms: fe,
              eventModel: Ee,
              fnLangHasData: Pe,
              fnGetImageHashAndExt: de,
              fnSetImageURL: me,
              partnerEventStore: ge,
            } = i,
            [ue] = (0, p.t7)(T, { include_assets: !0 }),
            [ce, Me] = (0, w.q3)(() => [
              Ee == null ? void 0 : Ee.GetEventType(),
              Ee == null ? void 0 : Ee.BHasTag("vo_marketing_message"),
            ]),
            pe = ce == E.ajI;
          let _e = null;
          K === 2
            ? (_e = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, n.we)("#EventEditor_Required"),
              }))
            : K === 1
              ? (_e = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Suggested"),
                }))
              : K === 3 &&
                (_e = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Requested"),
                }));
          let oe = null;
          d === "capsule"
            ? pe
              ? (oe = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (oe = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!Me &&
                      (0, e.jsxs)("div", {
                        className: c().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, n.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${m.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, n.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : d === "background"
              ? (oe = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, n.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, n.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : d === "spotlight" || d === "localized_store_app_spotlight"
                ? (oe = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, n.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, n.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : d === "localized_store_app_spotlight_mobile"
                  ? (oe = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, n.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, n.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : d === "broadcast_left" || d === "broadcast_right"
                    ? (oe = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, n.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : d === "sale_header"
                      ? (oe = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: B().EventElementRequired,
                              children: (0, n.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, n.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, n.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, n.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, n.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, n.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : d === "hero"
                        ? ue &&
                          (oe = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, n.we)("#selectimage_tip_hero_1"),
                              }),
                              !(
                                (M = ue.GetAssets()) != null &&
                                M.GetLibraryHeroURL()
                              ) &&
                                (0, e.jsx)("p", {
                                  className: U.ErrorStylesBackground,
                                  children: (0, n.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : d === "localized_image_group" ||
                            d === "link_capsule" ||
                            d === "sale_section_title" ||
                            d === "schedule_track_art" ||
                            d === "localized_background_art"
                          ? (oe = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, n.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, n.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Se,
                                      target: m.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, n.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : d === "product_banner"
                            ? (oe = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: B().EventElementOptional,
                                    children: (0, n.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, n.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, n.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : d === "product_mobile_banner" ||
                                d === "product_banner_override" ||
                                d === "product_mobile_banner_override"
                              ? (oe = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: B().EventElementOptional,
                                      children: (0, n.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, n.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, n.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        d === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, n.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : d === "tab_bar_background"
                                ? (oe = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, n.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, n.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, n.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, n.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : d === "sale_logo"
                                  ? (oe = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: B().EventElementOptional,
                                          children: (0, n.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, n.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, n.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (oe = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: B().EventElementRequired,
                                          children: (0, n.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, n.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, n.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const Le = _.Fj[i.artworkType].width,
            Ue = _.Fj[i.artworkType].height;
          return (0, e.jsxs)("div", {
            id: i.id,
            className: c().ArtworkSelectorContainer,
            children: [
              !!i.title &&
                (0, e.jsxs)("div", {
                  className: c().Title,
                  onDoubleClick: k,
                  children: [
                    i.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    _e,
                    k &&
                      (0, e.jsx)(s.$n, {
                        onClick: k,
                        children: (0, e.jsx)(g.he, {
                          toolTipContent: (0, n.we)(
                            i.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: i.bIsMinimized
                            ? (0, e.jsx)(D.hz4, {})
                            : (0, e.jsx)(D.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !i.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, x.A)(c().SelectImageBlock, c().Tips),
                  children: [
                    oe,
                    !!(Le && Ue) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, n.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, n.PP)(
                            "#selectimage_tip1",
                            (0, _.qj)(Le),
                            (0, _.qj)(Ue),
                          ),
                        ],
                      }),
                    !!i.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: U.WarningStylesWithIcon,
                          children: i.strWarning,
                        }),
                      }),
                    i.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    i.elAdditionalControls,
                    !!i.fnRemoveAllArtwork &&
                      (0, e.jsx)(s.$n, {
                        onClick: (Ne) => {
                          var Be;
                          (0, y.pg)(
                            (0, e.jsx)(Oe, {
                              fnRemoveAllArtwork: i.fnRemoveAllArtwork,
                            }),
                            (Be = (0, b.uX)(Ne)) != null ? Be : window,
                          );
                        },
                        children: (0, n.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !i.bIsMinimized &&
                (0, e.jsx)(ye, {
                  clanSteamID: i.clanSteamID,
                  title: (f = i.title) != null ? f : "",
                  eventModel: Ee,
                  artworkType: i.artworkType,
                  realms: fe,
                  appid: T,
                  fnGetImageHashAndExt: de,
                  fnSetImageURL: me,
                  fnLangHasData: Pe,
                  partnerEventStore: ge,
                }),
            ],
          });
        }
        function Oe(i) {
          const { fnRemoveAllArtwork: M, closeModal: f } = i;
          return (0, e.jsx)(ne.o0, {
            strTitle: (0, n.we)("#Sale_RemoveAll"),
            strDescription: (0, n.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              M == null || M(), f == null || f();
            },
            onCancel: f,
          });
        }
        function ye(i) {
          const {
              artworkType: M,
              realms: f,
              clanSteamID: d,
              fnLangHasData: K,
              fnGetImageHashAndExt: T,
              fnSetImageURL: k,
              eventModel: fe,
              appid: Ee,
              partnerEventStore: Pe,
            } = i,
            de = M === "localized_image_group",
            [me, ge] = I.useState((0, j.E)()),
            [ue, ce] = I.useState(new Array()),
            Me = I.useCallback(
              (_e, oe, Le) => {
                let Ue = [];
                ue.find((Be) => Be.clanImage.imageid == _e.imageid)
                  ? (Ue = ue.map((Be) =>
                      Be.clanImage.imageid == _e.imageid
                        ? { clanImage: _e, lang: oe }
                        : Be,
                    ))
                  : Le && (Ue = ue.concat({ clanImage: _e, lang: oe })),
                  ce(Ue);
              },
              [ue],
            ),
            pe = I.useCallback(
              (_e, oe, Le) => {
                (0, S.h5)(() => {
                  var Ue;
                  (0, H.u)((Ue = T(M, oe)) != null ? Ue : "") ==
                    _e.image_hash && k(M, null, oe),
                    k(M, _e, Le),
                    Me(_e, Le, !1);
                });
              },
              [T, M, k, Me],
            );
          return M === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(s.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${m.TS.PARTNER_BASE_URL}admin/game/editbyappid/${Ee}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, n.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Re, {
                    list: ue,
                    fnOnArtworkLanguageChange: pe,
                    realms: f,
                    fnLangHasData: K,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, x.A)(
                        c().SelectImageBlock,
                        c().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Ie, {
                        eventModel: fe,
                        clanSteamID: d,
                        fnOnLanguagePreviewChange: (_e) => {
                          _e != me && ge(_e);
                        },
                        langOverride: me,
                        fnOnArtworkLangChange: de ? null : pe,
                        artworkType: M,
                        fnOnRemoveImage: de ? null : (_e) => k(M, null, _e),
                        realms: f,
                        fnLangHasData: K,
                        fnGetImageHashAndExt: T,
                        partnerEventStore: Pe,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Re = class extends I.Component {
          ShowLangChangeDialog(i, M) {
            const {
              fnOnArtworkLanguageChange: f,
              realms: d,
              fnLangHasData: K,
            } = this.props;
            (0, y.pg)(
              (0, e.jsx)(O.e, {
                clanImage: i,
                lang: M,
                fnOnArtworkLangChange: f,
                fnLangHasData: K,
                realms: d,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let i = new Array();
            const { list: M } = this.props;
            return (
              M.forEach((f) => {
                var d;
                const { clanImage: K, lang: T } = f;
                let k = (0, n.we)("#Language_" + (0, E.LgB)(T));
                i.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: B().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping",
                            (d = K.file_name) != null ? d : "",
                            k,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(K, T),
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + f.clanImage.imageid + "_" + T,
                  ),
                );
              }),
              i
            );
          }
          render() {
            const { list: i } = this.props;
            if (!i || i.length == 0) return (0, e.jsx)("div", {});
            let M = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: c().UploadSuccess,
              children: M,
            });
          }
        };
        Te([$.oI], Re.prototype, "ShowLangChangeDialog", 1),
          (Re = Te([W.PA], Re));
      },
      22142: (z, Y, a) => {
        "use strict";
        a.d(Y, { h: () => n });
        var e = a(7850),
          E = a(32093),
          S = a(99412),
          w = a(71742),
          W = a(64868),
          I = a(65946),
          _ = a(90626),
          j = a(44894);
        const p =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var s = a(29630),
          C = a(9046),
          c = a(53424),
          O = a(25359),
          U = a.n(O),
          X = a(54327),
          B = a(2801),
          ne = a(36118),
          y = a(71421),
          D = a(18210),
          g = a(25792),
          x = a(19316),
          b = a(11243);
        function n(u) {
          const {
            clanSteamID: G,
            fnGetImageHash: A,
            fnLangHasData: F,
            fnOnRemoveImage: Q,
          } = u;
          (0, c.mr)(G.GetAccountID());
          const R = _.useMemo(() => {
              let t = new Array();
              const l = D.A0.GetLanguageListForRealms([
                E.TU.k_ESteamRealmGlobal,
                E.TU.k_ESteamRealmChina,
              ]);
              for (const o of l) {
                const v = A(o);
                if (v) {
                  const h = (0, S.LgB)(o),
                    P = (0, D.we)("#Language_" + h);
                  t.push({ lang: o, strLang: h, locLang: P, imgHash: v });
                }
              }
              return (
                (t = t.sort((o, v) =>
                  o.locLang > v.locLang ? 1 : o.locLang < v.locLang ? -1 : 0,
                )),
                t
              );
            }, [A]),
            [ee, J, r] = (0, W.uD)();
          return (0, e.jsxs)("div", {
            className: U().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: U().SelectImageTitle,
                children: (0, D.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: U().LanguageListContainer,
                children: R.map((t) =>
                  (0, e.jsx)(
                    $,
                    { langData: t, ...u },
                    "lang_select_" + G.GetAccountID() + " " + t.strLang,
                  ),
                ),
              }),
              !!Q &&
                (0, e.jsxs)(x.$n, {
                  onClick: J,
                  children: [
                    (0, D.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(b.o, {
                      tooltip: (0, D.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(B.EN, {
                active: ee,
                children: (0, e.jsx)(B.o0, {
                  strTitle: (0, D.we)("#Dialog_AreYouSure"),
                  strDescription: (0, D.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: r,
                  onOK: () => {
                    for (let t = 0; t < S.bP9; t++) F && Q && F(t) && Q(t);
                  },
                }),
              }),
            ],
          });
        }
        function $(u) {
          const {
              clanSteamID: G,
              langData: A,
              langOverride: F,
              fnOnLanguagePreviewChange: Q,
              fnOnArtworkLangChange: R,
              fnOnRemoveImage: ee,
            } = u,
            [J, r] = (0, I.q3)(() => {
              const t = c.pU.GetClanImageByImageHash(G, A.imgHash);
              let l = "";
              t &&
                (l = s.zU.GenerateURLFromHashAndExtAndLang(
                  G,
                  s.zU.GetHashAndExt(t),
                  C.wI.full,
                  A.lang,
                ));
              let o = U().LanguageSelectorSelected;
              return (
                F != A.lang &&
                  (o = A.imgHash
                    ? U().LanguageSelector
                    : U().LanguageSelectorNoData),
                [l, o]
              );
            });
          return (0, e.jsxs)("div", {
            id: A.strLang,
            className: U().LanguageContainer,
            onClick: (t) => {
              let l = (0, S.sfN)(t.currentTarget.id);
              Q(l);
            },
            children: [
              (0, e.jsx)("div", { className: r, children: A.locLang }),
              (0, e.jsxs)("span", {
                className: U().LanguageOptions,
                children: [
                  !!J &&
                    (0, e.jsx)("a", {
                      href: J,
                      target: "_blank",
                      children: (0, e.jsx)(y.he, {
                        toolTipContent: (0, D.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: ne.YNO(),
                      }),
                    }),
                  !!R && (0, e.jsx)(m, { ...u }),
                  !!ee && (0, e.jsx)(H, { fnOnRemoveImage: ee, langData: A }),
                ],
              }),
            ],
          });
        }
        function m(u) {
          const {
              clanSteamID: G,
              langData: A,
              fnOnArtworkLangChange: F,
              fnGetImageHash: Q,
              fnLangHasData: R,
              realms: ee,
            } = u,
            [J, r, t] = (0, W.uD)(),
            l = (0, I.q3)(() => {
              const o = Q(A.lang);
              return (
                (0, w.wT)(
                  !o || !o.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + o,
                ),
                c.pU.GetClanImageByImageHash(G, o)
              );
            });
          if (!l) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(y.he, {
                toolTipContent: (0, D.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": A.lang,
                  src: p,
                  onClick: () => r(),
                }),
              }),
              (0, e.jsx)(g.tH, {
                children: (0, e.jsx)(B.EN, {
                  active: J,
                  children: (0, e.jsx)(X.e, {
                    clanImage: l,
                    lang: A.lang,
                    fnOnArtworkLangChange: F,
                    fnLangHasData: R,
                    realms: ee,
                    closeModal: t,
                  }),
                }),
              }),
            ],
          });
        }
        function H(u) {
          const { fnOnRemoveImage: G, langData: A } = u,
            [F, Q, R] = (0, W.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(y.he, {
                toolTipContent: (0, D.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": A.lang,
                  src: j.A,
                  onClick: Q,
                }),
              }),
              (0, e.jsx)(g.tH, {
                children: (0, e.jsx)(B.EN, {
                  active: F,
                  children: (0, e.jsx)(B.o0, {
                    strTitle: (0, D.we)("#selectimage_remove_image"),
                    strDescription: (0, D.we)(
                      "#selectimage_remove_details",
                      (0, D.we)("#Language_" + (0, S.LgB)(A.lang)),
                    ),
                    onOK: () => {
                      G(A.lang);
                    },
                    closeModal: R,
                  }),
                }),
              }),
            ],
          });
        }
      },
      54327: (z, Y, a) => {
        "use strict";
        a.d(Y, { e: () => U });
        var e = a(7850),
          E = a(65946),
          S = a(90626),
          w = a(76559),
          W = a(24806),
          I = a(95695),
          _ = a.n(I),
          j = a(2801),
          p = a(36707),
          s = a(18210),
          C = a(25359),
          c = a.n(C),
          O = a(29630);
        function U(X) {
          const {
              clanImage: B,
              closeModal: ne,
              lang: y,
              fnOnArtworkLangChange: D,
              realms: g,
              fnLangHasData: x,
            } = X,
            [b, n] = (0, S.useState)(y),
            $ = w.b.InitFromClanID(B.clanAccountID),
            m = (0, E.q3)(() => {
              var H;
              return O.zU.GenerateURLFromHashAndExt(
                $,
                (H = O.zU.GetHashAndExt(B)) != null ? H : "",
              );
            });
          return (0, e.jsx)(j.o0, {
            strTitle: (0, s.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, s.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => (D == null ? void 0 : D(B, y, b)),
            onCancel: ne,
            closeModal: ne,
            children: (0, e.jsxs)("div", {
              className: (0, p.A)(_().FlexColumnContainer, c().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: c().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: c().ArtworkPreview,
                    src: m,
                  }),
                }),
                (0, e.jsx)(W.Ng, {
                  selectedLang: b,
                  fnLangHasData: x,
                  fnOnLanguageChanged: n,
                  realms: g,
                }),
              ],
            }),
          });
        }
      },
      38129: (z, Y, a) => {
        "use strict";
        a.d(Y, { p: () => $ });
        var e = a(7850),
          E = a(90626),
          S = a(76559),
          w = a(41735),
          W = a.n(w),
          I = a(58632),
          _ = a.n(I),
          j = a(88942),
          p = a(72604),
          s = a(34592),
          C = a(3166),
          c = a(35038),
          O = a(75916),
          U = a(68312);
        const X = "nicknames";
        function B(m) {
          const H = (0, U.KV)(),
            { data: u, isLoading: G } = (0, j.I)({
              queryKey: [X],
              queryFn: async () => {
                const A = new Map();
                if (C.iA.logged_in) {
                  const F = c.w.Init(O.w_T),
                    R = (await O.xtC.GetNicknameList(H, F)).Body().toObject();
                  R != null &&
                    R.nicknames &&
                    R.nicknames.length > 0 &&
                    R.nicknames.forEach((ee) => {
                      A.set(ee.accountid, ee.nickname);
                    });
                }
                return A;
              },
            });
          return u ? u.get(m) : null;
        }
        async function ne(m) {
          var H, u, G, A;
          if (!m || m.length == 0) return [];
          const F =
            (0, C.yK)() == "community"
              ? C.TS.COMMUNITY_BASE_URL
              : C.TS.STORE_BASE_URL;
          if (m.length == 1) {
            const Q = { accountid: m[0], origin: self.origin },
              R = await W().get(`${F}actions/ajaxgetavatarpersona`, {
                params: Q,
              });
            if (
              !R ||
              R.status != 200 ||
              ((H = R.data) == null ? void 0 : H.success) != p.R ||
              !((u = R.data) != null && u.userinfo)
            )
              throw `Load single avatar/persona failed ${((0, s.H))(R).strErrorMsg}`;
            return [R.data.userinfo];
          } else {
            const Q = { accountids: m.join(","), origin: self.origin },
              R = await W().get(`${F}actions/ajaxgetmultiavatarpersona`, {
                params: Q,
              });
            if (
              !R ||
              R.status != 200 ||
              ((G = R.data) == null ? void 0 : G.success) != p.R ||
              !((A = R.data) != null && A.userinfos)
            )
              throw `Load single avatar/persona failed ${((0, s.H))(R).strErrorMsg}`;
            const ee = new Map();
            return (
              R.data.userinfos.forEach((J) =>
                ee.set(new S.b(J.steamid).GetAccountID(), J),
              ),
              m.map((J) => ee.get(J))
            );
          }
        }
        const y = new (_())((m) => ne(m), { cache: !1 }),
          D = "avatarandpersonas";
        function g(m) {
          const { data: H, isLoading: u } = (0, j.I)({
            queryKey: [D, m],
            queryFn: () => y.load(m),
          });
          return [H, u];
        }
        function x(m) {
          const H = useQueryClient(),
            { data: u, isLoading: G } = useQuery({
              queryKey: [D, m],
              queryFn: async () => {
                const F = await y.loadMany(m);
                return (
                  F.forEach((Q) => {
                    const R = [D, new CSteamID(Q.steamid).GetAccountID()];
                    H.setQueryData(R, Q);
                  }),
                  F
                );
              },
              enabled: (m == null ? void 0 : m.length) > 0,
            }),
            A = useMemo(() => {
              const F = new Array();
              return (
                u == null ||
                  u.forEach((Q) => {
                    Q instanceof Error || F.push(Q);
                  }),
                F
              );
            }, [u]);
          return G ? null : A;
        }
        function b(m) {
          return ReactQueryClient.getQueryData([D, m]);
        }
        var n = a(93355);
        function $(m) {
          const {
              accountID: H,
              bHideWhenNotAvailable: u,
              bHideName: G,
              bLink: A = !0,
            } = m,
            [F] = g(H),
            Q = B(H),
            R = E.useMemo(() => S.b.InitFromAccountID(H), [H]),
            ee = `${C.TS.COMMUNITY_BASE_URL}profiles/${R.ConvertTo64BitString()}`,
            J = A ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: F
              ? (0, e.jsxs)(J, {
                  href: A ? ee : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: n.SmallAvatar,
                      src: F.avatar_url,
                      "data-miniprofile": "s" + R.ConvertTo64BitString(),
                    }),
                    !G &&
                      (0, e.jsx)("span", {
                        children: Q
                          ? `${Q} (${F.persona_name})`
                          : F.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !u && (0, e.jsx)("span", { children: H }),
                }),
          });
        }
      },
      85143: (z, Y, a) => {
        "use strict";
        a.d(Y, { E: () => _, m: () => I });
        var e = a(7850),
          E = a(7638),
          S = a(95695),
          w = a.n(S),
          W = a(36707);
        function I(j, p) {
          if (!j || !j.BIsClanAccount()) return !1;
          const s = E.KN.Get().GetPartnerEventPermissions(j);
          return s ? (p ? s.valve_admin : s.valve_admin || s.support_user) : !1;
        }
        function _(j) {
          const { clanSteamID: p, id: s } = j;
          return I(p, j.requireAdmin)
            ? (0, e.jsx)("div", {
                id: s,
                className: (0, W.A)(
                  j.className,
                  j.requireAdmin
                    ? S.ValveOnlyAdminBackground
                    : S.ValveOnlyBackground,
                ),
                children: j.children,
              })
            : null;
        }
      },
      22880: (z, Y, a) => {
        "use strict";
        a.d(Y, { g: () => _ });
        var e = a(40323),
          E = a.n(e),
          S = Object.defineProperty,
          w = (j, p, s) =>
            p in j
              ? S(j, p, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (j[p] = s),
          W = (j, p, s) => w(j, typeof p != "symbol" ? p + "" : p, s);
        const I = class we {
          static ParseCSVFile(p, s) {
            return new Promise((C, c) => {
              const U = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: C,
                error: (X) => c({ errors: [X] }),
                transformHeader: s,
              };
              E().parse(p, U);
            });
          }
          static ReadFile(p) {
            return new Promise((s, C) => {
              const c = new FileReader();
              (c.onload = (O) => s(c.result)), c.readAsText(p);
            });
          }
          static WriteFile(p, s) {
            let C = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(p, s);
            else {
              const c = window.URL.createObjectURL(p);
              C.href = c;
            }
            C.setAttribute("download", s), C.click();
            try {
              document.removeChild(C);
            } catch {}
          }
          static WriteCSVToFile(p, s, C, c) {
            const O = c
                ? E().unparse({ fields: c, data: p }, { header: !0 })
                : E().unparse(p, { header: !0 }),
              U = C == !0 ? ["\uFEFF" + O] : [O];
            we.WriteFile(new Blob(U, { type: "text/csv:charset=utf-8;" }), s);
          }
          static WriteXMLToFile(p, s) {
            const C = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let c =
              "<" +
              C() +
              'xml version="1.0" encoding="UTF-8" ' +
              C() +
              `>
`;
            (c += new XMLSerializer().serializeToString(p)),
              we.WriteFile(
                new Blob([c], { type: "application/xml:charset=utf-8;" }),
                s,
              );
          }
        };
        W(I, "m_DummyValueForQuestionHack", 0);
        let _ = I;
      },
      95603: (z, Y, a) => {
        "use strict";
        a.d(Y, { DB: () => _, PW: () => p, Ss: () => W, hk: () => I });
        var e = a(7850),
          E = a(90626),
          S = a(72739),
          w = a(82734);
        function W(s, C) {
          const c = E.useRef(void 0),
            O = E.useCallback(
              (B) => {
                B.currentTarget.files.length > 0 &&
                  (s(B.currentTarget.files), (B.currentTarget.value = ""));
              },
              [s],
            ),
            U = E.useCallback(() => c.current.click(), []);
          return [
            S.createPortal(
              (0, e.jsx)("form", {
                onSubmit: j,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...C,
                  type: "file",
                  ref: c,
                  onChange: O,
                }),
              }),
              window.document.body,
            ),
            U,
          ];
        }
        function I(s) {
          const [C, c] = E.useState(!1),
            O = E.useCallback((y) => {
              ((y.dataTransfer.files && y.dataTransfer.files[0]) ||
                (y.dataTransfer.types && y.dataTransfer.types[0] == "Files")) &&
                c(!0);
            }, []),
            U = E.useCallback((y) => {
              w.NO(y) && c(!1);
            }, []),
            X = E.useCallback(() => c(!1), []),
            B = C ? j : void 0,
            ne = E.useCallback(
              (y) => {
                var D;
                (D = y.dataTransfer.files) != null &&
                  D.length &&
                  (s(y.dataTransfer.files, y),
                  y.preventDefault(),
                  y.stopPropagation()),
                  c(!1);
              },
              [s],
            );
          return [
            {
              onDragEnter: O,
              onDragLeave: U,
              onDragEnd: X,
              onDragOver: B,
              onDrop: ne,
            },
            C,
          ];
        }
        async function _(s, C = 1e3) {
          return await new Promise((c, O) => {
            const U = new Image();
            (U.src = s),
              (U.onload = () => c("success")),
              (U.onerror = () => c("error")),
              C > 0 && window.setTimeout(() => c("timeout"), C);
          });
        }
        function j(s) {
          s.preventDefault();
        }
        function p(s) {
          switch (s.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const C = s.name.match(/(?<=\.)[^.]+$/);
              return C ? C[0] : void 0;
          }
        }
      },
      55486: (z) => {
        z.exports = {
          PickerContainer: "_1qhUOyXySrP5wxstyHcNfi",
          SearchInput: "lwt4uhPJr5zMlKtOXk7KH",
          Hilight: "_5oO3lqjoO6KmQtAJqUDAz",
          ImagesContainer: "_2MNEtVBTbM588lRBH4iSWU",
          UploaderContainer: "dR0NeWIeEFgvr-YGjRojm",
          UploaderTitle: "DL9t5BhLQBnOak9WodTTy",
          UploaderRunning: "_1lRF9BfrKTlDFFAmqE7f6H",
          UploaderDesc: "_2fhbnZhBGr6n624Mkviv_M",
          UploadError: "_3B5rV9V3B5jZyTkaOOpLZC",
          UploadMessageAndButtonsContainer: "_3OQ66CWxfAqQrPyk3ENMN9",
          UploadSuccess: "_2RXjwOiBQmS6QJlGOp0zjR",
          UploadDismissButton: "_3j1ztsyZKmnW7dgsO7MeBX",
          EnableClanImagesV2Ctn: "_25bW2wRPaIRCWnvjX0pmYP",
          EnableClanImagesV2: "_3khYXUyapfKawwe6aLY1YD",
        };
      },
      40888: (z) => {
        z.exports = {
          LightboxDialog: "jdJJwFEyHc1BcauL8BGi8",
          LightboxImageContainer: "_2AfDMWU1r2BkWWOuPJBEG4",
          LightboxMainImage: "_3lke7Ru5iG92hZgusH_6mW",
          LightboxPrevImage: "_12Q6eXlxa7az2UzSkyoVZi",
          LightboxNextImage: "_1-u-acR7PtZy8y0uwVsHpe",
          LightboxToolbar: "_1nvyoL-4JdDLMQAb0G0qbB",
          LightboxImageTitle: "_12w2ThvzUOKOyHZoctVBYy",
          LightboxToolbarButtons: "_2EbKH8e98l6jfPsQZbpF5d",
          LightboxCloseButton: "_3V6J1j2mWeEq42tDXjdlyT",
          LightboxLeftButton: "_1Pkq-IzPmH3SL1Ch4rxT7E",
          LightboxRightButton: "_3hJAw5_2ezz8JlA8lniMOV",
        };
      },
      33924: (z) => {
        z.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      53732: (z) => {
        z.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (z) => {
        z.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (z) => {
        z.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (z) => {
        z.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (z) => {
        z.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (z) => {
        z.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (z) => {
        z.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      15496: (z) => {
        z.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      93355: (z) => {
        z.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      44894: (z, Y, a) => {
        "use strict";
        a.d(Y, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
