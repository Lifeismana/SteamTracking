/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [95669],
  {
    5618: (e, s, M) => {
      M.d(s, { V: () => T });
      var t = M(7850),
        a = M(90626),
        n = M(61859),
        i = M(52038),
        N = M(95695),
        o = M.n(N),
        r = M(14256),
        l = M.n(r),
        j = M(32754),
        L = M(96715),
        c = M(76217);
      const T = (e) => {
        const s = a.createRef(),
          [M, N] = a.useState(""),
          r = a.createRef(),
          T = () => {
            const e = s.current?.ownerDocument.defaultView;
            s.current &&
              e &&
              e.navigator.clipboard
                .writeText(s.current.value)
                .then((e) => {
                  N((0, n.we)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((e) => {
                  N((0, n.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", e);
                });
          };
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: (0, i.A)(o().FlexRowContainer, l().linkField),
              onClick: T,
              children: [
                (0, t.jsx)("span", {
                  className: l().LinkInputLabel,
                  children: (0, n.we)(
                    e.labelOverride
                      ? e.labelOverride
                      : "#EventDisplay_Share_Link",
                  ),
                }),
                (0, t.jsx)("input", {
                  className: l().LinkInput,
                  ref: s,
                  value: e.eventLink,
                  readOnly: !0,
                }),
                document.queryCommandSupported("copy") &&
                  (0, t.jsx)(c.Z, {
                    className: (0, i.A)(o().Button, o().Icon, l().LinkButton),
                    onActivate: T,
                    children: (0, t.jsx)(j.Gq, {
                      toolTipContent: (0, n.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, t.jsx)("img", {
                        className: l().ClipboardIcon,
                        src: L.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, t.jsx)("div", {
              ref: r,
              className: l().ClipboardText,
              children: M,
            }),
          ],
        });
      };
    },
    94446: (e, s, M) => {
      M.r(s), M.d(s, { default: () => O });
      var t = M(34629),
        a = M(7850),
        n = M(90626),
        i = M(22837),
        N = M(76217),
        o = M(95695),
        r = M.n(o),
        l = M(71420),
        j = M(52038),
        L = M(61859),
        c = M(84933),
        T = M(78327),
        S = M(96264),
        D = M(10886),
        u = M(19654),
        w = M(3209),
        d = M(74568),
        x = M(32754),
        z = M(51272),
        g = M(14256),
        y = M.n(g),
        C = M(1909),
        h = M(73067),
        I = M(56283),
        E = M(5618);
      class O extends n.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
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
            sharePageUrls: s,
            appid: M,
            closeModal: t,
            emoticonStore: n,
            partnerEventStore: i,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, a.jsx)(d.o0, {
                strTitle: (0, L.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, L.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, L.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, l.l)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, a.jsx)(h.J, {
                  eventLink: e,
                  appid: M,
                  emoticonStore: n,
                  partnerEventStore: i,
                  closeModal: t,
                })
              : (0, a.jsx)(d.o0, {
                  strDescription: "",
                  strTitle: (0, L.we)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, a.jsx)(p, {
                    eventLink: e,
                    sharePageUrls: s,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, t.Cg)([c.oI], O.prototype, "ShareOnSteamActivityFeed", null);
      const p = (e) => {
        const {
            eventLink: s,
            sharePageUrls: M,
            fnShareOnSteamActivityFeed: t,
          } = e,
          o = (0, T.Y2)(),
          [l, c] = (0, n.useState)((0, i.sfN)(T.TS.LANGUAGE)),
          d = (0, n.useMemo)(() => {
            const e = new URL(s);
            return e.searchParams.set("l", (0, i.LgB)(l)), e.href;
          }, [l, s]);
        return (0, a.jsxs)("div", {
          className: (0, j.A)(r().FlexColumnContainer, y().share_controls_ctn),
          children: [
            !o &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: y().ShareLanguagePicker,
                    children: [
                      (0, a.jsx)(I.JU, {
                        className: y().LanguageLabel,
                        children: (0, L.we)(
                          "#EventDisplay_Share_LanguageLabel",
                        ),
                      }),
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(C.Ng, {
                          selectedLang: l,
                          fnOnLanguageChanged: c,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, j.A)(
                      r().FlexRowContainer,
                      y().ShareButtonContainer,
                    ),
                    style: { flexWrap: "wrap" },
                    children: [
                      (0, a.jsx)(x.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnSteam",
                        ),
                        children: (0, a.jsxs)(N.Z, {
                          onClick: t,
                          className: (0, j.A)(
                            r().Button,
                            y().ShareBtn,
                            y().ShareSteamBtn,
                          ),
                          children: [
                            (0, a.jsx)("img", {
                              className: y().SteamIcon,
                              src: S.A,
                            }),
                            (0, a.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(x.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, a.jsx)(z.uU, {
                          href: M.strFacebookUrl,
                          className: y().ShareBtn,
                          children: (0, a.jsx)("img", {
                            className: (0, j.A)(r().Button),
                            src: D.A,
                          }),
                        }),
                      }),
                      (0, a.jsx)(x.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, a.jsx)(z.uU, {
                          href: M.strTwitterUrl,
                          className: y().ShareBtn,
                          children: (0, a.jsx)("img", {
                            className: (0, j.A)(r().Button),
                            src: w.A,
                          }),
                        }),
                      }),
                      (0, a.jsx)(x.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, a.jsx)(z.uU, {
                          href: M.strRedditUrl,
                          className: y().ShareBtn,
                          children: (0, a.jsx)("img", {
                            className: (0, j.A)(r().Button),
                            src: u.A,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: r().Divider }),
                ],
              }),
            (0, a.jsx)(E.V, { eventLink: d }),
          ],
        });
      };
    },
    96264: (e, s, M) => {
      M.d(s, { A: () => t });
      const t =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
    },
  },
]);
