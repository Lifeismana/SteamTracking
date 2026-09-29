/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8656],
  {
    29981: (e) => {
      e.exports = {
        Container: "_340f4eUQ6g1wEP6XkvOi2m",
        SmallAvatar: "ZcSEHEBy6UFM8ApdYw48V",
        ShareDescription: "tGyGdizK9jd1VLqtQkToE",
        ShareLink: "_2hGcij8WDcw-rJXIjWEBu",
      };
    },
    87547: (e, M, s) => {
      "use strict";
      s.r(M), s.d(M, { ShareEventDialogBody: () => H });
      var t = s(7850),
        i = s(22837),
        n = s(2160),
        a = s(76217),
        N = s(66418),
        c = s(84547),
        L = s(90626),
        j = s(65606),
        l = s(14256),
        o = s.n(l),
        A = s(1909),
        r = s(95695),
        D = s.n(r),
        T = s(78395),
        w = s(32754),
        u = s(51272),
        d = s(52038),
        x = s(61859),
        I = s(71509),
        C = s(96715);
      function S(e) {
        const { eventLink: M, labelOverride: s } = e,
          i = L.useRef(null),
          [n, N] = L.useState(""),
          c = () => {
            const e = i.current?.ownerDocument.defaultView;
            i.current &&
              e &&
              e.navigator.clipboard
                .writeText(i.current.value)
                .then(() =>
                  N((0, x.we)("#EventDisplay_Share_CopiedToClipboard")),
                )
                .catch((e) => {
                  N((0, x.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", e);
                });
          };
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: (0, d.A)(D().FlexRowContainer, o().linkField),
              children: [
                (0, t.jsx)("span", {
                  className: o().LinkInputLabel,
                  children: (0, x.we)(s ?? "#EventDisplay_Share_Link"),
                }),
                (0, t.jsx)("input", {
                  className: o().LinkInput,
                  ref: i,
                  value: M,
                  readOnly: !0,
                  onClick: c,
                }),
                (0, t.jsx)(a.Z, {
                  className: (0, d.A)(D().Button, D().Icon, o().LinkButton),
                  onActivate: c,
                  children: (0, t.jsx)(w.Gq, {
                    toolTipContent: (0, x.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, t.jsx)("img", {
                      className: o().ClipboardIcon,
                      src: C.A,
                      alt: (0, x.we)("#ToolTip_CopyLinkToClipboard"),
                    }),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", { className: o().ClipboardText, children: n }),
          ],
        });
      }
      var y = s(79821),
        E = s(37085),
        z = s(56545),
        g = s(42457),
        m = s(51614),
        h = s(51006),
        U = s(17720),
        k = s(44419),
        p = s(83309),
        O = s(28958),
        B = s(22797),
        Q = s(24484),
        v = s(29981),
        b = s.n(v);
      function Y(e) {
        const { appid: M, eventLink: s, emoticonStore: i, closeModal: n } = e,
          { data: a } = (0, k.js)(N.iA.steamid),
          [c, j] = L.useState(""),
          l =
            N.TS.COMMUNITY_BASE_URL +
            "profiles/" +
            U.b.InitFromAccountID(N.iA.accountid).ConvertTo64BitString() +
            "/",
          o = (0, m.n)({
            mutationFn: () =>
              (async function (e, M, s) {
                if (N.TS.IN_STEAMUI) {
                  const e = z.w.Init(g.kVt);
                  e.Body().set_appid(M), e.Body().set_status_text(s);
                  const t = await g.xtC.PostStatusToFriends(
                    h.Vw.CMInterface.GetServiceTransport(),
                    e,
                  );
                  if (t.GetEResult() != E.R)
                    throw new Error(String(t.GetEResult()));
                  return;
                }
                const t = new FormData();
                t.append("appid", String(M ?? 0)),
                  t.append("status_text", s),
                  t.append("sessionid", (0, Q.KC)());
                const i = await fetch(e + "ajaxpostuserstatus", {
                  method: "POST",
                  body: t,
                  credentials: "include",
                });
                let n;
                try {
                  n = i.ok ? await i.json() : void 0;
                } catch {
                  n = void 0;
                }
                if (n?.success != E.R)
                  throw new Error(n?.message ?? i.statusText);
              })(
                l,
                M,
                (function (e, M) {
                  return e.trim().length ? e + "\n\n" + M : M;
                })(c, s),
              ),
          });
        return o.isIdle
          ? (0, t.jsx)(T.o0, {
              strDescription: "",
              strTitle: (0, x.we)("#Button_Share"),
              onCancel: n,
              onOK: () => o.mutate(),
              strOKButtonText: (0, x.we)("#Button_Post"),
              children: (0, t.jsxs)("div", {
                className: D().FlexColumnContainer,
                children: [
                  (0, t.jsx)("div", {
                    children: (0, x.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, d.A)(b().Container, D().FlexColumnContainer),
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("img", {
                            className: b().SmallAvatar,
                            src: a?.avatar_url,
                            alt: "",
                            "data-miniprofile": "s" + N.iA.steamid,
                          }),
                          (0, t.jsx)("div", {
                            className: (0, d.A)(D().FlexColumnContainer),
                            children: (0, t.jsx)(p.I, {
                              strPlaceholder: (0, x.we)(
                                "#EventDisplay_Share_OnMyStatus_Placeholder",
                              ),
                              fnGetCurText: () => c,
                              fnOnTextChange: (e) => j(e.currentTarget.value),
                              fnSetText: j,
                              emoticonStore: i,
                              bSupportHTMLImport: !1,
                              showFormatHelp: "UserStatusPublished",
                              limitBBCode: y.iH,
                              classNameForTextArea: b().ShareDescription,
                              bEmbeddedInDialog: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: b().ShareLink,
                        children: (0, t.jsx)(O.Zn, { text: s }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, t.jsx)(T.o0, {
              strDescription: "",
              strTitle: (0, x.we)("#Button_Share"),
              onCancel: n,
              onOK: n,
              bAlertDialog: !0,
              children: (0, t.jsxs)("div", {
                className: D().FlexColumnContainer,
                children: [
                  (0, t.jsx)("div", {
                    children: (0, x.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: b().Container,
                    children: [
                      o.isPending && (0, t.jsx)(B.t, { position: "center" }),
                      o.isSuccess &&
                        (0, t.jsx)("div", {
                          children: (0, x.we)("#EventDisplay_Share_Success"),
                        }),
                      o.isError &&
                        (0, t.jsx)("div", {
                          children:
                            (0, x.we)("#EventDisplay_Share_Failure") +
                            "\n\n" +
                            o.error.message,
                        }),
                      o.isSuccess &&
                        (0, t.jsx)("a", {
                          href: l + "home",
                          target: N.TS.IN_CLIENT ? void 0 : "_blank",
                          rel: "noreferrer",
                          children: (0, x.we)(
                            "#EventDisplay_Share_OpenActivityFeed",
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      const Z =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
      var F = s(10886),
        J = s(19654),
        G = s(3209);
      const R = "l";
      function H(e) {
        const { emoticonStore: M, ...s } = e;
        return (0, t.jsx)(j.rq, {
          store: M,
          children: (0, t.jsx)(P, { ...s }),
        });
      }
      function P(e) {
        const { eventModel: M, strEventLink: s, closeModal: l } = e,
          r = (0, I.JP)(M),
          C = (0, j.LJ)(),
          [y, E] = L.useState(() => (0, i.sfN)(N.TS.LANGUAGE)),
          [z, g] = L.useState(!1),
          { elDialogElement: m, fnShowLogonDialog: h } = (0, c.l)(
            (0, x.we)("#EventDisplay_Share_NotLoggedIn_Description"),
          ),
          U = L.useMemo(() => {
            if (!s) return "";
            const e = new URL(s);
            return e.searchParams.set(R, (0, i.LgB)(y)), e.href;
          }, [y, s]),
          k = N.TS.EREALM === n.TU.k_ESteamRealmChina;
        return z
          ? (0, t.jsx)(Y, {
              eventLink: s,
              appid: M.appid,
              emoticonStore: C,
              closeModal: l,
            })
          : (0, t.jsxs)(T.o0, {
              strDescription: "",
              strTitle: (0, x.we)("#Button_Share"),
              onCancel: l,
              onOK: l,
              bAlertDialog: !0,
              modalClassName: "EventDisplay_Share_Dialog",
              children: [
                (0, t.jsxs)("div", {
                  className: (0, d.A)(
                    D().FlexColumnContainer,
                    o().share_controls_ctn,
                  ),
                  children: [
                    !k &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)("div", {
                            className: o().ShareLanguagePicker,
                            children: [
                              (0, t.jsx)("div", {
                                className: o().LanguageLabel,
                                children: (0, x.we)(
                                  "#EventDisplay_Share_LanguageLabel",
                                ),
                              }),
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)(A.Ng, {
                                  selectedLang: y,
                                  fnOnLanguageChanged: E,
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, d.A)(
                              D().FlexRowContainer,
                              o().ShareButtonContainer,
                            ),
                            style: { flexWrap: "wrap" },
                            children: [
                              (0, t.jsx)(w.he, {
                                toolTipContent: (0, x.we)(
                                  "#EventDisplay_Share_OnSteam",
                                ),
                                children: (0, t.jsxs)(a.Z, {
                                  onClick: () => {
                                    N.iA.logged_in ? g(!0) : h();
                                  },
                                  className: (0, d.A)(
                                    D().Button,
                                    o().ShareBtn,
                                    o().ShareSteamBtn,
                                  ),
                                  children: [
                                    (0, t.jsx)("img", {
                                      className: o().SteamIcon,
                                      src: Z,
                                      alt: (0, x.we)(
                                        "#EventDisplay_Share_OnSteam",
                                      ),
                                    }),
                                    (0, t.jsx)("span", {
                                      style: { whiteSpace: "nowrap" },
                                      children: (0, x.we)(
                                        "#EventDisplay_Share_OnMyStatus",
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)(w.he, {
                                toolTipContent: (0, x.we)(
                                  "#EventDisplay_Share_OnFaceBook",
                                ),
                                children: (0, t.jsx)(u.uU, {
                                  href: r.strFacebookUrl,
                                  className: o().ShareBtn,
                                  children: (0, t.jsx)("img", {
                                    className: (0, d.A)(D().Button),
                                    src: F.A,
                                    alt: (0, x.we)(
                                      "#EventDisplay_Share_OnFaceBook",
                                    ),
                                  }),
                                }),
                              }),
                              (0, t.jsx)(w.he, {
                                toolTipContent: (0, x.we)(
                                  "#EventDisplay_Share_OnTwitter",
                                ),
                                children: (0, t.jsx)(u.uU, {
                                  href: r.strTwitterUrl,
                                  className: o().ShareBtn,
                                  children: (0, t.jsx)("img", {
                                    className: (0, d.A)(D().Button),
                                    src: G.A,
                                    alt: (0, x.we)(
                                      "#EventDisplay_Share_OnTwitter",
                                    ),
                                  }),
                                }),
                              }),
                              (0, t.jsx)(w.he, {
                                toolTipContent: (0, x.we)(
                                  "#EventDisplay_Share_OnReddit",
                                ),
                                children: (0, t.jsx)(u.uU, {
                                  href: r.strRedditUrl,
                                  className: o().ShareBtn,
                                  children: (0, t.jsx)("img", {
                                    className: (0, d.A)(D().Button),
                                    src: J.A,
                                    alt: (0, x.we)(
                                      "#EventDisplay_Share_OnReddit",
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", { className: D().Divider }),
                        ],
                      }),
                    (0, t.jsx)(S, { eventLink: U }),
                  ],
                }),
                m,
              ],
            });
      }
    },
    96715: (e, M, s) => {
      "use strict";
      s.d(M, { A: () => t });
      const t =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, M, s) => {
      "use strict";
      s.d(M, { A: () => t });
      const t =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, M, s) => {
      "use strict";
      s.d(M, { A: () => t });
      const t =
        s.p +
        "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, M, s) => {
      "use strict";
      s.d(M, { A: () => t });
      const t =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
