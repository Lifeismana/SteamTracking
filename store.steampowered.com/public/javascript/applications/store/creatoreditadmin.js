/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [30030],
    {
      86564: (B, N, r) => {
        "use strict";
        r.r(N), r.d(N, { default: () => ve });
        var n = r(7850),
          d = r(90626),
          te = r(80902),
          ne = r(98609),
          se = r(41735),
          V = r.n(se),
          T = r(72604);
        function ae() {
          const l = (0, te.I)({
            queryKey: ["useSocialMediaSupports"],
            queryFn: async () => {
              const e = `${ne.TS.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                i = { origin: self.origin },
                s = await V().get(e, { params: i });
              return s?.status == 200 && s.data?.success == T.R
                ? s.data
                : (console.error("useSocialMediaSupports:", s?.status),
                  { success: T.zi });
            },
          });
          return l.isLoading ? null : l.data;
        }
        var f = r(18210),
          b = r(47534),
          Y = r(30096);
        const O =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var ie = r(44894),
          X = r(41635),
          oe = r(41609),
          g = r.n(oe),
          le = r(64641),
          H = r.n(le),
          re = r(36118),
          ce = r(13854),
          y = r(36707);
        function de(l) {
          const {
              items: e,
              render: i,
              onDelete: s,
              onEdit: c,
              onReorder: S,
              onMove: h,
              bDisabled: A,
              rowClassName: M,
            } = l,
            [v, u] = d.useState(!1),
            [m, R] = d.useState(void 0),
            [G, k] = d.useState(void 0),
            [E, F] = d.useState(-1),
            [j, L] = d.useState(void 0),
            [Me, Ee] = d.useState(0),
            [P, Re] = d.useState(0),
            [be, w] = d.useState(void 0),
            [z, Z] = d.useState(""),
            C = d.useRef(void 0),
            x = d.useRef([]),
            D = d.useRef([]),
            I = d.useMemo(() => V().CancelToken.source(), []),
            K = () => {
              C.current?.firstElementChild &&
                (Ee(C.current.firstElementChild.getBoundingClientRect().height),
                Re(C.current.firstElementChild.getBoundingClientRect().width));
            };
          d.useEffect(() => {
            K();
          }, []),
            d.useEffect(
              () => () => I.cancel("ReorderableList unmounting"),
              [I],
            );
          const ye = (a, t) => {
              const o = x.current[a]?.current;
              if (!o) {
                console.error(
                  "start element grab missing element at index " + a,
                );
                return;
              }
              u(!0), F(a), w(void 0), L(a);
              const p = t.clientX - o.getBoundingClientRect().left;
              R(p);
              const W = t.clientY - o.getBoundingClientRect().top;
              k(W),
                (o.style.position = "fixed"),
                (o.style.left = t.clientX - p + "px"),
                (o.style.top = t.clientY - W + "px"),
                (o.style.zIndex = "1");
            },
            $ = d.useCallback(
              (a) => {
                const t = x.current[E]?.current;
                if (!t) {
                  console.error("update grab element missing element");
                  return;
                }
                (t.style.left = a.clientX - m + "px"),
                  (t.style.top = a.clientY - G + "px");
              },
              [E, m, G],
            ),
            je = d.useCallback(() => {
              const a = x.current[E]?.current;
              a
                ? ((a.style.position = ""), (a.style.zIndex = ""))
                : console.error("end element drag missing element"),
                u(!1),
                F(-1),
                w(void 0),
                L(void 0);
            }, [E]),
            Ce = (a, t) => {
              I.token.reason ||
                (C.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  Me !=
                    C.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  K(),
                ye(t, a),
                a.preventDefault());
            },
            q = (a, t) => {
              const o = ce.OQ(t > a ? t - 1 : t, 0, e.length - 1);
              a != o && (h ? h(a, o) : (0, X.yY)(e, a, o), ee(o), S && S(e));
            },
            xe = (a) => {
              !v || I.token.reason || (je(), q(E, j));
            },
            De = d.useCallback(
              (a) => {
                if (!v || I.token.reason) return;
                const t = a.clientY;
                let o;
                for (let p = 0; p < D.current.length; p++) {
                  const W = D.current[p].current.getBoundingClientRect().top,
                    Ge = D.current[p].current.getBoundingClientRect().bottom,
                    Ne = (W + Ge * 2) / 3;
                  if (t < Ne) {
                    o = p;
                    break;
                  }
                }
                L(o ?? D.current.length), $(a);
              },
              [v, I, $],
            );
          (0, Y.l6)(window, "mousemove", v ? De : void 0),
            (0, Y.l6)(window, "mouseup", v ? xe : void 0),
            d.useEffect(() => {
              for (let a = x.current.length; a < e.length; a++)
                x.current.push(d.createRef()), D.current.push(d.createRef());
            }, [e.length]);
          const _ = (a) => {
              w(void 0);
              const t = z?.trim(),
                o = Number.parseInt(t);
              if (t.length == 0 || isNaN(o)) return;
              const p = o - 1;
              a != p && q(a, p);
            },
            Ie = (a, t) => {
              a.key === "Enter" && (_(t), a.currentTarget.blur());
            },
            [Be, ee] = d.useState(void 0);
          return (0, n.jsx)("div", {
            className: g().WhitelistCtn,
            ref: C,
            children: e.map((a, t) =>
              (0, n.jsxs)(
                "div",
                {
                  ref: D.current[t],
                  children: [
                    t == j && (0, n.jsx)(U, { width: P }),
                    (0, n.jsx)("div", {
                      ref: x.current[t],
                      className: g().DragGhost,
                      children:
                        t == E &&
                        (0, n.jsxs)("div", {
                          className: (0, y.A)(g().WhitelistRow, M),
                          children: [
                            (0, n.jsx)("img", {
                              className: (0, y.A)(
                                g().WhitelistAvatar,
                                g().Grabbing,
                              ),
                              src: O,
                            }),
                            (0, n.jsx)("input", {
                              className: (0, y.A)(
                                g().WhitelistNumber,
                                g().Disabled,
                                g().Grabbing,
                              ),
                              type: "text",
                              value: (j > t ? j - 1 : j) + 1,
                              disabled: !0,
                            }),
                            i(a, t),
                          ],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: (0, y.A)(
                        g().WhitelistRow,
                        M,
                        v && g().DragActive,
                        t == E && g().BeingDragged,
                        Be == t && g().Dropped,
                      ),
                      onAnimationEnd: () => ee(void 0),
                      children: [
                        (0, n.jsx)("img", {
                          className: (0, y.A)(
                            g().WhitelistAvatar,
                            g().Grabbable,
                            A && g().DisabledGrab,
                          ),
                          src: O,
                          onMouseDown: A ? void 0 : (o) => Ce(o, t),
                        }),
                        (0, n.jsx)("input", {
                          className: (0, y.A)(
                            g().WhitelistNumber,
                            A && g().Disabled,
                          ),
                          type: "text",
                          value: be == t ? z : t + 1,
                          disabled: A || t == E,
                          onChange: (o) => Z(o.target.value),
                          onKeyDown: (o) => Ie(o, t),
                          onFocus: (o) => {
                            w(t), Z(o.target.value);
                          },
                          onBlur: () => _(t),
                        }),
                        i(a, t),
                        t != E &&
                          !!(c || s) &&
                          (0, n.jsxs)("div", {
                            className: g().ButtonCtn,
                            children: [
                              !!c &&
                                (0, n.jsx)("div", {
                                  className: H().RemoveIcon,
                                  onClick: (o) => c(t, o),
                                  children: (0, n.jsx)(re.ffu, {}),
                                }),
                              !!s &&
                                (0, n.jsx)("img", {
                                  className: H().RemoveIcon,
                                  src: ie.A,
                                  onClick: (o) => s(t, o),
                                }),
                            ],
                          }),
                      ],
                    }),
                    j == e.length &&
                      t == e.length - 1 &&
                      (0, n.jsx)(U, { width: P }),
                  ],
                },
                t,
              ),
            ),
          });
        }
        function U(l) {
          const { width: e } = l;
          return (0, n.jsx)("div", {
            className: g().DragHighlightContainer,
            children: (0, n.jsx)("div", {
              className: g().DragHighlight,
              style: { width: e },
            }),
          });
        }
        var ue = r(16412),
          me = r(24660),
          ge = r(71421);
        function we(l) {
          const { rgSocialMedia: e } = l,
            [i, s] = React.useState(e ? [...e] : []),
            [c, S] = React.useState(i.length),
            h = React.useCallback(
              (A) => {
                A.length > c && S(A.length), s(A);
              },
              [c],
            );
          return jsxs("div", {
            children: [
              jsx(J, { ...l, rgSocialMediaItems: i, fnSetItems: h }),
              jsx(he, { items: i, maxSeen: c }),
            ],
          });
        }
        function J(l) {
          const {
              rgSocialMediaItems: e,
              fnSetItems: i,
              rgSupportedSocialMediaTypes: s,
              rgValidationData: c,
            } = l,
            S = d.useMemo(
              () =>
                s
                  .filter(
                    (u) =>
                      e.findIndex((m) => m.type === u.type) === -1 ||
                      u.type === "qq" ||
                      u.type === "qqlink",
                  )
                  .map((u) => ({
                    label: (0, f.we)(`#StoreAdmin_SocialMedia_Type_${u.type}`),
                    data: u.type,
                  }))
                  .sort((u, m) => (u.label < m.label ? -1 : 1)),
              [s, e],
            ),
            h = (u) => {
              let m = e.slice();
              m.splice(u, 1), i(m);
            },
            A = (u, m) => {
              let R = e.slice();
              (0, X.yY)(R, u, m), i(R);
            },
            M = (u, m) => {
              const R = e.map((G, k) => (k === u ? { ...G, link: m } : G));
              i(R);
            },
            v = (u) => {
              let m = e.slice();
              m.push({ type: u, link: "" }), i(m);
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(fe, { options: S, onAddLink: v }),
              (0, n.jsx)(de, {
                items: e,
                onDelete: h,
                onMove: A,
                render: (u, m) =>
                  (0, n.jsx)(
                    Ae,
                    {
                      item: u,
                      onUpdateLink: (R) => M(m, R),
                      validationData: c[u.type],
                    },
                    u.type,
                  ),
              }),
            ],
          });
        }
        function fe(l) {
          const { options: e, onAddLink: i } = l,
            s = (c) => {
              const S = c.data;
              S && i(S);
            };
          return (0, n.jsx)("div", {
            className: b.AddLinkDropDown,
            children: (0, n.jsx)(ue.ZU, {
              strDefaultLabel: (0, f.we)("#StoreAdmin_SocialMedia_Add"),
              controlled: !0,
              rgOptions: e,
              onChange: s,
              selectedOption: null,
            }),
          });
        }
        function Q(l, e) {
          let i = !0,
            s = "";
          return (
            e.prefix
              ? (l.type === "mastodon"
                  ? (s = (0, f.we)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      e.prefix.join(", "),
                    ))
                  : (s = (0, f.we)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      e.prefix.join(", "),
                    )),
                l.link &&
                  ((i = !1),
                  e.prefix.forEach((c) => {
                    l.link.startsWith(c) && (i = !0);
                  })))
              : e.number
                ? ((s = (0, f.we)("#StoreAdmin_SocialMedia_ValidationNumber")),
                  l.link && (i = /^\d+$/.test(l.link)))
                : e.text
                  ? (s = (0, f.we)("#StoreAdmin_SocialMedia_ValidationText"))
                  : e.regex &&
                    l.type === "tumblr" &&
                    (s = (0, f.we)("#StoreAdmin_SocialMedia_ValidationTumblr")),
            { bValid: i, strTooltip: s }
          );
        }
        function Ae(l) {
          const { item: e, onUpdateLink: i, validationData: s } = l;
          let c;
          s.number
            ? (c = (0, f.we)("#StoreAdmin_SocialMedia_EnterNumber"))
            : s.text
              ? (c = (0, f.we)("#StoreAdmin_SocialMedia_EnterName"))
              : (c = (0, f.we)("#StoreAdmin_SocialMedia_EnterLink"));
          const { bValid: S, strTooltip: h } = Q(e, s);
          return (0, n.jsxs)("div", {
            className: b.SocialMediaRow,
            children: [
              (0, n.jsx)("div", {
                className: b.SocialMediaType,
                children: (0, f.we)(`#StoreAdmin_SocialMedia_Type_${e.type}`),
              }),
              (0, n.jsx)(me.BA, {
                className: b.SocialMediaLink,
                type: "text",
                value: e.link,
                placeholder: c,
                onChange: (A) => i(A.target.value),
              }),
              h &&
                (0, n.jsx)(ge.he, {
                  className: b.SocialMediaTooltip,
                  toolTipContent: h,
                  children: "(?)",
                }),
              !S &&
                (0, n.jsx)("div", {
                  className: b.ValidationError,
                  children: h,
                }),
            ],
          });
        }
        function Se(l, e) {
          let i = Array(),
            s = 0;
          for (
            l.forEach((c) => {
              c.link &&
                (i.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${s}][type]`,
                    value: c.type,
                  }),
                ),
                i.push(
                  React.createElement("input", {
                    type: "hidden",
                    name: `app[content][ordered_social_links][${s}][link]`,
                    value: c.link,
                  }),
                ),
                s++);
            });
            s < e;
          )
            i.push(
              React.createElement("input", {
                type: "hidden",
                name: `app[content][ordered_social_links][${s}]`,
                value: "",
              }),
            ),
              s++;
          return (
            [
              "discord_server",
              "youtube",
              "facebook",
              "twitter",
              "twitch",
            ].forEach((c) => {
              i.push(
                React.createElement("input", {
                  type: "hidden",
                  name: `app[content][links][${c}]`,
                  value: "",
                }),
              );
            }),
            i
          );
        }
        function he(l) {
          const { items: e, maxSeen: i } = l,
            s = React.useMemo(() => Se(e, i), [e, i]);
          return jsxs(Fragment, { children: [...s] });
        }
        var pe = r(85599);
        function ve(l) {
          const { clanAccountID: e, page_config: i } = l,
            s = ae(),
            [c, S] = (0, d.useState)(() => i?.social_media ?? []),
            [h, A] = (0, d.useState)(() => i?.social_media ?? []);
          return s
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)("h4", {
                    children: (0, f.we)("#CreatorHome_SocialMedia_Title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, f.we)("#CreatorHome_SocialMedia_Desc"),
                  }),
                  (0, n.jsxs)("blockquote", {
                    children: [
                      (0, n.jsx)(J, {
                        rgValidationData: s.rgValidationData,
                        rgSupportedSocialMediaTypes:
                          s.rgSupportedSocialMediaTypes,
                        rgSocialMediaItems: c,
                        fnSetItems: (M) => {
                          S(M);
                          const v = s.rgValidationData,
                            u = M.filter((m) => !!m.link).filter(
                              (m) => Q(m, v[m.type]).bValid,
                            );
                          A(u);
                        },
                      }),
                      h?.length > 0 &&
                        (0, n.jsx)("input", {
                          type: "hidden",
                          name: "social_media",
                          value: JSON.stringify(h),
                        }),
                      (0, n.jsx)("a", {
                        className: "btnv6_blue_hoverfade btn_medium",
                        href: "#",
                        onClick: (M) => {
                          M.preventDefault(),
                            window.g_StoreLocHelper?.SaveFields(["tagline"]),
                            window.UpdateCuratorFromForm?.(
                              document.getElementById("listform"),
                            );
                        },
                        children: (0, n.jsx)("span", {
                          children: (0, f.we)("#Button_Save"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, n.jsx)(pe.t, {
                string: (0, f.we)("#Loading"),
                position: "center",
              });
        }
      },
      47534: (B) => {
        B.exports = {
          SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
          SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
          SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
          SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
          ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
          AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
        };
      },
      41609: (B) => {
        B.exports = {
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
      44894: (B, N, r) => {
        "use strict";
        r.d(N, { A: () => n });
        const n =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
