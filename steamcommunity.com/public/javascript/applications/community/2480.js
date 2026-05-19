/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2480],
  {
    5068: (e) => {
      e.exports = {
        CarouselEditContainer: "_3kKETJYqcMOvI7DoPg8NRp",
        CarouselList: "_29awDHhUWS3DKirluu8OGx",
        ListItem: "uUOCgnwAbXeUmKvdAccoH",
        DraggableItem: "XruR-YbySxPawieGNohW6",
        ImagePreview: "_3RALyudkR9YsufJ__hQRLZ",
        Spacer: "EAttw6yxMpx398nbBEbMz",
        Controls: "Ge-JWjIp9WDyaaxi6CvtR",
        Control: "vwJtDHPeg0gv0CI7yGChD",
        AddButton: "_36RM9HiLN49wfehWU79FHe",
        PlusIcon: "_3nwxvp5yLdVg3iJ1eAi63z",
      };
    },
    21134: (e) => {
      e.exports = {
        ClanImageContainer: "_1TEbObXeFqUF-IRZKx0Qg5",
        Selected: "_3VVyv-d-F-7paQgn90RTr0",
        "extra-asset-blink": "_3AFR3dAEjYGOiz7dgTms8Y",
        ClanImageModalContent: "SsgHukHcE1jf7p3W6Ta8g",
        ClanImageModalMode: "_1RAzAQViGO8A_wCFzSUStH",
        Active: "_1qsUls0lc9uJ_RarLA3dcG",
        ClanImageGridForm: "_3uCm4z1gjW0tmhRd228Xqh",
        ClanImageGridContainer: "_3Q5TF6lMOT30JuoipVGd5C",
      };
    },
    1397: (e) => {
      e.exports = {
        Column: "_3l7NrcIIw_fedlHdVwJMVE",
        controls: "_3PGiW8qQcZDfnK9rOz7sjY",
        EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
        AddNew: "JBYdBhACB7UzXP4l_tpF2",
        DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
        ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
        EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
      };
    },
    28516: (e) => {
      e.exports = {
        EditorCtn: "_2h37cwEb2SfJphgpbu-dPv",
        controls: "kI20RMKnHD3qdQhl-Hr4K",
      };
    },
    63287: (e) => {
      e.exports = {
        DialogCtn: "_9JDWJYvoHTETKmebCO7iE",
        PollArea: "_1h-JdwvtVK38j8M4EXeUah",
        OptionInset: "_5o_Ifm1O6jf-4Iq4Kv07F",
        AdminOptions: "_1Kt8VfgLBvg0tD86og8ps7",
      };
    },
    6941: (e) => {
      e.exports = {
        EditableComponentToolbarContainer: "o3hf9xdErkO0g06PW47cS",
        EditableComponentToolbar: "_2Lz0NGsqaU7fnOxrrftZMG",
        EditableComponentInlineContainer: "_32qkMjC0nQ9LGh6fNXlNkM",
        InlineHoverContainer: "_1TX0Q6DERjhYWEDcU-0QLC",
        Hidden: "_3rZ3G-s7kNdbfzeAOTIYOr",
        WidthConstrained: "_1eKpwF-reh8vmJh6uM9dho",
        FloatingToolbarButton: "KsGqILWyUj2YuFJK_Zy7D",
        StrongShadows: "_3_c8HvckcvJ0FHwgeS1GtO",
      };
    },
    16134: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => Uo });
      var s = o(7850),
        n = o(90286),
        l = o(26555),
        i = o(22145),
        a = o(69956),
        r = o(28106),
        d = o(81393),
        c = o(37085),
        u = o(34214),
        m = o(64238),
        p = o.n(m),
        _ = o(90626),
        h = o(81047),
        x = o(28954),
        v = o(27666),
        f = o(86355),
        g = o(68255),
        j = o(2805),
        b = o(36509),
        C = o(28015),
        E = o(71696),
        w = o(61859),
        I = o(27650),
        M = o(73745),
        k = o(30470),
        S = o(21134),
        D = o(5058),
        y = o(6941),
        T = o(30175),
        N = o(4869),
        P = o(86927);
      function U(e) {
        const { className: t, ...o } = e;
        return (0, s.jsx)("div", {
          className: p()(t, y.EditableComponentToolbarContainer),
          ...o,
        });
      }
      function G(e) {
        const {
            toolbar: t,
            top: o,
            left: n,
            width: l,
            height: i,
            visible: a,
          } = e,
          r = {
            left: `${n}px`,
            top: `${o}px`,
            width: `${l}px`,
            position: "absolute",
          },
          d = l < 120;
        return (
          (i < 80 || d) && ((r.top = o - 32 - 16 + "px"), (r.height = "48px")),
          (0, s.jsx)("div", {
            style: r,
            className: p()(
              y.InlineHoverContainer,
              d && y.WidthConstrained,
              !a && y.Hidden,
            ),
            children: t,
          })
        );
      }
      function A(e) {
        const { className: t, toolbar: o, children: n } = e,
          [l, i] = (0, P.OP)(),
          [a, r] = _.useState({ top: 0, left: 0, width: 0, height: 0 }),
          d = (0, _.useRef)(void 0);
        return (
          (0, _.useLayoutEffect)(() => {
            if (l) {
              const e = d.current;
              r({
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight,
              });
            }
          }, [l]),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("span", {
              ref: d,
              className: p()(t, y.EditableComponentInlineContainer),
              ...i,
              children: [
                (0, s.jsx)(G, { ...a, toolbar: o, visible: l && a.width > 0 }),
                n,
              ],
            }),
          })
        );
      }
      function O(e) {
        const {
          onEditClick: t,
          strEditDescription: o = (0, w.we)("#Button_Edit"),
          onDeleteClick: n,
          strDeleteDescription: l = (0, w.we)("#Button_Remove"),
          bStrongShadows: i = !1,
          children: a,
        } = e;
        return (0, s.jsxs)(B, {
          bStrongShadows: i,
          children: [
            a,
            t &&
              (0, s.jsx)(V, {
                onClick: t,
                description: o,
                children: (0, s.jsx)(N.ffu, {}),
              }),
            n &&
              (0, s.jsx)(V, {
                onClick: n,
                description: l,
                children: (0, s.jsx)(N.sED, {}),
              }),
          ],
        });
      }
      function B(e) {
        const { bStrongShadows: t, children: o } = e;
        return (0, s.jsx)("span", {
          className: p()(y.EditableComponentToolbar, t && y.StrongShadows),
          children: o,
        });
      }
      function V(e) {
        const { onClick: t, description: o, children: n } = e;
        return (0, s.jsx)(T.ff, {
          onClick: t,
          tooltip: o,
          className: y.FloatingToolbarButton,
          children: n,
        });
      }
      var z = o(12155),
        R = o(88997),
        L = o(60155),
        F = o(5068),
        Y = o(64753),
        H = o(9154),
        K = o(62490),
        q = o(84811),
        Q = o(32728);
      function $(e, t) {
        const o = ce(t);
        if (o) return { node: t, nodeAttrs: o, clanImage: pe(e, o) };
      }
      function W(e) {
        const {
            node: t,
            imageNodeType: o,
            videoNodeType: n,
            editModel: l,
            schemaConfig: i,
            removeNode: r,
            update: d,
            focusView: c,
          } = e,
          [u, m, p] = (0, Y.uD)(),
          h =
            (_.useCallback(() => {
              p(), c();
            }, [p, c]),
            l.GetClanSteamID()),
          x = _.useMemo(() => {
            let e = [];
            return (
              t.descendants((t) => {
                (t.type != o && t.type != n) || e.push(t);
              }),
              e
            );
          }, [o, n, t]),
          v = _.useCallback((e) => d((0, a.M)(e)), [d]),
          f = "true" === t.attrs.autoadvance,
          [g, j] = J(v, {
            autoAdvance: f,
            clanSteamID: h,
            imageNodeType: o,
            videoNodeType: n,
            carouselNodeType: t.type,
          }),
          b = _.useCallback(() => {
            g(x);
          }, [g, x]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            j,
            (0, s.jsxs)(U, {
              children: [
                (0, s.jsx)(O, {
                  onDeleteClick: r,
                  strDeleteDescription: (0, w.we)(
                    "#EventEditor_CarouselEditor_RemoveCarousel",
                  ),
                  onEditClick: b,
                  strEditDescription: (0, w.we)(
                    "#EventEditor_CarouselEditor_EditCarousel",
                  ),
                }),
                (0, s.jsx)(q.tH, {
                  children: (0, s.jsx)(D.Bm, {
                    strTag: "carousel",
                    args: {},
                    rawargs: "",
                    event: l.GetEventModel(),
                    children: x.map((e, t) =>
                      (0, s.jsx)(
                        me,
                        {
                          node: e,
                          nodeAttrs: ce(e),
                          schemaConfig: i,
                          event: l.GetEventModel(),
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function J(e, t) {
        const o = t.carouselNodeType,
          [n, l] = _.useState(void 0),
          i = t.clanSteamID,
          a = _.useCallback(
            (e) => {
              l(e.map((e) => $(i, e)).filter(Boolean));
            },
            [i],
          ),
          r = _.useCallback(() => l(void 0), []),
          d = _.useCallback(
            (t, s) => {
              const n = o.create(
                { autoadvance: t ? "true" : null },
                s.map(({ node: e }) => e),
              );
              e(n);
            },
            [o, e],
          );
        return [
          a,
          (0, s.jsx)(H.EN, {
            active: void 0 !== n,
            children: (0, s.jsx)(Z, {
              ...t,
              images: n,
              onCarouselImagesSelected: d,
              hideModal: r,
            }),
          }),
        ];
      }
      function X(e) {
        const { nodeAttrs: t } = e;
        return "image" == t.type ? t.attrs.src : t.attrs.mp4 || t.attrs.webm;
      }
      function Z(e) {
        var t;
        const {
            hideModal: o,
            images: n,
            onCarouselImagesSelected: l,
            clanSteamID: i,
            imageNodeType: a,
            videoNodeType: r,
          } = e,
          [d, c] = _.useState(n),
          [u, m] = _.useState(
            null !== (t = e.autoAdvance) && void 0 !== t && t,
          ),
          p = _.useCallback(
            (e, t) => {
              const o = $(i, t.create(e));
              if (!o)
                throw `Couldn't parse image ${t.name} - ${JSON.stringify(e)}`;
              c((e) => {
                const t = X(o);
                return e.find((e) => X(e) == t) ? e : [...e, o];
              });
            },
            [i],
          ),
          h = _.useCallback(() => {
            l(u, d), o();
          }, [l, o, u, d]),
          x = _.useCallback((e) => {
            e.destination &&
              c((t) => K.yY(t.slice(), e.source.index, e.destination.index));
          }, []),
          { showInsertImageModal: v, imageModal: f } = _e({
            clanSteamID: i,
            imageNodeType: a,
            videoNodeType: r,
            onItemSelected: p,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            f,
            (0, s.jsxs)(H.mt, {
              active: !0,
              onDismiss: o,
              children: [
                (0, s.jsx)(g.Y9, {
                  children: (0, w.we)(
                    "#EventEditor_CarouselEditor_EditCarousel",
                  ),
                }),
                (0, s.jsxs)(g.nB, {
                  children: [
                    (0, s.jsx)(g.RF, {
                      label: (0, w.we)(
                        "#EventEditor_CarouselEditor_AutoAdvance",
                      ),
                      checked: u,
                      onChange: m,
                    }),
                    (0, s.jsx)(Q.JY, {
                      onDragEnd: x,
                      children: (0, s.jsx)(Q.gL, {
                        droppableId: "droppable",
                        direction: "horizontal",
                        children: (e) =>
                          (0, s.jsxs)("div", {
                            className: F.CarouselList,
                            ...e.droppableProps,
                            ref: e.innerRef,
                            children: [
                              d.map((e, t) =>
                                (0, s.jsx)(
                                  q.tH,
                                  {
                                    children: (0, s.jsx)(Q.sx, {
                                      draggableId: X(e),
                                      index: t,
                                      children: (o, n, l) =>
                                        (0, s.jsx)(ee, {
                                          draggableProvided: o,
                                          image: e,
                                          setSelectedImages: c,
                                          iImage: t,
                                          cImages: d.length,
                                        }),
                                    }),
                                  },
                                  X(e),
                                ),
                              ),
                              e.placeholder,
                            ],
                          }),
                      }),
                    }),
                    (0, s.jsx)(g.xh, {
                      bottomSeparator: "none",
                      label: (0, w.we)(
                        "#EventEditor_CarouselEditor_AddAnotherItem",
                      ),
                      className: F.AddButton,
                      onClick: v,
                      children: (0, s.jsx)(N.OMN, { className: F.PlusIcon }),
                    }),
                  ],
                }),
                (0, s.jsx)(g.wi, {
                  children: (0, s.jsx)(g.CB, { onCancel: o, onOK: h }),
                }),
              ],
            }),
          ],
        });
      }
      function ee(e) {
        const {
            draggableProvided: t,
            image: o,
            setSelectedImages: n,
            iImage: l,
            cImages: i,
          } = e,
          a = _.useCallback(() => {
            n((e) => e.filter((e) => e != o));
          }, [o, n]);
        return (0, s.jsx)("div", {
          className: p()(F.ListItem, F.DraggableItem),
          ref: t.innerRef,
          ...t.draggableProps,
          ...t.dragHandleProps,
          children: (0, s.jsxs)("div", {
            className: F.ImagePreview,
            children: [
              (0, s.jsx)("img", {
                src: v.z.ReplacementTokenToClanImageURL(o.node.attrs.src),
              }),
              (0, s.jsx)("div", {
                className: F.Controls,
                children: (0, s.jsx)("div", {
                  className: F.Control,
                  children: (0, s.jsx)(T.ff, {
                    onClick: a,
                    className: F.Button,
                    children: (0, s.jsx)(N.sED, {}),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var te = o(8527),
        oe = o(25888),
        se = o(36782),
        ne = o(12611);
      var le = o(95695),
        ie = o.n(le);
      function ae(e) {
        const {
            schemaConfig: t,
            node: o,
            editModel: n,
            imageNodeType: l,
            videoNodeType: i,
            carouselNodeType: r,
            clanSteamID: d,
            setAttrs: c,
            focusView: u,
            removeNode: m,
            update: h,
            selected: x,
          } = e,
          [v, f, g] = (0, M.uD)(),
          j = ce(o);
        let b = (0, s.jsx)(me, {
          schemaConfig: t,
          event: n.GetEventModel(),
          node: o,
          nodeAttrs: j,
        });
        const C = _.useCallback(() => {
            u(), g();
          }, [u, g]),
          E = _.useCallback((e) => h((0, a.M)(e)), [h]),
          [w, I] = J(E, {
            clanSteamID: d,
            imageNodeType: l,
            videoNodeType: i,
            carouselNodeType: r,
          }),
          k = _.useCallback(() => {
            w([o]);
          }, [o, w]),
          { showLocalizationModal: D, localizationModal: y } = (function (
            e,
            t,
            o,
          ) {
            const [n, l] = _.useState(void 0),
              i = _.useCallback(() => l(void 0), []);
            return {
              showLocalizationModal: _.useCallback(
                (s) => {
                  const n = s.map((e) => ce(e)).filter(Boolean);
                  if (1 === n.length) {
                    let s = n[0];
                    if ("src" in s.attrs && s.attrs.src.includes(ne.lw)) {
                      const t = s.attrs.src.replace(ne.lw, ne.eg);
                      e(o.create({ src: t }));
                    }
                    l(pe(t.GetClanSteamID(), s));
                  }
                },
                [t, o, e],
              ),
              localizationModal: (0, s.jsx)(H.EN, {
                active: void 0 !== n,
                children: (0, s.jsx)(se.$, {
                  closeModal: i,
                  primaryLocalizedImage: n,
                  appid: t.GetAppID(),
                  clanSteamID: t.GetClanSteamID(),
                  fnSetImageURL: t.SetImageURL,
                  fnLangHasData: t.BHasTitleImage,
                  fnGetImageHash: t.GetImageHashAndExt,
                  rgRealmList: t.GetIncludedRealmList(),
                  partnerEventStore: oe.mh,
                }),
              }),
            };
          })(E, n, l),
          T = _.useCallback(() => {
            D([o]);
          }, [o, D]),
          N = {
            createCarousel: r ? k : void 0,
            src: ue(j),
            localizeAssets: te.iA.is_support ? T : void 0,
          };
        let P = p()(S.ClanImageContainer, x && S.Selected);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            v &&
              (0, s.jsx)(he, {
                bIsEdit: !0,
                nodeAttrs: j,
                hideModal: C,
                imageNodeType: l,
                videoNodeType: i,
                clanSteamID: d,
                onItemSelected: c,
              }),
            I,
            y,
            (0, s.jsx)(A, {
              className: P,
              toolbar: (0, s.jsx)(re, {
                showModal: f,
                removeNode: m,
                contextMenuProps: N,
              }),
              children: b,
            }),
          ],
        });
      }
      function re(e) {
        const { showModal: t, removeNode: o, contextMenuProps: n } = e,
          l = _.useCallback(
            (e) => {
              (0, R.lX)((0, s.jsx)(de, { ...n }), e, {
                bPreferPopTop: !1,
                bPreferPopLeft: !0,
              });
            },
            [n],
          );
        return (0, s.jsx)(O, {
          onEditClick: t,
          onDeleteClick: o,
          children: (0, s.jsx)(V, {
            onClick: l,
            description: (0, w.we)("#ActionButtonLabelContextMenu"),
            children: (0, s.jsx)(z.h28, {}),
          }),
        });
      }
      function de(e) {
        const { createCarousel: t, src: o, localizeAssets: n } = e,
          l = _.useCallback(() => {
            window.open(o);
          }, [o]);
        return (0, s.jsxs)(L.tz, {
          children: [
            t &&
              (0, s.jsx)(L.kt, {
                onSelected: t,
                children: (0, w.we)(
                  "#EventEditor_CarouselEditor_CreateACarousel",
                ),
              }),
            n &&
              (0, s.jsxs)(L.kt, {
                onSelected: n,
                className: ie().ValveOnlyBackground,
                children: ["(VO) + ", (0, w.we)("#ImagePicker_Localized")],
              }),
            (0, s.jsx)(L.kt, {
              onSelected: l,
              children: (0, w.we)("#EventEditor_ImageEdit_PreviewImage"),
            }),
          ],
        });
      }
      function ce(e) {
        const { type: t, attrs: o } = e;
        return "image" == t.name
          ? { type: "image", attrs: o }
          : "video" == t.name
            ? { type: "video", attrs: o }
            : void 0;
      }
      function ue(e) {
        return "image" == e.type
          ? e.attrs.src
          : "video" == e.type
            ? e.attrs.mp4 || e.attrs.webm
            : void 0;
      }
      function me(e) {
        const { schemaConfig: t, event: o, node: n, nodeAttrs: l } = e,
          { type: i, attrs: a } = l,
          r = t.ConvertAttrToBBCodeArgs(n, a);
        return "image" == i
          ? (0, s.jsx)(D.Bm, {
              strTag: "img",
              args: r,
              rawargs: "",
              event: o,
              showErrorInfo: !0,
            })
          : "video" == i
            ? (0, s.jsx)(
                D.Bm,
                {
                  strTag: "video",
                  args: r,
                  rawargs: "",
                  event: o,
                  showErrorInfo: !0,
                },
                `${a.mp4}_${a.webm}`,
              )
            : ((0, d.z_)(i, "unhandled type: " + i), null);
      }
      function pe(e, t) {
        const { type: o, attrs: s } = t;
        let n;
        if (
          ("image" == o ? (n = s.src) : "video" == o && (n = s.mp4 || s.webm),
          n)
        ) {
          const [t] = v.z.ExtractHashFromBBCodeURL(n);
          return t && f.pU.GetClanImageByImageHash(e, t);
        }
      }
      function _e(e) {
        const {
            clanSteamID: t,
            imageNodeType: o,
            videoNodeType: n,
            onItemSelected: l,
            onHideModal: i,
          } = e,
          [a, r] = _.useState(),
          d = _.useCallback(() => {
            r(void 0), i && i();
          }, [i]);
        return {
          showInsertImageModal: _.useCallback(() => {
            r({ type: "image", attrs: { src: "" } });
          }, []),
          showInsertVideoModal: _.useCallback(() => {
            r({
              type: "video",
              attrs: {
                mp4: "",
                webm: "",
                poster: "",
                autoplay: !0,
                controls: !1,
              },
            });
          }, []),
          closeImageModal: d,
          imageModal:
            a &&
            (0, s.jsx)(he, {
              nodeAttrs: a,
              hideModal: d,
              onItemSelected: l,
              imageNodeType: o,
              videoNodeType: n,
              clanSteamID: t,
            }),
          activeModal: null == a ? void 0 : a.type,
        };
      }
      function he(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: o,
            hideModal: n,
            clanSteamID: l,
            onItemSelected: i,
            imageNodeType: a,
            videoNodeType: r,
          } = e,
          { type: c, attrs: u } = o,
          m = (function (e, t) {
            return _.useMemo(() => pe(e, t), [e, t.type, t.attrs]);
          })(l, o),
          [h, x] = _.useState(() =>
            m ||
            ("image" == o.type && !o.attrs.src) ||
            ("video" == o.type && !o.attrs.mp4 && !o.attrs.webm)
              ? "uploaded"
              : "hotlink",
          ),
          v = _.useCallback(
            (e) => {
              i({ src: e }, a), n();
            },
            [i, n, a],
          ),
          f = _.useCallback(
            (e) => {
              i({ ...u, ...e }, r), n();
            },
            [u, i, n, r],
          ),
          j = _.useId();
        let b,
          E = null;
        if ("image" == c)
          (E = (0, s.jsx)(xe, {
            active: "hotlink" == h,
            bIsEdit: t,
            hideModal: n,
            onImageSelected: v,
            src: u.src,
          })),
            (b = t
              ? (0, w.we)("#EventEditor_ReplaceImage_Title")
              : (0, w.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, d.z_)(c, "Unhandled type"), null;
          (E = (0, s.jsx)(ve, {
            active: "hotlink" == h,
            bIsEdit: t,
            hideModal: n,
            attrs: u,
            setAttrs: i,
          })),
            (b = (0, w.we)("#EventEditor_EditVideo_Title"));
        }
        return (0, s.jsxs)(C.mt, {
          active: !0,
          onDismiss: n,
          className: S.ClanImageModalContent,
          children: [
            (0, s.jsx)(g.Y9, { id: j, children: b }),
            (0, s.jsxs)(g.zW, {
              labelId: j,
              value: h,
              onChange: (e) => x(e),
              children: [
                (0, s.jsx)(g.a, { value: "uploaded", children: "Uploaded" }),
                (0, s.jsx)(g.a, { value: "hotlink", children: "Enter URL" }),
              ],
            }),
            (0, s.jsx)("div", {
              className: p()(S.ClanImageModalMode, "uploaded" == h && S.Active),
              children: (0, s.jsx)(fe, {
                bIsEdit: t,
                hideModal: n,
                onImageSelected: v,
                onVideoSelected: r && f,
                clanSteamID: l,
                selectedImage: m,
              }),
            }),
            (0, s.jsx)("div", {
              className: p()(S.ClanImageModalMode, "hotlink" == h && S.Active),
              children: E,
            }),
          ],
        });
      }
      function xe(e) {
        const {
            active: t,
            bIsEdit: o,
            hideModal: n,
            onImageSelected: l,
            src: i,
          } = e,
          [a, r] = _.useState(i),
          d = _.useCallback((e) => r(e.currentTarget.value), []),
          c = o
            ? (0, w.we)("#EventEditor_ReplaceImage_Title")
            : (0, w.we)("#EventEditor_InsertImage_Title"),
          u = _.useRef(void 0);
        return (
          _.useEffect(() => {
            t && u.current.Focus();
          }, [t]),
          (0, s.jsxs)(g.lV, {
            onSubmit: () => l(a),
            children: [
              (0, s.jsx)(g.nB, {
                children: (0, s.jsx)(g.pd, {
                  ref: u,
                  value: a,
                  onChange: d,
                  label: (0, w.we)("#EventEditor_InsertImage_URL"),
                }),
              }),
              (0, s.jsx)(g.CB, {
                onCancel: n,
                strOKText: c,
                bOKDisabled: !a || a == i,
              }),
            ],
          })
        );
      }
      function ve(e) {
        const {
            active: t,
            bIsEdit: o,
            hideModal: n,
            attrs: l,
            setAttrs: i,
          } = e,
          [a, r] = _.useState(l.mp4),
          [d, c] = _.useState(l.webm),
          [u, m] = _.useState(l.poster),
          [p, h] = _.useState(!!l.autoplay),
          [x, v] = _.useState(!!l.controls),
          f = _.useRef(void 0);
        _.useEffect(() => {
          t && f.current.Focus();
        }, [t]);
        return (0, s.jsxs)(g.lV, {
          onSubmit: (e) => {
            i({
              ...l,
              mp4: a || void 0,
              webm: d || void 0,
              poster: u || void 0,
              autoplay: p,
              controls: x,
            }),
              n();
          },
          children: [
            (0, s.jsxs)(g.nB, {
              children: [
                (0, s.jsx)(g.pd, {
                  ref: f,
                  value: a,
                  onChange: (e) => r(e.currentTarget.value),
                  label: (0, w.we)("#EventEditor_InsertVideo_InputMP4"),
                }),
                (0, s.jsx)(g.pd, {
                  value: d,
                  onChange: (e) => c(e.currentTarget.value),
                  label: (0, w.we)("#EventEditor_InsertVideo_InputWebM"),
                }),
                (0, s.jsx)(g.pd, {
                  value: u,
                  onChange: (e) => m(e.currentTarget.value),
                  label: (0, w.we)("#EventEditor_InsertVideo_InputPoster"),
                }),
                (0, s.jsx)(g.Yh, {
                  checked: p,
                  onChange: h,
                  label: (0, w.we)("#EventEditor_InsertVideo_InputAutoplay"),
                }),
                (0, s.jsx)(g.Yh, {
                  checked: x,
                  onChange: v,
                  label: (0, w.we)(
                    "#EventEditor_InsertVideo_InputShowControls",
                  ),
                }),
              ],
            }),
            (0, s.jsx)(g.CB, {
              onCancel: n,
              strOKText: (0, w.we)("#EventEditor_EditVideo_Title"),
              bOKDisabled: !a && !d,
            }),
          ],
        });
      }
      function fe(e) {
        const {
            bIsEdit: t,
            hideModal: o,
            onImageSelected: n,
            onVideoSelected: l,
            clanSteamID: i,
          } = e,
          [a, r] = _.useState(""),
          [d, c] = _.useState(e.selectedImage),
          m = t
            ? (0, w.we)("#EventEditor_ReplaceImage_Title")
            : (0, w.we)("#EventEditor_InsertImage_Title"),
          p = _.useCallback(
            (e) => {
              switch (e.file_type) {
                case u.bg.nn:
                  l && l({ mp4: (0, h.fw)(e) });
                  break;
                case u.bg.pJ:
                  l && l({ webm: (0, h.fw)(e) });
                  break;
                default:
                  n((0, h.fw)(e));
              }
            },
            [n, l],
          ),
          x = _.useCallback(
            (e, t) => {
              c(e), t && p(e);
            },
            [p],
          );
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(g.lV, {
            onSubmit: () => d && p(d),
            className: S.ClanImageGridForm,
            children: [
              (0, s.jsx)(b.g, { fnSetImageSearch: r }),
              (0, s.jsx)("div", {
                className: S.ClanImageGridContainer,
                children: (0, s.jsx)(j.ge, {
                  clanAccountID: i.GetAccountID(),
                  fileNameSearch: a,
                  onImageSelected: x,
                  selectedItem: d,
                }),
              }),
              (0, s.jsx)(g.wi, {
                children: (0, s.jsx)(g.CB, {
                  onCancel: o,
                  strOKText: m,
                  bOKDisabled: !d || d == e.selectedImage,
                }),
              }),
            ],
          }),
        });
      }
      function ge(e) {
        const { editModel: t, imageNode: o, videoNode: n, children: l } = e,
          i = _.useCallback(
            async (e) => {
              const s = t.GetClanSteamID(),
                l = new x.VE(s, null);
              if (!(await l.AddImage(e, t.GetCurEditLanguage())))
                throw "Error processing image upload";
              const i = await l.UploadAllImages();
              if (!i || 1 != Object.values(i).length)
                throw "Error uploading image";
              const a = Object.values(i)[0];
              if (!a.bSuccess || a.uploadResult.success != c.R)
                throw a.uploadResult.message;
              const r = je(
                f.pU.GetClanImageByImageHash(s, a.uploadResult.image_hash),
                o,
                n,
              );
              return (
                r.type == o &&
                  (await (0, I.DB)(
                    v.z.ReplacementTokenToClanImageURL(r.attrs.src),
                  )),
                r
              );
            },
            [t, o, n],
          );
        return o
          ? (0, s.jsx)(E.Xv, {
              ProcessFileUpload: i,
              bAllowImageHotLinking: !0,
              children: l,
            })
          : l;
      }
      function je(e, t, o) {
        const s = (0, h.fw)(e);
        switch (e.file_type) {
          case u.bg.nn:
            if (!o) throw "Video unsupported";
            return o.create({ mp4: s });
          case u.bg.pJ:
            if (!o) throw "Video unsupported";
            return o.create({ webm: s });
          default:
            return t.create({ src: s });
        }
      }
      var be = o(96640),
        Ce = o(79216);
      var Ee = o(70995),
        we = o(74410),
        Ie = o(72421),
        Me = o(52038),
        ke = o(63226);
      function Se(e) {
        const {
            videoID: t,
            align: o,
            editModel: n,
            selected: l,
            setAttrs: i,
            focusView: a,
          } = e,
          [r, d, c] = (0, M.uD)(),
          u = _.useCallback(() => {
            c(), a();
          }, [c, a]),
          m = _.useCallback(
            (e, t) => {
              i({ videoID: e, align: t }), u();
            },
            [i, u],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            r &&
              (0, s.jsx)(De, {
                videoID: t,
                align: o,
                bEditing: !0,
                hideModal: u,
                onSave: m,
              }),
            (0, s.jsxs)(U, {
              className: (0, Me.A)(ke.PreviewYoutubeEditor, l && ke.Selected),
              children: [
                (0, s.jsx)(O, {
                  onEditClick: d,
                  onDeleteClick: e.removeNode,
                  bStrongShadows: !0,
                }),
                l && (0, s.jsx)("div", { className: ke.SelectionOverlay }),
                (0, s.jsx)(D.Bm, {
                  event: n.GetEventModel(),
                  strTag: "previewyoutube",
                  args: { "": `${t};${o}` },
                  rawargs: `${t};${o}`,
                  showErrorInfo: !0,
                }),
              ],
            }),
          ],
        });
      }
      function De(e) {
        const {
            videoID: t = "",
            align: o = "",
            bEditing: n = !1,
            hideModal: l,
            onSave: i,
          } = e,
          [a, r] = _.useState(o || we.V2.full),
          [d, c] = _.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, m] = _.useState(void 0),
          p = _.useCallback(() => {
            const { strVideoID: e } = (0, Ee.XU)(d);
            return (
              e ? i(e, a) : m((0, w.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [d, a, i]),
          h = _.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return (0, s.jsx)(H.EN, {
          active: !0,
          children: (0, s.jsxs)(Ie._, {
            strTitle: (0, w.we)("#EventEditor_InsertYouTube"),
            closeModal: l,
            strOKText: n
              ? (0, w.we)("#Button_Save")
              : (0, w.we)("#EventEditor_InsertYouTube"),
            onOK: p,
            children: [
              u && (0, s.jsx)("div", { className: ke.Error, children: u }),
              (0, s.jsx)(g.pd, {
                label: (0, w.we)("#EventEditor_InsertYouTube_URL"),
                placeholder: (0, w.we)("#EventEditor_InsertYouTube_Placholder"),
                value: d,
                ref: h,
                onChange: (e) => c(e.currentTarget.value),
              }),
              (0, s.jsxs)(g.o1, {
                label: (0, w.we)("#EventEditor_InsertYouTube_Position"),
                children: [
                  (0, s.jsx)(g.Od, {
                    checked: a == we.V2.left,
                    onChange: (e) => e && r(we.V2.left),
                    label: (0, w.we)("#EventEditor_InsertYouTube_Left"),
                  }),
                  (0, s.jsx)(g.Od, {
                    checked: a == we.V2.right,
                    onChange: (e) => e && r(we.V2.right),
                    label: (0, w.we)("#EventEditor_InsertYouTube_Right"),
                  }),
                  (0, s.jsx)(g.Od, {
                    checked: a == we.V2.full,
                    onChange: (e) => e && r(we.V2.full),
                    label: (0, w.we)("#EventEditor_InsertYouTube_Full"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ye = o(69001),
        Te = o(65946),
        Ne = o(26161),
        Pe = o(32897),
        Ue = o(78395),
        Ge = o(21869),
        Ae = o(1397),
        Oe = o.n(Ae),
        Be = o(22837),
        Ve = o(63556),
        ze = o(44165),
        Re = o(99637),
        Le = o(91675),
        Fe = o(14771),
        Ye = o(87937),
        He = o(61819),
        Ke = o(88942),
        qe = o(78327),
        Qe = o(41735),
        $e = o.n(Qe),
        We = o(26408);
      function Je(e) {
        const { hideModal: t, fnUpdateSession: o } = e,
          [n, l] = (0, _.useState)(() => lt(!0, null)),
          [i, a] = (0, _.useState)(() => it(!0, null)),
          [r] = (0, Te.q3)(() => [i.location_type]);
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)("#MeetSteam_create_title"),
            onOK: () => o(n, i),
            closeModal: () => {
              a(it(!0, null)), l(lt(!0, null)), t();
            },
            bOKDisabled: null == !r,
            children: (0, s.jsxs)("div", {
              className: Oe().DialogCtn,
              children: [
                (0, s.jsx)(et, { group: n, fnSetGroup: l }),
                (0, s.jsx)(ot, { session: i, fnSetSession: a }),
              ],
            }),
          }),
        });
      }
      function Xe(e) {
        const { hideModal: t, groupInput: o, fnUpdateGroupSession: n } = e,
          [l, i] = (0, _.useState)(() => lt(!1, o));
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)("#MeetSteam_edit_title"),
            onOK: () => {
              n(l), t();
            },
            onCancel: () => {
              i(lt(!1, o)), t();
            },
            children: (0, s.jsx)("div", {
              className: Oe().DialogCtn,
              children: (0, s.jsx)(et, { group: l, fnSetGroup: i }),
            }),
          }),
        });
      }
      function Ze(e) {
        const {
            bCreate: t,
            hideModal: o,
            sessionInput: n,
            fnUpdateSession: l,
          } = e,
          [i, a] = (0, _.useState)(() => it(t, n)),
          [r] = (0, Te.q3)(() => [i.location_type]);
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)(
              t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
            ),
            onOK: () => {
              l(i), o();
            },
            onCancel: () => {
              a(it(t, n)), o();
            },
            bOKDisabled: !r,
            children: (0, s.jsx)("div", {
              className: Oe().DialogCtn,
              children: (0, s.jsx)(ot, { session: i, fnSetSession: a }),
            }),
          }),
        });
      }
      function et(e) {
        const { group: t, fnSetGroup: o } = e,
          n = (0, Ve.E)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.pd, {
              type: "text",
              label: (0, w.we)("#MeetSteam_edit_session_name"),
              value: w.NT.Get(t.localized_session_title, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_session_title = w.NT.Set(
                  s.localized_session_title,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(g.JU, {
              children: (0, w.we)("#MeetSteam_edit_session_desc"),
            }),
            (0, s.jsx)("textarea", {
              className: (0, Me.A)(
                "DialogTextInputBase",
                Oe().EventDescriptionField,
              ),
              value: w.NT.Get(t.localized_session_description, n),
              rows: 5,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_session_description = w.NT.Set(
                  s.localized_session_description,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(g.pd, {
              type: "text",
              label: "Intended Audience",
              tooltip:
                "A short descriptions for whom then event is designed for to help partners self select",
              value: w.NT.Get(t.localized_intended_audience, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_intended_audience = w.NT.Set(
                  s.localized_intended_audience,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsxs)(g.JU, {
              children: [
                "FAQ ",
                (0, s.jsx)(We.o, {
                  tooltip:
                    "Optional FAQ section which appears in the pop-up display and hidden by default",
                }),
              ],
            }),
            (0, s.jsx)("textarea", {
              className: (0, Me.A)(
                "DialogTextInputBase",
                Oe().EventDescriptionField,
              ),
              value: w.NT.Get(t.localized_sesssion_faq, n),
              rows: 5,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_sesssion_faq = w.NT.Set(
                  s.localized_sesssion_faq,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(g.Yh, {
              checked: t.ask_registration_question,
              onChange: (e) => {
                const s = { ...t };
                (s.ask_registration_question = e), o(s);
              },
              label:
                "Ask partner to tell us what they want to learn from the sessions",
            }),
            (0, s.jsx)(tt, { ...e }),
          ],
        });
      }
      function tt(e) {
        var t;
        const { group: o, fnSetGroup: n } = e,
          [l, i] = (0, _.useState)(
            (null === (t = o.group_visibility_tokens) || void 0 === t
              ? void 0
              : t.length) > 0,
          );
        return l
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  children:
                    "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
                }),
                o.group_visibility_tokens.map((e, t) =>
                  (0, s.jsx)(
                    g.pd,
                    {
                      type: "number",
                      min: "10000",
                      max: "99999",
                      value: e || 1e4,
                      onChange: (e) => {
                        const s = { ...o };
                        (s.group_visibility_tokens[t] = Number.parseInt(
                          e.currentTarget.value,
                        )),
                          n(s);
                      },
                      label: "Visibility Token",
                    },
                    "token" + e + "_" + t,
                  ),
                ),
                (0, s.jsx)(g.$n, {
                  onClick: () => {
                    const e = { ...o };
                    (e.group_visibility_tokens = [
                      ...e.group_visibility_tokens,
                      1e4,
                    ]),
                      n(e);
                  },
                  children: "Add Token",
                }),
                Boolean(o.group_visibility_tokens.length > 0) &&
                  (0, s.jsx)(g.$n, {
                    onClick: () => {
                      const e = { ...o };
                      (e.group_visibility_tokens =
                        e.group_visibility_tokens.slice(0, -1)),
                        n(e);
                    },
                    children: "Remove Last Token",
                  }),
              ],
            })
          : (0, s.jsx)(g.Yh, {
              checked: !1,
              onChange: i,
              label: "Change Visibility Options",
            });
      }
      function ot(e) {
        const { session: t, fnSetSession: o } = e,
          [n, l, i, a, r, d] = (0, Te.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          c = [];
        for (let e = 0; e < 4; ++e) c.push({ data: e, label: e });
        const u = Math.max(0, Math.floor((l - n) / 60)),
          m = Intl.DateTimeFormat().resolvedOptions().timeZone,
          p = "in_person" === r ? (null != d ? d : Pe.hh) : m;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(nt, {
              startTime: t.rtime_start,
              location_type: r,
              fnUpdateLocationAndTZ: (e, s) =>
                o({ ...t, location_type: e, in_person_time_zone: s }),
              in_person_time_zone: d,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(Re.K, {
              strDescription: (0, w.we)("#MeetSteam_edit_start"),
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => n,
              fnSetTimeToUpdate: (e) =>
                o({ ...t, rtime_start: e, rtime_end: e + Fe.Kp.PerMinute * u }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(g.pd, {
              type: "number",
              min: 0,
              label: (0, w.we)("#MeetSteam_edit_duration"),
              onChange: (e) => {
                const s = Number.parseInt(e.currentTarget.value);
                o({ ...t, rtime_end: t.rtime_start + Fe.Kp.PerMinute * s });
              },
              value: u,
            }),
            (0, s.jsx)(st, {
              rtime_start: n,
              rtime_end: l,
              sDisplayTimeZone: p,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsxs)("div", {
              className: Oe().ParticipantRow,
              children: [
                (0, s.jsx)(g.pd, {
                  type: "number",
                  value: i,
                  label: (0, w.we)("#MeetSteam_edit_max_capacity"),
                  min: 1,
                  onChange: (e) =>
                    o({
                      ...t,
                      max_capacity: Number.parseInt(e.currentTarget.value),
                    }),
                }),
                (0, s.jsx)(g.m, {
                  controlled: !0,
                  label: (0, w.we)("#MeetSteam_edit_guest_count"),
                  tooltip: (0, w.we)("#MeetSteam_edit_guest_count_ttip"),
                  rgOptions: c,
                  selectedOption: a,
                  onChange: (e) => o({ ...t, max_per_team: e.data }),
                }),
              ],
            }),
          ],
        });
      }
      function st(e) {
        const { rtime_start: t, rtime_end: o, sDisplayTimeZone: n } = e,
          l = Ye.unix(t).tz(Pe.hh),
          i = Ye.unix(t).tz(n),
          a = i.utcOffset() - l.utcOffset(),
          r = Ye.unix(o).tz(Pe.hh),
          d = Ye.unix(o).tz(n),
          c = d.utcOffset() - r.utcOffset();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, w.we)("#MeetSteam_edit_displayed_start"),
                ": ",
                (0, Le.P0)(i.unix() + 60 * a, !1, i.format("z")),
                " ",
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, w.we)("#MeetSteam_edit_displayed_end"),
                ": ",
                (0, Le.P0)(d.unix() + 60 * c, !1, d.format("z")),
                " ",
              ],
            }),
          ],
        });
      }
      function nt(e) {
        const {
            startTime: t,
            location_type: o,
            fnUpdateLocationAndTZ: n,
            in_person_time_zone: l,
          } = e,
          i = (function (e) {
            const t = (0, Ke.I)({
              queryKey: ["timezone", e],
              queryFn: async () => {
                const t = `${qe.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  o = { reference_time: e },
                  s = await $e().get(t, { params: o });
                return null == s ? void 0 : s.data.timezones;
              },
            });
            return t.isSuccess ? t.data : [];
          })(t),
          a = _.useMemo(
            () => i.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [i],
          ),
          r = (e) => {
            var t;
            return null !== (t = a.get(e)) && void 0 !== t ? t : e;
          },
          d = _.useId(),
          c = _.useId();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              id: d,
              className: le.EventEditorTextTitle,
              children: (0, w.we)("#MeetSteam_edit_date_display_title"),
            }),
            (0, s.jsx)("div", {
              id: c,
              className: le.EventEditorTextSubTitle,
              children: (0, w.we)("#MeetSteam_edit_date_display_desc"),
            }),
            (0, s.jsxs)(g.zW, {
              labelId: d,
              descriptionId: c,
              value: o,
              onChange: (e) => n(e, l),
              children: [
                (0, s.jsx)(g.a, {
                  value: "in_person",
                  children: (0, w.we)("#MeetSteam_edit_date_display_in_person"),
                }),
                (0, s.jsx)(g.a, {
                  value: "virtual",
                  children: (0, w.we)("#MeetSteam_edit_date_display_virtual"),
                }),
              ],
            }),
            "in_person" === o &&
              (0, s.jsx)(He.Ay, {
                styles: { option: (e) => ({ ...e, color: "#444444" }) },
                isSearchable: !0,
                isMulti: !1,
                options: i.map((e) => ({
                  label: e.friendly_name,
                  value: e.name,
                })),
                defaultMenuIsOpen: !1,
                value: l
                  ? { label: r(l), value: l }
                  : { label: r(Pe.hh), value: Pe.hh },
                onChange: (e) => n(o, e.value),
              }),
          ],
        });
      }
      function lt(e, t) {
        if (e) {
          const e = oe.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, K.$Y)([], Be.bP9, null),
            localized_session_description: (0, K.$Y)([], Be.bP9, null),
            localized_sesssion_faq: (0, K.$Y)([], Be.bP9, null),
            localized_intended_audience: (0, K.$Y)([], Be.bP9, null),
            group_visibility_tokens: [],
            ask_registration_question: !1,
            sessions: [],
          };
        }
        return t
          ? {
              ...t,
              localized_session_description: [
                ...t.localized_session_description,
              ],
              localized_session_title: [...t.localized_session_title],
              localized_sesssion_faq: [...(t.localized_sesssion_faq || [])],
              localized_intended_audience: [
                ...(t.localized_intended_audience || []),
              ],
              group_visibility_tokens: [...(t.group_visibility_tokens || [])],
              ask_registration_question: t.ask_registration_question,
            }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function it(e, t) {
        if (e) {
          const e = ze.HD.GetTimeNowWithOverride(),
            t = oe.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            o =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let s = 0;
          do {
            s = Math.floor(1e4 + 9e4 * Math.random());
          } while (o && o.findIndex((e) => e.id == s) >= 0);
          const n = 3600 * Math.ceil(e / 3600);
          return {
            id: s,
            rtime_start: n + Fe.Kp.PerDay,
            rtime_end: n + Fe.Kp.PerDay + Fe.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function at(e) {
        const t = oe.mh.GetEditModel();
        for (
          let o = 0;
          o < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++o
        ) {
          const s = t.GetEventModel().jsondata.meet_steam_groups[o];
          for (let t = 0; t < s.sessions.length; ++t)
            if (s.sessions[t].id == e)
              return { groupIndex: o, sessionIndex: t };
        }
        return null;
      }
      function rt(e) {
        const t = oe.mh.GetEditModel();
        for (
          let o = 0;
          o < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++o
        ) {
          const s = t.GetEventModel().jsondata.meet_steam_groups[o];
          if (s.group_id == e) return { group: s, groupIndex: o };
        }
        return null;
      }
      function dt(e) {
        const t = oe.mh.GetEditModel();
        for (
          let o = 0;
          o < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++o
        ) {
          const s = t.GetEventModel().jsondata.meet_steam_schedules[o];
          if (s.schedule_id == e) return { schedule: s, scheduleIndex: o };
        }
        return (
          "dev" == k.TS.WEB_UNIVERSE &&
            console.log(`Error: HelperFindMeetSteamSchedule ${e} is missing`),
          null
        );
      }
      var ct = o(33561);
      function ut(e) {
        var t;
        const { focusView: o, removeNode: n, group_id: l } = e,
          i = (0, ct.LU)(),
          a = (0, Te.q3)(() => {
            var e;
            return null ===
              (e = i.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == l);
          }),
          [r, d, c] = (0, M.uD)(),
          u = _.useCallback(() => {
            o(), c();
          }, [o, c]),
          [m, p, h] = (0, M.uD)(),
          x = _.useCallback(() => {
            o(), h();
          }, [o, h]);
        return a && i.GetClanAccountID() == (0, Ne.H)()
          ? (0, s.jsxs)("div", {
              className: Oe().EditorCtn,
              children: [
                (0, s.jsx)(mt, { groupData: a, focusView: o }),
                (0, s.jsxs)("div", {
                  className: Oe().controls,
                  children: [
                    (0, s.jsx)(T.ff, {
                      onClick: d,
                      tooltip: (0, w.we)("#Button_Edit"),
                      children: (0, s.jsx)(N.ffu, {}),
                    }),
                    (0, s.jsx)(T.ff, {
                      onClick: p,
                      tooltip: (0, w.we)("#Button_Delete"),
                      children: (0, s.jsx)(N.sED, {}),
                    }),
                    Boolean(
                      (null === (t = a.group_visibility_tokens) || void 0 === t
                        ? void 0
                        : t.length) > 0,
                    ) &&
                      (0, s.jsx)(T.ff, {
                        onClick: () => {},
                        tooltip:
                          "Limited visibility to those with the appropriate URLs",
                        children: (0, s.jsx)(z.WLA, {}),
                      }),
                    Boolean(a.ask_registration_question) &&
                      (0, s.jsx)(T.ff, {
                        onClick: () => {},
                        tooltip:
                          "Will ask partner to provides questions for us for this session.",
                        children: (0, s.jsx)(z.vfN, {}),
                      }),
                  ],
                }),
                Boolean(r) &&
                  (0, s.jsx)(Xe, {
                    hideModal: u,
                    groupInput: a,
                    fnUpdateGroupSession: (e) => {
                      const { groupIndex: t } = rt(e.group_id),
                        o = oe.mh.GetEditModel();
                      (o.GetEventModel().jsondata.meet_steam_groups[t] = e),
                        o.SetDirty(ye.IQ.description);
                    },
                  }),
                Boolean(m) &&
                  (0, s.jsx)(Ge.E, {
                    active: !0,
                    children: (0, s.jsx)(Ue.o0, {
                      strTitle: (0, w.we)("#Button_Delete"),
                      strDescription: (0, w.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { groupIndex: e } = rt(a.group_id),
                          t = oe.mh.GetEditModel(),
                          o = [...t.GetEventModel().jsondata.meet_steam_groups];
                        o.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_groups = o),
                          t.SetDirty(ye.IQ.description),
                          n();
                      },
                      closeModal: x,
                    }),
                  }),
              ],
            })
          : (0, s.jsx)("div", {
              children: "Error: Cannot edit meet steam session group",
            });
      }
      function mt(e) {
        const { groupData: t, focusView: o } = e,
          n = (0, Te.q3)(() => t.sessions || []),
          [l, i, a] = (0, M.uD)(),
          r = _.useCallback(() => {
            o(), a();
          }, [o, a]);
        return t
          ? (0, s.jsxs)(Pe.jr, {
              groupData: t,
              children: [
                n.map((e, l) =>
                  (0, s.jsx)(
                    pt,
                    {
                      focusView: o,
                      sessionID: e.id,
                      bShowOR: l + 1 < n.length,
                    },
                    "timecol_" + t.group_id + "_" + e.id,
                  ),
                ),
                (0, s.jsx)(T.ff, {
                  className: Oe().AddNew,
                  onClick: i,
                  tooltip: (0, w.we)("#MeetSteam_add"),
                  children: (0, s.jsx)(N.OMN, {}),
                }),
                l &&
                  (0, s.jsx)(Ze, {
                    bCreate: !0,
                    hideModal: r,
                    fnUpdateSession: (e) => {
                      const o = oe.mh.GetEditModel(),
                        s = [...t.sessions, e];
                      s.sort((e, t) => e.rtime_start - t.rtime_start),
                        (t.sessions = s),
                        o.SetDirty(ye.IQ.description);
                    },
                  }),
              ],
            })
          : null;
      }
      function pt(e) {
        const { sessionID: t, bShowOR: o, focusView: n } = e,
          [l, i] = (0, M.OP)(),
          a = (0, Te.q3)(() => {
            const { groupIndex: e, sessionIndex: o } = at(t);
            return oe.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[o];
          }),
          [r, d, c] = (0, M.uD)(),
          u = _.useCallback(() => {
            n(), c();
          }, [n, c]),
          [m, p, h] = (0, M.uD)(),
          x = _.useCallback(() => {
            n(), h();
          }, [n, h]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: Oe().Column,
              ...i,
              children: [
                (0, s.jsx)(Pe.Tn, { sessionData: a }),
                Boolean(l) &&
                  (0, s.jsxs)("div", {
                    className: Oe().controls,
                    children: [
                      (0, s.jsx)(T.ff, {
                        onClick: d,
                        tooltip: (0, w.we)("#Button_Edit"),
                        children: (0, s.jsx)(N.ffu, {}),
                      }),
                      (0, s.jsx)(T.ff, {
                        onClick: p,
                        tooltip: (0, w.we)("#Button_Delete"),
                        children: (0, s.jsx)(N.sED, {}),
                      }),
                    ],
                  }),
                Boolean(r) &&
                  (0, s.jsx)(Ze, {
                    bCreate: !1,
                    hideModal: u,
                    sessionInput: a,
                    fnUpdateSession: (e) => {
                      const o = oe.mh.GetEditModel(),
                        { groupIndex: s, sessionIndex: n } = at(t),
                        l = [
                          ...o.GetEventModel().jsondata.meet_steam_groups[s]
                            .sessions,
                        ];
                      (l[n] = e),
                        l.sort((e, t) => e.rtime_start - t.rtime_start),
                        (o.GetEventModel().jsondata.meet_steam_groups[
                          s
                        ].sessions = l),
                        o.SetDirty(ye.IQ.description);
                    },
                  }),
                Boolean(m) &&
                  (0, s.jsx)(Ge.E, {
                    active: !0,
                    children: (0, s.jsx)(Ue.o0, {
                      strTitle: (0, w.we)("#Button_Delete"),
                      strDescription: (0, w.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const e = oe.mh.GetEditModel(),
                          { groupIndex: o, sessionIndex: s } = at(t),
                          n = [
                            ...e.GetEventModel().jsondata.meet_steam_groups[o]
                              .sessions,
                          ];
                        n.splice(s, 1),
                          n.sort((e, t) => e.rtime_start - t.rtime_start),
                          (e.GetEventModel().jsondata.meet_steam_groups[
                            o
                          ].sessions = n),
                          e.SetDirty(ye.IQ.description);
                      },
                      closeModal: x,
                    }),
                  }),
              ],
            }),
            o && (0, s.jsx)(Pe.w3, {}),
          ],
        });
      }
      var _t = o(36969),
        ht = o(38539),
        xt = (o(9024), o(86807));
      function vt(e) {
        const { schema: t } = e,
          {
            table: o,
            table_row: n,
            table_header: l,
            table_cell: i,
            paragraph: a,
          } = t.nodes,
          r = _.useCallback(
            (e, t, s) =>
              !ht.aH(e) &&
              (t &&
                t(
                  e.tr.insert(
                    e.selection.to,
                    (function (e, t, o, s, n) {
                      const l = () => o.createChecked(null, n.createChecked()),
                        i = () => s.createChecked(null, n.createChecked());
                      return e.createChecked(null, [
                        t.createChecked(null, [l(), l()]),
                        t.createChecked(null, [i(), i()]),
                      ]);
                    })(o, n, l, i, a),
                  ),
                ),
              !0),
            [o, n, l, i, a],
          );
        return o
          ? (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_InsertTable"),
              command: r,
              children: (0, s.jsx)(N._Q2, {}),
            })
          : null;
      }
      function ft(e) {
        const { schema: t, className: o } = e,
          { callbacks: n, view: l } = (0, T.wU)(),
          [i, a] = _.useState(() => !!t.nodes.table && ht.aH(l.state));
        return (
          (0, M.hL)(
            n,
            _.useCallback(
              (e) => a(!!t.nodes.table && ht.aH(e.state)),
              [t.nodes.table],
            ),
          ),
          (0, s.jsx)(xt.R, {
            visible: i,
            msAnimationDuration: 100,
            children: (0, s.jsx)(T.Ez, {
              className: o,
              children: (0, s.jsx)(gt, { schema: t }),
            }),
          })
        );
      }
      function gt(e) {
        const { schema: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: ht.JD,
              children: (0, s.jsx)(N.BPi, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: ht.gC,
              children: (0, s.jsx)(N.fG_, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: ht.aR,
              children: (0, s.jsx)(N.XW_, {}),
            }),
            (0, s.jsx)(T.XQ, {}),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: ht.RC,
              children: (0, s.jsx)(N.l26, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: ht.GU,
              children: (0, s.jsx)(N.ur3, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: ht.gR,
              children: (0, s.jsx)(N.dyV, {}),
            }),
            (0, s.jsx)(T.XQ, {}),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: ht.uC,
              children: (0, s.jsx)(N.mLi, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: ht.xV,
              children: (0, s.jsx)(N.sXN, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: ht._G,
              children: (0, s.jsx)(N.Maz, {}),
            }),
            (0, s.jsx)(T.XQ, {}),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_MergeCells"),
              command: ht.w7,
              children: (0, s.jsx)(N.rnq, {}),
            }),
            (0, s.jsx)(T.cQ, {
              tooltip: (0, w.we)("#FormattingToolbar_Tables_SplitCells"),
              command: ht.L0,
              children: (0, s.jsx)(N.vB9, {}),
            }),
            !1,
          ],
        });
      }
      var jt = o(44483),
        bt = o(44832),
        Ct = o(28516),
        Et = o.n(Ct);
      function wt(e, t) {
        if (e) {
          const e = oe.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_schedules;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
          return { schedule_id: t, session_breaks: [] };
        }
        return t
          ? { ...t }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null);
      }
      function It(e) {
        const { hideModal: t, fnUpdateSession: o, inputScheduleModel: n } = e,
          l = (0, ze.f1)(),
          i = (0, ct.LU)(),
          [a, r] = (0, _.useState)(() => wt(!Boolean(n), n)),
          [d, c, u] = (0, Te.q3)(() => [
            a.location_type,
            a.in_person_time_zone,
            i.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          m = (0, _.useMemo)(() => {
            const e = u.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? l : Math.min(...e.map((e) => e.rtime_start));
          }, [u, l]);
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: Boolean(n)
              ? "Update Meet Steam Schedule"
              : "Create Meet Steam Schedule View",
            onOK: () => o(a),
            closeModal: () => {
              r(wt(!Boolean(n), n)), t();
            },
            children: (0, s.jsxs)("div", {
              className: Et().DialogCtn,
              children: [
                (0, s.jsx)(nt, {
                  startTime: i.GetEventStartTime(),
                  location_type: d,
                  in_person_time_zone: c,
                  fnUpdateLocationAndTZ: (e, t) =>
                    r({ ...a, location_type: e, in_person_time_zone: t }),
                }),
                (0, s.jsx)(Mt, {
                  inputScheduleModel: a,
                  fnUpdateSession: (e) => r(e),
                  rtBreakStartingTime: m,
                }),
              ],
            }),
          }),
        });
      }
      function Mt(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: o,
            rtBreakStartingTime: n,
          } = e,
          [l, i] = (0, Te.q3)(() => [
            o.session_breaks || [],
            o.in_person_time_zone || Pe.hh,
          ]),
          a = (0, _.useCallback)(
            (e, s) => {
              const n = { ...o };
              (n.session_breaks = n.session_breaks
                ? [...n.session_breaks]
                : []),
                s < n.session_breaks.length
                  ? (n.session_breaks[s] = e)
                  : n.session_breaks.push(e),
                t(n);
            },
            [t, o],
          );
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", { children: "Scheduled Breaks" }),
            l
              .sort((e, t) => t.rtime_start - e.rtime_start)
              .map((e, t) =>
                (0, s.jsx)(
                  kt,
                  {
                    sDisplayTimeZone: i,
                    index: t,
                    breakSession: e,
                    fnOnUpdate: (e) => a(e, t),
                  },
                  "breakedit" + e.break_id,
                ),
              ),
            (0, s.jsx)(g.$n, {
              onClick: () => {
                var e;
                const t = o.session_breaks ? [...o.session_breaks] : [];
                let s = Math.floor(1 + 1e5 * Math.random());
                for (; t.findIndex((e) => e.break_id == s) >= 0; )
                  s = Math.floor(1 + 1e5 * Math.random());
                a(
                  {
                    break_id: s,
                    localized_break_description: (0, K.$Y)([], Be.bP9, null),
                    rtime_start: n,
                    rtime_end: n + Fe.Kp.PerHour,
                  },
                  (null === (e = o.session_breaks) || void 0 === e
                    ? void 0
                    : e.length) || 0,
                );
              },
              children: "+ Add Break",
            }),
          ],
        });
      }
      function kt(e) {
        const {
            breakSession: t,
            fnOnUpdate: o,
            index: n,
            sDisplayTimeZone: l,
          } = e,
          i = (0, Ve.E)(),
          [a, r, d, c] = (0, Te.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[i] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)("div", { children: ["Break # ", n + 1] }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(Re.K, {
              strDescription: "Break Start Time",
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => a,
              fnSetTimeToUpdate: (e) =>
                o({ ...t, rtime_start: e, rtime_end: e + Fe.Kp.PerMinute * c }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(g.pd, {
              type: "number",
              min: 0,
              label: "Break duration in minutes",
              onChange: (e) => {
                const s = Number.parseInt(e.currentTarget.value);
                o({ ...t, rtime_end: t.rtime_start + Fe.Kp.PerMinute * s });
              },
              value: c,
            }),
            (0, s.jsx)(g.pd, {
              type: "text",
              label: "Break Description",
              value: d,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_break_description[i] = e.currentTarget.value),
                  o(s);
              },
            }),
            (0, s.jsx)(st, {
              rtime_start: a,
              rtime_end: r,
              sDisplayTimeZone: l,
            }),
          ],
        });
      }
      function St(e) {
        const { focusView: t, removeNode: o, schedule_id: n } = e,
          l = (0, ct.LU)(),
          i = (0, Te.q3)(() => {
            var e;
            return null ===
              (e = l.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == n);
          }),
          [a, r, d] = (0, M.uD)(),
          c = _.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, m, p] = (0, M.uD)(),
          h = _.useCallback(() => {
            t(), p();
          }, [t, p]);
        return i && l.GetClanAccountID() == (0, Ne.H)()
          ? (0, s.jsxs)("div", {
              className: Et().EditorCtn,
              children: [
                (0, s.jsx)(Pe.fs, {
                  eventModel: l.GetEventModel(),
                  scheduleData: i,
                }),
                (0, s.jsxs)("div", {
                  className: Et().controls,
                  children: [
                    (0, s.jsx)(T.ff, {
                      onClick: r,
                      tooltip: (0, w.we)("#Button_Edit"),
                      children: (0, s.jsx)(N.ffu, {}),
                    }),
                    (0, s.jsx)(T.ff, {
                      onClick: m,
                      tooltip: (0, w.we)("#Button_Delete"),
                      children: (0, s.jsx)(N.sED, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, s.jsx)(It, {
                    hideModal: c,
                    inputScheduleModel: i,
                    fnUpdateSession: (e) => {
                      const { scheduleIndex: t } = dt(e.schedule_id);
                      (l.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                        l.SetDirty(ye.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, s.jsx)(Ge.E, {
                    active: !0,
                    children: (0, s.jsx)(Ue.o0, {
                      strTitle: (0, w.we)("#Button_Delete"),
                      strDescription: (0, w.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { scheduleIndex: e } = dt(i.schedule_id),
                          t = oe.mh.GetEditModel(),
                          s = [
                            ...t.GetEventModel().jsondata.meet_steam_schedules,
                          ];
                        s.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_schedules = s),
                          t.SetDirty(ye.IQ.description),
                          o();
                      },
                      closeModal: h,
                    }),
                  }),
              ],
            })
          : (0, s.jsx)("div", {
              children: "Error: Cannot edit meet steam schedule view",
            });
      }
      var Dt = o(10820),
        yt = o(68033),
        Tt = o(30193),
        Nt = o(14947);
      function Pt(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, T.wU)(),
          [l, i] = _.useState(!1),
          a = _.useCallback(
            (e, o) => {
              n.dispatch(
                n.state.tr.insert(
                  n.state.selection.to,
                  t.nodes.emoticon.create(null, t.text(e)),
                ),
              ),
                o || n.focus();
            },
            [n, t],
          ),
          r = _.useCallback(
            (e) => {
              i(!0);
              const t = (0, R.lX)((0, s.jsx)(Ut, { OnSelected: a }), e, {
                bOverlapHorizontal: !0,
              });
              (0, Nt.z7)(
                () => !t.visible,
                () => i(!1),
              );
            },
            [a],
          );
        return (0, s.jsx)(T.ff, {
          tooltip: "#Editor_Emoticon",
          onClick: r,
          toggled: l,
          children: (0, s.jsx)(z.jZW, {}),
        });
      }
      function Ut(e) {
        return (
          (0, Tt.k3)(yt.A),
          (0, s.jsx)(Dt.iY, { emoticonStore: yt.A, OnSelected: e.OnSelected })
        );
      }
      var Gt = o(14703),
        At = o(4796),
        Ot = o(63287),
        Bt = o.n(Ot),
        Vt = o(7913),
        zt = o(82102),
        Rt = o(69484),
        Lt = o(27939);
      function Ft(e) {
        const { hideModal: t, fnUpdateSession: o, clanAccountID: n } = e,
          [l, i] = (0, _.useState)(() => eo(!0, null));
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)("#UserPolls_Create_title"),
            onOK: () => o(l),
            closeModal: () => {
              i(eo(!0, null)), t();
            },
            children: (0, s.jsx)("div", {
              className: Bt().DialogCtn,
              children: (0, s.jsx)(Kt, {
                clanAccountID: n,
                userPollDef: l,
                fnSetDef: i,
              }),
            }),
          }),
        });
      }
      function Yt(e) {
        const {
            hideModal: t,
            userPollDef: o,
            clanAccountID: n,
            fnUpdateUserPollDef: l,
          } = e,
          [i, a] = (0, _.useState)(() => eo(!1, o));
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)("#UserPolls_Edit_title"),
            onOK: () => {
              l(i);
            },
            onCancel: () => {
              a(eo(!1, o));
            },
            closeModal: t,
            children: (0, s.jsx)("div", {
              className: Bt().DialogCtn,
              children: (0, s.jsx)(Kt, {
                userPollDef: i,
                clanAccountID: n,
                fnSetDef: a,
              }),
            }),
          }),
        });
      }
      function Ht(e) {
        switch (e) {
          default:
          case Gt.$t.k_EPollResult_NotVisible:
            return (0, w.we)("#UserPolls_Visibility_None");
          case Gt.$t.k_EPollResult_Visible_After_End:
            return (0, w.we)("#UserPolls_Visibility_End");
          case Gt.$t.k_EPollResult_Visible_After_Vote:
            return (0, w.we)("#UserPolls_Visibility_Voter");
          case Gt.$t.k_EPollResult_Visible_After_Vote_Or_End:
            return (0, w.we)("#UserPolls_Visibility_Voter_or_End");
          case Gt.$t.k_EPollResult_Visible_On_Demand:
            return (0, w.we)("#UserPolls_Visibility_OnDemand");
        }
      }
      function Kt(e) {
        const { userPollDef: t, fnSetDef: o } = e,
          n = (0, Ve.E)(),
          [l] = (0, Te.q3)(() => [t.results_visibility_settings]),
          i = Object.values(Gt.$t).map((e) => ({ data: e, label: Ht(e) }));
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.pd, {
              type: "text",
              label: (0, w.we)("#UserPolls_Description"),
              value: w.NT.Get(t.localized_poll_description, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_poll_description = w.NT.Set(
                  s.localized_poll_description,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(Wt, { ...e }),
            (0, s.jsx)($t, { ...e }),
            (0, s.jsx)(g.JU, { children: (0, w.we)("#UserPolls_Visibility") }),
            (0, s.jsx)("div", {
              className: Bt().PollArea,
              children: (0, s.jsx)(g.m, {
                strDropDownClassName: le.DropDownScroll,
                rgOptions: i,
                selectedOption: l,
                onChange: (e) => {
                  e.data != t.results_visibility_settings &&
                    o({ ...t, results_visibility_settings: e.data });
                },
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            }),
            (0, s.jsx)(qt, { ...e }),
          ],
        });
      }
      function qt(e) {
        const { clanAccountID: t, userPollDef: o, fnSetDef: n } = e,
          l = (0, ct.LU)(),
          i = (0, Gt.rR)(l.GetClanSteamID()),
          [a] = (0, Te.q3)(() => [o.user_poll_background]),
          r = (0, _.useCallback)(
            (e, t, s, l, i) => {
              (0, d.wT)(
                null != s && s >= Be.Bhc && s < Be.bP9,
                "Unexpected value for elang: " + s,
              ),
                (0, d.wT)(
                  "user_poll_background" === i,
                  "Unexpected artwork type " + i,
                );
              const a = (0, zt.G)(e, t);
              a.image && n({ ...o, user_poll_background: a.image });
            },
            [n, o],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.JU, {
              children: (0, w.we)("#UserPolls_BackgroundImage"),
            }),
            (0, s.jsxs)("div", {
              className: Bt().PollArea,
              children: [
                (0, s.jsx)("p", {
                  children: (0, w.we)("#UserPolls_BackgroundImage_desc"),
                }),
                (0, s.jsx)(Vt.a, {
                  rgRealmList: l.GetIncludedRealmList(),
                  rgSupportArtwork: Gt.YX,
                  strUploadAjaxURL: i,
                  fnOnUploadSuccess: r,
                  elOverrideDragAndDropText: (0, w.we)(
                    "#Template_Section_MediaUpdate_Static_Dnd",
                  ),
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
                Boolean(a) && (0, s.jsx)("img", { src: (0, Rt.F)(t, a) }),
              ],
            }),
          ],
        });
      }
      function Qt(e) {
        switch (e) {
          case Gt.BY.k_EPollVoter_AnyUser:
            return (0, w.we)("#UserPolls_Voters_Anyone");
          case Gt.BY.k_EPollVoter_UserGameInLibrary:
            return (0, w.we)("#UserPolls_Voters_Owners");
          case Gt.BY.k_EPollVoter_MinPlayTime:
            return (0, w.we)("#UserPolls_Voters_Players");
          case Gt.BY.k_EPollVoter_MemberOfGroup:
            return (0, w.we)("#UserPolls_Voters_Members");
        }
      }
      function $t(e) {
        const { clanAccountID: t, userPollDef: o, fnSetDef: n } = e,
          [l, i] = (0, At.TB)(t),
          [a, r] = (0, Te.q3)(() => [
            o.voter_min_playtime_seconds,
            o.voter_eligibility,
          ]),
          d = (0, _.useMemo)(() => {
            const e = [
              {
                label: Qt(Gt.BY.k_EPollVoter_AnyUser),
                data: Gt.BY.k_EPollVoter_AnyUser,
              },
            ];
            return (
              i && i.is_ogg && t != Lt.II
                ? (e.push({
                    label: Qt(Gt.BY.k_EPollVoter_UserGameInLibrary),
                    data: Gt.BY.k_EPollVoter_UserGameInLibrary,
                  }),
                  e.push({
                    label: Qt(Gt.BY.k_EPollVoter_MinPlayTime),
                    data: Gt.BY.k_EPollVoter_MinPlayTime,
                  }))
                : !i ||
                  (i.is_ogg && t != Lt.II) ||
                  e.push({
                    label: Qt(Gt.BY.k_EPollVoter_MemberOfGroup),
                    data: Gt.BY.k_EPollVoter_MemberOfGroup,
                  }),
              e
            );
          }, [t, i]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.JU, { children: (0, w.we)("#UserPolls_Voters") }),
            (0, s.jsxs)("div", {
              className: Bt().PollArea,
              children: [
                (0, s.jsx)(g.m, {
                  strDropDownClassName: le.DropDownScroll,
                  rgOptions: d,
                  selectedOption: r,
                  onChange: (e) => {
                    if (e.data != o.voter_eligibility) {
                      let t = { ...o, voter_eligibility: e.data };
                      e.data == Gt.BY.k_EPollVoter_MinPlayTime &&
                        (t.voter_min_playtime_seconds = 5 * Zt),
                        n(t);
                    }
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
                Boolean(r == Gt.BY.k_EPollVoter_MinPlayTime) &&
                  (0, s.jsx)("div", {
                    className: Bt().OptionInset,
                    children: (0, s.jsx)(g.pd, {
                      type: "number",
                      label: (0, w.we)("#UserPolls_MinPlayTime"),
                      value: a / Zt,
                      min: 5,
                      onChange: (e) => {
                        var t, s;
                        const l =
                          (null !==
                            (s = Number.parseInt(
                              null ===
                                (t = null == e ? void 0 : e.currentTarget) ||
                                void 0 === t
                                ? void 0
                                : t.value,
                            )) && void 0 !== s
                            ? s
                            : 5) * Zt;
                        o.voter_min_playtime_seconds != l &&
                          n({ ...o, voter_min_playtime_seconds: l });
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function Wt(e) {
        const { userPollDef: t, fnSetDef: o } = e,
          [n, l] = (0, Te.q3)(() => [
            t.poll_end_time,
            t.poll_end_days_since_start,
          ]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.JU, { children: (0, w.we)("#UserPolls_Starts") }),
            (0, s.jsxs)("div", {
              className: Bt().PollArea,
              children: [
                (0, s.jsxs)("div", {
                  className: (0, Me.A)(le.FlexRowContainer, le.RadioOption),
                  children: [
                    (0, s.jsx)("input", {
                      type: "radio",
                      name: "StartDateRadio",
                      id: "UserPollDialog_Days",
                      checked: Boolean(l),
                      onChange: () => {
                        t.poll_end_days_since_start ||
                          o({
                            ...t,
                            poll_end_time: void 0,
                            poll_end_days_since_start: Jt * Xt,
                          });
                      },
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "UserPollDialog_Days",
                      children: (0, s.jsx)("span", {
                        children: (0, w.we)("#UserPolls_EndTime_In_Days"),
                      }),
                    }),
                  ],
                }),
                Boolean(l) &&
                  (0, s.jsx)("div", {
                    className: Bt().OptionInset,
                    children: (0, s.jsx)(g.pd, {
                      type: "number",
                      value: l / Xt,
                      min: 1,
                      onChange: (e) => {
                        var s, n;
                        const l =
                          (null !==
                            (n = Number.parseInt(
                              null ===
                                (s = null == e ? void 0 : e.currentTarget) ||
                                void 0 === s
                                ? void 0
                                : s.value,
                            )) && void 0 !== n
                            ? n
                            : 1) * Xt;
                        t.poll_end_days_since_start != l &&
                          o({
                            ...t,
                            poll_end_time: void 0,
                            poll_end_days_since_start: l,
                          });
                      },
                    }),
                  }),
                (0, s.jsxs)("div", {
                  className: (0, Me.A)(le.FlexRowContainer, le.RadioOption),
                  children: [
                    (0, s.jsx)("input", {
                      type: "radio",
                      name: "StartDateRadio",
                      id: "UserPollDialog_SpecificTime",
                      checked: Boolean(n),
                      onChange: () => {
                        t.poll_end_time ||
                          o({
                            ...t,
                            poll_end_days_since_start: void 0,
                            poll_end_time:
                              Math.floor(Date.now() / 1e3) + Jt * Xt,
                          });
                      },
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "UserPollDialog_SpecificTime",
                      children: (0, s.jsx)("span", {
                        children: (0, w.we)("#UserPolls_EndTime_Specific"),
                      }),
                    }),
                  ],
                }),
                Boolean(n) &&
                  (0, s.jsxs)("div", {
                    className: (0, Me.A)(Bt().OptionInset, le.FlexRowContainer),
                    children: [
                      (0, s.jsx)(Re.K, {
                        strDescription: "",
                        nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                        fnGetTimeToUpdate: () => n,
                        fnSetTimeToUpdate: (e) => {
                          t.poll_end_time != e &&
                            o({
                              ...t,
                              poll_end_days_since_start: void 0,
                              poll_end_time: e,
                            });
                        },
                        fnIsValidDateTime: () =>
                          n > Math.floor(Date.now() / 1e3) + 3600,
                      }),
                      (0, s.jsx)("span", {
                        children: (0, w.we)("#UserPolls_EndTime_Zone"),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      const Jt = 7,
        Xt = 86400,
        Zt = 60;
      function eo(e, t) {
        if (e) {
          const e =
            oe.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.poll_id == t) >= 0);
          return {
            poll_id: t,
            options: [],
            localized_poll_description: (0, K.$Y)([], Be.bP9, null),
            poll_end_days_since_start: Jt * Xt,
            poll_end_time: void 0,
            results_visibility_settings: Gt.$t.k_EPollResult_Visible_On_Demand,
            voter_eligibility: Gt.BY.k_EPollVoter_AnyUser,
          };
        }
        return t
          ? {
              ...t,
              localized_poll_description: [...t.localized_poll_description],
            }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null);
      }
      function to(e) {
        const {
            bCreate: t,
            hideModal: o,
            pollOptionsInput: n,
            fnUpdatePollOption: l,
          } = e,
          [i, a] = (0, _.useState)(() => oo(t, n)),
          r = (0, Ve.E)();
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsx)(Ue.o0, {
            strTitle: (0, w.we)(
              t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
            ),
            onOK: () => {
              l(i), o();
            },
            onCancel: () => {
              a(oo(t, n)), o();
            },
            children: (0, s.jsx)("div", {
              className: Bt().DialogCtn,
              children: (0, s.jsx)(g.pd, {
                type: "text",
                label: (0, w.we)("#UserPolls_Option_Title"),
                value: w.NT.Get(i.localized_option, r),
                onChange: (e) => {
                  const t = { ...i };
                  (t.localized_option = [...t.localized_option]),
                    (t.localized_option = w.NT.Set(
                      t.localized_option,
                      r,
                      e.currentTarget.value,
                    )),
                    a(t);
                },
              }),
            }),
          }),
        });
      }
      function oo(e, t) {
        if (e) {
          const e = oe.mh.GetEditModel().GetEventModel().jsondata.user_polls,
            t =
              null == e ? void 0 : e.reduce((e, t) => e.concat(t.options), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (t && t.findIndex((e) => e.option_id == o) >= 0);
          return {
            option_id: o,
            localized_option: (0, K.$Y)([], Be.bP9, null),
          };
        }
        return t
          ? { ...t }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null);
      }
      var so = o(69818),
        no = o(56330),
        lo = o(37935);
      function io(e) {
        const t = oe.mh.GetEditModel();
        for (let o = 0; o < t.GetEventModel().jsondata.user_polls.length; ++o) {
          const s = t.GetEventModel().jsondata.user_polls[o];
          for (let t = 0; t < s.options.length; ++t)
            if (s.options[t].option_id == e)
              return { pollIndex: o, optionIndex: t };
        }
        return null;
      }
      function ao(e) {
        const t = oe.mh.GetEditModel();
        for (let o = 0; o < t.GetEventModel().jsondata.user_polls.length; ++o) {
          const s = t.GetEventModel().jsondata.user_polls[o];
          if (s.poll_id == e) return { userPollDef: s, pollIndex: o };
        }
        return null;
      }
      var ro = o(56654);
      function co(e) {
        const { focusView: t, removeNode: o, poll_id: n } = e,
          l = (0, ct.LU)(),
          i = (0, Te.q3)(() => {
            var e;
            return null === (e = l.GetEventModel().jsondata.user_polls) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.poll_id == n);
          }),
          [a, r, d] = (0, M.uD)(),
          c = _.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, m, p] = (0, M.uD)(),
          h = _.useCallback(() => {
            t(), p();
          }, [t, p]);
        return i
          ? (0, s.jsxs)("div", {
              className: Oe().EditorCtn,
              children: [
                (0, s.jsx)(uo, { userPollDef: i, focusView: t }),
                (0, s.jsxs)("div", {
                  className: Oe().controls,
                  children: [
                    (0, s.jsx)(T.ff, {
                      onClick: r,
                      tooltip: (0, w.we)("#Button_Edit"),
                      children: (0, s.jsx)(N.ffu, {}),
                    }),
                    (0, s.jsx)(T.ff, {
                      onClick: m,
                      tooltip: (0, w.we)("#Button_Delete"),
                      children: (0, s.jsx)(N.sED, {}),
                    }),
                    (0, s.jsx)(T.ff, {
                      onClick: () => {},
                      tooltip: Ht(i.results_visibility_settings),
                      children: (0, s.jsx)(z.WLA, {}),
                    }),
                    (0, s.jsx)(T.ff, {
                      onClick: () => {},
                      tooltip: Qt(i.voter_eligibility),
                      children: (0, s.jsx)(z.JpU, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, s.jsx)(Yt, {
                    hideModal: c,
                    userPollDef: i,
                    clanAccountID: l.GetClanAccountID(),
                    fnUpdateUserPollDef: (e) => {
                      const { pollIndex: t } = ao(e.poll_id),
                        o = oe.mh.GetEditModel();
                      (o.GetEventModel().jsondata.user_polls[t] = e),
                        o.SetDirty(ye.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, s.jsx)(Ge.E, {
                    active: !0,
                    children: (0, s.jsx)(Ue.o0, {
                      strTitle: (0, w.we)("#Button_Delete"),
                      strDescription: (0, w.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { pollIndex: e } = ao(i.poll_id),
                          t = oe.mh.GetEditModel(),
                          s = [...t.GetEventModel().jsondata.user_polls];
                        s.splice(e, 1),
                          (t.GetEventModel().jsondata.user_polls = s),
                          t.SetDirty(ye.IQ.description),
                          o();
                      },
                      closeModal: h,
                    }),
                  }),
              ],
            })
          : (0, s.jsx)("div", {
              className: no.ErrorStylesWithIcon,
              children: (0, w.we)("#UserPolls_Editor_FailToFindModel", n),
            });
      }
      function uo(e) {
        const { userPollDef: t, focusView: o } = e,
          [n, l] = (0, Te.q3)(() => [
            t.options || [],
            t.randomize_option_order,
          ]),
          i = (0, ct.LU)(),
          a = (0, Ve.E)(),
          [r, d, c] = (0, M.uD)(),
          u = _.useCallback(() => {
            o(), c();
          }, [o, c]),
          [m, p, h] = (0, M.uD)(),
          x = _.useCallback(() => {
            o(), h();
          }, [o, h]);
        return t
          ? (0, s.jsxs)(lo.W6, {
              userPollDef: t,
              eventModel: i.GetEventModel(),
              lang: a,
              children: [
                n.map((e) =>
                  (0, s.jsx)(
                    po,
                    { focusView: o, optionID: e.option_id },
                    "polloption" + t.poll_id + "_" + e.option_id,
                  ),
                ),
                (0, s.jsxs)("div", {
                  className: Bt().AdminOptions,
                  children: [
                    (0, s.jsx)(so.wl, {
                      className: "",
                      onClick: d,
                      children: (0, w.we)("#UserPolls_Option_Add"),
                    }),
                    (0, s.jsx)(so.wl, {
                      className: "",
                      onClick: p,
                      children: (0, w.we)("#UserPolls_Option_Reorder"),
                    }),
                  ],
                }),
                r &&
                  (0, s.jsx)(to, {
                    bCreate: !0,
                    hideModal: u,
                    fnUpdatePollOption: (e) => {
                      const o = oe.mh.GetEditModel();
                      t.options || (t.options = []),
                        t.options.push(e),
                        o.SetDirty(ye.IQ.description);
                    },
                  }),
                m &&
                  (0, s.jsx)(mo, {
                    hideModal: x,
                    options: n,
                    bRandomize: l,
                    fnUpdateOptions: (e, o) => {
                      (t.randomize_option_order = o), (t.options = e);
                    },
                  }),
              ],
            })
          : null;
      }
      function mo(e) {
        const {
            options: t,
            bRandomize: o,
            fnUpdateOptions: n,
            hideModal: l,
          } = e,
          i = (0, Ve.E)(),
          [a, r] = (0, _.useState)(o),
          [d, c] = (0, _.useState)(t);
        return (0, s.jsx)(Ge.E, {
          active: !0,
          children: (0, s.jsxs)(Ue.o0, {
            strTitle: (0, w.we)("#UserPolls_Option_Reorder"),
            strDescription: (0, w.we)("#UserPolls_Option_Reorder_desc"),
            onCancel: () => {
              r(o), c(t);
            },
            onOK: () => {
              n([...d], a);
            },
            closeModal: l,
            children: [
              (0, s.jsx)(g.Yh, {
                label: (0, w.we)("#UserPolls_Option_Randomize"),
                checked: a,
                onChange: r,
              }),
              (0, s.jsx)(ro.A, {
                items: d,
                render: (e) => {
                  var t, o;
                  return (0, s.jsx)("div", {
                    children:
                      (null === (t = e.localized_option) || void 0 === t
                        ? void 0
                        : t[i]) ||
                      (null === (o = e.localized_option) || void 0 === o
                        ? void 0
                        : o[Be.Bhc]) ||
                      "",
                  });
                },
                onReorder: (e) => c(e),
              }),
            ],
          }),
        });
      }
      function po(e) {
        const { optionID: t, focusView: o } = e,
          [n, l] = (0, M.OP)(),
          i = (0, Te.q3)(() => {
            const { optionIndex: e, pollIndex: o } = io(t);
            return oe.mh.GetEditModel().GetEventModel().jsondata.user_polls[o]
              .options[e];
          }),
          a = (0, Ve.E)(),
          [r, d, c] = (0, M.uD)(),
          u = _.useCallback(() => {
            o(), c();
          }, [o, c]),
          [m, p, h] = (0, M.uD)(),
          x = _.useCallback(() => {
            o(), h();
          }, [o, h]);
        return (0, s.jsxs)("div", {
          className: Oe().Column,
          ...l,
          children: [
            (0, s.jsx)(lo.s3, { pollOptionDef: i, lang: a }),
            Boolean(n) &&
              (0, s.jsxs)("div", {
                className: Oe().controls,
                children: [
                  (0, s.jsx)(T.ff, {
                    onClick: d,
                    tooltip: (0, w.we)("#Button_Edit"),
                    children: (0, s.jsx)(N.ffu, {}),
                  }),
                  (0, s.jsx)(T.ff, {
                    onClick: p,
                    tooltip: (0, w.we)("#Button_Delete"),
                    children: (0, s.jsx)(N.sED, {}),
                  }),
                ],
              }),
            Boolean(r) &&
              (0, s.jsx)(to, {
                bCreate: !1,
                hideModal: u,
                pollOptionsInput: i,
                fnUpdatePollOption: (e) => {
                  const o = oe.mh.GetEditModel(),
                    { optionIndex: s, pollIndex: n } = io(t),
                    l = [...o.GetEventModel().jsondata.user_polls[n].options];
                  (l[s] = e),
                    (o.GetEventModel().jsondata.user_polls[n].options = l),
                    o.SetDirty(ye.IQ.description);
                },
              }),
            Boolean(m) &&
              (0, s.jsx)(Ge.E, {
                active: !0,
                children: (0, s.jsx)(Ue.o0, {
                  strTitle: (0, w.we)("#Button_Delete"),
                  strDescription: (0, w.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = oe.mh.GetEditModel(),
                      { optionIndex: o, pollIndex: s } = io(t),
                      n = [...e.GetEventModel().jsondata.user_polls[s].options];
                    n.splice(o, 1),
                      (e.GetEventModel().jsondata.user_polls[s].options = n),
                      e.SetDirty(ye.IQ.description);
                  },
                  closeModal: x,
                }),
              }),
          ],
        });
      }
      const _o = _.memo(function (e) {
        const {
          view: t,
          schema: o,
          refUpdateToolbar: n,
          className: l,
          clanSteamID: i,
          bSpellcheckEnabled: a,
          setSpellcheckEnabled: r,
        } = e;
        return (0, s.jsx)(T.bI, {
          refUpdateToolbar: n,
          view: t,
          children: (0, s.jsxs)("div", {
            className: e.className,
            children: [
              (0, s.jsxs)(T.Ez, {
                className: e.className,
                children: [
                  (0, s.jsx)(_t.MV, {}),
                  (0, s.jsx)(T.XQ, {}),
                  (0, s.jsx)(_t.Km, { schema: o }),
                  (0, s.jsx)(T.XQ, {}),
                  o.marks.link && (0, s.jsx)(ho, { schema: o }),
                  (0, s.jsx)(T.XQ, {}),
                  (0, s.jsx)(_t.Hz, { schema: o }),
                  (0, s.jsx)(_t.WJ, { schema: o, levels: 3 }),
                  (0, s.jsx)(T.XQ, {}),
                  (0, s.jsx)(Pt, { schema: o }),
                  (0, s.jsx)(vo, { schema: o, clanSteamID: i }),
                  (0, s.jsx)(vt, { schema: o }),
                  (0, s.jsx)(_t.C$, {
                    schema: o,
                    showIndentButtonsAsNeeded: !0,
                  }),
                  (0, s.jsx)(T.hK, {}),
                  r &&
                    (0, s.jsx)(_t.Nt, {
                      bSpellcheckEnabled: a,
                      setSpellcheckEnabled: r,
                    }),
                  o.nodes.meetsteamsessiongroup &&
                    (0, s.jsx)(go, { schema: o }),
                  o.nodes.meetsteamscheduleview &&
                    (0, s.jsx)(jo, { schema: o }),
                  o.nodes.userpolls &&
                    k.iA.is_support &&
                    (0, s.jsx)(xo, { schema: o }),
                ],
              }),
              (0, s.jsx)(ft, { className: e.className, schema: o }),
            ],
          }),
        });
      });
      function ho(e) {
        const t = (0, bt.V9)();
        return (0, s.jsx)(_t.z9, { schema: e.schema, addtlAttrs: t });
      }
      function xo(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, T.wU)(),
          l = (0, ct.LU)(),
          [i, a, r] = (0, Y.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e) => {
              l.GetEventModel().jsondata.user_polls ||
                (l.GetEventModel().jsondata.user_polls = []),
                l.GetEventModel().jsondata.user_polls.push({ ...e }),
                (function (e, t, o) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ poll_id: o }),
                    ),
                  );
                })(n, t.nodes.userpolls, e.poll_id),
                d();
            },
            [t, n, d, l],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            i &&
              (0, s.jsx)(Ft, {
                hideModal: d,
                clanAccountID: l.GetClanAccountID(),
                fnUpdateSession: c,
              }),
            (0, s.jsx)(T.ff, {
              tooltip: "#UserPolls_Toolbar_ttip",
              onClick: a,
              toggled: i,
              children: (0, s.jsx)(N.fQB, {}),
            }),
          ],
        });
      }
      function vo(e) {
        const { schema: t, clanSteamID: o } = e,
          { callbacks: n, view: l } = (0, T.wU)(),
          { image: i, video: a, previewyoutube: r } = t.nodes,
          d = _.useCallback(
            (e, t) => {
              l.dispatch(l.state.tr.insert(l.state.selection.to, t.create(e)));
            },
            [l],
          ),
          c = _.useCallback(() => l.focus(), [l]),
          {
            showInsertImageModal: u,
            showInsertVideoModal: m,
            imageModal: p,
            activeModal: h,
          } = _e({
            clanSteamID: o,
            imageNodeType: i,
            videoNodeType: a,
            onItemSelected: d,
            onHideModal: c,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            p,
            i &&
              (0, s.jsx)(T.ff, {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: u,
                toggled: "image" == h,
                children: (0, s.jsx)(N._V3, {}),
              }),
            a &&
              (0, s.jsx)(T.ff, {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: m,
                toggled: "video" == h,
                children: (0, s.jsx)(N.CeX, {}),
              }),
            r && (0, s.jsx)(fo, { schema: t }),
            (i || a || r) && (0, s.jsx)(T.XQ, {}),
          ],
        });
      }
      function fo(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, T.wU)(),
          [l, i, a] = (0, Y.uD)(),
          r = _.useCallback(() => {
            a(), n.focus();
          }, [a, n]),
          d = _.useCallback(
            (e, o) => {
              !(function (e, t, o, s = we.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: o, align: s }),
                  ),
                );
              })(n, t.nodes.previewyoutube, e, o),
                r();
            },
            [t, n, r],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            l && (0, s.jsx)(De, { hideModal: r, onSave: d }),
            (0, s.jsx)(T.ff, {
              tooltip: "#EventEditor_InsertYouTube",
              onClick: i,
              toggled: l,
              children: (0, s.jsx)("img", { src: jt.A }),
            }),
          ],
        });
      }
      function go(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, T.wU)(),
          l = (0, ct.LU)(),
          [i, a, r] = (0, Y.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e, o) => {
              l.GetEventModel().jsondata.meet_steam_groups ||
                (l.GetEventModel().jsondata.meet_steam_groups = []),
                l
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [o] }),
                (function (e, t, o) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: o }),
                    ),
                  );
                })(n, t.nodes.meetsteamsessiongroup, e.group_id),
                d();
            },
            [t, n, d, l],
          );
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, Ne.H)())
          return (0, s.jsxs)(s.Fragment, {
            children: [
              i && (0, s.jsx)(Je, { hideModal: d, fnUpdateSession: c }),
              (0, s.jsx)(T.ff, {
                tooltip: "#MeetSteam_add_group_ttip",
                onClick: a,
                toggled: i,
                children: (0, s.jsx)("img", { src: jt.A }),
              }),
            ],
          });
      }
      function jo(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, T.wU)(),
          l = (0, ct.LU)(),
          [i, a, r] = (0, Y.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e) => {
              l.GetEventModel().jsondata.meet_steam_schedules ||
                (l.GetEventModel().jsondata.meet_steam_schedules = []),
                l.GetEventModel().jsondata.meet_steam_schedules.push({ ...e }),
                (function (e, t, o) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ schedule_id: o }),
                    ),
                  );
                })(n, t.nodes.meetsteamscheduleview, e.schedule_id),
                d();
            },
            [t, n, d, l],
          );
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, Ne.H)())
          return (0, s.jsxs)(s.Fragment, {
            children: [
              i &&
                (0, s.jsx)(It, {
                  hideModal: d,
                  inputScheduleModel: null,
                  fnUpdateSession: c,
                }),
              (0, s.jsx)(T.ff, {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: a,
                toggled: i,
                children: (0, s.jsx)("img", { src: jt.A }),
              }),
            ],
          });
      }
      var bo = o(75844),
        Co = o(90316),
        Eo = o.n(Co),
        wo = o(1805),
        Io = o(81962);
      function Mo(e) {
        const { schema: t, emoticonStore: o } = e,
          n = t.nodes.emoticon;
        (0, Tt.k3)(o),
          (0, i.c$)(
            _.useMemo(
              () => (0, Ce.sM)({ rules: [So(/:([a-zA-Z0-9_]+):$/, n, o)] }),
              [n, o],
            ),
          );
        const l = _.useMemo(
          () => [
            {
              type: n,
              component: ko,
              readProps: (e) => ({ emoticonStore: o, emoticon: e.textContent }),
            },
          ],
          [n, o],
        );
        return (0, s.jsx)(a.U, { specs: l });
      }
      function ko(e) {
        const { selected: t, emoticonStore: o, emoticon: n } = e;
        (0, Tt.k3)(o);
        if (o.BHasEmoticon(n)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return (0, s.jsx)("span", {
            style: e,
            children: (0, s.jsx)(Io.n, { emoticon: n }),
          });
        }
        return `:${n}:`;
      }
      function So(e, t, o) {
        return new Ce.fV(e, (e, s, n, l) => {
          const i = s[1];
          if (!o.BHasEmoticon(i)) return null;
          const a = t.create(null, e.schema.text(i));
          return e.tr.replaceWith(n, l, a);
        });
      }
      var Do = o(73560),
        yo = o(91254);
      function To(e) {
        const { editModel: t, href: o } = e,
          n = (0, Do.W7)(o);
        if (n) {
          const l = n.fnBBComponent(o, {
            partnerEventStore: yo.O3,
            event: t.GetEventModel(),
          });
          return (0, s.jsx)(A, {
            toolbar: (0, s.jsx)(No, {
              href: o,
              removeNode: e.removeNode,
              update: e.update,
              schema: e.schema,
            }),
            children: l,
          });
        }
        return (0, s.jsx)("a", { href: o, children: o });
      }
      function No(e) {
        const { href: t, removeNode: o, update: n, schema: l } = e;
        return (0, s.jsxs)(O, {
          onDeleteClick: o,
          children: [
            (0, s.jsx)(V, {
              onClick: () => window.open(t),
              description: (0, w.we)("#ContextMenu_OpenLinkInNewWindow"),
              children: (0, s.jsx)(N.YNO, {}),
            }),
            (0, s.jsx)(V, {
              onClick: () =>
                n((0, a.M)(l.text(t, [l.marks.link.create({ href: t })]))),
              description: (0, w.we)(
                "#EventEditor_DynamicLink_ConvertToTextLink",
              ),
              children: (0, s.jsx)(N.Rkk, {}),
            }),
          ],
        });
      }
      var Po = o(42714);
      const Uo = (0, bo.PA)(function (e) {
        const { editModel: t } = e,
          o = t.GetEventModel().loadedAllLanguages,
          n = t.GetCurEditLanguage();
        return o
          ? (0, s.jsx)(q.tH, {
              children: (0, s.jsx)(Go, { ...e, eCurrentEditLanguage: n }),
            })
          : null;
      });
      const Go = _.memo(function (e) {
        const {
            editModel: t,
            refOnInsertImage: o,
            limitBBCode: i,
            eCurrentEditLanguage: a,
          } = e,
          [r, c] = _.useState(),
          m = _.useMemo(() => (0, be.u)(i), [i]),
          [p, x] = _.useState(),
          v = (function (e, t) {
            const { nodes: o } = t.pm_schema,
              s = (function (e, t, o) {
                const s = _.useCallback(
                  (s) => {
                    const n = `^https?://${k.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                      l = s.match(n);
                    if (
                      l &&
                      l.groups.clanid == e.GetClanAccountID().toString()
                    ) {
                      const s = f.pU.GetClanImageByImageHash(
                        e.GetClanSteamID(),
                        l.groups.filename,
                      );
                      let n = s && je(s, t, o);
                      if (n) return n;
                    }
                    return "default";
                  },
                  [e, t, o],
                );
                return t ? s : void 0;
              })(e, o.image, o.video),
              n = (function (e, t) {
                const o = _.useCallback(
                  (e) => ((0, Do.yO)(e) ? t.create({ href: e }) : "default"),
                  [t],
                );
                return t ? o : void 0;
              })(0, o.dynamiclink);
            return _.useCallback(
              (...e) => {
                let t = "default";
                return (
                  s && (t = s(...e)), "default" == t && n && (t = n(...e)), t
                );
              },
              [s, n],
            );
          })(t, m);
        _.useEffect(() => {
          x(
            (function (e, t, o, s) {
              let l = t.GetDescription(o);
              return (
                (l =
                  null == l
                    ? void 0
                    : l.replace(
                        Tt.pN.GetUnvalidatedEmoticonReplaceRegex(),
                        "[emoticon]$1[/emoticon]",
                      )),
                new n.n(e, l, (e) => t.SetDescription(o, e), {
                  parser: {
                    fnProcessText: (t) =>
                      (0, Po.F)(e.pm_schema, t, e.pm_schema.marks.link, s),
                  },
                })
              );
            })(m, t, a, v),
          );
        }, [m, v, t, a]);
        const g = _.useRef(void 0);
        (0, l.i)(p, { msAutosaveTimeout: 1e3 });
        const { nodes: j, marks: b } = m.pm_schema;
        return (
          (function (e, t, o, s, n) {
            _.useEffect(() => {
              if (!n || !t) return;
              const l = (e, l) => {
                let i;
                switch (l) {
                  case h._o.k_eInsertFullImage:
                    i = t.create({ src: (0, h.fw)(e) });
                    break;
                  case h._o.k_eInsertThumbnail:
                    i = t.create({ src: (0, h.fw)(e, !0) }, null, [
                      s.create({ href: (0, h.fw)(e) }),
                    ]);
                    break;
                  case h._o.k_eInsertVideo:
                    let n;
                    e.file_type == u.bg.nn
                      ? (n = { mp4: (0, h.fw)(e) })
                      : e.file_type == u.bg.pJ && (n = { webm: (0, h.fw)(e) }),
                      n && o && (i = o.create(n));
                    break;
                  case h._o.k_eShowImageGroup:
                    break;
                  default:
                    (0, d.z_)(l, `Unhandled insert type ${l}`);
                }
                if (i) {
                  const e = n.state.tr;
                  e.selection.replaceWith(e, i), n.dispatch(e);
                }
              };
              return (
                (e.current = l),
                () => {
                  e.current == l && (e.current = void 0);
                }
              );
            }, [e, t, o, s, n]);
          })(o, j.image, j.video, b.link, r),
          (0, s.jsx)(ge, {
            editModel: t,
            imageNode: j.image,
            videoNode: j.video,
            children: (0, s.jsxs)("div", {
              className: Eo().EventDescriptionContainer,
              children: [
                (0, s.jsx)(_o, {
                  view: r,
                  schema: m.pm_schema,
                  refUpdateToolbar: g,
                  className: Eo().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                (0, s.jsx)("div", {
                  className: Eo().EventDescriptionArea,
                  children: (0, s.jsx)(wo.l, {
                    pmState: p,
                    className: (0, Me.A)(
                      Eo().EventDescriptionRichField,
                      Eo().EventDetailsBody,
                    ),
                    refOnUpdate: g,
                    refView: c,
                    panelProps: { onBlur: () => p.CommitChanges() },
                    children: (0, s.jsx)(Ao, {
                      eventSchemaConfig: m,
                      editModel: t,
                      onURLPasted: v,
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      });
      const Ao = _.memo(function (e) {
        const { eventSchemaConfig: t, editModel: o, onURLPasted: n } = e,
          { marks: l, nodes: i } = t.pm_schema;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(r.W, {
              linkMarkType: l.link,
              onURLPasted: n,
              schema: t.pm_schema,
            }),
            i.image && (0, s.jsx)(E.pw, { nodeType: i.image }),
            (0, s.jsx)(Oo, {
              schemaConfig: t,
              editModel: o,
              clanSteamID: o.GetClanSteamID(),
            }),
            (0, s.jsx)(Mo, { emoticonStore: yt.A, schema: t.pm_schema }),
          ],
        });
      });
      function Oo(e) {
        const { schemaConfig: t, editModel: o, clanSteamID: n } = e,
          l = t.pm_schema,
          r = _.useMemo(
            () =>
              (function (e) {
                return Ce.sM({ rules: [Ce.tG(/^>$/, e.nodes.quote)] });
              })(l),
            [l],
          );
        (0, i.c$)(r);
        const d = l.nodes,
          c = d.image,
          u = d.video,
          m = d.carousel,
          p = _.useCallback(
            (e, s) => ({
              schemaConfig: t,
              node: s,
              imageNodeType: c,
              videoNodeType: u,
              carouselNodeType: m,
              editModel: o,
              clanSteamID: n,
            }),
            [t, c, u, m, o, n],
          ),
          h = _.useMemo(
            () => [
              d.previewyoutube && {
                type: d.previewyoutube,
                component: Se,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: o,
                }),
              },
              c && { type: c, component: ae, readProps: (e) => p("image", e) },
              u && { type: u, component: ae, readProps: (e) => p("video", e) },
              d.meetsteamsessiongroup && {
                type: d.meetsteamsessiongroup,
                component: ut,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              d.meetsteamscheduleview && {
                type: d.meetsteamscheduleview,
                component: St,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              d.userpolls && {
                type: d.userpolls,
                component: co,
                readProps: (e) => ({ poll_id: e.attrs.poll_id }),
              },
              d.dynamiclink && {
                type: d.dynamiclink,
                component: To,
                readProps: (e) => ({
                  editModel: o,
                  href: e.attrs.href,
                  schema: t.pm_schema,
                }),
              },
              d.carousel && {
                type: d.carousel,
                component: W,
                readProps: (e) => ({
                  node: e,
                  imageNodeType: c,
                  videoNodeType: u,
                  schemaConfig: t,
                  editModel: o,
                }),
              },
            ],
            [d, c, u, o, p, t],
          );
        return (0, s.jsx)(a.U, { specs: h });
      }
    },
  },
]);
