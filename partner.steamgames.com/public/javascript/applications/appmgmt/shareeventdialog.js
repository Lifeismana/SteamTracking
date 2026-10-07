/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [98656],
    {
      56741: (d, L, e) => {
        "use strict";
        e.r(L), e.d(L, { ShareEventDialogBody: () => at });
        var t = e(7850),
          I = e(99412),
          U = e(32093),
          y = e(19298),
          T = e(72609),
          O = e(89926),
          u = e(90626),
          z = e(58483),
          p = e(14256),
          n = e.n(p),
          B = e(24806),
          Q = e(95695),
          i = e.n(Q),
          C = e(1880),
          g = e(71421),
          x = e(53107),
          j = e(36707),
          s = e(18210),
          k = e(18099),
          F = e(96715);
        function Y(r) {
          const { eventLink: o, labelOverride: a } = r,
            M = u.useRef(null),
            [N, c] = u.useState(""),
            l = () => {
              const A = M.current?.ownerDocument.defaultView;
              !M.current ||
                !A ||
                A.navigator.clipboard
                  .writeText(M.current.value)
                  .then(() =>
                    c((0, s.we)("#EventDisplay_Share_CopiedToClipboard")),
                  )
                  .catch((S) => {
                    c((0, s.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", S);
                  });
            };
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("div", {
                className: (0, j.A)(i().FlexRowContainer, n().linkField),
                children: [
                  (0, t.jsx)("span", {
                    className: n().LinkInputLabel,
                    children: (0, s.we)(a ?? "#EventDisplay_Share_Link"),
                  }),
                  (0, t.jsx)("input", {
                    className: n().LinkInput,
                    ref: M,
                    value: o,
                    readOnly: !0,
                    onClick: l,
                  }),
                  (0, t.jsx)(y.Z, {
                    className: (0, j.A)(i().Button, i().Icon, n().LinkButton),
                    onActivate: l,
                    children: (0, t.jsx)(g.Gq, {
                      toolTipContent: (0, s.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, t.jsx)("img", {
                        className: n().ClipboardIcon,
                        src: F.A,
                        alt: (0, s.we)("#ToolTip_CopyLinkToClipboard"),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: n().ClipboardText, children: N }),
            ],
          });
        }
        var R = e(25518),
          m = e(72604),
          Z = e(35038),
          h = e(27386),
          P = e(51614),
          b = e(85528),
          f = e(76559),
          J = e(62092),
          G = e(98534),
          H = e(1683),
          V = e(85599),
          W = e(67705),
          K = e(29981),
          w = e.n(K);
        function X(r, o) {
          return r.trim().length
            ? r +
                `

` +
                o
            : o;
        }
        async function $(r, o, a) {
          if (T.TS.IN_STEAMUI) {
            const l = Z.w.Init(h.kVt);
            l.Body().set_appid(o), l.Body().set_status_text(a);
            const A = await h.xtC.PostStatusToFriends(
              b.Vw.CMInterface.GetServiceTransport(),
              l,
            );
            if (A.GetEResult() != m.R) throw new Error(String(A.GetEResult()));
            return;
          }
          const M = new FormData();
          M.append("appid", String(o ?? 0)),
            M.append("status_text", a),
            M.append("sessionid", (0, W.KC)());
          const N = await fetch(r + "ajaxpostuserstatus", {
            method: "POST",
            body: M,
            credentials: "include",
          });
          let c;
          try {
            c = N.ok ? await N.json() : void 0;
          } catch {
            c = void 0;
          }
          if (c?.success != m.R) throw new Error(c?.message ?? N.statusText);
        }
        function q(r) {
          const { appid: o, eventLink: a, emoticonStore: M, closeModal: N } = r,
            { data: c } = (0, J.js)(T.iA.steamid),
            [l, A] = u.useState(""),
            S =
              T.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              f.b.InitFromAccountID(T.iA.accountid).ConvertTo64BitString() +
              "/",
            D = (0, P.n)({ mutationFn: () => $(S, o, X(l, a)) });
          return D.isIdle
            ? (0, t.jsx)(C.o0, {
                strDescription: "",
                strTitle: (0, s.we)("#Button_Share"),
                onCancel: N,
                onOK: () => D.mutate(),
                strOKButtonText: (0, s.we)("#Button_Post"),
                children: (0, t.jsxs)("div", {
                  className: i().FlexColumnContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, s.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, j.A)(
                        w().Container,
                        i().FlexColumnContainer,
                      ),
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("img", {
                              className: w().SmallAvatar,
                              src: c?.avatar_url,
                              alt: "",
                              "data-miniprofile": "s" + T.iA.steamid,
                            }),
                            (0, t.jsx)("div", {
                              className: (0, j.A)(i().FlexColumnContainer),
                              children: (0, t.jsx)(G.I, {
                                strPlaceholder: (0, s.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => l,
                                fnOnTextChange: (E) => A(E.currentTarget.value),
                                fnSetText: A,
                                emoticonStore: M,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: R.iH,
                                classNameForTextArea: w().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: w().ShareLink,
                          children: (0, t.jsx)(H.Zn, { text: a }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, t.jsx)(C.o0, {
                strDescription: "",
                strTitle: (0, s.we)("#Button_Share"),
                onCancel: N,
                onOK: N,
                bAlertDialog: !0,
                children: (0, t.jsxs)("div", {
                  className: i().FlexColumnContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, s.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: w().Container,
                      children: [
                        D.isPending && (0, t.jsx)(V.t, { position: "center" }),
                        D.isSuccess &&
                          (0, t.jsx)("div", {
                            children: (0, s.we)("#EventDisplay_Share_Success"),
                          }),
                        D.isError &&
                          (0, t.jsx)("div", {
                            children:
                              (0, s.we)("#EventDisplay_Share_Failure") +
                              `

` +
                              D.error.message,
                          }),
                        D.isSuccess &&
                          (0, t.jsx)("a", {
                            href: S + "home",
                            target: T.TS.IN_CLIENT ? void 0 : "_blank",
                            rel: "noreferrer",
                            children: (0, s.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
        const _ =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
        var tt = e(10886),
          et = e(19654),
          st = e(3209);
        const nt = "l";
        function at(r) {
          const { emoticonStore: o, ...a } = r;
          return (0, t.jsx)(z.rq, {
            store: o,
            children: (0, t.jsx)(Mt, { ...a }),
          });
        }
        function Mt(r) {
          const { eventModel: o, strEventLink: a, closeModal: M } = r,
            N = (0, k.JP)(o),
            c = (0, z.LJ)(),
            [l, A] = u.useState(() => (0, I.sfN)(T.TS.LANGUAGE)),
            [S, D] = u.useState(!1),
            { elDialogElement: E, fnShowLogonDialog: it } = (0, O.l)(
              (0, s.we)("#EventDisplay_Share_NotLoggedIn_Description"),
            ),
            ot = u.useMemo(() => {
              if (!a) return "";
              const v = new URL(a);
              return v.searchParams.set(nt, (0, I.LgB)(l)), v.href;
            }, [l, a]),
            Nt = T.TS.EREALM === U.TU.k_ESteamRealmChina,
            lt = () => {
              T.iA.logged_in ? D(!0) : it();
            };
          return S
            ? (0, t.jsx)(q, {
                eventLink: a,
                appid: o.appid,
                emoticonStore: c,
                closeModal: M,
              })
            : (0, t.jsxs)(C.o0, {
                strDescription: "",
                strTitle: (0, s.we)("#Button_Share"),
                onCancel: M,
                onOK: M,
                bAlertDialog: !0,
                modalClassName: "EventDisplay_Share_Dialog",
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, j.A)(
                      i().FlexColumnContainer,
                      n().share_controls_ctn,
                    ),
                    children: [
                      !Nt &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsxs)("div", {
                              className: n().ShareLanguagePicker,
                              children: [
                                (0, t.jsx)("div", {
                                  className: n().LanguageLabel,
                                  children: (0, s.we)(
                                    "#EventDisplay_Share_LanguageLabel",
                                  ),
                                }),
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)(B.Ng, {
                                    selectedLang: l,
                                    fnOnLanguageChanged: A,
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: (0, j.A)(
                                i().FlexRowContainer,
                                n().ShareButtonContainer,
                              ),
                              style: { flexWrap: "wrap" },
                              children: [
                                (0, t.jsx)(g.he, {
                                  toolTipContent: (0, s.we)(
                                    "#EventDisplay_Share_OnSteam",
                                  ),
                                  children: (0, t.jsxs)(y.Z, {
                                    onClick: lt,
                                    className: (0, j.A)(
                                      i().Button,
                                      n().ShareBtn,
                                      n().ShareSteamBtn,
                                    ),
                                    children: [
                                      (0, t.jsx)("img", {
                                        className: n().SteamIcon,
                                        src: _,
                                        alt: (0, s.we)(
                                          "#EventDisplay_Share_OnSteam",
                                        ),
                                      }),
                                      (0, t.jsx)("span", {
                                        style: { whiteSpace: "nowrap" },
                                        children: (0, s.we)(
                                          "#EventDisplay_Share_OnMyStatus",
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(g.he, {
                                  toolTipContent: (0, s.we)(
                                    "#EventDisplay_Share_OnFaceBook",
                                  ),
                                  children: (0, t.jsx)(x.uU, {
                                    href: N.strFacebookUrl,
                                    className: n().ShareBtn,
                                    children: (0, t.jsx)("img", {
                                      className: (0, j.A)(i().Button),
                                      src: tt.A,
                                      alt: (0, s.we)(
                                        "#EventDisplay_Share_OnFaceBook",
                                      ),
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(g.he, {
                                  toolTipContent: (0, s.we)(
                                    "#EventDisplay_Share_OnTwitter",
                                  ),
                                  children: (0, t.jsx)(x.uU, {
                                    href: N.strTwitterUrl,
                                    className: n().ShareBtn,
                                    children: (0, t.jsx)("img", {
                                      className: (0, j.A)(i().Button),
                                      src: st.A,
                                      alt: (0, s.we)(
                                        "#EventDisplay_Share_OnTwitter",
                                      ),
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(g.he, {
                                  toolTipContent: (0, s.we)(
                                    "#EventDisplay_Share_OnReddit",
                                  ),
                                  children: (0, t.jsx)(x.uU, {
                                    href: N.strRedditUrl,
                                    className: n().ShareBtn,
                                    children: (0, t.jsx)("img", {
                                      className: (0, j.A)(i().Button),
                                      src: et.A,
                                      alt: (0, s.we)(
                                        "#EventDisplay_Share_OnReddit",
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", { className: i().Divider }),
                          ],
                        }),
                      (0, t.jsx)(Y, { eventLink: ot }),
                    ],
                  }),
                  E,
                ],
              });
        }
      },
      29981: (d) => {
        d.exports = {
          Container: "_340f4eUQ6g1wEP6XkvOi2m",
          SmallAvatar: "ZcSEHEBy6UFM8ApdYw48V",
          ShareDescription: "tGyGdizK9jd1VLqtQkToE",
          ShareLink: "_2hGcij8WDcw-rJXIjWEBu",
        };
      },
      96715: (d, L, e) => {
        "use strict";
        e.d(L, { A: () => t });
        const t =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (d, L, e) => {
        "use strict";
        e.d(L, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (d, L, e) => {
        "use strict";
        e.d(L, { A: () => t });
        const t =
          e.p +
          "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (d, L, e) => {
        "use strict";
        e.d(L, { A: () => t });
        const t =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
