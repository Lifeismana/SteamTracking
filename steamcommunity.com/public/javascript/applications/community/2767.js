/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2767],
    {
      54601: (u, n, s) => {
        "use strict";
        s.d(n, { V: () => W });
        var e = s(7850),
          C = s(90626),
          A = s(18210),
          y = s(36707),
          T = s(95695),
          L = s.n(T),
          w = s(14256),
          i = s.n(w),
          r = s(71421),
          p = s(96715),
          O = s(19298);
        const W = (h) => {
          const c = C.createRef(),
            [z, a] = C.useState(""),
            g = C.createRef(),
            o = () => {
              var U;
              const _ =
                (U = c.current) == null ? void 0 : U.ownerDocument.defaultView;
              c.current &&
                _ &&
                _.navigator.clipboard
                  .writeText(c.current.value)
                  .then((B) => {
                    a((0, A.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((B) => {
                    a((0, A.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", B);
                  });
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: (0, y.A)(L().FlexRowContainer, i().linkField),
                onClick: o,
                children: [
                  (0, e.jsx)("span", {
                    className: i().LinkInputLabel,
                    children: (0, A.we)(
                      h.labelOverride
                        ? h.labelOverride
                        : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    className: i().LinkInput,
                    ref: c,
                    value: h.eventLink,
                    readOnly: !0,
                  }),
                  document.queryCommandSupported("copy") &&
                    (0, e.jsx)(O.Z, {
                      className: (0, y.A)(L().Button, L().Icon, i().LinkButton),
                      onActivate: o,
                      children: (0, e.jsx)(r.Gq, {
                        toolTipContent: (0, A.we)(
                          "#ToolTip_CopyLinkToClipboard",
                        ),
                        children: (0, e.jsx)("img", {
                          className: i().ClipboardIcon,
                          src: p.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                ref: g,
                className: i().ClipboardText,
                children: z,
              }),
            ],
          });
        };
      },
      63337: (u, n, s) => {
        "use strict";
        s.r(n), s.d(n, { default: () => K });
        var e = s(7850),
          C = s(90626),
          A = s(99412),
          y = s(19298),
          T = s(95695),
          L = s.n(T),
          w = s(47875),
          i = s(36707),
          r = s(18210),
          p = s(54963),
          O = s(3166),
          W = s(96264),
          h = s(10886),
          c = s(19654),
          z = s(3209),
          a = s(2801),
          g = s(71421),
          o = s(53107),
          U = s(14256),
          _ = s.n(U),
          B = s(24806),
          b = s(37154),
          Z = s(19316),
          k = s(54601),
          S = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          G = (D, t, M) =>
            t in D
              ? S(D, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: M,
                })
              : (D[t] = M),
          v = (D, t, M, N) => {
            for (
              var l = N > 1 ? void 0 : N ? J(t, M) : t, E = D.length - 1, I;
              E >= 0;
              E--
            )
              (I = D[E]) && (l = (N ? I(t, M, l) : I(l)) || l);
            return N && l && S(t, M, l), l;
          },
          f = (D, t, M) => G(D, typeof t != "symbol" ? t + "" : t, M);
        class K extends C.Component {
          constructor() {
            super(...arguments),
              f(this, "state", {
                bShareOnSteamDialog: !1,
                bRequireLoginToShare: !1,
              });
          }
          ShareOnSteamActivityFeed() {
            O.iA.logged_in
              ? this.setState({ bShareOnSteamDialog: !0 })
              : O.TS.IN_CLIENT
                ? console.log(
                    "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : this.setState({ bRequireLoginToShare: !0 });
          }
          render() {
            const {
              eventLink: t,
              sharePageUrls: M,
              appid: N,
              closeModal: l,
              emoticonStore: E,
              partnerEventStore: I,
            } = this.props;
            return this.state.bRequireLoginToShare
              ? (0, e.jsx)(a.o0, {
                  strTitle: (0, r.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, r.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, r.we)("#MobileLogin_SignIn"),
                  onCancel: this.props.closeModal,
                  onOK: () => (0, w.l)(),
                })
              : this.state.bShareOnSteamDialog
                ? (0, e.jsx)(b.J, {
                    eventLink: t,
                    appid: N,
                    emoticonStore: E,
                    partnerEventStore: I,
                    closeModal: l,
                  })
                : (0, e.jsx)(a.o0, {
                    strDescription: "",
                    strTitle: (0, r.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                    children: (0, e.jsx)(F, {
                      eventLink: t,
                      sharePageUrls: M,
                      fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                    }),
                  });
          }
        }
        v([p.oI], K.prototype, "ShareOnSteamActivityFeed", 1);
        const m = "l",
          F = (D) => {
            const {
                eventLink: t,
                sharePageUrls: M,
                fnShareOnSteamActivityFeed: N,
              } = D,
              l = (0, O.Y2)(),
              [E, I] = (0, C.useState)((0, A.sfN)(O.TS.LANGUAGE)),
              H = (0, C.useMemo)(() => {
                const Y = new URL(t);
                return Y.searchParams.set(m, (0, A.LgB)(E)), Y.href;
              }, [E, t]);
            return (0, e.jsxs)("div", {
              className: (0, i.A)(
                L().FlexColumnContainer,
                _().share_controls_ctn,
              ),
              children: [
                !l &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: _().ShareLanguagePicker,
                        children: [
                          (0, e.jsx)(Z.JU, {
                            className: _().LanguageLabel,
                            children: (0, r.we)(
                              "#EventDisplay_Share_LanguageLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(B.Ng, {
                              selectedLang: E,
                              fnOnLanguageChanged: I,
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, i.A)(
                          L().FlexRowContainer,
                          _().ShareButtonContainer,
                        ),
                        style: { flexWrap: "wrap" },
                        children: [
                          (0, e.jsx)(g.he, {
                            toolTipContent: (0, r.we)(
                              "#EventDisplay_Share_OnSteam",
                            ),
                            children: (0, e.jsxs)(y.Z, {
                              onClick: N,
                              className: (0, i.A)(
                                L().Button,
                                _().ShareBtn,
                                _().ShareSteamBtn,
                              ),
                              children: [
                                (0, e.jsx)("img", {
                                  className: _().SteamIcon,
                                  src: W.A,
                                }),
                                (0, e.jsx)("span", {
                                  style: { whiteSpace: "nowrap" },
                                  children: (0, r.we)(
                                    "#EventDisplay_Share_OnMyStatus",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(g.he, {
                            toolTipContent: (0, r.we)(
                              "#EventDisplay_Share_OnFaceBook",
                            ),
                            children: (0, e.jsx)(o.uU, {
                              href: M.strFacebookUrl,
                              className: _().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, i.A)(L().Button),
                                src: h.A,
                              }),
                            }),
                          }),
                          (0, e.jsx)(g.he, {
                            toolTipContent: (0, r.we)(
                              "#EventDisplay_Share_OnTwitter",
                            ),
                            children: (0, e.jsx)(o.uU, {
                              href: M.strTwitterUrl,
                              className: _().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, i.A)(L().Button),
                                src: z.A,
                              }),
                            }),
                          }),
                          (0, e.jsx)(g.he, {
                            toolTipContent: (0, r.we)(
                              "#EventDisplay_Share_OnReddit",
                            ),
                            children: (0, e.jsx)(o.uU, {
                              href: M.strRedditUrl,
                              className: _().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, i.A)(L().Button),
                                src: c.A,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: L().Divider }),
                    ],
                  }),
                (0, e.jsx)(k.V, { eventLink: H }),
              ],
            });
          };
      },
      37154: (u, n, s) => {
        "use strict";
        s.d(n, { J: () => G });
        var e = s(7850),
          C = s(41735),
          A = s.n(C),
          y = s(75844),
          T = s(90626),
          L = s(25518),
          w = s(72604),
          i = s(35038),
          r = s(85528),
          p = s(76559),
          O = s(75916),
          W = s(45638),
          h = s(95695),
          c = s.n(h),
          z = s(36707),
          a = s(18210),
          g = s(34592),
          o = s(3166),
          U = s(2801),
          _ = s(85599),
          B = s(24288),
          b = s(87847),
          Z = s(26040),
          k = s(86244),
          S = s.n(k),
          J = s(35098);
        const G = (0, y.PA)((v) => {
          const { appid: f, eventLink: K } = v,
            m = T.useRef(null),
            { data: F } = (0, J.js)(o.iA.steamid),
            [D, t] = T.useState(""),
            [M, N] = T.useState(!1),
            [l, E] = T.useState(""),
            [I, H] = T.useState(!1);
          T.useEffect(
            () => () => {
              var P;
              (P = m.current) == null ||
                P.call(m, "ShareEventOnFriendsActivityFeed: unmounting");
            },
            [],
          );
          const Y = F == null ? void 0 : F.avatar_url,
            V = p.b.InitFromAccountID(o.iA.accountid),
            $ = async () => {
              var P, X;
              m.current &&
                m.current(
                  "ShareEventOnFriendsActivityFeed: cancel previous...",
                );
              const R = A().CancelToken.source();
              (m.current = R.cancel), N(!0);
              let Q = D;
              Q.trim().length != 0 &&
                (Q += `

`),
                (Q += K);
              const q =
                o.TS.COMMUNITY_BASE_URL +
                "profiles/" +
                V.ConvertTo64BitString() +
                "/ajaxpostuserstatus";
              try {
                if (o.TS.IN_STEAMUI) {
                  let d = i.w.Init(O.kVt);
                  d.Body().set_appid(f), d.Body().set_status_text(Q);
                  let j = await O.xtC.PostStatusToFriends(
                    r.Vw.CMInterface.GetServiceTransport(),
                    d,
                  );
                  if (j.GetEResult() != w.R) {
                    const x =
                      (0, a.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      j.GetEResult();
                    console.error(x, !R.token.reason), R.token.reason || E(x);
                    return;
                  }
                } else {
                  const d = new FormData();
                  d.append("appid", "" + f),
                    d.append("status_text", Q),
                    d.append("sessionid", (0, o.KC)());
                  const j = await A().post(q, d, { withCredentials: !0 });
                  if (
                    j.status != 200 ||
                    ((P = j == null ? void 0 : j.data) == null
                      ? void 0
                      : P.success) != w.R
                  ) {
                    const x =
                      (0, a.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      ((X = j == null ? void 0 : j.data) == null
                        ? void 0
                        : X.message);
                    console.error(x), R.token.reason || E(x);
                    return;
                  }
                }
                R.token.reason ||
                  (H(!0), E((0, a.we)("#EventDisplay_Share_Success")));
              } catch (d) {
                const j = (0, g.H)(d),
                  x =
                    (0, a.we)("#EventDisplay_Share_Failure") +
                    `

` +
                    j.strErrorMsg;
                R.token.reason || E(x), console.error(x);
              }
            };
          return M
            ? (0, e.jsx)(U.o0, {
                strDescription: "",
                strTitle: (0, a.we)("#Button_Share"),
                onCancel: v.closeModal,
                onOK: v.closeModal,
                bAlertDialog: !0,
                children: (0, e.jsxs)("div", {
                  className: c().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, a.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: S().Container,
                      children: [
                        (l == null ? void 0 : l.length) == 0
                          ? (0, e.jsx)(_.t, { position: "center" })
                          : (0, e.jsx)("div", { children: l }),
                        !!I &&
                          (0, e.jsx)("a", {
                            href:
                              o.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              V.ConvertTo64BitString() +
                              "/home",
                            target: o.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, a.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, e.jsx)(U.o0, {
                strDescription: "",
                strTitle: (0, a.we)("#Button_Share"),
                onCancel: v.closeModal,
                onOK: $,
                strOKButtonText: (0, a.we)("#Button_Post"),
                children: (0, e.jsxs)("div", {
                  className: c().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, a.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, z.A)(
                        S().Container,
                        c().FlexColumnContainer,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("img", {
                              className: S().SmallAvatar,
                              src: Y,
                              "data-miniprofile": "s" + o.iA.steamid,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, z.A)(c().FlexColumnContainer),
                              children: (0, e.jsx)(W.I, {
                                strPlaceholder: (0, a.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => D,
                                fnOnTextChange: (P) => t(P.currentTarget.value),
                                fnSetText: t,
                                emoticonStore: v.emoticonStore,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: L.iH,
                                classNameForTextArea: S().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: S().ShareLink,
                          children: (0, e.jsx)(Z.Rh, {
                            linkWidgets: (0, b.rx)(),
                            children: (0, e.jsx)(B.Zn, {
                              text: K,
                              partnerEventStore: v.partnerEventStore,
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
      86244: (u) => {
        u.exports = {
          Container: "_2vGr9KsApU0s59_ZsZVxXY",
          SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
          ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
          ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
        };
      },
      96715: (u, n, s) => {
        "use strict";
        s.d(n, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      96264: (u, n, s) => {
        "use strict";
        s.d(n, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
      },
      10886: (u, n, s) => {
        "use strict";
        s.d(n, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (u, n, s) => {
        "use strict";
        s.d(n, { A: () => e });
        const e =
          s.p +
          "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (u, n, s) => {
        "use strict";
        s.d(n, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
