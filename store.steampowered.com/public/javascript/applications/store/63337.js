/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [63337],
    {
      54601: (_, e, M) => {
        M.d(e, { V: () => y });
        var s = M(7850),
          T = M(90626),
          j = M(18210),
          u = M(36707),
          w = M(95695),
          L = M.n(w),
          z = M(14256),
          t = M.n(z),
          n = M(71421),
          S = M(96715),
          l = M(19298);
        const y = (r) => {
          const c = T.createRef(),
            [x, d] = T.useState(""),
            C = T.createRef(),
            I = () => {
              const O = c.current?.ownerDocument.defaultView;
              c.current &&
                O &&
                O.navigator.clipboard
                  .writeText(c.current.value)
                  .then((a) => {
                    d((0, j.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((a) => {
                    d((0, j.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", a);
                  });
            };
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: (0, u.A)(L().FlexRowContainer, t().linkField),
                onClick: I,
                children: [
                  (0, s.jsx)("span", {
                    className: t().LinkInputLabel,
                    children: (0, j.we)(
                      r.labelOverride
                        ? r.labelOverride
                        : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, s.jsx)("input", {
                    className: t().LinkInput,
                    ref: c,
                    value: r.eventLink,
                    readOnly: !0,
                  }),
                  document.queryCommandSupported("copy") &&
                    (0, s.jsx)(l.Z, {
                      className: (0, u.A)(L().Button, L().Icon, t().LinkButton),
                      onActivate: I,
                      children: (0, s.jsx)(n.Gq, {
                        toolTipContent: (0, j.we)(
                          "#ToolTip_CopyLinkToClipboard",
                        ),
                        children: (0, s.jsx)("img", {
                          className: t().ClipboardIcon,
                          src: S.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: C,
                className: t().ClipboardText,
                children: x,
              }),
            ],
          });
        };
      },
      63337: (_, e, M) => {
        M.r(e), M.d(e, { default: () => U });
        var s = M(7850),
          T = M(90626),
          j = M(99412),
          u = M(19298),
          w = M(95695),
          L = M.n(w),
          z = M(47875),
          t = M(36707),
          n = M(18210),
          S = M(30096),
          l = M(3166),
          y = M(96264),
          r = M(10886),
          c = M(19654),
          x = M(3209),
          d = M(96538),
          C = M(71421),
          I = M(53107),
          O = M(14256),
          a = M.n(O),
          m = M(24806),
          P = M(21877),
          B = M(16412),
          v = M(54601),
          R = Object.defineProperty,
          Q = Object.getOwnPropertyDescriptor,
          p = (g, N, i, E) => {
            for (
              var D = E > 1 ? void 0 : E ? Q(N, i) : N, A = g.length - 1, o;
              A >= 0;
              A--
            )
              (o = g[A]) && (D = (E ? o(N, i, D) : o(D)) || D);
            return E && D && R(N, i, D), D;
          };
        class U extends T.Component {
          state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
          ShareOnSteamActivityFeed() {
            l.iA.logged_in
              ? this.setState({ bShareOnSteamDialog: !0 })
              : l.TS.IN_CLIENT
                ? console.log(
                    "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : this.setState({ bRequireLoginToShare: !0 });
          }
          render() {
            const {
              eventLink: N,
              sharePageUrls: i,
              appid: E,
              closeModal: D,
              emoticonStore: A,
              partnerEventStore: o,
            } = this.props;
            return this.state.bRequireLoginToShare
              ? (0, s.jsx)(d.o0, {
                  strTitle: (0, n.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, n.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, n.we)("#MobileLogin_SignIn"),
                  onCancel: this.props.closeModal,
                  onOK: () => (0, z.l)(),
                })
              : this.state.bShareOnSteamDialog
                ? (0, s.jsx)(P.J, {
                    eventLink: N,
                    appid: E,
                    emoticonStore: A,
                    partnerEventStore: o,
                    closeModal: D,
                  })
                : (0, s.jsx)(d.o0, {
                    strDescription: "",
                    strTitle: (0, n.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                    children: (0, s.jsx)(W, {
                      eventLink: N,
                      sharePageUrls: i,
                      fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                    }),
                  });
          }
        }
        p([S.oI], U.prototype, "ShareOnSteamActivityFeed", 1);
        const k = "l",
          W = (g) => {
            const {
                eventLink: N,
                sharePageUrls: i,
                fnShareOnSteamActivityFeed: E,
              } = g,
              D = (0, l.Y2)(),
              [A, o] = (0, T.useState)((0, j.sfN)(l.TS.LANGUAGE)),
              Y = (0, T.useMemo)(() => {
                const h = new URL(N);
                return h.searchParams.set(k, (0, j.LgB)(A)), h.href;
              }, [A, N]);
            return (0, s.jsxs)("div", {
              className: (0, t.A)(
                L().FlexColumnContainer,
                a().share_controls_ctn,
              ),
              children: [
                !D &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: a().ShareLanguagePicker,
                        children: [
                          (0, s.jsx)(B.JU, {
                            className: a().LanguageLabel,
                            children: (0, n.we)(
                              "#EventDisplay_Share_LanguageLabel",
                            ),
                          }),
                          (0, s.jsx)("div", {
                            children: (0, s.jsx)(m.Ng, {
                              selectedLang: A,
                              fnOnLanguageChanged: o,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, t.A)(
                          L().FlexRowContainer,
                          a().ShareButtonContainer,
                        ),
                        style: { flexWrap: "wrap" },
                        children: [
                          (0, s.jsx)(C.he, {
                            toolTipContent: (0, n.we)(
                              "#EventDisplay_Share_OnSteam",
                            ),
                            children: (0, s.jsxs)(u.Z, {
                              onClick: E,
                              className: (0, t.A)(
                                L().Button,
                                a().ShareBtn,
                                a().ShareSteamBtn,
                              ),
                              children: [
                                (0, s.jsx)("img", {
                                  className: a().SteamIcon,
                                  src: y.A,
                                }),
                                (0, s.jsx)("span", {
                                  style: { whiteSpace: "nowrap" },
                                  children: (0, n.we)(
                                    "#EventDisplay_Share_OnMyStatus",
                                  ),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(C.he, {
                            toolTipContent: (0, n.we)(
                              "#EventDisplay_Share_OnFaceBook",
                            ),
                            children: (0, s.jsx)(I.uU, {
                              href: i.strFacebookUrl,
                              className: a().ShareBtn,
                              children: (0, s.jsx)("img", {
                                className: (0, t.A)(L().Button),
                                src: r.A,
                              }),
                            }),
                          }),
                          (0, s.jsx)(C.he, {
                            toolTipContent: (0, n.we)(
                              "#EventDisplay_Share_OnTwitter",
                            ),
                            children: (0, s.jsx)(I.uU, {
                              href: i.strTwitterUrl,
                              className: a().ShareBtn,
                              children: (0, s.jsx)("img", {
                                className: (0, t.A)(L().Button),
                                src: x.A,
                              }),
                            }),
                          }),
                          (0, s.jsx)(C.he, {
                            toolTipContent: (0, n.we)(
                              "#EventDisplay_Share_OnReddit",
                            ),
                            children: (0, s.jsx)(I.uU, {
                              href: i.strRedditUrl,
                              className: a().ShareBtn,
                              children: (0, s.jsx)("img", {
                                className: (0, t.A)(L().Button),
                                src: c.A,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: L().Divider }),
                    ],
                  }),
                (0, s.jsx)(v.V, { eventLink: Y }),
              ],
            });
          };
      },
      96715: (_, e, M) => {
        M.d(e, { A: () => s });
        const s =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      96264: (_, e, M) => {
        M.d(e, { A: () => s });
        const s =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
      },
      10886: (_, e, M) => {
        M.d(e, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (_, e, M) => {
        M.d(e, { A: () => s });
        const s =
          M.p +
          "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (_, e, M) => {
        M.d(e, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
