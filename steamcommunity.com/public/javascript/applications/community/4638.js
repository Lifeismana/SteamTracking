/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4638],
  {
    86244: (e) => {
      e.exports = {
        Container: "_2vGr9KsApU0s59_ZsZVxXY",
        SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
        ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
        ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
      };
    },
    5618: (e, t, s) => {
      "use strict";
      s.d(t, { V: () => j });
      var n = s(7850),
        i = s(90626),
        M = s(61859),
        a = s(52038),
        o = s(95695),
        r = s.n(o),
        N = s(14256),
        c = s.n(N),
        l = s(32754),
        L = s(96715),
        A = s(76217);
      const j = (e) => {
        const t = i.createRef(),
          [s, o] = i.useState(""),
          N = i.createRef(),
          j = () => {
            var e;
            const s =
              null === (e = t.current) || void 0 === e
                ? void 0
                : e.ownerDocument.defaultView;
            t.current &&
              s &&
              s.navigator.clipboard
                .writeText(t.current.value)
                .then((e) => {
                  o((0, M.we)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((e) => {
                  o((0, M.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", e);
                });
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: (0, a.A)(r().FlexRowContainer, c().linkField),
              onClick: j,
              children: [
                (0, n.jsx)("span", {
                  className: c().LinkInputLabel,
                  children: (0, M.we)(
                    e.labelOverride
                      ? e.labelOverride
                      : "#EventDisplay_Share_Link",
                  ),
                }),
                (0, n.jsx)("input", {
                  className: c().LinkInput,
                  ref: t,
                  value: e.eventLink,
                  readOnly: !0,
                }),
                document.queryCommandSupported("copy") &&
                  (0, n.jsx)(A.Z, {
                    className: (0, a.A)(r().Button, r().Icon, c().LinkButton),
                    onActivate: j,
                    children: (0, n.jsx)(l.Gq, {
                      toolTipContent: (0, M.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, n.jsx)("img", {
                        className: c().ClipboardIcon,
                        src: L.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: N,
              className: c().ClipboardText,
              children: s,
            }),
          ],
        });
      };
    },
    94446: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => h });
      var n = s(34629),
        i = s(7850),
        M = s(90626),
        a = s(22837),
        o = s(76217),
        r = s(95695),
        N = s.n(r),
        c = s(82477),
        l = s(52038),
        L = s(61859),
        A = s(73745),
        j = s(78327),
        D = s(96264),
        T = s(10886),
        u = s(19654),
        d = s(3209),
        w = s(9154),
        S = s(32754),
        C = s(51272),
        x = s(14256),
        I = s.n(x),
        g = s(1909),
        y = s(19989),
        E = s(68255),
        z = s(5618);
      class h extends M.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShareOnSteamDialog: !1,
              bRequireLoginToShare: !1,
            });
        }
        ShareOnSteamActivityFeed() {
          j.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : j.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            sharePageUrls: t,
            appid: s,
            closeModal: n,
            emoticonStore: M,
            partnerEventStore: a,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, i.jsx)(w.o0, {
                strTitle: (0, L.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, L.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, L.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, c.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, i.jsx)(y.J, {
                  eventLink: e,
                  appid: s,
                  emoticonStore: M,
                  partnerEventStore: a,
                  closeModal: n,
                })
              : (0, i.jsx)(w.o0, {
                  strDescription: "",
                  strTitle: (0, L.we)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, i.jsx)(m, {
                    eventLink: e,
                    sharePageUrls: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, n.Cg)([A.oI], h.prototype, "ShareOnSteamActivityFeed", null);
      const m = (e) => {
        const {
            eventLink: t,
            sharePageUrls: s,
            fnShareOnSteamActivityFeed: n,
          } = e,
          r = (0, j.Y2)(),
          [c, A] = (0, M.useState)((0, a.sfN)(j.TS.LANGUAGE)),
          w = (0, M.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, a.LgB)(c)), e.href;
          }, [c, t]);
        return (0, i.jsxs)("div", {
          className: (0, l.A)(N().FlexColumnContainer, I().share_controls_ctn),
          children: [
            !r &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    className: I().ShareLanguagePicker,
                    children: [
                      (0, i.jsx)(E.JU, {
                        className: I().LanguageLabel,
                        children: (0, L.we)(
                          "#EventDisplay_Share_LanguageLabel",
                        ),
                      }),
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(g.Ng, {
                          selectedLang: c,
                          fnOnLanguageChanged: A,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: (0, l.A)(
                      N().FlexRowContainer,
                      I().ShareButtonContainer,
                    ),
                    style: { flexWrap: "wrap" },
                    children: [
                      (0, i.jsx)(S.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnSteam",
                        ),
                        children: (0, i.jsxs)(o.Z, {
                          onClick: n,
                          className: (0, l.A)(
                            N().Button,
                            I().ShareBtn,
                            I().ShareSteamBtn,
                          ),
                          children: [
                            (0, i.jsx)("img", {
                              className: I().SteamIcon,
                              src: D.A,
                            }),
                            (0, i.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(S.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, i.jsx)(C.uU, {
                          href: s.strFacebookUrl,
                          className: I().ShareBtn,
                          children: (0, i.jsx)("img", {
                            className: (0, l.A)(N().Button),
                            src: T.A,
                          }),
                        }),
                      }),
                      (0, i.jsx)(S.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, i.jsx)(C.uU, {
                          href: s.strTwitterUrl,
                          className: I().ShareBtn,
                          children: (0, i.jsx)("img", {
                            className: (0, l.A)(N().Button),
                            src: d.A,
                          }),
                        }),
                      }),
                      (0, i.jsx)(S.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, i.jsx)(C.uU, {
                          href: s.strRedditUrl,
                          className: I().ShareBtn,
                          children: (0, i.jsx)("img", {
                            className: (0, l.A)(N().Button),
                            src: u.A,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: N().Divider }),
                ],
              }),
            (0, i.jsx)(z.V, { eventLink: w }),
          ],
        });
      };
    },
    19989: (e, t, s) => {
      "use strict";
      s.d(t, { J: () => m });
      var n = s(7850),
        i = s(41735),
        M = s.n(i),
        a = s(75844),
        o = s(90626),
        r = s(79821),
        N = s(37085),
        c = s(56545),
        l = s(51006),
        L = s(17720),
        A = s(78619),
        j = s(9239),
        D = s(95695),
        T = s.n(D),
        u = s(52038),
        d = s(61859),
        w = s(68797),
        S = s(78327),
        C = s(9154),
        x = s(22797),
        I = s(1903),
        g = s(36556),
        y = s(72967),
        E = s(86244),
        z = s.n(E),
        h = s(41471);
      const m = (0, a.PA)((e) => {
        const { appid: t, eventLink: s } = e,
          i = o.useRef(null),
          { data: a } = (0, h.js)(S.iA.steamid),
          [D, E] = o.useState(""),
          [m, p] = o.useState(!1),
          [U, k] = o.useState(""),
          [O, v] = o.useState(!1);
        o.useEffect(
          () => () => {
            var e;
            null === (e = i.current) ||
              void 0 === e ||
              e.call(i, "ShareEventOnFriendsActivityFeed: unmounting");
          },
          [],
        );
        const B = null == a ? void 0 : a.avatar_url,
          b = L.b.InitFromAccountID(S.iA.accountid),
          Q = async () => {
            var e, n;
            i.current &&
              i.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const a = M().CancelToken.source();
            (i.current = a.cancel), p(!0);
            let o = D;
            0 != o.trim().length && (o += "\n\n"), (o += s);
            const r =
              S.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              b.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (S.TS.IN_STEAMUI) {
                let e = c.w.Init(A.kVt);
                e.Body().set_appid(t), e.Body().set_status_text(o);
                let s = await A.xtC.PostStatusToFriends(
                  l.Vw.CMInterface.GetServiceTransport(),
                  e,
                );
                if (s.GetEResult() != N.R) {
                  const e =
                    (0, d.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    s.GetEResult();
                  return (
                    console.error(e, !a.token.reason),
                    void (a.token.reason || k(e))
                  );
                }
              } else {
                const s = new FormData();
                s.append("appid", "" + t),
                  s.append("status_text", o),
                  s.append("sessionid", (0, S.KC)());
                const i = await M().post(r, s, { withCredentials: !0 });
                if (
                  200 != i.status ||
                  (null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.success) != N.R
                ) {
                  const e =
                    (0, d.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    (null === (n = null == i ? void 0 : i.data) || void 0 === n
                      ? void 0
                      : n.message);
                  return console.error(e), void (a.token.reason || k(e));
                }
              }
              a.token.reason ||
                (v(!0), k((0, d.we)("#EventDisplay_Share_Success")));
            } catch (e) {
              const t = (0, w.H)(e),
                s =
                  (0, d.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  t.strErrorMsg;
              a.token.reason || k(s), console.error(s);
            }
          };
        return m
          ? (0, n.jsx)(C.o0, {
              strDescription: "",
              strTitle: (0, d.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: e.closeModal,
              bAlertDialog: !0,
              children: (0, n.jsxs)("div", {
                className: T().FlexColumnContainer,
                children: [
                  (0, n.jsx)("div", {
                    children: (0, d.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: z().Container,
                    children: [
                      0 == (null == U ? void 0 : U.length)
                        ? (0, n.jsx)(x.t, { position: "center" })
                        : (0, n.jsx)("div", { children: U }),
                      Boolean(O) &&
                        (0, n.jsx)("a", {
                          href:
                            S.TS.COMMUNITY_BASE_URL +
                            "profiles/" +
                            b.ConvertTo64BitString() +
                            "/home",
                          target: S.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, d.we)(
                            "#EventDisplay_Share_OpenActivityFeed",
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            })
          : (0, n.jsx)(C.o0, {
              strDescription: "",
              strTitle: (0, d.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: Q,
              strOKButtonText: (0, d.we)("#Button_Post"),
              children: (0, n.jsxs)("div", {
                className: T().FlexColumnContainer,
                children: [
                  (0, n.jsx)("div", {
                    children: (0, d.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, u.A)(z().Container, T().FlexColumnContainer),
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("img", {
                            className: z().SmallAvatar,
                            src: B,
                            "data-miniprofile": "s" + S.iA.steamid,
                          }),
                          (0, n.jsx)("div", {
                            className: (0, u.A)(T().FlexColumnContainer),
                            children: (0, n.jsx)(j.I, {
                              strPlaceholder: (0, d.we)(
                                "#EventDisplay_Share_OnMyStatus_Placeholder",
                              ),
                              fnGetCurText: () => D,
                              fnOnTextChange: (e) => E(e.currentTarget.value),
                              fnSetText: E,
                              emoticonStore: e.emoticonStore,
                              bSupportHTMLImport: !1,
                              showFormatHelp: "UserStatusPublished",
                              limitBBCode: r.iH,
                              classNameForTextArea: z().ShareDescription,
                              bEmbeddedInDialog: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: z().ShareLink,
                        children: (0, n.jsx)(y.Rh, {
                          linkWidgets: (0, g.rx)(),
                          children: (0, n.jsx)(I.Zn, {
                            text: s,
                            partnerEventStore: e.partnerEventStore,
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
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    96264: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
    },
    10886: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        s.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
