/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3772],
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
    16722: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => ko });
      var s = o(7850),
        n = o(90286),
        l = o(26555),
        i = o(22145),
        a = o(69956),
        r = o(28106),
        d = o(81393),
        c = o(64238),
        u = o.n(c),
        m = o(90626),
        p = o(81047),
        _ = o(28954),
        h = o(27666),
        x = o(86355),
        v = o(68255),
        f = o(2805),
        g = o(36509),
        j = o(28015),
        b = o(71696),
        C = o(61859),
        E = o(27650),
        w = o(73745),
        M = o(30470),
        I = o(21134),
        k = o(94429),
        S = o(6941),
        D = o(30175),
        y = o(4869),
        T = o(86927);
      function N(e) {
        const { className: t, ...o } = e;
        return (0, s.jsx)("div", {
          className: u()(t, S.EditableComponentToolbarContainer),
          ...o,
        });
      }
      function U(e) {
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
            className: u()(
              S.InlineHoverContainer,
              d && S.WidthConstrained,
              !a && S.Hidden,
            ),
            children: t,
          })
        );
      }
      function G(e) {
        const { className: t, toolbar: o, children: n } = e,
          [l, i] = (0, T.OP)(),
          [a, r] = m.useState({ top: 0, left: 0, width: 0, height: 0 }),
          d = (0, m.useRef)(void 0);
        return (
          (0, m.useLayoutEffect)(() => {
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
              className: u()(t, S.EditableComponentInlineContainer),
              ...i,
              children: [
                (0, s.jsx)(U, { ...a, toolbar: o, visible: l && a.width > 0 }),
                n,
              ],
            }),
          })
        );
      }
      function P(e) {
        const {
          onEditClick: t,
          strEditDescription: o = (0, C.we)("#Button_Edit"),
          onDeleteClick: n,
          strDeleteDescription: l = (0, C.we)("#Button_Remove"),
          bStrongShadows: i = !1,
          children: a,
        } = e;
        return (0, s.jsxs)(A, {
          bStrongShadows: i,
          children: [
            a,
            t &&
              (0, s.jsx)(O, {
                onClick: t,
                description: o,
                children: (0, s.jsx)(y.ffu, {}),
              }),
            n &&
              (0, s.jsx)(O, {
                onClick: n,
                description: l,
                children: (0, s.jsx)(y.sED, {}),
              }),
          ],
        });
      }
      function A(e) {
        const { bStrongShadows: t, children: o } = e;
        return (0, s.jsx)("span", {
          className: u()(S.EditableComponentToolbar, t && S.StrongShadows),
          children: o,
        });
      }
      function O(e) {
        const { onClick: t, description: o, children: n } = e;
        return (0, s.jsx)(D.ff, {
          onClick: t,
          tooltip: o,
          className: S.FloatingToolbarButton,
          children: n,
        });
      }
      var B = o(12155),
        V = o(88997),
        z = o(60155),
        R = o(5068),
        F = o(64753),
        L = o(9154),
        Y = o(62490),
        H = o(84811),
        K = o(32728);
      function q(e, t) {
        const o = oe(t);
        if (o) return { node: t, nodeAttrs: o, clanImage: le(e, o) };
      }
      function Q(e) {
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
          [u, p, _] = (0, F.uD)(),
          h =
            (m.useCallback(() => {
              _(), c();
            }, [_, c]),
            l.GetClanSteamID()),
          x = m.useMemo(() => {
            let e = [];
            return (
              t.descendants((t) => {
                (t.type != o && t.type != n) || e.push(t);
              }),
              e
            );
          }, [o, n, t]),
          v = m.useCallback((e) => d((0, a.M)(e)), [d]),
          f = "true" === t.attrs.autoadvance,
          [g, j] = $(v, {
            autoAdvance: f,
            clanSteamID: h,
            imageNodeType: o,
            videoNodeType: n,
            carouselNodeType: t.type,
          }),
          b = m.useCallback(() => {
            g(x);
          }, [g, x]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            j,
            (0, s.jsxs)(N, {
              children: [
                (0, s.jsx)(P, {
                  onDeleteClick: r,
                  strDeleteDescription: (0, C.we)(
                    "#EventEditor_CarouselEditor_RemoveCarousel",
                  ),
                  onEditClick: b,
                  strEditDescription: (0, C.we)(
                    "#EventEditor_CarouselEditor_EditCarousel",
                  ),
                }),
                (0, s.jsx)(H.tH, {
                  children: (0, s.jsx)(k.Bm, {
                    strTag: "carousel",
                    args: {},
                    rawargs: "",
                    event: l.GetEventModel(),
                    children: x.map((e, t) =>
                      (0, s.jsx)(
                        ne,
                        {
                          node: e,
                          nodeAttrs: oe(e),
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
      function $(e, t) {
        const o = t.carouselNodeType,
          [n, l] = m.useState(void 0),
          i = t.clanSteamID,
          a = m.useCallback(
            (e) => {
              l(e.map((e) => q(i, e)).filter(Boolean));
            },
            [i],
          ),
          r = m.useCallback(() => l(void 0), []),
          d = m.useCallback(
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
          (0, s.jsx)(L.EN, {
            active: void 0 !== n,
            children: (0, s.jsx)(J, {
              ...t,
              images: n,
              onCarouselImagesSelected: d,
              hideModal: r,
            }),
          }),
        ];
      }
      function W(e) {
        const { nodeAttrs: t } = e;
        return "image" == t.type ? t.attrs.src : t.attrs.mp4 || t.attrs.webm;
      }
      function J(e) {
        var t;
        const {
            hideModal: o,
            images: n,
            onCarouselImagesSelected: l,
            clanSteamID: i,
            imageNodeType: a,
            videoNodeType: r,
          } = e,
          [d, c] = m.useState(n),
          [u, p] = m.useState(
            null !== (t = e.autoAdvance) && void 0 !== t && t,
          ),
          _ = m.useCallback(
            (e, t) => {
              const o = q(i, t.create(e));
              if (!o)
                throw `Couldn't parse image ${t.name} - ${JSON.stringify(e)}`;
              c((e) => {
                const t = W(o);
                return e.find((e) => W(e) == t) ? e : [...e, o];
              });
            },
            [i],
          ),
          h = m.useCallback(() => {
            l(u, d), o();
          }, [l, o, u, d]),
          x = m.useCallback((e) => {
            e.destination &&
              c((t) => Y.yY(t.slice(), e.source.index, e.destination.index));
          }, []),
          { showInsertImageModal: f, imageModal: g } = ie({
            clanSteamID: i,
            imageNodeType: a,
            videoNodeType: r,
            onItemSelected: _,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            g,
            (0, s.jsxs)(L.mt, {
              active: !0,
              onDismiss: o,
              children: [
                (0, s.jsx)(v.Y9, {
                  children: (0, C.we)(
                    "#EventEditor_CarouselEditor_EditCarousel",
                  ),
                }),
                (0, s.jsxs)(v.nB, {
                  children: [
                    (0, s.jsx)(v.RF, {
                      label: (0, C.we)(
                        "#EventEditor_CarouselEditor_AutoAdvance",
                      ),
                      checked: u,
                      onChange: p,
                    }),
                    (0, s.jsx)(K.JY, {
                      onDragEnd: x,
                      children: (0, s.jsx)(K.gL, {
                        droppableId: "droppable",
                        direction: "horizontal",
                        children: (e) =>
                          (0, s.jsxs)("div", {
                            className: R.CarouselList,
                            ...e.droppableProps,
                            ref: e.innerRef,
                            children: [
                              d.map((e, t) =>
                                (0, s.jsx)(
                                  H.tH,
                                  {
                                    children: (0, s.jsx)(K.sx, {
                                      draggableId: W(e),
                                      index: t,
                                      children: (o, n, l) =>
                                        (0, s.jsx)(X, {
                                          draggableProvided: o,
                                          image: e,
                                          setSelectedImages: c,
                                          iImage: t,
                                          cImages: d.length,
                                        }),
                                    }),
                                  },
                                  W(e),
                                ),
                              ),
                              e.placeholder,
                            ],
                          }),
                      }),
                    }),
                    (0, s.jsx)(v.xh, {
                      bottomSeparator: "none",
                      label: (0, C.we)(
                        "#EventEditor_CarouselEditor_AddAnotherItem",
                      ),
                      className: R.AddButton,
                      onClick: f,
                      children: (0, s.jsx)(y.OMN, { className: R.PlusIcon }),
                    }),
                  ],
                }),
                (0, s.jsx)(v.wi, {
                  children: (0, s.jsx)(v.CB, { onCancel: o, onOK: h }),
                }),
              ],
            }),
          ],
        });
      }
      function X(e) {
        const {
            draggableProvided: t,
            image: o,
            setSelectedImages: n,
            iImage: l,
            cImages: i,
          } = e,
          a = m.useCallback(() => {
            n((e) => e.filter((e) => e != o));
          }, [o, n]);
        return (0, s.jsx)("div", {
          className: u()(R.ListItem, R.DraggableItem),
          ref: t.innerRef,
          ...t.draggableProps,
          ...t.dragHandleProps,
          children: (0, s.jsxs)("div", {
            className: R.ImagePreview,
            children: [
              (0, s.jsx)("img", {
                src: h.z.ReplacementTokenToClanImageURL(o.node.attrs.src),
              }),
              (0, s.jsx)("div", {
                className: R.Controls,
                children: (0, s.jsx)("div", {
                  className: R.Control,
                  children: (0, s.jsx)(D.ff, {
                    onClick: a,
                    className: R.Button,
                    children: (0, s.jsx)(y.sED, {}),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function Z(e) {
        const {
            schemaConfig: t,
            node: o,
            editModel: n,
            imageNodeType: l,
            videoNodeType: i,
            carouselNodeType: r,
            clanSteamID: d,
            setAttrs: c,
            focusView: p,
            removeNode: _,
            update: h,
            selected: x,
          } = e,
          [v, f, g] = (0, w.uD)(),
          j = oe(o);
        let b = (0, s.jsx)(ne, {
          schemaConfig: t,
          event: n.GetEventModel(),
          node: o,
          nodeAttrs: j,
        });
        const C = m.useCallback(() => {
            p(), g();
          }, [p, g]),
          E = m.useCallback((e) => h((0, a.M)(e)), [h]),
          [M, k] = $(E, {
            clanSteamID: d,
            imageNodeType: l,
            videoNodeType: i,
            carouselNodeType: r,
          }),
          S = m.useCallback(() => {
            M([o]);
          }, [o, M]),
          D = { createCarousel: r ? S : void 0, src: se(j) };
        let y = u()(I.ClanImageContainer, x && I.Selected);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            v &&
              (0, s.jsx)(ae, {
                bIsEdit: !0,
                nodeAttrs: j,
                hideModal: C,
                imageNodeType: l,
                videoNodeType: i,
                clanSteamID: d,
                onItemSelected: c,
              }),
            k,
            (0, s.jsx)(G, {
              className: y,
              toolbar: (0, s.jsx)(ee, {
                showModal: f,
                removeNode: _,
                contextMenuProps: D,
              }),
              children: b,
            }),
          ],
        });
      }
      function ee(e) {
        const { showModal: t, removeNode: o, contextMenuProps: n } = e,
          l = m.useCallback(
            (e) => {
              (0, V.lX)((0, s.jsx)(te, { ...n }), e, {
                bPreferPopTop: !1,
                bPreferPopLeft: !0,
              });
            },
            [n],
          );
        return (0, s.jsx)(P, {
          onEditClick: t,
          onDeleteClick: o,
          children: (0, s.jsx)(O, {
            onClick: l,
            description: (0, C.we)("#ActionButtonLabelContextMenu"),
            children: (0, s.jsx)(B.h28, {}),
          }),
        });
      }
      function te(e) {
        const { createCarousel: t, src: o } = e,
          n = m.useCallback(() => {
            window.open(o);
          }, [o]);
        return (0, s.jsxs)(z.tz, {
          children: [
            t &&
              (0, s.jsx)(z.kt, {
                onSelected: t,
                children: (0, C.we)(
                  "#EventEditor_CarouselEditor_CreateACarousel",
                ),
              }),
            (0, s.jsx)(z.kt, {
              onSelected: n,
              children: (0, C.we)("#EventEditor_ImageEdit_PreviewImage"),
            }),
          ],
        });
      }
      function oe(e) {
        const { type: t, attrs: o } = e;
        return "image" == t.name
          ? { type: "image", attrs: o }
          : "video" == t.name
            ? { type: "video", attrs: o }
            : void 0;
      }
      function se(e) {
        return "image" == e.type
          ? e.attrs.src
          : "video" == e.type
            ? e.attrs.mp4 || e.attrs.webm
            : void 0;
      }
      function ne(e) {
        const { schemaConfig: t, event: o, node: n, nodeAttrs: l } = e,
          { type: i, attrs: a } = l,
          r = t.ConvertAttrToBBCodeArgs(n, a);
        return "image" == i
          ? (0, s.jsx)(k.Bm, {
              strTag: "img",
              args: r,
              rawargs: "",
              event: o,
              showErrorInfo: !0,
            })
          : "video" == i
            ? (0, s.jsx)(
                k.Bm,
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
      function le(e, t) {
        const { type: o, attrs: s } = t;
        let n;
        if (
          ("image" == o ? (n = s.src) : "video" == o && (n = s.mp4 || s.webm),
          n)
        ) {
          const [t] = h.z.ExtractHashFromBBCodeURL(n);
          return t && x.pU.GetClanImageByImageHash(e, t);
        }
      }
      function ie(e) {
        const {
            clanSteamID: t,
            imageNodeType: o,
            videoNodeType: n,
            onItemSelected: l,
            onHideModal: i,
          } = e,
          [a, r] = m.useState(),
          d = m.useCallback(() => {
            r(void 0), i && i();
          }, [i]);
        return {
          showInsertImageModal: m.useCallback(() => {
            r({ type: "image", attrs: { src: "" } });
          }, []),
          showInsertVideoModal: m.useCallback(() => {
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
            (0, s.jsx)(ae, {
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
      function ae(e) {
        const {
            bIsEdit: t = !1,
            nodeAttrs: o,
            hideModal: n,
            clanSteamID: l,
            onItemSelected: i,
            imageNodeType: a,
            videoNodeType: r,
          } = e,
          { type: c, attrs: p } = o,
          _ = (function (e, t) {
            return m.useMemo(() => le(e, t), [e, t.type, t.attrs]);
          })(l, o),
          [h, x] = m.useState(() =>
            _ ||
            ("image" == o.type && !o.attrs.src) ||
            ("video" == o.type && !o.attrs.mp4 && !o.attrs.webm)
              ? "uploaded"
              : "hotlink",
          ),
          f = m.useCallback(
            (e) => {
              i({ src: e }, a), n();
            },
            [i, n, a],
          ),
          g = m.useCallback(
            (e) => {
              i({ ...p, ...e }, r), n();
            },
            [p, i, n, r],
          ),
          b = m.useId();
        let E,
          w = null;
        if ("image" == c)
          (w = (0, s.jsx)(re, {
            active: "hotlink" == h,
            bIsEdit: t,
            hideModal: n,
            onImageSelected: f,
            src: p.src,
          })),
            (E = t
              ? (0, C.we)("#EventEditor_ReplaceImage_Title")
              : (0, C.we)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != c) return (0, d.z_)(c, "Unhandled type"), null;
          (w = (0, s.jsx)(de, {
            active: "hotlink" == h,
            bIsEdit: t,
            hideModal: n,
            attrs: p,
            setAttrs: i,
          })),
            (E = (0, C.we)("#EventEditor_EditVideo_Title"));
        }
        return (0, s.jsxs)(j.mt, {
          active: !0,
          onDismiss: n,
          className: I.ClanImageModalContent,
          children: [
            (0, s.jsx)(v.Y9, { id: b, children: E }),
            (0, s.jsxs)(v.zW, {
              labelId: b,
              value: h,
              onChange: (e) => x(e),
              children: [
                (0, s.jsx)(v.a, { value: "uploaded", children: "Uploaded" }),
                (0, s.jsx)(v.a, { value: "hotlink", children: "Enter URL" }),
              ],
            }),
            (0, s.jsx)("div", {
              className: u()(I.ClanImageModalMode, "uploaded" == h && I.Active),
              children: (0, s.jsx)(ce, {
                bIsEdit: t,
                hideModal: n,
                onImageSelected: f,
                onVideoSelected: r && g,
                clanSteamID: l,
                selectedImage: _,
              }),
            }),
            (0, s.jsx)("div", {
              className: u()(I.ClanImageModalMode, "hotlink" == h && I.Active),
              children: w,
            }),
          ],
        });
      }
      function re(e) {
        const {
            active: t,
            bIsEdit: o,
            hideModal: n,
            onImageSelected: l,
            src: i,
          } = e,
          [a, r] = m.useState(i),
          d = m.useCallback((e) => r(e.currentTarget.value), []),
          c = o
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          u = m.useRef(void 0);
        return (
          m.useEffect(() => {
            t && u.current.Focus();
          }, [t]),
          (0, s.jsxs)(v.lV, {
            onSubmit: () => l(a),
            children: [
              (0, s.jsx)(v.nB, {
                children: (0, s.jsx)(v.pd, {
                  ref: u,
                  value: a,
                  onChange: d,
                  label: (0, C.we)("#EventEditor_InsertImage_URL"),
                }),
              }),
              (0, s.jsx)(v.CB, {
                onCancel: n,
                strOKText: c,
                bOKDisabled: !a || a == i,
              }),
            ],
          })
        );
      }
      function de(e) {
        const {
            active: t,
            bIsEdit: o,
            hideModal: n,
            attrs: l,
            setAttrs: i,
          } = e,
          [a, r] = m.useState(l.mp4),
          [d, c] = m.useState(l.webm),
          [u, p] = m.useState(l.poster),
          [_, h] = m.useState(!!l.autoplay),
          [x, f] = m.useState(!!l.controls),
          g = m.useRef(void 0);
        m.useEffect(() => {
          t && g.current.Focus();
        }, [t]);
        return (0, s.jsxs)(v.lV, {
          onSubmit: (e) => {
            i({
              ...l,
              mp4: a || void 0,
              webm: d || void 0,
              poster: u || void 0,
              autoplay: _,
              controls: x,
            }),
              n();
          },
          children: [
            (0, s.jsxs)(v.nB, {
              children: [
                (0, s.jsx)(v.pd, {
                  ref: g,
                  value: a,
                  onChange: (e) => r(e.currentTarget.value),
                  label: (0, C.we)("#EventEditor_InsertVideo_InputMP4"),
                }),
                (0, s.jsx)(v.pd, {
                  value: d,
                  onChange: (e) => c(e.currentTarget.value),
                  label: (0, C.we)("#EventEditor_InsertVideo_InputWebM"),
                }),
                (0, s.jsx)(v.pd, {
                  value: u,
                  onChange: (e) => p(e.currentTarget.value),
                  label: (0, C.we)("#EventEditor_InsertVideo_InputPoster"),
                }),
                (0, s.jsx)(v.Yh, {
                  checked: _,
                  onChange: h,
                  label: (0, C.we)("#EventEditor_InsertVideo_InputAutoplay"),
                }),
                (0, s.jsx)(v.Yh, {
                  checked: x,
                  onChange: f,
                  label: (0, C.we)(
                    "#EventEditor_InsertVideo_InputShowControls",
                  ),
                }),
              ],
            }),
            (0, s.jsx)(v.CB, {
              onCancel: n,
              strOKText: (0, C.we)("#EventEditor_EditVideo_Title"),
              bOKDisabled: !a && !d,
            }),
          ],
        });
      }
      function ce(e) {
        const {
            bIsEdit: t,
            hideModal: o,
            onImageSelected: n,
            onVideoSelected: l,
            clanSteamID: i,
          } = e,
          [a, r] = m.useState(""),
          [d, c] = m.useState(e.selectedImage),
          u = t
            ? (0, C.we)("#EventEditor_ReplaceImage_Title")
            : (0, C.we)("#EventEditor_InsertImage_Title"),
          _ = m.useCallback(
            (e) => {
              switch (e.file_type) {
                case 4:
                  l && l({ mp4: (0, p.fw)(e) });
                  break;
                case 5:
                  l && l({ webm: (0, p.fw)(e) });
                  break;
                default:
                  n((0, p.fw)(e));
              }
            },
            [n, l],
          ),
          h = m.useCallback(
            (e, t) => {
              c(e), t && _(e);
            },
            [_],
          );
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(v.lV, {
            onSubmit: () => d && _(d),
            className: I.ClanImageGridForm,
            children: [
              (0, s.jsx)(g.g, { fnSetImageSearch: r }),
              (0, s.jsx)("div", {
                className: I.ClanImageGridContainer,
                children: (0, s.jsx)(f.ge, {
                  clanAccountID: i.GetAccountID(),
                  fileNameSearch: a,
                  onImageSelected: h,
                  selectedItem: d,
                }),
              }),
              (0, s.jsx)(v.wi, {
                children: (0, s.jsx)(v.CB, {
                  onCancel: o,
                  strOKText: u,
                  bOKDisabled: !d || d == e.selectedImage,
                }),
              }),
            ],
          }),
        });
      }
      function ue(e) {
        const { editModel: t, imageNode: o, videoNode: n, children: l } = e,
          i = m.useCallback(
            async (e) => {
              const s = t.GetClanSteamID(),
                l = new _.VE(s, null);
              if (!(await l.AddImage(e, t.GetCurEditLanguage())))
                throw "Error processing image upload";
              const i = await l.UploadAllImages();
              if (!i || 1 != Object.values(i).length)
                throw "Error uploading image";
              const a = Object.values(i)[0];
              if (!a.bSuccess || 1 != a.uploadResult.success)
                throw a.uploadResult.message;
              const r = me(
                x.pU.GetClanImageByImageHash(s, a.uploadResult.image_hash),
                o,
                n,
              );
              return (
                r.type == o &&
                  (await (0, E.DB)(
                    h.z.ReplacementTokenToClanImageURL(r.attrs.src),
                  )),
                r
              );
            },
            [t, o, n],
          );
        return o
          ? (0, s.jsx)(b.Xv, {
              ProcessFileUpload: i,
              bAllowImageHotLinking: !0,
              children: l,
            })
          : l;
      }
      function me(e, t, o) {
        const s = (0, p.fw)(e);
        switch (e.file_type) {
          case 4:
            if (!o) throw "Video unsupported";
            return o.create({ mp4: s });
          case 5:
            if (!o) throw "Video unsupported";
            return o.create({ webm: s });
          default:
            return t.create({ src: s });
        }
      }
      var pe = o(96640),
        _e = o(79216);
      var he = o(70995),
        xe = o(74410),
        ve = o(72421),
        fe = o(52038),
        ge = o(63226);
      function je(e) {
        const {
            videoID: t,
            align: o,
            editModel: n,
            selected: l,
            setAttrs: i,
            focusView: a,
          } = e,
          [r, d, c] = (0, w.uD)(),
          u = m.useCallback(() => {
            c(), a();
          }, [c, a]),
          p = m.useCallback(
            (e, t) => {
              i({ videoID: e, align: t }), u();
            },
            [i, u],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            r &&
              (0, s.jsx)(be, {
                videoID: t,
                align: o,
                bEditing: !0,
                hideModal: u,
                onSave: p,
              }),
            (0, s.jsxs)(N, {
              className: (0, fe.A)(ge.PreviewYoutubeEditor, l && ge.Selected),
              children: [
                (0, s.jsx)(P, {
                  onEditClick: d,
                  onDeleteClick: e.removeNode,
                  bStrongShadows: !0,
                }),
                l && (0, s.jsx)("div", { className: ge.SelectionOverlay }),
                (0, s.jsx)(k.Bm, {
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
      function be(e) {
        const {
            videoID: t = "",
            align: o = "",
            bEditing: n = !1,
            hideModal: l,
            onSave: i,
          } = e,
          [a, r] = m.useState(o || xe.V2.full),
          [d, c] = m.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, p] = m.useState(void 0),
          _ = m.useCallback(() => {
            const { strVideoID: e } = (0, he.XU)(d);
            return (
              e ? i(e, a) : p((0, C.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [d, a, i]),
          h = m.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return (0, s.jsx)(L.EN, {
          active: !0,
          children: (0, s.jsxs)(ve._, {
            strTitle: (0, C.we)("#EventEditor_InsertYouTube"),
            closeModal: l,
            strOKText: n
              ? (0, C.we)("#Button_Save")
              : (0, C.we)("#EventEditor_InsertYouTube"),
            onOK: _,
            children: [
              u && (0, s.jsx)("div", { className: ge.Error, children: u }),
              (0, s.jsx)(v.pd, {
                label: (0, C.we)("#EventEditor_InsertYouTube_URL"),
                placeholder: (0, C.we)("#EventEditor_InsertYouTube_Placholder"),
                value: d,
                ref: h,
                onChange: (e) => c(e.currentTarget.value),
              }),
              (0, s.jsxs)(v.o1, {
                label: (0, C.we)("#EventEditor_InsertYouTube_Position"),
                children: [
                  (0, s.jsx)(v.Od, {
                    checked: a == xe.V2.left,
                    onChange: (e) => e && r(xe.V2.left),
                    label: (0, C.we)("#EventEditor_InsertYouTube_Left"),
                  }),
                  (0, s.jsx)(v.Od, {
                    checked: a == xe.V2.right,
                    onChange: (e) => e && r(xe.V2.right),
                    label: (0, C.we)("#EventEditor_InsertYouTube_Right"),
                  }),
                  (0, s.jsx)(v.Od, {
                    checked: a == xe.V2.full,
                    onChange: (e) => e && r(xe.V2.full),
                    label: (0, C.we)("#EventEditor_InsertYouTube_Full"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Ce = o(69001),
        Ee = o(25888),
        we = o(65946),
        Me = o(26161),
        Ie = o(74718),
        ke = o(78395),
        Se = o(21869),
        De = o(1397),
        ye = o.n(De),
        Te = o(63556),
        Ne = o(44165),
        Ue = o(95695),
        Ge = o(99637),
        Pe = o(91675),
        Ae = o(14771),
        Oe = o(87937),
        Be = o(61819),
        Ve = o(88942),
        ze = o(78327),
        Re = o(41735),
        Fe = o.n(Re),
        Le = o(26408);
      function Ye(e) {
        const { hideModal: t, fnUpdateSession: o } = e,
          [n, l] = (0, m.useState)(() => Xe(!0, null)),
          [i, a] = (0, m.useState)(() => Ze(!0, null)),
          [r] = (0, we.q3)(() => [i.location_type]);
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)("#MeetSteam_create_title"),
            onOK: () => o(n, i),
            closeModal: () => {
              a(Ze(!0, null)), l(Xe(!0, null)), t();
            },
            bOKDisabled: null == !r,
            children: (0, s.jsxs)("div", {
              className: ye().DialogCtn,
              children: [
                (0, s.jsx)(qe, { group: n, fnSetGroup: l }),
                (0, s.jsx)($e, { session: i, fnSetSession: a }),
              ],
            }),
          }),
        });
      }
      function He(e) {
        const { hideModal: t, groupInput: o, fnUpdateGroupSession: n } = e,
          [l, i] = (0, m.useState)(() => Xe(!1, o));
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)("#MeetSteam_edit_title"),
            onOK: () => {
              n(l), t();
            },
            onCancel: () => {
              i(Xe(!1, o)), t();
            },
            children: (0, s.jsx)("div", {
              className: ye().DialogCtn,
              children: (0, s.jsx)(qe, { group: l, fnSetGroup: i }),
            }),
          }),
        });
      }
      function Ke(e) {
        const {
            bCreate: t,
            hideModal: o,
            sessionInput: n,
            fnUpdateSession: l,
          } = e,
          [i, a] = (0, m.useState)(() => Ze(t, n)),
          [r] = (0, we.q3)(() => [i.location_type]);
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)(
              t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
            ),
            onOK: () => {
              l(i), o();
            },
            onCancel: () => {
              a(Ze(t, n)), o();
            },
            bOKDisabled: !r,
            children: (0, s.jsx)("div", {
              className: ye().DialogCtn,
              children: (0, s.jsx)($e, { session: i, fnSetSession: a }),
            }),
          }),
        });
      }
      function qe(e) {
        const { group: t, fnSetGroup: o } = e,
          n = (0, Te.E)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v.pd, {
              type: "text",
              label: (0, C.we)("#MeetSteam_edit_session_name"),
              value: C.NT.Get(t.localized_session_title, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_session_title = C.NT.Set(
                  s.localized_session_title,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(v.JU, {
              children: (0, C.we)("#MeetSteam_edit_session_desc"),
            }),
            (0, s.jsx)("textarea", {
              className: (0, fe.A)(
                "DialogTextInputBase",
                ye().EventDescriptionField,
              ),
              value: C.NT.Get(t.localized_session_description, n),
              rows: 5,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_session_description = C.NT.Set(
                  s.localized_session_description,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(v.pd, {
              type: "text",
              label: "Intended Audience",
              tooltip:
                "A short descriptions for whom then event is designed for to help partners self select",
              value: C.NT.Get(t.localized_intended_audience, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_intended_audience = C.NT.Set(
                  s.localized_intended_audience,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsxs)(v.JU, {
              children: [
                "FAQ ",
                (0, s.jsx)(Le.o, {
                  tooltip:
                    "Optional FAQ section which appears in the pop-up display and hidden by default",
                }),
              ],
            }),
            (0, s.jsx)("textarea", {
              className: (0, fe.A)(
                "DialogTextInputBase",
                ye().EventDescriptionField,
              ),
              value: C.NT.Get(t.localized_sesssion_faq, n),
              rows: 5,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_sesssion_faq = C.NT.Set(
                  s.localized_sesssion_faq,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(v.Yh, {
              checked: t.ask_registration_question,
              onChange: (e) => {
                const s = { ...t };
                (s.ask_registration_question = e), o(s);
              },
              label:
                "Ask partner to tell us what they want to learn from the sessions",
            }),
            (0, s.jsx)(Qe, { ...e }),
          ],
        });
      }
      function Qe(e) {
        var t;
        const { group: o, fnSetGroup: n } = e,
          [l, i] = (0, m.useState)(
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
                    v.pd,
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
                (0, s.jsx)(v.$n, {
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
                  (0, s.jsx)(v.$n, {
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
          : (0, s.jsx)(v.Yh, {
              checked: !1,
              onChange: i,
              label: "Change Visibility Options",
            });
      }
      function $e(e) {
        const { session: t, fnSetSession: o } = e,
          [n, l, i, a, r, d] = (0, we.q3)(() => [
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
          p = "in_person" === r ? (null != d ? d : Ie.hh) : m;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(Je, {
              startTime: t.rtime_start,
              location_type: r,
              fnUpdateLocationAndTZ: (e, s) =>
                o({ ...t, location_type: e, in_person_time_zone: s }),
              in_person_time_zone: d,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(Ge.K, {
              strDescription: (0, C.we)("#MeetSteam_edit_start"),
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => n,
              fnSetTimeToUpdate: (e) =>
                o({ ...t, rtime_start: e, rtime_end: e + Ae.Kp.PerMinute * u }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(v.pd, {
              type: "number",
              min: 0,
              label: (0, C.we)("#MeetSteam_edit_duration"),
              onChange: (e) => {
                const s = Number.parseInt(e.currentTarget.value);
                o({ ...t, rtime_end: t.rtime_start + Ae.Kp.PerMinute * s });
              },
              value: u,
            }),
            (0, s.jsx)(We, {
              rtime_start: n,
              rtime_end: l,
              sDisplayTimeZone: p,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsxs)("div", {
              className: ye().ParticipantRow,
              children: [
                (0, s.jsx)(v.pd, {
                  type: "number",
                  value: i,
                  label: (0, C.we)("#MeetSteam_edit_max_capacity"),
                  min: 1,
                  onChange: (e) =>
                    o({
                      ...t,
                      max_capacity: Number.parseInt(e.currentTarget.value),
                    }),
                }),
                (0, s.jsx)(v.m, {
                  controlled: !0,
                  label: (0, C.we)("#MeetSteam_edit_guest_count"),
                  tooltip: (0, C.we)("#MeetSteam_edit_guest_count_ttip"),
                  rgOptions: c,
                  selectedOption: a,
                  onChange: (e) => o({ ...t, max_per_team: e.data }),
                }),
              ],
            }),
          ],
        });
      }
      function We(e) {
        const { rtime_start: t, rtime_end: o, sDisplayTimeZone: n } = e,
          l = Oe.unix(t).tz(Ie.hh),
          i = Oe.unix(t).tz(n),
          a = i.utcOffset() - l.utcOffset(),
          r = Oe.unix(o).tz(Ie.hh),
          d = Oe.unix(o).tz(n),
          c = d.utcOffset() - r.utcOffset();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, C.we)("#MeetSteam_edit_displayed_start"),
                ": ",
                (0, Pe.P0)(i.unix() + 60 * a, !1, i.format("z")),
                " ",
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, C.we)("#MeetSteam_edit_displayed_end"),
                ": ",
                (0, Pe.P0)(d.unix() + 60 * c, !1, d.format("z")),
                " ",
              ],
            }),
          ],
        });
      }
      function Je(e) {
        const {
            startTime: t,
            location_type: o,
            fnUpdateLocationAndTZ: n,
            in_person_time_zone: l,
          } = e,
          i = (function (e) {
            const t = (0, Ve.I)({
              queryKey: ["timezone", e],
              queryFn: async () => {
                const t = `${ze.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  o = { reference_time: e },
                  s = await Fe().get(t, { params: o });
                return null == s ? void 0 : s.data.timezones;
              },
            });
            return t.isSuccess ? t.data : [];
          })(t),
          a = m.useMemo(
            () => i.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [i],
          ),
          r = (e) => {
            var t;
            return null !== (t = a.get(e)) && void 0 !== t ? t : e;
          },
          d = m.useId(),
          c = m.useId();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              id: d,
              className: Ue.EventEditorTextTitle,
              children: (0, C.we)("#MeetSteam_edit_date_display_title"),
            }),
            (0, s.jsx)("div", {
              id: c,
              className: Ue.EventEditorTextSubTitle,
              children: (0, C.we)("#MeetSteam_edit_date_display_desc"),
            }),
            (0, s.jsxs)(v.zW, {
              labelId: d,
              descriptionId: c,
              value: o,
              onChange: (e) => n(e, l),
              children: [
                (0, s.jsx)(v.a, {
                  value: "in_person",
                  children: (0, C.we)("#MeetSteam_edit_date_display_in_person"),
                }),
                (0, s.jsx)(v.a, {
                  value: "virtual",
                  children: (0, C.we)("#MeetSteam_edit_date_display_virtual"),
                }),
              ],
            }),
            "in_person" === o &&
              (0, s.jsx)(Be.Ay, {
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
                  : { label: r(Ie.hh), value: Ie.hh },
                onChange: (e) => n(o, e.value),
              }),
          ],
        });
      }
      function Xe(e, t) {
        if (e) {
          const e = Ee.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, Y.$Y)([], 31, null),
            localized_session_description: (0, Y.$Y)([], 31, null),
            localized_sesssion_faq: (0, Y.$Y)([], 31, null),
            localized_intended_audience: (0, Y.$Y)([], 31, null),
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
      function Ze(e, t) {
        if (e) {
          const e = Ne.HD.GetTimeNowWithOverride(),
            t = Ee.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            o =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let s = 0;
          do {
            s = Math.floor(1e4 + 9e4 * Math.random());
          } while (o && o.findIndex((e) => e.id == s) >= 0);
          const n = 3600 * Math.ceil(e / 3600);
          return {
            id: s,
            rtime_start: n + Ae.Kp.PerDay,
            rtime_end: n + Ae.Kp.PerDay + Ae.Kp.PerHour,
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
      function et(e) {
        const t = Ee.mh.GetEditModel();
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
      function tt(e) {
        const t = Ee.mh.GetEditModel();
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
      function ot(e) {
        const t = Ee.mh.GetEditModel();
        for (
          let o = 0;
          o < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++o
        ) {
          const s = t.GetEventModel().jsondata.meet_steam_schedules[o];
          if (s.schedule_id == e) return { schedule: s, scheduleIndex: o };
        }
        return (
          "dev" == M.TS.WEB_UNIVERSE &&
            console.log(`Error: HelperFindMeetSteamSchedule ${e} is missing`),
          null
        );
      }
      var st = o(33561);
      function nt(e) {
        var t;
        const { focusView: o, removeNode: n, group_id: l } = e,
          i = (0, st.LU)(),
          a = (0, we.q3)(() => {
            var e;
            return null ===
              (e = i.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == l);
          }),
          [r, d, c] = (0, w.uD)(),
          u = m.useCallback(() => {
            o(), c();
          }, [o, c]),
          [p, _, h] = (0, w.uD)(),
          x = m.useCallback(() => {
            o(), h();
          }, [o, h]);
        return a && i.GetClanAccountID() == (0, Me.H)()
          ? (0, s.jsxs)("div", {
              className: ye().EditorCtn,
              children: [
                (0, s.jsx)(lt, { groupData: a, focusView: o }),
                (0, s.jsxs)("div", {
                  className: ye().controls,
                  children: [
                    (0, s.jsx)(D.ff, {
                      onClick: d,
                      tooltip: (0, C.we)("#Button_Edit"),
                      children: (0, s.jsx)(y.ffu, {}),
                    }),
                    (0, s.jsx)(D.ff, {
                      onClick: _,
                      tooltip: (0, C.we)("#Button_Delete"),
                      children: (0, s.jsx)(y.sED, {}),
                    }),
                    Boolean(
                      (null === (t = a.group_visibility_tokens) || void 0 === t
                        ? void 0
                        : t.length) > 0,
                    ) &&
                      (0, s.jsx)(D.ff, {
                        onClick: () => {},
                        tooltip:
                          "Limited visibility to those with the appropriate URLs",
                        children: (0, s.jsx)(B.WLA, {}),
                      }),
                    Boolean(a.ask_registration_question) &&
                      (0, s.jsx)(D.ff, {
                        onClick: () => {},
                        tooltip:
                          "Will ask partner to provides questions for us for this session.",
                        children: (0, s.jsx)(B.vfN, {}),
                      }),
                  ],
                }),
                Boolean(r) &&
                  (0, s.jsx)(He, {
                    hideModal: u,
                    groupInput: a,
                    fnUpdateGroupSession: (e) => {
                      const { groupIndex: t } = tt(e.group_id),
                        o = Ee.mh.GetEditModel();
                      (o.GetEventModel().jsondata.meet_steam_groups[t] = e),
                        o.SetDirty(Ce.IQ.description);
                    },
                  }),
                Boolean(p) &&
                  (0, s.jsx)(Se.E, {
                    active: !0,
                    children: (0, s.jsx)(ke.o0, {
                      strTitle: (0, C.we)("#Button_Delete"),
                      strDescription: (0, C.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { groupIndex: e } = tt(a.group_id),
                          t = Ee.mh.GetEditModel(),
                          o = [...t.GetEventModel().jsondata.meet_steam_groups];
                        o.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_groups = o),
                          t.SetDirty(Ce.IQ.description),
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
      function lt(e) {
        const { groupData: t, focusView: o } = e,
          n = (0, we.q3)(() => t.sessions || []),
          [l, i, a] = (0, w.uD)(),
          r = m.useCallback(() => {
            o(), a();
          }, [o, a]);
        return t
          ? (0, s.jsxs)(Ie.jr, {
              groupData: t,
              children: [
                n.map((e, l) =>
                  (0, s.jsx)(
                    it,
                    {
                      focusView: o,
                      sessionID: e.id,
                      bShowOR: l + 1 < n.length,
                    },
                    "timecol_" + t.group_id + "_" + e.id,
                  ),
                ),
                (0, s.jsx)(D.ff, {
                  className: ye().AddNew,
                  onClick: i,
                  tooltip: (0, C.we)("#MeetSteam_add"),
                  children: (0, s.jsx)(y.OMN, {}),
                }),
                l &&
                  (0, s.jsx)(Ke, {
                    bCreate: !0,
                    hideModal: r,
                    fnUpdateSession: (e) => {
                      const o = Ee.mh.GetEditModel(),
                        s = [...t.sessions, e];
                      s.sort((e, t) => e.rtime_start - t.rtime_start),
                        (t.sessions = s),
                        o.SetDirty(Ce.IQ.description);
                    },
                  }),
              ],
            })
          : null;
      }
      function it(e) {
        const { sessionID: t, bShowOR: o, focusView: n } = e,
          [l, i] = (0, w.OP)(),
          a = (0, we.q3)(() => {
            const { groupIndex: e, sessionIndex: o } = et(t);
            return Ee.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[o];
          }),
          [r, d, c] = (0, w.uD)(),
          u = m.useCallback(() => {
            n(), c();
          }, [n, c]),
          [p, _, h] = (0, w.uD)(),
          x = m.useCallback(() => {
            n(), h();
          }, [n, h]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: ye().Column,
              ...i,
              children: [
                (0, s.jsx)(Ie.Tn, { sessionData: a }),
                Boolean(l) &&
                  (0, s.jsxs)("div", {
                    className: ye().controls,
                    children: [
                      (0, s.jsx)(D.ff, {
                        onClick: d,
                        tooltip: (0, C.we)("#Button_Edit"),
                        children: (0, s.jsx)(y.ffu, {}),
                      }),
                      (0, s.jsx)(D.ff, {
                        onClick: _,
                        tooltip: (0, C.we)("#Button_Delete"),
                        children: (0, s.jsx)(y.sED, {}),
                      }),
                    ],
                  }),
                Boolean(r) &&
                  (0, s.jsx)(Ke, {
                    bCreate: !1,
                    hideModal: u,
                    sessionInput: a,
                    fnUpdateSession: (e) => {
                      const o = Ee.mh.GetEditModel(),
                        { groupIndex: s, sessionIndex: n } = et(t),
                        l = [
                          ...o.GetEventModel().jsondata.meet_steam_groups[s]
                            .sessions,
                        ];
                      (l[n] = e),
                        l.sort((e, t) => e.rtime_start - t.rtime_start),
                        (o.GetEventModel().jsondata.meet_steam_groups[
                          s
                        ].sessions = l),
                        o.SetDirty(Ce.IQ.description);
                    },
                  }),
                Boolean(p) &&
                  (0, s.jsx)(Se.E, {
                    active: !0,
                    children: (0, s.jsx)(ke.o0, {
                      strTitle: (0, C.we)("#Button_Delete"),
                      strDescription: (0, C.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const e = Ee.mh.GetEditModel(),
                          { groupIndex: o, sessionIndex: s } = et(t),
                          n = [
                            ...e.GetEventModel().jsondata.meet_steam_groups[o]
                              .sessions,
                          ];
                        n.splice(s, 1),
                          n.sort((e, t) => e.rtime_start - t.rtime_start),
                          (e.GetEventModel().jsondata.meet_steam_groups[
                            o
                          ].sessions = n),
                          e.SetDirty(Ce.IQ.description);
                      },
                      closeModal: x,
                    }),
                  }),
              ],
            }),
            o && (0, s.jsx)(Ie.w3, {}),
          ],
        });
      }
      var at = o(36969),
        rt = o(38539),
        dt = (o(9024), o(86807));
      function ct(e) {
        const { schema: t } = e,
          {
            table: o,
            table_row: n,
            table_header: l,
            table_cell: i,
            paragraph: a,
          } = t.nodes,
          r = m.useCallback(
            (e, t, s) =>
              !rt.aH(e) &&
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
          ? (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_InsertTable"),
              command: r,
              children: (0, s.jsx)(y._Q2, {}),
            })
          : null;
      }
      function ut(e) {
        const { schema: t, className: o } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          [i, a] = m.useState(() => !!t.nodes.table && rt.aH(l.state));
        return (
          (0, w.hL)(
            n,
            m.useCallback(
              (e) => a(!!t.nodes.table && rt.aH(e.state)),
              [t.nodes.table],
            ),
          ),
          (0, s.jsx)(dt.R, {
            visible: i,
            msAnimationDuration: 100,
            children: (0, s.jsx)(D.Ez, {
              className: o,
              children: (0, s.jsx)(mt, { schema: t }),
            }),
          })
        );
      }
      function mt(e) {
        const { schema: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: rt.JD,
              children: (0, s.jsx)(y.BPi, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: rt.gC,
              children: (0, s.jsx)(y.fG_, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: rt.aR,
              children: (0, s.jsx)(y.XW_, {}),
            }),
            (0, s.jsx)(D.XQ, {}),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: rt.RC,
              children: (0, s.jsx)(y.l26, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: rt.GU,
              children: (0, s.jsx)(y.ur3, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: rt.gR,
              children: (0, s.jsx)(y.dyV, {}),
            }),
            (0, s.jsx)(D.XQ, {}),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: rt.uC,
              children: (0, s.jsx)(y.mLi, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: rt.xV,
              children: (0, s.jsx)(y.sXN, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: rt._G,
              children: (0, s.jsx)(y.Maz, {}),
            }),
            (0, s.jsx)(D.XQ, {}),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_MergeCells"),
              command: rt.w7,
              children: (0, s.jsx)(y.rnq, {}),
            }),
            (0, s.jsx)(D.cQ, {
              tooltip: (0, C.we)("#FormattingToolbar_Tables_SplitCells"),
              command: rt.L0,
              children: (0, s.jsx)(y.vB9, {}),
            }),
            !1,
          ],
        });
      }
      var pt = o(44483),
        _t = o(44832),
        ht = o(28516),
        xt = o.n(ht);
      function vt(e, t) {
        if (e) {
          const e = Ee.mh.GetEditModel().GetEventModel()
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
      function ft(e) {
        const { hideModal: t, fnUpdateSession: o, inputScheduleModel: n } = e,
          l = (0, Ne.f1)(),
          i = (0, st.LU)(),
          [a, r] = (0, m.useState)(() => vt(!Boolean(n), n)),
          [d, c, u] = (0, we.q3)(() => [
            a.location_type,
            a.in_person_time_zone,
            i.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          p = (0, m.useMemo)(() => {
            const e = u.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? l : Math.min(...e.map((e) => e.rtime_start));
          }, [u, l]);
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: Boolean(n)
              ? "Update Meet Steam Schedule"
              : "Create Meet Steam Schedule View",
            onOK: () => o(a),
            closeModal: () => {
              r(vt(!Boolean(n), n)), t();
            },
            children: (0, s.jsxs)("div", {
              className: xt().DialogCtn,
              children: [
                (0, s.jsx)(Je, {
                  startTime: i.GetEventStartTime(),
                  location_type: d,
                  in_person_time_zone: c,
                  fnUpdateLocationAndTZ: (e, t) =>
                    r({ ...a, location_type: e, in_person_time_zone: t }),
                }),
                (0, s.jsx)(gt, {
                  inputScheduleModel: a,
                  fnUpdateSession: (e) => r(e),
                  rtBreakStartingTime: p,
                }),
              ],
            }),
          }),
        });
      }
      function gt(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: o,
            rtBreakStartingTime: n,
          } = e,
          [l, i] = (0, we.q3)(() => [
            o.session_breaks || [],
            o.in_person_time_zone || Ie.hh,
          ]),
          a = (0, m.useCallback)(
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
                  jt,
                  {
                    sDisplayTimeZone: i,
                    index: t,
                    breakSession: e,
                    fnOnUpdate: (e) => a(e, t),
                  },
                  "breakedit" + e.break_id,
                ),
              ),
            (0, s.jsx)(v.$n, {
              onClick: () => {
                var e;
                const t = o.session_breaks ? [...o.session_breaks] : [];
                let s = Math.floor(1 + 1e5 * Math.random());
                for (; t.findIndex((e) => e.break_id == s) >= 0; )
                  s = Math.floor(1 + 1e5 * Math.random());
                a(
                  {
                    break_id: s,
                    localized_break_description: (0, Y.$Y)([], 31, null),
                    rtime_start: n,
                    rtime_end: n + Ae.Kp.PerHour,
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
      function jt(e) {
        const {
            breakSession: t,
            fnOnUpdate: o,
            index: n,
            sDisplayTimeZone: l,
          } = e,
          i = (0, Te.E)(),
          [a, r, d, c] = (0, we.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[i] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)("div", { children: ["Break # ", n + 1] }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(Ge.K, {
              strDescription: "Break Start Time",
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => a,
              fnSetTimeToUpdate: (e) =>
                o({ ...t, rtime_start: e, rtime_end: e + Ae.Kp.PerMinute * c }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(v.pd, {
              type: "number",
              min: 0,
              label: "Break duration in minutes",
              onChange: (e) => {
                const s = Number.parseInt(e.currentTarget.value);
                o({ ...t, rtime_end: t.rtime_start + Ae.Kp.PerMinute * s });
              },
              value: c,
            }),
            (0, s.jsx)(v.pd, {
              type: "text",
              label: "Break Description",
              value: d,
              onChange: (e) => {
                const s = { ...t };
                (s.localized_break_description[i] = e.currentTarget.value),
                  o(s);
              },
            }),
            (0, s.jsx)(We, {
              rtime_start: a,
              rtime_end: r,
              sDisplayTimeZone: l,
            }),
          ],
        });
      }
      function bt(e) {
        const { focusView: t, removeNode: o, schedule_id: n } = e,
          l = (0, st.LU)(),
          i = (0, we.q3)(() => {
            var e;
            return null ===
              (e = l.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == n);
          }),
          [a, r, d] = (0, w.uD)(),
          c = m.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, p, _] = (0, w.uD)(),
          h = m.useCallback(() => {
            t(), _();
          }, [t, _]);
        return i && l.GetClanAccountID() == (0, Me.H)()
          ? (0, s.jsxs)("div", {
              className: xt().EditorCtn,
              children: [
                (0, s.jsx)(Ie.fs, {
                  eventModel: l.GetEventModel(),
                  scheduleData: i,
                }),
                (0, s.jsxs)("div", {
                  className: xt().controls,
                  children: [
                    (0, s.jsx)(D.ff, {
                      onClick: r,
                      tooltip: (0, C.we)("#Button_Edit"),
                      children: (0, s.jsx)(y.ffu, {}),
                    }),
                    (0, s.jsx)(D.ff, {
                      onClick: p,
                      tooltip: (0, C.we)("#Button_Delete"),
                      children: (0, s.jsx)(y.sED, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, s.jsx)(ft, {
                    hideModal: c,
                    inputScheduleModel: i,
                    fnUpdateSession: (e) => {
                      const { scheduleIndex: t } = ot(e.schedule_id);
                      (l.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                        l.SetDirty(Ce.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, s.jsx)(Se.E, {
                    active: !0,
                    children: (0, s.jsx)(ke.o0, {
                      strTitle: (0, C.we)("#Button_Delete"),
                      strDescription: (0, C.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { scheduleIndex: e } = ot(i.schedule_id),
                          t = Ee.mh.GetEditModel(),
                          s = [
                            ...t.GetEventModel().jsondata.meet_steam_schedules,
                          ];
                        s.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_schedules = s),
                          t.SetDirty(Ce.IQ.description),
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
      var Ct = o(10820),
        Et = o(68033),
        wt = o(30193),
        Mt = o(14947);
      function It(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, D.wU)(),
          [l, i] = m.useState(!1),
          a = m.useCallback(
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
          r = m.useCallback(
            (e) => {
              i(!0);
              const t = (0, V.lX)((0, s.jsx)(kt, { OnSelected: a }), e, {
                bOverlapHorizontal: !0,
              });
              (0, Mt.z7)(
                () => !t.visible,
                () => i(!1),
              );
            },
            [a],
          );
        return (0, s.jsx)(D.ff, {
          tooltip: "#Editor_Emoticon",
          onClick: r,
          toggled: l,
          children: (0, s.jsx)(B.jZW, {}),
        });
      }
      function kt(e) {
        return (
          (0, wt.k3)(Et.A),
          (0, s.jsx)(Ct.iY, { emoticonStore: Et.A, OnSelected: e.OnSelected })
        );
      }
      var St = o(14703),
        Dt = o(4796),
        yt = o(63287),
        Tt = o.n(yt),
        Nt = o(7913),
        Ut = o(82102),
        Gt = o(69484),
        Pt = o(27939);
      function At(e) {
        const { hideModal: t, fnUpdateSession: o, clanAccountID: n } = e,
          [l, i] = (0, m.useState)(() => qt(!0, null));
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)("#UserPolls_Create_title"),
            onOK: () => o(l),
            closeModal: () => {
              i(qt(!0, null)), t();
            },
            children: (0, s.jsx)("div", {
              className: Tt().DialogCtn,
              children: (0, s.jsx)(Vt, {
                clanAccountID: n,
                userPollDef: l,
                fnSetDef: i,
              }),
            }),
          }),
        });
      }
      function Ot(e) {
        const {
            hideModal: t,
            userPollDef: o,
            clanAccountID: n,
            fnUpdateUserPollDef: l,
          } = e,
          [i, a] = (0, m.useState)(() => qt(!1, o));
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)("#UserPolls_Edit_title"),
            onOK: () => {
              l(i);
            },
            onCancel: () => {
              a(qt(!1, o));
            },
            closeModal: t,
            children: (0, s.jsx)("div", {
              className: Tt().DialogCtn,
              children: (0, s.jsx)(Vt, {
                userPollDef: i,
                clanAccountID: n,
                fnSetDef: a,
              }),
            }),
          }),
        });
      }
      function Bt(e) {
        switch (e) {
          default:
          case St.$t.k_EPollResult_NotVisible:
            return (0, C.we)("#UserPolls_Visibility_None");
          case St.$t.k_EPollResult_Visible_After_End:
            return (0, C.we)("#UserPolls_Visibility_End");
          case St.$t.k_EPollResult_Visible_After_Vote:
            return (0, C.we)("#UserPolls_Visibility_Voter");
          case St.$t.k_EPollResult_Visible_After_Vote_Or_End:
            return (0, C.we)("#UserPolls_Visibility_Voter_or_End");
          case St.$t.k_EPollResult_Visible_On_Demand:
            return (0, C.we)("#UserPolls_Visibility_OnDemand");
        }
      }
      function Vt(e) {
        const { userPollDef: t, fnSetDef: o } = e,
          n = (0, Te.E)(),
          [l] = (0, we.q3)(() => [t.results_visibility_settings]),
          i = Object.values(St.$t).map((e) => ({ data: e, label: Bt(e) }));
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v.pd, {
              type: "text",
              label: (0, C.we)("#UserPolls_Description"),
              value: C.NT.Get(t.localized_poll_description, n),
              onChange: (e) => {
                const s = { ...t };
                (s.localized_poll_description = C.NT.Set(
                  s.localized_poll_description,
                  n,
                  e.currentTarget.value,
                )),
                  o(s);
              },
            }),
            (0, s.jsx)(Lt, { ...e }),
            (0, s.jsx)(Ft, { ...e }),
            (0, s.jsx)(v.JU, { children: (0, C.we)("#UserPolls_Visibility") }),
            (0, s.jsx)("div", {
              className: Tt().PollArea,
              children: (0, s.jsx)(v.m, {
                strDropDownClassName: Ue.DropDownScroll,
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
            (0, s.jsx)(zt, { ...e }),
          ],
        });
      }
      function zt(e) {
        const { clanAccountID: t, userPollDef: o, fnSetDef: n } = e,
          l = (0, st.LU)(),
          i = (0, St.rR)(l.GetClanSteamID()),
          [a] = (0, we.q3)(() => [o.user_poll_background]),
          r = (0, m.useCallback)(
            (e, t, s, l, i) => {
              (0, d.wT)(
                null != s && s >= 0 && s < 31,
                "Unexpected value for elang: " + s,
              ),
                (0, d.wT)(
                  "user_poll_background" === i,
                  "Unexpected artwork type " + i,
                );
              const a = (0, Ut.G)(e, t);
              a.image && n({ ...o, user_poll_background: a.image });
            },
            [n, o],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v.JU, {
              children: (0, C.we)("#UserPolls_BackgroundImage"),
            }),
            (0, s.jsxs)("div", {
              className: Tt().PollArea,
              children: [
                (0, s.jsx)("p", {
                  children: (0, C.we)("#UserPolls_BackgroundImage_desc"),
                }),
                (0, s.jsx)(Nt.a, {
                  rgRealmList: l.GetIncludedRealmList(),
                  rgSupportArtwork: St.YX,
                  strUploadAjaxURL: i,
                  fnOnUploadSuccess: r,
                  elOverrideDragAndDropText: (0, C.we)(
                    "#Template_Section_MediaUpdate_Static_Dnd",
                  ),
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
                Boolean(a) && (0, s.jsx)("img", { src: (0, Gt.F)(t, a) }),
              ],
            }),
          ],
        });
      }
      function Rt(e) {
        switch (e) {
          case St.BY.k_EPollVoter_AnyUser:
            return (0, C.we)("#UserPolls_Voters_Anyone");
          case St.BY.k_EPollVoter_UserGameInLibrary:
            return (0, C.we)("#UserPolls_Voters_Owners");
          case St.BY.k_EPollVoter_MinPlayTime:
            return (0, C.we)("#UserPolls_Voters_Players");
          case St.BY.k_EPollVoter_MemberOfGroup:
            return (0, C.we)("#UserPolls_Voters_Members");
        }
      }
      function Ft(e) {
        const { clanAccountID: t, userPollDef: o, fnSetDef: n } = e,
          [l, i] = (0, Dt.TB)(t),
          [a, r] = (0, we.q3)(() => [
            o.voter_min_playtime_seconds,
            o.voter_eligibility,
          ]),
          d = (0, m.useMemo)(() => {
            const e = [
              {
                label: Rt(St.BY.k_EPollVoter_AnyUser),
                data: St.BY.k_EPollVoter_AnyUser,
              },
            ];
            return (
              i && i.is_ogg && t != Pt.II
                ? (e.push({
                    label: Rt(St.BY.k_EPollVoter_UserGameInLibrary),
                    data: St.BY.k_EPollVoter_UserGameInLibrary,
                  }),
                  e.push({
                    label: Rt(St.BY.k_EPollVoter_MinPlayTime),
                    data: St.BY.k_EPollVoter_MinPlayTime,
                  }))
                : !i ||
                  (i.is_ogg && t != Pt.II) ||
                  e.push({
                    label: Rt(St.BY.k_EPollVoter_MemberOfGroup),
                    data: St.BY.k_EPollVoter_MemberOfGroup,
                  }),
              e
            );
          }, [t, i]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v.JU, { children: (0, C.we)("#UserPolls_Voters") }),
            (0, s.jsxs)("div", {
              className: Tt().PollArea,
              children: [
                (0, s.jsx)(v.m, {
                  strDropDownClassName: Ue.DropDownScroll,
                  rgOptions: d,
                  selectedOption: r,
                  onChange: (e) => {
                    if (e.data != o.voter_eligibility) {
                      let t = { ...o, voter_eligibility: e.data };
                      e.data == St.BY.k_EPollVoter_MinPlayTime &&
                        (t.voter_min_playtime_seconds = 5 * Kt),
                        n(t);
                    }
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
                Boolean(r == St.BY.k_EPollVoter_MinPlayTime) &&
                  (0, s.jsx)("div", {
                    className: Tt().OptionInset,
                    children: (0, s.jsx)(v.pd, {
                      type: "number",
                      label: (0, C.we)("#UserPolls_MinPlayTime"),
                      value: a / Kt,
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
                            : 5) * Kt;
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
      function Lt(e) {
        const { userPollDef: t, fnSetDef: o } = e,
          [n, l] = (0, we.q3)(() => [
            t.poll_end_time,
            t.poll_end_days_since_start,
          ]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v.JU, { children: (0, C.we)("#UserPolls_Starts") }),
            (0, s.jsxs)("div", {
              className: Tt().PollArea,
              children: [
                (0, s.jsxs)("div", {
                  className: (0, fe.A)(Ue.FlexRowContainer, Ue.RadioOption),
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
                            poll_end_days_since_start: Yt * Ht,
                          });
                      },
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "UserPollDialog_Days",
                      children: (0, s.jsx)("span", {
                        children: (0, C.we)("#UserPolls_EndTime_In_Days"),
                      }),
                    }),
                  ],
                }),
                Boolean(l) &&
                  (0, s.jsx)("div", {
                    className: Tt().OptionInset,
                    children: (0, s.jsx)(v.pd, {
                      type: "number",
                      value: l / Ht,
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
                            : 1) * Ht;
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
                  className: (0, fe.A)(Ue.FlexRowContainer, Ue.RadioOption),
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
                              Math.floor(Date.now() / 1e3) + Yt * Ht,
                          });
                      },
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: "UserPollDialog_SpecificTime",
                      children: (0, s.jsx)("span", {
                        children: (0, C.we)("#UserPolls_EndTime_Specific"),
                      }),
                    }),
                  ],
                }),
                Boolean(n) &&
                  (0, s.jsxs)("div", {
                    className: (0, fe.A)(Tt().OptionInset, Ue.FlexRowContainer),
                    children: [
                      (0, s.jsx)(Ge.K, {
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
                        children: (0, C.we)("#UserPolls_EndTime_Zone"),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      const Yt = 7,
        Ht = 86400,
        Kt = 60;
      function qt(e, t) {
        if (e) {
          const e =
            Ee.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.poll_id == t) >= 0);
          return {
            poll_id: t,
            options: [],
            localized_poll_description: (0, Y.$Y)([], 31, null),
            poll_end_days_since_start: Yt * Ht,
            poll_end_time: void 0,
            results_visibility_settings: St.$t.k_EPollResult_Visible_On_Demand,
            voter_eligibility: St.BY.k_EPollVoter_AnyUser,
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
      function Qt(e) {
        const {
            bCreate: t,
            hideModal: o,
            pollOptionsInput: n,
            fnUpdatePollOption: l,
          } = e,
          [i, a] = (0, m.useState)(() => $t(t, n)),
          r = (0, Te.E)();
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsx)(ke.o0, {
            strTitle: (0, C.we)(
              t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
            ),
            onOK: () => {
              l(i), o();
            },
            onCancel: () => {
              a($t(t, n)), o();
            },
            children: (0, s.jsx)("div", {
              className: Tt().DialogCtn,
              children: (0, s.jsx)(v.pd, {
                type: "text",
                label: (0, C.we)("#UserPolls_Option_Title"),
                value: C.NT.Get(i.localized_option, r),
                onChange: (e) => {
                  const t = { ...i };
                  (t.localized_option = [...t.localized_option]),
                    (t.localized_option = C.NT.Set(
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
      function $t(e, t) {
        if (e) {
          const e = Ee.mh.GetEditModel().GetEventModel().jsondata.user_polls,
            t =
              null == e ? void 0 : e.reduce((e, t) => e.concat(t.options), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (t && t.findIndex((e) => e.option_id == o) >= 0);
          return { option_id: o, localized_option: (0, Y.$Y)([], 31, null) };
        }
        return t
          ? { ...t }
          : ((0, d.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null);
      }
      var Wt = o(69818),
        Jt = o(56330),
        Xt = o(37935);
      function Zt(e) {
        const t = Ee.mh.GetEditModel();
        for (let o = 0; o < t.GetEventModel().jsondata.user_polls.length; ++o) {
          const s = t.GetEventModel().jsondata.user_polls[o];
          for (let t = 0; t < s.options.length; ++t)
            if (s.options[t].option_id == e)
              return { pollIndex: o, optionIndex: t };
        }
        return null;
      }
      function eo(e) {
        const t = Ee.mh.GetEditModel();
        for (let o = 0; o < t.GetEventModel().jsondata.user_polls.length; ++o) {
          const s = t.GetEventModel().jsondata.user_polls[o];
          if (s.poll_id == e) return { userPollDef: s, pollIndex: o };
        }
        return null;
      }
      var to = o(56654);
      function oo(e) {
        const { focusView: t, removeNode: o, poll_id: n } = e,
          l = (0, st.LU)(),
          i = (0, we.q3)(() => {
            var e;
            return null === (e = l.GetEventModel().jsondata.user_polls) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.poll_id == n);
          }),
          [a, r, d] = (0, w.uD)(),
          c = m.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, p, _] = (0, w.uD)(),
          h = m.useCallback(() => {
            t(), _();
          }, [t, _]);
        return i
          ? (0, s.jsxs)("div", {
              className: ye().EditorCtn,
              children: [
                (0, s.jsx)(so, { userPollDef: i, focusView: t }),
                (0, s.jsxs)("div", {
                  className: ye().controls,
                  children: [
                    (0, s.jsx)(D.ff, {
                      onClick: r,
                      tooltip: (0, C.we)("#Button_Edit"),
                      children: (0, s.jsx)(y.ffu, {}),
                    }),
                    (0, s.jsx)(D.ff, {
                      onClick: p,
                      tooltip: (0, C.we)("#Button_Delete"),
                      children: (0, s.jsx)(y.sED, {}),
                    }),
                    (0, s.jsx)(D.ff, {
                      onClick: () => {},
                      tooltip: Bt(i.results_visibility_settings),
                      children: (0, s.jsx)(B.WLA, {}),
                    }),
                    (0, s.jsx)(D.ff, {
                      onClick: () => {},
                      tooltip: Rt(i.voter_eligibility),
                      children: (0, s.jsx)(B.JpU, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, s.jsx)(Ot, {
                    hideModal: c,
                    userPollDef: i,
                    clanAccountID: l.GetClanAccountID(),
                    fnUpdateUserPollDef: (e) => {
                      const { pollIndex: t } = eo(e.poll_id),
                        o = Ee.mh.GetEditModel();
                      (o.GetEventModel().jsondata.user_polls[t] = e),
                        o.SetDirty(Ce.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, s.jsx)(Se.E, {
                    active: !0,
                    children: (0, s.jsx)(ke.o0, {
                      strTitle: (0, C.we)("#Button_Delete"),
                      strDescription: (0, C.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { pollIndex: e } = eo(i.poll_id),
                          t = Ee.mh.GetEditModel(),
                          s = [...t.GetEventModel().jsondata.user_polls];
                        s.splice(e, 1),
                          (t.GetEventModel().jsondata.user_polls = s),
                          t.SetDirty(Ce.IQ.description),
                          o();
                      },
                      closeModal: h,
                    }),
                  }),
              ],
            })
          : (0, s.jsx)("div", {
              className: Jt.ErrorStylesWithIcon,
              children: (0, C.we)("#UserPolls_Editor_FailToFindModel", n),
            });
      }
      function so(e) {
        const { userPollDef: t, focusView: o } = e,
          [n, l] = (0, we.q3)(() => [
            t.options || [],
            t.randomize_option_order,
          ]),
          i = (0, st.LU)(),
          a = (0, Te.E)(),
          [r, d, c] = (0, w.uD)(),
          u = m.useCallback(() => {
            o(), c();
          }, [o, c]),
          [p, _, h] = (0, w.uD)(),
          x = m.useCallback(() => {
            o(), h();
          }, [o, h]);
        return t
          ? (0, s.jsxs)(Xt.W6, {
              userPollDef: t,
              eventModel: i.GetEventModel(),
              lang: a,
              children: [
                n.map((e) =>
                  (0, s.jsx)(
                    lo,
                    { focusView: o, optionID: e.option_id },
                    "polloption" + t.poll_id + "_" + e.option_id,
                  ),
                ),
                (0, s.jsxs)("div", {
                  className: Tt().AdminOptions,
                  children: [
                    (0, s.jsx)(Wt.wl, {
                      className: "",
                      onClick: d,
                      children: (0, C.we)("#UserPolls_Option_Add"),
                    }),
                    (0, s.jsx)(Wt.wl, {
                      className: "",
                      onClick: _,
                      children: (0, C.we)("#UserPolls_Option_Reorder"),
                    }),
                  ],
                }),
                r &&
                  (0, s.jsx)(Qt, {
                    bCreate: !0,
                    hideModal: u,
                    fnUpdatePollOption: (e) => {
                      const o = Ee.mh.GetEditModel();
                      t.options || (t.options = []),
                        t.options.push(e),
                        o.SetDirty(Ce.IQ.description);
                    },
                  }),
                p &&
                  (0, s.jsx)(no, {
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
      function no(e) {
        const {
            options: t,
            bRandomize: o,
            fnUpdateOptions: n,
            hideModal: l,
          } = e,
          i = (0, Te.E)(),
          [a, r] = (0, m.useState)(o),
          [d, c] = (0, m.useState)(t);
        return (0, s.jsx)(Se.E, {
          active: !0,
          children: (0, s.jsxs)(ke.o0, {
            strTitle: (0, C.we)("#UserPolls_Option_Reorder"),
            strDescription: (0, C.we)("#UserPolls_Option_Reorder_desc"),
            onCancel: () => {
              r(o), c(t);
            },
            onOK: () => {
              n([...d], a);
            },
            closeModal: l,
            children: [
              (0, s.jsx)(v.Yh, {
                label: (0, C.we)("#UserPolls_Option_Randomize"),
                checked: a,
                onChange: r,
              }),
              (0, s.jsx)(to.A, {
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
                        : o[0]) ||
                      "",
                  });
                },
                onReorder: (e) => c(e),
              }),
            ],
          }),
        });
      }
      function lo(e) {
        const { optionID: t, focusView: o } = e,
          [n, l] = (0, w.OP)(),
          i = (0, we.q3)(() => {
            const { optionIndex: e, pollIndex: o } = Zt(t);
            return Ee.mh.GetEditModel().GetEventModel().jsondata.user_polls[o]
              .options[e];
          }),
          a = (0, Te.E)(),
          [r, d, c] = (0, w.uD)(),
          u = m.useCallback(() => {
            o(), c();
          }, [o, c]),
          [p, _, h] = (0, w.uD)(),
          x = m.useCallback(() => {
            o(), h();
          }, [o, h]);
        return (0, s.jsxs)("div", {
          className: ye().Column,
          ...l,
          children: [
            (0, s.jsx)(Xt.s3, { pollOptionDef: i, lang: a }),
            Boolean(n) &&
              (0, s.jsxs)("div", {
                className: ye().controls,
                children: [
                  (0, s.jsx)(D.ff, {
                    onClick: d,
                    tooltip: (0, C.we)("#Button_Edit"),
                    children: (0, s.jsx)(y.ffu, {}),
                  }),
                  (0, s.jsx)(D.ff, {
                    onClick: _,
                    tooltip: (0, C.we)("#Button_Delete"),
                    children: (0, s.jsx)(y.sED, {}),
                  }),
                ],
              }),
            Boolean(r) &&
              (0, s.jsx)(Qt, {
                bCreate: !1,
                hideModal: u,
                pollOptionsInput: i,
                fnUpdatePollOption: (e) => {
                  const o = Ee.mh.GetEditModel(),
                    { optionIndex: s, pollIndex: n } = Zt(t),
                    l = [...o.GetEventModel().jsondata.user_polls[n].options];
                  (l[s] = e),
                    (o.GetEventModel().jsondata.user_polls[n].options = l),
                    o.SetDirty(Ce.IQ.description);
                },
              }),
            Boolean(p) &&
              (0, s.jsx)(Se.E, {
                active: !0,
                children: (0, s.jsx)(ke.o0, {
                  strTitle: (0, C.we)("#Button_Delete"),
                  strDescription: (0, C.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = Ee.mh.GetEditModel(),
                      { optionIndex: o, pollIndex: s } = Zt(t),
                      n = [...e.GetEventModel().jsondata.user_polls[s].options];
                    n.splice(o, 1),
                      (e.GetEventModel().jsondata.user_polls[s].options = n),
                      e.SetDirty(Ce.IQ.description);
                  },
                  closeModal: x,
                }),
              }),
          ],
        });
      }
      const io = m.memo(function (e) {
        const {
          view: t,
          schema: o,
          refUpdateToolbar: n,
          className: l,
          clanSteamID: i,
          bSpellcheckEnabled: a,
          setSpellcheckEnabled: r,
        } = e;
        return (0, s.jsx)(D.bI, {
          refUpdateToolbar: n,
          view: t,
          children: (0, s.jsxs)("div", {
            className: e.className,
            children: [
              (0, s.jsxs)(D.Ez, {
                className: e.className,
                children: [
                  (0, s.jsx)(at.MV, {}),
                  (0, s.jsx)(D.XQ, {}),
                  (0, s.jsx)(at.Km, { schema: o }),
                  (0, s.jsx)(D.XQ, {}),
                  o.marks.link && (0, s.jsx)(ao, { schema: o }),
                  (0, s.jsx)(D.XQ, {}),
                  (0, s.jsx)(at.Hz, { schema: o }),
                  (0, s.jsx)(at.WJ, { schema: o, levels: 3 }),
                  (0, s.jsx)(D.XQ, {}),
                  (0, s.jsx)(It, { schema: o }),
                  (0, s.jsx)(co, { schema: o, clanSteamID: i }),
                  (0, s.jsx)(ct, { schema: o }),
                  (0, s.jsx)(at.C$, {
                    schema: o,
                    showIndentButtonsAsNeeded: !0,
                  }),
                  (0, s.jsx)(D.hK, {}),
                  r &&
                    (0, s.jsx)(at.Nt, {
                      bSpellcheckEnabled: a,
                      setSpellcheckEnabled: r,
                    }),
                  o.nodes.meetsteamsessiongroup &&
                    (0, s.jsx)(mo, { schema: o }),
                  o.nodes.meetsteamscheduleview &&
                    (0, s.jsx)(po, { schema: o }),
                  o.nodes.userpolls &&
                    M.iA.is_support &&
                    (0, s.jsx)(ro, { schema: o }),
                ],
              }),
              (0, s.jsx)(ut, { className: e.className, schema: o }),
            ],
          }),
        });
      });
      function ao(e) {
        const t = (0, _t.V9)();
        return (0, s.jsx)(at.z9, { schema: e.schema, addtlAttrs: t });
      }
      function ro(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, D.wU)(),
          l = (0, st.LU)(),
          [i, a, r] = (0, F.uD)(),
          d = m.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = m.useCallback(
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
              (0, s.jsx)(At, {
                hideModal: d,
                clanAccountID: l.GetClanAccountID(),
                fnUpdateSession: c,
              }),
            (0, s.jsx)(D.ff, {
              tooltip: "#UserPolls_Toolbar_ttip",
              onClick: a,
              toggled: i,
              children: (0, s.jsx)(y.fQB, {}),
            }),
          ],
        });
      }
      function co(e) {
        const { schema: t, clanSteamID: o } = e,
          { callbacks: n, view: l } = (0, D.wU)(),
          { image: i, video: a, previewyoutube: r } = t.nodes,
          d = m.useCallback(
            (e, t) => {
              l.dispatch(l.state.tr.insert(l.state.selection.to, t.create(e)));
            },
            [l],
          ),
          c = m.useCallback(() => l.focus(), [l]),
          {
            showInsertImageModal: u,
            showInsertVideoModal: p,
            imageModal: _,
            activeModal: h,
          } = ie({
            clanSteamID: o,
            imageNodeType: i,
            videoNodeType: a,
            onItemSelected: d,
            onHideModal: c,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            _,
            i &&
              (0, s.jsx)(D.ff, {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: u,
                toggled: "image" == h,
                children: (0, s.jsx)(y._V3, {}),
              }),
            a &&
              (0, s.jsx)(D.ff, {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: p,
                toggled: "video" == h,
                children: (0, s.jsx)(y.CeX, {}),
              }),
            r && (0, s.jsx)(uo, { schema: t }),
            (i || a || r) && (0, s.jsx)(D.XQ, {}),
          ],
        });
      }
      function uo(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, D.wU)(),
          [l, i, a] = (0, F.uD)(),
          r = m.useCallback(() => {
            a(), n.focus();
          }, [a, n]),
          d = m.useCallback(
            (e, o) => {
              !(function (e, t, o, s = xe.V2.left) {
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
            l && (0, s.jsx)(be, { hideModal: r, onSave: d }),
            (0, s.jsx)(D.ff, {
              tooltip: "#EventEditor_InsertYouTube",
              onClick: i,
              toggled: l,
              children: (0, s.jsx)("img", { src: pt.A }),
            }),
          ],
        });
      }
      function mo(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, D.wU)(),
          l = (0, st.LU)(),
          [i, a, r] = (0, F.uD)(),
          d = m.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = m.useCallback(
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
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, Me.H)())
          return (0, s.jsxs)(s.Fragment, {
            children: [
              i && (0, s.jsx)(Ye, { hideModal: d, fnUpdateSession: c }),
              (0, s.jsx)(D.ff, {
                tooltip: "#MeetSteam_add_group_ttip",
                onClick: a,
                toggled: i,
                children: (0, s.jsx)("img", { src: pt.A }),
              }),
            ],
          });
      }
      function po(e) {
        const { schema: t } = e,
          { callbacks: o, view: n } = (0, D.wU)(),
          l = (0, st.LU)(),
          [i, a, r] = (0, F.uD)(),
          d = m.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = m.useCallback(
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
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, Me.H)())
          return (0, s.jsxs)(s.Fragment, {
            children: [
              i &&
                (0, s.jsx)(ft, {
                  hideModal: d,
                  inputScheduleModel: null,
                  fnUpdateSession: c,
                }),
              (0, s.jsx)(D.ff, {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: a,
                toggled: i,
                children: (0, s.jsx)("img", { src: pt.A }),
              }),
            ],
          });
      }
      var _o = o(75844),
        ho = o(90316),
        xo = o.n(ho),
        vo = o(1805),
        fo = o(81962);
      function go(e) {
        const { schema: t, emoticonStore: o } = e,
          n = t.nodes.emoticon;
        (0, wt.k3)(o),
          (0, i.c$)(
            m.useMemo(
              () => (0, _e.sM)({ rules: [bo(/:([a-zA-Z0-9_]+):$/, n, o)] }),
              [n, o],
            ),
          );
        const l = m.useMemo(
          () => [
            {
              type: n,
              component: jo,
              readProps: (e) => ({ emoticonStore: o, emoticon: e.textContent }),
            },
          ],
          [n, o],
        );
        return (0, s.jsx)(a.U, { specs: l });
      }
      function jo(e) {
        const { selected: t, emoticonStore: o, emoticon: n } = e;
        (0, wt.k3)(o);
        if (o.BHasEmoticon(n)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return (0, s.jsx)("span", {
            style: e,
            children: (0, s.jsx)(fo.n, { emoticon: n }),
          });
        }
        return `:${n}:`;
      }
      function bo(e, t, o) {
        return new _e.fV(e, (e, s, n, l) => {
          const i = s[1];
          if (!o.BHasEmoticon(i)) return null;
          const a = t.create(null, e.schema.text(i));
          return e.tr.replaceWith(n, l, a);
        });
      }
      var Co = o(73560),
        Eo = o(91254);
      function wo(e) {
        const { editModel: t, href: o } = e,
          n = (0, Co.W7)(o);
        if (n) {
          const l = n.fnBBComponent(o, {
            partnerEventStore: Eo.O3,
            event: t.GetEventModel(),
          });
          return (0, s.jsx)(G, {
            toolbar: (0, s.jsx)(Mo, {
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
      function Mo(e) {
        const { href: t, removeNode: o, update: n, schema: l } = e;
        return (0, s.jsxs)(P, {
          onDeleteClick: o,
          children: [
            (0, s.jsx)(O, {
              onClick: () => window.open(t),
              description: (0, C.we)("#ContextMenu_OpenLinkInNewWindow"),
              children: (0, s.jsx)(y.YNO, {}),
            }),
            (0, s.jsx)(O, {
              onClick: () =>
                n((0, a.M)(l.text(t, [l.marks.link.create({ href: t })]))),
              description: (0, C.we)(
                "#EventEditor_DynamicLink_ConvertToTextLink",
              ),
              children: (0, s.jsx)(y.Rkk, {}),
            }),
          ],
        });
      }
      var Io = o(42714);
      const ko = (0, _o.PA)(function (e) {
        const { editModel: t } = e,
          o = t.GetEventModel().loadedAllLanguages,
          n = t.GetCurEditLanguage();
        return o
          ? (0, s.jsx)(H.tH, {
              children: (0, s.jsx)(So, { ...e, eCurrentEditLanguage: n }),
            })
          : null;
      });
      const So = m.memo(function (e) {
        const {
            editModel: t,
            refOnInsertImage: o,
            limitBBCode: i,
            eCurrentEditLanguage: a,
          } = e,
          [r, c] = m.useState(),
          u = m.useMemo(() => (0, pe.u)(i), [i]),
          [_, h] = m.useState(),
          v = (function (e, t) {
            const { nodes: o } = t.pm_schema,
              s = (function (e, t, o) {
                const s = m.useCallback(
                  (s) => {
                    const n = `^https?://${M.TS.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                      l = s.match(n);
                    if (
                      l &&
                      l.groups.clanid == e.GetClanAccountID().toString()
                    ) {
                      const s = x.pU.GetClanImageByImageHash(
                        e.GetClanSteamID(),
                        l.groups.filename,
                      );
                      let n = s && me(s, t, o);
                      if (n) return n;
                    }
                    return "default";
                  },
                  [e, t, o],
                );
                return t ? s : void 0;
              })(e, o.image, o.video),
              n = (function (e, t) {
                const o = m.useCallback(
                  (e) => ((0, Co.yO)(e) ? t.create({ href: e }) : "default"),
                  [t],
                );
                return t ? o : void 0;
              })(0, o.dynamiclink);
            return m.useCallback(
              (...e) => {
                let t = "default";
                return (
                  s && (t = s(...e)), "default" == t && n && (t = n(...e)), t
                );
              },
              [s, n],
            );
          })(t, u);
        m.useEffect(() => {
          h(
            (function (e, t, o, s) {
              let l = t.GetDescription(o);
              return (
                (l =
                  null == l
                    ? void 0
                    : l.replace(
                        wt.pN.GetUnvalidatedEmoticonReplaceRegex(),
                        "[emoticon]$1[/emoticon]",
                      )),
                new n.n(e, l, (e) => t.SetDescription(o, e), {
                  parser: {
                    fnProcessText: (t) =>
                      (0, Io.F)(e.pm_schema, t, e.pm_schema.marks.link, s),
                  },
                })
              );
            })(u, t, a, v),
          );
        }, [u, v, t, a]);
        const f = m.useRef(void 0);
        (0, l.i)(_, { msAutosaveTimeout: 1e3 });
        const { nodes: g, marks: j } = u.pm_schema;
        return (
          (function (e, t, o, s, n) {
            m.useEffect(() => {
              if (!n || !t) return;
              const l = (e, l) => {
                let i;
                switch (l) {
                  case p._o.k_eInsertFullImage:
                    i = t.create({ src: (0, p.fw)(e) });
                    break;
                  case p._o.k_eInsertThumbnail:
                    i = t.create({ src: (0, p.fw)(e, !0) }, null, [
                      s.create({ href: (0, p.fw)(e) }),
                    ]);
                    break;
                  case p._o.k_eInsertVideo:
                    let n;
                    4 == e.file_type
                      ? (n = { mp4: (0, p.fw)(e) })
                      : 5 == e.file_type && (n = { webm: (0, p.fw)(e) }),
                      n && o && (i = o.create(n));
                    break;
                  case p._o.k_eShowImageGroup:
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
          })(o, g.image, g.video, j.link, r),
          (0, s.jsx)(ue, {
            editModel: t,
            imageNode: g.image,
            videoNode: g.video,
            children: (0, s.jsxs)("div", {
              className: xo().EventDescriptionContainer,
              children: [
                (0, s.jsx)(io, {
                  view: r,
                  schema: u.pm_schema,
                  refUpdateToolbar: f,
                  className: xo().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                (0, s.jsx)("div", {
                  className: xo().EventDescriptionArea,
                  children: (0, s.jsx)(vo.l, {
                    pmState: _,
                    className: (0, fe.A)(
                      xo().EventDescriptionRichField,
                      xo().EventDetailsBody,
                    ),
                    refOnUpdate: f,
                    refView: c,
                    panelProps: { onBlur: () => _.CommitChanges() },
                    children: (0, s.jsx)(Do, {
                      eventSchemaConfig: u,
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
      const Do = m.memo(function (e) {
        const { eventSchemaConfig: t, editModel: o, onURLPasted: n } = e,
          { marks: l, nodes: i } = t.pm_schema;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(r.W, {
              linkMarkType: l.link,
              onURLPasted: n,
              schema: t.pm_schema,
            }),
            i.image && (0, s.jsx)(b.pw, { nodeType: i.image }),
            (0, s.jsx)(yo, {
              schemaConfig: t,
              editModel: o,
              clanSteamID: o.GetClanSteamID(),
            }),
            (0, s.jsx)(go, { emoticonStore: Et.A, schema: t.pm_schema }),
          ],
        });
      });
      function yo(e) {
        const { schemaConfig: t, editModel: o, clanSteamID: n } = e,
          l = t.pm_schema,
          r = m.useMemo(
            () =>
              (function (e) {
                return _e.sM({ rules: [_e.tG(/^>$/, e.nodes.quote)] });
              })(l),
            [l],
          );
        (0, i.c$)(r);
        const d = l.nodes,
          c = d.image,
          u = d.video,
          p = d.carousel,
          _ = m.useCallback(
            (e, s) => ({
              schemaConfig: t,
              node: s,
              imageNodeType: c,
              videoNodeType: u,
              carouselNodeType: p,
              editModel: o,
              clanSteamID: n,
            }),
            [t, c, u, p, o, n],
          ),
          h = m.useMemo(
            () => [
              d.previewyoutube && {
                type: d.previewyoutube,
                component: je,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: o,
                }),
              },
              c && { type: c, component: Z, readProps: (e) => _("image", e) },
              u && { type: u, component: Z, readProps: (e) => _("video", e) },
              d.meetsteamsessiongroup && {
                type: d.meetsteamsessiongroup,
                component: nt,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              d.meetsteamscheduleview && {
                type: d.meetsteamscheduleview,
                component: bt,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              d.userpolls && {
                type: d.userpolls,
                component: oo,
                readProps: (e) => ({ poll_id: e.attrs.poll_id }),
              },
              d.dynamiclink && {
                type: d.dynamiclink,
                component: wo,
                readProps: (e) => ({
                  editModel: o,
                  href: e.attrs.href,
                  schema: t.pm_schema,
                }),
              },
              d.carousel && {
                type: d.carousel,
                component: Q,
                readProps: (e) => ({
                  node: e,
                  imageNodeType: c,
                  videoNodeType: u,
                  schemaConfig: t,
                  editModel: o,
                }),
              },
            ],
            [d, c, u, o, _, t],
          );
        return (0, s.jsx)(a.U, { specs: h });
      }
    },
  },
]);
