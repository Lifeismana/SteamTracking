/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49281],
    {
      21438: (z, Q, a) => {
        "use strict";
        a.d(Q, { A4: () => u, LU: () => _, sK: () => p });
        var e = a(7850),
          I = a(90626),
          S = a(36631),
          w = a(3166);
        const W = {
            editModel: null,
            bClanImagesV2: !1,
            setClanImagesV2: void 0,
          },
          x = I.createContext(W);
        function u(c) {
          const { children: f, editModel: O } = c,
            { bClanImagesV2: $, setClanImagesV2: B } = l();
          return (0, e.jsx)(x.Provider, {
            value: { ...W, editModel: O, bClanImagesV2: $, setClanImagesV2: B },
            children: (0, e.jsx)(S.Cs, { location: S.uF, children: f }),
          });
        }
        function T() {
          return I.useContext(x);
        }
        function _() {
          return T().editModel;
        }
        function l() {
          const c = "storeUseClanImagesV2",
            [f, O] = I.useState(() => !!localStorage.getItem(c)),
            $ = I.useCallback((B) => {
              B ? localStorage.setItem(c, "1") : localStorage.removeItem(c),
                O(B);
            }, []);
          return { bClanImagesV2: f, setClanImagesV2: $ };
        }
        function p() {
          const c = I.useContext(x),
            f = !1;
          return {
            bClanImagesV2: c.bClanImagesV2 && f,
            bClanImagesV2Allowed: f,
            setClanImagesV2: c.setClanImagesV2,
          };
        }
      },
      4748: (z, Q, a) => {
        "use strict";
        a.d(Q, { G: () => R });
        var e = a(7850),
          I = a(99412),
          S = a(41735),
          w = a.n(S),
          W = a(75844),
          x = a(65946),
          u = a(90626),
          T = a(19316),
          _ = a(89084),
          l = a(75909),
          p = a(72805),
          c = a(55486),
          f = a.n(c),
          O = a(38745),
          $ = a(85096),
          B = a(95695),
          ne = a.n(B),
          y = a(2801),
          D = a(88003),
          U = a(85599),
          s = a(34592),
          K = a(36707),
          n = a(18210),
          J = a(54963),
          m = a(96043),
          H = a(40888),
          h = a.n(H);
        function G(o) {
          const t = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            var A;
            (A = t.current) == null || A.showModal();
            const k = document.body.style.overflow;
            return (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = k;
              }
            );
          }, []);
          const r =
              typeof o.prevSrc == "string"
                ? (0, e.jsx)("img", { src: o.prevSrc })
                : o.prevSrc,
            i =
              typeof o.mainSrc == "string"
                ? (0, e.jsx)("img", { src: o.mainSrc })
                : o.mainSrc,
            v =
              typeof o.nextSrc == "string"
                ? (0, e.jsx)("img", { src: o.nextSrc })
                : o.nextSrc,
            E = [
              h().LightboxDialog,
              ...(o.backgroundClassName ? [o.backgroundClassName] : []),
            ];
          return (0, e.jsxs)("dialog", {
            ref: t,
            className: (0, K.A)(...E),
            onClose: (A) => o.onCloseRequest(A),
            onKeyDown: (A) => {
              A.key === "ArrowRight" && o.nextSrc
                ? o.onMoveNextRequest(A)
                : A.key === "ArrowLeft" && o.prevSrc && o.onMovePrevRequest(A);
            },
            children: [
              o.prevSrc &&
                (0, e.jsx)("div", {
                  className: (0, K.A)(
                    h().LightboxImageContainer,
                    h().LightboxPrevImage,
                  ),
                  children: r,
                }),
              (0, e.jsx)("div", {
                className: (0, K.A)(
                  h().LightboxImageContainer,
                  h().LightboxMainImage,
                ),
                tabIndex: 0,
                onClick: (A) => {
                  A.target.nodeName !== "IMG" && o.onCloseRequest(A);
                },
                children: i,
              }),
              o.nextSrc &&
                (0, e.jsx)("div", {
                  className: (0, K.A)(
                    h().LightboxImageContainer,
                    h().LightboxNextImage,
                  ),
                  children: v,
                }),
              (0, e.jsxs)("div", {
                className: h().LightboxToolbar,
                children: [
                  (0, e.jsx)("span", {
                    className: h().LightboxImageTitle,
                    children: o.imageTitle,
                  }),
                  (0, e.jsxs)("div", {
                    className: h().LightboxToolbarButtons,
                    children: [
                      o.toolbarButtons,
                      (0, e.jsx)("button", {
                        className: h().LightboxCloseButton,
                        onClick: o.onCloseRequest,
                      }),
                    ],
                  }),
                ],
              }),
              o.prevSrc &&
                (0, e.jsx)("button", {
                  className: h().LightboxLeftButton,
                  onClick: o.onMovePrevRequest,
                }),
              o.nextSrc &&
                (0, e.jsx)("button", {
                  className: h().LightboxRightButton,
                  onClick: o.onMoveNextRequest,
                }),
            ],
          });
        }
        var j = a(21438),
          F = a(53424);
        let V = 1;
        const R = (0, W.PA)((o) => {
          const {
              clanSteamID: t,
              appid: r,
              imageInsertCallBack: i,
              partnerEventStore: v,
              bHideDragAndDrop: E,
              bShowLightBox: A,
              fnSetImageURL: k,
              rgRealmList: Z,
              fnLangHasData: M,
              fnGetImageHash: Ie,
            } = o,
            [ve, ie] = u.useState(""),
            [je, le] = u.useState(0),
            [ee, ae] = u.useState(),
            [re, te] = u.useState(void 0),
            [he, N] = u.useState(!F.pU.BHasLoadedClanImages(t)),
            [se, De] = u.useState(void 0),
            Ce = (0, J.YR)(() => w().CancelToken.source());
          u.useEffect(
            () => () => Ce.cancel("ClanImagePicker component unmounted"),
            [Ce],
          );
          const Te = (0, J.YR)(() => new Map()),
            [Se, xe] = (0, u.useState)(null),
            { bClanImagesV2: Ae } = (0, j.sK)(),
            Oe = t.GetAccountID(),
            ye = u.useCallback(
              () => F.pU.LoadClanImages(t, !1, Ce.token),
              [Ce, Oe],
            ),
            Re = u.useCallback(async () => {
              if (!Te.has(t.GetAccountID()))
                try {
                  await ye(), Ce.token.reason || N(!1);
                } catch (me) {
                  let ge = (0, s.H)(me);
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
          u.useEffect(() => {
            he && Re();
          }, [Re, he]);
          const d = u.useCallback(() => {
            N(!0), Re();
          }, [Re]);
          u.useEffect(() => {
            d();
          }, [Oe, d]);
          const P = F.pU.BHasLoadedClanImages(t);
          u.useEffect(() => {
            P || d();
          }, [P, d]);
          const C = () => {
              ie(ve), le(null);
            },
            g = async (me) => {
              if (me && me.length > 0) {
                const ge = Ae ? new l.vN(t, null) : new l.VE(t, null);
                xe(ge);
                let ue = !0,
                  ce = Array.from(me);
                for (let Me = 0; ue && Me < ce.length; Me++) {
                  let pe = ce[Me];
                  (ue = await ge.AddImage(pe, I.Bhc)),
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
                return ue && (ie(""), le(++V), ge.UploadAllImages()), ue;
              }
              return !1;
            },
            b = (me) => {
              if (me && A) {
                let ge = F.pU.GetFilteredClanImages(t, ve.trim().toLowerCase()),
                  ue = ge.findIndex((ce, Me, pe) => me.imageid == ce.imageid);
                ue >= 0 && (ae(ue), te(ge));
              }
            },
            L = () => {
              ae(void 0), te(void 0);
            },
            Y = (me) => {
              if (ee != null) {
                const ge = re[ee];
                L(),
                  requestAnimationFrame(() => {
                    i(ge, me);
                  });
              }
            },
            fe = () => {
              Y(_._o.k_eInsertFullImage);
            },
            Ee = () => {
              Y(_._o.k_eInsertThumbnail);
            },
            Pe = (me) => {
              (0, D.pg)(
                (0, e.jsx)(m.$, {
                  primaryLocalizedImage: me,
                  appid: r,
                  clanSteamID: t,
                  fnSetImageURL: k,
                  rgRealmList: Z,
                  fnLangHasData: M,
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
                  className: (0, K.A)(ne().Button),
                  onClick: Re,
                  children: (0, n.we)("#Button_Retry"),
                }),
              ],
            });
          if (he)
            return (0, e.jsx)(U.t, {
              position: "center",
              string: (0, n.we)("#Loading"),
            });
          let de = re;
          return (0, e.jsxs)("div", {
            className: (0, K.A)(f().PickerContainer),
            children: [
              (0, e.jsx)($.g, { fnSetImageSearch: (me) => ie(me) }),
              (0, e.jsx)("div", {
                className: f().ImagesContainer,
                children: (0, e.jsx)(p.GF, {
                  clanAccountID: t.GetAccountID(),
                  fileNameSearch: ve,
                  imageInsertCallBack: i,
                  fnOnExpandImage: b,
                  InternalOpenLocalizeImageGroup: Pe,
                }),
              }),
              je > 0 &&
                (0, e.jsx)(
                  X,
                  { uploader: Se, onDismiss: C },
                  "clanimageuploaderview" + je,
                ),
              !E && (0, e.jsx)(O.D, { onDropFiles: g }),
              ee != null &&
                (0, e.jsx)(G, {
                  mainSrc: de[ee].url,
                  imageTitle: de[ee].file_name,
                  nextSrc: ee < de.length - 1 ? de[ee + 1].url : void 0,
                  prevSrc: ee > 0 ? de[ee - 1].url : void 0,
                  onMoveNextRequest: () => ae(ee + 1),
                  onMovePrevRequest: () => ae(ee - 1),
                  onCloseRequest: L,
                  toolbarButtons: [
                    (0, e.jsx)(
                      "button",
                      {
                        className: f().Full,
                        onClick: fe,
                        children: (0, n.we)("#ImagePicker_FullSize"),
                      },
                      "fullsize",
                    ),
                    (0, e.jsx)(
                      "button",
                      {
                        className: f().Full,
                        onClick: Ee,
                        children: (0, n.we)("#ImagePicker_Thumbnail"),
                      },
                      "thumbnail",
                    ),
                  ],
                }),
              (0, e.jsx)(q, {}),
            ],
          });
        });
        function q(o) {
          const {
            bClanImagesV2: t,
            bClanImagesV2Allowed: r,
            setClanImagesV2: i,
          } = (0, j.sK)();
          return (0, e.jsx)(e.Fragment, {
            children:
              r &&
              i &&
              (0, e.jsx)(T.Yh, {
                className: f().EnableClanImagesV2,
                label: "New media conversion",
                checked: t,
                onChange: (v) => i(v),
              }),
          });
        }
        function X(o) {
          const { uploader: t, onDismiss: r } = o,
            [i, v] = (0, x.q3)(() => [
              t.BAllDone(),
              !t.BAllDone() && !t.BHasError(),
            ]),
            E = t.GetLastErrorFile();
          return (0, e.jsxs)("div", {
            className: f().UploaderContainer,
            children: [
              v &&
                (0, e.jsxs)("div", {
                  className: f().UploaderRunning,
                  children: [
                    (0, e.jsx)("div", {
                      className: f().UploaderDesc,
                      children: (0, n.we)(
                        "#ImageUpload_Desc",
                        t.GetCompletedFiles(),
                        t.GetTotalFiles(),
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: "DialogButton",
                      onClick: () => {
                        t.CancelAllUploads(), r();
                      },
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                  ],
                }),
              t.BHasError() &&
                E &&
                (0, e.jsxs)("div", {
                  className: f().UploadMessageAndButtonsContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: f().UploadError,
                      children: (0, n.we)(
                        "#ImageUpload_Error",
                        E.file.name,
                        E.status,
                        E.message,
                      ),
                    }),
                    (0, e.jsx)("button", {
                      className: f().UploadButtonCancel,
                      onClick: r,
                      children: (0, n.we)("#Button_Cancel"),
                    }),
                    (0, e.jsx)("button", {
                      className: f().UploadButtonRetry,
                      onClick: () => t.RetryAllFailedUploads(),
                      children: (0, n.we)("#Button_Retry"),
                    }),
                  ],
                }),
              !!i &&
                (0, e.jsx)("div", {
                  className: f().UploadMessageAndButtonsContainer,
                  children: (0, e.jsx)("div", {
                    className: f().UploadSuccess,
                    children: (0, n.we)("#ImageUpload_Success"),
                  }),
                }),
            ],
          });
        }
      },
      96043: (z, Q, a) => {
        "use strict";
        a.d(Q, { $: () => J });
        var e = a(7850),
          I = a(72604),
          S = a(41735),
          w = a.n(S),
          W = a(75844),
          x = a(90626),
          u = a(76559),
          T = a(35524),
          _ = a(19316),
          l = a(9709),
          p = a.n(l),
          c = a(95682),
          f = a(95695),
          O = a.n(f),
          $ = a(2801),
          B = a(85599),
          ne = a(34592),
          y = a(18210),
          D = a(54963),
          U = a(79573),
          s = a(11243),
          K = a(51746),
          n = a(29630);
        const J = (0, W.PA)((m) => {
          const {
              closeModal: H,
              appid: h,
              partnerEventStore: G,
              primaryLocalizedImage: j,
              clanSteamID: F,
              fnSetImageURL: V,
              rgRealmList: R,
              fnLangHasData: q,
              fnGetImageHash: X,
            } = m,
            [o, t] = x.useState(),
            [r, i] = x.useState(!0),
            [v, E] = x.useState(),
            A = (0, D.YR)(() => w().CancelToken.source());
          x.useEffect(
            () => () => A.cancel("LocalizedImageDialog component unmounted"),
            [A],
          );
          const k = x.useCallback(async () => {
              var ae;
              try {
                const re = u.b.InitFromClanID(j.clanAccountID),
                  te = await n.zU.AsyncGetImageResolution(
                    re,
                    j.image_hash,
                    j.file_type,
                    A,
                    !1,
                  );
                if (A.token.reason) return;
                if (te.success != I.R || !te.width || !te.height) {
                  console.error(
                    "LocalizedImageDialog : failed to determine the primary image resolution. " +
                      ((ae = te.err_msg) != null ? ae : ""),
                  ),
                    E({ strMsg: te.err_msg });
                  return;
                }
                E(void 0), t(te);
              } catch (re) {
                let te = (0, ne.H)(re);
                console.error("LocalizedImageDialog : " + te.strErrorMsg, te),
                  E({ strMsg: te.strErrorMsg });
              }
            }, [A, j.clanAccountID, j.file_type, j.image_hash]),
            Z = x.useCallback(async () => {
              try {
                await T.R.DetermineAvailableLocalizationForGroup(A),
                  A.token.reason || i(!1);
              } catch (ae) {
                let re = (0, ne.H)(ae);
                console.error("LocalizedImageDialog : " + re.strErrorMsg, re);
              }
            }, [A]),
            M = x.useCallback(() => k().then(Z), [Z, k]),
            Ie = x.useCallback(() => {
              E(void 0), M();
            }, [M]);
          x.useEffect(() => {
            H &&
              (T.R.SetPrimaryImageForImageGroup(j, "localized_image_group"),
              M());
          }, [H, M, j]);
          const ve = !r && o,
            ie = o ? ` - ${o.width}x${o.height}` : "",
            je = (0, K.EG)(j.file_type).slice(1),
            le =
              o != null && o.width && o != null && o.height
                ? { width: o.width, height: o.height }
                : void 0,
            ee = n.zU.GenerateURLFromHashAndExt(F, n.zU.GetHashAndExt(j));
          return (0, e.jsx)($.eV, {
            bAllowFullSize: !0,
            title: (0, y.we)("#ImagePickerLoc_Title"),
            onCancel: H,
            closeModal: H,
            children: (0, e.jsx)(_.nB, {
              children: (0, e.jsxs)(_.a3, {
                children: [
                  (0, e.jsx)("div", {
                    className: O().FlexRowContainer,
                    children: (0, e.jsxs)("span", {
                      className: O().FlexColumnContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, y.we)("#ImagePickerLoc_Default"),
                            (0, e.jsx)(s.o, {
                              tooltip: (0, y.we)(
                                "#ImagePickerLoc_Default_Hint",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", { className: l.TitleImg, src: ee }),
                        (0, e.jsx)("div", {
                          children: j.file_name + ie + " - " + je,
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
                          className: O().Button,
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
                    (0, e.jsxs)(x.Fragment, {
                      children: [
                        (0, e.jsx)(c.t, {
                          clanSteamID: F,
                          rgSupportArtwork: [],
                          localizedPrimaryImage: j,
                          forceResolution: le,
                          bAllowPreviousClanImageSelection: !0,
                          fnSetImageURL: V,
                          rgRealmList: R,
                        }),
                        (0, e.jsx)("div", {
                          className: l.ArtworkBar,
                          children: (0, e.jsx)(U.it, {
                            clanSteamID: F,
                            eventModel: void 0,
                            artworkType: "localized_image_group",
                            title: (0, y.we)("#ImagePickerLoc_Title"),
                            realms: R,
                            fnLangHasData: q,
                            appid: h,
                            fnGetImageHashAndExt: X,
                            fnSetImageURL: V,
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
      95174: (z, Q, a) => {
        "use strict";
        a.d(Q, { u: () => V, z: () => R });
        var e = a(7850),
          I = a(9046),
          S = a(99412),
          w = a(19298),
          W = a(68266),
          x = a(56492),
          u = a(72609),
          T = a(86298),
          _ = a(33327),
          l = a(21721),
          p = a(95995),
          c = a(29522),
          f = a(40358),
          O = a(72865),
          $ = a(41032),
          B = a(65946),
          ne = a(68031),
          y = a(90626),
          D = a(90825),
          U = a(33924),
          s = a.n(U),
          K = a(28515),
          n = a(76532),
          J = a.n(n),
          m = a(18057),
          H = a(13465),
          h = a(36118),
          G = a(36707),
          j = a(3166);
        const F = 30;
        function V(q) {
          var X, o;
          const {
              event: t,
              imageURLOverride: r,
              bShowAssociatedApp: i,
              langOverride: v,
              onClick: E,
              eEventRount: A,
              bHidePrices: k,
              nSummaryMaxLength: Z,
            } = q,
            M = (0, $.Zj)(t.appid),
            Ie = (0, K.n)(),
            ve = v || (0, S.sfN)(u.TS.LANGUAGE),
            ie =
              (X = (0, W.m0)(
                r !== void 0 ? void 0 : t,
                "capsule",
                ve,
                I.wI.capsule_main,
              )) != null
                ? X
                : r,
            je =
              (o = (0, W.m0)(
                r !== void 0 ? void 0 : t,
                "capsule",
                ve,
                I.wI.full,
              )) != null
                ? o
                : r,
            [le, ee, ae, re] = (0, B.q3)(() => [
              t.GetNameWithFallback(ve) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(ve, Z),
              t.GetSubTitleWithLanguageFallback(ve) || "",
            ]),
            te = (0, c.$5)(t.appid),
            { data: he } = (0, f.lv)(te),
            N = [];
          if ((ie && N.push(ie), je && je !== ie && N.push(je), he)) {
            const xe = (0, l.b0)(he, "main_capsule");
            xe && N.push(xe);
          }
          const [se, De] = (0, y.useState)(ie),
            Ce = (xe, Ae, Oe) => {
              Oe >= N.length && De(void 0), De(N[Oe + 1]);
            };
          if (!t)
            return (0, e.jsx)("div", { className: s().OtherEvents_EventCtn });
          const Te = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
          let Se = re;
          return (
            re && (re.length > F || le.length > F) && (Se = void 0),
            (0, e.jsxs)("div", {
              className: s().EventSizer,
              children: [
                (0, e.jsxs)(x.tj, {
                  className: (0, G.A)(
                    s().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    s().HoversEnabled,
                  ),
                  eventModel: t,
                  route: A || x.PH.k_eView,
                  onClick: E,
                  preferredFocus: !0,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, G.A)(
                        s().EventSummaryContainer,
                        s().HideInWideMode,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          className: s().EventSummaryType,
                          children: ee,
                        }),
                        (0, e.jsx)("div", {
                          className: s().EventSummaryText,
                          children: ae,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: s().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: se ? `url(${(0, D.j3)(se)})` : "none",
                      },
                    }),
                    (0, e.jsxs)("div", {
                      className: s().OtherEvents_ContentCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, G.A)(
                            s().OtherEvents_MainImageCtn,
                            M && s().MaskImages,
                          ),
                          children: (0, e.jsx)(H.c, {
                            rgSources: N,
                            onIncrementalError: Ce,
                            className: s().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, e.jsxs)("div", {
                          className: s().OtherEvents_TextCtn,
                          children: [
                            (0, e.jsx)("div", {
                              className: s().OtherEvents_TextTitle,
                              children: le,
                            }),
                            !!Se &&
                              (0, e.jsx)("div", {
                                className: s().OtherEvents_SubTitle,
                                children: Se,
                              }),
                            (0, e.jsxs)(ne.s, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, G.A)(
                                    s().EventType,
                                    s().ShowInWideMode,
                                  ),
                                  children: ee,
                                }),
                                Te > Ie
                                  ? (0, e.jsx)("div", {
                                      className: (0, G.A)(
                                        s().UpcomingCtn,
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
                                s().EventSummaryText,
                                s().ShowInWideMode,
                              ),
                              children: ae,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(i && t.appid) &&
                  (0, e.jsx)(R, { appid: t.appid, bHidePrice: k }),
              ],
            })
          );
        }
        function R(q) {
          const { appid: X, bHidePrice: o } = q,
            t = (0, c.$5)(X),
            { data: r } = (0, f.J$)(t),
            { data: i } = (0, f.lv)(t),
            { data: v } = (0, f.Q_)(t),
            E = (0, O.n9)(),
            A = (0, j.Qn)();
          if (!i || !r) return null;
          const k = v && v.hide_discount_pct_for_compliance;
          return (0, e.jsx)(p.A, {
            appID: X,
            children: (0, e.jsxs)(w.Z, {
              className: (0, G.A)(s().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, T.S)(r, E, A, !1),
              children: [
                (0, e.jsx)(_.Q, {
                  id: t,
                  hoverProps: {
                    direction: "overlay",
                    style: { minWidth: "320px" },
                  },
                  children: (0, e.jsx)("img", {
                    className: (0, G.A)(s().AppCapsuleImage, s().CapsuleShadow),
                    src: (0, l.b0)(i, "small_capsule"),
                    alt: r.name,
                  }),
                }),
                !o &&
                  !r.is_free &&
                  (0, e.jsxs)("span", {
                    className: (0, G.A)(
                      s().AppCapsulePrice,
                      v != null && v.discount_pct ? J().Discounted : "",
                    ),
                    children: [
                      !!(v != null && v.discount_pct && k) &&
                        (0, e.jsx)("div", {
                          className: J().DiscountIconCtn,
                          children: (0, e.jsx)(h.XH_, {}),
                        }),
                      !!(v != null && v.discount_pct && !k) &&
                        (0, e.jsx)("span", {
                          className: J().StoreSaleDiscountBox,
                          children: `-${v == null ? void 0 : v.discount_pct}%`,
                        }),
                      v &&
                        v.final_price_in_cents &&
                        (0, e.jsx)("span", {
                          className: J().StoreSalePriceBox,
                          children: v.formatted_final_price,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }
      },
      89084: (z, Q, a) => {
        "use strict";
        a.d(Q, { _o: () => w, fW: () => x, fw: () => W });
        var e = a(98112),
          I = a(38340),
          S = a(29630),
          w = ((u) => (
            (u[(u.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
            (u[(u.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
            (u[(u.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
            (u[(u.k_eInsertVideo = 4)] = "k_eInsertVideo"),
            u
          ))(w || {});
        function W(u, T = !1) {
          return T
            ? `${I.lw}/${u.clanAccountID}/${S.zU.GetThumbHashAndExt(u)}`
            : `${I.lw}/${u.clanAccountID}/${S.zU.GetHashAndExt(u)}`;
        }
        function x(u, T, _) {
          let l = "";
          const p = W(T);
          if (_ == 4)
            (l = "[video webm="),
              T.file_type == e.bg.pJ && (l += p),
              (l += " mp4="),
              T.file_type == e.bg.nn && (l += p),
              (l += " autoplay=true controls=false][/video]");
          else if (_ == 2) l = "[img]" + p + "[/img]";
          else {
            const c = W(T, !0);
            l = "[url=" + p + "][img]" + c + "[/img][/url]";
          }
          u.InsertText(l);
        }
      },
      35524: (z, Q, a) => {
        "use strict";
        a.d(Q, { R: () => y });
        var e = a(72604),
          I = a(99412),
          S = a(41735),
          w = a.n(S),
          W = a(14947),
          x = a(76559),
          u = a(41635),
          T = a(3166),
          _ = a(9046),
          l = a(29630),
          p = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          f = (D, U, s) =>
            U in D
              ? p(D, U, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (D[U] = s),
          O = (D, U, s, K) => {
            for (
              var n = K > 1 ? void 0 : K ? c(U, s) : U, J = D.length - 1, m;
              J >= 0;
              J--
            )
              (m = D[J]) && (n = (K ? m(U, s, n) : m(n)) || n);
            return K && n && p(U, s, n), n;
          },
          $ = (D, U, s) => f(D, typeof U != "symbol" ? U + "" : U, s);
        const B = class We {
          constructor() {
            $(this, "m_curLocImageGroup", null),
              $(this, "m_curLocImageGroupType", null),
              (0, W.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(U, s, K, n) {
            let J =
                T.TS.COMMUNITY_BASE_URL +
                "gid/" +
                s.ConvertTo64BitString() +
                "/hasclanimagefile",
              m = { image_hash_and_ext: K, lang: "" + n };
            return (
              (await w().get(J, { params: m, cancelToken: U && U.token })).data
                .success == e.R
            );
          }
          SetPrimaryImageForImageGroup(U, s) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != U.imageid ||
              s != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: U,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = s),
              (this.m_curLocImageGroup.localized_images = (0, u.$Y)(
                this.m_curLocImageGroup.localized_images,
                I.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            var U;
            return (U = this.m_curLocImageGroup) == null
              ? void 0
              : U.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(U, s) {
            var K;
            if (this.m_curLocImageGroup) {
              let n = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[s]
                ? this.m_curLocImageGroup.localized_images[s]
                : l.zU.GenerateURLFromHashAndExt(
                    U,
                    (K = l.zU.GetHashAndExt(n)) != null ? K : "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(U) {
            var s;
            if (!this.m_curLocImageGroup) return;
            const K = this.m_curLocImageGroup.primaryImage,
              n = x.b.InitFromClanID(K.clanAccountID),
              J = (s = l.zU.GetHashAndExt(K)) != null ? s : "",
              m = [];
            for (let h = I.Bhc; h < I.bP9; ++h)
              m.push(We.BDoesClanImageFileExistsOnCDNOrOrigin(U, n, J, h));
            const H = await Promise.all(m);
            (0, W.h5)(() => {
              var h;
              for (let G = I.Bhc; G < I.bP9; ++G)
                H[G] &&
                  (this.m_curLocImageGroup.localized_images[G] =
                    l.zU.GenerateURLFromHashAndExtAndLang(
                      n,
                      J,
                      _.wI.full,
                      G,
                      (h = this.m_curLocImageGroupType) != null ? h : void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(U, s, K) {
            var n;
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[U] = K
                ? l.zU.GenerateURLFromHashAndExtAndLang(
                    s,
                    K,
                    _.wI.full,
                    U,
                    (n = this.m_curLocImageGroupType) != null ? n : void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(U, s) {
            var K;
            if (!this.m_curLocImageGroup) return;
            let n = this.m_curLocImageGroup.primaryImage;
            if ((n == null ? void 0 : n.image_hash) == U) {
              const J = x.b.InitFromClanID(n.clanAccountID),
                m = l.zU.GetHashAndExt(n);
              m &&
                (this.m_curLocImageGroup.localized_images[s] =
                  l.zU.GenerateURLFromHashAndExtAndLang(
                    J,
                    m,
                    _.wI.full,
                    s,
                    (K = this.m_curLocImageGroupType) != null ? K : void 0,
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
              .map((K) => l.zU.GetHashAndExtFromURL(K));
          }
        };
        O([W.sH], B.prototype, "m_curLocImageGroup", 2);
        let ne = B;
        const y = new ne();
      },
      71242: (z, Q, a) => {
        "use strict";
        a.d(Q, { u: () => e });
        function e(I) {
          if (!I) return I;
          const S = I.lastIndexOf(".");
          return S === -1 ? I : I.substring(0, S);
        }
      },
      95682: (z, Q, a) => {
        "use strict";
        a.d(Q, { t: () => B });
        var e = a(7850),
          I = a(65946),
          S = a(90626),
          w = a(75909),
          W = a(35524),
          x = a(38410),
          u = a(53424),
          T = a(50109),
          _ = a(2801),
          l = a(88003),
          p = a(85599),
          c = a(34592),
          f = a(18210),
          O = a(38080),
          $ = a(72805);
        function B(ne) {
          const {
              clanSteamID: y,
              rgSupportArtwork: D,
              localizedPrimaryImage: U,
              bAllowPreviousClanImageSelection: s,
              fnSetImageURL: K,
              rgRealmList: n,
            } = ne,
            [J] = (0, I.q3)(() => [T.O.Get().GetCurEditLanguage()]),
            m = (0, w.zO)(y, D, U),
            H = ne.uploaderOverride || m,
            [h, G] = S.useState(!1),
            j = S.useCallback(
              async (R, q) => {
                var X, o;
                if (!h) {
                  G(!0);
                  try {
                    const { language: t } = (0, x.jj)(
                        (X = R.file_name) != null ? X : "",
                        J,
                      ),
                      r = (0, x.PD)(t, J, n);
                    await H.AddExistingClanImage(R, r);
                  } catch (t) {
                    let r = (0, c.H)(t);
                    console.error("AddExistingClanImage: " + r.strErrorMsg, r),
                      (0, l.pg)(
                        (0, e.jsx)(_.KG, {
                          strDescription: (0, f.we)(
                            "#EventError_Code",
                            (o = r.strErrorMsg) != null ? o : "",
                          ),
                        }),
                        window,
                      );
                  }
                  G(!1);
                }
              },
              [h, H, J, n],
            ),
            F = S.useMemo(
              () =>
                s
                  ? [
                      [
                        (0, e.jsx)(
                          $.Hd,
                          { clanSteamID: y, OnClanImageSelected: j },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [j, s, y],
            ),
            V = (R) => {
              var q;
              for (const X of R) {
                const o = X.uploadResult;
                if (o != null && o.origimagehash) {
                  const t = (0, x.PD)(o.language, J, n);
                  W.R.AddLocalizeImageUploaded(o.origimagehash, t);
                } else {
                  const t = u.pU.GetClanImageByImageHash(
                      y,
                      (q = o == null ? void 0 : o.image_hash) != null ? q : "",
                    ),
                    r = X.image.GetCurrentImageOption();
                  if (t && r) {
                    const i = (0, x.PD)(X.image.language, J, n);
                    K(r.artworkType, t, i);
                  }
                }
              }
            };
          return (0, e.jsx)(O.O9, {
            ...ne,
            imageUploader: H,
            rgRealmList: n,
            elAdditonalButtons: h
              ? [
                  (0, e.jsx)(
                    p.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, f.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : F,
            fnUploadComplete: V,
          });
        }
      },
      72805: (z, Q, a) => {
        "use strict";
        a.d(Q, { GF: () => H, Hd: () => X, ge: () => G });
        var e = a(7850),
          I = a(72604),
          S = a(98112),
          w = a(90626),
          W = a(89084),
          x = a(76559),
          u = a(53424),
          T = a(26589),
          _ = a(55436),
          l = a(95695),
          p = a.n(l),
          c = a(90405),
          f = a(2801),
          O = a(88003),
          $ = a(85599),
          B = a(34592),
          ne = a(36707),
          y = a(82734),
          D = a(18210),
          U = a(53732),
          s = a.n(U),
          K = a(71647),
          n = a.n(K),
          J = a(85096),
          m = a(29630);
        const H = w.memo(function (t) {
          const {
            fileNameSearch: r,
            clanAccountID: i,
            imageInsertCallBack: v,
            fnOnExpandImage: E,
            showImageActions: A = !0,
            InternalOpenLocalizeImageGroup: k,
          } = t;
          return (0, e.jsx)(h, {
            clanAccountID: i,
            fileNameSearch: r,
            children: (Z, M) =>
              Z.map((Ie) =>
                (0, e.jsx)(
                  j,
                  {
                    clanImage: Ie,
                    searchStringHilight: M,
                    imageInsertCallBack: v,
                    showImageActions: A,
                    fnOnOpenLocalizedImageGroup: k,
                    OnImageClick: E,
                  },
                  Ie.imageid,
                ),
              ),
          });
        });
        function h(o) {
          const { clanAccountID: t, fileNameSearch: r, children: i } = o,
            v = (0, u.n9)(t),
            E = r.trim().toLowerCase() || "",
            A = u.pU.GetFilteredClanImagesList(v, E);
          if (A.length == 0) {
            const k = x.b.InitFromClanID(t);
            let Z = u.pU.GetLoadState(k);
            return Z && Z.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: s().ResultNotification,
                    children:
                      E.length > 0
                        ? (0, D.we)("#ImagePicker_EmptySearch")
                        : (0, D.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : Z && Z.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: s().ErrorCode,
                      children: (0, D.we)("#ImagePicker_Error", Z.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: s().ResultNotification,
                      children: (0, D.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return i(A, E);
        }
        function G(o) {
          const {
            clanAccountID: t,
            fileNameSearch: r,
            onImageSelected: i,
            selectedItem: v,
          } = o;
          return (0, e.jsx)(h, {
            clanAccountID: t,
            fileNameSearch: r,
            children: (E) =>
              (0, e.jsx)("div", {
                className: s().ClanImageGrid,
                children: E.map((A) =>
                  (0, e.jsx)(
                    R,
                    { clanImage: A, selected: A == v, onImageSelected: i },
                    A.imageid,
                  ),
                ),
              }),
          });
        }
        function j(o) {
          const {
              clanImage: t,
              searchStringHilight: r,
              imageInsertCallBack: i,
              OnImageClick: v,
              showImageActions: E,
              fnOnOpenLocalizedImageGroup: A,
            } = o,
            [k, Z] = w.useState(!1),
            M = () => i(t, W._o.k_eInsertFullImage),
            Ie = () => i(t, W._o.k_eInsertVideo),
            ve = () => i(t, W._o.k_eInsertThumbnail),
            ie = (xe) => {
              t.url &&
                (xe.dataTransfer.setData("text", t.url),
                u.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Oe = x.b.InitFromClanID(t.clanAccountID);
                  Ae(Oe, !0);
                }));
            },
            je = (xe) => {
              t.url &&
                u.pU.GetClanImageDragListener().forEach((Ae) => {
                  let Oe = x.b.InitFromClanID(t.clanAccountID);
                  Ae(Oe, !1);
                });
            },
            le = (xe) => {
              var Ae, Oe;
              (0, O.pg)(
                (0, e.jsx)(f.o0, {
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
            ee = (xe) => {
              console.log("ClanImageWrapper on delete error: " + xe),
                (0, O.pg)(
                  (0, e.jsx)(f.KG, {
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
              let xe = x.b.InitFromClanID(t.clanAccountID);
              u.pU
                .DeleteClanImage(xe, t)
                .then((Ae) => {
                  Ae.success != I.R && ee((0, B.H)(Ae).strErrorMsg), Z(!1);
                })
                .catch((Ae) => {
                  ee((0, B.H)(Ae).strErrorMsg), Z(!1);
                }),
                re();
            },
            re = () => {},
            te = () => {
              v && v(t);
            },
            he = t.file_name ? t.file_name : "",
            N = (0, _.r)(r, he, String(t.imageid), s().Hilight),
            se = m.zU.BIsClanImageVideo(t),
            De = E && !k && !se,
            Ce = E && !k && !se,
            Te = E && !k && se,
            Se = E && !k && !se;
          return (0, e.jsx)(c.K, {
            placeholderHeight: "100vh",
            className: s().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: s().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: s().ImageWrapper,
                  style: {
                    backgroundImage: se ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: ie,
                  onDragEnd: je,
                  onDoubleClick: M,
                  onClick: te,
                  children: (0, e.jsx)(V, {
                    clanImage: t,
                    className: s().VideoBackground,
                  }),
                }),
                De &&
                  (0, e.jsx)("span", {
                    className: s().Full,
                    onClick: M,
                    children: (0, D.we)("#ImagePicker_FullSize"),
                  }),
                k &&
                  (0, e.jsx)($.t, {
                    size: "medium",
                    className: s().FloatingThrobber,
                  }),
                Ce &&
                  (0, e.jsx)("span", {
                    className: s().Thumb,
                    onClick: ve,
                    children: (0, D.we)("#ImagePicker_Thumbnail"),
                  }),
                Se &&
                  A &&
                  (0, e.jsx)(F, {
                    bDeleting: k,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: A,
                  }),
                Te &&
                  (0, e.jsx)("span", {
                    className: s().Full,
                    onClick: Ie,
                    children: (0, D.we)("#ImagePicker_Video"),
                  }),
                !k &&
                  (0, e.jsx)("span", {
                    className: s().Delete,
                    onClick: le,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: s().ImageWrapperFilename,
                  title: he,
                  children: N,
                }),
              ],
            }),
          });
        }
        function F(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: r,
              bDeleting: i,
            } = o,
            { data: v } = (0, T.hM)(t.clanAccountID);
          return i || !(v != null && v.valve_admin)
            ? null
            : (0, e.jsx)("span", {
                className: (0, ne.A)(s().Localized, p().ValveOnlyBackground),
                onClick: () => (r == null ? void 0 : r(t)),
                children: "(VO) " + (0, D.we)("#ImagePicker_Localized"),
              });
        }
        function V(o) {
          const { clanImage: t, className: r } = o;
          return m.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: r,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == S.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function R(o) {
          const { clanImage: t, onImageSelected: r, selected: i } = o;
          return (0, e.jsxs)("div", {
            className: (0, ne.A)(s().ClanImageGridItem, i && s().Selected),
            onClick: () => r(t, !1),
            onDoubleClick: () => r(t, !0),
            title: t.file_name,
            children: [
              (0, e.jsx)("div", {
                className: s().ImgCtn,
                children: m.zU.BIsClanImageVideo(t)
                  ? (0, e.jsx)(V, { clanImage: t })
                  : (0, e.jsx)("img", { src: t.url, loading: "lazy" }),
              }),
              (0, e.jsx)("div", { className: s().Name, children: t.file_name }),
            ],
          });
        }
        function q(o) {
          const { clanSteamID: t, closeModal: r, OnClanImageSelected: i } = o,
            v = w.useCallback(
              (k, Z) => {
                i == null || i(k, Z), r == null || r();
              },
              [i, r],
            ),
            [E, A] = w.useState("");
          return (0, e.jsxs)(f.o0, {
            strTitle: (0, D.we)("#ImagePicker_Images"),
            strDescription: (0, D.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: r,
            onCancel: r,
            children: [
              (0, e.jsx)(J.g, { fnSetImageSearch: A }),
              (0, e.jsx)(H, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: E,
                imageInsertCallBack: v,
                showImageActions: !1,
              }),
            ],
          });
        }
        function X(o) {
          const { clanSteamID: t, OnClanImageSelected: r } = o;
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
                onClick: (i) => {
                  var v;
                  (0, O.pg)(
                    (0, e.jsx)(q, { clanSteamID: t, OnClanImageSelected: r }),
                    (v = (0, y.uX)(i)) != null ? v : window,
                  );
                },
              }),
            ],
          });
        }
      },
      38745: (z, Q, a) => {
        "use strict";
        a.d(Q, { D: () => u });
        var e = a(7850),
          I = a(36707),
          S = a(18210),
          w = a(95603),
          W = a(71647),
          x = a.n(W);
        function u(T) {
          const {
              onDropFiles: _,
              renderDesciption: l,
              elAdditonalButtons: p,
              elOverrideDragAndDropText: c,
            } = T,
            [f, O] = (0, w.hk)(_),
            [$, B] = (0, w.Ss)(_, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...f,
            className: (0, I.A)(
              O ? x().DragAndDropContainerDragging : x().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!l && l(),
              (0, e.jsx)("div", {
                children: c || (0, S.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: x().ImageUploadBar,
                children: [
                  $,
                  (0, e.jsxs)("label", {
                    onClick: B,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, S.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: x().SelectImageButton,
                        children: (0, S.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              p,
              T.children,
            ],
          });
        }
      },
      85096: (z, Q, a) => {
        "use strict";
        a.d(Q, { g: () => x });
        var e = a(7850),
          I = a(90626),
          S = a(18210),
          w = a(49460),
          W = a.n(w);
        function x(u) {
          const { fnSetImageSearch: T } = u,
            _ = (0, I.useRef)(null);
          return (0, e.jsx)("div", {
            className: w.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: _,
              className: w.SearchInput,
              type: "text",
              placeholder: (0, S.we)("#ImagePicker_Search"),
              onChange: (l) => T(l.currentTarget.value),
              onKeyDown: (l) => {
                l.key == "Escape" &&
                  (T(""), _.current && (_.current.value = ""));
              },
            }),
          });
        }
      },
      38080: (z, Q, a) => {
        "use strict";
        a.d(Q, { O9: () => j, PY: () => F, fY: () => V });
        var e = a(7850),
          I = a(65946),
          S = a(75844),
          w = a(90626),
          W = a(99412),
          x = a(32093),
          u = a(98112),
          T = a(64),
          _ = a(38410),
          l = a(50109),
          p = a(19316),
          c = a(38745),
          f = a(95695),
          O = a.n(f),
          $ = a(2801),
          B = a(88003),
          ne = a(64641),
          y = a.n(ne),
          D = a(36118),
          U = a(85599),
          s = a(34592),
          K = a(36707),
          n = a(82734),
          J = a(21254),
          m = a(18210),
          H = a(27344),
          h = a.n(H),
          G = a(9472);
        function j(r) {
          const {
              imageUploader: i,
              fnUploadComplete: v,
              elOverrideDragAndDropText: E,
              forceResolution: A,
              elAdditonalButtons: k,
              rgRealmList: Z,
            } = r,
            [M, Ie] = (0, I.q3)(() => [
              i.GetUploadImages(),
              l.O.Get().GetCurEditLanguage(),
            ]),
            ve = w.useCallback(
              async (le) => {
                var ee;
                let ae = Array.from(le),
                  re = !0;
                for (let te = 0; te < ae.length; te++) {
                  const he = ae[te],
                    { language: N } = (0, _.jj)(
                      he == null ? void 0 : he.name,
                      Ie,
                    );
                  try {
                    const se = (0, _.PD)(N, Ie, Z);
                    (re = await i.AddImageForLanguage(he, se)),
                      re ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            te +
                            " file=" +
                            he.name,
                        ),
                        (0, B.pg)(
                          (0, e.jsx)($.KG, {
                            strDescription: (0, m.we)(
                              "#ImagePicker_Error",
                              he.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (se) {
                    let De = (0, s.H)(se);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + De.strErrorMsg,
                      De,
                    ),
                      (0, B.pg)(
                        (0, e.jsx)($.KG, {
                          strDescription: (0, m.we)(
                            "#EventError_Code",
                            (ee = De.strErrorMsg) != null ? ee : "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return re;
              },
              [Ie, i, Z],
            ),
            ie = w.useMemo(
              () =>
                k instanceof Array
                  ? k
                  : [
                      (0, e.jsx)(
                        w.Fragment,
                        { children: k },
                        "elAdditonalButtons",
                      ),
                    ],
              [k],
            );
          (0, I.q3)(() =>
            M.map((le) => ({ a: le.GetCurrentImageOption(), b: le.language })),
          );
          const je = async () => {
            const le = await i.UploadAllImages(A);
            v == null || v(le);
          };
          return (0, e.jsxs)(c.D, {
            onDropFiles: ve,
            elAdditonalButtons: ie,
            elOverrideDragAndDropText: E,
            children: [
              (0, e.jsx)(w.Fragment, {
                children: (0, e.jsx)("div", {
                  className: h().UploadPreviewCtn,
                  children: M.map((le) =>
                    (0, e.jsx)(
                      R,
                      {
                        asset: le,
                        forceResolution: A,
                        fnOnRemove: () => i.DeleteUploadImage(le),
                        languageRealms: Z,
                      },
                      "arttabupload_" + le.filename + "_" + le.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(F, { imageUploader: i, fnOnUploadImageRequested: je }),
            ],
          });
        }
        function F(r) {
          const { imageUploader: i, fnOnUploadImageRequested: v } = r,
            [E] = (0, I.q3)(() => [i.GetUploadImages()]),
            A = E.some((Z) => Z.status == "pending"),
            k = E.some(
              (Z) =>
                Z.status == "waiting" ||
                Z.status == "uploading" ||
                Z.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: h().UploadPreviewButtonsCtn,
            children: [
              !!E.length &&
                (0, e.jsx)(p.$n, {
                  style: { margin: "8px" },
                  onClick: v,
                  disabled: !A,
                  children: (0, m.we)("#ImageUpload_Upload"),
                }),
              !!E.length &&
                (0, e.jsx)(p.$n, {
                  style: { margin: "8px" },
                  onClick: i.ClearImages,
                  disabled: k,
                  children: (0, m.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function V(r, i, v, E, A) {
          let k = new Array();
          return (
            r.GetUploadImages().forEach((Z) => {
              k.push(
                (0, e.jsx)(
                  R,
                  {
                    asset: Z,
                    forceResolution: v,
                    forceFileType: E,
                    fnOnRemove: () => r.DeleteUploadImage(Z),
                    languageRealms: A,
                  },
                  i + Z.file + "_" + Z.uploadTime,
                ),
              );
            }),
            k
          );
        }
        const R = (0, S.PA)(q);
        function q(r) {
          var i, v, E, A, k;
          const Z = (N) => {
              if (N instanceof T.M7) {
                N.ResetImage();
                const se = window,
                  De = (0, e.jsx)(J.q, {
                    ownerWin: se,
                    uploadFile: N,
                    forceResolution: r.forceResolution,
                    fileType: r.forceFileType || u.bg.dU,
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
            { asset: M, fnOnRemove: Ie, languageRealms: ve } = r,
            ie =
              (i = M.ImageOptions) == null
                ? void 0
                : i
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
                        (M.BIsOriginalMinimumDimensions(N) &&
                          M.FileTypeMatchesImageTypes(N)) ||
                          (Ce = h().ImageDimensionTooSmall),
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
            le = M.BSupportsLanguages()
              ? t(
                  m.A0.GetLanguageListForRealms(
                    ve != null ? ve : [x.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            ee = M.IsValidAssetType(r.forceResolution, r.forceFileType),
            ae = M.status == "pending";
          let re = je[M.status];
          M.status == "pending" &&
            (ee.needsCrop
              ? (re = (0, m.we)("#ImageUpload_NeedsCrop"))
              : ee.error && (re = (0, m.we)("#ImageUpload_Invalid")));
          let te;
          const he = M.GetCurrentImageOption();
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
                (E = ie == null ? void 0 : ie[0]) == null ? void 0 : E.data),
            (0, e.jsxs)("div", {
              className: h().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: h().UploadPreviewDelete,
                  onClick: () => Ie(M),
                  children: (0, e.jsx)(D.sED, {}),
                }),
                (0, e.jsx)(X, { asset: M }),
                le &&
                  (0, e.jsx)(p.m, {
                    strDropDownClassName: O().DropDownScroll,
                    rgOptions: le,
                    selectedOption: M.language,
                    onChange: (N) => (M.language = N.data),
                    disabled: !ae,
                  }),
                ie &&
                  (ie == null ? void 0 : ie.length) > 1 &&
                  (0, e.jsx)(p.m, {
                    label: M.GetImageOptionLabel(),
                    rgOptions: ie,
                    selectedOption: te,
                    onChange: (N) => M.SetCurrentImageOption(N.data),
                    disabled: !ae,
                  }),
                ae &&
                  ((A = ee.warnings) == null
                    ? void 0
                    : A.map((N, se) =>
                        (0, e.jsx)(
                          "div",
                          { className: h().UploadPreviewWarning, children: N },
                          `warning${se}`,
                        ),
                      )),
                ae &&
                  ((k = ee.messages) == null
                    ? void 0
                    : k.map((N, se) =>
                        (0, e.jsx)(
                          "div",
                          { className: h().UploadPreviewMessage, children: N },
                          `message${se}`,
                        ),
                      )),
                (0, e.jsxs)("div", {
                  className: (0, K.A)({
                    [O().FlexColumnContainer]: !0,
                    [h().UploadPreviewError]: M.status == "failed",
                  }),
                  children: [
                    re,
                    (0, G.o)(M.status) &&
                      (0, e.jsx)("div", {
                        className: y().FlexCenter,
                        children: (0, e.jsx)(U.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: h().UploadPreviewError,
                  children: M.message,
                }),
                ae &&
                  ee.error &&
                  (0, e.jsx)("div", {
                    className: h().UploadPreviewError,
                    children: ee.error,
                  }),
                ae &&
                  ee.needsCrop &&
                  (0, e.jsx)(p.jn, {
                    onClick: () => Z(M),
                    children: (0, m.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function X(r) {
          const { asset: i } = r;
          return i.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: h().PreviewImgCtn,
                onClick: (v) =>
                  (0, B.pg)((0, e.jsx)(o, { asset: i }), (0, n.uX)(v)),
                children: [
                  (0, e.jsxs)("span", {
                    className: h().PreviewImgInfo,
                    children: [i.width, " x ", i.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: i.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: h().PreviewImgCtn,
                style: { backgroundImage: `url(${i.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: h().PreviewImgInfo,
                  children: [i.width, " x ", i.height],
                }),
              });
        }
        function o(r) {
          const { asset: i, closeModal: v } = r;
          return (0, e.jsx)($.o0, {
            bAlertDialog: !0,
            closeModal: v,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: i.dataUrl }),
            }),
          });
        }
        function t(r) {
          const i = [],
            v = new Array();
          for (const E of r) {
            if (E == W.X51) continue;
            const A = (0, m.we)("#Language_" + (0, W.LgB)(E));
            v.push({ label: A, data: E });
          }
          return (
            v.sort((E, A) => E.label.localeCompare(A.label)),
            v.forEach((E) => i.push({ label: E.label, data: E.data })),
            v
          );
        }
      },
      79573: (z, Q, a) => {
        "use strict";
        a.d(Q, { uE: () => xe, it: () => Ae });
        var e = a(7850),
          I = a(99412),
          S = a(14947),
          w = a(65946),
          W = a(75844),
          x = a(90626),
          u = a(25279),
          T = a(50109),
          _ = a(84676),
          l = a(19316),
          p = a(25359),
          c = a.n(p),
          f = a(54327),
          O = a(56330),
          $ = a(95695),
          B = a.n($),
          ne = a(2801),
          y = a(88003),
          D = a(36118),
          U = a(71421),
          s = a(36707),
          K = a(82734),
          n = a(18210),
          J = a(54963),
          m = a(3166),
          H = a(71242),
          h = a(29630),
          G = a(35524),
          j = a(9046),
          F = a(58483),
          V = a(73085),
          R = a(93464),
          q = a(95174),
          X = a(9709),
          o = a(22142),
          t = a(19298),
          r = a(13465),
          i = a(21659),
          v = a(15496),
          E = a.n(v),
          A = a(88812);
        function k(d) {
          var P;
          const {
              event: C,
              spotlightURLOverride: g,
              fnHandleOpenEvent: b,
              fnImageFailureCallback: L,
              fnFilterImageURLsForKnownFailures: Y,
              langOverride: fe,
            } = d,
            Ee = (0, i.c5)(),
            Pe = x.useCallback(
              (oe) => {
                oe.preventDefault(), b && b(C);
              },
              [C, b],
            ),
            de = fe || (0, I.sfN)(m.TS.LANGUAGE),
            [me, ge, ue] = (0, w.q3)(() => [
              C.GetSummaryWithFallback(de),
              C.GetNameWithFallback(de),
              C.BShowLibrarySpotlightText(),
            ]);
          let ce = "spotlight",
            Me = j.wI.spotlight_main;
          (C.appid == 2434320 || m.TS.EUNIVERSE == I.Rv) &&
            ((ce = Ee
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (Me = j.wI.full));
          let pe =
            (P = (0, A.WC)(g !== void 0 ? void 0 : C, ce, de, Me)) != null
              ? P
              : g !== void 0
                ? [g]
                : [];
          Y && pe && (pe = Y(pe));
          const _e = me.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(x.Fragment, {
            children: (0, e.jsx)("div", {
              className: E().MajorEvent_Ctn,
              ref: d.containerRef,
              children: (0, e.jsxs)(t.Z, {
                className: (0, s.A)(
                  E().AppDetailsSpotlightContainer,
                  E().MajorEventContainer,
                ),
                onActivate: Pe,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: E().MajorEventBackground,
                    children: (0, e.jsx)(r.c, {
                      className: E().MajorEventImageBackgroundBlur,
                      rgSources: pe,
                      onIncrementalError: (oe, Le, Ue) => L && L(Le),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: E().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(r.c, {
                        className: E().MajorEventImage,
                        rgSources: pe,
                        onIncrementalError: (oe, Le, Ue) => L && L(Le),
                      }),
                      (0, e.jsx)("div", {
                        className: E().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: E().MajoreEventImageContentContainer,
                        children:
                          ue &&
                          (0, e.jsxs)("div", {
                            className: E().MajorEventContent,
                            children: [
                              (0, e.jsx)(r.c, {
                                className: E().MajorEventSpotlightBackground,
                                rgSources: pe,
                                onIncrementalError: (oe, Le, Ue) => L && L(Le),
                              }),
                              (0, e.jsxs)("div", {
                                className: E().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: E().MajorEventTitle,
                                    children: ge,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: E().MajorEventSummary,
                                    children: _e,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: E().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Z = a(79949),
          M = a.n(Z);
        function Ie(d) {
          var P;
          const {
              langOverride: C,
              artworkType: g,
              fnOnLanguagePreviewChange: b,
              clanSteamID: L,
              eventModel: Y,
              partnerEventStore: fe,
              fnOnRemoveImage: Ee,
              fnOnArtworkLangChange: Pe,
              realms: de,
              fnLangHasData: me,
              fnGetImageHashAndExt: ge,
            } = d,
            ue = ge(g, C),
            ce = ue
              ? h.zU.GenerateURLFromHashAndExtAndLang(L, ue, j.wI.full, C)
              : "",
            [Me] = (0, w.q3)(() => [se(g, ge)]);
          return Me == 0
            ? (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  g === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL:
                        m.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: Y,
                    }),
                  g === "background" &&
                    (0, e.jsx)(ee, {
                      imgURL:
                        m.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: C,
                      eventModel: Y,
                      partnerEventStore: fe,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(g) &&
                    (0, e.jsx)(ie, {
                      langOverride: C,
                      artworkType: g,
                      eventModel: Y,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, n.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: c().ImagePreviewContainer,
                children: [
                  g === "capsule" &&
                    (0, e.jsx)(le, {
                      imgURL: ce,
                      eventModel: Y,
                      langOverride: C,
                    }),
                  g === "background" &&
                    (0, e.jsx)(ee, {
                      imgURL: ce,
                      lang: C,
                      eventModel: Y,
                      partnerEventStore: fe,
                    }),
                  g === "spotlight" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: Y, lang: C }),
                  g === "localized_store_app_spotlight" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: Y, lang: C }),
                  g === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(ae, { imgURL: ce, event: Y, lang: C }),
                  (g === "broadcast_left" || g === "broadcast_right") &&
                    (0, e.jsx)(re, {
                      imgURL: ce,
                      side: g === "broadcast_right" ? "right" : "left",
                    }),
                  g === "sale_header" && (0, e.jsx)(te, { imgURL: ce }),
                  g === "sale_overlay" && (0, e.jsx)(he, { imgURL: ce }),
                  j.pb.includes(g) &&
                    (0, e.jsx)("img", {
                      className: X.PreviewImg,
                      src:
                        (P = G.R.GetLocalizedImageGroupForEditAsURL(L, C)) !=
                        null
                          ? P
                          : void 0,
                    }),
                  g === "product_banner" && (0, e.jsx)(N, { imgURL: ce }),
                  g === "product_mobile_banner" &&
                    (0, e.jsx)(N, { imgURL: ce }),
                  g === "sale_logo" && (0, e.jsx)(N, { imgURL: ce }),
                  g === "bestofyear_banner" && (0, e.jsx)(N, { imgURL: ce }),
                  g === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(N, { imgURL: ce }),
                  (0, e.jsx)(o.h, {
                    langOverride: C,
                    clanSteamID: L,
                    fnOnLanguagePreviewChange: b,
                    fnOnRemoveImage: Ee,
                    fnOnArtworkLangChange: Pe,
                    realms: de,
                    fnLangHasData: me,
                    fnGetImageHash: (pe) => {
                      var _e;
                      return (0, H.u)((_e = ge(g, pe)) != null ? _e : "");
                    },
                  }),
                ],
              });
        }
        function ve(d) {
          const { artworkType: P } = d,
            C = ArtworkTypeMap[P];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + P),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [C.width, " X ", C.height],
              }),
            ],
          });
        }
        function ie(d) {
          const { artworkType: P, langOverride: C, eventModel: g } = d,
            b = u.Fj[P],
            L = x.useMemo(
              () =>
                je(
                  (0, n.we)("#EventEditor_ArtworkType_" + P),
                  `${b.width} X ${b.height}`,
                ),
              [b.height, b.width, P],
            );
          return (0, e.jsx)(ae, { lang: C, imgURL: L, event: g });
        }
        function je(d, P) {
          const b = document.createElement("canvas");
          (b.width = 780), (b.height = 200);
          const L = b.getContext("2d"),
            Y = 20;
          for (let Pe = 0; Pe < 200; Pe += Y)
            for (let de = 0; de < 780; de += Y)
              (L.fillStyle =
                (de / Y + Pe / Y) % 2 === 0 ? "#a405e3ff" : "#000000"),
                L.fillRect(de, Pe, Y, Y);
          const fe = L.createLinearGradient(0, 0, 780, 0);
          fe.addColorStop(0, "rgba(32,32,32,0.8)"),
            fe.addColorStop(1, "rgba(60,60,60,0.8)"),
            (L.fillStyle = fe),
            L.fillRect(0, 0, 780, 200);
          const Ee = L.createRadialGradient(
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
            (L.fillStyle = Ee),
            L.fillRect(0, 0, 780, 200),
            (L.fillStyle = "#fff"),
            (L.font = "32px Arial"),
            (L.textAlign = "center"),
            (L.textBaseline = "middle"),
            L.fillText(d, 780 / 2, 200 / 2 - 20),
            P &&
              ((L.font = "18px Arial"), L.fillText(P, 780 / 2, 200 / 2 + 25)),
            b.toDataURL("image/png")
          );
        }
        function le(d) {
          const { imgURL: P, eventModel: C, langOverride: g } = d,
            b = (0, T.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(q.u, {
              event: C,
              imageURLOverride: P,
              langOverride: g != null ? g : b,
            }),
          });
        }
        function ee(d) {
          const { lang: P, eventModel: C, partnerEventStore: g } = d,
            b = (0, F.LJ)(),
            [L, Y, fe, Ee, Pe] = (0, w.q3)(() => [
              C.GetNameWithFallback(P),
              C.GetDescriptionWithFallback(P),
              C.GetSubTitleWithLanguageFallback(P),
              C.type,
              C.AnnouncementGID,
            ]);
          let de = Y
            ? (0, e.jsx)(R.fh, {
                text: Y || "",
                showErrorInfo: !1,
                event: C,
                languageOverride: T.O.Get().GetCurEditLanguage(),
              })
            : (0, n.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: M().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: M().ExampleSectionTitle,
                children: (0, n.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, s.A)(M().DetailPageExample, "DetailPageExample"),
                children: (0, e.jsxs)("div", {
                  className: M().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: M().MainImageCtn,
                      children: (0, e.jsx)("img", { src: d.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: M().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: M().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: M().TextTitle,
                            children:
                              L ||
                              (0, n.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: M().TextSubTitle,
                            children:
                              fe ||
                              (0, n.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: M().TextBody,
                            children: de,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Ee != I.Fwr &&
                (0, e.jsxs)(x.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: M().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: M().ExampleSectionTitle,
                      children: (0, n.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, s.A)(
                        M().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: M().DetailExample2,
                        children: (0, e.jsx)(
                          V.He,
                          {
                            event: C,
                            emoticonStore: b,
                            partnerEventStore: g,
                            headerClassnames: "editor",
                            langOverride: P,
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
        const ae = (d) => {
            var P;
            const [C] = (0, _.t7)(d.event.appid, { include_assets: !0 });
            if (!C) return null;
            const g = C.GetName(),
              b =
                (P = C.GetAssets()) == null ? void 0 : P.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: M().SpotlightExample,
              children: (0, e.jsx)(k, {
                event: d.event,
                strDisplayName: g != null ? g : "",
                gameIconUrl: b,
                spotlightURLOverride: d.imgURL,
                langOverride: d.lang,
              }),
            });
          },
          re = (d) => {
            const P = [
              (0, e.jsx)("img", { src: d.imgURL }, "img"),
              (0, e.jsx)("div", { className: c().BroadcastPreview }, "video"),
            ];
            return (
              d.side === "right" && P.reverse(),
              (0, e.jsx)("div", {
                className: M().BroadcastPreviewContainer,
                children: P,
              })
            );
          },
          te = (d) =>
            (0, e.jsx)("div", {
              className: M().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: d.imgURL,
              }),
            }),
          he = (d) =>
            (0, e.jsx)("div", {
              className: M().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: d.imgURL,
              }),
            }),
          N = (d) =>
            (0, e.jsx)("div", {
              className: M().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: d.imgURL,
              }),
            });
        function se(d, P) {
          var C, g;
          let b = 0;
          for (let L = I.Bhc; L < I.bP9; ++L)
            ((g = (C = P(d, L)) == null ? void 0 : C.length) != null ? g : 0) >
              0 && (b += 1);
          return b;
        }
        var De = Object.defineProperty,
          Ce = Object.getOwnPropertyDescriptor,
          Te = (d, P, C, g) => {
            for (
              var b = g > 1 ? void 0 : g ? Ce(P, C) : P, L = d.length - 1, Y;
              L >= 0;
              L--
            )
              (Y = d[L]) && (b = (g ? Y(P, C, b) : Y(b)) || b);
            return g && b && De(P, C, b), b;
          };
        const Se =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var xe = ((d) => (
          (d[(d.k_None = 0)] = "k_None"),
          (d[(d.k_Suggested = 1)] = "k_Suggested"),
          (d[(d.k_Required = 2)] = "k_Required"),
          (d[(d.k_Requested = 3)] = "k_Requested"),
          d
        ))(xe || {});
        function Ae(d) {
          var P, C;
          const {
              artworkType: g,
              headerHint: b,
              appid: L,
              fnToggleMinimize: Y,
              realms: fe,
              eventModel: Ee,
              fnLangHasData: Pe,
              fnGetImageHashAndExt: de,
              fnSetImageURL: me,
              partnerEventStore: ge,
            } = d,
            [ue] = (0, _.t7)(L, { include_assets: !0 }),
            [ce, Me] = (0, w.q3)(() => [
              Ee == null ? void 0 : Ee.GetEventType(),
              Ee == null ? void 0 : Ee.BHasTag("vo_marketing_message"),
            ]),
            pe = ce == I.ajI;
          let _e = null;
          b === 2
            ? (_e = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, n.we)("#EventEditor_Required"),
              }))
            : b === 1
              ? (_e = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Suggested"),
                }))
              : b === 3 &&
                (_e = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, n.we)("#EventEditor_Requested"),
                }));
          let oe = null;
          g === "capsule"
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
            : g === "background"
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
              : g === "spotlight" || g === "localized_store_app_spotlight"
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
                : g === "localized_store_app_spotlight_mobile"
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
                  : g === "broadcast_left" || g === "broadcast_right"
                    ? (oe = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, n.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : g === "sale_header"
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
                      : g === "hero"
                        ? ue &&
                          (oe = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, n.we)("#selectimage_tip_hero_1"),
                              }),
                              !(
                                (P = ue.GetAssets()) != null &&
                                P.GetLibraryHeroURL()
                              ) &&
                                (0, e.jsx)("p", {
                                  className: O.ErrorStylesBackground,
                                  children: (0, n.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : g === "localized_image_group" ||
                            g === "link_capsule" ||
                            g === "sale_section_title" ||
                            g === "schedule_track_art" ||
                            g === "localized_background_art"
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
                          : g === "product_banner"
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
                            : g === "product_mobile_banner" ||
                                g === "product_banner_override" ||
                                g === "product_mobile_banner_override"
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
                                        g === "product_mobile_banner" &&
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
                              : g === "tab_bar_background"
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
                                : g === "sale_logo"
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
          const Le = u.Fj[d.artworkType].width,
            Ue = u.Fj[d.artworkType].height;
          return (0, e.jsxs)("div", {
            id: d.id,
            className: c().ArtworkSelectorContainer,
            children: [
              !!d.title &&
                (0, e.jsxs)("div", {
                  className: c().Title,
                  onDoubleClick: Y,
                  children: [
                    d.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    _e,
                    Y &&
                      (0, e.jsx)(l.$n, {
                        onClick: Y,
                        children: (0, e.jsx)(U.he, {
                          toolTipContent: (0, n.we)(
                            d.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: d.bIsMinimized
                            ? (0, e.jsx)(D.hz4, {})
                            : (0, e.jsx)(D.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !d.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, s.A)(c().SelectImageBlock, c().Tips),
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
                            (0, u.qj)(Le),
                            (0, u.qj)(Ue),
                          ),
                        ],
                      }),
                    !!d.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: O.WarningStylesWithIcon,
                          children: d.strWarning,
                        }),
                      }),
                    d.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    d.elAdditionalControls,
                    !!d.fnRemoveAllArtwork &&
                      (0, e.jsx)(l.$n, {
                        onClick: (Ne) => {
                          var Be;
                          (0, y.pg)(
                            (0, e.jsx)(Oe, {
                              fnRemoveAllArtwork: d.fnRemoveAllArtwork,
                            }),
                            (Be = (0, K.uX)(Ne)) != null ? Be : window,
                          );
                        },
                        children: (0, n.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !d.bIsMinimized &&
                (0, e.jsx)(ye, {
                  clanSteamID: d.clanSteamID,
                  title: (C = d.title) != null ? C : "",
                  eventModel: Ee,
                  artworkType: d.artworkType,
                  realms: fe,
                  appid: L,
                  fnGetImageHashAndExt: de,
                  fnSetImageURL: me,
                  fnLangHasData: Pe,
                  partnerEventStore: ge,
                }),
            ],
          });
        }
        function Oe(d) {
          const { fnRemoveAllArtwork: P, closeModal: C } = d;
          return (0, e.jsx)(ne.o0, {
            strTitle: (0, n.we)("#Sale_RemoveAll"),
            strDescription: (0, n.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              P == null || P(), C == null || C();
            },
            onCancel: C,
          });
        }
        function ye(d) {
          const {
              artworkType: P,
              realms: C,
              clanSteamID: g,
              fnLangHasData: b,
              fnGetImageHashAndExt: L,
              fnSetImageURL: Y,
              eventModel: fe,
              appid: Ee,
              partnerEventStore: Pe,
            } = d,
            de = P === "localized_image_group",
            [me, ge] = x.useState((0, T.E)()),
            [ue, ce] = x.useState(new Array()),
            Me = x.useCallback(
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
            pe = x.useCallback(
              (_e, oe, Le) => {
                (0, S.h5)(() => {
                  var Ue;
                  (0, H.u)((Ue = L(P, oe)) != null ? Ue : "") ==
                    _e.image_hash && Y(P, null, oe),
                    Y(P, _e, Le),
                    Me(_e, Le, !1);
                });
              },
              [L, P, Y, Me],
            );
          return P === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(l.$n, {
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
                    realms: C,
                    fnLangHasData: b,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, s.A)(
                        c().SelectImageBlock,
                        c().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Ie, {
                        eventModel: fe,
                        clanSteamID: g,
                        fnOnLanguagePreviewChange: (_e) => {
                          _e != me && ge(_e);
                        },
                        langOverride: me,
                        fnOnArtworkLangChange: de ? null : pe,
                        artworkType: P,
                        fnOnRemoveImage: de ? null : (_e) => Y(P, null, _e),
                        realms: C,
                        fnLangHasData: b,
                        fnGetImageHashAndExt: L,
                        partnerEventStore: Pe,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Re = class extends x.Component {
          ShowLangChangeDialog(d, P) {
            const {
              fnOnArtworkLanguageChange: C,
              realms: g,
              fnLangHasData: b,
            } = this.props;
            (0, y.pg)(
              (0, e.jsx)(f.e, {
                clanImage: d,
                lang: P,
                fnOnArtworkLangChange: C,
                fnLangHasData: b,
                realms: g,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let d = new Array();
            const { list: P } = this.props;
            return (
              P.forEach((C) => {
                var g;
                const { clanImage: b, lang: L } = C;
                let Y = (0, n.we)("#Language_" + (0, I.LgB)(L));
                d.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: B().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping",
                            (g = b.file_name) != null ? g : "",
                            Y,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(b, L),
                          children: (0, n.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + C.clanImage.imageid + "_" + L,
                  ),
                );
              }),
              d
            );
          }
          render() {
            const { list: d } = this.props;
            if (!d || d.length == 0) return (0, e.jsx)("div", {});
            let P = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: c().UploadSuccess,
              children: P,
            });
          }
        };
        Te([J.oI], Re.prototype, "ShowLangChangeDialog", 1),
          (Re = Te([W.PA], Re));
      },
      22142: (z, Q, a) => {
        "use strict";
        a.d(Q, { h: () => n });
        var e = a(7850),
          I = a(32093),
          S = a(99412),
          w = a(71742),
          W = a(64868),
          x = a(65946),
          u = a(90626),
          T = a(44894);
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var l = a(29630),
          p = a(9046),
          c = a(53424),
          f = a(25359),
          O = a.n(f),
          $ = a(54327),
          B = a(2801),
          ne = a(36118),
          y = a(71421),
          D = a(18210),
          U = a(25792),
          s = a(19316),
          K = a(11243);
        function n(h) {
          const {
            clanSteamID: G,
            fnGetImageHash: j,
            fnLangHasData: F,
            fnOnRemoveImage: V,
          } = h;
          (0, c.mr)(G.GetAccountID());
          const R = u.useMemo(() => {
              let t = new Array();
              const r = D.A0.GetLanguageListForRealms([
                I.TU.k_ESteamRealmGlobal,
                I.TU.k_ESteamRealmChina,
              ]);
              for (const i of r) {
                const v = j(i);
                if (v) {
                  const E = (0, S.LgB)(i),
                    A = (0, D.we)("#Language_" + E);
                  t.push({ lang: i, strLang: E, locLang: A, imgHash: v });
                }
              }
              return (
                (t = t.sort((i, v) =>
                  i.locLang > v.locLang ? 1 : i.locLang < v.locLang ? -1 : 0,
                )),
                t
              );
            }, [j]),
            [q, X, o] = (0, W.uD)();
          return (0, e.jsxs)("div", {
            className: O().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: O().SelectImageTitle,
                children: (0, D.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: O().LanguageListContainer,
                children: R.map((t) =>
                  (0, e.jsx)(
                    J,
                    { langData: t, ...h },
                    "lang_select_" + G.GetAccountID() + " " + t.strLang,
                  ),
                ),
              }),
              !!V &&
                (0, e.jsxs)(s.$n, {
                  onClick: X,
                  children: [
                    (0, D.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(K.o, {
                      tooltip: (0, D.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(B.EN, {
                active: q,
                children: (0, e.jsx)(B.o0, {
                  strTitle: (0, D.we)("#Dialog_AreYouSure"),
                  strDescription: (0, D.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: o,
                  onOK: () => {
                    for (let t = 0; t < S.bP9; t++) F && V && F(t) && V(t);
                  },
                }),
              }),
            ],
          });
        }
        function J(h) {
          const {
              clanSteamID: G,
              langData: j,
              langOverride: F,
              fnOnLanguagePreviewChange: V,
              fnOnArtworkLangChange: R,
              fnOnRemoveImage: q,
            } = h,
            [X, o] = (0, x.q3)(() => {
              const t = c.pU.GetClanImageByImageHash(G, j.imgHash);
              let r = "";
              t &&
                (r = l.zU.GenerateURLFromHashAndExtAndLang(
                  G,
                  l.zU.GetHashAndExt(t),
                  p.wI.full,
                  j.lang,
                ));
              let i = O().LanguageSelectorSelected;
              return (
                F != j.lang &&
                  (i = j.imgHash
                    ? O().LanguageSelector
                    : O().LanguageSelectorNoData),
                [r, i]
              );
            });
          return (0, e.jsxs)("div", {
            id: j.strLang,
            className: O().LanguageContainer,
            onClick: (t) => {
              let r = (0, S.sfN)(t.currentTarget.id);
              V(r);
            },
            children: [
              (0, e.jsx)("div", { className: o, children: j.locLang }),
              (0, e.jsxs)("span", {
                className: O().LanguageOptions,
                children: [
                  !!X &&
                    (0, e.jsx)("a", {
                      href: X,
                      target: "_blank",
                      children: (0, e.jsx)(y.he, {
                        toolTipContent: (0, D.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: ne.YNO(),
                      }),
                    }),
                  !!R && (0, e.jsx)(m, { ...h }),
                  !!q && (0, e.jsx)(H, { fnOnRemoveImage: q, langData: j }),
                ],
              }),
            ],
          });
        }
        function m(h) {
          const {
              clanSteamID: G,
              langData: j,
              fnOnArtworkLangChange: F,
              fnGetImageHash: V,
              fnLangHasData: R,
              realms: q,
            } = h,
            [X, o, t] = (0, W.uD)(),
            r = (0, x.q3)(() => {
              const i = V(j.lang);
              return (
                (0, w.wT)(
                  !i || !i.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + i,
                ),
                c.pU.GetClanImageByImageHash(G, i)
              );
            });
          if (!r) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(y.he, {
                toolTipContent: (0, D.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": j.lang,
                  src: _,
                  onClick: () => o(),
                }),
              }),
              (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(B.EN, {
                  active: X,
                  children: (0, e.jsx)($.e, {
                    clanImage: r,
                    lang: j.lang,
                    fnOnArtworkLangChange: F,
                    fnLangHasData: R,
                    realms: q,
                    closeModal: t,
                  }),
                }),
              }),
            ],
          });
        }
        function H(h) {
          const { fnOnRemoveImage: G, langData: j } = h,
            [F, V, R] = (0, W.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(y.he, {
                toolTipContent: (0, D.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": j.lang,
                  src: T.A,
                  onClick: V,
                }),
              }),
              (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(B.EN, {
                  active: F,
                  children: (0, e.jsx)(B.o0, {
                    strTitle: (0, D.we)("#selectimage_remove_image"),
                    strDescription: (0, D.we)(
                      "#selectimage_remove_details",
                      (0, D.we)("#Language_" + (0, S.LgB)(j.lang)),
                    ),
                    onOK: () => {
                      G(j.lang);
                    },
                    closeModal: R,
                  }),
                }),
              }),
            ],
          });
        }
      },
      54327: (z, Q, a) => {
        "use strict";
        a.d(Q, { e: () => O });
        var e = a(7850),
          I = a(65946),
          S = a(90626),
          w = a(76559),
          W = a(24806),
          x = a(95695),
          u = a.n(x),
          T = a(2801),
          _ = a(36707),
          l = a(18210),
          p = a(25359),
          c = a.n(p),
          f = a(29630);
        function O($) {
          const {
              clanImage: B,
              closeModal: ne,
              lang: y,
              fnOnArtworkLangChange: D,
              realms: U,
              fnLangHasData: s,
            } = $,
            [K, n] = (0, S.useState)(y),
            J = w.b.InitFromClanID(B.clanAccountID),
            m = (0, I.q3)(() => {
              var H;
              return f.zU.GenerateURLFromHashAndExt(
                J,
                (H = f.zU.GetHashAndExt(B)) != null ? H : "",
              );
            });
          return (0, e.jsx)(T.o0, {
            strTitle: (0, l.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, l.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => (D == null ? void 0 : D(B, y, K)),
            onCancel: ne,
            closeModal: ne,
            children: (0, e.jsxs)("div", {
              className: (0, _.A)(u().FlexColumnContainer, c().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: c().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: c().ArtworkPreview,
                    src: m,
                  }),
                }),
                (0, e.jsx)(W.Ng, {
                  selectedLang: K,
                  fnLangHasData: s,
                  fnOnLanguageChanged: n,
                  realms: U,
                }),
              ],
            }),
          });
        }
      },
      38129: (z, Q, a) => {
        "use strict";
        a.d(Q, { p: () => J });
        var e = a(7850),
          I = a(90626),
          S = a(76559),
          w = a(41735),
          W = a.n(w),
          x = a(58632),
          u = a.n(x),
          T = a(88942),
          _ = a(72604),
          l = a(34592),
          p = a(3166),
          c = a(35038),
          f = a(75916),
          O = a(68312);
        const $ = "nicknames";
        function B(m) {
          const H = (0, O.KV)(),
            { data: h, isLoading: G } = (0, T.I)({
              queryKey: [$],
              queryFn: async () => {
                const j = new Map();
                if (p.iA.logged_in) {
                  const F = c.w.Init(f.w_T),
                    R = (await f.xtC.GetNicknameList(H, F)).Body().toObject();
                  R != null &&
                    R.nicknames &&
                    R.nicknames.length > 0 &&
                    R.nicknames.forEach((q) => {
                      q.accountid &&
                        q.nickname &&
                        j.set(q.accountid, q.nickname);
                    });
                }
                return j;
              },
            });
          return h ? h.get(m) : null;
        }
        async function ne(m) {
          var H, h, G, j;
          if (!m || m.length == 0) return [];
          const F =
            (0, p.yK)() == "community"
              ? p.TS.COMMUNITY_BASE_URL
              : p.TS.STORE_BASE_URL;
          if (m.length == 1) {
            const V = { accountid: m[0], origin: self.origin },
              R = await W().get(`${F}actions/ajaxgetavatarpersona`, {
                params: V,
              });
            if (
              !R ||
              R.status != 200 ||
              ((H = R.data) == null ? void 0 : H.success) != _.R ||
              !((h = R.data) != null && h.userinfo)
            )
              throw `Load single avatar/persona failed ${((0, l.H))(R).strErrorMsg}`;
            return [R.data.userinfo];
          } else {
            const V = { accountids: m.join(","), origin: self.origin },
              R = await W().get(`${F}actions/ajaxgetmultiavatarpersona`, {
                params: V,
              });
            if (
              !R ||
              R.status != 200 ||
              ((G = R.data) == null ? void 0 : G.success) != _.R ||
              !((j = R.data) != null && j.userinfos)
            )
              throw `Load single avatar/persona failed ${((0, l.H))(R).strErrorMsg}`;
            const q = new Map();
            return (
              R.data.userinfos.forEach((X) =>
                q.set(new S.b(X.steamid).GetAccountID(), X),
              ),
              m.map((X) => q.get(X))
            );
          }
        }
        const y = new (u())((m) => ne(m), { cache: !1 }),
          D = "avatarandpersonas";
        function U(m) {
          const { data: H, isLoading: h } = (0, T.I)({
            queryKey: [D, m],
            queryFn: () => y.load(m),
          });
          return [H, h];
        }
        function s(m) {
          const H = useQueryClient(),
            { data: h, isLoading: G } = useQuery({
              queryKey: [D, m],
              queryFn: async () => {
                const F = await y.loadMany(m);
                return (
                  F.forEach((V) => {
                    if (V instanceof Error) return;
                    const R = [D, new CSteamID(V.steamid).GetAccountID()];
                    H.setQueryData(R, V);
                  }),
                  F
                );
              },
              enabled: (m == null ? void 0 : m.length) > 0,
            }),
            j = useMemo(() => {
              const F = new Array();
              return (
                h == null ||
                  h.forEach((V) => {
                    V instanceof Error || F.push(V);
                  }),
                F
              );
            }, [h]);
          return G ? null : j;
        }
        function K(m) {
          return ReactQueryClient.getQueryData([D, m]);
        }
        var n = a(93355);
        function J(m) {
          const {
              accountID: H,
              bHideWhenNotAvailable: h,
              bHideName: G,
              bLink: j = !0,
            } = m,
            [F] = U(H),
            V = B(H),
            R = I.useMemo(() => S.b.InitFromAccountID(H), [H]),
            q = `${p.TS.COMMUNITY_BASE_URL}profiles/${R.ConvertTo64BitString()}`,
            X = j ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: F
              ? (0, e.jsxs)(X, {
                  href: j ? q : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: n.SmallAvatar,
                      src: F.avatar_url,
                      "data-miniprofile": "s" + R.ConvertTo64BitString(),
                    }),
                    !G &&
                      (0, e.jsx)("span", {
                        children: V
                          ? `${V} (${F.persona_name})`
                          : F.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !h && (0, e.jsx)("span", { children: H }),
                }),
          });
        }
      },
      85143: (z, Q, a) => {
        "use strict";
        a.d(Q, { Dd: () => u, Eb: () => T });
        var e = a(7850),
          I = a(26589),
          S = a(95695),
          w = a.n(S),
          W = a(36707);
        function x(_, l) {
          return _
            ? l
              ? !!_.valve_admin
              : !!(_.valve_admin || _.support_user)
            : !1;
        }
        function u(_, l) {
          const p = !!(_ && _.BIsClanAccount()),
            { data: c } = (0, I.hM)(p ? _.GetAccountID() : 0);
          return p && x(c, l);
        }
        function T(_) {
          const { clanSteamID: l, id: p } = _;
          return u(l, _.requireAdmin)
            ? (0, e.jsx)("div", {
                id: p,
                className: (0, W.A)(
                  _.className,
                  _.requireAdmin
                    ? S.ValveOnlyAdminBackground
                    : S.ValveOnlyBackground,
                ),
                children: _.children,
              })
            : null;
        }
      },
      22880: (z, Q, a) => {
        "use strict";
        a.d(Q, { g: () => u });
        var e = a(40323),
          I = a.n(e),
          S = Object.defineProperty,
          w = (T, _, l) =>
            _ in T
              ? S(T, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (T[_] = l),
          W = (T, _, l) => w(T, typeof _ != "symbol" ? _ + "" : _, l);
        const x = class we {
          static ParseCSVFile(_, l) {
            return new Promise((p, c) => {
              const O = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: p,
                error: ($) => c({ errors: [$] }),
                transformHeader: l,
              };
              I().parse(_, O);
            });
          }
          static ReadFile(_) {
            return new Promise((l, p) => {
              const c = new FileReader();
              (c.onload = (f) => l(c.result)), c.readAsText(_);
            });
          }
          static WriteFile(_, l) {
            let p = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(_, l);
            else {
              const c = window.URL.createObjectURL(_);
              p.href = c;
            }
            p.setAttribute("download", l), p.click();
            try {
              document.removeChild(p);
            } catch {}
          }
          static WriteCSVToFile(_, l, p, c) {
            const f = c
                ? I().unparse({ fields: c, data: _ }, { header: !0 })
                : I().unparse(_, { header: !0 }),
              O = p == !0 ? ["\uFEFF" + f] : [f];
            we.WriteFile(new Blob(O, { type: "text/csv:charset=utf-8;" }), l);
          }
          static WriteXMLToFile(_, l) {
            const p = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let c =
              "<" +
              p() +
              'xml version="1.0" encoding="UTF-8" ' +
              p() +
              `>
`;
            (c += new XMLSerializer().serializeToString(_)),
              we.WriteFile(
                new Blob([c], { type: "application/xml:charset=utf-8;" }),
                l,
              );
          }
        };
        W(x, "m_DummyValueForQuestionHack", 0);
        let u = x;
      },
      95603: (z, Q, a) => {
        "use strict";
        a.d(Q, { DB: () => u, PW: () => _, Ss: () => W, hk: () => x });
        var e = a(7850),
          I = a(90626),
          S = a(72739),
          w = a(82734);
        function W(l, p) {
          const c = I.useRef(void 0),
            f = I.useCallback(
              (B) => {
                B.currentTarget.files.length > 0 &&
                  (l(B.currentTarget.files), (B.currentTarget.value = ""));
              },
              [l],
            ),
            O = I.useCallback(() => c.current.click(), []);
          return [
            S.createPortal(
              (0, e.jsx)("form", {
                onSubmit: T,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...p,
                  type: "file",
                  ref: c,
                  onChange: f,
                }),
              }),
              window.document.body,
            ),
            O,
          ];
        }
        function x(l) {
          const [p, c] = I.useState(!1),
            f = I.useCallback((y) => {
              ((y.dataTransfer.files && y.dataTransfer.files[0]) ||
                (y.dataTransfer.types && y.dataTransfer.types[0] == "Files")) &&
                c(!0);
            }, []),
            O = I.useCallback((y) => {
              w.NO(y) && c(!1);
            }, []),
            $ = I.useCallback(() => c(!1), []),
            B = p ? T : void 0,
            ne = I.useCallback(
              (y) => {
                var D;
                (D = y.dataTransfer.files) != null &&
                  D.length &&
                  (l(y.dataTransfer.files, y),
                  y.preventDefault(),
                  y.stopPropagation()),
                  c(!1);
              },
              [l],
            );
          return [
            {
              onDragEnter: f,
              onDragLeave: O,
              onDragEnd: $,
              onDragOver: B,
              onDrop: ne,
            },
            p,
          ];
        }
        async function u(l, p = 1e3) {
          return await new Promise((c, f) => {
            const O = new Image();
            (O.src = l),
              (O.onload = () => c("success")),
              (O.onerror = () => c("error")),
              p > 0 && window.setTimeout(() => c("timeout"), p);
          });
        }
        function T(l) {
          l.preventDefault();
        }
        function _(l) {
          switch (l.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const p = l.name.match(/(?<=\.)[^.]+$/);
              return p ? p[0] : void 0;
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
      44894: (z, Q, a) => {
        "use strict";
        a.d(Q, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
