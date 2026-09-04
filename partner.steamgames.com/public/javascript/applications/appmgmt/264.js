/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [264],
    {
      60264: (g, j, t) => {
        "use strict";
        t.r(j), t.d(j, { default: () => B });
        var e = t(7850),
          L = t(90626),
          m = t(99412),
          v = t(19298),
          F = t(95695),
          r = t.n(F),
          b = t(47875),
          T = t(36707),
          s = t(18210),
          R = t(54963),
          A = t(3166);
        const P =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
        var Y = t(10886),
          f = t(19654),
          Z = t(3209),
          E = t(2801),
          x = t(71421),
          h = t(53107),
          J = t(14256),
          a = t.n(J),
          G = t(24806),
          H = t(41735),
          U = t.n(H),
          V = t(75844),
          W = t(25518),
          O = t(72604),
          K = t(35038),
          X = t(85528),
          $ = t(76559),
          p = t(59514),
          q = t(98534),
          _ = t(34592),
          ee = t(85599),
          te = t(31151),
          se = t(87847),
          ne = t(26040),
          ae = t(86244),
          I = t.n(ae),
          ie = t(30131);
        const Me = (0, V.PA)((i) => {
          const { appid: n, eventLink: N } = i,
            M = L.useRef(null),
            { data: o } = (0, ie.js)(A.iA.steamid),
            [l, c] = L.useState(""),
            [C, w] = L.useState(!1),
            [Q, z] = L.useState(""),
            [Te, De] = L.useState(!1);
          L.useEffect(
            () => () => {
              M.current?.("ShareEventOnFriendsActivityFeed: unmounting");
            },
            [],
          );
          const de = o?.avatar_url,
            k = $.b.InitFromAccountID(A.iA.accountid),
            ue = async () => {
              M.current &&
                M.current(
                  "ShareEventOnFriendsActivityFeed: cancel previous...",
                );
              const d = U().CancelToken.source();
              (M.current = d.cancel), w(!0);
              let y = l;
              y.trim().length != 0 &&
                (y += `

`),
                (y += N);
              const Se =
                A.TS.COMMUNITY_BASE_URL +
                "profiles/" +
                k.ConvertTo64BitString() +
                "/ajaxpostuserstatus";
              try {
                if (A.TS.IN_STEAMUI) {
                  let D = K.w.Init(p.kVt);
                  D.Body().set_appid(n), D.Body().set_status_text(y);
                  let u = await p.xtC.PostStatusToFriends(
                    X.Vw.CMInterface.GetServiceTransport(),
                    D,
                  );
                  if (u.GetEResult() != O.R) {
                    const S =
                      (0, s.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      u.GetEResult();
                    console.error(S, !d.token.reason), d.token.reason || z(S);
                    return;
                  }
                } else {
                  const D = new FormData();
                  D.append("appid", "" + n),
                    D.append("status_text", y),
                    D.append("sessionid", (0, A.KC)());
                  const u = await U().post(Se, D, { withCredentials: !0 });
                  if (u.status != 200 || u?.data?.success != O.R) {
                    const S =
                      (0, s.we)("#EventDisplay_Share_Failure") +
                      `

` +
                      u?.data?.message;
                    console.error(S), d.token.reason || z(S);
                    return;
                  }
                }
                d.token.reason ||
                  (De(!0), z((0, s.we)("#EventDisplay_Share_Success")));
              } catch (D) {
                const u = (0, _.H)(D),
                  S =
                    (0, s.we)("#EventDisplay_Share_Failure") +
                    `

` +
                    u.strErrorMsg;
                d.token.reason || z(S), console.error(S);
              }
            };
          return C
            ? (0, e.jsx)(E.o0, {
                strDescription: "",
                strTitle: (0, s.we)("#Button_Share"),
                onCancel: i.closeModal,
                onOK: i.closeModal,
                bAlertDialog: !0,
                children: (0, e.jsxs)("div", {
                  className: r().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: I().Container,
                      children: [
                        Q?.length == 0
                          ? (0, e.jsx)(ee.t, { position: "center" })
                          : (0, e.jsx)("div", { children: Q }),
                        !!Te &&
                          (0, e.jsx)("a", {
                            href:
                              A.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              k.ConvertTo64BitString() +
                              "/home",
                            target: A.TS.IN_CLIENT ? void 0 : "_blank",
                            children: (0, s.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, e.jsx)(E.o0, {
                strDescription: "",
                strTitle: (0, s.we)("#Button_Share"),
                onCancel: i.closeModal,
                onOK: ue,
                strOKButtonText: (0, s.we)("#Button_Post"),
                children: (0, e.jsxs)("div", {
                  className: r().FlexColumnContainer,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, s.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, T.A)(
                        I().Container,
                        r().FlexColumnContainer,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("img", {
                              className: I().SmallAvatar,
                              src: de,
                              "data-miniprofile": "s" + A.iA.steamid,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, T.A)(r().FlexColumnContainer),
                              children: (0, e.jsx)(q.I, {
                                strPlaceholder: (0, s.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => l,
                                fnOnTextChange: (d) => c(d.currentTarget.value),
                                fnSetText: c,
                                emoticonStore: i.emoticonStore,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: W.iH,
                                classNameForTextArea: I().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: I().ShareLink,
                          children: (0, e.jsx)(ne.Rh, {
                            linkWidgets: (0, se.rx)(),
                            children: (0, e.jsx)(te.Zn, {
                              text: N,
                              partnerEventStore: i.partnerEventStore,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        });
        var oe = t(58534),
          le = t(96715);
        const re = (i) => {
          const n = L.createRef(),
            [N, M] = L.useState(""),
            o = L.createRef(),
            l = () => {
              const c = n.current?.ownerDocument.defaultView;
              n.current &&
                c &&
                c.navigator.clipboard
                  .writeText(n.current.value)
                  .then((C) => {
                    M((0, s.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((C) => {
                    M((0, s.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", C);
                  });
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", {
                className: (0, T.A)(r().FlexRowContainer, a().linkField),
                onClick: l,
                children: [
                  (0, e.jsx)("span", {
                    className: a().LinkInputLabel,
                    children: (0, s.we)(
                      i.labelOverride
                        ? i.labelOverride
                        : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, e.jsx)("input", {
                    className: a().LinkInput,
                    ref: n,
                    value: i.eventLink,
                    readOnly: !0,
                  }),
                  document.queryCommandSupported("copy") &&
                    (0, e.jsx)(v.Z, {
                      className: (0, T.A)(r().Button, r().Icon, a().LinkButton),
                      onActivate: l,
                      children: (0, e.jsx)(x.Gq, {
                        toolTipContent: (0, s.we)(
                          "#ToolTip_CopyLinkToClipboard",
                        ),
                        children: (0, e.jsx)("img", {
                          className: a().ClipboardIcon,
                          src: le.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                ref: o,
                className: a().ClipboardText,
                children: N,
              }),
            ],
          });
        };
        var Ne = Object.defineProperty,
          ce = Object.getOwnPropertyDescriptor,
          Le = (i, n, N, M) => {
            for (
              var o = M > 1 ? void 0 : M ? ce(n, N) : n, l = i.length - 1, c;
              l >= 0;
              l--
            )
              (c = i[l]) && (o = (M ? c(n, N, o) : c(o)) || o);
            return M && o && Ne(n, N, o), o;
          };
        class B extends L.Component {
          state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
          ShareOnSteamActivityFeed() {
            A.iA.logged_in
              ? this.setState({ bShareOnSteamDialog: !0 })
              : A.TS.IN_CLIENT
                ? console.log(
                    "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : this.setState({ bRequireLoginToShare: !0 });
          }
          render() {
            const {
              eventLink: n,
              sharePageUrls: N,
              appid: M,
              closeModal: o,
              emoticonStore: l,
              partnerEventStore: c,
            } = this.props;
            return this.state.bRequireLoginToShare
              ? (0, e.jsx)(E.o0, {
                  strTitle: (0, s.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, s.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, s.we)("#MobileLogin_SignIn"),
                  onCancel: this.props.closeModal,
                  onOK: () => (0, b.l)(),
                })
              : this.state.bShareOnSteamDialog
                ? (0, e.jsx)(Me, {
                    eventLink: n,
                    appid: M,
                    emoticonStore: l,
                    partnerEventStore: c,
                    closeModal: o,
                  })
                : (0, e.jsx)(E.o0, {
                    strDescription: "",
                    strTitle: (0, s.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                    children: (0, e.jsx)(je, {
                      eventLink: n,
                      sharePageUrls: N,
                      fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                    }),
                  });
          }
        }
        Le([R.oI], B.prototype, "ShareOnSteamActivityFeed", 1);
        const Ae = "l",
          je = (i) => {
            const {
                eventLink: n,
                sharePageUrls: N,
                fnShareOnSteamActivityFeed: M,
              } = i,
              o = (0, A.Y2)(),
              [l, c] = (0, L.useState)((0, m.sfN)(A.TS.LANGUAGE)),
              C = (0, L.useMemo)(() => {
                const w = new URL(n);
                return w.searchParams.set(Ae, (0, m.LgB)(l)), w.href;
              }, [l, n]);
            return (0, e.jsxs)("div", {
              className: (0, T.A)(
                r().FlexColumnContainer,
                a().share_controls_ctn,
              ),
              children: [
                !o &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: a().ShareLanguagePicker,
                        children: [
                          (0, e.jsx)(oe.JU, {
                            className: a().LanguageLabel,
                            children: (0, s.we)(
                              "#EventDisplay_Share_LanguageLabel",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(G.Ng, {
                              selectedLang: l,
                              fnOnLanguageChanged: c,
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, T.A)(
                          r().FlexRowContainer,
                          a().ShareButtonContainer,
                        ),
                        style: { flexWrap: "wrap" },
                        children: [
                          (0, e.jsx)(x.he, {
                            toolTipContent: (0, s.we)(
                              "#EventDisplay_Share_OnSteam",
                            ),
                            children: (0, e.jsxs)(v.Z, {
                              onClick: M,
                              className: (0, T.A)(
                                r().Button,
                                a().ShareBtn,
                                a().ShareSteamBtn,
                              ),
                              children: [
                                (0, e.jsx)("img", {
                                  className: a().SteamIcon,
                                  src: P,
                                }),
                                (0, e.jsx)("span", {
                                  style: { whiteSpace: "nowrap" },
                                  children: (0, s.we)(
                                    "#EventDisplay_Share_OnMyStatus",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)(x.he, {
                            toolTipContent: (0, s.we)(
                              "#EventDisplay_Share_OnFaceBook",
                            ),
                            children: (0, e.jsx)(h.uU, {
                              href: N.strFacebookUrl,
                              className: a().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, T.A)(r().Button),
                                src: Y.A,
                              }),
                            }),
                          }),
                          (0, e.jsx)(x.he, {
                            toolTipContent: (0, s.we)(
                              "#EventDisplay_Share_OnTwitter",
                            ),
                            children: (0, e.jsx)(h.uU, {
                              href: N.strTwitterUrl,
                              className: a().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, T.A)(r().Button),
                                src: Z.A,
                              }),
                            }),
                          }),
                          (0, e.jsx)(x.he, {
                            toolTipContent: (0, s.we)(
                              "#EventDisplay_Share_OnReddit",
                            ),
                            children: (0, e.jsx)(h.uU, {
                              href: N.strRedditUrl,
                              className: a().ShareBtn,
                              children: (0, e.jsx)("img", {
                                className: (0, T.A)(r().Button),
                                src: f.A,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: r().Divider }),
                    ],
                  }),
                (0, e.jsx)(re, { eventLink: C }),
              ],
            });
          };
      },
      86244: (g) => {
        g.exports = {
          Container: "_2vGr9KsApU0s59_ZsZVxXY",
          SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
          ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
          ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
        };
      },
      96715: (g, j, t) => {
        "use strict";
        t.d(j, { A: () => e });
        const e =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (g, j, t) => {
        "use strict";
        t.d(j, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (g, j, t) => {
        "use strict";
        t.d(j, { A: () => e });
        const e =
          t.p +
          "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (g, j, t) => {
        "use strict";
        t.d(j, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
