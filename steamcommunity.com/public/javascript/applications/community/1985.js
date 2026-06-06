/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1985],
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
      s.d(t, { V: () => T });
      var n = s(7850),
        M = s(90626),
        i = s(61859),
        a = s(52038),
        r = s(95695),
        N = s.n(r),
        o = s(14256),
        c = s.n(o),
        l = s(32754),
        L = s(96715),
        j = s(76217);
      const T = (e) => {
        const t = M.createRef(),
          [s, r] = M.useState(""),
          o = M.createRef(),
          T = (e) => {
            t.current &&
              t.current.ownerDocument.defaultView.navigator.clipboard
                .writeText(t.current.value)
                .then((e) => {
                  r((0, i.we)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((e) => {
                  r((0, i.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", e);
                });
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: (0, a.A)(N().FlexRowContainer, c().linkField),
              onClick: T,
              children: [
                (0, n.jsx)("span", {
                  className: c().LinkInputLabel,
                  children: (0, i.we)(
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
                  (0, n.jsx)(j.Z, {
                    className: (0, a.A)(N().Button, N().Icon, c().LinkButton),
                    onActivate: T,
                    children: (0, n.jsx)(l.Gq, {
                      toolTipContent: (0, i.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, n.jsx)("img", {
                        className: c().ClipboardIcon,
                        src: L.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: o,
              className: c().ClipboardText,
              children: s,
            }),
          ],
        });
      };
    },
    61985: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => H });
      var n = s(34629),
        M = s(7850),
        i = s(90626),
        a = s(22837),
        r = s(76217),
        N = s(95695),
        o = s.n(N),
        c = s(82477),
        l = s(52038),
        L = s(61859),
        j = s(73745),
        T = s(78327);
      var u = s(10886),
        D = s(19654),
        d = s(3209),
        x = s(9154),
        w = s(32754),
        S = s(51272),
        y = s(14256),
        z = s.n(y),
        C = s(1909),
        I = s(41735),
        E = s.n(I),
        g = s(75844),
        h = s(79821),
        m = s(37085),
        p = s(56545),
        O = s(51006),
        v = s(17720),
        A = s(78619),
        k = s(9239),
        U = s(68797),
        b = s(22797),
        Q = s(5058),
        _ = s(86244),
        Y = s.n(_),
        B = s(41471);
      const Z = (0, g.PA)((e) => {
        const { appid: t, eventLink: s } = e,
          n = i.useRef(null),
          { data: a } = (0, B.js)(T.iA.steamid),
          [r, N] = i.useState(""),
          [c, j] = i.useState(!1),
          [u, D] = i.useState(""),
          [d, w] = i.useState(!1);
        i.useEffect(
          () => () =>
            n.current &&
            n.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const S = a ? a.avatar_url : null,
          y = v.b.InitFromAccountID(T.iA.accountid),
          z = async () => {
            var e, M;
            n.current &&
              n.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const i = E().CancelToken.source();
            (n.current = i.cancel), j(!0);
            let a = r;
            0 != a.trim().length && (a += "\n\n"), (a += s);
            const N =
              T.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              y.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (T.TS.IN_STEAMUI) {
                let e = p.w.Init(A.kVt);
                e.Body().set_appid(t), e.Body().set_status_text(a);
                let s = await A.xtC.PostStatusToFriends(
                  O.Vw.CMInterface.GetServiceTransport(),
                  e,
                );
                if (s.GetEResult() != m.R) {
                  const e =
                    (0, L.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    s.GetEResult();
                  return (
                    console.error(e, !i.token.reason),
                    void (i.token.reason || D(e))
                  );
                }
              } else {
                const s = new FormData();
                s.append("appid", "" + t),
                  s.append("status_text", a),
                  s.append("sessionid", T.TS.SESSIONID);
                const n = await E().post(N, s, { withCredentials: !0 });
                if (
                  200 != n.status ||
                  (null === (e = null == n ? void 0 : n.data) || void 0 === e
                    ? void 0
                    : e.success) != m.R
                ) {
                  const e =
                    (0, L.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    (null === (M = null == n ? void 0 : n.data) || void 0 === M
                      ? void 0
                      : M.message);
                  return console.error(e), void (i.token.reason || D(e));
                }
              }
              i.token.reason ||
                (w(!0), D((0, L.we)("#EventDisplay_Share_Success")));
            } catch (e) {
              const t = (0, U.H)(e),
                s =
                  (0, L.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  t.strErrorMsg;
              i.token.reason || D(s), console.error(s);
            }
          };
        return c
          ? (0, M.jsx)(x.o0, {
              strDescription: "",
              strTitle: (0, L.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: e.closeModal,
              bAlertDialog: !0,
              children: (0, M.jsxs)("div", {
                className: o().FlexColumnContainer,
                children: [
                  (0, M.jsx)("div", {
                    children: (0, L.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, M.jsxs)("div", {
                    className: Y().Container,
                    children: [
                      0 == (null == u ? void 0 : u.length)
                        ? (0, M.jsx)(b.t, { position: "center" })
                        : (0, M.jsx)("div", { children: u }),
                      Boolean(d) &&
                        (0, M.jsx)("a", {
                          href:
                            T.TS.COMMUNITY_BASE_URL +
                            "profiles/" +
                            y.ConvertTo64BitString() +
                            "/home",
                          target: T.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, L.we)(
                            "#EventDisplay_Share_OpenActivityFeed",
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            })
          : (0, M.jsx)(x.o0, {
              strDescription: "",
              strTitle: (0, L.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: z,
              strOKButtonText: (0, L.we)("#Button_Post"),
              children: (0, M.jsxs)("div", {
                className: o().FlexColumnContainer,
                children: [
                  (0, M.jsx)("div", {
                    children: (0, L.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, M.jsxs)("div", {
                    className: (0, l.A)(Y().Container, o().FlexColumnContainer),
                    children: [
                      (0, M.jsxs)("div", {
                        children: [
                          (0, M.jsx)("img", {
                            className: Y().SmallAvatar,
                            src: S,
                            "data-miniprofile": "s" + T.iA.steamid,
                          }),
                          (0, M.jsx)("div", {
                            className: (0, l.A)(o().FlexColumnContainer),
                            children: (0, M.jsx)(k.I, {
                              strPlaceholder: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus_Placeholder",
                              ),
                              fnGetCurText: () => r,
                              fnOnTextChange: (e) => N(e.currentTarget.value),
                              fnSetText: N,
                              emoticonStore: e.emoticonStore,
                              bSupportHTMLImport: !1,
                              showFormatHelp: "UserStatusPublished",
                              limitBBCode: h.iH,
                              classNameForTextArea: Y().ShareDescription,
                              bEmbeddedInDialog: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, M.jsx)("div", {
                        className: Y().ShareLink,
                        children: (0, M.jsx)(Q.fh, {
                          text: s,
                          event: null,
                          partnerEventStore: e.partnerEventStore,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
      });
      var G = s(68255),
        F = s(5618);
      class H extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShareOnSteamDialog: !1,
              bRequireLoginToShare: !1,
            });
        }
        ShareOnSteamActivityFeed() {
          T.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : T.TS.IN_CLIENT
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
            emoticonStore: i,
            partnerEventStore: a,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, M.jsx)(x.o0, {
                strTitle: (0, L.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, L.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, L.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, c.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, M.jsx)(Z, {
                  eventLink: e,
                  appid: s,
                  emoticonStore: i,
                  partnerEventStore: a,
                  closeModal: n,
                })
              : (0, M.jsx)(x.o0, {
                  strDescription: "",
                  strTitle: (0, L.we)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, M.jsx)(R, {
                    eventLink: e,
                    sharePageUrls: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, n.Cg)([j.oI], H.prototype, "ShareOnSteamActivityFeed", null);
      const R = (e) => {
        const {
            eventLink: t,
            sharePageUrls: s,
            fnShareOnSteamActivityFeed: n,
          } = e,
          N = (0, T.Y2)(),
          [c, j] = (0, i.useState)((0, a.sfN)(T.TS.LANGUAGE)),
          x = (0, i.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, a.LgB)(c)), e.href;
          }, [c, t]);
        return (0, M.jsxs)("div", {
          className: (0, l.A)(o().FlexColumnContainer, z().share_controls_ctn),
          children: [
            !N &&
              (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsxs)("div", {
                    className: z().ShareLanguagePicker,
                    children: [
                      (0, M.jsx)(G.JU, {
                        className: z().LanguageLabel,
                        children: (0, L.we)(
                          "#EventDisplay_Share_LanguageLabel",
                        ),
                      }),
                      (0, M.jsx)("div", {
                        children: (0, M.jsx)(C.Ng, {
                          selectedLang: c,
                          fnOnLanguageChanged: j,
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsxs)("div", {
                    className: (0, l.A)(
                      o().FlexRowContainer,
                      z().ShareButtonContainer,
                    ),
                    style: { flexWrap: "wrap" },
                    children: [
                      (0, M.jsx)(w.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnSteam",
                        ),
                        children: (0, M.jsxs)(r.Z, {
                          onClick: n,
                          className: (0, l.A)(
                            o().Button,
                            z().ShareBtn,
                            z().ShareSteamBtn,
                          ),
                          children: [
                            (0, M.jsx)("img", {
                              className: z().SteamIcon,
                              src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                            }),
                            (0, M.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)(w.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strFacebookUrl,
                          className: z().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(o().Button),
                            src: u.A,
                          }),
                        }),
                      }),
                      (0, M.jsx)(w.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strTwitterUrl,
                          className: z().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(o().Button),
                            src: d.A,
                          }),
                        }),
                      }),
                      (0, M.jsx)(w.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strRedditUrl,
                          className: z().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(o().Button),
                            src: D.A,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsx)("div", { className: o().Divider }),
                ],
              }),
            (0, M.jsx)(F.V, { eventLink: x }),
          ],
        });
      };
    },
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        s.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);
